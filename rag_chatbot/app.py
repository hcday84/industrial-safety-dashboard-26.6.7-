import os

import streamlit as st
from dotenv import load_dotenv
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_core.documents import Document
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from pypdf import PdfReader

load_dotenv()

st.set_page_config(page_title="PDF RAG 챗봇", page_icon="📄", layout="wide")

MODEL_NAME = "gpt-4o-mini"

if "vectorstore" not in st.session_state:
    st.session_state.vectorstore = None
if "messages" not in st.session_state:
    st.session_state.messages = []
if "processed_files" not in st.session_state:
    st.session_state.processed_files = []


def load_pdfs_to_documents(uploaded_files) -> list[Document]:
    documents = []
    for uploaded_file in uploaded_files:
        reader = PdfReader(uploaded_file)
        for page_num, page in enumerate(reader.pages, start=1):
            text = page.extract_text() or ""
            if text.strip():
                documents.append(
                    Document(
                        page_content=text,
                        metadata={"source": uploaded_file.name, "page": page_num},
                    )
                )
    return documents


def build_vectorstore(documents: list[Document], chunk_size: int, chunk_overlap: int, api_key: str) -> FAISS:
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
    )
    chunks = splitter.split_documents(documents)
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small", api_key=api_key)
    return FAISS.from_documents(chunks, embeddings)


def format_context(docs: list[Document]) -> str:
    parts = []
    for i, doc in enumerate(docs, start=1):
        source = doc.metadata.get("source", "unknown")
        page = doc.metadata.get("page", "?")
        parts.append(f"[문서 {i} | {source} p.{page}]\n{doc.page_content}")
    return "\n\n".join(parts)


with st.sidebar:
    st.header("설정")

    api_key = st.text_input(
        "OpenAI API Key",
        value=os.getenv("OPENAI_API_KEY", ""),
        type="password",
        help="환경변수 OPENAI_API_KEY가 설정되어 있으면 자동으로 채워집니다.",
    )

    st.subheader("텍스트 분할 설정")
    chunk_size = st.slider("청크 길이 (chunk size)", min_value=200, max_value=4000, value=1000, step=100)
    chunk_overlap = st.slider("중복 길이 (chunk overlap)", min_value=0, max_value=1000, value=150, step=50)
    top_k = st.slider("검색할 문서 조각 수 (top-k)", min_value=1, max_value=10, value=4)

    st.subheader("PDF 업로드")
    uploaded_files = st.file_uploader("PDF 파일을 업로드하세요", type=["pdf"], accept_multiple_files=True)

    if st.button("문서 처리", type="primary", use_container_width=True):
        if not api_key:
            st.error("OpenAI API Key를 입력해주세요.")
        elif not uploaded_files:
            st.error("PDF 파일을 하나 이상 업로드해주세요.")
        else:
            with st.spinner("PDF를 읽고 임베딩을 생성하는 중..."):
                docs = load_pdfs_to_documents(uploaded_files)
                if not docs:
                    st.error("PDF에서 텍스트를 추출하지 못했습니다.")
                else:
                    st.session_state.vectorstore = build_vectorstore(docs, chunk_size, chunk_overlap, api_key)
                    st.session_state.processed_files = [f.name for f in uploaded_files]
                    st.session_state.messages = []
            st.success(f"{len(st.session_state.processed_files)}개 파일 처리 완료")

    if st.session_state.processed_files:
        st.caption("처리된 파일:")
        for name in st.session_state.processed_files:
            st.caption(f"- {name}")

    if st.button("대화 초기화", use_container_width=True):
        st.session_state.messages = []
        st.rerun()

st.title("📄 PDF 기반 RAG 챗봇")
st.caption(f"모델: {MODEL_NAME} · OpenAI API 사용")

if st.session_state.vectorstore is None:
    st.info("왼쪽 사이드바에서 PDF를 업로드하고 '문서 처리' 버튼을 눌러주세요.")

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])
        if message["role"] == "assistant" and message.get("sources"):
            with st.expander("🔍 검색된 문서 보기"):
                for i, doc in enumerate(message["sources"], start=1):
                    st.markdown(f"**문서 {i} — {doc.metadata.get('source')} (p.{doc.metadata.get('page')})**")
                    st.text(doc.page_content[:500])
                    st.divider()

query = st.chat_input("PDF 내용에 대해 질문해보세요...")

if query:
    if st.session_state.vectorstore is None:
        st.error("먼저 PDF를 업로드하고 문서 처리를 진행해주세요.")
    elif not api_key:
        st.error("OpenAI API Key를 입력해주세요.")
    else:
        st.session_state.messages.append({"role": "user", "content": query})
        with st.chat_message("user"):
            st.markdown(query)

        retrieved_docs = st.session_state.vectorstore.similarity_search(query, k=top_k)
        context = format_context(retrieved_docs)

        system_prompt = (
            "당신은 업로드된 PDF 문서를 기반으로 답변하는 어시스턴트입니다. "
            "아래 제공된 문서 내용을 참고하여 질문에 답변하세요. "
            "문서에서 답을 찾을 수 없으면 모른다고 솔직히 답변하세요.\n\n"
            f"참고 문서:\n{context}"
        )

        llm = ChatOpenAI(model=MODEL_NAME, api_key=api_key, streaming=True)

        with st.chat_message("assistant"):
            stream = llm.stream(
                [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": query},
                ]
            )
            response = st.write_stream(chunk.content for chunk in stream)

            with st.expander("🔍 검색된 문서 보기"):
                for i, doc in enumerate(retrieved_docs, start=1):
                    st.markdown(f"**문서 {i} — {doc.metadata.get('source')} (p.{doc.metadata.get('page')})**")
                    st.text(doc.page_content[:500])
                    st.divider()

        st.session_state.messages.append(
            {"role": "assistant", "content": response, "sources": retrieved_docs}
        )
