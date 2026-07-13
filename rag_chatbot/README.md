# PDF RAG 챗봇

## 실행 방법

```bash
cd rag_chatbot
pip install -r requirements.txt
```

`.env.example`을 `.env`로 복사 후 `OPENAI_API_KEY` 입력 (또는 앱 사이드바에서 직접 입력 가능):

```bash
cp .env.example .env
```

실행:

```bash
streamlit run app.py
```

## 기능
- PDF 다중 업로드 → 텍스트 추출 → 청크 분할 → OpenAI 임베딩(FAISS 벡터스토어)
- 사이드바에서 청크 길이(chunk size), 중복 길이(chunk overlap), 검색 개수(top-k) 조절
- GPT-4o-mini로 답변 생성 (스트리밍)
- 답변마다 실제 검색된 문서 조각(파일명, 페이지, 내용)을 확인 가능
