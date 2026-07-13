# PDF RAG 챗봇 (HTML + Node.js)

## 실행 방법

```bash
cd rag_chatbot
npm install
```

`.env.example`을 `.env`로 복사 후 `OPENAI_API_KEY` 입력 (또는 브라우저 화면에서 직접 입력 가능):

```bash
cp .env.example .env
```

실행:

```bash
npm start
```

브라우저에서 `http://localhost:3000` 접속.

## 구조
- `server.js` — Express 백엔드. PDF 파싱(pdf-parse), 청크 분할, OpenAI 임베딩(text-embedding-3-small)으로 메모리 내 벡터 저장소 구성 + BM25 역색인 구성, 하이브리드 검색(RRF) 및 GPT-4o-mini 기반 리랭킹, GPT-4o-mini 스트리밍 응답 제공
- `public/` — 순수 HTML/CSS/JS 프론트엔드 (사이드바 설정 + 채팅 UI)

## 기능
- PDF 다중 업로드 → 텍스트 추출 → 청크 분할 → OpenAI 임베딩
- 청크 길이(chunk size), 중복 길이(chunk overlap), 검색 개수(top-k) 슬라이더로 조절
- GPT-4o-mini로 답변 생성 (스트리밍)
- 답변마다 "🔍 검색된 문서/웹 결과 보기" 토글로 실제 검색된 PDF 문서 및 웹 검색 결과(제목, URL, 내용, 검색 점수) 확인 가능
- 사이드바에서 Tavily API Key 입력 후 "웹 검색 결과 활용" 체크 시, 질문마다 Tavily 웹 검색 결과를 함께 참고하여 답변 (PDF 미업로드 상태에서도 웹 검색만으로 답변 가능)
- "하이브리드 서치 + 리랭커 사용" 체크 시 (기본 활성화): 벡터(임베딩) 검색과 BM25 키워드 검색 결과를 RRF(Reciprocal Rank Fusion)로 결합한 뒤, GPT-4o-mini가 질의와의 관련도를 0~10으로 재채점(rerank)하여 최종 top-k를 선정. 체크 해제 시 단순 벡터 유사도 검색만 사용

## 참고
- 세션(업로드한 문서의 벡터)은 서버 메모리에만 저장되며 서버 재시작 시 초기화됩니다.
- OpenAI API Key와 Tavily API Key는 서버에 저장되지 않고 요청마다 헤더로 전달되어 사용됩니다.
- Tavily API Key는 [tavily.com](https://tavily.com)에서 발급받을 수 있습니다.
