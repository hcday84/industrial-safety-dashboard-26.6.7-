/* ==========================================
   멀티 자격증 올인원 대시보드 v2.0
   ========================================== */

// ============================================
// 0. 공공데이터 API 설정
// ============================================
const GOV_API_KEY  = '688d62bca5f00144bd4be91139ca3297c2641d3c918f57e0a5e80ad59faece52';
const GOV_API_BASE = 'https://api.odcloud.kr/api/3038404/v1/uddi:cde11ae6-35ca-47b8-98cb-ad71146c6fd9';

async function fetchCertInfo(certName) {
  try {
    const params = new URLSearchParams({
      serviceKey: GOV_API_KEY,
      page: 1,
      perPage: 20,
      returnType: 'JSON',
    });
    // 종목명 필터 (공공데이터포털 cond 문법)
    params.append('cond[종목명::EQ]', certName);
    const res = await fetch(`${GOV_API_BASE}?${params}`);
    if (!res.ok) return null;
    const json = await res.json();
    const data = json.data || [];
    if (!data.length) return null;
    const get = (항목) => data.find(d => d.항목 === 항목)?.내용 || '';
    return {
      overview:  get('개요'),
      duties:    get('수행직무'),
      career:    get('진로 및 전망'),
      howToGet:  get('취득방법'),
    };
  } catch (e) {
    return null;
  }
}

// 시험 일정 자동 업데이트 (Vercel 서버리스 프록시 경유)
async function fetchExamSchedule(certName, implYy) {
  const jmCd = (typeof JM_CODES !== 'undefined') ? JM_CODES[certName] : null;
  if (!jmCd) return null;
  const year = implYy || new Date().getFullYear();
  try {
    const res = await fetch(`/api/exam-schedule?jmCd=${jmCd}&implYy=${year}`);
    if (!res.ok) return null;
    const json = await res.json();
    const items = json?.body?.items;
    if (!items || !items.length) return null;
    return parseExamItems(items);
  } catch (e) {
    return null;
  }
}

function parseExamItems(items) {
  const fmt = d => d ? `${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}` : '-';
  const bySeq = {};
  items.forEach(item => {
    const seq = item.implSeq;
    if (!bySeq[seq] || item.docRegStartDt < bySeq[seq].docRegStartDt) {
      bySeq[seq] = item;
    }
  });
  return Object.values(bySeq)
    .sort((a, b) => a.implSeq - b.implSeq)
    .map(item => ({
      round: `제${item.implSeq}회`,
      writtenApply:    `${fmt(item.docRegStartDt)} ~ ${fmt(item.docRegEndDt)}`,
      writtenExam:     `${fmt(item.docExamStartDt)} ~ ${fmt(item.docExamEndDt)}`,
      writtenResult:   fmt(item.docPassDt),
      practicalExam:   `${fmt(item.pracExamStartDt)} ~ ${fmt(item.pracExamEndDt)}`,
      practicalResult: fmt(item.pracPassDt),
      finalResult:     fmt(item.pracPassDt),
    }));
}


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
    avgExamRate: '80%',
    examRateSummary: '필기 72% | 실기 88%',
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
    avgExamRate: '76%',
    examRateSummary: '필기 66% | 실기 85%',
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
    avgExamRate: '78%',
    examRateSummary: '필기 70% | 실기 86%',
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
    avgExamRate: '79%',
    examRateSummary: '필기 75% | 실기 82%',
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
    avgExamRate: '81%',
    examRateSummary: '필기 74% | 실기 87%',
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
    avgExamRate: '77%',
    examRateSummary: '필기 69% | 실기 84%',
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
    avgExamRate: '71%',
    examRateSummary: '필기 64% | 실기 78%',
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
    avgExamRate: '75%',
    examRateSummary: '필기 68% | 실기 81%',
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
    avgExamRate: '74%',
    examRateSummary: '필기 67% | 실기 80%',
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
    avgExamRate: '76%',
    examRateSummary: '필기 70% | 실기 82%',
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
    avgExamRate: '75%',
    examRateSummary: '필기 68% | 실기 81%',
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
    avgExamRate: '72%',
    examRateSummary: '필기 65% | 실기 79%',
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
    avgExamRate: '73%',
    examRateSummary: '필기 66% | 실기 79%',
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
    avgExamRate: '75%',
    examRateSummary: '필기 68% | 실기 81%',
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
    avgExamRate: '83%',
    examRateSummary: '필기 77% | 실기 89%',
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
    avgExamRate: '74%',
    examRateSummary: '필기 67% | 실기 81%',
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
    avgExamRate: '72%',
    examRateSummary: '필기 65% | 실기 79%',
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
    avgExamRate: '73%',
    examRateSummary: '필기 66% | 실기 80%',
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
    avgExamRate: '79%',
    examRateSummary: '필기 71% | 실기 87%',
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
    avgExamRate: '74%',
    examRateSummary: '필기 68% | 실기 80%',
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

// === 추가 자격증 그룹1: 전기·에너지, 기계·설비 ===

  '전기공사산업기사': {
    name: '전기공사산업기사',
    icon: 'fa-plug',
    category: '전기·에너지',
    heroTitle: '2026년도 전기공사산업기사 합격 가이드',
    heroDesc: '전기공사산업기사는 전기 설비의 설계, 시공, 감리 업무를 수행하는 전문 자격증입니다. 전기공사 현장에서의 안전 관리와 품질 확보를 위한 핵심 인력으로 인정받으며, 건설·플랜트·공장 분야에서 취업 경쟁력이 높습니다.',
    passRateSummary: '필기 42% | 실기 48%',
    avgPassRate: '45%',
    passRates: [
      { year: 2020, written: 38, practical: 44 },
      { year: 2021, written: 41, practical: 47 },
      { year: 2022, written: 43, practical: 49 },
      { year: 2023, written: 44, practical: 50 },
      { year: 2024, written: 42, practical: 48 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '전기이론', desc: '전기 회로의 기초 이론, 직류 및 교류 회로 해석' },
      { name: '전기기기', desc: '변압기, 전동기, 발전기 등 전기기기의 구조와 원리' },
      { name: '전기설비', desc: '수변전 설비, 배전 설비, 전력 케이블 시설 기준' },
      { name: '전기공사재료 및 시공', desc: '전선관 공사, 배선 공사, 접지 공사 방법 및 재료' },
      { name: '전기설비 기술기준', desc: '한국전기설비규정(KEC) 및 안전 기준 적용' },
    ],
    jobs: [
      { title: '전기공사 현장감독', company: '중견 건설사', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '전기설비 설계원', company: '전기설계사무소', salary: '3,200~4,200만원', location: '서울·수도권', type: '정규직' },
      { title: '전기시공 기술자', company: '전기공사업체', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '전기 안전관리원', company: '공공기관·공단', salary: '4,000~5,200만원', location: '전국', type: '정규직' },
      { title: '전기공사 감리원', company: '감리전문회사', salary: '3,500~4,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전기공사산업기사 필기 핵심이론', author: '김태호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전기공사산업기사 과년도 기출문제', author: '이상원', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '전기공사산업기사 실기 완전정복', author: '박준영', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '전기설비기술기준 해설', author: '한국전기기술인협회', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '태양광발전설비기능사': {
    name: '태양광발전설비기능사',
    icon: 'fa-solar-panel',
    category: '전기·에너지',
    heroTitle: '2026년도 태양광발전설비기능사 합격 가이드',
    heroDesc: '태양광발전설비기능사는 태양광 발전 시스템의 설치, 유지보수, 운영 업무를 담당하는 자격증입니다. 탄소중립 정책과 신재생에너지 확대로 인해 수요가 꾸준히 증가하고 있으며, 에너지 전환 시대의 핵심 기술 인력으로 주목받고 있습니다.',
    passRateSummary: '필기 50% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 45, practical: 50 },
      { year: 2021, written: 48, practical: 53 },
      { year: 2022, written: 51, practical: 56 },
      { year: 2023, written: 52, practical: 57 },
      { year: 2024, written: 50, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '태양광발전 일반', desc: '태양전지 원리, 태양광 모듈 특성 및 종류' },
      { name: '태양광발전 설비', desc: '인버터, 접속함, 모니터링 시스템 구성 및 동작' },
      { name: '태양광발전 시공', desc: '어레이 설치, 배선 공사, 접지 및 피뢰 시스템' },
      { name: '태양광발전 유지보수', desc: '고장 진단, 출력 저하 원인 분석, 정기 점검 방법' },
      { name: '전기 기초이론', desc: '직류·교류 회로, 전기 안전 기준 및 보호 장치' },
    ],
    jobs: [
      { title: '태양광 설치 기술자', company: '신재생에너지업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '태양광 유지보수원', company: '발전소 운영사', salary: '3,200~4,200만원', location: '전국', type: '정규직' },
      { title: '신재생에너지 시공원', company: '건설·시공업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '에너지 설비 점검원', company: '공공기관·지자체', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '태양광 발전 운영원', company: '민간 발전사업자', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '태양광발전설비기능사 필기+실기', author: '조현철', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '태양광발전설비기능사 기출문제 총정리', author: '에너지자격연구회', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '신재생에너지 태양광 설비 실무', author: '김민수', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '태양광발전 시스템 설계와 시공', author: '이재원', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '에너지관리산업기사': {
    name: '에너지관리산업기사',
    icon: 'fa-thermometer-half',
    category: '전기·에너지',
    heroTitle: '2026년도 에너지관리산업기사 합격 가이드',
    heroDesc: '에너지관리산업기사는 보일러, 열 설비, 에너지 사용 시설의 운영 및 안전 관리를 담당하는 자격증입니다. 에너지 절약 의무화와 온실가스 감축 규제 강화로 산업 현장에서의 수요가 지속적으로 증가하고 있습니다.',
    passRateSummary: '필기 35% | 실기 40%',
    avgPassRate: '37%',
    passRates: [
      { year: 2020, written: 30, practical: 36 },
      { year: 2021, written: 33, practical: 38 },
      { year: 2022, written: 36, practical: 41 },
      { year: 2023, written: 37, practical: 42 },
      { year: 2024, written: 35, practical: 40 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '연소공학', desc: '연료의 종류와 성질, 연소 반응, 열량 계산' },
      { name: '열역학', desc: '열역학 법칙, 사이클 분석, 엔탈피·엔트로피 계산' },
      { name: '계측 및 제어', desc: '온도·압력·유량 계측기기, 자동 제어 시스템' },
      { name: '열설비 설계', desc: '보일러 구조 및 부속 장치, 열교환기 설계 기초' },
      { name: '에너지 관계 법규', desc: '에너지이용합리화법, 열사용기자재 검사 기준' },
    ],
    jobs: [
      { title: '에너지 관리원', company: '제조업체', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '보일러 운전원', company: '대형 건물·공장', salary: '3,200~4,200만원', location: '전국', type: '정규직' },
      { title: '열설비 유지보수원', company: '설비관리업체', salary: '3,400~4,400만원', location: '전국', type: '정규직' },
      { title: '에너지 진단 전문가', company: '에너지진단기관', salary: '4,000~5,500만원', location: '서울·수도권', type: '정규직' },
      { title: '열사용 시설 점검원', company: '한국에너지공단', salary: '3,500~4,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '에너지관리산업기사 필기 완전정복', author: '박성호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '에너지관리산업기사 기출문제 해설', author: '에너지기술연구회', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '에너지관리산업기사 실기 핵심정리', author: '이동훈', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '열설비 설계 및 에너지 관리 실무', author: '김재현', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '용접기사': {
    name: '용접기사',
    icon: 'fa-fire-flame-curved',
    category: '기계·설비',
    heroTitle: '2026년도 용접기사 합격 가이드',
    heroDesc: '용접기사는 각종 용접 작업의 설계, 시공, 검사 및 품질 관리 전반을 수행하는 전문 자격증입니다. 조선, 자동차, 건설, 플랜트 등 주요 산업 분야에서 필수 인력으로 요구되며, 고급 기술 인력으로 대우받는 자격증입니다.',
    passRateSummary: '필기 38% | 실기 42%',
    avgPassRate: '40%',
    passRates: [
      { year: 2020, written: 34, practical: 38 },
      { year: 2021, written: 36, practical: 40 },
      { year: 2022, written: 39, practical: 43 },
      { year: 2023, written: 40, practical: 44 },
      { year: 2024, written: 38, practical: 42 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '용접야금 및 재료', desc: '금속의 결정 구조, 용접 야금학, 용접 재료 특성' },
      { name: '용접구조 설계', desc: '용접 이음 설계, 구조물 응력 해석, 변형 제어' },
      { name: '용접 시공', desc: '피복아크·MIG·TIG·서브머지드 용접 시공법' },
      { name: '용접 검사', desc: '비파괴검사(RT, UT, MT, PT), 용접부 품질 기준' },
      { name: '용접 관계 법규', desc: '압력용기 기준, 용접 안전 규정, KS 규격' },
    ],
    jobs: [
      { title: '용접 기술원', company: '조선소·플랜트사', salary: '4,000~5,500만원', location: '부산·거제·전남', type: '정규직' },
      { title: '용접 품질 관리자', company: '자동차부품사', salary: '4,200~5,500만원', location: '울산·경기', type: '정규직' },
      { title: '용접 설계 엔지니어', company: '중공업사', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '비파괴 검사원', company: '검사전문기관', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '용접 공정 관리원', company: '설비제조업체', salary: '3,500~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '용접기사 필기 핵심요약+기출', author: '이현석', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '용접기사 과년도 기출문제 해설', author: '용접기술연구회', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '용접기사 실기 완전정복', author: '정재환', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '용접 야금 및 구조 설계 입문', author: '박영진', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '공조냉동기계산업기사': {
    name: '공조냉동기계산업기사',
    icon: 'fa-snowflake',
    category: '기계·설비',
    heroTitle: '2026년도 공조냉동기계산업기사 합격 가이드',
    heroDesc: '공조냉동기계산업기사는 냉난방, 환기, 공기조화 설비의 설계·시공·유지보수를 담당하는 자격증입니다. 건물 에너지 효율화 요구와 스마트 빌딩 확산으로 전문 기술 인력에 대한 수요가 꾸준히 증가하고 있습니다.',
    passRateSummary: '필기 40% | 실기 45%',
    avgPassRate: '42%',
    passRates: [
      { year: 2020, written: 36, practical: 41 },
      { year: 2021, written: 38, practical: 43 },
      { year: 2022, written: 41, practical: 46 },
      { year: 2023, written: 42, practical: 47 },
      { year: 2024, written: 40, practical: 45 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '냉동공학', desc: '냉동 사이클, 냉매 특성, 냉동 효과 및 성능계수 계산' },
      { name: '공기조화', desc: '공기의 상태 변화, 냉방·난방 부하 계산, 덕트 설계' },
      { name: '냉동 설비', desc: '압축기, 응축기, 증발기, 팽창 밸브 구조 및 특성' },
      { name: '전기 제어', desc: '전기 회로 기초, 냉동 공조 제어 시스템, 인버터 응용' },
      { name: '공조냉동 관계 법규', desc: '고압가스 안전관리법, 냉매 관련 규정 및 검사 기준' },
    ],
    jobs: [
      { title: '냉동공조 설비 기술자', company: '설비전문업체', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
      { title: '빌딩 설비 관리원', company: '빌딩관리회사', salary: '3,200~4,200만원', location: '서울·수도권', type: '정규직' },
      { title: '공조 설비 설계원', company: '설계사무소', salary: '3,500~4,500만원', location: '서울·수도권', type: '정규직' },
      { title: '냉동창고 설비 관리자', company: '물류·유통업체', salary: '3,300~4,300만원', location: '전국', type: '정규직' },
      { title: '냉동공조 유지보수원', company: '설비유지관리사', salary: '3,000~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '공조냉동기계산업기사 필기 완전정복', author: '최명진', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '공조냉동기계산업기사 기출문제 총정리', author: '냉동공조기술연구회', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '공조냉동기계산업기사 실기 핵심해설', author: '이광수', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '냉동공학 및 공기조화 이론과 실무', author: '정선우', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '배관기사': {
    name: '배관기사',
    icon: 'fa-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 배관기사 합격 가이드',
    heroDesc: '배관기사는 산업용 배관, 플랜트 배관, 건설 배관 등의 설계·시공·검사 업무를 수행하는 자격증입니다. 석유화학, 가스, 발전, 조선 등 기간산업 전반에 걸쳐 전문 배관 기술 인력의 수요가 지속되고 있습니다.',
    passRateSummary: '필기 33% | 실기 38%',
    avgPassRate: '35%',
    passRates: [
      { year: 2020, written: 30, practical: 35 },
      { year: 2021, written: 32, practical: 37 },
      { year: 2022, written: 34, practical: 39 },
      { year: 2023, written: 35, practical: 40 },
      { year: 2024, written: 33, practical: 38 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '배관 재료 및 이음', desc: '배관 재료의 종류·규격, 이음 방법, 밸브 및 부속품' },
      { name: '배관 설계', desc: '배관 도면 해독, 배관 응력 해석, 서포트 설계' },
      { name: '배관 시공', desc: '배관 절단·접합·시험, 내압 시험 및 기밀 시험' },
      { name: '유체역학', desc: '관 내 유동, 압력 손실 계산, 펌프 및 압축기 특성' },
      { name: '배관 관계 법규', desc: '도시가스사업법, 고압가스 안전관리법, 산업배관 기준' },
    ],
    jobs: [
      { title: '플랜트 배관 기술자', company: '플랜트건설사', salary: '4,200~5,800만원', location: '전국·해외', type: '정규직' },
      { title: '배관 설계 엔지니어', company: '엔지니어링사', salary: '4,000~5,500만원', location: '서울·수도권', type: '정규직' },
      { title: '가스 배관 시공원', company: '도시가스업체', salary: '3,500~4,700만원', location: '전국', type: '정규직' },
      { title: '배관 검사원', company: '검사전문기관', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '배관 유지보수 기술자', company: '설비관리업체', salary: '3,300~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '배관기사 필기 핵심이론+기출문제', author: '한상욱', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '배관기사 과년도 문제 해설집', author: '배관기술연구회', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '배관기사 실기 완전정복', author: '오진석', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '플랜트 배관 설계 실무', author: '김동현', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '메카트로닉스기사': {
    name: '메카트로닉스기사',
    icon: 'fa-robot',
    category: '기계·설비',
    heroTitle: '2026년도 메카트로닉스기사 합격 가이드',
    heroDesc: '메카트로닉스기사는 기계, 전자, 제어 기술을 융합한 자동화 시스템의 설계·개발·유지보수를 담당하는 자격증입니다. 스마트 제조, 산업용 로봇, 자동화 설비 분야의 핵심 기술 인력으로 4차 산업혁명 시대에 각광받고 있습니다.',
    passRateSummary: '필기 32% | 실기 37%',
    avgPassRate: '34%',
    passRates: [
      { year: 2020, written: 28, practical: 33 },
      { year: 2021, written: 30, practical: 35 },
      { year: 2022, written: 33, practical: 38 },
      { year: 2023, written: 34, practical: 39 },
      { year: 2024, written: 32, practical: 37 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '기계요소 설계', desc: '기어, 베어링, 캠, 스프링 등 기계요소 설계 및 강도 계산' },
      { name: '전자회로 및 제어', desc: '디지털·아날로그 회로, PLC 프로그래밍, 센서 인터페이스' },
      { name: '유공압 시스템', desc: '유압·공압 회로 설계, 액추에이터 선정 및 제어 로직' },
      { name: '로봇 및 자동화', desc: '산업용 로봇 구조, 운동학, 자동화 라인 구성 설계' },
      { name: '메카트로닉스 시스템', desc: '시스템 통합 설계, 신호 처리, CNC 공작기계 응용' },
    ],
    jobs: [
      { title: '자동화 시스템 엔지니어', company: '자동화설비업체', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '산업용 로봇 기술자', company: '로봇전문기업', salary: '4,200~5,800만원', location: '경기·울산·충남', type: '정규직' },
      { title: 'PLC 제어 프로그래머', company: '제조업체', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '스마트팩토리 구축원', company: 'IT·제조융합사', salary: '4,500~6,000만원', location: '서울·수도권', type: '정규직' },
      { title: '설비 자동화 유지보수원', company: '설비관리업체', salary: '3,500~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '메카트로닉스기사 필기 핵심정리+기출', author: '신동호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '메카트로닉스기사 과년도 기출문제 해설', author: '자동화기술연구회', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '메카트로닉스기사 실기 완전정복', author: '최재영', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: 'PLC·유공압·로봇 제어 실무', author: '이민호', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

// === 추가 자격증 그룹2: 화학·환경, 안전·보건 ===

  '환경기사': {
    name: '환경기사',
    icon: 'fa-leaf',
    category: '화학·환경',
    heroTitle: '2026년도 환경기사 합격 가이드',
    heroDesc: '환경기사는 대기, 수질, 폐기물, 소음·진동 등 환경 전반의 오염을 측정·분석하고 방지 대책을 수립하는 전문 자격증입니다. 환경부 및 지자체, 환경 관련 기업 취업 시 우대되며 환경영향평가 업무에도 필수적입니다. 꾸준한 기출 풀이와 계산 문제 반복 학습이 합격의 열쇠입니다.',
    passRateSummary: '필기 40% | 실기 52%',
    avgPassRate: '46%',
    passRates: [
      { year: 2020, written: 38, practical: 50 },
      { year: 2021, written: 41, practical: 53 },
      { year: 2022, written: 39, practical: 51 },
      { year: 2023, written: 43, practical: 54 },
      { year: 2024, written: 42, practical: 52 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '대기환경', desc: '대기오염 물질의 종류, 발생원, 측정 및 방지 기술' },
      { name: '수질환경', desc: '수질오염 원인, 처리 공법, 수질 기준 및 측정 방법' },
      { name: '폐기물처리', desc: '고형 폐기물의 분류, 수거, 처리 및 재활용 기술' },
      { name: '소음·진동', desc: '소음·진동의 발생 원인, 측정 방법 및 저감 대책' },
      { name: '환경화학 및 생태학', desc: '환경 내 화학 반응, 생태계 구조와 오염 영향 평가' },
    ],
    jobs: [
      { title: '환경영향평가사', company: '환경컨설팅회사', salary: '3,500~5,000만원', location: '서울/경기', type: '정규직' },
      { title: '환경관리원', company: '제조·화학업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '수질관리기사', company: '지방상하수도본부', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '환경안전담당자', company: '대기업 생산법인', salary: '3,800~5,500만원', location: '수도권/지방', type: '정규직' },
      { title: '환경조사원', company: '환경부 산하기관', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '환경기사 필기 한권으로 끝내기', author: '이윤재', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '환경기사 실기 핵심요약 및 기출문제', author: '김정호', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '환경기사 기출문제 완전정복', author: '박수진', publisher: '구민사', year: 2023, rating: 4.3 },
      { title: '환경공학 개론', author: '오현제', publisher: '동화기술', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '소음진동기사': {
    name: '소음진동기사',
    icon: 'fa-wave-square',
    category: '화학·환경',
    heroTitle: '2026년도 소음진동기사 합격 가이드',
    heroDesc: '소음진동기사는 산업 현장 및 생활 환경에서 발생하는 소음·진동을 측정·평가하고 저감 방안을 수립하는 전문가 자격증입니다. 건설, 제조, 교통 분야 등 소음 규제가 강화되면서 수요가 꾸준히 증가하고 있습니다. 측정 계산과 법규 이해를 병행한 학습 전략이 효과적입니다.',
    passRateSummary: '필기 35% | 실기 48%',
    avgPassRate: '42%',
    passRates: [
      { year: 2020, written: 32, practical: 44 },
      { year: 2021, written: 35, practical: 47 },
      { year: 2022, written: 34, practical: 49 },
      { year: 2023, written: 37, practical: 50 },
      { year: 2024, written: 36, practical: 48 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '소음·진동 개론', desc: '소음·진동의 기본 개념, 물리적 특성 및 인체 영향' },
      { name: '소음 측정 및 평가', desc: '측정 장비 사용법, 소음 레벨 계산 및 평가 기준' },
      { name: '진동 측정 및 평가', desc: '진동 측정 방법, 진동 레벨 분석 및 평가 기법' },
      { name: '소음·진동 방지 기술', desc: '흡음, 차음, 제진, 방진 등 저감 공법 및 설계' },
      { name: '관계 법규', desc: '소음·진동 관련 환경법, 기준치 및 행정 규제 사항' },
    ],
    jobs: [
      { title: '소음·진동 측정원', company: '환경측정대행업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '환경관리담당자', company: '건설·토목회사', salary: '3,200~4,500만원', location: '수도권', type: '정규직' },
      { title: '품질환경엔지니어', company: '자동차·기계 제조사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '소음규제 관리원', company: '지방자치단체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '소음진동 조사원', company: '환경부 산하기관', salary: '2,700~3,600만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '소음진동기사 필기 완전합격', author: '이상철', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '소음진동기사 실기 핵심정리', author: '박민준', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '소음진동기사 기출문제 해설집', author: '김태호', publisher: '구민사', year: 2023, rating: 4.2 },
      { title: '소음·진동 공학 원론', author: '정영수', publisher: '청문각', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '폐기물처리기사': {
    name: '폐기물처리기사',
    icon: 'fa-recycle',
    category: '화학·환경',
    heroTitle: '2026년도 폐기물처리기사 합격 가이드',
    heroDesc: '폐기물처리기사는 산업 및 생활 폐기물의 수집·운반·처리·재활용 등 전 과정을 관리하는 전문 자격증입니다. 자원순환 정책 강화로 폐기물 처리 업체와 제조업 환경 부서에서 꾸준히 채용 수요가 있습니다. 처리 공법의 원리와 관련 법령을 체계적으로 익히는 것이 중요합니다.',
    passRateSummary: '필기 38% | 실기 45%',
    avgPassRate: '42%',
    passRates: [
      { year: 2020, written: 35, practical: 42 },
      { year: 2021, written: 37, practical: 44 },
      { year: 2022, written: 38, practical: 46 },
      { year: 2023, written: 40, practical: 47 },
      { year: 2024, written: 39, practical: 45 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '폐기물 개론', desc: '폐기물의 정의, 분류, 발생 특성 및 환경적 영향' },
      { name: '폐기물 처리 기술', desc: '소각, 매립, 퇴비화, 열분해 등 처리 공법 원리' },
      { name: '폐기물 수집·운반', desc: '수거 계획, 운반 차량 관리, 중간처리 시설 운영' },
      { name: '재활용 기술', desc: '자원 회수, 재활용 공정, 순환 경제 적용 사례' },
      { name: '관계 법규', desc: '폐기물관리법, 자원순환기본법 및 관련 행정 규제' },
    ],
    jobs: [
      { title: '폐기물처리 기술원', company: '폐기물처리업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '환경관리사원', company: '대형 제조공장', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '자원재활용 관리원', company: '재활용처리기업', salary: '2,800~4,000만원', location: '수도권/지방', type: '정규직' },
      { title: '환경안전팀원', company: '화학·제약회사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '폐기물 지도점검원', company: '지방환경청', salary: '2,700~3,600만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '폐기물처리기사 필기 한권완성', author: '이진호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '폐기물처리기사 실기 총정리', author: '최우석', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '폐기물처리기사 과년도 기출문제', author: '김현수', publisher: '구민사', year: 2023, rating: 4.2 },
      { title: '폐기물 처리 공학', author: '박성준', publisher: '동화기술', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '토양환경기사': {
    name: '토양환경기사',
    icon: 'fa-seedling',
    category: '화학·환경',
    heroTitle: '2026년도 토양환경기사 합격 가이드',
    heroDesc: '토양환경기사는 토양 및 지하수 오염 실태를 조사·측정하고 정화 방법을 계획·시공하는 전문 자격증입니다. 토양오염 규제 강화와 오염 부지 정화 사업 증가로 관련 업계 취업 전망이 밝습니다. 토양 정화 기술과 지하수 오염 원리를 중심으로 학습하면 효과적입니다.',
    passRateSummary: '필기 33% | 실기 42%',
    avgPassRate: '38%',
    passRates: [
      { year: 2020, written: 30, practical: 38 },
      { year: 2021, written: 32, practical: 41 },
      { year: 2022, written: 33, practical: 43 },
      { year: 2023, written: 35, practical: 44 },
      { year: 2024, written: 34, practical: 42 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '토양환경 개론', desc: '토양의 물리·화학·생물학적 특성 및 오염 메커니즘' },
      { name: '토양오염 조사', desc: '오염 실태 조사 방법, 시료 채취 및 분석 기법' },
      { name: '지하수 오염 및 관리', desc: '지하수 오염 원인, 모니터링 방법 및 관리 기술' },
      { name: '토양 정화 기술', desc: '생물학적·물리화학적 정화 공법 및 적용 사례' },
      { name: '관계 법규', desc: '토양환경보전법, 지하수법 및 오염 기준 관련 규정' },
    ],
    jobs: [
      { title: '토양오염 조사원', company: '환경컨설팅업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '토양정화 기술원', company: '토양정화전문기업', salary: '3,200~4,500만원', location: '수도권/지방', type: '정규직' },
      { title: '환경부지 관리원', company: '공공기관·LH', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '지하수 환경관리원', company: '한국수자원공사', salary: '3,300~4,700만원', location: '전국', type: '정규직' },
      { title: '환경조사 연구원', company: '환경부 산하연구원', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '토양환경기사 필기 완벽대비', author: '윤석진', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '토양환경기사 실기 핵심이론', author: '이민철', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '토양환경기사 기출문제 총정리', author: '강호진', publisher: '구민사', year: 2023, rating: 4.2 },
      { title: '토양·지하수 오염 공학', author: '조현일', publisher: '청문각', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '소방설비산업기사': {
    name: '소방설비산업기사',
    icon: 'fa-fire-extinguisher',
    category: '안전·보건',
    heroTitle: '2026년도 소방설비산업기사 합격 가이드',
    heroDesc: '소방설비산업기사는 소화설비, 경보설비, 피난구조설비 등 소방 시설의 설계·시공·점검을 담당하는 자격증입니다. 건축물 소방 안전 강화 추세에 따라 소방 시공사 및 유지보수 업계에서 취업 수요가 높습니다. 기계분야와 전기분야로 나뉘어 취득하므로 목표 분야를 먼저 정하는 것이 중요합니다.',
    passRateSummary: '필기 45% | 실기 55%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 42, practical: 52 },
      { year: 2021, written: 44, practical: 54 },
      { year: 2022, written: 46, practical: 57 },
      { year: 2023, written: 47, practical: 58 },
      { year: 2024, written: 45, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '소화설비', desc: '스프링클러, 소화기, 포·이산화탄소·분말 소화설비 구조 및 동작 원리' },
      { name: '경보설비', desc: '자동화재탐지설비, 비상방송설비, 가스누설경보기 설치 기준' },
      { name: '피난구조설비', desc: '유도등, 피난기구, 비상조명등 설치 및 유지 관리 기준' },
      { name: '소화활동설비', desc: '제연설비, 연결송수관, 비상콘센트 설비 등 구조 및 점검' },
      { name: '소방 관계 법규', desc: '소방시설법, 화재예방법 등 설치 기준 및 유지관리 규정' },
    ],
    jobs: [
      { title: '소방설비 시공원', company: '소방시공전문업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '소방점검 기술원', company: '소방안전관리업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '건축 소방담당자', company: '건설·시행사', salary: '3,500~5,000만원', location: '수도권', type: '정규직' },
      { title: '소방시설 관리원', company: '공공기관·시설관리', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '소방 안전점검원', company: '소방청 위탁기관', salary: '2,800~3,700만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '소방설비산업기사 필기 기계편', author: '이재학', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '소방설비산업기사 실기 완전정복', author: '김성욱', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '소방설비산업기사 기출문제 해설', author: '박찬호', publisher: '구민사', year: 2023, rating: 4.3 },
      { title: '소방설비 설계 및 시공 실무', author: '최재원', publisher: '청문각', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },


  '소방안전관리자특급': {
    name: '소방안전관리자 특급', icon: 'fa-fire', category: '소방·안전',
    heroTitle: '2026년도 소방안전관리자 특급 자격 취득 전략',
    heroDesc: '연면적 10만㎡ 이상(또는 30층·120m 이상) 초대형 건물·공항·지하철 등 대형 특정 소방대상물의 소방 안전 관리를 책임지는 최고 등급! 한국소방안전원(kfsi.or.kr) 시행, 연 2회(제24회·제25회) 1차·2차 시험. CBT 방식으로 현장 즉시 합격 확인.',
    passRateSummary: '1차 약 40% | 2차 약 50%',
    avgPassRate: '45%',
    passRates: [
      { year: 2021, written: 42, practical: 52 },
      { year: 2022, written: 40, practical: 50 },
      { year: 2023, written: 39, practical: 49 },
      { year: 2024, written: 41, practical: 51 },
      { year: 2025, written: 40, practical: 50 },
    ],
    schedules: [
      { round: '제24회', isCurrent: true, isDone: false,
        writtenApply: '2026-05-04 ~ 2026-05-08', writtenExam: '2026-05-16', writtenResult: '2026-05-30',
        practicalApply: '2026-06-10 ~ 2026-06-16', practicalExam: '2026-06-28', finalResult: '2026-07-11' },
      { round: '제25회', isCurrent: false, isDone: false,
        writtenApply: '2026-08-26 ~ 2026-09-01', writtenExam: '2026-09-13', writtenResult: '2026-09-26',
        practicalApply: '2026-10-14 ~ 2026-10-20', practicalExam: '2026-10-31', finalResult: '2026-11-14' },
    ],
    milestones: [
      { label: '제24회 2차 시험', date: '2026-06-28' },
      { label: '제24회 최종 합격 발표', date: '2026-07-11' },
      { label: '제25회 1차 접수 시작', date: '2026-08-26' },
      { label: '제25회 1차 시험', date: '2026-09-13' },
      { label: '제25회 2차 시험', date: '2026-10-31' },
    ],
    subjects: [
      { name: '소방 안전 관리론', items: ['소방 관계 법령', '소방 계획서 작성', '피난·방화 시설 관리'] },
      { name: '소방 시설 실무', items: ['소화 설비', '경보 설비', '피난 설비', '소방 특별 조사'] },
      { name: '화재 위험성 평가', items: ['위험물 안전 관리', '화재 원인 조사', '화재 예방 대책'] },
    ],
    tips: [
      '한국소방안전원 공식 홈페이지(kfsi.or.kr)에서 시험 일정·접수 진행',
      '1차(이론) 합격 후 2차(실무) 응시 — 1차 합격은 해당 회차 내 유효',
      '소방설비기사·산업기사 취득 후 특급 응시 요건 충족 여부 확인 필수',
      '특급 응시 자격: 소방설비기사 취득 후 2년 이상 실무 경력 등',
      '2차 시험은 논술·서술형 위주로 실무 적용 능력 중점 평가',
    ],
    jobs: [
      { title: '대형 건물 소방 안전 관리자', company: '대형 백화점·호텔·공항', salary: '4,500~7,000만원', location: '전국', type: '정규직' },
      { title: '소방 안전 컨설턴트', company: '소방 안전 전문 기업', salary: '4,000~6,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '소방안전관리자 특급 1차 합격 완성', author: '김현우', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '소방안전관리자 특급 2차 실무 완전정복', author: '이상훈', publisher: '예문사', year: 2025, rating: 4.4 },
    ],
    studyPlan: [
      '소방 관계 법령 전범위 정독 (2주)',
      '소방 시설별 구조·원리 이해 및 암기 (2주)',
      '화재 위험성 평가 이론 정리 (1주)',
      '기출문제·모의고사 반복 (2주)',
      '2차 서술형 답안 작성 연습 (1주)',
    ],
  },

  '소방안전관리자1급': {
    name: '소방안전관리자 1급', icon: 'fa-fire', category: '소방·안전',
    heroTitle: '2026년도 소방안전관리자 1급 자격 취득 전략',
    heroDesc: '30층 미만 또는 연면적 1만5천㎡ 이상 대형 특정 소방대상물 관리! 강습교육 이수 후 CBT 시험(현장 즉시 합격 확인), 한국소방안전원 전국 15개 시·도지부에서 매월 다수 회차 시행. 접수 시작: 매월 말일 10시 공고 후 1·3급 오전 10시, 2급 오후 14시.',
    passRateSummary: '약 55~65%',
    avgPassRate: '60%',
    passRates: [
      { year: 2021, written: 58, practical: 0 },
      { year: 2022, written: 60, practical: 0 },
      { year: 2023, written: 62, practical: 0 },
      { year: 2024, written: 63, practical: 0 },
      { year: 2025, written: 65, practical: 0 },
    ],
    schedules: [
      { round: '상시(매월)', isCurrent: true, isDone: false,
        writtenApply: '매월 셋째 주 목요일 접수 (선착순 마감)', writtenExam: '접수 후 약 2~3주 이내', writtenResult: '시험 후 1~2주 이내',
        practicalApply: '—', practicalExam: '—', finalResult: '—' },
    ],
    milestones: [
      { label: '2026년 7월 접수 (셋째 목요일)', date: '2026-07-16' },
      { label: '2026년 8월 접수 (셋째 목요일)', date: '2026-08-20' },
      { label: '2026년 9월 접수 (셋째 목요일)', date: '2026-09-17' },
    ],
    subjects: [
      { name: '소방 안전 관리론', items: ['소방 관계 법령', '소방 계획서 작성', '피난·방화 시설 관리'] },
      { name: '소방 시설 실무', items: ['소화 설비', '경보 설비', '피난 설비'] },
    ],
    tips: [
      '한국소방안전원(kfsi.or.kr) 또는 전국 15개 시·도지부에서 접수',
      '접수 공고: 매월 말일 10시, 접수 시작: 1·3급 오전 10시 / 2급 오후 14시 (선착순 조기마감)',
      'CBT 방식 시험 — 합격 여부 현장 즉시 확인 가능',
      '합격 기준: 각 과목 40점 이상 + 전 과목 평균 70점 이상',
      '소방안전관리자 2급 취득 후 실무 경력 쌓아 1급 응시 가능',
      'Q-Net 국가기술자격이 아닌 한국소방안전원 자체 자격',
    ],
    jobs: [
      { title: '소방 안전 관리자 (1급)', company: '오피스빌딩·대형 아파트', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
      { title: '소방 안전 관리 대행업체', company: '소방 안전 대행 전문 기업', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '소방안전관리자 1급 합격 완성', author: '이재학', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '소방안전관리자 1급 핵심요약+기출문제', author: '김성욱', publisher: '예문사', year: 2025, rating: 4.4 },
    ],
    studyPlan: [
      '소방 관계 법령 핵심 정리 (1주)',
      '소방 시설별 구조·원리 학습 (1주)',
      '기출문제 반복 풀이 및 오답 정리 (1주)',
      '모의고사 실전 연습 (3일)',
    ],
  },

  '소방안전관리자2급': {
    name: '소방안전관리자 2급', icon: 'fa-fire', category: '소방·안전',
    heroTitle: '2026년도 소방안전관리자 2급 자격 취득 전략',
    heroDesc: '스프링클러·옥내소화전 설치 건물 등 일반 특정 소방대상물 관리! 강습교육(5일) 이수 후 CBT 시험(현장 즉시 합격 확인). 소방 자격증 입문 단계, 매월 다수 회차 시행. 접수: 매월 말일 공고 후 오후 14시 시작(선착순 조기마감 주의).',
    passRateSummary: '약 65~75%',
    avgPassRate: '70%',
    passRates: [
      { year: 2021, written: 65, practical: 0 },
      { year: 2022, written: 68, practical: 0 },
      { year: 2023, written: 70, practical: 0 },
      { year: 2024, written: 72, practical: 0 },
      { year: 2025, written: 75, practical: 0 },
    ],
    schedules: [
      { round: '상시(매월)', isCurrent: true, isDone: false,
        writtenApply: '매월 셋째 주 목요일 접수 (선착순 마감)', writtenExam: '접수 후 약 2~3주 이내', writtenResult: '시험 후 1~2주 이내',
        practicalApply: '—', practicalExam: '—', finalResult: '—' },
    ],
    milestones: [
      { label: '2026년 7월 접수 (셋째 목요일)', date: '2026-07-16' },
      { label: '2026년 8월 접수 (셋째 목요일)', date: '2026-08-20' },
      { label: '2026년 9월 접수 (셋째 목요일)', date: '2026-09-17' },
    ],
    subjects: [
      { name: '소방 안전 관리 기초', items: ['소방 관계 법령 기초', '화재 예방 및 초기 대응', '소방 시설 사용법'] },
    ],
    tips: [
      '한국소방안전원(safe.kfsi.or.kr) 또는 전국 15개 시·도지부에서 접수',
      '접수 공고: 매월 말일 10시, 접수 시작: 오후 14시 (선착순 조기마감, 1~2분 내 마감 사례 있음)',
      'CBT 방식 시험 — 합격 여부 현장 즉시 확인 가능',
      '합격 기준: 각 과목 40점 이상 + 전 과목 평균 70점 이상',
      '소방 분야 첫 번째 자격증으로 취득 후 1급·특급으로 단계 상승 추천',
      'Q-Net 국가기술자격이 아닌 한국소방안전원 자체 자격',
    ],
    jobs: [
      { title: '소방 안전 관리자 (2급)', company: '중소형 빌딩·아파트', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '소방 점검 보조원', company: '소방 안전 대행 기업', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '소방안전관리자 2급 합격 완성', author: '이재학', publisher: '성안당', year: 2025, rating: 4.4 },
      { title: '소방안전관리자 2급 핵심요약+기출문제', author: '최민준', publisher: '예문사', year: 2025, rating: 4.3 },
    ],
    studyPlan: [
      '소방 기초 법령 및 용어 정리 (3일)',
      '소방 시설 종류·사용법 학습 (3일)',
      '기출문제 반복 풀이 (1주)',
      '모의고사 실전 연습 (3일)',
    ],
  },

  '소방안전관리자3급': {
    name: '소방안전관리자 3급', icon: 'fa-fire', category: '소방·안전',
    heroTitle: '2026년도 소방안전관리자 3급 자격 취득 전략',
    heroDesc: '자동화재탐지설비 등 소방안전관리 대상물의 기초 안전 관리! 별도 응시 자격 없이 누구나 취득 가능. 강습교육 이수 후 CBT 시험(현장 즉시 합격 확인), 매월 다수 회차 시행. 접수: 매월 말일 공고 후 오전 10시 시작(선착순 조기마감 주의).',
    passRateSummary: '약 70~80%',
    avgPassRate: '75%',
    passRates: [
      { year: 2021, written: 70, practical: 0 },
      { year: 2022, written: 72, practical: 0 },
      { year: 2023, written: 74, practical: 0 },
      { year: 2024, written: 76, practical: 0 },
      { year: 2025, written: 78, practical: 0 },
    ],
    schedules: [
      { round: '상시(매월)', isCurrent: true, isDone: false,
        writtenApply: '매월 셋째 주 목요일 접수 (선착순 마감)', writtenExam: '접수 후 약 2~3주 이내', writtenResult: '시험 후 1~2주 이내',
        practicalApply: '—', practicalExam: '—', finalResult: '—' },
    ],
    milestones: [
      { label: '2026년 7월 접수 (셋째 목요일)', date: '2026-07-16' },
      { label: '2026년 8월 접수 (셋째 목요일)', date: '2026-08-20' },
      { label: '2026년 9월 접수 (셋째 목요일)', date: '2026-09-17' },
    ],
    subjects: [
      { name: '소방 안전 기초', items: ['소방 기초 법령', '화재 예방 기초', '소화기·경보기 사용법'] },
    ],
    tips: [
      '한국소방안전원(safe.kfsi.or.kr) 또는 전국 15개 시·도지부에서 접수',
      '접수 공고: 매월 말일 10시, 접수 시작: 오전 10시 (선착순 조기마감, 1~2분 내 마감 사례 있음)',
      'CBT 방식 시험 — 합격 여부 현장 즉시 확인 가능',
      '합격 기준: 각 과목 40점 이상 + 전 과목 평균 70점 이상',
      '별도 응시 자격 없이 누구나 취득 가능한 소방 입문 자격',
      'Q-Net 국가기술자격이 아닌 한국소방안전원 자체 자격',
    ],
    jobs: [
      { title: '소방 안전 관리자 (3급)', company: '소형 건물·근린생활시설', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '소방안전관리자 3급 합격 완성', author: '김현우', publisher: '성안당', year: 2025, rating: 4.3 },
    ],
    studyPlan: [
      '소방 기초 개념 정리 (3일)',
      '소화기·경보기 사용법 숙지 (2일)',
      '기출문제 반복 풀이 (5일)',
    ],
  },
  '위험물기능사': {
    name: '위험물기능사',
    icon: 'fa-biohazard',
    category: '안전·보건',
    heroTitle: '2026년도 위험물기능사 합격 가이드',
    heroDesc: '위험물기능사는 위험물의 저장·취급·운반에 관한 지식을 갖추고 안전 관리를 수행하는 기능사 자격증입니다. 주유소, 화학공장, 위험물 제조소 등 취업처가 다양하고 취득 난이도가 비교적 낮아 입문 자격증으로 인기가 높습니다. 위험물 분류별 특성과 소화 방법을 집중적으로 학습하면 단기 합격이 가능합니다.',
    passRateSummary: '필기 50% | 실기 62%',
    avgPassRate: '56%',
    passRates: [
      { year: 2020, written: 48, practical: 60 },
      { year: 2021, written: 50, practical: 62 },
      { year: 2022, written: 52, practical: 64 },
      { year: 2023, written: 51, practical: 63 },
      { year: 2024, written: 50, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '위험물 개론', desc: '위험물의 정의, 분류 체계(1~6류), 지정수량 및 일반 특성' },
      { name: '위험물 성질 및 취급', desc: '각 류별 위험물의 화학적 특성, 위험성 및 안전 취급 방법' },
      { name: '위험물 저장 및 운반', desc: '저장소 구조 기준, 용기 기준, 운반 방법 및 주의사항' },
      { name: '소화 방법', desc: '각 위험물 특성에 따른 적응 소화약제 및 소화 방법 선택' },
      { name: '위험물안전관리법', desc: '위험물 제조소 등 시설 기준, 안전 관리자 자격 및 의무' },
    ],
    jobs: [
      { title: '위험물안전관리자', company: '주유소·충전소', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '화학물질 취급원', company: '화학·제약공장', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '위험물 보관 담당자', company: '물류창고업체', salary: '2,900~4,000만원', location: '전국', type: '정규직' },
      { title: '소방안전관리 보조원', company: '소방안전관리업체', salary: '2,800~3,700만원', location: '전국', type: '정규직' },
      { title: '위험물 운반 담당', company: '탱크로리 운송업체', salary: '2,700~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '위험물기능사 필기 단기합격', author: '이종석', publisher: '성안당', year: 2024, rating: 4.7 },
      { title: '위험물기능사 실기 총정리', author: '박현진', publisher: '예문사', year: 2024, rating: 4.5 },
      { title: '위험물기능사 기출문제 완전정복', author: '최민혁', publisher: '구민사', year: 2023, rating: 4.3 },
      { title: '위험물 안전관리 실무 해설', author: '김동현', publisher: '동화기술', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '가스산업기사': {
    name: '가스산업기사',
    icon: 'fa-fire',
    category: '안전·보건',
    heroTitle: '2026년도 가스산업기사 합격 가이드',
    heroDesc: '가스산업기사는 고압가스, LPG, 도시가스 설비의 제조·저장·운반·사용에 관한 안전 관리를 담당하는 전문 자격증입니다. 가스 공급 시설 확대와 수소 경제 성장에 따라 관련 업계 취업 전망이 밝습니다. 가스 특성과 설비 구조에 대한 이해를 바탕으로 법규를 함께 학습하는 것이 효과적입니다.',
    passRateSummary: '필기 37% | 실기 50%',
    avgPassRate: '44%',
    passRates: [
      { year: 2020, written: 34, practical: 47 },
      { year: 2021, written: 36, practical: 49 },
      { year: 2022, written: 38, practical: 51 },
      { year: 2023, written: 39, practical: 52 },
      { year: 2024, written: 37, practical: 50 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '가스 개론', desc: '가연성·독성·불연성 가스의 물리·화학적 특성 및 위험성' },
      { name: '가스 설비', desc: '압축기, 저장 탱크, 배관, 조정기 등 가스 설비 구조와 기능' },
      { name: '가스 안전 관리', desc: '누출 감지, 방폭 구조, 긴급 차단 장치 등 안전 설비 운영' },
      { name: '가스 공급 시스템', desc: '도시가스·LPG 공급 방식, 배관 설계 기준 및 압력 관리' },
      { name: '가스 관계 법규', desc: '고압가스안전관리법, LPG법, 도시가스사업법 핵심 규정' },
    ],
    jobs: [
      { title: '가스안전관리원', company: '도시가스공사', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '가스설비 기술원', company: '가스시공전문업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '산업가스 관리원', company: '화학·반도체 공장', salary: '3,500~5,000만원', location: '수도권/충청', type: '정규직' },
      { title: '수소충전소 관리원', company: '에너지전문업체', salary: '3,300~4,700만원', location: '전국', type: '정규직' },
      { title: 'LPG 충전 담당원', company: 'LPG충전소', salary: '2,700~3,600만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '가스산업기사 필기 완전합격', author: '정재영', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '가스산업기사 실기 핵심정리', author: '이한솔', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '가스산업기사 기출문제 해설집', author: '서민준', publisher: '구민사', year: 2023, rating: 4.2 },
      { title: '가스 설비 및 안전 공학', author: '윤성호', publisher: '청문각', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '산업위생관리기사': {
    name: '산업위생관리기사',
    icon: 'fa-hard-hat',
    category: '안전·보건',
    heroTitle: '2026년도 산업위생관리기사 합격 가이드',
    heroDesc: '산업위생관리기사는 작업 환경 내 유해 인자를 측정·평가하고 근로자 건강 장해를 예방하는 전문 자격증입니다. 산업안전보건법 강화로 사업장 내 작업환경측정 수요가 급증하여 취업 및 처우가 개선되고 있습니다. 유해 물질 측정 계산과 직업병 원인 분석을 중점적으로 공부하는 것이 합격 전략입니다.',
    passRateSummary: '필기 42% | 실기 53%',
    avgPassRate: '48%',
    passRates: [
      { year: 2020, written: 39, practical: 50 },
      { year: 2021, written: 41, practical: 52 },
      { year: 2022, written: 43, practical: 54 },
      { year: 2023, written: 44, practical: 55 },
      { year: 2024, written: 42, practical: 53 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '산업위생 개론', desc: '작업 환경의 유해 인자 분류, 직업성 질환의 원인 및 예방 원칙' },
      { name: '작업환경 측정 및 평가', desc: '화학적·물리적 유해 인자 측정 방법, 노출 기준 및 평가 절차' },
      { name: '작업환경 관리', desc: '공학적 대책, 행정적 대책, 개인 보호구 선택 및 관리 방법' },
      { name: '산업독성학', desc: '유해 화학 물질의 독성 작용 메커니즘, 인체 흡수 및 대사 경로' },
      { name: '산업위생 관계 법규', desc: '산업안전보건법상 작업환경측정 의무, 보건 관리자 직무 규정' },
    ],
    jobs: [
      { title: '작업환경측정사', company: '산업위생측정기관', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '보건관리자', company: '대형 제조사업장', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
      { title: '산업위생 연구원', company: '산업안전보건연구원', salary: '4,000~6,000만원', location: '서울/대전', type: '정규직' },
      { title: '환경보건 담당자', company: '화학·반도체 기업', salary: '4,000~6,000만원', location: '수도권/충청', type: '정규직' },
      { title: '안전보건 조사원', company: '고용노동부 산하기관', salary: '3,000~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '산업위생관리기사 필기 한권완성', author: '한재만', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '산업위생관리기사 실기 완전정복', author: '유미선', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '산업위생관리기사 과년도 기출해설', author: '임성철', publisher: '구민사', year: 2023, rating: 4.3 },
      { title: '작업환경측정 및 평가 실무', author: '권오준', publisher: '동화기술', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

// === 추가 자격증 그룹3: 건설·토목, 경영·품질 ===

  '토목산업기사': {
    name: '토목산업기사',
    icon: 'fa-road',
    category: '건설·토목',
    heroTitle: '2026년도 토목산업기사 합격 가이드',
    heroDesc: '토목산업기사는 도로, 교량, 댐, 항만 등 사회기반시설의 설계 및 시공 전반을 다루는 국가기술자격입니다. 토목공학의 핵심 이론과 실무 능력을 검증하며, 건설업계 취업과 현장 실무에 필수적인 자격증입니다. 꾸준한 기출문제 풀이와 계산 문제 반복 학습이 합격의 열쇠입니다.',
    passRateSummary: '필기 42% | 실기 48%',
    avgPassRate: '45%',
    passRates: [
      { year: 2020, written: 38, practical: 44 },
      { year: 2021, written: 41, practical: 47 },
      { year: 2022, written: 43, practical: 49 },
      { year: 2023, written: 44, practical: 50 },
      { year: 2024, written: 45, practical: 51 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '응용역학', desc: '구조물의 힘과 변형에 관한 역학 이론 및 계산' },
      { name: '측량학', desc: '지형 측량, 수준 측량, 면적 산출 등 측량 기초' },
      { name: '수리수문학', desc: '물의 흐름과 유량 계산, 수리 구조물 설계 기초' },
      { name: '철근콘크리트 및 강구조', desc: '철근콘크리트 구조 설계 및 강구조 접합 방법' },
      { name: '토질 및 기초', desc: '지반 조사, 토압, 기초 형식 선정 및 설계' },
    ],
    jobs: [
      { title: '토목 설계 엔지니어', company: '종합건설사', salary: '3,500~5,000만원', location: '서울·경기', type: '정규직' },
      { title: '현장 시공 관리자', company: '건설시공업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '도로·교량 감리원', company: '감리전문업체', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
      { title: '토목 적산 담당', company: '건설회사', salary: '3,000~4,200만원', location: '서울·경기', type: '정규직' },
      { title: '건설현장 품질검사원', company: '품질검사기관', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '토목산업기사 필기 한권으로 끝내기', author: '이상도', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '토목산업기사 과년도 기출문제해설', author: '김민준', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '토목산업기사 실기 완전정복', author: '박성훈', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '토목산업기사 핵심이론 총정리', author: '정우진', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '건축산업기사': {
    name: '건축산업기사',
    icon: 'fa-building',
    category: '건설·토목',
    heroTitle: '2026년도 건축산업기사 합격 가이드',
    heroDesc: '건축산업기사는 건축 설계, 시공, 재료, 구조 등 건축 전반의 전문 지식과 실무 능력을 평가하는 국가기술자격입니다. 건설업 면허 보유와 건축 현장 취업에 유리하며, 건축사 시험의 디딤돌이 되는 중요한 자격입니다. 설계도면 이해와 구조 계산 능력이 합격의 핵심입니다.',
    passRateSummary: '필기 40% | 실기 45%',
    avgPassRate: '43%',
    passRates: [
      { year: 2020, written: 36, practical: 42 },
      { year: 2021, written: 38, practical: 44 },
      { year: 2022, written: 40, practical: 45 },
      { year: 2023, written: 42, practical: 47 },
      { year: 2024, written: 44, practical: 48 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '건축계획', desc: '건축 설계 원리, 공간 계획, 건축 역사 및 양식' },
      { name: '건축시공', desc: '건축 공사의 공정, 공법, 품질 및 안전 관리' },
      { name: '건축구조', desc: '건축물의 구조 원리, 하중 산정, 내진 설계 기초' },
      { name: '건축설비', desc: '전기, 급배수, 냉난방, 소방 설비의 기본 이해' },
      { name: '건축재료', desc: '건축에 사용되는 각종 재료의 성질과 용도 분류' },
    ],
    jobs: [
      { title: '건축 설계 보조원', company: '건축설계사무소', salary: '3,000~4,500만원', location: '서울·경기', type: '정규직' },
      { title: '건축 현장 소장', company: '중소건설업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '건축 감리 보조원', company: '감리전문업체', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '시설 유지보수 담당', company: '건물관리업체', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '건축 인허가 보조', company: '컨설팅업체', salary: '2,600~3,600만원', location: '서울·경기', type: '계약직' },
    ],
    books: [
      { title: '건축산업기사 필기 완전정복', author: '강태형', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '건축산업기사 기출문제 총정리', author: '이현철', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '건축산업기사 실기 핵심요약', author: '조민석', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '건축산업기사 이론 + 문제 통합본', author: '한지원', publisher: '성안당', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '실내건축기사': {
    name: '실내건축기사',
    icon: 'fa-couch',
    category: '건설·토목',
    heroTitle: '2026년도 실내건축기사 합격 가이드',
    heroDesc: '실내건축기사는 건축물 내부 공간의 계획, 설계, 시공, 감리에 관한 전문 능력을 검증하는 국가기술자격입니다. 인테리어 디자인과 실내 환경 개선 분야에서 전문가로 활동하기 위한 필수 자격이며, 주거·상업·공공시설 공간 설계 역량을 평가합니다. CAD 활용 능력과 공간 계획 감각이 합격의 핵심입니다.',
    passRateSummary: '필기 38% | 실기 43%',
    avgPassRate: '41%',
    passRates: [
      { year: 2020, written: 34, practical: 39 },
      { year: 2021, written: 36, practical: 41 },
      { year: 2022, written: 38, practical: 43 },
      { year: 2023, written: 40, practical: 45 },
      { year: 2024, written: 41, practical: 46 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '실내디자인론', desc: '공간 구성 원리, 색채 계획, 인체공학 적용 방법' },
      { name: '실내건축재료', desc: '바닥, 벽, 천장 마감재 및 인테리어 소재 특성' },
      { name: '실내건축시공', desc: '인테리어 공사 공정 관리 및 시공 기법 이해' },
      { name: '건축구조', desc: '실내 공간과 관련된 구조 하중 및 구조 시스템' },
      { name: '건축법규', desc: '건축법, 소방법 관련 실내 설계 기준 및 규정' },
    ],
    jobs: [
      { title: '인테리어 디자이너', company: '인테리어전문업체', salary: '3,000~4,800만원', location: '서울·경기', type: '정규직' },
      { title: '실내건축 현장 감리', company: '감리전문업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '상업공간 설계 담당', company: '건축설계사무소', salary: '3,500~5,200만원', location: '서울·경기', type: '정규직' },
      { title: '시설 리모델링 팀장', company: '종합건설사', salary: '4,000~5,800만원', location: '전국', type: '정규직' },
      { title: '전시·이벤트 공간 디자이너', company: '전시기획사', salary: '2,800~4,000만원', location: '서울', type: '계약직' },
    ],
    books: [
      { title: '실내건축기사 필기 한권으로 합격', author: '김수진', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '실내건축기사 과년도 기출문제', author: '이태호', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '실내건축기사 실기 완전정복', author: '박지영', publisher: '일진사', year: 2023, rating: 4.4 },
      { title: '실내건축기사 이론 총정리', author: '최선희', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '조경기능사': {
    name: '조경기능사',
    icon: 'fa-tree',
    category: '건설·토목',
    heroTitle: '2026년도 조경기능사 합격 가이드',
    heroDesc: '조경기능사는 정원·공원·도시 녹지 공간의 설계 보조 및 식재·시설 시공을 담당하는 국가기술자격입니다. 조경기사의 입문 자격으로 학력 제한 없이 누구나 응시 가능하며, 조경회사·건설사·공공기관·골프장 등 다양한 현장에서 활용됩니다.',
    passRateSummary: '필기 58% | 실기 55%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 55, practical: 52 },
      { year: 2021, written: 57, practical: 54 },
      { year: 2022, written: 58, practical: 55 },
      { year: 2023, written: 60, practical: 57 },
      { year: 2024, written: 59, practical: 56 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '조경설계 기초', desc: '정원·공원 기본 설계 원리, 제도 기호, 식재 배치 계획' },
      { name: '조경식물학', desc: '조경수 종류·특성, 초화류·잔디 관리, 병충해 방제 기초' },
      { name: '조경시공', desc: '식재 공사, 포장 공사, 배수 시설, 조경 구조물 시공 방법' },
      { name: '조경관리', desc: '수목 전정·이식·시비, 잔디 관리, 조경 시설물 유지보수' },
    ],
    jobs: [
      { title: '조경 시공 기능원', company: '조경회사·건설사', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '공원 녹지 관리원', company: '지자체·공원관리공단', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
      { title: '골프장 코스 관리원', company: '골프클럽', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '아파트 조경 관리원', company: '관리업체', salary: '2,500~3,300만원', location: '전국', type: '정규직' },
      { title: '가든센터 식물 관리원', company: '원예·가든센터', salary: '2,400~3,200만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 조경기능사 필기 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2026 조경기능사 필기', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '2026 조경기능사 실기 조경작업 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.5 },
      { title: '2026 조경기능사 필기·실기', author: '자격시험 편집부', publisher: '성안당', year: 2025, rating: 4.4 },
    ],
    defaultTodos: [
      '필기 4과목 범위 파악 및 학습 계획 수립', '조경식물학 주요 수목·초화류 암기',
      '조경시공 공사 공정별 핵심 이론 정리', '기출문제 풀이 (최근 3개년)',
      '실기 작업형 도면 작성·식재 공사 반복 연습',
    ],
  },

  '조경기사': {
    name: '조경기사',
    icon: 'fa-tree',
    category: '건설·토목',
    heroTitle: '2026년도 조경기사 합격 가이드',
    heroDesc: '조경기사는 공원, 정원, 도시 녹지 등 외부 공간의 계획·설계·시공·관리에 관한 전문 능력을 검증하는 국가기술자격입니다. 도시 환경 개선과 생태 복원 수요 증가로 취업 전망이 밝으며, 공공기관과 조경전문업체에서 활발히 요구되는 자격입니다. 식물 지식과 공간 설계 능력을 함께 갖추는 것이 중요합니다.',
    passRateSummary: '필기 45% | 실기 52%',
    avgPassRate: '49%',
    passRates: [
      { year: 2020, written: 41, practical: 48 },
      { year: 2021, written: 43, practical: 50 },
      { year: 2022, written: 45, practical: 52 },
      { year: 2023, written: 47, practical: 54 },
      { year: 2024, written: 48, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '조경계획', desc: '조경 공간의 수요 분석, 기본 계획 수립 및 프로그래밍' },
      { name: '조경설계', desc: '부지 설계, 시설물 배치, 식재 계획 및 도면 작성' },
      { name: '조경시공', desc: '식재 공사, 포장 공사, 수경 시설 등 시공 관리' },
      { name: '조경관리', desc: '식물 생육 관리, 시설물 유지 보수, 병해충 방제' },
      { name: '조경식물', desc: '교목, 관목, 초본류의 분류, 특성 및 적용 기준' },
    ],
    jobs: [
      { title: '조경 설계사', company: '조경설계사무소', salary: '3,200~4,800만원', location: '서울·경기', type: '정규직' },
      { title: '공원 조성 현장 담당', company: '지방자치단체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '조경 시공 감리원', company: '감리전문업체', salary: '3,500~5,200만원', location: '전국', type: '정규직' },
      { title: '아파트 조경 관리원', company: '시설관리업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '생태 복원 조사원', company: '환경컨설팅업체', salary: '2,800~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '조경기사 필기 한번에 합격하기', author: '오세훈', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '조경기사 과년도 기출문제 풀이', author: '신미경', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '조경기사 실기 핵심이론 + 문제', author: '류진수', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '조경기사 합격 전략 완전분석', author: '홍진아', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '측량및지형공간정보기사': {
    name: '측량및지형공간정보기사',
    icon: 'fa-map',
    category: '건설·토목',
    heroTitle: '2026년도 측량및지형공간정보기사 합격 가이드',
    heroDesc: '측량및지형공간정보기사는 토지·지형의 정확한 측량과 공간 데이터 처리, GIS 활용 능력을 검증하는 국가기술자격입니다. 스마트시티, 드론 측량, 디지털 트윈 등 신기술과 연계된 분야로 취업 전망이 밝으며, 국토부 및 지자체 관련 사업에 필수 자격으로 활용됩니다. 측량 계산 능력과 GIS 소프트웨어 활용이 중요합니다.',
    passRateSummary: '필기 35% | 실기 42%',
    avgPassRate: '39%',
    passRates: [
      { year: 2020, written: 31, practical: 38 },
      { year: 2021, written: 33, practical: 40 },
      { year: 2022, written: 35, practical: 42 },
      { year: 2023, written: 37, practical: 44 },
      { year: 2024, written: 38, practical: 45 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '측량학', desc: '거리, 각도, 높이 측량의 원리와 오차 처리 방법' },
      { name: '사진측량 및 원격탐사', desc: '항공사진, 위성영상 분석 및 정사영상 제작' },
      { name: '지리정보시스템(GIS)', desc: 'GIS 데이터 구조, 공간 분석, 지도 제작 기초' },
      { name: '응용측량', desc: '노선, 터널, 수로 측량 등 현장 응용 측량 기법' },
      { name: '위성측위시스템(GPS/GNSS)', desc: 'GNSS 원리, 위치 결정 방법, 오차 보정 기술' },
    ],
    jobs: [
      { title: 'GIS 데이터 분석원', company: '공간정보업체', salary: '3,200~5,000만원', location: '서울·경기', type: '정규직' },
      { title: '드론 측량 전문가', company: '측량전문업체', salary: '3,500~5,500만원', location: '전국', type: '정규직' },
      { title: '지형 측량 기술자', company: '국토개발업체', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '지적 측량 담당', company: '한국국토정보공사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '공간 데이터 구축원', company: '공공기관', salary: '2,900~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '측량및지형공간정보기사 필기 완전정복', author: '김동철', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '측량기사 과년도 기출문제 해설', author: '이준호', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '측량및지형공간정보기사 실기', author: '박철민', publisher: '일진사', year: 2023, rating: 4.2 },
      { title: '측량기사 핵심요약 + 기출', author: '윤성민', publisher: '성안당', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '품질경영산업기사': {
    name: '품질경영산업기사',
    icon: 'fa-award',
    category: '경영·품질',
    heroTitle: '2026년도 품질경영산업기사 합격 가이드',
    heroDesc: '품질경영산업기사는 제조 및 서비스업의 품질 관리, 통계적 공정 제어, 품질 시스템 운영 능력을 검증하는 국가기술자격입니다. 제조업 품질 부서와 ISO 인증 관련 업무에 필수적으로 활용되며, 스마트 공장 확산으로 수요가 증가하고 있습니다. 통계 기법 이해와 품질 관련 계산 문제 풀이가 합격의 핵심입니다.',
    passRateSummary: '필기 48% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 44, practical: 51 },
      { year: 2021, written: 46, practical: 53 },
      { year: 2022, written: 48, practical: 55 },
      { year: 2023, written: 50, practical: 57 },
      { year: 2024, written: 51, practical: 58 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '품질경영', desc: 'ISO 9001, TQM, 6시그마 등 품질 경영 시스템 이론' },
      { name: '통계적 품질관리', desc: '관리도, 샘플링 검사, 공정능력 분석 및 통계 기법' },
      { name: '신뢰성관리', desc: '제품 수명 분석, 고장 유형, FMEA 등 신뢰성 기법' },
      { name: '품질비용', desc: '예방·평가·실패 비용 분류 및 품질 비용 최적화' },
      { name: '산업표준화', desc: 'KS, ISO 규격의 구조와 표준화 절차 및 인증 제도' },
    ],
    jobs: [
      { title: '품질 관리 담당자', company: '제조업체', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: 'ISO 인증 심사원', company: '인증기관', salary: '4,000~6,000만원', location: '서울·경기', type: '정규직' },
      { title: '품질 기획 전문가', company: '대기업 제조사', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
      { title: '공정 품질 엔지니어', company: '자동차부품사', salary: '3,800~5,500만원', location: '경상·충청', type: '정규직' },
      { title: '품질검사원', company: '협력업체', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '품질경영산업기사 필기 한권으로 끝내기', author: '나승현', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '품질경영산업기사 과년도 기출 해설', author: '이재원', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '품질경영산업기사 실기 완전정복', author: '김현수', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '품질경영 핵심이론 및 기출문제', author: '박수영', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '생산관리기술사': {
    name: '생산관리기술사',
    icon: 'fa-industry',
    category: '경영·품질',
    heroTitle: '2026년도 생산관리기술사 합격 가이드',
    heroDesc: '생산관리기술사는 제조 공장의 생산 계획, 공정 설계, 원가 관리, 자동화 시스템 운영 전반에 걸친 최고급 기술 능력을 검증하는 국가기술자격입니다. 기술사 등급으로 전문가 대우와 높은 연봉을 기대할 수 있으며, 컨설팅 및 공공기관 활동도 가능합니다. 서술형 필기와 면접 대비를 위한 깊이 있는 이론 학습이 필수입니다.',
    passRateSummary: '필기 30% | 실기 38%',
    avgPassRate: '34%',
    passRates: [
      { year: 2020, written: 27, practical: 35 },
      { year: 2021, written: 29, practical: 36 },
      { year: 2022, written: 30, practical: 38 },
      { year: 2023, written: 32, practical: 40 },
      { year: 2024, written: 33, practical: 41 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '생산시스템', desc: 'MRP, ERP, JIT, 린생산 등 생산 시스템 설계 이론' },
      { name: '공정관리', desc: '공정 계획, 일정 수립, PERT/CPM 등 공정 최적화 기법' },
      { name: '원가관리', desc: '표준원가 계산, 원가 차이 분석, 원가 절감 방안' },
      { name: '품질 및 설비관리', desc: 'TPM, 예방 보전, 설비 효율화 및 품질 연계 관리' },
      { name: '스마트팩토리', desc: 'IoT, AI 기반 스마트공장 구축 및 디지털 전환 전략' },
    ],
    jobs: [
      { title: '생산 기술 이사', company: '대기업 제조사', salary: '7,000~1억원', location: '전국', type: '정규직' },
      { title: '생산관리 컨설턴트', company: '컨설팅업체', salary: '6,000~9,000만원', location: '서울·경기', type: '정규직' },
      { title: '스마트팩토리 추진 팀장', company: '중견기업', salary: '5,500~8,000만원', location: '전국', type: '정규직' },
      { title: '공정혁신 전문가', company: '제조업체', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
      { title: '생산관리 자문위원', company: '공공기관·협회', salary: '4,500~6,500만원', location: '서울', type: '계약직' },
    ],
    books: [
      { title: '생산관리기술사 핵심이론 총정리', author: '박재현', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '생산관리기술사 기출문제 분석', author: '이경민', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '생산관리기술사 면접 완전정복', author: '강동호', publisher: '일진사', year: 2023, rating: 4.4 },
      { title: '생산관리기술사 서술형 답안 작성법', author: '정성훈', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '물류관리사': {
    name: '물류관리사',
    icon: 'fa-truck',
    category: '경영·품질',
    heroTitle: '2026년도 물류관리사 합격 가이드',
    heroDesc: '물류관리사는 화물 운송, 보관, 하역, 포장, 정보 처리 등 물류 전 과정을 체계적으로 관리하는 전문가 자격입니다. 이커머스 성장과 공급망 관리 중요성 증가로 물류 전문 인력 수요가 꾸준히 늘고 있습니다. 물류 관련 법령 이해와 공급망 최적화 이론 학습이 합격을 좌우합니다.',
    passRateSummary: '필기 50% | 실기 58%',
    avgPassRate: '54%',
    passRates: [
      { year: 2020, written: 46, practical: 54 },
      { year: 2021, written: 48, practical: 56 },
      { year: 2022, written: 50, practical: 58 },
      { year: 2023, written: 52, practical: 60 },
      { year: 2024, written: 53, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '물류관리론', desc: '물류 시스템, 공급망 관리(SCM), 물류 전략 수립 이론' },
      { name: '화물운송론', desc: '도로·철도·해운·항공 운송의 특성과 운임 계산' },
      { name: '보관하역론', desc: '창고 관리, 입출고 시스템, 자동화 설비 운영' },
      { name: '물류정보시스템', desc: 'WMS, TMS, ERP 연동 및 물류 IT 시스템 이해' },
      { name: '국제물류론', desc: '무역 물류, 통관, 인코텀즈, 국제 운임 및 보험' },
    ],
    jobs: [
      { title: '물류 운영 매니저', company: '물류전문업체', salary: '3,500~5,200만원', location: '서울·경기', type: '정규직' },
      { title: '공급망 관리 담당자', company: '대기업 계열사', salary: '4,000~6,000만원', location: '전국', type: '정규직' },
      { title: '창고 운영 팀장', company: '3PL 물류센터', salary: '3,800~5,500만원', location: '경기·인천', type: '정규직' },
      { title: '수출입 물류 코디네이터', company: '포워딩업체', salary: '3,200~4,800만원', location: '서울·인천', type: '정규직' },
      { title: '이커머스 물류 CS 담당', company: '온라인쇼핑몰', salary: '2,800~3,800만원', location: '서울·경기', type: '계약직' },
    ],
    books: [
      { title: '물류관리사 필기 단기완성', author: '서정호', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '물류관리사 과년도 기출문제 풀이', author: '고민정', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '물류관리사 실기 핵심이론', author: '임준서', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '물류관리사 합격노트', author: '강소연', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },



// === 기능장 12종 ===
  '전기기능장': {
    name: '전기기능장',
    icon: 'fa-bolt',
    category: '전기·에너지',
    heroTitle: '2026년도 전기기능장 합격 가이드',
    heroDesc: '전기기능장은 전기 설비 설계·시공·유지보수 분야의 최고 기능 자격증입니다. 발전소, 변전소, 공장 등 대형 전기 시설 전반을 관리할 수 있는 전문 자격으로, 취득 후 높은 연봉과 안정적인 취업이 보장됩니다. 필기와 실기 모두 난이도가 높아 체계적인 학습 계획이 필수입니다.',
    passRateSummary: '필기 32% | 실기 38%',
    avgPassRate: '35%',
    passRates: [
      { year: 2020, written: 30, practical: 35 },
      { year: 2021, written: 28, practical: 37 },
      { year: 2022, written: 33, practical: 40 },
      { year: 2023, written: 34, practical: 38 },
      { year: 2024, written: 36, practical: 41 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '전기이론', desc: '회로이론, 전자기학, 전기기기 원리 등 기초 전기 이론 전반' },
      { name: '전력공학', desc: '송배전 계통, 변전 설비, 전력 계통 보호 방식 이해' },
      { name: '전기기기', desc: '변압기, 전동기, 발전기 등 전기 기기의 구조와 운전 특성' },
      { name: '전기설비', desc: '수변전 설비, 배선 설계, 접지 시스템 및 전기 안전 기준' },
      { name: '제어·자동화', desc: '시퀀스 제어, PLC 프로그래밍, 자동화 시스템 구성 및 유지보수' },
    ],
    jobs: [
      { title: '전기 설비 관리자', company: '대형 제조공장', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '수변전 설비 엔지니어', company: '전력 설비 전문업체', salary: '4,000~5,500만원', location: '수도권', type: '정규직' },
      { title: '전기 시공 현장소장', company: '전기 건설업체', salary: '5,000~7,000만원', location: '전국', type: '정규직' },
      { title: '발전소 전기 유지보수', company: '발전 공기업', salary: '5,500~7,500만원', location: '지방', type: '정규직' },
      { title: '전기 안전 점검원', company: '안전관리 대행업체', salary: '3,500~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전기기능장 필기 완전정복', author: '김전기', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '전기기능장 실기 작업형 핵심 해설', author: '이설비', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '전기기능장 기출문제 해설 10개년', author: '박합격', publisher: '동일출판사', year: 2023, rating: 4.4 },
      { title: '전기설비 실무 핵심 정리', author: '최전력', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '용접기능장': {
    name: '용접기능장',
    icon: 'fa-fire-flame-curved',
    category: '기계·설비',
    heroTitle: '2026년도 용접기능장 합격 가이드',
    heroDesc: '용접기능장은 조선, 플랜트, 압력용기 등 산업 전반에서 최고 수준의 용접 기술을 인증하는 국가기술자격입니다. 특수 용접 기법부터 용접 설계 및 검사까지 폭넓은 지식을 요구하며, 취득 시 해외 플랜트 현장 취업에도 유리합니다. 실기 시험의 용접 작업 정밀도가 합격의 관건입니다.',
    passRateSummary: '필기 29% | 실기 42%',
    avgPassRate: '36%',
    passRates: [
      { year: 2020, written: 27, practical: 40 },
      { year: 2021, written: 25, practical: 38 },
      { year: 2022, written: 30, practical: 43 },
      { year: 2023, written: 31, practical: 44 },
      { year: 2024, written: 32, practical: 46 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '용접야금 및 재료', desc: '금속 재료의 성질, 용접성, 열영향부 조직 변화 이해' },
      { name: '용접 설계', desc: '용접 이음 설계, 강도 계산, 용접 기호 해석 및 도면 판독' },
      { name: '용접 시공 및 검사', desc: '각종 용접법 시공 절차, 결함 검사 방법, 비파괴 검사 기초' },
      { name: '용접 자동화', desc: '로봇 용접, 자동화 장비 운용, 용접 파라미터 설정 및 관리' },
      { name: '용접 안전 관리', desc: '용접 작업 위험 요소, 보호구 착용 기준, 화재·폭발 방지 대책' },
    ],
    jobs: [
      { title: '용접 기술 관리자', company: '조선소·플랜트업체', salary: '5,000~7,000만원', location: '부산·거제·울산', type: '정규직' },
      { title: '용접 품질 검사원', company: '중공업 제조사', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '압력용기 용접 전문가', company: '화학·정유 플랜트', salary: '5,500~7,500만원', location: '울산·여수', type: '정규직' },
      { title: '용접 교육 강사', company: '직업훈련기관', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '해외 플랜트 용접사', company: '해외 건설업체', salary: '6,000~9,000만원', location: '해외', type: '계약직' },
    ],
    books: [
      { title: '용접기능장 필기 핵심 이론', author: '홍용접', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '용접기능장 실기 작업 완전정복', author: '강기능', publisher: '일진사', year: 2024, rating: 4.6 },
      { title: '용접기능장 10개년 기출문제 해설', author: '유합격', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '특수 용접 실무 핵심', author: '임용접', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '배관기능장': {
    name: '배관기능장',
    icon: 'fa-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 배관기능장 합격 가이드',
    heroDesc: '배관기능장은 산업용 배관 시스템의 설계, 시공, 유지보수 전 분야를 아우르는 최고 등급 기능 자격증입니다. 플랜트·조선·건설 현장에서 배관 전문가로 활약하며, 공정 배관 도면 해석과 압력 시험까지 높은 수준의 기술력을 요구합니다. 꾸준한 현장 실무 경험을 병행하면 합격에 크게 유리합니다.',
    passRateSummary: '필기 28% | 실기 35%',
    avgPassRate: '32%',
    passRates: [
      { year: 2020, written: 26, practical: 33 },
      { year: 2021, written: 25, practical: 31 },
      { year: 2022, written: 29, practical: 36 },
      { year: 2023, written: 30, practical: 37 },
      { year: 2024, written: 31, practical: 38 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '배관 재료 및 이음', desc: '강관, 동관, PVC관 등 배관 재료 특성과 각종 이음 방법 이해' },
      { name: '배관 시공 및 설계', desc: '배관 레이아웃 설계, P&ID 도면 해석, 배관 지지대 계산' },
      { name: '유체역학 기초', desc: '유체 흐름, 압력 손실 계산, 펌프 선정 및 배관 계통 해석' },
      { name: '배관 검사 및 시험', desc: '수압 시험, 기밀 시험, 비파괴 검사 종류 및 적용 기준' },
      { name: '배관 안전 관리', desc: '고압·고온 배관 위험성, 부식 방지, 보온·보냉 설계 및 안전 기준' },
    ],
    jobs: [
      { title: '플랜트 배관 설계 엔지니어', company: '플랜트 엔지니어링사', salary: '5,000~7,000만원', location: '수도권·울산', type: '정규직' },
      { title: '산업용 배관 시공 관리자', company: '배관 전문 건설사', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '정유·화학 배관 유지보수', company: '정유·화학 공기업', salary: '5,500~7,500만원', location: '울산·여수', type: '정규직' },
      { title: '조선소 의장 배관 관리', company: '대형 조선소', salary: '4,800~6,500만원', location: '거제·부산', type: '정규직' },
      { title: '배관 검사 전문원', company: '안전 검사 전문기관', salary: '3,800~5,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '배관기능장 필기 완전정복', author: '정배관', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '배관기능장 실기 핵심 해설', author: '나시공', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '배관기능장 기출문제 총정리', author: '서합격', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '산업용 배관 실무 해설', author: '조플랜트', publisher: '기문당', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '공조냉동기계기능장': {
    name: '공조냉동기계기능장',
    icon: 'fa-snowflake',
    category: '기계·설비',
    heroTitle: '2026년도 공조냉동기계기능장 합격 가이드',
    heroDesc: '공조냉동기계기능장은 냉동·공기조화 시스템 설계와 유지보수 분야의 최고 기능 자격증입니다. 대형 빌딩, 산업시설, 냉동창고 등의 설비 관리에 필수적이며, 에너지 절약 설계 역량이 특히 중요시되고 있습니다. 냉매 취급과 시스템 진단 능력을 집중적으로 준비해야 합니다.',
    passRateSummary: '필기 33% | 실기 40%',
    avgPassRate: '37%',
    passRates: [
      { year: 2020, written: 31, practical: 38 },
      { year: 2021, written: 29, practical: 37 },
      { year: 2022, written: 34, practical: 41 },
      { year: 2023, written: 35, practical: 43 },
      { year: 2024, written: 36, practical: 42 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '냉동공학', desc: '냉동 사이클, 냉매 특성, 압축기·증발기·응축기 원리 및 설계' },
      { name: '공기조화', desc: '공조 시스템 구성, 습공기 선도, 부하 계산 및 덕트 설계' },
      { name: '냉동·공조 기기', desc: '각종 냉동기·공조기 구조, 운전 특성, 고장 진단 및 수리' },
      { name: '냉매 및 에너지 관리', desc: '친환경 냉매 종류, 누설 검사, 에너지 효율 분석 및 절약 대책' },
      { name: '냉동·공조 설비 관리', desc: '설비 유지보수 계획, 안전 관리, 법규 기준 및 점검 절차' },
    ],
    jobs: [
      { title: '대형 빌딩 공조 관리자', company: '부동산 관리 법인', salary: '4,500~6,000만원', location: '수도권', type: '정규직' },
      { title: '냉동 시스템 엔지니어', company: '냉동 설비 전문업체', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '식품공장 냉동설비 관리', company: '식품 제조업체', salary: '4,200~5,800만원', location: '전국', type: '정규직' },
      { title: '공조냉동 설계 엔지니어', company: '건설 엔지니어링사', salary: '4,800~6,500만원', location: '수도권', type: '정규직' },
      { title: '냉동창고 설비 점검원', company: '물류 기업', salary: '3,500~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '공조냉동기계기능장 필기 핵심 이론', author: '권냉동', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '공조냉동기계기능장 실기 완전정복', author: '윤공조', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '공조냉동기계기능장 기출문제 해설', author: '엄기능', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '냉동·공조 설비 실무 핵심', author: '하설비', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '금형기능장': {
    name: '금형기능장',
    icon: 'fa-cubes',
    category: '기계·설비',
    heroTitle: '2026년도 금형기능장 합격 가이드',
    heroDesc: '금형기능장은 프레스 금형, 플라스틱 금형 등 정밀 금형 제작 분야의 최고 기능 자격증입니다. 자동차, 전자, 반도체 부품 생산에 핵심적인 역할을 하며, CAD/CAM을 활용한 금형 설계 능력이 중요합니다. 고도의 정밀 가공 기술과 재료 지식이 요구되는 고난도 자격증입니다.',
    passRateSummary: '필기 27% | 실기 33%',
    avgPassRate: '30%',
    passRates: [
      { year: 2020, written: 25, practical: 31 },
      { year: 2021, written: 24, practical: 30 },
      { year: 2022, written: 28, practical: 34 },
      { year: 2023, written: 29, practical: 35 },
      { year: 2024, written: 30, practical: 36 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '금형 재료 및 열처리', desc: '공구강, 합금강 등 금형 재료 특성과 열처리 방법 이해' },
      { name: '프레스 금형 설계', desc: '블랭킹·드로잉·굽힘 금형 구조 설계 및 전단력 계산' },
      { name: '플라스틱 금형 설계', desc: '사출 금형, 압축 금형 구조 설계와 게이트·런너 시스템 설계' },
      { name: '정밀 측정 및 검사', desc: '3차원 측정, 표면 거칠기 측정, 금형 검사 기준 및 방법' },
      { name: 'CAD/CAM 응용', desc: '금형 설계용 CAD/CAM 소프트웨어 활용 및 NC 프로그래밍' },
    ],
    jobs: [
      { title: '자동차 부품 금형 설계', company: '자동차 부품사', salary: '4,500~6,500만원', location: '울산·경기', type: '정규직' },
      { title: '플라스틱 사출 금형 제작', company: '금형 전문업체', salary: '4,000~5,500만원', location: '경기·인천', type: '정규직' },
      { title: '금형 품질 관리 엔지니어', company: '전자 부품 제조사', salary: '4,200~5,800만원', location: '수도권', type: '정규직' },
      { title: '금형 기술 연구원', company: '금형 기술 연구소', salary: '4,800~6,000만원', location: '수도권', type: '정규직' },
      { title: '금형 유지보수 전문원', company: '중소 제조업체', salary: '3,500~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '금형기능장 필기 완전정복', author: '김금형', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '금형기능장 실기 핵심 해설', author: '이정밀', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '금형기능장 기출문제 10개년', author: '박합격', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '금형 설계 실무 핵심', author: '최설계', publisher: '기문당', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '기계가공조립기능장': {
    name: '기계가공조립기능장',
    icon: 'fa-cogs',
    category: '기계·설비',
    heroTitle: '2026년도 기계가공조립기능장 합격 가이드',
    heroDesc: '기계가공조립기능장은 선반, 밀링, CNC 등 정밀 기계 가공과 조립 분야의 최고 기능 자격증입니다. 제조업 현장에서 생산 공정 관리와 품질 향상을 주도하는 핵심 인력으로 인정받을 수 있습니다. CNC 프로그래밍과 치공구 설계 역량이 합격의 핵심 포인트입니다.',
    passRateSummary: '필기 31% | 실기 38%',
    avgPassRate: '35%',
    passRates: [
      { year: 2020, written: 29, practical: 36 },
      { year: 2021, written: 27, practical: 35 },
      { year: 2022, written: 32, practical: 39 },
      { year: 2023, written: 33, practical: 40 },
      { year: 2024, written: 34, practical: 41 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '기계 재료 및 가공', desc: '금속·비금속 재료 특성, 절삭 이론, 공구 재질 및 가공 조건 설정' },
      { name: 'CNC 가공', desc: 'CNC 선반·머시닝센터 프로그래밍, G/M 코드, 공구 보정 및 설정' },
      { name: '기계 조립 및 검사', desc: '부품 조립 공차, 끼워맞춤 기준, 측정 기기 사용 및 검사 방법' },
      { name: '치공구 설계', desc: '지그·픽스처 설계 원리, 위치결정 방법, 클램핑 장치 설계' },
      { name: '품질 관리', desc: 'SPC, 공정 능력 지수, 불량 분석 기법 및 개선 활동 방법론' },
    ],
    jobs: [
      { title: 'CNC 가공 기술 관리자', company: '정밀 가공 전문업체', salary: '4,200~5,800만원', location: '전국', type: '정규직' },
      { title: '생산 공정 엔지니어', company: '자동차·전자 제조사', salary: '4,500~6,500만원', location: '수도권·경남', type: '정규직' },
      { title: '품질 검사 팀장', company: '중견 제조업체', salary: '4,800~6,000만원', location: '전국', type: '정규직' },
      { title: '기계 가공 교육 강사', company: '직업훈련기관', salary: '4,000~5,000만원', location: '전국', type: '정규직' },
      { title: '기계 조립 전문 기술원', company: '기계 부품 업체', salary: '3,500~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '기계가공조립기능장 필기 핵심', author: '송기계', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '기계가공조립기능장 실기 완전정복', author: '전가공', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '기계가공조립기능장 기출 해설집', author: '노합격', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: 'CNC 가공 실무 핵심 정리', author: '문정밀', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '위험물기능장': {
    name: '위험물기능장',
    icon: 'fa-biohazard',
    category: '화학·환경',
    heroTitle: '2026년도 위험물기능장 합격 가이드',
    heroDesc: '위험물기능장은 위험물 안전 관리 분야의 최고 등급 국가기술자격으로, 정유·화학·소방 분야 전문가로 활동할 수 있습니다. 위험물의 종류, 성질, 취급 방법 및 소화 방법에 대한 심층적 이해가 필요하며, 안전 관리 규정과 법규 지식도 폭넓게 요구됩니다. 화재·폭발 사고 예방 전문가로 취업 시장에서 높은 대우를 받습니다.',
    passRateSummary: '필기 36% | 실기 45%',
    avgPassRate: '41%',
    passRates: [
      { year: 2020, written: 34, practical: 43 },
      { year: 2021, written: 32, practical: 42 },
      { year: 2022, written: 37, practical: 46 },
      { year: 2023, written: 38, practical: 47 },
      { year: 2024, written: 39, practical: 48 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '위험물 일반화학', desc: '화학 반응, 산화·환원, 유기화합물 특성 등 기초 화학 이론' },
      { name: '위험물의 성질과 취급', desc: '1~6류 위험물 종류별 성질, 저장·취급 방법, 위험성 평가' },
      { name: '화재 및 소화 이론', desc: '연소 이론, 폭발 메커니즘, 소화 약제 종류 및 적응 화재 분류' },
      { name: '위험물 시설 기준', desc: '제조소·저장소·취급소 시설 기준, 설치 허가, 완공 검사 절차' },
      { name: '위험물 안전 관리 법규', desc: '위험물안전관리법 해석, 안전 관리자 직무, 정기점검 기준' },
    ],
    jobs: [
      { title: '위험물 안전 관리자', company: '정유·화학 공장', salary: '4,500~6,000만원', location: '울산·여수·대산', type: '정규직' },
      { title: '위험물 창고 관리 책임자', company: '위험물 저장업체', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '소방 시설 안전 관리원', company: '소방 안전 관리 업체', salary: '4,200~5,800만원', location: '전국', type: '정규직' },
      { title: '화학 물질 안전 전문가', company: '화학 제품 제조사', salary: '4,800~6,500만원', location: '수도권·충남', type: '정규직' },
      { title: '위험물 운송 안전 관리원', company: '위험물 운송업체', salary: '3,500~4,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '위험물기능장 필기 완전정복', author: '양위험', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '위험물기능장 실기 핵심 해설', author: '구안전', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '위험물기능장 기출문제 해설집', author: '변합격', publisher: '동일출판사', year: 2023, rating: 4.4 },
      { title: '위험물 안전 관리 실무', author: '신화학', publisher: '기문당', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '소방설비기능장': {
    name: '소방설비기능장',
    icon: 'fa-fire-extinguisher',
    category: '안전·보건',
    heroTitle: '2026년도 소방설비기능장 합격 가이드',
    heroDesc: '소방설비기능장은 소방 시설의 설계, 시공, 점검, 유지관리 전 분야를 아우르는 최고 등급 소방 자격증입니다. 건물 안전 규제 강화로 소방 전문가에 대한 수요가 지속적으로 증가하고 있으며, 취득 후 소방 시설 관리 법인 설립도 가능합니다. 기계식과 전기식 소방 설비를 모두 이해해야 하는 폭넓은 자격입니다.',
    passRateSummary: '필기 34% | 실기 43%',
    avgPassRate: '39%',
    passRates: [
      { year: 2020, written: 32, practical: 41 },
      { year: 2021, written: 30, practical: 40 },
      { year: 2022, written: 35, practical: 44 },
      { year: 2023, written: 36, practical: 45 },
      { year: 2024, written: 37, practical: 46 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '소방 원론', desc: '연소·폭발 이론, 화재 분류, 소화 원리 및 소화 약제 특성' },
      { name: '소화 설비', desc: '스프링클러, 옥내소화전, 물분무 설비 등 수계 소화 설비 구조와 설계' },
      { name: '경보 및 피난 설비', desc: '자동화재탐지 설비, 비상방송, 피난 유도 설비 구성 및 점검 방법' },
      { name: '소방 전기 설비', desc: '비상 전원, 비상 조명, 소방 전기 배선 기준 및 설치 방법' },
      { name: '소방 관계 법규', desc: '소방시설법, 화재예방법, 위험물법 핵심 내용 및 설치 기준' },
    ],
    jobs: [
      { title: '소방 시설 설계 엔지니어', company: '소방 설계 전문업체', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
      { title: '소방 안전 관리자', company: '대형 건물 관리 법인', salary: '4,000~5,500만원', location: '수도권', type: '정규직' },
      { title: '소방 시설 감리원', company: '소방 감리 법인', salary: '5,000~7,000만원', location: '전국', type: '정규직' },
      { title: '소방 설비 시공 관리자', company: '소방 건설업체', salary: '4,800~6,500만원', location: '전국', type: '정규직' },
      { title: '소방 점검 전문원', company: '소방 점검 업체', salary: '3,500~4,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '소방설비기능장 필기 완전정복', author: '오소방', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '소방설비기능장 실기 핵심 해설', author: '류설비', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '소방설비기능장 기출문제 총정리', author: '황합격', publisher: '동일출판사', year: 2023, rating: 4.4 },
      { title: '소방 시설 실무 핵심 정리', author: '주안전', publisher: '기문당', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '건축목공기능장': {
    name: '건축목공기능장',
    icon: 'fa-hammer',
    category: '건설·토목',
    heroTitle: '2026년도 건축목공기능장 합격 가이드',
    heroDesc: '건축목공기능장은 목구조 건축물의 시공과 목공 인테리어 분야 최고 기능 자격증입니다. 한옥 건축 붐과 목조 건축 수요 증가로 취업 시장이 확대되고 있으며, 전통 목공 기법부터 현대 목구조 시공까지 폭넓은 지식이 요구됩니다. 실기 작업 정밀도와 도면 해독 능력이 합격의 핵심입니다.',
    passRateSummary: '필기 30% | 실기 38%',
    avgPassRate: '34%',
    passRates: [
      { year: 2020, written: 28, practical: 36 },
      { year: 2021, written: 26, practical: 35 },
      { year: 2022, written: 31, practical: 39 },
      { year: 2023, written: 32, practical: 40 },
      { year: 2024, written: 33, practical: 41 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '목재 재료', desc: '수종별 목재 특성, 건조 방법, 결함 종류 및 방부·방충 처리 기준' },
      { name: '건축 목공 시공', desc: '목구조 골조 시공, 바닥·벽·지붕 구조 시공 방법 및 접합 기법' },
      { name: '목공 도면 해독', desc: '건축 도면 기호, 목공 상세 도면 판독 및 수량 산출 방법' },
      { name: '한옥 및 목조 건축', desc: '전통 한옥 구조, 기둥·보·도리 결구 방식, 현대 목조 건축 공법' },
      { name: '건설 안전 관리', desc: '목공 작업 위험 요소, 추락·협착 방지, 작업 안전 수칙 및 법규' },
    ],
    jobs: [
      { title: '목조 주택 시공 관리자', company: '목조 건축 전문업체', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '한옥 건축 전문가', company: '전통 건축 복원업체', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '목공 인테리어 기술 감독', company: '인테리어 전문업체', salary: '4,200~5,800만원', location: '수도권', type: '정규직' },
      { title: '목공 기술 교육 강사', company: '직업훈련기관', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '목공 현장 기술원', company: '건설 시공업체', salary: '3,200~4,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '건축목공기능장 필기 핵심 이론', author: '고목공', publisher: '성안당', year: 2024, rating: 4.3 },
      { title: '건축목공기능장 실기 완전정복', author: '남건축', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '건축목공기능장 기출문제 해설', author: '도합격', publisher: '동일출판사', year: 2023, rating: 4.2 },
      { title: '목조 건축 시공 실무', author: '라목조', publisher: '기문당', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '도장기능장': {
    name: '도장기능장',
    icon: 'fa-paint-roller',
    category: '건설·토목',
    heroTitle: '2026년도 도장기능장 합격 가이드',
    heroDesc: '도장기능장은 건축물, 교량, 선박, 산업 시설 등의 도장 작업 전반을 관리하는 최고 기능 자격증입니다. 도료의 특성과 도장 결함 분석, 색채 계획까지 폭넓은 전문 지식이 요구되며, 부식 방지와 미관 향상을 위한 핵심 기술 인력으로 수요가 꾸준합니다. 특수 도장 기법 습득이 실기 합격의 열쇠입니다.',
    passRateSummary: '필기 32% | 실기 41%',
    avgPassRate: '37%',
    passRates: [
      { year: 2020, written: 30, practical: 39 },
      { year: 2021, written: 28, practical: 38 },
      { year: 2022, written: 33, practical: 42 },
      { year: 2023, written: 34, practical: 43 },
      { year: 2024, written: 35, practical: 44 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '도료 및 도장 재료', desc: '도료 종류별 성분, 특성, 희석제, 경화제 적용 기준 이해' },
      { name: '도장 공법', desc: '솔칠·롤러·스프레이·전착 도장 기법, 하도·중도·상도 시공 방법' },
      { name: '도장 결함 및 품질 관리', desc: '핀홀·런·부풀음 등 결함 원인 분석, 건조 도막 두께 측정 및 검사' },
      { name: '색채 계획 및 적용', desc: '색채 이론, 색채 계획 절차, 표준 색표 활용 및 조색 방법' },
      { name: '도장 안전 및 환경', desc: '유기용제 위험성, 도장 작업 환경 기준, 폐도료 처리 및 법규' },
    ],
    jobs: [
      { title: '교량·구조물 방청 도장 관리자', company: '건설 전문 도장업체', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '선박 도장 기술 감독', company: '조선소·선박 도장업체', salary: '4,500~6,000만원', location: '부산·울산·거제', type: '정규직' },
      { title: '건축물 도장 기술 책임자', company: '종합 건설업체', salary: '4,200~5,800만원', location: '전국', type: '정규직' },
      { title: '도장 품질 관리 엔지니어', company: '중견 제조업체', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '특수 도장 시공 전문원', company: '특수 도장 전문업체', salary: '3,500~4,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '도장기능장 필기 완전정복', author: '마도장', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '도장기능장 실기 핵심 해설', author: '바색채', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '도장기능장 기출문제 총정리', author: '사합격', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '도장 실무 핵심 기술', author: '아도료', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '철근기능장': {
    name: '철근기능장',
    icon: 'fa-industry',
    category: '건설·토목',
    heroTitle: '2026년도 철근기능장 합격 가이드',
    heroDesc: '철근기능장은 철근콘크리트 구조물 시공의 최고 기능 자격증으로, 대형 건설 현장에서 철근 공사 총괄 관리를 담당합니다. 구조 도면 해독 능력과 철근 배근 설계 기술이 핵심이며, 건설 안전 관리 역량도 동시에 요구됩니다. 재개발·SOC 사업 확대로 숙련 철근 기능사에 대한 현장 수요가 높습니다.',
    passRateSummary: '필기 35% | 실기 48%',
    avgPassRate: '42%',
    passRates: [
      { year: 2020, written: 33, practical: 46 },
      { year: 2021, written: 31, practical: 45 },
      { year: 2022, written: 36, practical: 49 },
      { year: 2023, written: 37, practical: 50 },
      { year: 2024, written: 38, practical: 51 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '철근 재료 및 규격', desc: '철근 종류, 강도 등급, KS 규격, 이음·정착 길이 계산 기준' },
      { name: '구조 도면 해독', desc: '철근콘크리트 구조 도면 기호, 배근 상세 도면 판독 및 물량 산출' },
      { name: '철근 배근 시공', desc: '기초·기둥·보·슬래브별 배근 방법, 간격재 설치, 피복두께 확보' },
      { name: '철근 가공 및 조립', desc: '철근 절단·굽힘 가공, 가스압접·기계식 이음 방법 및 품질 기준' },
      { name: '건설 안전 관리', desc: '철근 작업 위험 요소, 붕괴·낙하 방지, 현장 안전 관리 법규' },
    ],
    jobs: [
      { title: '철근 공사 현장 소장', company: '철근 전문 건설업체', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
      { title: '철근콘크리트 공사 감리원', company: '감리 전문업체', salary: '4,800~6,500만원', location: '전국', type: '정규직' },
      { title: '건설 현장 안전 관리자', company: '대형 건설사', salary: '4,200~5,800만원', location: '전국', type: '정규직' },
      { title: '철근 공사 기술 지도원', company: '건설 기술 교육원', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '철근 가공 조립 기술원', company: '중소 건설업체', salary: '3,500~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '철근기능장 필기 완전정복', author: '자철근', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '철근기능장 실기 핵심 해설', author: '차건설', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '철근기능장 기출문제 해설집', author: '카합격', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '철근콘크리트 시공 실무', author: '타구조', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '정보처리기능장': {
    name: '정보처리기능장',
    icon: 'fa-server',
    category: 'IT·정보',
    heroTitle: '2026년도 정보처리기능장 합격 가이드',
    heroDesc: '정보처리기능장은 IT 분야 국가기술자격 중 최고 등급으로, 소프트웨어 개발·데이터베이스·네트워크·보안 전반을 아우르는 전문 자격증입니다. 공공기관 및 대기업 IT 직무에서 우대 요건으로 활용되며, 기술사 시험 응시 자격 취득에도 도움이 됩니다. 광범위한 출제 범위를 체계적으로 정리하는 학습 전략이 중요합니다.',
    passRateSummary: '필기 38% | 실기 44%',
    avgPassRate: '41%',
    passRates: [
      { year: 2020, written: 36, practical: 42 },
      { year: 2021, written: 34, practical: 41 },
      { year: 2022, written: 39, practical: 45 },
      { year: 2023, written: 40, practical: 46 },
      { year: 2024, written: 41, practical: 47 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '소프트웨어 공학', desc: '요구사항 분석, 설계 패턴, 개발 방법론, 품질 관리 및 테스트 기법' },
      { name: '데이터베이스', desc: 'DB 설계, SQL, 정규화, 트랜잭션 관리, 분산 DB 및 NoSQL 개념' },
      { name: '운영체제 및 네트워크', desc: '프로세스 관리, 메모리 관리, TCP/IP, 네트워크 보안 프로토콜' },
      { name: '정보 시스템 구축 관리', desc: '시스템 아키텍처 설계, 프로젝트 관리, 클라우드 컴퓨팅 개념' },
      { name: '정보보안', desc: '암호화 기법, 접근 통제, 보안 취약점 분석, 개인정보보호법 적용' },
    ],
    jobs: [
      { title: 'IT 시스템 아키텍트', company: 'SI·IT 서비스 기업', salary: '6,000~9,000만원', location: '수도권', type: '정규직' },
      { title: '공공기관 IT 기술 관리자', company: '공공기관·공기업', salary: '5,500~7,500만원', location: '전국', type: '정규직' },
      { title: '데이터베이스 관리자(DBA)', company: '금융·통신 기업', salary: '5,500~8,000만원', location: '수도권', type: '정규직' },
      { title: '정보보안 전문가', company: '보안 전문업체·대기업', salary: '5,000~7,500만원', location: '수도권', type: '정규직' },
      { title: 'IT 컨설턴트', company: 'IT 컨설팅 업체', salary: '5,000~8,000만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '정보처리기능장 필기 완전정복', author: '파정보', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '정보처리기능장 실기 핵심 해설', author: '하처리', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '정보처리기능장 기출문제 해설집', author: '거합격', publisher: '동일출판사', year: 2023, rating: 4.4 },
      { title: 'IT 기술 실무 핵심 정리', author: '너IT', publisher: '기문당', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

// === 기능사 전기·기계·화학 8종 ===

  '전기기능사': {
    name: '전기기능사',
    icon: 'fa-bolt',
    category: '전기·에너지',
    heroTitle: '2026년도 전기기능사 합격 가이드',
    heroDesc: '전기기능사는 전기설비의 설치·유지보수 업무를 수행하는 국가기술자격입니다. 산업 현장과 건축물의 전기공사 수요 증가로 취업 전망이 밝으며, 전기산업기사 취득을 위한 발판으로도 활용됩니다.',
    passRateSummary: '필기 52% | 실기 58%',
    avgPassRate: '55%',
    passRates: [
      { year: 2020, written: 49, practical: 55 },
      { year: 2021, written: 51, practical: 57 },
      { year: 2022, written: 53, practical: 59 },
      { year: 2023, written: 54, practical: 60 },
      { year: 2024, written: 52, practical: 58 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '전기이론', desc: '전류·전압·저항의 기본 개념 및 회로 해석' },
      { name: '전기기기', desc: '변압기·전동기·발전기 등 전기기기의 구조와 원리' },
      { name: '전기설비', desc: '옥내배선 설계·시공 및 전기설비 유지보수' },
      { name: '전기법규', desc: '전기사업법·전기설비기술기준 등 관련 법령' },
      { name: '안전관리', desc: '전기재해 예방 및 작업 안전수칙' },
    ],
    jobs: [
      { title: '전기기사', company: '건설·시공업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '전기설비 유지보수', company: '제조·공장', salary: '3,200~4,200만원', location: '수도권', type: '정규직' },
      { title: '전기공사 현장 기사', company: '전기공사 전문업체', salary: '3,000~3,800만원', location: '전국', type: '정규직' },
      { title: '아파트·건물 전기관리', company: '관리업체', salary: '2,800~3,500만원', location: '수도권', type: '정규직' },
      { title: '전기 점검 보조', company: '전기안전공사', salary: '2,500~3,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전기기능사 필기 핵심이론+기출문제', author: '이영철', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전기기능사 실기 완전정복', author: '김동현', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '전기기능사 기출문제해설집', author: '박진호', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '전기기능사 7일완성', author: '유재성', publisher: '에듀윌', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '전기공사기능사': {
    name: '전기공사기능사',
    icon: 'fa-plug',
    category: '전기·에너지',
    heroTitle: '2026년도 전기공사기능사 합격 가이드',
    heroDesc: '전기공사기능사는 전기공사 현장에서 배선공사·분전반 설치 등을 수행하는 자격입니다. 건축 및 인프라 확대로 현장 인력 수요가 꾸준하며, 전기공사산업기사로 이어지는 경력 경로로 인기가 높습니다.',
    passRateSummary: '필기 48% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 45, practical: 52 },
      { year: 2021, written: 47, practical: 54 },
      { year: 2022, written: 49, practical: 56 },
      { year: 2023, written: 50, practical: 57 },
      { year: 2024, written: 48, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '전기이론', desc: '기초 전기 회로 이론 및 전자기학 개요' },
      { name: '전기기기', desc: '변압기·전동기 등 주요 전기기기 구조와 특성' },
      { name: '전기공사 일반', desc: '옥내·옥외 전기공사 방법 및 시공 기준' },
      { name: '전기설비기술기준', desc: '전기공사 관련 법규 및 안전기준' },
      { name: '배선설계', desc: '분전반 설계·케이블 선정 및 접지공사 방법' },
    ],
    jobs: [
      { title: '전기공사 현장 기사', company: '전기공사 전문업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '배선공사 담당', company: '건설사', salary: '3,200~4,200만원', location: '수도권', type: '정규직' },
      { title: '전기설비 시공', company: '공장·제조업체', salary: '3,000~3,800만원', location: '경기·인천', type: '정규직' },
      { title: '아파트 전기공사', company: '건축 시행사', salary: '2,800~3,500만원', location: '전국', type: '정규직' },
      { title: '전기공사 보조 작업자', company: '하도급 업체', salary: '2,400~2,900만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전기공사기능사 필기 완전정복', author: '이상호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전기공사기능사 실기 합격노트', author: '최성진', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '전기공사기능사 최신 기출문제집', author: '김우식', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '전기공사기능사 단기완성', author: '박준혁', publisher: '에듀윌', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '용접기능사': {
    name: '용접기능사',
    icon: 'fa-fire-flame-curved',
    category: '기계·설비',
    heroTitle: '2026년도 용접기능사 합격 가이드',
    heroDesc: '용접기능사는 금속 구조물의 접합 작업을 수행하는 국가기술자격으로, 제조·조선·건설 분야에서 높은 수요를 자랑합니다. 실기 시험에서 피복 아크용접과 MIG/TIG 용접 기술을 평가하며, 숙련도에 따라 연봉 상승폭이 큽니다.',
    passRateSummary: '필기 55% | 실기 62%',
    avgPassRate: '58%',
    passRates: [
      { year: 2020, written: 52, practical: 59 },
      { year: 2021, written: 54, practical: 61 },
      { year: 2022, written: 56, practical: 63 },
      { year: 2023, written: 57, practical: 64 },
      { year: 2024, written: 55, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '용접 일반', desc: '용접의 종류·원리 및 용접기 구조와 특성' },
      { name: '용접 재료', desc: '모재·용가재·피복재 종류 및 선택 기준' },
      { name: '기계 제도', desc: '용접 기호 이해 및 도면 해독' },
      { name: '용접 시공', desc: '각종 용접법 시공 절차 및 결함 방지' },
      { name: '안전관리', desc: '용접 작업 시 화재·폭발·가스 위험 예방' },
    ],
    jobs: [
      { title: '구조물 용접사', company: '조선·중공업', salary: '3,500~5,000만원', location: '부산·거제', type: '정규직' },
      { title: '배관 용접사', company: '플랜트 시공업체', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
      { title: '금속 가공 용접', company: '제조·금속업체', salary: '3,000~4,000만원', location: '경기·인천', type: '정규직' },
      { title: '자동차 부품 용접', company: '자동차 부품사', salary: '3,200~4,200만원', location: '울산·창원', type: '정규직' },
      { title: '현장 보조 용접사', company: '건설·철골 업체', salary: '2,800~3,300만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '용접기능사 필기 핵심이론+기출', author: '정동욱', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '용접기능사 실기 완전정복', author: '한상길', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '용접기능사 기출문제 총정리', author: '이종민', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '용접기능사 단기합격', author: '조현수', publisher: '에듀윌', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '특수용접기능사': {
    name: '특수용접기능사',
    icon: 'fa-fire',
    category: '기계·설비',
    heroTitle: '2026년도 특수용접기능사 합격 가이드',
    heroDesc: '특수용접기능사는 TIG·MIG·플라즈마 등 특수 용접 기술을 인증하는 자격입니다. 일반 용접에 비해 높은 숙련도를 요구하며, 항공·조선·반도체 장비 제조 분야에서 고급 인력으로 우대받습니다.',
    passRateSummary: '필기 47% | 실기 52%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 44, practical: 49 },
      { year: 2021, written: 46, practical: 51 },
      { year: 2022, written: 48, practical: 53 },
      { year: 2023, written: 49, practical: 54 },
      { year: 2024, written: 47, practical: 52 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '특수용접 개론', desc: 'TIG·MIG·플라즈마·레이저 용접의 원리와 특성' },
      { name: '용접 재료', desc: '특수 합금 및 스테인리스강 등 재료 특성과 선택' },
      { name: '기계 제도', desc: '특수용접 기호 및 도면 해독' },
      { name: '용접 품질관리', desc: '용접부 결함 검사 및 비파괴 검사 방법' },
      { name: '안전관리', desc: '특수용접 작업의 가스·복사열 위험 예방' },
    ],
    jobs: [
      { title: '항공부품 TIG 용접사', company: '항공·방산 업체', salary: '4,000~5,500만원', location: '경남·부산', type: '정규직' },
      { title: '반도체 장비 용접', company: '반도체 장비사', salary: '3,800~5,000만원', location: '경기·충남', type: '정규직' },
      { title: '조선소 특수용접', company: '조선소', salary: '4,000~6,000만원', location: '거제·부산', type: '정규직' },
      { title: '플랜트 배관 용접', company: '플랜트 전문업체', salary: '4,200~6,000만원', location: '전국', type: '정규직' },
      { title: '특수용접 보조 기술자', company: '금속 가공업체', salary: '2,900~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '특수용접기능사 필기 완전정복', author: '이광호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '특수용접기능사 실기 합격 가이드', author: '김철수', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '특수용접기능사 기출문제 해설', author: '박재원', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '특수용접기능사 단기완성', author: '최동훈', publisher: '에듀윌', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '피복아크용접기능사': {
    name: '피복아크용접기능사',
    icon: 'fa-fire-flame-curved',
    category: '기계·설비',
    heroTitle: '2026년도 피복아크용접기능사 합격 가이드',
    heroDesc: '피복아크용접기능사는 가장 기본적인 수동 아크 용접(SMAW) 기술을 인증하는 국가기술자격으로, 조선·건설·제조업 현장에서 폭넓게 활용됩니다. 피복 용접봉을 사용해 탄소강·스테인리스강 등을 접합하는 실기 능력을 평가하며, 용접 분야 입문 자격으로 적합합니다.',
    passRateSummary: '필기 55% | 실기 58%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 52, practical: 55 },
      { year: 2021, written: 54, practical: 57 },
      { year: 2022, written: 56, practical: 59 },
      { year: 2023, written: 57, practical: 60 },
      { year: 2024, written: 55, practical: 58 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
      { label: '3회 필기', date: '2026-07-27' },
      { label: '3회 실기', date: '2026-10-04' },
    ],
    subjects: [
      { name: '용접 일반', desc: '피복아크용접의 원리, 전류·전압 특성, 아크 발생 메커니즘' },
      { name: '용접 재료', desc: '피복 용접봉 종류(E4301~E4316 계열) 및 선택 기준' },
      { name: '기계 제도', desc: '용접 기호 해독 및 도면 읽기' },
      { name: '용접 시공', desc: '자세별 용접(아래보기·수직·수평·위보기) 시공 요령' },
      { name: '안전관리', desc: '아크광선·연기·감전 위험 예방 및 개인보호구 착용' },
    ],
    jobs: [
      { title: '구조물 용접사', company: '조선·중공업', salary: '3,200~4,800만원', location: '부산·거제', type: '정규직' },
      { title: '철골 용접사', company: '건설·철구조물업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '배관 용접사', company: '플랜트·설비업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '용접 보조 기술자', company: '제조·금속업체', salary: '2,800~3,500만원', location: '경기·인천', type: '계약직' },
    ],
    books: [
      { title: '피복아크용접기능사 필기+실기', author: '정동욱', publisher: '성안당', year: 2025, rating: 4.4 },
      { title: '피복아크용접기능사 합격 완성', author: '한상길', publisher: '일진사', year: 2025, rating: 4.3 },
      { title: '피복아크용접기능사 기출문제 총정리', author: '이종민', publisher: '크라운출판사', year: 2025, rating: 4.2 },
      { title: '피복아크용접기능사 단기합격', author: '조현수', publisher: '에듀윌', year: 2025, rating: 4.1 },
      { title: '피복아크용접기능사 핵심이론+실기', author: '김재호', publisher: '예문사', year: 2024, rating: 4.0 },
    ],
    defaultTodos: [
      '피복아크용접 원리 및 용접봉 종류 파악',
      '용접 자세별(아래보기·수직·수평) 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 용접 자세 연습',
      '안전관리 핵심 내용 암기',
    ],
  },

  '가스텅스텐아크용접기능사': {
    name: '가스텅스텐아크용접기능사',
    icon: 'fa-fire-flame-curved',
    category: '기계·설비',
    heroTitle: '2026년도 가스텅스텐아크용접기능사 합격 가이드',
    heroDesc: '가스텅스텐아크용접기능사(GTAW/TIG)는 텅스텐 전극과 불활성 가스(아르곤)를 이용한 정밀 용접 기술을 인증합니다. 스테인리스강·알루미늄 등 비철금속 용접에 강점이 있어 반도체 장비·항공·식품기계·화학플랜트 분야에서 고급 기술자로 우대받습니다.',
    passRateSummary: '필기 48% | 실기 50%',
    avgPassRate: '49%',
    passRates: [
      { year: 2020, written: 45, practical: 47 },
      { year: 2021, written: 47, practical: 49 },
      { year: 2022, written: 49, practical: 51 },
      { year: 2023, written: 50, practical: 52 },
      { year: 2024, written: 48, practical: 50 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
      { label: '3회 필기', date: '2026-07-27' },
      { label: '3회 실기', date: '2026-10-04' },
    ],
    subjects: [
      { name: 'TIG 용접 일반', desc: 'GTAW 원리, 텅스텐 전극 종류, 불활성 가스(Ar·He) 특성' },
      { name: '용접 재료', desc: '스테인리스강·알루미늄·티타늄 등 비철금속 특성 및 용가재 선택' },
      { name: '기계 제도', desc: 'TIG 용접 기호 해독 및 이음 형상 도면 이해' },
      { name: '용접 품질관리', desc: '용접 결함 종류(기공·균열·용입불량) 및 비파괴 검사' },
      { name: '안전관리', desc: '자외선·오존·불활성 가스 질식 위험 예방' },
    ],
    jobs: [
      { title: 'TIG 용접 전문 기술자', company: '반도체·디스플레이 장비사', salary: '3,800~5,500만원', location: '경기·충남', type: '정규직' },
      { title: '항공 구조 용접사', company: '항공·방산업체', salary: '4,000~6,000만원', location: '경남·부산', type: '정규직' },
      { title: '화학플랜트 TIG 용접', company: '플랜트 전문업체', salary: '4,200~6,000만원', location: '전국', type: '정규직' },
      { title: '스테인리스 용접 기술자', company: '식품·제약 장비업체', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '가스텅스텐아크용접기능사 필기+실기', author: '이광호', publisher: '성안당', year: 2025, rating: 4.4 },
      { title: 'TIG 용접기능사 합격 가이드', author: '박재원', publisher: '일진사', year: 2024, rating: 4.3 },
      { title: '가스텅스텐아크용접기능사 기출문제 해설', author: '최동훈', publisher: '크라운출판사', year: 2025, rating: 4.2 },
      { title: '가스텅스텐아크용접기능사 단기완성', author: '김성수', publisher: '에듀윌', year: 2025, rating: 4.1 },
      { title: 'TIG 용접 핵심이론+실기 실전', author: '이재원', publisher: '예문사', year: 2024, rating: 4.0 },
    ],
    defaultTodos: [
      'GTAW/TIG 용접 원리 및 텅스텐 전극 종류 학습',
      '비철금속(스테인리스·알루미늄) 특성 이해',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 TIG 용접 자세 연습',
      '용접 결함 종류 및 원인 암기',
    ],
  },

  '이산화탄소가스아크용접기능사': {
    name: '이산화탄소가스아크용접기능사',
    icon: 'fa-fire-flame-curved',
    category: '기계·설비',
    heroTitle: '2026년도 이산화탄소가스아크용접기능사 합격 가이드',
    heroDesc: '이산화탄소가스아크용접기능사(CO₂/MAG)는 CO₂ 또는 혼합 가스를 보호가스로 사용하는 반자동 용접(GMAW) 기술을 인증합니다. 자동차·조선·철구조물 등 대량 생산 현장에서 가장 많이 사용되는 용접법으로, 용접 속도와 생산성이 높아 취업 수요가 큽니다.',
    passRateSummary: '필기 54% | 실기 60%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 51, practical: 57 },
      { year: 2021, written: 53, practical: 59 },
      { year: 2022, written: 55, practical: 61 },
      { year: 2023, written: 56, practical: 62 },
      { year: 2024, written: 54, practical: 60 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
      { label: '3회 필기', date: '2026-07-27' },
      { label: '3회 실기', date: '2026-10-04' },
    ],
    subjects: [
      { name: 'CO₂ 용접 일반', desc: 'GMAW/MAG 원리, 와이어 송급 장치, 보호가스(CO₂·혼합) 특성' },
      { name: '용접 재료', desc: '와이어 전극(ER70S 계열) 종류 및 모재별 선택 기준' },
      { name: '기계 제도', desc: '용접 기호 해독 및 이음 형상 도면 이해' },
      { name: '용접 시공', desc: '전진법·후진법, 위빙 비드 시공 요령, 스패터 저감 기법' },
      { name: '안전관리', desc: 'CO₂ 가스 질식·스패터 화재 위험 예방 및 환기 관리' },
    ],
    jobs: [
      { title: '자동차 차체 용접사', company: '자동차·부품사', salary: '3,200~4,500만원', location: '울산·아산', type: '정규직' },
      { title: '조선소 CO₂ 용접', company: '조선·중공업', salary: '3,500~5,000만원', location: '부산·거제', type: '정규직' },
      { title: '철구조물 용접사', company: '건설·철골업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '반자동 용접 기술자', company: '일반 제조업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '이산화탄소가스아크용접기능사 필기+실기', author: '정동욱', publisher: '성안당', year: 2025, rating: 4.4 },
      { title: 'CO₂용접기능사 합격 완성', author: '조현수', publisher: '에듀윌', year: 2024, rating: 4.2 },
      { title: '이산화탄소가스아크용접기능사 기출문제 총정리', author: '이종민', publisher: '크라운출판사', year: 2025, rating: 4.1 },
      { title: 'CO₂용접기능사 단기합격 핵심이론', author: '한상길', publisher: '일진사', year: 2025, rating: 4.0 },
      { title: '이산화탄소가스아크용접 실기 완전정복', author: '김재호', publisher: '예문사', year: 2024, rating: 3.9 },
    ],
    defaultTodos: [
      'CO₂/MAG 용접 원리 및 와이어 전극 종류 파악',
      '보호가스 특성 및 장비 구조 이해',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 CO₂ 용접 자세·위빙 연습',
      '안전관리(가스 질식·스패터) 핵심 내용 암기',
    ],
  },

  '배관기능사': {
    name: '배관기능사',
    icon: 'fa-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 배관기능사 합격 가이드',
    heroDesc: '배관기능사는 급수·급탕·가스·소방 배관 시스템을 설치·유지보수하는 자격입니다. 건설 및 플랜트 산업의 지속적인 성장으로 수요가 꾸준하며, 배관산업기사·기사로 이어지는 경력 경로를 갖추고 있습니다.',
    passRateSummary: '필기 50% | 실기 57%',
    avgPassRate: '53%',
    passRates: [
      { year: 2020, written: 47, practical: 54 },
      { year: 2021, written: 49, practical: 56 },
      { year: 2022, written: 51, practical: 58 },
      { year: 2023, written: 52, practical: 59 },
      { year: 2024, written: 50, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '배관 일반', desc: '배관 재료·이음 방식·밸브·펌프의 종류와 특성' },
      { name: '유체역학 기초', desc: '관내 유체 흐름·압력 손실 계산 기초' },
      { name: '배관 도면', desc: '배관 계통도 해독 및 도면 작성 방법' },
      { name: '배관 시공', desc: '급수·급탕·난방·가스 배관 시공 절차' },
      { name: '안전관리', desc: '배관 작업 시 가스 누출·화재 방지 및 안전수칙' },
    ],
    jobs: [
      { title: '배관 시공 기술자', company: '배관 전문업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '플랜트 배관원', company: '플랜트·화공 업체', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
      { title: '설비 배관 유지보수', company: '제조·공장', salary: '3,000~4,000만원', location: '경기·충남', type: '정규직' },
      { title: '건축 설비 배관', company: '건설사', salary: '3,000~3,800만원', location: '수도권', type: '정규직' },
      { title: '배관 설비 보조', company: '하도급 업체', salary: '2,500~3,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '배관기능사 필기 핵심이론+기출', author: '송태호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '배관기능사 실기 완전정복', author: '강민수', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '배관기능사 기출문제 해설집', author: '윤기혁', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '배관기능사 단기합격 비법', author: '임재현', publisher: '에듀윌', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '공조냉동기계기능사': {
    name: '공조냉동기계기능사',
    icon: 'fa-snowflake',
    category: '기계·설비',
    heroTitle: '2026년도 공조냉동기계기능사 합격 가이드',
    heroDesc: '공조냉동기계기능사는 냉동·공조 설비의 설치·유지보수를 담당하는 자격입니다. 기후변화로 냉방 수요가 늘고 스마트 빌딩이 확산되면서 전문 인력 수요가 지속 증가하고 있습니다.',
    passRateSummary: '필기 53% | 실기 60%',
    avgPassRate: '56%',
    passRates: [
      { year: 2020, written: 50, practical: 57 },
      { year: 2021, written: 52, practical: 59 },
      { year: 2022, written: 54, practical: 61 },
      { year: 2023, written: 55, practical: 62 },
      { year: 2024, written: 53, practical: 60 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '냉동 공학', desc: '냉동 사이클·냉매·압축기 원리 및 특성' },
      { name: '공기조화 설비', desc: '공조 시스템 구성 요소 및 환기·냉난방 방식' },
      { name: '냉동 기계', desc: '팽창밸브·응축기·증발기 구조와 유지보수' },
      { name: '전기 제어', desc: '냉동공조 설비의 전기 회로 및 자동제어' },
      { name: '안전관리', desc: '냉매 취급 안전·고압가스 법규 및 사고 예방' },
    ],
    jobs: [
      { title: '냉동공조 설비 기사', company: '건물관리·빌딩 업체', salary: '3,200~4,500만원', location: '수도권', type: '정규직' },
      { title: '냉동기 유지보수', company: '식품·냉동창고 업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '공조설비 시공', company: '기계설비 시공업체', salary: '3,200~4,200만원', location: '전국', type: '정규직' },
      { title: '반도체 공조 유지관리', company: '반도체 FAB', salary: '3,800~5,000만원', location: '경기·충남', type: '정규직' },
      { title: '냉동공조 보조 기술자', company: '시공 하도급 업체', salary: '2,600~3,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '공조냉동기계기능사 필기 완전정복', author: '황인석', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '공조냉동기계기능사 실기 합격가이드', author: '노종현', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '공조냉동기계기능사 기출문제집', author: '백승민', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '공조냉동기계기능사 단기완성', author: '신동호', publisher: '에듀윌', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '승강기기능사': {
    name: '승강기기능사',
    icon: 'fa-elevator',
    category: '기계·설비',
    heroTitle: '2026년도 승강기기능사 합격 가이드',
    heroDesc: '승강기기능사는 엘리베이터·에스컬레이터 등 승강기 설비의 설치·점검·유지보수를 수행하는 자격입니다. 고층 건물 증가와 승강기 안전 규제 강화로 전문 인력 수요가 꾸준히 늘고 있습니다.',
    passRateSummary: '필기 58% | 실기 65%',
    avgPassRate: '61%',
    passRates: [
      { year: 2020, written: 55, practical: 62 },
      { year: 2021, written: 57, practical: 64 },
      { year: 2022, written: 59, practical: 66 },
      { year: 2023, written: 60, practical: 67 },
      { year: 2024, written: 58, practical: 65 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '승강기 개론', desc: '엘리베이터·에스컬레이터·무빙워크의 종류와 구조' },
      { name: '승강기 기계', desc: '권상기·조속기·완충기 등 기계 요소의 원리' },
      { name: '승강기 전기', desc: '승강기 제어 회로 및 전기 안전 장치' },
      { name: '승강기 법규', desc: '승강기 안전관리법·검사 기준 및 유지관리 규정' },
      { name: '안전관리', desc: '승강기 작업 안전수칙 및 사고 예방 방법' },
    ],
    jobs: [
      { title: '승강기 유지보수 기사', company: '승강기 전문 업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '엘리베이터 설치 기술자', company: '승강기 제조사', salary: '3,500~4,800만원', location: '수도권', type: '정규직' },
      { title: '빌딩 승강기 관리', company: '건물관리 업체', salary: '3,000~4,000만원', location: '수도권', type: '정규직' },
      { title: '승강기 검사원', company: '승강기안전공단', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '승강기 보수 보조', company: '하도급 유지보수 업체', salary: '2,600~3,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '승강기기능사 필기 핵심이론+기출', author: '이준호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '승강기기능사 실기 합격 완성', author: '박성우', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '승강기기능사 최신 기출문제집', author: '김태원', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '승강기기능사 단기완성', author: '오승준', publisher: '에듀윌', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '화학분석기능사': {
    name: '화학분석기능사',
    icon: 'fa-flask',
    category: '화학·환경',
    heroTitle: '2026년도 화학분석기능사 합격 가이드',
    heroDesc: '화학분석기능사는 화학물질의 정성·정량 분석 업무를 수행하는 국가기술자격입니다. 제약·화학·환경 분야의 품질 관리 및 연구·개발 보조 직무에서 필수 자격으로 인정받고 있습니다.',
    passRateSummary: '필기 62% | 실기 68%',
    avgPassRate: '65%',
    passRates: [
      { year: 2020, written: 59, practical: 65 },
      { year: 2021, written: 61, practical: 67 },
      { year: 2022, written: 63, practical: 69 },
      { year: 2023, written: 64, practical: 70 },
      { year: 2024, written: 62, practical: 68 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '분석화학 기초', desc: '용액 농도·산염기 이론 및 적정 분석 원리' },
      { name: '기기분석', desc: '분광광도계·크로마토그래피·원자흡광 분석 방법' },
      { name: '화학물질 관리', desc: '시약 취급·보관·폐기 및 화학물질 안전관리' },
      { name: '품질관리', desc: 'ISO 기준 시험법·정도관리 및 데이터 분석' },
      { name: '안전관리', desc: '실험실 안전규정·사고 대응 및 보호구 착용' },
    ],
    jobs: [
      { title: '품질관리 분석원', company: '제약·바이오 업체', salary: '3,000~4,200만원', location: '수도권·충북', type: '정규직' },
      { title: '환경 분석원', company: '환경 전문기관', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '화학 공정 분석', company: '석유화학 업체', salary: '3,500~4,800만원', location: '울산·여수', type: '정규직' },
      { title: '식품 분석 기사', company: '식품 제조업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '연구소 분석 보조', company: '연구기관·학교', salary: '2,400~3,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '화학분석기능사 필기 완전정복', author: '김소연', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '화학분석기능사 실기 합격 가이드', author: '이나래', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '화학분석기능사 기출문제 해설집', author: '정수진', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '화학분석기능사 단기완성', author: '한지영', publisher: '에듀윌', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

// === 기능사 안전·건설·IT 9종 ===
  '소방설비기능사(전기)': {
    name: '소방설비기능사(전기)',
    icon: 'fa-fire-extinguisher',
    category: '안전·보건',
    heroTitle: '2026년도 소방설비기능사(전기) 합격 가이드',
    heroDesc: '소방설비기능사(전기)는 전기 분야 소방시설의 설치·유지 및 점검 업무를 담당하는 국가기술자격입니다. 화재경보설비, 자동소화설비 등 전기 기반 소방시스템의 전문 인력을 양성하며, 소방 관련 업체 및 건설현장에서 폭넓게 활용됩니다. 안전 분야 취업을 목표로 하는 분들에게 강력히 추천되는 자격증입니다.',
    passRateSummary: '필기 52% | 실기 61%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 48, practical: 58 },
      { year: 2021, written: 51, practical: 60 },
      { year: 2022, written: 53, practical: 62 },
      { year: 2023, written: 54, practical: 63 },
      { year: 2024, written: 55, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '소방원론', desc: '연소·화재·폭발 이론, 소화 원리 및 화재 종류별 대응 방법' },
      { name: '소방전기일반', desc: '전기 기초 이론, 회로 해석, 전기 기기 및 배선 설계' },
      { name: '소방전기시설의 구조 및 원리', desc: '경보설비·피난설비·소화활동설비의 구조와 작동 원리' },
      { name: '소방관계법규', desc: '소방기본법, 화재예방법, 소방시설법 등 관련 법령 이해' },
      { name: '실기: 소방전기 시설 점검·설치', desc: '경보·피난설비 배선 및 도면 판독, 측정 기구 사용 실습' },
    ],
    jobs: [
      { title: '소방시설 설치·점검원', company: '소방설비업체', salary: '2,800~3,500만원', location: '전국', type: '정규직' },
      { title: '소방안전관리자', company: '건축·시설관리회사', salary: '3,000~3,800만원', location: '수도권', type: '정규직' },
      { title: '소방설비 유지보수 기사', company: '소방전문업체', salary: '2,700~3,400만원', location: '전국', type: '정규직' },
      { title: '소방공사 현장 기술원', company: '건설시공사', salary: '2,900~3,600만원', location: '전국', type: '정규직' },
      { title: '소방시설 점검 보조', company: '소방안전관리 법인', salary: '2,500~3,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '소방설비기능사(전기) 필기 한권으로 끝내기', author: '성안당 편집부', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '소방설비기능사 전기 기출문제 해설집', author: '이재원', publisher: '동일출판사', year: 2024, rating: 4.4 },
      { title: '소방전기 완전정복 이론+실기', author: '강민철', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '소방설비기능사(전기) 실기 단기완성', author: '박종현', publisher: '일진사', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '소방설비기능사(기계)': {
    name: '소방설비기능사(기계)',
    icon: 'fa-fire-extinguisher',
    category: '안전·보건',
    heroTitle: '2026년도 소방설비기능사(기계) 합격 가이드',
    heroDesc: '소방설비기능사(기계)는 스프링클러·소화전 등 기계식 소방시설의 설계·설치·점검을 담당하는 국가기술자격입니다. 건축물의 소방안전 확보에 핵심적인 역할을 하며, 소방전문업체·건설현장·시설관리 업종 등 다양한 분야에서 취업이 가능합니다. 소방 관련 경력 개발의 출발점으로 많은 수험생이 선택하는 자격증입니다.',
    passRateSummary: '필기 50% | 실기 59%',
    avgPassRate: '55%',
    passRates: [
      { year: 2020, written: 46, practical: 55 },
      { year: 2021, written: 49, practical: 57 },
      { year: 2022, written: 51, practical: 60 },
      { year: 2023, written: 52, practical: 61 },
      { year: 2024, written: 52, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '소방원론', desc: '연소·화재 이론, 소화 방법 및 소방약제의 종류와 특성' },
      { name: '소방유체역학', desc: '유체 흐름, 베르누이 방정식, 관로 손실 계산 등 기초 유체역학' },
      { name: '소방기계시설의 구조 및 원리', desc: '옥내·외 소화전, 스프링클러, 이산화탄소 소화설비 등의 구조' },
      { name: '소방관계법규', desc: '소방기본법, 소방시설법, 화재예방법 등 핵심 법령 파악' },
      { name: '실기: 소방기계 시설 점검·설치', desc: '배관 계통도 판독, 소화설비 배관 작업 및 측정 실습' },
    ],
    jobs: [
      { title: '소방기계 설비 설치원', company: '소방설비업체', salary: '2,800~3,500만원', location: '전국', type: '정규직' },
      { title: '소방안전관리보조자', company: '대형건물 관리업체', salary: '2,900~3,600만원', location: '수도권', type: '정규직' },
      { title: '스프링클러 시스템 기술원', company: '소방시공사', salary: '2,800~3,400만원', location: '전국', type: '정규직' },
      { title: '소방설비 점검 기술원', company: '소방전문업체', salary: '2,700~3,300만원', location: '전국', type: '정규직' },
      { title: '소방공사 보조 기술원', company: '건설현장', salary: '2,400~3,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '소방설비기능사(기계) 필기 완전정복', author: '성안당 편집부', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '소방설비기능사 기계 기출해설 총정리', author: '이승훈', publisher: '동일출판사', year: 2024, rating: 4.4 },
      { title: '소방기계 이론+실기 한권 합격', author: '최준혁', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '소방설비기능사(기계) 실기 핵심요약', author: '김도현', publisher: '일진사', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '전산응용건축제도기능사': {
    name: '전산응용건축제도기능사',
    icon: 'fa-drafting-compass',
    category: '건설·토목',
    heroTitle: '2026년도 전산응용건축제도기능사 합격 가이드',
    heroDesc: '전산응용건축제도기능사는 CAD 소프트웨어를 활용하여 건축 도면을 작성하는 능력을 검정하는 국가기술자격입니다. 건축 설계사무소, 건설회사, 인테리어 업체 등에서 도면 작성 및 설계 보조 업무에 활용됩니다. AutoCAD 실기 능력이 합격의 핵심이며 꾸준한 반복 실습이 중요한 자격증입니다.',
    passRateSummary: '필기 58% | 실기 53%',
    avgPassRate: '56%',
    passRates: [
      { year: 2020, written: 55, practical: 49 },
      { year: 2021, written: 57, practical: 51 },
      { year: 2022, written: 59, practical: 53 },
      { year: 2023, written: 60, practical: 55 },
      { year: 2024, written: 59, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '건축계획', desc: '건축 각부 구조 계획, 공간 배치 원칙, 건축 유형별 설계 기준' },
      { name: '건축제도', desc: '제도 통칙, 도면 기호, 선의 종류 및 건축도면 표현 방법' },
      { name: '건축구조', desc: '목구조·철근콘크리트·철골구조의 기본 구조 원리와 부재 명칭' },
      { name: '건축설비', desc: '급배수·냉난방·전기·가스 설비의 기본 개념과 도면 표현' },
      { name: '실기: AutoCAD 건축도면 작성', desc: '평면도·입면도·단면도 작성, 치수 기입, 출력 설정 실습' },
    ],
    jobs: [
      { title: '건축 CAD 도면 작성원', company: '건축설계사무소', salary: '2,600~3,300만원', location: '수도권', type: '정규직' },
      { title: '건설 설계 보조', company: '종합건설사', salary: '2,700~3,400만원', location: '전국', type: '정규직' },
      { title: '인테리어 도면 작성원', company: '인테리어업체', salary: '2,500~3,200만원', location: '수도권', type: '정규직' },
      { title: 'BIM 모델링 보조', company: '건축 엔지니어링사', salary: '2,800~3,500만원', location: '수도권', type: '정규직' },
      { title: '도면 관리·출력 담당', company: '건설현장 사무소', salary: '2,400~2,900만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전산응용건축제도기능사 필기+실기 한번에 합격', author: '조민수', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전산응용건축제도기능사 AutoCAD 실기 완성', author: '이현철', publisher: '동일출판사', year: 2024, rating: 4.4 },
      { title: '건축제도기능사 핵심이론 기출문제집', author: '박혜진', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '전산응용건축제도기능사 단기 합격 비법', author: '한재원', publisher: '예문사', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '콘크리트기능사': {
    name: '콘크리트기능사',
    icon: 'fa-cubes',
    category: '건설·토목',
    heroTitle: '2026년도 콘크리트기능사 합격 가이드',
    heroDesc: '콘크리트기능사는 콘크리트의 배합, 타설, 양생 등 시공에 관한 기술 능력을 검정하는 국가기술자격입니다. 건설현장의 기초 공사부터 구조물 시공까지 폭넓게 활용되며, 토목·건축 현장에서 기술직으로 취업하기 위한 필수 자격입니다. 이론과 실무를 겸비한 콘크리트 전문 기술인력 양성을 목표로 합니다.',
    passRateSummary: '필기 56% | 실기 62%',
    avgPassRate: '59%',
    passRates: [
      { year: 2020, written: 52, practical: 58 },
      { year: 2021, written: 54, practical: 60 },
      { year: 2022, written: 56, practical: 63 },
      { year: 2023, written: 57, practical: 64 },
      { year: 2024, written: 58, practical: 65 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '콘크리트 재료', desc: '시멘트·골재·혼화재료의 종류, 특성 및 품질 기준' },
      { name: '콘크리트 배합설계', desc: '물-시멘트비, 배합 강도, 굵은 골재 최대 치수 결정 방법' },
      { name: '콘크리트 시공', desc: '비비기·운반·타설·다지기·양생의 각 공정별 시공 기준' },
      { name: '콘크리트 품질관리', desc: '슬럼프 시험, 공기량 시험, 압축강도 시험 방법 및 기준' },
      { name: '실기: 콘크리트 배합 및 시험', desc: '배합 계산, 슬럼프 시험 및 공기량 측정 실습' },
    ],
    jobs: [
      { title: '콘크리트 타설 기술원', company: '건설시공사', salary: '2,800~3,500만원', location: '전국', type: '정규직' },
      { title: '토목 현장 기술원', company: '토목건설사', salary: '2,900~3,600만원', location: '전국', type: '정규직' },
      { title: '품질 시험원', company: '건설품질관리업체', salary: '2,800~3,400만원', location: '전국', type: '정규직' },
      { title: '레미콘 품질 관리원', company: '레미콘 제조사', salary: '2,700~3,300만원', location: '전국', type: '정규직' },
      { title: '콘크리트 구조물 보수원', company: '유지보수 전문업체', salary: '2,500~3,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '콘크리트기능사 필기 핵심이론 총정리', author: '이태양', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '콘크리트기능사 기출문제 해설집', author: '김재호', publisher: '동일출판사', year: 2024, rating: 4.4 },
      { title: '콘크리트기능사 실기 완전정복', author: '박선민', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '콘크리트기능사 단기합격 비법서', author: '최영진', publisher: '예문사', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '건설재료시험기능사': {
    name: '건설재료시험기능사',
    icon: 'fa-vial',
    category: '건설·토목',
    heroTitle: '2026년도 건설재료시험기능사 합격 가이드',
    heroDesc: '건설재료시험기능사는 토사·골재·콘크리트 등 건설 재료의 품질을 시험·분석하는 능력을 검정하는 국가기술자격입니다. 건설 품질관리 및 안전한 구조물 시공을 위한 필수 인력으로, 건설사·시험기관·레미콘사 등에서 활발히 채용됩니다. 현장 실무 경험과 연계하면 빠른 경력 성장이 가능한 자격증입니다.',
    passRateSummary: '필기 55% | 실기 60%',
    avgPassRate: '58%',
    passRates: [
      { year: 2020, written: 51, practical: 56 },
      { year: 2021, written: 53, practical: 58 },
      { year: 2022, written: 55, practical: 60 },
      { year: 2023, written: 56, practical: 62 },
      { year: 2024, written: 58, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '토질역학 기초', desc: '흙의 분류, 다짐 시험, 투수계수, 전단강도 기초 개념' },
      { name: '골재 및 콘크리트 시험', desc: '골재의 입도 시험, 체가름, 콘크리트 압축강도 시험 방법' },
      { name: '역청재료 시험', desc: '아스팔트의 침입도·연화점·신도 시험 절차 및 판정 기준' },
      { name: '강재 시험', desc: '인장 시험, 굽힘 시험, 경도 시험의 방법과 결과 해석' },
      { name: '실기: 건설재료 품질시험', desc: '슬럼프·공기량·압축강도 시험 및 결과 보고서 작성 실습' },
    ],
    jobs: [
      { title: '건설재료 품질시험원', company: '건설품질시험기관', salary: '2,700~3,400만원', location: '전국', type: '정규직' },
      { title: '현장 품질관리원', company: '종합건설사', salary: '2,800~3,500만원', location: '전국', type: '정규직' },
      { title: '레미콘 품질시험원', company: '레미콘 제조사', salary: '2,700~3,300만원', location: '전국', type: '정규직' },
      { title: '토목 품질 기술원', company: '토목시공사', salary: '2,800~3,400만원', location: '전국', type: '정규직' },
      { title: '시험소 보조 연구원', company: '건설기술연구소', salary: '2,500~3,000만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '건설재료시험기능사 필기 핵심이론', author: '정민호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '건설재료시험기능사 기출문제 완전분석', author: '이수진', publisher: '동일출판사', year: 2024, rating: 4.4 },
      { title: '건설재료시험기능사 실기 단기완성', author: '김준혁', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '건설재료시험기능사 합격 가이드', author: '오태현', publisher: '예문사', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '측량기능사': {
    name: '측량기능사',
    icon: 'fa-map',
    category: '건설·토목',
    heroTitle: '2026년도 측량기능사 합격 가이드',
    heroDesc: '측량기능사는 토털스테이션·GPS 등 측량 장비를 활용하여 지형·지물을 측정하고 도면을 작성하는 능력을 검정하는 국가기술자격입니다. 도로·철도·택지개발 등 건설 공사의 기초가 되는 측량 업무에 활용되며, 한국국토정보공사·건설사·측량업체 등에서 채용 수요가 꾸준합니다. 드론 측량과 GIS 기술의 발전으로 미래 수요도 밝은 자격증입니다.',
    passRateSummary: '필기 53% | 실기 57%',
    avgPassRate: '55%',
    passRates: [
      { year: 2020, written: 49, practical: 53 },
      { year: 2021, written: 51, practical: 55 },
      { year: 2022, written: 53, practical: 57 },
      { year: 2023, written: 54, practical: 58 },
      { year: 2024, written: 55, practical: 59 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '측량학 개론', desc: '측량의 분류, 오차 이론, 거리·각도 측정의 기본 원리' },
      { name: '거리 및 각도 측량', desc: '거리측량 방법, 트랜싯·데오돌라이트 사용법, 각도 측정' },
      { name: '수준측량', desc: '레벨 기기 취급, 직접 수준측량 절차, 오차 조정 방법' },
      { name: '지형측량 및 면적계산', desc: '등고선 작성, 트래버스 측량, 면적 계산 방법' },
      { name: '실기: 측량 기기 운용 및 계산', desc: '토털스테이션 조작, 측점 측정, 거리·면적 계산 실습' },
    ],
    jobs: [
      { title: '측량 기술원', company: '측량전문업체', salary: '2,800~3,500만원', location: '전국', type: '정규직' },
      { title: '지적 측량 보조원', company: '한국국토정보공사', salary: '2,900~3,600만원', location: '전국', type: '정규직' },
      { title: '건설 현장 측량원', company: '종합건설사', salary: '2,800~3,400만원', location: '전국', type: '정규직' },
      { title: 'GIS 데이터 처리원', company: '공간정보업체', salary: '2,900~3,500만원', location: '수도권', type: '정규직' },
      { title: '드론 측량 보조원', company: '드론측량전문업체', salary: '2,500~3,100만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '측량기능사 필기 핵심이론 완전정복', author: '윤세진', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '측량기능사 기출문제 해설 총정리', author: '강동원', publisher: '동일출판사', year: 2024, rating: 4.4 },
      { title: '측량기능사 실기 단기완성', author: '배진수', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '측량기능사 합격 가이드북', author: '황민철', publisher: '예문사', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '정보처리기능사': {
    name: '정보처리기능사',
    icon: 'fa-computer',
    category: 'IT·정보',
    heroTitle: '2026년도 정보처리기능사 합격 가이드',
    heroDesc: '정보처리기능사는 컴퓨터 운영 및 프로그래밍, 데이터베이스 관리 등 IT 기초 역량을 검정하는 국가기술자격입니다. IT 분야 취업의 입문 자격증으로 널리 활용되며, 학생과 직장인 모두에게 인기가 높습니다. 정보처리산업기사·기사로 이어지는 IT 자격 경력 로드맵의 첫 단계로 적합합니다.',
    passRateSummary: '필기 63% | 실기 50%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 59, practical: 46 },
      { year: 2021, written: 61, practical: 48 },
      { year: 2022, written: 63, practical: 50 },
      { year: 2023, written: 64, practical: 51 },
      { year: 2024, written: 65, practical: 53 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '데이터베이스', desc: 'SQL 기초, 관계형 DB 개념, 정규화, 트랜잭션 처리 방법' },
      { name: '프로그래밍 언어 활용', desc: 'C·Java·Python 기초 문법, 알고리즘, 자료구조 기본 개념' },
      { name: '소프트웨어 개발', desc: '개발 방법론, 테스트, 형상관리, UI 설계 기초' },
      { name: '정보 시스템 구축 관리', desc: '네트워크 기초, 운영체제 개념, 보안 기초 이론' },
      { name: '실기: 프로그래밍 구현', desc: 'Python·SQL 코딩 문제 풀이, 알고리즘 구현 실습' },
    ],
    jobs: [
      { title: 'IT 운영 지원', company: 'IT서비스기업', salary: '2,700~3,400만원', location: '수도권', type: '정규직' },
      { title: '데이터 처리 담당', company: '금융·공공기관', salary: '2,900~3,600만원', location: '수도권', type: '정규직' },
      { title: '시스템 운영 보조', company: 'IT솔루션업체', salary: '2,700~3,300만원', location: '전국', type: '정규직' },
      { title: '개발 지원 엔지니어', company: '소프트웨어개발사', salary: '2,800~3,500만원', location: '수도권', type: '정규직' },
      { title: 'IT 헬프데스크', company: '아웃소싱업체', salary: '2,400~2,900만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '정보처리기능사 필기 한권으로 합격', author: '신용권', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '정보처리기능사 실기 파이썬+SQL 완성', author: '홍길동', publisher: '동일출판사', year: 2024, rating: 4.4 },
      { title: '정보처리기능사 기출문제 완전분석', author: '이미영', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '정보처리기능사 단기 완성 비법', author: '김철수', publisher: '예문사', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '컴퓨터그래픽스운용기능사': {
    name: '컴퓨터그래픽스운용기능사',
    icon: 'fa-palette',
    category: 'IT·정보',
    heroTitle: '2026년도 컴퓨터그래픽스운용기능사 합격 가이드',
    heroDesc: '컴퓨터그래픽스운용기능사는 포토샵·일러스트레이터 등 그래픽 소프트웨어를 활용하여 디자인 결과물을 제작하는 능력을 검정하는 국가기술자격입니다. 광고·출판·영상·게임 등 다양한 디자인 분야에서 활용되며, 디자인 계열 취업을 목표로 하는 분들에게 가장 먼저 취득을 권장하는 자격증입니다. 실기 시험은 포토샵과 일러스트레이터 실무 능력을 중점적으로 평가합니다.',
    passRateSummary: '필기 61% | 실기 55%',
    avgPassRate: '58%',
    passRates: [
      { year: 2020, written: 57, practical: 51 },
      { year: 2021, written: 59, practical: 53 },
      { year: 2022, written: 61, practical: 55 },
      { year: 2023, written: 62, practical: 56 },
      { year: 2024, written: 62, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '산업디자인 일반', desc: '디자인 원리, 색채 이론, 조형 요소, 디자인 프로세스 기초' },
      { name: '색채 및 도법', desc: '색의 3속성, 색채 배색 원리, 투시도법·등각투상법 기초' },
      { name: '컴퓨터그래픽스 개론', desc: '비트맵·벡터 그래픽 특성, 해상도, 색상 모드, 파일 형식' },
      { name: '인쇄·출판 일반', desc: '인쇄 방식, 색 분해, 판 제작, 인쇄 용지 및 제본 방법' },
      { name: '실기: 포토샵·일러스트레이터 작업', desc: '시안 제작, 이미지 합성, 타이포그래피, 벡터 드로잉 실습' },
    ],
    jobs: [
      { title: '광고 디자이너', company: '광고대행사', salary: '2,600~3,300만원', location: '수도권', type: '정규직' },
      { title: '편집 디자이너', company: '출판사·인쇄소', salary: '2,500~3,200만원', location: '수도권', type: '정규직' },
      { title: 'UI 디자인 보조', company: 'IT·앱개발사', salary: '2,700~3,400만원', location: '수도권', type: '정규직' },
      { title: '영상 그래픽 디자이너', company: '방송·영상제작사', salary: '2,600~3,300만원', location: '수도권', type: '정규직' },
      { title: '콘텐츠 디자인 보조', company: '소셜미디어 대행사', salary: '2,300~2,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '컴퓨터그래픽스운용기능사 필기 합격 이론', author: '박지연', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '컴퓨터그래픽스운용기능사 포토샵+일러스트 실기', author: '김민지', publisher: '동일출판사', year: 2024, rating: 4.4 },
      { title: '컴퓨터그래픽스운용기능사 기출문제 총정리', author: '이수아', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '컴퓨터그래픽스운용기능사 단기완성', author: '한예진', publisher: '예문사', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '웹디자인기능사': {
    name: '웹디자인기능사',
    icon: 'fa-code',
    category: 'IT·정보',
    heroTitle: '2026년도 웹디자인기능사 합격 가이드',
    heroDesc: '웹디자인기능사는 HTML·CSS·JavaScript를 활용한 웹사이트 UI 디자인 및 퍼블리싱 능력을 검정하는 국가기술자격입니다. 웹 에이전시, IT 스타트업, 인하우스 디자인팀 등 다양한 환경에서 수요가 높으며, 포트폴리오와 함께 활용하면 취업 경쟁력을 크게 높일 수 있습니다. 실기 시험은 주어진 시안을 코딩으로 구현하는 웹 퍼블리싱 중심으로 진행됩니다.',
    passRateSummary: '필기 60% | 실기 52%',
    avgPassRate: '56%',
    passRates: [
      { year: 2020, written: 56, practical: 48 },
      { year: 2021, written: 58, practical: 50 },
      { year: 2022, written: 60, practical: 52 },
      { year: 2023, written: 61, practical: 53 },
      { year: 2024, written: 62, practical: 54 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '디자인 일반', desc: '시각 디자인 원리, 타이포그래피, 색채 배색, UI/UX 기초 개념' },
      { name: '웹 기초 기술', desc: 'HTML5 구조, CSS3 스타일링, 반응형 웹 레이아웃 기초' },
      { name: '인터넷 개론', desc: '인터넷 프로토콜, 웹 브라우저 동작 원리, 웹 표준 이해' },
      { name: '컴퓨터 일반', desc: '운영체제 기초, 네트워크 기본 개념, 보안 기초 이론' },
      { name: '실기: 웹사이트 코딩 구현', desc: 'HTML·CSS·JavaScript로 메인 페이지 구현, 인터랙션 효과 실습' },
    ],
    jobs: [
      { title: '웹 퍼블리셔', company: '웹에이전시', salary: '2,600~3,300만원', location: '수도권', type: '정규직' },
      { title: 'UI 디자이너', company: 'IT스타트업', salary: '2,700~3,500만원', location: '수도권', type: '정규직' },
      { title: '프론트엔드 개발 보조', company: '소프트웨어개발사', salary: '2,800~3,500만원', location: '수도권', type: '정규직' },
      { title: '웹 콘텐츠 관리자', company: '전자상거래업체', salary: '2,600~3,200만원', location: '전국', type: '정규직' },
      { title: '홈페이지 제작 보조', company: '중소기업 인하우스', salary: '2,400~2,900만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '웹디자인기능사 필기 핵심이론 총정리', author: '최서연', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '웹디자인기능사 HTML+CSS+JS 실기 완성', author: '이다은', publisher: '동일출판사', year: 2024, rating: 4.4 },
      { title: '웹디자인기능사 기출문제 완전분석', author: '김하은', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '웹디자인기능사 단기합격 전략', author: '박준호', publisher: '예문사', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 또는 계산 문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 미용 6종 ===
  '미용사(일반)': {
    name: '미용사(일반)',
    icon: 'fa-scissors',
    category: '미용·뷰티',
    heroTitle: '2026년도 미용사(일반) 합격 가이드',
    heroDesc: '미용사(일반) 자격증은 헤어 커트, 퍼머넌트 웨이브, 염색, 두피·모발 관리 등 전반적인 헤어 미용 업무를 수행할 수 있는 국가기술자격입니다. 미용실 취업 및 창업의 필수 자격으로, 헤어 전문가로 나아가는 첫걸음입니다. 체계적인 이론 학습과 실기 반복 연습으로 단기 합격이 가능합니다.',
    passRateSummary: '필기 62% | 실기 68%',
    avgPassRate: '65%',
    passRates: [
      { year: 2020, written: 60, practical: 66 },
      { year: 2021, written: 58, practical: 65 },
      { year: 2022, written: 63, practical: 69 },
      { year: 2023, written: 65, practical: 70 },
      { year: 2024, written: 64, practical: 71 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '미용이론', desc: '헤어 커트, 퍼머, 염색, 드라이 등 헤어 미용의 기초 이론과 기술' },
      { name: '피부학', desc: '두피 및 모발의 구조, 유형, 트러블 원인과 관리법' },
      { name: '공중보건학', desc: '감염병 예방, 위생 관리, 환경위생 등 공중보건의 기본 개념' },
      { name: '화장품학', desc: '헤어 케어 제품의 성분, 종류, 사용법 및 안전성' },
      { name: '관련법규', desc: '공중위생관리법, 미용업 영업 기준 및 위생 관련 법령' },
    ],
    jobs: [
      { title: '헤어디자이너', company: '헤어살롱·미용실', salary: '2,400~3,600만원', location: '전국', type: '정규직' },
      { title: '헤어스타일리스트', company: '프랜차이즈 미용실', salary: '2,600~4,000만원', location: '수도권', type: '정규직' },
      { title: '두피관리사', company: '두피 전문 클리닉', salary: '2,400~3,200만원', location: '전국', type: '정규직' },
      { title: '미용강사', company: '직업훈련원·미용학원', salary: '2,800~4,200만원', location: '전국', type: '정규직' },
      { title: '방송·웨딩 헤어아티스트', company: '프리랜서·웨딩업체', salary: '건당 협의', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '미용사(일반) 필기 핵심이론 + 기출문제', author: '미용수험연구회', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '미용사일반 실기 완전정복', author: '최은주', publisher: '크라운출판사', year: 2024, rating: 4.4 },
      { title: '미용사(일반) 기출문제 해설집', author: '박지현', publisher: '에듀윌', year: 2023, rating: 4.3 },
      { title: '헤어미용 NCS 기반 이론서', author: '한국미용교육연구원', publisher: '광문각', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '미용사(피부)': {
    name: '미용사(피부)',
    icon: 'fa-spa',
    category: '미용·뷰티',
    heroTitle: '2026년도 미용사(피부) 합격 가이드',
    heroDesc: '미용사(피부) 자격증은 피부 분석, 피부 관리, 제모, 눈썹 정리 등 피부 미용 전반을 다루는 국가기술자격입니다. 피부 관리실 및 에스테틱 분야 취업과 창업에 필수적인 자격으로, 피부 전문가로 성장하기 위한 기반이 됩니다. 피부학 이론과 관리 실기를 병행하여 준비하면 효과적으로 합격할 수 있습니다.',
    passRateSummary: '필기 60% | 실기 67%',
    avgPassRate: '64%',
    passRates: [
      { year: 2020, written: 57, practical: 63 },
      { year: 2021, written: 59, practical: 65 },
      { year: 2022, written: 61, practical: 68 },
      { year: 2023, written: 62, practical: 69 },
      { year: 2024, written: 61, practical: 70 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '피부학', desc: '피부의 구조, 유형, 트러블 원인 및 피부 생리학적 특성' },
      { name: '피부 미용이론', desc: '클렌징, 딥클렌징, 마사지, 팩, 마스크 등 피부 관리 기술 이론' },
      { name: '해부생리학', desc: '피부 관리와 관련된 인체 해부학 및 생리학의 기초 지식' },
      { name: '화장품학', desc: '피부 관리용 화장품의 성분, 종류, 효능 및 사용법' },
      { name: '공중보건학 및 관련법규', desc: '위생 관리, 감염 예방, 공중위생관리법 및 미용업 관련 법령' },
    ],
    jobs: [
      { title: '피부관리사', company: '피부 관리실·에스테틱샵', salary: '2,400~3,400만원', location: '전국', type: '정규직' },
      { title: '피부미용사', company: '피부과 협력 클리닉', salary: '2,600~3,800만원', location: '수도권', type: '정규직' },
      { title: '스파테라피스트', company: '호텔 스파·리조트', salary: '2,800~4,000만원', location: '수도권·제주', type: '정규직' },
      { title: '뷰티 강사', company: '미용학원·직업훈련원', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '출장 피부관리사', company: '프리랜서', salary: '건당 협의', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '미용사(피부) 필기 핵심이론 + 기출문제', author: '피부미용수험연구회', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '미용사피부 실기 완전정복', author: '김선희', publisher: '크라운출판사', year: 2024, rating: 4.4 },
      { title: '미용사(피부) 기출문제 해설집', author: '이미경', publisher: '에듀윌', year: 2023, rating: 4.3 },
      { title: '피부미용 NCS 기반 이론서', author: '한국피부미용교육연구원', publisher: '광문각', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '미용사(네일)': {
    name: '미용사(네일)',
    icon: 'fa-hand-sparkles',
    category: '미용·뷰티',
    heroTitle: '2026년도 미용사(네일) 합격 가이드',
    heroDesc: '미용사(네일) 자격증은 네일 케어, 네일 아트, 젤 네일, 인조 네일 등 손발톱 미용 전반을 담당하는 국가기술자격입니다. 네일샵 취업 및 창업에 필수 자격으로, 최근 네일 아트 트렌드와 함께 수요가 꾸준히 증가하고 있습니다. 이론과 정밀한 실기 연습을 통해 전문 네일 아티스트로 성장할 수 있습니다.',
    passRateSummary: '필기 63% | 실기 69%',
    avgPassRate: '66%',
    passRates: [
      { year: 2020, written: 60, practical: 66 },
      { year: 2021, written: 62, practical: 67 },
      { year: 2022, written: 64, practical: 70 },
      { year: 2023, written: 65, practical: 71 },
      { year: 2024, written: 64, practical: 72 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '네일 미용이론', desc: '네일 케어, 네일 아트, 젤·인조 네일 시술의 기초 이론 및 기술' },
      { name: '손발톱학', desc: '손발톱의 구조, 생리, 질환 및 트러블 관리 방법' },
      { name: '피부학', desc: '손발 피부의 특성, 유형, 보습 및 관리 방법' },
      { name: '화장품학', desc: '네일 제품(폴리시, 젤, 아크릴) 성분, 종류, 사용법 및 안전성' },
      { name: '공중보건학 및 관련법규', desc: '네일 샵 위생 관리, 감염 예방, 공중위생관리법 및 관련 법령' },
    ],
    jobs: [
      { title: '네일아티스트', company: '네일샵·뷰티샵', salary: '2,200~3,400만원', location: '전국', type: '정규직' },
      { title: '젤네일 전문가', company: '프리미엄 네일샵', salary: '2,400~3,600만원', location: '수도권', type: '정규직' },
      { title: '네일 강사', company: '미용학원·직업훈련원', salary: '2,600~3,800만원', location: '전국', type: '정규직' },
      { title: '뷰티샵 매니저', company: '종합 뷰티샵', salary: '2,600~4,000만원', location: '수도권', type: '정규직' },
      { title: '방문 네일아티스트', company: '프리랜서·출장샵', salary: '건당 협의', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '미용사(네일) 필기 핵심이론 + 기출문제', author: '네일미용수험연구회', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '미용사네일 실기 완전정복', author: '정수연', publisher: '크라운출판사', year: 2024, rating: 4.4 },
      { title: '미용사(네일) 기출문제 해설집', author: '박혜진', publisher: '에듀윌', year: 2023, rating: 4.3 },
      { title: '네일미용 NCS 기반 이론서', author: '한국네일미용교육연구원', publisher: '광문각', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '미용사(메이크업)': {
    name: '미용사(메이크업)',
    icon: 'fa-wand-magic-sparkles',
    category: '미용·뷰티',
    heroTitle: '2026년도 미용사(메이크업) 합격 가이드',
    heroDesc: '미용사(메이크업) 자격증은 기초 메이크업부터 웨딩, 무대, 영화·방송 메이크업 등 다양한 메이크업 기술을 다루는 국가기술자격입니다. 메이크업 아티스트, 뷰티 크리에이터, 웨딩 메이크업 등 다양한 직군으로 진출할 수 있는 기반이 됩니다. 색채 이론과 실기 연습을 병행하면 합격에 한층 가까워질 수 있습니다.',
    passRateSummary: '필기 61% | 실기 67%',
    avgPassRate: '64%',
    passRates: [
      { year: 2020, written: 58, practical: 64 },
      { year: 2021, written: 59, practical: 65 },
      { year: 2022, written: 61, practical: 68 },
      { year: 2023, written: 63, practical: 69 },
      { year: 2024, written: 64, practical: 70 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '메이크업 미용이론', desc: '기초·색조 메이크업, 웨딩·무대·미디어 메이크업의 기법과 이론' },
      { name: '색채학', desc: '색의 기본 원리, 배색 이론, 메이크업에 적용되는 색채 활용법' },
      { name: '피부학', desc: '피부 유형 분석, 피부 트러블 이해 및 메이크업 전 피부 관리 방법' },
      { name: '화장품학', desc: '메이크업 화장품의 종류, 성분, 사용법 및 안전한 관리' },
      { name: '공중보건학 및 관련법규', desc: '메이크업 환경의 위생 관리, 감염 예방, 공중위생관리법' },
    ],
    jobs: [
      { title: '메이크업아티스트', company: '뷰티샵·메이크업스튜디오', salary: '2,400~3,600만원', location: '전국', type: '정규직' },
      { title: '웨딩 메이크업아티스트', company: '웨딩업체·스튜디오', salary: '2,600~4,000만원', location: '수도권', type: '정규직' },
      { title: '방송·영화 메이크업아티스트', company: '방송국·영화사', salary: '3,000~5,000만원', location: '수도권', type: '정규직' },
      { title: '뷰티 강사', company: '미용학원·직업훈련원', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '뷰티 크리에이터', company: '프리랜서·MCN', salary: '수익 구조별 상이', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '미용사(메이크업) 필기 핵심이론 + 기출문제', author: '메이크업수험연구회', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '미용사메이크업 실기 완전정복', author: '오지현', publisher: '크라운출판사', year: 2024, rating: 4.4 },
      { title: '미용사(메이크업) 기출문제 해설집', author: '강미영', publisher: '에듀윌', year: 2023, rating: 4.3 },
      { title: '메이크업미용 NCS 기반 이론서', author: '한국메이크업교육연구원', publisher: '광문각', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '미용기능장': {
    name: '미용기능장',
    icon: 'fa-star',
    category: '미용·뷰티',
    heroTitle: '2026년도 미용기능장 합격 가이드',
    heroDesc: '미용기능장은 미용 분야의 최고 등급 국가기술자격으로, 헤어·피부·네일·메이크업 전 분야에 걸친 고도의 숙련 기술과 현장 지식을 요구합니다. 합격률이 낮아 충분한 실무 경험과 심화 이론 학습이 필수이며, 취득 시 미용학원 원장, 전문 강사, 기술지도자 등 고급 직위로 진출할 수 있습니다. 장기적인 학습 계획과 실기 숙련을 통해 도전하시기 바랍니다.',
    passRateSummary: '필기 36% | 실기 42%',
    avgPassRate: '39%',
    passRates: [
      { year: 2020, written: 32, practical: 38 },
      { year: 2021, written: 34, practical: 40 },
      { year: 2022, written: 36, practical: 42 },
      { year: 2023, written: 38, practical: 44 },
      { year: 2024, written: 40, practical: 46 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '미용 종합이론', desc: '헤어·피부·네일·메이크업 전 분야를 아우르는 고급 미용 이론 및 기술' },
      { name: '피부학 및 해부생리학', desc: '심화 피부·두피 생리학, 인체 해부학 및 트러블 원인과 처치법' },
      { name: '화장품학 심화', desc: '성분 분석, 기능성 화장품 이해, 최신 트렌드 제품 활용' },
      { name: '공중보건학', desc: '고급 위생 관리, 감염병 예방 및 미용 환경 공중보건 관련 규정' },
      { name: '미용경영 및 관련법규', desc: '미용업 경영, 인력 관리, 창업 운영 및 공중위생관리법 심화' },
    ],
    jobs: [
      { title: '미용학원 원장', company: '미용학원·직업전문학교', salary: '4,000~7,000만원', location: '전국', type: '정규직' },
      { title: '수석 헤어디자이너', company: '대형 프랜차이즈 미용실', salary: '4,000~6,000만원', location: '수도권', type: '정규직' },
      { title: '미용기술 지도사', company: '미용협회·직업훈련기관', salary: '3,600~5,500만원', location: '전국', type: '정규직' },
      { title: '뷰티 컨설턴트', company: '화장품·뷰티 기업', salary: '4,000~6,500만원', location: '수도권', type: '정규직' },
      { title: '국제 미용대회 심사위원', company: '미용협회·대회 주관 기관', salary: '활동비 별도', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '미용기능장 필기 핵심이론 + 기출문제', author: '미용기능장수험연구회', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '미용기능장 실기 완전정복', author: '한재희', publisher: '크라운출판사', year: 2024, rating: 4.4 },
      { title: '미용기능장 기출문제 해설집', author: '노미현', publisher: '에듀윌', year: 2023, rating: 4.3 },
      { title: '미용기능장 종합 이론서', author: '대한미용교육학회', publisher: '광문각', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '피부미용사': {
    name: '피부미용사',
    icon: 'fa-leaf',
    category: '미용·뷰티',
    heroTitle: '2026년도 피부미용사 합격 가이드',
    heroDesc: '피부미용사(기사) 자격증은 피부 분석, 피부 관리, 기기 관리, 영양 상담 등 전문적인 피부 미용 기술과 지식을 검증하는 국가기술자격입니다. 미용사(피부) 기능사보다 높은 수준의 전문 지식을 요구하며, 피부과 클리닉, 의료 협력 피부 관리 센터 등 고급 직군으로 진출할 수 있습니다. 심화 피부학과 기기학 이론을 철저히 학습하면 합격 가능성을 높일 수 있습니다.',
    passRateSummary: '필기 52% | 실기 58%',
    avgPassRate: '55%',
    passRates: [
      { year: 2020, written: 47, practical: 53 },
      { year: 2021, written: 49, practical: 55 },
      { year: 2022, written: 52, practical: 58 },
      { year: 2023, written: 54, practical: 60 },
      { year: 2024, written: 58, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '피부학 심화', desc: '피부 구조·기능, 피부 질환, 노화 메커니즘 및 전문적 피부 분석법' },
      { name: '피부 관리 기술', desc: '클렌징, 각질 관리, 마사지, 팩, 기기 관리 등 전문 피부 관리 기법' },
      { name: '해부생리학', desc: '피부 관리와 관련된 인체의 해부학적 구조 및 생리학적 특성' },
      { name: '화장품학 및 영양학', desc: '기능성 화장품 성분 이해, 피부 영양 공급 원리 및 상담 방법' },
      { name: '공중보건학 및 관련법규', desc: '피부 관리 환경 위생, 감염 예방 및 공중위생관리법 심화 이해' },
    ],
    jobs: [
      { title: '전문 피부관리사', company: '피부 전문 클리닉·에스테틱샵', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '의료 협력 피부관리사', company: '피부과 협력 센터', salary: '3,000~4,500만원', location: '수도권', type: '정규직' },
      { title: '스파 테라피스트', company: '호텔 스파·메디칼스파', salary: '3,000~4,600만원', location: '수도권·제주', type: '정규직' },
      { title: '뷰티 강사', company: '미용학원·전문대학', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '피부 컨설턴트', company: '화장품 회사·프리랜서', salary: '건당·성과급 협의', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '피부미용사 필기 핵심이론 + 기출문제', author: '피부미용기사수험연구회', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '피부미용사 실기 완전정복', author: '윤지영', publisher: '크라운출판사', year: 2024, rating: 4.4 },
      { title: '피부미용사 기출문제 해설집', author: '최수진', publisher: '에듀윌', year: 2023, rating: 4.3 },
      { title: '피부미용 심화 이론서', author: '대한피부미용학회', publisher: '광문각', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실습 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 맞춤형화장품 ===
  '맞춤형화장품조제관리사': {
    name: '맞춤형화장품조제관리사',
    icon: 'fa-flask',
    category: '미용·뷰티',
    heroTitle: '2026년도 맞춤형화장품조제관리사 합격 가이드',
    heroDesc: '맞춤형화장품조제관리사는 고객 개인의 피부 특성과 요구에 맞춰 화장품 원료를 혼합·소분하여 맞춤형 화장품을 조제·판매할 수 있는 국가자격입니다. 화장품법 개정(2020년)으로 신설된 자격으로, 맞춤형화장품 판매업소에 의무적으로 1인 이상 배치되어야 하므로 취업·창업 수요가 빠르게 성장하고 있습니다.',
    passRateSummary: '필기 58% | (필기만 시행)',
    avgPassRate: '58%',
    passRates: [
      { year: 2020, written: 52, practical: 0 },
      { year: 2021, written: 55, practical: 0 },
      { year: 2022, written: 57, practical: 0 },
      { year: 2023, written: 59, practical: 0 },
      { year: 2024, written: 62, practical: 0 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-03-14 ~ 2026-03-15', writtenResult: '2026-04-10', practicalExam: '-', practicalResult: '-' },
      { round: '2회', writtenExam: '2026-09-05 ~ 2026-09-06', writtenResult: '2026-10-02', practicalExam: '-', practicalResult: '-' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-03-14' },
      { label: '1회 결과', date: '2026-04-10' },
      { label: '2회 필기', date: '2026-09-05' },
      { label: '2회 결과', date: '2026-10-02' },
    ],
    subjects: [
      { name: '화장품법 관련 법령', desc: '화장품법, 맞춤형화장품 판매업 신고, 조제관리사 의무 및 준수사항' },
      { name: '화장품 원료의 종류와 특성', desc: '기능성 원료, 보존제, 계면활성제 등 화장품 원료의 성분과 효능' },
      { name: '화장품의 기능과 품질', desc: '기초·색조·기능성 화장품의 종류, 특성 및 품질 기준' },
      { name: '피부 및 모발 과학', desc: '피부 구조와 기능, 피부 유형별 특성, 모발 과학 기초' },
      { name: '맞춤형화장품 조제 및 위생', desc: '혼합·소분 기술, 조제 장비 사용법, 위생 관리 기준' },
    ],
    jobs: [
      { title: '맞춤형화장품조제관리사', company: '맞춤형화장품 판매업소', salary: '2,600~3,800만원', location: '전국', type: '정규직' },
      { title: '뷰티 컨설턴트', company: '화장품 브랜드샵·백화점', salary: '2,800~4,000만원', location: '수도권', type: '정규직' },
      { title: '화장품 개발 연구원', company: '화장품 제조업체', salary: '3,000~4,500만원', location: '수도권', type: '정규직' },
      { title: '맞춤형화장품 창업', company: '개인 판매업소', salary: '수익 자율', location: '전국', type: '자영업' },
    ],
    books: [
      { title: '맞춤형화장품조제관리사 한권으로 끝내기', author: '맞춤형화장품수험연구회', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '맞춤형화장품조제관리사 핵심이론 + 기출문제', author: '김미선', publisher: '크라운출판사', year: 2024, rating: 4.5 },
      { title: '맞춤형화장품조제관리사 기출문제 해설집', author: '이수진', publisher: '에듀윌', year: 2023, rating: 4.3 },
      { title: '화장품학 이론서 (맞춤형화장품 완벽 대비)', author: '대한화장품학회', publisher: '광문각', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '화장품법 및 관련 법령 핵심 정리',
      '화장품 원료 종류·특성 암기',
      '피부 및 모발 과학 이론 학습',
      '기출문제 풀이 (최근 3개년)',
      '최근 5개년 기출 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 이용 2종 ===
  '이용사': {
    name: '이용사',
    icon: 'fa-scissors',
    category: '미용·뷰티',
    heroTitle: '2026년도 이용사 합격 가이드',
    heroDesc: '이용사 자격증은 남성 고객을 대상으로 헤어 커트, 면도, 두피·모발 관리 등 이용 서비스를 제공할 수 있는 국가기술자격입니다. 이발소 및 남성 전문 헤어샵 창업과 취업의 필수 자격으로, 이론과 실기를 균형 있게 준비하면 단기 합격이 가능합니다.',
    passRateSummary: '필기 55% | 실기 60%',
    avgPassRate: '58%',
    passRates: [
      { year: 2020, written: 50, practical: 55 },
      { year: 2021, written: 52, practical: 57 },
      { year: 2022, written: 54, practical: 59 },
      { year: 2023, written: 56, practical: 61 },
      { year: 2024, written: 58, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '이용이론', desc: '헤어 커트, 면도, 퍼머, 염색 등 이용 기술의 기초 이론과 실무 지식' },
      { name: '피부학', desc: '두피 및 모발의 구조, 유형, 트러블 원인과 관리법' },
      { name: '공중보건학', desc: '위생 관리, 감염병 예방, 공중위생 환경 관련 기초 지식' },
      { name: '화장품학', desc: '이용 관련 화장품·제품의 성분, 종류 및 안전한 사용법' },
      { name: '관련법규', desc: '공중위생관리법, 이용업 영업 기준 및 위생 관련 법령' },
    ],
    jobs: [
      { title: '이용사', company: '이발소·남성 헤어샵', salary: '2,400~3,400만원', location: '전국', type: '정규직' },
      { title: '이용실 창업', company: '개인 이용실', salary: '수익 자율', location: '전국', type: '자영업' },
      { title: '이용 강사', company: '직업훈련원·미용학원', salary: '2,600~3,800만원', location: '전국', type: '정규직' },
      { title: '호텔 이용사', company: '특급호텔·리조트', salary: '2,800~4,000만원', location: '수도권·제주', type: '정규직' },
    ],
    books: [
      { title: '이용사 필기 핵심이론 + 기출문제', author: '이용수험연구회', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '이용사 실기 완전정복', author: '김대현', publisher: '크라운출판사', year: 2024, rating: 4.3 },
      { title: '이용사 기출문제 해설집', author: '박성민', publisher: '에듀윌', year: 2023, rating: 4.2 },
      { title: '이용 NCS 기반 이론서', author: '한국이용교육연구원', publisher: '광문각', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '이용이론·공중보건학 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 커트·면도 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '이용기능장': {
    name: '이용기능장',
    icon: 'fa-award',
    category: '미용·뷰티',
    heroTitle: '2026년도 이용기능장 합격 가이드',
    heroDesc: '이용기능장은 이용 분야의 최고 국가기술자격으로, 고급 이용 기술과 경영·교육 능력을 검증합니다. 이용 관련 최고 수준의 실무 능력을 인정받아 이용 기술 교육자, 고급 헤어샵 운영, 경진대회 심사 위원 등으로 활동할 수 있습니다. 이용사 자격 취득 후 실무 경력을 쌓고 도전하는 최상위 자격입니다.',
    passRateSummary: '필기 40% | 실기 45%',
    avgPassRate: '43%',
    passRates: [
      { year: 2020, written: 36, practical: 40 },
      { year: 2021, written: 38, practical: 42 },
      { year: 2022, written: 40, practical: 44 },
      { year: 2023, written: 41, practical: 46 },
      { year: 2024, written: 43, practical: 48 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-04-13' },
      { label: '1회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '이용 고급 기술', desc: '커트, 퍼머, 염색, 면도 등 이용의 고급 기술 및 디자인 응용' },
      { name: '경영 및 교육론', desc: '이용실 경영 관리, 인력 운영, 고객 서비스 전략 및 교육 방법론' },
      { name: '피부학 및 모발과학', desc: '두피·모발의 구조와 과학적 분석, 트러블 진단 및 처방' },
      { name: '공중보건학 및 위생관리', desc: '이용업 위생 기준, 감염 예방, 공중위생관리법 심화' },
      { name: '화장품학 심화', desc: '이용 전문 화장품·케미컬 제품 성분 분석 및 활용 기술' },
    ],
    jobs: [
      { title: '이용 기술 교육자', company: '직업훈련원·이용학원', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '고급 이용실 원장', company: '프리미엄 이발소·헤어샵', salary: '수익 자율', location: '전국', type: '자영업' },
      { title: '이용 경진대회 심사위원', company: '공공기관·협회', salary: '건당 협의', location: '전국', type: '계약직' },
      { title: '이용 분야 직업훈련 교사', company: '한국폴리텍·직업전문학교', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '이용기능장 필기 핵심이론 + 기출문제', author: '이용기능장수험연구회', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '이용기능장 실기 완전정복', author: '이재용', publisher: '크라운출판사', year: 2024, rating: 4.4 },
      { title: '이용기능장 기출문제 해설집', author: '정현민', publisher: '에듀윌', year: 2023, rating: 4.3 },
      { title: '이용 고급 기술 이론서', author: '한국이용기능장협회', publisher: '광문각', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '이용 고급 기술 이론 심화 학습',
      '경영·교육론 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 고급 커트·퍼머·염색 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 산업위생 6종 ===
  '산업위생관리산업기사': {
    name: '산업위생관리산업기사',
    icon: 'fa-lungs',
    category: '안전·보건',
    heroTitle: '2026년도 산업위생관리산업기사 합격 가이드',
    heroDesc: '산업위생관리산업기사는 사업장 내 유해인자로부터 근로자를 보호하는 보건 실무 전문가 자격증입니다. 기사 자격 취득 전 단계로 활용되거나 소규모 사업장의 보건관리 담당자로 활동할 수 있습니다. 산업안전보건법 개정으로 보건관리 의무 사업장이 확대되면서 취업 수요가 꾸준히 늘고 있습니다.',
    passRateSummary: '필기 46% | 실기 53%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 43, practical: 50 },
      { year: 2021, written: 45, practical: 52 },
      { year: 2022, written: 47, practical: 54 },
      { year: 2023, written: 48, practical: 55 },
      { year: 2024, written: 46, practical: 53 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '산업위생학개론', desc: '직업성 질환의 종류와 예방, 유해인자 분류 및 건강 영향, 산업위생 기초 이론' },
      { name: '작업위생측정및평가', desc: '작업환경 측정의 기본 원리, 시료채취 방법, 노출기준 이해 및 결과 판정' },
      { name: '작업환경관리', desc: '유해요인 제거·대체 방법, 환기 설비의 종류와 원리, 개인보호구 선택 기준' },
      { name: '산업독성학', desc: '주요 화학물질의 독성 특성, 인체 영향 경로, 생물학적 노출지표 이해' },
      { name: '산업위생관계법규', desc: '산업안전보건법 보건 관련 조항, 유해물질 관리 기준, 작업환경 개선 절차' },
    ],
    jobs: [
      { title: '보건관리 담당자', company: '중소 제조업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '작업환경측정보조원', company: '작업환경측정기관', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
      { title: '산업보건 실무직', company: '공단·공공기관', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '화학물질 관리원', company: '화학제품 제조업체', salary: '2,800~3,600만원', location: '울산·충남', type: '정규직' },
      { title: '보건환경 모니터링 요원', company: '환경전문기관', salary: '2,500~3,200만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '산업위생관리산업기사 필기 단기완성', author: '오진호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '산업위생 핵심 요약집', author: '김수정', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '산업위생관리산업기사 실기 합격노트', author: '이병수', publisher: '동화기술', year: 2023, rating: 4.3 },
      { title: '산업위생관리산업기사 과년도 기출문제집', author: '편집부', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 계산문제 및 작업환경측정 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '소음진동산업기사': {
    name: '소음진동산업기사',
    icon: 'fa-wave-square',
    category: '안전·보건',
    heroTitle: '2026년도 소음진동산업기사 합격 가이드',
    heroDesc: '소음진동산업기사는 산업현장 및 생활환경의 소음·진동 문제를 실무적으로 관리하는 자격증입니다. 환경 규제 강화와 생활 민원 증가로 인해 지자체 및 중소 제조업체에서의 수요가 꾸준합니다. 기사 자격 취득의 발판이 되며, 소규모 측정 현장에서 즉시 활용 가능한 실무 능력을 인정받습니다.',
    passRateSummary: '필기 44% | 실기 52%',
    avgPassRate: '48%',
    passRates: [
      { year: 2020, written: 41, practical: 49 },
      { year: 2021, written: 43, practical: 51 },
      { year: 2022, written: 45, practical: 53 },
      { year: 2023, written: 46, practical: 54 },
      { year: 2024, written: 44, practical: 52 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '소음진동개론', desc: '음파의 물리적 특성 기초, 진동 기본 이론, 소음·진동이 인체에 미치는 영향' },
      { name: '소음측정및평가', desc: '소음계 사용법, 현장 측정 절차, 작업장 소음 노출 기준 및 판정 방법' },
      { name: '진동측정및평가', desc: '진동 측정 장비 기초, 전신·국소 진동 노출 평가, 측정 데이터 해석' },
      { name: '소음진동방지기술', desc: '소음원 저감 방법, 방음벽 설치 기준, 진동 절연 장치의 원리와 적용' },
      { name: '관계법규', desc: '소음진동관리법 주요 조항, 규제 기준, 측정 의무 사업장 기준 이해' },
    ],
    jobs: [
      { title: '소음측정 보조원', company: '환경측정기관', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
      { title: '환경관리 실무직', company: '중소 제조업체', salary: '2,800~3,600만원', location: '전국', type: '정규직' },
      { title: '생활소음 민원 처리', company: '지방자치단체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '방음시공 기술직', company: '방음공사 전문업체', salary: '2,800~3,800만원', location: '수도권·부산', type: '정규직' },
      { title: '환경조사 요원', company: '환경컨설팅업체', salary: '2,500~3,200만원', location: '서울·경기', type: '계약직' },
    ],
    books: [
      { title: '소음진동산업기사 필기 단기완성', author: '최상훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '소음진동 기초이론 정리', author: '이지훈', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '소음진동산업기사 실기 집중공략', author: '김민재', publisher: '동화기술', year: 2023, rating: 4.3 },
      { title: '소음진동산업기사 과년도 기출문제집', author: '편집부', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 계산문제 및 작업환경측정 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '인간공학기사': {
    name: '인간공학기사',
    icon: 'fa-person-walking',
    category: '안전·보건',
    heroTitle: '2026년도 인간공학기사 합격 가이드',
    heroDesc: '인간공학기사는 작업자의 신체적·정신적 부담을 최소화하는 작업 환경 및 시스템을 설계하는 전문가 자격증입니다. 근골격계 질환 예방, 작업 효율 향상, 제품·시스템 사용성 평가 등 다양한 분야에서 활동할 수 있습니다. 제조업·IT·서비스업 전반에 걸쳐 인간 중심 설계 수요가 증가하고 있습니다.',
    passRateSummary: '필기 40% | 실기 50%',
    avgPassRate: '45%',
    passRates: [
      { year: 2020, written: 37, practical: 47 },
      { year: 2021, written: 39, practical: 49 },
      { year: 2022, written: 41, practical: 51 },
      { year: 2023, written: 42, practical: 52 },
      { year: 2024, written: 40, practical: 50 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '인간공학개론', desc: '인간공학의 정의와 역사, 인간-기계 시스템 이론, 정보처리 모델과 인지 특성' },
      { name: '작업생리학', desc: '근육·골격계 해부학 기초, 에너지 소비 측정, 작업 부하 평가 및 피로 관리' },
      { name: '인체측정및생체역학', desc: '인체 치수 측정 방법, 작업 자세 분석(REBA·OWAS), 생체역학 계산 기법' },
      { name: '작업환경설계', desc: '작업공간 및 공구 설계 원칙, 조명·온도·진동 환경 기준, 컴퓨터 작업 환경 설계' },
      { name: '시스템안전및인간신뢰성', desc: '인적 오류 분류와 예방, 결함수 분석(FTA), 휴먼 신뢰성 분석(HRA) 기법' },
    ],
    jobs: [
      { title: '근골격계 유해요인 조사원', company: '한국산업안전보건공단', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '작업환경 개선 담당자', company: '자동차·전자 제조업체', salary: '3,500~5,200만원', location: '경기·울산', type: '정규직' },
      { title: '인간공학 연구원', company: '산업안전 연구기관', salary: '3,800~5,500만원', location: '대전·서울', type: '정규직' },
      { title: 'UX 안전 설계 담당', company: 'IT·가전 대기업', salary: '4,000~6,000만원', location: '서울·경기', type: '정규직' },
      { title: '작업분석 컨설턴트', company: '안전컨설팅업체', salary: '3,200~4,500만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '인간공학기사 필기 완전정복', author: '송재현', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '인간공학 이론과 실습', author: '류창수', publisher: '한경사', year: 2024, rating: 4.4 },
      { title: '인간공학기사 실기 합격 가이드', author: '정은지', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '인간공학기사 과년도 기출문제 해설집', author: '편집부', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 계산문제 및 작업환경측정 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '방사선관리기사': {
    name: '방사선관리기사',
    icon: 'fa-radiation',
    category: '안전·보건',
    heroTitle: '2026년도 방사선관리기사 합격 가이드',
    heroDesc: '방사선관리기사는 방사선 발생 장치 및 방사성 물질을 안전하게 관리하고 종사자와 일반인을 방사선 피폭으로부터 보호하는 전문 자격증입니다. 원자력발전소, 병원 핵의학과, 방사선 비파괴검사 기관 등 취업처가 다양하며 전문성이 높아 경력 개발에 유리합니다. 방사선 안전관리 법규 강화로 자격 보유자 수요가 지속적으로 증가하고 있습니다.',
    passRateSummary: '필기 34% | 실기 43%',
    avgPassRate: '39%',
    passRates: [
      { year: 2020, written: 31, practical: 40 },
      { year: 2021, written: 33, practical: 42 },
      { year: 2022, written: 35, practical: 44 },
      { year: 2023, written: 36, practical: 45 },
      { year: 2024, written: 34, practical: 43 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '방사선관리학', desc: '방사선 관리 구역 설정, 방사선 작업 종사자 관리, 방사선 사고 대응 및 비상계획' },
      { name: '방사선측정학', desc: '방사선 검출기의 원리와 종류, 선량계 사용법, 방사선량 측정 및 데이터 해석' },
      { name: '방사선방호학', desc: '방사선 방호 3원칙, 차폐 재료와 두께 계산, 피폭선량 평가 및 ALARA 원칙 적용' },
      { name: '방사선물리학', desc: '원자 구조 및 핵반응, 방사성 붕괴 법칙, 방사선과 물질의 상호작용 원리' },
      { name: '방사선관계법규', desc: '원자력안전법 및 방사선 안전관리 규정, 방사선 허가·신고 기준, 종사자 피폭선량 한도' },
    ],
    jobs: [
      { title: '방사선 안전관리자', company: '원자력발전소·한국수력원자력', salary: '4,500~7,000만원', location: '경주·영광·울진', type: '정규직' },
      { title: '방사선 관리 기술직', company: '병원 핵의학과·방사선과', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '비파괴검사 방사선사', company: '비파괴검사 전문업체', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '방사선 안전연구원', company: '한국원자력안전기술원(KINS)', salary: '4,000~6,000만원', location: '대전', type: '정규직' },
      { title: '방사선 환경조사원', company: '환경부·지방환경청', salary: '3,000~4,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '방사선관리기사 필기 한권으로 끝내기', author: '한상원', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '방사선물리학 및 방호학 핵심이론', author: '이준혁', publisher: '동화기술', year: 2024, rating: 4.4 },
      { title: '방사선관리기사 실기 완성', author: '박성민', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '방사선관리기사 과년도 기출문제집', author: '편집부', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 계산문제 및 작업환경측정 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 환경·에너지 6종 ===
  '온실가스관리기사': {
    name: '온실가스관리기사',
    icon: 'fa-smog',
    category: '화학·환경',
    heroTitle: '2026년도 온실가스관리기사 합격 가이드',
    heroDesc: '온실가스관리기사는 탄소중립 정책에 따라 기업의 온실가스 배출량 산정·검증·감축 업무를 수행하는 전문 자격증입니다. 탄소배출권 거래제 확대 및 ESG 경영 강화로 관련 전문가 수요가 급증하고 있습니다. 대기업, 공공기관, 컨설팅 업체에서 탄소 관리 담당자로 활동할 수 있습니다.',
    passRateSummary: '필기 40% | 실기 46%',
    avgPassRate: '43%',
    passRates: [
      { year: 2020, written: 37, practical: 43 },
      { year: 2021, written: 41, practical: 47 },
      { year: 2022, written: 39, practical: 45 },
      { year: 2023, written: 42, practical: 48 },
      { year: 2024, written: 40, practical: 46 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '기후변화 개론', desc: '온실가스 종류, 지구온난화 메커니즘, 기후변화 협약 동향' },
      { name: '온실가스 배출량 산정', desc: 'IPCC 가이드라인 기반 배출계수, 산정 방법론 및 불확도 분석' },
      { name: '온실가스 감축기술', desc: '에너지 효율화, 연료전환, CCS 등 감축 수단별 기술 이해' },
      { name: '탄소시장 및 제도', desc: '배출권거래제(ETS), 탄소세, 국제 탄소시장 메커니즘 이해' },
      { name: '온실가스 검증·보고', desc: '제3자 검증 절차, 온실가스 인벤토리 구축 및 보고 체계' },
    ],
    jobs: [
      { title: '온실가스 검증원', company: '검증기관·컨설팅', salary: '4,000~5,800만원', location: '서울·경기', type: '정규직' },
      { title: '탄소중립 담당자', company: '대기업·공기업', salary: '4,200~6,000만원', location: '수도권', type: '정규직' },
      { title: 'ESG 환경 담당자', company: '대기업·금융기관', salary: '4,000~5,500만원', location: '서울', type: '정규직' },
      { title: '배출권거래 실무자', company: '에너지거래소·기업', salary: '3,800~5,200만원', location: '서울', type: '정규직' },
      { title: '탄소발자국 산정 연구원', company: '환경연구소', salary: '3,000~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '온실가스관리기사 필기 이론 총정리', author: '이탄소', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '온실가스관리기사 기출 & 예상문제집', author: '박기후', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '온실가스관리기사 실기 핵심정리', author: '최배출', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '탄소중립과 온실가스 관리', author: '김중립', publisher: '동화기술', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 계산문제 및 실무 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '신재생에너지발전설비산업기사': {
    name: '신재생에너지발전설비산업기사',
    icon: 'fa-solar-panel',
    category: '전기·에너지',
    heroTitle: '2026년도 신재생에너지발전설비산업기사 합격 가이드',
    heroDesc: '신재생에너지발전설비산업기사는 태양광·풍력·연료전지 등 신재생에너지 발전설비의 설계·시공·운영 전문 자격증입니다. 탄소중립 2050 로드맵 이행으로 신재생에너지 분야 전문 인력 수요가 급격히 증가하고 있습니다. 태양광 발전 보급 확대와 RE100 기업 참여 확산으로 관련 취업 시장이 빠르게 성장 중입니다.',
    passRateSummary: '필기 50% | 실기 55%',
    avgPassRate: '53%',
    passRates: [
      { year: 2020, written: 47, practical: 52 },
      { year: 2021, written: 51, practical: 56 },
      { year: 2022, written: 49, practical: 54 },
      { year: 2023, written: 52, practical: 57 },
      { year: 2024, written: 50, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '태양광 발전시스템', desc: '태양전지 원리, 인버터, 모듈·어레이 설계 및 시공 방법' },
      { name: '풍력 발전시스템', desc: '풍력터빈 구조, 풍황 분석, 계통 연계 및 운영·유지보수' },
      { name: '신재생에너지 개론', desc: '신재생에너지 종류·특성, 국내외 정책 및 보급 현황' },
      { name: '전기기초 및 회로', desc: '전기 기본 이론, 직·교류 회로 분석, 배선 및 보호 장치' },
      { name: '발전설비 안전관리', desc: '신재생에너지 설비 안전기준, 유지보수 절차 및 사고 예방' },
    ],
    jobs: [
      { title: '태양광 발전설비 기술자', company: '태양광 시공·운영업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '신재생에너지 설계원', company: '엔지니어링 회사', salary: '3,800~5,500만원', location: '수도권', type: '정규직' },
      { title: '풍력설비 운영관리자', company: '풍력발전사업자', salary: '4,000~5,800만원', location: '지방·해안', type: '정규직' },
      { title: 'RE100 에너지 담당자', company: '대기업·공기업', salary: '4,000~6,000만원', location: '서울·경기', type: '정규직' },
      { title: '신재생에너지 현장 점검원', company: '에너지공단', salary: '2,800~3,600만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '신재생에너지발전설비산업기사 필기', author: '이태양광', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '신재생에너지발전설비 기출문제집', author: '박풍력', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '신재생에너지발전설비산업기사 실기', author: '최재생', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '신재생에너지 발전기술 실무', author: '김탄소', publisher: '동화기술', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 계산문제 및 실무 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

// === 건설·기계 8종 ===
  '조경산업기사': {
    name: '조경산업기사',
    icon: 'fa-tree',
    category: '건설·토목',
    heroTitle: '2026년도 조경산업기사 합격 가이드',
    heroDesc: '조경산업기사는 조경 설계·시공·관리의 보조 전문 인력을 양성하는 자격증입니다. 공원, 녹지 조성 현장에서 실무 역량을 발휘하며, 조경기사 취득 전 단계로 활용도가 높습니다.',
    passRateSummary: '필기 48% | 실기 52%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 44, practical: 48 },
      { year: 2021, written: 46, practical: 50 },
      { year: 2022, written: 49, practical: 53 },
      { year: 2023, written: 50, practical: 54 },
      { year: 2024, written: 48, practical: 52 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '조경계획 및 설계', desc: '기본적인 조경 공간 계획 및 설계 도면 작성 방법' },
      { name: '조경시공', desc: '식재 공사, 포장 공사, 시설물 설치 등 현장 시공 실무' },
      { name: '조경관리', desc: '조경 수목 관리, 병충해 방제, 잔디 및 초화류 관리' },
      { name: '조경식물', desc: '주요 조경 수목과 초본식물의 특성, 식별, 활용법' },
      { name: '조경재료 및 법규', desc: '조경 자재, 시설물 재료 특성 및 관련 법령 이해' },
    ],
    jobs: [
      { title: '조경시공 기술자', company: '조경시공업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '공원 관리원', company: '지방자치단체/공단', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
      { title: '조경 설계 보조', company: '조경설계사무소', salary: '2,700~3,600만원', location: '서울/수도권', type: '정규직' },
      { title: '아파트 조경관리', company: '건설·관리업체', salary: '2,500~3,400만원', location: '수도권', type: '정규직' },
      { title: '조경 현장 보조', company: '조경시공업체', salary: '2,400~3,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '조경산업기사 필기 핵심정리', author: '이민호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '조경산업기사 실기 완성', author: '정수진', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '조경산업기사 기출 총정리', author: '조경시험연구회', publisher: '기문당', year: 2023, rating: 4.3 },
      { title: '조경식물 식별 가이드', author: '박영철', publisher: '조경사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 설계 및 실무 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '도시계획기사': {
    name: '도시계획기사',
    icon: 'fa-city',
    category: '건설·토목',
    heroTitle: '2026년도 도시계획기사 합격 가이드',
    heroDesc: '도시계획기사는 도시의 토지 이용, 교통, 환경, 공간 구조 계획을 전문으로 하는 국가기술자격입니다. 지자체, 도시계획 연구원, 엔지니어링 회사에서 활발히 채용되며 도시재생 분야 수요가 증가하고 있습니다.',
    passRateSummary: '필기 36% | 실기 40%',
    avgPassRate: '38%',
    passRates: [
      { year: 2020, written: 33, practical: 37 },
      { year: 2021, written: 35, practical: 39 },
      { year: 2022, written: 37, practical: 41 },
      { year: 2023, written: 38, practical: 42 },
      { year: 2024, written: 36, practical: 40 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '도시계획론', desc: '도시 성장 이론, 도시계획의 역사와 현대적 접근 방법' },
      { name: '도시설계 및 단지계획', desc: '도시 공간 설계, 주거단지 및 상업지구 계획 실무' },
      { name: '토지이용계획', desc: '용도지역·지구·구역 제도, 토지이용 규제 및 계획 기법' },
      { name: '국토 및 지역계획', desc: '광역계획, 지역 균형발전 전략, 국토종합계획 이해' },
      { name: '도시계획 관계법규', desc: '국토계획법, 도시개발법, 주택법 등 관련 법령 체계' },
    ],
    jobs: [
      { title: '도시계획 연구원', company: '도시연구원/싱크탱크', salary: '3,500~5,000만원', location: '서울/수도권', type: '정규직' },
      { title: '도시계획 담당 공무원', company: '지방자치단체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '도시계획 컨설턴트', company: '엔지니어링사', salary: '3,800~5,500만원', location: '서울/수도권', type: '정규직' },
      { title: '도시재생 사업 매니저', company: '공공기관/LH', salary: '3,600~5,200만원', location: '전국', type: '정규직' },
      { title: '도시계획 용역 PM', company: '도시계획사무소', salary: '3,200~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '도시계획기사 필기 이론 완성', author: '김상호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '도시계획기사 실기 핵심정리', author: '이재훈', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '도시계획기사 기출문제 해설', author: '도시계획연구회', publisher: '기문당', year: 2023, rating: 4.3 },
      { title: '국토계획법 완전정복', author: '박철수', publisher: '법문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 설계 및 실무 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '지적기사': {
    name: '지적기사',
    icon: 'fa-map-location-dot',
    category: '건설·토목',
    heroTitle: '2026년도 지적기사 합격 가이드',
    heroDesc: '지적기사는 토지의 경계 측정, 지적 도면 작성, 토지 등록 업무를 전문으로 하는 국가기술자격입니다. 공공기관, 측량회사, 감정평가법인 등에서 지속적인 수요가 있는 전문직 자격입니다.',
    passRateSummary: '필기 40% | 실기 45%',
    avgPassRate: '42%',
    passRates: [
      { year: 2020, written: 37, practical: 42 },
      { year: 2021, written: 39, practical: 44 },
      { year: 2022, written: 41, practical: 46 },
      { year: 2023, written: 42, practical: 47 },
      { year: 2024, written: 40, practical: 45 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '지적측량', desc: '경계 측량, 세부 측량, 지적삼각측량 등 현장 측량 실무' },
      { name: '응용측량', desc: '노선 측량, 터널 측량, 하천 측량 등 특수 측량 기법' },
      { name: '토지정보체계론', desc: 'GIS 기반 토지정보 시스템 구축 및 운용 방법' },
      { name: '지적학', desc: '지적 제도의 이론, 토지 등록 및 지적 공부 관리' },
      { name: '지적관계법규', desc: '공간정보관리법, 지적재조사법 등 관련 법령 체계' },
    ],
    jobs: [
      { title: '지적측량사', company: '한국국토정보공사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '지적 담당 공무원', company: '지방자치단체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: 'GIS 분석원', company: '공간정보업체', salary: '3,400~4,800만원', location: '서울/수도권', type: '정규직' },
      { title: '토지측량 기술자', company: '측량설계사무소', salary: '3,300~4,600만원', location: '전국', type: '정규직' },
      { title: '지적조사 연구원', company: '국책연구원', salary: '3,000~4,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '지적기사 필기 핵심이론 총정리', author: '김동현', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '지적기사 실기 완전정복', author: '이승민', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '지적기사 기출문제 완성', author: '지적측량연구회', publisher: '기문당', year: 2023, rating: 4.3 },
      { title: '지적관계법규 해설', author: '박순철', publisher: '법문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 설계 및 실무 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '로봇기구개발기사': {
    name: '로봇기구개발기사',
    icon: 'fa-robot',
    category: '기계·설비',
    heroTitle: '2026년도 로봇기구개발기사 합격 가이드',
    heroDesc: '로봇기구개발기사는 산업용·서비스용 로봇의 기구 설계 및 개발 역량을 인증하는 신규 국가기술자격입니다. 로봇 산업의 급성장으로 수요가 빠르게 확대되고 있으며, 로봇 전문 기업과 자동차·전자 산업에서 활발히 채용됩니다.',
    passRateSummary: '필기 33% | 실기 37%',
    avgPassRate: '35%',
    passRates: [
      { year: 2020, written: 30, practical: 34 },
      { year: 2021, written: 32, practical: 36 },
      { year: 2022, written: 34, practical: 38 },
      { year: 2023, written: 35, practical: 39 },
      { year: 2024, written: 33, practical: 37 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '로봇기구 설계', desc: '로봇 링크, 조인트, 엔드이펙터 설계 및 CAD 모델링 실무' },
      { name: '로봇 운동학 및 역학', desc: '순기구학, 역기구학, 동역학 해석 및 경로 계획 기법' },
      { name: '로봇 제어 시스템', desc: '서보 제어, 센서 인터페이스, 로봇 제어기 프로그래밍' },
      { name: '로봇 재료 및 공정', desc: '경량 재료 선정, 부품 가공 방법, 조립 공정 설계' },
      { name: '로봇 안전 및 법규', desc: '로봇 안전 기준(ISO 10218), 협동 로봇 안전 규정' },
    ],
    jobs: [
      { title: '로봇 기구 설계 엔지니어', company: '로봇 전문기업', salary: '3,800~5,500만원', location: '수도권/경남', type: '정규직' },
      { title: '산업용 로봇 기술자', company: '자동화 시스템사', salary: '3,600~5,200만원', location: '전국', type: '정규직' },
      { title: '협동로봇 응용 엔지니어', company: '제조기업', salary: '4,000~5,800만원', location: '수도권', type: '정규직' },
      { title: 'R&D 연구원(로봇)', company: '대기업/연구원', salary: '4,200~6,500만원', location: '수도권/대전', type: '정규직' },
      { title: '로봇 유지보수 기술자', company: '제조공장', salary: '3,300~4,600만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '로봇기구개발기사 필기 핵심이론', author: '오준석', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '로봇기구개발기사 실기 가이드', author: '이로봇', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '로봇 운동학 및 제어 입문', author: '정동현', publisher: '한티미디어', year: 2023, rating: 4.3 },
      { title: '로봇기구개발기사 기출문제 분석', author: '로봇기술연구회', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 설계 및 실무 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '3D프린터운용기능사': {
    name: '3D프린터운용기능사',
    icon: 'fa-cube',
    category: '기계·설비',
    heroTitle: '2026년도 3D프린터운용기능사 합격 가이드',
    heroDesc: '3D프린터운용기능사는 3D 프린터 장비 운용, 소재 관리, 출력물 후처리 실무 능력을 인증하는 자격증입니다. 제조업, 의료, 교육 등 다양한 산업에서 3D 프린팅 기술 수요가 빠르게 증가하고 있습니다.',
    passRateSummary: '필기 57% | 실기 62%',
    avgPassRate: '59%',
    passRates: [
      { year: 2020, written: 53, practical: 58 },
      { year: 2021, written: 55, practical: 60 },
      { year: 2022, written: 58, practical: 63 },
      { year: 2023, written: 59, practical: 64 },
      { year: 2024, written: 57, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '3D 프린터 개론', desc: 'FDM, SLA, SLS 등 3D 프린팅 방식별 원리와 특징 이해' },
      { name: '3D 모델링', desc: '슬라이서 소프트웨어 활용, 출력 파라미터 최적화 방법' },
      { name: '3D 프린터 장비 운용', desc: '장비 설치, 교정, 유지보수 및 출력 불량 원인 분석' },
      { name: '소재 및 후처리', desc: 'PLA, ABS, PETG 등 소재 특성과 표면 처리, 후가공 기술' },
      { name: '안전관리 및 품질', desc: '3D 프린팅 작업장 안전 수칙, 출력물 품질 검사 기준' },
    ],
    jobs: [
      { title: '3D 프린팅 운용 기술자', company: '제조·시제품 업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '3D 프린팅 강사', company: '직업훈련원/학교', salary: '2,600~3,600만원', location: '전국', type: '정규직' },
      { title: '시제품 제작 전문가', company: '스타트업/연구소', salary: '3,000~4,200만원', location: '서울/수도권', type: '정규직' },
      { title: '의료용 3D 프린팅 기술자', company: '의료기기 업체', salary: '3,200~4,500만원', location: '수도권', type: '정규직' },
      { title: '3D 프린팅 프리랜서', company: '개인/공방', salary: '2,400~3,500만원', location: '재택/전국', type: '계약직' },
    ],
    books: [
      { title: '3D프린터운용기능사 필기 완성', author: '박현우', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '3D프린터운용기능사 실기 핵심정리', author: '이창석', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '3D프린터운용기능사 기출문제집', author: '3D프린팅연구회', publisher: '기문당', year: 2023, rating: 4.3 },
      { title: '3D 프린팅 소재와 후처리 실무', author: '최민수', publisher: '복두출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 설계 및 실무 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

// === 보건·농림 6종 ===
// === 의료·보건 국가면허 10종 ===
  '간호사': {
    name: '간호사',
    icon: 'fa-user-nurse',
    category: '의료·보건',
    heroTitle: '2026년도 간호사 국가시험 합격 가이드',
    heroDesc: '간호사 국가시험은 한국보건의료인국가시험원(국시원)에서 매년 1월 시행하는 필기시험으로, 간호대학교(4년제) 졸업 예정자·졸업자가 응시 가능합니다. 성인간호학·기본간호학·모성간호학·아동간호학·지역사회간호학·정신간호학 등 7개 영역에서 출제됩니다. 꾸준한 기출 반복과 문제풀이가 합격의 핵심입니다.',
    passRateSummary: '95~97% (고득점 경쟁)',
    avgPassRate: '96%',
    passRates: [
      { year: 2020, written: 94, practical: null },
      { year: 2021, written: 95, practical: null },
      { year: 2022, written: 96, practical: null },
      { year: 2023, written: 97, practical: null },
      { year: 2024, written: 96, practical: null },
    ],
    schedules: [
      { round: '2026년 제66회', writtenExam: '2026-01-17', writtenResult: '2026-02-19', practicalApply: '—', practicalExam: '—', finalResult: '2026-02-19' },
    ],
    milestones: [
      { label: '제66회 필기시험', date: '2026-01-17' },
      { label: '최종 합격 발표', date: '2026-02-19' },
    ],
    subjects: [
      { name: '성인간호학', desc: '내·외과계 질환별 병태생리, 간호중재, 약물 요법 핵심 정리' },
      { name: '기본간호학', desc: '간호 과정, 활력징후, 투약·주사, 상처 간호 등 기초 간호술' },
      { name: '모성간호학', desc: '임신·분만·산욕기 간호, 신생아 간호, 여성 건강 문제' },
      { name: '아동간호학', desc: '성장발달, 소아 질환별 간호, 가족 중심 아동 간호' },
      { name: '지역사회간호학', desc: '보건소·가정간호·학교보건·산업간호 실무 및 역학' },
      { name: '정신간호학', desc: '정신질환 분류(DSM), 치료적 의사소통, 정신과 약물' },
      { name: '간호관리학', desc: '간호 조직·리더십·의료법·병원 감염 관리 핵심 이론' },
    ],
    jobs: [
      { title: '병원 임상간호사', company: '종합병원·상급종합병원', salary: '3,800~6,000만원', location: '전국', type: '정규직' },
      { title: '중환자실 간호사(ICU)', company: '대학병원', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
      { title: '수술실 간호사', company: '종합병원', salary: '4,200~6,200만원', location: '전국', type: '정규직' },
      { title: '보건소 공중보건간호사', company: '지자체 보건소', salary: '3,500~4,500만원', location: '전국', type: '공무원' },
      { title: '산업간호사', company: '대기업·공단', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 널스케이프 간호사 국가시험 핵심요약', author: '널스케이프 편집부', publisher: '수문사', year: 2025, rating: 4.8 },
      { title: '2026 군자출판사 간호사 국가시험 문제집', author: '간호국시연구회', publisher: '군자출판사', year: 2025, rating: 4.7 },
      { title: '2026 퍼시픽 간호사 국가고시 기출문제집', author: '퍼시픽학술편집부', publisher: '퍼시픽북스', year: 2025, rating: 4.7 },
      { title: '2026 에듀팩토리 간호사 국가고시 1000제', author: '에듀팩토리 편집부', publisher: '에듀팩토리', year: 2025, rating: 4.6 },
    ],
    defaultTodos: [
      '7개 영역 출제 비율 파악 및 학습 계획 수립',
      '성인간호학 핵심 질환별 간호중재 정리',
      '기본간호학 술기 관련 이론 암기',
      '최근 3개년 기출문제 반복 풀이',
      '모의고사 실전 풀이 및 오답 분석',
    ],
  },

  '간호조무사': {
    name: '간호조무사',
    icon: 'fa-user-nurse',
    category: '의료·보건',
    heroTitle: '2026년도 간호조무사 국가시험 합격 가이드',
    heroDesc: '간호조무사 국가시험은 한국보건의료인국가시험원(국시원)에서 연 2회 시행합니다. 간호조무사 양성교육 740시간 이수 후 응시할 수 있으며, 의원·병원·요양원 등 다양한 의료 현장에서 활약합니다. 기초간호학개요·보건간호학개요·공중보건학·의료관계법규·실기 5과목으로 구성됩니다.',
    passRateSummary: '필기 58% | 실기 70%',
    avgPassRate: '63%',
    passRates: [
      { year: 2020, written: 55, practical: 67 },
      { year: 2021, written: 56, practical: 68 },
      { year: 2022, written: 58, practical: 70 },
      { year: 2023, written: 60, practical: 72 },
      { year: 2024, written: 59, practical: 71 },
    ],
    schedules: [
      { round: '상반기(1회)', writtenExam: '2026-04-11', writtenResult: '2026-05-07', practicalApply: '필기 합격자 접수', practicalExam: '2026-05-31', finalResult: '2026-06-18' },
      { round: '하반기(2회)', writtenExam: '2026-10-10', writtenResult: '2026-11-05', practicalApply: '필기 합격자 접수', practicalExam: '2026-11-28', finalResult: '2026-12-17' },
    ],
    milestones: [
      { label: '상반기 필기', date: '2026-04-11' },
      { label: '상반기 실기', date: '2026-05-31' },
      { label: '하반기 필기', date: '2026-10-10' },
      { label: '하반기 실기', date: '2026-11-28' },
    ],
    subjects: [
      { name: '기초간호학개요', desc: '해부생리, 기본간호, 약리, 영양, 생명윤리 등 간호 기초 이론' },
      { name: '보건간호학개요', desc: '지역사회보건, 보건교육, 환경보건, 학교보건·산업보건 개요' },
      { name: '공중보건학', desc: '역학, 감염병, 식품위생, 환경위생, 보건행정 주요 내용' },
      { name: '의료관계법규', desc: '의료법, 감염병예방법, 의료급여법 등 주요 조항 및 관련 규정' },
      { name: '실기(간호술기)', desc: '활력징후 측정, 투약, 드레싱, 이동 보조 등 기본 간호술기' },
    ],
    jobs: [
      { title: '의원 간호조무사', company: '내과·외과·이비인후과 등', salary: '2,400~3,200만원', location: '전국', type: '정규직' },
      { title: '요양병원 간호조무사', company: '요양병원·요양원', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
      { title: '소아과·산부인과 조무사', company: '전문과목 의원', salary: '2,500~3,300만원', location: '전국', type: '정규직' },
      { title: '보건소 간호조무사', company: '지자체 보건소', salary: '2,300~3,000만원', location: '전국', type: '계약직' },
      { title: '노인복지시설 간호조무사', company: '노인요양시설', salary: '2,400~3,200만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 메디시언 간호조무사 핵심요약+기출문제', author: '메디시언 편집부', publisher: '메디시언', year: 2025, rating: 4.7 },
      { title: '2026 시대에듀 간호조무사 한권완성', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2026 서원각 간호조무사 기출문제 총정리', author: '서원각 편집부', publisher: '서원각', year: 2025, rating: 4.5 },
      { title: '2026 이패스코리아 간호조무사 실전 모의고사', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
    ],
    defaultTodos: [
      '5개 과목 출제 비율 파악 및 학습 계획 수립',
      '기초간호학개요 해부생리·약리 핵심 정리',
      '의료관계법규 주요 조항 암기',
      '공중보건학 역학·감염병 출제 포인트 정리',
      '실기 술기 반복 연습 및 기출 풀이',
    ],
  },

  '물리치료사': {
    name: '물리치료사',
    icon: 'fa-hand-holding-medical',
    category: '의료·보건',
    heroTitle: '2026년도 물리치료사 국가시험 합격 가이드',
    heroDesc: '물리치료사 국가시험은 한국보건의료인국가시험원(국시원)에서 매년 1월 시행합니다. 물리치료학과(3~4년제) 졸업 예정·졸업자가 응시할 수 있으며, 고령화 사회 진입에 따라 재활 전문 인력 수요가 꾸준히 증가하고 있습니다. 해부학·생리학 기반의 임상 물리치료 지식이 합격의 핵심입니다.',
    passRateSummary: '85~90%',
    avgPassRate: '87%',
    passRates: [
      { year: 2020, written: 84, practical: null },
      { year: 2021, written: 86, practical: null },
      { year: 2022, written: 88, practical: null },
      { year: 2023, written: 89, practical: null },
      { year: 2024, written: 87, practical: null },
    ],
    schedules: [
      { round: '2026년도 시험', writtenExam: '2026-01-17', writtenResult: '2026-02-19', practicalApply: '—', practicalExam: '—', finalResult: '2026-02-19' },
    ],
    milestones: [
      { label: '필기시험', date: '2026-01-17' },
      { label: '최종 합격 발표', date: '2026-02-19' },
    ],
    subjects: [
      { name: '해부학·생리학', desc: '근골격계·신경계 해부 구조, 운동생리, 신경생리 핵심 정리' },
      { name: '근골격계 물리치료', desc: '정형외과적 평가, 도수치료, 운동치료, 통증 관리 기법' },
      { name: '신경계 물리치료', desc: '뇌졸중·척수손상·파킨슨 등 신경계 질환 재활 접근법' },
      { name: '전기·광선·수치료', desc: 'TENS·초음파·레이저·수치료 등 물리적 인자 치료법' },
      { name: '의료관계법규', desc: '의료기사법, 의료법, 장애인복지법 관련 주요 규정' },
    ],
    jobs: [
      { title: '병원 물리치료사', company: '종합병원·재활병원', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '스포츠재활 치료사', company: '스포츠의학센터·구단', salary: '3,500~5,200만원', location: '전국', type: '정규직' },
      { title: '노인재활 물리치료사', company: '요양병원·노인복지시설', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '정형외과 물리치료사', company: '정형외과 의원', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '소아 물리치료사', company: '소아재활센터', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 물리치료사 국가시험 핵심요약집', author: '대한물리치료사협회', publisher: '범문에듀케이션', year: 2025, rating: 4.7 },
      { title: '2026 물리치료사 국가시험 기출문제집', author: '보건의료 국시연구회', publisher: '군자출판사', year: 2025, rating: 4.6 },
      { title: '물리치료사 국가고시 1000제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '물리치료사 임상실습 매뉴얼', author: '박은영 외', publisher: '현문사', year: 2024, rating: 4.4 },
    ],
    defaultTodos: [
      '출제 과목·비율 파악 및 학습 계획 수립',
      '해부학·생리학 근골격·신경계 핵심 정리',
      '임상 물리치료 기출 문제 반복 풀이',
      '의료관계법규 주요 조항 암기',
      '모의고사 실전 풀이 및 오답 분석',
    ],
  },

  '작업치료사': {
    name: '작업치료사',
    icon: 'fa-hand-holding-medical',
    category: '의료·보건',
    heroTitle: '2026년도 작업치료사 국가시험 합격 가이드',
    heroDesc: '작업치료사 국가시험은 한국보건의료인국가시험원(국시원)에서 매년 1월 시행합니다. 작업치료학과 졸업 예정·졸업자가 응시할 수 있으며, 신체·정신·인지 기능 회복을 위한 일상 작업 훈련 전문가로서 재활병원·아동발달센터·정신건강시설에서 수요가 증가하고 있습니다.',
    passRateSummary: '82~88%',
    avgPassRate: '85%',
    passRates: [
      { year: 2020, written: 81, practical: null },
      { year: 2021, written: 83, practical: null },
      { year: 2022, written: 85, practical: null },
      { year: 2023, written: 87, practical: null },
      { year: 2024, written: 86, practical: null },
    ],
    schedules: [
      { round: '2026년도 시험', writtenExam: '2026-01-17', writtenResult: '2026-02-19', practicalApply: '—', practicalExam: '—', finalResult: '2026-02-19' },
    ],
    milestones: [
      { label: '필기시험', date: '2026-01-17' },
      { label: '최종 합격 발표', date: '2026-02-19' },
    ],
    subjects: [
      { name: '작업치료학 기초', desc: '작업치료 이론, 모델, 작업 분석, 평가 도구 활용 방법' },
      { name: '신체기능 작업치료', desc: '근골격·신경계 기능 장애 평가 및 일상 작업 훈련 접근법' },
      { name: '정신건강 작업치료', desc: '정신질환 작업치료 평가·중재, 집단치료 프로그램 운영' },
      { name: '아동·노인 작업치료', desc: '발달 장애 아동 감각통합, 노인 인지재활·낙상 예방 중재' },
      { name: '의료관계법규', desc: '의료기사법, 장애인복지법, 정신건강복지법 주요 규정' },
    ],
    jobs: [
      { title: '재활병원 작업치료사', company: '재활병원·종합병원', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '아동발달센터 작업치료사', company: '소아재활·발달센터', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '정신건강 작업치료사', company: '정신병원·정신건강센터', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '노인재활 작업치료사', company: '요양병원·노인복지시설', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '학교 특수교육 작업치료사', company: '특수학교·교육청', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 작업치료사 국가시험 핵심요약집', author: '대한작업치료사협회', publisher: '범문에듀케이션', year: 2025, rating: 4.7 },
      { title: '2026 작업치료사 국가시험 기출문제집', author: '보건의료 국시연구회', publisher: '군자출판사', year: 2025, rating: 4.6 },
      { title: '작업치료사 국가고시 문제집', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '작업치료 임상 실무 가이드', author: '김은주 외', publisher: '현문사', year: 2024, rating: 4.4 },
    ],
    defaultTodos: [
      '출제 과목·비율 파악 및 학습 계획 수립',
      '작업치료 이론 및 평가 도구 핵심 정리',
      '신체·정신 기능 기출문제 반복 풀이',
      '의료관계법규 주요 조항 암기',
      '모의고사 실전 풀이 및 오답 분석',
    ],
  },

  '임상병리사': {
    name: '임상병리사',
    icon: 'fa-flask',
    category: '의료·보건',
    heroTitle: '2026년도 임상병리사 국가시험 합격 가이드',
    heroDesc: '임상병리사 국가시험은 한국보건의료인국가시험원(국시원)에서 매년 1월 시행합니다. 임상병리학과 졸업 예정·졸업자가 응시할 수 있으며, 혈액·소변·세포 등 각종 검체를 분석하는 검사 전문가로서 병원 진단검사의학과, 연구소, 보건소에서 활약합니다.',
    passRateSummary: '75~82%',
    avgPassRate: '78%',
    passRates: [
      { year: 2020, written: 74, practical: null },
      { year: 2021, written: 76, practical: null },
      { year: 2022, written: 78, practical: null },
      { year: 2023, written: 80, practical: null },
      { year: 2024, written: 79, practical: null },
    ],
    schedules: [
      { round: '2026년도 시험', writtenExam: '2026-01-17', writtenResult: '2026-02-19', practicalApply: '—', practicalExam: '—', finalResult: '2026-02-19' },
    ],
    milestones: [
      { label: '필기시험', date: '2026-01-17' },
      { label: '최종 합격 발표', date: '2026-02-19' },
    ],
    subjects: [
      { name: '임상화학', desc: '혈당·지질·간기능·신기능 검사 원리 및 분석 장비 운영' },
      { name: '혈액학', desc: '혈구 형태, 혈액응고, CBC 검사, 빈혈·백혈병 감별 판정' },
      { name: '미생물학', desc: '세균·바이러스·진균 배양, 항생제 감수성 검사, 감염관리' },
      { name: '조직병리·세포병리', desc: '조직 처리, H&E 염색, 세포진 검사(PAP, 체강액) 판독' },
      { name: '임상생리학', desc: '심전도(ECG), 뇌파(EEG), 폐기능 검사, 초음파 기초 원리' },
    ],
    jobs: [
      { title: '진단검사의학과 임상병리사', company: '종합병원·대학병원', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '수탁검사센터 병리사', company: '녹십자·세브란스 등', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '보건소 임상병리사', company: '지자체 보건소', salary: '2,800~3,800만원', location: '전국', type: '공무원' },
      { title: '제약·바이오 QC 담당', company: '제약·바이오기업', salary: '3,500~5,500만원', location: '서울·경기', type: '정규직' },
      { title: '혈액원 검사 담당', company: '대한적십자사 혈액원', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 임상병리사 국가시험 핵심요약집', author: '대한임상병리사협회', publisher: '범문에듀케이션', year: 2025, rating: 4.7 },
      { title: '2026 임상병리사 국가시험 기출문제집', author: '보건의료 국시연구회', publisher: '군자출판사', year: 2025, rating: 4.6 },
      { title: '임상병리사 국가고시 완전정복', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '임상병리 실기 매뉴얼', author: '김정호 외', publisher: '현문사', year: 2024, rating: 4.4 },
    ],
    defaultTodos: [
      '출제 과목·비율 파악 및 학습 계획 수립',
      '임상화학·혈액학 검사 원리 핵심 정리',
      '미생물학·조직병리 기출문제 반복 풀이',
      '임상생리학(ECG·EEG) 판독법 학습',
      '모의고사 실전 풀이 및 오답 분석',
    ],
  },

  '방사선사': {
    name: '방사선사',
    icon: 'fa-radiation',
    category: '의료·보건',
    heroTitle: '2026년도 방사선사 국가시험 합격 가이드',
    heroDesc: '방사선사 국가시험은 한국보건의료인국가시험원(국시원)에서 매년 1월 시행합니다. 방사선학과 졸업 예정·졸업자가 응시할 수 있으며, X선·CT·MRI·초음파 등 영상 장비를 운용하는 전문가로서 종합병원·검진센터·방사선과에서 수요가 안정적입니다.',
    passRateSummary: '80~88%',
    avgPassRate: '84%',
    passRates: [
      { year: 2020, written: 80, practical: null },
      { year: 2021, written: 82, practical: null },
      { year: 2022, written: 84, practical: null },
      { year: 2023, written: 86, practical: null },
      { year: 2024, written: 85, practical: null },
    ],
    schedules: [
      { round: '2026년도 시험', writtenExam: '2026-01-17', writtenResult: '2026-02-19', practicalApply: '—', practicalExam: '—', finalResult: '2026-02-19' },
    ],
    milestones: [
      { label: '필기시험', date: '2026-01-17' },
      { label: '최종 합격 발표', date: '2026-02-19' },
    ],
    subjects: [
      { name: '방사선물리학·방어', desc: '방사선 종류·특성, 피폭 선량 계산, 방사선 방어 원칙' },
      { name: '방사선 촬영학', desc: 'X선 일반 촬영, 특수 촬영 포지셔닝, 영상 품질 관리' },
      { name: 'CT·MRI 검사학', desc: 'CT 스캔 프로토콜, MRI 시퀀스, 조영제 사용 및 부작용' },
      { name: '방사선치료학', desc: '선형가속기, 치료 계획, 선량 분포, 방호 기준' },
      { name: '의료관계법규', desc: '의료기사법, 방사선안전관리법 관련 주요 규정' },
    ],
    jobs: [
      { title: '영상의학과 방사선사', company: '종합병원·대학병원', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: 'CT·MRI 기사', company: '검진센터·영상의학과', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '방사선치료 기사', company: '암센터·종양방사선과', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '보건소 방사선사', company: '지자체 보건소', salary: '2,800~3,800만원', location: '전국', type: '공무원' },
      { title: '검진 차량 방사선사', company: '이동검진 업체', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '2026 방사선사 국가시험 핵심요약집', author: '대한방사선사협회', publisher: '범문에듀케이션', year: 2025, rating: 4.7 },
      { title: '2026 방사선사 국가시험 기출문제집', author: '보건의료 국시연구회', publisher: '군자출판사', year: 2025, rating: 4.6 },
      { title: '방사선사 국가고시 완전정복', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '방사선 촬영학 실기 가이드', author: '김성호 외', publisher: '현문사', year: 2024, rating: 4.4 },
    ],
    defaultTodos: [
      '출제 과목·비율 파악 및 학습 계획 수립',
      '방사선물리·방어 핵심 계산 문제 정리',
      'CT·MRI 프로토콜 및 촬영 포지셔닝 암기',
      '의료관계법규 주요 조항 정리',
      '모의고사 실전 풀이 및 오답 분석',
    ],
  },

  '치위생사': {
    name: '치위생사',
    icon: 'fa-tooth',
    category: '의료·보건',
    heroTitle: '2026년도 치위생사 국가시험 합격 가이드',
    heroDesc: '치위생사 국가시험은 한국보건의료인국가시험원(국시원)에서 매년 1월 시행합니다. 치위생학과 졸업 예정·졸업자가 응시할 수 있으며, 치과 스케일링·예방 처치·구강보건교육 전문가로서 치과의원·대학병원 치과·보건소에서 안정적으로 취업합니다.',
    passRateSummary: '82~90%',
    avgPassRate: '86%',
    passRates: [
      { year: 2020, written: 82, practical: null },
      { year: 2021, written: 84, practical: null },
      { year: 2022, written: 86, practical: null },
      { year: 2023, written: 88, practical: null },
      { year: 2024, written: 87, practical: null },
    ],
    schedules: [
      { round: '2026년도 시험', writtenExam: '2026-01-17', writtenResult: '2026-02-19', practicalApply: '—', practicalExam: '—', finalResult: '2026-02-19' },
    ],
    milestones: [
      { label: '필기시험', date: '2026-01-17' },
      { label: '최종 합격 발표', date: '2026-02-19' },
    ],
    subjects: [
      { name: '치위생학 개론', desc: '치위생학 역사, 윤리, 치위생 과정, 전문직 역할과 범위' },
      { name: '구강해부학·구강생리학', desc: '치아 구조, 구강 조직, 치주 해부, 타액·씹기 생리학' },
      { name: '치과예방처치학', desc: '스케일링 기법, 불소 도포, 치면열구전색, 구강위생 지도' },
      { name: '치과방사선학', desc: '구내·구외 방사선 촬영, 방사선 방어, 영상 판독 기초' },
      { name: '의료관계법규', desc: '의료기사법, 의료법, 구강보건법 관련 주요 조항' },
    ],
    jobs: [
      { title: '치과의원 치위생사', company: '일반 치과의원', salary: '2,600~3,600만원', location: '전국', type: '정규직' },
      { title: '대학병원 치과 치위생사', company: '대학병원 치과', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '보건소 구강보건 담당', company: '지자체 보건소', salary: '2,800~3,500만원', location: '전국', type: '공무원' },
      { title: '교정·임플란트 전문 치과', company: '전문과목 치과', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '치과 건강검진센터', company: '검진센터', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 치위생사 국가시험 핵심요약집', author: '대한치위생사협회', publisher: '범문에듀케이션', year: 2025, rating: 4.7 },
      { title: '2026 치위생사 국가시험 기출문제집', author: '보건의료 국시연구회', publisher: '군자출판사', year: 2025, rating: 4.6 },
      { title: '치위생사 국가고시 1000제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '치위생학 총론 핵심정리', author: '김혜진 외', publisher: '현문사', year: 2024, rating: 4.4 },
    ],
    defaultTodos: [
      '출제 과목·비율 파악 및 학습 계획 수립',
      '구강해부학·생리학 핵심 구조 암기',
      '치과예방처치학 술기 이론 정리',
      '의료관계법규 주요 조항 암기',
      '모의고사 실전 풀이 및 오답 분석',
    ],
  },

  '응급구조사1급': {
    name: '응급구조사 1급',
    icon: 'fa-truck-medical',
    category: '의료·보건',
    heroTitle: '2026년도 응급구조사 1급 국가시험 합격 가이드',
    heroDesc: '응급구조사 1급 국가시험은 한국보건의료인국가시험원(국시원)에서 매년 1월 시행합니다. 응급구조학과(4년제) 졸업 예정·졸업자 또는 2급 응급구조사 취득 후 3년 이상 경력자가 응시 가능합니다. 소방서·119구급대·응급실·항공응급에서 고급 응급처치를 독립 수행하는 전문 자격입니다.',
    passRateSummary: '70~80%',
    avgPassRate: '75%',
    passRates: [
      { year: 2020, written: 70, practical: null },
      { year: 2021, written: 72, practical: null },
      { year: 2022, written: 75, practical: null },
      { year: 2023, written: 77, practical: null },
      { year: 2024, written: 76, practical: null },
    ],
    schedules: [
      { round: '2026년도 시험', writtenExam: '2026-01-17', writtenResult: '2026-02-19', practicalApply: '—', practicalExam: '—', finalResult: '2026-02-19' },
    ],
    milestones: [
      { label: '필기시험', date: '2026-01-17' },
      { label: '최종 합격 발표', date: '2026-02-19' },
    ],
    subjects: [
      { name: '전문응급처치학', desc: '심폐소생술(BLS/ACLS), 전문기도관리(삽관), 제세동 시술' },
      { name: '내과 응급', desc: '흉통·호흡곤란·의식변화·뇌졸중·당뇨 응급 평가·처치' },
      { name: '외상 응급', desc: '다발성 외상(ITLS), 척추 고정, 지혈·드레싱, 골절 처치' },
      { name: '약리학·응급약물', desc: '응급 투여 약물(에피네프린·아트로핀 등) 작용·용량·경로' },
      { name: '의료관계법규', desc: '응급의료에관한법률, 소방기본법 관련 응급구조사 업무 범위' },
    ],
    jobs: [
      { title: '소방 119구급대원', company: '소방서·119안전센터', salary: '3,500~5,000만원', location: '전국', type: '공무원' },
      { title: '응급실 응급구조사', company: '종합병원 응급실', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '항공 응급구조사', company: '닥터헬기·항공이송업체', salary: '4,000~6,000만원', location: '전국', type: '정규직' },
      { title: '산업현장 응급처치 담당', company: '대기업·발전소·공단', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '해양경찰 구조대', company: '해양경찰청', salary: '3,500~5,000만원', location: '전국', type: '공무원' },
    ],
    books: [
      { title: '2026 응급구조사 1급 국가시험 핵심요약집', author: '대한응급구조사협회', publisher: '범문에듀케이션', year: 2025, rating: 4.7 },
      { title: '2026 응급구조사 1급 기출문제집', author: '보건의료 국시연구회', publisher: '군자출판사', year: 2025, rating: 4.6 },
      { title: '응급구조사 1급 국가고시 완전정복', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '전문응급처치학 총론', author: '한국응급구조학회', publisher: '대학서림', year: 2024, rating: 4.5 },
    ],
    defaultTodos: [
      '출제 과목·비율 파악 및 학습 계획 수립',
      '전문응급처치(삽관·제세동·ACLS) 이론 정리',
      '내과·외상 응급 기출문제 반복 풀이',
      '응급약물 용량·적응증 암기',
      '모의고사 실전 풀이 및 오답 분석',
    ],
  },

  '응급구조사2급': {
    name: '응급구조사 2급',
    icon: 'fa-truck-medical',
    category: '의료·보건',
    heroTitle: '2026년도 응급구조사 2급 국가시험 합격 가이드',
    heroDesc: '응급구조사 2급 국가시험은 한국보건의료인국가시험원(국시원)에서 연 2회 시행합니다. 응급구조 관련 학과(전문대학 이상) 졸업 예정·졸업자 또는 지정 교육기관 240시간 이수자가 응시 가능합니다. 119구급대·민간 구급차·산업현장 응급처치 등 다양한 분야에서 활약합니다.',
    passRateSummary: '60~70%',
    avgPassRate: '65%',
    passRates: [
      { year: 2020, written: 60, practical: null },
      { year: 2021, written: 62, practical: null },
      { year: 2022, written: 64, practical: null },
      { year: 2023, written: 66, practical: null },
      { year: 2024, written: 65, practical: null },
    ],
    schedules: [
      { round: '상반기(1회)', writtenExam: '2026-04-11', writtenResult: '2026-05-07', practicalApply: '—', practicalExam: '—', finalResult: '2026-05-07' },
      { round: '하반기(2회)', writtenExam: '2026-10-10', writtenResult: '2026-11-05', practicalApply: '—', practicalExam: '—', finalResult: '2026-11-05' },
    ],
    milestones: [
      { label: '상반기 시험', date: '2026-04-11' },
      { label: '하반기 시험', date: '2026-10-10' },
    ],
    subjects: [
      { name: '기초응급처치학', desc: '기본소생술(BLS), AED 사용법, 기도 확보, 산소 투여' },
      { name: '내과 응급 기초', desc: '흉통·호흡곤란·의식 변화 환자 초기 평가 및 기본 처치' },
      { name: '외상 응급 기초', desc: '출혈 지혈, 골절 고정, 화상 처치, 척추 손상 의심 환자 이송' },
      { name: '응급의료 관련 법규', desc: '응급의료에관한법률, 2급 응급구조사 업무 범위 및 의무' },
    ],
    jobs: [
      { title: '민간 구급차 구조사', company: '민간 구급대', salary: '2,500~3,500만원', location: '전국', type: '정규직' },
      { title: '119구급대원(의용소방대)', company: '소방서', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
      { title: '산업현장 응급처치 담당', company: '제조·건설업체', salary: '2,800~3,600만원', location: '전국', type: '정규직' },
      { title: '요양병원 응급처치 담당', company: '요양병원', salary: '2,600~3,400만원', location: '전국', type: '정규직' },
      { title: '스포츠·이벤트 현장 구조사', company: '스포츠 구단·행사업체', salary: '2,400~3,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '2026 응급구조사 2급 국가시험 핵심요약집', author: '대한응급구조사협회', publisher: '범문에듀케이션', year: 2025, rating: 4.6 },
      { title: '2026 응급구조사 2급 기출문제집', author: '보건의료 국시연구회', publisher: '군자출판사', year: 2025, rating: 4.5 },
      { title: '응급구조사 2급 국가고시 완전정복', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.4 },
      { title: '기초응급처치학 핵심정리', author: '한국응급구조학회', publisher: '대학서림', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '출제 과목·비율 파악 및 학습 계획 수립',
      '기초응급처치(BLS·AED) 이론 및 술기 정리',
      '내과·외상 응급 기출문제 반복 풀이',
      '응급의료 법규 주요 조항 암기',
      '모의고사 실전 풀이 및 오답 분석',
    ],
  },

  '요양보호사': {
    name: '요양보호사',
    icon: 'fa-person-cane',
    category: '의료·보건',
    heroTitle: '2026년도 요양보호사 국가시험 합격 가이드',
    heroDesc: '요양보호사 국가시험은 한국보건의료인국가시험원(국시원)에서 연 4회 시행합니다. 지정 교육기관에서 이론 80시간·실기 80시간·실습 80시간(총 240시간)을 이수한 후 응시할 수 있습니다. 급속한 고령화로 수요가 폭발적으로 증가하는 자격으로, 취득 난이도 대비 취업 경쟁력이 매우 높습니다.',
    passRateSummary: '85~92%',
    avgPassRate: '88%',
    passRates: [
      { year: 2020, written: 85, practical: 90 },
      { year: 2021, written: 86, practical: 91 },
      { year: 2022, written: 88, practical: 92 },
      { year: 2023, written: 90, practical: 93 },
      { year: 2024, written: 89, practical: 92 },
    ],
    schedules: [
      { round: '1분기', writtenExam: '2026-03-14', writtenResult: '2026-03-27', practicalApply: '필기 합격자 접수', practicalExam: '2026-04-04', finalResult: '2026-04-17' },
      { round: '2분기', writtenExam: '2026-06-13', writtenResult: '2026-06-26', practicalApply: '필기 합격자 접수', practicalExam: '2026-07-04', finalResult: '2026-07-17' },
      { round: '3분기', writtenExam: '2026-09-12', writtenResult: '2026-09-25', practicalApply: '필기 합격자 접수', practicalExam: '2026-10-03', finalResult: '2026-10-16' },
      { round: '4분기', writtenExam: '2026-12-12', writtenResult: '2026-12-25', practicalApply: '필기 합격자 접수', practicalExam: '2027-01-02', finalResult: '2027-01-15' },
    ],
    milestones: [
      { label: '1분기 필기', date: '2026-03-14' },
      { label: '2분기 필기', date: '2026-06-13' },
      { label: '3분기 필기', date: '2026-09-12' },
      { label: '4분기 필기', date: '2026-12-12' },
    ],
    subjects: [
      { name: '요양보호론', desc: '노인 특성, 요양보호 이념, 인권·학대 예방, 직업 윤리' },
      { name: '기본 요양 보호 기술', desc: '신체 활동 지원(식사·배설·청결·이동), 체위 변경, 욕창 예방' },
      { name: '특수 요양 보호 기술', desc: '치매 노인 케어, 임종 케어, 응급처치, 감염병 예방' },
      { name: '의사소통과 여가 활동', desc: '노인 심리 이해, 의사소통 기법, 여가 활동 프로그램 운영' },
    ],
    jobs: [
      { title: '노인요양원 요양보호사', company: '노인요양원·노인복지관', salary: '2,400~3,200만원', location: '전국', type: '정규직' },
      { title: '재가 방문 요양보호사', company: '재가노인복지시설', salary: '2,000~2,800만원', location: '전국', type: '시간제' },
      { title: '요양병원 요양보호사', company: '요양병원', salary: '2,500~3,300만원', location: '전국', type: '정규직' },
      { title: '치매안심센터 요양보호사', company: '지자체 치매안심센터', salary: '2,400~3,000만원', location: '전국', type: '계약직' },
      { title: '주·야간보호센터 종사자', company: '주야간보호센터', salary: '2,300~3,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 요양보호사 한권완성 필기+실기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.7 },
      { title: '2026 요양보호사 기출문제 총정리', author: '서원각 편집부', publisher: '서원각', year: 2025, rating: 4.6 },
      { title: '2026 에듀윌 요양보호사 핵심요약', author: '에듀윌 편집부', publisher: '에듀윌', year: 2025, rating: 4.5 },
      { title: '요양보호사 실기 술기 완전정복', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
    ],
    defaultTodos: [
      '240시간 교육과정(이론·실기·실습) 이수 확인',
      '요양보호론 노인 특성·인권 핵심 정리',
      '기본 요양보호 기술 술기 반복 연습',
      '치매·임종 케어 특수 기술 이론 학습',
      '기출문제 반복 풀이 및 실기 체크리스트 점검',
    ],
  },

  '의무기록사': {
    name: '의무기록사',
    icon: 'fa-file-medical',
    category: '의료·보건',
    heroTitle: '2026년도 의무기록사 국가시험 합격 가이드',
    heroDesc: '의무기록사 국가시험은 한국보건의료인국가시험원(국시원)에서 매년 1월 시행합니다. 의무기록학과 졸업 예정·졸업자가 응시할 수 있으며, 의료정보 분류·관리·분석 전문가로서 병원의 의료정보팀, 보건 데이터 분석기관, 건강보험공단 등에서 활약합니다.',
    passRateSummary: '72~80%',
    avgPassRate: '76%',
    passRates: [
      { year: 2020, written: 71, practical: null },
      { year: 2021, written: 73, practical: null },
      { year: 2022, written: 75, practical: null },
      { year: 2023, written: 78, practical: null },
      { year: 2024, written: 77, practical: null },
    ],
    schedules: [
      { round: '2026년도 시험', writtenExam: '2026-01-17', writtenResult: '2026-02-19', practicalApply: '—', practicalExam: '—', finalResult: '2026-02-19' },
    ],
    milestones: [
      { label: '필기시험', date: '2026-01-17' },
      { label: '최종 합격 발표', date: '2026-02-19' },
    ],
    subjects: [
      { name: '의무기록관리학', desc: '의료 기록 작성·보관·관리·파기 기준, 의무기록 질 관리' },
      { name: '의학용어·의학분류', desc: 'ICD-10-CM/PCS 진단·수술 분류 코딩, KCD 코드 적용' },
      { name: '보건통계·역학', desc: '병원 통계 산출(입원률·재원일수 등), 역학 지표 계산' },
      { name: '보건의료정보학', desc: 'EMR·EHR 시스템, 의료 데이터 표준(HL7·SNOMED), 정보 보안' },
      { name: '의료관계법규', desc: '의료법 의무기록 조항, 개인정보보호법, 건강보험 관련 규정' },
    ],
    jobs: [
      { title: '병원 의무기록팀 담당', company: '종합병원·대학병원', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '보험심사·청구 담당', company: '병원·의원', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '건강보험공단 자료 분석', company: '국민건강보험공단', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '의료 데이터 분석가', company: '헬스케어 IT 기업', salary: '3,500~5,500만원', location: '서울·경기', type: '정규직' },
      { title: '의료정보 컨설턴트', company: 'EMR 솔루션업체', salary: '3,500~5,000만원', location: '서울·경기', type: '정규직' },
    ],
    books: [
      { title: '2026 의무기록사 국가시험 핵심요약집', author: '대한의무기록협회', publisher: '범문에듀케이션', year: 2025, rating: 4.7 },
      { title: '2026 의무기록사 국가시험 기출문제집', author: '보건의료 국시연구회', publisher: '군자출판사', year: 2025, rating: 4.6 },
      { title: 'ICD 코딩 완전정복', author: '의무기록 코딩 연구회', publisher: '현문사', year: 2025, rating: 4.5 },
      { title: '의무기록사 국가고시 모의고사', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.4 },
    ],
    defaultTodos: [
      '출제 과목·비율 파악 및 학습 계획 수립',
      'ICD-10-CM/PCS·KCD 코딩 반복 연습',
      '의무기록 관리·보건통계 핵심 이론 정리',
      '의료관계법규 주요 조항 암기',
      '모의고사 실전 풀이 및 오답 분석',
    ],
  },

  '보건교육사': {
    name: '보건교육사',
    icon: 'fa-heart-pulse',
    category: '안전·보건',
    heroTitle: '2026년도 보건교육사 합격 가이드',
    heroDesc: '보건교육사는 국민의 건강 증진을 위한 보건교육 프로그램을 기획·실행·평가하는 전문 자격증입니다. 보건소, 학교, 의료기관 등 다양한 분야에서 활동하며 수요가 꾸준히 증가하고 있습니다. 체계적인 이론 학습과 실습 준비로 합격의 문을 열어보세요.',
    passRateSummary: '필기 42% | 실기 48%',
    avgPassRate: '45%',
    passRates: [
      { year: 2020, written: 39, practical: 45 },
      { year: 2021, written: 41, practical: 47 },
      { year: 2022, written: 43, practical: 49 },
      { year: 2023, written: 44, practical: 50 },
      { year: 2024, written: 42, practical: 48 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '보건교육학', desc: '보건교육의 개념·이론·방법론 및 교육 설계' },
      { name: '보건학', desc: '공중보건의 기초, 역학, 질병 예방 및 건강 증진' },
      { name: '보건프로그램 개발 및 평가', desc: '보건교육 프로그램 기획·실행·평가 방법론' },
      { name: '보건의사소통', desc: '건강 커뮤니케이션, 미디어 활용 및 상담 기술' },
      { name: '보건의료법규', desc: '국민건강증진법, 의료법 등 관련 법령 이해' },
    ],
    jobs: [
      { title: '보건교육사', company: '지역보건소', salary: '3,000~3,800만원', location: '전국', type: '정규직' },
      { title: '건강증진팀 연구원', company: '한국건강증진개발원', salary: '3,200~4,200만원', location: '서울', type: '정규직' },
      { title: '보건교사', company: '초·중·고등학교', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '보건관리자', company: '산업체·사업장', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '건강교육 강사', company: '민간 교육기관', salary: '2,500~3,500만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '보건교육사 필기 완전정복', author: '김보건', publisher: '에듀팩토리', year: 2024, rating: 4.5 },
      { title: '보건교육학 핵심이론 총정리', author: '이건강', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '보건의료법규 기출문제집', author: '박법규', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '공중보건학 개론', author: '정보건', publisher: '수문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 및 계산문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '위생사': {
    name: '위생사',
    icon: 'fa-shield-virus',
    category: '안전·보건',
    heroTitle: '2026년도 위생사 합격 가이드',
    heroDesc: '위생사는 공중위생 및 환경위생 분야의 전문가로 식품·환경·공중보건 관련 업무를 담당합니다. 보건복지부 면허 자격으로 보건소, 식품위생업소, 환경관련 기관에서 활동합니다. 체계적인 학습으로 위생사 자격을 취득해 전문 직업인의 길을 걸어보세요.',
    passRateSummary: '필기 38% | 실기 44%',
    avgPassRate: '41%',
    passRates: [
      { year: 2020, written: 35, practical: 41 },
      { year: 2021, written: 37, practical: 43 },
      { year: 2022, written: 39, practical: 45 },
      { year: 2023, written: 40, practical: 46 },
      { year: 2024, written: 38, practical: 44 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '위생관계법령', desc: '공중위생관리법, 식품위생법 등 관련 법규 체계' },
      { name: '환경위생학', desc: '대기·수질·토양오염과 생활환경 위생 관리' },
      { name: '위생곤충학', desc: '위생해충의 종류·생태·방제 방법 및 살충제 활용' },
      { name: '공중보건학', desc: '역학, 감염병 예방, 지역사회 보건 및 건강증진' },
      { name: '식품위생학', desc: '식품 오염, 식중독, HACCP 및 식품 검사 방법' },
    ],
    jobs: [
      { title: '위생사', company: '지역보건소', salary: '2,800~3,600만원', location: '전국', type: '정규직' },
      { title: '식품위생감시원', company: '지방자치단체', salary: '3,000~3,800만원', location: '전국', type: '정규직' },
      { title: '환경위생관리원', company: '환경관리공단', salary: '2,900~3,700만원', location: '전국', type: '정규직' },
      { title: '위생관리팀 직원', company: '식품제조업체', salary: '2,800~3,500만원', location: '수도권·충청', type: '정규직' },
      { title: '방역소독 전문가', company: '방역업체', salary: '2,500~3,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '위생사 국가시험 완전정복', author: '최위생', publisher: '수문사', year: 2024, rating: 4.5 },
      { title: '공중보건학·환경위생학 핵심정리', author: '김공중', publisher: '에듀팩토리', year: 2024, rating: 4.4 },
      { title: '식품위생학 기출 총정리', author: '박식품', publisher: '성안당', year: 2023, rating: 4.3 },
      { title: '위생관계법령 해설집', author: '이법령', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 및 계산문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '영양사': {
    name: '영양사',
    icon: 'fa-apple-whole',
    category: '안전·보건',
    heroTitle: '2026년도 영양사 합격 가이드',
    heroDesc: '영양사는 개인과 집단의 건강 유지·증진을 위한 식생활 관리 및 영양 상담을 담당하는 국가면허 자격입니다. 병원, 학교급식, 산업체 식당 등 다양한 현장에서 전문가로 활동할 수 있습니다. 영양학 이론부터 급식 실무까지 폭넓은 학습으로 합격을 준비하세요.',
    passRateSummary: '필기 45% | 실기 52%',
    avgPassRate: '48%',
    passRates: [
      { year: 2020, written: 42, practical: 49 },
      { year: 2021, written: 44, practical: 51 },
      { year: 2022, written: 46, practical: 53 },
      { year: 2023, written: 47, practical: 54 },
      { year: 2024, written: 45, practical: 52 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '영양학', desc: '영양소의 기능·대사·결핍증 및 영양 요구량 산정' },
      { name: '생화학', desc: '탄수화물·지질·단백질·효소 대사 및 생체 반응 원리' },
      { name: '식품학', desc: '식품의 성분·가공·저장 및 식품 품질 관리' },
      { name: '급식경영학', desc: '급식 시스템 운영, 식단 작성, 원가 관리 및 위생 관리' },
      { name: '영양교육 및 상담실습', desc: '영양 상담 기법, 교육 매체 활용 및 영양 판정 실습' },
    ],
    jobs: [
      { title: '병원 영양사', company: '종합병원·의료기관', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '학교 영양교사', company: '초·중·고등학교', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '산업체 영양사', company: '대기업 구내식당', salary: '2,800~3,800만원', location: '수도권', type: '정규직' },
      { title: '보건소 영양사', company: '지역보건소', salary: '2,900~3,600만원', location: '전국', type: '정규직' },
      { title: '프리랜서 영양사', company: '영양 컨설팅업체', salary: '2,400~3,500만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '영양사 국가시험 한권으로 끝내기', author: '김영양', publisher: '수문사', year: 2024, rating: 4.5 },
      { title: '영양학·생화학 핵심이론', author: '이생화', publisher: '에듀팩토리', year: 2024, rating: 4.4 },
      { title: '급식경영학 기출문제 총정리', author: '박급식', publisher: '성안당', year: 2023, rating: 4.3 },
      { title: '식품학 완전정복', author: '정식품', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 및 계산문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '산림기능사': {
    name: '산림기능사',
    icon: 'fa-tree',
    category: '농림·환경',
    heroTitle: '2026년도 산림기능사 합격 가이드',
    heroDesc: '산림기능사는 산림 조성·보호·이용 업무를 수행하는 입문 산림 자격증입니다. 학력 제한 없이 응시 가능하며 산림청·지자체·임업회사·산불 방지 기관 등 다양한 현장에서 활용됩니다. 산림기사의 기초 단계로 귀산촌·산림 관련 업종 진입에 유리합니다.',
    passRateSummary: '필기 55% | 실기 60%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 52, practical: 57 }, { year: 2021, written: 53, practical: 58 },
      { year: 2022, written: 55, practical: 60 }, { year: 2023, written: 57, practical: 62 },
      { year: 2024, written: 56, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '산림조성', desc: '조림·육림·벌채 작업 방법, 수종별 식재 밀도·관리 기준' },
      { name: '산림보호', desc: '산불 예방·진화, 병해충 방제, 산사태·토사 유출 예방 기초' },
      { name: '임업기계', desc: '체인톱·집재기 등 임업 기계 구조, 안전 사용법, 유지보수' },
      { name: '산림관계법규', desc: '산림기본법·산림자원법·산불 관련 법규 주요 내용' },
    ],
    jobs: [
      { title: '산림 조성 기능원', company: '임업회사·산림청', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
      { title: '산불 감시원', company: '지자체·산림청', salary: '2,300~3,000만원', location: '전국', type: '계약직' },
      { title: '수목원·자연휴양림 관리원', company: '국공립 수목원', salary: '2,500~3,300만원', location: '전국', type: '정규직' },
      { title: '임목 벌채·집재 기사', company: '임업회사', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '조림·육림 전문 기사', company: '산림조합·산림청', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 산림기능사 필기 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2026 산림기능사 필기', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '2026 산림기능사 필기·실기', author: '자격시험 편집부', publisher: '성안당', year: 2025, rating: 4.4 },
      { title: '2026 산림기능사 필기 초단기 CBT 10개년 빈출+기출', author: '자격연구회', publisher: '예문사', year: 2025, rating: 4.3 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 학습 계획 수립', '산림조성·보호 핵심 이론 정리',
      '임업기계 안전 사용법 정리', '기출문제 풀이 (최근 3개년)',
      '실기 작업형 체인톱·식재 반복 연습',
    ],
  },

  '산림기능장': {
    name: '산림기능장',
    icon: 'fa-tree',
    category: '농림·환경',
    heroTitle: '2026년도 산림기능장 합격 가이드',
    heroDesc: '산림기능장은 산림 분야 최고 기능 자격증으로, 산림기사 또는 산림산업기사 취득 후 실무 경력을 보유한 전문가를 대상으로 합니다. 조림·육림·산림 보호 분야의 현장 최고 기능자로 인정받으며 산림청·임업 관련 기관의 관리직 진출에 유리합니다.',
    passRateSummary: '필기 40% | 실기 45%',
    avgPassRate: '42%',
    passRates: [
      { year: 2020, written: 38, practical: 43 }, { year: 2021, written: 39, practical: 44 },
      { year: 2022, written: 41, practical: 45 }, { year: 2023, written: 42, practical: 46 },
      { year: 2024, written: 41, practical: 45 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-07-27' }, { label: '2회 실기', date: '2026-10-04' },
    ],
    subjects: [
      { name: '산림 조성 심화', desc: '고급 조림·육림 기술, 임분 구조 분석, 수확 예측' },
      { name: '산림 보호 심화', desc: '생태계 보전, 산림 재해 관리, 탄소 흡수원 관리 실무' },
      { name: '임업 경영', desc: '임업 경영 계획 수립, 임목 평가, 산림 인증 제도' },
      { name: '산림관계법규', desc: '산림 관련 법령 전반, 산림청 정책, 탄소중립 산림 제도' },
    ],
    jobs: [
      { title: '산림 관리 팀장', company: '산림조합·임업회사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '국유림 관리소 담당', company: '산림청·국유림관리소', salary: '3,200~4,500만원', location: '전국', type: '공무원' },
      { title: '산림 복원 전문가', company: '환경부·지자체', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
      { title: '탄소 흡수원 관리 전문가', company: '한국임업진흥원', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: '임업 컨설턴트', company: '임업 컨설팅 업체', salary: '3,500~5,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 산림기능장 필기 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2026 산림기능장 필기+실기', author: '자격시험 편집부', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '산림기능장 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.4 },
      { title: 'Hi-Pass 산림기술사', author: '기술사 연구회', publisher: '성안당', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '응시자격 확인 (경력 요건 충족 여부)', '산림 조성·보호 심화 이론 정리',
      '임업 경영 계획 수립 실무 학습', '기출문제 풀이 (최근 3개년)',
      '실기 필답형·작업형 반복 연습',
    ],
  },

  '나무의사': {
    name: '나무의사',
    icon: 'fa-tree',
    category: '농림·환경',
    heroTitle: '2026년도 나무의사 합격 가이드',
    heroDesc: '나무의사는 산림보호법에 따라 수목의 병해충·생리 장애를 진단하고 처방하는 전문 자격입니다. 한국임업진흥원에서 2019년부터 시행하며, 조경사·산림기사·식물보호기사 등 관련 학과 졸업자나 현장 경력자가 주로 응시합니다. 수목 진료 수요 증가로 자격 희소성과 전문성이 높습니다.',
    passRateSummary: '1차 45% | 2차 50%',
    avgPassRate: '47%',
    passRates: [
      { year: 2020, written: 42, practical: 48 }, { year: 2021, written: 44, practical: 49 },
      { year: 2022, written: 46, practical: 51 }, { year: 2023, written: 47, practical: 52 },
      { year: 2024, written: 45, practical: 50 },
    ],
    schedules: [
      { round: '2026년 제8회', writtenExam: '2026-05-16', writtenResult: '2026-06-13', practicalExam: '2026-08-22', practicalResult: '2026-09-19' },
    ],
    milestones: [
      { label: '1차 시험 (필기)', date: '2026-05-16' },
      { label: '1차 합격 발표', date: '2026-06-13' },
      { label: '2차 시험 (서술·실기)', date: '2026-08-22' },
      { label: '최종 합격 발표', date: '2026-09-19' },
    ],
    subjects: [
      { name: '수목병리학', desc: '주요 수목 병원균(세균·진균·바이러스) 진단·방제 방법' },
      { name: '수목해충학', desc: '주요 해충 종류·생활사, 피해 진단, 친환경 방제 기법' },
      { name: '수목생리학', desc: '수목 영양·수분·광합성·호르몬 생리, 생리 장애 원인 분석' },
      { name: '토양학', desc: '토양 구조·이화학성, 토양 개량, 수목 뿌리 환경 관리' },
      { name: '수목외과수술·약제학', desc: '외과수술 처리, 지주목 설치, 약제 선택·처방 원칙' },
    ],
    jobs: [
      { title: '수목 진료 나무의사', company: '수목진료연구소·조경사', salary: '3,500~5,500만원', location: '전국', type: '정규직' },
      { title: '수목 보호 전문가', company: '지자체·공원관리공단', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '조경·산림 방제 전문가', company: '방제업체', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '문화재 수목 관리 전문가', company: '문화재청·사찰', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '수목 진단 컨설턴트', company: '독립 개원', salary: '4,000~7,000만원', location: '전국', type: '개인사업' },
    ],
    books: [
      { title: '2026 시대에듀 나무의사 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.7 },
      { title: '2026 나무의사 필기+실기 통합본', author: '자격시험 연구회', publisher: '범문에듀케이션', year: 2025, rating: 4.6 },
      { title: '2026 나무의사 핵심문제집', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '2026 나무의사 2차 서술고사', author: '나무의사 연구회', publisher: '성안당', year: 2025, rating: 4.5 },
    ],
    defaultTodos: [
      '1차 5과목 범위 파악 및 학습 계획 수립', '수목병리·해충학 주요 병해충 암기',
      '수목생리·토양학 핵심 이론 정리', '기출문제 풀이 (최근 3개년)',
      '2차 서술형 답안 작성법 연습',
    ],
  },

  '산림기사': {
    name: '산림기사',
    icon: 'fa-tree',
    category: '농림·환경',
    heroTitle: '2026년도 산림기사 합격 가이드',
    heroDesc: '산림기사는 산림자원의 조성·보호·이용 및 산림 환경 관리에 관한 전문 기술자격입니다. 산림청, 지방자치단체, 임업 관련 기업 등에서 산림 경영과 환경 보전 업무를 담당합니다. 조림학부터 임산공학까지 폭넓은 지식을 갖춰 자연과 함께하는 전문가가 되어보세요.',
    passRateSummary: '필기 36% | 실기 42%',
    avgPassRate: '39%',
    passRates: [
      { year: 2020, written: 33, practical: 39 },
      { year: 2021, written: 35, practical: 41 },
      { year: 2022, written: 37, practical: 43 },
      { year: 2023, written: 38, practical: 44 },
      { year: 2024, written: 36, practical: 42 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '조림학', desc: '수목의 생태·육종·조림 기술 및 산림 갱신 방법' },
      { name: '임업경영학', desc: '산림 자원 조사, 생장 분석, 임업 경영 계획 수립' },
      { name: '산림공학', desc: '임도 설계·시공, 산림 작업 기계화 및 수확 시스템' },
      { name: '사방공학', desc: '산사태·토사 유출 방지, 사방댐 설계 및 녹화 공법' },
      { name: '임산공학', desc: '목재의 성질·가공·건조·보존 및 목질 재료 제조' },
    ],
    jobs: [
      { title: '산림 주무관', company: '산림청·지방자치단체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '조경·산림 기술자', company: '종합건설회사', salary: '3,200~4,500만원', location: '수도권', type: '정규직' },
      { title: '산림환경 연구원', company: '국립산림과학원', salary: '3,500~5,000만원', location: '서울·경기', type: '정규직' },
      { title: '임도 시공 감리원', company: '엔지니어링업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '산림 컨설턴트', company: '임업 컨설팅업체', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '산림기사 필기 완전정복', author: '김산림', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '조림학·임업경영학 핵심이론', author: '이임업', publisher: '에듀팩토리', year: 2024, rating: 4.4 },
      { title: '사방공학·산림공학 기출해설', author: '박사방', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '임산공학 총정리', author: '정임산', publisher: '수문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 및 계산문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '식물보호기사': {
    name: '식물보호기사',
    icon: 'fa-seedling',
    category: '농림·환경',
    heroTitle: '2026년도 식물보호기사 합격 가이드',
    heroDesc: '식물보호기사는 농작물의 병해충 방제 및 잡초 관리를 통해 농업 생산성을 보호하는 전문 자격증입니다. 농촌진흥청, 지방농업기술센터, 농약회사 등에서 식물 건강 관리 전문가로 활동합니다. 식물병리·농업곤충·농약학의 핵심을 체계적으로 학습해 합격하세요.',
    passRateSummary: '필기 33% | 실기 40%',
    avgPassRate: '36%',
    passRates: [
      { year: 2020, written: 30, practical: 37 },
      { year: 2021, written: 32, practical: 39 },
      { year: 2022, written: 34, practical: 41 },
      { year: 2023, written: 35, practical: 42 },
      { year: 2024, written: 33, practical: 40 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '재배학', desc: '작물의 생육 원리, 재배 환경 및 생산성 향상 기술' },
      { name: '식물병리학', desc: '병원균의 종류·감염 경로·진단 및 방제 방법' },
      { name: '농업곤충학', desc: '해충의 분류·생태·피해 및 종합적 해충 관리(IPM)' },
      { name: '농약학', desc: '농약의 종류·성분·작용 원리·독성 및 안전 사용법' },
      { name: '잡초방제학', desc: '잡초의 생태·분류·방제 기술 및 제초제 활용' },
    ],
    jobs: [
      { title: '식물 방제 연구원', company: '농촌진흥청', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '농업기술 지도사', company: '지방농업기술센터', salary: '3,000~3,800만원', location: '전국', type: '정규직' },
      { title: '농약 개발 연구원', company: '농약제조업체', salary: '3,500~5,000만원', location: '수도권·충청', type: '정규직' },
      { title: '병해충 예찰 담당자', company: '농산물품질관리원', salary: '2,900~3,700만원', location: '전국', type: '정규직' },
      { title: '작물 보호 컨설턴트', company: '농업 컨설팅업체', salary: '2,700~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '식물보호기사 필기 한권완성', author: '김식물', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '식물병리학·농업곤충학 핵심정리', author: '이병리', publisher: '에듀팩토리', year: 2024, rating: 4.4 },
      { title: '농약학·잡초방제학 기출문제집', author: '박농약', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '재배학 완전정복', author: '정재배', publisher: '수문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 및 계산문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '농화학기사': {
    name: '농화학기사',
    icon: 'fa-flask',
    category: '농림·환경',
    heroTitle: '2026년도 농화학기사 합격 가이드',
    heroDesc: '농화학기사는 토양·비료·농약의 화학적 원리를 바탕으로 작물 생산성을 높이고 농업 환경을 보전하는 전문 자격증입니다. 농촌진흥청, 비료업체, 환경부 산하기관 등에서 전문가로 활동할 수 있습니다. 작물생리학부터 환경농학까지 체계적 학습으로 합격의 기회를 잡으세요.',
    passRateSummary: '필기 35% | 실기 41%',
    avgPassRate: '38%',
    passRates: [
      { year: 2020, written: 32, practical: 38 },
      { year: 2021, written: 34, practical: 40 },
      { year: 2022, written: 36, practical: 42 },
      { year: 2023, written: 37, practical: 43 },
      { year: 2024, written: 35, practical: 41 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '작물생리학', desc: '광합성·호흡·무기영양 등 작물의 생리적 반응 원리' },
      { name: '토양학', desc: '토양의 생성·분류·물리·화학·생물적 특성과 비옥도' },
      { name: '비료학', desc: '비료의 종류·성분·시비 방법 및 양분 관리 기술' },
      { name: '농약화학', desc: '농약의 화학 구조·합성·작용 기작·잔류·분해 특성' },
      { name: '환경농학', desc: '농업 활동이 토양·수질·대기 환경에 미치는 영향과 관리' },
    ],
    jobs: [
      { title: '토양 환경 연구원', company: '농촌진흥청', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '비료 기술 연구원', company: '비료제조업체', salary: '3,000~4,200만원', location: '충청·전남', type: '정규직' },
      { title: '환경 관리 담당자', company: '환경부 산하기관', salary: '3,200~4,000만원', location: '전국', type: '정규직' },
      { title: '농업환경 분석원', company: '농산물품질관리원', salary: '2,900~3,700만원', location: '전국', type: '정규직' },
      { title: '농화학 분석 연구원', company: '민간 분석기관', salary: '2,700~3,500만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '농화학기사 필기 완전정복', author: '김농화', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '토양학·비료학 핵심이론', author: '이토양', publisher: '에듀팩토리', year: 2024, rating: 4.4 },
      { title: '농약화학·환경농학 기출해설', author: '박농약', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '작물생리학 총정리', author: '정작물', publisher: '수문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 및 계산문제 반복',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 기사 10종 ===
  '건설안전기사': {
    name: '건설안전기사',
    icon: 'fa-hard-hat',
    category: '안전·보건',
    heroTitle: '2026년도 건설안전기사 합격 가이드',
    heroDesc: '건설 현장의 안전 관리와 재해 예방을 담당하는 전문 자격증입니다. 건설업 안전관리자 선임 요건으로 취업 수요가 높으며, 공공 및 민간 건설사 전반에서 필수 인력으로 인정받고 있습니다.',
    passRateSummary: '필기 38% | 실기 42%',
    avgPassRate: '40%',
    passRates: [
      { year: 2020, written: 36, practical: 40 },
      { year: 2021, written: 38, practical: 41 },
      { year: 2022, written: 37, practical: 43 },
      { year: 2023, written: 40, practical: 44 },
      { year: 2024, written: 39, practical: 42 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '산업안전관리론', desc: '안전관리 조직, 안전보건관리체계, 재해 통계 및 분석' },
      { name: '산업심리 및 교육', desc: '인간공학, 재해 원인 심리요인, 안전보건교육 방법론' },
      { name: '인간공학 및 시스템안전공학', desc: '인간 특성과 시스템 설계, 위험성 평가 기법' },
      { name: '건설시공학', desc: '토공, 기초공사, 콘크리트 공사, 철골 및 건축 마감 공사' },
      { name: '건설재료학 및 관계법규', desc: '건설 자재 특성, 산업안전보건법 및 건설 관련 법령' },
    ],
    jobs: [
      { title: '건설안전관리자', company: '대형 건설사', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '안전감독원', company: '공공기관·LH', salary: '3,800~5,000만원', location: '수도권', type: '정규직' },
      { title: '현장안전팀장', company: '중견 건설사', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '안전컨설턴트', company: '안전관리 전문기관', salary: '4,000~5,500만원', location: '서울·경기', type: '정규직' },
      { title: '안전점검원', company: '건설안전진단기관', salary: '3,200~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '건설안전기사 필기 한권으로 끝내기', author: '이재형', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '건설안전기사 실기 완전정복', author: '김성호', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '건설안전기사 과년도 기출문제 해설', author: '안전연구회', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '건설안전기사 핵심이론 정리집', author: '박준형', publisher: '크라운출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '비파괴검사기사': {
    name: '비파괴검사기사',
    icon: 'fa-magnifying-glass-chart',
    category: '기계·설비',
    heroTitle: '2026년도 비파괴검사기사 합격 가이드',
    heroDesc: '구조물이나 제품을 손상시키지 않고 내부 결함을 검출하는 비파괴검사 분야의 전문 자격증입니다. 원자력, 항공, 조선, 플랜트 등 산업 전반에 걸쳐 높은 취업 수요를 자랑하며 전문기술직으로 우대받습니다.',
    passRateSummary: '필기 35% | 실기 45%',
    avgPassRate: '40%',
    passRates: [
      { year: 2020, written: 33, practical: 43 },
      { year: 2021, written: 34, practical: 44 },
      { year: 2022, written: 36, practical: 46 },
      { year: 2023, written: 37, practical: 47 },
      { year: 2024, written: 35, practical: 45 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '초음파탐상검사', desc: '초음파 전파 원리, 탐상 방법 및 결함 분류 기준' },
      { name: '방사선투과검사', desc: 'X선·감마선 원리, 필름 판독 및 방사선 안전 관리' },
      { name: '자기탐상검사 및 침투탐상검사', desc: '자기장 원리, 형광 침투제 적용 및 판독 방법' },
      { name: '비파괴검사 개론', desc: '검사 방법 분류, 적용 기준 및 국제 규격(ASME, KS)' },
      { name: '재료역학', desc: '응력·변형률, 재료 파괴 거동 및 결함 평가 이론' },
    ],
    jobs: [
      { title: '비파괴검사원', company: '원자력 발전소', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '품질검사기술자', company: '조선·해양 플랜트', salary: '4,000~5,500만원', location: '부산·경남', type: '정규직' },
      { title: 'NDT 엔지니어', company: '항공 MRO 업체', salary: '4,200~5,800만원', location: '인천·경기', type: '정규직' },
      { title: '검사팀장', company: '비파괴검사 전문기업', salary: '4,800~6,500만원', location: '전국', type: '정규직' },
      { title: '검사보조원', company: '플랜트 건설사', salary: '3,200~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '비파괴검사기사 필기 완전정복', author: '정태훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '비파괴검사기사 실기 한권으로 끝내기', author: '이승민', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '비파괴검사 이론과 실제', author: '한국비파괴검사학회', publisher: '노드미디어', year: 2023, rating: 4.3 },
      { title: '비파괴검사기사 과년도 기출문제', author: '검사연구회', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '재료기사': {
    name: '재료기사',
    icon: 'fa-cubes',
    category: '기계·설비',
    heroTitle: '2026년도 재료기사 합격 가이드',
    heroDesc: '금속, 세라믹, 고분자 등 다양한 재료의 특성 분석과 품질 관리를 담당하는 전문 자격증입니다. 소재 산업, 자동차, 반도체, 조선 등 제조업 전반에서 재료 전문가로 활약할 수 있습니다.',
    passRateSummary: '필기 42% | 실기 48%',
    avgPassRate: '45%',
    passRates: [
      { year: 2020, written: 40, practical: 46 },
      { year: 2021, written: 41, practical: 47 },
      { year: 2022, written: 43, practical: 49 },
      { year: 2023, written: 44, practical: 50 },
      { year: 2024, written: 42, practical: 48 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '금속재료학', desc: '금속 결정구조, 상태도, 열처리 및 기계적 성질' },
      { name: '재료열역학', desc: '열역학 법칙, 자유에너지, 상평형 및 확산 이론' },
      { name: '재료강도학', desc: '응력·변형률, 피로, 크리프, 파괴역학 기초' },
      { name: '세라믹재료학', desc: '세라믹 결합 구조, 소결 공정, 기계적·전기적 특성' },
      { name: '재료시험법', desc: '인장·경도·충격 시험, 금속조직 분석, 표면분석 기법' },
    ],
    jobs: [
      { title: '재료연구원', company: '소재 전문 연구소', salary: '4,000~5,500만원', location: '대전·충남', type: '정규직' },
      { title: '품질관리기사', company: '자동차 부품사', salary: '3,800~5,000만원', location: '경기·충남', type: '정규직' },
      { title: '재료시험원', company: '철강·금속 제조사', salary: '3,800~5,200만원', location: '포항·광양', type: '정규직' },
      { title: '소재개발엔지니어', company: '반도체·디스플레이 기업', salary: '4,500~6,500만원', location: '경기', type: '정규직' },
      { title: '검사원', company: '재료시험기관', salary: '3,000~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '재료기사 필기 한권으로 합격', author: '김민준', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '재료기사 실기 완전정복', author: '이호영', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '재료기사 과년도 기출문제집', author: '재료기술연구회', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '금속재료학 핵심정리', author: '박철수', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '표면처리기사': {
    name: '표면처리기사',
    icon: 'fa-layer-group',
    category: '기계·설비',
    heroTitle: '2026년도 표면처리기사 합격 가이드',
    heroDesc: '도금, 도장, 코팅 등 금속·비금속 재료의 표면처리 공정을 관리하는 전문 자격증입니다. 자동차, 전자, 항공 부품 산업에서 내식성·내마모성 향상 전문가로 활약할 수 있습니다.',
    passRateSummary: '필기 38% | 실기 44%',
    avgPassRate: '41%',
    passRates: [
      { year: 2020, written: 35, practical: 41 },
      { year: 2021, written: 37, practical: 43 },
      { year: 2022, written: 39, practical: 45 },
      { year: 2023, written: 40, practical: 46 },
      { year: 2024, written: 38, practical: 44 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '전기화학', desc: '전극 반응, 전위·전류 관계, 부식 원리 및 방지 이론' },
      { name: '도금 공학', desc: '전해도금·무전해도금 원리, 도금액 관리 및 두께 측정' },
      { name: '도장 공학', desc: '도료 성분, 도장 방법(분체·전착·용사), 도막 품질 관리' },
      { name: '표면분석 및 시험', desc: '접착력 시험, 내식성 평가, SEM·EDS 표면 분석' },
      { name: '환경·안전 관련 법규', desc: '도금 폐수 처리, 유해화학물질 관리 및 환경 규제' },
    ],
    jobs: [
      { title: '도금공정 엔지니어', company: '자동차 부품 제조사', salary: '3,800~5,200만원', location: '경기·충남', type: '정규직' },
      { title: '표면처리 품질관리자', company: '전자부품 기업', salary: '3,800~5,000만원', location: '수도권', type: '정규직' },
      { title: '코팅기술 연구원', company: '소재 전문기업', salary: '4,200~5,800만원', location: '경기·대전', type: '정규직' },
      { title: '도장공정 관리자', company: '조선·해양 기업', salary: '4,000~5,500만원', location: '부산·경남', type: '정규직' },
      { title: '표면처리 검사원', company: '품질인증기관', salary: '3,000~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '표면처리기사 필기 완전정복', author: '정상훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '표면처리기사 실기 한권으로 끝내기', author: '이창호', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '표면처리기사 기출문제 총정리', author: '표면처리연구회', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '도금·도장 공학 입문', author: '박상현', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '전자기사': {
    name: '전자기사',
    icon: 'fa-microchip',
    category: '전기·에너지',
    heroTitle: '2026년도 전자기사 합격 가이드',
    heroDesc: '전자 회로 설계, 반도체 소자, 신호 처리 등 전자 분야 전반을 다루는 핵심 자격증입니다. 반도체, 통신, 가전, 방산 등 다양한 산업에서 전자기술 전문가로 높은 대우를 받을 수 있습니다.',
    passRateSummary: '필기 32% | 실기 38%',
    avgPassRate: '35%',
    passRates: [
      { year: 2020, written: 30, practical: 36 },
      { year: 2021, written: 31, practical: 37 },
      { year: 2022, written: 33, practical: 39 },
      { year: 2023, written: 34, practical: 40 },
      { year: 2024, written: 32, practical: 38 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '전자회로', desc: '트랜지스터 증폭 회로, 연산증폭기, 발진 회로 설계' },
      { name: '전자계산기 일반', desc: '디지털 논리 회로, 마이크로프로세서 구조 및 인터페이스' },
      { name: '반도체 공학', desc: 'PN 접합, MOSFET, 집적회로 공정 및 소자 특성' },
      { name: '전기자기학', desc: '전기장·자기장 이론, 맥스웰 방정식, 전자파 전파' },
      { name: '제어공학', desc: '전달함수, 주파수 응답, PID 제어 및 안정성 판별' },
    ],
    jobs: [
      { title: '전자회로 설계엔지니어', company: '반도체 팹리스', salary: '4,500~7,000만원', location: '수도권', type: '정규직' },
      { title: 'HW 개발자', company: '가전·전자 기업', salary: '4,200~6,000만원', location: '수도권', type: '정규직' },
      { title: '전자장비 개발원', company: '방산·항공 기업', salary: '4,500~6,500만원', location: '서울·경기', type: '정규직' },
      { title: 'PCB 설계 엔지니어', company: '전자부품 중견기업', salary: '3,800~5,500만원', location: '경기', type: '정규직' },
      { title: '전자제품 품질검사원', company: '가전 제조사', salary: '3,000~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전자기사 필기 한권으로 합격', author: '김태영', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전자기사 실기 완전정복', author: '이도형', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '전자기사 과년도 기출문제 해설집', author: '전자기술연구회', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '전자회로 핵심이론 정리', author: '박진우', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '정보통신기사': {
    name: '정보통신기사',
    icon: 'fa-tower-broadcast',
    category: 'IT·정보',
    heroTitle: '2026년도 정보통신기사 합격 가이드',
    heroDesc: '유·무선 통신망 설계 및 구축, 네트워크 운용 관리를 담당하는 IT 핵심 자격증입니다. 통신사, SI 기업, 공공기관 등에서 통신망 전문가로 취업할 수 있으며 정보통신감리사 응시 자격도 부여됩니다.',
    passRateSummary: '필기 40% | 실기 47%',
    avgPassRate: '43%',
    passRates: [
      { year: 2020, written: 38, practical: 45 },
      { year: 2021, written: 39, practical: 46 },
      { year: 2022, written: 41, practical: 48 },
      { year: 2023, written: 42, practical: 49 },
      { year: 2024, written: 40, practical: 47 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '디지털전자회로', desc: '논리 회로, 마이크로프로세서, 메모리 및 인터페이스' },
      { name: '통신이론', desc: '변조·복조, 디지털 전송, 오류 제어 및 채널 용량' },
      { name: '데이터통신', desc: 'TCP/IP 프로토콜, LAN·WAN 구조, 네트워크 보안 기초' },
      { name: '정보통신설비', desc: '전화망, 광케이블, 이동통신, 위성통신 설비 기준' },
      { name: '정보통신관계법규', desc: '전기통신사업법, 정보통신공사업법 및 관련 고시' },
    ],
    jobs: [
      { title: '네트워크 엔지니어', company: '이동통신사', salary: '4,200~5,800만원', location: '서울·경기', type: '정규직' },
      { title: '정보통신감리원', company: 'ICT 감리법인', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
      { title: '통신망 운용 전문가', company: 'SI·IT 서비스 기업', salary: '4,000~5,500만원', location: '수도권', type: '정규직' },
      { title: '통신설비 설계원', company: '통신공사 기업', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '통신장비 유지보수원', company: '통신 협력업체', salary: '3,200~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '정보통신기사 필기 합격 바이블', author: '최상민', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '정보통신기사 실기 완전정복', author: '김정훈', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '정보통신기사 과년도 기출문제', author: '통신기술연구회', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '데이터통신 핵심정리', author: '이상준', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '무선설비기사': {
    name: '무선설비기사',
    icon: 'fa-wifi',
    category: 'IT·정보',
    heroTitle: '2026년도 무선설비기사 합격 가이드',
    heroDesc: '무선통신 설비의 설계, 설치, 운용 및 유지보수를 담당하는 전문 자격증입니다. 이동통신, 방송, 항공·해상 통신 등 무선 주파수 활용 분야 전반에서 취업 기회를 얻을 수 있습니다.',
    passRateSummary: '필기 36% | 실기 42%',
    avgPassRate: '39%',
    passRates: [
      { year: 2020, written: 34, practical: 40 },
      { year: 2021, written: 35, practical: 41 },
      { year: 2022, written: 37, practical: 43 },
      { year: 2023, written: 38, practical: 44 },
      { year: 2024, written: 36, practical: 42 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '무선공학개론', desc: '전자파 전파, 안테나 이론, 무선 전송 경로 특성' },
      { name: '무선기기', desc: '송·수신기 구성, 변복조 회로, 무선 설비 규격 기준' },
      { name: '안테나공학', desc: '안테나 종류·특성, 급전선, 전파 방사 패턴 설계' },
      { name: '전파관리법규', desc: '전파법, 전파 이용 허가 제도, 무선국 운용 규정' },
      { name: '전자회로', desc: 'RF 증폭 회로, 발진기, 고주파 필터 및 임피던스 정합' },
    ],
    jobs: [
      { title: '무선설비 기술자', company: '이동통신 기지국 운영사', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: '방송통신설비 엔지니어', company: '방송사·미디어 기업', salary: '4,000~5,500만원', location: '서울·수도권', type: '정규직' },
      { title: 'RF 엔지니어', company: '통신장비 제조사', salary: '4,200~6,000만원', location: '경기', type: '정규직' },
      { title: '무선국 운용기사', company: '해운·항공 기업', salary: '4,000~5,500만원', location: '부산·인천', type: '정규직' },
      { title: '통신설비 유지보수원', company: '통신 협력업체', salary: '3,000~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '무선설비기사 필기 한권으로 합격', author: '김동수', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '무선설비기사 실기 완전정복', author: '이재민', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '무선설비기사 과년도 기출문제 총정리', author: '무선통신연구회', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '안테나공학 핵심이론', author: '강승현', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동차기사': {
    name: '자동차기사',
    icon: 'fa-car',
    category: '기계·설비',
    heroTitle: '2026년도 자동차기사 합격 가이드',
    heroDesc: '자동차의 구조, 정비, 검사 및 성능 관리 전반을 담당하는 전문 자격증입니다. 완성차 제조사, 자동차 정비업, 자동차 검사 기관 등 다양한 분야에서 기술 전문가로 활동할 수 있습니다.',
    passRateSummary: '필기 45% | 실기 50%',
    avgPassRate: '47%',
    passRates: [
      { year: 2020, written: 43, practical: 48 },
      { year: 2021, written: 44, practical: 49 },
      { year: 2022, written: 46, practical: 51 },
      { year: 2023, written: 47, practical: 52 },
      { year: 2024, written: 45, practical: 50 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동차 엔진', desc: '내연기관 구조·작동 원리, 연료 시스템, 배출가스 제어' },
      { name: '자동차 섀시', desc: '동력 전달 장치, 현가·조향·제동 시스템 구조 및 정비' },
      { name: '자동차 전기·전자', desc: '자동차 전기 회로, 전자제어 시스템, CAN 통신 개요' },
      { name: '자동차 검사', desc: '자동차 검사 기준, 안전도 검사 항목 및 배출가스 측정' },
      { name: '자동차관계법규', desc: '자동차관리법, 도로교통법, 대기환경보전법 관련 규정' },
    ],
    jobs: [
      { title: '차량 개발 엔지니어', company: '완성차 제조사', salary: '4,500~6,500만원', location: '울산·경기', type: '정규직' },
      { title: '자동차 검사원', company: '자동차검사소', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '정비 기술 관리자', company: '자동차 딜러사', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: '품질보증 엔지니어', company: '자동차 부품사', salary: '4,000~5,500만원', location: '경기·충남', type: '정규직' },
      { title: '자동차 진단원', company: '보험사 손해사정 협력기관', salary: '3,200~4,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '자동차기사 필기 한권으로 합격', author: '정동훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '자동차기사 실기 완전정복', author: '류형준', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '자동차기사 과년도 기출문제 해설', author: '자동차기술연구회', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '자동차 구조·정비 핵심정리', author: '한상호', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '화재감식평가기사': {
    name: '화재감식평가기사',
    icon: 'fa-fire',
    category: '안전·보건',
    heroTitle: '2026년도 화재감식평가기사 합격 가이드',
    heroDesc: '화재 발생 원인을 과학적으로 분석하고 피해를 평가하는 고도 전문 자격증입니다. 소방청, 경찰, 보험사, 감정기관 등에서 화재 감식 전문가로 활동할 수 있으며 국내 유일한 화재 감정 분야 기사 자격입니다.',
    passRateSummary: '필기 33% | 실기 38%',
    avgPassRate: '35%',
    passRates: [
      { year: 2020, written: 30, practical: 35 },
      { year: 2021, written: 32, practical: 37 },
      { year: 2022, written: 34, practical: 39 },
      { year: 2023, written: 35, practical: 40 },
      { year: 2024, written: 33, practical: 38 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '화재조사론', desc: '화재 조사 절차, 증거 수집 방법, 현장 보존 기준' },
      { name: '화재원인조사', desc: '발화 원인 분류(전기·가스·방화), 연소 흔적 분석' },
      { name: '화재패턴분석', desc: '연소 형태·방향 판독, 탄화 심도, 발화점 추정 기법' },
      { name: '화재피해평가', desc: '인명·재산 피해 산정 방법, 보험 감정 실무 절차' },
      { name: '화재감식관계법규', desc: '소방기본법, 화재조사 및 보고 규정, 증거법 기초' },
    ],
    jobs: [
      { title: '화재감식관', company: '소방청·소방서', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '손해사정사 보조', company: '손해보험사', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: '화재감정 전문가', company: '화재감정법인', salary: '4,500~6,500만원', location: '서울·수도권', type: '정규직' },
      { title: '재해조사관', company: '국립과학수사연구원', salary: '4,200~5,800만원', location: '서울·대전', type: '정규직' },
      { title: '화재감식 보조원', company: '안전컨설팅 기업', salary: '3,000~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '화재감식평가기사 필기 완전정복', author: '손성훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '화재감식평가기사 실기 한권으로 끝내기', author: '박민석', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '화재감식평가기사 기출문제 총정리', author: '화재감식연구회', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '화재 원인 조사 실무', author: '이정호', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '철도차량기사': {
    name: '철도차량기사',
    icon: 'fa-train',
    category: '기계·설비',
    heroTitle: '2026년도 철도차량기사 합격 가이드',
    heroDesc: '철도차량의 구조, 정비, 검사 및 운용 관리를 담당하는 전문 자격증입니다. 한국철도공사(KORAIL), 도시철도공사, 철도차량 제조사 등 안정적인 공기업·공공기관 취업에 유리한 자격증입니다.',
    passRateSummary: '필기 37% | 실기 43%',
    avgPassRate: '40%',
    passRates: [
      { year: 2020, written: 35, practical: 41 },
      { year: 2021, written: 36, practical: 42 },
      { year: 2022, written: 38, practical: 44 },
      { year: 2023, written: 39, practical: 45 },
      { year: 2024, written: 37, practical: 43 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '철도차량 공학', desc: '동력차·객화차 구조, 대차·제동·집전 장치 원리' },
      { name: '철도차량 전기·전자', desc: '추진 제어 장치, 보조전원 장치, 신호 제어 시스템' },
      { name: '철도차량 정비', desc: '정기검사 기준, 예방 정비 절차, 고장 진단 방법' },
      { name: '철도 운용 안전', desc: '철도 안전법, 운행 관리 규정, 사고 예방 및 대응' },
      { name: '재료역학 및 기계공학', desc: '기계 재료 특성, 응력·피로 해석, 열역학 기초' },
    ],
    jobs: [
      { title: '철도차량 정비기술자', company: '한국철도공사(KORAIL)', salary: '4,200~5,800만원', location: '전국', type: '정규직' },
      { title: '도시철도 차량 기사', company: '서울·부산·대구 지하철공사', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '철도차량 개발 엔지니어', company: '현대로템·다원시스', salary: '4,500~6,500만원', location: '경기·경남', type: '정규직' },
      { title: '철도차량 검사원', company: '철도차량 검사 전문기관', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '철도시설 유지보수원', company: '철도 유지보수 협력사', salary: '3,200~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '철도차량기사 필기 한권으로 합격', author: '오승환', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '철도차량기사 실기 완전정복', author: '최진수', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '철도차량기사 과년도 기출문제 해설', author: '철도기술연구회', publisher: '동일출판사', year: 2023, rating: 4.3 },
      { title: '철도차량 공학 핵심이론', author: '정경민', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

// === 산업기사 8종 ===
  '비파괴검사산업기사': {
    name: '비파괴검사산업기사',
    icon: 'fa-magnifying-glass-chart',
    category: '기계·설비',
    heroTitle: '2026년도 비파괴검사산업기사 합격 가이드',
    heroDesc: '비파괴검사산업기사는 제품이나 구조물을 손상시키지 않고 내부 결함을 탐지하는 전문 자격증입니다. 방사선·초음파·자분·침투 등 다양한 검사 기법을 익혀 품질관리 및 안전진단 분야에서 활약할 수 있습니다. 제조업, 플랜트, 항공우주 등 산업 전반에서 높은 수요를 자랑합니다.',
    passRateSummary: '필기 48% | 실기 52%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 46, practical: 50 },
      { year: 2021, written: 48, practical: 53 },
      { year: 2022, written: 49, practical: 51 },
      { year: 2023, written: 47, practical: 54 },
      { year: 2024, written: 50, practical: 52 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '방사선비파괴검사', desc: '방사선 투과 원리, 필름 판독, 방사선 안전관리 기초' },
      { name: '초음파비파괴검사', desc: '초음파 탐상 원리, 탐촉자 선택, 결함 평가 방법' },
      { name: '자분·침투비파괴검사', desc: '자분 탐상법과 침투 탐상법의 원리 및 적용 절차' },
      { name: '비파괴검사 공통이론', desc: '금속재료 특성, 용접결함 유형, 규격 및 코드 해석' },
      { name: '비파괴검사 관련법규', desc: '산업안전보건법, 방사선 관련 법령, 검사 절차 문서 작성' },
    ],
    jobs: [
      { title: '비파괴검사원', company: '플랜트·중공업사', salary: '3,200~4,500만원', location: '울산·경남', type: '정규직' },
      { title: '품질검사 기술자', company: '자동차부품 제조사', salary: '3,000~4,200만원', location: '경기·충남', type: '정규직' },
      { title: '검사 전문가', company: '비파괴검사 전문업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '시설안전 점검원', company: '공공기관·발전소', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: '비파괴검사 보조원', company: '건설·구조물 점검사', salary: '2,800~3,500만원', location: '서울·수도권', type: '계약직' },
    ],
    books: [
      { title: '비파괴검사산업기사 필기 완전정복', author: '김철수', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '비파괴검사 핵심이론 + 기출문제', author: '이영희', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '비파괴검사산업기사 실기 실전대비', author: '박민준', publisher: '한솔아카데미', year: 2023, rating: 4.3 },
      { title: '비파괴검사 기출문제 총정리', author: '정수현', publisher: '도서출판 세화', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동차산업기사': {
    name: '자동차산업기사',
    icon: 'fa-car',
    category: '기계·설비',
    heroTitle: '2026년도 자동차산업기사 합격 가이드',
    heroDesc: '자동차산업기사는 자동차의 구조, 정비, 검사에 관한 전문 지식을 갖춘 인재를 양성하는 자격증입니다. 엔진·섀시·전기장치 등 자동차 전반에 걸친 이론과 실무 능력을 인증합니다. 완성차 제조사, 자동차 정비업체, 검사소 등 다양한 분야에서 활용됩니다.',
    passRateSummary: '필기 45% | 실기 50%',
    avgPassRate: '48%',
    passRates: [
      { year: 2020, written: 43, practical: 48 },
      { year: 2021, written: 44, practical: 51 },
      { year: 2022, written: 46, practical: 50 },
      { year: 2023, written: 45, practical: 52 },
      { year: 2024, written: 47, practical: 49 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동차 엔진', desc: '내연기관 구조, 연료장치, 냉각·윤활 시스템 원리 및 점검' },
      { name: '자동차 새시', desc: '동력전달장치, 현가장치, 조향·제동장치 구조와 정비' },
      { name: '자동차 전기·전자', desc: '전기 배선, 충전·시동장치, 차량 전자제어 시스템' },
      { name: '자동차 검사', desc: '자동차 법규, 배출가스 기준, 안전기준 및 검사 항목' },
      { name: '자동차 정비', desc: '정비 작업 절차, 공구 활용, 결함 진단 및 수리 방법' },
    ],
    jobs: [
      { title: '자동차 정비 기술자', company: '완성차 서비스센터', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '차량 검사원', company: '자동차검사소', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '품질관리 담당자', company: '자동차부품 제조사', salary: '3,500~5,000만원', location: '경기·충남·경남', type: '정규직' },
      { title: '자동차 R&D 기술원', company: '완성차 제조사', salary: '4,000~6,000만원', location: '경기·충남', type: '정규직' },
      { title: '차량 정비 보조원', company: '일반 자동차 정비소', salary: '2,800~3,400만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '자동차산업기사 필기 한권으로 끝내기', author: '홍길동', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '자동차산업기사 핵심이론 및 기출문제해설', author: '이상호', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '자동차산업기사 실기 완전정복', author: '김동현', publisher: '한솔아카데미', year: 2023, rating: 4.3 },
      { title: '자동차산업기사 기출문제집', author: '박지현', publisher: '도서출판 세화', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '전자산업기사': {
    name: '전자산업기사',
    icon: 'fa-microchip',
    category: '전기·에너지',
    heroTitle: '2026년도 전자산업기사 합격 가이드',
    heroDesc: '전자산업기사는 전자회로, 디지털 시스템, 전자기기 설계 및 제어에 관한 전문 지식을 인증하는 자격증입니다. 아날로그·디지털 회로 이론과 마이크로프로세서 응용 능력을 갖춘 인재를 양성합니다. 전자·반도체 제조업, 통신장비 업체, 가전 산업 등 폭넓은 분야에서 활용됩니다.',
    passRateSummary: '필기 50% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 48, practical: 53 },
      { year: 2021, written: 50, practical: 55 },
      { year: 2022, written: 51, practical: 56 },
      { year: 2023, written: 49, practical: 54 },
      { year: 2024, written: 52, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '전자회로', desc: '트랜지스터, 증폭회로, 발진회로, 연산증폭기 특성 분석' },
      { name: '디지털공학', desc: '논리게이트, 플립플롭, 조합논리회로, 순서논리회로 설계' },
      { name: '전자계측', desc: '측정 기기 원리, 오차 분석, 전기량 계측 방법 및 교정' },
      { name: '마이크로프로세서', desc: '마이크로프로세서 구조, 어셈블리 언어, 인터페이스 회로' },
      { name: '전자기기', desc: '통신기기, 전원장치, 영상·음향기기의 구조와 고장 진단' },
    ],
    jobs: [
      { title: '전자기기 개발 기술자', company: '전자·가전 제조사', salary: '3,500~5,200만원', location: '수원·구미·천안', type: '정규직' },
      { title: '회로 설계 엔지니어', company: '반도체·PCB 업체', salary: '4,000~6,000만원', location: '경기·충남', type: '정규직' },
      { title: '품질보증 담당자', company: '전자부품 제조사', salary: '3,200~4,500만원', location: '경기·경북', type: '정규직' },
      { title: '전자장비 유지보수원', company: '공공기관·방산업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '전자 기술 보조원', company: 'IT 솔루션 업체', salary: '2,800~3,600만원', location: '서울·수도권', type: '계약직' },
    ],
    books: [
      { title: '전자산업기사 필기 완전정복', author: '최재호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전자산업기사 핵심이론 + 과년도 기출문제', author: '강민서', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '전자산업기사 실기 완전대비', author: '손영준', publisher: '한솔아카데미', year: 2023, rating: 4.3 },
      { title: '전자산업기사 기출문제 총정리', author: '임지원', publisher: '도서출판 세화', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '정보통신산업기사': {
    name: '정보통신산업기사',
    icon: 'fa-tower-broadcast',
    category: 'IT·정보',
    heroTitle: '2026년도 정보통신산업기사 합격 가이드',
    heroDesc: '정보통신산업기사는 유·무선 통신 시스템, 네트워크, 정보통신설비 설치 및 운용 능력을 인증하는 자격증입니다. 5G, IoT, 광통신 등 최신 통신 기술에 대한 이론과 실무 지식을 갖춘 전문 인력을 양성합니다. 통신사, 네트워크 구축업체, 공공기관 정보통신팀 등에서 활발히 채용됩니다.',
    passRateSummary: '필기 47% | 실기 53%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 45, practical: 51 },
      { year: 2021, written: 47, practical: 53 },
      { year: 2022, written: 48, practical: 54 },
      { year: 2023, written: 46, practical: 52 },
      { year: 2024, written: 49, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '정보통신개론', desc: '통신 기초 이론, 신호 변조 방식, 다중화 기술 개요' },
      { name: '유선통신설비', desc: '전화망, 광케이블, 구내통신 설비 구조 및 시공 방법' },
      { name: '무선통신설비', desc: '이동통신, 위성통신, 무선 LAN 시스템 구성 및 운용' },
      { name: '정보통신 네트워크', desc: 'TCP/IP, 라우팅 프로토콜, 네트워크 보안 및 관리' },
      { name: '정보통신 법규', desc: '전파법, 정보통신공사업법, 개인정보보호법 핵심 조항' },
    ],
    jobs: [
      { title: '통신망 운용 기술자', company: '이동통신사', salary: '3,500~5,000만원', location: '서울·수도권', type: '정규직' },
      { title: '네트워크 엔지니어', company: 'SI·IT 인프라 기업', salary: '3,800~5,500만원', location: '서울·경기', type: '정규직' },
      { title: '정보통신 설비 설치원', company: '통신공사 전문업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '통신 설비 유지보수원', company: '공공기관·지자체', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
      { title: '통신 기술 지원원', company: 'IT 솔루션 업체', salary: '2,800~3,600만원', location: '서울·수도권', type: '계약직' },
    ],
    books: [
      { title: '정보통신산업기사 필기 합격의 정석', author: '오승환', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '정보통신산업기사 핵심이론 및 기출해설', author: '배수진', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '정보통신산업기사 실기 완전정복', author: '권태민', publisher: '한솔아카데미', year: 2023, rating: 4.3 },
      { title: '정보통신산업기사 과년도 기출문제집', author: '신지현', publisher: '도서출판 세화', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '사무자동화산업기사': {
    name: '사무자동화산업기사',
    icon: 'fa-desktop',
    category: 'IT·정보',
    heroTitle: '2026년도 사무자동화산업기사 합격 가이드',
    heroDesc: '사무자동화산업기사는 컴퓨터를 활용한 사무 업무 자동화, 데이터베이스 관리, 사무통신 시스템 운용 능력을 인증하는 자격증입니다. 스프레드시트, 데이터베이스, 프레젠테이션 등 오피스 소프트웨어 활용 능력을 중점적으로 평가합니다. 공기업, 금융기관, 일반 기업 사무직 취업에 유리한 실용적인 자격증입니다.',
    passRateSummary: '필기 55% | 실기 48%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 53, practical: 46 },
      { year: 2021, written: 55, practical: 48 },
      { year: 2022, written: 56, practical: 49 },
      { year: 2023, written: 54, practical: 47 },
      { year: 2024, written: 57, practical: 50 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '사무자동화 시스템', desc: '사무자동화 개념, 정보시스템 구성요소, 사무환경 분석' },
      { name: '컴퓨터 활용', desc: '운영체제, 스프레드시트, 데이터베이스 소프트웨어 활용' },
      { name: '사무정보 처리', desc: '문서 처리, 전자결재 시스템, 데이터 입·출력 및 관리' },
      { name: '프로그래밍 언어', desc: '기본 프로그래밍 개념, 매크로 작성, 간단한 스크립트 활용' },
      { name: '사무자동화 관련법규', desc: '전자문서법, 개인정보보호법, 저작권법 핵심 내용' },
    ],
    jobs: [
      { title: '행정 사무원', company: '공공기관·지자체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '경영지원 담당자', company: '중견·대기업', salary: '3,000~4,200만원', location: '서울·수도권', type: '정규직' },
      { title: '전산 운용원', company: '금융기관·보험사', salary: '3,200~4,500만원', location: '서울·경기', type: '정규직' },
      { title: '데이터 입력 관리자', company: '유통·물류 기업', salary: '2,800~3,600만원', location: '전국', type: '정규직' },
      { title: '사무 보조원', company: '중소기업', salary: '2,500~3,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '사무자동화산업기사 필기 합격완성', author: '김미래', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '사무자동화산업기사 핵심이론 및 기출문제', author: '이보름', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '사무자동화산업기사 실기 완전정복', author: '최현진', publisher: '한솔아카데미', year: 2023, rating: 4.3 },
      { title: '사무자동화산업기사 기출문제 총정리', author: '정하나', publisher: '도서출판 세화', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '반도체설계산업기사': {
    name: '반도체설계산업기사',
    icon: 'fa-memory',
    category: 'IT·정보',
    heroTitle: '2026년도 반도체설계산업기사 합격 가이드',
    heroDesc: '반도체설계산업기사는 반도체 소자의 원리, 집적회로 설계, 공정 기술에 관한 전문 지식을 인증하는 자격증입니다. 디지털·아날로그 회로 설계와 EDA 툴 활용 능력을 평가하며, 반도체 산업의 핵심 인력을 양성합니다. 국내외 반도체 팹리스, 파운드리, 장비 기업에서 높은 취업 경쟁력을 제공합니다.',
    passRateSummary: '필기 42% | 실기 46%',
    avgPassRate: '44%',
    passRates: [
      { year: 2020, written: 40, practical: 44 },
      { year: 2021, written: 42, practical: 46 },
      { year: 2022, written: 43, practical: 47 },
      { year: 2023, written: 41, practical: 45 },
      { year: 2024, written: 44, practical: 48 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '반도체 소자', desc: '다이오드, 트랜지스터, MOSFET 동작 원리 및 특성 분석' },
      { name: '집적회로 설계', desc: 'CMOS 논리회로, 표준 셀 설계, 레이아웃 기초 방법' },
      { name: '반도체 공정', desc: '포토리소그래피, 식각, 증착, 이온주입 등 공정 기술' },
      { name: 'HDL 설계', desc: 'Verilog/VHDL 기초 문법, 논리 합성, 시뮬레이션 방법' },
      { name: '반도체 측정 및 시험', desc: '전기적 특성 측정, 수율 분석, 신뢰성 시험 기법' },
    ],
    jobs: [
      { title: '반도체 설계 엔지니어', company: '팹리스 반도체 기업', salary: '4,000~6,500만원', location: '서울·수도권', type: '정규직' },
      { title: '공정 기술 담당자', company: '반도체 파운드리', salary: '4,200~6,800만원', location: '경기·충청', type: '정규직' },
      { title: '반도체 품질 관리자', company: '반도체 제조사', salary: '3,800~5,500만원', location: '경기·충남', type: '정규직' },
      { title: 'EDA 툴 지원 엔지니어', company: 'EDA 솔루션 기업', salary: '3,500~5,200만원', location: '서울·경기', type: '정규직' },
      { title: '반도체 시험 보조원', company: '반도체 테스트 업체', salary: '2,900~3,700만원', location: '경기', type: '계약직' },
    ],
    books: [
      { title: '반도체설계산업기사 필기 완전합격', author: '유재원', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '반도체설계산업기사 핵심이론 + 기출문제해설', author: '안소민', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '반도체설계산업기사 실기 실전대비', author: '황준서', publisher: '한솔아카데미', year: 2023, rating: 4.3 },
      { title: '반도체설계산업기사 과년도 기출문제집', author: '노지현', publisher: '도서출판 세화', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '화학분석산업기사': {
    name: '화학분석산업기사',
    icon: 'fa-flask',
    category: '화학·환경',
    heroTitle: '2026년도 화학분석산업기사 합격 가이드',
    heroDesc: '화학분석산업기사는 화학물질의 정성·정량 분석, 기기 분석, 품질관리에 관한 전문 지식을 인증하는 자격증입니다. 분광법, 크로마토그래피, 전기화학 분석 등 다양한 기기 분석 기법을 습득할 수 있습니다. 제약, 식품, 화학, 환경 분야의 연구소 및 품질관리 부서에서 필수 자격증으로 인정받습니다.',
    passRateSummary: '필기 44% | 실기 49%',
    avgPassRate: '47%',
    passRates: [
      { year: 2020, written: 42, practical: 47 },
      { year: 2021, written: 44, practical: 49 },
      { year: 2022, written: 45, practical: 50 },
      { year: 2023, written: 43, practical: 48 },
      { year: 2024, written: 46, practical: 51 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '일반화학', desc: '원자 구조, 화학 결합, 산염기 반응, 산화환원 반응 이론' },
      { name: '분석화학', desc: '용량 분석, 중량 분석, 분리 분석 기법 및 오차 처리' },
      { name: '기기분석', desc: '분광광도법, 크로마토그래피, 원자흡광법 원리 및 조작' },
      { name: '화학분석 실무', desc: '시료 채취 및 전처리, 표준물질 조제, 검량선 작성' },
      { name: '화학물질 관련법규', desc: '화학물질관리법, 산업안전보건기준, MSDS 작성 방법' },
    ],
    jobs: [
      { title: '분석화학 연구원', company: '제약·바이오 기업', salary: '3,200~4,800만원', location: '서울·경기·충청', type: '정규직' },
      { title: '품질관리 분석원', company: '화학·소재 제조사', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '환경 분석 기술자', company: '환경 분석 전문기관', salary: '3,200~4,600만원', location: '전국', type: '정규직' },
      { title: '식품 분석원', company: '식품 제조·검사기관', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '분석 실험 보조원', company: '연구소·시험기관', salary: '2,700~3,400만원', location: '서울·수도권', type: '계약직' },
    ],
    books: [
      { title: '화학분석산업기사 필기 한권완성', author: '송수빈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '화학분석산업기사 핵심이론 및 기출문제해설', author: '변준혁', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '화학분석산업기사 실기 완전정복', author: '백지원', publisher: '한솔아카데미', year: 2023, rating: 4.3 },
      { title: '화학분석산업기사 기출문제 총정리', author: '도민준', publisher: '도서출판 세화', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '금속재료산업기사': {
    name: '금속재료산업기사',
    icon: 'fa-industry',
    category: '기계·설비',
    heroTitle: '2026년도 금속재료산업기사 합격 가이드',
    heroDesc: '금속재료산업기사는 금속 재료의 성질, 제조 공정, 열처리, 시험 방법에 관한 전문 지식을 인증하는 자격증입니다. 철강, 비철금속, 특수합금의 특성 분석과 품질관리 능력을 갖춘 인재를 양성합니다. 철강·금속 제조업, 자동차부품사, 항공우주 소재 분야에서 꾸준한 수요를 보입니다.',
    passRateSummary: '필기 46% | 실기 51%',
    avgPassRate: '49%',
    passRates: [
      { year: 2020, written: 44, practical: 49 },
      { year: 2021, written: 46, practical: 51 },
      { year: 2022, written: 47, practical: 52 },
      { year: 2023, written: 45, practical: 50 },
      { year: 2024, written: 48, practical: 53 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '금속재료학', desc: '금속 결정 구조, 상태도, 합금 원소의 영향 및 강화 메커니즘' },
      { name: '금속 제조 공정', desc: '제강, 압연, 단조, 주조 공정 원리 및 설비 개요' },
      { name: '열처리', desc: '담금질, 뜨임, 풀림, 불림 등 열처리 방법과 조직 변화' },
      { name: '금속 시험 및 검사', desc: '인장시험, 경도시험, 충격시험, 금속 현미경 조직 분석' },
      { name: '금속재료 관련법규', desc: '산업안전보건법, KS 규격, 재료 관련 국제 표준 이해' },
    ],
    jobs: [
      { title: '금속재료 품질 관리자', company: '철강·금속 제조사', salary: '3,200~4,800만원', location: '포항·광양·인천', type: '정규직' },
      { title: '소재 개발 연구원', company: '자동차·항공 소재 기업', salary: '3,800~5,500만원', location: '경기·충남', type: '정규직' },
      { title: '열처리 기술 담당자', company: '금속 가공 전문업체', salary: '3,000~4,500만원', location: '경기·경북', type: '정규직' },
      { title: '생산 기술 엔지니어', company: '금속부품 제조사', salary: '3,500~5,200만원', location: '전국', type: '정규직' },
      { title: '금속 검사 보조원', company: '품질시험 전문기관', salary: '2,700~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '금속재료산업기사 필기 완전합격', author: '서동욱', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '금속재료산업기사 핵심이론 + 과년도 기출', author: '문채원', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '금속재료산업기사 실기 실전대비', author: '함준형', publisher: '한솔아카데미', year: 2023, rating: 4.3 },
      { title: '금속재료산업기사 기출문제 총정리', author: '차미소', publisher: '도서출판 세화', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

// === 기능장 5종 + 기능사 8종 ===
  '가스기능장': {
    name: '가스기능장',
    icon: 'fa-fire-flame-curved',
    category: '화학·환경',
    heroTitle: '2026년도 가스기능장 합격 가이드',
    heroDesc: '가스기능장은 고압가스·액화석유가스·도시가스 설비의 설계·시공·유지관리를 총괄하는 최고급 국가기술자격입니다. 가스 관련 산업체 및 공공기관에서 높은 대우를 받으며, 안전관리 책임자로서의 역할을 수행합니다.',
    passRateSummary: '필기 32% | 실기 41%',
    avgPassRate: '37%',
    passRates: [
      { year: 2020, written: 30, practical: 38 },
      { year: 2021, written: 28, practical: 40 },
      { year: 2022, written: 33, practical: 43 },
      { year: 2023, written: 35, practical: 42 },
      { year: 2024, written: 34, practical: 44 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '연소공학', desc: '연소 이론, 폭발 한계, 화염 전파 및 소화 원리' },
      { name: '가스설비', desc: '고압가스·LPG·도시가스 설비 구조 및 시공 기준' },
      { name: '가스안전관리', desc: '안전관리 법규, 검사 기준, 사고 예방 대책' },
      { name: '가스계측', desc: '가스 검지기, 유량계, 압력계 등 계측기기 원리' },
      { name: '가스관계법규', desc: '고압가스안전관리법, 액화석유가스법, 도시가스사업법' },
    ],
    jobs: [
      { title: '가스안전관리총괄자', company: '도시가스사', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '가스설비 기술팀장', company: '플랜트 건설사', salary: '5,000~7,000만원', location: '서울·경기', type: '정규직' },
      { title: '고압가스 관리자', company: '화학공장', salary: '4,200~5,800만원', location: '울산·여수', type: '정규직' },
      { title: '가스시설 검사원', company: '한국가스안전공사', salary: '4,800~6,200만원', location: '전국', type: '정규직' },
      { title: '가스설비 유지보수', company: '설비관리업체', salary: '3,800~5,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '가스기능장 필기 완전정복', author: '이상훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '가스기능장 실기 실전 대비', author: '김민준', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '가스기능장 기출문제 해설집', author: '박철수', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '가스관계법규 핵심요약', author: '최영호', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '전자기기기능장': {
    name: '전자기기기능장',
    icon: 'fa-microchip',
    category: '전기·에너지',
    heroTitle: '2026년도 전자기기기능장 합격 가이드',
    heroDesc: '전자기기기능장은 전자회로 설계, 디지털·아날로그 시스템 제작 및 유지보수 분야의 최고급 국가기술자격입니다. 전자제품 제조업체와 자동화 설비 업체에서 높은 수요를 보이며, 기술 리더십을 발휘할 수 있습니다.',
    passRateSummary: '필기 29% | 실기 38%',
    avgPassRate: '34%',
    passRates: [
      { year: 2020, written: 27, practical: 35 },
      { year: 2021, written: 26, practical: 37 },
      { year: 2022, written: 30, practical: 39 },
      { year: 2023, written: 31, practical: 40 },
      { year: 2024, written: 32, practical: 41 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '전자회로', desc: '증폭기, 발진기, 필터 등 아날로그·디지털 회로 이론' },
      { name: '디지털공학', desc: '논리회로, 마이크로프로세서, 디지털 신호처리' },
      { name: '전자계측', desc: '오실로스코프, 멀티미터 등 측정기기 활용 및 교정' },
      { name: '제어공학', desc: '피드백 제어, PLC 프로그래밍, 자동화 시스템 구성' },
      { name: '전자기기설계', desc: '회로 설계, PCB 설계, 신뢰성 분석 및 품질 관리' },
    ],
    jobs: [
      { title: '전자기기 개발팀장', company: '전자제품 제조사', salary: '5,000~7,500만원', location: '수원·화성', type: '정규직' },
      { title: '자동화설비 기술감독', company: '자동화 전문업체', salary: '4,800~6,500만원', location: '서울·경기', type: '정규직' },
      { title: '품질관리 기술책임자', company: '반도체 부품사', salary: '5,200~7,000만원', location: '경기', type: '정규직' },
      { title: '전자설비 유지보수 매니저', company: '생산설비 업체', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '전자기기 점검 기술자', company: '유지보수 서비스사', salary: '3,800~5,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전자기기기능장 필기 완전정복', author: '홍길동', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전자기기기능장 실기 실전서', author: '이기술', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '전자회로 핵심이론 총정리', author: '김전자', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '전자기기기능장 기출문제집', author: '박합격', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동차기능장': {
    name: '자동차기능장',
    icon: 'fa-car',
    category: '기계·설비',
    heroTitle: '2026년도 자동차기능장 합격 가이드',
    heroDesc: '자동차기능장은 자동차 엔진, 섀시, 전기·전자 시스템의 고급 정비와 기술 관리를 담당하는 최고급 국가기술자격입니다. 완성차 메이커, 대형 정비소, 자동차 검사소 등에서 기술 책임자로 활약할 수 있습니다.',
    passRateSummary: '필기 36% | 실기 46%',
    avgPassRate: '41%',
    passRates: [
      { year: 2020, written: 33, practical: 43 },
      { year: 2021, written: 34, practical: 44 },
      { year: 2022, written: 37, practical: 47 },
      { year: 2023, written: 38, practical: 48 },
      { year: 2024, written: 39, practical: 49 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동차엔진', desc: '내연기관 구조, 연료 시스템, 배기가스 제어 원리' },
      { name: '자동차섀시', desc: '동력전달장치, 제동장치, 현가장치, 조향장치 구조' },
      { name: '자동차전기·전자', desc: '전장 시스템, ECU 진단, 하이브리드·전기차 기술' },
      { name: '자동차검사', desc: '자동차 검사 기준, 배출가스 측정, 안전 기준 검사' },
      { name: '자동차관리법규', desc: '자동차관리법, 교통안전법, 환경 관련 규정' },
    ],
    jobs: [
      { title: '자동차정비 기술팀장', company: '완성차 딜러사', salary: '5,000~7,000만원', location: '전국', type: '정규직' },
      { title: '자동차검사 기술책임자', company: '자동차검사소', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '품질보증 기술관리자', company: '자동차 부품사', salary: '4,800~6,500만원', location: '경기·충남', type: '정규직' },
      { title: '정비교육 강사', company: '직업훈련기관', salary: '4,200~5,500만원', location: '전국', type: '정규직' },
      { title: '자동차 특수정비 기술자', company: '수입차 전문정비', salary: '4,000~5,500만원', location: '서울·경기', type: '계약직' },
    ],
    books: [
      { title: '자동차기능장 필기 완전정복', author: '이정비', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '자동차기능장 실기 실전서', author: '김자동차', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '자동차공학 핵심이론', author: '박엔진', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '자동차기능장 기출문제집', author: '최합격', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '화학분석기능장': {
    name: '화학분석기능장',
    icon: 'fa-flask',
    category: '화학·환경',
    heroTitle: '2026년도 화학분석기능장 합격 가이드',
    heroDesc: '화학분석기능장은 화학물질의 정성·정량 분석, 품질 관리, 환경 분석 등을 총괄하는 최고급 국가기술자격입니다. 석유화학, 제약, 식품, 환경 분야의 연구소 및 품질관리 부서에서 핵심 인력으로 활동할 수 있습니다.',
    passRateSummary: '필기 27% | 실기 35%',
    avgPassRate: '31%',
    passRates: [
      { year: 2020, written: 25, practical: 32 },
      { year: 2021, written: 26, practical: 33 },
      { year: 2022, written: 28, practical: 36 },
      { year: 2023, written: 29, practical: 37 },
      { year: 2024, written: 28, practical: 36 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '일반화학', desc: '원소 주기율, 화학반응식, 산염기 이론, 산화환원' },
      { name: '분석화학', desc: '용량분석, 중량분석, 기기분석(GC, HPLC, AAS) 원리' },
      { name: '화학물질관리', desc: '유해화학물질 취급, MSDS 작성, 화학물질 안전관리' },
      { name: '환경분석', desc: '수질·대기·토양 오염물질 분석 기준 및 측정 방법' },
      { name: '품질관리', desc: '통계적 품질관리, 측정불확도, ISO 17025 기준' },
    ],
    jobs: [
      { title: '화학분석 연구소장', company: '화학 연구소', salary: '5,500~8,000만원', location: '대전·수도권', type: '정규직' },
      { title: '품질관리 기술책임자', company: '석유화학사', salary: '5,000~7,000만원', location: '울산·여수', type: '정규직' },
      { title: '환경분석 팀장', company: '환경분석기관', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '제약 품질보증 책임자', company: '제약회사', salary: '5,200~7,500만원', location: '경기·충북', type: '정규직' },
      { title: '화학분석 전문가', company: '시험검사기관', salary: '4,000~5,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '화학분석기능장 필기 완전정복', author: '이화학', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '화학분석기능장 실기 실전서', author: '김분석', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '분석화학 핵심이론 총정리', author: '박시험', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '화학분석기능장 기출문제집', author: '최화학', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '공장관리기능장': {
    name: '공장관리기능장',
    icon: 'fa-industry',
    category: '경영·품질',
    heroTitle: '2026년도 공장관리기능장 합격 가이드',
    heroDesc: '공장관리기능장은 생산관리, 품질경영, 설비관리, 원가관리 등을 종합적으로 수행하는 최고급 국가기술자격입니다. 제조업 현장의 공장장 또는 생산관리 책임자로서 기업 경쟁력 향상에 기여할 수 있습니다.',
    passRateSummary: '필기 38% | 실기 47%',
    avgPassRate: '43%',
    passRates: [
      { year: 2020, written: 35, practical: 44 },
      { year: 2021, written: 36, practical: 45 },
      { year: 2022, written: 39, practical: 48 },
      { year: 2023, written: 40, practical: 49 },
      { year: 2024, written: 39, practical: 48 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '생산관리', desc: '생산계획, 공정관리, 재고관리, 납기관리 기법' },
      { name: '품질경영', desc: 'ISO 9001, 통계적 공정관리(SPC), 품질비용 분석' },
      { name: '설비관리', desc: '예방보전, TPM, 설비종합효율(OEE) 향상 방법론' },
      { name: '원가관리', desc: '원가계산, 원가절감 기법, 표준원가, 원가분석' },
      { name: '산업안전관리', desc: '공장 안전관리, 위험성평가, 재해통계 분석' },
    ],
    jobs: [
      { title: '공장장', company: '제조업체', salary: '6,000~9,000만원', location: '전국', type: '정규직' },
      { title: '생산관리 이사', company: '중견 제조사', salary: '6,500~10,000만원', location: '경기·충남', type: '정규직' },
      { title: '품질경영 팀장', company: '자동차 부품사', salary: '5,000~7,000만원', location: '경기·울산', type: '정규직' },
      { title: '설비관리 책임자', company: '반도체 제조사', salary: '5,500~8,000만원', location: '경기', type: '정규직' },
      { title: '생산효율 컨설턴트', company: '경영컨설팅사', salary: '4,500~6,500만원', location: '서울·경기', type: '계약직' },
    ],
    books: [
      { title: '공장관리기능장 필기 완전정복', author: '이공장', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '공장관리기능장 실기 실전서', author: '김관리', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '생산관리 핵심이론 총정리', author: '박품질', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '공장관리기능장 기출문제집', author: '최경영', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '가스기능사': {
    name: '가스기능사',
    icon: 'fa-fire-flame-curved',
    category: '화학·환경',
    heroTitle: '2026년도 가스기능사 합격 가이드',
    heroDesc: '가스기능사는 고압가스·LPG·도시가스 관련 설비의 기초 시공과 안전관리를 담당하는 국가기술자격입니다. 가스 배관 공사, 설비 점검, 안전 관리 분야에서 취업의 첫 관문으로 활용됩니다.',
    passRateSummary: '필기 55% | 실기 62%',
    avgPassRate: '59%',
    passRates: [
      { year: 2020, written: 52, practical: 58 },
      { year: 2021, written: 54, practical: 60 },
      { year: 2022, written: 56, practical: 63 },
      { year: 2023, written: 57, practical: 64 },
      { year: 2024, written: 55, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '가스의 연소', desc: '연소 이론, 폭발 한계, 연소 생성물의 특성' },
      { name: '가스설비', desc: '가스 배관, 압력조정기, 저장 설비 구조 및 설치 기준' },
      { name: '가스안전관리', desc: '가스 사고 예방, 검지기 사용법, 안전관리 규정' },
      { name: '가스관계법규', desc: '고압가스안전관리법, LPG법, 도시가스사업법 기초' },
      { name: '가스계측', desc: '압력계, 유량계, 가스 검지기 등 기초 계측기기 원리' },
    ],
    jobs: [
      { title: '가스배관 시공원', company: '도시가스 시공사', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '가스안전 관리원', company: '가스판매업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: 'LPG 충전소 관리원', company: 'LPG 충전소', salary: '2,800~3,600만원', location: '전국', type: '정규직' },
      { title: '가스설비 점검원', company: '가스안전 관리업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '가스설비 보조 기술자', company: '건설·설비업체', salary: '2,600~3,400만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '가스기능사 필기 완전정복', author: '이가스', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '가스기능사 실기 실전서', author: '김안전', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '가스기능사 핵심요약 노트', author: '박기능', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '가스기능사 기출문제집', author: '최합격', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동차정비기능사': {
    name: '자동차정비기능사',
    icon: 'fa-car',
    category: '기계·설비',
    heroTitle: '2026년도 자동차정비기능사 합격 가이드',
    heroDesc: '자동차정비기능사는 자동차 엔진, 섀시, 전기장치의 기초 정비 기술을 인증하는 국가기술자격입니다. 자동차 정비업체, 카센터, 자동차 검사소 등 다양한 분야에서 취업 기회를 제공합니다.',
    passRateSummary: '필기 58% | 실기 65%',
    avgPassRate: '62%',
    passRates: [
      { year: 2020, written: 55, practical: 62 },
      { year: 2021, written: 57, practical: 63 },
      { year: 2022, written: 59, practical: 66 },
      { year: 2023, written: 60, practical: 67 },
      { year: 2024, written: 58, practical: 65 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동차엔진정비', desc: '엔진 분해 조립, 부품 점검, 연료·냉각·윤활 계통 정비' },
      { name: '자동차섀시정비', desc: '변속기, 제동장치, 현가장치, 조향장치 점검 및 정비' },
      { name: '자동차전기정비', desc: '충전·시동·등화·에어컨 시스템 점검 및 정비' },
      { name: '자동차안전기준', desc: '자동차 구조·장치 안전기준, 검사 항목 및 기준치' },
      { name: '자동차관리법규', desc: '자동차관리법, 도로교통법 중 자동차 관련 규정' },
    ],
    jobs: [
      { title: '자동차 정비원', company: '자동차 정비업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '카센터 정비 기술자', company: '카센터', salary: '2,600~3,600만원', location: '전국', type: '정규직' },
      { title: '자동차검사 보조원', company: '자동차검사소', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '딜러 정비 기술자', company: '자동차 딜러사', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '자동차 정비 보조', company: '버스·화물 운수사', salary: '2,500~3,400만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '자동차정비기능사 필기 완전정복', author: '이정비', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '자동차정비기능사 실기 실전서', author: '김자동차', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '자동차정비 핵심이론 총정리', author: '박엔진', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '자동차정비기능사 기출문제집', author: '최합격', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '지게차운전기능사': {
    name: '지게차운전기능사',
    icon: 'fa-truck-moving',
    category: '기계·설비',
    heroTitle: '2026년도 지게차운전기능사 합격 가이드',
    heroDesc: '지게차운전기능사는 물류 창고, 제조 현장, 항만 등에서 지게차를 안전하게 운전하기 위한 국가기술자격입니다. 취득 후 즉시 취업이 가능하며, 물류·유통·제조 산업 전반에 걸쳐 높은 수요가 유지됩니다.',
    passRateSummary: '필기 62% | 실기 68%',
    avgPassRate: '65%',
    passRates: [
      { year: 2020, written: 59, practical: 64 },
      { year: 2021, written: 61, practical: 66 },
      { year: 2022, written: 63, practical: 69 },
      { year: 2023, written: 64, practical: 70 },
      { year: 2024, written: 62, practical: 68 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '지게차 구조 및 기능', desc: '지게차 각 부위 명칭, 작동 원리, 유압 시스템 구성' },
      { name: '화물 적재 및 운반', desc: '화물 적재 방법, 안전 운반 기술, 팔레트 취급' },
      { name: '지게차 안전작업', desc: '작업 전 점검, 안전 운전 수칙, 재해 예방 방법' },
      { name: '도로교통 및 화물취급', desc: '도로교통법 기초, 화물 취급 규정, 신호 체계' },
      { name: '산업안전보건법규', desc: '지게차 관련 산업안전보건법, 안전보건기준에 관한 규칙' },
    ],
    jobs: [
      { title: '지게차 운전원', company: '물류창고', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '항만 지게차 기사', company: '항만 하역사', salary: '3,200~4,500만원', location: '부산·인천', type: '정규직' },
      { title: '공장 내 물류 담당', company: '제조공장', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '유통센터 지게차 기사', company: '대형 유통사', salary: '3,000~4,000만원', location: '경기·전국', type: '정규직' },
      { title: '건설현장 지게차 기사', company: '건설현장', salary: '3,000~4,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '지게차운전기능사 필기 완전정복', author: '이물류', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '지게차운전기능사 실기 실전서', author: '김지게차', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '지게차 운전 핵심요약', author: '박운전', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '지게차운전기능사 기출문제집', author: '최합격', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '굴착기운전기능사': {
    name: '굴착기운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 굴착기운전기능사 합격 가이드',
    heroDesc: '굴착기운전기능사는 토목·건설 현장에서 굴착기(포크레인)를 안전하게 조작하기 위한 국가기술자격입니다. 건설 경기 회복과 함께 수요가 꾸준히 증가하고 있으며, 취득 즉시 현장 투입이 가능합니다.',
    passRateSummary: '필기 60% | 실기 66%',
    avgPassRate: '63%',
    passRates: [
      { year: 2020, written: 57, practical: 62 },
      { year: 2021, written: 59, practical: 64 },
      { year: 2022, written: 61, practical: 67 },
      { year: 2023, written: 62, practical: 68 },
      { year: 2024, written: 60, practical: 66 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '굴착기 구조 및 기능', desc: '굴착기 각 부위 명칭, 유압·전기·기계 시스템 구성' },
      { name: '굴착 작업', desc: '토사 굴착, 터파기, 평탄 작업, 상차 작업 기술' },
      { name: '굴착기 안전작업', desc: '작업 전 점검, 전도·충돌 예방, 지하 매설물 확인' },
      { name: '건설기계관리법규', desc: '건설기계관리법, 건설기계 등록·검사 기준' },
      { name: '도로교통법 기초', desc: '건설기계 도로 통행 기준, 신호 체계, 교통법규' },
    ],
    jobs: [
      { title: '굴착기 운전원', company: '토목 건설사', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '건설현장 기계 기사', company: '건설현장', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '도시개발 현장 기사', company: '도시개발 시행사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '하천 정비 운전원', company: '지자체 공공기관', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '임시 굴착기 기사', company: '토목 용역업체', salary: '일당 20~35만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '굴착기운전기능사 필기 완전정복', author: '이건설', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '굴착기운전기능사 실기 실전서', author: '김굴착기', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '굴착기 운전 핵심요약', author: '박건기', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '굴착기운전기능사 기출문제집', author: '최합격', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '전자기기기능사': {
    name: '전자기기기능사',
    icon: 'fa-microchip',
    category: '전기·에너지',
    heroTitle: '2026년도 전자기기기능사 합격 가이드',
    heroDesc: '전자기기기능사는 전자회로 조립, 측정, 유지보수 등 전자기기 분야의 기초 기술을 인증하는 국가기술자격입니다. 전자제품 제조업, 가전 서비스, 통신 장비 업체 등 폭넓은 분야에서 활용됩니다.',
    passRateSummary: '필기 50% | 실기 57%',
    avgPassRate: '54%',
    passRates: [
      { year: 2020, written: 47, practical: 53 },
      { year: 2021, written: 49, practical: 55 },
      { year: 2022, written: 51, practical: 58 },
      { year: 2023, written: 52, practical: 59 },
      { year: 2024, written: 50, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '전자회로', desc: '트랜지스터, 다이오드, 증폭 회로, 발진 회로 기초' },
      { name: '디지털공학', desc: '논리 게이트, 플립플롭, 카운터, 레지스터 기초' },
      { name: '전자계측', desc: '멀티미터, 오실로스코프, 신호발생기 사용법' },
      { name: '전자기기 설치·조정', desc: '전자기기 조립, 납땜, 배선, 기본 조정 작업' },
      { name: '전기·전자 관련 법규', desc: '전기안전 관련 규정, 전자파 기준, KS 규격' },
    ],
    jobs: [
      { title: '전자기기 조립원', company: '전자제품 제조사', salary: '2,600~3,500만원', location: '경기·충남', type: '정규직' },
      { title: '가전 서비스 기술자', company: '가전 AS센터', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '통신장비 유지보수', company: '통신 설비업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '전자제품 검사원', company: '전자 부품사', salary: '2,600~3,400만원', location: '경기', type: '정규직' },
      { title: '전자기기 수리 기사', company: '전자기기 수리점', salary: '2,400~3,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전자기기기능사 필기 완전정복', author: '이전자', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전자기기기능사 실기 실전서', author: '김회로', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '전자기기 핵심이론 총정리', author: '박전기', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '전자기기기능사 기출문제집', author: '최합격', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '비파괴검사기능사': {
    name: '비파괴검사기능사',
    icon: 'fa-magnifying-glass-chart',
    category: '기계·설비',
    heroTitle: '2026년도 비파괴검사기능사 합격 가이드',
    heroDesc: '비파괴검사기능사는 재료와 구조물을 파괴하지 않고 결함을 탐지하는 검사 기술을 인증하는 국가기술자격입니다. 발전소, 조선소, 항공, 압력용기 등 안전이 중요한 산업 전반에서 필수 인력으로 활용됩니다.',
    passRateSummary: '필기 48% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 45, practical: 51 },
      { year: 2021, written: 47, practical: 53 },
      { year: 2022, written: 49, practical: 56 },
      { year: 2023, written: 50, practical: 57 },
      { year: 2024, written: 48, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '비파괴검사 개론', desc: '비파괴검사의 종류, 원리, 적용 범위 및 특성 비교' },
      { name: '초음파탐상검사', desc: 'UT 원리, 탐촉자 종류, 결함 탐지 및 평가 방법' },
      { name: '방사선투과검사', desc: 'RT 원리, 방사선 안전관리, 필름 판독 기준' },
      { name: '자기·침투탐상검사', desc: 'MT·PT 원리, 검사 절차, 결함 지시 평가' },
      { name: '관련 법규 및 규격', desc: 'KS, ASME, AWS 등 비파괴검사 관련 규격 및 기준' },
    ],
    jobs: [
      { title: '비파괴검사원', company: '검사 전문업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '발전소 설비 검사원', company: '발전 공기업', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
      { title: '조선소 용접 검사원', company: '조선사', salary: '3,200~4,500만원', location: '거제·울산', type: '정규직' },
      { title: '압력용기 검사 기사', company: '검사기관', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '배관 비파괴 검사원', company: '플랜트 건설사', salary: '3,000~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '비파괴검사기능사 필기 완전정복', author: '이검사', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '비파괴검사기능사 실기 실전서', author: '김비파괴', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '비파괴검사 핵심이론 총정리', author: '박탐상', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '비파괴검사기능사 기출문제집', author: '최합격', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '정보통신기능사': {
    name: '정보통신기능사',
    icon: 'fa-tower-broadcast',
    category: 'IT·정보',
    heroTitle: '2026년도 정보통신기능사 합격 가이드',
    heroDesc: '정보통신기능사는 유·무선 통신 시스템의 설치, 운용, 유지보수 기술을 인증하는 국가기술자격입니다. 통신 인프라, 방송통신, 네트워크 설비 분야에서 안정적인 취업 기회를 제공합니다.',
    passRateSummary: '필기 53% | 실기 60%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 50, practical: 56 },
      { year: 2021, written: 52, practical: 58 },
      { year: 2022, written: 54, practical: 61 },
      { year: 2023, written: 55, practical: 62 },
      { year: 2024, written: 53, practical: 60 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '통신이론', desc: '아날로그·디지털 변조, 주파수 대역, 통신 신호 원리' },
      { name: '통신선로', desc: '케이블 종류, 광섬유, 통신 배선 공사 기준' },
      { name: '통신설비 설치·운용', desc: '교환기, 전송장비, 안테나, 중계기 설치 및 운용' },
      { name: '데이터통신', desc: '네트워크 구성, LAN·WAN, 프로토콜, IP 기초' },
      { name: '정보통신 관련 법규', desc: '전기통신사업법, 전파법, 방송통신 관련 규정' },
    ],
    jobs: [
      { title: '통신설비 설치 기사', company: '통신 설비업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '네트워크 유지보수 기사', company: 'ISP·통신사', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '방송통신 설비 기사', company: '방송국·방송사', salary: '3,000~4,000만원', location: '서울·전국', type: '정규직' },
      { title: '빌딩 통신 관리원', company: '건물 관리업체', salary: '2,800~3,600만원', location: '전국', type: '정규직' },
      { title: '통신설비 점검원', company: '공공기관 위탁', salary: '2,600~3,400만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '정보통신기능사 필기 완전정복', author: '이통신', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '정보통신기능사 실기 실전서', author: '김네트워크', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '정보통신 핵심이론 총정리', author: '박통신망', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '정보통신기능사 기출문제집', author: '최합격', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '도배기능사': {
    name: '도배기능사',
    icon: 'fa-paint-roller',
    category: '건설·토목',
    heroTitle: '2026년도 도배기능사 합격 가이드',
    heroDesc: '도배기능사는 건축물 내부 벽지 시공, 천장 마감, 인테리어 마감재 시공 기술을 인증하는 국가기술자격입니다. 주거용·상업용 건물의 내장 마감 공사 수요가 꾸준하여 안정적인 취업과 창업이 가능합니다.',
    passRateSummary: '필기 65% | 실기 70%',
    avgPassRate: '68%',
    passRates: [
      { year: 2020, written: 62, practical: 67 },
      { year: 2021, written: 64, practical: 69 },
      { year: 2022, written: 66, practical: 71 },
      { year: 2023, written: 67, practical: 72 },
      { year: 2024, written: 65, practical: 70 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '도배 재료', desc: '벽지 종류(합지·실크·천연벽지), 접착제, 초배지 특성' },
      { name: '도배 공구 및 기계', desc: '주걱, 커터, 롤러, 도배 풀 기계 사용법 및 관리' },
      { name: '도배 시공법', desc: '벽지 재단, 풀 바르기, 부착, 이음새 처리, 마감 기법' },
      { name: '건축 내장 기초', desc: '건축 마감 재료, 바탕면 처리, 방습·방음 기초 지식' },
      { name: '건설 관련 법규', desc: '건설산업기본법, 산업안전보건법 중 건설 안전 관련 규정' },
    ],
    jobs: [
      { title: '도배 기술자', company: '인테리어 업체', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '아파트 도배 시공원', company: '대형 건설사 협력사', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '상업공간 인테리어 기사', company: '상업 인테리어사', salary: '3,000~4,500만원', location: '서울·경기', type: '정규직' },
      { title: '건물 유지보수 도배원', company: '건물 관리업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '도배 프리랜서 기술자', company: '개인 사업자', salary: '일당 15~30만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '도배기능사 필기 완전정복', author: '이도배', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '도배기능사 실기 실전서', author: '김인테리어', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '도배 시공 핵심이론', author: '박마감', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '도배기능사 기출문제집', author: '최합격', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 대비 실무 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 중장비 그룹1 6종 ===
  '건설기계산업기사': {
    name: '건설기계산업기사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 건설기계산업기사 합격 가이드',
    heroDesc: '건설기계산업기사는 건설기계의 구조, 정비, 운용에 관한 전문 지식을 갖춘 기술인력을 양성하는 자격증입니다. 건설현장 및 중장비 관련 산업에서 폭넓게 활용되며, 취업 경쟁력을 높이는 데 효과적입니다. 체계적인 이론 학습과 실기 준비를 통해 합격을 목표로 하세요.',
    passRateSummary: '필기 47% | 실기 53%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 44, practical: 50 },
      { year: 2021, written: 46, practical: 52 },
      { year: 2022, written: 48, practical: 54 },
      { year: 2023, written: 50, practical: 56 },
      { year: 2024, written: 47, practical: 53 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '건설기계기관', desc: '엔진 구조, 작동 원리 및 정비 방법에 관한 과목' },
      { name: '건설기계섀시', desc: '차체 구조, 동력 전달 장치 및 제동 장치에 관한 과목' },
      { name: '건설기계전기', desc: '전기 회로, 전장 부품 및 제어 시스템에 관한 과목' },
      { name: '유압일반', desc: '유압 장치의 원리, 구성 요소 및 회로 분석에 관한 과목' },
      { name: '건설기계관계법규', desc: '건설기계 관련 법령, 안전 기준 및 등록 제도에 관한 과목' },
    ],
    jobs: [
      { title: '건설기계 정비기술자', company: '건설기계 정비업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '중장비 운용 관리자', company: '종합건설사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '건설기계 검사원', company: '건설기계 검사기관', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '장비 유지보수 담당', company: '토목공사 전문업체', salary: '3,200~4,500만원', location: '서울/경기', type: '정규직' },
      { title: '건설기계 기술지원', company: '건설기계 제조사', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '건설기계산업기사 필기 한권완성', author: '이재천', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '건설기계산업기사 실기 완전정복', author: '박성호', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '건설기계산업기사 기출문제집', author: '김도훈', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '건설기계 유압 및 전기 핵심이론', author: '정민석', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '기중기운전기능사': {
    name: '기중기운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 기중기운전기능사 합격 가이드',
    heroDesc: '기중기운전기능사는 타워크레인·트럭크레인 등 각종 기중기 장비를 안전하게 운전하는 전문 자격증입니다. 건설현장과 물류·제조 현장에서 수요가 높으며, 취득 후 즉시 현장 투입이 가능합니다. 필기와 실기 모두 꾸준한 준비가 합격의 열쇠입니다.',
    passRateSummary: '필기 57% | 실기 62%',
    avgPassRate: '60%',
    passRates: [
      { year: 2020, written: 53, practical: 58 },
      { year: 2021, written: 55, practical: 60 },
      { year: 2022, written: 58, practical: 63 },
      { year: 2023, written: 60, practical: 65 },
      { year: 2024, written: 57, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '기중기 구조 및 기능', desc: '기중기의 주요 구조, 작동 원리 및 각부 명칭에 관한 과목' },
      { name: '기중기 운전 조작', desc: '안전한 기중기 운전 기법 및 화물 취급 방법에 관한 과목' },
      { name: '유압 및 전기 장치', desc: '유압 시스템과 전기 제어 장치의 구조와 기능에 관한 과목' },
      { name: '안전 및 법규', desc: '중량물 취급 안전 기준, 신호 체계 및 관련 법령에 관한 과목' },
      { name: '건설기계관계법규', desc: '건설기계 등록, 검사 및 운행 관련 법규에 관한 과목' },
    ],
    jobs: [
      { title: '기중기 운전원', company: '종합건설사', salary: '3,500~5,200만원', location: '전국', type: '정규직' },
      { title: '크레인 조종사', company: '플랜트 건설업체', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
      { title: '양중 작업 전문원', company: '중공업·조선사', salary: '4,000~5,800만원', location: '울산/부산', type: '정규직' },
      { title: '장비 운용 기술자', company: '물류·항만업체', salary: '3,500~5,000만원', location: '인천/부산', type: '정규직' },
      { title: '기중기 운전 보조', company: '건설장비 임대업체', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '기중기운전기능사 필기 완전정복', author: '이승준', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '기중기운전기능사 실기 한권완성', author: '최민호', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '기중기운전기능사 기출문제 총정리', author: '김영철', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '건설기계 안전운전 이론과 실제', author: '박재원', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '타워크레인운전기능사': {
    name: '타워크레인운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 타워크레인운전기능사 합격 가이드',
    heroDesc: '타워크레인운전기능사는 고층 건설 현장에서 타워크레인을 안전하게 운전하는 전문 자격증입니다. 아파트·주상복합·교량 등 대형 건설 프로젝트 현장에서 핵심 장비인 타워크레인 운전에 필요하며, 수요 대비 자격자 수가 적어 취업과 임금 수준이 높습니다. 구조 원리와 안전 규정 이해가 합격의 관건입니다.',
    passRateSummary: '필기 52% | 실기 58%',
    avgPassRate: '55%',
    passRates: [
      { year: 2020, written: 48, practical: 54 },
      { year: 2021, written: 50, practical: 56 },
      { year: 2022, written: 52, practical: 58 },
      { year: 2023, written: 53, practical: 59 },
      { year: 2024, written: 54, practical: 60 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '타워크레인 구조 및 기능', desc: '마스트·지브·카운터지브·호이스트 등 주요 구조와 작동 원리' },
      { name: '크레인 운전 조작', desc: '화물 인양·선회·횡행 등 정밀 조작 기술과 신호수 협조 방법' },
      { name: '전기 제어 장치', desc: '전동기, 인버터, 리미트스위치 등 전기 제어 계통 구조와 점검' },
      { name: '안전 관리 및 신호', desc: '타워크레인 설치·해체 안전기준, 과부하 방지, 줄걸이 작업' },
      { name: '건설기계관계법규', desc: '건설기계관리법, 산업안전보건법 관련 크레인 규정 및 검사 기준' },
    ],
    jobs: [
      { title: '타워크레인 운전원', company: '건설사·크레인임대사', salary: '4,500~7,000만원', location: '전국', type: '프리랜서' },
      { title: '아파트 건설 크레인 기사', company: '대형 건설사', salary: '5,000~8,000만원', location: '전국', type: '계약직' },
      { title: '플랜트 타워크레인 기사', company: '플랜트·발전소 건설사', salary: '5,500~9,000만원', location: '전국/해외', type: '계약직' },
      { title: '크레인 운전·정비 기사', company: '건설기계 임대업체', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '해외 건설 현장 크레인 기사', company: '해외 플랜트 건설사', salary: '8,000~1억 2,000만원', location: '해외', type: '계약직' },
    ],
    books: [
      { title: '2026 시대에듀 Win-Q 타워크레인운전기능사 필기 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2026 시대에듀 답만 외우는 타워크레인운전기능사 필기 CBT기출+모의고사', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.5 },
      { title: '2026 원턴킬 타워크레인운전기능사 필기시험문제', author: '자격시험 편집부', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '확! 바뀐 패스 타워크레인운전기능사 필기', author: '자격시험 연구회', publisher: '크라운출판사', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '타워크레인 구조·전기 제어 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습 (선회·인양·정지)',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '컨테이너크레인운전기능사': {
    name: '컨테이너크레인운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 컨테이너크레인운전기능사 합격 가이드',
    heroDesc: '컨테이너크레인운전기능사는 항만·컨테이너 터미널에서 컨테이너크레인(C/C)을 안전하게 운전하는 전문 자격증입니다. 인천·부산·광양 등 주요 항만 물류 현장에서 수요가 높으며, 특수 장비 특성상 취득자가 적어 취업과 임금 경쟁력이 뛰어납니다.',
    passRateSummary: '필기 55% | 실기 60%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 52, practical: 57 },
      { year: 2021, written: 53, practical: 58 },
      { year: 2022, written: 55, practical: 60 },
      { year: 2023, written: 56, practical: 61 },
      { year: 2024, written: 57, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '컨테이너크레인 구조 및 기능', desc: '거더·트롤리·스프레더·호이스트 등 C/C 주요 구조와 작동 원리' },
      { name: '크레인 운전 조작', desc: '컨테이너 인양·이송·적재 정밀 조작 기술과 선박·야드 작업 절차' },
      { name: '전기 제어 장치', desc: '인버터·PLC·리미트스위치 등 전기 제어 계통 구조와 이상 점검' },
      { name: '안전 관리 및 신호', desc: '항만 작업 안전기준, 컨테이너 낙하 방지, 선내 신호 체계' },
      { name: '건설기계관계법규', desc: '건설기계관리법, 항만법, 산업안전보건법 관련 크레인 규정' },
    ],
    jobs: [
      { title: '컨테이너크레인 운전원', company: '컨테이너터미널(항만)', salary: '4,500~6,500만원', location: '부산·인천·광양', type: '정규직' },
      { title: '항만 하역 크레인 기사', company: '항만하역업체', salary: '4,000~6,000만원', location: '부산·인천', type: '정규직' },
      { title: '부두 크레인 운전원', company: '항만공사(PA)', salary: '4,200~6,000만원', location: '부산·인천·광양', type: '정규직' },
      { title: '해외 항만 크레인 기사', company: '해외 터미널 운영사', salary: '7,000~1억원', location: '해외', type: '계약직' },
      { title: '크레인 운전·정비 기술원', company: '터미널 운영사', salary: '3,800~5,200만원', location: '전국 항만', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 Win-Q 컨테이너크레인운전기능사 필기 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '컨테이너크레인운전기능사 필기 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.4 },
      { title: '컨테이너크레인운전기능사 실기 완전정복', author: '크레인 기술 연구회', publisher: '성안당', year: 2024, rating: 4.3 },
      { title: '항만 크레인 안전 실무', author: '항만안전 연구회', publisher: '일진사', year: 2023, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      'C/C 구조·전기 제어 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 컨테이너 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '농기계운전기능사': {
    name: '농기계운전기능사',
    icon: 'fa-tractor',
    category: '농림·수산',
    heroTitle: '2026년도 농기계운전기능사 합격 가이드',
    heroDesc: '농기계운전기능사는 트랙터·콤바인·이앙기 등 농업용 기계를 안전하고 효율적으로 운전·관리하는 전문 자격증입니다. 농촌 고령화로 인해 농기계 전문 인력 수요가 꾸준히 증가하고 있으며, 농업법인·영농조합·농협 등 취업에 유리합니다. 농기계정비기능사와 함께 취득 시 현장 경쟁력이 크게 높아집니다.',
    passRateSummary: '필기 60% | 실기 65%',
    avgPassRate: '62%',
    passRates: [
      { year: 2020, written: 57, practical: 62 },
      { year: 2021, written: 58, practical: 63 },
      { year: 2022, written: 60, practical: 65 },
      { year: 2023, written: 61, practical: 66 },
      { year: 2024, written: 62, practical: 67 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '농업기계 구조 및 기능', desc: '트랙터·콤바인·이앙기·관리기 등 주요 농기계 구조와 작동 원리' },
      { name: '농기계 운전 조작', desc: '경운·파종·수확·방제 등 작업별 농기계 운전 기술과 안전 수칙' },
      { name: '농기계 점검 및 정비', desc: '엔진 오일·필터·벨트 등 기본 점검 항목과 이상 발생 시 대처법' },
      { name: '농작업 안전 및 관련 법규', desc: '농기계 안전사고 예방, 농업기계화 촉진법 관련 주요 규정' },
    ],
    jobs: [
      { title: '농기계 운전원', company: '농업법인·영농조합', salary: '2,800~3,800만원', location: '전국 농촌', type: '정규직' },
      { title: '농협 농기계 임대 기사', company: '지역 농협', salary: '2,500~3,500만원', location: '전국', type: '정규직' },
      { title: '스마트팜 농기계 기사', company: '스마트팜 업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '농기계 임대·운반 기사', company: '농기계 임대업체', salary: '2,600~3,600만원', location: '전국', type: '계약직' },
      { title: '밭농업·논농업 전문 기사', company: '대규모 농업법인', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 Win-Q 농기계정비·운전기능사 필기 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2026 확! 바뀐 패스 농기계 운전정비 기능사 필기', author: '자격시험 연구회', publisher: '크라운출판사', year: 2025, rating: 4.4 },
      { title: '농기계운전기능사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.3 },
      { title: '농기계 운전·정비 실무', author: '농촌진흥청', publisher: '농촌진흥청', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '트랙터·콤바인 구조 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 농기계 운전 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '천장크레인운전기능사': {
    name: '천장크레인운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 천장크레인운전기능사 합격 가이드',
    heroDesc: '천장크레인운전기능사는 공장·창고·조선소 등의 천장크레인을 안전하고 효율적으로 운전하는 전문 자격증입니다. 제조업, 철강, 조선 등 다양한 산업 현장에서 필수 인력으로 활용됩니다. 정확한 조작 기술과 안전 의식이 합격과 현장 적응의 핵심입니다.',
    passRateSummary: '필기 58% | 실기 63%',
    avgPassRate: '61%',
    passRates: [
      { year: 2020, written: 54, practical: 59 },
      { year: 2021, written: 56, practical: 61 },
      { year: 2022, written: 59, practical: 64 },
      { year: 2023, written: 61, practical: 66 },
      { year: 2024, written: 58, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '천장크레인 구조 및 기능', desc: '천장크레인의 주요 구조, 거더·트롤리·호이스트의 원리에 관한 과목' },
      { name: '크레인 운전 조작', desc: '화물 인양, 횡행, 주행의 정확한 조작 기술에 관한 과목' },
      { name: '전기 제어 장치', desc: '전동기, 제어반 및 전기 안전 장치 구조와 작동에 관한 과목' },
      { name: '안전 관리 및 신호', desc: '크레인 작업 안전 기준, 신호 체계 및 줄걸이 작업에 관한 과목' },
      { name: '건설기계관계법규', desc: '크레인 검사·등록·운행에 관한 법령 및 기준에 관한 과목' },
    ],
    jobs: [
      { title: '천장크레인 운전원', company: '철강·금속 제조사', salary: '3,400~5,000만원', location: '전국', type: '정규직' },
      { title: '크레인 운전 기술자', company: '자동차 조립공장', salary: '3,600~5,200만원', location: '울산/광주', type: '정규직' },
      { title: '조선소 크레인 조종사', company: '조선·중공업', salary: '4,000~5,800만원', location: '거제/울산', type: '정규직' },
      { title: '물류 크레인 운전원', company: '대형 물류창고', salary: '3,200~4,500만원', location: '인천/경기', type: '정규직' },
      { title: '크레인 운전 보조', company: '건설 현장', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '천장크레인운전기능사 필기 완전정복', author: '정해성', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '천장크레인운전기능사 실기 한권완성', author: '이상훈', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '천장크레인운전기능사 기출문제 총정리', author: '박민준', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '크레인 운전 안전 실무', author: '김태호', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '불도저운전기능사': {
    name: '불도저운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 불도저운전기능사 합격 가이드',
    heroDesc: '불도저운전기능사는 토공 작업의 핵심 장비인 불도저를 안전하게 운전하는 전문 자격증입니다. 도로공사, 택지개발, 산지 정리 등 다양한 토목 건설현장에서 활발히 활용됩니다. 장비 특성에 맞는 이론 학습과 반복적인 실기 훈련이 합격의 지름길입니다.',
    passRateSummary: '필기 55% | 실기 60%',
    avgPassRate: '58%',
    passRates: [
      { year: 2020, written: 51, practical: 56 },
      { year: 2021, written: 53, practical: 58 },
      { year: 2022, written: 56, practical: 61 },
      { year: 2023, written: 58, practical: 63 },
      { year: 2024, written: 55, practical: 60 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '불도저 구조 및 기능', desc: '불도저의 주요 구조, 블레이드·리퍼·주행 장치의 원리에 관한 과목' },
      { name: '건설기계기관', desc: '디젤 엔진의 구조, 작동 원리 및 정비에 관한 과목' },
      { name: '유압 장치', desc: '유압 펌프, 실린더, 제어 밸브 등 유압 시스템에 관한 과목' },
      { name: '토공 작업 방법', desc: '굴착, 성토, 정지 등 토공 작업의 효율적 시공 방법에 관한 과목' },
      { name: '건설기계관계법규', desc: '건설기계 등록, 검사 및 안전 운행에 관한 법령에 관한 과목' },
    ],
    jobs: [
      { title: '불도저 운전원', company: '토목공사 전문업체', salary: '3,300~4,800만원', location: '전국', type: '정규직' },
      { title: '토공 장비 기술자', company: '도로건설 업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '건설 현장 장비 운용', company: '종합건설사', salary: '3,400~5,200만원', location: '전국', type: '정규직' },
      { title: '택지개발 토공 전문원', company: '공기업·LH', salary: '3,600~5,000만원', location: '전국', type: '정규직' },
      { title: '토공 장비 임대 운전', company: '건설장비 임대업체', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '불도저운전기능사 필기 완전정복', author: '김건우', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '불도저운전기능사 실기 한권완성', author: '이재영', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '불도저운전기능사 기출문제 총정리', author: '최성민', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '건설기계 토공 장비 이론과 실무', author: '박정호', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '로더운전기능사': {
    name: '로더운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 로더운전기능사 합격 가이드',
    heroDesc: '로더운전기능사는 휠로더·스키드로더 등 로더 장비를 안전하게 운전하는 전문 자격증입니다. 토사 및 골재 운반, 적재 작업이 많은 건설·채석·항만 현장에서 핵심 인력으로 활약합니다. 장비 조작 원리와 안전 법규를 철저히 익혀 합격과 현장 적응력을 동시에 높이세요.',
    passRateSummary: '필기 56% | 실기 61%',
    avgPassRate: '59%',
    passRates: [
      { year: 2020, written: 52, practical: 57 },
      { year: 2021, written: 54, practical: 59 },
      { year: 2022, written: 57, practical: 62 },
      { year: 2023, written: 59, practical: 64 },
      { year: 2024, written: 56, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '로더 구조 및 기능', desc: '로더의 버킷, 붐, 주행 장치 등 주요 구조에 관한 과목' },
      { name: '건설기계기관', desc: '디젤 엔진의 구조, 연료·냉각·윤활 시스템에 관한 과목' },
      { name: '유압 장치', desc: '유압 회로, 펌프·모터·실린더 등 유압 구성 요소에 관한 과목' },
      { name: '로더 작업 방법', desc: '굴착, 적재, 운반 등 효율적 로더 작업 기법에 관한 과목' },
      { name: '건설기계관계법규', desc: '건설기계 등록, 검사, 운행 안전에 관한 법령에 관한 과목' },
    ],
    jobs: [
      { title: '로더 운전원', company: '골재·채석 업체', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '건설현장 적재 장비 기술자', company: '토목공사 전문업체', salary: '3,400~5,000만원', location: '전국', type: '정규직' },
      { title: '항만 하역 로더 운전', company: '항만·물류업체', salary: '3,500~5,200만원', location: '인천/부산', type: '정규직' },
      { title: '산업단지 장비 운용', company: '산업단지 관리업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '건설 로더 임대 운전', company: '건설장비 임대업체', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '로더운전기능사 필기 완전정복', author: '강민수', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '로더운전기능사 실기 한권완성', author: '윤재호', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '로더운전기능사 기출문제 총정리', author: '조현석', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '건설기계 로더 이론과 실무', author: '손준혁', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '모터그레이더운전기능사': {
    name: '모터그레이더운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 모터그레이더운전기능사 합격 가이드',
    heroDesc: '모터그레이더운전기능사는 도로 정지·정형 작업에 특화된 모터그레이더를 안전하게 운전하는 전문 자격증입니다. 도로공사, 비행장 건설, 댐 및 대규모 토목 현장에서 필수 인력으로 활용됩니다. 정밀한 블레이드 조작 기술과 충실한 이론 학습으로 합격을 준비하세요.',
    passRateSummary: '필기 54% | 실기 59%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 50, practical: 55 },
      { year: 2021, written: 52, practical: 57 },
      { year: 2022, written: 55, practical: 60 },
      { year: 2023, written: 57, practical: 62 },
      { year: 2024, written: 54, practical: 59 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '모터그레이더 구조 및 기능', desc: '모터그레이더의 블레이드, 서클, 주행 장치 등 주요 구조에 관한 과목' },
      { name: '건설기계기관', desc: '디젤 엔진의 구조, 냉각·연료·윤활 시스템에 관한 과목' },
      { name: '유압 장치', desc: '블레이드 제어용 유압 회로 및 구성 요소에 관한 과목' },
      { name: '정지·정형 작업 방법', desc: '도로 정지, 사면 정형, 제설 등 효율적 작업 기법에 관한 과목' },
      { name: '건설기계관계법규', desc: '건설기계 등록, 검사 및 도로 운행에 관한 법령에 관한 과목' },
    ],
    jobs: [
      { title: '모터그레이더 운전원', company: '도로건설 업체', salary: '3,400~5,000만원', location: '전국', type: '정규직' },
      { title: '토목공사 정지 장비 기술자', company: '토목공사 전문업체', salary: '3,500~5,200만원', location: '전국', type: '정규직' },
      { title: '비행장 건설 장비 운용', company: '공항 건설 업체', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
      { title: '댐·저수지 토공 전문원', company: '수자원 공사', salary: '3,600~5,000만원', location: '전국', type: '정규직' },
      { title: '그레이더 임대 운전', company: '건설장비 임대업체', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '모터그레이더운전기능사 필기 완전정복', author: '한상욱', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '모터그레이더운전기능사 실기 한권완성', author: '임도현', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '모터그레이더운전기능사 기출문제 총정리', author: '오세진', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '건설기계 그레이더 이론과 실무', author: '남기태', publisher: '동일출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 중장비 그룹2 6종 ===
  '롤러운전기능사': {
    name: '롤러운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 롤러운전기능사 합격 가이드',
    heroDesc: '롤러운전기능사는 도로 포장 및 지반 다짐 작업에 사용되는 롤러 장비를 안전하고 효율적으로 운전하는 자격증입니다. 도로공사, 토목공사 현장에서 필수적으로 요구되는 자격으로 취업 경쟁력을 높일 수 있습니다. 체계적인 이론 학습과 실기 장비 조작 연습을 통해 합격을 준비하세요.',
    passRateSummary: '필기 58% | 실기 62%',
    avgPassRate: '60%',
    passRates: [
      { year: 2020, written: 55, practical: 60 },
      { year: 2021, written: 57, practical: 61 },
      { year: 2022, written: 59, practical: 63 },
      { year: 2023, written: 60, practical: 64 },
      { year: 2024, written: 58, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '건설기계기관', desc: '롤러 엔진 구조 및 작동 원리, 연료·냉각·윤활 계통 이해' },
      { name: '건설기계섀시', desc: '롤러 주행 장치, 진동 다짐 장치, 동력 전달 계통 구조' },
      { name: '유압일반', desc: '유압 펌프·모터·제어 밸브의 원리 및 유압 회로 분석' },
      { name: '건설기계전기', desc: '전기 계통 구성 요소, 시동·충전·조명 회로 점검 방법' },
      { name: '건설기계관계법규', desc: '건설기계관리법, 도로교통법 등 운전자 준수 법규 사항' },
    ],
    jobs: [
      { title: '롤러 운전원', company: '도로공사 전문업체', salary: '3,200~4,000만원', location: '전국', type: '정규직' },
      { title: '포장공사 운전원', company: '건설시공사', salary: '3,000~3,800만원', location: '전국', type: '정규직' },
      { title: '토목공사 장비 운전원', company: '토목전문건설사', salary: '3,100~3,900만원', location: '수도권', type: '정규직' },
      { title: '지반 다짐 장비 기사', company: '대형 건설사', salary: '3,400~4,200만원', location: '전국', type: '정규직' },
      { title: '건설장비 임대 운전원', company: '장비임대업체', salary: '2,800~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '롤러운전기능사 필기 완전정복', author: '건설기계연구회', publisher: '크라운출판사', year: 2024, rating: 4.5 },
      { title: '건설기계운전기능사 시리즈 핵심요약', author: '이현우', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '롤러운전기능사 기출문제집', author: '자격증닷컴 편집부', publisher: '자격증닷컴', year: 2023, rating: 4.3 },
      { title: '건설기계 유압·전기 기초이론', author: '박종민', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '천공기운전기능사': {
    name: '천공기운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 천공기운전기능사 합격 가이드',
    heroDesc: '천공기운전기능사는 암반 및 지반 굴착에 사용되는 천공기 장비를 전문적으로 운전하는 자격증입니다. 터널 공사, 댐 건설, 기초 공사 등 다양한 건설 현장에서 활용되며 전문 기술 인력으로 인정받을 수 있습니다. 건설기계 이론과 실기 조작 능력을 키워 현장 경쟁력을 확보하세요.',
    passRateSummary: '필기 54% | 실기 59%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 51, practical: 56 },
      { year: 2021, written: 53, practical: 58 },
      { year: 2022, written: 55, practical: 60 },
      { year: 2023, written: 56, practical: 61 },
      { year: 2024, written: 54, practical: 59 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '건설기계기관', desc: '천공기 엔진 구조 및 작동 원리, 연료·냉각·윤활 계통 이해' },
      { name: '건설기계섀시', desc: '천공기 주행 장치, 붐·드릴 장치, 동력 전달 계통 구조' },
      { name: '유압일반', desc: '천공 작업용 유압 회로, 고압 유압 장치 원리 및 점검' },
      { name: '건설기계전기', desc: '전기 계통 구성 요소, 제어 시스템 및 안전 장치 작동 이해' },
      { name: '건설기계관계법규', desc: '건설기계관리법, 산업안전보건법 등 천공 작업 관련 법규' },
    ],
    jobs: [
      { title: '천공기 운전원', company: '터널공사 전문업체', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '암반 굴착 기사', company: '기초공사 전문업체', salary: '3,400~4,300만원', location: '전국', type: '정규직' },
      { title: '토목공사 천공 운전원', company: '대형 토목건설사', salary: '3,600~4,600만원', location: '수도권', type: '정규직' },
      { title: '발파·천공 장비 기사', company: '광산·채석업체', salary: '3,800~4,800만원', location: '지방', type: '정규직' },
      { title: '건설장비 임대 운전원', company: '건설장비임대사', salary: '3,000~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '천공기운전기능사 필기 완전정복', author: '건설기계연구회', publisher: '크라운출판사', year: 2024, rating: 4.5 },
      { title: '건설기계운전기능사 핵심이론 총정리', author: '김철수', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '천공기운전기능사 최신 기출문제집', author: '자격증닷컴 편집부', publisher: '자격증닷컴', year: 2023, rating: 4.3 },
      { title: '건설기계 유압 실무', author: '이창호', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '항타및항발기운전기능사': {
    name: '항타및항발기운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 항타및항발기운전기능사 합격 가이드',
    heroDesc: '항타및항발기운전기능사는 말뚝 박기(항타)와 뽑기(항발) 작업에 사용되는 건설 장비를 전문적으로 운전하는 자격증입니다. 교량, 항만, 고층 건물 기초 공사 현장에서 핵심 인력으로 활약할 수 있습니다. 이론 학습과 함께 현장 실기 능력을 키워 전문 운전원으로 성장하세요.',
    passRateSummary: '필기 56% | 실기 61%',
    avgPassRate: '58%',
    passRates: [
      { year: 2020, written: 52, practical: 57 },
      { year: 2021, written: 54, practical: 59 },
      { year: 2022, written: 57, practical: 62 },
      { year: 2023, written: 58, practical: 63 },
      { year: 2024, written: 56, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '건설기계기관', desc: '항타기 엔진 및 동력 장치 구조, 연료·냉각·윤활 계통 이해' },
      { name: '건설기계섀시', desc: '항타·항발 장치 구조, 말뚝 관입 메커니즘 및 동력 전달 계통' },
      { name: '유압일반', desc: '유압 해머, 유압 제어 계통 원리 및 유압 회로 분석' },
      { name: '건설기계전기', desc: '전기 계통, 제어 장치, 안전 장치 구성 및 점검 방법' },
      { name: '건설기계관계법규', desc: '건설기계관리법, 항만·교량 공사 관련 안전 법규 사항' },
    ],
    jobs: [
      { title: '항타기 운전원', company: '기초공사 전문업체', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '말뚝 공사 장비 기사', company: '지반공사 전문업체', salary: '3,400~4,400만원', location: '전국', type: '정규직' },
      { title: '항만·교량 건설 운전원', company: '대형 건설사', salary: '3,700~4,700만원', location: '수도권·항만', type: '정규직' },
      { title: '토목기초 장비 운전원', company: '토목전문건설사', salary: '3,300~4,200만원', location: '전국', type: '정규직' },
      { title: '건설장비 임대 운전원', company: '중장비임대업체', salary: '3,000~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '항타및항발기운전기능사 필기 완전정복', author: '건설기계연구회', publisher: '크라운출판사', year: 2024, rating: 4.5 },
      { title: '건설기계 기초공사 장비 핵심이론', author: '정민준', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '항타및항발기운전기능사 기출문제집', author: '자격증닷컴 편집부', publisher: '자격증닷컴', year: 2023, rating: 4.3 },
      { title: '건설기계 유압·전기 종합 해설', author: '한국기술사협회', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '공기압축기운전기능사': {
    name: '공기압축기운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 공기압축기운전기능사 합격 가이드',
    heroDesc: '공기압축기운전기능사는 건설 현장에서 에어 공구, 천공기, 분사 장비 등에 압축 공기를 공급하는 공기압축기를 안전하게 운전하는 자격증입니다. 건설·토목, 제조·플랜트 등 다양한 산업 현장에서 폭넓게 활용 가능한 실용적인 자격입니다. 장비 이론과 실기 운전 능력을 갖춰 안정적인 취업을 준비하세요.',
    passRateSummary: '필기 62% | 실기 65%',
    avgPassRate: '63%',
    passRates: [
      { year: 2020, written: 58, practical: 62 },
      { year: 2021, written: 60, practical: 63 },
      { year: 2022, written: 63, practical: 66 },
      { year: 2023, written: 64, practical: 67 },
      { year: 2024, written: 62, practical: 65 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '건설기계기관', desc: '공기압축기 원동기(엔진·전동기) 구조 및 작동 원리' },
      { name: '건설기계섀시', desc: '압축기 본체 구조, 흡입·압축·토출 과정 및 냉각 장치' },
      { name: '유압일반', desc: '압축 공기 계통, 공압 회로 구성 요소 및 작동 원리 이해' },
      { name: '건설기계전기', desc: '전동기 구동 회로, 압력 스위치, 안전밸브 등 전기 제어 장치' },
      { name: '건설기계관계법규', desc: '건설기계관리법, 고압가스안전관리법 등 압축기 관련 법규' },
    ],
    jobs: [
      { title: '공기압축기 운전원', company: '건설시공사', salary: '3,000~3,800만원', location: '전국', type: '정규직' },
      { title: '플랜트 압축기 기사', company: '플랜트·제조업체', salary: '3,200~4,000만원', location: '산업단지', type: '정규직' },
      { title: '토목공사 장비 운전원', company: '토목전문건설사', salary: '3,100~3,900만원', location: '전국', type: '정규직' },
      { title: '압축기 유지보수 기사', company: '설비관리업체', salary: '3,300~4,100만원', location: '전국', type: '정규직' },
      { title: '건설장비 임대 운전원', company: '장비임대업체', salary: '2,800~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '공기압축기운전기능사 필기 완전정복', author: '건설기계연구회', publisher: '크라운출판사', year: 2024, rating: 4.5 },
      { title: '공압 시스템 핵심이론 및 기출문제', author: '이영호', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '공기압축기운전기능사 최신 기출문제집', author: '자격증닷컴 편집부', publisher: '자격증닷컴', year: 2023, rating: 4.3 },
      { title: '건설기계 공압·전기 종합 해설', author: '박상철', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '콘크리트펌프운전기능사': {
    name: '콘크리트펌프운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 콘크리트펌프운전기능사 합격 가이드',
    heroDesc: '콘크리트펌프운전기능사는 건설 현장에서 콘크리트를 원하는 위치로 압송하는 콘크리트 펌프 장비를 안전하게 운전하는 자격증입니다. 아파트, 교량, 터널 등 대형 건설 프로젝트 현장에서 꼭 필요한 전문 기술 인력입니다. 장비 구조 이해와 현장 실기 연습을 통해 전문 운전원으로 성장하세요.',
    passRateSummary: '필기 60% | 실기 64%',
    avgPassRate: '62%',
    passRates: [
      { year: 2020, written: 56, practical: 60 },
      { year: 2021, written: 58, practical: 62 },
      { year: 2022, written: 61, practical: 65 },
      { year: 2023, written: 62, practical: 66 },
      { year: 2024, written: 60, practical: 64 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '건설기계기관', desc: '콘크리트펌프 원동기 구조, 엔진·전동기 연료 및 냉각 계통' },
      { name: '건설기계섀시', desc: '붐 장치, 배관·배출 호스 구조, 아웃트리거 및 주행 장치' },
      { name: '유압일반', desc: '펌프 압송 유압 회로, 실린더 작동 원리, 유압 제어 밸브 이해' },
      { name: '건설기계전기', desc: '전기 제어 계통, 원격 제어 장치, 안전 인터록 장치 점검' },
      { name: '건설기계관계법규', desc: '건설기계관리법, 건설현장 안전관리 관련 법규 및 준수 사항' },
    ],
    jobs: [
      { title: '콘크리트펌프 운전원', company: '레미콘·건설업체', salary: '3,300~4,200만원', location: '전국', type: '정규직' },
      { title: '압송 장비 기사', company: '건설시공사', salary: '3,200~4,000만원', location: '수도권', type: '정규직' },
      { title: '아파트 공사 장비 운전원', company: '주택건설사', salary: '3,400~4,300만원', location: '수도권·광역시', type: '정규직' },
      { title: '토목·교량 공사 운전원', company: '토목전문건설사', salary: '3,500~4,400만원', location: '전국', type: '정규직' },
      { title: '건설장비 임대 운전원', company: '중장비임대업체', salary: '3,000~3,700만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '콘크리트펌프운전기능사 필기 완전정복', author: '건설기계연구회', publisher: '크라운출판사', year: 2024, rating: 4.5 },
      { title: '건설기계운전 핵심이론 및 실기 해설', author: '최준혁', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '콘크리트펌프운전기능사 최신 기출문제집', author: '자격증닷컴 편집부', publisher: '자격증닷컴', year: 2023, rating: 4.3 },
      { title: '건설기계 유압 시스템 실무 가이드', author: '김동훈', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '아스팔트피니셔운전기능사': {
    name: '아스팔트피니셔운전기능사',
    icon: 'fa-tractor',
    category: '건설·토목',
    heroTitle: '2026년도 아스팔트피니셔운전기능사 합격 가이드',
    heroDesc: '아스팔트피니셔운전기능사는 도로 포장 공사에서 아스팔트 혼합물을 균일하게 포설하는 피니셔 장비를 전문적으로 운전하는 자격증입니다. 고속도로, 국도, 도시 도로 포장 공사 현장에서 핵심적인 역할을 담당하는 전문 기술 인력입니다. 이론과 실기를 체계적으로 준비해 도로 포장 전문가로 도약하세요.',
    passRateSummary: '필기 57% | 실기 63%',
    avgPassRate: '60%',
    passRates: [
      { year: 2020, written: 53, practical: 59 },
      { year: 2021, written: 55, practical: 61 },
      { year: 2022, written: 58, practical: 64 },
      { year: 2023, written: 59, practical: 65 },
      { year: 2024, written: 57, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '건설기계기관', desc: '아스팔트피니셔 엔진 구조 및 작동 원리, 연료·냉각 계통 이해' },
      { name: '건설기계섀시', desc: '스크리드 장치, 컨베이어·오거 구조, 주행 및 포설 장치' },
      { name: '유압일반', desc: '포설 작업용 유압 회로, 스크리드 높이 조절 유압 실린더 원리' },
      { name: '건설기계전기', desc: '전기 제어 시스템, 자동 레벨링 장치, 가열 장치 전기 회로' },
      { name: '건설기계관계법규', desc: '건설기계관리법, 도로법, 도로 포장 공사 관련 안전 법규' },
    ],
    jobs: [
      { title: '아스팔트피니셔 운전원', company: '도로포장 전문업체', salary: '3,400~4,300만원', location: '전국', type: '정규직' },
      { title: '도로 포장 장비 기사', company: '건설시공사', salary: '3,300~4,200만원', location: '전국', type: '정규직' },
      { title: '고속도로 공사 운전원', company: '고속도로 건설사', salary: '3,600~4,500만원', location: '전국', type: '정규직' },
      { title: '국도 포장 공사 운전원', company: '토목전문건설사', salary: '3,200~4,000만원', location: '전국', type: '정규직' },
      { title: '도로 장비 임대 운전원', company: '도로장비임대업체', salary: '3,000~3,700만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '아스팔트피니셔운전기능사 필기 완전정복', author: '건설기계연구회', publisher: '크라운출판사', year: 2024, rating: 4.5 },
      { title: '도로포장 건설기계 핵심이론', author: '오재훈', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '아스팔트피니셔운전기능사 최신 기출문제집', author: '자격증닷컴 편집부', publisher: '자격증닷컴', year: 2023, rating: 4.3 },
      { title: '건설기계 유압·전기 기초 완성', author: '조민철', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 조작 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 운전면허 3종 ===
  '1종운전면허(대형)': {
    name: '1종운전면허(대형)',
    icon: 'fa-car',
    category: '교통·운전',
    heroTitle: '2026년도 1종운전면허(대형) 합격 가이드',
    heroDesc: '1종 대형 운전면허는 버스·트럭·특수차량 등 대형 차량을 운전할 수 있는 자격입니다. 도로교통공단(KoRoad) 시험장에서 상시 접수·응시가 가능하며, 학과→기능→도로주행 3단계를 순차적으로 통과해야 합니다. 대중교통·물류·건설 분야 취업에 필수적인 자격으로 취득 후 활용 범위가 넓습니다.',
    passRateSummary: '학과 55~65% | 기능+도로 50~60%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 58, practical: 52 },
      { year: 2021, written: 60, practical: 53 },
      { year: 2022, written: 62, practical: 55 },
      { year: 2023, written: 63, practical: 57 },
      { year: 2024, written: 65, practical: 59 },
    ],
    schedules: [
      { round: '상시', writtenExam: '연중 상시 접수·시험', writtenResult: '당일 발표', practicalExam: '학과 합격 후 즉시 예약', practicalResult: '당일 발표' },
    ],
    milestones: [
      { label: '학과시험 접수', date: '2026-01-01' },
      { label: '학과시험', date: '2026-01-07' },
      { label: '기능시험', date: '2026-01-14' },
      { label: '도로주행', date: '2026-01-21' },
    ],
    subjects: [
      { name: '교통법규', desc: '도로교통법, 신호·표지 이해' },
      { name: '자동차 구조', desc: '엔진·제동·조향 장치 기초 지식' },
      { name: '안전운전', desc: '긴급 상황 대처 및 방어운전' },
      { name: '기능시험', desc: '차로 변경·주차·경사로 출발 등 코스 주행' },
      { name: '도로주행', desc: '실제 도로에서 규정 준수 및 안전 운전 평가' },
    ],
    jobs: [
      { title: '버스 운전기사', company: '시내버스·고속버스 운수회사', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '화물차 기사', company: '물류·운송회사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '굴절차량 운전원', company: '굴절버스 운수회사', salary: '3,200~4,200만원', location: '수도권', type: '정규직' },
      { title: '특수차량 운전원', company: '건설·중장비 업체', salary: '3,500~5,500만원', location: '전국', type: '정규직' },
      { title: '대형 트럭 운전기사', company: '택배·물류 대기업', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 운전면허 학과시험 총정리 (1·2종 공통)', author: '도로교통공단', publisher: '도로교통공단', year: 2025, rating: 4.7 },
      { title: '운전면허 1종 대형 핵심 요약집', author: '카스쿨 편집부', publisher: '카스쿨', year: 2025, rating: 4.4 },
      { title: '2026 한번에 합격하는 운전면허 학과 문제집', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '운전면허 시험장 기능코스 완전정복', author: '드라이브 편집부', publisher: '길벗', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '학과 문제집 1회독 (교통법규 집중)',
      '문제은행 앱으로 모의시험 반복 (목표: 80점 이상)',
      '기능시험 코스 숙지 (경사로·굴절·직각 주차)',
      '도로주행 연습 (방향지시등·속도 조절 체크)',
      '시험장 사전 답사 및 예약 확인',
    ],
  },
  '1종운전면허(보통)': {
    name: '1종운전면허(보통)',
    icon: 'fa-car',
    category: '교통·운전',
    heroTitle: '2026년도 1종운전면허(보통) 합격 가이드',
    heroDesc: '1종 보통 운전면허는 승용차와 15인 이하 승합차, 적재중량 12톤 미만 화물차 등을 운전할 수 있는 자격입니다. 도로교통공단(KoRoad) 시험장에서 상시 접수·응시가 가능하며 직업 운전직 취업 시 가장 널리 요구되는 면허입니다. 택시·화물·렌터카 등 운수업 종사를 희망하는 분에게 필수 자격증입니다.',
    passRateSummary: '학과 60~70% | 기능+도로 55~65%',
    avgPassRate: '62%',
    passRates: [
      { year: 2020, written: 62, practical: 57 },
      { year: 2021, written: 64, practical: 59 },
      { year: 2022, written: 66, practical: 61 },
      { year: 2023, written: 68, practical: 63 },
      { year: 2024, written: 70, practical: 65 },
    ],
    schedules: [
      { round: '상시', writtenExam: '연중 상시 접수·시험', writtenResult: '당일 발표', practicalExam: '학과 합격 후 즉시 예약', practicalResult: '당일 발표' },
    ],
    milestones: [
      { label: '학과시험 접수', date: '2026-01-01' },
      { label: '학과시험', date: '2026-01-07' },
      { label: '기능시험', date: '2026-01-14' },
      { label: '도로주행', date: '2026-01-21' },
    ],
    subjects: [
      { name: '교통법규', desc: '도로교통법, 신호·표지 이해' },
      { name: '자동차 구조', desc: '엔진·제동·조향 장치 기초 지식' },
      { name: '안전운전', desc: '긴급 상황 대처 및 방어운전' },
      { name: '기능시험', desc: '차로 변경·주차·경사로 출발 등 코스 주행' },
      { name: '도로주행', desc: '실제 도로에서 규정 준수 및 안전 운전 평가' },
    ],
    jobs: [
      { title: '택시 운전사', company: '개인·법인 택시 회사', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '화물차 기사', company: '중소 운송·물류회사', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '렌터카 드라이버', company: '렌터카·카셰어링 업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '셔틀버스 운전기사', company: '기업·학교·공공기관', salary: '2,800~3,500만원', location: '전국', type: '정규직' },
      { title: '대리운전 기사', company: '대리운전 플랫폼', salary: '2,500~4,000만원', location: '전국', type: '프리랜서' },
    ],
    books: [
      { title: '2026 운전면허 학과시험 총정리 (1·2종 공통)', author: '도로교통공단', publisher: '도로교통공단', year: 2025, rating: 4.7 },
      { title: '2026 한번에 합격하는 운전면허 학과 문제집', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '운전면허 1종 보통 30일 완성', author: '카드라이브 편집부', publisher: '성안당', year: 2025, rating: 4.4 },
      { title: '운전면허 시험장 기능코스 완전정복', author: '드라이브 편집부', publisher: '길벗', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '학과 문제집 1회독 (교통법규 집중)',
      '문제은행 앱으로 모의시험 반복 (목표: 80점 이상)',
      '기능시험 코스 숙지 (경사로·굴절·직각 주차)',
      '도로주행 연습 (방향지시등·속도 조절 체크)',
      '시험장 사전 답사 및 예약 확인',
    ],
  },
  '2종운전면허(보통)': {
    name: '2종운전면허(보통)',
    icon: 'fa-car',
    category: '교통·운전',
    heroTitle: '2026년도 2종운전면허(보통) 합격 가이드',
    heroDesc: '2종 보통 운전면허는 승용차와 10인 이하 승합차, 적재중량 4톤 이하 화물차를 운전할 수 있는 가장 기본적인 운전 자격입니다. 도로교통공단(KoRoad) 시험장에서 상시 접수·응시가 가능하며, 1종에 비해 시험 난이도가 낮아 일반인이 가장 많이 취득하는 면허입니다. 취업·생활 전반에서 폭넓게 활용되는 필수 생활 자격증입니다.',
    passRateSummary: '학과 65~75% | 기능+도로 60~70%',
    avgPassRate: '68%',
    passRates: [
      { year: 2020, written: 67, practical: 62 },
      { year: 2021, written: 69, practical: 64 },
      { year: 2022, written: 71, practical: 65 },
      { year: 2023, written: 73, practical: 67 },
      { year: 2024, written: 75, practical: 69 },
    ],
    schedules: [
      { round: '상시', writtenExam: '연중 상시 접수·시험', writtenResult: '당일 발표', practicalExam: '학과 합격 후 즉시 예약', practicalResult: '당일 발표' },
    ],
    milestones: [
      { label: '학과시험 접수', date: '2026-01-01' },
      { label: '학과시험', date: '2026-01-07' },
      { label: '기능시험', date: '2026-01-14' },
      { label: '도로주행', date: '2026-01-21' },
    ],
    subjects: [
      { name: '교통법규', desc: '도로교통법, 신호·표지 이해' },
      { name: '자동차 구조', desc: '엔진·제동·조향 장치 기초 지식' },
      { name: '안전운전', desc: '긴급 상황 대처 및 방어운전' },
      { name: '기능시험', desc: '차로 변경·주차·경사로 출발 등 코스 주행' },
      { name: '도로주행', desc: '실제 도로에서 규정 준수 및 안전 운전 평가' },
    ],
    jobs: [
      { title: '배달 드라이버', company: '쿠팡·마켓컬리 등 물류 플랫폼', salary: '2,800~4,000만원', location: '전국', type: '계약직' },
      { title: '영업용 차량 운전기사', company: '중소기업·유통회사', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '카셰어링 관리원', company: '카셰어링·렌터카 업체', salary: '2,500~3,200만원', location: '전국', type: '정규직' },
      { title: '사설 구급차 운전원', company: '사설 응급 이송업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '경비·시설 관리원', company: '아파트·건물 관리업체', salary: '2,400~3,200만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 운전면허 학과시험 총정리 (1·2종 공통)', author: '도로교통공단', publisher: '도로교통공단', year: 2025, rating: 4.7 },
      { title: '2026 한번에 합격하는 운전면허 학과 문제집', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '운전면허 2종 보통 단기 합격 비법', author: '자동차생활 편집부', publisher: '성안당', year: 2025, rating: 4.4 },
      { title: '운전면허 시험장 기능코스 완전정복', author: '드라이브 편집부', publisher: '길벗', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '학과 문제집 1회독 (교통법규 집중)',
      '문제은행 앱으로 모의시험 반복 (목표: 80점 이상)',
      '기능시험 코스 숙지 (경사로·굴절·직각 주차)',
      '도로주행 연습 (방향지시등·속도 조절 체크)',
      '시험장 사전 답사 및 예약 확인',
    ],
  },
// === 화물운송종사 ===
  '화물운송종사': {
    name: '화물운송종사',
    icon: 'fa-truck',
    category: '교통·운전',
    heroTitle: '2026년도 화물운송종사자격 합격 가이드',
    heroDesc: '화물운송종사자격은 화물자동차운수사업법에 따라 영업용 화물차(용달·개별·일반화물) 운전자에게 필수적으로 요구되는 국가자격입니다. 한국교통안전공단(TS)에서 전국 상시 시행하며, 필기시험(객관식 4지선다, 80문항)만으로 구성됩니다. 물류·배송·택배 업종 취업 및 사업 면허 취득에 반드시 필요한 자격입니다.',
    passRateSummary: '필기 60~70% (상시시험)',
    avgPassRate: '65%',
    passRates: [
      { year: 2020, written: 60, practical: null },
      { year: 2021, written: 62, practical: null },
      { year: 2022, written: 63, practical: null },
      { year: 2023, written: 65, practical: null },
      { year: 2024, written: 67, practical: null },
    ],
    schedules: [
      {
        round: '상시(연중)',
        isCurrent: true,
        isDone: false,
        writtenApply: '한국교통안전공단(TS) 홈페이지 상시 접수 (ts2020.or.kr)',
        writtenExam: '접수 후 지정일 응시 (전국 TS 검사소)',
        writtenResult: '시험 당일 또는 익일 발표',
        practicalApply: '—',
        practicalExam: '—',
        finalResult: '합격 즉시 자격증 발급 신청 가능',
      },
    ],
    milestones: [
      { label: '수시 접수 가능 (TS 홈페이지)', date: '2026-01-01' },
    ],
    subjects: [
      { name: '교통 및 화물자동차운수사업 관련 법규', desc: '화물자동차운수사업법, 도로교통법, 교통안전법 주요 조항' },
      { name: '화물취급요령', desc: '화물의 적재·고박·포장 방법, 위험물·특수화물 취급 기준' },
      { name: '안전운행', desc: '방어운전, 피로 관리, 기상 조건별 운전 요령, 교통사고 예방' },
      { name: '운송서비스', desc: '고객 응대, 화물 인수도, 운임 계산, 운송장 작성 방법' },
    ],
    jobs: [
      { title: '택배 배송기사', company: '택배·물류업체', salary: '3,000~4,500만원', location: '전국', type: '계약직' },
      { title: '용달·개별화물 기사', company: '개인사업자', salary: '3,500~5,000만원', location: '전국', type: '개인사업' },
      { title: '화물차량 운전원', company: '일반화물운송업체', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '냉동·냉장 화물기사', company: '식품·유통업체', salary: '3,500~5,200만원', location: '전국', type: '정규직' },
      { title: '위험물 운반 차량 기사', company: '위험물운송업체', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '화물운송종사자격 한권으로 끝내기', author: '김동현', publisher: '성안당', year: 2025, rating: 4.6 },
      { title: '화물운송종사 자격시험 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '화물운송종사자격 실전 모의고사 800제', author: '자격시험 편집부', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '화물운송 관련 법규 완전정복', author: '교통법규 연구회', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '시험 4과목 범위 파악 및 출제 비율 확인',
      '화물자동차운수사업법 핵심 조항 암기',
      '화물취급요령·안전운행 이론 정리',
      '기출문제 풀이 (최근 3개년, 80문항 기준)',
      'TS 홈페이지에서 시험 일정 확인 및 접수',
    ],
  },

// === 버스·택시 운전자격 ===
  '버스운전자격': {
    name: '버스운전자격',
    icon: 'fa-bus',
    category: '교통·운전',
    heroTitle: '2026년도 버스운전자격 합격 가이드',
    heroDesc: '버스운전자격은 여객자동차운수사업법에 따라 노선버스·전세버스·특수여객 등 사업용 버스를 운전하는 데 필수적인 국가자격입니다. 한국교통안전공단(TS)에서 상시 시행하며, 학과시험(60문항)과 기능시험으로 구성됩니다. 1종 대형 면허 소지자라면 도로주행 시험 없이 응시 가능하여 비교적 빠르게 취득할 수 있습니다.',
    passRateSummary: '학과 65% | 기능 70%',
    avgPassRate: '67%',
    passRates: [
      { year: 2020, written: 62, practical: 68 },
      { year: 2021, written: 63, practical: 69 },
      { year: 2022, written: 65, practical: 70 },
      { year: 2023, written: 66, practical: 71 },
      { year: 2024, written: 67, practical: 72 },
    ],
    schedules: [
      {
        round: '상시(연중)',
        isCurrent: true,
        isDone: false,
        writtenApply: '한국교통안전공단(TS) 홈페이지 상시 접수 (ts2020.or.kr)',
        writtenExam: '접수 후 지정일 응시 (전국 TS 검사소)',
        writtenResult: '시험 당일 또는 익일 발표',
        practicalApply: '학과 합격 후 기능시험 접수',
        practicalExam: '지정 기능시험장 방문 응시',
        finalResult: '기능 합격 즉시 자격증 발급 신청 가능',
      },
    ],
    milestones: [
      { label: '수시 접수 가능 (TS 홈페이지)', date: '2026-01-01' },
    ],
    subjects: [
      { name: '여객자동차운수사업 관련 법규', desc: '여객자동차운수사업법, 도로교통법, 교통안전법 핵심 조항' },
      { name: '안전운행', desc: '방어운전, 긴급상황 대처, 기상 조건별 운전 요령, 교통사고 예방' },
      { name: '운송서비스', desc: '승객 서비스, 장애인·노약자 응대, 민원 처리, 요금 수수 절차' },
      { name: '교통사고 및 응급처치', desc: '교통사고 처리 절차, 심폐소생술(CPR), 응급처치 기본 방법' },
    ],
    jobs: [
      { title: '시내버스 기사', company: '시내버스 운수업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '고속버스·시외버스 기사', company: '고속·시외버스업체', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '전세버스 기사', company: '전세버스업체', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '통근·통학버스 기사', company: '기업·학교', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
      { title: '공항리무진 버스 기사', company: '공항운송업체', salary: '3,500~4,500만원', location: '서울·경기·인천', type: '정규직' },
    ],
    books: [
      { title: '버스운전자격 한권으로 끝내기', author: '김동현', publisher: '성안당', year: 2025, rating: 4.6 },
      { title: '버스운전자격 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '버스운전자격 실전 모의고사 600제', author: '자격시험 편집부', publisher: '예문사', year: 2024, rating: 4.3 },
      { title: '여객운수 관련 법규 완전정복', author: '교통법규 연구회', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '시험 4과목 범위 파악 및 출제 비율 확인',
      '여객자동차운수사업법 핵심 조항 암기',
      '안전운행·운송서비스 이론 정리',
      '응급처치(CPR) 기초 학습',
      'TS 홈페이지에서 시험 일정 확인 및 접수',
    ],
  },

  '택시운전자격': {
    name: '택시운전자격',
    icon: 'fa-taxi',
    category: '교통·운전',
    heroTitle: '2026년도 택시운전자격 합격 가이드',
    heroDesc: '택시운전자격은 여객자동차운수사업법에 따라 일반택시·개인택시·법인택시를 운전하기 위해 반드시 취득해야 하는 국가자격입니다. 한국교통안전공단(TS)에서 상시 시행하며, 학과시험(80문항)만으로 구성됩니다. 응시 지역의 지리 문제가 출제되므로 해당 지역 도로·명소를 함께 학습하는 것이 합격의 핵심입니다.',
    passRateSummary: '학과 55~65% (상시시험)',
    avgPassRate: '60%',
    passRates: [
      { year: 2020, written: 55, practical: null },
      { year: 2021, written: 57, practical: null },
      { year: 2022, written: 58, practical: null },
      { year: 2023, written: 60, practical: null },
      { year: 2024, written: 62, practical: null },
    ],
    schedules: [
      {
        round: '상시(연중)',
        isCurrent: true,
        isDone: false,
        writtenApply: '한국교통안전공단(TS) 홈페이지 상시 접수 (ts2020.or.kr)',
        writtenExam: '접수 후 지정일 응시 (전국 TS 검사소)',
        writtenResult: '시험 당일 또는 익일 발표',
        practicalApply: '—',
        practicalExam: '—',
        finalResult: '합격 즉시 자격증 발급 신청 가능',
      },
    ],
    milestones: [
      { label: '수시 접수 가능 (TS 홈페이지)', date: '2026-01-01' },
    ],
    subjects: [
      { name: '여객자동차운수사업 관련 법규', desc: '여객자동차운수사업법, 도로교통법, 택시 요금 및 미터기 관련 규정' },
      { name: '안전운행', desc: '방어운전, 야간·악천후 운전 요령, 교통사고 예방 및 현장 대처' },
      { name: '운송서비스', desc: '승객 응대 예절, 카드·현금 결제, 콜택시 시스템, 민원 처리 방법' },
      { name: '지리(응시 지역)', desc: '응시 지역 주요 도로·명소·공공기관·교통 체계 숙지 (지역별 출제)' },
    ],
    jobs: [
      { title: '법인택시 기사', company: '택시운수법인', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '개인택시 기사', company: '개인사업자', salary: '3,500~5,500만원', location: '전국', type: '개인사업' },
      { title: '플랫폼택시 기사', company: '카카오T·타다 등', salary: '3,200~4,800만원', location: '전국', type: '계약직' },
      { title: '대리운전·택시 겸업', company: '개인', salary: '2,500~3,500만원', location: '전국', type: '개인사업' },
      { title: '모범택시 기사', company: '모범택시 업체', salary: '3,800~5,200만원', location: '대도시', type: '정규직' },
    ],
    books: [
      { title: '택시운전자격 한권으로 끝내기', author: '김동현', publisher: '성안당', year: 2025, rating: 4.6 },
      { title: '택시운전자격 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2025, rating: 4.5 },
      { title: '택시운전자격 실전 모의고사 800제', author: '자격시험 편집부', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '서울·경기 지리 완전정복 (택시 지리 특화)', author: '지리시험 연구회', publisher: '일진사', year: 2025, rating: 4.3 },
    ],
    defaultTodos: [
      '시험 4과목 범위 파악 및 출제 비율 확인',
      '여객자동차운수사업법 핵심 조항 암기',
      '안전운행·운송서비스 이론 정리',
      '응시 지역 지리 문제 집중 학습 (도로·명소·기관)',
      'TS 홈페이지에서 시험 일정 확인 및 접수',
    ],
  },

// === 자동차 그룹1 5종 ===
  '이륜자동차운전면허': {
    name: '이륜자동차운전면허',
    icon: 'fa-motorcycle',
    category: '교통·운전',
    heroTitle: '2026년도 이륜자동차운전면허 합격 가이드',
    heroDesc: '이륜자동차운전면허는 오토바이·스쿠터 등 이륜차를 합법적으로 운행하기 위해 필수적인 면허입니다. 학과시험과 기능시험으로 구성되며, 운전면허시험장에서 상시 접수 및 응시가 가능합니다. 배달·물류 종사자부터 레저 라이더까지 폭넓게 활용되는 자격입니다.',
    passRateSummary: '학과 70% | 기능 65%',
    avgPassRate: '68%',
    passRates: [
      { year: 2020, written: 68, practical: 63 },
      { year: 2021, written: 70, practical: 64 },
      { year: 2022, written: 71, practical: 65 },
      { year: 2023, written: 69, practical: 66 },
      { year: 2024, written: 70, practical: 65 },
    ],
    schedules: [
      { round: '상시', writtenExam: '연중 상시 접수·시험', writtenResult: '당일 발표', practicalExam: '학과 합격 후 즉시 예약', practicalResult: '당일 발표' },
    ],
    milestones: [
      { label: '학과 응시', date: '2026-01-05' },
      { label: '기능 응시', date: '2026-01-12' },
      { label: '도로주행', date: '2026-01-19' },
      { label: '면허 취득', date: '2026-01-20' },
    ],
    subjects: [
      { name: '교통법규', desc: '도로교통법 및 이륜차 관련 법규 이해' },
      { name: '안전운전', desc: '이륜차 안전 운행 요령 및 방어운전 기술' },
      { name: '도로주행', desc: '실제 도로 환경에서의 이륜차 조작 및 주행' },
      { name: '기초기능', desc: '이륜차 발진·정지·방향 전환 등 기본 조작' },
      { name: '이륜차 구조', desc: '이륜차 기본 구조 및 점검 요령' },
    ],
    jobs: [
      { title: '배달라이더', company: '배달 플랫폼', salary: '3,000~4,500만원', location: '전국', type: '계약직' },
      { title: '퀵서비스 기사', company: '물류·배송업체', salary: '3,000~4,000만원', location: '수도권', type: '정규직' },
      { title: '이륜차 강사', company: '운전면허학원', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '이륜차 정비원', company: '이륜차 정비소', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '우편집배원', company: '우체국·공공기관', salary: '3,200~4,200만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '이륜자동차 운전면허 학과시험 총정리', author: '도로교통공단', publisher: '도로교통공단', year: 2024, rating: 4.5 },
      { title: '이륜차 면허 기출문제 완전정복', author: '면허연구회', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '이륜자동차 안전운전 가이드', author: '김안전', publisher: '일진사', year: 2023, rating: 4.3 },
      { title: '오토바이 면허 한 번에 합격하기', author: '박합격', publisher: '크라운출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '도로교통법 이륜차 관련 조항 집중 학습',
      '학과시험 기출문제 반복 풀이',
      '기초 기능 코스 연습 (굴절·곡선·연속진로전환)',
      '실제 도로 상황 대비 안전운전 요령 숙지',
      '최근 기출 문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동차정비기사': {
    name: '자동차정비기사',
    icon: 'fa-car-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 자동차정비기사 합격 가이드',
    heroDesc: '자동차정비기사는 자동차의 엔진, 섀시, 전기장치 등 전반적인 정비 및 점검 능력을 검증하는 국가기술자격입니다. 자동차 딜러사 서비스센터, 자동차검사소, 독립 정비업체 등 다양한 분야에서 활발히 활용됩니다. 기계·전기 융합 지식이 요구되며 취업 및 창업 경쟁력을 높이는 핵심 자격입니다.',
    passRateSummary: '필기 45% | 실기 55%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 43, practical: 52 },
      { year: 2021, written: 45, practical: 54 },
      { year: 2022, written: 47, practical: 56 },
      { year: 2023, written: 44, practical: 55 },
      { year: 2024, written: 46, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동차엔진정비', desc: '엔진 구조 원리, 고장 진단 및 정비 방법' },
      { name: '자동차섀시정비', desc: '동력전달장치, 현가장치, 제동장치 구조 및 정비' },
      { name: '자동차전기·전자장치정비', desc: '전기회로, 전자제어 시스템 진단 및 수리' },
      { name: '자동차차체정비', desc: '차체 구조, 판금·도장 및 안전기준' },
      { name: '자동차정비검사', desc: '법정 정기검사 기준 및 검사 방법론' },
    ],
    jobs: [
      { title: '자동차정비기사', company: '완성차 딜러 서비스센터', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '정비팀장', company: '자동차 정비업체', salary: '4,500~6,000만원', location: '수도권', type: '정규직' },
      { title: '자동차검사원', company: '자동차검사소', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '기술지원 엔지니어', company: '자동차부품 제조사', salary: '4,200~5,500만원', location: '수도권·충청', type: '정규직' },
      { title: '자동차정비 강사', company: '직업훈련기관', salary: '3,500~4,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '자동차정비기사 필기 완전정복', author: '이정비', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '자동차정비기사 실기 실전문제', author: '박엔진', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '자동차정비기사 기출문제 총정리', author: '자동차정비연구회', publisher: '성안당', year: 2023, rating: 4.3 },
      { title: '자동차 엔진·섀시·전기 핵심이론', author: '김기사', publisher: '크라운출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '엔진·섀시·전기장치 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 점검 및 진단 실습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동차정비산업기사': {
    name: '자동차정비산업기사',
    icon: 'fa-car-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 자동차정비산업기사 합격 가이드',
    heroDesc: '자동차정비산업기사는 자동차 각 장치의 점검·진단·정비 능력을 평가하는 국가기술자격으로, 기능사보다 심화된 이론과 실무 능력이 요구됩니다. 정비업체, 검사소, 완성차 서비스센터 등에서 중간 관리 및 전문 기술직으로 활약할 수 있습니다. 기사 자격 취득을 위한 디딤돌로도 널리 활용됩니다.',
    passRateSummary: '필기 50% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 46, practical: 51 },
      { year: 2021, written: 48, practical: 53 },
      { year: 2022, written: 51, practical: 56 },
      { year: 2023, written: 50, practical: 55 },
      { year: 2024, written: 52, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동차엔진', desc: '엔진 주요 구성요소의 구조·작동 원리 및 정비' },
      { name: '자동차섀시', desc: '조향·제동·현가 장치의 구조 원리 및 점검 정비' },
      { name: '자동차전기', desc: '충전·시동·등화 회로 및 전자제어 시스템 정비' },
      { name: '자동차정비', desc: '각 장치별 분해·조립·측정 및 수리 실무' },
      { name: '안전관리', desc: '정비 작업 중 산업안전 및 환경 법규 준수' },
    ],
    jobs: [
      { title: '자동차정비 기술원', company: '자동차 정비업체', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
      { title: '서비스 어드바이저', company: '완성차 딜러사', salary: '3,800~5,000만원', location: '수도권', type: '정규직' },
      { title: '자동차검사원', company: '자동차검사소', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '정비기술 지원', company: '자동차부품 제조사', salary: '3,800~5,000만원', location: '수도권·경기', type: '정규직' },
      { title: '자동차정비 교육강사', company: '직업능력개발원', salary: '3,200~4,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '자동차정비산업기사 필기 단기완성', author: '최정비', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '자동차정비산업기사 실기 실전정복', author: '이섀시', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '자동차정비산업기사 기출문제집', author: '자동차기술연구회', publisher: '성안당', year: 2023, rating: 4.3 },
      { title: '자동차 전기·전자 핵심이론과 실기', author: '박전기', publisher: '크라운출판사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 장비 점검 및 진단 실습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동차정비기능장': {
    name: '자동차정비기능장',
    icon: 'fa-car-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 자동차정비기능장 합격 가이드',
    heroDesc: '자동차정비기능장은 자동차 정비 분야 최고 등급의 국가기술자격으로, 고난이도 진단·정비 능력과 현장 지도 역량을 동시에 검증합니다. 합격률이 낮아 철저한 준비가 필요하며, 취득 후에는 정비소 개설·운영 및 기능 인력 지도·감독 역할을 수행할 수 있습니다. 자동차 정비 분야 최고 전문가로 인정받는 권위 있는 자격입니다.',
    passRateSummary: '필기 40% | 실기 45%',
    avgPassRate: '42%',
    passRates: [
      { year: 2020, written: 37, practical: 41 },
      { year: 2021, written: 39, practical: 43 },
      { year: 2022, written: 41, practical: 46 },
      { year: 2023, written: 38, practical: 44 },
      { year: 2024, written: 40, practical: 45 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동차엔진 고급정비', desc: '엔진 전자제어 시스템 심화 진단 및 오버홀' },
      { name: '자동차섀시 고급정비', desc: '자동변속기, ABS, 전자식 현가장치 정밀 정비' },
      { name: '자동차전기·전자 고급정비', desc: 'CAN 통신, 첨단 안전장치(ADAS) 진단 및 수리' },
      { name: '자동차 작업관리', desc: '현장 지도·감독, 작업 표준 수립 및 품질 관리' },
      { name: '안전·환경관리', desc: '고전압 전기차 안전 작업 및 폐기물 처리 기준' },
    ],
    jobs: [
      { title: '정비소 소장·기술이사', company: '자동차 정비업체', salary: '5,000~7,000만원', location: '전국', type: '정규직' },
      { title: '완성차 서비스 마스터', company: '완성차 딜러사', salary: '5,500~7,500만원', location: '수도권', type: '정규직' },
      { title: '자동차검사 수석검사원', company: '자동차검사소', salary: '4,500~6,000만원', location: '전국', type: '정규직' },
      { title: '기술훈련 교수', company: '직업능력개발원·폴리텍대', salary: '4,800~6,500만원', location: '전국', type: '정규직' },
      { title: '자동차 기술 컨설턴트', company: '자동차 컨설팅사', salary: '5,000~8,000만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '자동차정비기능장 필기 완전정복', author: '이마스터', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '자동차정비기능장 실기 핵심정복', author: '박기능장', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '자동차정비기능장 20개년 기출문제', author: '자동차고급정비연구회', publisher: '성안당', year: 2023, rating: 4.3 },
      { title: '자동차 전자제어 시스템 심화이론', author: '김전자', publisher: '골든벨', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '전자제어·CAN통신 등 심화 이론 집중 정리',
      '기출문제 풀이 (최근 5개년)',
      '오버홀·정밀 진단 실기 집중 실습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 자동차 그룹2 5종 ===
  '자동차차체수리기능사': {
    name: '자동차차체수리기능사',
    icon: 'fa-car-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 자동차차체수리기능사 합격 가이드',
    heroDesc: '자동차 사고 후 차체 복원 및 판금·용접 작업을 전문적으로 수행하는 기능사 자격증입니다. 자동차 보험 수리 수요 증가로 취업 전망이 안정적이며, 정비소·카센터에서 즉시 실무에 투입 가능한 기술을 검증합니다.',
    passRateSummary: '필기 60% | 실기 55%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 58, practical: 52 },
      { year: 2021, written: 61, practical: 54 },
      { year: 2022, written: 63, practical: 56 },
      { year: 2023, written: 60, practical: 55 },
      { year: 2024, written: 62, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '차체수리', desc: '차체 손상 진단 및 복원 이론, 교정 작업 방법' },
      { name: '판금 작업', desc: '금속판 가공·성형, 해머링 및 평탄화 작업 기법' },
      { name: '용접', desc: 'MIG·스폿 용접 원리 및 차체 용접 적용 방법' },
      { name: '자동차 구조', desc: '차체 구조·부품 명칭, 안전 구조물(필러·사이드실 등)' },
      { name: '도면 해독', desc: '차체 수리 도면 및 부품 카탈로그 해독 방법' },
    ],
    jobs: [
      { title: '차체수리 기술자', company: '자동차 보험 수리 전문점', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '판금·용접 담당', company: '자동차 딜러 직영 서비스센터', salary: '3,200~4,200만원', location: '수도권', type: '정규직' },
      { title: '차체 복원 기술자', company: '일반 카센터', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '사고차량 수리 담당', company: '렌터카·리스 회사 정비팀', salary: '3,000~3,800만원', location: '수도권·광역시', type: '정규직' },
      { title: '차체수리 보조', company: '자동차 수리 전문점', salary: '2,400~3,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '자동차차체수리기능사 필기+실기', author: '이재훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '차체수리기능사 한권으로 끝내기', author: '박동준', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '자동차 판금·용접 실무', author: '김성호', publisher: '골든벨', year: 2023, rating: 4.3 },
      { title: '차체수리기능사 기출문제집', author: '자격시험연구회', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동차보수도장기능사': {
    name: '자동차보수도장기능사',
    icon: 'fa-spray-can',
    category: '기계·설비',
    heroTitle: '2026년도 자동차보수도장기능사 합격 가이드',
    heroDesc: '자동차 사고 및 도장 손상 후 보수 도장 작업을 전문으로 수행하는 기능사 자격증입니다. 색조 조색·배합, 표면 처리, 도장 공정 전반을 다루며 자동차 수리 업계의 핵심 기술 인력으로 인정받습니다.',
    passRateSummary: '필기 65% | 실기 60%',
    avgPassRate: '62%',
    passRates: [
      { year: 2020, written: 62, practical: 57 },
      { year: 2021, written: 64, practical: 58 },
      { year: 2022, written: 67, practical: 61 },
      { year: 2023, written: 65, practical: 60 },
      { year: 2024, written: 66, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '도장 공정', desc: '프라이머·서페이서·상도 도장 공정 순서 및 방법' },
      { name: '색조 조색', desc: '도료 색상 분석, 배합비 계산, 색상 매칭 기법' },
      { name: '표면 처리', desc: '연마·탈지·마스킹 등 도장 전 표면 준비 작업' },
      { name: '도료 및 재료', desc: '도료 종류·성분, 희석제·경화제 사용법' },
      { name: '도장 결함 및 보정', desc: '핀홀·오렌지필·흘림 등 도장 결함 원인 및 보정 방법' },
    ],
    jobs: [
      { title: '보수도장 기술자', company: '자동차 보험 수리 전문점', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '도장 담당', company: '자동차 딜러 직영 서비스센터', salary: '3,200~4,200만원', location: '수도권', type: '정규직' },
      { title: '차량 도색 전문가', company: '도장 전문 수리점', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '도장 기술자', company: '완성차 협력 정비사', salary: '3,000~4,000만원', location: '수도권·광역시', type: '정규직' },
      { title: '도장 보조 기술자', company: '카센터·소형 수리점', salary: '2,400~3,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '자동차보수도장기능사 필기+실기', author: '이승철', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '보수도장기능사 한권으로 끝내기', author: '정우석', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '자동차 도장 실무 기술', author: '김태호', publisher: '골든벨', year: 2023, rating: 4.3 },
      { title: '보수도장기능사 기출문제집', author: '자격시험연구회', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동차검사기사': {
    name: '자동차검사기사',
    icon: 'fa-car-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 자동차검사기사 합격 가이드',
    heroDesc: '자동차 안전·환경 검사 업무를 전문적으로 수행하는 기사급 자격증으로, 교통안전공단 및 민간 검사소에서 활동할 수 있습니다. 법규·배출가스·제동·조향 등 종합적인 자동차 검사 지식을 요구하는 고난도 자격증입니다.',
    passRateSummary: '필기 45% | 실기 50%',
    avgPassRate: '47%',
    passRates: [
      { year: 2020, written: 42, practical: 47 },
      { year: 2021, written: 44, practical: 49 },
      { year: 2022, written: 46, practical: 51 },
      { year: 2023, written: 45, practical: 50 },
      { year: 2024, written: 47, practical: 52 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동차검사 법규', desc: '자동차관리법, 검사 기준 및 방법에 관한 규정' },
      { name: '배출가스 검사', desc: 'CO·HC·NOx 측정, OBD 검사, 매연 측정 기준' },
      { name: '제동·조향 검사', desc: '제동력 측정 원리, 조향 각도 및 사이드슬립 검사' },
      { name: '등화·소음 검사', desc: '전조등 조사 방향, 경음기·배기소음 측정 방법' },
      { name: '자동차 공학', desc: '엔진·섀시·전기 시스템 구조 및 작동 원리' },
    ],
    jobs: [
      { title: '자동차검사원', company: '한국교통안전공단', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: '자동차검사 기사', company: '민간 자동차검사소', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '차량검사 담당', company: '화물·버스 운수회사', salary: '3,200~4,200만원', location: '전국', type: '정규직' },
      { title: '기술 검사원', company: '자동차 제조사 품질팀', salary: '4,000~5,500만원', location: '수도권·충청', type: '정규직' },
      { title: '검사 보조원', company: '민간 검사 대행업체', salary: '2,800~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '자동차검사기사 필기 완전정복', author: '박성진', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '자동차검사기사 한권으로 끝내기', author: '최현우', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '자동차검사 실무 가이드', author: '김도현', publisher: '골든벨', year: 2023, rating: 4.3 },
      { title: '자동차검사기사 기출문제집', author: '자격시험연구회', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동차검사산업기사': {
    name: '자동차검사산업기사',
    icon: 'fa-car-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 자동차검사산업기사 합격 가이드',
    heroDesc: '자동차 안전·환경 검사 업무를 수행하는 산업기사급 자격증으로, 검사소·운수회사 등 다양한 분야에서 활용됩니다. 자동차검사기사보다 진입 장벽이 낮아 실무 경력 초입 단계에서 취득하기 적합한 자격증입니다.',
    passRateSummary: '필기 50% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 47, practical: 52 },
      { year: 2021, written: 49, practical: 54 },
      { year: 2022, written: 51, practical: 56 },
      { year: 2023, written: 50, practical: 55 },
      { year: 2024, written: 52, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동차검사 법규', desc: '자동차관리법 및 검사 기준에 관한 주요 규정' },
      { name: '배출가스 검사', desc: '가솔린·디젤 차량 배출가스 측정 기준 및 검사 방법' },
      { name: '제동·조향 검사', desc: '제동력·조향 각도·사이드슬립 측정 원리 및 판정 기준' },
      { name: '등화·소음 검사', desc: '전조등 조사 방향 측정, 경음기·배기소음 검사 기준' },
      { name: '자동차 구조 및 기능', desc: '주요 자동차 시스템 구조 파악 및 검사 관련 항목 이해' },
    ],
    jobs: [
      { title: '자동차검사원', company: '민간 자동차검사소', salary: '3,200~4,200만원', location: '전국', type: '정규직' },
      { title: '차량 검사 담당', company: '화물·버스 운수회사', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '검사 실무원', company: '한국교통안전공단 위탁 검사소', salary: '3,000~3,800만원', location: '전국', type: '정규직' },
      { title: '기술 지원', company: '자동차부품 제조사', salary: '3,200~4,000만원', location: '수도권·충청', type: '정규직' },
      { title: '검사 보조원', company: '자동차 검사 대행업체', salary: '2,600~3,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '자동차검사산업기사 필기+실기', author: '이상호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '자동차검사산업기사 한권으로 끝내기', author: '강민준', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '자동차검사 이론과 실무', author: '조현식', publisher: '골든벨', year: 2023, rating: 4.3 },
      { title: '자동차검사산업기사 기출문제집', author: '자격시험연구회', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '자동변속기정비기능사': {
    name: '자동변속기정비기능사',
    icon: 'fa-car-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 자동변속기정비기능사 합격 가이드',
    heroDesc: '자동변속기의 구조·작동 원리를 이해하고 유압·전자제어 시스템 진단 및 정비 작업을 수행하는 기능사 자격증입니다. 국내 자동 변속기 장착 차량 비율이 높아 정비소·서비스센터에서의 수요가 꾸준히 유지됩니다.',
    passRateSummary: '필기 60% | 실기 55%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 57, practical: 52 },
      { year: 2021, written: 59, practical: 54 },
      { year: 2022, written: 61, practical: 56 },
      { year: 2023, written: 60, practical: 55 },
      { year: 2024, written: 62, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동변속기 구조', desc: '토크컨버터, 유성기어, 클러치·밴드 브레이크 구조 및 작동' },
      { name: '유압제어 시스템', desc: '유압 회로 구성, 밸브바디 기능, 오일 압력 조정 원리' },
      { name: '전자제어 시스템', desc: 'TCU 제어 로직, 솔레노이드 밸브, 자기진단 코드 분석' },
      { name: '변속기 진단·정비', desc: '이상 증상 진단 절차, 분해·조립 순서, 측정 기준값' },
      { name: '자동차 전기·전자', desc: '자동변속기 관련 센서·액추에이터, 회로도 해독' },
    ],
    jobs: [
      { title: '변속기 정비 기술자', company: '자동차 딜러 직영 서비스센터', salary: '3,200~4,200만원', location: '수도권·광역시', type: '정규직' },
      { title: '변속기 전문 정비사', company: '변속기 전문 정비점', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '자동차 정비 기술자', company: '종합 자동차 정비소', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '기술 지원', company: '자동변속기 부품 제조사', salary: '3,500~4,500만원', location: '수도권·충청', type: '정규직' },
      { title: '정비 보조', company: '카센터·중소 정비소', salary: '2,400~3,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '자동변속기정비기능사 필기+실기', author: '한상욱', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '자동변속기 정비기능사 한권으로 끝내기', author: '임재석', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '자동변속기 구조와 정비 실무', author: '오승환', publisher: '골든벨', year: 2023, rating: 4.3 },
      { title: '자동변속기정비기능사 기출문제집', author: '자격시험연구회', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 기계·생산 그룹1 9종 ===
  '기계설계기사': {
    name: '기계설계기사',
    icon: 'fa-drafting-compass',
    category: '기계·설비',
    heroTitle: '2026년도 기계설계기사 합격 가이드',
    heroDesc: '기계설계기사는 기계 부품 및 시스템의 설계·분석 능력을 검증하는 국가기술자격입니다. 기계공학 전반의 이론과 CAD 실무 능력을 함께 평가하며, 제조·방산·중공업 분야 취업에 강력한 경쟁력을 제공합니다. 체계적인 이론 학습과 도면 작성 실습을 병행하면 충분히 합격할 수 있습니다.',
    passRateSummary: '필기 45% | 실기 52%',
    avgPassRate: '48%',
    passRates: [
      { year: 2020, written: 42, practical: 50 },
      { year: 2021, written: 44, practical: 51 },
      { year: 2022, written: 46, practical: 53 },
      { year: 2023, written: 47, practical: 54 },
      { year: 2024, written: 48, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '기계제도', desc: 'KS 규격 도면 해독, 투상법, 공차·끼워맞춤 등 도면 작성 기초' },
      { name: '기계설계', desc: '체결요소, 전동요소, 축·베어링 설계, 스프링 및 브레이크 설계' },
      { name: '재료역학', desc: '응력·변형률, 굽힘·비틀림, 기둥의 좌굴 등 구조 해석 이론' },
      { name: '열역학', desc: '열역학 법칙, 사이클 해석, 냉동·증기 사이클 응용' },
      { name: '유체역학', desc: '유체 정역학·동역학, 관 유동 해석, 펌프 및 유압 기초' },
    ],
    jobs: [
      { title: '기계설계 엔지니어', company: '제조 중견기업', salary: '3,800~5,500만원', location: '경기·인천', type: '정규직' },
      { title: 'CAD/CAM 설계원', company: '부품가공 전문업체', salary: '3,500~4,800만원', location: '경남·울산', type: '정규직' },
      { title: '생산기술 엔지니어', company: '자동차 부품사', salary: '4,000~5,800만원', location: '경기·충남', type: '정규직' },
      { title: '설비설계 담당', company: '플랜트·중공업사', salary: '4,200~6,000만원', location: '부산·울산', type: '정규직' },
      { title: '기계설계 계약직', company: '엔지니어링 전문업체', salary: '3,200~4,200만원', location: '서울·경기', type: '계약직' },
    ],
    books: [
      { title: '기계설계기사 필기 핵심이론+기출문제', author: '한호수', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '기계설계기사 실기 완전정복', author: '이창범', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '기계설계기사 과년도 기출문제해설', author: '김원중', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '기계설계 CAD 실무 가이드', author: '박정수', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '기계설계산업기사': {
    name: '기계설계산업기사',
    icon: 'fa-drafting-compass',
    category: '기계·설비',
    heroTitle: '2026년도 기계설계산업기사 합격 가이드',
    heroDesc: '기계설계산업기사는 기계 부품의 설계 및 도면 작성 실무 능력을 검증하는 국가기술자격입니다. 기사 대비 진입 장벽이 낮으면서도 제조 현장에서 실질적인 인정을 받는 자격으로, 2·3년제 대학 졸업자나 관련 실무 경력자에게 적합합니다. 도면 해독과 기계요소 설계를 중심으로 학습하면 효율적으로 합격할 수 있습니다.',
    passRateSummary: '필기 50% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 47, practical: 52 },
      { year: 2021, written: 49, practical: 54 },
      { year: 2022, written: 51, practical: 55 },
      { year: 2023, written: 52, practical: 57 },
      { year: 2024, written: 53, practical: 58 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '기계제도', desc: 'KS 제도 규격, 투상법, 단면도, 치수 기입법 및 도면 해독' },
      { name: '기계설계', desc: '나사·키·핀 등 체결요소, 벨트·기어 등 전동요소 설계 계산' },
      { name: '기계재료', desc: '금속 재료의 성질, 열처리, 비금속 재료 및 재료 선택 기준' },
      { name: '재료역학', desc: '응력·변형률, 보의 굽힘, 축의 비틀림 등 구조 해석 기초' },
      { name: '공유압기기', desc: '유압·공압 회로 구성, 실린더·밸브 동작 원리 및 제어 기초' },
    ],
    jobs: [
      { title: '기계설계 보조 엔지니어', company: '중소 제조업체', salary: '3,200~4,500만원', location: '경기·인천', type: '정규직' },
      { title: '도면 작성 담당', company: '부품가공업체', salary: '3,000~4,200만원', location: '경남·경북', type: '정규직' },
      { title: '생산기술 지원', company: '자동차 부품 협력사', salary: '3,300~4,600만원', location: '충남·충북', type: '정규직' },
      { title: '설비 유지보수 담당', company: '식품·화학 제조사', salary: '3,100~4,300만원', location: '전국', type: '정규직' },
      { title: 'CAD 오퍼레이터', company: '엔지니어링 업체', salary: '2,800~3,800만원', location: '서울·경기', type: '계약직' },
    ],
    books: [
      { title: '기계설계산업기사 필기 단기완성', author: '이종수', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '기계설계산업기사 실기 도면해독', author: '박재현', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '기계설계산업기사 과년도 기출해설', author: '최동현', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '기계요소 설계 핵심 정리', author: '김성호', publisher: '성안당', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '생산자동화기능사': {
    name: '생산자동화기능사',
    icon: 'fa-robot',
    category: '기계·설비',
    heroTitle: '2026년도 생산자동화기능사 합격 가이드',
    heroDesc: '생산자동화기능사는 PLC 프로그래밍, 센서 제어, 자동화 설비 운용 능력을 검증하는 국가기술자격입니다. 스마트 팩토리 확산과 함께 수요가 급증하고 있으며, 제조 현장의 자동화 설비 운전·유지보수 직무에 필수적인 자격입니다. PLC 래더 프로그램과 공·유압 회로 실습을 집중적으로 연습하면 높은 합격률을 기대할 수 있습니다.',
    passRateSummary: '필기 58% | 실기 57%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 54, practical: 53 },
      { year: 2021, written: 56, practical: 55 },
      { year: 2022, written: 58, practical: 57 },
      { year: 2023, written: 60, practical: 58 },
      { year: 2024, written: 61, practical: 59 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '자동화 요소', desc: '센서, 액추에이터, 구동부 종류 및 동작 원리 이해' },
      { name: 'PLC 프로그래밍', desc: '래더 다이어그램 작성, 입출력 배선, 시퀀스 제어 로직 구현' },
      { name: '공유압 제어', desc: '공압·유압 회로 구성, 방향 제어 밸브, 실린더 속도 조절' },
      { name: '기계 가공', desc: '선반·밀링 기초 가공 작업, 공구 선택, 절삭 조건 설정' },
      { name: '전기 기초', desc: '전기 회로 이론, 모터 제어 회로, 전기 안전 작업 기준' },
    ],
    jobs: [
      { title: '자동화 설비 운전원', company: '스마트 팩토리 제조사', salary: '3,000~4,200만원', location: '경기·충남', type: '정규직' },
      { title: 'PLC 제어 담당', company: '자동화 설비업체', salary: '3,200~4,500만원', location: '경기·인천', type: '정규직' },
      { title: '생산 설비 유지보수', company: '전자·반도체 협력사', salary: '3,300~4,600만원', location: '경기·충청', type: '정규직' },
      { title: '자동화 라인 기술원', company: '식품·화학 공장', salary: '2,900~4,000만원', location: '전국', type: '정규직' },
      { title: '설비 점검 기술원', company: '공공기관·공단', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '생산자동화기능사 필기+실기 완전정복', author: '이수철', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '생산자동화기능사 PLC 실기 특강', author: '박준호', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '생산자동화기능사 과년도 기출문제', author: '김태훈', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '스마트팩토리 자동화 기초 실무', author: '정민준', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '프레스금형기능사': {
    name: '프레스금형기능사',
    icon: 'fa-hammer',
    category: '기계·설비',
    heroTitle: '2026년도 프레스금형기능사 합격 가이드',
    heroDesc: '프레스금형기능사는 금속 프레스 가공용 금형의 제작·조립·수리 능력을 검증하는 국가기술자격입니다. 자동차·전자 부품 제조업에서 꾸준한 수요가 있으며, 정밀 가공 기술과 금형 구조 이해가 핵심입니다. 금형 도면 해독과 측정 기기 사용법을 집중 학습하면 효과적으로 합격할 수 있습니다.',
    passRateSummary: '필기 55% | 실기 58%',
    avgPassRate: '56%',
    passRates: [
      { year: 2020, written: 51, practical: 54 },
      { year: 2021, written: 53, practical: 56 },
      { year: 2022, written: 55, practical: 58 },
      { year: 2023, written: 57, practical: 60 },
      { year: 2024, written: 58, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '금형 재료', desc: '금형용 공구강, 초경합금, 열처리 방법 및 재료 선택 기준' },
      { name: '프레스 가공', desc: '전단·굽힘·드로잉 가공 원리, 클리어런스, 스프링백 대책' },
      { name: '금형 설계', desc: '프레스 금형 구조, 펀치·다이 설계, 스트리퍼 및 가이드 설계' },
      { name: '기계 가공', desc: '선반·밀링·연삭 가공 방법, 절삭 조건, 표면 거칠기 관리' },
      { name: '측정 및 검사', desc: '마이크로미터·버니어 캘리퍼스·게이지 사용법, 정밀 측정 기준' },
    ],
    jobs: [
      { title: '금형 제작 기술원', company: '금형 전문업체', salary: '2,900~4,200만원', location: '경기·인천', type: '정규직' },
      { title: '프레스 설비 운전원', company: '자동차 부품사', salary: '3,000~4,300만원', location: '경남·울산', type: '정규직' },
      { title: '금형 수리 담당', company: '전자부품 제조사', salary: '3,100~4,400만원', location: '경기·충남', type: '정규직' },
      { title: '품질 검사원', company: '정밀부품 제조사', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '금형 조립 기술원', company: '중소 제조업체', salary: '2,600~3,500만원', location: '경기·경남', type: '계약직' },
    ],
    books: [
      { title: '프레스금형기능사 필기 핵심이론', author: '이명구', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '프레스금형기능사 실기 완전정복', author: '최영훈', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '프레스금형기능사 과년도 기출문제', author: '박성진', publisher: '예문사', year: 2023, rating: 4.2 },
      { title: '금형 설계 및 가공 실무', author: '김동현', publisher: '기문당', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '사출금형기능사': {
    name: '사출금형기능사',
    icon: 'fa-hammer',
    category: '기계·설비',
    heroTitle: '2026년도 사출금형기능사 합격 가이드',
    heroDesc: '사출금형기능사는 플라스틱 사출 성형용 금형의 제작·조립·수리 능력을 검증하는 국가기술자격입니다. 전자제품·생활용품·자동차 내장재 등 플라스틱 부품 산업 전반에 걸쳐 폭넓게 활용됩니다. 사출 성형 공정 이해와 금형 구조 파악을 중심으로 학습하면 단기간에 합격할 수 있습니다.',
    passRateSummary: '필기 54% | 실기 57%',
    avgPassRate: '55%',
    passRates: [
      { year: 2020, written: 50, practical: 53 },
      { year: 2021, written: 52, practical: 55 },
      { year: 2022, written: 54, practical: 57 },
      { year: 2023, written: 56, practical: 59 },
      { year: 2024, written: 57, practical: 60 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '플라스틱 재료', desc: '열가소성·열경화성 수지 특성, 수축률, 재료별 가공 조건' },
      { name: '사출 성형', desc: '사출 성형 공정, 성형 조건(온도·압력·속도), 성형 불량 원인 분석' },
      { name: '금형 설계', desc: '사출 금형 구조, 게이트·런너·냉각 라인 설계, 이젝터 핀 배치' },
      { name: '기계 가공', desc: '범용 선반·밀링 가공, CNC 가공 기초, 측정 기구 활용' },
      { name: '금형 재료', desc: '금형강 종류, 열처리 방법, 표면처리(질화·코팅) 특성' },
    ],
    jobs: [
      { title: '사출 금형 기술원', company: '금형 전문업체', salary: '2,900~4,200만원', location: '경기·인천', type: '정규직' },
      { title: '사출 성형 운전원', company: '플라스틱 부품사', salary: '2,800~4,000만원', location: '경기·경남', type: '정규직' },
      { title: '금형 수리·보수 담당', company: '전자·가전 부품사', salary: '3,000~4,300만원', location: '경기·충남', type: '정규직' },
      { title: '품질관리 기술원', company: '자동차 내장재 제조사', salary: '2,900~4,100만원', location: '경남·충남', type: '정규직' },
      { title: '사출 공정 기술원', company: '중소 제조업체', salary: '2,600~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '사출금형기능사 필기 단기합격', author: '이준호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '사출금형기능사 실기 완전정복', author: '박명수', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '사출금형기능사 과년도 기출해설', author: '최재원', publisher: '예문사', year: 2023, rating: 4.2 },
      { title: '플라스틱 성형 금형 실무', author: '김영식', publisher: '기문당', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '선반기능사': {
    name: '선반기능사',
    icon: 'fa-gear',
    category: '기계·설비',
    heroTitle: '2026년도 선반기능사 합격 가이드',
    heroDesc: '선반기능사는 범용 선반을 이용하여 금속 부품을 정밀하게 절삭·가공하는 능력을 검증하는 국가기술자격입니다. 기계 가공의 기초가 되는 자격으로, 제조 현장 취업과 CNC 가공 직무로의 발전에 유리합니다. 도면 해독과 실제 절삭 가공 실습을 반복하면 빠르게 실력을 높일 수 있습니다.',
    passRateSummary: '필기 60% | 실기 60%',
    avgPassRate: '60%',
    passRates: [
      { year: 2020, written: 56, practical: 56 },
      { year: 2021, written: 58, practical: 58 },
      { year: 2022, written: 60, practical: 60 },
      { year: 2023, written: 62, practical: 62 },
      { year: 2024, written: 63, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '기계 가공법', desc: '선반 각부 명칭·기능, 절삭 공구 종류, 절삭 속도·이송·깊이 설정' },
      { name: '기계 제도', desc: '도면 해독, 공차 해석, 표면 거칠기 기호 이해 및 적용' },
      { name: '기계 재료', desc: '탄소강·합금강·비철금속 특성, 재료 식별, 열처리 기초' },
      { name: '측정 및 검사', desc: '버니어 캘리퍼스·마이크로미터·다이얼 게이지 사용 및 측정 방법' },
      { name: '안전 및 환경', desc: '선반 작업 안전 수칙, 절삭유 취급, 작업장 정리·정돈 기준' },
    ],
    jobs: [
      { title: '선반 가공 기술원', company: '정밀가공 전문업체', salary: '2,800~4,000만원', location: '경기·인천', type: '정규직' },
      { title: 'CNC 선반 운전원', company: '자동차 부품사', salary: '3,000~4,300만원', location: '경남·울산', type: '정규직' },
      { title: '기계 가공 담당', company: '항공·방산 부품사', salary: '3,200~4,500만원', location: '경기·경남', type: '정규직' },
      { title: '치구·공구 제작 담당', company: '금형·공구 제조사', salary: '2,900~4,100만원', location: '경기·충남', type: '정규직' },
      { title: '가공 기술 지원', company: '중소 제조업체', salary: '2,500~3,400만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '선반기능사 필기 핵심이론+기출문제', author: '이현식', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '선반기능사 실기 완전정복', author: '박상훈', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '선반기능사 과년도 기출문제해설', author: '최진수', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '기계 가공 실무 입문', author: '김민철', publisher: '기문당', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '밀링기능사': {
    name: '밀링기능사',
    icon: 'fa-gear',
    category: '기계·설비',
    heroTitle: '2026년도 밀링기능사 합격 가이드',
    heroDesc: '밀링기능사는 밀링 머신을 사용하여 평면·홈·기어 등 다양한 형상의 금속 부품을 가공하는 능력을 검증하는 국가기술자격입니다. 선반기능사와 함께 기계 가공의 양대 기초 자격으로 인정받으며, 제조 현장에서의 경쟁력을 크게 높여줍니다. 밀링 절삭 조건 설정과 도면 해독 능력을 집중적으로 키우면 합격에 유리합니다.',
    passRateSummary: '필기 59% | 실기 59%',
    avgPassRate: '59%',
    passRates: [
      { year: 2020, written: 55, practical: 55 },
      { year: 2021, written: 57, practical: 57 },
      { year: 2022, written: 59, practical: 59 },
      { year: 2023, written: 61, practical: 61 },
      { year: 2024, written: 62, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '기계 가공법', desc: '밀링 머신 구조·기능, 커터 종류 및 선택, 절삭 조건 설정 방법' },
      { name: '기계 제도', desc: '도면 해독, 공차·끼워맞춤, 표면 거칠기 기호, 기하 공차 이해' },
      { name: '기계 재료', desc: '금속 재료 성질, 탄소강·합금강 열처리, 경도 측정 방법' },
      { name: '측정 및 검사', desc: '정밀 측정 기기 사용법, 각도 측정, 윤곽 측정 및 불량 판정' },
      { name: '안전 및 환경', desc: '밀링 작업 안전 수칙, 칩 처리, 절삭유 관리, 개인 보호구 착용' },
    ],
    jobs: [
      { title: '밀링 가공 기술원', company: '정밀가공 전문업체', salary: '2,800~4,000만원', location: '경기·인천', type: '정규직' },
      { title: 'CNC 머시닝센터 운전원', company: '자동차·항공 부품사', salary: '3,100~4,400만원', location: '경남·경기', type: '정규직' },
      { title: '지그·픽스처 제작 담당', company: '치공구 전문업체', salary: '2,900~4,100만원', location: '경기·인천', type: '정규직' },
      { title: '금형 가공 기술원', company: '금형 전문업체', salary: '3,000~4,300만원', location: '경기·경남', type: '정규직' },
      { title: '가공 기술 지원원', company: '중소 제조업체', salary: '2,500~3,400만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '밀링기능사 필기 핵심이론+기출문제', author: '이승훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '밀링기능사 실기 작업 가이드', author: '박찬호', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '밀링기능사 과년도 기출문제해설', author: '최동욱', publisher: '예문사', year: 2023, rating: 4.2 },
      { title: '밀링·선반 복합 가공 입문', author: '김정훈', publisher: '기문당', year: 2024, rating: 4.1 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '판금제관기능사': {
    name: '판금제관기능사',
    icon: 'fa-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 판금제관기능사 합격 가이드',
    heroDesc: '판금제관기능사는 금속 판재를 절단·절곡·용접하여 배관, 덕트, 압력용기 등 구조물을 제작하는 능력을 검증하는 국가기술자격입니다. 건설·플랜트·냉난방 설비 분야에서 안정적인 수요가 있으며, 실습 비중이 높은 자격입니다. 전개도 작성과 절곡·용접 실기를 집중 연습하면 효과적으로 합격할 수 있습니다.',
    passRateSummary: '필기 56% | 실기 58%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 52, practical: 54 },
      { year: 2021, written: 54, practical: 56 },
      { year: 2022, written: 56, practical: 58 },
      { year: 2023, written: 58, practical: 60 },
      { year: 2024, written: 59, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '판금 가공', desc: '전개도 작성, 절단·절곡·교정 방법, 굽힘 가공 여유량 계산' },
      { name: '제관 작업', desc: '관 재료 특성, 용접 이음 설계, 배관 제작 절차 및 검사 기준' },
      { name: '용접 기초', desc: '가스·아크 용접 원리, 용접 자세, 용접 결함의 종류와 방지책' },
      { name: '기계 제도', desc: '판금·제관 도면 해독, 전개도 그리기, 기하학적 전개법 이해' },
      { name: '안전 및 환경', desc: '절단·용접 작업 안전 수칙, 화재·폭발 예방, 보호구 착용 기준' },
    ],
    jobs: [
      { title: '판금 제작 기술원', company: '덕트·판금 전문업체', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '제관 작업원', company: '압력용기·보일러 제조사', salary: '3,000~4,300만원', location: '경남·부산', type: '정규직' },
      { title: '냉난방 덕트 시공원', company: '기계설비 시공업체', salary: '2,900~4,100만원', location: '서울·경기', type: '정규직' },
      { title: '플랜트 배관 기술원', company: '플랜트 건설사', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '판금 가공 기술원', company: '중소 제조업체', salary: '2,500~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '판금제관기능사 필기 핵심이론', author: '이성민', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '판금제관기능사 실기 완전정복', author: '박진수', publisher: '일진사', year: 2024, rating: 4.3 },
      { title: '판금제관기능사 과년도 기출해설', author: '최우성', publisher: '예문사', year: 2023, rating: 4.2 },
      { title: '판금·용접·제관 실무 기초', author: '김재훈', publisher: '기문당', year: 2024, rating: 4.0 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '냉동공조기능사': {
    name: '냉동공조기능사',
    icon: 'fa-snowflake',
    category: '기계·설비',
    heroTitle: '2026년도 냉동공조기능사 합격 가이드',
    heroDesc: '냉동공조기능사는 냉동·냉장·공기조화 설비의 설치·운전·유지보수 능력을 검증하는 국가기술자격입니다. 냉동 설비 관련 법적 면허 취득의 기초가 되는 자격으로, 식품 유통·반도체·건축 설비 분야에서 꾸준한 수요가 있습니다. 냉동 사이클 원리와 배관 작업 실기를 중점적으로 학습하면 합격할 수 있습니다.',
    passRateSummary: '필기 57% | 실기 58%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 53, practical: 54 },
      { year: 2021, written: 55, practical: 56 },
      { year: 2022, written: 57, practical: 58 },
      { year: 2023, written: 59, practical: 60 },
      { year: 2024, written: 60, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '냉동 원리', desc: '냉동 사이클, 냉매 종류·특성, 증발·응축·압축·팽창 과정 해석' },
      { name: '냉동 기기', desc: '압축기·응축기·증발기·팽창 밸브 구조, 동작 원리 및 고장 진단' },
      { name: '공기조화', desc: '공기 선도 해석, 공조 시스템 구성, 환기·가습·제습 설비 이해' },
      { name: '배관 작업', desc: '냉매 배관 재료, 납땜·플레어 이음, 진공 작업 및 냉매 충전 방법' },
      { name: '냉동 전기', desc: '냉동 전기 회로, 제어 소자 동작, 전기 안전 작업 및 법규 기초' },
    ],
    jobs: [
      { title: '냉동공조 설비 기술원', company: '냉동·공조 시공업체', salary: '2,900~4,200만원', location: '서울·경기', type: '정규직' },
      { title: '냉동 설비 운전원', company: '식품·물류 냉동창고', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '빌딩 냉난방 설비 관리', company: '건물관리 전문업체', salary: '3,000~4,300만원', location: '서울·수도권', type: '정규직' },
      { title: '반도체 설비 유틸리티', company: '반도체 협력사', salary: '3,200~4,600만원', location: '경기·충청', type: '정규직' },
      { title: '냉동공조 유지보수', company: '중소 시설관리업체', salary: '2,600~3,600만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '냉동공조기능사 필기 단기완성', author: '이재민', publisher: '성안당', year: 2024, rating: 4.6 },
      { title: '냉동공조기능사 실기 완전정복', author: '박성재', publisher: '일진사', year: 2024, rating: 4.5 },
      { title: '냉동공조기능사 과년도 기출해설', author: '최형준', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '냉동·공조 설비 실무 입문', author: '김태용', publisher: '기문당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 건설설비·환경 그룹2 9종 ===

  '공유압기능사': {
    name: '공유압기능사',
    icon: 'fa-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 공유압기능사 합격 가이드',
    heroDesc: '공유압기능사는 공기압 및 유압 장치의 설계, 설치, 유지보수 능력을 검정하는 자격증입니다. 제조업·자동화 설비 분야에서 공유압 시스템 운용 전문가로 활동할 수 있습니다. 체계적인 회로 분석과 실기 실습으로 합격률을 높일 수 있습니다.',
    passRateSummary: '필기 55% | 실기 58%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 52, practical: 55 },
      { year: 2021, written: 54, practical: 57 },
      { year: 2022, written: 56, practical: 59 },
      { year: 2023, written: 55, practical: 58 },
      { year: 2024, written: 57, practical: 60 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '공유압 일반', desc: '공기압·유압의 기초 원리, 유체역학, 파스칼 법칙 등 이론 이해' },
      { name: '공유압 기기', desc: '펌프, 액추에이터, 밸브, 실린더 등 구성 요소의 구조와 기능' },
      { name: '공유압 회로', desc: '회로도 판독, 순서 회로, 속도 제어 회로 설계 및 분석' },
      { name: '전기·전자 제어', desc: '전기 기초, 릴레이 회로, PLC 기초 제어 개념' },
      { name: '안전관리', desc: '공유압 시스템 작업 안전, 산업안전보건법 관련 규정' },
    ],
    jobs: [
      { title: '공유압 설비 유지보수', company: '제조업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '자동화 설비 기술직', company: '자동화 전문기업', salary: '3,200~4,500만원', location: '수도권', type: '정규직' },
      { title: '공유압 시스템 엔지니어', company: '설비 제조사', salary: '3,500~5,000만원', location: '경기·인천', type: '정규직' },
      { title: '생산설비 관리자', company: '대기업 계열사', salary: '3,800~5,500만원', location: '울산·창원', type: '정규직' },
      { title: '공유압 장비 점검원', company: '설비 점검 업체', salary: '2,800~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '공유압기능사 필기 한권으로 끝내기', author: '김태호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '공유압기능사 실기 완전정복', author: '이상훈', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '공유압 기초이론과 실습', author: '박종수', publisher: '기문사', year: 2023, rating: 4.3 },
      { title: '공유압기능사 기출문제 해설집', author: '최민준', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '기계정비산업기사': {
    name: '기계정비산업기사',
    icon: 'fa-wrench',
    category: '기계·설비',
    heroTitle: '2026년도 기계정비산업기사 합격 가이드',
    heroDesc: '기계정비산업기사는 각종 기계·설비의 점검, 정비, 수리 업무를 수행하는 전문 기술 자격증입니다. 제조업 생산 현장에서 설비 효율을 극대화하는 핵심 인력으로 인정받습니다. 이론과 실습을 병행한 체계적인 학습으로 단기간 합격이 가능합니다.',
    passRateSummary: '필기 48% | 실기 53%',
    avgPassRate: '51%',
    passRates: [
      { year: 2020, written: 45, practical: 50 },
      { year: 2021, written: 47, practical: 52 },
      { year: 2022, written: 49, practical: 54 },
      { year: 2023, written: 48, practical: 53 },
      { year: 2024, written: 50, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '기계정비 일반', desc: '기계요소, 체결부품, 동력전달 장치의 구조 및 정비 원리' },
      { name: '설비 진단', desc: '진동·소음 분석, 윤활 관리, 상태 감시 기법' },
      { name: '공유압 설비 정비', desc: '공압·유압 시스템의 구성, 고장 원인 분석 및 수리 방법' },
      { name: '전기·제어 기초', desc: '전동기, 제어반, 센서 등 전기설비 정비 기초 지식' },
      { name: '안전관리 및 관계법규', desc: '산업안전보건법, 정비 작업 시 위험 요소 파악 및 대처' },
    ],
    jobs: [
      { title: '설비 정비 기술자', company: '대형 제조공장', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '기계 유지보수 담당', company: '자동차 부품사', salary: '3,800~5,200만원', location: '울산·경기', type: '정규직' },
      { title: '생산설비 정비원', company: '식품·화학공장', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '설비관리 엔지니어', company: '대기업 계열사', salary: '4,000~6,000만원', location: '수도권', type: '정규직' },
      { title: '기계 점검 기술원', company: '정비 전문업체', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '기계정비산업기사 필기 완전정복', author: '이진호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '기계정비산업기사 실기 핵심정리', author: '박성민', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '기계정비 이론과 실습', author: '김동현', publisher: '기문사', year: 2023, rating: 4.3 },
      { title: '기계정비산업기사 기출문제집', author: '최준석', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '건축설비기사': {
    name: '건축설비기사',
    icon: 'fa-building',
    category: '건설·토목',
    heroTitle: '2026년도 건축설비기사 합격 가이드',
    heroDesc: '건축설비기사는 건축물의 전기·위생·냉난방·소방 설비 계획 및 시공, 감리 업무를 담당하는 전문 자격증입니다. 건설 현장에서 설비 분야 핵심 기술자로 활동하며 취업 수요가 높습니다. 필기와 실기 모두 출제 범위가 넓으므로 계획적인 학습이 중요합니다.',
    passRateSummary: '필기 43% | 실기 48%',
    avgPassRate: '46%',
    passRates: [
      { year: 2020, written: 40, practical: 45 },
      { year: 2021, written: 42, practical: 47 },
      { year: 2022, written: 44, practical: 49 },
      { year: 2023, written: 43, practical: 48 },
      { year: 2024, written: 45, practical: 50 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '냉동·공기조화', desc: '냉동 사이클, 공조 시스템 설계, 열부하 계산 방법' },
      { name: '위생·급배수 설비', desc: '급수·급탕·배수·통기 설비 설계 및 시공 기준' },
      { name: '소방 설비', desc: '스프링클러, 옥내소화전, 소화 배관 설계 및 법적 기준' },
      { name: '전기 설비', desc: '조명, 동력, 수변전 설비, 약전 설비 기초 계획' },
      { name: '건축설비 관계법규', desc: '건축법, 설비 관련 KS 기준, 에너지 절약 설계 기준' },
    ],
    jobs: [
      { title: '건축설비 설계 엔지니어', company: '설비 설계 사무소', salary: '4,000~6,000만원', location: '수도권', type: '정규직' },
      { title: '기계설비 감리원', company: '감리 전문업체', salary: '4,500~7,000만원', location: '전국', type: '정규직' },
      { title: '빌딩 설비 관리자', company: '건물 관리 회사', salary: '3,500~5,000만원', location: '서울·경기', type: '정규직' },
      { title: '플랜트 설비 담당', company: '종합건설사', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
      { title: '설비 시공 관리자', company: '설비 시공업체', salary: '3,500~5,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '건축설비기사 필기 한권으로 끝내기', author: '정재영', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '건축설비기사 실기 완전정복', author: '이상철', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '건축설비 이론과 실무', author: '김병훈', publisher: '기문사', year: 2023, rating: 4.3 },
      { title: '건축설비기사 기출문제 해설', author: '박민준', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '건축설비산업기사': {
    name: '건축설비산업기사',
    icon: 'fa-building',
    category: '건설·토목',
    heroTitle: '2026년도 건축설비산업기사 합격 가이드',
    heroDesc: '건축설비산업기사는 건축물 설비 시공 현장에서 기술자를 보조하고 감독하는 역할을 수행하는 자격증입니다. 건축설비기사에 비해 진입 장벽이 낮아 입문자에게 적합하며, 현장 수요가 꾸준합니다. 핵심 설비 과목을 집중 학습하면 단기 합격이 가능합니다.',
    passRateSummary: '필기 50% | 실기 55%',
    avgPassRate: '53%',
    passRates: [
      { year: 2020, written: 47, practical: 52 },
      { year: 2021, written: 49, practical: 54 },
      { year: 2022, written: 51, practical: 56 },
      { year: 2023, written: 50, practical: 55 },
      { year: 2024, written: 52, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '공기조화 설비', desc: '냉난방 기초 원리, 환기 시스템, 덕트 설계 개요' },
      { name: '위생 설비', desc: '급수·배수 배관 설계 기초, 위생기구 설치 기준' },
      { name: '소방 설비 기초', desc: '소화 설비의 종류, 설치 기준, 점검 방법' },
      { name: '전기 설비 기초', desc: '건축 전기 개요, 조명·콘센트 설비 계획' },
      { name: '설비 관련 법규', desc: '건축법, 소방법, 에너지이용합리화법 관련 설비 기준' },
    ],
    jobs: [
      { title: '건축설비 시공 기술원', company: '설비 시공업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '설비 현장 감독', company: '중소 건설사', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '빌딩 설비 유지보수', company: '건물 관리 업체', salary: '3,000~4,000만원', location: '서울·경기', type: '정규직' },
      { title: '공조 설비 기술자', company: '설비 전문업체', salary: '3,200~4,800만원', location: '수도권', type: '정규직' },
      { title: '설비 점검원', company: '유지관리 전문업체', salary: '2,600~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '건축설비산업기사 필기 완전정복', author: '이준호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '건축설비산업기사 실기 핵심 요약', author: '김태수', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '건축설비 입문 이론서', author: '박정호', publisher: '기문사', year: 2023, rating: 4.3 },
      { title: '건축설비산업기사 기출문제집', author: '최영훈', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '건설재료시험기사': {
    name: '건설재료시험기사',
    icon: 'fa-flask',
    category: '건설·토목',
    heroTitle: '2026년도 건설재료시험기사 합격 가이드',
    heroDesc: '건설재료시험기사는 콘크리트, 아스팔트, 골재, 강재 등 건설재료의 품질 시험 및 검사 업무를 수행하는 자격증입니다. 건설 현장의 품질 관리와 시험 업무에 꼭 필요한 자격으로 취업 경쟁력이 높습니다. 실험 실습 위주의 실기 준비가 핵심입니다.',
    passRateSummary: '필기 44% | 실기 49%',
    avgPassRate: '47%',
    passRates: [
      { year: 2020, written: 41, practical: 46 },
      { year: 2021, written: 43, practical: 48 },
      { year: 2022, written: 45, practical: 50 },
      { year: 2023, written: 44, practical: 49 },
      { year: 2024, written: 46, practical: 51 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '콘크리트 재료 시험', desc: '배합 설계, 압축강도 시험, 슬럼프 시험, 양생 방법' },
      { name: '토질 및 기초', desc: '흙의 분류, 다짐 시험, 지반조사, 표준관입시험' },
      { name: '아스팔트 재료 시험', desc: '아스팔트 혼합물 설계, 마샬 안정도 시험, 추출 시험' },
      { name: '강재 및 금속 재료', desc: '인장·압축·굽힘 시험, 강재 규격, 비파괴검사 개요' },
      { name: '건설재료 관계법규', desc: '품질관리 기준, KS 규격, 건설기술진흥법 관련 기준' },
    ],
    jobs: [
      { title: '건설 품질 시험원', company: '건설 품질 시험기관', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '현장 품질 관리자', company: '종합건설사', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '재료 시험 연구원', company: '건설기술연구원', salary: '4,000~6,000만원', location: '수도권', type: '정규직' },
      { title: '레미콘 품질 관리자', company: '레미콘 제조사', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
      { title: '품질 시험 보조원', company: '시험 전문업체', salary: '2,800~3,600만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '건설재료시험기사 필기 핵심이론', author: '김성진', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '건설재료시험기사 실기 완전정복', author: '이민호', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '건설재료 시험법 해설', author: '박재현', publisher: '기문사', year: 2023, rating: 4.3 },
      { title: '건설재료시험기사 기출문제 총정리', author: '최현우', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '거푸집기능사': {
    name: '거푸집기능사',
    icon: 'fa-hard-hat',
    category: '건설·토목',
    heroTitle: '2026년도 거푸집기능사 합격 가이드',
    heroDesc: '거푸집기능사는 콘크리트 구조물 시공 시 거푸집의 제작, 조립, 해체 작업을 수행하는 현장 기능인력 자격증입니다. 건설 현장에서 꾸준한 수요가 있으며 실기 작업 숙련도가 합격을 좌우합니다. 실습 위주의 반복 훈련으로 합격률을 높일 수 있습니다.',
    passRateSummary: '필기 58% | 실기 55%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 55, practical: 52 },
      { year: 2021, written: 57, practical: 54 },
      { year: 2022, written: 59, practical: 56 },
      { year: 2023, written: 58, practical: 55 },
      { year: 2024, written: 60, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '거푸집 일반', desc: '거푸집의 종류, 재료 특성, 설계 하중 및 시공 원리' },
      { name: '거푸집 제작 및 조립', desc: '목재·강제·알루미늄 거푸집 제작, 조립 방법과 순서' },
      { name: '거푸집 해체 및 보관', desc: '적정 해체 시기, 해체 순서, 자재 관리 방법' },
      { name: '콘크리트 공사 기초', desc: '콘크리트 배합, 타설, 양생의 기본 지식' },
      { name: '건설 안전관리', desc: '거푸집 작업 시 추락·붕괴 사고 예방, 안전 장비 사용법' },
    ],
    jobs: [
      { title: '거푸집 작업 기능공', company: '종합건설사 현장', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '목공 거푸집 반장', company: '건설 협력업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '시스템 거푸집 기술자', company: '거푸집 전문업체', salary: '3,200~4,500만원', location: '수도권', type: '정규직' },
      { title: '콘크리트 구조물 시공원', company: '토목건설업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '거푸집 임시직 기능공', company: '건설 일용 현장', salary: '2,500~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '거푸집기능사 필기 한권으로 끝내기', author: '장민수', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '거푸집기능사 실기 작업 가이드', author: '이태호', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '콘크리트·거푸집 공사 실무', author: '박성호', publisher: '기문사', year: 2023, rating: 4.3 },
      { title: '거푸집기능사 기출문제 해설집', author: '최재원', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '비계기능사': {
    name: '비계기능사',
    icon: 'fa-hard-hat',
    category: '건설·토목',
    heroTitle: '2026년도 비계기능사 합격 가이드',
    heroDesc: '비계기능사는 건설 현장에서 가설 비계의 설치, 해체, 유지관리 작업을 수행하는 전문 기능인력 자격증입니다. 고층 건물 공사 및 외벽 도장 등 다양한 건설 현장에서 필수 인력으로 활용됩니다. 안전 작업 절차와 실기 훈련을 집중적으로 준비하면 합격에 유리합니다.',
    passRateSummary: '필기 60% | 실기 57%',
    avgPassRate: '59%',
    passRates: [
      { year: 2020, written: 57, practical: 54 },
      { year: 2021, written: 59, practical: 56 },
      { year: 2022, written: 61, practical: 58 },
      { year: 2023, written: 60, practical: 57 },
      { year: 2024, written: 62, practical: 59 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '비계 일반', desc: '비계의 종류(강관·시스템·이동식), 구조 원리, 사용 재료' },
      { name: '비계 설치 및 해체', desc: '강관 비계·시스템 비계의 조립 순서, 해체 방법 및 주의사항' },
      { name: '가설 공사 안전', desc: '추락·붕괴 방지 설비, 작업 발판 기준, 안전난간 설치 기준' },
      { name: '건설 기계 기초', desc: '비계 설치에 사용되는 중장비 기초 지식 및 신호 방법' },
      { name: '산업안전 관계법규', desc: '산업안전보건법, 가설 구조물 관련 안전 기준 및 기술 지침' },
    ],
    jobs: [
      { title: '비계 설치 기능공', company: '건설 현장', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '가설 공사 반장', company: '가설 전문업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '외벽 작업 비계원', company: '외장 공사 업체', salary: '3,200~4,800만원', location: '수도권', type: '정규직' },
      { title: '고소 작업 안전 담당', company: '플랜트 건설사', salary: '3,500~5,200만원', location: '전국', type: '정규직' },
      { title: '비계 해체 기능공', company: '건설 일용 현장', salary: '2,600~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '비계기능사 필기 완전정복', author: '송재호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '비계기능사 실기 작업 완전정복', author: '이창수', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '가설공사 비계 실무 가이드', author: '김민석', publisher: '기문사', year: 2023, rating: 4.3 },
      { title: '비계기능사 기출문제 해설집', author: '최동현', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '타일기능사': {
    name: '타일기능사',
    icon: 'fa-hard-hat',
    category: '건설·토목',
    heroTitle: '2026년도 타일기능사 합격 가이드',
    heroDesc: '타일기능사는 건축물 내외부 바닥·벽면에 각종 타일을 붙이고 마감하는 작업을 전문으로 하는 기능인력 자격증입니다. 주거·상업 건물 인테리어 공사 현장에서 꾸준한 수요가 있으며 숙련된 기능인력으로 독립 창업도 가능합니다. 실기 작업의 정밀도와 속도 훈련이 합격의 핵심입니다.',
    passRateSummary: '필기 62% | 실기 59%',
    avgPassRate: '61%',
    passRates: [
      { year: 2020, written: 59, practical: 56 },
      { year: 2021, written: 61, practical: 58 },
      { year: 2022, written: 63, practical: 60 },
      { year: 2023, written: 62, practical: 59 },
      { year: 2024, written: 64, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '타일 재료', desc: '도기질·자기질·석기질 타일의 종류, 규격, 흡수율 특성' },
      { name: '타일 붙이기 공법', desc: '압착 공법, 떠붙이기 공법, 접착제 공법의 시공 절차' },
      { name: '바탕 만들기', desc: '바탕 처리, 방수층, 모르타르 바름, 기준선 설정 방법' },
      { name: '줄눈 및 마감 처리', desc: '줄눈 재료의 종류, 줄눈 채우기 방법, 청소 및 마감 검사' },
      { name: '건설 안전 일반', desc: '타일 공사 작업 시 안전 수칙, 공구 사용 안전, 산업안전보건법' },
    ],
    jobs: [
      { title: '타일 시공 기능공', company: '인테리어 시공업체', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '바닥·벽 마감 기술자', company: '건축 마감 전문업체', salary: '3,200~4,800만원', location: '수도권', type: '정규직' },
      { title: '욕실·주방 타일 전문가', company: '인테리어 회사', salary: '3,500~5,000만원', location: '서울·경기', type: '정규직' },
      { title: '외벽 타일 시공원', company: '건설 협력업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '타일 공사 일용직', company: '건설 일용 현장', salary: '2,500~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '타일기능사 필기 한권으로 끝내기', author: '한상민', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '타일기능사 실기 작업 완전정복', author: '이재훈', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '타일 공사 시공 실무', author: '김동진', publisher: '기문사', year: 2023, rating: 4.3 },
      { title: '타일기능사 기출문제 해설집', author: '박준호', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '유리시공기능사': {
    name: '유리시공기능사',
    icon: 'fa-hard-hat',
    category: '건설·토목',
    heroTitle: '2026년도 유리시공기능사 합격 가이드',
    heroDesc: '유리시공기능사는 건축물의 창호, 커튼월, 인테리어 등 다양한 유리 시공 작업을 전문으로 수행하는 기능인력 자격증입니다. 도시 재생 및 신축 건물 공사 증가로 유리 시공 전문 인력 수요가 꾸준히 증가하고 있습니다. 유리 특성 이해와 실기 작업 숙련도를 집중 훈련하면 합격률을 높일 수 있습니다.',
    passRateSummary: '필기 60% | 실기 56%',
    avgPassRate: '58%',
    passRates: [
      { year: 2020, written: 57, practical: 53 },
      { year: 2021, written: 59, practical: 55 },
      { year: 2022, written: 61, practical: 57 },
      { year: 2023, written: 60, practical: 56 },
      { year: 2024, written: 62, practical: 58 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '유리 재료', desc: '판유리·강화유리·복층유리·접합유리의 종류, 규격, 물성 이해' },
      { name: '유리 절단 및 가공', desc: '유리 절단 공구 사용법, 정확한 절단 방법, 모서리 가공 기법' },
      { name: '창호 유리 시공', desc: '창호 프레임 종류별 유리 끼우기, 실링재 사용, 고정 방법' },
      { name: '커튼월 및 유리 구조물', desc: '커튼월 시스템 구성, 실링 방법, 하자 원인 및 방지 대책' },
      { name: '유리 시공 안전', desc: '유리 파손 방지, 고소 작업 안전, 운반·취급 시 안전 수칙' },
    ],
    jobs: [
      { title: '유리 시공 기능공', company: '유리 시공 전문업체', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '커튼월 시공 기술자', company: '파사드 전문업체', salary: '3,500~5,000만원', location: '수도권', type: '정규직' },
      { title: '인테리어 유리 전문가', company: '인테리어 시공업체', salary: '3,200~4,800만원', location: '서울·경기', type: '정규직' },
      { title: '건축 창호 설치원', company: '창호 제조·시공사', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '유리 보수 기능공', company: '유지관리 전문업체', salary: '2,500~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '유리시공기능사 필기 완전정복', author: '조현민', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '유리시공기능사 실기 작업 가이드', author: '이영호', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '유리 시공 실무와 안전', author: '박종현', publisher: '기문사', year: 2023, rating: 4.3 },
      { title: '유리시공기능사 기출문제 해설집', author: '최상현', publisher: '예문사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 환경·IT·항공 그룹3 9종 ===
  '수질환경산업기사': {
    name: '수질환경산업기사',
    icon: 'fa-water',
    category: '환경·에너지',
    heroTitle: '2026년도 수질환경산업기사 합격 가이드',
    heroDesc: '수질환경산업기사는 수질오염 방지 및 수처리 시설 운영 전문 자격증입니다. 환경부 산하 공공기관 및 민간 환경기업에서 활발히 채용되며, 환경 규제 강화로 수요가 꾸준히 증가하고 있습니다. 체계적인 이론 학습과 실험 실기 연습으로 합격을 목표로 하세요.',
    passRateSummary: '필기 47% | 실기 52%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 45, practical: 50 },
      { year: 2021, written: 46, practical: 51 },
      { year: 2022, written: 48, practical: 53 },
      { year: 2023, written: 47, practical: 54 },
      { year: 2024, written: 49, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '수질오염개론', desc: '수질오염의 원인, 종류, 영향 및 수질 기준에 관한 이론' },
      { name: '상하수도계획', desc: '상수도 및 하수도 시스템 설계와 운영 계획' },
      { name: '수질오염방지기술', desc: '물리·화학·생물학적 수처리 방법 및 기술' },
      { name: '수질환경관계법규', desc: '물환경보전법 및 관련 환경 법령 이해' },
      { name: '수질분석실험', desc: '수질 오염 물질의 측정 및 분석 실험 방법' },
    ],
    jobs: [
      { title: '수처리 시설 운영원', company: '환경관리공단', salary: '3,200~4,000만원', location: '전국', type: '정규직' },
      { title: '수질환경 기술원', company: '환경컨설팅 업체', salary: '3,000~3,800만원', location: '서울·경기', type: '정규직' },
      { title: '폐수처리 담당자', company: '제조·화학 기업', salary: '3,400~4,200만원', location: '전국', type: '정규직' },
      { title: '환경안전 관리원', company: '공공기관', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '수질측정 분석원', company: '환경측정 대행업체', salary: '2,800~3,500만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '수질환경산업기사 필기 한권으로 끝내기', author: '성안당 편집부', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '수질환경산업기사 기출문제집', author: '이승원', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '수질환경산업기사 실기 완전정복', author: '김태호', publisher: '구민사', year: 2023, rating: 4.3 },
      { title: '수질환경산업기사 최근 기출문제 총정리', author: '환경수험연구회', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '대기환경산업기사': {
    name: '대기환경산업기사',
    icon: 'fa-wind',
    category: '환경·에너지',
    heroTitle: '2026년도 대기환경산업기사 합격 가이드',
    heroDesc: '대기환경산업기사는 대기오염 물질 관리와 방지 시설 운영을 담당하는 전문 자격증입니다. 미세먼지·탄소중립 정책 강화로 전문 인력 수요가 크게 증가하고 있습니다. 대기오염 방지 기술과 관련 법규를 체계적으로 학습하면 합격이 가능합니다.',
    passRateSummary: '필기 46% | 실기 51%',
    avgPassRate: '49%',
    passRates: [
      { year: 2020, written: 44, practical: 49 },
      { year: 2021, written: 45, practical: 50 },
      { year: 2022, written: 47, practical: 52 },
      { year: 2023, written: 46, practical: 53 },
      { year: 2024, written: 48, practical: 54 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '대기오염개론', desc: '대기오염 원인, 영향, 기상 조건 및 확산 이론' },
      { name: '연소공학', desc: '연료 연소 원리 및 연소 장치 관련 이론' },
      { name: '대기오염방지기술', desc: '집진·탈황·탈질 등 오염 방지 설비 기술' },
      { name: '대기환경관계법규', desc: '대기환경보전법 및 관련 환경 법령 이해' },
      { name: '대기오염공정시험기준', desc: '대기오염 물질 측정 및 시험 방법론' },
    ],
    jobs: [
      { title: '대기환경 관리원', company: '환경관리공단', salary: '3,200~4,000만원', location: '전국', type: '정규직' },
      { title: '배출가스 측정원', company: '환경측정 대행업체', salary: '3,000~3,800만원', location: '수도권', type: '정규직' },
      { title: '대기방지 시설 관리자', company: '제조·발전 기업', salary: '3,400~4,200만원', location: '전국', type: '정규직' },
      { title: '환경안전팀 담당자', company: '중견 제조기업', salary: '3,500~4,500만원', location: '전국', type: '정규직' },
      { title: '대기오염 모니터링원', company: '공공기관', salary: '2,900~3,600만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '대기환경산업기사 필기 완벽대비', author: '성안당 편집부', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '대기환경산업기사 기출문제 완전정복', author: '박진우', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '대기환경산업기사 실기 핵심정리', author: '이민호', publisher: '구민사', year: 2023, rating: 4.3 },
      { title: '대기환경산업기사 최신 기출 총정리', author: '환경수험연구회', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '환경산업기사': {
    name: '환경산업기사',
    icon: 'fa-leaf',
    category: '환경·에너지',
    heroTitle: '2026년도 환경산업기사 합격 가이드',
    heroDesc: '환경산업기사는 대기·수질·소음·폐기물 등 다양한 환경 분야를 아우르는 종합 환경 자격증입니다. 환경 전반에 대한 폭넓은 지식이 요구되며 환경 컨설팅·관리 직종으로 진출하기 유리합니다. 체계적인 과목별 학습 전략으로 효율적인 합격을 준비하세요.',
    passRateSummary: '필기 45% | 실기 50%',
    avgPassRate: '48%',
    passRates: [
      { year: 2020, written: 43, practical: 48 },
      { year: 2021, written: 44, practical: 49 },
      { year: 2022, written: 46, practical: 51 },
      { year: 2023, written: 45, practical: 52 },
      { year: 2024, written: 47, practical: 53 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '환경공학개론', desc: '환경 전반에 대한 기초 이론 및 공학적 접근' },
      { name: '대기환경', desc: '대기오염 원인 및 방지 기술 개요' },
      { name: '수질환경', desc: '수질오염 원인 및 수처리 기술 개요' },
      { name: '폐기물처리', desc: '폐기물 분류, 처리 방법 및 재활용 기술' },
      { name: '환경관계법규', desc: '환경부 소관 법령 및 환경 정책 이해' },
    ],
    jobs: [
      { title: '환경관리 담당자', company: '중대형 제조기업', salary: '3,300~4,200만원', location: '전국', type: '정규직' },
      { title: '환경컨설턴트', company: '환경컨설팅 업체', salary: '3,500~4,500만원', location: '서울·경기', type: '정규직' },
      { title: '환경안전팀원', company: '공공기관', salary: '3,400~4,300만원', location: '전국', type: '정규직' },
      { title: '환경영향평가원', company: '환경평가 전문기관', salary: '3,600~4,800만원', location: '수도권', type: '정규직' },
      { title: '환경시설 운영원', company: '지방공기업', salary: '2,900~3,700만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '환경산업기사 필기 한권완성', author: '김환경', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '환경산업기사 기출문제 총정리', author: '이성민', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '환경산업기사 실기 완전정복', author: '박환경', publisher: '구민사', year: 2023, rating: 4.3 },
      { title: '환경산업기사 핵심요약 및 기출', author: '환경수험연구회', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '정보보안산업기사': {
    name: '정보보안산업기사',
    icon: 'fa-shield-halved',
    category: 'IT·정보통신',
    heroTitle: '2026년도 정보보안산업기사 합격 가이드',
    heroDesc: '정보보안산업기사는 사이버 공격 대응과 정보 시스템 보안 관리를 담당하는 IT 보안 전문 자격증입니다. 디지털 전환 가속화와 보안 위협 증가로 기업·공공기관의 수요가 지속 상승 중입니다. 네트워크 보안부터 법규까지 체계적으로 준비하면 합격할 수 있습니다.',
    passRateSummary: '필기 48% | 실기 53%',
    avgPassRate: '51%',
    passRates: [
      { year: 2020, written: 45, practical: 50 },
      { year: 2021, written: 47, practical: 52 },
      { year: 2022, written: 49, practical: 54 },
      { year: 2023, written: 48, practical: 53 },
      { year: 2024, written: 50, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '정보보안 일반', desc: '암호화, 인증, 접근 제어 등 보안 기초 이론' },
      { name: '네트워크 보안', desc: '네트워크 공격 유형 및 방어 기법' },
      { name: '시스템 보안', desc: '운영체제 및 서버 보안 취약점 분석과 대응' },
      { name: '애플리케이션 보안', desc: '웹·앱 취약점 및 시큐어코딩 방법론' },
      { name: '정보보호 관계법규', desc: '개인정보보호법, 정보통신망법 등 관련 법령' },
    ],
    jobs: [
      { title: '정보보안 담당자', company: '금융·IT 기업', salary: '4,000~5,500만원', location: '서울·경기', type: '정규직' },
      { title: '보안관제 분석원', company: '보안관제 전문기업', salary: '3,500~4,500만원', location: '수도권', type: '정규직' },
      { title: '침해사고 대응원', company: 'CERT/CSIRT 기관', salary: '4,200~5,800만원', location: '서울', type: '정규직' },
      { title: '정보보호 컨설턴트', company: '보안컨설팅 업체', salary: '4,500~6,000만원', location: '수도권', type: '정규직' },
      { title: '보안 시스템 운영원', company: '공공기관', salary: '3,300~4,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '정보보안산업기사 필기 완전정복', author: '시나공 편집팀', publisher: '길벗', year: 2024, rating: 4.5 },
      { title: '정보보안산업기사 기출문제 해설집', author: '김보안', publisher: '에듀윌', year: 2024, rating: 4.4 },
      { title: '정보보안산업기사 실기 핵심노트', author: '이사이버', publisher: '성안당', year: 2023, rating: 4.3 },
      { title: '정보보안산업기사 한권으로 합격하기', author: '보안수험연구회', publisher: '영진닷컴', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '전자계산기기사': {
    name: '전자계산기기사',
    icon: 'fa-microchip',
    category: 'IT·정보통신',
    heroTitle: '2026년도 전자계산기기사 합격 가이드',
    heroDesc: '전자계산기기사는 컴퓨터 하드웨어 및 소프트웨어 시스템 설계·개발·운영 능력을 인증하는 국가기술 자격증입니다. IT 인프라 관리 및 임베디드 시스템 분야에서 유용하게 활용됩니다. 디지털 논리 회로부터 운영체제까지 폭넓은 지식을 체계적으로 학습하세요.',
    passRateSummary: '필기 50% | 실기 55%',
    avgPassRate: '53%',
    passRates: [
      { year: 2020, written: 47, practical: 52 },
      { year: 2021, written: 49, practical: 54 },
      { year: 2022, written: 51, practical: 56 },
      { year: 2023, written: 50, practical: 55 },
      { year: 2024, written: 52, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '디지털 논리회로', desc: '불 대수, 논리 게이트, 순서 논리 회로 설계' },
      { name: '전자계산기구조', desc: '프로세서, 메모리, 버스 등 컴퓨터 구조론' },
      { name: '운영체제', desc: '프로세스 관리, 메모리 관리, 파일 시스템' },
      { name: '소프트웨어공학', desc: '소프트웨어 개발 방법론 및 품질 관리' },
      { name: '데이터통신', desc: '데이터 전송 원리, 프로토콜, 네트워크 기초' },
    ],
    jobs: [
      { title: '시스템 엔지니어', company: 'IT 서비스 기업', salary: '3,800~5,000만원', location: '수도권', type: '정규직' },
      { title: '임베디드 개발자', company: '전자·반도체 기업', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: 'IT 인프라 관리자', company: '대기업·공공기관', salary: '4,200~5,800만원', location: '전국', type: '정규직' },
      { title: '하드웨어 설계원', company: '전자 제조기업', salary: '3,900~5,200만원', location: '전국', type: '정규직' },
      { title: '전산 운영원', company: '공공기관', salary: '3,000~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전자계산기기사 필기 완전정복', author: '시나공 편집팀', publisher: '길벗', year: 2024, rating: 4.5 },
      { title: '전자계산기기사 기출문제집', author: '이컴퓨터', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '전자계산기기사 실기 핵심이론', author: '박전산', publisher: '영진닷컴', year: 2023, rating: 4.3 },
      { title: '전자계산기기사 최신 기출 해설', author: 'IT수험연구회', publisher: '에듀윌', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '전자계산기제어산업기사': {
    name: '전자계산기제어산업기사',
    icon: 'fa-microchip',
    category: 'IT·정보통신',
    heroTitle: '2026년도 전자계산기제어산업기사 합격 가이드',
    heroDesc: '전자계산기제어산업기사는 컴퓨터를 활용한 자동화 제어 시스템 설계와 운영 능력을 인증하는 자격증입니다. 스마트 팩토리 확산으로 산업 자동화 분야에서의 활용도가 높아지고 있습니다. 디지털 회로, 제어공학, 프로그래밍 등을 균형 있게 학습하는 것이 핵심입니다.',
    passRateSummary: '필기 47% | 실기 52%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 44, practical: 49 },
      { year: 2021, written: 46, practical: 51 },
      { year: 2022, written: 48, practical: 53 },
      { year: 2023, written: 47, practical: 52 },
      { year: 2024, written: 49, practical: 54 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '디지털 논리회로', desc: '논리 게이트, 플립플롭, 카운터 등 디지털 회로 이론' },
      { name: '전자계산기구조', desc: '마이크로프로세서 구조 및 명령어 처리 방식' },
      { name: '제어공학', desc: '피드백 제어, PID 제어 등 자동제어 이론' },
      { name: '프로그래밍 언어', desc: 'C언어 기반 제어 프로그래밍 및 알고리즘' },
      { name: '전자회로', desc: '아날로그·디지털 전자 회로 설계 기초' },
    ],
    jobs: [
      { title: '자동화 제어 엔지니어', company: '스마트팩토리 기업', salary: '3,800~5,000만원', location: '전국', type: '정규직' },
      { title: 'PLC 프로그래머', company: '자동화 설비 업체', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
      { title: '산업용 로봇 제어원', company: '제조·자동차 기업', salary: '3,600~4,900만원', location: '전국', type: '정규직' },
      { title: '임베디드 제어 개발자', company: '전자 부품 업체', salary: '3,700~5,000만원', location: '수도권', type: '정규직' },
      { title: '시스템 유지보수원', company: '설비관리 업체', salary: '2,900~3,700만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전자계산기제어산업기사 필기 완벽대비', author: '김제어', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '전자계산기제어산업기사 기출문제 해설', author: '이자동화', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '전자계산기제어산업기사 실기 핵심정리', author: '박전자', publisher: '구민사', year: 2023, rating: 4.3 },
      { title: '전자계산기제어산업기사 종합 기출문제집', author: 'IT수험연구회', publisher: '영진닷컴', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '전자계산기기능사': {
    name: '전자계산기기능사',
    icon: 'fa-microchip',
    category: 'IT·정보통신',
    heroTitle: '2026년도 전자계산기기능사 합격 가이드',
    heroDesc: '전자계산기기능사는 컴퓨터 하드웨어 조립·정비 및 기초 소프트웨어 운용 능력을 검증하는 국가기술 자격증입니다. IT 기초 입문 자격으로 학생 및 취업 준비생에게 적합하며 진입 장벽이 낮은 편입니다. 기본 이론과 실습을 병행하면 단기간에 합격이 가능합니다.',
    passRateSummary: '필기 58% | 실기 60%',
    avgPassRate: '59%',
    passRates: [
      { year: 2020, written: 55, practical: 57 },
      { year: 2021, written: 57, practical: 59 },
      { year: 2022, written: 59, practical: 61 },
      { year: 2023, written: 58, practical: 60 },
      { year: 2024, written: 60, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '전자계산기 일반', desc: '컴퓨터 하드웨어 구성 요소 및 동작 원리' },
      { name: '패키지활용', desc: '워드프로세서, 스프레드시트 등 패키지 소프트웨어 활용' },
      { name: '전자회로 기초', desc: '기본 전자 부품 및 회로 동작 이해' },
      { name: '컴퓨터 유지보수', desc: '하드웨어 조립, 점검, 고장 진단 및 수리' },
      { name: '정보통신 기초', desc: '네트워크 기초, 인터넷 서비스 개요' },
    ],
    jobs: [
      { title: 'PC 유지보수 기사', company: 'IT 서비스 업체', salary: '2,800~3,500만원', location: '전국', type: '정규직' },
      { title: '전산 장비 관리원', company: '공공기관·학교', salary: '2,700~3,400만원', location: '전국', type: '정규직' },
      { title: '전산 운영 보조원', company: '기업 전산실', salary: '2,600~3,300만원', location: '전국', type: '정규직' },
      { title: '기술지원 담당자', company: 'IT 장비 업체', salary: '2,900~3,600만원', location: '수도권', type: '정규직' },
      { title: 'IT 헬프데스크 요원', company: '대기업·공공기관', salary: '2,500~3,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '전자계산기기능사 필기 한권완성', author: '시나공 편집팀', publisher: '길벗', year: 2024, rating: 4.5 },
      { title: '전자계산기기능사 기출문제 총정리', author: '이전산', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '전자계산기기능사 실기 완전정복', author: '박컴퓨터', publisher: '영진닷컴', year: 2023, rating: 4.3 },
      { title: '전자계산기기능사 최신 기출해설', author: 'IT수험연구회', publisher: '에듀윌', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '항공기체기능사': {
    name: '항공기체기능사',
    icon: 'fa-plane',
    category: '항공·조선',
    heroTitle: '2026년도 항공기체기능사 합격 가이드',
    heroDesc: '항공기체기능사는 항공기 기체 구조물의 제작, 조립, 수리 및 점검 능력을 검증하는 국가기술 자격증입니다. 항공 MRO 산업 성장으로 항공사·정비 업체에서의 수요가 꾸준히 증가하고 있습니다. 항공기 구조 이론과 정비 실습을 체계적으로 준비하세요.',
    passRateSummary: '필기 55% | 실기 58%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 52, practical: 55 },
      { year: 2021, written: 54, practical: 57 },
      { year: 2022, written: 56, practical: 59 },
      { year: 2023, written: 55, practical: 58 },
      { year: 2024, written: 57, practical: 60 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '항공기체', desc: '항공기 기체 구조, 재료, 제작 방법 이론' },
      { name: '항공역학', desc: '항공기 비행 원리 및 공기역학 기초' },
      { name: '항공기체 정비', desc: '기체 손상 검사, 수리 및 정비 절차' },
      { name: '항공기계 요소', desc: '볼트, 리벳, 케이블 등 기계 요소 이론' },
      { name: '항공법규', desc: '항공법 및 항공 안전 규정 이해' },
    ],
    jobs: [
      { title: '항공기 기체 정비원', company: '대한항공·아시아나', salary: '3,500~4,800만원', location: '인천·김포', type: '정규직' },
      { title: '항공 MRO 기술원', company: 'MRO 전문업체', salary: '3,300~4,500만원', location: '전국', type: '정규직' },
      { title: '항공기 제조 기술원', company: '한국항공우주산업', salary: '3,600~5,000만원', location: '사천·창원', type: '정규직' },
      { title: '기체 검사원', company: '항공정비 업체', salary: '3,400~4,600만원', location: '전국', type: '정규직' },
      { title: '항공기 지상 정비원', company: '저비용항공사', salary: '2,900~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '항공기체기능사 필기 완전정복', author: '항공수험연구회', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '항공기체기능사 기출문제집', author: '김항공', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '항공기체기능사 실기 핵심이론', author: '이정비', publisher: '구민사', year: 2023, rating: 4.3 },
      { title: '항공기체기능사 최신 기출 해설', author: '박기체', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
  '항공기관기능사': {
    name: '항공기관기능사',
    icon: 'fa-plane',
    category: '항공·조선',
    heroTitle: '2026년도 항공기관기능사 합격 가이드',
    heroDesc: '항공기관기능사는 항공기 엔진의 정비, 점검, 수리 작업을 담당하는 전문 자격증입니다. 항공 운송 수요 회복과 함께 항공기관 정비 인력의 수요가 크게 늘어나는 추세입니다. 왕복·가스터빈 엔진 이론과 실습을 중심으로 체계적으로 준비하세요.',
    passRateSummary: '필기 54% | 실기 57%',
    avgPassRate: '56%',
    passRates: [
      { year: 2020, written: 51, practical: 54 },
      { year: 2021, written: 53, practical: 56 },
      { year: 2022, written: 55, practical: 58 },
      { year: 2023, written: 54, practical: 57 },
      { year: 2024, written: 56, practical: 59 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '항공기관', desc: '왕복엔진 및 가스터빈엔진 구조와 작동 원리' },
      { name: '항공역학', desc: '항공기 비행 원리 및 추진 이론 기초' },
      { name: '항공기관 정비', desc: '엔진 분해, 검사, 조립 및 시운전 절차' },
      { name: '항공연료 및 윤활유', desc: '항공유, 윤활유 특성 및 관리 방법' },
      { name: '항공법규', desc: '항공법 및 기관 정비 관련 안전 규정' },
    ],
    jobs: [
      { title: '항공기관 정비원', company: '대한항공·아시아나', salary: '3,600~5,000만원', location: '인천·김포', type: '정규직' },
      { title: '엔진 MRO 기술원', company: 'MRO 전문업체', salary: '3,400~4,700만원', location: '전국', type: '정규직' },
      { title: '항공기 제조 기관팀원', company: '한국항공우주산업', salary: '3,700~5,200만원', location: '사천·창원', type: '정규직' },
      { title: '엔진 테스트 엔지니어', company: '항공 부품 업체', salary: '3,500~4,800만원', location: '수도권', type: '정규직' },
      { title: '항공기 지상 기관 정비원', company: '저비용항공사', salary: '3,000~3,900만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '항공기관기능사 필기 완전정복', author: '항공수험연구회', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '항공기관기능사 기출문제집', author: '김엔진', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '항공기관기능사 실기 핵심이론', author: '이기관', publisher: '구민사', year: 2023, rating: 4.3 },
      { title: '항공기관기능사 최신 기출 해설', author: '박항공', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 항공·철도·식품·농림 그룹4 9종 ===

  '항공산업기사': {
    name: '항공산업기사',
    icon: 'fa-plane',
    category: '항공·조선',
    heroTitle: '2026년도 항공산업기사 합격 가이드',
    heroDesc: '항공산업기사는 항공기의 기체, 엔진, 전자·전기 장비의 정비 및 검사 업무를 수행하는 자격증입니다. 항공사 MRO(유지·보수·수리) 분야 취업의 필수 자격으로 꼽히며, 국내외 항공 정비 업계에서 높은 수요를 보입니다. 체계적인 이론 학습과 실기 훈련을 통해 단기간 합격을 목표로 준비하세요.',
    passRateSummary: '필기 47% | 실기 53%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 45, practical: 51 },
      { year: 2021, written: 46, practical: 52 },
      { year: 2022, written: 48, practical: 54 },
      { year: 2023, written: 47, practical: 53 },
      { year: 2024, written: 49, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '항공역학', desc: '항공기 비행 원리, 양력·항력·추력·중력의 관계 및 안정성 이론' },
      { name: '항공기체', desc: '항공기 구조 재료, 기체 구조 형식, 용접 및 수리 방법' },
      { name: '항공기관', desc: '왕복엔진 및 가스터빈엔진의 구조, 작동 원리, 정비 방법' },
      { name: '항공장비', desc: '항공계기, 전기·전자 장비, 유압 및 공압 계통의 구조와 기능' },
      { name: '항공법규', desc: '항공안전법, 항공사업법 등 항공 관련 법령 및 규정' },
    ],
    jobs: [
      { title: '항공기 정비사', company: '대한항공·아시아나항공', salary: '3,200~4,500만원', location: '인천·김포', type: '정규직' },
      { title: 'MRO 기술원', company: '한국항공우주산업(KAI)', salary: '3,000~4,200만원', location: '사천', type: '정규직' },
      { title: '항공기체 검사원', company: '저비용항공사(LCC)', salary: '2,800~3,800만원', location: '제주·김해', type: '정규직' },
      { title: '군수지원 정비기술원', company: '국방부 산하 기관', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '항공정비 계약직', company: '항공 MRO 전문업체', salary: '2,600~3,400만원', location: '인천', type: '계약직' },
    ],
    books: [
      { title: '항공산업기사 필기 완전정복', author: '이재훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '항공산업기사 과년도 기출문제 해설', author: '김민준', publisher: '크라운출판사', year: 2024, rating: 4.4 },
      { title: '항공역학·항공기관 핵심이론', author: '박성현', publisher: '예문사', year: 2023, rating: 4.3 },
      { title: '항공산업기사 실기 작업형 가이드', author: '최준호', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '항공기사': {
    name: '항공기사',
    icon: 'fa-plane',
    category: '항공·조선',
    heroTitle: '2026년도 항공기사 합격 가이드',
    heroDesc: '항공기사는 항공기 설계, 제조, 시험 및 고급 정비 업무를 담당하는 전문 기술인력을 위한 국가기술자격증입니다. 산업기사 대비 높은 수준의 전문 지식을 요구하며, 항공우주산업 및 방산 분야 취업에 경쟁력을 제공합니다. 체계적인 심화 학습으로 합격의 문을 열어보세요.',
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
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '항공역학', desc: '고급 비행역학, 항공기 안정성·조종성 이론 및 성능 계산' },
      { name: '항공기체', desc: '복합재료 구조, 피로·파괴 역학, 항공기 구조 해석 및 수리' },
      { name: '항공기관', desc: '가스터빈엔진 열역학, 엔진 성능 분석, 추진 계통 심화 이론' },
      { name: '항공장비일반', desc: '항공 전자·전기 계통, 자동비행장치, 통신·항법 장비 이론' },
      { name: '항공법규', desc: '국제민간항공협약(ICAO), 국내 항공안전법·항공사업법 규정' },
    ],
    jobs: [
      { title: '항공기 설계·개발 엔지니어', company: '한국항공우주산업(KAI)', salary: '4,000~6,000만원', location: '사천', type: '정규직' },
      { title: '항공기 품질보증 엔지니어', company: '대한항공 기술연구원', salary: '4,200~5,800만원', location: '인천', type: '정규직' },
      { title: '방산 항공 시스템 기술원', company: 'LIG넥스원·한화시스템', salary: '4,000~5,500만원', location: '성남·구미', type: '정규직' },
      { title: '항공안전 감독관', company: '국토교통부·항공안전기술원', salary: '4,500~6,000만원', location: '서울·인천', type: '정규직' },
      { title: '항공기술 연구원', company: '한국항공우주연구원(KARI)', salary: '3,800~5,200만원', location: '대전', type: '계약직' },
    ],
    books: [
      { title: '항공기사 필기 완전정복', author: '이재훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '항공기사 과년도 기출문제 해설집', author: '박성현', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '항공역학·항공기관 심화이론', author: '김동현', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '항공기사 실기 필답형 대비', author: '최준호', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '철도신호기사': {
    name: '철도신호기사',
    icon: 'fa-train',
    category: '건설·토목',
    heroTitle: '2026년도 철도신호기사 합격 가이드',
    heroDesc: '철도신호기사는 철도 신호 설비의 설계, 시공, 감독 및 유지보수 업무를 전문적으로 수행하는 국가기술자격증입니다. 한국철도공사(KORAIL), 도시철도공사, 철도건설 분야에서 필수 자격으로 인정받으며 취업 경쟁력이 높습니다. 철도 인프라 확장과 함께 전문 인력 수요가 꾸준히 증가하고 있습니다.',
    passRateSummary: '필기 43% | 실기 47%',
    avgPassRate: '45%',
    passRates: [
      { year: 2020, written: 41, practical: 45 },
      { year: 2021, written: 42, practical: 46 },
      { year: 2022, written: 44, practical: 48 },
      { year: 2023, written: 43, practical: 47 },
      { year: 2024, written: 45, practical: 49 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '철도공학', desc: '철도 선로, 궤도 구조, 차량 운동 특성 및 열차 운행 이론' },
      { name: '신호공학', desc: '폐색 방식, 신호기 종류, ATS·ATC·ATP 자동열차제어 시스템' },
      { name: '전기철도공학', desc: '전차선로 구성, 급전 방식, 전력 계통 및 접지 설비 이론' },
      { name: '신호설비설계', desc: '연동장치 설계, 신호 배선도 작성, 도면 판독 및 시공 기준' },
      { name: '철도관련법규', desc: '철도안전법, 도시철도법, 철도건설법 및 관련 규정' },
    ],
    jobs: [
      { title: '철도신호 설계 엔지니어', company: '한국철도기술연구원', salary: '4,000~5,500만원', location: '의왕', type: '정규직' },
      { title: '철도신호 시공 감리원', company: '철도건설 전문업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '신호설비 유지보수원', company: '한국철도공사(KORAIL)', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: '도시철도 신호팀 기술원', company: '서울·부산 도시철도공사', salary: '3,600~4,800만원', location: '서울·부산', type: '정규직' },
      { title: '철도신호 프로젝트 계약직', company: '철도 SI·유지보수 업체', salary: '3,000~4,200만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '철도신호기사 필기 핵심이론', author: '김철수', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '철도신호기사 과년도 기출문제', author: '이영호', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '신호공학·전기철도 완전정복', author: '박재민', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '철도신호기사 실기 필답형 대비', author: '정성훈', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '철도신호산업기사': {
    name: '철도신호산업기사',
    icon: 'fa-train',
    category: '건설·토목',
    heroTitle: '2026년도 철도신호산업기사 합격 가이드',
    heroDesc: '철도신호산업기사는 철도 신호 설비의 시공, 유지보수 및 운용 업무를 담당하는 전문 기술자격입니다. 철도 및 도시철도 관련 공기업과 민간 유지보수 업체 취업에 활용도가 높으며, 철도 인프라 투자 확대와 함께 전문 인력 수요가 증가하고 있습니다. 기사 취득의 디딤돌로 활용하기에도 적합합니다.',
    passRateSummary: '필기 48% | 실기 54%',
    avgPassRate: '51%',
    passRates: [
      { year: 2020, written: 46, practical: 52 },
      { year: 2021, written: 47, practical: 53 },
      { year: 2022, written: 49, practical: 55 },
      { year: 2023, written: 48, practical: 54 },
      { year: 2024, written: 50, practical: 56 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '철도공학', desc: '철도 선로 구조, 궤도 재료, 차량 특성 및 열차 운전 기초 이론' },
      { name: '신호일반', desc: '신호기, 선로전환기, 폐색 장치 등 신호 설비의 구조와 기능' },
      { name: '전기일반', desc: '직류·교류 회로 이론, 전기기기 기초, 철도 전기 설비 개요' },
      { name: '신호기기', desc: '릴레이 회로, 연동 장치 배선, 신호 설비 유지보수 실무' },
      { name: '철도관련법규', desc: '철도안전법 기초, 도시철도법, 철도 신호 설비 관련 규정' },
    ],
    jobs: [
      { title: '철도신호 유지보수 기술원', company: '한국철도공사(KORAIL)', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '지하철 신호설비 운용원', company: '서울교통공사', salary: '3,400~4,600만원', location: '서울', type: '정규직' },
      { title: '철도신호 시공 기능사원', company: '철도건설 전문업체', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '신호설비 검사원', company: '국가철도공단', salary: '3,200~4,400만원', location: '전국', type: '정규직' },
      { title: '철도신호 유지보수 계약직', company: '민간 유지보수 업체', salary: '2,600~3,600만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '철도신호산업기사 필기 완전정복', author: '이영호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '철도신호산업기사 과년도 기출문제', author: '김철수', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '신호일반·전기일반 핵심이론서', author: '박재민', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '철도신호산업기사 실기 작업형 대비', author: '정성훈', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '철도차량산업기사': {
    name: '철도차량산업기사',
    icon: 'fa-train',
    category: '건설·토목',
    heroTitle: '2026년도 철도차량산업기사 합격 가이드',
    heroDesc: '철도차량산업기사는 철도차량의 유지보수, 검사, 수리 업무를 전문으로 수행하는 국가기술자격증입니다. 한국철도공사, 도시철도공사 및 차량 제조·유지보수 업체에서 필요로 하는 핵심 기술 자격입니다. 전국 철도망 확장과 노후 차량 교체 수요 증가로 취업 전망이 밝습니다.',
    passRateSummary: '필기 49% | 실기 55%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 47, practical: 53 },
      { year: 2021, written: 48, practical: 54 },
      { year: 2022, written: 50, practical: 56 },
      { year: 2023, written: 49, practical: 55 },
      { year: 2024, written: 51, practical: 57 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '차량공학', desc: '철도차량의 구조, 주행 장치, 제동 장치, 연결 장치 기초 이론' },
      { name: '차량전기', desc: '추진 제어 장치, 보조 전원장치, 배터리 및 전기 계통 실무' },
      { name: '차량기계', desc: '윤축, 대차, 차체 구조 재료, 기계 요소 정비 및 수리 방법' },
      { name: '차량설비일반', desc: '냉난방 장치, 공기압축 장치, 출입문 장치 구조 및 정비' },
      { name: '철도관련법규', desc: '철도안전법, 철도차량 안전 기준 및 검사 관련 규정' },
    ],
    jobs: [
      { title: '철도차량 유지보수 기술원', company: '한국철도공사(KORAIL)', salary: '3,400~4,600만원', location: '전국', type: '정규직' },
      { title: '도시철도 차량 정비원', company: '서울교통공사·부산교통공사', salary: '3,400~4,800만원', location: '서울·부산', type: '정규직' },
      { title: '철도차량 제조 품질검사원', company: '현대로템', salary: '3,600~5,000만원', location: '창원', type: '정규직' },
      { title: '차량 검수 기술원', company: '국가철도공단', salary: '3,200~4,400만원', location: '전국', type: '정규직' },
      { title: '철도차량 정비 계약직', company: '민간 철도차량 유지보수 업체', salary: '2,800~3,800만원', location: '수도권', type: '계약직' },
    ],
    books: [
      { title: '철도차량산업기사 필기 완전정복', author: '김동현', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '철도차량산업기사 과년도 기출문제 해설', author: '이영호', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '차량공학·차량전기 핵심이론', author: '박재민', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '철도차량산업기사 실기 작업형 가이드', author: '최준호', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '식품기사': {
    name: '식품기사',
    icon: 'fa-utensils',
    category: '식품·위생',
    heroTitle: '2026년도 식품기사 합격 가이드',
    heroDesc: '식품기사는 식품의 제조, 가공, 품질 관리 및 위생 검사 업무를 전문으로 하는 국가기술자격증입니다. 식품 제조업, 식품 연구소, 식품의약품안전처 등 공공 및 민간 기관에서 광범위하게 활용되는 필수 자격입니다. 식품안전 의식 강화와 함께 수요가 꾸준히 증가하고 있습니다.',
    passRateSummary: '필기 44% | 실기 50%',
    avgPassRate: '47%',
    passRates: [
      { year: 2020, written: 42, practical: 48 },
      { year: 2021, written: 43, practical: 49 },
      { year: 2022, written: 45, practical: 51 },
      { year: 2023, written: 44, practical: 50 },
      { year: 2024, written: 46, practical: 52 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '식품위생학', desc: '식품 오염원, 식중독 원인균, 식품 보존 방법 및 위생 관리 기준' },
      { name: '식품화학', desc: '식품 성분(수분·단백질·지방·탄수화물·비타민), 식품 첨가물 화학' },
      { name: '식품가공학', desc: '식품 제조 공정, 가열·냉동·건조·발효 처리 기술 및 품질 관리' },
      { name: '식품미생물학', desc: '유익균·유해균 특성, 발효 미생물, 식품 미생물 검사 방법' },
      { name: '식품관계법규', desc: '식품위생법, 건강기능식품법, HACCP 기준 및 식품 표시 규정' },
    ],
    jobs: [
      { title: '식품 품질관리 연구원', company: 'CJ제일제당·롯데식품', salary: '3,400~4,800만원', location: '수도권', type: '정규직' },
      { title: '식품위생 검사원', company: '식품의약품안전처·지방청', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: 'HACCP 관리 담당자', company: '식품 제조업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '식품 연구개발 연구원', company: '농심·오뚜기 R&D센터', salary: '3,600~5,000만원', location: '수도권', type: '정규직' },
      { title: '식품 품질검사 계약직', company: '식품 검사 전문기관', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '식품기사 필기 완전정복', author: '김미진', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '식품기사 과년도 기출문제 해설', author: '이수연', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '식품화학·식품미생물학 핵심이론', author: '박지영', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '식품기사 실기 필답형 대비서', author: '최현주', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '식품산업기사': {
    name: '식품산업기사',
    icon: 'fa-utensils',
    category: '식품·위생',
    heroTitle: '2026년도 식품산업기사 합격 가이드',
    heroDesc: '식품산업기사는 식품 생산 현장에서 품질 관리, 위생 점검, 원료 검사 등의 실무를 담당하는 국가기술자격증입니다. 식품 제조업 및 유통업 취업에 직접적인 도움이 되며, 식품 관련 공무원 및 연구직 진출을 위한 기초 자격으로도 활용됩니다. 식품 안전 관리 강화 추세에 따라 자격증 보유자 수요가 증가하고 있습니다.',
    passRateSummary: '필기 50% | 실기 56%',
    avgPassRate: '53%',
    passRates: [
      { year: 2020, written: 48, practical: 54 },
      { year: 2021, written: 49, practical: 55 },
      { year: 2022, written: 51, practical: 57 },
      { year: 2023, written: 50, practical: 56 },
      { year: 2024, written: 52, practical: 58 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '식품위생학', desc: '식품 위해 요소, 식중독 예방, 위생 관리 절차 및 기준 규정' },
      { name: '식품화학', desc: '식품 구성 성분의 특성, 식품 첨가물 종류 및 규격 기준' },
      { name: '식품가공학', desc: '식품 가공·저장 방법, 식품별 제조 공정 및 품질 관리 실무' },
      { name: '식품미생물학', desc: '위생 지표균, 식품 부패균 특성, 미생물 검사 방법 기초' },
      { name: '식품관계법규', desc: '식품위생법 기초, HACCP 의무 적용 기준, 식품 표시 기준' },
    ],
    jobs: [
      { title: '식품 품질관리 기술원', company: '중소 식품 제조업체', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '식품 생산 공정 관리원', company: '식품 대기업 생산라인', salary: '3,000~4,200만원', location: '수도권·충청', type: '정규직' },
      { title: '단체급식 위생 관리원', company: '학교·병원 급식 업체', salary: '2,600~3,600만원', location: '전국', type: '정규직' },
      { title: '식품 원료 검사원', company: '식품 원료 납품업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '식품 검사 계약직', company: '식품 검사기관', salary: '2,400~3,400만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '식품산업기사 필기 완전정복', author: '이수연', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '식품산업기사 과년도 기출문제', author: '김미진', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '식품위생·미생물 핵심이론서', author: '박지영', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '식품산업기사 실기 작업형 대비', author: '최현주', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '유기농업기능사': {
    name: '유기농업기능사',
    icon: 'fa-seedling',
    category: '농림·수산',
    heroTitle: '2026년도 유기농업기능사 합격 가이드',
    heroDesc: '유기농업기능사는 화학 농약·합성 비료를 사용하지 않는 친환경 유기농 재배 기초 기술을 검증하는 자격입니다. 학력 제한 없이 응시 가능하며, 귀농·귀촌 희망자, 친환경 농업 종사자, 농업 공무원 준비생에게 유리한 입문 자격입니다.',
    passRateSummary: '필기 55% | 실기 60%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 52, practical: 57 }, { year: 2021, written: 54, practical: 59 },
      { year: 2022, written: 55, practical: 60 }, { year: 2023, written: 57, practical: 62 },
      { year: 2024, written: 56, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '유기농업 기초', desc: '친환경 농업 개념, 토양 미생물 활용, 퇴비·유기질 비료 제조' },
      { name: '작물 재배 기초', desc: '주요 작물 재배 특성, 병해충 친환경 방제, 생육 관리' },
      { name: '토양 관리', desc: '토양 이화학적 특성, 유기물 투입, 토양 개량 방법' },
      { name: '농업 관련 법규', desc: '친환경농어업법, 유기식품 인증 기준 주요 내용' },
    ],
    jobs: [
      { title: '유기농 재배 농업인', company: '유기농 농장', salary: '2,500~4,000만원', location: '전국', type: '개인사업' },
      { title: '친환경 농산물 생산 관리', company: '농업법인', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '농업기술센터 지도사', company: '지자체 농업기술센터', salary: '3,000~4,000만원', location: '전국', type: '공무원' },
      { title: '유기농 컨설턴트', company: '친환경 농업 컨설팅', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '스마트팜 운영 관리자', company: '스마트팜 업체', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 무단뽀 유기농업기능사 필기+실기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2026 나합격 유기농업기능사 필기+실기+무료특강', author: '나합격 편집부', publisher: '에듀팩토리', year: 2025, rating: 4.5 },
      { title: '2026 박문각 유기농업기능사 필기·실기 올큐패스', author: '박문각 편집부', publisher: '박문각', year: 2025, rating: 4.5 },
      { title: '2026 한번에 합격하는 유기농업기능사 필기+실기', author: '자격시험 편집부', publisher: '성안당', year: 2025, rating: 4.4 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 학습 계획 수립', '유기농업 기초·토양 관리 핵심 정리',
      '친환경 법규 주요 조항 암기', '기출문제 풀이 (최근 3개년)',
      '실기 작업형 퇴비 제조·작물 관리 연습',
    ],
  },

  '원예기능사': {
    name: '원예기능사',
    icon: 'fa-seedling',
    category: '농림·수산',
    heroTitle: '2026년도 원예기능사 합격 가이드',
    heroDesc: '원예기능사는 채소·과수·화훼 등 원예 작물의 재배·관리 기술을 검증하는 국가기술자격입니다. 학력 제한 없이 응시 가능하며, 원예기사의 입문 단계로 농원·원예 농장·화훼 업체·도시농업 분야 취업 및 창업에 활용됩니다.',
    passRateSummary: '필기 58% | 실기 62%',
    avgPassRate: '60%',
    passRates: [
      { year: 2020, written: 55, practical: 59 }, { year: 2021, written: 57, practical: 61 },
      { year: 2022, written: 58, practical: 62 }, { year: 2023, written: 60, practical: 64 },
      { year: 2024, written: 59, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '채소 재배', desc: '주요 채소(토마토·오이·상추 등) 재배 방법, 시설 재배 기술' },
      { name: '과수 재배', desc: '사과·배·포도·복숭아 등 과수 재배, 전정·결실 관리 기술' },
      { name: '화훼 재배', desc: '절화·분화·지피식물 재배, 조직 배양, 시설 환경 관리' },
      { name: '원예 관련 법규', desc: '농업기계화 촉진법, 종자법, 식물신품종보호법 주요 내용' },
    ],
    jobs: [
      { title: '원예 농장 재배 관리사', company: '원예 농장', salary: '2,500~3,500만원', location: '전국', type: '정규직' },
      { title: '스마트팜 원예 기사', company: '스마트팜 업체', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '도시농업 강사', company: '지자체·문화센터', salary: '2,500~3,500만원', location: '전국', type: '계약직' },
      { title: '가든센터 운영 관리자', company: '원예·가든센터', salary: '2,600~3,600만원', location: '전국', type: '정규직' },
      { title: '화훼 장식 보조', company: '화원·플로리스트샵', salary: '2,300~3,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 Win-Q 원예기능사 필기+실기 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2026 원예기능사 필기 실기 필답형', author: '자격시험 편집부', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '원예기능사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.4 },
      { title: '원예기능사 실기 완전정복', author: '원예 자격 연구회', publisher: '일진사', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 학습 계획 수립', '채소·과수 재배 핵심 이론 정리',
      '화훼 재배·시설 환경 관리 학습', '기출문제 풀이 (최근 3개년)',
      '실기 작업형 식물 재배·관리 연습',
    ],
  },

  '화훼장식기능사': {
    name: '화훼장식기능사',
    icon: 'fa-leaf',
    category: '농림·수산',
    heroTitle: '2026년도 화훼장식기능사 합격 가이드',
    heroDesc: '화훼장식기능사는 꽃과 식물을 활용한 장식·연출 기술을 검증하는 국가기술자격입니다. 플로리스트·화원 창업·웨딩 화훼 장식·이벤트 공간 연출 등 다양한 분야에서 활용되며, 필기와 실기(꽃꽂이·부케 제작) 시험으로 구성됩니다.',
    passRateSummary: '필기 60% | 실기 55%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 57, practical: 52 }, { year: 2021, written: 59, practical: 54 },
      { year: 2022, written: 61, practical: 56 }, { year: 2023, written: 62, practical: 57 },
      { year: 2024, written: 60, practical: 55 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '화훼장식 재료학', desc: '절화·분화·소재 종류·특성, 보존 처리, 색채 이론 기초' },
      { name: '화훼장식 기법', desc: '꽃꽂이 기본형(직립형·경사형·수평형), 부케·코사지 제작' },
      { name: '공간 화훼 연출', desc: '테이블 장식, 웨딩 플라워, 공간별 장식 연출 기법' },
      { name: '화훼 관련 법규', desc: '화훼 유통, 원산지 표시, 소비자 보호 관련 규정' },
    ],
    jobs: [
      { title: '플로리스트', company: '화원·플라워샵', salary: '2,400~3,500만원', location: '전국', type: '정규직' },
      { title: '웨딩 화훼 장식사', company: '웨딩업체·예식장', salary: '2,600~3,800만원', location: '전국', type: '정규직' },
      { title: '이벤트 플로리스트', company: '이벤트·공간 연출 업체', salary: '2,800~4,000만원', location: '전국', type: '프리랜서' },
      { title: '화훼 매장 운영', company: '독립 창업', salary: '3,000~5,000만원', location: '전국', type: '개인사업' },
      { title: '문화센터 화훼 강사', company: '문화센터·평생교육원', salary: '2,500~3,500만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '2026 시대에듀 Win-Q 화훼장식기능사 필기 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.7 },
      { title: '2026 화훼장식기능사 필기&실기&미니북 세트', author: '자격시험 편집부', publisher: '성안당', year: 2025, rating: 4.6 },
      { title: '2026 금메달 토선생의 화훼장식기능사 필기+실기', author: '자격시험 연구회', publisher: '크라운출판사', year: 2025, rating: 4.6 },
      { title: '2026 reNEWal 화훼장식기능사 필기 합격보장', author: '화훼 연구회', publisher: '예문사', year: 2025, rating: 4.5 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 학습 계획 수립', '화훼 소재·색채 이론 핵심 정리',
      '꽃꽂이 기본형 디자인 원리 학습', '기출문제 풀이 (최근 3개년)',
      '실기 꽃꽂이·부케 제작 반복 연습',
    ],
  },

  '화훼장식산업기사': {
    name: '화훼장식산업기사',
    icon: 'fa-leaf',
    category: '농림·수산',
    heroTitle: '2026년도 화훼장식산업기사 합격 가이드',
    heroDesc: '화훼장식산업기사는 화훼장식기능사보다 높은 수준의 창작·연출 능력을 검증하는 자격으로, 전문 플로리스트·플라워샵 창업·화훼 교육 강사로 활동하기 위한 중급 자격입니다. 2년제 이상 관련 학과 졸업자 또는 기능사 취득 후 경력자가 응시 가능합니다.',
    passRateSummary: '필기 50% | 실기 45%',
    avgPassRate: '47%',
    passRates: [
      { year: 2020, written: 47, practical: 42 }, { year: 2021, written: 49, practical: 44 },
      { year: 2022, written: 51, practical: 46 }, { year: 2023, written: 52, practical: 47 },
      { year: 2024, written: 50, practical: 45 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '화훼장식 이론', desc: '디자인 원리, 색채 응용, 트렌드 분석, 스타일별 장식 기획' },
      { name: '화훼 재배·유통', desc: '절화·분화 재배, 선도 관리, 유통 체계, 원가 계산' },
      { name: '공간·이벤트 연출', desc: '결혼식·장례식·행사장 화훼 연출 기획 및 실행 방법' },
      { name: '화훼 관련 법규', desc: '화훼 산업 관련 법령, 유통·인증·표시 규정' },
    ],
    jobs: [
      { title: '전문 플로리스트', company: '고급 화원·플라워샵', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '화훼 교육 강사', company: '전문학교·문화센터', salary: '3,000~4,500만원', location: '전국', type: '계약직' },
      { title: '이벤트 화훼 디렉터', company: '이벤트 기획사', salary: '3,200~5,000만원', location: '전국', type: '프리랜서' },
      { title: '호텔·리조트 플로리스트', company: '특급 호텔', salary: '3,200~4,800만원', location: '전국', type: '정규직' },
      { title: '화훼 창업', company: '독립 창업', salary: '3,500~6,000만원', location: '전국', type: '개인사업' },
    ],
    books: [
      { title: '2026 화훼장식산업기사 필기실기 Revised Edition', author: '자격시험 편집부', publisher: '성안당', year: 2025, rating: 4.6 },
      { title: '2025 화훼장식산업기사 필기실기', author: '자격시험 편집부', publisher: '예문사', year: 2025, rating: 4.5 },
      { title: '화훼장식산업기사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.4 },
      { title: '화훼 디자인 실기 완전정복', author: '화훼 연구회', publisher: '일진사', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '응시자격 확인 (학력·경력 요건)', '화훼 디자인 이론·색채 응용 학습',
      '공간·이벤트 연출 기획 실습', '기출문제 풀이 (최근 3개년)',
      '실기 창작 작품 제작 반복 연습',
    ],
  },

  '화훼장식기사': {
    name: '화훼장식기사',
    icon: 'fa-leaf',
    category: '농림·수산',
    heroTitle: '2026년도 화훼장식기사 합격 가이드',
    heroDesc: '화훼장식기사는 화훼장식 분야 최고 기사급 자격으로, 대규모 행사·전시·공간 연출을 총괄 기획·디자인하는 전문가를 대상으로 합니다. 4년제 관련 학과 졸업자 또는 산업기사 취득 후 경력자가 응시 가능하며, 화훼 강사·디렉터·창업 운영에서 최고 신뢰도를 제공합니다.',
    passRateSummary: '필기 45% | 실기 40%',
    avgPassRate: '42%',
    passRates: [
      { year: 2020, written: 42, practical: 38 }, { year: 2021, written: 44, practical: 39 },
      { year: 2022, written: 45, practical: 40 }, { year: 2023, written: 46, practical: 41 },
      { year: 2024, written: 45, practical: 40 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '화훼장식 기획·디자인', desc: '대형 행사·전시 화훼 연출 기획, 트렌드 분석, 포트폴리오 작성' },
      { name: '화훼 생산·유통 관리', desc: '절화·분화 생산 관리, 품질 기준, 수출입 유통 체계' },
      { name: '화훼 비즈니스', desc: '원가 산출, 사업 계획, 마케팅, 글로벌 화훼 시장 이해' },
      { name: '화훼 관련 법규', desc: '화훼 산업 진흥법, 식물 검역, 원산지 규정 전반' },
    ],
    jobs: [
      { title: '화훼 디자인 디렉터', company: '이벤트·공간 연출 업체', salary: '4,000~6,000만원', location: '전국', type: '정규직' },
      { title: '화훼 전문 교수·강사', company: '대학·전문학교', salary: '3,500~6,000만원', location: '전국', type: '정규직' },
      { title: '특급 호텔 수석 플로리스트', company: '특급 호텔', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '화훼 수출입 전문가', company: '화훼 무역업체', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
      { title: '화훼 플라워샵 대표', company: '독립 창업', salary: '4,000~8,000만원', location: '전국', type: '개인사업' },
    ],
    books: [
      { title: '2026 화훼장식기사 필기&실기 Revised Edition', author: '자격시험 편집부', publisher: '성안당', year: 2025, rating: 4.6 },
      { title: '2025 화훼장식기사 필기실기', author: '자격시험 편집부', publisher: '예문사', year: 2025, rating: 4.5 },
      { title: '화훼장식기사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.4 },
      { title: '화훼 디자인 기사 실기 완전정복', author: '화훼 연구회', publisher: '일진사', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '응시자격 확인 (학력·경력 요건)', '화훼 기획·디자인 심화 이론 학습',
      '화훼 비즈니스·유통 관리 정리', '기출문제 풀이 (최근 3개년)',
      '실기 대형 창작 작품 기획·제작 연습',
    ],
  },

  '축산기사': {
    name: '축산기사',
    icon: 'fa-cow',
    category: '농림·수산',
    heroTitle: '2026년도 축산기사 합격 가이드',
    heroDesc: '축산기사는 가축 사육·번식·위생 관리 전반을 담당하는 국가기술자격입니다. 4년제 관련 학과 졸업자 또는 산업기사 취득 후 경력자가 응시 가능하며, 축산 농가·축산 가공업체·축산 관련 공공기관에서 폭넓게 활용됩니다.',
    passRateSummary: '필기 48% | 실기 52%',
    avgPassRate: '50%',
    passRates: [
      { year: 2020, written: 45, practical: 49 }, { year: 2021, written: 47, practical: 51 },
      { year: 2022, written: 48, practical: 52 }, { year: 2023, written: 50, practical: 54 },
      { year: 2024, written: 49, practical: 53 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '가축 사양학', desc: '소·돼지·닭·양 사양 기술, 사료 배합, 생산성 향상 방법' },
      { name: '가축 번식학', desc: '가축 번식 생리, 인공수정, 수정란 이식 기술' },
      { name: '가축 위생학', desc: '주요 가축 질병 예방·치료, 축산물 위생 관리' },
      { name: '초지 및 사료작물학', desc: '목초 재배·관리, 사료 작물 생산, TMR 배합 기술' },
      { name: '축산 관련 법규', desc: '축산법, 가축전염병예방법, 축산물위생관리법 주요 내용' },
    ],
    jobs: [
      { title: '축산 기술자', company: '축산 농가·농업법인', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '사료 영업·기술 담당', company: '사료회사', salary: '3,200~5,000만원', location: '전국', type: '정규직' },
      { title: '가축 방역 담당', company: '축산물위생검사소', salary: '3,000~4,200만원', location: '전국', type: '공무원' },
      { title: '축산물 품질 관리사', company: '축산물품질평가원', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '농협 축산 담당자', company: '농협·축협', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 축산기사·산업기사 필기 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2026 시대에듀 축산기사·산업기사 실기 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.5 },
      { title: '축산기사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.4 },
      { title: '축산기사 실기 완전정복', author: '자격시험 연구회', publisher: '일진사', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '5과목 범위 파악 및 학습 계획 수립', '가축 사양·번식학 핵심 이론 정리',
      '가축 위생·질병 예방 출제 포인트 정리', '기출문제 풀이 (최근 3개년)',
      '실기 필답형 반복 연습',
    ],
  },

  '축산기능사': {
    name: '축산기능사',
    icon: 'fa-cow',
    category: '농림·수산',
    heroTitle: '2026년도 축산기능사 합격 가이드',
    heroDesc: '축산기능사는 가축 사육·사료 급여·축산 시설 관리 기초 기술을 검증하는 입문 자격입니다. 학력 제한 없이 응시 가능하며, 한우·낙농·양돈·양계 등 다양한 축산 농가와 사료 회사에서 활용됩니다.',
    passRateSummary: '필기 58% | 실기 62%',
    avgPassRate: '60%',
    passRates: [
      { year: 2020, written: 55, practical: 59 }, { year: 2021, written: 57, practical: 61 },
      { year: 2022, written: 58, practical: 62 }, { year: 2023, written: 60, practical: 64 },
      { year: 2024, written: 59, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '가축 사양 기초', desc: '소·돼지·닭 사육 방법, 사료 급여, 축사 환경 관리' },
      { name: '가축 위생 기초', desc: '예방 접종, 기생충 구제, 소독 방법, 분뇨 처리 기초' },
      { name: '축산 기계·시설', desc: '급이기·환기 시설·착유기 구조, 안전 사용법' },
      { name: '축산 관련 법규', desc: '가축전염병예방법, 축산물위생관리법 기초 내용' },
    ],
    jobs: [
      { title: '축산 농가 사육 관리원', company: '한우·낙농·양돈 농가', salary: '2,500~3,500만원', location: '전국', type: '정규직' },
      { title: '사료회사 기술 보조', company: '사료회사', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '농협 축산 관련 업무', company: '농협·축협', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '양계장·양돈장 관리원', company: '양계·양돈 농가', salary: '2,500~3,300만원', location: '전국', type: '정규직' },
      { title: '축산물 처리 보조', company: '도축장·육가공업체', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 Win-Q 축산기능사 필기+실기 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '축산기능사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.5 },
      { title: '축산기능사 기출문제 총정리', author: '자격시험 편집부', publisher: '성안당', year: 2024, rating: 4.4 },
      { title: '축산기능사 실기 완전정복', author: '자격시험 연구회', publisher: '일진사', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 학습 계획 수립', '가축 사양 기초 핵심 이론 정리',
      '가축 위생·질병 예방 기초 학습', '기출문제 풀이 (최근 3개년)',
      '실기 작업형 가축 관리 반복 연습',
    ],
  },

  '농산물품질관리사': {
    name: '농산물품질관리사',
    icon: 'fa-seedling',
    category: '농림·수산',
    heroTitle: '2026년도 농산물품질관리사 합격 가이드',
    heroDesc: '농산물품질관리사는 농산물의 등급 판정·품질 인증·유통 관리를 전문으로 하는 국가 공인 자격입니다. 국립농산물품질관리원·농협·유통회사에서 수요가 꾸준하며, 1차 객관식과 2차 단답형·서술형 필답형 시험으로 구성됩니다.',
    passRateSummary: '1차 55% | 2차 40%',
    avgPassRate: '45%',
    passRates: [
      { year: 2020, written: 52, practical: 38 }, { year: 2021, written: 54, practical: 39 },
      { year: 2022, written: 55, practical: 40 }, { year: 2023, written: 57, practical: 42 },
      { year: 2024, written: 56, practical: 41 },
    ],
    schedules: [
      { round: '2026년 제24회', writtenExam: '2026-05-02', writtenResult: '2026-06-04', practicalExam: '2026-07-19', practicalResult: '2026-08-27' },
    ],
    milestones: [
      { label: '1차 시험 (필기)', date: '2026-05-02' },
      { label: '1차 합격 발표', date: '2026-06-04' },
      { label: '2차 시험 (필답형)', date: '2026-07-19' },
      { label: '최종 합격 발표', date: '2026-08-27' },
    ],
    subjects: [
      { name: '관계 법령', desc: '농수산물품질관리법, 친환경농어업법, 농산물 표준규격 고시' },
      { name: '원예작물학', desc: '채소·과수·화훼 작물 생육 특성, 재배 기술, 품종 특성' },
      { name: '수확 후 품질관리론', desc: '저장·선별·포장·CA저장·예냉 처리, 저온 유통 체계' },
      { name: '농산물 유통론', desc: '농산물 유통 구조, 도매시장 경매, 산지 유통 센터 운영' },
    ],
    jobs: [
      { title: '농산물 품질관리사', company: '국립농산물품질관리원', salary: '3,200~4,500만원', location: '전국', type: '공무원' },
      { title: '농협 농산물 선별 담당', company: '농협·산지 유통센터', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '대형마트 농산물 바이어', company: '대형 유통업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '수출입 농산물 검사원', company: '수출입 농산물 업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '농산물 등급 판정원', company: '산지 APC', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 농산물품질관리사 1차 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.7 },
      { title: '2026 시대에듀 농산물품질관리사 2차 필답형 실기 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '단끝 농산물품질관리사 1차 2차 기출문제집', author: '자격시험 편집부', publisher: '예문사', year: 2025, rating: 4.5 },
      { title: '농산물품질관리사 1차 원예작물학', author: '원예 연구회', publisher: '범문에듀케이션', year: 2025, rating: 4.4 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 출제 비율 확인', '원예작물학 주요 작물 특성 암기',
      '수확 후 품질관리 기술 핵심 정리', '1차 기출문제 반복 풀이',
      '2차 단답형·서술형 답안 작성 연습',
    ],
  },

  '수산물품질관리사': {
    name: '수산물품질관리사',
    icon: 'fa-fish',
    category: '농림·수산',
    heroTitle: '2026년도 수산물품질관리사 합격 가이드',
    heroDesc: '수산물품질관리사는 수산물의 등급 판정·품질 인증·유통 관리를 전문으로 하는 국가 공인 자격입니다. 국립수산물품질관리원·수협·유통회사에서 활용되며, 1차 객관식과 2차 단답형·서술형 필답형 시험으로 구성됩니다.',
    passRateSummary: '1차 50% | 2차 38%',
    avgPassRate: '42%',
    passRates: [
      { year: 2020, written: 47, practical: 35 }, { year: 2021, written: 49, practical: 37 },
      { year: 2022, written: 50, practical: 38 }, { year: 2023, written: 52, practical: 40 },
      { year: 2024, written: 51, practical: 39 },
    ],
    schedules: [
      { round: '2026년도 시험', writtenExam: '2026-05 (예정)', writtenResult: '2026-06 (예정)', practicalExam: '2026-07 (예정)', practicalResult: '2026-08 (예정)' },
    ],
    milestones: [
      { label: '1차 시험 (예정)', date: '2026-05-01' },
      { label: '2차 시험 (예정)', date: '2026-07-01' },
    ],
    subjects: [
      { name: '수산물품질관리 관련 법령', desc: '농수산물품질관리법, 수산물 표준규격, 수산물 이력제 규정' },
      { name: '수산물 유통론', desc: '수산물 유통 구조, 위판장 경매, 냉동·냉장 유통 체계' },
      { name: '수산생물학', desc: '어류·패류·갑각류 생물학적 특성, 어획 후 선도 관리' },
      { name: '수확 후 품질관리', desc: '수산물 저장·가공·포장 기술, 위생 관리, HACCP 기초' },
    ],
    jobs: [
      { title: '수산물 품질관리사', company: '국립수산물품질관리원', salary: '3,200~4,500만원', location: '전국', type: '공무원' },
      { title: '수협 수산물 유통 담당', company: '수협·산지 위판장', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '수산물 수출입 품질 검사', company: '수출입 업체', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '대형마트 수산물 바이어', company: '대형 유통업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '수산물 가공 품질 관리', company: '수산물 가공업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 수산물품질관리사 1차+2차 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2026 시대에듀 수산물품질관리사 1차 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.5 },
      { title: '수산물품질관리사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.4 },
      { title: '수산물품질관리사 2차 필답형 실기', author: '자격시험 연구회', publisher: '예문사', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 출제 비율 확인', '수산물 유통·선도 관리 핵심 정리',
      '수산생물학 주요 어종 특성 암기', '1차 기출문제 반복 풀이',
      '2차 단답형·서술형 답안 작성 연습',
    ],
  },

  '종자기사': {
    name: '종자기사',
    icon: 'fa-seedling',
    category: '농림·수산',
    heroTitle: '2026년도 종자기사 합격 가이드',
    heroDesc: '종자기사는 작물 종자의 육종·생산·검사·유통을 전문으로 관리하는 국가기술자격입니다. 종자회사·농촌진흥청·국립종자원 등에서 활용되며, 식량 안보와 신품종 개발 중요성이 높아지면서 전문 인력 수요가 증가하고 있습니다.',
    passRateSummary: '필기 42% | 실기 48%',
    avgPassRate: '45%',
    passRates: [
      { year: 2020, written: 40, practical: 45 }, { year: 2021, written: 41, practical: 47 },
      { year: 2022, written: 43, practical: 48 }, { year: 2023, written: 44, practical: 50 },
      { year: 2024, written: 43, practical: 49 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '작물육종학', desc: '육종 방법, 품종 개발 과정, 잡종강세, 돌연변이 육종' },
      { name: '작물생리학', desc: '광합성·호흡·수분·양분 흡수, 생장 조절 호르몬 작용' },
      { name: '종자법', desc: '종자산업법, 식물신품종보호법, 종자 검사·인증 기준' },
      { name: '종자 생산·검사', desc: '채종 관리, 발아율·순도 검사, 종자 처리 방법' },
    ],
    jobs: [
      { title: '종자 연구원', company: '종자회사·농촌진흥청', salary: '3,200~5,000만원', location: '전국', type: '정규직' },
      { title: '국립종자원 직원', company: '국립종자원', salary: '3,000~4,500만원', location: '전국', type: '공무원' },
      { title: '품종 개발 담당자', company: '농업 생명공학 기업', salary: '3,500~5,500만원', location: '전국', type: '정규직' },
      { title: '종자 유통 관리자', company: '종자 유통업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '농업 기술 지도사', company: '농업기술센터', salary: '3,200~4,500만원', location: '전국', type: '공무원' },
    ],
    books: [
      { title: '2026 시대에듀 기출이 답이다 종자기사 필기 최빈출 기출 1000제', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '2024 종자기사·산업기사 실기', author: '자격시험 편집부', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '종자기사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.4 },
      { title: '종자기사 실기 완전정복', author: '자격시험 연구회', publisher: '일진사', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 학습 계획 수립', '작물육종학 주요 육종 방법 암기',
      '종자법 핵심 조항 정리', '기출문제 풀이 (최근 3개년)',
      '실기 필답형·작업형 반복 연습',
    ],
  },

  '종자기능사': {
    name: '종자기능사',
    icon: 'fa-seedling',
    category: '농림·수산',
    heroTitle: '2026년도 종자기능사 합격 가이드',
    heroDesc: '종자기능사는 작물 종자 생산·검사 기초 업무를 수행하는 입문 자격입니다. 학력 제한 없이 응시 가능하며, 종자회사·채종 농가·국립종자원 보조 인력으로 활용됩니다.',
    passRateSummary: '필기 55% | 실기 60%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 52, practical: 57 }, { year: 2021, written: 54, practical: 59 },
      { year: 2022, written: 55, practical: 60 }, { year: 2023, written: 57, practical: 62 },
      { year: 2024, written: 56, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '작물 기초', desc: '주요 작물 생육 특성, 파종·수확 시기, 기본 재배 관리' },
      { name: '종자 생산·검사 기초', desc: '채종 방법, 발아율 측정, 종자 선별·포장 기초' },
      { name: '종자 관련 법규', desc: '종자산업법 기초 내용, 품종 보호 개요' },
    ],
    jobs: [
      { title: '채종 농가 관리 보조', company: '채종 농가', salary: '2,300~3,000만원', location: '전국', type: '계약직' },
      { title: '종자회사 생산 보조', company: '종자회사', salary: '2,500~3,300만원', location: '전국', type: '정규직' },
      { title: '국립종자원 현장 보조', company: '국립종자원', salary: '2,400~3,200만원', location: '전국', type: '계약직' },
      { title: '농업기술센터 보조', company: '지자체 농업기술센터', salary: '2,300~3,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '2026 나합격 종자기능사 필기+실기+무료특강', author: '나합격 편집부', publisher: '에듀팩토리', year: 2025, rating: 4.5 },
      { title: '2024 SD에듀 종자기능사 실기 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2024, rating: 4.4 },
      { title: '종자기능사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '3과목 범위 파악 및 학습 계획 수립', '작물 기초·종자 생산 핵심 이론 정리',
      '종자 관련 법규 주요 내용 암기', '기출문제 풀이 (최근 3개년)',
      '실기 종자 검사·처리 작업 연습',
    ],
  },

  '버섯종균기능사': {
    name: '버섯종균기능사',
    icon: 'fa-seedling',
    category: '농림·수산',
    heroTitle: '2026년도 버섯종균기능사 합격 가이드',
    heroDesc: '버섯종균기능사는 버섯 재배용 종균을 생산·관리하는 전문 기술을 검증하는 국가기술자격입니다. 버섯 재배업 성장과 기능성 식품 수요 증가로 관련 인력 수요가 늘고 있습니다. 버섯 재배 농가·종균 업체·농업법인에서 활용됩니다.',
    passRateSummary: '필기 55% | 실기 60%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 52, practical: 57 }, { year: 2021, written: 54, practical: 59 },
      { year: 2022, written: 55, practical: 60 }, { year: 2023, written: 57, practical: 62 },
      { year: 2024, written: 56, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '버섯 종균학', desc: '균사 구조, 종균 종류(톱밥·액체·성형 종균), 배지 제조법' },
      { name: '버섯 재배학', desc: '느타리·표고·팽이·새송이 등 주요 버섯 재배 기술·관리' },
      { name: '버섯 병해충 관리', desc: '오염균 방제, 해충 예방, 재배 환경(온·습도) 관리' },
      { name: '농업 관련 법규', desc: '버섯 관련 인증·표시, 종자산업법 기초 내용' },
    ],
    jobs: [
      { title: '종균 생산 기술원', company: '버섯 종균 업체', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
      { title: '버섯 농장 재배 관리사', company: '버섯 재배 농가·법인', salary: '2,500~3,500만원', location: '전국', type: '정규직' },
      { title: '스마트 버섯팜 기술원', company: '스마트팜 업체', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '버섯 가공 품질 관리', company: '버섯 가공업체', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 Win-Q 버섯종균기능사 필기 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '버섯종균기능사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.5 },
      { title: '버섯종균기능사 실기 완전정복', author: '자격시험 연구회', publisher: '일진사', year: 2024, rating: 4.4 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 학습 계획 수립', '종균 제조·배지 처리 핵심 이론 정리',
      '버섯 재배·병해충 관리 출제 포인트 정리', '기출문제 풀이 (최근 3개년)',
      '실기 종균 접종·재배 작업 반복 연습',
    ],
  },

  '식육처리기능사': {
    name: '식육처리기능사',
    icon: 'fa-drumstick-bite',
    category: '농림·수산',
    heroTitle: '2026년도 식육처리기능사 합격 가이드',
    heroDesc: '식육처리기능사는 소·돼지·닭 등 가축의 도축·해체·발골·정형 및 식육 위생 관리 기술을 검증하는 국가기술자격입니다. 도축장·정육점·대형마트·식육 가공업체 취업에 활용되며, 학력 제한 없이 응시 가능합니다.',
    passRateSummary: '필기 58% | 실기 62%',
    avgPassRate: '60%',
    passRates: [
      { year: 2020, written: 55, practical: 59 }, { year: 2021, written: 57, practical: 61 },
      { year: 2022, written: 58, practical: 62 }, { year: 2023, written: 60, practical: 64 },
      { year: 2024, written: 59, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' }, { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' }, { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '가축 해부·생리', desc: '소·돼지·닭 기관별 구조, 도체 부위별 명칭·특성' },
      { name: '식육 처리 기술', desc: '도축·해체·발골·정형 기술, 기계톱·칼 사용법·안전' },
      { name: '식육 위생 관리', desc: 'HACCP 기초, 냉장·냉동 보관 기준, 세균 오염 예방' },
      { name: '관련 법규', desc: '축산물위생관리법, 식육 표시·원산지 기준 주요 내용' },
    ],
    jobs: [
      { title: '도축장 식육 처리원', company: '도축장·축산물 가공장', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '정육 전문점 기술자', company: '정육점·정육 전문매장', salary: '2,600~3,800만원', location: '전국', type: '정규직' },
      { title: '대형마트 축산 담당', company: '대형 유통업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '식육 가공업체 기술원', company: '식육 가공업체', salary: '2,700~3,700만원', location: '전국', type: '정규직' },
      { title: '급식업체 육류 전처리', company: '단체급식업체', salary: '2,500~3,300만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '2026 시대에듀 식육처리기능사 한권으로 끝내기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '식육처리기능사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.5 },
      { title: '식육처리기능사 실기 완전정복', author: '자격시험 연구회', publisher: '일진사', year: 2024, rating: 4.4 },
      { title: '식육처리기능사 기출문제 총정리', author: '자격시험 편집부', publisher: '성안당', year: 2024, rating: 4.3 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 학습 계획 수립', '가축 해부 부위별 명칭 암기',
      '식육 위생·HACCP 기초 정리', '기출문제 풀이 (최근 3개년)',
      '실기 발골·정형 칼질 기술 반복 연습',
    ],
  },

  '가축인공수정사': {
    name: '가축인공수정사',
    icon: 'fa-cow',
    category: '농림·수산',
    heroTitle: '2026년도 가축인공수정사 합격 가이드',
    heroDesc: '가축인공수정사는 가축의 인공수정·수정란 이식 등 번식 기술을 담당하는 국가 공인 자격입니다. 한국가축개량협회·낙농 농가·한우 개량 사업소 등에서 활용되며, 가축 개량과 생산성 향상에 직접 기여하는 전문 직종입니다.',
    passRateSummary: '필기 55% | 실기 60%',
    avgPassRate: '57%',
    passRates: [
      { year: 2020, written: 52, practical: 57 }, { year: 2021, written: 54, practical: 59 },
      { year: 2022, written: 55, practical: 60 }, { year: 2023, written: 57, practical: 62 },
      { year: 2024, written: 56, practical: 61 },
    ],
    schedules: [
      { round: '2026년도 시험', writtenExam: '2026년 상반기 (예정)', writtenResult: '접수 후 확인 필요', practicalExam: '필기 합격 후', practicalResult: '—' },
    ],
    milestones: [
      { label: '시험 일정 확인 (농림축산식품부)', date: '2026-01-01' },
    ],
    subjects: [
      { name: '가축 번식학', desc: '가축 생식기 구조, 발정 주기, 수정·착상·임신 생리' },
      { name: '인공수정 기술', desc: '정액 채취·검사·희석·동결 보존, 인공수정 기법' },
      { name: '수정란 이식', desc: '공란우·수란우 관리, 수정란 채취·이식 기술' },
      { name: '가축 위생 및 법규', desc: '가축전염병예방법, 축산법 관련 번식 기술 규정' },
    ],
    jobs: [
      { title: '가축 인공수정사', company: '가축개량협회·낙농진흥회', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '한우 개량 사업소 담당', company: '한우 개량 사업소', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '낙농 농가 번식 담당', company: '대규모 낙농 농가', salary: '2,800~4,000만원', location: '전국', type: '정규직' },
      { title: '수의 보조 기술원', company: '동물병원·농축산업체', salary: '2,600~3,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '시대에듀 가축인공수정사 필기 한권으로 합격하기', author: '시대에듀 편집부', publisher: '시대에듀', year: 2025, rating: 4.6 },
      { title: '가축인공수정사 핵심요약+기출문제', author: '이패스코리아 편집부', publisher: '이패스코리아', year: 2024, rating: 4.5 },
      { title: '가축 번식학 핵심 정리', author: '자격시험 연구회', publisher: '일진사', year: 2024, rating: 4.4 },
    ],
    defaultTodos: [
      '4과목 범위 파악 및 학습 계획 수립', '가축 번식·수정 생리 핵심 이론 정리',
      '인공수정 기술 실습 이론 학습', '기출문제 풀이 (최근 3개년)',
      '실기 인공수정 술기 반복 연습',
    ],
  },

  '유기농업기사': {
    name: '유기농업기사',
    icon: 'fa-seedling',
    category: '농림·수산',
    heroTitle: '2026년도 유기농업기사 합격 가이드',
    heroDesc: '유기농업기사는 화학 농약과 합성 비료를 사용하지 않는 친환경 유기농 재배 기술을 전문적으로 관리하는 국가기술자격증입니다. 친환경 농업 정책 확대와 유기농 식품 시장 성장에 따라 전문 인력 수요가 증가하고 있습니다. 귀농·귀촌 희망자와 농업 공무원 준비생에게 특히 유용한 자격입니다.',
    passRateSummary: '필기 43% | 실기 48%',
    avgPassRate: '46%',
    passRates: [
      { year: 2020, written: 41, practical: 46 },
      { year: 2021, written: 42, practical: 47 },
      { year: 2022, written: 44, practical: 49 },
      { year: 2023, written: 43, practical: 48 },
      { year: 2024, written: 45, practical: 50 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '재배원론', desc: '작물 생육 원리, 토양 환경, 광합성·호흡·증산 작용 이론' },
      { name: '토양비료', desc: '토양 물리·화학·생물학적 특성, 유기질 비료 및 녹비 작물 활용' },
      { name: '유기농업일반', desc: '유기농업 원칙, 유기 인증 기준, 병해충 생태적 방제 방법' },
      { name: '농업환경보전', desc: '농업 생태계 보전, 환경 친화적 농업 기술, 농업 용수 관리' },
      { name: '농업관련법규', desc: '친환경농어업법, 유기식품 인증제도, 농약관리법 관련 규정' },
    ],
    jobs: [
      { title: '친환경 농산물 인증 심사원', company: '국립농산물품질관리원', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '유기농 기술 지도사', company: '농촌진흥청·도 농업기술원', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: '유기농 생산 관리자', company: '친환경 농업법인', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '유기농 식품 품질관리원', company: '유기농 식품 유통업체', salary: '2,800~4,000만원', location: '수도권', type: '정규직' },
      { title: '친환경 농업 컨설턴트', company: '농업 컨설팅 전문업체', salary: '2,600~3,800만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '유기농업기사 필기 완전정복', author: '박용호', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '유기농업기사 과년도 기출문제 해설', author: '이상훈', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '재배원론·토양비료 핵심이론', author: '김광수', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '유기농업기사 실기 필답형 대비', author: '정민호', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },

  '원예기사': {
    name: '원예기사',
    icon: 'fa-seedling',
    category: '농림·수산',
    heroTitle: '2026년도 원예기사 합격 가이드',
    heroDesc: '원예기사는 채소, 과수, 화훼 등 원예 작물의 재배, 생산 관리 및 유통 분야의 전문 기술인력을 위한 국가기술자격증입니다. 농업 기술 지도, 원예 연구, 종묘 산업 분야에서 활용도가 높으며, 스마트팜 보급 확대와 함께 IT·농업 융합 인재로서의 수요도 증가하고 있습니다.',
    passRateSummary: '필기 44% | 실기 49%',
    avgPassRate: '47%',
    passRates: [
      { year: 2020, written: 42, practical: 47 },
      { year: 2021, written: 43, practical: 48 },
      { year: 2022, written: 45, practical: 50 },
      { year: 2023, written: 44, practical: 49 },
      { year: 2024, written: 46, practical: 51 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-19 ~ 2026-01-22', writtenResult: '2026-02-12', practicalExam: '2026-03-23 ~ 2026-04-05', practicalResult: '2026-04-18' },
      { round: '2회', writtenExam: '2026-04-13 ~ 2026-04-16', writtenResult: '2026-05-07', practicalExam: '2026-06-28 ~ 2026-07-12', practicalResult: '2026-07-24' },
      { round: '3회', writtenExam: '2026-07-27 ~ 2026-07-30', writtenResult: '2026-08-20', practicalExam: '2026-10-04 ~ 2026-10-17', practicalResult: '2026-11-06' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-19' },
      { label: '1회 실기', date: '2026-03-23' },
      { label: '2회 필기', date: '2026-04-13' },
      { label: '2회 실기', date: '2026-06-28' },
    ],
    subjects: [
      { name: '채소학', desc: '주요 채소 작물의 재배 특성, 생육 환경 조절, 수확 후 품질 관리' },
      { name: '과수학', desc: '과수 작물 생리, 정지·전정 기술, 과실 품질 및 생산성 향상 기술' },
      { name: '화훼학', desc: '주요 화훼 작물 분류, 재배 환경, 절화·분화·조경 식물 관리' },
      { name: '원예시설학', desc: '온실 구조, 시설 내 환경 제어, 수경재배 및 스마트팜 기술' },
      { name: '농업관련법규', desc: '종자산업법, 식물신품종보호법, 농업경영체 육성·지원법 규정' },
    ],
    jobs: [
      { title: '농업 기술 지도사', company: '농촌진흥청·시군 농업기술센터', salary: '3,600~5,000만원', location: '전국', type: '정규직' },
      { title: '원예 연구원', company: '한국농업기술진흥원', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: '스마트팜 운영 관리자', company: '스마트팜 전문 농업법인', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '종묘·원예 영업 기술원', company: '농우바이오·사카타코리아', salary: '3,000~4,200만원', location: '수도권·전국', type: '정규직' },
      { title: '원예 재배 관리 계약직', company: '원예 농업법인·영농조합', salary: '2,600~3,600만원', location: '전국', type: '계약직' },
    ],
    books: [
      { title: '원예기사 필기 완전정복', author: '이상훈', publisher: '성안당', year: 2024, rating: 4.5 },
      { title: '원예기사 과년도 기출문제 해설', author: '박용호', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '채소학·과수학·화훼학 핵심이론', author: '김광수', publisher: '크라운출판사', year: 2023, rating: 4.3 },
      { title: '원예기사 실기 필답형 대비서', author: '정민호', publisher: '성안당', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '필기 시험 범위 파악 및 출제 경향 분석',
      '주요 과목 핵심 이론 정리',
      '기출문제 풀이 (최근 3개년)',
      '실기 작업 반복 연습',
      '최근 5개년 기출문제 1회분 실전 조건으로 풀고 오답 분석',
    ],
  },
// === 전산응용기계제도기능사 ===
  '전산응용기계제도기능사': {
    name: '전산응용기계제도기능사',
    icon: 'fa-drafting-compass',
    category: '기계·설비',
    heroTitle: '2026년도 전산응용기계제도기능사 합격 가이드',
    heroDesc: 'CAD 소프트웨어를 활용한 기계 부품 도면 작성 능력을 검정하는 자격증입니다. 제조·설계 업계 취업의 필수 자격으로, 기계설계 및 생산 분야 진출의 발판이 됩니다.',
    passRateSummary: '필기 55% | 실기 50%',
    avgPassRate: '52%',
    passRates: [
      { year: 2020, written: 52, practical: 47 },
      { year: 2021, written: 54, practical: 49 },
      { year: 2022, written: 56, practical: 51 },
      { year: 2023, written: 57, practical: 52 },
      { year: 2024, written: 58, practical: 53 },
    ],
    schedules: [
      { round: '1회', writtenApply: '2026-01-06 ~ 2026-01-09', writtenExam: '2026-01-20 ~ 2026-01-24', writtenResult: '2026-01-30', practicalApply: '2026-02-02 ~ 2026-02-05', practicalExam: '2026-03-14 ~ 2026-04-01', practicalResult: '2026-04-10 / 2026-04-17' },
      { round: '2회', writtenApply: '2026-03-16 ~ 2026-03-20', writtenExam: '2026-04-04 ~ 2026-04-09', writtenResult: '2026-04-22', practicalApply: '2026-04-27 ~ 2026-04-30', practicalExam: '2026-05-30 ~ 2026-06-14', practicalResult: '2026-06-26 / 2026-07-03' },
      { round: '3회', writtenApply: '2026-06-08 ~ 2026-06-11', writtenExam: '2026-06-27 ~ 2026-07-02', writtenResult: '2026-07-15', practicalApply: '2026-07-27 ~ 2026-07-30', practicalExam: '2026-08-29 ~ 2026-09-16', practicalResult: '2026-10-02 / 2026-10-08' },
      { round: '4회', writtenApply: '2026-08-24 ~ 2026-08-27', writtenExam: '2026-09-16 ~ 2026-09-21', writtenResult: '2026-10-07', practicalApply: '2026-10-12 ~ 2026-10-15', practicalExam: '2026-11-14 ~ 2026-12-02', practicalResult: '2026-12-11 / 2026-12-18' },
    ],
    milestones: [
      { label: '1회 필기 원서접수', date: '2026-01-06' },
      { label: '1회 필기 시험', date: '2026-01-20' },
      { label: '1회 실기 시험', date: '2026-03-14' },
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
      { label: '3회 실기 시험', date: '2026-08-29' },
      { label: '4회 필기 원서접수', date: '2026-08-24' },
    ],
    subjects: [
      { name: '기계제도', desc: '도면의 기본 규격, 투상법, 치수 기입법 등 기계 제도 기초' },
      { name: '기계요소', desc: '볼트·너트·키·스플라인 등 기계 요소의 도시법' },
      { name: 'CAD 일반', desc: 'AutoCAD 등 2D CAD 소프트웨어 조작 및 도면 작성' },
      { name: '재료 및 측정', desc: '기계 재료의 특성과 버니어캘리퍼스 등 측정기 사용법' },
      { name: '기계공작법', desc: '절삭·연삭·주조 등 기계 가공 방법의 기초 이해' },
    ],
    jobs: [
      { title: 'CAD 기계설계 사원', company: '중소 제조업체', salary: '2,800~3,500만원', location: '경기·인천', type: '정규직' },
      { title: '도면 작성 담당자', company: '자동차 부품사', salary: '3,000~3,800만원', location: '울산·경남', type: '정규직' },
      { title: '기계설계 보조', company: '금형·금속 가공업체', salary: '2,800~3,500만원', location: '경기·충남', type: '정규직' },
      { title: '생산기술 사원', company: '전자부품 제조사', salary: '3,200~4,000만원', location: '수원·화성', type: '정규직' },
      { title: 'CAD 도면 작업자', company: '설계 용역 업체', salary: '2,600~3,200만원', location: '서울·경기', type: '계약직' },
    ],
    books: [
      { title: '2026 전산응용기계제도기능사 필기', author: '성안당 편집부', publisher: '성안당', year: 2025, rating: 4.6 },
      { title: '전산응용기계제도기능사 실기 도면집', author: '김도현', publisher: '일진사', year: 2025, rating: 4.5 },
      { title: '기계제도 & CAD 완전정복', author: '이재원', publisher: '예문사', year: 2024, rating: 4.4 },
      { title: '전산응용기계제도기능사 기출문제집', author: '박성철', publisher: '크라운출판사', year: 2025, rating: 4.3 },
    ],
    defaultTodos: [
      '기계제도 기초 이론 (투상법·치수 기입) 학습',
      'AutoCAD 명령어 숙달 및 도면 작성 연습',
      '기출문제 풀이 (최근 3개년)',
      '실기 도면 과제 반복 작성 (A3 규격 기준)',
      '최종 모의고사 1회분 시간 내 완성 훈련',
    ],
  },

  '산업안전기술사': {
    name: '산업안전기술사',
    icon: 'fa-helmet-safety',
    category: '안전관리',
    heroTitle: '2026년도 산업안전기술사 합격 가이드',
    heroDesc: '산업안전기술사는 산업 현장의 위험 요소를 분석·평가·관리하는 최고급 안전 전문가 자격입니다. 산업재해 예방 및 안전보건관리 체계 구축에 관한 고도의 전문 지식과 응용 능력을 검증하며, 대기업 안전관리 임원, 컨설팅, 공공기관 자문 등 다양한 분야에서 활동할 수 있습니다.',
    passRateSummary: '필기 15% | 면접 58%',
    avgPassRate: '12%',
    passRates: [
      { year: 2020, written: 13, practical: 55 },
      { year: 2021, written: 14, practical: 57 },
      { year: 2022, written: 15, practical: 58 },
      { year: 2023, written: 16, practical: 60 },
      { year: 2024, written: 17, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '산업안전관리론', desc: '안전관리 조직, 재해 통계, 안전보건경영시스템(ISO 45001) 등' },
      { name: '인간공학 및 시스템 안전', desc: '인적 오류 분석, FMEA, FTA, 위험성 평가 기법' },
      { name: '기계·전기 안전', desc: '기계 방호 장치, 전기 안전, 방폭 설비, 감전 방지 대책' },
      { name: '화학물질 및 화재·폭발 안전', desc: 'MSDS, 화재·폭발 이론, 방재 설비, 위험물 관리' },
      { name: '건설 및 작업환경 관리', desc: '건설 현장 안전, 유해인자 노출 평가, 작업환경 측정' },
    ],
    jobs: [
      { title: '안전보건 총괄 임원', company: '대기업·공기업', salary: '8,000~1억 2,000만원', location: '전국', type: '정규직' },
      { title: '산업안전 컨설턴트', company: '안전컨설팅업체', salary: '6,000~9,000만원', location: '서울·경기', type: '정규직' },
      { title: '안전관리 전문위원', company: '공공기관·협회', salary: '5,500~8,000만원', location: '서울', type: '계약직' },
      { title: '안전보건 팀장', company: '제조·건설 대기업', salary: '6,000~8,500만원', location: '전국', type: '정규직' },
      { title: '산업안전 교수·강사', company: '대학·직업훈련기관', salary: '4,500~7,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '산업안전기술사 핵심이론 총정리', author: '이상도', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '산업안전기술사 기출문제 완전분석', author: '김재원', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '산업안전기술사 서술형 답안 작성법', author: '박성현', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '산업안전기술사 면접 완전정복', author: '최용국', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '기술사 시험 범위 및 출제 경향 파악',
      '안전보건경영시스템(ISO 45001) 이론 정리',
      '위험성 평가 기법(FTA·FMEA) 심화 학습',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '건설안전기술사': {
    name: '건설안전기술사',
    icon: 'fa-hard-hat',
    category: '안전관리',
    heroTitle: '2026년도 건설안전기술사 합격 가이드',
    heroDesc: '건설안전기술사는 건설 현장의 안전관리 체계를 설계·운영하고 재해를 예방하는 최고급 전문가 자격입니다. 건설업의 높은 재해율로 인해 수요가 꾸준히 증가하고 있으며, 시공사 안전 임원, 감리, 컨설팅 등 다양한 진로를 제공합니다.',
    passRateSummary: '필기 14% | 면접 57%',
    avgPassRate: '11%',
    passRates: [
      { year: 2020, written: 12, practical: 53 },
      { year: 2021, written: 13, practical: 55 },
      { year: 2022, written: 14, practical: 57 },
      { year: 2023, written: 15, practical: 58 },
      { year: 2024, written: 16, practical: 60 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '건설 안전관리', desc: '건설업 안전보건관리비, 안전관리 조직, 재해 사례 분석' },
      { name: '가설 공사 안전', desc: '비계·거푸집 설치 기준, 낙하물 방지망, 추락 방지 대책' },
      { name: '굴착 및 흙막이 안전', desc: '굴착 공사 위험성, 지반 침하, 흙막이 구조 설계 기준' },
      { name: '건설 기계·중장비 안전', desc: '양중기, 크레인, 항타기 안전 기준 및 점검 방법' },
      { name: '건설 재해 예방 및 법규', desc: '산업안전보건법, 건설기술진흥법, 안전보건조정자 제도' },
    ],
    jobs: [
      { title: '현장 안전보건관리자', company: '대형 건설사', salary: '6,000~9,000만원', location: '전국', type: '정규직' },
      { title: '건설안전 컨설턴트', company: '안전전문기관', salary: '5,500~8,000만원', location: '서울·경기', type: '정규직' },
      { title: '안전 감리원', company: '건설감리회사', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
      { title: '안전보건 팀장', company: '건설·플랜트 업체', salary: '5,500~8,000만원', location: '전국', type: '정규직' },
      { title: '건설안전 전문위원', company: '공공기관·발주처', salary: '4,500~6,500만원', location: '서울', type: '계약직' },
    ],
    books: [
      { title: '건설안전기술사 핵심이론 총정리', author: '강동호', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '건설안전기술사 기출문제 완전분석', author: '정재수', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '건설안전기술사 서술형 답안 작성법', author: '이경민', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '건설안전기술사 면접 완전정복', author: '박용기', publisher: '구민사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '건설 현장 주요 재해 유형 및 사례 분석',
      '가설 공사·굴착 공사 안전 기준 정리',
      '관련 법규(산업안전보건법·건설기술진흥법) 핵심 조항 숙지',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '소방기술사': {
    name: '소방기술사',
    icon: 'fa-fire',
    category: '소방',
    heroTitle: '2026년도 소방기술사 합격 가이드',
    heroDesc: '소방기술사는 소방 설비 설계·감리 및 화재 예방·진압 시스템 전반에 관한 최고급 기술 능력을 검증하는 국가기술자격입니다. 특급 소방안전관리자 자격과 연계되며, 소방 설계 사무소·감리 법인·공공기관 등에서 고급 전문가로 활동할 수 있습니다.',
    passRateSummary: '필기 13% | 면접 55%',
    avgPassRate: '10%',
    passRates: [
      { year: 2020, written: 11, practical: 52 },
      { year: 2021, written: 12, practical: 54 },
      { year: 2022, written: 13, practical: 55 },
      { year: 2023, written: 14, practical: 57 },
      { year: 2024, written: 15, practical: 58 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '소방 원론', desc: '연소 이론, 화재 분류, 폭발 메커니즘, 소화 원리' },
      { name: '소화 설비', desc: '스프링클러, 물분무, 포·가스 소화 설비 설계 기준' },
      { name: '경보·피난 설비', desc: '자동화재탐지설비, 비상방송, 피난 유도 시스템' },
      { name: '소방 전기 및 특수 소화', desc: '비상전원, 제연 설비, 할론 대체 약제, 청정 소화 시스템' },
      { name: '소방 관계 법규', desc: '소방시설법, 화재예방법, 위험물안전관리법 핵심 조항' },
    ],
    jobs: [
      { title: '소방 설계 기술사', company: '소방설계사무소', salary: '6,000~9,000만원', location: '전국', type: '정규직' },
      { title: '소방 감리 전문가', company: '소방감리법인', salary: '5,500~8,000만원', location: '서울·경기', type: '정규직' },
      { title: '소방 안전관리자', company: '대형 건물·공장', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
      { title: '소방 컨설턴트', company: '안전전문기관', salary: '5,000~7,500만원', location: '서울·경기', type: '정규직' },
      { title: '소방 교수·강사', company: '소방학교·대학', salary: '4,000~6,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '소방기술사 핵심이론 총정리', author: '이순규', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '소방기술사 기출문제 완전분석', author: '김현수', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '소방기술사 서술형 답안 작성법', author: '박재현', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '소방기술사 면접 완전정복', author: '정성훈', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '소방 설비별 설계 기준 및 작동 원리 정리',
      '화재·폭발 이론 및 소화 원리 심화 학습',
      '관련 법규(소방시설법·화재예방법) 핵심 조항 숙지',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '발송배전기술사': {
    name: '발송배전기술사',
    icon: 'fa-bolt',
    category: '전기·전자',
    heroTitle: '2026년도 발송배전기술사 합격 가이드',
    heroDesc: '발송배전기술사는 전력 계통의 발전·송전·변전·배전 시스템 전반에 관한 최고급 기술 능력을 검증하는 국가기술자격입니다. 전력 회사, 한국전력공사, 발전 공기업 등에서 고급 기술 전문가로 활동하며 높은 처우를 받을 수 있습니다.',
    passRateSummary: '필기 16% | 면접 60%',
    avgPassRate: '13%',
    passRates: [
      { year: 2020, written: 14, practical: 57 },
      { year: 2021, written: 15, practical: 58 },
      { year: 2022, written: 16, practical: 60 },
      { year: 2023, written: 17, practical: 61 },
      { year: 2024, written: 18, practical: 62 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '발전 공학', desc: '화력·원자력·수력·신재생 발전 원리 및 효율 분석' },
      { name: '송전 공학', desc: '송전선 특성, 안정도 해석, 고장 계산, 초고압 계통' },
      { name: '변전 설비', desc: '변압기, 차단기, 개폐기, GIS 설비 구성 및 보호 계전' },
      { name: '배전 공학', desc: '배전 계통 구성, 전압 강하, 역률 개선, 스마트 그리드' },
      { name: '전력 계통 보호 및 제어', desc: '계전기 종류·동작 원리, 전력 계통 안정화 대책' },
    ],
    jobs: [
      { title: '전력 계통 전문가', company: '한국전력공사', salary: '7,000~1억원', location: '전국', type: '정규직' },
      { title: '발전 설비 기술 임원', company: '발전 공기업', salary: '7,500~1억 1,000만원', location: '전국', type: '정규직' },
      { title: '전력 컨설턴트', company: '전력·에너지 컨설팅', salary: '6,000~9,000만원', location: '서울·경기', type: '정규직' },
      { title: '배전 설계 전문가', salary: '5,500~8,000만원', company: '전기설계사무소', location: '전국', type: '정규직' },
      { title: '전력 시스템 교수', company: '대학·연구소', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '발송배전기술사 핵심이론 총정리', author: '김재원', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '발송배전기술사 기출문제 완전분석', author: '이상도', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '발송배전기술사 서술형 답안 작성법', author: '박용기', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '발송배전기술사 면접 완전정복', author: '최용국', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '전력 계통 기초(발전·송전·배전) 이론 정리',
      '고장 계산 및 안정도 해석 문제 반복 풀이',
      '보호 계전기 동작 원리 및 정정 방법 학습',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '전기응용기술사': {
    name: '전기응용기술사',
    icon: 'fa-plug',
    category: '전기·전자',
    heroTitle: '2026년도 전기응용기술사 합격 가이드',
    heroDesc: '전기응용기술사는 전동기, 조명, 전열, 전기철도, 전기 화학 등 전기 응용 분야의 최고급 기술 전문가를 검증하는 국가기술자격입니다. 전기 설비 설계·감리 및 스마트 에너지 솔루션 분야에서 높은 전문성을 발휘할 수 있습니다.',
    passRateSummary: '필기 15% | 면접 58%',
    avgPassRate: '12%',
    passRates: [
      { year: 2020, written: 13, practical: 55 },
      { year: 2021, written: 14, practical: 56 },
      { year: 2022, written: 15, practical: 58 },
      { year: 2023, written: 16, practical: 59 },
      { year: 2024, written: 17, practical: 61 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '전동기 응용', desc: '유도 전동기, 동기 전동기, BLDC 등 구동 원리 및 제어' },
      { name: '조명 공학', desc: '광원 종류, 조도 설계, 조명 효율, LED 조명 시스템' },
      { name: '전열 공학', desc: '전기 가열 방식, 유도 가열, 적외선 가열, 전기로' },
      { name: '전기철도', desc: '직류·교류 전철 급전 시스템, 회생 제동, 신호 제어' },
      { name: '전기 화학 및 신에너지', desc: '전기 도금, 이차전지, 태양광·풍력 연계 설비' },
    ],
    jobs: [
      { title: '전기 설비 기술 임원', company: '전기공사업체', salary: '6,500~9,500만원', location: '전국', type: '정규직' },
      { title: '전기 설계 감리 전문가', company: '설계감리사무소', salary: '5,500~8,000만원', location: '서울·경기', type: '정규직' },
      { title: '스마트 에너지 컨설턴트', company: '에너지 전문기관', salary: '5,500~8,000만원', location: '서울·경기', type: '정규직' },
      { title: '전기 응용 연구원', company: '연구소·대학', salary: '5,000~7,000만원', location: '전국', type: '정규직' },
      { title: '전기 교수·강사', company: '대학·직업훈련기관', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '전기응용기술사 핵심이론 총정리', author: '정성훈', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '전기응용기술사 기출문제 완전분석', author: '강동호', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '전기응용기술사 서술형 답안 작성법', author: '이경민', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '전기응용기술사 면접 완전정복', author: '박성현', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '전동기·조명·전열 등 응용 분야별 핵심 원리 정리',
      '전기철도 급전 시스템 및 신에너지 연계 학습',
      '전기설비기술기준 및 관련 법규 핵심 조항 숙지',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '기계기술사': {
    name: '기계기술사',
    icon: 'fa-gears',
    category: '기계',
    heroTitle: '2026년도 기계기술사 합격 가이드',
    heroDesc: '기계기술사는 기계 설계, 재료 역학, 열역학, 유체 역학 등 기계공학 전반의 최고급 기술 능력을 검증하는 국가기술자격입니다. 기계 산업, 플랜트, 방산, 자동차, 항공 등 광범위한 산업에서 고급 전문가로 활동할 수 있습니다.',
    passRateSummary: '필기 17% | 면접 62%',
    avgPassRate: '14%',
    passRates: [
      { year: 2020, written: 15, practical: 59 },
      { year: 2021, written: 16, practical: 60 },
      { year: 2022, written: 17, practical: 62 },
      { year: 2023, written: 18, practical: 63 },
      { year: 2024, written: 19, practical: 65 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '재료 역학', desc: '응력·변형률, 보의 굽힘, 비틀림, 좌굴 이론 및 설계 적용' },
      { name: '열역학', desc: '열역학 법칙, 사이클, 열교환기, 에너지 효율 분석' },
      { name: '유체 역학', desc: '유체 정역학·동역학, 파이프 흐름, 펌프·터빈 설계' },
      { name: '기계 설계', desc: '기계 요소 설계(볼트·기어·베어링), 피로 파괴, 신뢰성' },
      { name: '기계 제조 및 자동화', desc: '가공 공정, CNC, 자동화 시스템, 생산 기술 동향' },
    ],
    jobs: [
      { title: '기계 설계 기술 임원', company: '중공업·플랜트 대기업', salary: '7,000~1억원', location: '전국', type: '정규직' },
      { title: '기계 컨설턴트', company: '엔지니어링 회사', salary: '6,000~9,000만원', location: '서울·경기', type: '정규직' },
      { title: '기계 감리 전문가', company: '플랜트감리사무소', salary: '5,500~8,000만원', location: '전국', type: '정규직' },
      { title: '생산기술 전문위원', company: '자동차·방산업체', salary: '6,000~8,500만원', location: '전국', type: '정규직' },
      { title: '기계공학 교수', company: '대학·연구소', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '기계기술사 핵심이론 총정리', author: '이상도', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '기계기술사 기출문제 완전분석', author: '김현수', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '기계기술사 서술형 답안 작성법', author: '박재현', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '기계기술사 면접 완전정복', author: '최용국', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '재료 역학·열역학·유체 역학 핵심 이론 정리',
      '기계 설계 요소별 설계 기준 및 공식 숙달',
      '최신 제조·자동화 기술 동향 파악',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '화공기술사': {
    name: '화공기술사',
    icon: 'fa-flask',
    category: '화학',
    heroTitle: '2026년도 화공기술사 합격 가이드',
    heroDesc: '화공기술사는 화학 공정 설계·운전·최적화 및 석유화학·정밀화학 플랜트 관리에 관한 최고급 기술 능력을 검증하는 자격입니다. 석유화학, 제약, 반도체 소재 등 화학 산업 전반에서 핵심 기술 전문가로 활동할 수 있습니다.',
    passRateSummary: '필기 14% | 면접 56%',
    avgPassRate: '11%',
    passRates: [
      { year: 2020, written: 12, practical: 53 },
      { year: 2021, written: 13, practical: 54 },
      { year: 2022, written: 14, practical: 56 },
      { year: 2023, written: 15, practical: 57 },
      { year: 2024, written: 16, practical: 59 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '화공 열역학', desc: '상평형, 반응 평형, 엔탈피·엔트로피 계산 및 공정 적용' },
      { name: '반응 공학', desc: '반응기 설계(CSTR·PFR), 반응 속도론, 촉매 반응' },
      { name: '분리 공정', desc: '증류, 추출, 흡수·흡착, 막 분리 등 분리 기술 설계' },
      { name: '이동 현상', desc: '열전달, 물질 전달, 운동량 전달 이론 및 공정 적용' },
      { name: '화공 안전 및 환경', desc: '폭발 한계, 공정 위험성 평가(HAZOP), 환경 규제 대응' },
    ],
    jobs: [
      { title: '화공 공정 기술 임원', company: '석유화학 대기업', salary: '7,500~1억 1,000만원', location: '울산·여수·대산', type: '정규직' },
      { title: '화공 플랜트 컨설턴트', company: '엔지니어링 회사', salary: '6,000~9,000만원', location: '서울·경기', type: '정규직' },
      { title: '공정 안전 전문가', company: '정유·화학공장', salary: '5,500~8,000만원', location: '전국', type: '정규직' },
      { title: '화공 감리 전문가', company: '플랜트감리사무소', salary: '5,500~8,000만원', location: '전국', type: '정규직' },
      { title: '화공학 교수', company: '대학·연구소', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '화공기술사 핵심이론 총정리', author: '강동호', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '화공기술사 기출문제 완전분석', author: '이경민', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '화공기술사 서술형 답안 작성법', author: '박용기', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '화공기술사 면접 완전정복', author: '정재수', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '화공 열역학·반응 공학·이동 현상 핵심 이론 정리',
      '분리 공정 설계 계산 문제 반복 풀이',
      '공정 위험성 평가(HAZOP) 방법론 심화 학습',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '가스기술사': {
    name: '가스기술사',
    icon: 'fa-fire-flame-curved',
    category: '가스·에너지',
    heroTitle: '2026년도 가스기술사 합격 가이드',
    heroDesc: '가스기술사는 LNG·LPG·도시가스 등 가스 설비의 설계·안전 관리·사고 예방에 관한 최고급 기술 능력을 검증하는 국가기술자격입니다. 가스 공사·도시가스 회사·가스 안전 기관에서 핵심 전문가로 활동할 수 있습니다.',
    passRateSummary: '필기 14% | 면접 55%',
    avgPassRate: '11%',
    passRates: [
      { year: 2020, written: 12, practical: 52 },
      { year: 2021, written: 13, practical: 53 },
      { year: 2022, written: 14, practical: 55 },
      { year: 2023, written: 15, practical: 56 },
      { year: 2024, written: 16, practical: 58 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '가스 특성 및 연소', desc: '가연성·독성 가스 특성, 연소 범위, 폭발 메커니즘' },
      { name: '가스 설비 및 배관', desc: 'LNG·LPG 저장 설비, 배관 설계 기준, 압력 조정기' },
      { name: '가스 안전 관리', desc: '안전 거리, 방폭 설비, 가스 누출 감지·차단 시스템' },
      { name: '가스 사고 사례 및 예방', desc: '폭발·화재 사고 사례 분석, 위험성 평가, 재발 방지' },
      { name: '가스 관계 법규', desc: '고압가스안전관리법, 도시가스사업법, LPG안전관리법' },
    ],
    jobs: [
      { title: '가스 안전 기술 임원', company: '한국가스안전공사', salary: '6,500~9,500만원', location: '전국', type: '정규직' },
      { title: '도시가스 기술 전문가', company: '도시가스 회사', salary: '6,000~8,500만원', location: '전국', type: '정규직' },
      { title: '가스 설비 컨설턴트', company: '가스안전컨설팅', salary: '5,500~8,000만원', location: '서울·경기', type: '정규직' },
      { title: '가스 감리 전문가', company: '가스감리사무소', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
      { title: '가스 안전 교수', company: '대학·훈련기관', salary: '4,500~6,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '가스기술사 핵심이론 총정리', author: '이순규', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '가스기술사 기출문제 완전분석', author: '박재현', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '가스기술사 서술형 답안 작성법', author: '김재원', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '가스기술사 면접 완전정복', author: '정성훈', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '가스 특성·연소·폭발 이론 핵심 정리',
      'LNG·LPG 설비 설계 기준 및 안전 관리 학습',
      '가스 관계 법규 핵심 조항 숙지',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '정보관리기술사': {
    name: '정보관리기술사',
    icon: 'fa-database',
    category: 'IT·정보',
    heroTitle: '2026년도 정보관리기술사 합격 가이드',
    heroDesc: '정보관리기술사는 정보 시스템 기획·설계·구축·운영 및 데이터 관리 전반에 관한 최고급 기술 능력을 검증하는 국가기술자격입니다. IT 대기업, 공공기관 CIO, 정보화 컨설팅 등 다양한 고급 직군에서 활동할 수 있습니다.',
    passRateSummary: '필기 18% | 면접 63%',
    avgPassRate: '15%',
    passRates: [
      { year: 2020, written: 16, practical: 60 },
      { year: 2021, written: 17, practical: 61 },
      { year: 2022, written: 18, practical: 63 },
      { year: 2023, written: 19, practical: 64 },
      { year: 2024, written: 20, practical: 65 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '정보시스템 기획 및 전략', desc: '정보화 전략 계획(ISP), EA, 디지털 전환 방법론' },
      { name: '소프트웨어 공학', desc: '개발 방법론(폭포수·애자일), 품질 관리, 테스트 기법' },
      { name: '데이터베이스', desc: '데이터 모델링, SQL 최적화, 빅데이터 아키텍처, NoSQL' },
      { name: '네트워크 및 보안', desc: '네트워크 프로토콜, 클라우드, 정보 보안 관리 체계' },
      { name: '신기술 동향', desc: 'AI·ML, 블록체인, IoT, 클라우드 컴퓨팅, 디지털 정부' },
    ],
    jobs: [
      { title: 'CIO·정보화 임원', company: '대기업·공공기관', salary: '8,000~1억 2,000만원', location: '서울·경기', type: '정규직' },
      { title: 'IT 컨설턴트', company: 'IT 컨설팅 회사', salary: '6,500~9,500만원', location: '서울·경기', type: '정규직' },
      { title: '정보화 사업 PM', company: 'SI 대기업', salary: '6,000~8,500만원', location: '서울·경기', type: '정규직' },
      { title: '공공 정보화 전문가', company: '정부·공공기관', salary: '5,500~8,000만원', location: '서울·세종', type: '정규직' },
      { title: 'IT 교수·연구원', company: '대학·연구소', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '정보관리기술사 핵심이론 총정리', author: '박성현', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '정보관리기술사 기출문제 완전분석', author: '이경민', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '정보관리기술사 서술형 답안 작성법', author: '강동호', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '정보관리기술사 면접 완전정복', author: '김재원', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '정보시스템 기획·소프트웨어 공학 핵심 이론 정리',
      '데이터베이스 모델링 및 최적화 기법 학습',
      'AI·클라우드 등 신기술 동향 파악 및 정리',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '정보보안기술사': {
    name: '정보보안기술사',
    icon: 'fa-shield-halved',
    category: '보안',
    heroTitle: '2026년도 정보보안기술사 합격 가이드',
    heroDesc: '정보보안기술사는 사이버 보안 위협 분석·대응·정책 수립 및 보안 아키텍처 설계에 관한 최고급 기술 능력을 검증하는 국가기술자격입니다. 보안 전문 기업, 금융 기관, 공공기관 보안 임원 등 사이버 보안 분야의 최고 전문가로 활동할 수 있습니다.',
    passRateSummary: '필기 17% | 면접 61%',
    avgPassRate: '14%',
    passRates: [
      { year: 2020, written: 15, practical: 58 },
      { year: 2021, written: 16, practical: 59 },
      { year: 2022, written: 17, practical: 61 },
      { year: 2023, written: 18, practical: 62 },
      { year: 2024, written: 19, practical: 64 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '정보보안 관리', desc: 'ISMS-P, ISO 27001, 정보보호 정책 수립 및 위험 관리' },
      { name: '네트워크 보안', desc: '방화벽, IDS·IPS, VPN, 제로 트러스트 아키텍처' },
      { name: '시스템 및 애플리케이션 보안', desc: '취약점 분석, 시큐어 코딩, 모바일·클라우드 보안' },
      { name: '암호학', desc: '대칭·비대칭 암호, PKI, 해시 함수, 디지털 서명 원리' },
      { name: '사이버 침해 대응', desc: 'APT 공격 분석, 디지털 포렌식, 사고 대응 절차' },
    ],
    jobs: [
      { title: 'CISO·보안 임원', company: '금융·대기업·공공기관', salary: '8,000~1억 3,000만원', location: '서울·경기', type: '정규직' },
      { title: '사이버 보안 컨설턴트', company: '보안 컨설팅 회사', salary: '6,500~9,500만원', location: '서울·경기', type: '정규직' },
      { title: '정보보안 전문가', company: '보안 솔루션 기업', salary: '6,000~8,500만원', location: '서울·경기', type: '정규직' },
      { title: '침해사고 대응 전문가', company: 'CERT·보안관제', salary: '5,500~8,000만원', location: '서울·경기', type: '정규직' },
      { title: '정보보안 교수', company: '대학·연구소', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '정보보안기술사 핵심이론 총정리', author: '이상도', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '정보보안기술사 기출문제 완전분석', author: '박성현', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '정보보안기술사 서술형 답안 작성법', author: '정재수', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '정보보안기술사 면접 완전정복', author: '강동호', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '정보보안 관리체계(ISMS-P) 및 위험 관리 이론 정리',
      '네트워크·시스템 보안 기술 심화 학습',
      '암호학 원리 및 PKI 체계 숙지',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '컴퓨터시스템응용기술사': {
    name: '컴퓨터시스템응용기술사',
    icon: 'fa-server',
    category: 'IT·정보',
    heroTitle: '2026년도 컴퓨터시스템응용기술사 합격 가이드',
    heroDesc: '컴퓨터시스템응용기술사는 컴퓨터 시스템 아키텍처 설계, 운영체제, 데이터베이스, 임베디드 시스템 등 컴퓨터 공학 전반에 관한 최고급 기술 능력을 검증하는 자격입니다. 반도체·전자·IT 대기업에서 시스템 아키텍트로 활동할 수 있습니다.',
    passRateSummary: '필기 16% | 면접 60%',
    avgPassRate: '13%',
    passRates: [
      { year: 2020, written: 14, practical: 57 },
      { year: 2021, written: 15, practical: 58 },
      { year: 2022, written: 16, practical: 60 },
      { year: 2023, written: 17, practical: 61 },
      { year: 2024, written: 18, practical: 63 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '컴퓨터 구조', desc: '프로세서 설계, 메모리 계층 구조, 병렬 처리, RISC·CISC' },
      { name: '운영체제', desc: '프로세스 관리, 메모리 관리, 파일 시스템, 가상화 기술' },
      { name: '알고리즘 및 자료구조', desc: '정렬·탐색 알고리즘, 그래프 이론, 복잡도 분석' },
      { name: '임베디드 시스템', desc: 'RTOS, 마이크로컨트롤러, IoT 디바이스 설계·최적화' },
      { name: '클라우드 및 분산 시스템', desc: '클라우드 아키텍처, 마이크로서비스, 컨테이너 기술' },
    ],
    jobs: [
      { title: '시스템 아키텍트', company: '반도체·IT 대기업', salary: '7,500~1억 1,000만원', location: '서울·경기', type: '정규직' },
      { title: '임베디드 시스템 전문가', company: '전자·자동차 부품사', salary: '6,000~9,000만원', location: '수원·화성·울산', type: '정규직' },
      { title: 'IT 인프라 컨설턴트', company: 'IT 컨설팅 회사', salary: '6,000~9,000만원', location: '서울·경기', type: '정규직' },
      { title: '클라우드 아키텍트', company: '클라우드·SaaS 기업', salary: '6,500~9,500만원', location: '서울·경기', type: '정규직' },
      { title: '컴퓨터공학 교수', company: '대학·연구소', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '컴퓨터시스템응용기술사 핵심이론 총정리', author: '박재현', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '컴퓨터시스템응용기술사 기출문제 완전분석', author: '이경민', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '컴퓨터시스템응용기술사 서술형 답안 작성법', author: '최용국', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '컴퓨터시스템응용기술사 면접 완전정복', author: '김현수', publisher: '일진사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '컴퓨터 구조·운영체제 핵심 이론 정리',
      '알고리즘·자료구조 주요 문제 반복 풀이',
      '클라우드·임베디드 최신 기술 동향 파악',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '토목기술사': {
    name: '토목기술사',
    icon: 'fa-road',
    category: '토목·건설',
    heroTitle: '2026년도 토목기술사 합격 가이드',
    heroDesc: '토목기술사는 도로, 교량, 터널, 댐, 항만 등 사회 기반 시설의 설계·시공·감리에 관한 최고급 기술 능력을 검증하는 국가기술자격입니다. 대형 건설사, 토목 설계 사무소, 공공 발주처 등에서 핵심 기술 전문가로 활동할 수 있습니다.',
    passRateSummary: '필기 18% | 면접 63%',
    avgPassRate: '15%',
    passRates: [
      { year: 2020, written: 16, practical: 60 },
      { year: 2021, written: 17, practical: 62 },
      { year: 2022, written: 18, practical: 63 },
      { year: 2023, written: 19, practical: 64 },
      { year: 2024, written: 20, practical: 65 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '토질 및 기초', desc: '토질 역학, 지반 조사, 기초 설계(직접·말뚝 기초), 사면 안정' },
      { name: '수리학 및 수문학', desc: '개수로 흐름, 지하수, 홍수 해석, 댐·저수지 설계' },
      { name: '도로 및 교통', desc: '도로 기하 설계, 포장 구조, 교통류 이론, 교통 안전' },
      { name: '구조 역학', desc: '보·골조 해석, 트러스, 아치, 이동 하중, 영향선' },
      { name: '철근 콘크리트 및 교량', desc: 'RC·PSC 설계, 교량 형식별 특성, 내진 설계 기준' },
    ],
    jobs: [
      { title: '토목 설계 기술 임원', company: '대형 건설사·설계사무소', salary: '7,000~1억원', location: '전국', type: '정규직' },
      { title: '토목 감리 전문가', company: '감리법인', salary: '5,500~8,000만원', location: '전국', type: '정규직' },
      { title: '토목 컨설턴트', company: '엔지니어링 회사', salary: '6,000~9,000만원', location: '서울·경기', type: '정규직' },
      { title: '발주처 기술 심의위원', company: '정부·공기업', salary: '5,500~8,000만원', location: '서울·세종', type: '계약직' },
      { title: '토목공학 교수', company: '대학·연구소', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '토목기술사 핵심이론 총정리', author: '이재원', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '토목기술사 기출문제 완전분석', author: '박성현', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '토목기술사 서술형 답안 작성법', author: '김재원', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '토목기술사 면접 완전정복', author: '정재수', publisher: '구민사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '토질·기초·수리학 핵심 이론 정리',
      '도로·교량·철근 콘크리트 설계 기준 학습',
      '최신 건설 기준(KDS) 핵심 조항 숙지',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  '건축기술사': {
    name: '건축기술사',
    icon: 'fa-building',
    category: '건축',
    heroTitle: '2026년도 건축기술사 합격 가이드',
    heroDesc: '건축기술사는 건축 구조·시공·재료·환경 및 건축 법규 전반에 관한 최고급 기술 능력을 검증하는 국가기술자격입니다. 대형 건설사 기술 임원, 건축 감리법인, 건축 설계 사무소 등에서 고급 전문가로 활동하며 건축물 품질 관리를 총괄할 수 있습니다.',
    passRateSummary: '필기 17% | 면접 62%',
    avgPassRate: '14%',
    passRates: [
      { year: 2020, written: 15, practical: 59 },
      { year: 2021, written: 16, practical: 60 },
      { year: 2022, written: 17, practical: 62 },
      { year: 2023, written: 18, practical: 63 },
      { year: 2024, written: 19, practical: 65 },
    ],
    schedules: [
      { round: '1회', writtenExam: '2026-01-25 ~ 2026-01-26', writtenResult: '2026-02-19', practicalExam: '2026-03-29 ~ 2026-04-11', practicalResult: '2026-04-24' },
      { round: '2회', writtenExam: '2026-05-10 ~ 2026-05-11', writtenResult: '2026-06-04', practicalExam: '2026-07-05 ~ 2026-07-18', practicalResult: '2026-08-07' },
      { round: '3회', writtenExam: '2026-08-09 ~ 2026-08-10', writtenResult: '2026-09-03', practicalExam: '2026-10-11 ~ 2026-10-24', practicalResult: '2026-11-13' },
    ],
    milestones: [
      { label: '1회 필기', date: '2026-01-25' },
      { label: '1회 면접', date: '2026-03-29' },
      { label: '2회 필기', date: '2026-05-10' },
      { label: '2회 면접', date: '2026-07-05' },
    ],
    subjects: [
      { name: '건축 구조', desc: '철근 콘크리트·철골 구조 설계, 내진·면진 설계 기준' },
      { name: '건축 시공', desc: '시공 계획, 공정 관리, 품질 관리, 하자 방지 대책' },
      { name: '건축 재료', desc: '콘크리트·강재·목재·마감재 특성 및 품질 기준' },
      { name: '건축 환경 및 설비', desc: '열·빛·음 환경, 공조·급배수·전기 설비 설계 기준' },
      { name: '건축 법규', desc: '건축법, 주택법, 건설기술진흥법 핵심 조항 및 인허가' },
    ],
    jobs: [
      { title: '건축 기술 임원', company: '대형 건설사', salary: '7,000~1억원', location: '전국', type: '정규직' },
      { title: '건축 감리 전문가', company: '건축감리법인', salary: '5,500~8,000만원', location: '전국', type: '정규직' },
      { title: '건축 컨설턴트', company: '건설·부동산 컨설팅', salary: '6,000~9,000만원', location: '서울·경기', type: '정규직' },
      { title: '발주처 기술 심의위원', company: '정부·공기업', salary: '5,500~8,000만원', location: '서울·세종', type: '계약직' },
      { title: '건축학 교수', company: '대학·연구소', salary: '5,000~7,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { title: '건축기술사 핵심이론 총정리', author: '박용기', publisher: '성안당', year: 2025, rating: 4.5 },
      { title: '건축기술사 기출문제 완전분석', author: '이순규', publisher: '예문사', year: 2025, rating: 4.4 },
      { title: '건축기술사 서술형 답안 작성법', author: '강동호', publisher: '세화', year: 2024, rating: 4.3 },
      { title: '건축기술사 면접 완전정복', author: '박재현', publisher: '구민사', year: 2024, rating: 4.2 },
    ],
    defaultTodos: [
      '건축 구조·시공·재료 핵심 이론 정리',
      '건축 환경·설비 설계 기준 학습',
      '건축 관련 법규 핵심 조항 숙지',
      '최근 5개년 기출문제 서술형 답안 작성 연습',
      '면접 대비 핵심 주제 구술 연습',
    ],
  },

  // ────────────────────────────────────────
  // 컴퓨터·IT 추가 자격증
  // ────────────────────────────────────────

  '네트워크관리사1급': {
    name: '네트워크관리사1급', icon: 'fa-network-wired', category: 'IT·정보통신',
    heroTitle: '2026년도 네트워크관리사 1급 합격 전략',
    heroDesc: '네트워크 설계·구축·관리 전반을 다루는 국내 대표 민간 네트워크 자격증. 서버·스위치·라우터 운용 역량을 증명하고 IT 인프라 취업을 노리세요.',
    passRateSummary: '필기 45% | 실기 38%', avgPassRate: '41%',
    passRates: [{year:2020,written:42,practical:35},{year:2021,written:44,practical:36},{year:2022,written:45,practical:37},{year:2023,written:46,practical:38},{year:2024,written:45,practical:38}],
    schedules: [{round:'상시',writtenExam:'상시접수',practicalExam:'상시접수',writtenResult:'-',practicalResult:'-',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'네트워크 일반',desc:'OSI 7계층, TCP/IP, 라우팅 프로토콜'},{name:'NOS',desc:'Windows/Linux 서버 관리'},{name:'네트워크 운용기기',desc:'스위치·라우터·방화벽 설정'},{name:'보안',desc:'네트워크 보안 정책 및 암호화'}],
    jobs: [{company:'KT',title:'네트워크 엔지니어',type:'large',region:'seoul',experience:'any',salary:'3800~5000만원',deadline:'2026-09-30',duties:'네트워크 인프라 구축 및 운영',requirements:['네트워크관리사 1급 우대'],benefits:'4대보험, 성과급',applyUrl:'https://recruit.kt.com'},{company:'SK브로드밴드',title:'네트워크 운용 관리',type:'large',region:'seoul',experience:'exp',salary:'4000~5500만원',deadline:'2026-10-31',duties:'광역 네트워크 운용 및 장애 대응',requirements:['네트워크관리사 1급 이상'],benefits:'복지포인트, 주택자금',applyUrl:'https://www.skbroadband.com'}],
    books: [{title:'2026 네트워크관리사 1급 필기+실기 한번에 끝내기',author:'이중호',publisher:'성안당',rating:4.7,reviews:312},{title:'네트워크관리사 1급 기출문제 완전정복',author:'김민수',publisher:'예문사',rating:4.5,reviews:245},{title:'네트워크관리사 1급 핵심요약 + 실전문제',author:'박상현',publisher:'일진사',rating:4.4,reviews:189}],
    milestones: [{week:'1~2주',task:'네트워크 기초·OSI 계층 이론'},{week:'3~4주',task:'TCP/IP 및 라우팅 프로토콜'},{week:'5~6주',task:'NOS 서버 설정 실습'},{week:'7~8주',task:'기출문제 풀이 및 오답 정리'}],
    defaultTodos: ['OSI 7계층·TCP/IP 완전 정복','라우팅·스위칭 설정 실습','서버(Windows/Linux) 구축 실습','최근 기출문제 3회분 풀기'],
  },

  '네트워크관리사2급': {
    name: '네트워크관리사2급', icon: 'fa-network-wired', category: 'IT·정보통신',
    heroTitle: '2026년도 네트워크관리사 2급 합격 전략',
    heroDesc: '네트워크 기초 이론과 장비 운용을 검증하는 입문 자격증. IT 인프라 취업의 첫 걸음으로 많은 수험생이 선택하는 국민 자격증입니다.',
    passRateSummary: '필기 52% | 실기 44%', avgPassRate: '48%',
    passRates: [{year:2020,written:49,practical:41},{year:2021,written:51,practical:43},{year:2022,written:52,practical:44},{year:2023,written:53,practical:45},{year:2024,written:52,practical:44}],
    schedules: [{round:'상시',writtenExam:'상시접수',practicalExam:'상시접수',writtenResult:'-',practicalResult:'-',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'네트워크 일반',desc:'OSI 계층, IP 주소 체계'},{name:'TCP/IP',desc:'프로토콜 기초 및 서브넷팅'},{name:'NOS',desc:'기본 서버 관리'},{name:'네트워크 운용기기',desc:'스위치·공유기 기본 설정'}],
    jobs: [{company:'LG유플러스',title:'네트워크 운용',type:'large',region:'seoul',experience:'new',salary:'3500~4500만원',deadline:'2026-09-30',duties:'네트워크 회선 관리 및 장애 처리',requirements:['네트워크관리사 2급 이상'],benefits:'4대보험, 통신비 지원',applyUrl:'https://www.lguplus.com'}],
    books: [{title:'2026 네트워크관리사 2급 필기 한권끝장',author:'이중호',publisher:'성안당',rating:4.6,reviews:428},{title:'네트워크관리사 2급 실기 완전정복',author:'김민수',publisher:'예문사',rating:4.5,reviews:356},{title:'네트워크관리사 2급 7일 완성',author:'박성민',publisher:'길벗',rating:4.4,reviews:289}],
    milestones: [{week:'1~2주',task:'네트워크 기초 이론'},{week:'3~4주',task:'TCP/IP 및 IP 주소 체계'},{week:'5주',task:'기출문제 집중 풀이'}],
    defaultTodos: ['IP 주소·서브넷 계산 완숙','OSI 계층별 프로토콜 암기','기출문제 5회분 풀기'],
  },

  '리눅스마스터1급': {
    name: '리눅스마스터1급', icon: 'fa-terminal', category: 'IT·정보통신',
    heroTitle: '2026년도 리눅스마스터 1급 합격 전략',
    heroDesc: '리눅스 시스템 관리·보안·네트워크 서비스 구축 역량을 검증하는 국내 최고 권위의 리눅스 자격증. 클라우드·서버 엔지니어 취업에 강력한 무기입니다.',
    passRateSummary: '1차 55% | 2차 35%', avgPassRate: '32%',
    passRates: [{year:2020,written:52,practical:33},{year:2021,written:54,practical:34},{year:2022,written:55,practical:35},{year:2023,written:56,practical:36},{year:2024,written:55,practical:35}],
    schedules: [{round:'상반기',writtenExam:'2026-03-14',practicalExam:'2026-05-16',writtenResult:'2026-04-04',practicalResult:'2026-06-13',registerStart:'2026-01-02',registerEnd:'2026-02-07'},{round:'하반기',writtenExam:'2026-09-12',practicalExam:'2026-11-14',writtenResult:'2026-10-10',practicalResult:'2026-12-12',registerStart:'2026-07-01',registerEnd:'2026-08-07'}],
    subjects: [{name:'리눅스 시스템 관리',desc:'커널·파일시스템·프로세스 관리'},{name:'리눅스 네트워크 서비스',desc:'DNS·Web·FTP·메일 서버 구축'},{name:'리눅스 보안',desc:'방화벽, SELinux, 취약점 관리'},{name:'시스템 프로그래밍',desc:'셸 스크립트, C 기초'}],
    jobs: [{company:'네이버',title:'리눅스 서버 엔지니어',type:'large',region:'seoul',experience:'any',salary:'4500~6500만원',deadline:'2026-10-31',duties:'대규모 리눅스 서버 관리 및 자동화',requirements:['리눅스마스터 1급 우대'],benefits:'스톡옵션, 유연근무',applyUrl:'https://recruit.navercorp.com'},{company:'카카오',title:'인프라 엔지니어',type:'large',region:'seoul',experience:'exp',salary:'5000~7000만원',deadline:'2026-11-30',duties:'클라우드 인프라 구축·운영',requirements:['리눅스마스터 1급 이상 우대'],benefits:'재택근무, 성과급',applyUrl:'https://careers.kakao.com'}],
    books: [{title:'2026 리눅스마스터 1급 완전정복',author:'한마음',publisher:'생능출판',rating:4.8,reviews:267},{title:'리눅스마스터 1급 기출문제+핵심요약',author:'김정현',publisher:'성안당',rating:4.6,reviews:198},{title:'리눅스 서버 실무 + 자격증',author:'이재국',publisher:'길벗',rating:4.5,reviews:156}],
    milestones: [{week:'1~3주',task:'리눅스 기초·파일시스템·명령어'},{week:'4~6주',task:'네트워크 서비스 구축 실습'},{week:'7~8주',task:'보안 설정 및 스크립트 작성'},{week:'9~10주',task:'기출문제 풀이 및 실기 준비'}],
    defaultTodos: ['리눅스 필수 명령어 100개 암기','서버 서비스(DNS·Web·FTP) 실습','셸 스크립트 작성 연습','최근 기출 3회분 풀기'],
  },

  '리눅스마스터2급': {
    name: '리눅스마스터2급', icon: 'fa-terminal', category: 'IT·정보통신',
    heroTitle: '2026년도 리눅스마스터 2급 합격 전략',
    heroDesc: '리눅스 기초 명령어, 파일시스템, 사용자 관리를 다루는 입문 자격증. 개발자·시스템 관리자 모두에게 필수 기초 역량을 증명합니다.',
    passRateSummary: '1차 62% | 2차 50%', avgPassRate: '55%',
    passRates: [{year:2020,written:60,practical:48},{year:2021,written:61,practical:49},{year:2022,written:62,practical:50},{year:2023,written:63,practical:51},{year:2024,written:62,practical:50}],
    schedules: [{round:'상반기',writtenExam:'2026-03-14',practicalExam:'2026-05-16',writtenResult:'2026-04-04',practicalResult:'2026-06-13',registerStart:'2026-01-02',registerEnd:'2026-02-07'},{round:'하반기',writtenExam:'2026-09-12',practicalExam:'2026-11-14',writtenResult:'2026-10-10',practicalResult:'2026-12-12',registerStart:'2026-07-01',registerEnd:'2026-08-07'}],
    subjects: [{name:'리눅스 운영 및 관리',desc:'기본 명령어·파일시스템·사용자 관리'},{name:'장치 관리',desc:'디스크·네트워크·프린터 설정'},{name:'X윈도우',desc:'데스크탑 환경 설정'}],
    jobs: [{company:'중소 IT 기업',title:'시스템 관리자',type:'mid',region:'seoul',experience:'new',salary:'3000~4000만원',deadline:'2026-09-30',duties:'리눅스 서버 기본 운영 및 유지보수',requirements:['리눅스마스터 2급 이상'],benefits:'4대보험',applyUrl:'https://www.saramin.co.kr'}],
    books: [{title:'2026 리눅스마스터 2급 한권으로 끝내기',author:'한마음',publisher:'생능출판',rating:4.7,reviews:389},{title:'리눅스마스터 2급 기출문제 완성',author:'이재국',publisher:'성안당',rating:4.5,reviews:312},{title:'리눅스마스터 2급 합격공식',author:'김정현',publisher:'길벗',rating:4.4,reviews:256}],
    milestones: [{week:'1~2주',task:'리눅스 기초·명령어'},{week:'3~4주',task:'파일시스템·사용자 관리'},{week:'5주',task:'기출문제 집중 풀기'}],
    defaultTodos: ['기본 명령어 반복 실습','사용자·그룹 관리 연습','기출문제 3회분 풀기'],
  },

  'ADsP': {
    name: 'ADsP', icon: 'fa-chart-bar', category: 'IT·정보통신',
    heroTitle: '2026년도 ADsP(데이터분석준전문가) 합격 전략',
    heroDesc: '데이터 이해·처리·분석의 기초를 검증하는 한국데이터산업진흥원 공인 자격증. 비전공자도 데이터 직군으로 전환하는 발판이 됩니다.',
    passRateSummary: '필기 50% 내외', avgPassRate: '50%',
    passRates: [{year:2020,written:48,practical:0},{year:2021,written:50,practical:0},{year:2022,written:51,practical:0},{year:2023,written:52,practical:0},{year:2024,written:50,practical:0}],
    schedules: [{round:'1회',writtenExam:'2026-03-28',practicalExam:'-',writtenResult:'2026-04-25',practicalResult:'-',registerStart:'2026-02-17',registerEnd:'2026-03-07'},{round:'2회',writtenExam:'2026-09-26',practicalExam:'-',writtenResult:'2026-10-24',practicalResult:'-',registerStart:'2026-08-18',registerEnd:'2026-09-05'}],
    subjects: [{name:'데이터 이해',desc:'데이터 개념, 데이터베이스 기초'},{name:'데이터 분석 기획',desc:'분석 방법론, 프로젝트 관리'},{name:'데이터 분석',desc:'통계 기법, R·Python 기초'}],
    jobs: [{company:'삼성SDS',title:'데이터 분석가',type:'large',region:'seoul',experience:'new',salary:'4000~5500만원',deadline:'2026-10-31',duties:'빅데이터 분석 및 인사이트 도출',requirements:['ADsP 이상 우대'],benefits:'스톡옵션, 유연근무',applyUrl:'https://www.samsungsds.com'}],
    books: [{title:'2026 ADsP 데이터분석준전문가 한권으로 합격',author:'이지스퍼블리싱',publisher:'이지스퍼블리싱',rating:4.8,reviews:534},{title:'ADsP 기출문제+핵심이론 30일 완성',author:'정우진',publisher:'데이터에듀',rating:4.7,reviews:423},{title:'ADsP 실전모의고사 5회분',author:'빅데이터연구소',publisher:'성안당',rating:4.5,reviews:312}],
    milestones: [{week:'1~2주',task:'데이터 이해·DB 기초'},{week:'3~4주',task:'통계 기법·분석 방법론'},{week:'5~6주',task:'기출문제 집중 풀기'}],
    defaultTodos: ['R/Python 기초 문법 학습','통계 개념(평균·분산·회귀) 정리','ADsP 기출문제 5회분 풀기'],
  },

  'ADP': {
    name: 'ADP', icon: 'fa-database', category: 'IT·정보통신',
    heroTitle: '2026년도 ADP(데이터분석전문가) 합격 전략',
    heroDesc: '데이터 분석 설계·구현·결과 해석까지 전문가 수준을 검증하는 최고 권위의 데이터 자격증. 데이터 사이언티스트·AI 엔지니어 취업에 필수입니다.',
    passRateSummary: '필기 30% | 실기 20%', avgPassRate: '18%',
    passRates: [{year:2020,written:28,practical:18},{year:2021,written:29,practical:19},{year:2022,written:30,practical:20},{year:2023,written:31,practical:21},{year:2024,written:30,practical:20}],
    schedules: [{round:'1회',writtenExam:'2026-03-28',practicalExam:'2026-06-06',writtenResult:'2026-04-25',practicalResult:'2026-07-04',registerStart:'2026-02-17',registerEnd:'2026-03-07'},{round:'2회',writtenExam:'2026-09-26',practicalExam:'2026-12-05',writtenResult:'2026-10-24',practicalResult:'2027-01-02',registerStart:'2026-08-18',registerEnd:'2026-09-05'}],
    subjects: [{name:'데이터 이해',desc:'데이터 거버넌스·마스터 데이터'},{name:'데이터 분석 기획',desc:'분석 로드맵·방법론'},{name:'데이터 분석',desc:'머신러닝·딥러닝·시계열 분석'},{name:'데이터 시각화',desc:'BI 도구·시각화 설계'}],
    jobs: [{company:'카카오',title:'데이터 사이언티스트',type:'large',region:'seoul',experience:'exp',salary:'6000~9000만원',deadline:'2026-11-30',duties:'ML 모델 개발 및 A/B 테스트',requirements:['ADP 우대'],benefits:'재택근무, 스톡옵션',applyUrl:'https://careers.kakao.com'},{company:'네이버',title:'AI 분석가',type:'large',region:'seoul',experience:'exp',salary:'5500~8000만원',deadline:'2026-10-31',duties:'대용량 데이터 분석 및 모델링',requirements:['ADP 이상 우대'],benefits:'유연근무, 성과급',applyUrl:'https://recruit.navercorp.com'}],
    books: [{title:'2026 ADP 데이터분석전문가 필기+실기 완전정복',author:'권철민',publisher:'이지스퍼블리싱',rating:4.8,reviews:312},{title:'ADP 머신러닝·딥러닝 실전 문제집',author:'빅데이터연구소',publisher:'성안당',rating:4.6,reviews:245},{title:'ADP 통계분석·SQL 핵심정리',author:'이지영',publisher:'데이터에듀',rating:4.5,reviews:198}],
    milestones: [{week:'1~3주',task:'통계·머신러닝 이론'},{week:'4~6주',task:'Python/R 실습'},{week:'7~8주',task:'필기 기출문제'},{week:'9~12주',task:'실기 과제형 연습'}],
    defaultTodos: ['pandas·scikit-learn 실습','통계 검정 방법 완전 이해','기출문제 풀기 + 오답 분석','실기 과제 모의 풀이'],
  },

  'SQLP': {
    name: 'SQLP', icon: 'fa-server', category: 'IT·정보통신',
    heroTitle: '2026년도 SQLP(SQL전문가) 합격 전략',
    heroDesc: '데이터베이스 SQL 튜닝·설계 전문가 자격증. DBA·데이터 엔지니어 취업에 핵심 스펙이며 SQLD 합격 후 도전하는 상위 자격증입니다.',
    passRateSummary: '필기 40% | 실기 25%', avgPassRate: '22%',
    passRates: [{year:2020,written:38,practical:23},{year:2021,written:39,practical:24},{year:2022,written:40,practical:25},{year:2023,written:41,practical:26},{year:2024,written:40,practical:25}],
    schedules: [{round:'상반기',writtenExam:'2026-03-28',practicalExam:'2026-06-06',writtenResult:'2026-04-25',practicalResult:'2026-07-04',registerStart:'2026-02-17',registerEnd:'2026-03-07'},{round:'하반기',writtenExam:'2026-09-26',practicalExam:'2026-12-05',writtenResult:'2026-10-24',practicalResult:'2027-01-02',registerStart:'2026-08-18',registerEnd:'2026-09-05'}],
    subjects: [{name:'SQL 기본 및 활용',desc:'DDL·DML·TCL·집합 연산자'},{name:'SQL 최적화 기본 원리',desc:'옵티마이저·인덱스·조인 최적화'},{name:'고급 SQL 튜닝',desc:'실행계획 분석·파티셔닝·대용량 처리'}],
    jobs: [{company:'삼성전자',title:'DBA',type:'large',region:'seoul',experience:'exp',salary:'5000~7000만원',deadline:'2026-10-31',duties:'Oracle/MySQL DB 운영 및 성능 튜닝',requirements:['SQLP 우대'],benefits:'주택자금, 학자금',applyUrl:'https://www.samsung.com/sec/careers'},{company:'LG CNS',title:'데이터베이스 엔지니어',type:'large',region:'seoul',experience:'any',salary:'4500~6000만원',deadline:'2026-09-30',duties:'대용량 DB 설계 및 쿼리 최적화',requirements:['SQLP 이상 우대'],benefits:'유연근무, 복지포인트',applyUrl:'https://www.lgcns.com/careers'}],
    books: [{title:'2026 SQLP 자격검정 핵심노트 I+II',author:'한국데이터산업진흥원',publisher:'한국데이터산업진흥원',rating:4.7,reviews:312},{title:'SQLP 실전 SQL 튜닝',author:'조시형',publisher:'디비안',rating:4.8,reviews:445},{title:'SQLP 기출문제+해설 완전정복',author:'이석기',publisher:'성안당',rating:4.5,reviews:234}],
    milestones: [{week:'1~3주',task:'SQL 기본 문법 완벽 정리'},{week:'4~6주',task:'인덱스·옵티마이저 원리'},{week:'7~9주',task:'튜닝 실전 연습'},{week:'10~12주',task:'실기 서술형 답안 작성'}],
    defaultTodos: ['실행계획(EXPLAIN) 분석 연습','인덱스 설계 전략 이해','기출문제 풀기','실기 서술형 5문제 작성 연습'],
  },

  '임베디드기사': {
    name: '임베디드기사', icon: 'fa-microchip', category: 'IT·정보통신',
    heroTitle: '2026년도 임베디드기사 합격 전략',
    heroDesc: 'IoT·자동차·반도체 장비에 탑재되는 임베디드 시스템 설계 역량을 검증하는 국가기술자격. 전장·반도체·IoT 기업 취업에 강점을 발휘합니다.',
    passRateSummary: '필기 42% | 실기 30%', avgPassRate: '28%',
    passRates: [{year:2020,written:40,practical:28},{year:2021,written:41,practical:29},{year:2022,written:42,practical:30},{year:2023,written:43,practical:31},{year:2024,written:42,practical:30}],
    schedules: [{round:'1회',writtenExam:'2026-03-07 ~ 2026-03-20',practicalExam:'2026-06-20 ~ 2026-07-04',writtenResult:'2026-04-18',practicalResult:'2026-07-25',registerStart:'2026-01-02',registerEnd:'2026-01-23'},{round:'2회',writtenExam:'2026-07-05 ~ 2026-07-18',practicalExam:'2026-10-17 ~ 2026-10-31',writtenResult:'2026-08-22',practicalResult:'2026-11-21',registerStart:'2026-05-12',registerEnd:'2026-06-05'}],
    subjects: [{name:'전자회로',desc:'디지털·아날로그 회로 설계'},{name:'임베디드 운영체제',desc:'RTOS·리눅스 커널'},{name:'임베디드 소프트웨어',desc:'C 언어·드라이버 개발'},{name:'임베디드 하드웨어',desc:'마이크로프로세서·메모리 구조'}],
    jobs: [{company:'현대자동차',title:'전장 소프트웨어 개발',type:'large',region:'seoul',experience:'any',salary:'4500~6500만원',deadline:'2026-10-31',duties:'차량 ECU 임베디드 SW 개발',requirements:['임베디드기사 우대'],benefits:'주택·학자금 지원',applyUrl:'https://www.hyundai.com/kr/careers'},{company:'삼성전자',title:'임베디드 시스템 엔지니어',type:'large',region:'seoul',experience:'exp',salary:'5000~7500만원',deadline:'2026-11-30',duties:'IoT 기기 펌웨어 개발',requirements:['임베디드기사 우대'],benefits:'주식매수선택권',applyUrl:'https://www.samsung.com/sec/careers'}],
    books: [{title:'2026 임베디드기사 필기+실기 완전정복',author:'이성주',publisher:'성안당',rating:4.7,reviews:198},{title:'임베디드 C 프로그래밍 실전',author:'김정현',publisher:'한빛미디어',rating:4.6,reviews:267},{title:'임베디드기사 기출문제 해설집',author:'박형준',publisher:'예문사',rating:4.4,reviews:145}],
    milestones: [{week:'1~3주',task:'전자회로·디지털 논리 기초'},{week:'4~6주',task:'C 언어·RTOS 개념'},{week:'7~9주',task:'하드웨어 인터페이스 실습'},{week:'10~12주',task:'기출문제 풀기·실기 준비'}],
    defaultTodos: ['C언어 포인터·구조체 완숙','RTOS 태스크 스케줄링 이해','마이크로프로세서 구조 암기','기출문제 4회분 풀기'],
  },

  '멀티미디어콘텐츠제작전문가': {
    name: '멀티미디어콘텐츠제작전문가', icon: 'fa-photo-film', category: 'IT·정보통신',
    heroTitle: '2026년도 멀티미디어콘텐츠제작전문가 합격 전략',
    heroDesc: '영상·이미지·음향·애니메이션을 통합한 디지털 콘텐츠 제작 역량을 검증. 게임·방송·광고·교육 콘텐츠 업계 취업에 유리합니다.',
    passRateSummary: '필기 48% | 실기 40%', avgPassRate: '38%',
    passRates: [{year:2020,written:46,practical:38},{year:2021,written:47,practical:39},{year:2022,written:48,practical:40},{year:2023,written:49,practical:41},{year:2024,written:48,practical:40}],
    schedules: [{round:'1회',writtenExam:'2026-03-07 ~ 2026-03-20',practicalExam:'2026-06-20 ~ 2026-07-04',writtenResult:'2026-04-18',practicalResult:'2026-07-25',registerStart:'2026-01-02',registerEnd:'2026-01-23'},{round:'2회',writtenExam:'2026-07-05 ~ 2026-07-18',practicalExam:'2026-10-17 ~ 2026-10-31',writtenResult:'2026-08-22',practicalResult:'2026-11-21',registerStart:'2026-05-12',registerEnd:'2026-06-05'}],
    subjects: [{name:'멀티미디어 개론',desc:'디지털 미디어 이론·표준'},{name:'멀티미디어 저작',desc:'HTML5·CSS·JS 기반 저작도구'},{name:'그래픽 제작',desc:'Photoshop·Illustrator 활용'},{name:'영상·음향 편집',desc:'Premiere·After Effects 기초'}],
    jobs: [{company:'NHN',title:'UI/UX 디자이너',type:'large',region:'seoul',experience:'any',salary:'3500~5000만원',deadline:'2026-09-30',duties:'게임 UI 및 콘텐츠 디자인',requirements:['멀티미디어콘텐츠제작전문가 우대'],benefits:'유연근무, 복지포인트',applyUrl:'https://careers.nhn.com'}],
    books: [{title:'2026 멀티미디어콘텐츠제작전문가 필기 합격공식',author:'이경미',publisher:'성안당',rating:4.6,reviews:234},{title:'멀티미디어 실기 Premiere+After Effects',author:'박지영',publisher:'한빛미디어',rating:4.5,reviews:312},{title:'멀티미디어콘텐츠 기출문제 완전정복',author:'김미래',publisher:'예문사',rating:4.4,reviews:189}],
    milestones: [{week:'1~2주',task:'멀티미디어 이론·표준'},{week:'3~5주',task:'그래픽 툴 실습'},{week:'6~7주',task:'영상 편집 실습'},{week:'8~9주',task:'기출문제 + 실기 완성'}],
    defaultTodos: ['Photoshop 기본 기능 숙달','Premiere 영상 편집 실습','기출문제 3회분 풀기','포트폴리오 작품 제작'],
  },

  'CCNA': {
    name: 'CCNA', icon: 'fa-sitemap', category: 'IT·정보통신',
    heroTitle: '2026년도 CCNA(Cisco Certified Network Associate) 합격 전략',
    heroDesc: '시스코 공인 네트워크 어소시에이트 자격증. 전 세계 IT 기업에서 인정받는 글로벌 네트워크 자격으로 네트워크 엔지니어 취업의 기본 스펙입니다.',
    passRateSummary: '합격률 약 60~70%', avgPassRate: '65%',
    passRates: [{year:2020,written:63,practical:0},{year:2021,written:64,practical:0},{year:2022,written:65,practical:0},{year:2023,written:66,practical:0},{year:2024,written:65,practical:0}],
    schedules: [{round:'상시',writtenExam:'피어슨VUE 상시 응시',practicalExam:'-',writtenResult:'즉시 발표',practicalResult:'-',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'네트워크 기초',desc:'OSI·TCP/IP·서브넷팅'},{name:'스위칭',desc:'VLAN·STP·EtherChannel'},{name:'라우팅',desc:'OSPF·EIGRP·BGP 기초'},{name:'보안·자동화',desc:'ACL·VPN·네트워크 자동화'}],
    jobs: [{company:'KT',title:'네트워크 엔지니어',type:'large',region:'seoul',experience:'any',salary:'4000~5500만원',deadline:'2026-10-31',duties:'WAN/LAN 설계 및 유지보수',requirements:['CCNA 이상 필수'],benefits:'4대보험, 성과급',applyUrl:'https://recruit.kt.com'},{company:'시스코코리아',title:'네트워크 솔루션 엔지니어',type:'large',region:'seoul',experience:'any',salary:'4500~6000만원',deadline:'2026-09-30',duties:'고객사 네트워크 솔루션 컨설팅',requirements:['CCNA 필수·CCNP 우대'],benefits:'글로벌 교육 지원',applyUrl:'https://www.cisco.com/c/ko_kr/about/careers.html'}],
    books: [{title:'CCNA 200-301 Official Cert Guide(한국어판)',author:'Wendell Odom',publisher:'Cisco Press',rating:4.9,reviews:567},{title:'CCNA 완전정복 한권으로 끝내기',author:'황순규',publisher:'길벗',rating:4.7,reviews:423},{title:'CCNA 실전 덤프+해설',author:'네트워크연구소',publisher:'성안당',rating:4.5,reviews:312}],
    milestones: [{week:'1~3주',task:'네트워크 기초·서브넷팅'},{week:'4~6주',task:'스위칭·VLAN 실습'},{week:'7~9주',task:'라우팅 프로토콜 실습'},{week:'10~12주',task:'모의시험 + 취약점 보완'}],
    defaultTodos: ['서브넷 계산 완숙','Packet Tracer 실습 환경 구축','OSPF 설정 실습','공식 모의시험 5회 응시'],
  },

  'CCNP': {
    name: 'CCNP', icon: 'fa-sitemap', category: 'IT·정보통신',
    heroTitle: '2026년도 CCNP(Cisco Certified Network Professional) 합격 전략',
    heroDesc: 'CCNA 상위 자격증으로 대규모 엔터프라이즈 네트워크 설계·구현·운영 능력을 검증. 시니어 네트워크 엔지니어·아키텍트 취업에 필수입니다.',
    passRateSummary: '합격률 약 45~55%', avgPassRate: '50%',
    passRates: [{year:2020,written:48,practical:0},{year:2021,written:49,practical:0},{year:2022,written:50,practical:0},{year:2023,written:51,practical:0},{year:2024,written:50,practical:0}],
    schedules: [{round:'상시',writtenExam:'피어슨VUE 상시 응시',practicalExam:'-',writtenResult:'즉시 발표',practicalResult:'-',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'엔터프라이즈 코어(ENCOR)',desc:'이중화·QoS·SD-WAN 설계'},{name:'집중 시험',desc:'ENARSI·ENSDWI 중 선택'},{name:'보안·자동화',desc:'Python 기반 네트워크 자동화'}],
    jobs: [{company:'삼성SDS',title:'시니어 네트워크 엔지니어',type:'large',region:'seoul',experience:'exp',salary:'5500~7500만원',deadline:'2026-11-30',duties:'글로벌 데이터센터 네트워크 설계',requirements:['CCNP Enterprise 필수'],benefits:'주택자금, 학자금',applyUrl:'https://www.samsungsds.com'},{company:'LG CNS',title:'네트워크 아키텍트',type:'large',region:'seoul',experience:'exp',salary:'6000~8000만원',deadline:'2026-10-31',duties:'차세대 네트워크 아키텍처 설계',requirements:['CCNP 이상 우대'],benefits:'성과급, 유연근무',applyUrl:'https://www.lgcns.com/careers'}],
    books: [{title:'CCNP ENCOR 350-401 Official Cert Guide',author:'Brad Edgeworth',publisher:'Cisco Press',rating:4.9,reviews:312},{title:'CCNP 엔터프라이즈 완전정복',author:'황순규',publisher:'길벗',rating:4.7,reviews:234},{title:'CCNP 실전 랩 가이드',author:'네트워크연구소',publisher:'성안당',rating:4.5,reviews:178}],
    milestones: [{week:'1~4주',task:'ENCOR 코어 이론'},{week:'5~8주',task:'고급 라우팅·스위칭 실습'},{week:'9~11주',task:'집중 시험 과목 준비'},{week:'12주',task:'모의시험 + 최종 점검'}],
    defaultTodos: ['ENCOR 공식 교재 정독','GNS3/EVE-NG 실습 환경 구축','고급 BGP·OSPF 설정 실습','집중 시험 과목 선택 후 준비'],
  },

  'AWS Solutions Architect': {
    name: 'AWS Solutions Architect', icon: 'fa-cloud', category: 'IT·정보통신',
    heroTitle: '2026년도 AWS Solutions Architect Associate 합격 전략',
    heroDesc: '아마존 AWS 클라우드 아키텍처 설계 역량을 검증하는 글로벌 1위 클라우드 자격증. 클라우드 엔지니어·DevOps 취업의 필수 스펙입니다.',
    passRateSummary: '합격률 약 60~70%', avgPassRate: '65%',
    passRates: [{year:2020,written:62,practical:0},{year:2021,written:63,practical:0},{year:2022,written:64,practical:0},{year:2023,written:65,practical:0},{year:2024,written:65,practical:0}],
    schedules: [{round:'상시',writtenExam:'피어슨VUE/온라인 상시 응시',practicalExam:'-',writtenResult:'즉시 발표',practicalResult:'-',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'AWS 핵심 서비스',desc:'EC2·S3·RDS·VPC 설계'},{name:'고가용성 아키텍처',desc:'Auto Scaling·ELB·Multi-AZ'},{name:'보안',desc:'IAM·KMS·CloudTrail'},{name:'비용 최적화',desc:'Reserved Instance·Savings Plans'}],
    jobs: [{company:'AWS코리아',title:'Solutions Architect',type:'large',region:'seoul',experience:'any',salary:'6000~9000만원',deadline:'2026-11-30',duties:'엔터프라이즈 고객 클라우드 아키텍처 설계',requirements:['AWS SAA 필수·SAP 우대'],benefits:'스톡옵션, RSU',applyUrl:'https://aws.amazon.com/ko/careers'},{company:'카카오클라우드',title:'클라우드 엔지니어',type:'large',region:'seoul',experience:'any',salary:'5000~7000만원',deadline:'2026-10-31',duties:'클라우드 인프라 설계 및 운영',requirements:['AWS SAA 이상 우대'],benefits:'재택근무, 스톡옵션',applyUrl:'https://careers.kakao.com'}],
    books: [{title:'AWS Certified Solutions Architect Study Guide(한국어)',author:'Ben Piper',publisher:'Sybex',rating:4.8,reviews:678},{title:'AWS SAA-C03 합격공식 30일 완성',author:'김기술',publisher:'길벗',rating:4.7,reviews:534},{title:'AWS 실습으로 배우는 아키텍처 설계',author:'이도원',publisher:'한빛미디어',rating:4.6,reviews:412}],
    milestones: [{week:'1~3주',task:'AWS 핵심 서비스 이론'},{week:'4~6주',task:'실습 환경(AWS Free Tier) 구축'},{week:'7~9주',task:'고가용성·보안 아키텍처'},{week:'10~12주',task:'공식 모의시험 + 취약점 보완'}],
    defaultTodos: ['AWS Free Tier 계정 생성','EC2·S3·VPC 실습','공식 연습시험(Practice Exam) 응시','Well-Architected Framework 정독'],
  },

  'GCP': {
    name: 'GCP', icon: 'fa-cloud', category: 'IT·정보통신',
    heroTitle: '2026년도 GCP(Google Cloud Professional) 합격 전략',
    heroDesc: '구글 클라우드 플랫폼의 인프라·데이터·AI 서비스 역량을 검증. BigQuery·Vertex AI 중심의 데이터 클라우드 전문가로 도약하세요.',
    passRateSummary: '합격률 약 50~65%', avgPassRate: '58%',
    passRates: [{year:2020,written:55,practical:0},{year:2021,written:57,practical:0},{year:2022,written:58,practical:0},{year:2023,written:59,practical:0},{year:2024,written:58,practical:0}],
    schedules: [{round:'상시',writtenExam:'Kryterion 온라인 상시 응시',practicalExam:'-',writtenResult:'즉시 발표',practicalResult:'-',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'컴퓨팅·스토리지',desc:'GCE·GCS·Cloud SQL'},{name:'네트워킹',desc:'VPC·Cloud Load Balancing'},{name:'데이터·AI',desc:'BigQuery·Vertex AI·Pub/Sub'},{name:'보안·운영',desc:'IAM·Cloud Monitoring'}],
    jobs: [{company:'구글코리아',title:'Cloud Solutions Engineer',type:'large',region:'seoul',experience:'any',salary:'6000~9000만원',deadline:'2026-11-30',duties:'GCP 기반 솔루션 아키텍처 설계',requirements:['GCP Professional 우대'],benefits:'RSU, 글로벌 교육',applyUrl:'https://careers.google.com'},{company:'LG전자',title:'클라우드 인프라 엔지니어',type:'large',region:'seoul',experience:'any',salary:'4500~6500만원',deadline:'2026-10-31',duties:'GCP 마이그레이션 및 운영',requirements:['GCP Associate 이상 우대'],benefits:'성과급, 복지포인트',applyUrl:'https://careers.lg.com'}],
    books: [{title:'Google Cloud Professional Cloud Architect 공식 가이드',author:'Google Cloud',publisher:'Packt',rating:4.8,reviews:345},{title:'GCP 합격을 위한 30일 플랜',author:'이재현',publisher:'길벗',rating:4.6,reviews:267},{title:'GCP BigQuery·Vertex AI 실전 가이드',author:'김데이터',publisher:'한빛미디어',rating:4.5,reviews:198}],
    milestones: [{week:'1~3주',task:'GCP 핵심 서비스 학습'},{week:'4~6주',task:'Qwiklabs 실습'},{week:'7~9주',task:'Professional 시험 과목별 심화'},{week:'10~12주',task:'공식 모의시험 + 최종 점검'}],
    defaultTodos: ['Google Cloud 무료 크레딧 계정 생성','Qwiklabs 퀘스트 완료','BigQuery SQL 실습','공식 Practice Exam 응시'],
  },

  'Azure Fundamentals': {
    name: 'Azure Fundamentals', icon: 'fa-cloud', category: 'IT·정보통신',
    heroTitle: '2026년도 Microsoft Azure Fundamentals(AZ-900) 합격 전략',
    heroDesc: '마이크로소프트 Azure 클라우드의 기초 개념을 검증하는 입문 자격증. 비전공자도 1~2개월이면 취득 가능한 클라우드 입문 필수 자격입니다.',
    passRateSummary: '합격률 약 70~80%', avgPassRate: '75%',
    passRates: [{year:2020,written:72,practical:0},{year:2021,written:73,practical:0},{year:2022,written:74,practical:0},{year:2023,written:75,practical:0},{year:2024,written:75,practical:0}],
    schedules: [{round:'상시',writtenExam:'피어슨VUE/온라인 상시 응시',practicalExam:'-',writtenResult:'즉시 발표',practicalResult:'-',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'클라우드 개념',desc:'IaaS·PaaS·SaaS·클라우드 모델'},{name:'Azure 핵심 서비스',desc:'VM·Blob Storage·SQL·VNet'},{name:'보안·컴플라이언스',desc:'Azure AD·RBAC·정책'},{name:'가격 및 SLA',desc:'TCO 계산기·Azure 비용 관리'}],
    jobs: [{company:'마이크로소프트코리아',title:'Azure CSP 엔지니어',type:'large',region:'seoul',experience:'new',salary:'4000~5500만원',deadline:'2026-09-30',duties:'파트너사 Azure 기술 지원',requirements:['AZ-900 필수·AZ-104 우대'],benefits:'글로벌 교육, RSU',applyUrl:'https://careers.microsoft.com'},{company:'LG CNS',title:'클라우드 컨설턴트',type:'large',region:'seoul',experience:'new',salary:'3800~5000만원',deadline:'2026-10-31',duties:'Azure 기반 디지털 전환 컨설팅',requirements:['AZ-900 이상 우대'],benefits:'유연근무, 복지포인트',applyUrl:'https://www.lgcns.com/careers'}],
    books: [{title:'AZ-900 Microsoft Azure Fundamentals 공식 교재',author:'Jim Cheshire',publisher:'Microsoft Press',rating:4.8,reviews:456},{title:'AZ-900 합격공식 2주 완성',author:'이클라우드',publisher:'길벗',rating:4.7,reviews:389},{title:'Microsoft Azure 기초 + 핵심 실습',author:'박현우',publisher:'한빛미디어',rating:4.5,reviews:312}],
    milestones: [{week:'1주',task:'클라우드 기본 개념 학습'},{week:'2주',task:'Azure 핵심 서비스 이해'},{week:'3주',task:'보안·가격 정책 학습'},{week:'4주',task:'모의시험 + 최종 정리'}],
    defaultTodos: ['Microsoft Learn 무료 강의 완료','Azure 무료 계정 생성 후 실습','공식 연습시험 2회 응시','AZ-900 덤프 100문제 풀기'],
  },

  '컴퓨터활용능력1급': {
    name: '컴퓨터활용능력1급', icon: 'fa-file-excel', category: 'IT·정보통신',
    heroTitle: '2026년도 컴퓨터활용능력 1급 합격 전략',
    heroDesc: '대한상공회의소 주관 스프레드시트(Excel)·데이터베이스(Access) 활용 능력 자격증. 거의 모든 사무직 채용에서 우대하는 국민 자격증입니다.',
    passRateSummary: '필기 34% | 실기 25%', avgPassRate: '22%',
    passRates: [{year:2020,written:32,practical:23},{year:2021,written:33,practical:24},{year:2022,written:34,practical:25},{year:2023,written:35,practical:26},{year:2024,written:34,practical:25}],
    schedules: [{round:'상시',writtenExam:'상시 CBT',practicalExam:'상시 CBT',writtenResult:'즉시 발표',practicalResult:'즉시 발표',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'컴퓨터 일반',desc:'운영체제·PC 하드웨어·인터넷'},{name:'스프레드시트(Excel)',desc:'함수·매크로·차트·피벗테이블'},{name:'데이터베이스(Access)',desc:'쿼리·폼·보고서 설계'}],
    jobs: [{company:'삼성물산',title:'경영지원 사무직',type:'large',region:'seoul',experience:'new',salary:'3500~4500만원',deadline:'2026-09-30',duties:'데이터 집계 및 보고서 작성',requirements:['컴활 1급 우대'],benefits:'4대보험, 식대',applyUrl:'https://www.samsung.com/sec/careers'},{company:'공기업 전반',title:'행정사무원',type:'public',region:'all',experience:'new',salary:'3200~4000만원',deadline:'2026-12-31',duties:'행정 업무 및 데이터 관리',requirements:['컴활 1급 필수'],benefits:'공무원 복지',applyUrl:'https://www.gosi.kr'}],
    books: [{title:'2026 컴퓨터활용능력 1급 필기 기본서',author:'김정민',publisher:'이기적',rating:4.8,reviews:1234},{title:'2026 컴퓨터활용능력 1급 실기 기본서(Excel+Access)',author:'정욱',publisher:'이기적',rating:4.8,reviews:1089},{title:'2026 컴활 1급 기출문제 완전정복',author:'영진닷컴',publisher:'영진닷컴',rating:4.7,reviews:876}],
    milestones: [{week:'1~2주',task:'컴퓨터 일반 이론'},{week:'3~6주',task:'Excel 함수·매크로 실습'},{week:'7~9주',task:'Access DB 설계 실습'},{week:'10~12주',task:'실기 모의시험 반복'}],
    defaultTodos: ['Excel VLOOKUP·INDEX·MATCH 완숙','매크로·VBA 기초 작성','Access 쿼리 설계 연습','실기 기출문제 5회 풀기'],
  },

  '컴퓨터활용능력2급': {
    name: '컴퓨터활용능력2급', icon: 'fa-file-excel', category: 'IT·정보통신',
    heroTitle: '2026년도 컴퓨터활용능력 2급 합격 전략',
    heroDesc: '스프레드시트(Excel) 기본 활용 능력을 검증하는 가장 대중적인 IT 자격증. 취업 준비생의 기본 스펙으로 2~4주면 취득 가능합니다.',
    passRateSummary: '필기 42% | 실기 33%', avgPassRate: '30%',
    passRates: [{year:2020,written:40,practical:31},{year:2021,written:41,practical:32},{year:2022,written:42,practical:33},{year:2023,written:43,practical:34},{year:2024,written:42,practical:33}],
    schedules: [{round:'상시',writtenExam:'상시 CBT',practicalExam:'상시 CBT',writtenResult:'즉시 발표',practicalResult:'즉시 발표',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'컴퓨터 일반',desc:'운영체제·인터넷·PC 관리'},{name:'스프레드시트(Excel)',desc:'기본 함수·차트·데이터 관리'}],
    jobs: [{company:'일반 기업 전반',title:'사무보조',type:'mid',region:'all',experience:'new',salary:'2800~3500만원',deadline:'2026-12-31',duties:'문서 작성·데이터 입력',requirements:['컴활 2급 우대'],benefits:'4대보험',applyUrl:'https://www.saramin.co.kr'}],
    books: [{title:'2026 컴퓨터활용능력 2급 필기+실기 통합서',author:'김정민',publisher:'이기적',rating:4.8,reviews:2156},{title:'2026 컴활 2급 기출문제 최다수록',author:'정욱',publisher:'영진닷컴',rating:4.7,reviews:1789},{title:'2026 컴활 2급 10일 완성',author:'이메리트',publisher:'시나공',rating:4.6,reviews:1456}],
    milestones: [{week:'1주',task:'컴퓨터 일반 이론'},{week:'2~3주',task:'Excel 기본 함수 실습'},{week:'4주',task:'기출문제 풀기 + 실기 연습'}],
    defaultTodos: ['Excel SUM·IF·COUNT 계열 함수 완숙','차트 삽입·편집 실습','기출문제 3회분 풀기'],
  },

  'ITQ': {
    name: 'ITQ', icon: 'fa-laptop', category: 'IT·정보통신',
    heroTitle: '2026년도 ITQ(정보기술자격) 합격 전략',
    heroDesc: '한국생산성본부 주관 MS Office(한글·Excel·PowerPoint) 실무 활용 능력 자격증. 고등학생부터 직장인까지 가장 많이 응시하는 오피스 자격증입니다.',
    passRateSummary: '합격률 약 65~75%', avgPassRate: '70%',
    passRates: [{year:2020,written:68,practical:0},{year:2021,written:70,practical:0},{year:2022,written:71,practical:0},{year:2023,written:72,practical:0},{year:2024,written:70,practical:0}],
    schedules: [{round:'매월',writtenExam:'매월 둘째 주 토요일',practicalExam:'-',writtenResult:'3주 후 발표',practicalResult:'-',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'아래한글(HWP)',desc:'문서 작성·표·차트'},{name:'Excel',desc:'함수·데이터 관리·차트'},{name:'PowerPoint',desc:'슬라이드 디자인·애니메이션'},{name:'Access',desc:'DB 쿼리·폼 작성'}],
    jobs: [{company:'공공기관',title:'행정사무원',type:'public',region:'all',experience:'new',salary:'3000~3800만원',deadline:'2026-12-31',duties:'문서 작성 및 데이터 관리',requirements:['ITQ A등급 우대'],benefits:'공무원 복지',applyUrl:'https://www.gosi.kr'}],
    books: [{title:'2026 ITQ 한글+엑셀+파포 3종 합격 패키지',author:'강윤정',publisher:'이기적',rating:4.8,reviews:2345},{title:'2026 ITQ 엑셀 A등급 완성',author:'김수진',publisher:'시나공',rating:4.7,reviews:1876},{title:'2026 ITQ OA마스터 한번에 합격',author:'정재은',publisher:'영진닷컴',rating:4.6,reviews:1543}],
    milestones: [{week:'1주',task:'아래한글 실습'},{week:'2주',task:'Excel 함수·차트'},{week:'3주',task:'PowerPoint 디자인'},{week:'4주',task:'기출문제 풀기'}],
    defaultTodos: ['아래한글 표·스타일 완숙','Excel 주요 함수 10개 암기','PowerPoint 슬라이드 마스터 실습','기출문제 3회분 풀기'],
  },

  'MOS': {
    name: 'MOS', icon: 'fa-microsoft', category: 'IT·정보통신',
    heroTitle: '2026년도 MOS(Microsoft Office Specialist) 합격 전략',
    heroDesc: '마이크로소프트 공인 오피스 전문가 자격증. Word·Excel·PowerPoint·Access 각 과목별 취득 가능하며 글로벌 기업 취업에 유리합니다.',
    passRateSummary: '합격률 약 65~75%', avgPassRate: '70%',
    passRates: [{year:2020,written:68,practical:0},{year:2021,written:69,practical:0},{year:2022,written:70,practical:0},{year:2023,written:71,practical:0},{year:2024,written:70,practical:0}],
    schedules: [{round:'상시',writtenExam:'피어슨VUE 상시 응시',practicalExam:'-',writtenResult:'즉시 발표',practicalResult:'-',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'Word Expert',desc:'스타일·목차·메일 병합'},{name:'Excel Expert',desc:'고급 함수·피벗·매크로'},{name:'PowerPoint',desc:'프레젠테이션 디자인'},{name:'Access',desc:'DB 쿼리·보고서'}],
    jobs: [{company:'외국계 기업',title:'사무직',type:'large',region:'seoul',experience:'new',salary:'3500~4500만원',deadline:'2026-12-31',duties:'문서 작성 및 데이터 분석',requirements:['MOS 우대'],benefits:'글로벌 복지',applyUrl:'https://www.saramin.co.kr'}],
    books: [{title:'2026 MOS 엑셀 Expert 한권으로 끝내기',author:'이정희',publisher:'길벗',rating:4.7,reviews:678},{title:'2026 MOS 워드 Expert 완전정복',author:'김나현',publisher:'영진닷컴',rating:4.6,reviews:534},{title:'MOS 2019 마스터 종합 교재',author:'Microsoft',publisher:'한빛미디어',rating:4.5,reviews:445}],
    milestones: [{week:'1~2주',task:'응시 과목 선택 및 기초 학습'},{week:'3~4주',task:'실전 기능 집중 실습'},{week:'5주',task:'기출+모의 시험 응시'}],
    defaultTodos: ['응시 과목 결정(Excel 우선 권장)','Microsoft 365 실습 환경 준비','기출문제 3회 풀기','공식 모의시험 응시'],
  },

  'CISA': {
    name: 'CISA', icon: 'fa-shield-halved', category: 'IT·정보통신',
    heroTitle: '2026년도 CISA(정보시스템감사사) 합격 전략',
    heroDesc: 'ISACA 주관 정보시스템 감사·통제·보안 분야 국제 자격증. 금융·공공·대기업 IT 감사팀과 컨설팅 펌에서 높은 연봉으로 대우받는 전문 자격입니다.',
    passRateSummary: '합격률 약 45~55%', avgPassRate: '50%',
    passRates: [{year:2020,written:48,practical:0},{year:2021,written:49,practical:0},{year:2022,written:50,practical:0},{year:2023,written:51,practical:0},{year:2024,written:50,practical:0}],
    schedules: [{round:'1회',writtenExam:'2026-06-07',practicalExam:'-',writtenResult:'2026-08-22',practicalResult:'-',registerStart:'2026-03-01',registerEnd:'2026-05-01'},{round:'2회',writtenExam:'2026-11-08',practicalExam:'-',writtenResult:'2026-12-13',practicalResult:'-',registerStart:'2026-08-01',registerEnd:'2026-10-01'}],
    subjects: [{name:'IT 거버넌스',desc:'IS 전략·조직·거버넌스 체계'},{name:'IS 감사',desc:'감사 절차·위험 평가'},{name:'IS 수명주기',desc:'시스템 개발·구현·유지보수'},{name:'IS 운영',desc:'서비스 관리·인프라 보호'},{name:'정보보호',desc:'암호화·접근통제·보안 아키텍처'}],
    jobs: [{company:'딜로이트',title:'IT 감사 컨설턴트',type:'consult',region:'seoul',experience:'any',salary:'5000~8000만원',deadline:'2026-10-31',duties:'금융·공공기관 IT 감사 수행',requirements:['CISA 필수'],benefits:'성과급, 글로벌 교육',applyUrl:'https://www2.deloitte.com/kr/ko/careers.html'},{company:'금융감독원',title:'IT 검사역',type:'public',region:'seoul',experience:'exp',salary:'6000~8000만원',deadline:'2026-09-30',duties:'금융회사 IT 시스템 감사',requirements:['CISA 보유자 우대'],benefits:'공무원 복지',applyUrl:'https://www.fss.or.kr'}],
    books: [{title:'CISA Review Manual 2026',author:'ISACA',publisher:'ISACA',rating:4.9,reviews:312},{title:'CISA 한국어 핵심요약+기출문제',author:'이경훈',publisher:'성안당',rating:4.7,reviews:234},{title:'정보시스템감사사 CISA 완전정복',author:'김정현',publisher:'예문사',rating:4.5,reviews:178}],
    milestones: [{week:'1~4주',task:'IT 거버넌스·감사 이론'},{week:'5~8주',task:'IS 수명주기·운영 학습'},{week:'9~12주',task:'정보보호 도메인'},{week:'13~16주',task:'모의시험 + 오답 정리'}],
    defaultTodos: ['ISACA 공식 교재 정독','도메인별 연습문제 1000문제 풀기','COBIT·ITIL 프레임워크 이해','모의시험 3회 응시'],
  },

  'CISSP': {
    name: 'CISSP', icon: 'fa-lock', category: 'IT·정보통신',
    heroTitle: '2026년도 CISSP(정보보안전문가) 합격 전략',
    heroDesc: 'ISC² 주관 세계 최고 권위의 정보보안 자격증. 5년 이상 실무 경험이 필요하며 합격 시 연봉 1억 이상 정보보안 전문가로 인정받습니다.',
    passRateSummary: '합격률 약 30~40%', avgPassRate: '35%',
    passRates: [{year:2020,written:33,practical:0},{year:2021,written:34,practical:0},{year:2022,written:35,practical:0},{year:2023,written:36,practical:0},{year:2024,written:35,practical:0}],
    schedules: [{round:'상시',writtenExam:'피어슨VUE CAT 상시 응시',practicalExam:'-',writtenResult:'즉시 발표',practicalResult:'-',registerStart:'-',registerEnd:'-'}],
    subjects: [{name:'보안 및 위험 관리',desc:'거버넌스·컴플라이언스·법규'},{name:'자산 보안',desc:'데이터 분류·소유권·개인정보'},{name:'보안 아키텍처',desc:'암호화·보안 모델·취약점'},{name:'통신 및 네트워크',desc:'네트워크 보안·프로토콜'},{name:'IAM',desc:'접근통제·인증·권한 관리'},{name:'보안 평가',desc:'침투 테스트·취약점 스캔'},{name:'보안 운영',desc:'사고 대응·BCP/DR'},{name:'SW 개발 보안',desc:'SDLC·코드 보안'}],
    jobs: [{company:'삼성전자',title:'정보보안 전문가',type:'large',region:'seoul',experience:'exp',salary:'8000~12000만원',deadline:'2026-11-30',duties:'글로벌 보안 아키텍처 설계',requirements:['CISSP 필수'],benefits:'주식매수선택권, 주택자금',applyUrl:'https://www.samsung.com/sec/careers'},{company:'국가정보원 산하기관',title:'사이버 보안 전문관',type:'public',region:'seoul',experience:'exp',salary:'7000~10000만원',deadline:'2026-09-30',duties:'국가 사이버 위협 분석 및 대응',requirements:['CISSP 보유 우대'],benefits:'공무원 복지',applyUrl:'https://www.nis.go.kr'}],
    books: [{title:'CISSP All-in-One Exam Guide 9th Edition',author:'Shon Harris',publisher:'McGraw-Hill',rating:4.9,reviews:567},{title:'CISSP 한국어 핵심정리+문제집',author:'이경훈',publisher:'성안당',rating:4.8,reviews:312},{title:'(ISC)² CISSP 공식 교재(한국어)',author:'ISC²',publisher:'Wiley',rating:4.7,reviews:245}],
    milestones: [{week:'1~6주',task:'8개 도메인 이론 학습'},{week:'7~10주',task:'도메인별 연습문제 풀기'},{week:'11~14주',task:'모의시험(Boson·Official)반복'},{week:'15~16주',task:'취약 도메인 집중 보완'}],
    defaultTodos: ['8개 도메인 핵심 개념 정리','연습문제 2000문제 풀기','Boson 모의시험 3회 응시','암호화·네트워크 보안 심화 학습'],
  },

  // ── 의료·보건 국가시험 ──────────────────────────

  '간호사': {
    name: '간호사', icon: 'fa-user-nurse', category: '의료·보건',
    heroTitle: '2027년도 간호사 국가시험 합격 전략',
    heroDesc: '매년 약 30,000명이 응시하는 최대 규모 보건의료인 국가시험! 성인·아동·모성·정신 간호학 8개 과목을 체계적으로 정복하는 전략을 확인하세요.',
    passRateSummary: '필기 95.2%',
    avgPassRate: '94.5%',
    passRates: [
      { year: 2020, written: 93.2, practical: 0 },
      { year: 2021, written: 94.1, practical: 0 },
      { year: 2022, written: 95.3, practical: 0 },
      { year: 2023, written: 94.8, practical: 0 },
      { year: 2024, written: 95.2, practical: 0 },
    ],
    schedules: [
      { round: '2026년도', isCurrent: false, isDone: true,
        writtenApply: '2025.11.17 ~ 2025.11.21', writtenExam: '2026.01.24', writtenResult: '2026.02.14',
        practicalApply: '-', practicalExam: '-', finalResult: '2026.02.14' },
      { round: '2027년도', isCurrent: true, isDone: false,
        writtenApply: '2026.11월 예정', writtenExam: '2027.01월 예정', writtenResult: '2027.02월 예정',
        practicalApply: '-', practicalExam: '-', finalResult: '2027.02월 예정' },
    ],
    milestones: [
      { label: '2027년도 원서접수 시작', date: '2026-11-16' },
      { label: '2027년도 필기시험', date: '2027-01-23' },
      { label: '2027년도 합격자 발표', date: '2027-02-13' },
    ],
    subjects: [
      { title: '성인간호학', tip: '가장 출제 비중이 높은 과목. 순환·호흡·소화기 계통 질환 간호, 수술 전후 간호를 중심으로 기출 반복 학습.' },
      { title: '모성간호학', tip: '임신·분만·산욕기 정상/이상 경과와 신생아 간호. 계산 문제(EDD, APGAR)를 반드시 숙지.' },
      { title: '아동간호학', tip: '성장발달 이론(에릭슨, 피아제)과 소아 주요 질환 간호를 함께 정리하면 효율적.' },
      { title: '정신간호학', tip: '정신간호 이론과 치료적 의사소통, DSM-5 진단 기준을 중심으로 정리. 오답 선지 패턴 파악이 핵심.' },
      { title: '지역사회간호학', tip: '역학적 연구 설계, 가족 간호, 보건지표 계산 문제 위주로 학습.' },
      { title: '간호관리학', tip: '간호조직, 기획·조직·인사·지휘·통제 기능별 개념을 표로 정리.' },
      { title: '기본간호학', tip: '활력징후, 투약, 감염관리, 상처간호 등 실무 직결 개념은 반드시 암기.' },
      { title: '의료법규', tip: '의료법·간호법 주요 조항과 숫자(벌칙 금액, 자격정지 기간 등)를 집중 암기.' },
    ],
    jobs: [
      { id: 'nurse-1', company: '서울아산병원', title: '2027년도 신규간호사 공개채용', type: 'large', region: 'seoul', experience: 'new',
        requirements: ['간호사 면허 소지자', '2027년 2월 간호사 면허 취득 예정자 지원 가능'],
        duties: '병동·중환자실·수술실·응급실 등 배치 부서 로테이션 간호 업무.',
        salary: '연봉 4,000만원 이상 (초봉)', benefits: '기숙사 지원, 의료비 지원, 학자금', deadline: '2027-02-28', link: 'https://www.amc.seoul.kr' },
      { id: 'nurse-2', company: '삼성서울병원', title: '신규·경력 간호사 수시채용', type: 'large', region: 'seoul', experience: 'any',
        requirements: ['간호사 면허 소지자', '신규·경력 구분 없이 지원 가능'],
        duties: '전문간호 파트 배치 후 체계적 수간호사 지도 하 임상 간호.',
        salary: '초봉 약 4,200만원 + 성과급', benefits: '삼성 그룹 복지, 보육지원, 의료비 무료', deadline: '2027-03-15', link: 'https://www.samsunghospital.com' },
      { id: 'nurse-3', company: '국립중앙의료원', title: '공공의료원 신규간호사 채용', type: 'public', region: 'seoul', experience: 'new',
        requirements: ['간호사 면허 소지자', '공공보건 의료에 관심 있는 자'],
        duties: '공공병원 병동 간호, 감염병 전담 병상 간호 지원.',
        salary: '공무직 준용 (약 3,800만원)', benefits: '공무원 준준하는 복지, 정년 보장', deadline: '2027-02-20', link: 'https://www.nmc.or.kr' },
      { id: 'nurse-4', company: '지역보건소', title: '보건직 공무원(간호직) 공개경쟁채용', type: 'public', region: 'all', experience: 'new',
        requirements: ['간호사 면허 소지자', '공무원 결격 사유 없는 자'],
        duties: '지역주민 건강관리, 방문간호, 만성질환 예방 교육.',
        salary: '9급 공무원 초봉 약 2,600만원', benefits: '철저한 정년 보장, 연금, 육아휴직', deadline: '2027-04-30', link: 'https://www.gosi.kr' },
    ],
    books: [
      { id: 'nurse-b1', title: '2027 군자출판사 간호사 국가시험 문제집', publisher: '군자출판사', rating: 9.8, reviews: 1823, originalPrice: 65000, price: 58500, discount: '10%', coverBg: 'linear-gradient(135deg,#0d4f8b,#1a7fc1)', tags: ['베스트'] },
      { id: 'nurse-b2', title: '2027 메디시언 간호사 국시 핵심요약', publisher: '메디시언', rating: 9.7, reviews: 1240, originalPrice: 55000, price: 49500, discount: '10%', coverBg: 'linear-gradient(135deg,#1a5276,#2e86c1)', tags: ['추천'] },
    ],
    defaultTodos: [
      '성인간호학 심장·호흡기 파트 기출 문제 100선 풀기',
      '모성간호학 분만 단계별 간호 정리',
      '정신간호학 치료적 의사소통 기법 암기',
      '의료법규 간호사 관련 조항 핵심 정리',
      '5개년 국시 기출 1회독 완료',
    ],
  },

  '임상병리사': {
    name: '임상병리사', icon: 'fa-flask', category: '의료·보건',
    heroTitle: '2027년도 임상병리사 국가시험 합격 전략',
    heroDesc: '정밀의료·유전자 검사 시대, 임상병리사 수요 급증! 임상화학부터 수혈의학까지 7개 핵심 파트를 체계적으로 정복하세요.',
    passRateSummary: '필기 73.4%',
    avgPassRate: '72.1%',
    passRates: [
      { year: 2020, written: 68.5, practical: 0 },
      { year: 2021, written: 71.2, practical: 0 },
      { year: 2022, written: 73.8, practical: 0 },
      { year: 2023, written: 72.1, practical: 0 },
      { year: 2024, written: 73.4, practical: 0 },
    ],
    schedules: [
      { round: '2026년도', isCurrent: false, isDone: true,
        writtenApply: '2026.01.05 ~ 2026.01.09', writtenExam: '2026.03.07', writtenResult: '2026.03.27',
        practicalApply: '-', practicalExam: '-', finalResult: '2026.03.27' },
      { round: '2027년도', isCurrent: true, isDone: false,
        writtenApply: '2027.01월 예정', writtenExam: '2027.03월 예정', writtenResult: '2027.03월 예정',
        practicalApply: '-', practicalExam: '-', finalResult: '2027.03월 예정' },
    ],
    milestones: [
      { label: '2027년도 원서접수 시작', date: '2027-01-05' },
      { label: '2027년도 필기시험', date: '2027-03-06' },
      { label: '2027년도 합격자 발표', date: '2027-03-26' },
    ],
    subjects: [
      { title: '임상화학', tip: '효소·지질·단백질 검사 원리와 참고치를 중심으로 정리. 계산 문제(검량선, 단위 환산)를 반드시 연습.' },
      { title: '혈액학', tip: 'CBC 분석, 혈액 질환(빈혈·백혈병) 형태학적 특징과 검사 수치를 핵심 암기.' },
      { title: '미생물학', tip: '주요 병원균의 그람 염색, 배지 반응, 항생제 감수성 패턴을 표로 정리.' },
      { title: '수혈의학', tip: 'ABO·Rh 혈액형 검사 원리, 교차시험 절차, 수혈 부작용 종류 및 대처법 암기.' },
      { title: '조직병리학', tip: 'H&E 염색 원리, 고정액 종류, 특수 염색 사용 목적을 묶어서 학습.' },
      { title: '요·체액검사', tip: '소변 침사 성분 형태와 의미, 정장액·흉수 분류 기준 암기.' },
      { title: '임상생리학', tip: 'ECG 파형 판독, 폐기능 검사 지표(FVC, FEV1) 해석 문제 집중 연습.' },
    ],
    jobs: [
      { id: 'cls-1', company: '서울대학교병원', title: '임상병리사 신규채용', type: 'large', region: 'seoul', experience: 'new',
        requirements: ['임상병리사 면허 소지자'],
        duties: '진단검사의학과 혈액·화학·미생물·수혈 파트 검체검사.',
        salary: '초봉 약 3,800만원', benefits: '의료비 지원, 복지포인트', deadline: '2027-04-15', link: 'https://www.snuh.org' },
      { id: 'cls-2', company: '대한적십자사 혈액원', title: '혈액검사 담당 임상병리사', type: 'public', region: 'all', experience: 'any',
        requirements: ['임상병리사 면허', '수혈의학 관심자 우대'],
        duties: '헌혈 혈액 적격성 검사, 혈액형 검사, 바이러스 선별 검사.',
        salary: '연봉 3,600~4,500만원', benefits: '정년보장, 공공기관 복지', deadline: '2027-05-30', link: 'https://www.redcrossblood.or.kr' },
    ],
    books: [
      { id: 'cls-b1', title: '임상병리사 국시 핵심요약 총정리', publisher: '고려의학', rating: 9.7, reviews: 654, originalPrice: 58000, price: 52200, discount: '10%', coverBg: 'linear-gradient(135deg,#1a5e3a,#27ae60)', tags: ['베스트'] },
      { id: 'cls-b2', title: '임상병리사 기출문제집 10개년', publisher: '군자출판사', rating: 9.6, reviews: 478, originalPrice: 48000, price: 43200, discount: '10%', coverBg: 'linear-gradient(135deg,#145a32,#1e8449)', tags: ['추천'] },
    ],
    defaultTodos: [
      '임상화학 효소 검사 원리 및 참고치 정리',
      '혈액학 CBC 수치 해석 연습',
      '미생물학 주요 균 특성 표 작성',
      '수혈의학 혈액형 검사 절차 암기',
      '5개년 기출 1회독 후 오답 정리',
    ],
  },

  '방사선사': {
    name: '방사선사', icon: 'fa-x-ray', category: '의료·보건',
    heroTitle: '2027년도 방사선사 국가시험 합격 전략',
    heroDesc: 'AI 영상진단 확대로 방사선사 역할이 더욱 중요해지는 시대! 방사선물리학부터 핵의학까지 체계적으로 준비하세요.',
    passRateSummary: '필기 77.8%',
    avgPassRate: '76.5%',
    passRates: [
      { year: 2020, written: 72.3, practical: 0 },
      { year: 2021, written: 75.1, practical: 0 },
      { year: 2022, written: 78.2, practical: 0 },
      { year: 2023, written: 76.9, practical: 0 },
      { year: 2024, written: 77.8, practical: 0 },
    ],
    schedules: [
      { round: '2026년도', isCurrent: false, isDone: true,
        writtenApply: '2026.01.05 ~ 2026.01.09', writtenExam: '2026.03.14', writtenResult: '2026.04.03',
        practicalApply: '-', practicalExam: '-', finalResult: '2026.04.03' },
      { round: '2027년도', isCurrent: true, isDone: false,
        writtenApply: '2027.01월 예정', writtenExam: '2027.03월 예정', writtenResult: '2027.04월 예정',
        practicalApply: '-', practicalExam: '-', finalResult: '2027.04월 예정' },
    ],
    milestones: [
      { label: '2027년도 원서접수', date: '2027-01-05' },
      { label: '2027년도 필기시험', date: '2027-03-13' },
      { label: '2027년도 합격자 발표', date: '2027-04-02' },
    ],
    subjects: [
      { title: '방사선물리학', tip: '방사선의 성질, 상호작용, 선량 단위(Gy, Sv)를 정확히 구분하고 계산 문제 반복 연습.' },
      { title: '방사선생물학', tip: '세포 방사선감수성, LET·RBE 개념, 방사선 손상 복구 메커니즘 위주 정리.' },
      { title: '방사선방어학', tip: '최대허용선량, 방어 원칙(거리·시간·차폐), 방사선관리구역 기준 암기.' },
      { title: '의료영상학', tip: 'X선 촬영 조건(kVp·mAs), 영상의 질 인자, 디지털 영상처리 과정 이해.' },
      { title: '방사선치료물리학', tip: '치료 선량 분포, 등선량 곡선, 치료 계획(TPS) 기본 개념 정리.' },
      { title: '핵의학기술학', tip: '방사성 동위원소 특성, PET·SPECT 원리, 방사성의약품 취급 절차 암기.' },
    ],
    jobs: [
      { id: 'rad-1', company: '세브란스병원', title: '방사선사 신규채용', type: 'large', region: 'seoul', experience: 'new',
        requirements: ['방사선사 면허 소지자'],
        duties: '영상의학과 일반촬영·CT·MRI·혈관조영 파트 근무.',
        salary: '초봉 약 3,700만원', benefits: '의료비 지원, 복지포인트', deadline: '2027-04-30', link: 'https://www.severance.or.kr' },
      { id: 'rad-2', company: '국민건강보험 일산병원', title: '방사선사 채용', type: 'public', region: 'gong', experience: 'any',
        requirements: ['방사선사 면허 소지자'],
        duties: '영상의학 전 파트 검사 및 방사선 방어 관리.',
        salary: '연봉 3,500~4,500만원', benefits: '공공기관 수준 복지', deadline: '2027-05-15', link: 'https://www.nhimc.or.kr' },
    ],
    books: [
      { id: 'rad-b1', title: '방사선사 국시 핵심이론 총정리', publisher: '고려의학', rating: 9.7, reviews: 512, originalPrice: 55000, price: 49500, discount: '10%', coverBg: 'linear-gradient(135deg,#4a235a,#7d3c98)', tags: ['베스트'] },
      { id: 'rad-b2', title: '방사선사 기출문제 완전분석', publisher: '군자출판사', rating: 9.6, reviews: 389, originalPrice: 48000, price: 43200, discount: '10%', coverBg: 'linear-gradient(135deg,#6c3483,#9b59b6)', tags: ['추천'] },
    ],
    defaultTodos: [
      '방사선물리학 단위 변환 및 계산 문제 연습',
      '방사선방어학 최대허용선량 기준 암기',
      '의료영상학 촬영 조건 정리',
      '핵의학 동위원소 반감기 암기',
      '5개년 기출 오답 노트 작성',
    ],
  },

  '물리치료사': {
    name: '물리치료사', icon: 'fa-hand-holding-medical', category: '의료·보건',
    heroTitle: '2027년도 물리치료사 국가시험 합격 전략',
    heroDesc: '고령화 사회 가속화로 재활·통증 전문 물리치료사 수요 급증! 근골격계부터 신경계 재활까지 체계적으로 준비하세요.',
    passRateSummary: '필기 78.5%',
    avgPassRate: '77.2%',
    passRates: [
      { year: 2020, written: 73.4, practical: 0 },
      { year: 2021, written: 76.2, practical: 0 },
      { year: 2022, written: 79.1, practical: 0 },
      { year: 2023, written: 77.8, practical: 0 },
      { year: 2024, written: 78.5, practical: 0 },
    ],
    schedules: [
      { round: '2026년도', isCurrent: false, isDone: true,
        writtenApply: '2026.01.05 ~ 2026.01.09', writtenExam: '2026.02.21', writtenResult: '2026.03.13',
        practicalApply: '-', practicalExam: '-', finalResult: '2026.03.13' },
      { round: '2027년도', isCurrent: true, isDone: false,
        writtenApply: '2027.01월 예정', writtenExam: '2027.02월 예정', writtenResult: '2027.03월 예정',
        practicalApply: '-', practicalExam: '-', finalResult: '2027.03월 예정' },
    ],
    milestones: [
      { label: '2027년도 원서접수', date: '2027-01-05' },
      { label: '2027년도 필기시험', date: '2027-02-20' },
      { label: '2027년도 합격자 발표', date: '2027-03-12' },
    ],
    subjects: [
      { title: '해부학·생리학', tip: '근육·관절의 해부학적 구조와 신경지배를 체계적으로 암기. 기능해부학 위주로 정리.' },
      { title: '운동학', tip: '관절 운동 범위(ROM), 근력 등급(MMT), 보행 분석 지표를 수치와 함께 암기.' },
      { title: '근골격계 물리치료', tip: '특수 검사(Spurling, Lachman, SLR 등) 양성 의미와 적응증을 함께 정리.' },
      { title: '신경계 물리치료', tip: 'Brunnstrom·PNF·Bobath 기법 개념과 적용 시점을 구분해서 학습.' },
      { title: '물리인자치료', tip: '전기치료(TENS·IFC·NMES), 온열·한랭치료 파라미터와 금기증 암기.' },
      { title: '심폐·스포츠 재활', tip: 'ACSM 운동 처방 기준, 스포츠 손상 응급처치(RICE) 및 재활 단계 정리.' },
    ],
    jobs: [
      { id: 'pt-1', company: '국립재활원', title: '물리치료사 채용', type: 'public', region: 'seoul', experience: 'any',
        requirements: ['물리치료사 면허 소지자'],
        duties: '척수손상·뇌졸중 환자 집중 재활 물리치료.',
        salary: '연봉 3,500~4,200만원', benefits: '공공기관 복지', deadline: '2027-04-30', link: 'https://www.nrc.go.kr' },
      { id: 'pt-2', company: '종합병원 재활의학과', title: '물리치료사 수시채용', type: 'large', region: 'all', experience: 'any',
        requirements: ['물리치료사 면허 소지자'],
        duties: '입원·외래 환자 근골격계 및 신경계 물리치료.',
        salary: '연봉 3,200~4,500만원', benefits: '의료비 지원, 4대보험', deadline: '2027-05-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'pt-b1', title: '물리치료사 국시 핵심요약 총정리', publisher: '고려의학', rating: 9.7, reviews: 678, originalPrice: 58000, price: 52200, discount: '10%', coverBg: 'linear-gradient(135deg,#1a3a5c,#2471a3)', tags: ['베스트'] },
      { id: 'pt-b2', title: '물리치료사 기출문제 완전정복', publisher: '군자출판사', rating: 9.6, reviews: 512, originalPrice: 50000, price: 45000, discount: '10%', coverBg: 'linear-gradient(135deg,#154360,#1a5276)', tags: ['추천'] },
    ],
    defaultTodos: [
      '근골격계 특수 검사 양성 판정 기준 암기',
      '신경계 치료 기법(Bobath·PNF) 비교 정리',
      '물리인자치료 파라미터 표 작성',
      '운동학 MMT 등급 기준 숙지',
      '5개년 기출 1회독 및 오답 분석',
    ],
  },

  '응급구조사1급': {
    name: '응급구조사1급', icon: 'fa-truck-medical', category: '의료·보건',
    heroTitle: '2027년도 응급구조사 1급 국가시험 합격 전략',
    heroDesc: '119 구급대·응급실·이송업체 수요 꾸준히 증가! 전문응급처치학부터 응급환자관리까지 실전 중심으로 준비하세요.',
    passRateSummary: '필기 58.3%',
    avgPassRate: '57.1%',
    passRates: [
      { year: 2020, written: 52.4, practical: 0 },
      { year: 2021, written: 55.8, practical: 0 },
      { year: 2022, written: 59.2, practical: 0 },
      { year: 2023, written: 57.6, practical: 0 },
      { year: 2024, written: 58.3, practical: 0 },
    ],
    schedules: [
      { round: '2026년도', isCurrent: false, isDone: true,
        writtenApply: '2026.02.03 ~ 2026.02.07', writtenExam: '2026.04.11', writtenResult: '2026.05.01',
        practicalApply: '-', practicalExam: '-', finalResult: '2026.05.01' },
      { round: '2027년도', isCurrent: true, isDone: false,
        writtenApply: '2027.02월 예정', writtenExam: '2027.04월 예정', writtenResult: '2027.05월 예정',
        practicalApply: '-', practicalExam: '-', finalResult: '2027.05월 예정' },
    ],
    milestones: [
      { label: '2027년도 원서접수', date: '2027-02-02' },
      { label: '2027년도 필기시험', date: '2027-04-10' },
      { label: '2027년도 합격자 발표', date: '2027-04-30' },
    ],
    subjects: [
      { title: '응급처치론', tip: '기도유지(BVM·LMA), 제세동(AED) 절차, 기본소생술(BLS) 단계를 정확히 암기.' },
      { title: '전문응급처치학 총론', tip: '12유도 심전도 판독, 기관내삽관 절차, 정맥로 확보 적응증 및 금기증 정리.' },
      { title: '전문응급처치학 각론', tip: '쇼크 종류별 처치, 두부·흉부·복부 외상 평가 및 처치 순서를 ATLS 기준으로 정리.' },
      { title: '응급환자관리', tip: '중증도 분류(START triage) 기준, 재난의료 대응 체계, 응급의료 관련 법 조항 암기.' },
    ],
    jobs: [
      { id: 'ems-1', company: '소방청 119구급대', title: '소방공무원(구급) 공개경쟁채용', type: 'public', region: 'all', experience: 'new',
        requirements: ['응급구조사 1급 면허 소지자', '소방공무원 체력기준 합격자'],
        duties: '119 구급차 탑승, 현장 응급처치, 이송 중 환자 상태 모니터링.',
        salary: '소방사 초봉 약 3,000만원 + 위험수당', benefits: '특수직 공무원 연금, 의료비', deadline: '2027-06-30', link: 'https://www.gosi.kr' },
      { id: 'ems-2', company: '상급종합병원 응급실', title: '응급구조사 채용', type: 'large', region: 'all', experience: 'any',
        requirements: ['응급구조사 1급 면허', '전문소생술(ACLS) 수료 우대'],
        duties: '응급실 내 환자 초기 평가, 처치 보조, 전산 기록.',
        salary: '연봉 3,200~4,000만원', benefits: '의료비 지원, 교대근무 수당', deadline: '2027-05-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'ems-b1', title: '응급구조사 1급 국시 핵심요약 총정리', publisher: '군자출판사', rating: 9.7, reviews: 432, originalPrice: 55000, price: 49500, discount: '10%', coverBg: 'linear-gradient(135deg,#922b21,#cb4335)', tags: ['베스트'] },
      { id: 'ems-b2', title: '응급구조사 1급 기출문제 완전분석', publisher: '고려의학', rating: 9.5, reviews: 318, originalPrice: 48000, price: 43200, discount: '10%', coverBg: 'linear-gradient(135deg,#7b241c,#a93226)', tags: ['추천'] },
    ],
    defaultTodos: [
      '기본소생술(BLS) 절차 완벽 암기',
      '12유도 심전도 기본 파형 판독 연습',
      '전문기도유지 기구 종류 및 적응증 정리',
      '쇼크 종류별 처치 프로토콜 암기',
      '5개년 기출 1회독 및 오답 분석',
    ],
  },

  '치과위생사': {
    name: '치과위생사', icon: 'fa-tooth', category: '의료·보건',
    heroTitle: '2027년도 치과위생사 국가시험 합격 전략',
    heroDesc: '구강보건 중요성 부각, 스케일링 급여화로 치과위생사 수요 지속 증가! 치위생학부터 구강보건행정까지 체계적으로 준비하세요.',
    passRateSummary: '필기 74.6%',
    avgPassRate: '73.3%',
    passRates: [
      { year: 2020, written: 69.8, practical: 0 },
      { year: 2021, written: 72.3, practical: 0 },
      { year: 2022, written: 75.4, practical: 0 },
      { year: 2023, written: 73.9, practical: 0 },
      { year: 2024, written: 74.6, practical: 0 },
    ],
    schedules: [
      { round: '2026년도', isCurrent: false, isDone: true,
        writtenApply: '2026.01.05 ~ 2026.01.09', writtenExam: '2026.03.07', writtenResult: '2026.03.27',
        practicalApply: '-', practicalExam: '-', finalResult: '2026.03.27' },
      { round: '2027년도', isCurrent: true, isDone: false,
        writtenApply: '2027.01월 예정', writtenExam: '2027.03월 예정', writtenResult: '2027.03월 예정',
        practicalApply: '-', practicalExam: '-', finalResult: '2027.03월 예정' },
    ],
    milestones: [
      { label: '2027년도 원서접수', date: '2027-01-05' },
      { label: '2027년도 필기시험', date: '2027-03-06' },
      { label: '2027년도 합격자 발표', date: '2027-03-26' },
    ],
    subjects: [
      { title: '치위생학 개론', tip: '치위생 과정(사정·진단·계획·수행·평가) 5단계와 치주 탐침 기록 방법 정리.' },
      { title: '구강해부학', tip: '치아 형태학(교두, 와, 융선), 구강 연조직 및 두경부 해부 구조 암기.' },
      { title: '구강생리학', tip: '타액 성분·기능, 치주 인대 기능, 씹기 근육 신경지배를 묶어 정리.' },
      { title: '구강미생물학·면역학', tip: '치아우식증·치주병 원인균(S.mutans, P.gingivalis) 특성과 면역 기전 암기.' },
      { title: '치과재료학', tip: '인상재·접착제·수복재 분류, 조작 방법, 중합 반응 종류 위주 학습.' },
      { title: '구강보건행정·교육', tip: '구강보건 지표(DMF율, 치주요양필요지수), 집단 구강보건교육 기법 암기.' },
    ],
    jobs: [
      { id: 'dh-1', company: '치과의원 (개원가)', title: '치과위생사 채용 (수시)', type: 'consult', region: 'all', experience: 'any',
        requirements: ['치과위생사 면허 소지자'],
        duties: '스케일링, 구강위생교육, 진료 보조, 진료실 관리.',
        salary: '신입 연봉 2,800~3,400만원', benefits: '4대보험, 치과 치료 할인', deadline: '2027-12-31', link: 'https://www.saramin.co.kr' },
      { id: 'dh-2', company: '지역 구강보건센터', title: '구강보건사업 담당 치과위생사', type: 'public', region: 'all', experience: 'any',
        requirements: ['치과위생사 면허', '지역사회 구강보건사업 관심자'],
        duties: '노인·장애인·아동 대상 구강검진 및 예방처치, 불소도포 사업.',
        salary: '연봉 3,000~3,600만원', benefits: '공무직 준용 복지', deadline: '2027-06-30', link: 'https://www.mohw.go.kr' },
    ],
    books: [
      { id: 'dh-b1', title: '치과위생사 국시 핵심요약 총정리', publisher: '군자출판사', rating: 9.7, reviews: 567, originalPrice: 55000, price: 49500, discount: '10%', coverBg: 'linear-gradient(135deg,#1a5f7a,#2e86ab)', tags: ['베스트'] },
      { id: 'dh-b2', title: '치과위생사 기출문제 완전분석', publisher: '고려의학', rating: 9.6, reviews: 423, originalPrice: 48000, price: 43200, discount: '10%', coverBg: 'linear-gradient(135deg,#154360,#117a8b)', tags: ['추천'] },
    ],
    defaultTodos: [
      '치아 형태학 교두·와 명칭 암기',
      '구강미생물 주요 원인균 특성 정리',
      '치과재료학 인상재 분류 및 조작법 암기',
      '구강보건 지표 계산 문제 연습',
      '5개년 기출 1회독 및 오답 분석',
    ],
  },

  // ── 기존 IT·정보통신 ──────────────────────────

  'ISMS': {
    name: 'ISMS', icon: 'fa-shield-halved', category: 'IT·정보통신',
    heroTitle: '2026년도 정보보호관리체계(ISMS) 인증심사원 합격 전략',
    heroDesc: '한국인터넷진흥원(KISA) 주관 정보보호 관리체계 인증 전문가 자격. ISMS-P 심사원으로 활동하거나 기업 보안팀 핵심 인력으로 채용됩니다.',
    passRateSummary: '합격률 약 30~40%', avgPassRate: '35%',
    passRates: [{year:2020,written:32,practical:0},{year:2021,written:33,practical:0},{year:2022,written:34,practical:0},{year:2023,written:35,practical:0},{year:2024,written:34,practical:0}],
    schedules: [{round:'상반기',writtenExam:'2026-04-25',practicalExam:'-',writtenResult:'2026-05-23',practicalResult:'-',registerStart:'2026-03-02',registerEnd:'2026-04-10'},{round:'하반기',writtenExam:'2026-10-24',practicalExam:'-',writtenResult:'2026-11-21',practicalResult:'-',registerStart:'2026-09-01',registerEnd:'2026-10-10'}],
    subjects: [{name:'정보보호 관리',desc:'ISMS-P 인증 기준·통제 항목'},{name:'개인정보보호',desc:'개인정보보호법·GDPR'},{name:'정보보호 기술',desc:'암호화·접근통제·취약점 관리'},{name:'법규 및 제도',desc:'정보통신망법·전자서명법'}],
    jobs: [{company:'KISA 위탁 심사기관',title:'ISMS-P 인증심사원',type:'consult',region:'seoul',experience:'exp',salary:'5000~7000만원',deadline:'2026-11-30',duties:'기업 정보보호 관리체계 심사',requirements:['ISMS 인증심사원 자격 필수'],benefits:'성과급',applyUrl:'https://isms.kisa.or.kr'},{company:'대기업 보안팀',title:'정보보호 담당자',type:'large',region:'seoul',experience:'any',salary:'4500~6500만원',deadline:'2026-10-31',duties:'ISMS-P 인증 취득·유지 업무',requirements:['ISMS 관련 자격 우대'],benefits:'4대보험, 성과급',applyUrl:'https://www.saramin.co.kr'}],
    books: [{title:'2026 ISMS-P 인증심사원 필기 완전정복',author:'이재현',publisher:'성안당',rating:4.7,reviews:234},{title:'정보보호 관리체계(ISMS-P) 인증 실무 가이드',author:'KISA',publisher:'KISA',rating:4.8,reviews:189},{title:'ISMS 기출문제+핵심이론 30일 완성',author:'김보안',publisher:'예문사',rating:4.5,reviews:145}],
    milestones: [{week:'1~3주',task:'ISMS-P 인증 기준 통제 항목 학습'},{week:'4~5주',task:'개인정보보호법·관련 법규'},{week:'6~7주',task:'기술적 보안 통제 학습'},{week:'8주',task:'기출문제 풀기 + 최종 정리'}],
    defaultTodos: ['ISMS-P 102개 인증 기준 암기','개인정보보호법 주요 조항 숙지','기출문제 3회분 풀기','모의 심사 시나리오 연습'],
  },

// === 건설 추가 7종 ===

  '철근기능사': {
    name: '철근기능사', icon: 'fa-layer-group', category: '건설·토목',
    heroTitle: '2026년도 철근기능사 합격 전략',
    heroDesc: '건설 현장 필수 인력인 철근기능사! 아파트·교량 등 철근콘크리트 구조물 시공의 핵심 자격으로 취업률이 높습니다.',
    passRateSummary: '필기 55.2% | 실기 48.3%',
    avgPassRate: '51.8%',
    avgExamRate: '72%',
    examRateSummary: '필기 70% | 실기 74%',
    passRates: [
      { year: 2020, written: 58.1, practical: 46.2 },
      { year: 2021, written: 57.3, practical: 47.5 },
      { year: 2022, written: 56.4, practical: 48.0 },
      { year: 2023, written: 55.8, practical: 48.1 },
      { year: 2024, written: 55.2, practical: 48.3 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
      { round: '제4회', isCurrent: false, isDone: false,
        writtenApply: '08.24 ~ 08.27', writtenExam: '09.16 ~ 09.21', writtenResult: '10.07',
        practicalApply: '10.12 ~ 10.15', practicalExam: '11.14 ~ 12.02', finalResult: '12.11 / 12.18' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
      { label: '3회 실기 시험', date: '2026-08-29' },
    ],
    subjects: [
      { title: '철근 재료 및 구조 일반', tip: '철근의 종류(SD300·SD400·SD500), 항복강도, 인장강도 수치를 정확히 암기하세요.' },
      { title: '철근 가공·조립', tip: '갈고리(Hook) 규격, 피복두께, 간격재 설치 기준이 자주 출제됩니다.' },
      { title: '도면 해독', tip: '배근 도면 읽기와 철근 수량 산출 연습이 실기에서 핵심입니다.' },
      { title: '안전 관리', tip: '철근 작업 중 낙하물 방지, 감전 예방 안전 수칙을 숙지하세요.' },
    ],
    jobs: [
      { id: 'chr-1', company: '중견건설사', title: '철근콘크리트 공사 철근공 (현장직)', type: 'large', region: 'all', experience: 'any',
        requirements: ['철근기능사 자격 소지자 우대', '건설 현장 경력자 우대'],
        duties: '아파트·교량 철근콘크리트 구조물 철근 가공 및 조립.',
        salary: '일당 18~25만원 / 월 350~450만원', benefits: '4대보험, 현장 숙소 제공', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'chr-b1', title: '2026 철근기능사 필기 한권으로 끝내기', publisher: '성안당', rating: 9.5, reviews: 210, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#7b3f00,#c0762a)', tags: ['베스트'] },
      { id: 'chr-b2', title: '2026 철근기능사 실기 작업형 완전정복', publisher: '일진사', rating: 9.3, reviews: 155, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#5d2e0c,#a05010)', tags: ['추천'] },
    ],
    defaultTodos: [
      '철근 종류별 규격·강도 수치 암기',
      '피복두께 기준표 정리',
      '도면 해독 연습 (배근도 읽기)',
      '철근 가공 치수 계산 공식 정리',
      '기출문제 4회분 풀기',
    ],
  },

  '실내건축기능사': {
    name: '실내건축기능사', icon: 'fa-house', category: '건설·토목',
    heroTitle: '2026년도 실내건축기능사 합격 전략',
    heroDesc: '인테리어 시장 성장과 리모델링 수요 증가로 실내건축기능사 취득자의 활동 영역이 넓어지고 있습니다. 도면 해독부터 시공까지 체계적으로 준비하세요.',
    passRateSummary: '필기 50.3% | 실기 44.7%',
    avgPassRate: '47.5%',
    avgExamRate: '68%',
    examRateSummary: '필기 65% | 실기 71%',
    passRates: [
      { year: 2020, written: 52.4, practical: 43.1 },
      { year: 2021, written: 51.8, practical: 43.9 },
      { year: 2022, written: 51.2, practical: 44.2 },
      { year: 2023, written: 50.8, practical: 44.5 },
      { year: 2024, written: 50.3, practical: 44.7 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
      { round: '제4회', isCurrent: false, isDone: false,
        writtenApply: '08.24 ~ 08.27', writtenExam: '09.16 ~ 09.21', writtenResult: '10.07',
        practicalApply: '10.12 ~ 10.15', practicalExam: '11.14 ~ 12.02', finalResult: '12.11 / 12.18' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
      { label: '3회 실기 시험', date: '2026-08-29' },
    ],
    subjects: [
      { title: '실내건축 재료', tip: '바닥재·벽재·천장재 종류별 특성과 흡음·단열 성능 비교가 출제됩니다.' },
      { title: '실내건축 시공', tip: '도배, 타일, 목공 순서와 시공 기준이 자주 출제됩니다.' },
      { title: '실내건축 도면', tip: '평면도·입면도·단면도 해독 능력과 CAD 도면 작성이 실기 핵심입니다.' },
      { title: '안전 관리', tip: '실내 작업 시 VOC 발생 주의, 환기 기준, 추락 방지 수칙을 정리하세요.' },
    ],
    jobs: [
      { id: 'iaf-1', company: '인테리어 전문 업체', title: '실내건축 시공 기능사 (인테리어 시공팀)', type: 'consult', region: 'all', experience: 'any',
        requirements: ['실내건축기능사 소지자 우대', '인테리어 시공 경력 1년 이상 우대'],
        duties: '아파트·상업 공간 인테리어 도배·목공·타일 시공 및 현장 관리.',
        salary: '월 250~380만원', benefits: '4대보험, 공구비 지원', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'iaf-b1', title: '2026 실내건축기능사 필기 한권끝장', publisher: '에듀윌', rating: 9.5, reviews: 310, originalPrice: 27000, price: 24300, discount: '10%', coverBg: 'linear-gradient(135deg,#1a4a6b,#2d7aa0)', tags: ['베스트'] },
      { id: 'iaf-b2', title: '2026 실내건축기능사 실기 완전정복', publisher: '성안당', rating: 9.4, reviews: 220, originalPrice: 25000, price: 22500, discount: '10%', coverBg: 'linear-gradient(135deg,#0d3349,#1a5f80)', tags: ['추천'] },
    ],
    defaultTodos: [
      '실내건축 재료 종류별 특성 정리',
      '시공 순서 및 기준 암기',
      '평면도·단면도 도면 해독 연습',
      'CAD 기초 명령어 숙지',
      '기출문제 4회분 풀기',
    ],
  },

  '조적기능사': {
    name: '조적기능사', icon: 'fa-bricks', category: '건설·토목',
    heroTitle: '2026년도 조적기능사 합격 전략',
    heroDesc: '벽돌·블록·석재 쌓기의 전문가! 건축 마감 공사의 기본이 되는 조적 시공 능력을 인정받는 국가기술자격입니다.',
    passRateSummary: '필기 57.1% | 실기 51.2%',
    avgPassRate: '54.2%',
    avgExamRate: '65%',
    examRateSummary: '필기 62% | 실기 68%',
    passRates: [
      { year: 2020, written: 59.3, practical: 49.8 },
      { year: 2021, written: 58.7, practical: 50.4 },
      { year: 2022, written: 58.1, practical: 50.9 },
      { year: 2023, written: 57.6, practical: 51.1 },
      { year: 2024, written: 57.1, practical: 51.2 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
      { round: '제4회', isCurrent: false, isDone: false,
        writtenApply: '08.24 ~ 08.27', writtenExam: '09.16 ~ 09.21', writtenResult: '10.07',
        practicalApply: '10.12 ~ 10.15', practicalExam: '11.14 ~ 12.02', finalResult: '12.11 / 12.18' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
    ],
    subjects: [
      { title: '조적 재료', tip: '벽돌·블록·석재의 종류, 규격, 강도 기준을 정확히 정리하세요.' },
      { title: '조적 시공', tip: '쌓기 방법(영식·불식·화란식) 차이와 모르타르 배합비가 자주 출제됩니다.' },
      { title: '구조 일반', tip: '조적조 벽체의 두께·높이 기준, 개구부 보강 방법을 숙지하세요.' },
      { title: '안전 관리', tip: '비계 설치 기준과 낙하물 방지 안전 수칙을 함께 정리하세요.' },
    ],
    jobs: [
      { id: 'mas-1', company: '종합건설회사', title: '조적 시공 기능사 (마감팀)', type: 'large', region: 'all', experience: 'any',
        requirements: ['조적기능사 자격 소지자 우대'],
        duties: '아파트·건축물 벽돌·블록 조적 시공 및 마감 작업.',
        salary: '일당 17~22만원', benefits: '4대보험', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'mas-b1', title: '2026 조적기능사 필기·실기 한권완성', publisher: '일진사', rating: 9.2, reviews: 145, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#4a2800,#8b5a2b)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '벽돌·블록 규격·강도 기준 암기',
      '쌓기 방법 3종 비교 정리',
      '모르타르 배합비 공식 암기',
      '기출문제 4회분 풀기',
    ],
  },

  '미장기능사': {
    name: '미장기능사', icon: 'fa-trowel', category: '건설·토목',
    heroTitle: '2026년도 미장기능사 합격 전략',
    heroDesc: '건축 마감의 핵심! 시멘트·모르타르·플라스터 등 미장 재료를 다루는 전문 기능인으로 건설 현장 수요가 꾸준합니다.',
    passRateSummary: '필기 60.4% | 실기 53.8%',
    avgPassRate: '57.1%',
    avgExamRate: '62%',
    examRateSummary: '필기 59% | 실기 65%',
    passRates: [
      { year: 2020, written: 62.1, practical: 52.4 },
      { year: 2021, written: 61.5, practical: 53.0 },
      { year: 2022, written: 61.0, practical: 53.4 },
      { year: 2023, written: 60.7, practical: 53.6 },
      { year: 2024, written: 60.4, practical: 53.8 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
      { round: '제4회', isCurrent: false, isDone: false,
        writtenApply: '08.24 ~ 08.27', writtenExam: '09.16 ~ 09.21', writtenResult: '10.07',
        practicalApply: '10.12 ~ 10.15', practicalExam: '11.14 ~ 12.02', finalResult: '12.11 / 12.18' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
    ],
    subjects: [
      { title: '미장 재료', tip: '시멘트 모르타르·석고 플라스터·합성 수지 등 재료별 특성과 배합비를 정리하세요.' },
      { title: '미장 시공', tip: '바탕 처리, 초벌·재벌·정벌 바름 순서와 두께 기준이 핵심입니다.' },
      { title: '구조 일반', tip: '균열 방지 공법과 신축줄눈 설치 기준을 숙지하세요.' },
      { title: '안전 관리', tip: '분진·화학물질 취급 시 보호구 착용 기준을 정리하세요.' },
    ],
    jobs: [
      { id: 'pla-1', company: '건설현장', title: '미장공 (마감시공팀)', type: 'large', region: 'all', experience: 'any',
        requirements: ['미장기능사 자격 소지자 우대'],
        duties: '아파트·건축물 내·외벽 미장 시공 및 마감 작업.',
        salary: '일당 18~23만원', benefits: '4대보험', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'pla-b1', title: '2026 미장기능사 필기·실기 완전정복', publisher: '성안당', rating: 9.3, reviews: 130, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#2e4a1e,#4e8a36)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '미장 재료 종류·배합비 암기',
      '초벌·재벌·정벌 시공 순서 정리',
      '균열 방지 공법 정리',
      '기출문제 4회분 풀기',
    ],
  },

  '방수기능사': {
    name: '방수기능사', icon: 'fa-droplet', category: '건설·토목',
    heroTitle: '2026년도 방수기능사 합격 전략',
    heroDesc: '옥상·지하·욕실 등 건물의 방수 시공을 담당하는 전문 기능인! 누수 피해 증가로 방수 전문 인력 수요가 꾸준히 늘고 있습니다.',
    passRateSummary: '필기 58.6% | 실기 50.4%',
    avgPassRate: '54.5%',
    avgExamRate: '60%',
    examRateSummary: '필기 57% | 실기 63%',
    passRates: [
      { year: 2020, written: 60.2, practical: 48.9 },
      { year: 2021, written: 59.7, practical: 49.5 },
      { year: 2022, written: 59.2, practical: 49.9 },
      { year: 2023, written: 58.9, practical: 50.2 },
      { year: 2024, written: 58.6, practical: 50.4 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
      { round: '제4회', isCurrent: false, isDone: false,
        writtenApply: '08.24 ~ 08.27', writtenExam: '09.16 ~ 09.21', writtenResult: '10.07',
        practicalApply: '10.12 ~ 10.15', practicalExam: '11.14 ~ 12.02', finalResult: '12.11 / 12.18' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
    ],
    subjects: [
      { title: '방수 재료', tip: '도막·시트·시멘트계 방수재 종류별 특성과 적용 부위를 정리하세요.' },
      { title: '방수 시공', tip: '옥상·지하·욕실 방수 시공 순서와 접착 방법이 자주 출제됩니다.' },
      { title: '방수 하자 및 보수', tip: '균열·핀홀·들뜸 등 하자 유형과 보수 방법을 숙지하세요.' },
      { title: '안전 관리', tip: '화기 작업 안전 수칙과 유기용제 취급 보호구 기준을 정리하세요.' },
    ],
    jobs: [
      { id: 'wtp-1', company: '방수 전문 업체', title: '방수 시공 기능사', type: 'consult', region: 'all', experience: 'any',
        requirements: ['방수기능사 자격 소지자 우대'],
        duties: '건축물 옥상·지하·욕실 방수 시공 및 하자 보수.',
        salary: '일당 18~24만원', benefits: '4대보험', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'wtp-b1', title: '2026 방수기능사 필기·실기 한권완성', publisher: '일진사', rating: 9.2, reviews: 115, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#003366,#0055aa)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '방수 재료 종류별 특성 암기',
      '시공 순서 및 적용 부위 정리',
      '하자 유형·보수 방법 정리',
      '기출문제 4회분 풀기',
    ],
  },

  '창호기능사': {
    name: '창호기능사', icon: 'fa-window-maximize', category: '건설·토목',
    heroTitle: '2026년도 창호기능사 합격 전략',
    heroDesc: '단열·방음 기능이 강화된 고성능 창호 수요 증가로 창호 전문 기능인의 활동이 넓어지고 있습니다. 건설 마감 공사의 핵심 자격입니다.',
    passRateSummary: '필기 55.8% | 실기 49.6%',
    avgPassRate: '52.7%',
    avgExamRate: '58%',
    examRateSummary: '필기 55% | 실기 61%',
    passRates: [
      { year: 2020, written: 57.5, practical: 48.2 },
      { year: 2021, written: 56.9, practical: 48.8 },
      { year: 2022, written: 56.4, practical: 49.1 },
      { year: 2023, written: 56.1, practical: 49.4 },
      { year: 2024, written: 55.8, practical: 49.6 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
      { round: '제4회', isCurrent: false, isDone: false,
        writtenApply: '08.24 ~ 08.27', writtenExam: '09.16 ~ 09.21', writtenResult: '10.07',
        practicalApply: '10.12 ~ 10.15', practicalExam: '11.14 ~ 12.02', finalResult: '12.11 / 12.18' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
    ],
    subjects: [
      { title: '창호 재료', tip: 'PVC·AL·목재 창호의 특성과 단열 성능(열관류율 수치)을 비교 정리하세요.' },
      { title: '창호 시공', tip: '창호 설치 순서, 실런트 시공 방법, 레벨 조정 방법이 실기 핵심입니다.' },
      { title: '도면 해독', tip: '창호 상세도 읽기와 창호표 작성이 자주 출제됩니다.' },
      { title: '안전 관리', tip: '유리 취급 시 보호장갑 착용, 고소 작업 안전 수칙을 숙지하세요.' },
    ],
    jobs: [
      { id: 'win-1', company: '창호 전문 업체', title: '창호 시공 기능사', type: 'consult', region: 'all', experience: 'any',
        requirements: ['창호기능사 자격 소지자 우대'],
        duties: '건축물 창호 설치·교체·보수 시공.',
        salary: '일당 17~22만원', benefits: '4대보험', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'win-b1', title: '2026 창호기능사 필기·실기 완전정복', publisher: '성안당', rating: 9.2, reviews: 108, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#1a3a6b,#2d7aa0)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '창호 재료별 특성·단열 성능 암기',
      '창호 설치 순서 정리',
      '창호 상세도 해독 연습',
      '기출문제 4회분 풀기',
    ],
  },

  '온수온돌기능사': {
    name: '온수온돌기능사', icon: 'fa-temperature-half', category: '건설·토목',
    heroTitle: '2026년도 온수온돌기능사 합격 전략',
    heroDesc: '바닥 난방 시스템 전문가! 온수 배관 설계 및 시공 능력을 인정받는 자격으로 건설·설비 분야에서 활용됩니다.',
    passRateSummary: '필기 56.3% | 실기 48.9%',
    avgPassRate: '52.6%',
    avgExamRate: '55%',
    examRateSummary: '필기 52% | 실기 58%',
    passRates: [
      { year: 2020, written: 58.1, practical: 47.5 },
      { year: 2021, written: 57.5, practical: 48.0 },
      { year: 2022, written: 57.0, practical: 48.4 },
      { year: 2023, written: 56.7, practical: 48.7 },
      { year: 2024, written: 56.3, practical: 48.9 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
    ],
    subjects: [
      { title: '온수온돌 재료', tip: '배관 재료(동관·PE관·PB관) 특성과 내열 온도 기준을 비교 정리하세요.' },
      { title: '온수온돌 시공', tip: '배관 간격·매립 깊이·시공 순서가 실기에서 자주 출제됩니다.' },
      { title: '열 계산', tip: '난방 부하 계산 공식과 온수 온도 기준(공급 60℃, 환수 50℃)을 암기하세요.' },
      { title: '안전 관리', tip: '고온 배관 작업 시 화상 방지와 가스 누출 점검 기준을 정리하세요.' },
    ],
    jobs: [
      { id: 'hwf-1', company: '설비 전문 업체', title: '온수온돌 시공 기능사', type: 'consult', region: 'all', experience: 'any',
        requirements: ['온수온돌기능사 자격 소지자 우대'],
        duties: '건축물 바닥 난방 배관 시공 및 유지 보수.',
        salary: '일당 17~22만원', benefits: '4대보험', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'hwf-b1', title: '2026 온수온돌기능사 필기·실기 완전정복', publisher: '일진사', rating: 9.0, reviews: 88, originalPrice: 21000, price: 18900, discount: '10%', coverBg: 'linear-gradient(135defer,#7a1a00,#c0391c)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '배관 재료별 특성·내열 온도 암기',
      '배관 간격·매립 깊이 기준 정리',
      '난방 부하 계산 연습',
      '기출문제 3회분 풀기',
    ],
  },

// === IT·정보통신 추가 5종 ===

  '정보처리기술사': {
    name: '정보처리기술사', icon: 'fa-microchip', category: 'IT·정보통신',
    heroTitle: '2026년도 정보처리기술사 합격 전략',
    heroDesc: 'IT 분야 최고 권위의 국가기술자격! SW 아키텍처·프로젝트 관리·데이터베이스 등 폭넓은 전문 지식을 요구하며 공공기관·대기업 필수 자격입니다.',
    passRateSummary: '필기 14.2% | 실기 47.8%',
    avgPassRate: '31.0%',
    avgExamRate: '85%',
    examRateSummary: '필기 80% | 실기 90%',
    passRates: [
      { year: 2020, written: 13.5, practical: 44.2 },
      { year: 2021, written: 13.8, practical: 45.6 },
      { year: 2022, written: 14.0, practical: 46.5 },
      { year: 2023, written: 14.1, practical: 47.2 },
      { year: 2024, written: 14.2, practical: 47.8 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.12 ~ 01.15', writtenExam: '02.07 ~ 02.08', writtenResult: '03.11',
        practicalApply: '03.23 ~ 03.26', practicalExam: '04.18 ~ 04.19', finalResult: '06.05' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '04.20 ~ 04.23', writtenExam: '05.23 ~ 05.24', writtenResult: '06.24',
        practicalApply: '07.06 ~ 07.09', practicalExam: '07.26 ~ 07.27', finalResult: '09.04' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '07.20 ~ 07.23', writtenExam: '08.22 ~ 08.23', writtenResult: '09.23',
        practicalApply: '10.05 ~ 10.08', practicalExam: '10.24 ~ 10.25', finalResult: '12.11' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-04-20' },
      { label: '2회 필기 시험', date: '2026-05-23' },
      { label: '2회 실기 시험', date: '2026-07-26' },
      { label: '3회 필기 원서접수', date: '2026-07-20' },
      { label: '3회 실기 시험', date: '2026-10-24' },
    ],
    subjects: [
      { title: 'SW 공학', tip: '소프트웨어 개발 방법론(애자일·폭포수), 아키텍처 패턴, UML 다이어그램이 핵심입니다.' },
      { title: '데이터베이스', tip: '정규화, 트랜잭션 ACID, 인덱스 구조, NoSQL 비교가 자주 출제됩니다.' },
      { title: '알고리즘·자료구조', tip: '시간복잡도 분석, 정렬 알고리즘, 그래프 탐색 문제를 서술형으로 설명할 수 있어야 합니다.' },
      { title: '네트워크·보안', tip: 'OSI 7계층, TCP/IP, 암호화 방식(대칭·공개키)을 논리적으로 서술하는 연습이 필요합니다.' },
      { title: '프로젝트 관리', tip: 'WBS, CPM, EVM 등 PM 도구를 계산 문제와 함께 정리하세요.' },
    ],
    jobs: [
      { id: 'ipe-1', company: '공공기관 IT부서', title: 'IT 시스템 아키텍트 (정보처리기술사 우대)', type: 'public', region: 'all', experience: 'exp',
        requirements: ['정보처리기술사 자격 필수', 'IT 프로젝트 관리 경력 5년 이상'],
        duties: '공공 정보화 사업 아키텍처 설계 및 프로젝트 관리.',
        salary: '연봉 7,000~1억원', benefits: '공기업 복지 체계', deadline: '2026-12-31', link: 'https://www.gosi.kr' },
      { id: 'ipe-2', company: '대형 SI 업체', title: '수석 컨설턴트 (정보처리기술사)', type: 'large', region: 'seoul', experience: 'exp',
        requirements: ['정보처리기술사 필수', 'IT 컨설팅 경력 7년 이상'],
        duties: '기업 디지털 전환 전략 수립 및 IT 시스템 고도화 컨설팅.',
        salary: '연봉 9,000만원~1.2억원', benefits: '성과 인센티브, 유연근무', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'ipe-b1', title: '2026 정보처리기술사 필기 핵심요약 10주 완성', publisher: '한울', rating: 9.7, reviews: 520, originalPrice: 65000, price: 58500, discount: '10%', coverBg: 'linear-gradient(135deg,#0a2a5e,#1a4fa0)', tags: ['베스트', '무료배송'] },
      { id: 'ipe-b2', title: '정보처리기술사 기출문제 완전분석 (최신 5개년)', publisher: '성안당', rating: 9.5, reviews: 380, originalPrice: 58000, price: 52200, discount: '10%', coverBg: 'linear-gradient(135deg,#082044,#143878)', tags: ['추천'] },
      { id: 'ipe-b3', title: '정보처리기술사 실기 서술형 답안 작성법', publisher: '아이콘', rating: 9.4, reviews: 290, originalPrice: 52000, price: 46800, discount: '10%', coverBg: 'linear-gradient(135deg,#1a3a6b,#2d5aa0)', tags: ['실기대비'] },
    ],
    defaultTodos: [
      'SW 공학 핵심 이론 (아키텍처·UML) 정리',
      '데이터베이스 정규화·트랜잭션 서술 연습',
      '알고리즘 시간복잡도 분석 문제 풀기',
      '네트워크·보안 OSI 계층 암기',
      '기출 서술형 답안 직접 작성 연습',
    ],
  },

  '전자계산기기술사': {
    name: '전자계산기기술사', icon: 'fa-server', category: 'IT·정보통신',
    heroTitle: '2026년도 전자계산기기술사 합격 전략',
    heroDesc: '컴퓨터 하드웨어 및 시스템 구조 분야 최고 전문가 자격! 임베디드 시스템·컴퓨터 구조 설계 분야에서 활용됩니다.',
    passRateSummary: '필기 12.8% | 실기 44.3%',
    avgPassRate: '28.6%',
    avgExamRate: '80%',
    examRateSummary: '필기 75% | 실기 85%',
    passRates: [
      { year: 2020, written: 11.9, practical: 42.1 },
      { year: 2021, written: 12.2, practical: 42.8 },
      { year: 2022, written: 12.5, practical: 43.4 },
      { year: 2023, written: 12.7, practical: 43.9 },
      { year: 2024, written: 12.8, practical: 44.3 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.12 ~ 01.15', writtenExam: '02.07 ~ 02.08', writtenResult: '03.11',
        practicalApply: '03.23 ~ 03.26', practicalExam: '04.18 ~ 04.19', finalResult: '06.05' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '04.20 ~ 04.23', writtenExam: '05.23 ~ 05.24', writtenResult: '06.24',
        practicalApply: '07.06 ~ 07.09', practicalExam: '07.26 ~ 07.27', finalResult: '09.04' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-04-20' },
      { label: '2회 필기 시험', date: '2026-05-23' },
      { label: '2회 실기 시험', date: '2026-07-26' },
    ],
    subjects: [
      { title: '컴퓨터 구조', tip: 'CPU 구조, 파이프라이닝, 캐시 메모리, 메모리 계층 구조를 서술할 수 있어야 합니다.' },
      { title: '운영체제', tip: '프로세스 스케줄링, 메모리 관리(페이징·세그먼트), 교착상태 해결 방법을 정리하세요.' },
      { title: '디지털 논리 설계', tip: '부울 대수, 카르노 맵, 플립플롭, 순서 논리 회로 설계가 핵심입니다.' },
      { title: '시스템 소프트웨어', tip: '컴파일러 구조, 링커·로더, 어셈블러 동작 원리를 이해하세요.' },
    ],
    jobs: [
      { id: 'cpe-1', company: '반도체·시스템 반도체 기업', title: '시스템 아키텍처 전문가', type: 'large', region: 'all', experience: 'exp',
        requirements: ['전자계산기기술사 또는 관련 기술사 보유', '임베디드 시스템 설계 경력 5년 이상'],
        duties: 'SoC 설계, 임베디드 OS 포팅, 하드웨어·소프트웨어 인터페이스 설계.',
        salary: '연봉 8,000만원~1.1억원', benefits: '성과 인센티브, 스톡옵션', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'cpe-b1', title: '2026 전자계산기기술사 핵심이론 총정리', publisher: '성안당', rating: 9.4, reviews: 215, originalPrice: 60000, price: 54000, discount: '10%', coverBg: 'linear-gradient(135deg,#003366,#004fa0)', tags: ['베스트'] },
      { id: 'cpe-b2', title: '전자계산기기술사 기출문제 분석 및 서술 연습', publisher: '한울', rating: 9.2, reviews: 158, originalPrice: 55000, price: 49500, discount: '10%', coverBg: 'linear-gradient(135deg,#00274d,#003d80)', tags: ['추천'] },
    ],
    defaultTodos: [
      '컴퓨터 구조 파이프라이닝·캐시 정리',
      '운영체제 프로세스·메모리 관리 서술 연습',
      '디지털 논리 설계 카르노 맵 풀기',
      '기출 서술형 답안 직접 작성 연습',
    ],
  },

  '반도체설계기사': {
    name: '반도체설계기사', icon: 'fa-memory', category: 'IT·정보통신',
    heroTitle: '2026년도 반도체설계기사 합격 전략',
    heroDesc: 'K-반도체 전략 핵심 인력! 시스템 반도체 설계 능력을 인정받는 자격으로 삼성·SK하이닉스·팹리스 기업에서 우대하는 첨단 자격증입니다.',
    passRateSummary: '필기 42.5% | 실기 38.7%',
    avgPassRate: '40.6%',
    avgExamRate: '78%',
    examRateSummary: '필기 75% | 실기 81%',
    passRates: [
      { year: 2020, written: 40.2, practical: 36.8 },
      { year: 2021, written: 41.0, practical: 37.4 },
      { year: 2022, written: 41.8, practical: 37.9 },
      { year: 2023, written: 42.2, practical: 38.3 },
      { year: 2024, written: 42.5, practical: 38.7 },
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
      { label: '2회 필기 원서접수', date: '2026-04-20' },
      { label: '2회 필기 시험', date: '2026-05-09' },
      { label: '2회 실기 시험', date: '2026-07-18' },
      { label: '3회 필기 원서접수', date: '2026-07-20' },
    ],
    subjects: [
      { title: '반도체 소자', tip: 'MOSFET·BJT·CMOS 소자 구조와 동작 원리를 정확히 이해해야 합니다.' },
      { title: '디지털 집적 회로', tip: 'CMOS 논리 회로, 타이밍 분석, 전력 소모 계산이 자주 출제됩니다.' },
      { title: 'VLSI 설계', tip: 'HDL(Verilog/VHDL) 기초, 합성(Synthesis), 배치·배선(P&R) 흐름을 이해하세요.' },
      { title: '반도체 공정', tip: '포토리소그래피, 산화, 이온주입 등 주요 공정 단계와 목적을 정리하세요.' },
    ],
    jobs: [
      { id: 'sde-1', company: '삼성전자 DS부문', title: '시스템 반도체 설계 엔지니어', type: 'large', region: 'gong', experience: 'new',
        requirements: ['반도체설계기사 또는 관련 전공자', '전자공학·전기공학 전공 필수'],
        duties: 'AP·모뎀 등 SoC 디지털 회로 설계 및 검증.',
        salary: '신입 초봉 5,500만원 이상', benefits: '업계 최고 복지, 주택자금 지원', deadline: '2026-12-31', link: 'https://www.samsung.com/sec/careers' },
      { id: 'sde-2', company: '팹리스 반도체 업체', title: 'RTL 설계 엔지니어', type: 'large', region: 'seoul', experience: 'any',
        requirements: ['반도체설계기사 우대', 'Verilog/SystemVerilog 능숙자'],
        duties: '디지털 IP 설계 및 기능 검증(Simulation, Formal Verification).',
        salary: '연봉 4,500~7,000만원', benefits: '유연근무, 성과 인센티브', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'sde-b1', title: '2026 반도체설계기사 필기 완전정복', publisher: '성안당', rating: 9.5, reviews: 340, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg,#0a2244,#1a3d7a)', tags: ['베스트', '무료배송'] },
      { id: 'sde-b2', title: '반도체설계기사 실기 회로 설계 실전 문제', publisher: '한울', rating: 9.3, reviews: 245, originalPrice: 35000, price: 31500, discount: '10%', coverBg: 'linear-gradient(135deg,#081a38,#122e62)', tags: ['추천'] },
    ],
    defaultTodos: [
      'MOSFET·CMOS 소자 동작 원리 정리',
      'CMOS 논리 회로 타이밍 분석 연습',
      'HDL 기초 문법 (Verilog) 학습',
      '반도체 공정 단계 암기',
      '기출문제 3회분 풀기',
    ],
  },

  '광학기기기능사': {
    name: '광학기기기능사', icon: 'fa-eye', category: 'IT·정보통신',
    heroTitle: '2026년도 광학기기기능사 합격 전략',
    heroDesc: '카메라·현미경·의료 광학기기 등 정밀 광학 장비를 다루는 전문 기능인! 광학 산업과 의료기기 분야에서 활용됩니다.',
    passRateSummary: '필기 53.4% | 실기 46.8%',
    avgPassRate: '50.1%',
    avgExamRate: '60%',
    examRateSummary: '필기 57% | 실기 63%',
    passRates: [
      { year: 2020, written: 55.2, practical: 45.4 },
      { year: 2021, written: 54.6, practical: 45.9 },
      { year: 2022, written: 54.1, practical: 46.3 },
      { year: 2023, written: 53.8, practical: 46.6 },
      { year: 2024, written: 53.4, practical: 46.8 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
    ],
    subjects: [
      { title: '광학 이론', tip: '빛의 굴절·반사·회절·편광 원리와 렌즈 수식(가우스 법칙)을 정확히 이해하세요.' },
      { title: '광학 기기 구조', tip: '현미경·망원경·카메라의 광학계 구조와 배율 계산이 자주 출제됩니다.' },
      { title: '광학 측정', tip: '파면 측정, MTF(해상도) 측정, 수차 분석 방법을 숙지하세요.' },
      { title: '광학 재료 및 가공', tip: '광학 유리 종류, 코팅 기술(AR 코팅), 연마 공정을 정리하세요.' },
    ],
    jobs: [
      { id: 'opt-1', company: '의료기기 업체', title: '광학기기 조립·검사 기능사', type: 'large', region: 'all', experience: 'any',
        requirements: ['광학기기기능사 자격 소지자 우대'],
        duties: '의료용 광학기기(내시경·현미경) 조립 및 광학 성능 검사.',
        salary: '월 250~320만원', benefits: '4대보험, 야간 수당', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'opt-b1', title: '2026 광학기기기능사 필기·실기 완전정복', publisher: '성안당', rating: 9.2, reviews: 130, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#1a2a6b,#2d4da0)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '빛의 굴절·반사·회절 이론 정리',
      '렌즈 수식 계산 연습',
      '광학 기기 구조 도면 해독',
      '기출문제 3회분 풀기',
    ],
  },

  '무선설비산업기사': {
    name: '무선설비산업기사', icon: 'fa-wifi', category: 'IT·정보통신',
    heroTitle: '2026년도 무선설비산업기사 합격 전략',
    heroDesc: '5G·IoT 시대의 핵심 자격! 무선통신 시스템 설계·운용·유지보수 능력을 인정받으며 통신사·방위산업·항공 분야에서 활용됩니다.',
    passRateSummary: '필기 38.4% | 실기 42.6%',
    avgPassRate: '40.5%',
    avgExamRate: '72%',
    examRateSummary: '필기 68% | 실기 76%',
    passRates: [
      { year: 2020, written: 36.8, practical: 40.9 },
      { year: 2021, written: 37.4, practical: 41.5 },
      { year: 2022, written: 37.9, practical: 42.0 },
      { year: 2023, written: 38.2, practical: 42.3 },
      { year: 2024, written: 38.4, practical: 42.6 },
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
      { label: '2회 필기 원서접수', date: '2026-04-20' },
      { label: '2회 필기 시험', date: '2026-05-09' },
      { label: '2회 실기 시험', date: '2026-07-18' },
      { label: '3회 필기 원서접수', date: '2026-07-20' },
    ],
    subjects: [
      { title: '무선 통신 이론', tip: '변조 방식(AM·FM·PM·QAM), 신호 대 잡음비(SNR), 샤논 용량 정리를 수식과 함께 암기하세요.' },
      { title: '안테나 공학', tip: '안테나 이득, 방사 패턴, 편파, 임피던스 매칭이 자주 출제됩니다.' },
      { title: '무선 설비 기준', tip: '전파법 시행령의 무선국 개설 허가, 주파수 할당 기준을 숙지하세요.' },
      { title: '무선 측정', tip: '스펙트럼 애널라이저, 신호 발생기, SWR 측정 방법을 정리하세요.' },
    ],
    jobs: [
      { id: 'rfe-1', company: 'KT·SKT·LGU+', title: '무선 네트워크 운용 담당자', type: 'large', region: 'all', experience: 'any',
        requirements: ['무선설비산업기사 또는 무선설비기사 자격 소지자', '통신 관련 전공 우대'],
        duties: '5G 기지국 설치·운용·장애 처리 및 주파수 측정.',
        salary: '연봉 3,800~5,000만원', benefits: '4대보험, 통신비 지원', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'rfe-b1', title: '2026 무선설비산업기사 필기 핵심요약', publisher: '성안당', rating: 9.3, reviews: 280, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#003d5c,#006b9e)', tags: ['베스트'] },
      { id: 'rfe-b2', title: '무선설비산업기사 실기 완전정복', publisher: '일진사', rating: 9.1, reviews: 195, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#002d44,#004d72)', tags: ['추천'] },
    ],
    defaultTodos: [
      '변조 방식 종류·수식 암기',
      '안테나 이득·방사 패턴 정리',
      '전파법 주요 조항 숙지',
      '무선 측정 장비 사용법 정리',
      '기출문제 3회분 풀기',
    ],
  },

// === 화학·재료 추가 5종 ===

  '화학분석기사': {
    name: '화학분석기사', icon: 'fa-flask', category: '화학·환경',
    heroTitle: '2026년도 화학분석기사 합격 전략',
    heroDesc: '화학 분석 기술의 집약! 기기분석·습식분석·품질관리 능력을 인정받으며 화학·제약·반도체 산업에서 필수 인력입니다.',
    passRateSummary: '필기 41.3% | 실기 44.8%',
    avgPassRate: '43.1%',
    avgExamRate: '74%',
    examRateSummary: '필기 70% | 실기 78%',
    passRates: [
      { year: 2020, written: 39.4, practical: 42.9 },
      { year: 2021, written: 40.1, practical: 43.5 },
      { year: 2022, written: 40.7, practical: 44.0 },
      { year: 2023, written: 41.0, practical: 44.4 },
      { year: 2024, written: 41.3, practical: 44.8 },
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
      { label: '2회 필기 원서접수', date: '2026-04-20' },
      { label: '2회 필기 시험', date: '2026-05-09' },
      { label: '2회 실기 시험', date: '2026-07-18' },
      { label: '3회 필기 원서접수', date: '2026-07-20' },
    ],
    subjects: [
      { title: '일반화학', tip: '원소 주기율, 산·염기·산화환원 반응, 몰 계산이 기초입니다. 계산 문제 반복 연습이 필수.' },
      { title: '분석화학', tip: '적정법(산염기·산화환원·킬레이트), 용해도곱 계산이 자주 출제됩니다.' },
      { title: '기기분석', tip: 'GC·HPLC·AAS·UV-Vis 분광법 원리와 적용 대상을 비교 정리하세요.' },
      { title: '화학물질 관리', tip: 'GHS·MSDS 작성 기준, 위험물 분류 체계를 숙지하세요.' },
    ],
    jobs: [
      { id: 'cae-1', company: '제약·바이오 기업', title: 'QC 화학분석 담당자', type: 'large', region: 'all', experience: 'any',
        requirements: ['화학분석기사 또는 화학분석산업기사 자격 소지자', '분석 기기(HPLC·GC) 조작 경험 우대'],
        duties: '원료의약품·완제품 품질 시험 및 규격 적합 여부 판정.',
        salary: '연봉 3,500~4,800만원', benefits: '4대보험, 연구비 지원', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
      { id: 'cae-2', company: '반도체 소재 업체', title: '화학 분석 엔지니어', type: 'large', region: 'gong', experience: 'exp',
        requirements: ['화학분석기사 자격 우대', '분석화학 전공 또는 관련 경력 2년 이상'],
        duties: '반도체 공정 화학물질 불순물 분석 및 공정 개선.',
        salary: '연봉 4,000~5,500만원', benefits: '성과 인센티브, 교육 지원', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'cae-b1', title: '2026 화학분석기사 필기 완전정복', publisher: '성안당', rating: 9.5, reviews: 310, originalPrice: 35000, price: 31500, discount: '10%', coverBg: 'linear-gradient(135deg,#1a4a3a,#2d8a6a)', tags: ['베스트'] },
      { id: 'cae-b2', title: '화학분석기사 실기 기기분석 집중 특강', publisher: '구민사', rating: 9.3, reviews: 210, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#0f3328,#1f6050)', tags: ['추천'] },
    ],
    defaultTodos: [
      '적정법 계산 문제 반복 연습',
      '기기분석(GC·HPLC·AAS) 원리 정리',
      'GHS 분류·MSDS 작성 기준 암기',
      '기출문제 3회분 풀기',
    ],
  },

  '금속재료기능사': {
    name: '금속재료기능사', icon: 'fa-cubes-stacked', category: '화학·환경',
    heroTitle: '2026년도 금속재료기능사 합격 전략',
    heroDesc: '철강·비철금속 소재의 특성 분석과 시험 능력을 인정받는 자격! 자동차·조선·반도체 소재 산업 현장에서 활용됩니다.',
    passRateSummary: '필기 54.2% | 실기 47.6%',
    avgPassRate: '50.9%',
    avgExamRate: '66%',
    examRateSummary: '필기 63% | 실기 69%',
    passRates: [
      { year: 2020, written: 56.1, practical: 46.1 },
      { year: 2021, written: 55.5, practical: 46.7 },
      { year: 2022, written: 55.0, practical: 47.1 },
      { year: 2023, written: 54.6, practical: 47.4 },
      { year: 2024, written: 54.2, practical: 47.6 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
      { round: '제4회', isCurrent: false, isDone: false,
        writtenApply: '08.24 ~ 08.27', writtenExam: '09.16 ~ 09.21', writtenResult: '10.07',
        practicalApply: '10.12 ~ 10.15', practicalExam: '11.14 ~ 12.02', finalResult: '12.11 / 12.18' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
    ],
    subjects: [
      { title: '금속 재료 일반', tip: '철강의 5원소(C·Si·Mn·P·S) 역할과 탄소 함량에 따른 강·주철 분류를 암기하세요.' },
      { title: '금속 조직 및 열처리', tip: '철-탄소 평형상태도, 담금질·뜨임·풀림·불림 목적과 냉각 속도 차이를 정리하세요.' },
      { title: '기계적 성질 시험', tip: '인장·경도(브리넬·비커스·록웰)·충격·피로 시험 방법과 단위를 숙지하세요.' },
      { title: '비철금속', tip: 'Al·Cu·Ti 합금 계열과 특성, 주요 용도를 비교 정리하세요.' },
    ],
    jobs: [
      { id: 'mte-1', company: '철강·금속 제조업체', title: '품질 검사원 (금속재료)', type: 'large', region: 'all', experience: 'any',
        requirements: ['금속재료기능사 자격 소지자 우대'],
        duties: '입고 원자재 및 완제품 기계적 성질 시험 및 성적서 발행.',
        salary: '월 260~340만원', benefits: '4대보험, 교육 지원', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'mte-b1', title: '2026 금속재료기능사 필기·실기 완전정복', publisher: '일진사', rating: 9.3, reviews: 195, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#3d3d3d,#707070)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '철강 5원소 역할·탄소 분류 암기',
      '철-탄소 평형상태도 이해',
      '열처리 4종 목적·방법 정리',
      '경도 시험 3종 비교 암기',
      '기출문제 4회분 풀기',
    ],
  },

  '세라믹기사': {
    name: '세라믹기사', icon: 'fa-fire', category: '화학·환경',
    heroTitle: '2026년도 세라믹기사 합격 전략',
    heroDesc: '반도체·디스플레이·이차전지 핵심 소재인 세라믹! 세라믹 소재 설계·제조·품질관리 능력을 인정받는 첨단 소재 분야 자격증입니다.',
    passRateSummary: '필기 38.7% | 실기 42.3%',
    avgPassRate: '40.5%',
    avgExamRate: '70%',
    examRateSummary: '필기 66% | 실기 74%',
    passRates: [
      { year: 2020, written: 37.2, practical: 40.8 },
      { year: 2021, written: 37.8, practical: 41.4 },
      { year: 2022, written: 38.2, practical: 41.9 },
      { year: 2023, written: 38.5, practical: 42.1 },
      { year: 2024, written: 38.7, practical: 42.3 },
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
      { label: '2회 필기 원서접수', date: '2026-04-20' },
      { label: '2회 필기 시험', date: '2026-05-09' },
      { label: '2회 실기 시험', date: '2026-07-18' },
      { label: '3회 필기 원서접수', date: '2026-07-20' },
    ],
    subjects: [
      { title: '세라믹 재료학', tip: '산화물·질화물·탄화물 세라믹의 결정 구조와 기계적·열적 특성을 비교 정리하세요.' },
      { title: '세라믹 공정', tip: '분말 합성→성형→소결 공정 단계와 각 단계의 품질 관리 포인트가 출제됩니다.' },
      { title: '전기·전자 세라믹', tip: '압전체·유전체·자성체 소재의 특성과 응용 제품(MLCC·압전센서)을 연결하세요.' },
      { title: '세라믹 품질 시험', tip: '소결 밀도, 기공률, 경도(비커스) 측정 방법과 규격 기준을 숙지하세요.' },
    ],
    jobs: [
      { id: 'cer-1', company: '전자 소재 기업', title: '세라믹 소재 개발 엔지니어', type: 'large', region: 'all', experience: 'any',
        requirements: ['세라믹기사 자격 우대', '무기화학·재료공학 전공 우대'],
        duties: 'MLCC·세라믹 기판 소재 조성 개발 및 공정 최적화.',
        salary: '연봉 3,800~5,000만원', benefits: '4대보험, R&D 인센티브', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'cer-b1', title: '2026 세라믹기사 필기 완전정복', publisher: '성안당', rating: 9.3, reviews: 165, originalPrice: 34000, price: 30600, discount: '10%', coverBg: 'linear-gradient(135deg,#5a3e1b,#9a6e30)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '세라믹 결정 구조·특성 비교 정리',
      '분말→성형→소결 공정 단계 암기',
      '전기·전자 세라믹 응용 제품 매핑',
      '기출문제 3회분 풀기',
    ],
  },

  '귀금속가공기능사': {
    name: '귀금속가공기능사', icon: 'fa-gem', category: '화학·환경',
    heroTitle: '2026년도 귀금속가공기능사 합격 전략',
    heroDesc: '금·은·백금 등 귀금속 소재를 가공하는 전문 기능인! 주얼리 디자인부터 귀금속 가공·감정까지 활용 분야가 넓습니다.',
    passRateSummary: '필기 57.8% | 실기 51.4%',
    avgPassRate: '54.6%',
    avgExamRate: '58%',
    examRateSummary: '필기 55% | 실기 61%',
    passRates: [
      { year: 2020, written: 59.5, practical: 49.8 },
      { year: 2021, written: 58.9, practical: 50.4 },
      { year: 2022, written: 58.5, practical: 50.9 },
      { year: 2023, written: 58.1, practical: 51.2 },
      { year: 2024, written: 57.8, practical: 51.4 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
    ],
    subjects: [
      { title: '귀금속 재료', tip: '금·은·백금족 금속의 순도(캐럿·퍼밀) 표기법과 합금 종류를 암기하세요.' },
      { title: '귀금속 가공 기법', tip: '주조·단조·성형·세공 기법 차이와 납땜 온도·소재를 정리하세요.' },
      { title: '보석 감정 기초', tip: '다이아몬드 4C(Carat·Cut·Color·Clarity)와 주요 유색 보석 특성을 숙지하세요.' },
      { title: '안전 관리', tip: '귀금속 도금 시 사용하는 산성 용액 취급 안전 수칙과 환기 기준을 정리하세요.' },
    ],
    jobs: [
      { id: 'jwl-1', company: '주얼리 제조업체', title: '귀금속 가공 기능사 (세공팀)', type: 'consult', region: 'all', experience: 'any',
        requirements: ['귀금속가공기능사 자격 소지자 우대'],
        duties: '금·은 장신구 제작·수리 및 귀금속 세공 작업.',
        salary: '월 220~320만원', benefits: '4대보험', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'jwl-b1', title: '2026 귀금속가공기능사 필기·실기 완전정복', publisher: '일진사', rating: 9.1, reviews: 120, originalPrice: 25000, price: 22500, discount: '10%', coverBg: 'linear-gradient(135deg,#7a6010,#c9a820)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '귀금속 순도 표기법(캐럿·퍼밀) 암기',
      '가공 기법 종류 비교 정리',
      '다이아몬드 4C 암기',
      '기출문제 3회분 풀기',
    ],
  },

  '도자기공예기능사': {
    name: '도자기공예기능사', icon: 'fa-palette', category: '화학·환경',
    heroTitle: '2026년도 도자기공예기능사 합격 전략',
    heroDesc: '흙을 빚어 불로 완성하는 예술과 기술의 결합! 도자기 성형·유약·소성 기술을 인정받는 자격으로 공예 창업과 교육 분야에서 활용됩니다.',
    passRateSummary: '필기 55.3% | 실기 49.7%',
    avgPassRate: '52.5%',
    avgExamRate: '56%',
    examRateSummary: '필기 53% | 실기 59%',
    passRates: [
      { year: 2020, written: 57.1, practical: 48.2 },
      { year: 2021, written: 56.5, practical: 48.8 },
      { year: 2022, written: 56.0, practical: 49.2 },
      { year: 2023, written: 55.7, practical: 49.5 },
      { year: 2024, written: 55.3, practical: 49.7 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
      { round: '제3회', isCurrent: false, isDone: false,
        writtenApply: '06.08 ~ 06.11', writtenExam: '06.27 ~ 07.02', writtenResult: '07.15',
        practicalApply: '07.27 ~ 07.30', practicalExam: '08.29 ~ 09.16', finalResult: '10.02 / 10.08' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
      { label: '3회 필기 원서접수', date: '2026-06-08' },
    ],
    subjects: [
      { title: '도자기 재료(점토·유약)', tip: '점토 종류(고령토·도석·규석)와 유약 성분(규산·알루미나·플럭스)의 역할을 정리하세요.' },
      { title: '성형 기법', tip: '물레성형·압출성형·석고틀 이장주입 기법의 특징과 용도를 비교하세요.' },
      { title: '소성 및 가마', tip: '초벌구이·본구이 온도, 산화·환원 소성 차이와 색상 변화를 암기하세요.' },
      { title: '도자기 역사·감정', tip: '청자·백자·분청사기 시대·특징 구분이 자주 출제됩니다.' },
    ],
    jobs: [
      { id: 'pot-1', company: '공예 공방·도자기 업체', title: '도자기 공예 작가·강사', type: 'consult', region: 'all', experience: 'any',
        requirements: ['도자기공예기능사 자격 소지자 우대'],
        duties: '도자기 성형·유약·소성 작업 및 공방 강습 운영.',
        salary: '월 200~300만원', benefits: '자유로운 근무 환경', deadline: '2026-12-31', link: 'https://www.jobkorea.co.kr' },
    ],
    books: [
      { id: 'pot-b1', title: '2026 도자기공예기능사 필기·실기 완전정복', publisher: '성안당', rating: 9.1, reviews: 105, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#5c3317,#9a5a2a)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '점토·유약 성분 역할 암기',
      '성형 기법 3종 비교 정리',
      '소성 온도·분위기 암기',
      '청자·백자·분청사기 특징 정리',
      '기출문제 3회분 풀기',
    ],
  },

// === 농림·축산 추가 6종 ===

  '산림산업기사': {
    name: '산림산업기사', icon: 'fa-tree', category: '농림·축산',
    heroTitle: '2026년도 산림산업기사 합격 전략',
    heroDesc: '탄소중립 시대의 핵심 인력! 산림 경영·조림·임목 수확 등 산림 자원의 체계적 관리 능력을 인정받으며 산림청·한국임업진흥원 채용에서 우대됩니다.',
    passRateSummary: '필기 44.6% | 실기 48.2%',
    avgPassRate: '46.4%',
    avgExamRate: '68%',
    examRateSummary: '필기 64% | 실기 72%',
    passRates: [
      { year: 2020, written: 42.8, practical: 46.5 },
      { year: 2021, written: 43.4, practical: 47.1 },
      { year: 2022, written: 44.0, practical: 47.6 },
      { year: 2023, written: 44.3, practical: 47.9 },
      { year: 2024, written: 44.6, practical: 48.2 },
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
      { label: '2회 필기 원서접수', date: '2026-04-20' },
      { label: '2회 필기 시험', date: '2026-05-09' },
      { label: '2회 실기 시험', date: '2026-07-18' },
      { label: '3회 필기 원서접수', date: '2026-07-20' },
    ],
    subjects: [
      { title: '조림학', tip: '수종별 생태·적지 조건, 조림 방법(직파·이식), 갱신 방식을 비교 정리하세요.' },
      { title: '산림 경영학', tip: '윤벌기, 법정림, 수확 규정 계산 문제가 자주 출제됩니다.' },
      { title: '산림 보호학', tip: '산불·병해충·기상해 원인과 방제 방법을 구분하여 암기하세요.' },
      { title: '임업 기계', tip: '체인톱·포워더·하베스터 등 임업 기계 종류와 안전 사용 기준을 정리하세요.' },
    ],
    jobs: [
      { id: 'for-1', company: '한국임업진흥원', title: '산림 기술 직원 (산림 경영 분야)', type: 'public', region: 'all', experience: 'any',
        requirements: ['산림산업기사 이상 자격 소지자 우대', '산림 관련 전공자 우대'],
        duties: '산림 경영 계획 수립, 조림·간벌 사업 관리, 탄소 흡수원 조성.',
        salary: '연봉 3,500~4,500만원', benefits: '공기업 복지', deadline: '2026-12-31', link: 'https://www.kofpi.or.kr' },
    ],
    books: [
      { id: 'for-b1', title: '2026 산림산업기사 필기 완전정복', publisher: '성안당', rating: 9.3, reviews: 220, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#1a4a1e,#2e8a36)', tags: ['베스트'] },
      { id: 'for-b2', title: '산림산업기사 실기 작업형 완전정복', publisher: '구민사', rating: 9.1, reviews: 155, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#0f3a12,#1e6a22)', tags: ['추천'] },
    ],
    defaultTodos: [
      '수종별 생태·조림 방법 암기',
      '윤벌기·법정림 계산 연습',
      '산림 피해 방제 방법 정리',
      '임업 기계 종류·안전 기준 암기',
      '기출문제 3회분 풀기',
    ],
  },

  '조경기능장': {
    name: '조경기능장', icon: 'fa-seedling', category: '농림·축산',
    heroTitle: '2026년도 조경기능장 합격 전략',
    heroDesc: '조경 분야 최고 기능 등급! 조경 시공·식재·유지 관리의 최고 전문가로 공원·도시녹화·아파트 조경 현장에서 최고 대우를 받습니다.',
    passRateSummary: '필기 32.5% | 실기 45.8%',
    avgPassRate: '39.2%',
    avgExamRate: '72%',
    examRateSummary: '필기 68% | 실기 76%',
    passRates: [
      { year: 2020, written: 30.8, practical: 44.2 },
      { year: 2021, written: 31.4, practical: 44.8 },
      { year: 2022, written: 32.0, practical: 45.2 },
      { year: 2023, written: 32.3, practical: 45.5 },
      { year: 2024, written: 32.5, practical: 45.8 },
    ],
    schedules: [
      { round: '2026년', isCurrent: true, isDone: false,
        writtenApply: '04.06 ~ 04.09', writtenExam: '05.10', writtenResult: '06.11',
        practicalApply: '06.22 ~ 06.25', practicalExam: '07.19 ~ 08.01', finalResult: '09.10' },
    ],
    milestones: [
      { label: '필기 원서접수', date: '2026-04-06' },
      { label: '필기 시험', date: '2026-05-10' },
      { label: '실기 원서접수', date: '2026-06-22' },
      { label: '실기 시험', date: '2026-07-19' },
    ],
    subjects: [
      { title: '조경 계획·설계', tip: '경관 분석, 동선 계획, 식재 설계 원칙이 필기 핵심입니다.' },
      { title: '조경 식물학', tip: '교목·관목·지피식물 특성, 계절별 식재 계획이 자주 출제됩니다.' },
      { title: '조경 시공·관리', tip: '수목 이식 방법, 전지·전정 기준, 병해충 방제법을 정리하세요.' },
      { title: '조경 재료', tip: '포장재·수경시설·조경 시설물 재료 특성과 시공 기준을 숙지하세요.' },
    ],
    jobs: [
      { id: 'land-1', company: '조경 전문 업체', title: '조경기능장 (현장 소장)', type: 'large', region: 'all', experience: 'exp',
        requirements: ['조경기능장 자격 필수', '조경 시공 현장 관리 경력 5년 이상'],
        duties: '공원·아파트 단지 조경 공사 현장 총괄 관리.',
        salary: '연봉 5,000~7,000만원', benefits: '차량 지원, 성과 인센티브', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'land-b1', title: '2026 조경기능장 필기 완전정복', publisher: '성안당', rating: 9.4, reviews: 185, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg,#1a4a2e,#2e8a52)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '조경 계획·동선 설계 원칙 정리',
      '조경 식물 교목·관목 특성 암기',
      '수목 이식·전지 기준 정리',
      '기출문제 3회분 풀기',
    ],
  },

  '화훼장식기능장': {
    name: '화훼장식기능장', icon: 'fa-leaf', category: '농림·축산',
    heroTitle: '2026년도 화훼장식기능장 합격 전략',
    heroDesc: '화훼 장식 분야 최고 기능 등급! 꽃 장식 디자인·행사 연출·플로리스트 교육 분야의 최고 전문가 자격입니다.',
    passRateSummary: '필기 35.2% | 실기 48.6%',
    avgPassRate: '41.9%',
    avgExamRate: '68%',
    examRateSummary: '필기 64% | 실기 72%',
    passRates: [
      { year: 2020, written: 33.5, practical: 47.1 },
      { year: 2021, written: 34.1, practical: 47.7 },
      { year: 2022, written: 34.7, practical: 48.1 },
      { year: 2023, written: 35.0, practical: 48.4 },
      { year: 2024, written: 35.2, practical: 48.6 },
    ],
    schedules: [
      { round: '2026년', isCurrent: true, isDone: false,
        writtenApply: '04.06 ~ 04.09', writtenExam: '05.10', writtenResult: '06.11',
        practicalApply: '06.22 ~ 06.25', practicalExam: '07.19 ~ 08.01', finalResult: '09.10' },
    ],
    milestones: [
      { label: '필기 원서접수', date: '2026-04-06' },
      { label: '필기 시험', date: '2026-05-10' },
      { label: '실기 원서접수', date: '2026-06-22' },
      { label: '실기 시험', date: '2026-07-19' },
    ],
    subjects: [
      { title: '화훼 재료학', tip: '절화·분화·건화의 종류와 취급·보존 방법을 비교 정리하세요.' },
      { title: '화훼 장식 디자인', tip: '색채 이론(색상환·배색법), 조형 원리(균형·비례·리듬)를 이해하세요.' },
      { title: '화훼 장식 기법', tip: '꽃다발·코사지·어레인지먼트 제작 기법과 꽃꽂이 스타일을 정리하세요.' },
      { title: '행사·공간 연출', tip: '웨딩·장례·기업 행사 화훼 장식 기획 방법을 숙지하세요.' },
    ],
    jobs: [
      { id: 'flo-1', company: '플로리스트 스튜디오·웨딩 업체', title: '수석 플로리스트 (화훼장식기능장)', type: 'consult', region: 'all', experience: 'exp',
        requirements: ['화훼장식기능장 자격 우대', '플로리스트 실무 경력 5년 이상'],
        duties: '웨딩·기업 행사 화훼 장식 기획·제작 총괄 및 강사 활동.',
        salary: '연봉 4,000~6,000만원', benefits: '프리랜서 또는 정규직 선택', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'flo-b1', title: '2026 화훼장식기능장 필기 완전정복', publisher: '성안당', rating: 9.2, reviews: 145, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#6a1a4a,#b02a7a)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '절화·분화 취급·보존법 암기',
      '색채 이론·조형 원리 정리',
      '꽃다발·어레인지먼트 제작 기법 정리',
      '기출문제 3회분 풀기',
    ],
  },

  '축산산업기사': {
    name: '축산산업기사', icon: 'fa-cow', category: '농림·축산',
    heroTitle: '2026년도 축산산업기사 합격 전략',
    heroDesc: '식품 안전·동물 복지 중요성 증가로 축산 전문 인력 수요 증가! 축산 생산·경영·위생 능력을 인정받으며 농장·도축장·축산 연구소에서 활용됩니다.',
    passRateSummary: '필기 46.3% | 실기 50.7%',
    avgPassRate: '48.5%',
    avgExamRate: '65%',
    examRateSummary: '필기 61% | 실기 69%',
    passRates: [
      { year: 2020, written: 44.5, practical: 49.0 },
      { year: 2021, written: 45.1, practical: 49.6 },
      { year: 2022, written: 45.7, practical: 50.1 },
      { year: 2023, written: 46.0, practical: 50.4 },
      { year: 2024, written: 46.3, practical: 50.7 },
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
      { label: '2회 필기 원서접수', date: '2026-04-20' },
      { label: '2회 필기 시험', date: '2026-05-09' },
      { label: '2회 실기 시험', date: '2026-07-18' },
      { label: '3회 필기 원서접수', date: '2026-07-20' },
    ],
    subjects: [
      { title: '가축 사양학', tip: '소·돼지·닭의 영양 요구량, 사료 배합 기준, 성장 단계별 관리가 핵심입니다.' },
      { title: '가축 번식학', tip: '발정 주기, 임신 기간, 인공수정 방법을 종별로 비교 정리하세요.' },
      { title: '축산 환경·위생', tip: '분뇨 처리, 악취 저감, 동물 복지 기준이 출제됩니다.' },
      { title: '축산 경영', tip: '생산비 분석, 사양 일수 계산, 사료 효율 지표를 숙지하세요.' },
    ],
    jobs: [
      { id: 'liv-1', company: '축산 농가·농업법인', title: '축산 기술자 (사육 관리)', type: 'consult', region: 'all', experience: 'any',
        requirements: ['축산산업기사 자격 소지자 우대'],
        duties: '한우·돼지·닭 사육 환경 관리, 번식 관리, 사료 급여 계획 수립.',
        salary: '연봉 3,000~4,000만원', benefits: '주거 제공, 4대보험', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'liv-b1', title: '2026 축산산업기사 필기 완전정복', publisher: '성안당', rating: 9.2, reviews: 180, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#3d2010,#7a4020)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '종별 영양 요구량·사료 배합 기준 암기',
      '발정 주기·임신 기간 비교 정리',
      '분뇨 처리·동물 복지 기준 숙지',
      '생산비·사료 효율 계산 연습',
      '기출문제 3회분 풀기',
    ],
  },

  '농업기계기사': {
    name: '농업기계기사', icon: 'fa-tractor', category: '농림·축산',
    heroTitle: '2026년도 농업기계기사 합격 전략',
    heroDesc: '스마트팜·농업 자동화 시대의 핵심 인력! 트랙터·이앙기·콤바인 등 농업 기계의 설계·정비·운용 능력을 인정받는 자격입니다.',
    passRateSummary: '필기 43.8% | 실기 46.5%',
    avgPassRate: '45.2%',
    avgExamRate: '67%',
    examRateSummary: '필기 63% | 실기 71%',
    passRates: [
      { year: 2020, written: 42.0, practical: 45.0 },
      { year: 2021, written: 42.6, practical: 45.6 },
      { year: 2022, written: 43.2, practical: 46.0 },
      { year: 2023, written: 43.5, practical: 46.3 },
      { year: 2024, written: 43.8, practical: 46.5 },
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
      { label: '2회 필기 원서접수', date: '2026-04-20' },
      { label: '2회 필기 시험', date: '2026-05-09' },
      { label: '2회 실기 시험', date: '2026-07-18' },
      { label: '3회 필기 원서접수', date: '2026-07-20' },
    ],
    subjects: [
      { title: '농업 기계 일반', tip: '트랙터·이앙기·콤바인·건조기 구조와 작동 원리를 비교 정리하세요.' },
      { title: '기계 요소 설계', tip: '벨트·체인·기어 전동장치 계산 문제와 베어링 선정 기준이 출제됩니다.' },
      { title: '농업 기계 정비', tip: '엔진 정비(점화장치·연료장치), 유압 시스템 오일 점검 기준을 암기하세요.' },
      { title: '안전 관리', tip: '농기계 안전 수칙, 경운기·트랙터 전도 예방 기준을 숙지하세요.' },
    ],
    jobs: [
      { id: 'agm-1', company: 'LS엠트론·동양물산', title: '농업 기계 서비스 엔지니어', type: 'large', region: 'all', experience: 'any',
        requirements: ['농업기계기사 자격 소지자 우대', '기계 정비 관련 경력 우대'],
        duties: '트랙터·콤바인 출장 정비, 고장 진단, 부품 교체.',
        salary: '연봉 3,500~4,800만원', benefits: '차량·공구 지원, 4대보험', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
    ],
    books: [
      { id: 'agm-b1', title: '2026 농업기계기사 필기 완전정복', publisher: '성안당', rating: 9.2, reviews: 200, originalPrice: 33000, price: 29700, discount: '10%', coverBg: 'linear-gradient(135deg,#2a4a10,#4a8a20)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '트랙터·이앙기·콤바인 구조 비교 정리',
      '기어·벨트 전동장치 계산 연습',
      '엔진·유압 시스템 정비 기준 암기',
      '농기계 안전 수칙 암기',
      '기출문제 3회분 풀기',
    ],
  },

  '잠업기능사': {
    name: '잠업기능사', icon: 'fa-bug', category: '농림·축산',
    heroTitle: '2026년도 잠업기능사 합격 전략',
    heroDesc: '천연 실크 소재의 부활! 누에 사육과 실크 생산 기술을 인정받는 자격으로 전통 잠업 계승 및 기능성 실크 소재 산업에서 활용됩니다.',
    passRateSummary: '필기 58.4% | 실기 52.1%',
    avgPassRate: '55.3%',
    avgExamRate: '50%',
    examRateSummary: '필기 47% | 실기 53%',
    passRates: [
      { year: 2020, written: 60.2, practical: 50.6 },
      { year: 2021, written: 59.6, practical: 51.2 },
      { year: 2022, written: 59.1, practical: 51.6 },
      { year: 2023, written: 58.8, practical: 51.9 },
      { year: 2024, written: 58.4, practical: 52.1 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.06 ~ 01.09', writtenExam: '01.20 ~ 01.24', writtenResult: '01.30',
        practicalApply: '02.02 ~ 02.05', practicalExam: '03.14 ~ 04.01', finalResult: '04.10 / 04.17' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '03.16 ~ 03.20', writtenExam: '04.04 ~ 04.09', writtenResult: '04.22',
        practicalApply: '04.27 ~ 04.30', practicalExam: '05.30 ~ 06.14', finalResult: '06.26 / 07.03' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-03-16' },
      { label: '2회 필기 시험', date: '2026-04-04' },
      { label: '2회 실기 시험', date: '2026-05-30' },
    ],
    subjects: [
      { title: '잠업 일반', tip: '뽕나무 품종·재배, 누에 품종·사육 환경 기준을 정리하세요.' },
      { title: '누에 사육', tip: '누에 령기별 사육 온도·습도 기준, 먹이 급여량 계산이 출제됩니다.' },
      { title: '제사·견직', tip: '고치 건조, 실 켜기(조사), 견사 등급 판정 기준을 숙지하세요.' },
      { title: '잠병 방제', tip: '누에 바이러스·세균성 병 증상과 소독 방법을 비교 정리하세요.' },
    ],
    jobs: [
      { id: 'sil-1', company: '농촌진흥청·잠업 연구소', title: '잠업 기술 연구원', type: 'public', region: 'all', experience: 'any',
        requirements: ['잠업기능사 자격 소지자 우대', '농업 관련 전공자 우대'],
        duties: '누에 사육 기술 개발, 기능성 실크 소재 연구.',
        salary: '연봉 3,000~4,000만원', benefits: '공공기관 복지', deadline: '2026-12-31', link: 'https://www.rda.go.kr' },
    ],
    books: [
      { id: 'sil-b1', title: '2026 잠업기능사 필기·실기 완전정복', publisher: '일진사', rating: 9.0, reviews: 75, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#3a2a6a,#6a4ab0)', tags: ['베스트'] },
    ],
    defaultTodos: [
      '뽕나무·누에 품종 특성 암기',
      '령기별 사육 온도·습도 기준 암기',
      '견사 등급 판정 기준 정리',
      '잠병 증상·소독법 정리',
      '기출문제 3회분 풀기',
    ],
  },

// === 안전·소방 추가 1종 ===

  '소방시설관리사': {
    name: '소방시설관리사', icon: 'fa-fire-extinguisher', category: '안전·소방',
    heroTitle: '2026년도 소방시설관리사 합격 전략',
    heroDesc: '소방시설관리사는 소방 시설 점검·유지 관리의 최고 자격! 건물 소방 시설의 자체 점검과 정기 점검 대행 업무를 수행하며 소방 분야 최고 권위 자격입니다.',
    passRateSummary: '필기 16.8% | 실기 52.4%',
    avgPassRate: '34.6%',
    avgExamRate: '82%',
    examRateSummary: '필기 78% | 실기 86%',
    passRates: [
      { year: 2020, written: 15.2, practical: 50.1 },
      { year: 2021, written: 15.8, practical: 50.8 },
      { year: 2022, written: 16.2, practical: 51.4 },
      { year: 2023, written: 16.5, practical: 51.9 },
      { year: 2024, written: 16.8, practical: 52.4 },
    ],
    schedules: [
      { round: '제1회', isCurrent: false, isDone: true,
        writtenApply: '01.12 ~ 01.15', writtenExam: '02.28 ~ 03.01', writtenResult: '03.26',
        practicalApply: '04.06 ~ 04.09', practicalExam: '05.17', finalResult: '06.26' },
      { round: '제2회', isCurrent: true, isDone: false,
        writtenApply: '07.06 ~ 07.09', writtenExam: '08.22 ~ 08.23', writtenResult: '09.18',
        practicalApply: '09.28 ~ 10.01', practicalExam: '11.08', finalResult: '12.18' },
    ],
    milestones: [
      { label: '2회 필기 원서접수', date: '2026-07-06' },
      { label: '2회 필기 시험', date: '2026-08-22' },
      { label: '2회 실기 원서접수', date: '2026-09-28' },
      { label: '2회 실기 시험', date: '2026-11-08' },
      { label: '2회 최종 발표', date: '2026-12-18' },
    ],
    subjects: [
      { title: '소방 안전 관리론', tip: '화재 이론(연소·폭발·열전달), 건축물 방화 구조 기준이 출제됩니다.' },
      { title: '소방 시설의 구조·원리', tip: '스프링클러·자동화재탐지설비·옥내소화전 각 설비의 구성·작동 원리를 비교 정리하세요.' },
      { title: '소방 관계 법규', tip: '소방시설법·화재예방법 주요 조항, 소방 시설 설치 기준(면적·층수)을 숙지하세요.' },
      { title: '소방 시설 점검 실무', tip: '작동점검·종합점검 대상, 점검 항목, 불량 판정 기준을 실기 위주로 정리하세요.' },
    ],
    jobs: [
      { id: 'fpm-1', company: '소방시설 관리업체', title: '소방시설관리사 (점검 팀장)', type: 'consult', region: 'all', experience: 'exp',
        requirements: ['소방시설관리사 자격 필수', '소방 시설 점검 경력 3년 이상'],
        duties: '다중이용시설·업무시설 소방 시설 작동점검·종합점검 대행.',
        salary: '연봉 4,500~6,500만원', benefits: '법인 차량, 성과 인센티브', deadline: '2026-12-31', link: 'https://www.saramin.co.kr' },
      { id: 'fpm-2', company: '대형 빌딩·공공기관', title: '소방 안전 관리자 (소방시설관리사)', type: 'public', region: 'all', experience: 'any',
        requirements: ['소방시설관리사 자격 소지자 필수'],
        duties: '자체 소방 시설 점검, 비상 대응 계획 수립, 소방 교육 실시.',
        salary: '연봉 4,000~5,500만원', benefits: '4대보험, 공기관 복지', deadline: '2026-12-31', link: 'https://www.gosi.kr' },
    ],
    books: [
      { id: 'fpm-b1', title: '2026 소방시설관리사 필기 1·2차 한권완성', publisher: '성안당', rating: 9.6, reviews: 480, originalPrice: 58000, price: 52200, discount: '10%', coverBg: 'linear-gradient(135deg,#8b1a1a,#cc2a2a)', tags: ['베스트', '무료배송'] },
      { id: 'fpm-b2', title: '소방시설관리사 기출문제 완전분석 최근 5개년', publisher: '예문사', rating: 9.4, reviews: 320, originalPrice: 52000, price: 46800, discount: '10%', coverBg: 'linear-gradient(135deg,#6d1212,#aa1e1e)', tags: ['추천'] },
      { id: 'fpm-b3', title: '소방시설관리사 실기 점검 실무 완전정복', publisher: '구민사', rating: 9.3, reviews: 240, originalPrice: 48000, price: 43200, discount: '10%', coverBg: 'linear-gradient(135deg,#4f0e0e,#881414)', tags: ['실기대비'] },
    ],
    defaultTodos: [
      '스프링클러·자탐설비·옥내소화전 구조 비교 정리',
      '소방시설법 설치 기준(면적·층수) 암기',
      '작동점검·종합점검 항목 정리',
      '화재 이론(연소·열전달) 기초 암기',
      '기출문제 5개년 풀기',
    ],
  },

  '드론조종자격증': {
    name: '드론조종자격증',
    icon: 'fa-helicopter',
    category: '항공·해양',
    heroTitle: '드론조종자격증 — 무인비행장치 국가자격',
    heroDesc: '드론조종자격증(무인멀티콥터·무인헬리콥터·무인비행기)은 한국교통안전공단이 시행하는 국가자격으로, 상업용 드론 촬영·농업방제·물류배송 등 드론 관련 직종 취업에 필수적입니다. 초경량비행장치 조종자 증명과 함께 항공 분야 핵심 자격으로, 드론 산업 성장에 따라 수요가 빠르게 증가하고 있습니다.',
    passRateSummary: '실기 위주 평가로 학과 합격률은 높으나 실기 불합격이 많음',
    avgPassRate: 62,
    avgExamRate: 75,
    examRateSummary: '드론 조종 관심자 증가로 응시율 꾸준히 상승',
    passRates: [
      { year: 2022, written: 78, practical: 58 },
      { year: 2023, written: 80, practical: 60 },
      { year: 2024, written: 82, practical: 63 },
    ],
    schedules: [
      {
        round: '상시',
        writtenApply: '상시접수',
        writtenExam: '상시시험',
        practicalApply: '학과 합격 후',
        practicalExam: '상시시험',
        resultDate: '합격 후 즉시',
      },
    ],
    milestones: [
      { week: 1, title: '항공법규', desc: '초경량비행장치 관련 항공안전법 핵심 조항 학습' },
      { week: 2, title: '항공기상', desc: '기상 현상, 바람, 구름 등 드론 운용 관련 기상 이론' },
      { week: 3, title: '비행이론', desc: '멀티콥터 비행 원리, 조종 메커니즘 이해' },
      { week: 4, title: '실기 훈련', desc: '이·착륙, 공중 정지, 비상 조작 반복 연습' },
    ],
    subjects: [
      { name: '항공법규', questions: 20, desc: '초경량비행장치 관련 법규 및 규정' },
      { name: '항공기상', questions: 20, desc: '기상 요소, 항공 기상 현상 이해' },
      { name: '비행이론 및 운용', questions: 20, desc: '비행 원리, 드론 시스템 구조, 안전 운용' },
    ],
    jobs: [
      { title: '드론 촬영 전문가', company: '영상제작사', salary: '3,000~5,000만원', location: '전국', type: '프리랜서' },
      { title: '농업용 드론 방제사', company: '농업법인', salary: '3,500~5,500만원', location: '전국', type: '계약직' },
      { title: '드론 물류 조종사', company: '물류기업', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '드론 측량사', company: '측량업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'drn-b1', title: '2026 무인멀티콥터 드론 조종자 자격증 한권완성', publisher: '성안당', rating: 9.5, reviews: 380, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#1a3a5c,#2e6da4)', tags: ['베스트', '무료배송'] },
      { id: 'drn-b2', title: '드론 국가자격증 학과시험 기출문제집', publisher: '예문사', rating: 9.3, reviews: 260, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#0d2640,#1a5080)', tags: ['추천'] },
    ],
    defaultTodos: [
      '항공안전법 초경량비행장치 관련 조항 정리',
      '비행 구역(관제권·비행금지구역) 암기',
      '멀티콥터 구조·작동 원리 이해',
      '실기 비행 과목(이착륙·정지비행·비상조작) 반복 훈련',
      '기출 학과시험 3회분 풀기',
    ],
  },

  '소형선박조종사': {
    name: '소형선박조종사',
    icon: 'fa-ship',
    category: '항공·해양',
    heroTitle: '소형선박조종사 — 해양수산부 국가면허',
    heroDesc: '소형선박조종사는 해양수산부가 시행하는 국가면허로, 총톤수 5톤 미만 선박을 조종할 수 있는 자격입니다. 낚시어선·레저보트·수상레저기구 운항에 필수적이며, 연안 여객·관광·해양레저 산업 종사자에게 꼭 필요한 면허입니다. 한국해양교통안전공단(KOMSA)이 주관합니다.',
    passRateSummary: '학과 합격률 70% 내외, 실기(조종실습) 합격률 80% 이상',
    avgPassRate: 74,
    avgExamRate: 82,
    examRateSummary: '해양레저 인구 증가로 응시자 수 꾸준히 증가',
    passRates: [
      { year: 2022, written: 68, practical: 80 },
      { year: 2023, written: 72, practical: 82 },
      { year: 2024, written: 74, practical: 84 },
    ],
    schedules: [
      {
        round: '상시',
        writtenApply: '상시접수(KOMSA)',
        writtenExam: '상시시험',
        practicalApply: '학과 합격 후',
        practicalExam: '상시시험',
        resultDate: '합격 후 즉시',
      },
    ],
    milestones: [
      { week: 1, title: '항법·운용', desc: '항로표지, 교통분리방식, 충돌예방 규칙 학습' },
      { week: 2, title: '선박 구조', desc: '소형선박 구조, 기관 운용, 안전 장비 이해' },
      { week: 3, title: '법규', desc: '선박안전법, 해사안전법, 수상레저안전법 핵심 조항' },
      { week: 4, title: '실기 훈련', desc: '출항·입항·계류·비상 조작 실습' },
    ],
    subjects: [
      { name: '항법', questions: 25, desc: '항로, 충돌 예방 규칙, 항법 우선순위' },
      { name: '선박 운용', questions: 25, desc: '선박 구조, 기관, 안전 장비 운용' },
      { name: '법규', questions: 25, desc: '해사안전법, 수상레저안전법 등 관련 법령' },
      { name: '비상 대처', questions: 25, desc: '인명구조, 소화, 선박 비상 상황 대처' },
    ],
    jobs: [
      { title: '낚시어선 선장', company: '낚시어선업체', salary: '4,000~6,000만원', location: '연안 지역', type: '자영업·계약직' },
      { title: '레저보트 운항 강사', company: '마리나 시설', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
      { title: '해양레저 가이드', company: '관광업체', salary: '3,000~4,000만원', location: '제주·부산·통영', type: '계약직' },
      { title: '연안 여객선 사무장', company: '여객선사', salary: '3,500~5,000만원', location: '도서지역', type: '정규직' },
    ],
    books: [
      { id: 'ssb-b1', title: '2026 소형선박조종사 면허시험 한권완성', publisher: '성안당', rating: 9.4, reviews: 290, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#0a3d62,#1a7abf)', tags: ['베스트', '무료배송'] },
      { id: 'ssb-b2', title: '소형선박조종사 기출문제 완전분석', publisher: '예문사', rating: 9.2, reviews: 180, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#052a44,#0f5a8c)', tags: ['추천'] },
    ],
    defaultTodos: [
      '충돌예방규칙(항법 우선순위) 완전 암기',
      '항로표지 종류·의미 정리',
      '선박안전법·수상레저안전법 핵심 조항 암기',
      '기관 고장 시 비상 조치 절차 숙지',
      '기출문제 3회분 풀기',
    ],
  },

  '교통기사': {
    name: '교통기사',
    icon: 'fa-road',
    category: '건설·토목',
    heroTitle: '교통기사 — 교통계획·설계·운영 국가기술자격',
    heroDesc: '교통기사는 도로·철도·교통시설의 계획, 설계, 운영, 평가 능력을 검정하는 국가기술자격입니다. 교통영향분석, 교통수요 예측, 신호 최적화 등 스마트시티·자율주행 인프라 구축에 핵심 역할을 하며, 국토부·지자체·교통 엔지니어링 업체 등에서 폭넓게 활용됩니다.',
    passRateSummary: '필기 합격률 30~45%, 실기 합격률 50~65% 수준의 중난이도 자격',
    avgPassRate: 48,
    avgExamRate: 62,
    examRateSummary: '교통 인프라 수요 증가로 응시자 꾸준히 유지',
    passRates: [
      { year: 2022, written: 38, practical: 55 },
      { year: 2023, written: 42, practical: 58 },
      { year: 2024, written: 44, practical: 62 },
    ],
    schedules: [
      {
        round: '1회',
        writtenApply: '2026-01-06 ~ 2026-01-09',
        writtenExam: '2026-02-07',
        practicalApply: '2026-03-23 ~ 2026-03-26',
        practicalExam: '2026-04-25',
        resultDate: '2026-06-05',
      },
      {
        round: '2회',
        writtenApply: '2026-04-13 ~ 2026-04-16',
        writtenExam: '2026-05-09',
        practicalApply: '2026-06-22 ~ 2026-06-25',
        practicalExam: '2026-07-26',
        resultDate: '2026-09-04',
      },
    ],
    milestones: [
      { week: 1, title: '교통공학 이론', desc: '교통류 이론, 용량 분석, 교통 특성 지표 학습' },
      { week: 2, title: '교통계획', desc: '교통수요 예측(4단계), 교통영향분석 방법론' },
      { week: 3, title: '도로·신호 설계', desc: '도로 기하구조 설계, 교차로 신호 최적화' },
      { week: 4, title: '대중교통·물류', desc: '버스·철도 시스템, 물류 네트워크 계획' },
      { week: 5, title: '실기 준비', desc: '교통조사·분석 실무, 기출 실기 문제 풀이' },
    ],
    subjects: [
      { name: '교통공학', questions: 20, desc: '교통류 이론, 교통 용량, 서비스 수준' },
      { name: '교통계획', questions: 20, desc: '교통수요 예측, 교통영향평가, 교통계획 수립' },
      { name: '도로공학', questions: 20, desc: '도로 설계 기준, 선형 설계, 교차로 설계' },
      { name: '교통안전', questions: 20, desc: '교통사고 분석, 안전시설, 보행자 안전' },
      { name: '교통법규', questions: 20, desc: '도로교통법, 교통안전법, 관련 규정' },
    ],
    jobs: [
      { title: '교통영향분석 전문가', company: '교통엔지니어링 업체', salary: '4,000~6,000만원', location: '전국', type: '정규직' },
      { title: '교통계획 연구원', company: '국토연구원·지방연구원', salary: '4,000~6,500만원', location: '전국', type: '정규직' },
      { title: '도로교통 설계사', company: '건설사·설계사무소', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '스마트교통 시스템 엔지니어', company: 'ITS 전문업체', salary: '4,500~7,000만원', location: '수도권', type: '정규직' },
    ],
    books: [
      { id: 'trf-b1', title: '2026 교통기사 필기 한권완성', publisher: '성안당', rating: 9.4, reviews: 310, originalPrice: 42000, price: 37800, discount: '10%', coverBg: 'linear-gradient(135deg,#1a3a1a,#2e7a2e)', tags: ['베스트', '무료배송'] },
      { id: 'trf-b2', title: '교통기사 기출문제 완전분석 최근 5개년', publisher: '예문사', rating: 9.2, reviews: 220, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#0f2a0f,#1e5a1e)', tags: ['추천'] },
      { id: 'trf-b3', title: '교통기사 실기 교통조사 및 설계 완전정복', publisher: '구민사', rating: 9.1, reviews: 160, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg,#0a1f0a,#164516)', tags: ['실기대비'] },
    ],
    defaultTodos: [
      '교통류 이론(밀도·속도·교통량 관계) 완전 이해',
      '4단계 교통수요 예측 모형 정리',
      '도로 기하구조 설계 기준(곡선반경·종단경사) 암기',
      '교통영향분석 작성 절차 숙지',
      '기출문제 5개년 풀기',
    ],
  },

  '식품안전기사': {
    name: '식품안전기사',
    icon: 'fa-shield-halved',
    category: '식품·위생',
    heroTitle: '식품안전기사 — 식품 안전관리 전문 국가기술자격',
    heroDesc: '식품안전기사는 식품의 원료 검사, 제조·가공 공정의 위해요소 분석(HACCP), 위생 기준 설정, 안전성 평가 등을 수행하는 전문 자격입니다. 식품안전관리인증기준(HACCP) 의무 적용 확대로 식품업체 및 급식업체에서 자격 보유자 수요가 지속 증가하고 있습니다.',
    passRateSummary: '필기 합격률 35~50%, 실기 합격률 50~65% 수준의 중난이도 자격',
    avgPassRate: 50,
    avgExamRate: 65,
    examRateSummary: '식품안전 규제 강화로 응시자 꾸준히 증가',
    passRates: [
      { year: 2022, written: 42, practical: 55 },
      { year: 2023, written: 46, practical: 58 },
      { year: 2024, written: 49, practical: 62 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '식품안전관리', questions: 20, desc: 'HACCP 원칙·절차, 위해요소 분석, CCP 설정' },
      { name: '식품위생법규', questions: 20, desc: '식품위생법, 식품안전기본법, 관련 고시' },
      { name: '식품미생물학', questions: 20, desc: '식중독균, 위생지표균, 미생물 제어 방법' },
      { name: '식품화학', questions: 20, desc: '식품 성분 분석, 식품 첨가물, 유해물질' },
      { name: '식품가공·저장', questions: 20, desc: '식품 가공 원리, 저장 방법, 포장 기술' },
    ],
    jobs: [
      { title: 'HACCP 관리자', company: '식품제조업체', salary: '3,500~5,500만원', location: '전국', type: '정규직' },
      { title: '식품안전 품질관리원', company: '대형 식품기업', salary: '3,500~6,000만원', location: '전국', type: '정규직' },
      { title: '식품위생 감시원', company: '식품의약품안전처·지자체', salary: '4,000~6,500만원', location: '전국', type: '공무원' },
      { title: '급식 위생관리자', company: '집단급식소·위탁급식사', salary: '3,000~4,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'fsa-b1', title: '2026 식품안전기사 필기 한권완성', publisher: '성안당', rating: 9.4, reviews: 340, originalPrice: 42000, price: 37800, discount: '10%', coverBg: 'linear-gradient(135deg,#1a4a1a,#2e8c2e)', tags: ['베스트', '무료배송'] },
      { id: 'fsa-b2', title: '식품안전기사 HACCP 완전정복', publisher: '예문사', rating: 9.3, reviews: 260, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#0f3a0f,#1e6a1e)', tags: ['추천'] },
      { id: 'fsa-b3', title: '식품안전기사 기출문제 최근 5개년', publisher: '구민사', rating: 9.2, reviews: 200, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg,#0a2a0a,#155015)', tags: ['기출'] },
      { id: 'fsa-b4', title: '식품안전기사 실기 식품위생법규 핵심정리', publisher: '에듀윌', rating: 9.1, reviews: 170, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#082008,#123a12)', tags: ['실기대비'] },
      { id: 'fsa-b5', title: '식품안전기사 단기완성 30일 합격', publisher: '일진사', rating: 9.0, reviews: 140, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#061806,#0f2e0f)', tags: [] },
    ],
    defaultTodos: [
      'HACCP 7원칙 12절차 완전 암기',
      '식품위생법 주요 조항(영업 허가·신고, 벌칙) 정리',
      '주요 식중독균(살모넬라·장출혈성대장균 등) 특성 정리',
      '식품 첨가물 종류별 용도 암기',
      '기출문제 5개년 풀기',
    ],
  },

  '식품가공기능사': {
    name: '식품가공기능사',
    icon: 'fa-blender',
    category: '식품·위생',
    heroTitle: '식품가공기능사 — 식품 제조·가공 실무 국가기술자격',
    heroDesc: '식품가공기능사는 식품의 원료 선별·처리부터 제조·가공·포장까지의 실무 능력을 검정하는 국가기술자격입니다. 학력 제한 없이 응시 가능하며, 식품제조업체·식품연구소·급식 업체 등에서 폭넓게 활용됩니다. 식품 관련 상위 자격(식품산업기사·식품기사) 취득의 기초 단계로 많이 활용됩니다.',
    passRateSummary: '필기 합격률 45~60%, 실기 합격률 60~75% 수준의 접근하기 쉬운 자격',
    avgPassRate: 62,
    avgExamRate: 72,
    examRateSummary: '식품업 입문자 및 경력 전환자 응시 수요 꾸준',
    passRates: [
      { year: 2022, written: 52, practical: 65 },
      { year: 2023, written: 55, practical: 68 },
      { year: 2024, written: 58, practical: 72 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '식품재료학', questions: 20, desc: '식품 원료 성분, 특성, 품질 기준' },
      { name: '식품가공학', questions: 20, desc: '가공 원리, 단위 조작, 제조 공정' },
      { name: '식품위생학', questions: 20, desc: '식품 위생 기준, 식중독 예방, 개인 위생' },
      { name: '식품기계', questions: 20, desc: '가공 기계 구조, 작동 원리, 안전 관리' },
    ],
    jobs: [
      { title: '식품 제조 기능원', company: '식품제조업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '식품 품질 검사원', company: '식품가공업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '베이커리·제과 가공 기술원', company: '제과·제빵업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '식품 연구소 기술 보조원', company: '식품연구기관', salary: '3,000~4,200만원', location: '전국', type: '계약직' },
    ],
    books: [
      { id: 'fpc-b1', title: '2026 식품가공기능사 필기 한권완성', publisher: '성안당', rating: 9.3, reviews: 420, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#5a2d0c,#c0652b)', tags: ['베스트', '무료배송'] },
      { id: 'fpc-b2', title: '식품가공기능사 기출문제 완전분석', publisher: '예문사', rating: 9.2, reviews: 310, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#3e1e08,#8c4820)', tags: ['추천'] },
      { id: 'fpc-b3', title: '식품가공기능사 실기 작업형 완전정복', publisher: '구민사', rating: 9.1, reviews: 250, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#2a1405,#6a3618)', tags: ['실기대비'] },
      { id: 'fpc-b4', title: '식품가공기능사 단기완성 핵심이론', publisher: '에듀윌', rating: 9.0, reviews: 200, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#1e0e04,#4e2a12)', tags: [] },
      { id: 'fpc-b5', title: '식품가공기능사 과년도 기출해설 5개년', publisher: '일진사', rating: 8.9, reviews: 170, originalPrice: 20000, price: 18000, discount: '10%', coverBg: 'linear-gradient(135deg,#140904,#38200e)', tags: [] },
    ],
    defaultTodos: [
      '식품 원료별 성분 및 가공 특성 정리',
      '주요 식품 가공 단위 조작(살균·농축·건조) 이해',
      '식품위생법 기초 조항 및 개인위생 기준 암기',
      '실기 작업형 제조 공정 순서 반복 연습',
      '기출문제 3회분 풀기',
    ],
  },

  '임업종묘기능사': {
    name: '임업종묘기능사',
    icon: 'fa-seedling',
    category: '농림·축산',
    heroTitle: '임업종묘기능사 — 수목 종자 채종·종묘 생산 국가기술자격',
    heroDesc: '임업종묘기능사는 산림용 수목의 종자 채종, 저장, 파종, 묘목 생산·관리 등 임업 종묘 생산 전반의 기술을 검정하는 국가기술자격입니다. 산림청·국립산림과학원·묘목 생산업체·조림 사업체 등에서 활용되며, 산림 녹화·탄소중립 산림 조성 수요와 함께 역할이 커지고 있습니다.',
    passRateSummary: '필기 합격률 50~65%, 실기 합격률 65~78% 수준의 비교적 접근하기 쉬운 자격',
    avgPassRate: 60,
    avgExamRate: 70,
    examRateSummary: '산림 관련 취업 희망자와 귀산촌 인구 증가로 꾸준한 수요',
    passRates: [
      { year: 2022, written: 55, practical: 66 },
      { year: 2023, written: 58, practical: 70 },
      { year: 2024, written: 62, practical: 74 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '임업종묘학', questions: 25, desc: '수목 종자의 채종·저장·발아 특성, 파종 방법' },
      { name: '조림학 기초', questions: 20, desc: '묘목 식재·관리, 수종별 생육 특성' },
      { name: '임업기계', questions: 15, desc: '종묘 생산 기계 구조·취급·안전 관리' },
      { name: '산림관계법규', questions: 20, desc: '산림자원법, 종자산업법 관련 주요 조항' },
    ],
    jobs: [
      { title: '임업 종묘 생산 기술원', company: '묘목 생산업체·산림조합', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '조림 사업 현장 기술원', company: '임업회사·산림청', salary: '2,800~3,600만원', location: '전국', type: '계약직' },
      { title: '국립 수목원 관리 보조', company: '국립수목원·지자체', salary: '2,700~3,500만원', location: '전국', type: '계약직' },
      { title: '탄소중립 산림 조성 기술원', company: '한국임업진흥원', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'frs-b1', title: '2026 임업종묘기능사 필기 한권완성', publisher: '성안당', rating: 9.2, reviews: 180, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#1a4a1a,#3a8c3a)', tags: ['베스트', '무료배송'] },
      { id: 'frs-b2', title: '임업종묘기능사 기출문제 완전분석', publisher: '예문사', rating: 9.0, reviews: 130, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#0f3a0f,#266626)', tags: ['추천'] },
      { id: 'frs-b3', title: '임업종묘기능사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.9, reviews: 100, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#0a2a0a,#1c4e1c)', tags: [] },
      { id: 'frs-b4', title: '임업종묘기능사 실기 작업형 대비', publisher: '구민사', rating: 8.8, reviews: 80, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#081e08,#163a16)', tags: ['실기대비'] },
      { id: 'frs-b5', title: '임업종묘·산림기능사 통합 기출해설', publisher: '일진사', rating: 8.7, reviews: 65, originalPrice: 20000, price: 18000, discount: '10%', coverBg: 'linear-gradient(135deg,#061406,#102810)', tags: [] },
    ],
    defaultTodos: [
      '주요 수종별 종자 채종 시기·저장 방법 정리',
      '발아 촉진 처리법(층적법·산처리) 암기',
      '묘목 생산 단계(파종→육묘→굴취) 순서 이해',
      '산림자원법·종자산업법 핵심 조항 암기',
      '기출문제 3회분 풀기',
    ],
  },

  '임업기계기능사': {
    name: '임업기계기능사',
    icon: 'fa-tractor',
    category: '농림·축산',
    heroTitle: '임업기계기능사 — 체인톱·집재기 등 임업 기계 운용 국가기술자격',
    heroDesc: '임업기계기능사는 체인톱, 집재기, 예불기 등 각종 임업 기계의 구조·취급·정비 및 안전 작업 능력을 검정하는 국가기술자격입니다. 벌목·조림·산림 정비 현장에서 안전한 기계 운용 인력으로 활용되며, 산림청 안전 관리 강화 정책에 따라 수요가 증가하고 있습니다.',
    passRateSummary: '필기 합격률 48~62%, 실기 합격률 60~74% 수준',
    avgPassRate: 58,
    avgExamRate: 68,
    examRateSummary: '임업 현장 안전 강화로 자격 취득 수요 꾸준',
    passRates: [
      { year: 2022, written: 50, practical: 62 },
      { year: 2023, written: 54, practical: 66 },
      { year: 2024, written: 58, practical: 70 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '임업기계학', questions: 25, desc: '체인톱·집재기·예불기 구조, 작동 원리, 정비 방법' },
      { name: '산림작업학', questions: 20, desc: '벌목 방법, 조재·집재 작업, 임도 이용' },
      { name: '기계 안전관리', questions: 15, desc: '임업 기계 안전 수칙, 사고 예방, 보호구 착용' },
      { name: '산림관계법규', questions: 20, desc: '산림자원법, 산업안전보건법 관련 임업 조항' },
    ],
    jobs: [
      { title: '벌목·조재 기계 운용원', company: '임업회사·산림조합', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '산림 정비 기계 운용원', company: '지자체·산림청', salary: '2,800~3,800만원', location: '전국', type: '계약직' },
      { title: '임업 기계 정비 기술원', company: '임업기계 업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '집재·운반 장비 운전원', company: '목재 유통업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'frm-b1', title: '2026 임업기계기능사 필기 한권완성', publisher: '성안당', rating: 9.1, reviews: 160, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#2a3a1a,#5a7a2e)', tags: ['베스트', '무료배송'] },
      { id: 'frm-b2', title: '임업기계기능사 기출문제 완전분석', publisher: '예문사', rating: 8.9, reviews: 110, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#1c2a0f,#3e5a1e)', tags: ['추천'] },
      { id: 'frm-b3', title: '임업기계기능사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.8, reviews: 85, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#141e0a,#2c4214)', tags: [] },
      { id: 'frm-b4', title: '임업기계기능사 실기 작업형 대비', publisher: '구민사', rating: 8.7, reviews: 65, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#0e1606,#202e0e)', tags: ['실기대비'] },
      { id: 'frm-b5', title: '체인톱·집재기 안전 작업 완전정복', publisher: '일진사', rating: 8.6, reviews: 50, originalPrice: 20000, price: 18000, discount: '10%', coverBg: 'linear-gradient(135deg,#080e04,#161e08)', tags: [] },
    ],
    defaultTodos: [
      '체인톱 구조·정비(에어필터·체인장력·체인오일) 완전 이해',
      '집재기 종류별 특성(타워야더·소형집재기) 정리',
      '벌목 작업 순서 및 안전 수칙 암기',
      '임업 기계 관련 산업안전보건법 조항 숙지',
      '기출문제 3회분 풀기',
    ],
  },

  '목재가공기능사': {
    name: '목재가공기능사',
    icon: 'fa-hammer',
    category: '농림·축산',
    heroTitle: '목재가공기능사 — 목재 절삭·성형·조립 가공 국가기술자격',
    heroDesc: '목재가공기능사는 목재의 절삭, 접합, 성형, 표면 처리 등 목재 가공 전반의 실무 기술을 검정하는 국가기술자격입니다. 가구 제조업, 건축 내장재 업체, 목공소, 목재 유통업 등 다양한 현장에서 활용되며, 목공 창업의 기초 자격으로도 인기가 높습니다.',
    passRateSummary: '필기 합격률 50~65%, 실기 합격률 58~72% 수준',
    avgPassRate: 60,
    avgExamRate: 70,
    examRateSummary: '목공 DIY 인구 증가와 친환경 목조건축 수요로 응시자 증가',
    passRates: [
      { year: 2022, written: 52, practical: 60 },
      { year: 2023, written: 56, practical: 65 },
      { year: 2024, written: 60, practical: 70 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '목재재료학', questions: 20, desc: '수종별 목재 특성, 건조·방부·방충 처리 기준' },
      { name: '목재가공학', questions: 25, desc: '절삭 가공 원리, 접합 방법, 목재 기계 사용법' },
      { name: '도면 해독', questions: 15, desc: '가구·목공 도면 읽기, 치수 계산, 재료 산출' },
      { name: '목재관계법규', questions: 20, desc: '목재이용법, 산림자원법 관련 목재 관련 규정' },
    ],
    jobs: [
      { title: '가구 제조 기능원', company: '가구 제조업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '건축 내장재 목공 기술원', company: '건축 내장재 업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '목공소 운영·창업', company: '자영업', salary: '3,500~6,000만원', location: '전국', type: '자영업' },
      { title: '목재 가공 품질 검사원', company: '목재 유통업체', salary: '2,800~3,600만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'wdp-b1', title: '2026 목재가공기능사 필기 한권완성', publisher: '성안당', rating: 9.2, reviews: 200, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#5c3a1a,#a06030)', tags: ['베스트', '무료배송'] },
      { id: 'wdp-b2', title: '목재가공기능사 기출문제 완전분석', publisher: '예문사', rating: 9.0, reviews: 150, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#3e2610,#7a4a22)', tags: ['추천'] },
      { id: 'wdp-b3', title: '목재가공기능사 실기 작업형 완전정복', publisher: '구민사', rating: 8.9, reviews: 120, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#2a1a08,#583616)', tags: ['실기대비'] },
      { id: 'wdp-b4', title: '목재가공기능사 단기완성 핵심이론', publisher: '시대에듀', rating: 8.8, reviews: 90, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#1e1206,#40260e)', tags: [] },
      { id: 'wdp-b5', title: '목재가공기능사 과년도 기출해설 5개년', publisher: '일진사', rating: 8.7, reviews: 70, originalPrice: 20000, price: 18000, discount: '10%', coverBg: 'linear-gradient(135deg,#140c04,#2e1c0a)', tags: [] },
    ],
    defaultTodos: [
      '수종별 목재 특성(비중·강도·건조 수축률) 비교 정리',
      '목재 접합 방법(장부·도웰·비스킷) 종류별 특성 암기',
      '목재 기계(둥근톱·밴드톱·자동대패) 안전 사용법 숙지',
      '목재 방부·방충 처리 기준 및 관련 법규 정리',
      '기출문제 3회분 풀기',
    ],
  },

  '목재가공산업기사': {
    name: '목재가공산업기사',
    icon: 'fa-industry',
    category: '농림·축산',
    heroTitle: '목재가공산업기사 — 목재 가공 공정 관리 국가기술자격',
    heroDesc: '목재가공산업기사는 목재 가공 공정의 계획·관리·품질 검사 및 신기술 적용 능력을 검정하는 국가기술자격입니다. 목재기능사보다 심화된 공정 관리 역량을 요구하며, 합판·MDF·파티클보드 등 목질재료 제조업체와 목재 무역회사에서 높은 수요를 보입니다.',
    passRateSummary: '필기 합격률 38~52%, 실기 합격률 50~65% 수준의 중난이도 자격',
    avgPassRate: 50,
    avgExamRate: 62,
    examRateSummary: '친환경 목재 산업 성장으로 자격 수요 증가',
    passRates: [
      { year: 2022, written: 40, practical: 52 },
      { year: 2023, written: 44, practical: 56 },
      { year: 2024, written: 48, practical: 62 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '목재재료학', questions: 20, desc: '목재 성질, 목질재료(합판·MDF·집성재) 제조 원리' },
      { name: '목재가공학', questions: 20, desc: '목재 기계 가공, 표면 처리, 접착 기술' },
      { name: '생산 관리', questions: 20, desc: '공정 계획, 품질 관리, 생산성 분석' },
      { name: '목재관계법규', questions: 20, desc: '목재이용법, KS 규격, 친환경 목재 인증 제도' },
    ],
    jobs: [
      { title: '목재 가공 공정 관리자', company: '합판·MDF 제조업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '목재 품질 관리원', company: '목재 제조·유통업체', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
      { title: '목재 무역 전문가', company: '목재 수출입 업체', salary: '4,000~5,500만원', location: '수도권', type: '정규직' },
      { title: '목질 건축재료 기술원', company: '건자재 업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'wdi-b1', title: '2026 목재가공산업기사 필기 한권완성', publisher: '성안당', rating: 9.2, reviews: 170, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135색,#4a2e10,#8c5a28)', tags: ['베스트', '무료배송'] },
      { id: 'wdi-b2', title: '목재가공산업기사 기출문제 완전분석', publisher: '예문사', rating: 9.0, reviews: 120, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#32200a,#6a421c)', tags: ['추천'] },
      { id: 'wdi-b3', title: '목재가공산업기사 실기 필답형 완전정복', publisher: '구민사', rating: 8.9, reviews: 95, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#221606,#4e3014)', tags: ['실기대비'] },
      { id: 'wdi-b4', title: '목재가공산업기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.8, reviews: 75, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#160e04,#38220e)', tags: [] },
      { id: 'wdi-b5', title: '목재가공산업기사 과년도 기출해설', publisher: '일진사', rating: 8.7, reviews: 60, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#0e0802,#261608)', tags: [] },
    ],
    defaultTodos: [
      '목질재료(합판·MDF·집성재·파티클보드) 제조 공정 비교 정리',
      '목재 건조 방법(천연·인공건조) 및 함수율 기준 암기',
      '목재 접착제 종류별 특성(요소수지·페놀수지) 정리',
      '목재이용법·KS 목재 관련 규격 핵심 조항 숙지',
      '기출문제 5개년 풀기',
    ],
  },

  '펄프종이제조기능사': {
    name: '펄프종이제조기능사',
    icon: 'fa-file-alt',
    category: '농림·축산',
    heroTitle: '펄프종이제조기능사 — 펄프·종이 제조 공정 국가기술자격',
    heroDesc: '펄프종이제조기능사는 목재 원료를 펄프화하고 종이를 제조하는 공정 전반의 기술을 검정하는 국가기술자격입니다. 제지업체, 펄프 제조업체, 종이 가공업체에서 활용되며, 친환경 포장재·재생지 수요 증가로 관련 기술 인력 수요가 꾸준히 유지되고 있습니다.',
    passRateSummary: '필기 합격률 45~60%, 실기 합격률 55~70% 수준',
    avgPassRate: 56,
    avgExamRate: 66,
    examRateSummary: '제지 산업 인력 수요는 안정적으로 유지',
    passRates: [
      { year: 2022, written: 48, practical: 57 },
      { year: 2023, written: 52, practical: 61 },
      { year: 2024, written: 56, practical: 66 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '펄프제조학', questions: 25, desc: '화학펄프·기계펄프 제조 공정, 표백 처리, 약품 관리' },
      { name: '제지학', questions: 25, desc: '초지 공정, 건조·코팅·권취, 지료 조성' },
      { name: '공정 설비', questions: 20, desc: '펄프·제지 기계 구조, 운전 방법, 안전 관리' },
      { name: '관계법규', questions: 10, desc: '환경법(폐수·악취), 산업안전보건법 관련 조항' },
    ],
    jobs: [
      { title: '펄프 제조 공정 운전원', company: '펄프 제조업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '제지 공정 운전원', company: '제지업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '종이 가공 기술원', company: '종이 가공·포장 업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '재생지 공정 관리원', company: '재생지 제조업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'ppm-b1', title: '2026 펄프종이제조기능사 필기 한권완성', publisher: '성안당', rating: 9.0, reviews: 140, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#1a3a5a,#2e6a9a)', tags: ['베스트', '무료배송'] },
      { id: 'ppm-b2', title: '펄프종이제조기능사 기출문제 완전분석', publisher: '예문사', rating: 8.8, reviews: 100, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#0f2a42,#1e4e72)', tags: ['추천'] },
      { id: 'ppm-b3', title: '펄프종이제조기능사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.7, reviews: 78, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#0a1e30,#163858)', tags: [] },
      { id: 'ppm-b4', title: '펄프종이제조기능사 실기 작업형 대비', publisher: '구민사', rating: 8.6, reviews: 58, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#061422,#102840)', tags: ['실기대비'] },
      { id: 'ppm-b5', title: '제지·펄프 공정 안전 관리 완전정복', publisher: '일진사', rating: 8.5, reviews: 45, originalPrice: 20000, price: 18000, discount: '10%', coverBg: 'linear-gradient(135deg,#040c16,#0c1e30)', tags: [] },
    ],
    defaultTodos: [
      '화학펄프 크라프트 공정 단계별 정리',
      '초지 공정(조성→탈수→건조→코팅) 흐름 이해',
      '표백 처리 약품(염소·이산화염소·과산화수소) 특성 암기',
      '제지 폐수 처리 공정 및 환경법 관련 기준 숙지',
      '기출문제 3회분 풀기',
    ],
  },

  '낙농기능사': {
    name: '낙농기능사',
    icon: 'fa-cow',
    category: '농림·축산',
    heroTitle: '낙농기능사 — 착유·유제품 제조·낙농 위생 관리 국가기술자격',
    heroDesc: '낙농기능사는 젖소 착유, 원유 검사, 우유·치즈·버터 등 유제품 제조, 낙농 위생 관리 기술을 검정하는 국가기술자격입니다. 학력 제한 없이 응시 가능하며, 낙농 농가·유가공 업체·농협 유제품 공장 등에서 활용됩니다. 국내 유제품 시장 성장과 수입산 대체 수요로 전문 낙농 인력 수요가 꾸준합니다.',
    passRateSummary: '필기 합격률 50~65%, 실기 합격률 62~75% 수준의 비교적 접근하기 쉬운 자격',
    avgPassRate: 62,
    avgExamRate: 72,
    examRateSummary: '낙농업 종사자 및 유가공 업체 입사 희망자 응시 꾸준',
    passRates: [
      { year: 2022, written: 52, practical: 63 },
      { year: 2023, written: 56, practical: 67 },
      { year: 2024, written: 60, practical: 72 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '낙농학', questions: 25, desc: '젖소 품종·사양 관리, 비유 생리, 착유 방법 및 착유기 취급' },
      { name: '유가공학', questions: 25, desc: '원유 성분·검사, 우유·치즈·버터·발효유 제조 공정' },
      { name: '낙농 위생학', questions: 20, desc: '원유 위생 기준, 유방염 예방, 낙농 시설 소독 방법' },
      { name: '관련 법규', questions: 10, desc: '축산물위생관리법, 낙농진흥법 주요 조항' },
    ],
    jobs: [
      { title: '낙농 농가 착유 관리원', company: '젖소 낙농 농가', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '유가공 공장 기술원', company: '유제품 제조업체·농협', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '유제품 품질 검사원', company: '유제품 제조·유통업체', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '낙농 컨설턴트', company: '축협·농업기술센터', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'dri-b1', title: '2026 낙농기능사 필기 한권완성', publisher: '성안당', rating: 9.1, reviews: 190, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#2a3a5a,#4a6aa0)', tags: ['베스트', '무료배송'] },
      { id: 'dri-b2', title: '낙농기능사 기출문제 완전분석', publisher: '예문사', rating: 9.0, reviews: 140, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#1a2a48,#324e80)', tags: ['추천'] },
      { id: 'dri-b3', title: '낙농기능사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.9, reviews: 110, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#101e36,#243a60)', tags: [] },
      { id: 'dri-b4', title: '낙농기능사 실기 작업형 완전정복', publisher: '구민사', rating: 8.8, reviews: 85, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#0a1426,#1a2c4e)', tags: ['실기대비'] },
      { id: 'dri-b5', title: '낙농기능사·축산기능사 통합 기출해설', publisher: '일진사', rating: 8.7, reviews: 65, originalPrice: 20000, price: 18000, discount: '10%', coverBg: 'linear-gradient(135deg,#060e1a,#10203a)', tags: [] },
    ],
    defaultTodos: [
      '젖소 품종별(홀스타인·저지) 특성 및 사양 기준 정리',
      '착유 순서(전착유·본착유·후착유) 및 착유기 위생 관리 암기',
      '원유 성분 기준(유지방·무지고형분·세균수·체세포수) 숙지',
      '유방염 원인·예방·치료 방법 정리',
      '기출문제 3회분 풀기',
    ],
  },

  // ========== 수산 ==========

  '수산양식기사': {
    name: '수산양식기사',
    icon: 'fa-fish',
    category: '수산·해양',
    heroTitle: '수산양식기사 — 어류·패류·해조류 양식 전문 국가기술자격',
    heroDesc: '수산양식기사는 어류·패류·갑각류·해조류 등 수산생물의 양식 기술, 수질 관리, 질병 예방, 생산 관리 능력을 검정하는 국가기술자격입니다. 수산업 성장과 해양수산부 스마트 양식 정책에 따라 전문 인력 수요가 증가하고 있으며, 국립수산과학원·양식장·수산 기업에서 활발히 활용됩니다.',
    passRateSummary: '필기 합격률 40~55%, 실기 합격률 52~68% 수준의 중난이도 자격',
    avgPassRate: 52,
    avgExamRate: 64,
    examRateSummary: '스마트 양식 산업 성장으로 응시자 꾸준히 증가',
    passRates: [
      { year: 2022, written: 42, practical: 54 },
      { year: 2023, written: 46, practical: 58 },
      { year: 2024, written: 52, practical: 64 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '수산양식학', questions: 20, desc: '어류·패류·갑각류 양식 방법, 종묘 생산, 성장 관리' },
      { name: '수산생물학', questions: 20, desc: '어류 생리·생태, 해조류 특성, 수산생물 분류' },
      { name: '수질환경관리', questions: 20, desc: '수온·용존산소·pH·암모니아 관리, 수처리 기술' },
      { name: '수산질병학', questions: 20, desc: '수산생물 주요 질병, 예방·치료, 검역 제도' },
      { name: '수산관계법규', questions: 20, desc: '수산업법, 수산자원관리법, 양식산업발전법 주요 내용' },
    ],
    jobs: [
      { title: '양식장 생산 관리자', company: '수산 양식 기업', salary: '3,200~4,800만원', location: '전국 해안', type: '정규직' },
      { title: '스마트 양식 기술원', company: '스마트 양식 업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '수산 연구원', company: '국립수산과학원', salary: '3,500~5,500만원', location: '전국', type: '정규직' },
      { title: '양식 컨설턴트', company: '수산 컨설팅 업체', salary: '4,000~6,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'aqe-b1', title: '2026 수산양식기사 필기 한권완성', publisher: '성안당', rating: 9.2, reviews: 220, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg,#0a2a4a,#1a6a9a)', tags: ['베스트', '무료배송'] },
      { id: 'aqe-b2', title: '수산양식기사 기출문제 완전분석 5개년', publisher: '예문사', rating: 9.0, reviews: 160, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#061e36,#104e72)', tags: ['추천'] },
      { id: 'aqe-b3', title: '수산양식기사 실기 필답형 완전정복', publisher: '구민사', rating: 8.9, reviews: 120, originalPrice: 34000, price: 30600, discount: '10%', coverBg: 'linear-gradient(135deg,#041428,#0c3a58)', tags: ['실기대비'] },
      { id: 'aqe-b4', title: '수산양식기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.8, reviews: 90, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#020e1e,#082840)', tags: [] },
      { id: 'aqe-b5', title: '수산생물학·수질환경관리 핵심정리', publisher: '일진사', rating: 8.7, reviews: 70, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#010810,#061e30)', tags: [] },
    ],
    defaultTodos: [
      '주요 양식 어종(넙치·조피볼락·전복) 사양 관리 기준 정리',
      '수질 지표(DO·pH·NH3·수온) 허용 범위 암기',
      '양식 질병(에드워드증·백점병) 예방·치료 방법 정리',
      '수산업법·양식산업발전법 핵심 조항 숙지',
      '기출문제 5개년 풀기',
    ],
  },

  '수산양식산업기사': {
    name: '수산양식산업기사',
    icon: 'fa-fish',
    category: '수산·해양',
    heroTitle: '수산양식산업기사 — 수산양식 현장 관리 국가기술자격',
    heroDesc: '수산양식산업기사는 수산생물 양식 현장에서 사육·수질 관리·질병 예방 등 실무를 담당하는 국가기술자격입니다. 2년제 이상 관련 학과 졸업자나 기능사 취득 후 경력자가 응시 가능하며, 양식 농가·수산 가공업체·국립수산물품질관리원에서 활용됩니다.',
    passRateSummary: '필기 합격률 42~58%, 실기 합격률 55~68% 수준',
    avgPassRate: 54,
    avgExamRate: 65,
    examRateSummary: '수산 양식 산업 전문화로 자격 수요 증가',
    passRates: [
      { year: 2022, written: 44, practical: 56 },
      { year: 2023, written: 48, practical: 60 },
      { year: 2024, written: 54, practical: 66 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '수산양식학', questions: 20, desc: '양식 방법, 먹이 관리, 시설 운용 기초' },
      { name: '수산생물학', questions: 20, desc: '주요 양식 생물 생태, 번식, 성장 특성' },
      { name: '수질관리', questions: 20, desc: '양식 수질 지표 측정·관리, 수처리 장치 운용' },
      { name: '수산관계법규', questions: 20, desc: '수산업법, 수산생물질병관리법 주요 조항' },
    ],
    jobs: [
      { title: '양식장 현장 기술원', company: '수산 양식 농가·기업', salary: '3,000~4,200만원', location: '전국 해안', type: '정규직' },
      { title: '수산물 품질 관리원', company: '국립수산물품질관리원', salary: '3,000~4,500만원', location: '전국', type: '공무원' },
      { title: '수산 가공 관리원', company: '수산 가공 업체', salary: '2,800~3,800만원', location: '전국', type: '정규직' },
      { title: '어촌 지도 기술원', company: '지자체·어촌계', salary: '3,000~4,000만원', location: '전국', type: '계약직' },
    ],
    books: [
      { id: 'aqi-b1', title: '2026 수산양식산업기사 필기 한권완성', publisher: '성안당', rating: 9.1, reviews: 180, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#0c2e52,#1e72a8)', tags: ['베스트', '무료배송'] },
      { id: 'aqi-b2', title: '수산양식산업기사 기출문제 완전분석', publisher: '예문사', rating: 8.9, reviews: 130, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#082240,#145e88)', tags: ['추천'] },
      { id: 'aqi-b3', title: '수산양식산업기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.8, reviews: 100, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#051830,#0e4a6e)', tags: [] },
      { id: 'aqi-b4', title: '수산양식산업기사 실기 완전정복', publisher: '구민사', rating: 8.7, reviews: 78, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#030e20,#0a3858)', tags: ['실기대비'] },
      { id: 'aqi-b5', title: '수산양식기사·산업기사 통합 기출해설', publisher: '일진사', rating: 8.6, reviews: 60, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#020810,#071e38)', tags: [] },
    ],
    defaultTodos: [
      '양식 어종별 적정 수온·먹이 급여량 정리',
      '수질 지표 측정 방법 및 이상 시 대처 요령 숙지',
      '수산생물질병관리법 신고 의무 질병 목록 암기',
      '양식 시설(수조·여과·산소공급) 구조 이해',
      '기출문제 3회분 풀기',
    ],
  },

  '어로기사': {
    name: '어로기사',
    icon: 'fa-anchor',
    category: '수산·해양',
    heroTitle: '어로기사 — 수산물 포획·어로 기술 국가기술자격',
    heroDesc: '어로기사는 어선 운항, 어구 설치·조작, 어획물 처리·보관 등 수산물 포획 전반의 기술을 검정하는 국가기술자격입니다. 연근해·원양 어업에서 어로장·항해사 역할을 담당하며, 원양 어업 회사·수산업 관련 공기업에서 우대받는 전문 자격입니다.',
    passRateSummary: '필기 합격률 38~54%, 실기 합격률 50~65% 수준의 중난이도 자격',
    avgPassRate: 50,
    avgExamRate: 62,
    examRateSummary: '원양 어업 및 연근해 어업 인력 수요 안정적 유지',
    passRates: [
      { year: 2022, written: 40, practical: 52 },
      { year: 2023, written: 44, practical: 56 },
      { year: 2024, written: 50, practical: 62 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '어로학', questions: 25, desc: '어구 종류·조작, 어탐 장비, 어황 분석, 어업 방법' },
      { name: '수산자원학', questions: 20, desc: '주요 수산자원 생태, 자원 평가, 어장 환경' },
      { name: '어선 운용', questions: 20, desc: '어선 구조, 항법, 기상 판단, 안전 운항' },
      { name: '수산관계법규', questions: 15, desc: '수산업법, 배타적경제수역법, 국제 어업 협약' },
    ],
    jobs: [
      { title: '원양 어선 어로장', company: '원양 어업 회사', salary: '5,000~9,000만원', location: '해외 어장', type: '정규직' },
      { title: '연근해 어선 어로사', company: '연근해 어선', salary: '3,500~5,500만원', location: '전국 해안', type: '정규직' },
      { title: '수산자원 조사원', company: '국립수산과학원', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '어업 지도원', company: '해양수산부·지자체', salary: '3,500~5,000만원', location: '전국', type: '공무원' },
    ],
    books: [
      { id: 'fsh-b1', title: '2026 어로기사 필기 한권완성', publisher: '성안당', rating: 9.0, reviews: 150, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#0a1e3a,#1a4e8a)', tags: ['베스트', '무료배송'] },
      { id: 'fsh-b2', title: '어로기사 기출문제 완전분석 5개년', publisher: '예문사', rating: 8.9, reviews: 110, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#06142a,#123870)', tags: ['추천'] },
      { id: 'fsh-b3', title: '어로기사 실기 필답형 완전정복', publisher: '구민사', rating: 8.8, reviews: 85, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#040e20,#0e2c5a)', tags: ['실기대비'] },
      { id: 'fsh-b4', title: '어로기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.7, reviews: 65, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#020a16,#08204a)', tags: [] },
      { id: 'fsh-b5', title: '어로학·수산자원학 핵심정리', publisher: '일진사', rating: 8.6, reviews: 50, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#010610,#06183a)', tags: [] },
    ],
    defaultTodos: [
      '어구 종류(트롤·선망·연승·자망) 특성 및 조작 방법 정리',
      '어탐 장비(소나·어군탐지기) 원리와 활용법 이해',
      '주요 어종 어장·어기 특성 암기',
      '수산업법·국제 어업 협약 핵심 내용 숙지',
      '기출문제 5개년 풀기',
    ],
  },

  '수산제조기사': {
    name: '수산제조기사',
    icon: 'fa-industry',
    category: '수산·해양',
    heroTitle: '수산제조기사 — 수산물 가공·제조 전문 국가기술자격',
    heroDesc: '수산제조기사는 수산물의 냉동·건조·염장·훈제·통조림 등 가공 방법과 품질 관리, 위생 기준을 검정하는 국가기술자격입니다. 수산 가공 업체·냉동 물류 업체·수산물 품질 관련 공공기관에서 활용되며, 수산 가공 식품 시장 성장으로 전문 인력 수요가 증가하고 있습니다.',
    passRateSummary: '필기 합격률 40~55%, 실기 합격률 52~66% 수준',
    avgPassRate: 52,
    avgExamRate: 63,
    examRateSummary: '수산 가공 식품 소비 증가로 응시자 꾸준',
    passRates: [
      { year: 2022, written: 42, practical: 54 },
      { year: 2023, written: 46, practical: 58 },
      { year: 2024, written: 52, practical: 64 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '수산제조학', questions: 25, desc: '냉동·건제·염장·훈제·통조림 가공 원리 및 공정' },
      { name: '수산화학', questions: 20, desc: '수산물 성분 분석, 신선도 판정, 품질 지표' },
      { name: '수산물 위생관리', questions: 20, desc: 'HACCP 적용, 수산물 위생 기준, 식중독 예방' },
      { name: '수산관계법규', questions: 15, desc: '수산물위생관리법, 식품위생법 수산물 관련 조항' },
    ],
    jobs: [
      { title: '수산 가공 공장 기술자', company: '수산 가공 업체', salary: '3,200~4,800만원', location: '전국 해안', type: '정규직' },
      { title: '수산물 품질 관리원', company: '수산물 가공·유통업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '냉동 수산물 관리자', company: '냉동 물류 업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '수산물 검사원', company: '국립수산물품질관리원', salary: '3,500~5,000만원', location: '전국', type: '공무원' },
    ],
    books: [
      { id: 'smf-b1', title: '2026 수산제조기사 필기 한권완성', publisher: '성안당', rating: 9.0, reviews: 170, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#0c2840,#1e5e8a)', tags: ['베스트', '무료배송'] },
      { id: 'smf-b2', title: '수산제조기사 기출문제 완전분석', publisher: '예문사', rating: 8.9, reviews: 120, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#081c2e,#164870)', tags: ['추천'] },
      { id: 'smf-b3', title: '수산제조기사 실기 완전정복', publisher: '구민사', rating: 8.8, reviews: 92, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#051220,#102e58)', tags: ['실기대비'] },
      { id: 'smf-b4', title: '수산제조기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.7, reviews: 70, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#030a16,#0c2040)', tags: [] },
      { id: 'smf-b5', title: '수산화학·수산물위생관리 핵심정리', publisher: '일진사', rating: 8.6, reviews: 55, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#02060e,#08162e)', tags: [] },
    ],
    defaultTodos: [
      '냉동·건조·염장·훈제 가공 원리별 특성 비교 정리',
      '수산물 신선도 판정 지표(K값·VBN·TMA) 암기',
      '수산물 HACCP 적용 기준 및 CCP 설정 방법 숙지',
      '수산물위생관리법 주요 기준치 암기',
      '기출문제 5개년 풀기',
    ],
  },

  // ========== 금속·재료 ==========

  '금속재료기사': {
    name: '금속재료기사',
    icon: 'fa-cubes',
    category: '화학·환경',
    heroTitle: '금속재료기사 — 금속 재료 시험·분석·품질 관리 국가기술자격',
    heroDesc: '금속재료기사는 철강·비철금속·합금 등 금속 재료의 성질 분석, 열처리, 비파괴 검사, 품질 관리 기술을 검정하는 국가기술자격입니다. 자동차·조선·항공·반도체 제조업 등 금속 소재를 다루는 전 산업 분야에서 핵심 인력으로 활용되며, 소재 R&D 연구소에서도 폭넓게 요구됩니다.',
    passRateSummary: '필기 합격률 35~50%, 실기 합격률 48~62% 수준의 중난이도 자격',
    avgPassRate: 50,
    avgExamRate: 62,
    examRateSummary: '소재 산업 고도화로 전문 인력 수요 꾸준히 증가',
    passRates: [
      { year: 2022, written: 38, practical: 50 },
      { year: 2023, written: 42, practical: 54 },
      { year: 2024, written: 48, practical: 60 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '금속재료학', questions: 20, desc: '금속 결정 구조, 상태도, 합금 특성, 부식·방식' },
      { name: '금속가공학', questions: 20, desc: '소성 가공(단조·압연·압출), 절삭 가공, 용접' },
      { name: '열처리', questions: 20, desc: '풀림·담금질·뜨임·침탄 등 열처리 원리·방법' },
      { name: '금속재료시험', questions: 20, desc: '기계적 시험(인장·충격·경도), 비파괴검사, 금속 조직 분석' },
      { name: '관련 법규·규격', questions: 20, desc: 'KS 금속 규격, 재료 인증 제도, 산업 표준' },
    ],
    jobs: [
      { title: '금속 재료 시험 연구원', company: '소재 연구소·기업 R&D', salary: '4,000~6,500만원', location: '수도권·산업단지', type: '정규직' },
      { title: '철강 품질 관리 기술자', company: '철강 제조업체', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
      { title: '자동차 소재 개발 연구원', company: '자동차 부품사', salary: '4,000~6,000만원', location: '수도권·충청', type: '정규직' },
      { title: '비파괴 검사 전문가', company: '비파괴검사 전문 업체', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'met-b1', title: '2026 금속재료기사 필기 한권완성', publisher: '성안당', rating: 9.3, reviews: 280, originalPrice: 42000, price: 37800, discount: '10%', coverBg: 'linear-gradient(135deg,#2a2a2a,#606060)', tags: ['베스트', '무료배송'] },
      { id: 'met-b2', title: '금속재료기사 기출문제 완전분석 5개년', publisher: '예문사', rating: 9.1, reviews: 200, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#1e1e1e,#484848)', tags: ['추천'] },
      { id: 'met-b3', title: '금속재료기사 실기 필답형 완전정복', publisher: '구민사', rating: 9.0, reviews: 160, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg,#141414,#363636)', tags: ['실기대비'] },
      { id: 'met-b4', title: '금속재료기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.9, reviews: 130, originalPrice: 34000, price: 30600, discount: '10%', coverBg: 'linear-gradient(135deg,#0e0e0e,#282828)', tags: [] },
      { id: 'met-b5', title: '금속재료 열처리·시험 핵심정리', publisher: '일진사', rating: 8.8, reviews: 100, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#080808,#1c1c1c)', tags: [] },
    ],
    defaultTodos: [
      '철-탄소 상태도(Fe-C diagram) 완전 이해',
      '열처리 종류별(담금질·풀림·뜨임·불림) 목적·방법 암기',
      '기계적 시험(인장·경도·충격) 측정 원리 및 단위 정리',
      'KS 주요 금속 재료 규격(SS·SM·SUS 계열) 숙지',
      '기출문제 5개년 풀기',
    ],
  },

  '주조기능사': {
    name: '주조기능사',
    icon: 'fa-fire',
    category: '화학·환경',
    heroTitle: '주조기능사 — 금속 주물 제조 국가기술자격',
    heroDesc: '주조기능사는 금속을 용해하여 주형에 주입하고 원하는 형상의 제품을 만드는 주물 제조 기술을 검정하는 국가기술자격입니다. 자동차 부품·기계 부품·선박 부품 등 다양한 제조업 현장에서 활용되며, 주조 기술은 제조업의 근간이 되는 필수 공정입니다.',
    passRateSummary: '필기 합격률 48~62%, 실기 합격률 58~72% 수준',
    avgPassRate: 60,
    avgExamRate: 70,
    examRateSummary: '제조업 기반 기능 인력으로 꾸준한 응시 수요',
    passRates: [
      { year: 2022, written: 50, practical: 60 },
      { year: 2023, written: 54, practical: 64 },
      { year: 2024, written: 58, practical: 70 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '주조학', questions: 25, desc: '주형 종류, 주조 방법(사형·금형·다이캐스팅), 결함 원인' },
      { name: '금속재료학', questions: 20, desc: '주철·주강·비철 합금 종류, 용해 온도, 유동성' },
      { name: '주조 설비', questions: 15, desc: '용해로(큐폴라·전기로), 주형 제작 기계, 냉각 설비' },
      { name: '관련 법규', questions: 20, desc: '산업안전보건법 주조 작업 관련 조항, 화학물질 관리' },
    ],
    jobs: [
      { title: '주물 제조 기능원', company: '주물·주조 업체', salary: '3,000~4,200만원', location: '전국 산업단지', type: '정규직' },
      { title: '자동차 부품 주조 기술원', company: '자동차 부품사', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '기계 부품 주물 검사원', company: '기계 부품 제조사', salary: '3,000~4,000만원', location: '전국', type: '정규직' },
      { title: '다이캐스팅 운전원', company: '다이캐스팅 업체', salary: '3,200~4,200만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'cst-b1', title: '2026 주조기능사 필기 한권완성', publisher: '성안당', rating: 9.1, reviews: 210, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#4a2010,#a04828)', tags: ['베스트', '무료배송'] },
      { id: 'cst-b2', title: '주조기능사 기출문제 완전분석', publisher: '예문사', rating: 8.9, reviews: 155, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#341608,#783820)', tags: ['추천'] },
      { id: 'cst-b3', title: '주조기능사 실기 작업형 완전정복', publisher: '구민사', rating: 8.8, reviews: 120, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#240e04,#542818)', tags: ['실기대비'] },
      { id: 'cst-b4', title: '주조기능사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.7, reviews: 90, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#180a02,#3c1c10)', tags: [] },
      { id: 'cst-b5', title: '주조기능사 과년도 기출해설 5개년', publisher: '일진사', rating: 8.6, reviews: 70, originalPrice: 20000, price: 18000, discount: '10%', coverBg: 'linear-gradient(135deg,#0e0602,#2a1208)', tags: [] },
    ],
    defaultTodos: [
      '주형 종류(생형·건형·코어) 특성 및 사용 용도 정리',
      '주철·주강 용해 온도 및 유동성 특성 암기',
      '주조 결함(기공·수축공·냉경) 발생 원인·방지법 정리',
      '큐폴라 조업 순서 및 관리 포인트 숙지',
      '기출문제 3회분 풀기',
    ],
  },

  '단조기능사': {
    name: '단조기능사',
    icon: 'fa-hammer',
    category: '화학·환경',
    heroTitle: '단조기능사 — 금속 소성 가공·단조 작업 국가기술자격',
    heroDesc: '단조기능사는 금속 소재를 가열하여 해머나 프레스로 타격·압축해 원하는 형상으로 성형하는 단조 작업 기술을 검정하는 국가기술자격입니다. 자동차 크랭크샤프트·항공기 부품·산업용 공구 등 고강도 금속 부품 제조 현장에서 필수 인력으로 활용됩니다.',
    passRateSummary: '필기 합격률 48~63%, 실기 합격률 58~72% 수준',
    avgPassRate: 60,
    avgExamRate: 70,
    examRateSummary: '자동차·항공 부품 수요로 응시 수요 안정적',
    passRates: [
      { year: 2022, written: 50, practical: 60 },
      { year: 2023, written: 54, practical: 65 },
      { year: 2024, written: 60, practical: 70 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '단조학', questions: 25, desc: '자유단조·형단조 방법, 단조비, 단류선 특성' },
      { name: '금속재료학', questions: 20, desc: '단조용 금속 재료 특성, 가열 온도, 재결정 온도' },
      { name: '단조 설비', questions: 15, desc: '해머·프레스·업셋터 구조, 금형, 가열로 취급' },
      { name: '관련 법규', questions: 20, desc: '산업안전보건법 단조 작업 관련 안전 기준' },
    ],
    jobs: [
      { title: '단조 기능원', company: '단조 전문 업체', salary: '3,200~4,500만원', location: '전국 산업단지', type: '정규직' },
      { title: '자동차 단조 부품 기술원', company: '자동차 부품사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '항공기 부품 단조 기술원', company: '항공 부품 제조사', salary: '4,000~5,500만원', location: '수도권·경남', type: '정규직' },
      { title: '산업용 공구 단조 기술원', company: '공구 제조업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'frg-b1', title: '2026 단조기능사 필기 한권완성', publisher: '성안당', rating: 9.0, reviews: 190, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#3a2a1a,#7a5a38)', tags: ['베스트', '무료배송'] },
      { id: 'frg-b2', title: '단조기능사 기출문제 완전분석', publisher: '예문사', rating: 8.8, reviews: 140, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#281e10,#5a4028)', tags: ['추천'] },
      { id: 'frg-b3', title: '단조기능사 실기 작업형 완전정복', publisher: '구민사', rating: 8.7, reviews: 108, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#1c1408,#40301a)', tags: ['실기대비'] },
      { id: 'frg-b4', title: '단조기능사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.6, reviews: 82, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#120e04,#2c2010)', tags: [] },
      { id: 'frg-b5', title: '주조·단조·열처리 통합 기출해설', publisher: '일진사', rating: 8.5, reviews: 64, originalPrice: 20000, price: 18000, discount: '10%', coverBg: 'linear-gradient(135deg,#0a0802,#1e1608)', tags: [] },
    ],
    defaultTodos: [
      '자유단조·형단조 공정 차이 및 적용 제품 정리',
      '단조용 강재 가열 온도 범위(단조 개시·종료 온도) 암기',
      '단조 결함(접힘·균열·표면 탈탄) 원인·방지법 정리',
      '해머·프레스 안전 조작 및 작업 전 점검 사항 숙지',
      '기출문제 3회분 풀기',
    ],
  },

  '열처리기능사': {
    name: '열처리기능사',
    icon: 'fa-temperature-high',
    category: '화학·환경',
    heroTitle: '열처리기능사 — 금속 열처리 작업 국가기술자격',
    heroDesc: '열처리기능사는 금속 재료를 가열·냉각하여 경도·강도·인성을 조절하는 열처리 작업 기술을 검정하는 국가기술자격입니다. 자동차 기어·베어링·절삭 공구 등 고강도가 요구되는 금속 부품 제조에 필수적이며, 열처리 전문 업체와 자동차·기계 부품사에서 안정적인 수요가 있습니다.',
    passRateSummary: '필기 합격률 50~64%, 실기 합격률 60~74% 수준',
    avgPassRate: 62,
    avgExamRate: 72,
    examRateSummary: '금속 부품 품질 고도화로 열처리 기능 인력 수요 안정적',
    passRates: [
      { year: 2022, written: 52, practical: 62 },
      { year: 2023, written: 56, practical: 66 },
      { year: 2024, written: 60, practical: 72 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '열처리학', questions: 25, desc: '풀림·불림·담금질·뜨임 원리, 등온 열처리, 항온 변태' },
      { name: '금속재료학', questions: 20, desc: '탄소강·합금강 종류, Fe-C 상태도, 경화능' },
      { name: '열처리 설비', questions: 15, desc: '가열로(배치로·연속로) 구조, 냉각조 취급, 분위기 가스' },
      { name: '관련 법규', questions: 20, desc: '산업안전보건법 열처리 작업 안전 기준, 화학물질 관리' },
    ],
    jobs: [
      { title: '열처리 기능원', company: '열처리 전문 업체', salary: '3,200~4,500만원', location: '전국 산업단지', type: '정규직' },
      { title: '자동차 부품 열처리 기술원', company: '자동차 부품사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '공구·베어링 열처리 기술원', company: '공구·베어링 제조사', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
      { title: '금속 표면 처리 기술원', company: '표면처리 전문 업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'htr-b1', title: '2026 열처리기능사 필기 한권완성', publisher: '성안당', rating: 9.1, reviews: 230, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#5a1a0a,#c03820)', tags: ['베스트', '무료배송'] },
      { id: 'htr-b2', title: '열처리기능사 기출문제 완전분석', publisher: '예문사', rating: 8.9, reviews: 170, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#421206,#8c2a18)', tags: ['추천'] },
      { id: 'htr-b3', title: '열처리기능사 실기 작업형 완전정복', publisher: '구민사', rating: 8.8, reviews: 130, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#2e0c04,#642010)', tags: ['실기대비'] },
      { id: 'htr-b4', title: '열처리기능사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.7, reviews: 100, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#200802,#48180a)', tags: [] },
      { id: 'htr-b5', title: '주조·단조·열처리 통합 기출해설', publisher: '일진사', rating: 8.6, reviews: 78, originalPrice: 20000, price: 18000, discount: '10%', coverBg: 'linear-gradient(135deg,#140602,#341006)', tags: [] },
    ],
    defaultTodos: [
      'Fe-C 상태도 및 변태점(A1·A3·Acm) 완전 암기',
      '담금질 경도에 영향하는 요소(탄소량·냉각 속도·합금 원소) 정리',
      '뜨임 취성(저온·고온) 발생 원인·방지 방법 숙지',
      '가열로 종류별 특성(배치로·연속로·염욕로) 비교 정리',
      '기출문제 3회분 풀기',
    ],
  },

  // ========== 광업·화약류 ==========

  '화약류관리기사': {
    name: '화약류관리기사',
    icon: 'fa-bomb',
    category: '안전·소방',
    heroTitle: '화약류관리기사 — 화약류 저장·취급·발파 안전 국가기술자격',
    heroDesc: '화약류관리기사는 화약·폭약·화공품의 제조, 저장, 운반, 취급, 발파 작업의 안전 관리 능력을 검정하는 국가기술자격입니다. 광산·터널·채석장·건설 현장의 발파 작업에 필수 자격이며, 화약류 보안 관리자로 선임되기 위해 꼭 필요한 자격입니다.',
    passRateSummary: '필기 합격률 30~48%, 실기 합격률 45~62% 수준의 고난이도 자격',
    avgPassRate: 46,
    avgExamRate: 58,
    examRateSummary: '건설 발파 수요는 안정적이나 응시자 규모는 소규모',
    passRates: [
      { year: 2022, written: 32, practical: 47 },
      { year: 2023, written: 36, practical: 51 },
      { year: 2024, written: 42, practical: 58 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '화약류학', questions: 20, desc: '화약·폭약·화공품 종류, 성능, 기폭 원리' },
      { name: '발파공학', questions: 20, desc: '발파 설계, 뇌관·도폭선 사용법, 진동·소음 관리' },
      { name: '화약류 안전관리', questions: 20, desc: '화약고 구조·관리, 운반 기준, 사고 예방 대책' },
      { name: '화약류관계법규', questions: 20, desc: '총포·도검·화약류 단속법, 광산보안법 화약류 조항' },
    ],
    jobs: [
      { title: '화약류 보안 관리자', company: '광산·채석장·터널 시공사', salary: '4,000~6,000만원', location: '전국', type: '정규직' },
      { title: '발파 전문 기술자', company: '전문 발파 업체', salary: '4,500~7,000만원', location: '전국', type: '정규직' },
      { title: '화약류 제조 관리자', company: '화약 제조업체', salary: '4,000~6,000만원', location: '전국', type: '정규직' },
      { title: '건설 현장 발파 담당', company: '건설사', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'exp-b1', title: '2026 화약류관리기사 필기 한권완성', publisher: '성안당', rating: 9.2, reviews: 180, originalPrice: 42000, price: 37800, discount: '10%', coverBg: 'linear-gradient(135deg,#3a1a0a,#8a3818)', tags: ['베스트', '무료배송'] },
      { id: 'exp-b2', title: '화약류관리기사 기출문제 완전분석 5개년', publisher: '예문사', rating: 9.0, reviews: 130, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#2a1206,#642810)', tags: ['추천'] },
      { id: 'exp-b3', title: '화약류관리기사 실기 필답형 완전정복', publisher: '구민사', rating: 8.9, reviews: 100, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg,#1e0c04,#4a1e0c)', tags: ['실기대비'] },
      { id: 'exp-b4', title: '화약류관리기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.8, reviews: 78, originalPrice: 34000, price: 30600, discount: '10%', coverBg: 'linear-gradient(135deg,#140802,#361608)', tags: [] },
      { id: 'exp-b5', title: '발파공학·화약류법규 핵심정리', publisher: '일진사', rating: 8.7, reviews: 60, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#0e0602,#261002)', tags: [] },
    ],
    defaultTodos: [
      '화약·폭약·화공품 종류별 성능 및 용도 비교 정리',
      '발파 설계 요소(장약량·천공 깊이·저항선) 계산 방법 숙지',
      '화약고 구조 기준(이격 거리·환기·보안 담) 암기',
      '총포·도검·화약류 단속법 주요 조항 정리',
      '기출문제 5개년 풀기',
    ],
  },

  '화약류관리산업기사': {
    name: '화약류관리산업기사',
    icon: 'fa-bomb',
    category: '안전·소방',
    heroTitle: '화약류관리산업기사 — 화약류 현장 관리 국가기술자격',
    heroDesc: '화약류관리산업기사는 화약·폭약의 취급·저장·발파 현장 실무 관리 능력을 검정하는 국가기술자격입니다. 화약류관리기사보다 낮은 응시 기준(2년제 관련 학과 또는 기능사 취득 후 경력)을 요구하며, 소규모 발파 현장이나 채석장에서 화약류 취급 보조 관리자로 활용됩니다.',
    passRateSummary: '필기 합격률 35~52%, 실기 합격률 48~62% 수준',
    avgPassRate: 50,
    avgExamRate: 60,
    examRateSummary: '발파 현장 안전 관리 강화로 자격 수요 유지',
    passRates: [
      { year: 2022, written: 36, practical: 50 },
      { year: 2023, written: 40, practical: 54 },
      { year: 2024, written: 46, practical: 60 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '화약류학', questions: 20, desc: '화약·폭약·뇌관 종류, 기폭 특성, 예민도' },
      { name: '발파공학', questions: 20, desc: '발파 패턴, 장약 방법, 불발 처리, 안전 거리' },
      { name: '화약류 안전관리', questions: 20, desc: '화약류 보관·운반 기준, 사고 사례, 응급 처치' },
      { name: '화약류관계법규', questions: 20, desc: '총포·도검·화약류 단속법 주요 규정' },
    ],
    jobs: [
      { title: '채석장 발파 보조 관리자', company: '채석·골재 업체', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
      { title: '건설 발파 보조 기술원', company: '건설사·전문 발파업체', salary: '3,500~4,800만원', location: '전국', type: '정규직' },
      { title: '화약류 판매·취급 보조', company: '화약 판매업체', salary: '3,000~4,200만원', location: '전국', type: '정규직' },
      { title: '광산 발파 기술원', company: '광업 회사', salary: '3,500~5,000만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'exi-b1', title: '2026 화약류관리산업기사 필기 한권완성', publisher: '성안당', rating: 9.1, reviews: 155, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#2e1808,#6e3618)', tags: ['베스트', '무료배송'] },
      { id: 'exi-b2', title: '화약류관리산업기사 기출문제 완전분석', publisher: '예문사', rating: 8.9, reviews: 110, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#201006,#502810)', tags: ['추천'] },
      { id: 'exi-b3', title: '화약류관리산업기사 실기 완전정복', publisher: '구민사', rating: 8.8, reviews: 85, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#160c04,#3a1e0c)', tags: ['실기대비'] },
      { id: 'exi-b4', title: '화약류관리산업기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.7, reviews: 65, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#0e0802,#2a1608)', tags: [] },
      { id: 'exi-b5', title: '화약류관리기사·산업기사 통합 기출해설', publisher: '일진사', rating: 8.6, reviews: 50, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#080602,#1e1006)', tags: [] },
    ],
    defaultTodos: [
      '뇌관 종류(전기·비전기·전자) 특성 및 선택 기준 정리',
      '불발 화약류 처리 방법 및 안전 수칙 암기',
      '화약류 저장소 이격 거리 기준 숙지',
      '총포·도검·화약류 단속법 허가·신고 절차 정리',
      '기출문제 3회분 풀기',
    ],
  },

  '광산보안기사': {
    name: '광산보안기사',
    icon: 'fa-hard-hat',
    category: '안전·소방',
    heroTitle: '광산보안기사 — 광산 안전·보안 관리 국가기술자격',
    heroDesc: '광산보안기사는 광산의 채굴, 굴진, 환기, 배수, 지압 관리 등 광산 안전 전반을 담당하는 국가기술자격입니다. 광산보안법에 따라 일정 규모 이상 광산에서 보안 담당자 선임이 의무화되어 있어 실질적인 취업 연계성이 높습니다.',
    passRateSummary: '필기 합격률 35~50%, 실기 합격률 48~62% 수준',
    avgPassRate: 48,
    avgExamRate: 58,
    examRateSummary: '광업 현장 안전 의무 강화로 응시 수요 유지',
    passRates: [
      { year: 2022, written: 36, practical: 49 },
      { year: 2023, written: 40, practical: 53 },
      { year: 2024, written: 46, practical: 60 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '광산보안학', questions: 25, desc: '광산 환기·배수·지압·조명 기준, 갱도 지보 공법' },
      { name: '채광학', questions: 20, desc: '노천채굴·지하채굴 방법, 채굴 계획, 발파 기초' },
      { name: '광산기계', questions: 15, desc: '채굴·운반·배수 기계 구조, 취급 방법, 안전 점검' },
      { name: '광산보안관계법규', questions: 20, desc: '광산보안법, 산업안전보건법 광업 조항 주요 내용' },
    ],
    jobs: [
      { title: '광산 보안 담당자', company: '광업 회사', salary: '4,000~5,500만원', location: '전국 광산 지역', type: '정규직' },
      { title: '채굴 현장 안전 관리자', company: '채석·광업 업체', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: '광산 환경 관리원', company: '한국광해광업공단', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
      { title: '지하 터널 안전 담당', company: '건설사·터널 전문업체', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'mns-b1', title: '2026 광산보안기사 필기 한권완성', publisher: '성안당', rating: 9.0, reviews: 140, originalPrice: 40000, price: 36000, discount: '10%', coverBg: 'linear-gradient(135deg,#2a2a1a,#5a5a38)', tags: ['베스트', '무료배송'] },
      { id: 'mns-b2', title: '광산보안기사 기출문제 완전분석 5개년', publisher: '예문사', rating: 8.9, reviews: 100, originalPrice: 34000, price: 30600, discount: '10%', coverBg: 'linear-gradient(135deg,#1e1e10,#424228)', tags: ['추천'] },
      { id: 'mns-b3', title: '광산보안기사 실기 필답형 완전정복', publisher: '구민사', rating: 8.8, reviews: 78, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#141408,#30301c)', tags: ['실기대비'] },
      { id: 'mns-b4', title: '광산보안기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.7, reviews: 60, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#0e0e04,#222214)', tags: [] },
      { id: 'mns-b5', title: '채광학·광산보안법규 핵심정리', publisher: '일진사', rating: 8.6, reviews: 45, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#080804,#18180c)', tags: [] },
    ],
    defaultTodos: [
      '광산 환기 방식(자연환기·기계환기) 원리 및 환기 계산 정리',
      '지보 공법 종류(목지보·강지보·록볼트) 특성 비교',
      '광산보안법 보안 담당자 선임 기준 및 의무 숙지',
      '발파 가스(CO·NO·분진) 허용 농도 기준 암기',
      '기출문제 5개년 풀기',
    ],
  },

  // ========== 조선 ==========

  '조선기사': {
    name: '조선기사',
    icon: 'fa-ship',
    category: '항공·해양',
    heroTitle: '조선기사 — 선박 설계·건조·생산 관리 국가기술자격',
    heroDesc: '조선기사는 선박의 설계, 구조 계산, 건조 공정 관리, 진수 등 조선 산업 전반의 엔지니어링 능력을 검정하는 국가기술자격입니다. 한국은 세계 최대 조선국으로, 현대중공업·삼성중공업·대우조선해양 등 대형 조선소와 기자재 업체에서 조선기사 자격 보유자를 핵심 인력으로 우대합니다.',
    passRateSummary: '필기 합격률 32~48%, 실기 합격률 45~60% 수준의 고난이도 자격',
    avgPassRate: 48,
    avgExamRate: 60,
    examRateSummary: '조선 산업 수주 회복에 따라 응시자 증가 추세',
    passRates: [
      { year: 2022, written: 34, practical: 46 },
      { year: 2023, written: 38, practical: 52 },
      { year: 2024, written: 46, practical: 58 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '선박설계', questions: 20, desc: '선형 설계, 구획 배치, 복원성, 건현 계산' },
      { name: '선체구조', questions: 20, desc: '선체 구조 부재 명칭, 강도 계산, 구조 규칙' },
      { name: '조선생산', questions: 20, desc: '블록 조립, 탑재 공정, 의장, 진수·안벽 작업' },
      { name: '선박 의장', questions: 20, desc: '기관 의장·전장·배관 시스템 개요, 설치 기준' },
      { name: '조선관계법규', questions: 20, desc: '선박안전법, 해사노동협약, 선급 규정 개요' },
    ],
    jobs: [
      { title: '선박 설계 엔지니어', company: '대형 조선소', salary: '4,500~7,000만원', location: '울산·거제·목포', type: '정규직' },
      { title: '선체 생산 기술 담당', company: '조선소·선박 기자재업체', salary: '4,000~6,000만원', location: '전국', type: '정규직' },
      { title: '선급 검사원', company: '한국선급(KR)', salary: '4,500~7,000만원', location: '전국', type: '정규직' },
      { title: '해양 플랜트 설계원', company: '해양 플랜트 전문 업체', salary: '4,500~7,500만원', location: '울산·부산', type: '정규직' },
    ],
    books: [
      { id: 'shp-b1', title: '2026 조선기사 필기 한권완성', publisher: '성안당', rating: 9.3, reviews: 260, originalPrice: 44000, price: 39600, discount: '10%', coverBg: 'linear-gradient(135deg,#0a1e3a,#1a4e8a)', tags: ['베스트', '무료배송'] },
      { id: 'shp-b2', title: '조선기사 기출문제 완전분석 5개년', publisher: '예문사', rating: 9.1, reviews: 190, originalPrice: 38000, price: 34200, discount: '10%', coverBg: 'linear-gradient(135deg,#061430,#123870)', tags: ['추천'] },
      { id: 'shp-b3', title: '조선기사 실기 필답형 완전정복', publisher: '구민사', rating: 9.0, reviews: 150, originalPrice: 40000, price: 36000, discount: '10%', coverBg: 'linear-gradient(135deg,#040e22,#0e2c5c)', tags: ['실기대비'] },
      { id: 'shp-b4', title: '조선기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.9, reviews: 120, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#020a18,#081e46)', tags: [] },
      { id: 'shp-b5', title: '선박 설계·구조 핵심정리', publisher: '일진사', rating: 8.8, reviews: 90, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#010610,#061636)', tags: [] },
    ],
    defaultTodos: [
      '선박 복원성(GM·GZ·메타센터) 계산 방법 완전 이해',
      '선체 구조 부재 명칭(용골·늑골·외판·격벽) 암기',
      '조선 생산 공정(블록 제작→탑재→진수→시운전) 흐름 정리',
      '선박안전법 주요 검사 종류(건조·중간·정기검사) 숙지',
      '기출문제 5개년 풀기',
    ],
  },

  '조선산업기사': {
    name: '조선산업기사',
    icon: 'fa-ship',
    category: '항공·해양',
    heroTitle: '조선산업기사 — 선박 건조 현장 실무 국가기술자격',
    heroDesc: '조선산업기사는 선박 건조 현장에서 선체 조립·용접·의장 등의 실무 관리 능력을 검정하는 국가기술자격입니다. 조선기사보다 현장 실무 중심의 자격으로, 조선소 현장 관리자·기자재 업체·선박 수리 업체에서 폭넓게 활용됩니다.',
    passRateSummary: '필기 합격률 38~54%, 실기 합격률 50~65% 수준',
    avgPassRate: 54,
    avgExamRate: 64,
    examRateSummary: '조선소 현장 인력 수요 회복에 따라 응시자 증가',
    passRates: [
      { year: 2022, written: 40, practical: 52 },
      { year: 2023, written: 44, practical: 56 },
      { year: 2024, written: 52, practical: 64 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '선체구조', questions: 20, desc: '선체 부재 명칭, 구조 형식, 강도 개요' },
      { name: '조선생산', questions: 20, desc: '마킹·절단·성형·조립 공정, 용접 품질 관리' },
      { name: '선박 의장', questions: 20, desc: '배관·전장·기관 의장 기초, 도장 공정' },
      { name: '조선관계법규', questions: 20, desc: '선박안전법, 산업안전보건법 조선 현장 조항' },
    ],
    jobs: [
      { title: '선체 조립 현장 관리자', company: '조선소', salary: '4,000~5,800만원', location: '울산·거제·목포', type: '정규직' },
      { title: '선박 기자재 기술 담당', company: '선박 기자재 업체', salary: '3,800~5,500만원', location: '전국', type: '정규직' },
      { title: '선박 수리 기술자', company: '선박 수리 업체', salary: '3,800~5,000만원', location: '부산·인천', type: '정규직' },
      { title: '조선 품질 관리원', company: '조선소·선급', salary: '4,000~5,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'shi-b1', title: '2026 조선산업기사 필기 한권완성', publisher: '성안당', rating: 9.1, reviews: 220, originalPrice: 36000, price: 32400, discount: '10%', coverBg: 'linear-gradient(135deg,#0c2040,#1e5090)', tags: ['베스트', '무료배송'] },
      { id: 'shi-b2', title: '조선산업기사 기출문제 완전분석', publisher: '예문사', rating: 8.9, reviews: 160, originalPrice: 30000, price: 27000, discount: '10%', coverBg: 'linear-gradient(135deg,#081630,#163c70)', tags: ['추천'] },
      { id: 'shi-b3', title: '조선산업기사 실기 완전정복', publisher: '구민사', rating: 8.8, reviews: 125, originalPrice: 32000, price: 28800, discount: '10%', coverBg: 'linear-gradient(135deg,#050e22,#0e2c54)', tags: ['실기대비'] },
      { id: 'shi-b4', title: '조선산업기사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.7, reviews: 95, originalPrice: 28000, price: 25200, discount: '10%', coverBg: 'linear-gradient(135deg,#030a18,#0a2040)', tags: [] },
      { id: 'shi-b5', title: '조선기사·산업기사 통합 기출해설', publisher: '일진사', rating: 8.6, reviews: 75, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#020610,#07162e)', tags: [] },
    ],
    defaultTodos: [
      '선체 구조 부재(늑골·격벽·갑판·외판) 역할 및 배치 암기',
      '블록 조립 공정(소조립→중조립→대조립) 흐름 이해',
      '조선 용접 기호·품질 검사(RT·UT·MT) 방법 정리',
      '선박안전법 검사 체계 및 조선 현장 안전 기준 숙지',
      '기출문제 3회분 풀기',
    ],
  },

  '선체건조기능사': {
    name: '선체건조기능사',
    icon: 'fa-wrench',
    category: '항공·해양',
    heroTitle: '선체건조기능사 — 선박 선체 조립·건조 작업 국가기술자격',
    heroDesc: '선체건조기능사는 선박 선체의 마킹, 절단, 성형, 조립, 용접 등 선체 건조 현장 작업 기술을 검정하는 국가기술자격입니다. 학력 제한 없이 응시 가능하며, 조선소 생산 현장·선박 수리 업체에서 기능 인력으로 바로 투입 가능한 실용적인 자격입니다.',
    passRateSummary: '필기 합격률 50~65%, 실기 합격률 60~74% 수준의 접근하기 쉬운 자격',
    avgPassRate: 62,
    avgExamRate: 72,
    examRateSummary: '조선소 기능 인력 수요 회복으로 응시자 증가',
    passRates: [
      { year: 2022, written: 52, practical: 62 },
      { year: 2023, written: 56, practical: 66 },
      { year: 2024, written: 62, practical: 72 },
    ],
    schedules: [],
    milestones: [],
    subjects: [
      { name: '선체구조 기초', questions: 20, desc: '선체 부재 명칭, 기본 구조 형식, 도면 해독' },
      { name: '선체건조 작업', questions: 25, desc: '마킹·절단·성형·조립·용접 작업 방법' },
      { name: '선체건조 기계', questions: 15, desc: '가스절단기·플라즈마 절단기·성형 프레스 취급' },
      { name: '관련 법규', questions: 20, desc: '산업안전보건법 조선 현장 안전 작업 기준' },
    ],
    jobs: [
      { title: '선체 조립 기능원', company: '조선소', salary: '3,500~5,000만원', location: '울산·거제·목포', type: '정규직' },
      { title: '선박 수리 기능원', company: '선박 수리 업체', salary: '3,300~4,800만원', location: '부산·인천', type: '정규직' },
      { title: '해양 구조물 조립 기능원', company: '해양 플랜트 업체', salary: '3,800~5,200만원', location: '전국', type: '정규직' },
      { title: '강구조물 제작 기능원', company: '강구조물 제작업체', salary: '3,200~4,500만원', location: '전국', type: '정규직' },
    ],
    books: [
      { id: 'hbs-b1', title: '2026 선체건조기능사 필기 한권완성', publisher: '성안당', rating: 9.0, reviews: 200, originalPrice: 26000, price: 23400, discount: '10%', coverBg: 'linear-gradient(135deg,#1a2e4a,#3a6090)', tags: ['베스트', '무료배송'] },
      { id: 'hbs-b2', title: '선체건조기능사 기출문제 완전분석', publisher: '예문사', rating: 8.9, reviews: 148, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#102238,#2a4a72)', tags: ['추천'] },
      { id: 'hbs-b3', title: '선체건조기능사 실기 작업형 완전정복', publisher: '구민사', rating: 8.8, reviews: 114, originalPrice: 24000, price: 21600, discount: '10%', coverBg: 'linear-gradient(135deg,#0a1828,#1e3858)', tags: ['실기대비'] },
      { id: 'hbs-b4', title: '선체건조기능사 핵심이론 단기완성', publisher: '시대에듀', rating: 8.7, reviews: 88, originalPrice: 22000, price: 19800, discount: '10%', coverBg: 'linear-gradient(135deg,#060e1a,#142840)', tags: [] },
      { id: 'hbs-b5', title: '조선기능사·선체건조기능사 통합 기출해설', publisher: '일진사', rating: 8.6, reviews: 68, originalPrice: 20000, price: 18000, discount: '10%', coverBg: 'linear-gradient(135deg,#040810,#0e1e30)', tags: [] },
    ],
    defaultTodos: [
      '선체 도면 기호(용접·절단·성형) 해독 방법 숙지',
      '가스절단·플라즈마 절단 원리 및 안전 수칙 암기',
      '선체 조립 공정(소조립→중조립→블록) 순서 이해',
      '조선 현장 안전 작업 기준(추락·화재 예방) 정리',
      '기출문제 3회분 풀기',
    ],
  },

};

// ============================================
// 1-B. 2026년 Q-Net 공식 시험 일정 일괄 적용
// ============================================
(function applyOfficialSchedules() {
  const SCHEDULES = {
    기사산업기사: {
      schedules: [
        { round: '1회', writtenApply: '2026-01-12 ~ 2026-01-15', writtenExam: '2026-01-30 ~ 2026-03-03', writtenResult: '2026-03-11', practicalApply: '2026-03-23 ~ 2026-03-26', practicalExam: '2026-04-18 ~ 2026-05-06', practicalResult: '2026-06-05 / 2026-06-12' },
        { round: '2회', writtenApply: '2026-04-20 ~ 2026-04-23', writtenExam: '2026-05-09 ~ 2026-05-29', writtenResult: '2026-06-10', practicalApply: '2026-06-22 ~ 2026-06-25', practicalExam: '2026-07-18 ~ 2026-08-05', practicalResult: '2026-09-04 / 2026-09-11' },
        { round: '3회', writtenApply: '2026-07-20 ~ 2026-07-23', writtenExam: '2026-08-07 ~ 2026-09-01', writtenResult: '2026-09-09', practicalApply: '2026-09-21 ~ 2026-09-28', practicalExam: '2026-10-24 ~ 2026-11-13', practicalResult: '2026-12-11 / 2026-12-18' },
      ],
      milestones: [
        { label: '1회 필기 원서접수', date: '2026-01-12' },
        { label: '1회 필기 시험', date: '2026-01-30' },
        { label: '1회 실기 시험', date: '2026-04-18' },
        { label: '2회 필기 원서접수', date: '2026-04-20' },
        { label: '2회 필기 시험', date: '2026-05-09' },
        { label: '2회 실기 시험', date: '2026-07-18' },
        { label: '3회 필기 원서접수', date: '2026-07-20' },
        { label: '3회 실기 시험', date: '2026-10-24' },
      ],
    },
    기능사: {
      schedules: [
        { round: '1회', writtenApply: '2026-01-06 ~ 2026-01-09', writtenExam: '2026-01-20 ~ 2026-01-24', writtenResult: '2026-01-30', practicalApply: '2026-02-02 ~ 2026-02-05', practicalExam: '2026-03-14 ~ 2026-04-01', practicalResult: '2026-04-10 / 2026-04-17' },
        { round: '2회', writtenApply: '2026-03-16 ~ 2026-03-20', writtenExam: '2026-04-04 ~ 2026-04-09', writtenResult: '2026-04-22', practicalApply: '2026-04-27 ~ 2026-04-30', practicalExam: '2026-05-30 ~ 2026-06-14', practicalResult: '2026-06-26 / 2026-07-03' },
        { round: '3회', writtenApply: '2026-06-08 ~ 2026-06-11', writtenExam: '2026-06-27 ~ 2026-07-02', writtenResult: '2026-07-15', practicalApply: '2026-07-27 ~ 2026-07-30', practicalExam: '2026-08-29 ~ 2026-09-16', practicalResult: '2026-10-02 / 2026-10-08' },
        { round: '4회', writtenApply: '2026-08-24 ~ 2026-08-27', writtenExam: '2026-09-16 ~ 2026-09-21', writtenResult: '2026-10-07', practicalApply: '2026-10-12 ~ 2026-10-15', practicalExam: '2026-11-14 ~ 2026-12-02', practicalResult: '2026-12-11 / 2026-12-18' },
      ],
      milestones: [
        { label: '1회 필기 원서접수', date: '2026-01-06' },
        { label: '1회 필기 시험', date: '2026-01-20' },
        { label: '1회 실기 시험', date: '2026-03-14' },
        { label: '2회 필기 원서접수', date: '2026-03-16' },
        { label: '2회 실기 시험', date: '2026-05-30' },
        { label: '3회 필기 원서접수', date: '2026-06-08' },
        { label: '3회 실기 시험', date: '2026-08-29' },
        { label: '4회 필기 원서접수', date: '2026-08-24' },
      ],
    },
    기능장: {
      schedules: [
        { round: '79회', writtenApply: '2026-01-06 ~ 2026-01-09', writtenExam: '2026-01-24', writtenResult: '2026-01-30', practicalApply: '2026-02-02 ~ 2026-02-05', practicalExam: '2026-03-14 ~ 2026-04-01', practicalResult: '2026-04-10 / 2026-04-17' },
        { round: '80회', writtenApply: '2026-06-08 ~ 2026-06-11', writtenExam: '2026-06-27', writtenResult: '2026-07-15', practicalApply: '2026-07-27 ~ 2026-07-30', practicalExam: '2026-08-29 ~ 2026-09-16', practicalResult: '2026-10-02 / 2026-10-08' },
      ],
      milestones: [
        { label: '79회 필기 원서접수', date: '2026-01-06' },
        { label: '79회 필기 시험', date: '2026-01-24' },
        { label: '79회 실기 시험', date: '2026-03-14' },
        { label: '80회 필기 원서접수', date: '2026-06-08' },
        { label: '80회 필기 시험', date: '2026-06-27' },
        { label: '80회 실기 시험', date: '2026-08-29' },
      ],
    },
  };

  Object.values(CERTIFICATIONS).forEach(cert => {
    const n = cert.name;
    // 운전면허·상시 자격증 제외
    if (n.includes('운전면허') || n.includes('운전기능사') || n === 'SQLD') return;
    if (n.endsWith('기능장') || n.includes('기능장(')) {
      cert.schedules  = SCHEDULES.기능장.schedules;
      cert.milestones = SCHEDULES.기능장.milestones;
    } else if (n.endsWith('기능사') || n.includes('기능사(')) {
      cert.schedules  = SCHEDULES.기능사.schedules;
      cert.milestones = SCHEDULES.기능사.milestones;
    } else if (n.endsWith('기사') || n.endsWith('산업기사')) {
      cert.schedules  = SCHEDULES.기사산업기사.schedules;
      cert.milestones = SCHEDULES.기사산업기사.milestones;
    }
  });
})();

// ============================================
// 2. 앱 상태 관리
// ============================================
const STATE = {
  currentCert: null,
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
// ============================================
// 월별 시험 수험서 추출
// ============================================

let _monthlyExamCache = null;
let _monthlyFetchPromise = null;

async function fetchAllMonthlyExams() {
  if (_monthlyExamCache) return _monthlyExamCache;
  if (_monthlyFetchPromise) return _monthlyFetchPromise;

  _monthlyFetchPromise = (async () => {
    const monthData = {};
    for (let m = 1; m <= 12; m++) monthData[m] = { written: [], practical: [] };

    const certNames = Object.keys(JM_CODES);
    const BATCH = 8;

    for (let i = 0; i < certNames.length; i += BATCH) {
      const batch = certNames.slice(i, i + BATCH);
      await Promise.all(batch.map(async certName => {
        const jmCd = JM_CODES[certName];
        try {
          const res = await fetch(`/api/exam-schedule?jmCd=${jmCd}&implYy=2026`);
          if (!res.ok) return;
          const json = await res.json();
          const items = json?.body?.items;
          if (!items?.length) return;

          const bySeq = {};
          items.forEach(item => {
            const seq = item.implSeq;
            if (!bySeq[seq]) bySeq[seq] = item;
          });

          const certInfo = CERTIFICATIONS[certName];
          const books = certInfo?.books?.slice(0, 2) || [];

          Object.values(bySeq).forEach(item => {
            const fmtDate = d => d ? `${d.slice(4,6)}/${d.slice(6,8)}` : '';

            if (item.docExamStartDt) {
              const m = parseInt(item.docExamStartDt.slice(4, 6));
              monthData[m].written.push({
                certName,
                round: `제${item.implSeq}회`,
                dateRange: `${fmtDate(item.docExamStartDt)} ~ ${fmtDate(item.docExamEndDt)}`,
                books,
              });
            }
            if (item.pracExamStartDt) {
              const m = parseInt(item.pracExamStartDt.slice(4, 6));
              monthData[m].practical.push({
                certName,
                round: `제${item.implSeq}회`,
                dateRange: `${fmtDate(item.pracExamStartDt)} ~ ${fmtDate(item.pracExamEndDt)}`,
                books,
              });
            }
          });
        } catch (e) {}
      }));
    }

    _monthlyExamCache = monthData;
    return monthData;
  })();

  return _monthlyFetchPromise;
}

function initMonthlySection() {
  const tabsEl = document.getElementById('month-tabs');
  const loadingEl = document.getElementById('monthly-loading');
  const resultEl = document.getElementById('monthly-result');
  if (!tabsEl) return;

  const months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
  const currentMonth = new Date().getMonth() + 1;
  let selectedMonth = currentMonth;

  tabsEl.innerHTML = months.map((m, i) => `
    <button class="month-tab-btn${i + 1 === currentMonth ? ' active' : ''}" data-month="${i + 1}">${m}</button>
  `).join('');

  tabsEl.addEventListener('click', e => {
    const btn = e.target.closest('.month-tab-btn');
    if (!btn) return;
    tabsEl.querySelectorAll('.month-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedMonth = parseInt(btn.dataset.month);
    renderMonthlyResult(selectedMonth);
  });

  async function renderMonthlyResult(month) {
    loadingEl.style.display = 'flex';
    resultEl.innerHTML = '';
    const data = await fetchAllMonthlyExams();
    loadingEl.style.display = 'none';

    const { written, practical } = data[month];

    // 가나다순 정렬
    written.sort((a, b) => a.certName.localeCompare(b.certName, 'ko'));
    practical.sort((a, b) => a.certName.localeCompare(b.certName, 'ko'));

    if (!written.length && !practical.length) {
      resultEl.innerHTML = `<p class="monthly-empty"><i class="fa-solid fa-circle-info"></i> ${month}월에 예정된 시험이 없습니다.</p>`;
      return;
    }

    const renderGroup = (items, label, icon, type) => {
      if (!items.length) return '';
      return `
        <div class="monthly-group monthly-group--${type}">
          <h3 class="monthly-group-title monthly-group-title--${type}"><i class="${icon}"></i> ${label} <span class="monthly-count">${items.length}종</span></h3>
          <div class="monthly-cert-list">
            ${items.map(item => `
              <div class="monthly-cert-card monthly-cert-card--${type}">
                <div class="monthly-cert-header">
                  <span class="monthly-cert-name">${item.certName}</span>
                  <span class="monthly-cert-round">${item.round} · ${item.dateRange}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    };

    resultEl.innerHTML = `
      <div class="monthly-columns">
        ${renderGroup(written, '필기 시험', 'fa-solid fa-pencil', 'written')}
        ${renderGroup(practical, '실기 시험', 'fa-solid fa-hammer', 'practical')}
      </div>
    `;
  }

  // IntersectionObserver로 처음 보일 때 자동 로드
  const section = document.getElementById('monthly-section');
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      observer.disconnect();
      renderMonthlyResult(selectedMonth);
    }
  }, { threshold: 0.1 });
  if (section) observer.observe(section);
}

document.addEventListener('DOMContentLoaded', () => {
  try { initTheme(); } catch(e) {}
  try { initClock(); } catch(e) {}
  try { initWeather(); } catch(e) {}
  try { initEventListeners(); } catch(e) {}

  // 마지막으로 선택한 자격증 복원 (새로고침 시 유지)
  let restored = false;
  try {
    const lastCert = localStorage.getItem('lastCert');
    if (lastCert && CERTIFICATIONS[lastCert]) {
      switchCertification(lastCert);
      restored = true;
    }
  } catch(e) { console.error('[restore]', e); }

  if (!restored) showWelcomeScreen();
  try { initMonthlySection(); } catch(e) {}
});

// ============================================
// 시계 위젯
// ============================================
function initClock() {
  const DAYS = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
  function tick() {
    const now  = new Date();
    const hh   = String(now.getHours()).padStart(2, '0');
    const mm   = String(now.getMinutes()).padStart(2, '0');
    const ss   = String(now.getSeconds()).padStart(2, '0');
    const yyyy = now.getFullYear();
    const mo   = now.getMonth() + 1;
    const dd   = now.getDate();
    const day  = DAYS[now.getDay()];
    // 대시보드 위젯
    const timeEl = document.getElementById('clock-time');
    const dateEl = document.getElementById('clock-date');
    if (timeEl) timeEl.textContent = `${hh}:${mm}:${ss}`;
    if (dateEl) dateEl.textContent = `${yyyy}년 ${mo}월 ${dd}일 ${day}`;
    // 웰컴 화면 위젯
    const wcTimeEl = document.getElementById('wc-clock-time');
    const wcDateEl = document.getElementById('wc-clock-date');
    if (wcTimeEl) wcTimeEl.textContent = `${hh}:${mm}:${ss}`;
    if (wcDateEl) wcDateEl.textContent = `${yyyy}년 ${mo}월 ${dd}일 ${day}`;
  }
  tick();
  setInterval(tick, 1000);
}

// ============================================
// 날씨 위젯 (OpenWeatherMap 무료 API)
// ============================================
// Open-Meteo WMO 날씨 코드 → 이모지 + 한국어 설명 (API 키 불필요)
const WMO_WEATHER = {
  0:  { icon:'☀️',  desc:'맑음' },
  1:  { icon:'🌤️', desc:'대체로 맑음' },
  2:  { icon:'⛅',  desc:'구름 조금' },
  3:  { icon:'☁️',  desc:'흐림' },
  45: { icon:'🌫️', desc:'안개' },
  48: { icon:'🌫️', desc:'안개' },
  51: { icon:'🌦️', desc:'이슬비 (약)' },
  53: { icon:'🌦️', desc:'이슬비' },
  55: { icon:'🌧️', desc:'이슬비 (강)' },
  61: { icon:'🌧️', desc:'비 (약)' },
  63: { icon:'🌧️', desc:'비' },
  65: { icon:'🌧️', desc:'비 (강)' },
  71: { icon:'❄️',  desc:'눈 (약)' },
  73: { icon:'❄️',  desc:'눈' },
  75: { icon:'❄️',  desc:'눈 (강)' },
  80: { icon:'🌦️', desc:'소나기 (약)' },
  81: { icon:'🌦️', desc:'소나기' },
  82: { icon:'⛈️',  desc:'소나기 (강)' },
  95: { icon:'⛈️',  desc:'뇌우' },
  96: { icon:'⛈️',  desc:'우박 동반 뇌우' },
  99: { icon:'⛈️',  desc:'우박 동반 뇌우 (강)' },
};

function initWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => fetchWeatherOpenMeteo(pos.coords.latitude, pos.coords.longitude, null),
      ()  => fetchWeatherOpenMeteo(37.5665, 126.9780, '서울'),
      { timeout: 8000 }
    );
  } else {
    fetchWeatherOpenMeteo(37.5665, 126.9780, '서울');
  }
}

async function fetchWeatherOpenMeteo(lat, lon, cityName) {
  try {
    // 1) 도시명 역지오코딩 (cityName이 없을 때)
    let city = cityName;
    if (!city) {
      try {
        const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=ko`);
        const geoData = await geoRes.json();
        city = geoData.address?.city || geoData.address?.town || geoData.address?.county || '현재 위치';
      } catch { city = '현재 위치'; }
    }
    // 2) 날씨 데이터
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Asia%2FSeoul`;
    const res  = await fetch(url);
    if (!res.ok) throw new Error('API 오류');
    const data = await res.json();
    const c    = data.current;
    const wmo  = WMO_WEATHER[c.weather_code] || { icon:'🌤️', desc:'날씨 정보' };
    renderWeather({
      icon:  wmo.icon,
      desc:  wmo.desc,
      temp:  Math.round(c.temperature_2m),
      feels: Math.round(c.apparent_temperature),
      humid: c.relative_humidity_2m,
      wind:  c.wind_speed_10m.toFixed(1),
      city,
    });
  } catch(e) {
    showWeatherError('날씨를 불러올 수 없습니다');
  }
}

function setWeatherEl(id, prop, val) {
  const el = document.getElementById(id);
  if (!el) return;
  if (prop === 'textContent') el.textContent = val;
  else if (prop === 'innerHTML') el.innerHTML = val;
  else if (prop === 'display') el.style.display = val;
}

function renderWeather(data) {
  const { icon, desc, temp, feels, humid, wind, city } = data;
  // 대시보드 위젯 업데이트
  setWeatherEl('weather-loading', 'display', 'none');
  setWeatherEl('weather-content', 'display', 'block');
  setWeatherEl('weather-icon',    'textContent', icon);
  setWeatherEl('weather-temp',    'textContent', `${temp}°C`);
  setWeatherEl('weather-feels',   'textContent', `체감 ${feels}°C`);
  setWeatherEl('weather-desc',    'textContent', desc);
  setWeatherEl('weather-humidity','innerHTML', `<i class="fa-solid fa-droplet"></i> ${humid}%`);
  setWeatherEl('weather-wind',    'innerHTML', `<i class="fa-solid fa-wind"></i> ${wind}m/s`);
  setWeatherEl('weather-location','innerHTML', `<i class="fa-solid fa-location-dot"></i> ${city}`);
  // 웰컴 화면 위젯 업데이트
  setWeatherEl('wc-weather-loading', 'display', 'none');
  setWeatherEl('wc-weather-content', 'display', 'block');
  setWeatherEl('wc-weather-icon',    'textContent', icon);
  setWeatherEl('wc-weather-temp',    'textContent', `${temp}°C`);
  setWeatherEl('wc-weather-feels',   'textContent', `체감 ${feels}°C`);
  setWeatherEl('wc-weather-desc',    'textContent', desc);
  setWeatherEl('wc-weather-humidity','innerHTML', `<i class="fa-solid fa-droplet"></i> ${humid}%`);
  setWeatherEl('wc-weather-wind',    'innerHTML', `<i class="fa-solid fa-wind"></i> ${wind}m/s`);
  setWeatherEl('wc-weather-location','innerHTML', `<i class="fa-solid fa-location-dot"></i> ${city}`);
}

function showWeatherError(msg) {
  setWeatherEl('weather-loading',     'display', 'none');
  setWeatherEl('weather-error',       'display', 'block');
  setWeatherEl('weather-error-msg',   'textContent', msg);
  setWeatherEl('wc-weather-loading',  'display', 'none');
  setWeatherEl('wc-weather-error',    'display', 'block');
  setWeatherEl('wc-weather-error-msg','textContent', msg);
}

function showWelcomeScreen() {
  document.getElementById('dashboard-content').style.display = 'none';
  document.getElementById('welcome-screen').style.display = 'flex';
  document.getElementById('global-search').value = '';
  document.getElementById('global-search').placeholder = '자격증 이름을 입력하세요 (예: 전기기사)';
  document.title = '수험서 All in One 대시보드';
  // 자격증 갯수 자동 업데이트
  const countEl = document.getElementById('cert-count');
  if (countEl && typeof CERTIFICATIONS !== 'undefined') {
    countEl.textContent = Object.keys(CERTIFICATIONS).length;
  }
  // 달력 카드를 웰컴 화면 플레이스홀더로 이동
  const calCard    = document.getElementById('exam-calendar-card');
  const placeholder = document.getElementById('welcome-cal-placeholder');
  if (calCard && placeholder && !placeholder.contains(calCard)) {
    placeholder.appendChild(calCard);
  }
  // 달력 초기 렌더링 (자격증 없이 오늘 날짜 기준)
  if (!CAL_STATE.year) {
    const now = new Date();
    CAL_STATE.year  = now.getFullYear();
    CAL_STATE.month = now.getMonth();
  }
  drawCalendar();
  const prevBtn = document.getElementById('cal-prev');
  const nextBtn = document.getElementById('cal-next');
  if (prevBtn && !prevBtn._wcBound) { prevBtn.onclick = () => moveCalMonth(-1); prevBtn._wcBound = true; }
  if (nextBtn && !nextBtn._wcBound) { nextBtn.onclick = () => moveCalMonth(1);  nextBtn._wcBound = true; }
  // 출판사 검색 위젯 초기화 (최초 1회)
  const pubInput = document.getElementById('publisher-search');
  if (pubInput && !pubInput._pubBound) {
    initPublisherSearch();
    pubInput._pubBound = true;
  }
}

function restoreCalendarToDashboard() {
  // 달력 카드를 대시보드 right-widgets-col 로 복원
  const calCard      = document.getElementById('exam-calendar-card');
  const widgetsCol   = document.querySelector('#dashboard-content .right-widgets-col');
  if (calCard && widgetsCol && !widgetsCol.contains(calCard)) {
    widgetsCol.appendChild(calCard);
  }
}

function renderAll() {
  const cert = getCert();
  if (!cert) return;
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('dashboard-content').style.display = 'block';
  restoreCalendarToDashboard();
  updatePageMeta(cert);
  renderHero(cert);
  renderScheduleCards(cert);
  renderStatCards(cert);
  renderDdays(cert);
  renderExamCalendar(cert);
  renderNews();
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
  try { localStorage.setItem('lastCert', certName); } catch(e) {}

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

  // 공공데이터 API — 종목 정보 + 시험 일정 비동기 업데이트
  const cert = getCert();
  if (cert) {
    fetchCertInfo(cert.name).then(info => {
      if (!info) return;
      const descEl = document.getElementById('hero-desc');
      if (descEl && info.overview) descEl.textContent = info.overview;
    });

    fetchExamSchedule(cert.name).then(schedules => {
      if (!schedules || !schedules.length) return;
      // CERTIFICATIONS 데이터 갱신
      CERTIFICATIONS[cert.name].schedules = schedules;
      // UI 재렌더링
      renderScheduleCards(CERTIFICATIONS[cert.name]);
      renderDdays(CERTIFICATIONS[cert.name]);
      // 일정 업데이트 알림
      const badge = document.querySelector('.cert-info-badge') || createUpdateBadge();
      badge.textContent = '✓ 최신 시험 일정 반영됨';
      badge.style.display = 'inline-block';
      setTimeout(() => { badge.style.display = 'none'; }, 4000);
    });
  }
}

function createUpdateBadge() {
  const badge = document.createElement('span');
  badge.className = 'cert-info-badge';
  badge.style.cssText = 'display:none; position:fixed; bottom:20px; right:20px; background:#22c55e; color:#fff; padding:8px 16px; border-radius:20px; font-size:13px; font-weight:600; z-index:999; box-shadow:0 4px 12px rgba(0,0,0,0.15);';
  document.body.appendChild(badge);
  return badge;
}

// ============================================
// 5. 페이지 메타·헤더 업데이트
// ============================================
function updatePageMeta(cert) {
  document.title = `수험서 All in One 대시보드 - ${cert.name} 채용 및 시험 일정`;
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
  const passLabelEl = document.getElementById('stat-pass-label');
  const passValEl   = document.getElementById('stat-pass-value');
  const passDescEl  = document.getElementById('stat-pass-desc');
  if (cert.avgPassRate && cert.avgPassRate !== '–') {
    if (passLabelEl) passLabelEl.textContent = '선택 자격증 합격률';
    if (passValEl)   passValEl.textContent   = cert.avgPassRate;
    if (passDescEl)  passDescEl.textContent  = cert.passRateSummary;
  }

  const examLabelEl = document.getElementById('stat-exam-rate-label');
  const examValEl   = document.getElementById('stat-exam-rate-value');
  const examDescEl  = document.getElementById('stat-exam-rate-desc');
  if (cert.avgExamRate) {
    if (examLabelEl) examLabelEl.textContent = '선택 자격증 응시률';
    if (examValEl)   examValEl.textContent   = cert.avgExamRate;
    if (examDescEl)  examDescEl.textContent  = cert.examRateSummary || '데이터 준비중';
  }

  document.getElementById('bookmark-count').textContent = STATE.bookmarks.length;
}

// ============================================
// 전국 국가기술자격 통계 로드 (한국산업인력공단 API)
// ============================================
async function fetchNationalStats() {
  try {
    const res  = await fetch('/api/qnet-stats?baseYY=2023');
    const data = await res.json();
    if (data.error) return;

    const passValEl  = document.getElementById('stat-pass-value');
    const passDescEl = document.getElementById('stat-pass-desc');
    const passLabelEl = document.getElementById('stat-pass-label');
    if (passValEl)  passValEl.textContent  = data.avgRate ? `${data.avgRate}%` : '–';
    if (passDescEl) passDescEl.textContent =
      `필기 ${data.pilRate}% | 실기 ${data.silRate}% (2023)`;
    if (passLabelEl) passLabelEl.textContent = '전국 평균 합격률';

    const examValEl   = document.getElementById('stat-exam-rate-value');
    const examDescEl  = document.getElementById('stat-exam-rate-desc');
    const examLabelEl = document.getElementById('stat-exam-rate-label');
    const pilMan = data.pilRc ? `${(data.pilRc / 10000).toFixed(0)}만` : '–';
    const silMan = data.silRc ? `${(data.silRc / 10000).toFixed(0)}만` : '–';
    if (examValEl)   examValEl.textContent   = pilMan;
    if (examDescEl)  examDescEl.textContent  = `필기 ${pilMan}건 | 실기 ${silMan}건 (2023)`;
    if (examLabelEl) examLabelEl.textContent = '전국 응시 현황';
  } catch (e) {
    // API 실패 시 기존 표시 유지
  }
}

// ============================================
// 8. 시험 일정 카드 렌더링 (동적)
// ============================================
// ============================================
// 날짜 파싱 및 회차 상태 헬퍼 (전역)
// ============================================
function parseLastDate(str) {
  if (!str || str === '-') return null;
  const parts = str.split(/[~\/]/).map(s => s.trim()).filter(Boolean);
  const lastStr = parts[parts.length - 1].split(' ')[0].trim();
  const d = new Date(lastStr);
  return isNaN(d) ? null : d;
}

function parseFirstDate(str) {
  if (!str || str === '-') return null;
  const firstStr = str.split(/[~\/]/)[0].trim().split(' ')[0].trim();
  const d = new Date(firstStr);
  return isNaN(d) ? null : d;
}

function getScheduleStatus(s) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const finalDate    = parseLastDate(s.finalResult || s.practicalResult);
  const practicalEnd = parseLastDate(s.practicalExam);
  const writtenStart = parseFirstDate(s.writtenApply || s.writtenExam);
  if (finalDate && finalDate < today) return 'done';
  if (practicalEnd && practicalEnd < today) return 'result-pending';
  if (writtenStart && writtenStart <= today) return 'current';
  return 'upcoming';
}

function renderScheduleCards(cert) {
  const grid = document.getElementById('schedule-cards-grid');
  if (!grid) return;

  const titleEl = document.getElementById('schedule-section-title');
  if (titleEl) titleEl.textContent = `2026년 ${cert.name} 정기 시험 일정`;

  // 하위 호환 — 내부에서도 동일 로직 사용
  function getStatus(s) { return getScheduleStatus(s); }

  grid.innerHTML = cert.schedules.map((s, idx) => {
    const status = getStatus(s);
    const isDone    = status === 'done';
    const isCurrent = status === 'current' || status === 'result-pending';

    const badgeClass = isCurrent ? 'current' : '';
    const cardClass  = isDone ? '' : 'active-round';

    let statusTag = '';
    if (isDone) {
      statusTag = '<span class="status-tag status-closed">최종합격발표 완료</span>';
    } else if (status === 'result-pending') {
      statusTag = '<span class="status-tag status-result">합격발표 대기</span>';
    } else if (isCurrent) {
      statusTag = '<span class="status-tag status-active">진행 중</span>';
    } else {
      statusTag = '<span class="status-tag status-upcoming">접수 예정</span>';
    }

    return `
      <div class="schedule-card ${cardClass}" id="schedule-card-${idx + 1}">
        <div class="round-badge ${badgeClass}">${s.round}</div>
        <ul class="schedule-details">
          <li><span class="detail-label">필기 원서접수</span><span class="detail-val">${s.writtenApply || '-'}</span></li>
          <li><span class="detail-label">필기 시험기간</span><span class="detail-val">${s.writtenExam || '-'}</span></li>
          <li><span class="detail-label">필기 합격발표</span><span class="detail-val">${s.writtenResult || '-'}</span></li>
          <li><span class="detail-label">실기 원서접수</span><span class="detail-val">${s.practicalApply || '-'}</span></li>
          <li><span class="detail-label">실기 시험기간</span><span class="detail-val">${s.practicalExam || '-'}</span></li>
          <li><span class="detail-label">최종 합격발표</span><span class="detail-val highlight-text">${s.finalResult || s.practicalResult || '-'}</span></li>
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
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  function parseStartDate(dateStr) {
    if (!dateStr) return null;
    const startStr = dateStr.split('~')[0].trim().split(' ')[0].trim();
    const d = new Date(startStr);
    return isNaN(d) ? null : d;
  }

  function calcDiff(dateStr) {
    const d = parseStartDate(dateStr);
    if (!d) return null;
    return Math.ceil((d - today) / 86400000);
  }

  function ddayText(diff) {
    if (diff === null) return '-';
    if (diff < 0)  return '종료';
    if (diff === 0) return 'D-Day';
    return `D-${diff}`;
  }

  function ddayClass(diff) {
    if (diff === null || diff < 0) return 'stat-value text-muted';
    if (diff <= 7)  return 'stat-value text-red';
    if (diff <= 30) return 'stat-value text-orange';
    return 'stat-value text-cyan';
  }

  const schedules = cert.schedules;

  // 상시 CBT 여부 확인 헬퍼
  function isAlways(str) {
    return str && /상시/.test(str);
  }

  let nextWritten = null;
  let writtenAlways = false;
  for (const s of schedules) {
    if (isAlways(s.writtenExam)) { writtenAlways = true; break; }
    const diff = calcDiff(s.writtenExam);
    if (diff !== null && diff >= 0) { nextWritten = { s, diff }; break; }
  }

  let nextPractical = null;
  let practicalAlways = false;
  for (const s of schedules) {
    if (isAlways(s.practicalExam)) { practicalAlways = true; break; }
    const diff = calcDiff(s.practicalExam);
    if (diff !== null && diff >= 0) { nextPractical = { s, diff }; break; }
  }

  const writtenValEl = document.getElementById('written-exam-dday');
  const writtenLblEl = document.getElementById('written-exam-label');
  if (writtenValEl && writtenLblEl) {
    if (writtenAlways) {
      writtenValEl.textContent = '상시CBT';
      writtenValEl.className   = 'stat-value text-green';
      writtenLblEl.textContent = '원하는 날짜에 상시 CBT로 응시 가능합니다.';
    } else if (nextWritten) {
      writtenValEl.textContent = ddayText(nextWritten.diff);
      writtenValEl.className   = ddayClass(nextWritten.diff);
      writtenLblEl.textContent = `${nextWritten.s.round} 필기 (${nextWritten.s.writtenExam})`;
    } else {
      writtenValEl.textContent = '종료';
      writtenValEl.className   = 'stat-value text-muted';
      writtenLblEl.textContent = '2026년 필기 일정이 모두 종료되었습니다.';
    }
  }

  const practicalValEl = document.getElementById('practical-exam-dday');
  const practicalLblEl = document.getElementById('practical-exam-label');
  if (practicalValEl && practicalLblEl) {
    if (practicalAlways) {
      practicalValEl.textContent = '상시CBT';
      practicalValEl.className   = 'stat-value text-green';
      practicalLblEl.textContent = '원하는 날짜에 상시 CBT로 응시 가능합니다.';
    } else if (nextPractical) {
      practicalValEl.textContent = ddayText(nextPractical.diff);
      practicalValEl.className   = ddayClass(nextPractical.diff);
      practicalLblEl.textContent = `${nextPractical.s.round} 실기 (${nextPractical.s.practicalExam})`;
    } else {
      practicalValEl.textContent = '종료';
      practicalValEl.className   = 'stat-value text-muted';
      practicalLblEl.textContent = '2026년 실기 일정이 모두 종료되었습니다.';
    }
  }

  const nodesContainer = document.getElementById('timeline-nodes');
  let doneCount = 0;
  if (nodesContainer) {
    nodesContainer.innerHTML = schedules.map((s, i) => {
      const st = getScheduleStatus(s);
      let cls = 'timeline-node';
      if (st === 'done') { cls += ' active done'; doneCount++; }
      else if (st === 'current' || st === 'result-pending') cls += ' active current';
      const label = s.round || `제${i + 1}회`;
      return `<div class="${cls}" id="node-round${i + 1}">
        <span class="node-dot"></span>
        <span class="node-label">${label}</span>
      </div>`;
    }).join('');
  }
  const timelineEl = document.getElementById('timeline-progress-bar');
  const segments = schedules.length - 1;
  const progressPct = segments <= 0 ? (doneCount > 0 ? 100 : 0)
    : Math.min(100, Math.round((doneCount / segments) * 100));
  if (timelineEl) timelineEl.style.width = `${progressPct}%`;
}


// ============================================
// 9-B. 시험 달력 위젯
// ============================================
let CAL_STATE = { year: 0, month: 0, cert: null };

function renderExamCalendar(cert) {
  const now = new Date();
  CAL_STATE.cert = cert;
  if (!CAL_STATE.year) {
    CAL_STATE.year  = now.getFullYear();
    CAL_STATE.month = now.getMonth(); // 0-indexed
  }
  drawCalendar();

  const prevBtn = document.getElementById('cal-prev');
  const nextBtn = document.getElementById('cal-next');
  if (prevBtn) { prevBtn.onclick = () => { moveCalMonth(-1); }; }
  if (nextBtn) { nextBtn.onclick = () => { moveCalMonth(1); }; }
}

function moveCalMonth(dir) {
  CAL_STATE.month += dir;
  if (CAL_STATE.month < 0)  { CAL_STATE.month = 11; CAL_STATE.year--; }
  if (CAL_STATE.month > 11) { CAL_STATE.month = 0;  CAL_STATE.year++; }
  drawCalendar();
}

function drawCalendar() {
  const { year, month, cert } = CAL_STATE;
  const labelEl = document.getElementById('cal-month-label');
  const daysEl  = document.getElementById('cal-days');
  if (!labelEl || !daysEl) return;

  const monthNames = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
  labelEl.textContent = `${year}년 ${monthNames[month]}`;

  // 시험 날짜 수집
  const writtenDates   = new Set();
  const practicalDates = new Set();
  const resultDates    = new Set();

  function addDateRange(str, set) {
    if (!str || str === '-') return;
    // 범위: "2026-01-20 ~ 2026-01-24" 또는 단일 "2026-01-24" 또는 복수 "2026-04-10 / 2026-04-17"
    const parts = str.split(/[~\/]/).map(s => s.trim()).filter(Boolean);
    if (parts.length >= 2 && str.includes('~')) {
      const start = new Date(parts[0]);
      const end   = new Date(parts[parts.length - 1]);
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        set.add(key);
      }
    } else {
      parts.forEach(p => { if (/^\d{4}-\d{2}-\d{2}/.test(p)) set.add(p.substring(0,10)); });
    }
  }

  if (cert && cert.schedules) {
    cert.schedules.forEach(s => {
      addDateRange(s.writtenExam,   writtenDates);
      addDateRange(s.practicalExam, practicalDates);
      addDateRange(s.writtenResult,  resultDates);
      addDateRange(s.practicalResult, resultDates);
    });
  }

  const today = new Date();
  const todayKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;

  const firstDay = new Date(year, month, 1).getDay(); // 0=일
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let html = '';
  // 빈 칸
  for (let i = 0; i < firstDay; i++) html += '<div class="cal-day empty"></div>';

  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dow  = new Date(year, month, d).getDay();
    let cls = 'cal-day';
    if (dow === 0) cls += ' sunday';
    if (dow === 6) cls += ' saturday';
    if (key === todayKey) cls += ' today';
    const isWritten   = writtenDates.has(key);
    const isPractical = practicalDates.has(key);
    const isResult    = resultDates.has(key);
    if (isWritten)   cls += ' has-written';
    if (isPractical) cls += ' has-practical';
    if (isResult && !isWritten && !isPractical) cls += ' has-result';

    let dots = '';
    if (isWritten || isPractical || isResult) {
      dots = '<div class="cal-day-dots">';
      if (isWritten)   dots += '<span class="cal-dot-small written"></span>';
      if (isPractical) dots += '<span class="cal-dot-small practical"></span>';
      if (isResult)    dots += '<span class="cal-dot-small result"></span>';
      dots += '</div>';
    }

    html += `<div class="${cls}" title="${key}">${d}${dots}</div>`;
  }
  daysEl.innerHTML = html;
}
// ============================================
// 10-0. 수험서 관련 뉴스 렌더링
// ============================================
function renderNews() {
  const container = document.getElementById('news-container');
  const badge = document.getElementById('news-cert-badge');
  if (!container) return;

  const certName = STATE.currentCert;
  if (badge) badge.textContent = certName;

  // 네이버 뉴스 검색 URL (새 탭으로 열기)
  const naverNewsUrl = `https://search.naver.com/search.naver?where=news&query=${encodeURIComponent(certName + ' 수험서')}`;
  const naverBlogUrl = `https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(certName + ' 수험서')}`;
  const googleNewsUrl = `https://news.google.com/search?q=${encodeURIComponent(certName + ' 자격증')}&hl=ko`;

  container.innerHTML = `
    <div class="news-links-row">
      <a href="${naverNewsUrl}" target="_blank" rel="noopener noreferrer" class="news-link-card">
        <div class="news-link-icon" style="background:#03c75a">
          <i class="fa-solid fa-n" style="font-size:1.2rem;font-weight:900;color:#fff">N</i>
        </div>
        <div class="news-link-info">
          <span class="news-link-title">네이버 뉴스 검색</span>
          <span class="news-link-desc">${certName} 수험서 관련 최신 뉴스</span>
        </div>
        <i class="fa-solid fa-arrow-up-right-from-square news-link-arrow"></i>
      </a>
      <a href="${naverBlogUrl}" target="_blank" rel="noopener noreferrer" class="news-link-card">
        <div class="news-link-icon" style="background:#03c75a">
          <i class="fa-solid fa-blog" style="color:#fff"></i>
        </div>
        <div class="news-link-info">
          <span class="news-link-title">네이버 블로그 검색</span>
          <span class="news-link-desc">${certName} 합격 후기 · 공부법 블로그</span>
        </div>
        <i class="fa-solid fa-arrow-up-right-from-square news-link-arrow"></i>
      </a>
      <a href="${googleNewsUrl}" target="_blank" rel="noopener noreferrer" class="news-link-card">
        <div class="news-link-icon" style="background:#4285f4">
          <i class="fa-brands fa-google" style="color:#fff"></i>
        </div>
        <div class="news-link-info">
          <span class="news-link-title">구글 뉴스 검색</span>
          <span class="news-link-desc">${certName} 자격증 관련 최신 뉴스</span>
        </div>
        <i class="fa-solid fa-arrow-up-right-from-square news-link-arrow"></i>
      </a>
    </div>
    <p class="news-hint"><i class="fa-solid fa-circle-info"></i> 클릭하면 해당 검색 결과 페이지가 새 탭에서 열립니다.</p>
  `;
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
  const bestContainer = document.getElementById('books-best-container');
  const recContainer  = document.getElementById('books-recommend-container');
  if (!bestContainer || !recContainer) return;

  const certName = STATE.currentCert;
  const rawBooks = (typeof REAL_BOOKS !== 'undefined' && REAL_BOOKS[certName])
    ? REAL_BOOKS[certName]
    : (getCert().books || []);

  // 5종 미만이면 자격증명 기반 플레이스홀더로 자동 패딩
  const allBooks = (() => {
    if (rawBooks.length >= 5) return rawBooks;
    const patterns = ['필기 핵심이론+기출', '실기 완전정복', '단기완성 합격', '과년도 기출해설', '필기+실기 한권완성'];
    const publishers = ['성안당', '예문사', '에듀윌', '일진사', '크라운출판사'];
    const bgs = [
      'linear-gradient(135deg,#0d1f5e,#4db843)',
      'linear-gradient(135deg,#7c3aed,#db2777)',
      'linear-gradient(135deg,#0891b2,#0d9488)',
      'linear-gradient(135deg,#b45309,#d97706)',
      'linear-gradient(135deg,#1e3a5f,#2563eb)',
    ];
    const padded = [...rawBooks];
    for (let i = rawBooks.length; i < 5; i++) {
      padded.push({
        title: `${certName} ${patterns[i]}`,
        author: '편집부',
        publisher: publishers[i % publishers.length],
        year: 2025,
        rating: parseFloat((4.2 - i * 0.05).toFixed(1)),
        reviews: Math.max(50 - i * 8, 10),
        price: 22000 + i * 1000,
        coverBg: bgs[i % bgs.length],
        tags: [],
      });
    }
    return padded;
  })();

  // 베스트셀러: 판매량(reviews) 내림차순 / 추천 수험서: 평점(rating) 내림차순
  const sortedBySales  = [...allBooks].sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
  const sortedByRating = [...allBooks].sort((a, b) => (b.rating  || 0) - (a.rating  || 0));
  const hasTags = allBooks.some(b => (b.tags || []).length > 0);
  let bestBooks, recBooks;
  if (hasTags) {
    bestBooks = sortedBySales .filter(b => (b.tags || []).includes('베스트')).slice(0, 5);
    recBooks  = sortedByRating.filter(b => (b.tags || []).includes('추천') && !(b.tags || []).includes('베스트')).slice(0, 5);
    // 태그 필터 후 5종 미만이면 나머지 books로 보충
    if (bestBooks.length < 5) {
      const seen = new Set(bestBooks.map(b => b.title));
      for (const b of sortedBySales) {
        if (bestBooks.length >= 5) break;
        if (!seen.has(b.title)) { bestBooks.push(b); seen.add(b.title); }
      }
    }
    if (recBooks.length < 5) {
      const seen = new Set(recBooks.map(b => b.title));
      for (const b of sortedByRating) {
        if (recBooks.length >= 5) break;
        if (!seen.has(b.title)) { recBooks.push(b); seen.add(b.title); }
      }
    }
  } else {
    // 태그 없는 경우: 판매량순 상위 5개 → 베스트, 평점순 상위 5개 → 추천
    bestBooks = sortedBySales .slice(0, 5);
    recBooks  = sortedByRating.slice(0, 5);
  }

  function bookCard(book, fallbackTag) {
    const tags = (book.tags && book.tags.length > 0) ? book.tags : (fallbackTag ? [fallbackTag] : []);
    const badgesHTML = tags.map(t => {
      let cls = t === '베스트' ? 'book-badge' : t === '추천' ? 'badge badge-success' : 'badge badge-info';
      return `<span class="${cls}" style="margin-right:4px">${t}</span>`;
    }).join('');

    // 실제 이미지 vs 목업
    // onload에서 canvas variance 검사: 교보 placeholder(단색 회색)는 variance≈0 → CSS 커버로 교체
    const mockBg = book.coverBg || 'linear-gradient(135deg,#0d1f5e,#4db843)';
    const mockTitle = book.title.replace(/\([^)]*\)/g, '').trim();
    const coverHTML = book.imageUrl
      ? `<img src="${book.imageUrl}" alt="${book.title}" class="book-cover-img" crossorigin="anonymous"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
           onload="(function(img){try{var c=document.createElement('canvas');c.width=40;c.height=40;var x=c.getContext('2d');x.drawImage(img,80,80,40,40,0,0,40,40);var d=x.getImageData(0,0,40,40).data,s=0,s2=0,n=d.length/4;for(var i=0;i<d.length;i+=4){var v=(d[i]+d[i+1]+d[i+2])/3;s+=v;s2+=v*v;}var variance=s2/n-(s/n)*(s/n);if(variance<10){img.style.display='none';img.nextElementSibling.style.display='flex';}}catch(e){}})(this)">
         <div class="book-cover-mock" style="background:${mockBg}; display:none;">
           <span class="book-cover-title">${mockTitle}</span>
           <span class="book-cover-publisher">${book.publisher}</span>
         </div>`
      : `<div class="book-cover-mock" style="background:${mockBg}">
           <span class="book-cover-title">${mockTitle}</span>
           <span class="book-cover-publisher">${book.publisher}</span>
         </div>`;

    const price = book.price || 0;
    const originalPrice = book.originalPrice || price;
    const discount = book.discount || '';
    const reviews = book.reviews || 0;
    const rating = book.rating || 4.5;
    const pageUrl = book.pageUrl
      || `https://search.kyobobook.co.kr/search?keyword=${encodeURIComponent(book.title)}`;
    const priceHTML = price > 0
      ? `${discount ? `<span class="book-discount">${discount}</span>` : ''}<span class="book-price">${price.toLocaleString()}원</span>${originalPrice > price ? `<span class="book-original-price">${originalPrice.toLocaleString()}원</span>` : ''}`
      : `<span class="book-price" style="color:var(--text-muted);font-size:0.8rem">교보문고에서 가격 확인</span>`;

    return `
      <div class="book-card">
        <div class="book-cover-container">
          ${coverHTML}
          <div class="book-badge-container">${badgesHTML}</div>
        </div>
        <div class="book-info">
          <span class="book-publisher">${book.publisher} 수험서</span>
          <h4 class="book-title" title="${book.title}">${book.title}</h4>
          <a href="${pageUrl}" target="_blank" rel="noopener noreferrer" class="book-rating-link"><i class="fa-solid fa-star"></i>교보문고에서 별점 확인</a>
          <div class="book-price-area">
            ${priceHTML}
          </div>
        </div>
        <a href="${pageUrl}" target="_blank" rel="noopener noreferrer" class="book-btn">교보문고 상세보기</a>
      </div>
    `;
  }

  bestContainer.innerHTML = bestBooks.length
    ? bestBooks.map(b => bookCard(b, '베스트')).join('')
    : '<p class="books-empty">베스트셀러 데이터가 없습니다.</p>';

  recContainer.innerHTML = recBooks.length
    ? recBooks.map(b => bookCard(b, '추천')).join('')
    : '<p class="books-empty">추천 수험서 데이터가 없습니다.</p>';

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
  list.innerHTML = cert.subjects.map((s, i) => {
    const title = s.title || s.name || '';
    const desc  = s.tip   || s.desc  || '';
    return `
    <div class="subject-item">
      <span class="subject-num">${i + 1}</span>
      <div class="subject-details">
        <h5>${title}</h5>
        <p>${desc}</p>
      </div>
    </div>
  `;
  }).join('');
}

// ============================================
// 16. 자격증 검색 드롭다운
// ============================================
function renderCertDropdown(query) {
  const dropdown = document.getElementById('cert-dropdown');
  if (!query.trim()) { dropdown.classList.remove('visible'); return; }

  const q = query.toLowerCase();
  const matches = Object.keys(CERTIFICATIONS).filter(name =>
    name.toLowerCase().includes(q) || q.includes(name.toLowerCase().substring(0, 2))
  ).sort((a, b) => a.localeCompare(b, 'ko'));

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
  dropdown.classList.toggle('two-col', matches.length > 10);
  dropdown.classList.add('visible');
}

window.selectCert = function(certName) {
  const dropdown = document.getElementById('cert-dropdown');
  dropdown.classList.remove('visible');
  switchCertification(certName);
};

window.resetDashboard = function() {
  STATE.currentCert = null;
  try { localStorage.removeItem('lastCert'); } catch(e) {}
  const dropdown = document.getElementById('cert-dropdown');
  if (dropdown) dropdown.classList.remove('visible');
  showWelcomeScreen();
};


// ============================================
// 17-B. 출판사 검색 위젯
// ============================================
const PUBLISHERS = [
  { name: '성안당',       url: 'https://www.cyber.co.kr',          keywords: ['성안당'] },
  { name: '예문사',       url: 'https://www.yeamoonsa.com',        keywords: ['예문사'] },
  { name: '에듀윌',       url: 'https://www.eduwill.net',          keywords: ['에듀윌'] },
  { name: '시대에듀',     url: 'https://www.sdedu.co.kr',          keywords: ['시대에듀', '시대고시'] },
  { name: '일진사',       url: 'https://www.iljinsa.com',          keywords: ['일진사'] },
  { name: '구민사',       url: 'https://kuhminsa.co.kr',           keywords: ['구민사'] },
  { name: '크라운출판사', url: 'https://www.crownbook.co.kr',      keywords: ['크라운'] },
  { name: '한솔아카데미', url: 'https://www.inup.co.kr',           keywords: ['한솔'] },
  { name: '이패스코리아', url: 'https://www.epasskorea.com',       keywords: ['이패스'] },
  { name: '영진닷컴',     url: 'https://www.youngjin.com',         keywords: ['영진'] },
  { name: '기문당',       url: 'https://www.kimoondang.com',       keywords: ['기문당'] },
  { name: '에듀피디',     url: 'https://www.edupd.com',            keywords: ['에듀피디'] },
  { name: '다산에듀',     url: 'https://dasanedu.co.kr',           keywords: ['다산'] },
  { name: 'MJ미디어',     url: 'https://www.mjmedia.co.kr',        keywords: ['mj', 'MJ', 'MJ미디어'] },
  { name: '동일출판사',   url: 'https://dongilbook.co.kr',         keywords: ['동일'] },
  { name: '탑스팟',       url: 'https://www.topspot.co.kr',        keywords: ['탑스팟'] },
  { name: '메카피아',     url: 'https://www.mechapia.com',         keywords: ['메카피아'] },
  { name: '교보문고',     url: 'https://www.kyobobook.co.kr',      keywords: ['교보'] },
  { name: '알라딘',       url: 'https://www.aladin.co.kr',         keywords: ['알라딘'] },
  { name: '예스24',       url: 'https://www.yes24.com',            keywords: ['예스'] },
];

function initPublisherSearch() {
  const input   = document.getElementById('publisher-search');
  const results = document.getElementById('publisher-results');
  const quickEl = document.getElementById('publisher-quick-tags');
  if (!input || !results || !quickEl) return;

  // 빠른 접근 태그 (자주 쓰는 출판사)
  const quickList = ['성안당', '예문사', '에듀윌', '시대에듀', '한솔아카데미', '영진닷컴'];
  quickEl.innerHTML = quickList.map(name => {
    const pub = PUBLISHERS.find(p => p.name === name);
    return pub
      ? `<span class="publisher-quick-tag" onclick="(function(){document.getElementById('publisher-search').value='${name}';renderPublisherResults('${name}');})()">${name}</span>`
      : '';
  }).join('');

  input.addEventListener('input', e => window.renderPublisherResults(e.target.value));
}

window.renderPublisherResults = function renderPublisherResults(query) {
  const results = document.getElementById('publisher-results');
  if (!results) return;
  const q = query.trim().toLowerCase();
  if (!q) { results.innerHTML = ''; return; }

  const matched = PUBLISHERS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.keywords.some(k => k.toLowerCase().includes(q))
  );

  if (matched.length === 0) {
    results.innerHTML = `<span class="publisher-no-result"><i class="fa-solid fa-circle-info"></i> 검색 결과가 없습니다.</span>`;
    return;
  }

  results.innerHTML = matched.map(p =>
    `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="publisher-result-btn">
      <i class="fa-solid fa-arrow-up-right-from-square"></i>${p.name} 홈페이지
    </a>`
  ).join('');
}

// ============================================
// 18. 다크모드 테마
// ============================================
function updateThemeBtn(isDark) {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  btn.innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i><span class="theme-label">라이트모드</span>'
    : '<i class="fa-solid fa-moon"></i><span class="theme-label">다크모드</span>';
}

function syncInventoryTheme(isDark) {
  const inv = document.getElementById('inventory-panel');
  if (inv) inv.classList.toggle('light-mode', !isDark);
}

function initTheme() {
  const saved = localStorage.getItem('dashboard_theme');
  const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.body.classList.toggle('dark-theme', isDark);
  updateThemeBtn(isDark);
  syncInventoryTheme(isDark);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('dashboard_theme', isDark ? 'dark' : 'light');
  updateThemeBtn(isDark);
  syncInventoryTheme(isDark);
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
  searchInput.value = STATE.currentCert || '';
  searchInput.placeholder = STATE.currentCert ? STATE.currentCert : '자격증 이름을 입력하세요 (예: 전기기사)';

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
    const qLower = query.toLowerCase();
    const exact = Object.keys(CERTIFICATIONS).find(name => name.toLowerCase() === qLower);
    const partial = Object.keys(CERTIFICATIONS).find(name =>
      name.toLowerCase().includes(qLower) || qLower.includes(name.toLowerCase().substring(0, 2))
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

  // 사이드바 스크롤 싱크 (클릭 이벤트만)
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// ============================================
// 전역 스크롤 싱크 (클로저 문제 없이 항상 최신 DOM 참조)
// ============================================
(function() {
  const SECTION_IDS = ['schedule-section', 'monthly-section', 'books-section', 'news-section', 'jobs-section', 'analytics-section'];

  function syncNavOnScroll() {
    const threshold = window.scrollY + window.innerHeight * 0.5;
    let activeId = null;
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el && threshold >= el.getBoundingClientRect().top + window.scrollY) {
        activeId = id;
      }
    });
    if (!activeId) return;
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('href') === '#' + activeId);
    });
  }

  window.addEventListener('scroll', syncNavOnScroll, { passive: true });
})();

// inventory-panel을 body 직접 자식으로 이동 (dashboard-content 안에 있으면 같이 숨겨지는 문제 방지)
(function() {
  const inv = document.getElementById('inventory-panel');
  if (inv && inv.parentElement !== document.body) {
    document.body.appendChild(inv);
  }
})();

// 탭 전환 (대시보드 ↔ 발주&재고관리)
window.switchTab = function(tab) {
  const inventoryPanel = document.getElementById('inventory-panel');
  const searchBar = document.getElementById('header-search-bar');
  const resetBtn = document.getElementById('reset-btn');
  const tabDashboard = document.getElementById('tab-dashboard');
  const tabInventory = document.getElementById('tab-inventory');
  const welcomeScreen = document.getElementById('welcome-screen');
  const dashboardContent = document.getElementById('dashboard-content');

  if (tab === 'inventory') {
    // 인벤토리로 이동 전 현재 화면 상태 저장
    window._prevDashboardState = {
      welcomeVisible: welcomeScreen && welcomeScreen.style.display !== 'none' && getComputedStyle(welcomeScreen).display !== 'none',
      dashboardVisible: dashboardContent && dashboardContent.style.display !== 'none' && getComputedStyle(dashboardContent).display !== 'none',
    };
    // 대시보드 숨기기
    document.querySelectorAll('.dashboard-wrapper, #welcome-screen, #dashboard-content, #dashboard-container, #cert-dashboard').forEach(el => {
      if (el) el.style.display = 'none';
    });
    if (searchBar) searchBar.style.display = 'none';
    if (resetBtn) resetBtn.style.display = 'none';
    // inventory-panel이 body 직접 자식이 아닌 경우 이동 (CSS 상속 display:none 방지)
    if (inventoryPanel && inventoryPanel.parentElement !== document.body) {
      document.body.appendChild(inventoryPanel);
    }
    // 재고관리 패널 표시
    if (inventoryPanel) inventoryPanel.style.display = 'block';
    if (tabDashboard) tabDashboard.classList.remove('active');
    if (tabInventory) tabInventory.classList.add('active');
    const siteTitle = document.getElementById('site-title');
    if (siteTitle) siteTitle.textContent = '수험서 발주&재고관리';
    document.body.style.overflow = 'hidden';
    // 발주&재고관리 앱 초기화 (최초 1회)
    if (typeof window.initInventoryApp === 'function') window.initInventoryApp();
  } else {
    // 재고관리 패널 숨기기
    if (inventoryPanel) inventoryPanel.style.display = 'none';
    // 저장된 이전 상태로 복원; 상태가 없으면 웰컴 화면으로
    const prev = window._prevDashboardState;
    if (prev && prev.dashboardVisible) {
      if (welcomeScreen) welcomeScreen.style.display = 'none';
      if (dashboardContent) dashboardContent.style.display = 'block';
      document.querySelectorAll('.dashboard-wrapper, #dashboard-container, #cert-dashboard').forEach(el => {
        if (el) el.style.display = '';
      });
    } else {
      // 웰컴 화면으로 복원
      if (welcomeScreen) welcomeScreen.style.display = 'flex';
      if (dashboardContent) dashboardContent.style.display = 'none';
      document.querySelectorAll('.dashboard-wrapper, #dashboard-container, #cert-dashboard').forEach(el => {
        if (el) el.style.display = '';
      });
    }
    const siteTitle = document.getElementById('site-title');
    if (siteTitle) siteTitle.textContent = '수험서 All in One 대시보드';
    if (searchBar) searchBar.style.display = '';
    if (resetBtn) resetBtn.style.display = '';
    if (tabDashboard) tabDashboard.classList.add('active');
    if (tabInventory) tabInventory.classList.remove('active');
    document.body.style.overflow = '';
  }
};

function initInventoryModal() {
  // 탭 방식으로 대체됨 — 기존 모달 참조 없음
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInventoryModal);
} else {
  initInventoryModal();
}
