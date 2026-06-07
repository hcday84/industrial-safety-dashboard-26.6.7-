/* ==========================================
   멀티 자격증 올인원 대시보드 v2.0
   ========================================== */

// ============================================
// 1. 자격증 데이터베이스
// ============================================
const CERTIFICATIONS = {

  '산업안전산업기사': {
    name: '산업안전산업기사', icon: 'fa-helmet-safety', category: '안전관리',
    heroTitle: '2026년도 산업안전산업기사 합격 전략',
    heroDesc: '중대재해처벌법 강화로 건설 및 제조업 안전관리자 채용 의무 증가! 평균 합격률 40% 장벽을 깨는 과목별 정밀 분석 데이터를 대시보드에서 확인하세요.',
    passRateSummary: '필기 40.1% | 실기 42.4%',
    avgPassRate: '41.3%',
    passRates: [
      { year: 2020, written: 51.3, practical: 34.2 },
      { year: 2021, written: 48.2, practical: 43.0 },
      { year: 2022, written: 45.1, practical: 43.8 },
      { year: 2023, written: 44.5, practical: 46.9 },
      { year: 2024, written: 40.1, practical: 42.4 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.12 ~ 01.15', writtenExam: '01.30 ~ 03.03', writtenResult: '03.11',
        practicalApply: '03.23 ~ 03.26', practicalExam: '04.18 ~ 05.06', finalResult: '06.05 / 06.12' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '04.20 ~ 04.23', writtenExam: '05.09 ~ 05.29', writtenResult: '06.10',
        practicalApply: '06.22 ~ 06.25', practicalExam: '07.18 ~ 08.05', finalResult: '09.04 / 09.11' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '07.20 ~ 07.23', writtenExam: '08.07 ~ 09.01', writtenResult: '09.09',
        practicalApply: '09.21 ~ 09.28', practicalExam: '10.24 ~ 11.13', finalResult: '12.11 / 12.18' },
    ],
    milestones: [
      { label: '제1회 최종 발표', date: '2026-06-05' },
      { label: '제2회 필기 발표', date: '2026-06-10' },
      { label: '제2회 실기 접수', date: '2026-06-22' },
      { label: '제2회 실기 시험', date: '2026-07-18' },
      { label: '제2회 최종 발표', date: '2026-09-04' },
      { label: '제3회 필기 접수', date: '2026-07-20' },
      { label: '제3회 필기 시험', date: '2026-08-07' },
      { label: '제3회 필기 발표', date: '2026-09-09' },
      { label: '제3회 실기 접수', date: '2026-09-21' },
      { label: '제3회 실기 시험', date: '2026-10-24' },
      { label: '제3회 최종 발표', date: '2026-12-11' },
    ],
    subjects: [
      { title: '산업재해 예방 및 안전보건교육', tip: '법 조문 숫자(특별교육 시간 등)를 정확히 암기하는 것이 고득점 포인트. 기출 선지 OX 반복 학습이 가장 효과적.' },
      { title: '인간공학 및 위험성 평가·관리', tip: 'FTA, ETA 등 시스템 안전 분석기법과 결함수 분석법 계산 문제를 반드시 이해해야 과락을 면할 수 있습니다.' },
      { title: '기계·기구 및 설비 안전 관리', tip: '프레스, 크레인 등 위험 기계의 방호 장치 종류와 안전 거리 수치를 반드시 숙지하세요.' },
      { title: '전기 및 화학설비 안전 관리', tip: '전격 위험 방지대책(접지, 누전차단기)과 폭발성 물질 물리적 특성 위주로 요약 정리하여 반복 학습.' },
      { title: '건설공사 안전 관리', tip: '토공사, 비계 설치 기준 등. 실기 필답/작업형과도 직결되므로 가장 철저하게 공부해야 하는 과목.' },
    ],
    jobs: [
      { id: 'sj-1', company: '안전보건공단', title: '2026년도 신입직원 (안전보건 분야) 공개 채용', type: 'public', region: 'all', experience: 'new',
        requirements: ['산업안전산업기사 또는 건설안전산업기사 이상 자격 소지자 필수', '학력 및 연령 제한 없음', '공인어학성적 기준 점수 이상 획득자'],
        duties: '전국 중소 사업장 산업재해 예방 지도, 유해·위험기계 안전 검사, 사업장 안전진단 컨설팅 및 근로자 교육.',
        salary: '연봉 3,700만원 내외 (공단 내규)', benefits: '주 5일제, 유연근무제, 자녀학자금 지원, 복지카드', deadline: '2026-06-25', link: 'https://www.kosha.or.kr' },
      { id: 'sj-2', company: '현대건설', title: '전국 건설현장 안전관리 담당자 (PJT 계약직)', type: 'large', region: 'seoul', experience: 'exp',
        requirements: ['산업안전산업기사 또는 건설안전산업기사 자격 소지자 필수', '건설현장 안전관리 실무 경력 1년 이상 우대'],
        duties: '건설 공정상 위험 요인 발굴 및 예방 대책 수립, 일일 안전 교육 및 TBM 리드, 현장 근로자 안전 점검.',
        salary: '경력 협의 (약 4,500~5,500만원)', benefits: '경조사비 지원, 현장 귀향 여비, 4대보험', deadline: '2026-06-18', link: 'https://www.hdec.co.kr' },
      { id: 'sj-3', company: '삼성물산 건설부문', title: '대형 하이테크 현장 안전/소방 환경 관리자 모집', type: 'large', region: 'gong', experience: 'exp',
        requirements: ['산업안전산업기사 이상 필수', '안전 및 소방 관련 경력 3년 이상', 'ISO 45001 이해도 높은 자 우대'],
        duties: '반도체 공장 건설 현장 특수 위험 작업 안전 허가제 운영, KOSHA-MS 준수 여부 감독.',
        salary: '경력별 협의 (약 5,000~6,500만원)', benefits: '업계 최고 복리후생, 의료비 지원, 인센티브', deadline: '2026-06-30', link: 'https://www.samsungcnt.com' },
      { id: 'sj-4', company: 'CJ제일제당', title: '식품 생산 사업장 EHS (환경·안전·보건) 담당자', type: 'large', region: 'seoul', experience: 'any',
        requirements: ['산업안전산업기사 이상 필수', 'EHS 시스템 구축 경험자 우대', '대기/수질환경산업기사 추가 소지자 가점'],
        duties: '식품 제조 공정 기계 설비 위험성 평가, 밀폐공간 및 고온 설비 안전 규정 점검.',
        salary: '내규 적용 (약 4,000~4,800만원)', benefits: 'CJ그룹 복지, 사내 어린이집, 셔틀버스', deadline: '2026-06-20', link: 'https://www.cj.co.kr' },
      { id: 'sj-5', company: '한국토지주택공사', title: '지역본부 건설공사 안전점검 전문 계약직', type: 'public', region: 'chung', experience: 'exp',
        requirements: ['산업안전산업기사 취득 후 관련 경력 2년 이상 필수', '공공기관 현장 감독 업무 경험자 우대'],
        duties: 'LH 시행 건설 공사장 안전점검 지원, 시공사 안전관리계획서 이행 상태 교차 점검.',
        salary: '연봉 4,200만원 선', benefits: '공기업 맞춤형 복지포인트(웰페어), 명절 수당', deadline: '2026-06-12', link: 'https://www.lh.or.kr' },
      { id: 'sj-6', company: '세이프티원 안전진단', title: '제조업 사업장 안전보건 위탁 기술지도 컨설턴트', type: 'consult', region: 'gong', experience: 'any',
        requirements: ['산업안전산업기사 소지자 필수', '신입 지원 가능 (체계적 실무 교육 제공)', '운전면허 소지 필수'],
        duties: '대구/경북 관내 50인 미만 중소 제조업체 매월 기술지도 방문, 위험성평가표 작성 보좌.',
        salary: '연봉 3,300~3,800만원 (출장 수당·인센티브 별도)', benefits: '법인차 지원 또는 유류비 전액 실비', deadline: '2026-07-10', link: '#' },
      { id: 'sj-7', company: '대한산업안전협회', title: '하반기 채용연계형 인턴십 모집 (안전 진단/교육)', type: 'public', region: 'honam', experience: 'new',
        requirements: ['산업안전산업기사 이상 소지자 필수', '인턴십 3개월 후 평가를 통해 90% 이상 정규직 발령'],
        duties: '제조 및 건설 현장 법정 안전 검사 보조, 안전보건 관리책임자 대상 교육 강사 지원.',
        salary: '인턴 월 230만원 (정규직 전환 시 초임 3,800만원 수준)', benefits: '정기 하계 휴가 보장, 학자금 지원', deadline: '2026-07-05', link: 'https://www.safety.or.kr' },
      { id: 'sj-8', company: '한화솔루션', title: '여수공장 생산/환경안전(EHS) 신입 엔지니어', type: 'large', region: 'gong', experience: 'new',
        requirements: ['산업안전산업기사 또는 화공기사 자격 소지자', '공학 계열 전공자 필수', '토익 750점 이상'],
        duties: '화학물질 관리 및 유해화학물질 취급 안전성 평가, PSM 이행 기준 준수 상태 확인.',
        salary: '성과급 포함 연봉 약 5,000만원대 초반', benefits: '기숙사 무료, 의료비 전액, 자녀학자금 한도 없음', deadline: '2026-06-29', link: 'https://www.hanwhasolutions.com' },
      { id: 'sj-9', company: 'GS건설', title: '2026년도 하반기 신입 안전관리자 채용', type: 'large', region: 'seoul', experience: 'new',
        requirements: ['산업안전산업기사 또는 건설안전산업기사 자격 취득자', '건설 현장 근무 결격 사유 없는 자'],
        duties: '현장 정리 정돈 지휘, 재해 원인 분석, 안전 시설물 배치 상태 확인 및 시정조치.',
        salary: '신입 초봉 4,800만원 수준', benefits: '복지카드 연 200만원, 주택자금 저리 융자', deadline: '2026-06-15', link: 'https://www.gsenc.com' },
      { id: 'sj-10', company: '(주)대원안전기술', title: '중소 제조업 위험성평가 및 아웃소싱 관리 대리급', type: 'consult', region: 'seoul', experience: 'exp',
        requirements: ['산업안전산업기사 취득 후 제조업 안전관리 실무 경력 3년 이상', '중대재해 대응 매뉴얼 작성 유경험자 우대'],
        duties: '안산/시흥 지역 공단 내 위탁 제조업체 공정 개선 및 안전 설비 적정성 진단.',
        salary: '연봉 3,800~4,200만원', benefits: '주 5일 정시 퇴근 보장, 분기별 실적 보너스', deadline: '2026-06-14', link: '#' },
    ],
    books: [
      { id: 'sb-1', title: '2026 에듀윌 산업안전산업기사 필기 한권끝장', publisher: '에듀윌', rating: 9.8, reviews: 432, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg, #1a3a6b 0%, #2d5aa0 100%)', tags: ['베스트', '무료배송', '소득공제'] },
      { id: 'sb-2', title: '2026 산업안전산업기사 필기 과년도 기출 및 적중모의고사', publisher: '구민사', rating: 9.7, reviews: 280, originalPrice: 35000, price: 31500, discount: '10%', coverBg: 'linear-gradient(135deg, #2b4c7e 0%, #4a75b2 100%)', tags: ['추천', '소득공제'] },
      { id: 'sb-3', title: '2026 산업안전산업기사 실기 필답형 + 작업형 2주 완성', publisher: '성안당', rating: 9.6, reviews: 195, originalPrice: 33000, price: 29700, discount: '10%', coverBg: 'linear-gradient(135deg, #cc5a2b 0%, #e8865a 100%)', tags: ['실기대비', '무료배송'] },
      { id: 'sb-4', title: '2026 산업안전산업기사 실기 작업형 동영상 대비 집중 특강', publisher: '세화', rating: 9.5, reviews: 112, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg, #1f5e2b 0%, #3e9e4f 100%)', tags: ['이벤트', '인기'] },
    ],
    defaultTodos: [
      '1과목 산업재해 예방 및 안전보건교육 핵심 요약 1독',
      '2과목 인간공학 위험성 평가 계산 문제 공식 정리',
      '최근 5개년 필기 기출문제 오답 분석 및 개념 재정립',
      '실기 필답형 기출 문제집 서술형 답안지 작성 연습',
      '실기 작업형 기출 동영상 시청 및 안전 조치 요약',
    ],
  },

  '전기기사': {
    name: '전기기사', icon: 'fa-bolt', category: '전기·전자',
    heroTitle: '2026년도 전기기사 합격 전략',
    heroDesc: '에너지 전환 시대, ESG 경영 의무화로 전기 전문 인력 수요 폭증! 회로이론부터 전력공학까지 방대한 범위를 체계적으로 정복하는 전략을 확인하세요.',
    passRateSummary: '필기 37.2% | 실기 49.1%',
    avgPassRate: '43.2%',
    passRates: [
      { year: 2020, written: 40.1, practical: 55.2 },
      { year: 2021, written: 38.5, practical: 52.3 },
      { year: 2022, written: 36.8, practical: 50.7 },
      { year: 2023, written: 37.9, practical: 48.6 },
      { year: 2024, written: 37.2, practical: 49.1 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '02.16 ~ 03.03', writtenResult: '03.18',
        practicalApply: '03.31 ~ 04.03', practicalExam: '04.19 ~ 05.13', finalResult: '06.17 / 06.24' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '04.13 ~ 04.16', writtenExam: '05.25 ~ 06.16', writtenResult: '06.25',
        practicalApply: '07.07 ~ 07.10', practicalExam: '07.26 ~ 08.18', finalResult: '09.02 / 09.09' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '07.21 ~ 07.24', writtenExam: '09.07 ~ 09.29', writtenResult: '10.07',
        practicalApply: '10.20 ~ 10.23', practicalExam: '11.21 ~ 12.08', finalResult: '12.24' },
    ],
    milestones: [
      { label: '제2회 필기 발표', date: '2026-06-25' },
      { label: '제2회 실기 접수', date: '2026-07-07' },
      { label: '제2회 실기 시험', date: '2026-07-26' },
      { label: '제2회 최종 발표', date: '2026-09-02' },
      { label: '제3회 필기 접수', date: '2026-07-21' },
      { label: '제3회 필기 시험', date: '2026-09-07' },
      { label: '제3회 필기 발표', date: '2026-10-07' },
      { label: '제3회 실기 접수', date: '2026-10-20' },
      { label: '제3회 실기 시험', date: '2026-11-21' },
      { label: '제3회 최종 발표', date: '2026-12-24' },
    ],
    subjects: [
      { title: '전기자기학', tip: '전계·자계 기본 개념과 맥스웰 방정식 이해가 핵심. 계산 문제 비중이 높으므로 공식 암기보다 원리 이해 우선.' },
      { title: '전력공학', tip: '송전선로 특성, 고장 해석(3상 단락, 1선 지락) 계산 문제가 자주 출제. 퍼센트 임피던스(%Z) 개념 완벽 정리 필수.' },
      { title: '전기기기', tip: '변압기, 유도전동기, 동기기 특성 곡선과 등가 회로를 직접 그려보며 암기하면 효과적. 제어기기 파트도 소홀히 하지 마세요.' },
      { title: '회로이론', tip: 'RC/RL/RLC 회로 과도 현상과 페이저 계산이 핵심. 라플라스 변환보다 페이저를 활용한 풀이 연습을 집중적으로 하세요.' },
      { title: '전기설비기술기준', tip: '암기 과목이지만 최근 개정 내용 확인 필수. 기출 선지를 OX 형태로 반복 학습하는 것이 가장 효율적입니다.' },
    ],
    jobs: [
      { id: 'ej-1', company: '한국전력공사', title: '2026 하반기 신입 배전/변전 운영 직원 채용', type: 'public', region: 'all', experience: 'new',
        requirements: ['전기기사 자격 소지자 (취득 예정자 포함)', '전기공학 관련 학과 졸업자', '공인어학성적 기준 충족자'],
        duties: '배전선로 및 변전 설비 유지보수, 고장 복구 및 순시점검, 스마트그리드 인프라 구축 지원.',
        salary: '연봉 4,800만원 내외 (공단 내규)', benefits: '자녀학자금, 사택 제공, 복지카드', deadline: '2026-07-15', link: 'https://www.kepco.co.kr' },
      { id: 'ej-2', company: '삼성전자', title: '기흥/평택 사업장 전기 설비 유지보수 엔지니어', type: 'large', region: 'seoul', experience: 'exp',
        requirements: ['전기기사 이상 필수', '반도체 클린룸 설비 유지보수 경력 2년 이상 우대', '전기 CAD 활용 가능자'],
        duties: '반도체 공장 초고압 수변전 설비 운전·정비, 정전 사고 예방 및 비상 전원 시스템 관리.',
        salary: '경력 협의 (약 5,500~7,000만원)', benefits: '기숙사, 본인·가족 의료비 전액 지원', deadline: '2026-07-20', link: 'https://www.samsung.com' },
      { id: 'ej-3', company: '한국수력원자력', title: '원자력 발전소 전기직 정규직 채용', type: 'public', region: 'gong', experience: 'new',
        requirements: ['전기기사 또는 전기공사기사 이상 필수', '방사선 작업 종사자 교육 이수 가능자'],
        duties: '원전 내 전기 계통 설비 운전 및 유지보수, 계획 예방 정비(PM) 수행.',
        salary: '초봉 약 4,500만원 (성과급 별도)', benefits: '주거지원, 의료비 전액, 자녀교육지원', deadline: '2026-06-30', link: 'https://www.khnp.co.kr' },
      { id: 'ej-4', company: '현대엔지니어링', title: '해외 플랜트 전기공사 감독 (계약직)', type: 'large', region: 'seoul', experience: 'exp',
        requirements: ['전기기사 필수', '해외 플랜트 전기공사 감독 경력 3년 이상', '영어 의사소통 가능자'],
        duties: '해외 석유화학 플랜트 전기공사 품질·공정 관리, 전기 기자재 검수 및 시운전 지원.',
        salary: '해외 수당 포함 약 7,000만원 이상', benefits: '항공료, 숙소 제공, 해외 수당', deadline: '2026-07-31', link: 'https://www.hec.co.kr' },
      { id: 'ej-5', company: 'LS일렉트릭', title: '차단기/변압기 영업 기술 지원 사원', type: 'large', region: 'seoul', experience: 'any',
        requirements: ['전기기사 소지자 우대', '전기공학 관련 학과 졸업자', '기술 영업 의지가 있는 인재'],
        duties: '고압 차단기, 변압기 등 전력기기 기술 영업 지원, 고객사 현장 기술 상담 및 사양 제안.',
        salary: '연봉 3,800~4,500만원', benefits: '복지카드, 자기계발비, 성과급', deadline: '2026-08-10', link: 'https://www.ls-electric.com' },
    ],
    books: [
      { id: 'eb-1', title: '2026 전기기사 필기 한권끝장 (이론+기출)', publisher: '에듀윌', rating: 9.7, reviews: 521, originalPrice: 42000, price: 37800, discount: '10%', coverBg: 'linear-gradient(135deg, #1a3a6b 0%, #3b6cb5 100%)', tags: ['베스트', '무료배송'] },
      { id: 'eb-2', title: '2026 전기기사 과년도 기출 10개년 총정리', publisher: '구민사', rating: 9.6, reviews: 312, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', tags: ['추천', '소득공제'] },
      { id: 'eb-3', title: '전기기사 실기 완전정복 (작업형+필답형)', publisher: '성안당', rating: 9.5, reviews: 228, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg, #b45309 0%, #d97706 100%)', tags: ['실기대비', '무료배송'] },
      { id: 'eb-4', title: '2026 전기기사 단기완성 30일 플래너', publisher: '세화', rating: 9.4, reviews: 145, originalPrice: 29000, price: 26100, discount: '10%', coverBg: 'linear-gradient(135deg, #065f46 0%, #059669 100%)', tags: ['이벤트', '인기'] },
    ],
    defaultTodos: [
      '전기자기학 핵심 공식 (가우스 법칙, 앙페르 법칙) 정리 및 암기',
      '회로이론 RLC 직·병렬 회로 계산 문제 20문항 풀기',
      '전력공학 단락 전류 계산 문제 풀이 방법 숙지',
      '전기기기 변압기 등가 회로 직접 그려보기',
      '최근 5개년 기출문제 1회분 실전 시험 조건으로 풀기',
    ],
  },

  '소방설비기사': {
    name: '소방설비기사', icon: 'fa-fire-extinguisher', category: '소방·안전',
    heroTitle: '2026년도 소방설비기사 합격 전략',
    heroDesc: '건축법 강화 및 소방시설 의무 설치 확대로 소방 전문 인력 수요 지속 증가! 기계/전기 분야를 아우르는 소방 전문가로 거듭나세요.',
    passRateSummary: '필기 29.8% | 실기 38.5%',
    avgPassRate: '34.2%',
    passRates: [
      { year: 2020, written: 32.1, practical: 41.2 },
      { year: 2021, written: 31.5, practical: 40.3 },
      { year: 2022, written: 30.8, practical: 39.7 },
      { year: 2023, written: 29.3, practical: 37.9 },
      { year: 2024, written: 29.8, practical: 38.5 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.12 ~ 01.15', writtenExam: '02.02 ~ 02.25', writtenResult: '03.11',
        practicalApply: '03.23 ~ 03.26', practicalExam: '04.12 ~ 04.30', finalResult: '06.05 / 06.12' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '04.20 ~ 04.23', writtenExam: '05.18 ~ 06.08', writtenResult: '06.18',
        practicalApply: '06.29 ~ 07.02', practicalExam: '07.20 ~ 08.10', finalResult: '09.11 / 09.18' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '07.27 ~ 07.30', writtenExam: '08.17 ~ 09.08', writtenResult: '09.16',
        practicalApply: '09.28 ~ 10.01', practicalExam: '10.19 ~ 11.06', finalResult: '12.04 / 12.11' },
    ],
    milestones: [
      { label: '제2회 필기 발표', date: '2026-06-18' },
      { label: '제2회 실기 접수', date: '2026-06-29' },
      { label: '제2회 실기 시험', date: '2026-07-20' },
      { label: '제2회 최종 발표', date: '2026-09-11' },
      { label: '제3회 필기 접수', date: '2026-07-27' },
      { label: '제3회 필기 시험', date: '2026-08-17' },
      { label: '제3회 필기 발표', date: '2026-09-16' },
      { label: '제3회 실기 접수', date: '2026-09-28' },
      { label: '제3회 실기 시험', date: '2026-10-19' },
      { label: '제3회 최종 발표', date: '2026-12-04' },
    ],
    subjects: [
      { title: '소방원론', tip: '화재 종류(A~D급), 연소 이론, 소화 원리를 체계적으로 정리. 각 연소 형태별 특징을 표로 비교하여 암기하세요.' },
      { title: '소방관계법규', tip: '소방시설 설치기준 수치를 정확히 암기. 최근 개정 내용 위주로 반복 학습이 필수입니다.' },
      { title: '소방기계 시설의 구조 및 원리', tip: '스프링클러, 옥내소화전, 할론 설비 등 각 시스템의 작동 원리와 구성 요소를 플로우차트로 정리하세요.' },
      { title: '소방전기 시설의 구조 및 원리', tip: '자동화재탐지설비 감지기 종류·설치 기준과 비상조명, 유도등 기준이 빈출. 수치 기준 암기가 핵심.' },
      { title: '소방 관련 설비 설계·실무', tip: '실기 시험과 직결. 배관 설계 계산(마찰손실 등)과 소화설비 용량 산정 공식을 반드시 손으로 익혀야 합니다.' },
    ],
    jobs: [
      { id: 'fj-1', company: '롯데건설', title: '신축 공동주택 소방공사 관리 감리원', type: 'large', region: 'seoul', experience: 'exp',
        requirements: ['소방설비기사 (기계/전기 중 1종 이상) 필수', '소방 감리 경력 2년 이상 우대'],
        duties: '신축 아파트 단지 소방 설비 공사 품질 관리 및 감리, 소방완공검사 준비 서류 작성.',
        salary: '연봉 4,200~5,500만원', benefits: '4대보험, 명절 상여금, 건강검진', deadline: '2026-07-25', link: 'https://www.lotteenc.com' },
      { id: 'fj-2', company: '한국소방산업기술원', title: '소방용품 성능 시험 연구원 (계약직)', type: 'public', region: 'chung', experience: 'any',
        requirements: ['소방설비기사 이상 소지자', '소방 관련 학과 졸업자 우대'],
        duties: '소방용품(감지기, 소화기 등) KFI 인증 시험, 성능 검사 및 데이터 분석.',
        salary: '월 270만원 (계약직)', benefits: '식비·교통비 별도 지원, 정규직 전환 기회', deadline: '2026-07-10', link: 'https://www.kfi.or.kr' },
      { id: 'fj-3', company: '세이프가드 소방설비', title: '소방시설 유지보수 및 점검 담당자', type: 'consult', region: 'gong', experience: 'any',
        requirements: ['소방설비기사 소지자 (신입 지원 가능)', '운전면허 보유자'],
        duties: '사업장 소방시설 정기 점검 및 법정 서류 작성, 불량 설비 교체 공사 보조.',
        salary: '연봉 3,200~3,800만원 (출장 수당 별도)', benefits: '법인차 지원, 점심 식사비', deadline: '2026-08-15', link: '#' },
      { id: 'fj-4', company: '서울시설공단', title: '공공시설 소방시설 관리직', type: 'public', region: 'seoul', experience: 'exp',
        requirements: ['소방설비기사 필수', '공공시설 소방 관리 경력 2년 이상', '소방안전관리자 선임 가능자'],
        duties: '서울시 공공시설물 소방시설 유지관리 및 자체 점검, 소방훈련 계획 및 실시.',
        salary: '연봉 4,000만원 선', benefits: '공단 선택적 복지, 연금, 의료비', deadline: '2026-07-05', link: '#' },
      { id: 'fj-5', company: '현대건설', title: '대형 건설현장 소방안전 관리자', type: 'large', region: 'honam', experience: 'exp',
        requirements: ['소방설비기사 및 산업안전산업기사 동시 소지자 우대', '건설현장 소방 관리 경력 1년 이상'],
        duties: '건설 공사 현장 소방 안전 관리 계획 수립 및 이행, 화기 작업 허가 시스템 운영.',
        salary: '연봉 4,500~5,200만원', benefits: '현장 수당, 유류비', deadline: '2026-06-30', link: 'https://www.hdec.co.kr' },
    ],
    books: [
      { id: 'fb-1', title: '2026 소방설비기사 필기 기계분야 한권끝장', publisher: '에듀윌', rating: 9.6, reviews: 398, originalPrice: 39000, price: 35100, discount: '10%', coverBg: 'linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)', tags: ['베스트', '무료배송'] },
      { id: 'fb-2', title: '2026 소방설비기사 필기 전기분야 기출+모의고사', publisher: '구민사', rating: 9.5, reviews: 267, originalPrice: 37000, price: 33300, discount: '10%', coverBg: 'linear-gradient(135deg, #c2410c 0%, #f97316 100%)', tags: ['추천', '소득공제'] },
      { id: 'fb-3', title: '소방설비기사 실기 완전정복 (기계/전기 통합)', publisher: '성안당', rating: 9.4, reviews: 189, originalPrice: 40000, price: 36000, discount: '10%', coverBg: 'linear-gradient(135deg, #1a3a6b 0%, #3b6cb5 100%)', tags: ['실기대비', '무료배송'] },
      { id: 'fb-4', title: '2026 소방설비기사 핵심이론 + 최신기출 문제해설', publisher: '일진사', rating: 9.3, reviews: 123, originalPrice: 35000, price: 31500, discount: '10%', coverBg: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)', tags: ['이벤트'] },
    ],
    defaultTodos: [
      '소방원론 화재 분류(A/B/C/D급) 및 소화 방법 도표 정리',
      '소방관계법규 최근 개정 내용 OX 문제 풀기',
      '스프링클러 설비 구성 요소 및 작동 원리 플로우차트 작성',
      '자동화재탐지설비 감지기 종류별 설치 기준 수치 암기',
      '최근 5개년 기출 1회분 실전 조건으로 풀고 오답 정리',
    ],
  },

  '정보처리기사': {
    name: '정보처리기사', icon: 'fa-microchip', category: 'IT·정보통신',
    heroTitle: '2026년도 정보처리기사 합격 전략',
    heroDesc: 'AI·클라우드 시대 IT 직군 취업의 기본 스펙! 연간 응시자 40만명이 넘는 최대 규모 자격증, 체계적인 학습 전략으로 단기 합격을 노리세요.',
    passRateSummary: '필기 59.4% | 실기 21.3%',
    avgPassRate: '40.4%',
    passRates: [
      { year: 2020, written: 55.8, practical: 24.7 },
      { year: 2021, written: 62.1, practical: 18.3 },
      { year: 2022, written: 60.5, practical: 19.8 },
      { year: 2023, written: 58.9, practical: 22.1 },
      { year: 2024, written: 59.4, practical: 21.3 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '02.07 ~ 02.28', writtenResult: '03.11',
        practicalApply: '03.23 ~ 03.26', practicalExam: '04.18 ~ 05.11', finalResult: '06.05 / 06.12' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '04.13 ~ 04.16', writtenExam: '05.11 ~ 06.01', writtenResult: '06.10',
        practicalApply: '06.22 ~ 06.25', practicalExam: '07.18 ~ 08.10', finalResult: '09.04 / 09.11' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '07.27 ~ 07.30', writtenExam: '08.17 ~ 09.08', writtenResult: '09.16',
        practicalApply: '09.28 ~ 10.01', practicalExam: '10.26 ~ 11.16', finalResult: '12.11 / 12.18' },
    ],
    milestones: [
      { label: '제2회 필기 발표', date: '2026-06-10' },
      { label: '제2회 실기 접수', date: '2026-06-22' },
      { label: '제2회 실기 시험', date: '2026-07-18' },
      { label: '제2회 최종 발표', date: '2026-09-04' },
      { label: '제3회 필기 접수', date: '2026-07-27' },
      { label: '제3회 필기 시험', date: '2026-08-17' },
      { label: '제3회 필기 발표', date: '2026-09-16' },
      { label: '제3회 실기 접수', date: '2026-09-28' },
      { label: '제3회 실기 시험', date: '2026-10-26' },
      { label: '제3회 최종 발표', date: '2026-12-11' },
    ],
    subjects: [
      { title: '소프트웨어 설계', tip: 'UML 다이어그램(클래스·시퀀스·유스케이스)과 디자인 패턴 23가지를 반드시 숙지. 최신 기출 선지 중심으로 암기하세요.' },
      { title: '소프트웨어 개발', tip: '자료구조(스택, 큐, 트리)와 정렬 알고리즘 시간 복잡도 비교 표 작성. 화이트/블랙박스 테스트 기법도 빠짐없이 정리.' },
      { title: '데이터베이스 구축', tip: 'SQL 쿼리 직접 작성 연습이 핵심. 정규화(1NF~BCNF) 과정과 트랜잭션 ACID 특성은 실기에서도 자주 출제됩니다.' },
      { title: '프로그래밍 언어 활용', tip: 'C언어, Java, Python 코드 추적 문제 출제. 특히 포인터(C)와 예외처리(Java, Python) 코드를 손으로 써보며 연습하세요.' },
      { title: '정보시스템 구축 관리', tip: 'TCP/IP 프로토콜 스택, 암호화 방식(대칭/비대칭), 보안 공격 유형(SQL Injection, XSS 등)은 실기에서도 서술형으로 출제.' },
    ],
    jobs: [
      { id: 'ij-1', company: 'NAVER', title: '2026 신입 개발자 공개 채용 (백엔드/프론트)', type: 'large', region: 'seoul', experience: 'new',
        requirements: ['정보처리기사 취득자 우대', '컴퓨터공학 관련 학과 졸업자', '알고리즘·자료구조 기초 역량 증명 가능자'],
        duties: '검색, 클라우드, 커머스 등 서비스 개발 및 유지보수. 코딩 테스트 → 기술 면접 → 임원 면접 전형.',
        salary: '신입 연봉 5,000만원 이상 (성과급 별도)', benefits: '사내 식당, 스톡옵션, 헬스케어 지원', deadline: '2026-06-25', link: 'https://recruit.navercorp.com' },
      { id: 'ij-2', company: '카카오', title: '카카오 서비스 품질 보증(QA) 엔지니어', type: 'large', region: 'seoul', experience: 'any',
        requirements: ['정보처리기사 소지자 우대', '소프트웨어 테스트 이론 이해자', '모바일/웹 서비스 테스트 경험자 우대'],
        duties: '카카오 앱/서비스 품질 검증 테스트 케이스 설계 및 수행, 자동화 테스트 스크립트 작성.',
        salary: '연봉 4,500~5,500만원', benefits: '재택근무, 식비, 자기계발비', deadline: '2026-07-05', link: 'https://kakao.com/careers' },
      { id: 'ij-3', company: '국민건강보험공단', title: '정보기술직 공채 (전산/IT 관리)', type: 'public', region: 'all', experience: 'new',
        requirements: ['정보처리기사 필수', '정보보안기사 추가 소지자 우대', '학력 제한 없음'],
        duties: '건강보험 전산 시스템 유지보수, 개인정보 보호 및 사이버 보안 관리, IT 기반 민원 서비스 개선.',
        salary: '초봉 약 3,800만원 (공단 내규)', benefits: '연금, 의료비, 자녀학자금, 유연근무', deadline: '2026-07-31', link: 'https://www.nhis.or.kr' },
      { id: 'ij-4', company: 'SK C&C', title: 'AI·빅데이터 플랫폼 구축 컨설턴트', type: 'large', region: 'seoul', experience: 'exp',
        requirements: ['정보처리기사 필수', '빅데이터분석기사 또는 ADsP 추가 소지자 우대', 'Python/SQL 실무 활용 가능자'],
        duties: '기업 디지털 전환(DX) 컨설팅, AI/ML 모델 설계 및 데이터 파이프라인 구축 지원.',
        salary: '연봉 협의 (약 4,800~6,000만원)', benefits: 'SK 패밀리 복지, 유연근무', deadline: '2026-07-20', link: 'https://www.skcc.co.kr' },
      { id: 'ij-5', company: '한국정보화진흥원', title: '공공 IT 시스템 구축·관리 기술 지원', type: 'public', region: 'chung', experience: 'exp',
        requirements: ['정보처리기사 필수', '공공 SI 프로젝트 투입 경력 2년 이상', 'Java 또는 Python 기반 개발 역량'],
        duties: '중앙부처 정보시스템 유지보수 및 고도화 사업 참여, 데이터 표준화 및 품질관리 보조.',
        salary: '연봉 4,000~4,800만원', benefits: '공공기관 복리후생, 원격 근무', deadline: '2026-06-28', link: 'https://www.nia.or.kr' },
    ],
    books: [
      { id: 'ib-1', title: '2026 정보처리기사 필기 한권끝장', publisher: '시나공(길벗)', rating: 9.8, reviews: 1832, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', tags: ['베스트', '무료배송', '소득공제'] },
      { id: 'ib-2', title: '2026 정보처리기사 실기 한권끝장', publisher: '시나공(길벗)', rating: 9.7, reviews: 1421, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg, #115e59 0%, #0d9488 100%)', tags: ['추천', '실기대비'] },
      { id: 'ib-3', title: '정보처리기사 기출문제 완벽분석 10개년', publisher: '수제비', rating: 9.6, reviews: 987, originalPrice: 35000, price: 31500, discount: '10%', coverBg: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)', tags: ['기출', '소득공제'] },
      { id: 'ib-4', title: '2026 정보처리기사 실기 기출 800제', publisher: '이기적(영진)', rating: 9.5, reviews: 756, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)', tags: ['인기', '무료배송'] },
    ],
    defaultTodos: [
      '소프트웨어 설계 UML 다이어그램 종류 및 표기법 완전 암기',
      '데이터베이스 SQL 쿼리(SELECT, JOIN, 서브쿼리) 직접 작성 연습',
      'C언어 포인터 개념 정리 및 코드 추적 문제 10문항 풀기',
      '보안 공격 유형(SQL Injection, XSS 등) 서술형 답안 작성 연습',
      '최근 기출 실기 1회분 3시간 실전 조건으로 풀고 오답 분석',
    ],
  },

  '건설안전산업기사': {
    name: '건설안전산업기사', icon: 'fa-person-digging', category: '안전관리',
    heroTitle: '2026년도 건설안전산업기사 합격 전략',
    heroDesc: '대형 건설사·공공기관 건설 현장 안전관리자 의무 선임 강화! 산업안전산업기사와 시너지 효과가 높은 건설 특화 안전 자격증 전략을 확인하세요.',
    passRateSummary: '필기 38.5% | 실기 44.2%',
    avgPassRate: '41.4%',
    passRates: [
      { year: 2020, written: 42.1, practical: 38.7 },
      { year: 2021, written: 40.5, practical: 40.2 },
      { year: 2022, written: 39.8, practical: 41.8 },
      { year: 2023, written: 39.1, practical: 43.5 },
      { year: 2024, written: 38.5, practical: 44.2 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.12 ~ 01.15', writtenExam: '01.30 ~ 03.03', writtenResult: '03.11',
        practicalApply: '03.23 ~ 03.26', practicalExam: '04.18 ~ 05.06', finalResult: '06.05 / 06.12' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '04.20 ~ 04.23', writtenExam: '05.09 ~ 05.29', writtenResult: '06.10',
        practicalApply: '06.22 ~ 06.25', practicalExam: '07.18 ~ 08.05', finalResult: '09.04 / 09.11' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '07.20 ~ 07.23', writtenExam: '08.07 ~ 09.01', writtenResult: '09.09',
        practicalApply: '09.21 ~ 09.28', practicalExam: '10.24 ~ 11.13', finalResult: '12.11 / 12.18' },
    ],
    milestones: [
      { label: '제2회 필기 발표', date: '2026-06-10' },
      { label: '제2회 실기 접수', date: '2026-06-22' },
      { label: '제2회 실기 시험', date: '2026-07-18' },
      { label: '제2회 최종 발표', date: '2026-09-04' },
      { label: '제3회 필기 접수', date: '2026-07-20' },
      { label: '제3회 필기 시험', date: '2026-08-07' },
      { label: '제3회 필기 발표', date: '2026-09-09' },
      { label: '제3회 실기 접수', date: '2026-09-21' },
      { label: '제3회 실기 시험', date: '2026-10-24' },
      { label: '제3회 최종 발표', date: '2026-12-11' },
    ],
    subjects: [
      { title: '건설공사 안전 일반', tip: '건설업 산업재해 통계 데이터와 재해 발생 유형(추락, 붕괴 등) 순위를 암기. 최근 중대재해 사례 기반 법규 문제 비중 높음.' },
      { title: '건설공사 안전기술', tip: '굴착 공사 기울기 기준(지반 종류별), 흙막이 공법 종류와 적용 조건을 표로 비교 정리. 계산 문제도 출제됩니다.' },
      { title: '건설기계 및 설비 안전', tip: '타워크레인, 리프트 검사 주기와 방호 장치 기준이 주요 포인트. 정격 하중, 와이어 로프 안전계수 수치를 암기.' },
      { title: '비계 및 가시설 안전', tip: '강관 비계, 시스템 비계 설치 기준과 안전난간 설치 기준이 매 시험 출제. 수치를 정확히 암기하는 것이 핵심.' },
      { title: '건설 관계법규', tip: '산업안전보건법 + 건설기술진흥법 + 건축법 3가지에서 고루 출제. 안전관리계획서 제출 대상 기준을 집중 학습하세요.' },
    ],
    jobs: [
      { id: 'cj-1', company: '대우건설', title: '주택건설 현장 안전 관리자 채용', type: 'large', region: 'honam', experience: 'any',
        requirements: ['건설안전산업기사 또는 산업안전산업기사 필수', '건설현장 안전관리 실무 우대', '운전면허 소지자'],
        duties: '공동주택 건설 현장 추락·붕괴 위험 예방 점검, 위험성 평가 참여, 매일 TBM 교육 실시.',
        salary: '연봉 3,800~4,800만원', benefits: '현장 수당, 4대보험, 명절선물', deadline: '2026-07-10', link: 'https://www.daewooenc.com' },
      { id: 'cj-2', company: '포스코건설', title: '플랜트 건설 현장 EHS 담당 (계약직)', type: 'large', region: 'gong', experience: 'exp',
        requirements: ['건설안전산업기사 소지자', '플랜트 현장 EHS 경력 2년 이상 우대'],
        duties: '제철소 설비 교체 공사 현장 안전·환경·보건 통합 관리, ISO 45001 인증 유지 지원.',
        salary: '연봉 5,000~6,000만원', benefits: '현장 수당, 숙소, 유류비 지원', deadline: '2026-06-30', link: 'https://www.poscoenc.com' },
      { id: 'cj-3', company: '한국도로공사', title: '고속도로 건설공사 안전점검원', type: 'public', region: 'all', experience: 'exp',
        requirements: ['건설안전산업기사 필수', '도로 토목 공사 안전 관련 경력 2년 이상'],
        duties: '고속도로 건설 공사 구간 정기·특별 안전점검, 안전점검 결과 보고서 작성 및 시정조치 확인.',
        salary: '연봉 4,000만원 선', benefits: '공단 복지, 선택적 복지포인트', deadline: '2026-07-20', link: 'https://www.ex.co.kr' },
      { id: 'cj-4', company: '코오롱글로벌', title: '신입 건설안전 관리자 채용 (2026 하반기)', type: 'large', region: 'seoul', experience: 'new',
        requirements: ['건설안전산업기사 또는 산업안전산업기사 소지자', '건설 관련 학과(토목, 건축, 안전공학) 졸업자'],
        duties: '건설 현장 안전 일지 작성, 안전 순찰 및 불안전 행동 시정, 주간 안전교육 자료 준비.',
        salary: '신입 초봉 4,200만원', benefits: '건강검진, 복지카드, 학자금 지원', deadline: '2026-08-01', link: 'https://www.kolon.com' },
      { id: 'cj-5', company: '안전기술공단', title: '건설현장 재해예방 기술지도 컨설턴트', type: 'consult', region: 'chung', experience: 'any',
        requirements: ['건설안전산업기사 소지자 (신입 가능)', '차량 운전 가능자 필수'],
        duties: '중소 건설업체 현장 매월 기술지도, 건설공사 위험성평가 지원, 안전관리계획서 작성 보좌.',
        salary: '연봉 3,500~4,000만원 + 인센티브', benefits: '법인차 또는 차량유지비, 점심식대', deadline: '2026-08-20', link: '#' },
    ],
    books: [
      { id: 'cb-1', title: '2026 건설안전산업기사 필기 한권끝장', publisher: '에듀윌', rating: 9.6, reviews: 287, originalPrice: 37000, price: 33300, discount: '10%', coverBg: 'linear-gradient(135deg, #78350f 0%, #d97706 100%)', tags: ['베스트', '무료배송'] },
      { id: 'cb-2', title: '2026 건설안전산업기사 필기 5개년 기출문제집', publisher: '구민사', rating: 9.5, reviews: 198, originalPrice: 33000, price: 29700, discount: '10%', coverBg: 'linear-gradient(135deg, #1a3a6b 0%, #3b6cb5 100%)', tags: ['추천', '소득공제'] },
      { id: 'cb-3', title: '건설안전산업기사 실기 완전정복', publisher: '성안당', rating: 9.4, reviews: 156, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)', tags: ['실기대비', '무료배송'] },
      { id: 'cb-4', title: '건설안전 핵심정리 + 최신 법규 반영판', publisher: '일진사', rating: 9.3, reviews: 102, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)', tags: ['법규개정', '인기'] },
    ],
    defaultTodos: [
      '건설공사 재해 유형(추락, 붕괴, 감전) 원인 및 예방 대책 정리',
      '굴착 공사 기울기 기준 (지반 종류별) 표 암기',
      '강관 비계 설치 기준 수치 (벽 연결재, 가새 간격 등) 암기',
      '타워크레인 방호 장치 종류 및 정격 하중 기준 정리',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

// === 추가 자격증 20종 ===
  '전기산업기사': {
    name: '전기산업기사',
    icon: 'fa-bolt',
    category: '전기·에너지',
    heroTitle: '2026년도 전기산업기사 합격 가이드',
    heroDesc: '전기산업기사는 전기설비의 설계·시공·운영 및 유지보수에 필요한 전문 기술을 검증하는 자격증입니다. 전기 안전관리 및 전력 계통 운용 능력을 체계적으로 평가합니다. 산업 현장의 전기 전문가로 활동하기 위한 필수 국가자격입니다.',
    passRateSummary: '필기 38% | 실기 42%',
    avgPassRate: '40%',
    passRates: [
      { year: 2020, written: 36, practical: 40 },
      { year: 2021, written: 38, practical: 41 },
      { year: 2022, written: 37, practical: 43 },
      { year: 2023, written: 39, practical: 42 },
      { year: 2024, written: 38, practical: 44 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '전기자기학', desc: '전계·자계의 기초 이론 및 전자기 현상' },
      { name: '전력공학', desc: '전력 계통, 송배전 설비 및 보호 계전' },
      { name: '전기기기', desc: '변압기, 전동기, 발전기 원리 및 특성' },
      { name: '회로이론 및 제어공학', desc: '교직류 회로 해석 및 자동제어 기초' },
      { name: '전기설비기술기준', desc: '전기설비 판단기준 및 관련 법규' },
    ],
    jobs: [
      { title: '전기설비 유지보수 기사', company: '제조/플랜트', salary: '3,500~4,500만원', location: '울산/경남', type: '정규직' },
      { title: '전기 안전관리자', company: '대기업 생산공장', salary: '4,000~5,000만원', location: '경기/충남', type: '정규직' },
      { title: '전기공사 현장관리', company: '전기공사업체', salary: '3,800~4,800만원', location: '전국', type: '정규직' },
      { title: '건축물 전기설비 설계', company: '건축·엔지니어링', salary: '4,200~5,500만원', location: '서울/수도권', type: '정규직' },
      { title: '전기 계측 기술원', company: '에너지 관리업체', salary: '3,200~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전기산업기사 필기 핵심이론+기출문제', author: '김동진', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전기산업기사 실기 완전정복', author: '이현석', publisher: '일진사', year: 2024, rating: 4.3 },
      { title: '전기산업기사 과년도 기출문제해설', author: '박정호', publisher: '동일출판사', year: 2023, rating: 4.4 },
      { title: '전기산업기사 전기기기·회로 집중완성', author: '최우석', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '신재생에너지발전설비기사': {
    name: '신재생에너지발전설비기사',
    icon: 'fa-solar-panel',
    category: '전기·에너지',
    heroTitle: '2026년도 신재생에너지발전설비기사 합격 가이드',
    heroDesc: '신재생에너지발전설비기사는 태양광, 풍력 등 신재생에너지 발전 설비의 설계·시공·운용 전문 능력을 검증하는 자격증입니다. 탄소중립과 에너지 전환 정책에 따라 수요가 빠르게 증가하는 핵심 자격입니다. 신재생에너지 설비 전문가로서 미래 에너지 산업을 이끌어 갈 수 있습니다.',
    passRateSummary: '필기 42% | 실기 38%',
    avgPassRate: '40%',
    passRates: [
      { year: 2020, written: 39, practical: 35 },
      { year: 2021, written: 41, practical: 37 },
      { year: 2022, written: 43, practical: 39 },
      { year: 2023, written: 42, practical: 38 },
      { year: 2024, written: 44, practical: 40 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '태양광발전시스템', desc: '태양전지 원리, 인버터, 모듈 설치 및 설계' },
      { name: '풍력발전시스템', desc: '풍력터빈 구조, 제어 시스템 및 운영' },
      { name: '연료전지·바이오에너지', desc: '연료전지 원리 및 바이오매스 에너지 기술' },
      { name: '신재생에너지 계통연계', desc: '계통연계 기술기준 및 보호 시스템' },
      { name: '신재생에너지 관련 법규', desc: '신에너지 및 재생에너지 개발 관련 법령' },
    ],
    jobs: [
      { title: '태양광발전소 운영관리', company: '발전사/에너지기업', salary: '3,800~4,800만원', location: '전남/경북', type: '정규직' },
      { title: '신재생에너지 설계 엔지니어', company: '에너지 엔지니어링', salary: '4,500~6,000만원', location: '서울/경기', type: '정규직' },
      { title: '풍력설비 유지보수 기술자', company: '풍력발전 운영사', salary: '4,000~5,200만원', location: '강원/제주', type: '정규직' },
      { title: '그린에너지 사업 관리', company: '공기업/지자체', salary: '4,200~5,500만원', location: '전국', type: '정규직' },
      { title: '신재생에너지 시공 감리', company: '감리전문회사', salary: '3,500~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '신재생에너지발전설비기사 필기 올인원', author: '황진수', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '신재생에너지발전설비기사 실기 핵심정리', author: '김태영', publisher: '예문사', year: 2024, rating: 4.2 },
      { title: '신재생에너지발전설비기사 기출문제 완성', author: '이상훈', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '태양광·풍력 발전설비 기술 해설', author: '박성민', publisher: '동일출판사', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '전기공사기사': {
    name: '전기공사기사',
    icon: 'fa-plug',
    category: '전기·에너지',
    heroTitle: '2026년도 전기공사기사 합격 가이드',
    heroDesc: '전기공사기사는 건축물 및 산업시설의 전기공사 설계·시공·감리에 필요한 전문 지식과 기술을 검증하는 국가자격증입니다. 전기공사업 등록 및 현장 대리인 자격 취득에 필수적인 자격입니다. 전기공사 현장의 핵심 인력으로 안정적인 취업과 경력 개발이 가능합니다.',
    passRateSummary: '필기 35% | 실기 45%',
    avgPassRate: '40%',
    passRates: [
      { year: 2020, written: 33, practical: 43 },
      { year: 2021, written: 34, practical: 44 },
      { year: 2022, written: 36, practical: 46 },
      { year: 2023, written: 35, practical: 45 },
      { year: 2024, written: 37, practical: 47 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '전기응용 및 공사재료', desc: '전기응용 기기와 공사용 재료의 특성' },
      { name: '전력공학', desc: '배전 계통 설계 및 전력 설비 운용' },
      { name: '전기설비기술기준', desc: '전기설비 판단기준 및 내선규정' },
      { name: '회로이론', desc: '교직류 회로 해석 및 전기 기초 이론' },
      { name: '전기기기', desc: '변압기, 전동기 등 전기기기 특성 분석' },
    ],
    jobs: [
      { title: '전기공사 현장소장', company: '전기공사 전문업체', salary: '5,000~7,000만원', location: '전국', type: '정규직' },
      { title: '전기 감리원', company: '감리전문회사', salary: '4,500~6,000만원', location: '서울/경기', type: '정규직' },
      { title: '전기 설계 기사', company: '설계·엔지니어링', salary: '4,000~5,500만원', location: '수도권', type: '정규직' },
      { title: '건축 전기설비 시공관리', company: '종합건설사', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '전기공사 현장 기술원', company: '전기공사업체', salary: '3,500~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전기공사기사 필기 핵심완성', author: '류승표', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전기공사기사 실기 집중공략', author: '이재용', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '전기공사기사 최근 5개년 기출해설', author: '김종환', publisher: '일진사', year: 2023, rating: 4.4 },
      { title: '전기공사기사 내선규정 완전정복', author: '박민철', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '에너지관리기사': {
    name: '에너지관리기사',
    icon: 'fa-thermometer-half',
    category: '전기·에너지',
    heroTitle: '2026년도 에너지관리기사 합격 가이드',
    heroDesc: '에너지관리기사는 산업 현장의 열에너지 설비 운용, 에너지 효율 향상, 보일러 및 압력용기 관리 전반을 다루는 국가전문자격입니다. 에너지 절약 의무화 정책으로 수요가 꾸준히 증가하고 있습니다. 제조·플랜트 업종에서 에너지 관리 전문가로 활약할 수 있습니다.',
    passRateSummary: '필기 40% | 실기 36%',
    avgPassRate: '38%',
    passRates: [
      { year: 2020, written: 38, practical: 34 },
      { year: 2021, written: 40, practical: 35 },
      { year: 2022, written: 41, practical: 37 },
      { year: 2023, written: 39, practical: 36 },
      { year: 2024, written: 42, practical: 38 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '연소공학', desc: '연료의 종류, 연소 이론 및 연소 계산' },
      { name: '열역학', desc: '열역학 법칙, 사이클 분석 및 열효율' },
      { name: '계측 및 제어', desc: '에너지 계측기기 원리 및 자동제어 기초' },
      { name: '열설비 구조 및 유체역학', desc: '보일러, 열교환기 구조 및 유체 흐름' },
      { name: '에너지관계 법규', desc: '에너지이용합리화법 및 관련 기준' },
    ],
    jobs: [
      { title: '에너지 관리원', company: '대형 제조공장', salary: '4,000~5,000만원', location: '울산/경기', type: '정규직' },
      { title: '보일러 설비 관리 기사', company: '열병합발전소', salary: '4,200~5,500만원', location: '전국', type: '정규직' },
      { title: '에너지 진단 전문가', company: '에너지관리공단', salary: '4,500~6,000만원', location: '서울/경기', type: '정규직' },
      { title: '플랜트 열설비 엔지니어', company: '엔지니어링 전문사', salary: '4,800~6,500만원', location: '서울/경기', type: '정규직' },
      { title: '에너지 절약 컨설턴트', company: '컨설팅 전문회사', salary: '3,800~5,000만원', location: '서울', type: '계약직' },
    ],
    books: [
      { title: '에너지관리기사 필기 이론 총정리', author: '정태원', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '에너지관리기사 실기 핵심공략', author: '오상현', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '에너지관리기사 기출문제해설 (최근 5개년)', author: '배민준', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '에너지관리기사 연소공학·열역학 집중완성', author: '황철수', publisher: '동일출판사', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '일반기계기사': {
    name: '일반기계기사',
    icon: 'fa-cogs',
    category: '기계',
    heroTitle: '2026년도 일반기계기사 합격 가이드',
    heroDesc: '일반기계기사는 기계 설비의 설계, 제작, 유지보수에 필요한 기계공학 전반의 전문 능력을 검증하는 국가자격증입니다. 제조업, 플랜트, 자동차 등 기계 관련 전 산업 분야에서 폭넓게 활용됩니다. 기계 전문가로서의 경력 개발과 취업에 핵심적인 자격입니다.',
    passRateSummary: '필기 30% | 실기 40%',
    avgPassRate: '35%',
    passRates: [
      { year: 2020, written: 28, practical: 38 },
      { year: 2021, written: 29, practical: 39 },
      { year: 2022, written: 31, practical: 41 },
      { year: 2023, written: 30, practical: 40 },
      { year: 2024, written: 32, practical: 42 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '기계설계', desc: '기계 요소 설계, 강도 계산 및 설계 절차' },
      { name: '기계제작법', desc: '주조, 소성가공, 절삭가공 등 제조 공정' },
      { name: '유체역학', desc: '유체의 흐름, 압력 손실 및 유체 기계' },
      { name: '열역학 및 열전달', desc: '열역학 법칙, 열전달 메커니즘 분석' },
      { name: '재료역학', desc: '응력·변형률, 보 이론 및 재료 파괴 기준' },
    ],
    jobs: [
      { title: '기계설비 설계 엔지니어', company: '기계·제조업체', salary: '4,000~5,500만원', location: '경기/인천', type: '정규직' },
      { title: '생산설비 유지보수 기사', company: '자동차 부품사', salary: '3,800~5,000만원', location: '울산/경기', type: '정규직' },
      { title: '플랜트 기계 엔지니어', company: '플랜트 건설사', salary: '4,500~6,500만원', location: '서울/경기', type: '정규직' },
      { title: '기계 품질관리 기술자', company: '제조 전문업체', salary: '3,800~5,000만원', location: '경기/충남', type: '정규직' },
      { title: '기계설비 감리원', company: '감리전문회사', salary: '3,500~4,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '일반기계기사 필기 단기완성', author: '한동원', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '일반기계기사 실기 핵심공략', author: '이승준', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '일반기계기사 기출문제 완전분석', author: '조현식', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '일반기계기사 재료역학·유체역학 집중완성', author: '김동하', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '공조냉동기계기사': {
    name: '공조냉동기계기사',
    icon: 'fa-snowflake',
    category: '기계',
    heroTitle: '2026년도 공조냉동기계기사 합격 가이드',
    heroDesc: '공조냉동기계기사는 냉동·공기조화 설비의 설계, 시공, 유지관리에 필요한 전문 기술을 인증하는 국가자격증입니다. 건물 에너지 효율화 및 냉난방 수요 증가로 취업 전망이 밝은 분야입니다. 빌딩, 식품, 제약 등 다양한 산업에서 활용도가 높습니다.',
    passRateSummary: '필기 36% | 실기 43%',
    avgPassRate: '40%',
    passRates: [
      { year: 2020, written: 34, practical: 41 },
      { year: 2021, written: 35, practical: 42 },
      { year: 2022, written: 37, practical: 44 },
      { year: 2023, written: 36, practical: 43 },
      { year: 2024, written: 38, practical: 45 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '냉동공학', desc: '냉동 사이클, 냉매 특성 및 냉동 시스템 설계' },
      { name: '공기조화', desc: '공기 상태 변화, 덕트 설계 및 부하 계산' },
      { name: '배관일반', desc: '냉매 배관, 보온 시공 및 압력 시험' },
      { name: '전기제어공학', desc: '냉동공조 시스템의 전기 제어 회로' },
      { name: '공조냉동 관련 법규', desc: '고압가스안전관리법 및 냉동 관련 기준' },
    ],
    jobs: [
      { title: '냉동공조 설비 엔지니어', company: '플랜트·건설사', salary: '4,000~5,500만원', location: '서울/경기', type: '정규직' },
      { title: '빌딩 설비 관리 기술자', company: '빌딩 관리업체', salary: '3,800~5,000만원', location: '서울/수도권', type: '정규직' },
      { title: '냉동식품 저온 설비 관리', company: '식품 제조사', salary: '3,600~4,800만원', location: '경기/충북', type: '정규직' },
      { title: '반도체 클린룸 공조 기술자', company: '반도체 제조사', salary: '4,500~6,000만원', location: '경기/충남', type: '정규직' },
      { title: '공조냉동 유지보수 기술원', company: '설비 유지보수업', salary: '3,300~4,300만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '공조냉동기계기사 필기 완전정복', author: '신동철', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '공조냉동기계기사 실기 핵심정리', author: '임재호', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '공조냉동기계기사 과년도 기출문제해설', author: '장세원', publisher: '일진사', year: 2023, rating: 4.4 },
      { title: '공조냉동기계기사 냉동공학 집중완성', author: '권태욱', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '승강기기사': {
    name: '승강기기사',
    icon: 'fa-elevator',
    category: '기계',
    heroTitle: '2026년도 승강기기사 합격 가이드',
    heroDesc: '승강기기사는 엘리베이터, 에스컬레이터 등 승강기 설비의 설계·제조·검사 및 안전관리 전문 능력을 인증하는 국가자격증입니다. 승강기 안전관리법 강화로 자격증 소지자의 수요가 지속적으로 증가하고 있습니다. 건물 유지관리 및 승강기 전문 업체에서 핵심 기술자로 활동할 수 있습니다.',
    passRateSummary: '필기 45% | 실기 50%',
    avgPassRate: '47%',
    passRates: [
      { year: 2020, written: 43, practical: 48 },
      { year: 2021, written: 44, practical: 49 },
      { year: 2022, written: 46, practical: 51 },
      { year: 2023, written: 45, practical: 50 },
      { year: 2024, written: 47, practical: 52 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '승강기 개론', desc: '승강기 종류, 구조 및 기본 작동 원리' },
      { name: '승강기 기계·전기', desc: '구동 장치, 제어반 및 전기 회로 분석' },
      { name: '승강기 안전부품', desc: '안전장치 종류, 기준 및 검사 절차' },
      { name: '승강기 설계', desc: '승강기 용량 계산 및 설계 기준' },
      { name: '승강기 관련 법규', desc: '승강기 안전관리법 및 설치·검사 기준' },
    ],
    jobs: [
      { title: '승강기 안전관리자', company: '대형 건물 관리사', salary: '3,800~5,000만원', location: '서울/경기', type: '정규직' },
      { title: '승강기 검사원', company: '한국승강기안전공단', salary: '4,200~5,500만원', location: '전국', type: '정규직' },
      { title: '승강기 유지보수 기사', company: '승강기 제조·유지보수사', salary: '3,600~4,800만원', location: '전국', type: '정규직' },
      { title: '승강기 설치 현장관리', company: '승강기 설치 전문업체', salary: '4,000~5,200만원', location: '수도권', type: '정규직' },
      { title: '승강기 기술 지원', company: '승강기 부품 유통사', salary: '3,300~4,200만원', location: '경기', type: '계약직' },
    ],
    books: [
      { title: '승강기기사 필기 핵심이론', author: '문준호', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '승강기기사 실기 완전정복', author: '서영민', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '승강기기사 기출문제 총정리', author: '이성호', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '승강기 안전관리법 핵심요약', author: '최진수', publisher: '동일출판사', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '건설기계기사': {
    name: '건설기계기사',
    icon: 'fa-truck-pickup',
    category: '기계',
    heroTitle: '2026년도 건설기계기사 합격 가이드',
    heroDesc: '건설기계기사는 굴착기, 지게차, 크레인 등 건설기계의 점검·정비 및 안전 운용에 관한 전문 기술을 인증하는 국가자격증입니다. 건설·토목 현장의 기계 관리 전문가로 취업에 유리합니다. 건설 경기 회복과 인프라 투자 확대로 꾸준한 수요가 예상됩니다.',
    passRateSummary: '필기 33% | 실기 47%',
    avgPassRate: '40%',
    passRates: [
      { year: 2020, written: 31, practical: 45 },
      { year: 2021, written: 32, practical: 46 },
      { year: 2022, written: 34, practical: 48 },
      { year: 2023, written: 33, practical: 47 },
      { year: 2024, written: 35, practical: 49 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '건설기계 기관', desc: '디젤엔진 구조, 원리 및 정비 방법' },
      { name: '건설기계 섀시', desc: '동력전달장치, 조향·제동 시스템 분석' },
      { name: '건설기계 전기·전자', desc: '전기 회로 및 전자 제어 장치 원리' },
      { name: '건설기계 유압', desc: '유압 시스템 원리, 부품 기능 및 정비' },
      { name: '건설기계 관련 법규', desc: '건설기계관리법 및 안전 관련 기준' },
    ],
    jobs: [
      { title: '건설기계 정비 기술자', company: '건설기계 정비업체', salary: '3,500~4,800만원', location: '경기/전국', type: '정규직' },
      { title: '건설현장 장비 관리자', company: '종합건설사', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '건설기계 검사원', company: '건설기계 검사기관', salary: '4,000~5,200만원', location: '전국', type: '정규직' },
      { title: '중장비 안전 관리원', company: '대형 건설사', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '건설기계 기술 지원', company: '장비 렌탈업체', salary: '3,200~4,200만원', location: '경기/전국', type: '계약직' },
    ],
    books: [
      { title: '건설기계기사 필기 이론+기출', author: '강현준', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '건설기계기사 실기 집중완성', author: '송민석', publisher: '예문사', year: 2024, rating: 4.2 },
      { title: '건설기계기사 과년도 기출해설', author: '윤태성', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '건설기계 유압·전기 완전정복', author: '홍성진', publisher: '동일출판사', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '화공기사': {
    name: '화공기사',
    icon: 'fa-flask',
    category: '화학·환경',
    heroTitle: '2026년도 화공기사 합격 가이드',
    heroDesc: '화공기사는 화학 공정 설계·운영·관리와 화학 제품 생산에 관한 전문 능력을 검증하는 국가기술자격증입니다. 석유화학, 제약, 소재 등 화학 관련 산업 전반에서 활용되는 핵심 자격입니다. 화학 공장의 안전하고 효율적인 운영을 담당하는 전문가로 성장할 수 있습니다.',
    passRateSummary: '필기 28% | 실기 38%',
    avgPassRate: '33%',
    passRates: [
      { year: 2020, written: 26, practical: 36 },
      { year: 2021, written: 27, practical: 37 },
      { year: 2022, written: 29, practical: 39 },
      { year: 2023, written: 28, practical: 38 },
      { year: 2024, written: 30, practical: 40 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '화공열역학', desc: '열역학 법칙, 상평형 및 반응 평형' },
      { name: '단위조작', desc: '증류, 추출, 흡수 등 분리 공정 원리' },
      { name: '화학반응공학', desc: '반응기 설계, 반응 속도론 및 수율 최적화' },
      { name: '공정제어', desc: '화학 공정의 자동제어 및 계장 시스템' },
      { name: '화공안전 관련 법규', desc: '산업안전보건법 화학물질 관련 기준' },
    ],
    jobs: [
      { title: '화학 공정 엔지니어', company: '석유화학 기업', salary: '4,500~6,500만원', location: '울산/여수', type: '정규직' },
      { title: '제약 생산 기술자', company: '제약·바이오 기업', salary: '4,000~5,500만원', location: '충북/경기', type: '정규직' },
      { title: '화학물질 안전관리자', company: '화학 제조사', salary: '4,200~5,500만원', location: '경기/울산', type: '정규직' },
      { title: '고분자 소재 개발 연구원', company: 'R&D 연구소', salary: '4,500~6,000만원', location: '서울/경기', type: '정규직' },
      { title: '화학 공장 운전 기술원', company: '정밀화학 업체', salary: '3,500~4,500만원', location: '전남/경남', type: '계약직' },
    ],
    books: [
      { title: '화공기사 필기 핵심이론 총정리', author: '정승호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '화공기사 실기 완전정복', author: '김영훈', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '화공기사 최근 기출문제 해설집', author: '이준형', publisher: '일진사', year: 2023, rating: 4.4 },
      { title: '화공기사 단위조작·반응공학 집중완성', author: '박재웅', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '위험물산업기사': {
    name: '위험물산업기사',
    icon: 'fa-biohazard',
    category: '화학·환경',
    heroTitle: '2026년도 위험물산업기사 합격 가이드',
    heroDesc: '위험물산업기사는 위험물의 저장·취급·운반에 관한 안전 관리 전문 능력을 인증하는 국가자격증입니다. 화학 공장, 주유소, 위험물 저장 시설 등에서 법적 요건으로 자격증 소지자가 요구됩니다. 취득 난이도가 상대적으로 낮아 화학·안전 분야 진입을 위한 첫 자격으로 인기가 높습니다.',
    passRateSummary: '필기 50% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 48, practical: 53 },
      { year: 2021, written: 49, practical: 54 },
      { year: 2022, written: 51, practical: 56 },
      { year: 2023, written: 50, practical: 55 },
      { year: 2024, written: 52, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '일반화학', desc: '물질의 구조, 화학 반응 및 주기율' },
      { name: '화재예방과 소화방법', desc: '연소 이론, 소화약제 종류 및 소화 방법' },
      { name: '위험물의 성질과 취급', desc: '위험물 분류별 특성 및 안전 취급 기준' },
      { name: '위험물 안전관리법', desc: '위험물 저장·취급 시설 기준 및 법규' },
      { name: '소방관계법규', desc: '소방 시설 설치 기준 및 관련 법령' },
    ],
    jobs: [
      { title: '위험물 안전관리자', company: '주유소·위험물 저장소', salary: '3,200~4,200만원', location: '전국', type: '정규직' },
      { title: '화학물질 취급 관리자', company: '화학 제조업체', salary: '3,500~4,500만원', location: '경기/울산', type: '정규직' },
      { title: '소방·안전 담당자', company: '대형 물류창고', salary: '3,300~4,300만원', location: '경기/인천', type: '정규직' },
      { title: '위험물 시설 점검원', company: '안전관리 용역사', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '화학물질 보관 관리원', company: '연구소·대학교', salary: '2,800~3,600만원', location: '서울/경기', type: '계약직' },
    ],
    books: [
      { title: '위험물산업기사 필기 핵심완성', author: '안재원', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '위험물산업기사 실기 단기완성', author: '유형석', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '위험물산업기사 과년도 기출문제', author: '배성호', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '위험물 성질과 법규 핵심요약', author: '전민준', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '가스기사': {
    name: '가스기사',
    icon: 'fa-fire',
    category: '화학·환경',
    heroTitle: '2026년도 가스기사 합격 가이드',
    heroDesc: '가스기사는 LPG, LNG 등 가스 설비의 설계·시공·안전관리에 관한 전문 기술을 인증하는 국가자격증입니다. 가스 안전 관련 법규 강화로 현장 수요가 꾸준히 증가하고 있습니다. 가스 설비 전문가로서 공공기관 및 민간 기업에서 안정적인 커리어를 쌓을 수 있습니다.',
    passRateSummary: '필기 38% | 실기 44%',
    avgPassRate: '41%',
    passRates: [
      { year: 2020, written: 36, practical: 42 },
      { year: 2021, written: 37, practical: 43 },
      { year: 2022, written: 39, practical: 45 },
      { year: 2023, written: 38, practical: 44 },
      { year: 2024, written: 40, practical: 46 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '연소공학', desc: '가스 연소 특성, 폭발 한계 및 안전 조건' },
      { name: '가스 설비', desc: '가스 배관 설계, 정압기 및 공급 시스템' },
      { name: '가스계측 및 제어', desc: '가스 검지기, 유량 측정 및 자동차단' },
      { name: '가스 안전관리', desc: '사고 사례 분석, 위험성 평가 및 예방' },
      { name: '고압가스안전관리법', desc: '가스 관련 법규 및 안전 기준' },
    ],
    jobs: [
      { title: '가스 안전관리자', company: '도시가스 공급사', salary: '4,000~5,200만원', location: '전국', type: '정규직' },
      { title: '가스 설비 시공 기술자', company: '가스 시공업체', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: 'LNG 터미널 운영 기사', company: '한국가스공사', salary: '4,500~6,000만원', location: '인천/평택', type: '정규직' },
      { title: '가스 시설 검사원', company: '한국가스안전공사', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '가스 배관 유지보수', company: '건물 관리업체', salary: '3,300~4,300만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '가스기사 필기 이론 완전정복', author: '남기현', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '가스기사 실기 핵심공략', author: '오민혁', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '가스기사 최근 기출문제해설', author: '정우석', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '가스기사 연소공학·법규 집중완성', author: '한상진', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '대기환경기사': {
    name: '대기환경기사',
    icon: 'fa-wind',
    category: '화학·환경',
    heroTitle: '2026년도 대기환경기사 합격 가이드',
    heroDesc: '대기환경기사는 대기 오염의 방지·측정·관리에 관한 전문 능력을 검증하는 국가자격증입니다. 미세먼지, 온실가스 등 대기환경 문제 해결을 위한 전문가 수요가 꾸준히 증가하고 있습니다. 환경부·공공기관 및 민간 기업의 환경 관리 부서에서 핵심 인력으로 활동할 수 있습니다.',
    passRateSummary: '필기 32% | 실기 40%',
    avgPassRate: '36%',
    passRates: [
      { year: 2020, written: 30, practical: 38 },
      { year: 2021, written: 31, practical: 39 },
      { year: 2022, written: 33, practical: 41 },
      { year: 2023, written: 32, practical: 40 },
      { year: 2024, written: 34, practical: 42 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '대기오염개론', desc: '대기 오염 물질, 발생 원인 및 영향 분석' },
      { name: '연소공학', desc: '연료 연소 특성, 배출 가스 및 연소 제어' },
      { name: '대기오염 방지기술', desc: '집진, 탈황, 탈질 등 방지 시설 원리' },
      { name: '대기오염 공정시험기준', desc: '오염물질 측정 방법 및 시험 기준' },
      { name: '대기환경관계법규', desc: '대기환경보전법 및 시행령·규칙' },
    ],
    jobs: [
      { title: '대기환경 관리 기술자', company: '대형 제조업체', salary: '3,800~5,000만원', location: '경기/충남', type: '정규직' },
      { title: '환경 컨설턴트', company: '환경 컨설팅사', salary: '4,000~5,500만원', location: '서울/경기', type: '정규직' },
      { title: '대기 측정 분석원', company: '환경 전문 측정 기관', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '온실가스 검증원', company: '검증 전문 기관', salary: '4,000~5,200만원', location: '서울', type: '정규직' },
      { title: '대기 방지 시설 운영원', company: '발전·소각 시설', salary: '3,200~4,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '대기환경기사 필기 핵심이론', author: '조승현', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '대기환경기사 실기 완전정복', author: '김민서', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '대기환경기사 기출문제 최신판', author: '류현진', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '대기환경 방지기술·법규 집중완성', author: '서지원', publisher: '동일출판사', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '수질환경기사': {
    name: '수질환경기사',
    icon: 'fa-water',
    category: '환경',
    heroTitle: '2026년도 수질환경기사 합격 가이드',
    heroDesc: '수질환경기사는 수질 오염 방지·측정 및 하수처리·폐수처리 시설 운영에 관한 전문 능력을 인증하는 국가자격증입니다. 물 환경 보전 정책 강화로 관련 전문가 수요가 지속적으로 증가하고 있습니다. 지자체, 환경공단, 제조업체의 환경 관리 부서에서 폭넓게 활용됩니다.',
    passRateSummary: '필기 35% | 실기 42%',
    avgPassRate: '38%',
    passRates: [
      { year: 2020, written: 33, practical: 40 },
      { year: 2021, written: 34, practical: 41 },
      { year: 2022, written: 36, practical: 43 },
      { year: 2023, written: 35, practical: 42 },
      { year: 2024, written: 37, practical: 44 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '수질오염개론', desc: '수질 오염 물질 특성, 자정 작용 및 영향' },
      { name: '상하수도공학', desc: '정수·하수처리 공정 설계 및 운영' },
      { name: '수질오염 방지기술', desc: '물리·화학·생물학적 처리 기술 원리' },
      { name: '수질오염 공정시험기준', desc: '수질 항목별 측정·분석 방법 기준' },
      { name: '수질환경 관계법규', desc: '물환경보전법 및 수질 관련 기준' },
    ],
    jobs: [
      { title: '폐수처리 시설 운영 기사', company: '제조·화학 업체', salary: '3,800~5,000만원', location: '경기/경남', type: '정규직' },
      { title: '하수처리장 운영 기술자', company: '지방자치단체', salary: '4,000~5,200만원', location: '전국', type: '정규직' },
      { title: '수질 측정 분석원', company: '환경 측정 기관', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '환경 관리 담당자', company: '대기업 사업장', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '수처리 시설 유지보수', company: '환경 서비스업체', salary: '3,200~4,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '수질환경기사 필기 핵심이론', author: '강병호', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '수질환경기사 실기 완전정복', author: '이수연', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '수질환경기사 과년도 기출문제해설', author: '박혜진', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '수질환경 공정시험·법규 집중완성', author: '최은정', publisher: '동일출판사', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '산업안전기사': {
    name: '산업안전기사',
    icon: 'fa-hard-hat',
    category: '안전',
    heroTitle: '2026년도 산업안전기사 합격 가이드',
    heroDesc: '산업안전기사는 제조·건설 현장의 산업재해 예방과 안전보건 관리 전반을 담당하는 전문가 자격입니다. 중대재해처벌법 시행 이후 안전관리자 선임 의무가 확대되어 취업 수요가 크게 증가하였습니다. 산업안전 분야 최상위 자격으로 안정적인 경력 개발이 가능합니다.',
    passRateSummary: '필기 42% | 실기 48%',
    avgPassRate: '45%',
    passRates: [
      { year: 2020, written: 40, practical: 46 },
      { year: 2021, written: 41, practical: 47 },
      { year: 2022, written: 43, practical: 49 },
      { year: 2023, written: 42, practical: 48 },
      { year: 2024, written: 44, practical: 50 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '안전관리론', desc: '안전 관리 이론, 사고 예방 원리 및 체계' },
      { name: '인간공학 및 시스템 안전공학', desc: '인간 특성 분석, 위험성 평가 기법' },
      { name: '기계·기구 및 설비 안전관리', desc: '기계 설비 위험 요인 및 방호 장치' },
      { name: '전기 및 화학설비 안전관리', desc: '전기 안전, 화재·폭발 예방 기술' },
      { name: '건설안전관리 및 산업안전보건법', desc: '건설 현장 안전 기준 및 관련 법규' },
    ],
    jobs: [
      { title: '산업안전 관리자', company: '대형 제조업체', salary: '4,200~5,500만원', location: '경기/울산', type: '정규직' },
      { title: '안전보건 팀장', company: '종합건설사', salary: '5,000~7,000만원', location: '서울/전국', type: '정규직' },
      { title: '안전 컨설턴트', company: '안전 전문 기관', salary: '4,500~6,000만원', location: '서울/경기', type: '정규직' },
      { title: '위험성 평가 전문가', company: '엔지니어링·컨설팅', salary: '4,800~6,500만원', location: '서울/경기', type: '정규직' },
      { title: '산업안전 보건 감리원', company: '감리 전문회사', salary: '3,800~5,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '산업안전기사 필기 올인원', author: '김상현', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '산업안전기사 실기 완전정복', author: '이동민', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '산업안전기사 최근 기출문제해설', author: '박진형', publisher: '일진사', year: 2023, rating: 4.5 },
      { title: '산업안전보건법 핵심요약 및 문제집', author: '정현수', publisher: '동일출판사', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '정보보안기사': {
    name: '정보보안기사',
    icon: 'fa-shield-alt',
    category: 'IT·정보',
    heroTitle: '2026년도 정보보안기사 합격 가이드',
    heroDesc: '정보보안기사는 사이버 보안 위협에 대응하는 정보 시스템 보안 설계·운영 전문 능력을 인증하는 국가자격증입니다. 사이버 공격 증가와 개인정보 보호 강화로 정보보안 전문가에 대한 수요가 폭발적으로 늘고 있습니다. IT 업계에서 가장 취업이 유리한 국가기술자격 중 하나입니다.',
    passRateSummary: '필기 25% | 실기 30%',
    avgPassRate: '28%',
    passRates: [
      { year: 2020, written: 23, practical: 28 },
      { year: 2021, written: 24, practical: 29 },
      { year: 2022, written: 26, practical: 31 },
      { year: 2023, written: 25, practical: 30 },
      { year: 2024, written: 27, practical: 32 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '시스템 보안', desc: '운영체제 보안, 악성코드 분석 및 취약점 대응' },
      { name: '네트워크 보안', desc: '네트워크 프로토콜 취약점, 방화벽 및 IDS/IPS' },
      { name: '애플리케이션 보안', desc: '웹 취약점, 소프트웨어 보안 개발 기준' },
      { name: '정보보안 일반', desc: '암호학, 인증 기술 및 보안 관리 프레임워크' },
      { name: '정보보안 관련 법규', desc: '개인정보보호법, 정보통신망법 및 관련 기준' },
    ],
    jobs: [
      { title: '정보보안 엔지니어', company: 'IT 대기업·금융기관', salary: '5,000~7,500만원', location: '서울/경기', type: '정규직' },
      { title: '보안 관제 분석가', company: 'MSSP·보안 전문사', salary: '4,000~5,500만원', location: '서울/경기', type: '정규직' },
      { title: '침해사고 대응(CERT) 전문가', company: '보안 전문 기업', salary: '5,000~7,000만원', location: '서울', type: '정규직' },
      { title: '개인정보보호 담당자(DPO)', company: '대기업·공공기관', salary: '4,800~6,500만원', location: '서울/경기', type: '정규직' },
      { title: '보안 취약점 진단원', company: '보안 컨설팅사', salary: '4,000~5,500만원', location: '서울', type: '계약직' },
    ],
    books: [
      { title: '정보보안기사 필기 핵심이론', author: '이경철', publisher: '한빛미디어', year: 2024, rating: 4.5 },
      { title: '정보보안기사 실기 완전정복', author: '박원규', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '정보보안기사 최근 기출문제 해설', author: '최재혁', publisher: '예문사', year: 2023, rating: 4.4 },
      { title: '정보보안기사 법규·관리 핵심요약', author: '김진우', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '빅데이터분석기사': {
    name: '빅데이터분석기사',
    icon: 'fa-chart-bar',
    category: 'IT·정보',
    heroTitle: '2026년도 빅데이터분석기사 합격 가이드',
    heroDesc: '빅데이터분석기사는 대용량 데이터의 수집·저장·처리·분석 및 시각화에 관한 전문 능력을 검증하는 국가자격증입니다. AI·머신러닝 시대에 데이터 기반 의사결정을 지원하는 핵심 인재에 대한 기업 수요가 급증하고 있습니다. IT·금융·제조 등 전 산업에서 높은 연봉과 처우를 받을 수 있습니다.',
    passRateSummary: '필기 48% | 실기 52%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 45, practical: 49 },
      { year: 2021, written: 47, practical: 51 },
      { year: 2022, written: 49, practical: 53 },
      { year: 2023, written: 48, practical: 52 },
      { year: 2024, written: 50, practical: 54 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '빅데이터 분석 기획', desc: '데이터 분석 기획, 문제 정의 및 분석 절차' },
      { name: '빅데이터 탐색', desc: '데이터 수집·전처리, 탐색적 데이터 분석(EDA)' },
      { name: '빅데이터 모델링', desc: '머신러닝·딥러닝 알고리즘 선택 및 모델 학습' },
      { name: '빅데이터 결과 해석', desc: '모델 평가 지표, 결과 해석 및 시각화' },
      { name: '빅데이터 관련 법규', desc: '개인정보보호법, 데이터 산업 진흥법 기준' },
    ],
    jobs: [
      { title: '데이터 분석가', company: 'IT·플랫폼 기업', salary: '5,000~8,000만원', location: '서울/판교', type: '정규직' },
      { title: '머신러닝 엔지니어', company: 'AI·빅테크 기업', salary: '6,000~10,000만원', location: '서울/판교', type: '정규직' },
      { title: '비즈니스 인텔리전스(BI) 전문가', company: '금융·유통·제조', salary: '4,800~7,000만원', location: '서울/경기', type: '정규직' },
      { title: '데이터 엔지니어', company: '클라우드·테크기업', salary: '5,500~9,000만원', location: '서울/판교', type: '정규직' },
      { title: '데이터 분석 컨설턴트', company: '컨설팅 전문사', salary: '4,500~6,500만원', location: '서울', type: '계약직' },
    ],
    books: [
      { title: '빅데이터분석기사 필기+실기 한권완성', author: '신용균', publisher: '이기적', year: 2024, rating: 4.6 },
      { title: '빅데이터분석기사 실기 파이썬 완전정복', author: '장동원', publisher: '한빛미디어', year: 2024, rating: 4.5 },
      { title: '빅데이터분석기사 필기 핵심이론', author: '김현수', publisher: '성안당', year: 2023, rating: 4.4 },
      { title: '빅데이터분석기사 기출문제 완벽 분석', author: '이승민', publisher: '예문사', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  'SQLD': {
    name: 'SQLD',
    icon: 'fa-database',
    category: 'IT·정보',
    heroTitle: '2026년도 SQLD 합격 가이드',
    heroDesc: 'SQLD(SQL 개발자)는 데이터베이스 설계·관리와 SQL 작성 능력을 검증하는 한국데이터산업진흥원 공인 자격증입니다. 백엔드 개발자, 데이터 분석가, DBA를 목표로 하는 취업 준비생에게 필수적인 자격으로 인정받고 있습니다. 비전공자도 단기 취득이 가능해 IT 분야 입문 자격으로 높은 인기를 자랑합니다.',
    passRateSummary: '필기 50% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 48, practical: 53 },
      { year: 2021, written: 49, practical: 54 },
      { year: 2022, written: 51, practical: 56 },
      { year: 2023, written: 50, practical: 55 },
      { year: 2024, written: 52, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-03-14 ~ 2026-03-14', writtenResult: '2026-04-04', practicalExam: '2026-03-14 ~ 2026-03-14', practicalResult: '2026-04-04' },
      { round: '2회', writtenExam: '2026-06-20 ~ 2026-06-20', writtenResult: '2026-07-11', practicalExam: '2026-06-20 ~ 2026-06-20', practicalResult: '2026-07-11' },
      { round: '3회', writtenExam: '2026-09-26 ~ 2026-09-26', writtenResult: '2026-10-17', practicalExam: '2026-09-26 ~ 2026-09-26', practicalResult: '2026-10-17' },
    ],
    milestones: [
      { label: '1회 시험', date: '2026-03-14' },
      { label: '1회 결과', date: '2026-04-04' },
      { label: '2회 시험', date: '2026-06-20' },
      { label: '2회 결과', date: '2026-07-11' },
    ],
    subjects: [
      { name: '데이터 모델링의 이해', desc: '엔티티, 속성, 관계 및 ERD 설계 이론' },
      { name: '데이터 모델과 SQL', desc: '정규화, 반정규화 및 성능 데이터 모델링' },
      { name: 'SQL 기본 및 활용', desc: 'DML, DDL, DCL 및 고급 SQL 작성 기법' },
      { name: 'SQL 최적화 기본 원리', desc: '인덱스, 실행 계획 분석 및 튜닝 기법' },
      { name: '관계형 데이터베이스 개요', desc: 'DBMS 아키텍처, 트랜잭션 및 잠금 관리' },
    ],
    jobs: [
      { title: '백엔드 개발자', company: 'IT·스타트업·대기업', salary: '4,500~8,000만원', location: '서울/판교', type: '정규직' },
      { title: '데이터베이스 관리자(DBA)', company: '금융·공공기관', salary: '5,000~7,500만원', location: '서울/경기', type: '정규직' },
      { title: '데이터 분석가', company: 'IT·마케팅 기업', salary: '4,000~6,500만원', location: '서울/경기', type: '정규직' },
      { title: 'ERP 시스템 운영자', company: '제조·금융 기업', salary: '3,800~5,500만원', location: '서울/수도권', type: '정규직' },
      { title: 'SQL 튜닝 컨설턴트', company: 'IT 컨설팅사', salary: '4,000~6,000만원', location: '서울', type: '계약직' },
    ],
    books: [
      { title: 'SQL 자격검정 실전문제 (SQLD)', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', year: 2024, rating: 4.7 },
      { title: 'SQLD 노랭이 (핵심이론+문제집)', author: '조시형', publisher: '영진닷컴', year: 2024, rating: 4.6 },
      { title: 'SQLD 단기완성 핵심요약', author: '강현우', publisher: '이기적', year: 2023, rating: 4.5 },
      { title: 'SQL 개발자 기출문제 완전정복', author: '박성호', publisher: '성안당', year: 2024, rating: 4.4 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '토목기사': {
    name: '토목기사',
    icon: 'fa-road',
    category: '건설',
    heroTitle: '2026년도 토목기사 합격 가이드',
    heroDesc: '토목기사는 도로, 교량, 댐, 터널 등 사회 기반 시설의 계획·설계·시공·관리에 필요한 전문 기술을 인증하는 국가자격증입니다. 국토개발, 스마트시티, SOC 투자 확대로 토목 기술자의 수요가 지속됩니다. 공기업·대형 건설사에서 안정적인 커리어를 쌓을 수 있습니다.',
    passRateSummary: '필기 30% | 실기 40%',
    avgPassRate: '35%',
    passRates: [
      { year: 2020, written: 28, practical: 38 },
      { year: 2021, written: 29, practical: 39 },
      { year: 2022, written: 31, practical: 41 },
      { year: 2023, written: 30, practical: 40 },
      { year: 2024, written: 32, practical: 42 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '응용역학', desc: '구조물 해석, 트러스·라멘 부재력 계산' },
      { name: '수리·수문학', desc: '유체 흐름, 홍수 빈도 분석 및 수문 계산' },
      { name: '토질 및 기초공학', desc: '지반 조사, 지지력·침하 계산 및 기초 설계' },
      { name: '측량학', desc: '각도·거리 측량, 노선 및 지적 측량 기법' },
      { name: '철근콘크리트 및 강구조', desc: 'RC 구조 설계, 강재 접합 및 시공 기준' },
    ],
    jobs: [
      { title: '토목 설계 엔지니어', company: '설계·엔지니어링사', salary: '4,200~6,000만원', location: '서울/경기', type: '정규직' },
      { title: '건설 현장 토목 기술자', company: '대형 건설사', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
      { title: '인프라 감리원', company: '감리 전문사', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '지방 SOC 사업 관리자', company: '지자체·공기업', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '토목 시공 감독', company: '건설 전문업체', salary: '3,800~5,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '토목기사 필기 핵심이론 총정리', author: '이재철', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '토목기사 실기 완전정복', author: '박동현', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '토목기사 최근 기출문제해설', author: '김성훈', publisher: '일진사', year: 2023, rating: 4.4 },
      { title: '토목기사 응용역학·수리학 집중완성', author: '정대현', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '건축기사': {
    name: '건축기사',
    icon: 'fa-building',
    category: '건설',
    heroTitle: '2026년도 건축기사 합격 가이드',
    heroDesc: '건축기사는 건축물의 계획·설계·시공·관리에 필요한 건축 공학 전반의 전문 능력을 인증하는 국가자격증입니다. 건설 경기 회복과 도심 재건축 수요로 건축 기술자에 대한 꾸준한 수요가 이어집니다. 건축사 취득을 위한 실무 경력 기산에도 활용되는 핵심 자격입니다.',
    passRateSummary: '필기 32% | 실기 38%',
    avgPassRate: '35%',
    passRates: [
      { year: 2020, written: 30, practical: 36 },
      { year: 2021, written: 31, practical: 37 },
      { year: 2022, written: 33, practical: 39 },
      { year: 2023, written: 32, practical: 38 },
      { year: 2024, written: 34, practical: 40 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '건축 계획', desc: '건축 공간 구성, 동선 계획 및 주거 형식' },
      { name: '건축 시공', desc: '기초·골조·마감 공사 방법 및 시공 관리' },
      { name: '건축 구조', desc: '구조 시스템 분류, 철근콘크리트·강구조 설계' },
      { name: '건축 설비', desc: '급배수·전기·공조·소방 설비 계획' },
      { name: '건축 관련 법규', desc: '건축법, 주택법 및 건설기술진흥법 기준' },
    ],
    jobs: [
      { title: '건축 설계 기사', company: '건축 설계 사무소', salary: '3,800~5,500만원', location: '서울/수도권', type: '정규직' },
      { title: '건축 시공 현장 기술자', company: '종합건설사', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
      { title: '건축 감리원', company: '감리 전문회사', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '건축 CM(건설사업관리) 기술자', company: 'CM 전문사', salary: '4,500~6,500만원', location: '서울/경기', type: '정규직' },
      { title: '건축 인허가 관리', company: '디벨로퍼·시행사', salary: '3,800~5,000만원', location: '서울/수도권', type: '계약직' },
    ],
    books: [
      { title: '건축기사 필기 핵심이론 완전정복', author: '강주현', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '건축기사 실기 도면작성 완전정복', author: '이승철', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '건축기사 기출문제 최신해설', author: '차민호', publisher: '일진사', year: 2023, rating: 4.4 },
      { title: '건축기사 법규·설비 핵심요약', author: '임정현', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '품질경영기사': {
    name: '품질경영기사',
    icon: 'fa-award',
    category: '품질·경영',
    heroTitle: '2026년도 품질경영기사 합격 가이드',
    heroDesc: '품질경영기사는 제품 및 서비스 품질 관리, ISO 품질 시스템 구축, 통계적 공정 관리(SPC) 등 품질경영 전반의 전문 능력을 인증하는 국가자격증입니다. 제조업 품질 혁신과 글로벌 표준화 요구 증가로 품질 전문가 수요가 지속됩니다. 자동차, 전자, 반도체 등 주요 제조 산업에서 필수 자격으로 인정받고 있습니다.',
    passRateSummary: '필기 38% | 실기 44%',
    avgPassRate: '41%',
    passRates: [
      { year: 2020, written: 36, practical: 42 },
      { year: 2021, written: 37, practical: 43 },
      { year: 2022, written: 39, practical: 45 },
      { year: 2023, written: 38, practical: 44 },
      { year: 2024, written: 40, practical: 46 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-26 ~ 2026-01-29', writtenResult: '2026-02-19', practicalExam: '2026-03-14 ~ 2026-03-27', practicalResult: '2026-04-17' },
      { round: '2회', writtenExam: '2026-04-06 ~ 2026-04-09', writtenResult: '2026-04-29', practicalExam: '2026-06-07 ~ 2026-06-20', practicalResult: '2026-07-10' },
      { round: '3회', writtenExam: '2026-07-13 ~ 2026-07-16', writtenResult: '2026-08-05', practicalExam: '2026-09-12 ~ 2026-09-25', practicalResult: '2026-10-16' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-26' },
      { label: '1회 실기', date: '2026-03-14' },
      { label: '2회 필기', date: '2026-04-06' },
      { label: '2회 실기', date: '2026-06-07' },
    ],
    subjects: [
      { name: '실험계획법', desc: '요인 배치, 분산분석 및 최적 조건 탐색' },
      { name: '통계적 품질관리', desc: '관리도, 공정능력 분석 및 샘플링 검사' },
      { name: '신뢰성 관리', desc: '고장 분석, FMEA 및 신뢰성 시험 기법' },
      { name: '품질경영', desc: 'ISO 9001, TQM, 6시그마 및 QC 7가지 도구' },
      { name: '품질경영 관련 법규', desc: '제품안전기본법 및 KS 표준화 관련 기준' },
    ],
    jobs: [
      { title: '품질관리(QC) 엔지니어', company: '자동차·전자 부품사', salary: '4,000~5,500만원', location: '경기/울산', type: '정규직' },
      { title: '품질보증(QA) 담당자', company: '제약·식품 제조사', salary: '4,000~5,500만원', location: '충북/경기', type: '정규직' },
      { title: '6시그마 블랙벨트 컨설턴트', company: '컨설팅·대기업', salary: '5,000~7,500만원', location: '서울/경기', type: '정규직' },
      { title: 'ISO 심사원', company: '인증 기관', salary: '4,500~6,000만원', location: '서울/전국', type: '정규직' },
      { title: '품질 시스템 감사원', company: '제조·엔지니어링', salary: '3,800~5,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '품질경영기사 필기 핵심이론', author: '유태현', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '품질경영기사 실기 완전정복', author: '심재용', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '품질경영기사 최근 기출문제해설', author: '이현준', publisher: '일진사', year: 2023, rating: 4.4 },
      { title: '품질경영기사 통계·신뢰성 집중완성', author: '송원철', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },


};

// ============================================
// 2. 앱 상태 관리
// ============================================
const STATE = {
  currentCert: '산업안전산업기사',
  activeTab: 'all-jobs',
  filters: { type: 'all', region: 'all', experience: 'all' },
  searchQuery: '',
  get bookmarks() { return JSON.parse(localStorage.getItem(`${this.currentCert}_bookmarks`)) || []; },
  setBookmarks(bm) { localStorage.setItem(`${this.currentCert}_bookmarks`, JSON.stringify(bm)); },
};

function getCert() { return CERTIFICATIONS[STATE.currentCert]; }

// ============================================
// 3. 초기화
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderAll();
  initEventListeners();
});

function renderAll() {
  const cert = getCert();
  updatePageMeta(cert);
  renderHero(cert);
  renderScheduleCards(cert);
  renderStatCards(cert);
  renderDdays(cert);
  renderJobs();
  renderBooks();
  renderChart(cert);
  renderSubjects(cert);
}

// ============================================
// 4. 자격증 전환
// ============================================
function switchCertification(certName) {
  if (!CERTIFICATIONS[certName] || certName === STATE.currentCert) return;

  STATE.currentCert = certName;
  STATE.activeTab = 'all-jobs';
  STATE.filters = { type: 'all', region: 'all', experience: 'all' };
  STATE.searchQuery = '';

  // 필터 버튼 초기화
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-value') === 'all');
  });

  const searchInput = document.getElementById('global-search');
  searchInput.value = certName;

  renderAll();

  // 탭 싱크
  document.getElementById('view-all-jobs').classList.add('active');
  document.getElementById('view-bookmarked-jobs').classList.remove('active');

  // 상단으로 스크롤
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// 5. 페이지 메타·헤더 업데이트
// ============================================
function updatePageMeta(cert) {
  document.title = `${cert.name} 올인원 대시보드 - 채용 및 시험 일정`;
  document.getElementById('header-cert-name').textContent = cert.name;
}

// ============================================
// 6. 히어로 섹션 업데이트
// ============================================
function renderHero(cert) {
  document.getElementById('hero-title').textContent = cert.heroTitle;
  document.getElementById('hero-desc').textContent = cert.heroDesc;
  const iconEl = document.querySelector('.shield-graphic i');
  if (iconEl) { iconEl.className = `fa-solid ${cert.icon}`; }
}

// ============================================
// 7. 스탯 카드 업데이트
// ============================================
function renderStatCards(cert) {
  const passValEl = document.querySelector('#stat-pass .stat-value');
  const passDescEl = document.querySelector('#stat-pass .stat-desc');
  if (passValEl) passValEl.textContent = cert.avgPassRate;
  if (passDescEl) passDescEl.textContent = cert.passRateSummary;
  document.getElementById('bookmark-count').textContent = STATE.bookmarks.length;
}

// ============================================
// 8. 시험 일정 카드 렌더링 (동적)
// ============================================
function renderScheduleCards(cert) {
  const grid = document.getElementById('schedule-cards-grid');
  if (!grid) return;

  grid.innerHTML = cert.schedules.map((s, idx) => {
    const badgeClass = s.isCurrent ? 'current' : '';
    const cardClass = (!s.isDone || s.isCurrent) ? 'active-round' : '';

    let statusTag = '';
    if (s.isDone) {
      statusTag = '<span class="status-tag status-closed">진행 완료</span>';
    } else if (s.isCurrent) {
      statusTag = `<span class="status-tag status-active" id="current-round-status">진행 중</span>`;
    } else {
      statusTag = '<span class="status-tag status-upcoming">접수 예정</span>';
    }

    return `
      <div class="schedule-card ${cardClass}" id="schedule-card-${idx + 1}">
        <div class="round-badge ${badgeClass}">${s.round}</div>
        <ul class="schedule-details">
          <li><span class="detail-label">필기 원서접수</span><span class="detail-val">${s.writtenApply}</span></li>
          <li><span class="detail-label">필기 시험기간</span><span class="detail-val">${s.writtenExam}</span></li>
          <li><span class="detail-label">필기 합격발표</span><span class="detail-val">${s.writtenResult}</span></li>
          <li><span class="detail-label">실기 원서접수</span><span class="detail-val">${s.practicalApply}</span></li>
          <li><span class="detail-label">실기 시험기간</span><span class="detail-val">${s.practicalExam}</span></li>
          <li><span class="detail-label">최종 합격발표</span><span class="detail-val highlight-text">${s.finalResult}</span></li>
        </ul>
        <div class="schedule-card-footer">${statusTag}</div>
      </div>
    `;
  }).join('');
}

// ============================================
// 9. D-Day 계산 및 타임라인
// ============================================
function renderDdays(cert) {
  const now = new Date();
  const today = now.getFullYear() === 2026
    ? new Date(now.getFullYear(), now.getMonth(), now.getDate())
    : new Date('2026-06-07');

  const milestones = cert.milestones;
  let nextMilestone = milestones.find(m => new Date(m.date) >= today) || null;

  const ddayValEl = document.getElementById('next-exam-dday');
  const ddayLabelEl = document.getElementById('next-exam-label');
  const timelineEl = document.getElementById('timeline-progress-bar');

  if (nextMilestone) {
    const diffDays = Math.ceil((new Date(nextMilestone.date) - today) / 86400000);
    ddayValEl.textContent = diffDays === 0 ? 'D-Day' : `D-${diffDays}`;
    ddayValEl.className = 'stat-value text-red';
    ddayLabelEl.textContent = `${nextMilestone.label} (${nextMilestone.date})`;
  } else {
    ddayValEl.textContent = '시험 종료';
    ddayLabelEl.textContent = '2026년 정기 시험 일정이 모두 종료되었습니다.';
  }

  // 타임라인 노드 상태
  const schedules = cert.schedules;
  const nodes = [
    document.getElementById('node-round1'),
    document.getElementById('node-round2'),
    document.getElementById('node-round3'),
  ];
  nodes.forEach(n => n && n.classList.remove('active'));

  let doneCount = 0;
  schedules.forEach((s, i) => {
    if (s.isDone || s.isCurrent) {
      nodes[i] && nodes[i].classList.add('active');
      doneCount = i + 1;
    }
  });

  const progressPct = Math.min(100, Math.round((doneCount / schedules.length) * 100));
  if (timelineEl) timelineEl.style.width = `${progressPct}%`;

  // 현재 회차 실기 접수 D-Day 업데이트
  const currentSchedule = schedules.find(s => s.isCurrent);
  if (currentSchedule) {
    const practicalDate = cert.milestones.find(m => m.label.includes('실기 접수') && m.label.includes('2회'));
    if (practicalDate) {
      const practicalDiff = Math.ceil((new Date(practicalDate.date) - today) / 86400000);
      const statusEl = document.getElementById('current-round-status');
      if (statusEl && practicalDiff > 0) {
        statusEl.textContent = `실기 원서접수 대기 (D-${practicalDiff})`;
      }
    }
  }
}

// ============================================
// 10. 채용 공고 렌더링 & 필터링
// ============================================
function renderJobs() {
  const jobs = getCert().jobs;
  const container = document.getElementById('jobs-grid-container');
  const countEl = document.getElementById('total-jobs-count');

  const filtered = jobs.filter(job => {
    if (STATE.activeTab === 'bookmarked' && !STATE.bookmarks.includes(job.id)) return false;
    if (STATE.filters.type !== 'all' && job.type !== STATE.filters.type) return false;
    if (STATE.filters.region !== 'all' && job.region !== STATE.filters.region && job.region !== 'all') return false;
    if (STATE.filters.experience !== 'all') {
      if (STATE.filters.experience === 'new' && job.experience === 'exp') return false;
      if (STATE.filters.experience === 'exp' && job.experience === 'new') return false;
    }
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase();
      if (!job.company.toLowerCase().includes(q) &&
          !job.title.toLowerCase().includes(q) &&
          !job.duties.toLowerCase().includes(q) &&
          !job.requirements.some(r => r.toLowerCase().includes(q))) return false;
    }
    return true;
  });

  countEl.textContent = `${filtered.length}건`;
  document.getElementById('bookmark-count').textContent = STATE.bookmarks.length;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state"><i class="fa-regular fa-folder-open"></i><p>해당하는 조건의 채용 공고가 없습니다.</p><button class="btn btn-secondary" onclick="resetFilters()">필터 초기화</button></div>`;
    renderActiveFilters();
    return;
  }

  const today = new Date('2026-06-07');
  const typeMap = { public: '공기업', large: '대기업', mid: '중견/강소', consult: '안전진단' };
  const regionMap = { all: '전국', seoul: '수도권', gong: '영남권', honam: '호남권', chung: '충청권' };
  const expMap = { new: '신입', exp: '경력', any: '무관' };

  container.innerHTML = filtered.map(job => {
    const deadlineDate = new Date(job.deadline);
    const diff = Math.ceil((deadlineDate - today) / 86400000);
    let ddayText = diff < 0 ? '마감' : diff === 0 ? '오늘마감' : `D-${diff}`;
    let ddayClass = diff < 0 ? 'dday-grey' : diff <= 7 ? 'dday-red' : diff <= 15 ? 'dday-orange' : 'dday-green';
    const isBookmarked = STATE.bookmarks.includes(job.id);
    const bmIcon = isBookmarked ? 'fa-solid fa-bookmark bookmarked' : 'fa-regular fa-bookmark';

    return `
      <div class="job-card" onclick="openJobDetail('${job.id}')">
        <div class="job-card-header">
          <div class="company-logo-placeholder">${job.company.substring(0, 2)}</div>
          <button class="job-bookmark-btn" onclick="toggleBookmark(event, '${job.id}')"><i class="${bmIcon}"></i></button>
        </div>
        <div class="job-card-meta">
          <span class="company-name">${job.company}</span>
          <h3 class="job-title">${job.title}</h3>
        </div>
        <div class="job-tags">
          <span class="job-tag">${typeMap[job.type] || ''}</span>
          <span class="job-tag">${regionMap[job.region] || ''}</span>
          <span class="job-tag">${expMap[job.experience] || ''}</span>
        </div>
        <div class="job-card-body">
          <div class="job-info-line"><i class="fa-solid fa-coins"></i><span>${job.salary}</span></div>
          <div class="job-info-line"><i class="fa-solid fa-certificate"></i><span>${STATE.currentCert} 우대/필수</span></div>
        </div>
        <div class="job-card-footer">
          <span class="dday-badge ${ddayClass}">${ddayText}</span>
          <span class="detail-link-btn">자세히 보기 <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    `;
  }).join('');

  renderActiveFilters();
}

function renderActiveFilters() {
  const container = document.getElementById('active-filters-tags');
  const tags = [];
  if (STATE.filters.type !== 'all') {
    const el = document.querySelector(`#filter-type [data-value="${STATE.filters.type}"]`);
    if (el) tags.push(`<button class="tag-btn" onclick="clearFilter('type')">기업: ${el.textContent} &times;</button>`);
  }
  if (STATE.filters.region !== 'all') {
    const el = document.querySelector(`#filter-region [data-value="${STATE.filters.region}"]`);
    if (el) tags.push(`<button class="tag-btn" onclick="clearFilter('region')">지역: ${el.textContent} &times;</button>`);
  }
  if (STATE.filters.experience !== 'all') {
    const el = document.querySelector(`#filter-experience [data-value="${STATE.filters.experience}"]`);
    if (el) tags.push(`<button class="tag-btn" onclick="clearFilter('experience')">경력: ${el.textContent} &times;</button>`);
  }
  if (tags.length > 0) tags.push(`<button class="tag-btn" style="background:var(--danger-color);color:#fff" onclick="resetFilters()">전체 초기화</button>`);
  container.innerHTML = tags.join('');
}

window.clearFilter = function(key) {
  STATE.filters[key] = 'all';
  document.querySelectorAll(`#filter-${key} .filter-btn`).forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-value') === 'all');
  });
  renderJobs();
};

window.resetFilters = function() {
  STATE.filters = { type: 'all', region: 'all', experience: 'all' };
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-value') === 'all');
  });
  renderJobs();
};

// ============================================
// 11. 북마크
// ============================================
window.toggleBookmark = function(event, jobId) {
  event.stopPropagation();
  const bm = STATE.bookmarks;
  const idx = bm.indexOf(jobId);
  if (idx === -1) bm.push(jobId); else bm.splice(idx, 1);
  STATE.setBookmarks(bm);
  renderJobs();
  document.getElementById('bookmark-count').textContent = STATE.bookmarks.length;
};

// ============================================
// 12. 모달
// ============================================
window.openJobDetail = function(jobId) {
  const job = getCert().jobs.find(j => j.id === jobId);
  if (!job) return;

  const regionMap = { all: '전국 근무', seoul: '수도권 현장/사무소', gong: '영남권 공장/현장', honam: '호남권 본부/사업소', chung: '충청권 사업장' };
  const expMap = { new: '신입 대상', exp: '경력 요함', any: '학력/경력 무관' };
  const today = new Date('2026-06-07');
  const diff = Math.ceil((new Date(job.deadline) - today) / 86400000);
  const deadlineText = diff < 0 ? `마감됨 (${job.deadline})` : diff === 0 ? `오늘 마감! (${job.deadline})` : `D-${diff} (${job.deadline})`;

  document.getElementById('modal-company-name').textContent = job.company;
  document.getElementById('modal-job-title').textContent = job.title;
  document.getElementById('modal-salary').textContent = job.salary;
  document.getElementById('modal-location').textContent = regionMap[job.region] || job.region;
  document.getElementById('modal-experience').textContent = expMap[job.experience] || job.experience;
  const deadlineEl = document.getElementById('modal-deadline');
  deadlineEl.textContent = deadlineText;
  deadlineEl.className = diff < 0 ? 'info-value' : 'info-value text-red';
  document.getElementById('modal-duties').textContent = job.duties;
  document.getElementById('modal-requirements').innerHTML = job.requirements.map(r => `<li>${r}</li>`).join('');
  document.getElementById('modal-benefits').textContent = job.benefits;

  const bookmarkBtn = document.getElementById('modal-bookmark-btn');
  const isBookmarked = STATE.bookmarks.includes(job.id);
  bookmarkBtn.innerHTML = isBookmarked ? '<i class="fa-solid fa-bookmark"></i> 북마크 해제' : '<i class="fa-regular fa-bookmark"></i> 북마크 추가';
  bookmarkBtn.onclick = (e) => {
    toggleBookmark(e, job.id);
    const nowBm = STATE.bookmarks.includes(job.id);
    bookmarkBtn.innerHTML = nowBm ? '<i class="fa-solid fa-bookmark"></i> 북마크 해제' : '<i class="fa-regular fa-bookmark"></i> 북마크 추가';
  };

  document.getElementById('modal-apply-link').href = job.link;
  document.getElementById('job-detail-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  document.getElementById('job-detail-modal').classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================
// 13. 수험서 렌더링
// ============================================
function renderBooks() {
  const container = document.getElementById('books-grid-container');
  if (!container) return;

  // 실제 도서 데이터 우선, 없으면 기본 데이터 사용
  const certName = STATE.currentCert;
  const books = (typeof REAL_BOOKS !== 'undefined' && REAL_BOOKS[certName])
    ? REAL_BOOKS[certName]
    : getCert().books;

  container.innerHTML = books.map(book => {
    const tags = book.tags || [];
    const badgesHTML = tags.map(t => {
      let cls = t === '베스트' ? 'book-badge' : t === '추천' ? 'badge badge-success' : 'badge badge-info';
      return `<span class="${cls}" style="margin-right:4px">${t}</span>`;
    }).join('');

    // 실제 이미지 vs 목업
    const coverHTML = book.imageUrl
      ? `<img src="${book.imageUrl}" alt="${book.title}" class="book-cover-img"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
         <div class="book-cover-mock" style="background:${book.coverBg||'linear-gradient(135deg,#0d1f5e,#4db843)'}; display:none;">
           <span class="book-cover-title">${book.title.replace(/\([^)]*\)/g, '').trim()}</span>
           <span class="book-cover-publisher">${book.publisher}</span>
         </div>`
      : `<div class="book-cover-mock" style="background:${book.coverBg||'linear-gradient(135deg,#0d1f5e,#4db843)'}">
           <span class="book-cover-title">${book.title.replace(/\([^)]*\)/g, '').trim()}</span>
           <span class="book-cover-publisher">${book.publisher}</span>
         </div>`;

    const price = book.price || 0;
    const originalPrice = book.originalPrice || price;
    const discount = book.discount || '';
    const reviews = book.reviews || 0;
    const rating = book.rating || 4.5;
    const pageUrl = book.pageUrl || 'https://www.yes24.com/Category/Display/003004001';

    return `
      <div class="book-card">
        <div class="book-cover-container">
          ${coverHTML}
          <div class="book-badge-container">${badgesHTML}</div>
        </div>
        <div class="book-info">
          <span class="book-publisher">${book.publisher} 수험서</span>
          <h4 class="book-title" title="${book.title}">${book.title}</h4>
          <div class="book-rating"><i class="fa-solid fa-star"></i><span>${rating} <span>(${reviews}평)</span></span></div>
          <div class="book-price-area">
            ${discount ? `<span class="book-discount">${discount}</span>` : ''}
            <span class="book-price">${price.toLocaleString()}원</span>
            ${originalPrice > price ? `<span class="book-original-price">${originalPrice.toLocaleString()}원</span>` : ''}
          </div>
        </div>
        <a href="${pageUrl}" target="_blank" rel="noopener noreferrer" class="book-btn">교보문고 상세보기</a>
      </div>
    `;
  }).join('');
}

// ============================================
// 14. 합격률 차트 (SVG 동적 생성)
// ============================================
function renderChart(cert) {
  const wrapper = document.querySelector('.chart-wrapper');
  if (!wrapper) return;

  const rates = cert.passRates;
  const xPos = [70, 160, 250, 340, 430];
  const minV = 10, maxV = 70, chartH = 150;

  function toY(v) { return 190 - ((v - minV) / (maxV - minV)) * chartH; }

  const gridLines = [20, 30, 40, 50, 60].map(v => `
    <line x1="50" y1="${toY(v).toFixed(1)}" x2="470" y2="${toY(v).toFixed(1)}" stroke="var(--border-color)" stroke-dasharray="4"/>
    <text x="40" y="${(toY(v) + 5).toFixed(1)}" class="chart-text" text-anchor="end">${v}%</text>
  `).join('');

  const xLabels = rates.map((r, i) =>
    `<text x="${xPos[i]}" y="220" class="chart-text" text-anchor="middle">${r.year}년</text>`
  ).join('');

  const wPath = rates.map((r, i) => `${i === 0 ? 'M' : 'L'} ${xPos[i]} ${toY(r.written).toFixed(1)}`).join(' ');
  const pPath = rates.map((r, i) => `${i === 0 ? 'M' : 'L'} ${xPos[i]} ${toY(r.practical).toFixed(1)}`).join(' ');

  const wPoints = rates.map((r, i) => `
    <circle cx="${xPos[i]}" cy="${toY(r.written).toFixed(1)}" r="5" fill="#f59e0b"/>
    <text x="${xPos[i]}" y="${(toY(r.written) - 10).toFixed(1)}" class="chart-value-label" fill="#f59e0b" text-anchor="middle">${r.written}%</text>
  `).join('');

  const pPoints = rates.map((r, i) => `
    <circle cx="${xPos[i]}" cy="${toY(r.practical).toFixed(1)}" r="5" fill="#1a3a6b"/>
    <text x="${xPos[i]}" y="${(toY(r.practical) - 10).toFixed(1)}" class="chart-value-label" fill="#1a3a6b" text-anchor="middle">${r.practical}%</text>
  `).join('');

  wrapper.innerHTML = `
    <svg viewBox="0 0 500 240" class="pass-rate-svg">
      ${gridLines}
      ${xLabels}
      <path d="${wPath}" fill="none" stroke="#f59e0b" stroke-width="3"/>
      ${wPoints}
      <path d="${pPath}" fill="none" stroke="#1a3a6b" stroke-width="3"/>
      ${pPoints}
    </svg>
  `;
}

// ============================================
// 15. 과목 분석 렌더링
// ============================================
function renderSubjects(cert) {
  const list = document.getElementById('subject-list');
  if (!list) return;
  list.innerHTML = cert.subjects.map((s, i) => `
    <div class="subject-item">
      <span class="subject-num">${i + 1}</span>
      <div class="subject-details">
        <h5>${s.title}</h5>
        <p>${s.tip}</p>
      </div>
    </div>
  `).join('');
}

// ============================================
// 16. 자격증 검색 드롭다운
// ============================================
function renderCertDropdown(query) {
  const dropdown = document.getElementById('cert-dropdown');
  if (!query.trim()) { dropdown.classList.remove('visible'); return; }

  const matches = Object.keys(CERTIFICATIONS).filter(name =>
    name.includes(query) || query.includes(name.substring(0, 2))
  );

  if (matches.length === 0) { dropdown.classList.remove('visible'); return; }

  dropdown.innerHTML = matches.map(name => {
    const cert = CERTIFICATIONS[name];
    return `
      <div class="cert-dropdown-item" onclick="selectCert('${name}')">
        <i class="fa-solid ${cert.icon} cert-dd-icon"></i>
        <div class="cert-dd-info">
          <span class="cert-dd-name">${name}</span>
          <span class="cert-dd-meta">${cert.category} · 평균 합격률 ${cert.avgPassRate}</span>
        </div>
      </div>
    `;
  }).join('');
  dropdown.classList.add('visible');
}

window.selectCert = function(certName) {
  const dropdown = document.getElementById('cert-dropdown');
  dropdown.classList.remove('visible');
  switchCertification(certName);
};


// ============================================
// 18. 다크모드 테마
// ============================================
function initTheme() {
  const saved = localStorage.getItem('dashboard_theme');
  const themeBtn = document.getElementById('theme-toggle-btn');
  const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.body.classList.toggle('dark-theme', isDark);
  themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('dashboard_theme', isDark ? 'dark' : 'light');
  document.getElementById('theme-toggle-btn').innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

// ============================================
// 19. 이벤트 리스너 등록
// ============================================
function initEventListeners() {
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

  // 모달 닫기
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('job-detail-modal').addEventListener('click', e => {
    if (e.target.id === 'job-detail-modal') closeModal();
  });

  // 자격증 검색 드롭다운
  const searchInput = document.getElementById('global-search');
  searchInput.value = STATE.currentCert;

  searchInput.addEventListener('input', e => {
    renderCertDropdown(e.target.value);
  });
  searchInput.addEventListener('focus', e => {
    if (e.target.value) renderCertDropdown(e.target.value);
  });
  searchInput.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const query = e.target.value.trim();
    if (!query) return;
    // 정확히 일치하는 자격증 먼저, 없으면 포함하는 첫 번째
    const exact = Object.keys(CERTIFICATIONS).find(name => name === query);
    const partial = Object.keys(CERTIFICATIONS).find(name =>
      name.includes(query) || query.includes(name.substring(0, 2))
    );
    const target = exact || partial;
    if (target) {
      document.getElementById('cert-dropdown').classList.remove('visible');
      switchCertification(target);
    }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.header-search-bar')) {
      document.getElementById('cert-dropdown').classList.remove('visible');
    }
  });

  // 북마크 버튼
  document.getElementById('bookmark-filter-btn').addEventListener('click', () => {
    document.getElementById('jobs-section').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('view-all-jobs').classList.remove('active');
    document.getElementById('view-bookmarked-jobs').classList.add('active');
    STATE.activeTab = 'bookmarked';
    renderJobs();
  });

  // 채용 탭 토글
  document.getElementById('view-all-jobs').addEventListener('click', e => {
    document.getElementById('view-bookmarked-jobs').classList.remove('active');
    e.target.classList.add('active');
    STATE.activeTab = 'all-jobs';
    renderJobs();
  });
  document.getElementById('view-bookmarked-jobs').addEventListener('click', e => {
    document.getElementById('view-all-jobs').classList.remove('active');
    e.target.classList.add('active');
    STATE.activeTab = 'bookmarked';
    renderJobs();
  });

  // 필터 버튼
  const setupFilter = (groupId, key) => {
    document.getElementById(groupId).addEventListener('click', e => {
      if (!e.target.classList.contains('filter-btn')) return;
      e.target.closest('.filter-group').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      STATE.filters[key] = e.target.getAttribute('data-value');
      renderJobs();
    });
  };
  setupFilter('filter-type', 'type');
  setupFilter('filter-region', 'region');
  setupFilter('filter-experience', 'experience');

  // 플래너
  document.getElementById('planner-add-btn').addEventListener('click', window.addTodo);
  document.getElementById('planner-input').addEventListener('keypress', e => {
    if (e.key === 'Enter') window.addTodo();
  });

  // 사이드바 스크롤 싱크
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.dashboard-section');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        const id = section.getAttribute('id');
        navItems.forEach(item => item.classList.toggle('active', item.getAttribute('href') === `#${id}`));
      }
    });
  });
  navItems.forEach(item => item.addEventListener('click', () => {
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
  }));
}


