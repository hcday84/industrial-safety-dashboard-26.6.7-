# 기술수험서 올인원 대시보드 — 작업 정리 문서

> 최종 작성일: 2026-06-27

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **서비스명** | 기술수험서 올인원 대시보드 |
| **배포 URL** | https://industrial-safety-dashboard-26-6-7.vercel.app |
| **GitHub** | https://github.com/hcday84/industrial-safety-dashboard-26.6.7-.git |
| **로컬 경로** | `C:\Users\user\Desktop\industrial_safety_dashboard` |
| **브랜치** | `main` (auto-push 훅 — Edit/Write 후 자동 커밋·푸시) |
| **배포 환경** | Vercel (main 브랜치 push 감지 후 1~2분 내 자동 배포) |
| **총 커밋 수** | 235회 |

---

## 2. 파일 구성

### 주요 파일

| 파일 | 라인 수 | 역할 |
|------|---------|------|
| `app.js` | 18,760 | 자격증 데이터(263종+), 핵심 렌더링 로직, STATE 관리 |
| `books_data.js` | 1,277 | 교보문고 추천 수험서 정적 데이터 (REAL_BOOKS) |
| `style.css` | 3,194 | 전체 스타일 |
| `index.html` | — | 메인 진입점 |
| `sw.js` | — | 서비스워커 (CACHE_NAME: cert-dashboard-v7) |
| `inventory.html` | — | IT 기술수험서 절판·개정판 대시보드 (별도 페이지) |
| `inventory-app.js` | — | inventory 페이지 로직 |
| `inventory-styles.css` | — | inventory 페이지 스타일 |
| `jm-codes.js` | — | 자격증 종목코드 매핑 |
| `kuksiwon_api.js` | — | 국가자격 API 유틸 |

### API 서버리스 함수 (`api/`)

| 파일 | 역할 |
|------|------|
| `nl-book.js` | Aladin Open API 프록시 — 도서 표지 이미지 조회 (TTBKey: `ttbhcday841606001`) |
| `exam-schedule.js` | 국가공개API 시험일정 프록시 (공공데이터포털 `qualExamSchdList`) |
| `qnet-stats.js` | Q-Net 시험 통계 프록시 (응시·합격률) |
| `emqual-stats.js` | Q-Net 기능사 합격률 프록시 |
| `kyobo-rating.js` | 교보문고 평점 프록시 (현재 비활성화 — 410 반환) |

### 신규 자격증 데이터 파일

| 파일 | 내용 |
|------|------|
| `new_certs_heavy1/2.js` | 중장비 계열 자격증 |
| `new_certs_driving.js` | 운전 계열 자격증 |
| `new_certs_auto1/2.js` | 자동화·제어 계열 자격증 |
| `new_certs_misc1~4.js` | 기타 계열 자격증 |
| `new_certs_cad.js` | CAD 계열 자격증 |

---

## 3. 핵심 기능

### 3-1. 자격증 데이터 (app.js)
- `CERTIFICATIONS` 객체에 **263종+** 자격증 등록
- 각 자격증마다 시험정보, Q-Net 링크, 시험일정 연동, 합격률 데이터 포함

### 3-2. 추천 수험서 (books_data.js)
- `REAL_BOOKS` 객체에 **88개 자격증** 등록
- 자격증당 최대 10권 (베스트 5 + 추천 5)
- `imageUrl: null` → 런타임에 Aladin API 자동 조회

### 3-3. 이미지 처리 폴백 체인
```
1. Kyobo CDN (imageUrl: KB('상품코드'))
   ↓ 실패 시
2. Canvas 분산 검증
   ↓ 실패 시
3. Aladin Open API (api/nl-book.js 프록시)
   ↓ 실패 시
4. CSS 목업 카드 (텍스트만 표시)
```

### 3-4. 시험일정 연동
- 공공데이터포털 `getQualExamSchdList` API 사용
- `jm-codes.js`에서 자격증 → 종목코드 매핑
- 월별 시험 일정 목록: max-height 360px + overflow-y: auto (5개 후 스크롤)
- Vercel 배포 환경에서만 `/api/exam-schedule` 동작

### 3-5. 합격률 통계
- Q-Net `getTotExamList` API — 최근 5회차 응시·합격 합산 평균
- 기사/산업기사: `qnet-stats.js`, 기능사: `emqual-stats.js`

### 3-6. IT 기술수험서 인벤토리 (inventory.html)
- 절판·개정판 현황 별도 대시보드
- Excel 내보내기 지원 (SheetJS)
- 글래스모피즘 디자인 (Lucide 아이콘, Inter/Outfit 폰트)

---

## 4. books_data.js 등록 현황

### 등록 완료 (88개 자격증)

| 계열 | 자격증 목록 |
|------|------------|
| **안전** | 산업안전기사/산업기사/기술사, 건설안전기사/산업기사/기술사, 소방설비기사(전기/기계)/산업기사(전기/기계), 소방기술사, 소방시설관리사, 산업위생관리기사, 위험물기능사/산업기사, 비파괴검사기사, 품질경영기사, 대기환경기사, 수질환경기사 |
| **전기** | 전기기사/산업기사/기능사/기능장, 전기공사기사/산업기사/기능사, 전기응용기술사, 발송배전기술사 |
| **기계** | 일반기계기사, 기계기술사, 기계설계기사, 공조냉동기계기사/기능사, 승강기기사, 용접기사/기능사, 생산자동화기능사, 전산응용기계제도기능사 |
| **건설** | 토목기사/산업기사/기술사, 건축기사/산업기사/기술사, 실내건축기사, 조경기사/산업기사/기능사, 측량기능사, 측량및지형공간정보기사, 콘크리트기능사, 건설재료시험기능사, 건설기계기사 |
| **화공/환경** | 화공기사/기술사, 환경기사, 화학분석기사 |
| **가스** | 가스기사/기술사/산업기사/기능사/기능장 |
| **IT** | 정보처리기사, 정보보안기사/기술사, 빅데이터분석기사, SQLD, 정보관리기술사, 컴퓨터시스템응용기술사, 컴퓨터활용능력 1급/2급, ADsP |
| **의료/보건** | 간호사/간호조무사, 물리치료사, 임상병리사, 방사선사, 응급구조사 1급/2급, 치과위생사, 작업치료사, 요양보호사, 의무기록사, 보건교육사, 위생사, 영양사 |
| **자동차/건설기계** | 자동차정비기능사/산업기사, 지게차운전기능사, 굴착기운전기능사 |

### 미등록 (향후 추가 필요)

| 항목 | 비고 |
|------|------|
| 소방설비기능사 (전기/기계) | Aladin 검색 0건 — 키워드 재검토 필요 |
| SQLP | Aladin 검색 0건 |
| 정보처리기능사, 네트워크관리사, 리눅스마스터, 정보보안산업기사 | — |
| 자동차정비기사/기능장 | — |
| 수질환경산업기사, 대기환경산업기사, 환경산업기사 | — |
| 배관기능사/기사, 특수용접기능사 | — |
| 미용 계열, 식품 계열, 농림 계열, 항공 계열 | — |

---

## 5. 자동화 설정

### auto-push 훅
- `.claude/settings.json` PostToolUse (Edit | Write) 훅
- Claude가 파일 수정 시 자동으로 `git commit & push` 실행
- Vercel이 push를 감지해 1~2분 내 자동 배포

### 서비스워커 캐시
- CSS/JS 대규모 변경 시 `sw.js`의 `CACHE_NAME` 버전을 올려야 변경사항 적용

---

## 6. 개발 환경

| 항목 | 내용 |
|------|------|
| 로컬 서버 실행 | `serve.bat` 또는 `serve.ps1` |
| 외부 API 키 | 공공데이터포털: `688d62bca5f00144bd4be91139ca3297c2641d3c918f57e0a5e80ad59faece52` |
| Aladin TTB Key | `ttbhcday841606001` |
| Vercel 환경변수 | 동일 API 키 (`vercel.json` 또는 대시보드 설정) |

---

## 7. 주요 주의사항

1. **큰 파일 수정 전 Read 필수** — `app.js`처럼 18,000줄 파일은 Edit 전에 반드시 해당 부분을 Read해서 정확한 문자열 확인
2. **서비스워커 버전** — CSS/JS 대규모 변경 시 `sw.js` `CACHE_NAME` 버전 업
3. **시험일정 API** — 로컬에서는 동작하지 않음, Vercel 배포 환경 필요
4. **출판사 URL 추가 시** — WebSearch로 실제 URL 검증 후 추가 (존재하지 않는 URL 삽입 금지)
5. **이미지 없는 자격증** — Aladin 검색 0건 자격증은 CSS 목업 카드로 표시됨
