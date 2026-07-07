// ============================================
// 실제 도서 데이터 (교보문고 상품코드 기준, 2026년도)
// 이미지: https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/{상품코드}.jpg
// 링크:   https://product.kyobobook.co.kr/detail/{상품코드}
// imageUrl: null 이면 CSS 표지 placeholder 자동 표시
// ============================================
const KB = (code) => code ? `https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${code}.jpg` : null;

const REAL_BOOKS = {

  // ────────────────────────────────────────
  '산업안전산업기사': [
    // 베스트셀러 5
    { title: '2026 나합격 산업안전산업기사 필기+무료특강+온라인CBT', author: '김현우, 허선혜', publisher: '삼원북스', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], imageUrl: KB('S000217485504'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217485504' },
    { title: '2026 에듀윌 산업안전산업기사 필기 한권끝장', author: '최창률', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], isbn: '9791136038937', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+에듀윌' },
    { title: '2026 직8딴 산업안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791173491382', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+직8딴+산업안전산업기사' },
    { title: '2026 산업안전산업기사 필기 7개년 기출문제집', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 176, tags: ['베스트'], isbn: '9791173491382', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+세화' },
    { title: '2026 해커스 산업안전산업기사 필기 핵심요약+기출', author: '해커스자격증', publisher: '해커스자격증', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9788969656308', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+산업안전산업기사' },
    // 추천수험서 5
    { title: '2026 찐합격 산업안전산업기사 실기 단기완성', author: '이상도', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], isbn: '9791173491382', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+실기' },
    { title: '2026 산업안전산업기사 실기 필답형+작업형 완전정복', author: '이순규', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], isbn: '9791173491382', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+실기+예문사' },
    { title: '2026 벼락치기 산업안전산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9788931713930', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+벼락치기' },
    { title: '2026 산업안전산업기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], isbn: '9791173491382', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+CBT' },
    { title: '2026 스마트 산업안전산업기사 과년도 문제해설', author: '허원회', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791168756663', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+과년도' },
  ],

  // ────────────────────────────────────────
  '전기기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 전기기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 421, tags: ['베스트'], imageUrl: KB('S000216853109'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216853109' },
    { title: '2026 해커스 전기기사·산업기사 필기 올인원', author: '오우진', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: KB('S000218582288'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218582288' },
    { title: '2026 직8딴 전기기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 287, tags: ['베스트'], isbn: '9791176400121', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+직8딴+전기기사+필기' },
    { title: '2026 전기기사 필기 최근 10년간 기출문제', author: '이재원', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218820738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218820738' },
    { title: '2026 전기기사 필기', author: '김상훈', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000217579715'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217579715' },
    // 추천수험서 5
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출문제집+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 312, tags: ['추천'], imageUrl: KB('S000217555269'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217555269' },
    { title: '2026 전기기사 필기 필수기출 1200제', author: '엔지니어랩 연구소', publisher: '엔지니어랩', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 256, tags: ['추천'], imageUrl: KB('S000218188325'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218188325' },
    { title: '2026 전기응용 및 공사재료', author: '김상훈', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: KB('S000217420169'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217420169' },
    { title: '2026 전기공사기사 실기', author: '김상훈', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 167, tags: ['추천'], imageUrl: KB('S000219138309'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219138309' },
    { title: '2026 전기기사 실기 완전정복', author: '이현철', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.4, reviews: 143, tags: ['추천'], isbn: '9788927439103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+전기기사+실기' },
  ],

  // ────────────────────────────────────────
  '소방안전관리자1급': [
    // 베스트셀러 5
    { title: '2027 찐합격 소방안전관리자 1급 기출문제 총집합+5개년 기출문제', author: '공하성', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000220292536'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220292536' },
    { title: '2027 박문각 소방안전관리자 1급 8개년 기출문제집+무료강의', author: '김연진', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000220097066'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220097066' },
    { title: '2027 박문각 소방안전관리자 1급 핵심이론서+무료특강', author: '김연진', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000220054046'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220054046' },
    { title: '2026 챕스랜드 소방안전관리자 1급 찐정리 원샷 이론서', author: '서채빈', publisher: '종이향기', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218936176'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218936176' },
    { title: '2026 시대에듀 소방안전관리자 1급 기출예상문제집', author: '김미현', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000219881474'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219881474' },
    // 추천수험서 5
    { title: '2027 찐합격 소방안전관리자 1급 합격노트+8개년 기출문제', author: '공하성', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], imageUrl: KB('S000220292538'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220292538' },
    { title: '2027 모아 소방안전관리자 1급 이론서 무료특강', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: KB('S000219868621'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219868621' },
    { title: '2027 모아 소방안전관리자 1급 실전모의고사 무료특강', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], imageUrl: KB('S000219868605'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219868605' },
    { title: '2026 쇼츠 소방안전관리자 1급 기출예상문제집', author: '소방안전관리자회', publisher: '서울고시각(SG P&E)', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], imageUrl: KB('S000217487323'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217487323' },
    { title: '2026 챕스랜드 소방안전관리자1급 고난도 예상 기출유형 찜쪄먹기', author: '서채빈', publisher: '종이향기', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('S000219115299'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219115299' },
  ],

  // ────────────────────────────────────────
  '소방설비기사': [
    // 베스트셀러 5
    { title: '2026 찐합격 7개년 과년도 소방설비기사 필기 전기1-7', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218276598'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218276598' },
    { title: '2026 대해부 7개년 기출문제 소방설비기사 전기 필기', author: '공하성', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218839670'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218839670' },
    { title: '2026 에듀윌 소방설비기사 기계 기출문제집 필기', author: '김윤수', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000216719513'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216719513' },
    { title: '2026 소방설비기사 필기(전기분야)', author: '표정은', publisher: '동화기술', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000217529077'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217529077' },
    { title: '2026 체크업 소방설비기사·산업기사 기계 분야 필기', author: '김종상', publisher: '일진사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000218934350'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218934350' },
    // 추천수험서 5
    { title: '2026 에듀윌 소방설비기사 실기 전기+무료특강', author: '손익희', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], imageUrl: KB('S000219195829'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219195829' },
    { title: '2026 찐합격 소방안전관리자 3급 기출문제 총집합', author: '공하성', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: KB('S000219332876'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219332876' },
    { title: '2026 소방설비기사 실기 전기 완전정복', author: '공하성', publisher: '성안당', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788927439103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+실기+전기' },
    { title: '2026 소방설비기사 실기 기계 완전정복', author: '공하성', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], isbn: '9788927439295', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+실기+기계' },
    { title: '2026 벼락치기 소방설비기사 전기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9788931513844', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+벼락치기' },
  ],

  // ────────────────────────────────────────
  '정보처리기사': [
    // 베스트셀러 5
    { title: '2026 시나공 정보처리기사 필기 기본서', author: '길벗알앤디', publisher: '길벗', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 892, tags: ['베스트'], imageUrl: KB('S000218197628'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218197628' },
    { title: '2026 수제비 정보처리기사 필기 기본서 세트', author: '윤영빈 외', publisher: '수제비', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 645, tags: ['베스트'], imageUrl: KB('S000218191062'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218191062' },
    { title: '2026 이기적 정보처리기사 필기 기본서', author: '강희영', publisher: '영진닷컴', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 521, tags: ['베스트'], imageUrl: KB('S000218641525'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218641525' },
    { title: '2026 이기적 정보처리기사 필기+실기 올인원', author: '고소현', publisher: '영진닷컴', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 412, tags: ['베스트'], imageUrl: KB('S000217287449'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217287449' },
    { title: '2026 수제비 정보처리기사 필기 기출문제집', author: '윤영빈 외', publisher: '수제비', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], imageUrl: KB('S000218609731'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218609731' },
    // 추천수험서 5
    { title: '2026 수제비 정보처리기사 실기 기본서', author: '윤영빈 외', publisher: '수제비', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.7, reviews: 456, tags: ['추천'], imageUrl: KB('S000218853684'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218853684' },
    { title: '2026 시나공 정보처리기사 실기 기본서', author: '길벗알앤디', publisher: '길벗', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 389, tags: ['추천'], imageUrl: KB('S000219186294'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219186294' },
    { title: '2026 시나공 정보처리기사 실기 기출문제집', author: '길벗알앤디', publisher: '길벗', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 312, tags: ['추천'], imageUrl: KB('S000219055682'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219055682' },
    { title: '2026 이기적 정보처리기사 필기 기출 1500제', author: '신면철', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], imageUrl: KB('S000217193784'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217193784' },
    { title: '2026 이기적 정보처리기사 필기 절대족보', author: '신면철', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 198, tags: ['추천'], imageUrl: KB('S000217191918'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217191918' },
  ],

  // ────────────────────────────────────────
  '건설안전산업기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 건설안전기사 필기 기출문제집', author: '김충민', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218278437'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218278437' },
    { title: '2026 나합격 산업안전산업기사 필기+무료특강+CBT', author: '김현우', publisher: '삼원북스', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000217485504'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217485504' },
    { title: '2026 직8딴 건설안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791173491467', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+필기' },
    { title: '2026 건설안전산업기사 필기 7개년 기출문제해설', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9788931714005', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+세화' },
    { title: '2026 해커스 건설안전산업기사 필기 한권합격', author: '해커스자격증', publisher: '해커스자격증', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9788931714005', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+건설안전산업기사' },
    // 추천수험서 5
    { title: '2026 건설안전산업기사 실기 필답형 완전정복', author: '이순규', publisher: '예문사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], isbn: '9788931714005', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+실기' },
    { title: '2026 스마트 건설안전산업기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], isbn: '9791168756793', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+과년도' },
    { title: '2026 건설안전산업기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788931714005', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+CBT' },
    { title: '2026 건설안전산업기사 실기 작업형 핵심정리', author: '김충민', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], isbn: '9788931714005', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+작업형' },
    { title: '2026 벼락치기 건설안전산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9788931714005', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+건설안전산업기사+벼락치기' },
  ],

  // ────────────────────────────────────────
  '전기산업기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 전기기사·산업기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: KB('S000216853109'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216853109' },
    { title: '2026 해커스 전기기사·산업기사 필기 올인원', author: '오우진', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218582288'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218582288' },
    { title: '2026 직8딴 전기산업기사 필기', author: '김진태', publisher: '김영북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791136038128', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+직8딴+전기산업기사' },
    { title: '2026 전기산업기사 필기', author: '김상훈', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000217601906'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217601906' },
    { title: '2026 전기기사 필기 필수기출 1200제', author: '엔지니어랩 연구소', publisher: '엔지니어랩', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000218188325'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218188325' },
    // 추천수험서 5
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: KB('S000217555269'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217555269' },
    { title: '2026 전기산업기사 실기 완전정복', author: '이현철', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791136039002', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+전기산업기사+실기' },
    { title: '2026 벼락치기 전기산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791136038128', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+전기산업기사+벼락치기' },
    { title: '2026 전기기사 필기 최근 10년간 기출문제', author: '이재원', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], imageUrl: KB('S000218820738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218820738' },
    { title: '2026 전기회로이론 필기+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('S000217252017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217252017' },
  ],

  // ────────────────────────────────────────
  '일반기계기사': [
    // 베스트셀러 5
    { title: '2026 해커스 일반기계기사 필기 한권합격 이론+최신기출', author: '이선형', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218366558'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218366558' },
    { title: '2026 해커스 일반기계기사 실기 작업형 출제 도면집', author: '해커스자격증', publisher: '해커스자격증', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218980950'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218980950' },
    { title: '2026 에듀윌 일반기계기사 필기 한권끝장', author: '에듀윌 기계수험연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791136017611', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+일반기계기사' },
    { title: '2026 나합격 일반기계기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791176400145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+일반기계기사' },
    { title: '2026 직8딴 일반기계기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9788969656506', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+직8딴+일반기계기사' },
    // 추천수험서 5
    { title: '2026 일반기계기사 실기 완전정복', author: '이현철', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9788968780516', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+일반기계기사+실기' },
    { title: '2026 스마트 7개년 과년도 일반기계기사 필기', author: '허원회, 박만재', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9788931512076', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+일반기계기사+과년도' },
    { title: '2026 벼락치기 일반기계기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788969656506', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+일반기계기사+벼락치기' },
    { title: '2026 일반기계기사 CBT 최신기출문제해설', author: '서상희', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9788968780516', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+일반기계기사+CBT' },
    { title: '2026 일반기계기사 기계설계 핵심이론 및 기출', author: '안광호', publisher: '한솔아카데미', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9791194997931', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+일반기계기사+한솔아카데미' },
  ],

  // ────────────────────────────────────────
  '화공기사': [
    // 베스트셀러 5
    { title: '2026 화공기사 필기 세트', author: '정나나', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 278, tags: ['베스트'], imageUrl: KB('S000219080786'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219080786' },
    { title: '2026 화공기사 기출문제집(필기)', author: '김재호', publisher: '예문사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: KB('S000217304501'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217304501' },
    { title: '2026 에듀윌 화공기사 필기 한권끝장', author: '에듀윌 화공수험연구소', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9788927461289', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+화공기사' },
    { title: '2026 나합격 화공기사 필기+무료특강', author: '이윤기', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791188883981', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+화공기사' },
    { title: '2026 화공기사 필기 7개년 기출문제해설', author: '서상희', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9788927461289', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화공기사+일진사' },
    // 추천수험서 5
    { title: '2026 화공기사 실기 완전정복', author: '이현철', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 198, tags: ['추천'], isbn: '9788927461289', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화공기사+실기' },
    { title: '2025 정나나의 화공기사 필기 과년도 문제해설', author: '정나나', publisher: '예문사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], imageUrl: KB('S000213942242'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213942242' },
    { title: '2026 벼락치기 화공기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788927461289', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화공기사+벼락치기' },
    { title: '2026 스마트 화공기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9788927461289', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+화공기사+과년도' },
    { title: '2026 화공기사 CBT 실전모의고사+핵심요약', author: '화공기사연구회', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9788927461289', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화공기사+CBT' },
  ],

  // ────────────────────────────────────────
  '가스기사': [
    // 베스트셀러 5
    { title: '2026 평생 무료 동영상과 함께하는 가스기사 필기', author: '서상희', publisher: '일진사', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218666990'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218666990' },
    { title: '가스기사·가스산업기사 필기 총정리', author: '서상희', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: KB('S000214202695'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214202695' },
    { title: '2026 가스산업기사 필기 기출문제집', author: '김재호', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218667744'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218667744' },
    { title: '2026 나합격 가스기사 필기 핵심요약+기출', author: '이윤기', publisher: '삼원북스', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9791194997351', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스기사' },
    { title: '2026 에듀윌 가스기사 필기 한권끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 123, tags: ['베스트'], isbn: '9788942920433', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+에듀윌+가스기사' },
    // 추천수험서 5
    { title: '2026 가스기사 실기 완전정복 필답형+작업형', author: '서상희', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 178, tags: ['추천'], isbn: '9788931585735', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기사+실기' },
    { title: '2026 가스기능사 필기 총정리', author: '서상희', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: KB('S000217622875'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217622875' },
    { title: '2026 벼락치기 가스기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9788942920433', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기사+벼락치기' },
    { title: '2026 해커스 가스기사 필기 핵심요약', author: '해커스자격증', publisher: '해커스자격증', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9788942920433', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+해커스+가스기사' },
    { title: '2026 가스기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9788931585735', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기사+CBT' },
  ],

  // ────────────────────────────────────────
  '가스산업기사': [
    // 베스트셀러 5
    { title: '2026 나합격 가스산업기사 필기+실기+무료특강', author: '이윤기', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 287, tags: ['베스트'], isbn: '9791194997375', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스산업기사+필기' },
    { title: '2026 가스산업기사 필기 총정리', author: '서상희', publisher: '일진사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9788942920549', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+필기+총정리' },
    { title: '2026 모아 가스산업기사 필기 핵심이론+과년도', author: '오민정', publisher: '모아교육그룹', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791168044913', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+모아+가스산업기사+필기' },
    { title: '2026 나합격 가스산업기사 필기 핵심이론+8개년 기출', author: '이윤기', publisher: '삼원북스', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791193858837', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스산업기사+핵심이론' },
    { title: '2026 가스산업기사 필기 과년도 출제문제 해설', author: '서상희', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], isbn: '9788942920518', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+과년도' },
    // 추천수험서 5
    { title: '2026 모아 가스산업기사 필기 빵꾸노트', author: '오민정', publisher: '모아교육그룹', price: 9900, originalPrice: 11000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791168041950', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+모아+가스산업기사+빵꾸노트' },
    { title: '2026 가스산업기사 필기 기출문제집', author: '김재호', publisher: '예문사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788931713688', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+기출문제집' },
    { title: '2026 에듀윌 가스산업기사 필기 한권끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], isbn: '9791194997375', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+가스산업기사' },
    { title: '2026 가스산업기사 실기 완전정복', author: '서상희', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9788931585704', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+실기' },
    { title: '2026 가스산업기사 CBT 최신기출문제해설', author: '이윤기', publisher: '삼원북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], isbn: '9788931585704', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+CBT' },
  ],

  // ────────────────────────────────────────
  '가스기능사': [
    // 베스트셀러 5
    { title: '2026 나합격 가스기능사 필기+실기+무료특강', author: '이윤기', publisher: '삼원북스', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791194997436', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스기능사+필기' },
    { title: '2026 가스기능사 필기 총정리', author: '서상희', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], isbn: '9788942920402', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+필기+총정리' },
    { title: '2026 에듀윌 가스기능사 필기 2주끝장', author: '양성진', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 213, tags: ['베스트'], isbn: '9791136038852', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+가스기능사+필기' },
    { title: '2026 모아 가스기능사 필기 핵심이론+과년도 12개년', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], isbn: '9791168044906', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+모아+가스기능사+필기' },
    { title: '2026 가스기능사 필기 과년도 출제문제 해설', author: '서상희', publisher: '일진사', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 154, tags: ['베스트'], isbn: '9788942921010', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+과년도' },
    // 추천수험서 5
    { title: '홍까스와 함께하는 가스기능사 필기 핵심강의노트', author: '홍경표', publisher: '에듀피디', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 132, tags: ['추천'], isbn: '9791155865668', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=홍까스+가스기능사+필기' },
    { title: '2026 가스기능사 필기 CBT 기출문제집', author: '김재호', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9788931584684', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+CBT' },
    { title: '2026 가스기능사 필기 한권끝장', author: '이윤기', publisher: '삼원북스', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788942921010', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+필기+한권끝장' },
    { title: '2026 가스기능사 실기 완전정복', author: '서상희', publisher: '일진사', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9788942921010', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+실기' },
    { title: '2026 Win-Q 가스기능사 필기 단기합격', author: '함성훈', publisher: '시대에듀', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 73, tags: ['추천'], isbn: '9791138398435', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+가스기능사' },
  ],

  // ────────────────────────────────────────
  '가스기능장': [
    // 베스트셀러 5
    { title: '2026 완벽대비 가스기능장 필기', author: '서상희', publisher: '동일출판사', price: 38000, originalPrice: 40000, discount: '5%', rating: 4.6, reviews: 145, tags: ['베스트'], isbn: '9788938117113', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+필기+완벽대비' },
    { title: '2026 초단기완성! 가스기능장 필기', author: '노진식', publisher: '책과상상', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 112, tags: ['베스트'], isbn: '9791169673358', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+초단기완성+가스기능장' },
    { title: '단기완성 가스기능장 필기 최근 기출문제', author: '최갑규', publisher: '세진북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 98, tags: ['베스트'], isbn: '9791157458103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+필기+기출문제' },
    { title: '가스기능장 필기 과년도 기출문제', author: '권오수 외', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 87, tags: ['베스트'], isbn: '9788927456551', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+과년도+기출문제' },
    { title: '한권으로 필기와 실기를 끝내는 가스기능장', author: '최갑규', publisher: '세진북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 76, tags: ['베스트'], isbn: '9791157457007', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+필기+실기+한권' },
    // 추천수험서 5
    { title: '가스기능장 핵심요약 이론서', author: '서상희', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 65, tags: ['추천'], isbn: '9788938117472', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+핵심요약+이론서' },
    { title: '가스기능장 필기 CBT 실전모의고사', author: '이윤기', publisher: '삼원북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9788938117472', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+CBT+모의고사' },
    { title: '가스기능장 NCS 출제유형 핵심정리', author: '박재현', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.3, reviews: 48, tags: ['추천'], isbn: '9791157458103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+NCS+핵심정리' },
    { title: '가스기능장 실기 완전정복', author: '최갑규', publisher: '세진북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.3, reviews: 43, tags: ['추천'], isbn: '9788938117472', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+실기' },
    { title: '가스기능장 10개년 기출문제 해설', author: '노진식', publisher: '책과상상', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.2, reviews: 37, tags: ['추천'], isbn: '9791157458103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+10개년+기출' },
  ],

  // ────────────────────────────────────────
  '정보보안기사': [
    // 베스트셀러 5
    { title: '2026 알기사 정보보안기사(산업기사) 필기+핵심기출 1200제 세트', author: '조현준', publisher: '지안에듀', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218322836'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218322836' },
    { title: '2026 이기적 정보보안기사 필기+실기 올인원', author: '임호진', publisher: '영진닷컴', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218331600'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218331600' },
    { title: '2026 수제비 정보보안기사 필기 기본서', author: '윤영빈 외', publisher: '수제비', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218353373'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218353373' },
    { title: '2026 에듀윌 정보보안기사 필기 한권끝장', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9788966113217', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+정보보안기사' },
    { title: '2026 정보보안기사 필기 7개년 기출문제해설', author: '조현준', publisher: '지안에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9788966113217', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보보안기사+기출' },
    // 추천수험서 5
    { title: '2026 알기사 정보보안기사(산업기사) 실기', author: '정일영', publisher: '지안에듀', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: KB('S000219083573'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219083573' },
    { title: '2026 이기적 정보보안기사 필기 기출 1400제', author: '임호진', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9788931481310', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+정보보안기사+기출' },
    { title: '2026 수제비 정보보안기사 필기 기출문제집', author: '윤영빈 외', publisher: '수제비', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('S000218609731'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218609731' },
    { title: '2026 정보보안기사 CBT 실전모의고사', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], isbn: '9788966113217', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보보안기사+CBT' },
    { title: '2026 정보보안기사 한권끝장 암호학+네트워크', author: '박민욱', publisher: '한빛미디어', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9788966113217', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+정보보안기사+한빛미디어' },
  ],

  // ────────────────────────────────────────
  '빅데이터분석기사': [
    // 베스트셀러 5
    { title: '2026 이기적 빅데이터분석기사 필기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: KB('S000217176100'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217176100' },
    { title: '2025 이기적 빅데이터분석기사 필기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('S000213942959'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213942959' },
    { title: '2026 에듀윌 빅데이터분석기사 필기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 267, tags: ['베스트'], isbn: '9791136041142', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+빅데이터분석기사+필기' },
    { title: '2025 수제비 빅데이터분석기사 필기', author: '윤영빈 외', publisher: '수제비', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000215667184'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215667184' },
    { title: '2026 빅데이터분석기사 필기 기출문제 완전정복', author: '나홍석', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], isbn: '9788931480337', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+빅데이터분석기사+기출' },
    // 추천수험서 5
    { title: '2026 이기적 빅데이터분석기사 실기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 289, tags: ['추천'], isbn: '9788931480337', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+이기적+빅데이터분석기사+실기' },
    { title: '2026 빅데이터 분석기사 파이썬 실기 완전정복', author: '이나람', publisher: '한빛미디어', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791199721623', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+빅데이터분석기사+파이썬+실기' },
    { title: '2026 에듀윌 빅데이터분석기사 실기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791136041142', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=2026+에듀윌+빅데이터분석기사+실기' },
    { title: '2026 수제비 빅데이터분석기사 실기', author: '윤영빈 외', publisher: '수제비', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], isbn: '9791157677917', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=2026+수제비+빅데이터분석기사+실기' },
    { title: '2026 빅데이터분석기사 CBT 실전모의고사', author: '나홍석', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9791163864271', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+빅데이터분석기사+모의고사' },
  ],

  // ────────────────────────────────────────
  '컴퓨터활용능력1급': [
    // 베스트셀러 5
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 기본서', author: '길벗 R&D', publisher: '길벗', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.8, reviews: 578, tags: ['베스트'], isbn: '9791140713714', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴퓨터활용능력+1급+필기+기본서' },
    { title: '2026 이기적 컴퓨터활용능력 1급 필기 기본서', author: '홍태성', publisher: '영진닷컴', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 467, tags: ['베스트'], isbn: '9788931479294', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴퓨터활용능력+1급+필기' },
    { title: '2026 한 권으로 끝내는 시나공 컴활 1급 필기+실기', author: '길벗 R&D', publisher: '길벗', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 398, tags: ['베스트'], isbn: '9791140715879', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+1급+필기+실기' },
    { title: '2026 이기적 컴퓨터활용능력 1급 필기+실기 올인원', author: '홍태성', publisher: '영진닷컴', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 345, tags: ['베스트'], isbn: '9788931479355', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴활+1급+올인원' },
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 총정리', author: '길벗 R&D', publisher: '길벗', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], isbn: '9791140715091', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+1급+총정리' },
    // 추천수험서 5
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 기출문제집', author: '길벗 R&D', publisher: '길벗', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 245, tags: ['추천'], isbn: '9791140713714', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+1급+기출문제집' },
    { title: '2026 에듀윌 컴퓨터활용능력 1급 필기 한권끝장', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791136037923', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+컴퓨터활용능력+1급' },
    { title: '2026 컴활 1급 필기 7개년 기출문제해설', author: '강태우', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791140713714', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴활+1급+7개년+기출' },
    { title: '2026 컴퓨터활용능력 1급 CBT 기출예상문제집', author: '홍태성', publisher: '영진닷컴', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 143, tags: ['추천'], isbn: '9791140713714', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴활+1급+CBT' },
    { title: '2026 합격이 보이는 컴퓨터활용능력 1급 필기', author: '박윤정', publisher: '성안당', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9788931479645', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴퓨터활용능력+1급+합격' },
  ],

  // ────────────────────────────────────────
  '컴퓨터활용능력2급': [
    // 베스트셀러 5
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 기본서', author: '길벗 R&D', publisher: '길벗', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.8, reviews: 634, tags: ['베스트'], isbn: '9791140713721', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴퓨터활용능력+2급+필기+기본서' },
    { title: '2026 이기적 컴퓨터활용능력 2급 필기 기본서', author: '홍태성', publisher: '영진닷컴', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.7, reviews: 512, tags: ['베스트'], isbn: '9788931479300', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴퓨터활용능력+2급+필기' },
    { title: '2026 한 권으로 끝내는 시나공 컴활 2급 필기+실기', author: '길벗 R&D', publisher: '길벗', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], isbn: '9791140715886', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+2급+필기+실기' },
    { title: '2026 이기적 컴퓨터활용능력 2급 필기+실기 올인원', author: '홍태성', publisher: '영진닷컴', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], isbn: '9788931479362', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴활+2급+올인원' },
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 총정리', author: '길벗 R&D', publisher: '길벗', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], isbn: '9791140715107', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+2급+총정리' },
    // 추천수험서 5
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 기출문제집', author: '길벗 R&D', publisher: '길벗', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], isbn: '9791140713721', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+2급+기출문제집' },
    { title: '2026 에듀윌 컴퓨터활용능력 2급 필기 한권끝장', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], isbn: '9791136037947', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+컴퓨터활용능력+2급' },
    { title: '2026 컴활 2급 필기 CBT 기출예상문제집', author: '홍태성', publisher: '영진닷컴', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], isbn: '9791140715886', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴활+2급+CBT' },
    { title: '2026 기분파 컴퓨터활용능력 2급 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], isbn: '9791157679355', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+컴퓨터활용능력+2급' },
    { title: '2026 합격이 보이는 컴퓨터활용능력 2급 필기', author: '박윤정', publisher: '성안당', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], isbn: '9791157679355', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴퓨터활용능력+2급+합격' },
  ],

  // ────────────────────────────────────────
  'ADsP': [
    // 베스트셀러 5
    { title: '2026 최신개정 ADsP 데이터분석 준전문가', author: '윤종식', publisher: '데이터에듀', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], isbn: '9791193672389', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+데이터분석+준전문가+윤종식' },
    { title: '이지패스 2026 ADsP 데이터분석 준전문가', author: '전용문', publisher: '위키북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], isbn: '9791158396510', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이지패스+2026+ADsP' },
    { title: '2026 이기적 ADsP 데이터분석 준전문가 이론서+기출문제', author: '임경덕', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], isbn: '9788931477207', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+ADsP' },
    { title: '2026 에듀윌 데이터분석 준전문가 ADsP 2주끝장', author: '윤소영', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 213, tags: ['베스트'], isbn: '9791136040121', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+ADsP' },
    { title: '2026 선넘는 ADsP 데이터분석 준전문가 라임북', author: '공석민', publisher: '쏠티북스', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], isbn: '9791192967363', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+선넘는+ADsP+라임북' },
    // 추천수험서 5
    { title: '2026 박문각 ADsP 기출원스톱 400제+무료특강', author: '육근수', publisher: '박문각', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791175194472', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+박문각+ADsP+기출원스톱' },
    { title: '2026 ADsP 데이터분석 준전문가 한권으로 끝내기', author: '김계철', publisher: '황소걸음아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791158396510', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+한권으로+끝내기' },
    { title: '2026 ADsP 핵심요약+실전문제', author: '윤종식', publisher: '데이터에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 108, tags: ['추천'], isbn: '9791158396510', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+핵심요약+실전문제' },
    { title: '2026 데이터 분석 준전문가 ADsP 단기완성', author: '이재원', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 89, tags: ['추천'], isbn: '9791163864998', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+단기완성' },
    { title: '2026 ADsP 기출문제 완전정복', author: '전용문', publisher: '위키북스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791158396510', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+기출문제+완전정복' },
  ],

  // ────────────────────────────────────────
  'SQLD': [
    // 베스트셀러 5
    { title: '2026 이기적 SQLD SQL 개발자 기본서 이론+기출문제', author: '강태우', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.8, reviews: 534, tags: ['베스트'], imageUrl: KB('S000217937565'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217937565' },
    { title: '2026 에듀윌 SQLD SQL 개발자 2주끝장+무료특강', author: '김남규', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.7, reviews: 423, tags: ['베스트'], imageUrl: KB('S000218965390'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218965390' },
    { title: '2026 이기적 정보처리기사 필기 절대족보', author: '신면철', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 356, tags: ['베스트'], imageUrl: KB('S000217191918'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217191918' },
    { title: '2025 이기적 SQL 개발자 이론서+기출문제', author: '임호진', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 298, tags: ['베스트'], imageUrl: KB('S000214962008'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214962008' },
    { title: '2026 SQLD 기출문제집 핵심요약+실전문제', author: '강태우', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 267, tags: ['베스트'], isbn: '9788931477849', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+SQLD+기출' },
    // 추천수험서 5
    { title: '이기적 SQL 개발자 기출문제 500제', author: '임호진', publisher: '영진닷컴', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.6, reviews: 312, tags: ['추천'], imageUrl: KB('S000200826826'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200826826' },
    { title: '2026 혼자 공부하는 SQL+SQLD 자격증', author: '강성욱', publisher: '한빛미디어', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], isbn: '9791162244739', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+SQLD+한빛미디어' },
    { title: '2026 알기사 SQLD 핵심기출', author: '조현준', publisher: '지안에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 234, tags: ['추천'], isbn: '9791140719457', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+알기사+SQLD' },
    { title: '2026 나합격 SQLD SQL개발자 단기합격', author: '이나람', publisher: '삼원북스', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 198, tags: ['추천'], isbn: '9791140719457', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+나합격+SQLD' },
    { title: '2026 수제비 정보처리기사 필기 기출문제집', author: '윤영빈 외', publisher: '수제비', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 167, tags: ['추천'], imageUrl: KB('S000218609731'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218609731' },
  ],

  // ────────────────────────────────────────
  '토목기사': [
    // 베스트셀러 5
    { title: '2026 토목기사 필기 4주완성 핵심 및 과년도', author: '이상도 외', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], isbn: '9791166547461', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+토목기사+한솔아카데미' },
    { title: '2026 에듀윌 토목기사 필기 한권끝장', author: '에듀윌 토목수험연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9791166547461', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+에듀윌+토목기사' },
    { title: '2026 나합격 토목기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791194997696', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+나합격+토목기사' },
    { title: '2026 토목기사 필기 과년도 10개년 문제풀이', author: '채수하 외', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9788927462088', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+과년도' },
    { title: '2026 해커스 토목기사 필기 한권합격', author: '해커스자격증', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 145, tags: ['베스트'], isbn: '9791166547461', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+토목기사' },
    // 추천수험서 5
    { title: '2026 토목기사·산업기사 응용역학 핵심이론', author: '안광호 외', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791166547485', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+응용역학' },
    { title: '2026 토목기사 실기 완전정복', author: '이상도 외', publisher: '한솔아카데미', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791166547461', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+실기' },
    { title: '2026 스마트 7개년 토목기사 과년도 기출해설', author: '허원회 외', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931511604', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+성안당' },
    { title: '2026 벼락치기 토목기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791166547461', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+벼락치기' },
    { title: '2026 토목기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9791166547461', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+CBT' },
  ],

  // ────────────────────────────────────────
  '건축기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 건축기사 필기 한권끝장', author: '김강섭', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218473002'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218473002' },
    { title: '2026 에듀윌 건축기사 필기 10+2개년 기출문제집', author: '최하진', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218189843'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218189843' },
    { title: '2026 해커스 건축기사 필기 한권합격', author: '해커스자격증', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791168045798', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+건축기사+필기' },
    { title: '2026 나합격 건축기사 필기+무료특강', author: '김해솔', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791194997726', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+나합격+건축기사' },
    { title: '2026 직8딴 건축기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 145, tags: ['베스트'], isbn: '9791168045798', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+직8딴+건축기사' },
    // 추천수험서 5
    { title: '2026 건축기사 실기 완전정복 (계획+구조+시공)', author: '김해솔', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791166548161', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+건축기사+실기' },
    { title: '2025 에듀윌 건축기사 실기 한권끝장', author: '김강섭', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('S000215791790'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215791790' },
    { title: '2026 벼락치기 건축기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931707526', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+건축기사+벼락치기' },
    { title: '2026 건축기사 필기 7개년 기출문제해설', author: '허원회 외', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791166548161', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+건축기사+성안당' },
    { title: '2026 건축기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9791166548161', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+건축기사+CBT' },
  ],

  // ────────────────────────────────────────
  '산업안전기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 산업안전기사 필기 한권끝장 이론편+기출문제편', author: '최창률', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: KB('S000217541246'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217541246' },
    { title: '2026 직8딴 직접 8일 만에 딴 산업안전기사 필기', author: '김진태', publisher: '김영북스', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], imageUrl: KB('S000218942319'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218942319' },
    { title: '2026 나합격 산업안전기사 필기+무료특강+온라인CBT', author: '김현우, 허선혜', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('S000217478393'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217478393' },
    { title: '2026 해커스 산업안전기사 필기 핵심요약+기출', author: '해커스자격증', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], isbn: '9788969656308', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+산업안전기사+필기' },
    { title: '2026 산업안전기사 필기 7개년 기출문제해설', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791173491375', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+산업안전기사+세화' },
    // 추천수험서 5
    { title: '2026 벼락치기 산업안전기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], isbn: '9788931713930', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+산업안전기사+벼락치기' },
    { title: '2026 산업안전기사 실기 필답형+작업형 완전정복', author: '이순규', publisher: '예문사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], isbn: '9791173491375', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+산업안전기사+실기' },
    { title: '2026 스마트 산업안전기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791168756649', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+산업안전기사+과년도' },
    { title: '2026 산업안전기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 167, tags: ['추천'], isbn: '9791173491375', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+산업안전기사+CBT' },
    { title: '2025 에듀윌 산업안전기사 실기 한권끝장 세트', author: '최창률', publisher: '에듀윌', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.3, reviews: 134, tags: ['추천'], imageUrl: KB('S000214965114'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214965114' },
  ],

  '산업안전기술사': [
    // 베스트셀러 5
    { title: '산업안전기술사 핵심이론 총정리', author: '이상도', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 187, tags: ['베스트'], isbn: '9791137234208', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+핵심이론' },
    { title: '산업안전기술사 기출문제 완전분석', author: '김재원', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], isbn: '9791137234208', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+기출문제' },
    { title: '산업안전기술사 서술형 답안 작성법', author: '박성현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 112, tags: ['베스트'], isbn: '9788927458678', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+답안작성' },
    { title: '산업안전기술사 면접 완전정복', author: '최용국', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 98, tags: ['베스트'], isbn: '9788927458678', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+면접' },
    { title: '산업안전기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 76, tags: ['베스트'], isbn: '9788927458678', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+최신기출' },
    // 추천수험서 5
    { title: '산업안전기술사 위험성평가 심화', author: '강동호', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 89, tags: ['추천'], isbn: '9788927458678', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+위험성평가' },
    { title: '산업안전기술사 법규 핵심정리', author: '정재수', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 72, tags: ['추천'], isbn: '9788927458678', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+법규' },
    { title: '산업안전기술사 FTA FMEA 완전정복', author: '박용기', publisher: '세화', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 65, tags: ['추천'], isbn: '9788927458678', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+FTA' },
    { title: '산업안전기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 58, tags: ['추천'], isbn: '9788927458678', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+모의고사' },
    { title: '산업안전기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 51, tags: ['추천'], isbn: '9791137234208', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+단기완성' },
  ],

  '건설안전기술사': [
    // 베스트셀러 5
    { title: '건설안전기술사 핵심이론 총정리', author: '강동호', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 172, tags: ['베스트'], isbn: '9788927462002', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+핵심이론' },
    { title: '건설안전기술사 기출문제 완전분석', author: '정재수', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 134, tags: ['베스트'], isbn: '9788927462002', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+기출문제' },
    { title: '건설안전기술사 서술형 답안 작성법', author: '이경민', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 108, tags: ['베스트'], isbn: '9791157679560', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+답안작성' },
    { title: '건설안전기술사 면접 완전정복', author: '박용기', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 91, tags: ['베스트'], isbn: '9788927441137', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+면접' },
    { title: '건설안전기술사 최신 기출 해설집', author: '김재원', publisher: '일진사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 74, tags: ['베스트'], isbn: '9788927462002', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+최신기출' },
    // 추천수험서 5
    { title: '건설안전기술사 가설공사 심화', author: '이상도', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 82, tags: ['추천'], isbn: '9791157679560', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+가설공사' },
    { title: '건설안전기술사 법규 핵심정리', author: '박성현', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 68, tags: ['추천'], isbn: '9791157679560', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+법규' },
    { title: '건설안전기술사 굴착흙막이 완전정복', author: '최용국', publisher: '세화', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 61, tags: ['추천'], isbn: '9791157679560', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+굴착' },
    { title: '건설안전기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 55, tags: ['추천'], isbn: '9791157679560', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+모의고사' },
    { title: '건설안전기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 48, tags: ['추천'], isbn: '9788927462002', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+단기완성' },
  ],

  '소방기술사': [
    // 베스트셀러 5
    { title: '소방기술사 핵심이론 총정리', author: '이순규', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 165, tags: ['베스트'], isbn: '9791168045859', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+핵심이론' },
    { title: '소방기술사 기출문제 완전분석', author: '김현수', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 129, tags: ['베스트'], isbn: '9791168045859', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+기출문제' },
    { title: '소방기술사 서술형 답안 작성법', author: '박재현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 104, tags: ['베스트'], isbn: '9791124543061', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+답안작성' },
    { title: '소방기술사 면접 완전정복', author: '정성훈', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 88, tags: ['베스트'], isbn: '9791124543061', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+면접' },
    { title: '소방기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 71, tags: ['베스트'], isbn: '9791168043121', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+최신기출' },
    // 추천수험서 5
    { title: '소방기술사 소화설비 심화', author: '강동호', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 79, tags: ['추천'], isbn: '9791124543061', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+소화설비' },
    { title: '소방기술사 법규 핵심정리', author: '최용국', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 65, tags: ['추천'], isbn: '9791157451654', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+법규' },
    { title: '소방기술사 스프링클러 완전정복', author: '박용기', publisher: '세화', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 58, tags: ['추천'], isbn: '9791124543061', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+스프링클러' },
    { title: '소방기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 52, tags: ['추천'], isbn: '9791124543061', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+모의고사' },
    { title: '소방기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 45, tags: ['추천'], isbn: '9791168045859', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+단기완성' },
  ],

  '발송배전기술사': [
    // 베스트셀러 5
    { title: '발송배전기술사 핵심이론 총정리', author: '김재원', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 158, tags: ['베스트'], isbn: '9791192810904', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+핵심이론' },
    { title: '발송배전기술사 기출문제 완전분석', author: '이상도', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 122, tags: ['베스트'], isbn: '9791192810904', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+기출문제' },
    { title: '발송배전기술사 서술형 답안 작성법', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 97, tags: ['베스트'], isbn: '9791192810904', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+답안작성' },
    { title: '발송배전기술사 면접 완전정복', author: '최용국', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 83, tags: ['베스트'], isbn: '9791192810904', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+면접' },
    { title: '발송배전기술사 최신 기출 해설집', author: '정성훈', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 67, tags: ['베스트'], isbn: '9788973742561', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+최신기출' },
    // 추천수험서 5
    { title: '발송배전기술사 전력계통 심화', author: '이경민', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 76, tags: ['추천'], isbn: '9791192810904', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+전력계통' },
    { title: '발송배전기술사 보호계전 완전정복', author: '강동호', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 62, tags: ['추천'], isbn: '9791192810904', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+보호계전' },
    { title: '발송배전기술사 신재생에너지 심화', author: '박성현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 55, tags: ['추천'], isbn: '9791192810904', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+신재생에너지' },
    { title: '발송배전기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 49, tags: ['추천'], isbn: '9791192810904', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+모의고사' },
    { title: '발송배전기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 43, tags: ['추천'], isbn: '9791192810904', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+단기완성' },
  ],

  '전기응용기술사': [
    // 베스트셀러 5
    { title: '전기응용기술사 핵심이론 총정리', author: '정성훈', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 143, tags: ['베스트'], isbn: '9791189757762', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+핵심이론' },
    { title: '전기응용기술사 기출문제 완전분석', author: '강동호', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 112, tags: ['베스트'], isbn: '9791189757762', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+기출문제' },
    { title: '전기응용기술사 서술형 답안 작성법', author: '이경민', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 89, tags: ['베스트'], isbn: '9791168046504', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+답안작성' },
    { title: '전기응용기술사 면접 완전정복', author: '박성현', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 76, tags: ['베스트'], isbn: '9791168046504', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+면접' },
    { title: '전기응용기술사 최신 기출 해설집', author: '김재원', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 61, tags: ['베스트'], isbn: '9791187180029', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+최신기출' },
    // 추천수험서 5
    { title: '전기응용기술사 전동기·조명 심화', author: '이상도', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 69, tags: ['추천'], isbn: '9791168046504', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+전동기조명' },
    { title: '전기응용기술사 전기철도 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 57, tags: ['추천'], isbn: '9788931527629', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+전기철도' },
    { title: '전기응용기술사 신에너지 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 51, tags: ['추천'], isbn: '9791168046504', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+신에너지' },
    { title: '전기응용기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 46, tags: ['추천'], isbn: '9791168046504', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+모의고사' },
    { title: '전기응용기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 40, tags: ['추천'], isbn: '9791189757762', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+단기완성' },
  ],

  '기계기술사': [
    // 베스트셀러 5
    { title: '기계기술사 핵심이론 총정리', author: '이상도', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 196, tags: ['베스트'], isbn: '9788927462354', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+핵심이론' },
    { title: '기계기술사 기출문제 완전분석', author: '김현수', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 158, tags: ['베스트'], isbn: '9788927462354', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+기출문제' },
    { title: '기계기술사 서술형 답안 작성법', author: '박재현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 127, tags: ['베스트'], isbn: '9788927462354', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+답안작성' },
    { title: '기계기술사 면접 완전정복', author: '최용국', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 109, tags: ['베스트'], isbn: '9791158136659', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+면접' },
    { title: '기계기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 88, tags: ['베스트'], isbn: '9791124092057', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+최신기출' },
    // 추천수험서 5
    { title: '기계기술사 재료역학·열역학 심화', author: '강동호', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 95, tags: ['추천'], isbn: '9788927462354', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+재료역학' },
    { title: '기계기술사 유체역학 완전정복', author: '정재수', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 78, tags: ['추천'], isbn: '9788927462354', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+유체역학' },
    { title: '기계기술사 설계 및 자동화 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 67, tags: ['추천'], isbn: '9788927462354', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+설계자동화' },
    { title: '기계기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 59, tags: ['추천'], isbn: '9788927462354', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+모의고사' },
    { title: '기계기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 52, tags: ['추천'], isbn: '9788927462354', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+단기완성' },
  ],

  '화공기술사': [
    // 베스트셀러 5
    { title: '화공기술사 핵심이론 총정리', author: '강동호', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 152, tags: ['베스트'], isbn: '9791127218188', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+핵심이론' },
    { title: '화공기술사 기출문제 완전분석', author: '이경민', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 119, tags: ['베스트'], isbn: '9791127218188', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+기출문제' },
    { title: '화공기술사 서술형 답안 작성법', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 96, tags: ['베스트'], isbn: '9788931584608', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+답안작성' },
    { title: '화공기술사 면접 완전정복', author: '정재수', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 82, tags: ['베스트'], isbn: '9788931584608', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+면접' },
    { title: '화공기술사 최신 기출 해설집', author: '김재원', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 65, tags: ['베스트'], isbn: '9788931584608', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+최신기출' },
    // 추천수험서 5
    { title: '화공기술사 반응공학 심화', author: '이상도', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 73, tags: ['추천'], isbn: '9788931584608', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+반응공학' },
    { title: '화공기술사 분리공정 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 61, tags: ['추천'], isbn: '9788931584608', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+분리공정' },
    { title: '화공기술사 HAZOP 공정안전 심화', author: '박성현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 55, tags: ['추천'], isbn: '9788931584608', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+HAZOP' },
    { title: '화공기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 48, tags: ['추천'], isbn: '9788931584608', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+모의고사' },
    { title: '화공기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 42, tags: ['추천'], isbn: '9791127218188', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+단기완성' },
  ],

  '가스기술사': [
    // 베스트셀러 5
    { title: '가스기술사 핵심이론 총정리', author: '이순규', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 138, tags: ['베스트'], isbn: '9791157679379', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+핵심이론' },
    { title: '가스기술사 기출문제 완전분석', author: '박재현', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 107, tags: ['베스트'], isbn: '9791157679379', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+기출문제' },
    { title: '가스기술사 서술형 답안 작성법', author: '김재원', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 86, tags: ['베스트'], isbn: '9791198731371', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+답안작성' },
    { title: '가스기술사 면접 완전정복', author: '정성훈', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 73, tags: ['베스트'], isbn: '9791198731371', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+면접' },
    { title: '가스기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 58, tags: ['베스트'], isbn: '9791157679379', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+최신기출' },
    // 추천수험서 5
    { title: '가스기술사 LNG LPG 설비 심화', author: '강동호', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 66, tags: ['추천'], isbn: '9791198731371', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+LNG+LPG' },
    { title: '가스기술사 법규 핵심정리', author: '최용국', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 54, tags: ['추천'], isbn: '9791198731371', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+법규' },
    { title: '가스기술사 폭발·연소 완전정복', author: '박용기', publisher: '세화', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 48, tags: ['추천'], isbn: '9791198731371', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+폭발연소' },
    { title: '가스기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 43, tags: ['추천'], isbn: '9791198731371', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+모의고사' },
    { title: '가스기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 37, tags: ['추천'], isbn: '9791157679379', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+단기완성' },
  ],

  '정보관리기술사': [
    // 베스트셀러 5
    { title: '정보관리기술사 핵심이론 총정리', author: '박성현', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 214, tags: ['베스트'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+핵심이론' },
    { title: '정보관리기술사 기출문제 완전분석', author: '이경민', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 173, tags: ['베스트'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+기출문제' },
    { title: '정보관리기술사 서술형 답안 작성법', author: '강동호', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 141, tags: ['베스트'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+답안작성' },
    { title: '정보관리기술사 면접 완전정복', author: '김재원', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 118, tags: ['베스트'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+면접' },
    { title: '정보관리기술사 최신 기출 해설집', author: '정재수', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 94, tags: ['베스트'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+최신기출' },
    // 추천수험서 5
    { title: '정보관리기술사 AI·클라우드 심화', author: '이상도', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 107, tags: ['추천'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+AI클라우드' },
    { title: '정보관리기술사 데이터베이스 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 88, tags: ['추천'], isbn: '9788931555028', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+데이터베이스' },
    { title: '정보관리기술사 소프트웨어공학 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+소프트웨어공학' },
    { title: '정보관리기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+모의고사' },
    { title: '정보관리기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 57, tags: ['추천'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+단기완성' },
  ],

  '정보보안기술사': [
    // 베스트셀러 5
    { title: '정보보안기술사 핵심이론 총정리', author: '이상도', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9788966113217', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+핵심이론' },
    { title: '정보보안기술사 기출문제 완전분석', author: '박성현', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 162, tags: ['베스트'], isbn: '9788966113217', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+기출문제' },
    { title: '정보보안기술사 서술형 답안 작성법', author: '정재수', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 131, tags: ['베스트'], isbn: '9788931481303', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+답안작성' },
    { title: '정보보안기술사 면접 완전정복', author: '강동호', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 109, tags: ['베스트'], isbn: '9788931481303', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+면접' },
    { title: '정보보안기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 87, tags: ['베스트'], isbn: '9791198881007', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+최신기출' },
    // 추천수험서 5
    { title: '정보보안기술사 ISMS-P 심화', author: '김재원', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 98, tags: ['추천'], isbn: '9788931481303', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+ISMS' },
    { title: '정보보안기술사 암호학 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 81, tags: ['추천'], isbn: '9788931481303', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+암호학' },
    { title: '정보보안기술사 침해사고대응 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 69, tags: ['추천'], isbn: '9788931481303', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+침해사고' },
    { title: '정보보안기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 60, tags: ['추천'], isbn: '9788962695915', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+모의고사' },
    { title: '정보보안기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 53, tags: ['추천'], isbn: '9788966113217', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+단기완성' },
  ],

  '컴퓨터시스템응용기술사': [
    // 베스트셀러 5
    { title: '컴퓨터시스템응용기술사 핵심이론 총정리', author: '박재현', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+핵심이론' },
    { title: '컴퓨터시스템응용기술사 기출문제 완전분석', author: '이경민', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 133, tags: ['베스트'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+기출문제' },
    { title: '컴퓨터시스템응용기술사 서술형 답안 작성법', author: '최용국', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 107, tags: ['베스트'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+답안작성' },
    { title: '컴퓨터시스템응용기술사 면접 완전정복', author: '김현수', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 91, tags: ['베스트'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+면접' },
    { title: '컴퓨터시스템응용기술사 최신 기출 해설집', author: '강동호', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 74, tags: ['베스트'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+최신기출' },
    // 추천수험서 5
    { title: '컴퓨터시스템응용기술사 OS·알고리즘 심화', author: '이상도', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 83, tags: ['추천'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+OS알고리즘' },
    { title: '컴퓨터시스템응용기술사 클라우드·임베디드 심화', author: '정재수', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 68, tags: ['추천'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+클라우드임베디드' },
    { title: '컴퓨터시스템응용기술사 아키텍처 완전정복', author: '박성현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 59, tags: ['추천'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+아키텍처' },
    { title: '컴퓨터시스템응용기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 53, tags: ['추천'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+모의고사' },
    { title: '컴퓨터시스템응용기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 46, tags: ['추천'], isbn: '9788931589955', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+단기완성' },
  ],

  '토목기술사': [
    // 베스트셀러 5
    { title: '토목기술사 핵심이론 총정리', author: '이재원', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 221, tags: ['베스트'], isbn: '9788931512441', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+핵심이론' },
    { title: '토목기술사 기출문제 완전분석', author: '박성현', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], isbn: '9788931512441', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+기출문제' },
    { title: '토목기술사 서술형 답안 작성법', author: '김재원', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], isbn: '9791194599241', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+답안작성' },
    { title: '토목기술사 면접 완전정복', author: '정재수', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 122, tags: ['베스트'], isbn: '9788982547034', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+면접' },
    { title: '토목기술사 최신 기출 해설집', author: '이경민', publisher: '일진사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 98, tags: ['베스트'], isbn: '9788931569230', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+최신기출' },
    // 추천수험서 5
    { title: '토목기술사 토질·기초 심화', author: '강동호', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791194599241', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+토질기초' },
    { title: '토목기술사 수리·수문학 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 93, tags: ['추천'], isbn: '9791194599241', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+수리수문학' },
    { title: '토목기술사 도로·교량 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 79, tags: ['추천'], isbn: '9791194599241', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+도로교량' },
    { title: '토목기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 68, tags: ['추천'], isbn: '9791194599241', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+모의고사' },
    { title: '토목기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 59, tags: ['추천'], isbn: '9788931512441', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+단기완성' },
  ],

  '건축기술사': [
    // 베스트셀러 5
    { title: '건축기술사 핵심이론 총정리', author: '박용기', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 208, tags: ['베스트'], isbn: '9788927462477', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+핵심이론' },
    { title: '건축기술사 기출문제 완전분석', author: '이순규', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 169, tags: ['베스트'], isbn: '9788927462477', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+기출문제' },
    { title: '건축기술사 서술형 답안 작성법', author: '강동호', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 136, tags: ['베스트'], isbn: '9788927462569', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+답안작성' },
    { title: '건축기술사 면접 완전정복', author: '박재현', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 114, tags: ['베스트'], isbn: '9788927462330', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+면접' },
    { title: '건축기술사 최신 기출 해설집', author: '이경민', publisher: '일진사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 92, tags: ['베스트'], isbn: '9788992657716', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+최신기출' },
    // 추천수험서 5
    { title: '건축기술사 구조·내진 심화', author: '김재원', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 105, tags: ['추천'], isbn: '9788927462569', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+구조내진' },
    { title: '건축기술사 시공·재료 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], isbn: '9788927462569', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+시공재료' },
    { title: '건축기술사 환경·설비 심화', author: '정재수', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 74, tags: ['추천'], isbn: '9788927462569', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+환경설비' },
    { title: '건축기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 63, tags: ['추천'], isbn: '9788927462569', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+모의고사' },
    { title: '건축기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 55, tags: ['추천'], isbn: '9788927462477', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+단기완성' },
  ],

  // ────────────────────────────────────────
  '간호사': [
    // 베스트셀러 5
    { title: '2027 군자출판사 간호사 국가시험 문제집 (상)', author: '군자출판사 편집부', publisher: '군자출판사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.9, reviews: 2134, tags: ['베스트'], isbn: '9791166276989', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국가시험+군자출판사+2027' },
    { title: '2027 군자출판사 간호사 국가시험 문제집 (하)', author: '군자출판사 편집부', publisher: '군자출판사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.9, reviews: 1987, tags: ['베스트'], isbn: '9791166276989', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국가시험+군자출판사+하+2027' },
    { title: '2027 메디시언 간호사 국시 핵심요약 총정리', author: '메디시언 연구소', publisher: '메디시언', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 1523, tags: ['베스트'], isbn: '9791166276989', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국시+핵심요약+메디시언+2027' },
    { title: '2027 에듀팩토리 간호사 국시 5개년 기출문제집', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 1245, tags: ['베스트'], isbn: '9791166276989', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국시+기출문제+2027' },
    { title: '2027 박문각 간호사 국가시험 최신 기출해설', author: '박문각 간호연구소', publisher: '박문각', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 986, tags: ['베스트'], isbn: '9791166276989', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국가시험+박문각+2027' },
    // 추천수험서 5
    { title: '2027 성인간호학 한권완성 국시 핵심요약', author: '이은희 외', publisher: '군자출판사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 876, tags: ['추천'], isbn: '9791173841477', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=성인간호학+국시+핵심요약+2027' },
    { title: '2027 간호관리학 국시 완전정복', author: '김진희', publisher: '메디시언', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 743, tags: ['추천'], isbn: '9791194995296', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호관리학+국시+2027' },
    { title: '2027 정신간호학 국시 핵심이론+기출', author: '박영숙', publisher: '에듀팩토리', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 634, tags: ['추천'], isbn: '9791194995289', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정신간호학+국시+2027' },
    { title: '2027 지역사회간호학 국시 단기완성', author: '이정희', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 521, tags: ['추천'], isbn: '9791194995272', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=지역사회간호학+국시+2027' },
    { title: '2027 의료법규 간호사 국시 핵심정리', author: '박문각 편집부', publisher: '박문각', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 412, tags: ['추천'], isbn: '9791193884850', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의료법규+간호사+국시+2027' },
  ],

  // ────────────────────────────────────────
  '임상병리사': [
    // 베스트셀러 5
    { title: '2027 임상병리사 국가시험 핵심요약 총정리', author: '대한임상병리사협회 편집부', publisher: '고려의학', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 756, tags: ['베스트'], isbn: '9791124381045', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상병리사+국가시험+핵심요약+2027' },
    { title: '2027 임상병리사 기출문제 완전분석 10개년', author: '군자출판사 편집부', publisher: '군자출판사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 612, tags: ['베스트'], isbn: '9791124381045', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상병리사+기출문제+10개년+2027' },
    { title: '2027 임상화학 핵심이론+문제', author: '이상철', publisher: '고려의학', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 498, tags: ['베스트'], isbn: '9791192422015', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=임상화학+핵심이론+2027' },
    { title: '2027 혈액학·수혈의학 완전정복', author: '김윤경', publisher: '메디시언', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 389, tags: ['베스트'], isbn: '9791143416889', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=혈액학+수혈의학+임상병리사+2027' },
    { title: '2027 임상미생물학 핵심요약', author: '박재원', publisher: '고려의학', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], isbn: '9791192422763', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상미생물학+핵심요약+2027' },
    // 추천수험서 5
    { title: '2027 조직병리학·세포병리학 완전정복', author: '이현주', publisher: '군자출판사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 278, tags: ['추천'], isbn: '9791143416889', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조직병리학+세포병리학+2027' },
    { title: '2027 임상생리학 핵심이론+기출', author: '한상훈', publisher: '메디시언', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9791124381038', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상생리학+핵심이론+2027' },
    { title: '2027 요·체액검사 단기완성', author: '김미래', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791159431043', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요검사+체액검사+임상병리사+2027' },
    { title: '2027 임상병리사 모의고사 5회분', author: '박재현', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791143416889', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상병리사+모의고사+2027' },
    { title: '2027 임상병리사 국시 최신경향 분석집', author: '대한임상병리사협회', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 143, tags: ['추천'], isbn: '9791143416889', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상병리사+국시+최신경향+2027' },
  ],

  // ────────────────────────────────────────
  '방사선사': [
    // 베스트셀러 5
    { title: '2027 방사선사 국가시험 핵심요약 총정리', author: '대한방사선사협회 편집부', publisher: '고려의학', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 634, tags: ['베스트'], isbn: '9788959385171', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선사+국가시험+핵심요약+2027' },
    { title: '2027 방사선사 기출문제 완전분석 10개년', author: '군자출판사 편집부', publisher: '군자출판사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 512, tags: ['베스트'], isbn: '9788959385171', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선사+기출문제+2027' },
    { title: '2027 방사선물리학·방사선방어학 완전정복', author: '이재원', publisher: '고려의학', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 423, tags: ['베스트'], isbn: '9788956169705', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선물리학+방어학+2027' },
    { title: '2027 의료영상학 핵심이론+기출', author: '박상훈', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 356, tags: ['베스트'], isbn: '9791189487980', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의료영상학+방사선사+2027' },
    { title: '2027 핵의학기술학+방사선치료물리학 완성', author: '김동현', publisher: '고려의학', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 289, tags: ['베스트'], isbn: '9788980163717', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=핵의학기술학+방사선사+2027' },
    // 추천수험서 5
    { title: '2027 방사선생물학 핵심이론 단기완성', author: '최재원', publisher: '군자출판사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9788973868285', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선생물학+2027' },
    { title: '2027 방사선사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9788956169705', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선사+모의고사+2027' },
    { title: '2027 CT·MRI 영상 판독 기초부터 국시까지', author: '이상민', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 178, tags: ['추천'], isbn: '9788956169705', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=CT+MRI+방사선사+국시+2027' },
    { title: '2027 방사선사 국시 최신경향 분석집', author: '대한방사선사협회', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], isbn: '9788956169705', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선사+국시+최신경향+2027' },
    { title: '2027 방사선사 벼락치기 핵심요점', author: '박재현', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 132, tags: ['추천'], isbn: '9788956169705', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선사+벼락치기+2027' },
  ],

  // ────────────────────────────────────────
  '물리치료사': [
    // 베스트셀러 5
    { title: '2027 물리치료사 국가시험 핵심요약 총정리', author: '대한물리치료사협회 편집부', publisher: '고려의학', price: 52200, originalPrice: 58000, discount: '10%', rating: 4.8, reviews: 789, tags: ['베스트'], isbn: '9788969400550', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리치료사+국가시험+핵심요약+2027' },
    { title: '2027 물리치료사 기출문제 완전분석 10개년', author: '군자출판사 편집부', publisher: '군자출판사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 634, tags: ['베스트'], isbn: '9788960697539', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리치료사+기출문제+2027' },
    { title: '2027 근골격계 물리치료학 완전정복', author: '이재훈', publisher: '고려의학', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 523, tags: ['베스트'], isbn: '9788957415375', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=근골격계+물리치료학+2027' },
    { title: '2027 신경계 물리치료학 핵심이론+기출', author: '박진수', publisher: '메디시언', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 445, tags: ['베스트'], isbn: '9791159435171', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=신경계+물리치료학+2027' },
    { title: '2027 물리인자치료학 완전정복', author: '김상호', publisher: '군자출판사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 367, tags: ['베스트'], isbn: '9791163752431', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리인자치료학+2027' },
    // 추천수험서 5
    { title: '2027 기능해부학·운동학 국시 핵심정리', author: '최인호', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 312, tags: ['추천'], isbn: '9791198118752', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기능해부학+운동학+물리치료사+2027' },
    { title: '2027 물리치료사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], isbn: '9791198118752', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=물리치료사+모의고사+2027' },
    { title: '2027 심폐·스포츠재활 물리치료 핵심이론', author: '이동현', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], isbn: '9791198118752', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=심폐+스포츠재활+물리치료사+2027' },
    { title: '2027 물리치료사 국시 최신경향 분석집', author: '대한물리치료사협회', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], isbn: '9791198118752', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리치료사+국시+최신경향+2027' },
    { title: '2027 물리치료사 벼락치기 핵심요점', author: '박민수', publisher: '메디시언', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], isbn: '9791198118752', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리치료사+벼락치기+2027' },
  ],

  // ────────────────────────────────────────
  '응급구조사1급': [
    // 베스트셀러 5
    { title: '2027 응급구조사 1급 국가시험 핵심요약 총정리', author: '대한응급구조사협회 편집부', publisher: '군자출판사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 534, tags: ['베스트'], isbn: '9788985210058', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+1급+국가시험+핵심요약+2027' },
    { title: '2027 응급구조사 1급 기출문제 완전분석', author: '군자출판사 편집부', publisher: '군자출판사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 423, tags: ['베스트'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+1급+기출문제+2027' },
    { title: '2027 전문응급처치학 총론·각론 완전정복', author: '이재원', publisher: '고려의학', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전문응급처치학+2027' },
    { title: '2027 응급처치론 핵심이론+기출', author: '박상호', publisher: '메디시언', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], isbn: '9791176440936', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급처치론+핵심이론+2027' },
    { title: '2027 응급환자관리·응급의학 완성', author: '김동수', publisher: '군자출판사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 234, tags: ['베스트'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급환자관리+응급의학+2027' },
    // 추천수험서 5
    { title: '2027 응급구조사 1급 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+1급+모의고사+2027' },
    { title: '2027 심전도 판독 응급구조사 국시 완성', author: '이상민', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=심전도+응급구조사+2027' },
    { title: '2027 외상응급처치 핵심정리', author: '박재현', publisher: '군자출판사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788985578707', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=외상응급처치+응급구조사+2027' },
    { title: '2027 응급구조사 1급 국시 최신경향 분석집', author: '대한응급구조사협회', publisher: '군자출판사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+국시+최신경향+2027' },
    { title: '2027 응급구조사 1급 벼락치기 핵심요점', author: '김민준', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+벼락치기+2027' },
  ],

  // ────────────────────────────────────────
  '치과위생사': [
    // 베스트셀러 5
    { title: '2027 치과위생사 국가시험 핵심요약 총정리', author: '대한치과위생사협회 편집부', publisher: '군자출판사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 678, tags: ['베스트'], isbn: '9791143415400', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과위생사+국가시험+핵심요약+2027' },
    { title: '2027 치과위생사 기출문제 완전분석 10개년', author: '군자출판사 편집부', publisher: '군자출판사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 534, tags: ['베스트'], isbn: '9791143415400', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과위생사+기출문제+2027' },
    { title: '2027 치위생학 개론·구강해부학 완전정복', author: '이재원', publisher: '고려의학', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], isbn: '9791143416414', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=치위생학+구강해부학+2027' },
    { title: '2027 치과재료학·구강미생물학 핵심이론', author: '박지현', publisher: '메디시언', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 367, tags: ['베스트'], isbn: '9791143416414', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과재료학+구강미생물학+2027' },
    { title: '2027 구강보건행정·교육 완성', author: '김수진', publisher: '고려의학', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 289, tags: ['베스트'], isbn: '9791143416414', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=구강보건행정+치과위생사+2027' },
    // 추천수험서 5
    { title: '2027 치과위생사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9791143416414', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과위생사+모의고사+2027' },
    { title: '2027 구강생리학·구강생화학 핵심정리', author: '이상호', publisher: '군자출판사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791143416414', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=구강생리학+구강생화학+2027' },
    { title: '2027 치과위생사 국시 최신경향 분석집', author: '대한치과위생사협회', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791143416414', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과위생사+국시+최신경향+2027' },
    { title: '2027 임상치위생학 핵심이론+기출', author: '박민희', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788957418796', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상치위생학+2027' },
    { title: '2027 치과위생사 벼락치기 핵심요점', author: '김재원', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791143416414', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과위생사+벼락치기+2027' },
  ],

  '간호조무사': [
    { title: '2026 간호조무사 국가시험 핵심요약 총정리', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 1240, tags: ['베스트'], isbn: '9788961544764', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+국가시험+핵심요약+2026' },
    { title: '2026 간호조무사 기출문제 10개년 완전분석', author: '박문각 편집부', publisher: '박문각', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 987, tags: ['베스트'], isbn: '9791188317219', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+기출문제+10개년+2026' },
    { title: '2026 간호조무사 핵심이론+실전문제집', author: '수문사 편집부', publisher: '수문사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 856, tags: ['베스트'], isbn: '9791169417679', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+핵심이론+실전문제+2026' },
    { title: '2026 간호조무사 국가시험 최신기출 5개년', author: '이지패스 편집부', publisher: '이지패스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 634, tags: ['베스트'], isbn: '9788931686289', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+최신기출+5개년+2026' },
    { title: '2026 간호조무사 벼락치기 핵심노트', author: '김민지', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 445, tags: ['베스트'], isbn: '9791197473906', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+벼락치기+2026' },
    { title: '2026 간호조무사 보건간호학개요 집중공략', author: '이정희', publisher: '수문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 378, tags: ['추천'], isbn: '9788940650813', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+보건간호학개요+2026' },
    { title: '2026 간호조무사 의료관계법규 완성', author: '박재현', publisher: '박문각', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.5, reviews: 312, tags: ['추천'], isbn: '9791138337489', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+의료관계법규+2026' },
    { title: '2026 간호조무사 실기 핵심정리', author: '한국간호조무사협회 편집부', publisher: '수문사', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], isbn: '9791188317219', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+실기+핵심정리+2026' },
    { title: '2026 간호조무사 모의고사 10회분', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 198, tags: ['추천'], isbn: '9791136043214', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+모의고사+10회분+2026' },
    { title: '2026 간호조무사 공중보건학+기초간호학 통합', author: '김수연', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], isbn: '9788961544740', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+공중보건학+기초간호학+2026' },
  ],

  '작업치료사': [
    { title: '2026 작업치료사 국가시험 핵심요약 총정리', author: '대한작업치료사협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 523, tags: ['베스트'], isbn: '9788995300022', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+국가시험+핵심요약+2026' },
    { title: '2026 작업치료사 기출문제 완전분석', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 412, tags: ['베스트'], isbn: '9791138396363', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+기출문제+완전분석+2026' },
    { title: '2026 작업치료사 신체기능작업치료학 핵심', author: '고려의학 편집부', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791159435577', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+신체기능작업치료학+2026' },
    { title: '2026 작업치료사 정신사회작업치료학 완성', author: '이지영', publisher: '군자출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], isbn: '9791159435577', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+정신사회작업치료학+2026' },
    { title: '2026 작업치료사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791138396363', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+모의고사+5회분+2026' },
    { title: '2026 작업치료사 인간작업모델(MOHO) 집중정리', author: '박지현', publisher: '고려의학', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 178, tags: ['추천'], isbn: '9791159435577', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+인간작업모델+2026' },
    { title: '2026 작업치료사 재활의학 핵심이론', author: '김태현', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791159435577', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+재활의학+2026' },
    { title: '2026 작업치료사 일상생활활동 이론+실기', author: '최수진', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791163754657', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+일상생활활동+2026' },
    { title: '2026 작업치료사 벼락치기 핵심노트', author: '이수정', publisher: '군자출판사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791159435577', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+벼락치기+2026' },
    { title: '2026 작업치료사 아동작업치료학 완성', author: '강민정', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], isbn: '9791159435577', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+아동작업치료학+2026' },
  ],

  '치위생사': [
    { title: '2026 치위생사 국가시험 핵심요약 총정리', author: '대한치과위생사협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 612, tags: ['베스트'], isbn: '9788957417232', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+국가시험+핵심요약+2026' },
    { title: '2026 치위생사 기출문제 10개년 완전분석', author: '군자출판사 편집부', publisher: '군자출판사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 498, tags: ['베스트'], isbn: '9791191036404', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+기출문제+10개년+2026' },
    { title: '2026 치위생사 구강해부학+조직학 핵심정리', author: '고려의학 편집부', publisher: '고려의학', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9791191036411', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+구강해부학+조직학+2026' },
    { title: '2026 치위생사 임상치위생학 완성', author: '박민희', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], isbn: '9791191036411', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+임상치위생학+2026' },
    { title: '2026 치위생사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9791191036411', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+모의고사+5회분+2026' },
    { title: '2026 치위생사 구강보건행정학 집중공략', author: '김수진', publisher: '고려의학', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791191036411', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+구강보건행정학+2026' },
    { title: '2026 치위생사 치과재료학 핵심이론', author: '이상호', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791191036411', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+치과재료학+2026' },
    { title: '2026 치위생사 치주학·예방치학 완성', author: '박지현', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], isbn: '9791191036411', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+치주학+예방치학+2026' },
    { title: '2026 치위생사 벼락치기 핵심노트', author: '최은정', publisher: '군자출판사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791191036411', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+벼락치기+2026' },
    { title: '2026 치위생사 방사선학 이론+실습', author: '한국치위생학교수협의회', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791191036411', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+방사선학+2026' },
  ],

  '응급구조사2급': [
    { title: '2026 응급구조사 2급 국가시험 핵심요약', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], isbn: '9791185210070', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+국가시험+핵심요약+2026' },
    { title: '2026 응급구조사 2급 기출문제 완전분석', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791185210070', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+기출문제+2026' },
    { title: '2026 응급구조사 2급 응급처치학 핵심이론', author: '대한응급구조사협회 편집부', publisher: '군자출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+응급처치학+2026' },
    { title: '2026 응급구조사 2급 해부생리학 완성', author: '이민수', publisher: '에듀팩토리', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+해부생리학+2026' },
    { title: '2026 응급구조사 2급 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+모의고사+5회분+2026' },
    { title: '2026 응급구조사 2급 심폐소생술(CPR) 실기', author: '박준혁', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+심폐소생술+2026' },
    { title: '2026 응급구조사 2급 의료법규 핵심정리', author: '김재현', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+의료법규+2026' },
    { title: '2026 응급구조사 2급 내과응급 집중공략', author: '이수진', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+내과응급+2026' },
    { title: '2026 응급구조사 2급 벼락치기 핵심노트', author: '최민영', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 78, tags: ['추천'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+벼락치기+2026' },
    { title: '2026 응급구조사 2급 외상응급·특수응급 완성', author: '한국응급구조학과교수협의회', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9791143405944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+외상응급+2026' },
  ],

  '요양보호사': [
    { title: '2026 요양보호사 최종모의고사 5회분', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2340, tags: ['베스트'], isbn: '9788940650233', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+최종모의고사+2026' },
    { title: '2026 요양보호사 핵심요약+기출문제집', author: '박문각 편집부', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1987, tags: ['베스트'], isbn: '9788998581640', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+핵심요약+기출문제+2026' },
    { title: '2026 요양보호사 필기+실기 한권완성', author: '이지패스 편집부', publisher: '이지패스', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 1654, tags: ['베스트'], isbn: '9791125748021', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+필기+실기+한권완성+2026' },
    { title: '2026 요양보호사 기출문제 10개년 완전분석', author: '성안당 편집부', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['베스트'], isbn: '9788927775881', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+기출문제+10개년+2026' },
    { title: '2026 요양보호사 벼락치기 핵심노트', author: '김민지', publisher: '에듀팩토리', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 987, tags: ['베스트'], isbn: '9788927775874', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+벼락치기+핵심노트+2026' },
    { title: '2026 요양보호사 노인요양 실기 완성', author: '이정희', publisher: '박문각', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 756, tags: ['추천'], isbn: '9791172346249', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+노인요양+실기+2026' },
    { title: '2026 요양보호사 치매·임종케어 핵심정리', author: '한국노인복지학회 편집부', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 534, tags: ['추천'], isbn: '9788940650233', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+치매+임종케어+2026' },
    { title: '2026 요양보호사 요양보호론 이론 완성', author: '박재현', publisher: '이지패스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 412, tags: ['추천'], isbn: '9788940650233', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+요양보호론+이론+2026' },
    { title: '2026 요양보호사 OX퀴즈 1000제', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 312, tags: ['추천'], isbn: '9788940650233', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+OX퀴즈+1000제+2026' },
    { title: '2026 요양보호사 신체활동지원 실기 집중', author: '최수정', publisher: '박문각', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 234, tags: ['추천'], isbn: '9788940650233', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+신체활동지원+실기+2026' },
  ],

  '의무기록사': [
    { title: '2026 의무기록사 국가시험 핵심요약 총정리', author: '대한의무기록협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], isbn: '9788961303569', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+국가시험+핵심요약+2026' },
    { title: '2026 의무기록사 기출문제 완전분석', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 267, tags: ['베스트'], isbn: '9791191036626', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+기출문제+완전분석+2026' },
    { title: '2026 의무기록사 의학용어·질병분류 핵심', author: '고려의학 편집부', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 212, tags: ['베스트'], isbn: '9791191036633', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+의학용어+질병분류+2026' },
    { title: '2026 의무기록사 ICD-11 질병분류 집중정리', author: '이지현', publisher: '군자출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 178, tags: ['베스트'], isbn: '9791191036633', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+ICD-11+질병분류+2026' },
    { title: '2026 의무기록사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 134, tags: ['베스트'], isbn: '9791191036633', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+모의고사+5회분+2026' },
    { title: '2026 의무기록사 보건의료정보관리 이론', author: '박수진', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791191036633', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+보건의료정보관리+2026' },
    { title: '2026 의무기록사 행정실무 핵심정리', author: '김태영', publisher: '군자출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791191036633', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+행정실무+2026' },
    { title: '2026 의무기록사 의료법규 완성', author: '이민정', publisher: '메디시언', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 78, tags: ['추천'], isbn: '9791191036633', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+의료법규+2026' },
    { title: '2026 의무기록사 벼락치기 핵심노트', author: '한국보건정보관리학회', publisher: '군자출판사', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9791191036633', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+벼락치기+2026' },
    { title: '2026 의무기록사 전산학·통계학 핵심이론', author: '최지현', publisher: '고려의학', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 56, tags: ['추천'], isbn: '9791191036633', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+전산학+통계학+2026' },
  ],

  '보건교육사': [
    { title: '2026 보건교육사 3급 핵심요약 총정리', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791143415776', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+3급+핵심요약+2026' },
    { title: '2026 보건교육사 기출문제 완전분석', author: '박문각 편집부', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], isbn: '9791143415776', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+기출문제+완전분석+2026' },
    { title: '2026 보건교육사 보건교육학 핵심이론', author: '고려의학 편집부', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791190839457', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+보건교육학+핵심이론+2026' },
    { title: '2026 보건교육사 보건학·보건프로그램개발 완성', author: '이지혜', publisher: '에듀팩토리', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], isbn: '9791143415776', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+보건학+보건프로그램개발+2026' },
    { title: '2026 보건교육사 모의고사 5회분', author: '박문각 편집부', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 123, tags: ['베스트'], isbn: '9791143415776', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+모의고사+5회분+2026' },
    { title: '2026 보건교육사 역학·보건통계학 집중공략', author: '김수영', publisher: '고려의학', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 104, tags: ['추천'], isbn: '9791143415776', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+역학+보건통계학+2026' },
    { title: '2026 보건교육사 사회과학 조사방법론', author: '이재훈', publisher: '에듀팩토리', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], isbn: '9791143415776', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+사회과학+조사방법론+2026' },
    { title: '2026 보건교육사 의료관계법규 완성', author: '박재현', publisher: '박문각', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], isbn: '9791143415776', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+의료관계법규+2026' },
    { title: '2026 보건교육사 보건의사소통 핵심정리', author: '최민정', publisher: '고려의학', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], isbn: '9788962201239', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+보건의사소통+2026' },
    { title: '2026 보건교육사 벼락치기 핵심노트', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791143415776', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+벼락치기+2026' },
  ],

  '위생사': [
    { title: '2026 위생사 국가시험 핵심요약 총정리', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], isbn: '9791170684206', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+국가시험+핵심요약+2026' },
    { title: '2026 위생사 기출문제 완전분석', author: '박문각 편집부', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], isbn: '9791143410191', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+기출문제+완전분석+2026' },
    { title: '2026 위생사 공중보건학 핵심이론', author: '고려의학 편집부', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791188944675', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+공중보건학+핵심이론+2026' },
    { title: '2026 위생사 환경위생학·식품위생학 완성', author: '이지현', publisher: '에듀팩토리', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], isbn: '9791143415400', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+환경위생학+식품위생학+2026' },
    { title: '2026 위생사 모의고사 5회분', author: '박문각 편집부', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 123, tags: ['베스트'], isbn: '9791143415400', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+모의고사+5회분+2026' },
    { title: '2026 위생사 위생곤충학·역학 집중공략', author: '김태현', publisher: '고려의학', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 104, tags: ['추천'], isbn: '9791143415400', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+위생곤충학+역학+2026' },
    { title: '2026 위생사 의료관계법규 핵심정리', author: '이민수', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], isbn: '9791188516711', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+의료관계법규+2026' },
    { title: '2026 위생사 미생물학·기생충학 완성', author: '박수영', publisher: '박문각', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], isbn: '9791143415400', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+미생물학+기생충학+2026' },
    { title: '2026 위생사 벼락치기 핵심노트', author: '최은영', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], isbn: '9791143415400', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+벼락치기+2026' },
    { title: '2026 위생사 소독학·구강보건 핵심이론', author: '한국위생사협회 편집부', publisher: '고려의학', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791143415400', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+소독학+구강보건+2026' },
  ],

  '건설기계기사': [
    { title: '2026 건설기계설비 기사 필기대비', author: '위을복', publisher: '학진북스', price: 50400, originalPrice: 56000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], isbn: '9788968780547', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비+기사+필기+2026' },
    { title: '2026 건설기계설비기사 필기', author: '김영기', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], isbn: '9791124051382', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비기사+필기+구민사+2026' },
    { title: '2026 합격비법 건설기계설비기사 필기 핵심이론 및 예상문제', author: '이태랑', publisher: '오스틴북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791124051375', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비기사+필기+핵심이론+2026' },
    { title: '2026 합격비법 건설기계설비기사 필기 기출문제', author: '이태랑', publisher: '오스틴북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], isbn: '9791124051382', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비기사+필기+기출문제+2026' },
    { title: '건설기계설비 기사 필답형 실기', author: '위을복', publisher: '학진북스', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], isbn: '9788968780752', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비+기사+필답형+실기' },
    { title: '일반기계기사 기계설계산업기사 건설기계설비기사 작업형 실기', author: '메카피아', publisher: '메카피아', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9791162480311', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비기사+작업형+실기' },
    { title: '패스 건설기계정비산업기사 필기', author: '김인호, 김기홍, 류상렬, 최만용', publisher: '골든벨', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791158066376', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계정비산업기사+필기' },
    { title: '2023 건설기계설비 일반기계 기사 필기 과년도 문제집', author: '위을복', publisher: '학진북스', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], isbn: '9788968780318', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비+일반기계+기사+과년도' },
    { title: '2026 건설기계설비 기사 필기대비', author: '위을복', publisher: '학진북스', price: 50400, originalPrice: 56000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], isbn: '9788968780547', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비+기사+2026+학진북스' },
    { title: '2026 합격비법 건설기계설비기사 필기', author: '이태랑', publisher: '오스틴북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791124051382', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=합격비법+건설기계설비기사+2026' },
  ],

  '토목산업기사': [
    { title: '2026 토목산업기사 필기 4주완성 8개년 과년도 문제해설', author: '이상도, 정경동, 고길용, 안광호 외', publisher: '한솔아카데미', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791166547478', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목산업기사+필기+4주완성+2026' },
    { title: '2026 토목설계 물량산출 도면작도 토목산업기사 실기시험 대비', author: '한성천', publisher: '금호출판사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9788998269081', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목산업기사+실기+물량산출+도면작도+2026' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 4: 철근콘크리트 및 강구조', author: '고영주', publisher: '성안당', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], isbn: '9788931511642', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+철근콘크리트' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 5: 토질 및 기초', author: '박영태', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9788931511659', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+토질' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 2: 측량학', author: '송낙원, 송용희', publisher: '성안당', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9788931511628', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+측량학' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 6: 상하수도공학', author: '박재성', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9788931511666', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+상하수도공학' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 3: 수리수문학', author: '박영태', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931511635', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+수리수문학' },
    { title: '철도토목기사.산업기사 필기.실기 합격 바이블', author: '정대호, 정찬묵, 배석복', publisher: 'CIR', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791156109501', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=철도토목기사+산업기사+합격+바이블' },
    { title: '2026 토목산업기사 필기 4주완성', author: '이상도 외', publisher: '한솔아카데미', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791166547478', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목산업기사+필기+한솔아카데미+2026' },
    { title: '2025 토목기사/토목산업기사 핵심시리즈: 토목일반', author: '이상도', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9788931511642', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+성안당' },
  ],

  '건축산업기사': [
    { title: '2026 건축산업기사 필기 4주완성', author: '남재호, 송우용', publisher: '한솔아카데미', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], isbn: '9791166547416', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+필기+4주완성+2026' },
    { title: '2026 건축산업기사 필기 7개년 필기 경향문제', author: '한솔아카데미 수험연구회', publisher: '한솔아카데미', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791166548307', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+필기+7개년+2026' },
    { title: '2026 건축산업기사 실기 The Bible', author: '안광호, 백종엽, 이병억', publisher: '한솔아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], isbn: '9791166548420', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+실기+The+Bible+2026' },
    { title: '2027 하이패스 건축산업기사 필기 기출문제집', author: '안남식', publisher: '서울고시각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9788952653369', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=하이패스+건축산업기사+필기+기출문제집' },
    { title: '2025 미듬 건축산업기사 실기 1·2', author: '임근재', publisher: '멘토스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791193772041', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=미듬+건축산업기사+실기' },
    { title: '2026 스마트 실내건축산업기사 작업형 실기', author: '황두환', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788931512427', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축산업기사+작업형+실기+2026' },
    { title: '2026 건축산업기사 필기 핵심이론', author: '남재호', publisher: '한솔아카데미', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9791168042117', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+필기+핵심이론+한솔아카데미' },
    { title: '최신판 이패스 실내건축기사(산업기사) 실기 작업형', author: '강덕진', publisher: '이패스코리아', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791172095109', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=이패스+실내건축기사+산업기사+실기+작업형' },
    { title: '2026 건축산업기사 실기 단기완성', author: '안광호', publisher: '한솔아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791194568483', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+실기+단기완성+2026' },
    { title: '2026 실전 단기 완성 건축설비산업기사 실기', author: '조성안', publisher: '기문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9791194568483', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축설비산업기사+실기+2026' },
  ],

  '실내건축기사': [
    { title: '2026 실내건축기사 4주완성 세트 - 전2권', author: '남재호', publisher: '한솔아카데미', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], isbn: '9791166548017', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+4주완성+세트+2026' },
    { title: '2027 나합격 실내건축기사 필기[핵심이론+17개년 기출]', author: '김수진', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791194997726', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+실내건축기사+필기+핵심이론' },
    { title: '2026 실내건축기사 필기 - 전2권', author: '유희정, 이석훈', publisher: '예문사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], isbn: '9788927459477', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+필기+예문사+2026' },
    { title: '2027 스마트 실내건축기사 시공실무 필답형 실기', author: '김태민, 전명숙', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9788931512502', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스마트+실내건축기사+시공실무+필답형+실기' },
    { title: '최신판 이패스 실내건축기사(산업기사) 실기 작업형', author: '강덕진', publisher: '이패스코리아', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], isbn: '9791172095109', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+실내건축기사+산업기사+실기+작업형' },
    { title: '2026 실내건축기사 실기 시공실무', author: '한석우', publisher: '이패스코리아', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931512502', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+실기+시공실무+이패스코리아+2026' },
    { title: '2025 실내건축기사 필기 문제해설', author: '이상화', publisher: '엔플북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9788968134173', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+필기+문제해설+엔플북스' },
    { title: '2026 스마트 실내건축산업기사 작업형 실기', author: '황두환', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788931512427', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축산업기사+작업형+실기+성안당+2026' },
    { title: '2026 실내건축기사 필기 단기완성', author: '남재호', publisher: '한솔아카데미', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], isbn: '9791125489214', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+필기+단기완성+한솔아카데미' },
    { title: '2026 실내건축기사 실기', author: '유희정', publisher: '예문사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9788931512502', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+실기+예문사+2026' },
  ],

  '조경기사': [
    { title: '2026 조경기사.산업기사 필기 단기완성', author: '이윤진', publisher: '한솔아카데미', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], isbn: '9791166547768', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+산업기사+필기+단기완성+2026' },
    { title: '2026 시대에듀 조경기사·산업기사 필기 한권으로 합격하기', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791143404251', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+필기+한권으로+합격+2026' },
    { title: '2026 조경기사·조경산업기사 실기 필답형·작업형', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9791166548901', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+조경산업기사+실기+필답형+작업형+2026' },
    { title: 'Conquest 조경기사·조경산업기사 실기정복 - 개정15판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791160280333', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+실기정복' },
    { title: '2026 시대에듀 조경기사 필기 기출문제집', author: '최평희', publisher: '시대에듀', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9791143409058', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+필기+기출문제집+2026' },
    { title: '2026 시대에듀 조경기사·산업기사 실기 한권으로 끝내기', author: '이우설', publisher: '시대에듀', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.6, reviews: 223, tags: ['추천'], isbn: '9791143406606', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+실기+한권으로+끝내기+2026' },
    { title: '최신개정판 Conquest 조경기사.조경산업기사 필기정복 - 개정13판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], isbn: '9791160280326', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+필기정복' },
    { title: '202X 조경기사 필기 - 서양조경사 계보 수록', author: '구민아', publisher: '구민사', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791168756687', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+필기+구민사' },
    { title: '2026 조경기사 필기 핵심이론 기출문제', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9791160280333', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+필기+핵심이론+기출문제+2026' },
    { title: '2026 조경기사 단기완성 실기', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791160280333', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+단기완성+실기+한솔아카데미+2026' },
  ],

  '조경산업기사': [
    { title: '2026 조경기사.산업기사 필기 단기완성', author: '이윤진', publisher: '한솔아카데미', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791166547768', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+산업기사+필기+단기완성+2026' },
    { title: '2026 시대에듀 조경기사·산업기사 필기 한권으로 합격하기', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9791143404251', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+필기+한권으로+합격+2026' },
    { title: '2026 조경기사·조경산업기사 실기 필답형·작업형', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791166548901', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+조경산업기사+실기+필답형+작업형+2026' },
    { title: '202X 조경산업기사 필기 - 서양조경사 계보 수록', author: '구민아', publisher: '구민사', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], isbn: '9791168756694', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+필기+구민사' },
    { title: 'Conquest 조경기사·조경산업기사 실기정복 - 개정15판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791160280333', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+실기정복' },
    { title: '2026 시대에듀 조경기사·산업기사 실기 한권으로 끝내기', author: '이우설', publisher: '시대에듀', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], isbn: '9791143406606', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+실기+한권으로+끝내기+2026' },
    { title: '최신개정판 Conquest 조경기사.조경산업기사 필기정복 - 개정13판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791160280326', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+필기정복' },
    { title: '조경산업기사 필기시험문제', author: '임권희', publisher: '크라운출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9788940623619', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+필기시험문제+크라운' },
    { title: '2026 조경산업기사 필기 단기완성', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791166547768', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+필기+단기완성+2026' },
    { title: '2026 조경산업기사 실기', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791166548901', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+실기+한솔아카데미+2026' },
  ],

  '조경기능사': [
    { title: '2026 나합격 조경기능사 필기+무료특강', author: '조은정', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791199411531', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+조경기능사+필기+2026' },
    { title: '2026 에듀윌 조경기능사 필기 2주끝장', author: '구태익', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], isbn: '9791136039361', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+조경기능사+필기+2주끝장+2026' },
    { title: '2026 조경기능사 필기 초단기 합격', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '지식오름', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791174910233', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+초단기+합격+2026' },
    { title: '2026 시대에듀 조경기능사 필기 한권으로 끝내기', author: '최광희', publisher: '시대에듀', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], isbn: '9791143400369', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기능사+필기+한권으로+끝내기+2026' },
    { title: '2026 조경기능사 필기', author: '정용민, 오도정', publisher: '예문사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791199411531', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+예문사+2026' },
    { title: '2026 조경기능사 필기', author: '한상엽', publisher: '한솔아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791199411531', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+한솔아카데미+2026' },
    { title: '2026 시대에듀 조경기능사 필기 기출문제집', author: '최광희', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791138397803', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기능사+필기+기출문제집+2026' },
    { title: '2026 조경기능사 실기 초단기 합격', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '지식오름', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791174910035', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+실기+초단기+합격+2026' },
    { title: '2026 조경기능사 실기', author: '정용민', publisher: '예문사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791174910035', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+실기+예문사+2026' },
    { title: '2026 조경기능사 필기 단기완성', author: '조은정', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791191188073', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+단기완성+2026' },
  ],

  '측량및지형공간정보기사': [
    { title: '2026 PASS 측량 및 지형공간정보기사 필기 - 전2권', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], isbn: '9788927460909', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보기사+필기+2026' },
    { title: '2026 측량 및 지형공간정보기사 필기+핸드북', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9788927460909', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+필기+핸드북+2026' },
    { title: '2026 PASS 측량 및 지형공간정보기사 실기', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], isbn: '9788927460862', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보기사+실기+2026' },
    { title: '2026 측량 및 지형공간정보기사 실기', author: '이영욱, 이영수, 최병윤, 김도균', publisher: '구민사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9788927460862', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+실기+구민사+2026' },
    { title: '2026 PASS 측량 및 지형공간정보기사 필기 과년도+CBT 모의고사', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], isbn: '9788927460749', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보기사+과년도+CBT+2026' },
    { title: '2025 측량 및 지형공간정보기사 과년도', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788927460749', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+과년도+구민사' },
    { title: '2026 PASS 측량 및 지형공간정보산업기사 필기 과년도+CBT 모의고사', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9788927458944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보산업기사+필기+2026' },
    { title: '2026 측량 및 지형공간정보산업기사 필기', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788927458944', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보산업기사+필기+구민사+2026' },
    { title: '2026 측량 및 지형공간정보기사 핵심이론+기출문제', author: '이혜진', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], isbn: '9788927460909', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+핵심이론+기출문제+2026' },
    { title: '2026 측량 및 지형공간정보기사 필기 단기완성', author: '이영수', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791138320696', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+필기+단기완성+구민사' },
  ],

  '콘크리트기능사': [
    { title: '2026 CBT 대비 콘크리트기능사 필기+실기 3주 완성', author: '고길용, 염창열, 전지현', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791166547737', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+실기+3주+완성+2026' },
    { title: '2026 시대에듀 Win-Q 콘크리트기능사 필기+실기 단기합격', author: '최광희', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], isbn: '9791143401779', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+콘크리트기능사+필기+실기+단기합격+2026' },
    { title: '2026 콘크리트기능사 필기+실기 한권 완성', author: '이관석', publisher: '예문사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791166547737', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+실기+한권+완성+2026' },
    { title: '2026 콘크리트 기능사 필기 실기 - 개정증보 제21판', author: '김영국, 박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], isbn: '9791192089324', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트+기능사+필기+실기+금호출판사+2026' },
    { title: '2025 콘크리트기능사 필기 실기 - 개정증보 제20판', author: '박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791166547737', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+실기+금호출판사+2025' },
    { title: '2024 콘크리트 기능사 필기', author: '박종삼', publisher: '금호출판사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791192089324', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트+기능사+필기+금호출판사+2024' },
    { title: '2026 콘크리트기능사 필기 3주 완성', author: '고길용', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791166547737', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+3주+완성+한솔아카데미' },
    { title: '2026 콘크리트기능사 실기', author: '최광희', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791166547737', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+실기+시대에듀+2026' },
    { title: '2026 콘크리트기능사 기출문제 풀이', author: '이관석', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791166547737', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+기출문제+2026' },
    { title: '2026 콘크리트기능사 단기완성', author: '고길용', publisher: '한솔아카데미', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9791166547737', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=콘크리트기능사+단기완성+2026' },
  ],

  '측량기능사': [
    { title: '2026 CBT대비 측량기능사 필기 + 실기 3주완성', author: '염창열, 정병노, 고길용', publisher: '한솔아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], isbn: '9791166547591', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+실기+3주완성+2026' },
    { title: '2026 측량기능사 필기 + 실기 한권 완성', author: '이영수, 김문기, 오건호', publisher: '예문사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 345, tags: ['베스트'], isbn: '9791166547591', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+실기+한권+완성+2026' },
    { title: '2026 PASS 측량기능사 필기+실기', author: '박종해, 김민승, 민미란, 박동규', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9788927461562', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량기능사+필기+실기+2026' },
    { title: '2026 시대에듀 Win-Q 측량기능사 필기 단기합격', author: '최광희', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791138396066', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+측량기능사+필기+단기합격+2026' },
    { title: '2026 측량기능사 필기 및 실기', author: '김영국, 박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791192089348', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+실기+금호출판사+2026' },
    { title: '단기완성 측량기능사 필기 및 실기', author: '송용희', publisher: '지적EDU', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791187997665', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=단기완성+측량기능사+필기+실기+지적EDU' },
    { title: '2024 측량기능사 필기 이론 및 문제해설', author: '박종삼', publisher: '금호출판사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9791192089201', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+이론+문제해설+금호출판사' },
    { title: '2026 측량기능사 단기완성 핵심이론', author: '염창열', publisher: '한솔아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791166547591', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+단기완성+한솔아카데미+2026' },
    { title: '2026 측량기능사 실기 완성', author: '이영수', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9788927460466', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+실기+완성+예문사+2026' },
    { title: '2026 측량기능사 기출문제 해설', author: '박종해', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9791166547591', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+기출문제+해설+2026' },
  ],

  '건설재료시험기능사': [
    { title: '2026 건설재료시험기능사 필기 및 실기', author: '박종삼', publisher: '금호출판사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], isbn: '9791192089300', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+필기+실기+금호출판사+2026' },
    { title: '2026 시대에듀 Win-Q 건설재료시험기능사 필기 단기합격', author: '최광희', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9791138397841', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+건설재료시험기능사+필기+단기합격+2026' },
    { title: '2026 건설재료시험기능사 실기', author: '박종삼', publisher: '금호출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 223, tags: ['베스트'], isbn: '9791192089331', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+실기+금호출판사+2026' },
    { title: '건설재료 시험기능사 필기 - 이론 및 문제해설', author: '가종길', publisher: '금호출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791138397841', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료+시험기능사+필기+이론+문제해설' },
    { title: '2026 건설재료시험기능사 핵심이론 기출문제', author: '최광희', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], isbn: '9791138397841', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+핵심이론+기출문제+2026' },
    { title: '기능사 건설재료시험 - 필기', author: '강설모', publisher: '연문사', price: 9000, originalPrice: 10000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9791138397841', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험+필기+연문사' },
    { title: '2026 건설재료시험기능사 필기 단기완성', author: '박종삼', publisher: '금호출판사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791138397841', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+필기+단기완성+2026' },
    { title: '2026 건설재료시험기능사 실기 완성', author: '최광희', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791138397841', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+실기+시대에듀+2026' },
    { title: '2026 건설재료시험기능사 한권 완성', author: '이관석', publisher: '예문사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], isbn: '9791138397841', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+한권+완성+예문사+2026' },
    { title: '2026 건설재료시험기능사 필기 기출문제 풀이', author: '박종삼', publisher: '금호출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791138397841', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+필기+기출문제+금호출판사' },
  ],

  '건설안전기사': [
    { title: '2027 나합격 건설안전기사 필기 + 무료특강', author: '김현우, 허선혜', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], isbn: '9791194997948', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+건설안전기사+필기+무료특강' },
    { title: '2026 에듀윌 건설안전기사 필기 기출문제집', author: '김충민, 최석훈', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], isbn: '9791136039873', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+건설안전기사+필기+기출문제집+2026' },
    { title: '2026 에듀윌 건설안전기사 실기 기출문제집', author: '최석훈, 김충민', publisher: '에듀윌', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9791136041180', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+건설안전기사+실기+기출문제집+2026' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 건설안전기사 실기', author: '김진태', publisher: '김영북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791173491399', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+건설안전기사+실기+2026' },
    { title: '2026 건설안전기사 실기[필답형+작업형]', author: '최윤정', publisher: '구민사', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], isbn: '9791173491399', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기사+실기+필답형+작업형+2026' },
    { title: '모아 건설안전기사 필기', author: '윤경화', publisher: '모아교육그룹', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 223, tags: ['추천'], isbn: '9791168045873', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+건설안전기사+필기' },
    { title: '모아 건설안전기사 실기', author: '윤경화', publisher: '모아교육그룹', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], isbn: '9791168045996', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+건설안전기사+실기' },
    { title: '2026 벼락치기 건설안전기사 필기 요점', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788931713954', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=벼락치기+건설안전기사+필기+요점+2026' },
    { title: '2026 건설안전기사 필기 핵심이론+기출문제', author: '김충민', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791136039873', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기사+필기+핵심이론+기출문제+2026' },
    { title: '2026 건설안전기사 단기완성 필기', author: '허선혜', publisher: '삼원북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791189757182', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기사+단기완성+필기+2026' },
  ],

  '소방설비산업기사': [
    { title: '2026 찐합격 소방설비산업기사 필기 (기계 ③)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.8, reviews: 489, tags: ['베스트'], isbn: '9788931514094', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+필기+기계+2026' },
    { title: '2026 찐합격 소방설비산업기사 필기 (전기 ③)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9788931514094', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+필기+전기+2026' },
    { title: '2026 찐합격 소방설비산업기사 실기 (기계⑥)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9788931514063', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+실기+기계+2026' },
    { title: '2026 찐합격 소방설비산업기사 실기 (전기⑥)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9788931514063', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+실기+전기+2026' },
    { title: '2026 찐합격 7개년 과년도 소방설비산업기사 필기 (기계 ③-7)', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], isbn: '9788931514094', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+7개년+소방설비산업기사+필기+기계+2026' },
    { title: '2026 찐합격 7개년 과년도 소방설비산업기사 필기 (전기 ③-7)', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], isbn: '9788931514094', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+7개년+소방설비산업기사+필기+전기+2026' },
    { title: '2026 초격차 소방설비산업기사 과년도 7개년 실기 전기', author: '황모아, 오민정', publisher: '모아교육그룹', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], isbn: '9791168045187', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초격차+소방설비산업기사+실기+전기+2026' },
    { title: '2026 평생 무료 동영상과 함께하는 소방설비산업기사 필기 최근 기출문제(전기편)', author: '강석민, 정진홍', publisher: '세진북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], isbn: '9791157457373', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방설비산업기사+필기+기출문제+전기편+2026' },
    { title: '2026 소방설비산업기사 필기 기출문제 (기계편)', author: '강석민', publisher: '세진북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], isbn: '9791157457373', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방설비산업기사+필기+기출문제+기계편+2026' },
    { title: '2026 소방설비산업기사 실기 단기완성', author: '공하성', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9788931514063', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방설비산업기사+실기+단기완성+2026' },
  ],

  '소방시설관리사': [
    { title: '2027 버닝 업 소방시설관리사 필기 1차 세트', author: '황모아, 윤연호, 모성은 외', publisher: '모아교육그룹', price: 108000, originalPrice: 120000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], isbn: '9791168046214', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=버닝+업+소방시설관리사+필기+1차+세트' },
    { title: '2026 찐합격 31년 과년도 소방시설관리사 1차', author: '공하성', publisher: '성안당', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 289, tags: ['베스트'], isbn: '9788931513943', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+31년+과년도+소방시설관리사+1차' },
    { title: '2026 찐합격 600제 소방시설관리사 2차', author: '공하성', publisher: '성안당', price: 72000, originalPrice: 80000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], isbn: '9788931513240', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+600제+소방시설관리사+2차' },
    { title: '2027 버닝 업 소방시설관리사 필기 1차 전과목 과년도', author: '황모아, 윤연호, 모성은 외', publisher: '모아교육그룹', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 198, tags: ['베스트'], isbn: '9791168046269', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=버닝+업+소방시설관리사+1차+전과목+과년도' },
    { title: '2026 엔드 업 소방시설관리사 만제: 점검실무행정', author: '함형덕', publisher: '모아교육그룹', price: 51300, originalPrice: 57000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], isbn: '9791168045095', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=엔드+업+소방시설관리사+만제+점검실무행정' },
    { title: '2026 엔드 업 소방시설관리사 만제: 설계 및 시공', author: '함형덕', publisher: '모아교육그룹', price: 51300, originalPrice: 57000, discount: '10%', rating: 4.6, reviews: 145, tags: ['추천'], isbn: '9791168045101', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=엔드+업+소방시설관리사+만제+설계+시공' },
    { title: '뇌박힘 소방시설관리사 점검실무행정', author: '김정희', publisher: '모아교육그룹', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9791168045545', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=뇌박힘+소방시설관리사+점검실무행정' },
    { title: '2026 체크업 소방시설관리사 2차 실기', author: '김종상', publisher: '북스케치', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 98, tags: ['추천'], isbn: '9791124496039', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=체크업+소방시설관리사+2차+실기' },
    { title: '2026 소방시설관리사 1차 핵심이론', author: '공하성', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], isbn: '9791168046214', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방시설관리사+1차+핵심이론+2026' },
    { title: '2026 소방시설관리사 과년도 기출문제집', author: '황모아', publisher: '모아교육그룹', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.4, reviews: 54, tags: ['추천'], isbn: '9791168046214', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=소방시설관리사+과년도+기출문제집+2026' },
  ],

  '산업위생관리기사': [
    { title: '2026 산업위생관리기사 필기 + 무료동영상 + 핸드북', author: '최윤정', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791168755987', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+필기+무료동영상+핸드북+2026' },
    { title: '2026 산업위생관리기사 실기 + 무료동영상 + 핸드북', author: '최윤정', publisher: '구민사', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], isbn: '9791173491429', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+실기+무료동영상+핸드북+2026' },
    { title: '2026 에듀윌 산업위생관리기사 필기 한달끝장', author: '최창률', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791136037954', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+산업위생관리기사+필기+한달끝장+2026' },
    { title: '2026 더 플러스 산업위생관리기사 필기', author: '서영민', publisher: '성안당', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9788931585001', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=더+플러스+산업위생관리기사+필기+2026' },
    { title: '2026 산업위생관리기사 필기 기출문제집', author: '서영민, 조만희', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], isbn: '9788931585018', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+필기+기출문제집+성안당+2026' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 산업위생관리기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791173491429', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+산업위생관리기사+실기+2026' },
    { title: '2026 에듀윌 산업위생관리기사 실기 2주끝장', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], isbn: '9791136039057', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+산업위생관리기사+실기+2주끝장+2026' },
    { title: '2026 2주완성 산업위생관리기사 실기', author: '서영민', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931585056', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2주완성+산업위생관리기사+실기+2026' },
    { title: '2026 산업위생관리기사 필기 단기완성', author: '최윤정', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791173491429', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+필기+단기완성+구민사+2026' },
    { title: '2026 산업위생관리기사 실기 단기완성', author: '서영민', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791173491429', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=산업위생관리기사+실기+단기완성+성안당+2026' },
  ],

  '위험물기능사': [
    { title: '2026 나합격 위험물기능사 필기 + 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 567, tags: ['베스트'], isbn: '9791194997443', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물기능사+필기+실기+무료특강+2026' },
    { title: '2026 에듀윌 위험물기능사 필기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 489, tags: ['베스트'], isbn: '9791136039781', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물기능사+필기+2주끝장+2026' },
    { title: '2026 에듀윌 위험물기능사 실기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 412, tags: ['베스트'], isbn: '9791136040541', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물기능사+실기+2주끝장+2026' },
    { title: '2026 박문각 위험물기능사 (필기+실기) + 무료특강 세트', author: '김연진', publisher: '박문각', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791175192942', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+위험물기능사+필기+실기+세트+2026' },
    { title: '2026 한번에 합격하는 위험물기능사 필기+실기', author: '박수경', publisher: '성안당', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], isbn: '9788931585223', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+위험물기능사+필기+실기+2026' },
    { title: '2026 해커스 위험물기능사 실기 한권합격', author: '이승원', publisher: '해커스자격증', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 245, tags: ['추천'], isbn: '9788969657275', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+위험물기능사+실기+한권합격+2026' },
    { title: '2026 위험물기능사 실기 - 요약이론 & 13개년 기출문제집', author: '파이팅혼공TV', publisher: '지식오름', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791194997443', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+실기+요약이론+13개년+기출문제집+2026' },
    { title: '2026 위험물기능사 필기 기출문제집', author: '김재호', publisher: '세화', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9788931713992', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+필기+기출문제집+세화+2026' },
    { title: '2026 위험물기능사 필기 핵심이론', author: '박수경', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], isbn: '9788931713992', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+필기+핵심이론+성안당+2026' },
    { title: '2026 위험물기능사 단기완성', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 109, tags: ['추천'], isbn: '9788957617144', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+단기완성+에듀윌+2026' },
  ],

  '위험물산업기사': [
    { title: '2026 나합격 위험물산업기사 필기 + 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 489, tags: ['베스트'], isbn: '9791194997337', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물산업기사+필기+실기+무료특강+2026' },
    { title: '2026 에듀윌 위험물산업기사 필기 2주끝장 + 무료특강', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], isbn: '9791136039347', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물산업기사+필기+2주끝장+2026' },
    { title: '2026 에듀윌 위험물산업기사 실기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791136040350', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물산업기사+실기+2주끝장+2026' },
    { title: '2026 나합격 위험물산업기사 필기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], isbn: '9791194997337', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물산업기사+필기+무료특강+2026' },
    { title: '모아 위험물산업기사 필기', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], isbn: '9791168045811', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+위험물산업기사+필기' },
    { title: '2026 직8딴 위험물산업기사 실기', author: '김진태', publisher: '김영북스', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791173491405', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+위험물산업기사+실기+2026' },
    { title: '2026 나합격 위험물산업기사 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791194997337', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물산업기사+실기+무료특강+2026' },
    { title: '2026 위험물산업기사 필기 기출문제집', author: '김재호', publisher: '세화', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931713558', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물산업기사+필기+기출문제집+세화+2026' },
    { title: '2026 위험물산업기사 필기 단기완성', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791157454846', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물산업기사+필기+단기완성+에듀윌+2026' },
    { title: '2026 위험물산업기사 실기 단기완성', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9788931529364', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물산업기사+실기+단기완성+2026' },
  ],

  '기계설계기사': [
    { title: '2026 시대에듀 Win-Q 기계설계산업기사 필기 단기합격', author: '정의', publisher: '시대에듀', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 345, tags: ['베스트'], isbn: '9791143401878', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+기계설계산업기사+필기+단기합격+2026' },
    { title: '2023 기계설계기사 필기', author: '김영기', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], isbn: '9791168751590', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계설계기사+필기+구민사+2023' },
    { title: '기계설계기사 필기 - 최신 개정판', author: '정연택 외', publisher: '건기원', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9791194997931', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계설계기사+필기+최신+개정판+건기원' },
    { title: '2026 나합격 기계설계산업기사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791194997085', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+기계설계산업기사+필기+무료특강+2026' },
    { title: '일반기계기사·기계설계산업기사·건설기계설비기사 작업형 실기', author: '메카피아', publisher: '메카피아', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791194997931', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=일반기계기사+기계설계산업기사+작업형+실기' },
    { title: '생산자동화 기능사·산업기사 기계요소설계·기계설계 작업', author: '김진원', publisher: '공학기술', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791162481790', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화+기능사+기계요소설계+기계설계+작업' },
    { title: '2026 기계설계기사 필기 기출문제 풀이', author: '김영기', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9791194997931', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계설계기사+필기+기출문제+풀이+구민사' },
    { title: '2026 기계설계산업기사 실기', author: '정의', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791193858981', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계설계산업기사+실기+시대에듀+2026' },
    { title: '나합격 전산응용기계제도기능사 실기 유형별 빈출 도면집', author: '최현석', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], isbn: '9791194997931', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+실기+유형별+빈출+도면집' },
    { title: '2026 기계설계기사 핵심이론+기출문제', author: '정연택', publisher: '건기원', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791194997931', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계설계기사+핵심이론+기출문제+건기원+2026' },
  ],

  '공조냉동기계기사': [
    { title: '2026 공조냉동기계기사 필기 5주완성', author: '조성안, 이승원, 강희중', publisher: '한솔아카데미', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791166547638', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+필기+5주완성+한솔아카데미+2026' },
    { title: '2026 이패스 임재기의 공조냉동기계기사 필기 - 이론편+기출문제편', author: '임재기', publisher: '이패스코리아', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], isbn: '9791172092948', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+임재기+공조냉동기계기사+필기+2026' },
    { title: '2026 에듀윌 공조냉동기계기사 필기 한권끝장', author: '손익희', publisher: '에듀윌', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791136038234', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+공조냉동기계기사+필기+한권끝장+2026' },
    { title: '2026 공조냉동기계기사 실기 5주완성', author: '강희중, 조성안', publisher: '한솔아카데미', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9791166548581', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+실기+5주완성+한솔아카데미+2026' },
    { title: '2026 이패스 임재기의 공조냉동기계기사 실기 - 이론+기출문제', author: '임재기', publisher: '이패스코리아', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], isbn: '9791172092948', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+임재기+공조냉동기계기사+실기+2026' },
    { title: '모아 공조냉동기계기사 실기', author: '이지원', publisher: '모아교육그룹', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], isbn: '9791168045125', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+공조냉동기계기사+실기' },
    { title: '2026 스마트 7개년 과년도 공조냉동기계기사 필기', author: '최승일', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788931512311', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스마트+7개년+공조냉동기계기사+필기+2026' },
    { title: '2026 공조냉동기계기사 필기 과년도 7주완성', author: '이래운, 유기창', publisher: '엔플북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9788968134265', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+필기+과년도+7주완성+2026' },
    { title: '2026 공조냉동기계기사 실기 단기완성', author: '손익희', publisher: '에듀윌', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791172092948', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=공조냉동기계기사+실기+단기완성+에듀윌+2026' },
    { title: '2026 공조냉동기계기사 필기 기출문제 풀이', author: '조성안', publisher: '한솔아카데미', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791172092948', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+필기+기출문제+풀이+2026' },
  ],

  '공조냉동기계기능사': [
    { title: '2026 공조냉동기계기능사 필기+무료동영상 - 최신 CBT 복원문제 수록', author: '강진규, 오태정', publisher: '구민사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], isbn: '9791168045972', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+무료동영상+구민사+2026' },
    { title: '모아 공조냉동기계기능사 필기 (핵심이론+과년도 14개년)', author: '이지원', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791168045972', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+공조냉동기계기능사+필기+핵심이론+과년도' },
    { title: '2026 공조냉동기계기능사 필기 + 무료동영상', author: '이정근', publisher: '건기원', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], isbn: '9791168045972', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+무료동영상+건기원+2026' },
    { title: '2026 시대에듀 Win-Q 공조냉동기계기능사 필기 단기합격', author: '허판효', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], isbn: '9791143405364', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+공조냉동기계기능사+필기+단기합격+2026' },
    { title: '2026 공조냉동기계기능사 필기', author: '권오수, 안효열, 이원범', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791168045972', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+예문사+2026' },
    { title: '2026 공조냉동기계기능사 산업기사 실기+무료동영상', author: '강진규, 오태정', publisher: '구민사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791168756106', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+산업기사+실기+무료동영상+2026' },
    { title: '이패스 최부길의 공조냉동기계기능사 실기 (필답형+작업형)', author: '최부길', publisher: '이패스코리아', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791172094447', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+공조냉동기계기능사+실기+필답형+작업형' },
    { title: '2026 공조냉동기계기능사 필기 기출문제 - 기출 + 적중모의고사', author: '나중식', publisher: '책과상상', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791168045972', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+기출문제+적중모의고사+2026' },
    { title: '2026 공조냉동기계기능사 단기완성', author: '이지원', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788942914159', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+단기완성+2026' },
    { title: '2026 공조냉동기계기능사 핵심이론', author: '이정근', publisher: '건기원', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791168045972', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+핵심이론+건기원+2026' },
  ],

  '용접기사': [
    { title: '2026 고수열강 용접기사 필기+실기', author: '정균호, 나중쇠, 박승리, 박재원', publisher: '구민사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], isbn: '9791168755918', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=고수열강+용접기사+필기+실기+구민사+2026' },
    { title: '2026 시대에듀 Win-Q 용접산업기사 필기 단기합격', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791143403100', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+용접산업기사+필기+단기합격+2026' },
    { title: '2026 용접산업기사 필기', author: '나중식', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], isbn: '9791143403100', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접산업기사+필기+책과상상+2026' },
    { title: '202X 고수열강 용접산업기사 필기 + 실기', author: '정균호, 나중쇠, 박재원', publisher: '구민사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791168755857', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=고수열강+용접산업기사+필기+실기+구민사' },
    { title: '용접산업기사 필기', author: '용접기술시험연구회', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791143403100', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접산업기사+필기+일진사' },
    { title: '2026 용접산업기사 필기 10년간 기출문제', author: '나중식', publisher: '책과상상', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791169672900', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접산업기사+필기+10년간+기출문제+2026' },
    { title: '2020 완전정복 용접산업기사 실기', author: 'NDT 시험연구회', publisher: '세진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791160453683', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=완전정복+용접산업기사+실기+세진사' },
    { title: '과년도 용접산업기사', author: '김명선, 김용구, 임정운', publisher: 'HJ골든벨타임', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788986412659', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=과년도+용접산업기사+골든벨' },
    { title: '2026 용접기사 실기 핵심이론', author: '정균호', publisher: '구민사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791168755918', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기사+실기+핵심이론+구민사+2026' },
    { title: '2026 용접기사 필기 단기완성', author: '홍순규', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791158131708', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기사+필기+단기완성+시대에듀+2026' },
  ],

  '용접기능사': [
    { title: '2026 피복, 가스텅스텐, 이산화탄소가스 용접기능사 필기시험문제', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9788940649749', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기시험문제+크라운출판사+2026' },
    { title: '2025 용접기능사 필기 총정리', author: '용접기술시험연구회', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9788942920082', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기+총정리+일진사' },
    { title: '2026 에듀윌 피복아크용접기능사 필기 한권끝장+무료특강', author: '김정혁', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], isbn: '9791136037831', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+피복아크용접기능사+필기+한권끝장+2026' },
    { title: '용접기능사 특수용접기능사 필기 + 무료 동영상 강의', author: '정명호', publisher: '메카피아', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791162481141', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+특수용접기능사+필기+무료동영상+메카피아' },
    { title: '용접기능사 필기 핵심요약', author: '최부길', publisher: '이패스코리아', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 189, tags: ['베스트'], isbn: '9791192515083', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기+핵심요약+이패스코리아' },
    { title: '2026 평생 무료 동영상과 함께하는 가스텅스텐아크용접기능사 필기', author: '최갑규', publisher: '세진북스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791157458677', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스텅스텐아크용접기능사+필기+세진북스+2026' },
    { title: '용접기능사 실기', author: '김승대 외', publisher: '세진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], isbn: '9788971219201', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+실기+세진사' },
    { title: '이산화탄소가스아크 용접기능사 실기', author: '김명선', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9788940649107', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이산화탄소가스아크+용접기능사+실기+크라운출판사' },
    { title: '2026 용접기능사 필기 기출문제 풀이', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 89, tags: ['추천'], isbn: '9788940649749', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기+기출문제+풀이+2026' },
    { title: '2026 용접기능사 단기합격', author: '정명호', publisher: '메카피아', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9791143404268', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+단기합격+메카피아+2026' },
  ],

  '생산자동화기능사': [
    { title: '생산자동화 기능사 생산자동화 산업기사 기계요소설계·기계설계 작업 - 인벤터를 활용한 공개문제 풀이', author: '김진원', publisher: '공학기술', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791194997269', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화+기능사+인벤터+공개문제+풀이' },
    { title: '생산자동화 기능사 생산자동화 산업기사 기계요소설계·기계설계 작업 - 솔리드웍스를 활용한 공개문제 풀이', author: '김진원', publisher: '공학기술', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 267, tags: ['베스트'], isbn: '9791194997269', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화+기능사+솔리드웍스+공개문제+풀이' },
    { title: '2026 나합격 자동화설비기능사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791194997269', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+자동화설비기능사+필기+무료특강+2026' },
    { title: '실무를 위한 SolidWorks - 생산자동화기능사 / 산업기사', author: '고성우, 성재경', publisher: '예문사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791194997269', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=SolidWorks+생산자동화기능사+산업기사+예문사' },
    { title: '생산자동화기능사 필기', author: '한홍걸', publisher: '예문사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.5, reviews: 156, tags: ['베스트'], isbn: '9791194997269', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화기능사+필기+예문사' },
    { title: '생산자동화기능사 - 문제.해설', author: '생산자동화연구회', publisher: '일진사', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9791162481790', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화기능사+문제+해설+일진사' },
    { title: '2020 생산자동화기능사 필기 - 개정 5판', author: '정연택 외', publisher: '건기원', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791162481790', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=생산자동화기능사+필기+건기원' },
    { title: 'Melsec-Q PLC를 활용한 생산자동화(MPS) 제어실습', author: '오선일', publisher: '복두출판사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791166754517', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PLC+생산자동화+제어실습+복두출판사' },
    { title: '2026 생산자동화기능사 필기 기출문제 풀이', author: '한홍걸', publisher: '예문사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9791162481790', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=생산자동화기능사+필기+기출문제+예문사+2026' },
    { title: '2026 생산자동화기능사 단기완성', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791162481790', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화기능사+단기완성+2026' },
  ],

  '전산응용기계제도기능사': [
    { title: '2026 나합격 전산응용기계제도기능사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 467, tags: ['베스트'], isbn: '9791199411579', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+전산응용기계제도기능사+필기+무료특강+2026' },
    { title: '나합격 전산응용기계제도기능사 실기 유형별 빈출 도면집', author: '최현석', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], isbn: '9791194997931', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+실기+유형별+빈출+도면집' },
    { title: '2026 시대에듀 Win-Q 전산응용기계제도기능사 필기', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791143400277', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+전산응용기계제도기능사+필기+시대에듀+2026' },
    { title: '나합격 전산응용기계제도기능사 실기', author: '자격증의모든것DC', publisher: '삼원북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], isbn: '9791194997931', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+실기+삼원북스' },
    { title: '2026 해커스 전산응용기계제도기능사 필기 한권완성', author: '이재형', publisher: '해커스자격증', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9788969656803', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+전산응용기계제도기능사+필기+한권완성+2026' },
    { title: '2026 유튜버 기계도사 전산응용기계제도기능사', author: '정인훈', publisher: '지식오름', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791174910257', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계도사+전산응용기계제도기능사+2026' },
    { title: '2026 전산응용기계제도기능사 필기 기출문제', author: '김원중', publisher: '책과상상', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791169673433', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+필기+기출문제+책과상상+2026' },
    { title: '2025 시대에듀 Win-Q 전산응용기계제도기능사 실기', author: '정인훈', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791138390163', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+전산응용기계제도기능사+실기+시대에듀' },
    { title: '2026 전산응용기계제도기능사 단기완성', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791157454822', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=전산응용기계제도기능사+단기완성+2026' },
    { title: '2026 전산응용기계제도기능사 핵심이론', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9788969656803', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+핵심이론+삼원북스+2026' },
  ],

  '승강기기사': [
    { title: '승강기 기사.산업기사 - NCS 기반 출제기준에 맞춘 최고의 수험서', author: '최기호, 이명상', publisher: '대광서림', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.8, reviews: 356, tags: ['베스트'], isbn: '9788938452108', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+산업기사+NCS+대광서림' },
    { title: '2026 승강기 기사.산업기사 필기', author: '이도흠', publisher: '엔트미디어', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], isbn: '9791192810614', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+산업기사+필기+엔트미디어+2026' },
    { title: '2026 승강기 기사.산업기사 실기', author: '이도흠', publisher: '엔트미디어', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], isbn: '9791192810805', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+산업기사+실기+엔트미디어+2026' },
    { title: '2024 기발한 승강기기사.산업기사 필기', author: '김인호', publisher: '크라운출판사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9788940647691', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기발한+승강기기사+산업기사+필기+크라운출판사' },
    { title: '2024 한 권으로 끝내는 승강기기사.산업기사 필기', author: '한영규', publisher: '건기원', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], isbn: '9791157677825', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한권으로+끝내는+승강기기사+산업기사+필기+건기원' },
    { title: '승강기기사.산업기사', author: '정재수', publisher: '남양문화', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9788938452108', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기기사+산업기사+남양문화' },
    { title: '승강기기사 실기', author: '정재수', publisher: '남양문화', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9788955540826', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기기사+실기+남양문화' },
    { title: '승강기 기사', author: '이도흠', publisher: '동일출판사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9788938452108', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+동일출판사+이도흠' },
    { title: '2026 승강기기사 필기 단기완성', author: '이도흠', publisher: '엔트미디어', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 67, tags: ['추천'], isbn: '9788938452108', imageUrl: null, pageUrl: 'https://search.kyBobby.co.kr/search?keyword=승강기기사+필기+단기완성+엔트미디어+2026' },
    { title: '2026 승강기기사 실기 단기완성', author: '한영규', publisher: '건기원', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9788938452108', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기기사+실기+단기완성+건기원+2026' },
  ],

  '품질경영기사': [
    { title: '2026 유튜브와 함께하는 양쌤의 품질경영기사 필기', author: '양희정', publisher: '이나무', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], isbn: '9791191569452', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=양쌤+품질경영기사+필기+이나무+2026' },
    { title: '2026 배극윤의 품질경영기사 필기 - 전2권', author: '배극윤', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9788927460527', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배극윤+품질경영기사+필기+예문사+2026' },
    { title: '2026 한번에 합격하는 품질경영기사 필기', author: '염경철', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9788931585339', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+품질경영기사+필기+성안당+2026' },
    { title: '2026 유튜브와 함께하는 양쌤의 품질경영기사 실기', author: '양희정', publisher: '이나무', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791191569476', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=양쌤+품질경영기사+실기+이나무+2026' },
    { title: '2026 배극윤의 품질경영기사 필기 문제풀이 - 전2권', author: '배극윤', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9788927460640', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배극윤+품질경영기사+필기+문제풀이+예문사+2026' },
    { title: '2026 한번에 합격하는 품질경영기사 실기', author: '염경철', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9788931585346', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+품질경영기사+실기+성안당+2026' },
    { title: '2025 시대에듀 Win-Q 품질경영기사 필기 단기합격', author: '박병호', publisher: '시대에듀', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], isbn: '9791138387828', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+품질경영기사+필기+단기합격+시대에듀' },
    { title: '2025 품질경영기사 필기 과년도 출제문제', author: '정현석', publisher: '일진사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788942919819', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=품질경영기사+필기+과년도+출제문제+일진사' },
    { title: '2026 품질경영기사 필기 단기완성', author: '배극윤', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9791156564089', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=품질경영기사+필기+단기완성+예문사+2026' },
    { title: '2026 품질경영기사 실기 단기완성', author: '양희정', publisher: '이나무', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791156560234', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=품질경영기사+실기+단기완성+이나무+2026' },
  ],

  '대기환경기사': [
    { title: '2027 에듀윌 대기환경기사 필기 4주끝장 + 무료특강', author: '이찬범', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791136042972', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+대기환경기사+필기+4주끝장' },
    { title: '2026 나합격 대기환경기사 필기 + 무료특강', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9791194997115', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+대기환경기사+필기+무료특강+2026' },
    { title: '2026 물쌤닷컴 대기환경기사/산업기사 필기 + 모의고사', author: '최혁재', publisher: '미교원', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791194457152', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+대기환경기사+산업기사+필기+모의고사+2026' },
    { title: '2026 나합격 대기환경기사 실기 + 무료특강', author: '김현우', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9791194997757', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+대기환경기사+실기+무료특강+2026' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 대기환경기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9791173491412', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+대기환경기사+실기+2026' },
    { title: '2026 에듀윌 대기환경기사 실기 2주끝장 + 무료특강', author: '이찬범', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791136040534', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+대기환경기사+실기+2주끝장+2026' },
    { title: '2026 물쌤닷컴 대기환경기사 산업기사 실기 + 기출해설', author: '최혁재', publisher: '미교원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791194457169', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+대기환경기사+산업기사+실기+기출해설+2026' },
    { title: '2026 합격Easy 대기환경기사 실기', author: '신은상', publisher: '건기원', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791157679294', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=합격Easy+대기환경기사+실기+건기원+2026' },
    { title: '2026 한번에 합격하는 대기환경기사 필기 기출문제집', author: '서성석', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9788931585353', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+대기환경기사+필기+기출문제집+2026' },
    { title: '2026 대기환경기사 필기 단기완성', author: '이찬범', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791138347013', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=대기환경기사+필기+단기완성+에듀윌+2026' },
  ],

  '수질환경기사': [
    { title: '2027 에듀윌 수질환경기사 필기 4주끝장+무료특강', author: '정윤성', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791136042798', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+수질환경기사+필기+4주끝장' },
    { title: '2026 나합격 수질환경기사 필기+무료특강+온라인CBT', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], isbn: '9791194997108', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+수질환경기사+필기+무료특강+온라인CBT+2026' },
    { title: '2026 물쌤닷컴 수질환경기사/산업기사 필기 + 기출해설', author: '이종혁', publisher: '미교원', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791194457138', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+수질환경기사+산업기사+필기+기출해설+2026' },
    { title: '2026 수질환경기사 필기 + 과년도 + 무료동영상', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9791136042798', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수질환경기사+필기+과년도+무료동영상+구민사+2026' },
    { title: '2026 나합격 수질환경기사 실기+무료특강', author: '김현우', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], isbn: '9791194997740', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+수질환경기사+실기+무료특강+2026' },
    { title: '2026 직8딴 수질환경기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791173491436', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+수질환경기사+실기+2026' },
    { title: '2026 에듀윌 수질환경기사 실기 2주끝장+무료특강', author: '이찬범', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], isbn: '9791136050434', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+수질환경기사+실기+2주끝장+2026' },
    { title: '2026 물쌤닷컴 수질환경기사 산업기사 실기 + 기출해설', author: '이종혁', publisher: '미교원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791194457145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+수질환경기사+산업기사+실기+기출해설+2026' },
    { title: '2026 수질환경기사 필기 단기완성', author: '정윤성', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791136042798', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수질환경기사+필기+단기완성+에듀윌+2026' },
    { title: '2026 수질환경기사 실기 단기완성', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791160452457', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수질환경기사+실기+단기완성+구민사+2026' },
  ],

  '비파괴검사기사': [
    { title: '방사선비파괴검사 문제 & 해설 (기사.산업기사 / 기능사 공통)', author: '여화연', publisher: '일진사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9788942911592', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선비파괴검사+문제+해설+일진사' },
    { title: '비파괴검사기사 문제해설', author: '여화연', publisher: '일진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], isbn: '9788942903399', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기사+문제해설+일진사' },
    { title: '침투비파괴검사 산업기사·기사 실기 필답형', author: '조정현', publisher: '피앤피북', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791194085607', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=침투비파괴검사+산업기사+기사+실기+필답형' },
    { title: '금속재료 - 비파괴검사 기사.산업기사 수험서', author: '권호영 외', publisher: '선학출판사', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791194085607', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사+기사+산업기사+수험서+선학출판사' },
    { title: '2026 비파괴검사기사 필기 기출문제 풀이', author: '여화연', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], isbn: '9791194085607', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기사+필기+기출문제+풀이+2026' },
    { title: '2026 비파괴검사기사 실기 핵심이론', author: '조정현', publisher: '피앤피북', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791194085607', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기사+실기+핵심이론+2026' },
    { title: '2026 비파괴검사산업기사 필기 기출문제', author: '여화연', publisher: '일진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791194085607', imageUrl: null, pageUrl: 'https://search.kyoBOok.co.kr/search?keyword=비파괴검사산업기사+필기+기출문제+2026' },
    { title: '2026 초음파비파괴검사 기사·산업기사 필기', author: '여화연', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791194085607', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초음파비파괴검사+기사+산업기사+필기+2026' },
    { title: '2026 비파괴검사기능사 필기 단기합격', author: '조정현', publisher: '피앤피북', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791143406514', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기능사+필기+단기합격+2026' },
    { title: '2026 비파괴검사기사 단기완성', author: '권호영', publisher: '선학출판사', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.2, reviews: 43, tags: ['추천'], isbn: '9791194085607', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기사+단기완성+선학출판사+2026' },
  ],

  '전기공사기사': [
    { title: '2026 전기공사기사 실기', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], isbn: '9791194702306', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+실기+2026' },
    { title: '2026 에듀윌 전기 전기공사기사 필기 7개년 기출문제집', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791136040336', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기공사기사+필기+7개년+2026' },
    { title: '2026 에듀윌 전기 전기공사기사 실기 한권끝장', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], isbn: '9791136041487', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기공사기사+실기+한권끝장+2026' },
    { title: '2026 E90-3 전기공사기사 필기', author: '검정연구회', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9791192810645', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=E90-3+전기공사기사+필기+2026' },
    { title: '2026 전기공사기사 필기 - 최신 8개년 기출문제', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791194702306', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+필기+8개년+기출문제+2026' },
    { title: '2026 전기공사기사 실기 파이널 + 단답형', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791194702351', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+실기+파이널+단답형+2026' },
    { title: '2026 최신판 답이 보인다 30일 단기완성 전기공사기사·산업기사 실기', author: '검정연구회', publisher: '동일출판사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9788938117595', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+산업기사+실기+30일+2026' },
    { title: '2026 D30-3 전기공사기사실기', author: '검정연구회', publisher: '엔트미디어', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791192810850', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=D30-3+전기공사기사+실기+2026' },
    { title: '2026 전기공사기사 필기 파이널 특강', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791194702191', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+필기+파이널+특강+2026' },
    { title: '2026 에듀윌 전기 제어공학 필기', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791136038128', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기+제어공학+필기+2026' },
  ],

  '전기공사산업기사': [
    { title: '2026 전기공사산업기사 실기', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], isbn: '9791192810867', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+실기+2026' },
    { title: '2026 전기공사산업기사 필기 - 최신 8개년 기출문제', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791192810867', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+필기+8개년+2026' },
    { title: '2026 E90-4 전기공사산업기사 필기', author: '검정연구회', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], isbn: '9791192810652', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=E90-4+전기공사산업기사+필기+2026' },
    { title: '2026 완벽대비 전기공사산업기사 필기', author: '검정연구회', publisher: '동일출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9788938117281', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=완벽대비+전기공사산업기사+필기+2026' },
    { title: '2026 D30-4 전기공사산업기사 실기', author: '검정연구회', publisher: '엔트미디어', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], isbn: '9791192810867', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=D30-4+전기공사산업기사+실기+2026' },
    { title: '2026 전기공사산업기사 실기 파이널 + 단답형', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], isbn: '9791194702368', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+실기+파이널+단답형+2026' },
    { title: '2026 전기공사산업기사 필기 파이널 특강', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 119, tags: ['추천'], isbn: '9791194702191', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+필기+파이널+특강+2026' },
    { title: '배울학 전기공사산업기사 1033 필기 10개년 기출문제집', author: '윤석만, 강장규, 황민욱', publisher: '배울학', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791189762391', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배울학+전기공사산업기사+필기+10개년' },
    { title: '2026 최신판 답이 보인다 30일 단기완성 전기공사기사·산업기사 실기', author: '검정연구회', publisher: '동일출판사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], isbn: '9788938117595', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+산업기사+실기+30일+2026' },
    { title: '2026 에듀윌 전기 제어공학 필기+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9791136038128', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기+제어공학+필기+2026' },
  ],

  '전기기능장': [
    { title: '2026 초스피드 전기기능장 필기', author: '김영복', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9788931514438', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능장+필기+2026' },
    { title: '2026 완벽대비 전기기능장 필기', author: '최동원, 황락훈', publisher: '동일출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9788938117106', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=완벽대비+전기기능장+필기+2026' },
    { title: '2026 초스피드 전기기능장 필답형 실기', author: '김영복', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], isbn: '9788931514445', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능장+실기+필답형+2026' },
    { title: '2026 마스터 전기기능장 필기', author: '현명걸, 김동진', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9791192810683', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=마스터+전기기능장+필기+2026' },
    { title: '2026 초단기완성! 전기기능장 필기', author: '이창우', publisher: '책과상상', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.6, reviews: 178, tags: ['베스트'], isbn: '9791169673372', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초단기완성+전기기능장+필기+2026' },
    { title: '초스피드 전기기능장 실기 PLC', author: '김재규', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788931528503', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능장+실기+PLC' },
    { title: '전기기능장 PLC제어 & 시공 실무 마스터', author: '이해춘', publisher: '사이버북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9791193683187', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+PLC제어+시공+실무' },
    { title: '전기기능장 실기 PLC 완전정복', author: '검정연구회', publisher: '이나무', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791191569292', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+실기+PLC+완전정복' },
    { title: '전기기능장 실기 PLC 과년도 기출문제', author: '최병남', publisher: '세진사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791160456844', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+실기+PLC+과년도+기출문제' },
    { title: '전기기능장 실기 - 작업형/필답형 실기총정리', author: '유영규', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9788931514438', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+실기+작업형+필답형' },
  ],

  '전기기능사': [
    { title: '2026 이기적 전기기능사 필기 + 실기 올인원', author: '안경재', publisher: '영진.com', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 567, tags: ['베스트'], isbn: '9788931480290', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+전기기능사+필기+실기+올인원+2026' },
    { title: '2026 에듀윌 전기 전기기능사 필기 한권끝장', author: '유치형, 홍석묵, 최대규', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 456, tags: ['베스트'], isbn: '9791136039194', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+필기+한권끝장+2026' },
    { title: '2026 시대에듀 전기기능사 필기 + 실기 한권합격', author: '김민우, 민지현', publisher: '시대에듀', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9791138397872', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+전기기능사+한권합격+2026' },
    { title: '2026 전기기능사 필기 초단기 CBT 기출문제집', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '종이향기', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], isbn: '9791174910059', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능사+필기+초단기+CBT+기출문제집+2026' },
    { title: '2026 이기적 전기기능사 필기 이론서 + 기출문제집', author: '이재일', publisher: '영진.com', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], isbn: '9788931480757', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+전기기능사+필기+이론서+기출문제집+2026' },
    { title: '2026 에듀윌 전기 전기기능사 실기 한권끝장', author: '최대규, 홍석묵, 유치형', publisher: '에듀윌', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9791136038791', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+실기+한권끝장+2026' },
    { title: '2026 무료 동영상과 함께 공부하는 초스피드 전기기능사 실기', author: '유인종', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9788931514476', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능사+실기+2026' },
    { title: '2026 에듀윌 전기 전기기능사 실기 해설집+도면집+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791136037916', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+실기+해설집+도면집+2026' },
    { title: '전기기능사 실기 바이블 3', author: '신석환, 최경호', publisher: '동일출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], isbn: '9788938117687', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능사+실기+바이블' },
    { title: '2026 박문각 전기기능사 실기 + 무료특강', author: '정용걸', publisher: '박문각', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791175193116', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+전기기능사+실기+2026' },
  ],

  '전기공사기능사': [
    { title: '전기공사기능사', author: '강홍석', publisher: '영원', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 189, tags: ['베스트'], isbn: '9788909026772', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+필기' },
    { title: '전기공사기능사', author: '전기공사검정시험연구회', publisher: '교학사', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.4, reviews: 156, tags: ['베스트'], isbn: '9788909026772', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+교학사' },
    { title: '전기공사기능사', author: '전기기능연구회', publisher: '기문사', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9788909026772', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+기문사' },
    { title: '최신판 전기공사기능사 - 이론요약.문제해설', author: '장영태', publisher: '크라운출판사', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], isbn: '9788931522181', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+이론요약+문제해설' },
    { title: '전기공사기능사 1.2급 - 손자병법 학과문제집', author: '강홍석', publisher: '영원', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.3, reviews: 98, tags: ['베스트'], isbn: '9788931522181', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+학과문제집' },
    { title: '전기공사기능사 - 문제총정리', author: '국가기술자격검정시험연구회', publisher: '학문당', price: 8100, originalPrice: 9000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], isbn: '9788909026772', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+문제총정리' },
    { title: '전기공사 기능사 - 이론요약 문제해설', author: '장영태', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9788931522181', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+이론요약+문제해설+크라운' },
    { title: '전기공사기능사 적중 예상문제집', author: '오철균', publisher: '한국전기학원', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.1, reviews: 65, tags: ['추천'], isbn: '9788987262192', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+적중+예상문제집' },
    { title: '2026 이기적 전기기능사 필기 + 실기 올인원', author: '안경재', publisher: '영진.com', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 54, tags: ['추천'], isbn: '9788931480290', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+전기기능사+올인원+2026' },
    { title: '2026 에듀윌 전기 전기기능사 필기 한권끝장', author: '유치형, 홍석묵, 최대규', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 43, tags: ['추천'], isbn: '9791136039194', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+필기+한권끝장+2026' },
  ],

  // ────────────────────────────────────────
  '화학분석기사': [
    // 베스트셀러 5
    { title: '2026 정나나의 화학분석기사 필기', author: '정나나', publisher: '예문사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], isbn: '9788927461609', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정나나+화학분석기사+필기' },
    { title: '2026 나합격 화학분석기사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791194997306', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+화학분석기사' },
    { title: '2026 한번에 합격하는 화학분석기사 필기', author: '박수경', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], isbn: '9788931585308', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+필기+성안당' },
    { title: '2026 Win-Q 화학분석기사 필기 단기합격', author: '박지은', publisher: '시대에듀', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], isbn: '9791143404145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+화학분석기사' },
    { title: '2026 화학분석기사 필기 기출문제집', author: '김재호', publisher: '예문사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 121, tags: ['베스트'], isbn: '9788927461609', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+기출문제집' },
    // 추천수험서 5
    { title: '2026 에듀윌 화학분석기사 필기 한권끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 98, tags: ['추천'], isbn: '9788927461609', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+화학분석기사' },
    { title: '2026 화학분석기사 핵심이론+기출문제', author: '정나나', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], isbn: '9788927461609', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+핵심이론' },
    { title: '2026 화학분석기사 실기 완전정복', author: '박수경', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], isbn: '9788927461609', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+실기' },
    { title: '2026 화학분석기사 CBT 기출예상문제집', author: '이경호', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], isbn: '9788927461609', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+CBT' },
    { title: '2026 화학분석기사 7개년 과년도 해설집', author: '박지은', publisher: '시대에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9788931585315', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+7개년' },
  ],

  // ────────────────────────────────────────
  '자동차정비기능사': [
    // 베스트셀러 5
    { title: '2026 기분파 자동차정비기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], isbn: '9791194328353', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+자동차정비기능사+필기' },
    { title: '2026 에듀윌 자동차정비기능사 필기 한권끝장', author: '김정혁', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], isbn: '9791136038890', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+자동차정비기능사' },
    { title: '2026 뻥! 뚫린 패스 자동차정비기능사 필기', author: '김연수 외', publisher: '골든벨', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], isbn: '9791158067861', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+골든벨' },
    { title: '2026 자동차정비기능사 필기(+전과목 무료동영상)', author: '이병근', publisher: '예문에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 223, tags: ['베스트'], isbn: '9791194328353', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+무료동영상' },
    { title: '2026 Win-Q 자동차정비기능사 필기 단기합격', author: '함성훈 외', publisher: '시대에듀', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 189, tags: ['베스트'], isbn: '9791143401724', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+자동차정비기능사' },
    // 추천수험서 5
    { title: '2026 자동차정비기능사 필기 최근기출문제', author: '김형진', publisher: '책과상상', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791169673211', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+최근기출' },
    { title: '2026 자동차정비기능사 필기 핵심이론', author: '김광석', publisher: '골든벨', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], isbn: '9791136038890', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+핵심이론' },
    { title: '2026 합격이 보이는 자동차정비기능사 필기', author: '국가기술자격연구회', publisher: '구민사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791143414168', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+구민사' },
    { title: '2026 자동차정비기능사 실기 완전정복', author: '이병근', publisher: '예문에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791194328353', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+실기' },
    { title: '2026 자동차정비기능사 CBT 적중모의고사', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9791163864981', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+CBT' },
  ],

  // ────────────────────────────────────────
  '자동차정비산업기사': [
    // 베스트셀러 5
    { title: '2026 기분파 자동차정비산업기사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 267, tags: ['베스트'], isbn: '9791194328278', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+자동차정비산업기사' },
    { title: '2026 뻥! 뚫린 PASS 자동차정비산업기사 필기', author: '김명준 외', publisher: '골든벨', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791158067908', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+골든벨' },
    { title: '2026 자동차정비산업기사 필기 한권완성', author: '이병근', publisher: '예문에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791163865346', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+한권완성' },
    { title: '2026 합격포인트 자동차정비산업기사 필기', author: '김광석 외', publisher: '골든벨', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 156, tags: ['베스트'], isbn: '9791124114049', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+합격포인트+자동차정비산업기사' },
    { title: '2026 자동차정비산업기사 필기', author: '소철호', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 132, tags: ['베스트'], isbn: '9791194328278', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+필기' },
    // 추천수험서 5
    { title: '자동차정비산업기사 필기', author: '정장만', publisher: '에듀피디', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791194328278', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=자동차정비산업기사+필기+에듀피디' },
    { title: '2026 에듀윌 자동차정비산업기사 필기 한권끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791194328278', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+자동차정비산업기사' },
    { title: '2026 자동차정비산업기사 실기 완전정복', author: '이병근', publisher: '예문에듀', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], isbn: '9791194328278', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+실기' },
    { title: '2026 자동차정비산업기사 CBT 실전모의고사', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791194328278', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+CBT' },
    { title: '2026 자동차정비산업기사 과년도 기출해설', author: '소철호', publisher: '책과상상', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], isbn: '9791194328278', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+과년도' },
  ],

  // ────────────────────────────────────────
  '지게차운전기능사': [
    // 베스트셀러 5
    { title: '2027 박문각 지게차운전기능사 필기 핵심이론서+8개년 기출문제집 세트', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 21510, originalPrice: 23900, discount: '10%', rating: 4.8, reviews: 456, tags: ['베스트'], isbn: '9791176490740', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2027+박문각+지게차운전기능사+세트' },
    { title: '2026 기분파 지게차운전기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], isbn: '9791194328285', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+지게차운전기능사' },
    { title: '2027 박문각 지게차운전기능사 필기 8개년 기출문제집', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791176490641', imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=2027+박문각+지게차운전기능사+기출' },
    { title: '2026 기발한 지게차운전기능사 필기 총정리문제', author: '김준한', publisher: '크라운출판사', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], isbn: '9788940650578', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+크라운' },
    { title: '2026 쩐 기능장의 3일 끝! 지게차운전기능사 필기', author: '전범준', publisher: '직업상점', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9791194695240', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+3일끝' },
    // 추천수험서 5
    { title: '2027 박문각 지게차운전기능사 필기 핵심이론서', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 12510, originalPrice: 13900, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791176490740', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2027+박문각+지게차운전기능사+핵심이론' },
    { title: '2026 에듀윌 지게차운전기능사 필기 독학끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791136039897', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+지게차운전기능사' },
    { title: '2026 Win-Q 지게차운전기능사 필기 단기합격', author: '함성훈', publisher: '시대에듀', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], isbn: '9791143416391', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+지게차운전기능사' },
    { title: '2026 지게차운전기능사 필기 기출문제집', author: '건설기계교육아카데미', publisher: '책과상상', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791176490641', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+기출문제집' },
    { title: '2026 지게차운전기능사 실기 완전정복', author: '김준한', publisher: '크라운출판사', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 108, tags: ['추천'], isbn: '9791176490641', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+실기' },
  ],

  // ────────────────────────────────────────
  '굴착기운전기능사': [
    // 베스트셀러 5
    { title: '2026 기분파 굴착기운전기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 412, tags: ['베스트'], isbn: '9791194328322', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+굴착기운전기능사+필기' },
    { title: '2026 에듀윌 굴착기운전기능사 독학으로 필기끝장', author: '김은남', publisher: '에듀윌', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791136040299', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+굴착기운전기능사' },
    { title: '2026 확! 바뀐 굴착기운전기능사 필기', author: '전국중장비교사협의회', publisher: '골든벨', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], isbn: '9791158064549', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+굴착기운전기능사+골든벨' },
    { title: '2026 박문각 취밥러 굴착기운전기능사 필기', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 12510, originalPrice: 13900, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], isbn: '9791175191037', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+박문각+굴착기운전기능사' },
    { title: '2026 굴착기운전기능사 필기 기출문제', author: '건설기계교육아카데미', publisher: '책과상상', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791169673037', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+굴착기운전기능사+기출문제' },
    // 추천수험서 5
    { title: '굴착기운전기능사 필기', author: '국가기술자격시험연구회', publisher: '구민사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], isbn: '9791194328322', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=굴착기운전기능사+필기+구민사' },
    { title: '2026 굴착기운전기능사 필기+실기 완전정복', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791194328322', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+굴착기운전기능사+완전정복' },
    { title: '2026 Win-Q 굴착기운전기능사 필기 단기합격', author: '함성훈', publisher: '시대에듀', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], isbn: '9788940651377', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+굴착기운전기능사' },
    { title: '2026 굴착기운전기능사 실기 코스별 요령', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791194328322', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+굴착기운전기능사+실기' },
    { title: '2026 굴착기운전기능사 필기 핵심요약 노트', author: '전국중장비교사협의회', publisher: '골든벨', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791194328322', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+굴착기운전기능사+핵심요약' },
  ],

  // ────────────────────────────────────────
  '소방설비기능사(전기)': [
    { title: '2026 대해부 7개년 기출문제 소방설비기사 전기 필기', author: '공하성', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218839670'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218839670' },
    { title: '2026 에듀윌 소방설비기사 전기 기출문제집 필기', author: '손익희', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], imageUrl: KB('S000219195829'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219195829' },
    { title: '2026 소방설비기사 필기(전기분야)', author: '표정은', publisher: '동화기술', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.5, reviews: 134, tags: ['베스트'], imageUrl: KB('S000217529077'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217529077' },
    { title: '2026 찐합격 7개년 과년도 소방설비기사 전기 필기', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.5, reviews: 112, tags: ['베스트'], imageUrl: KB('S000218276598'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218276598' },
    { title: '2026 체크업 소방설비기사·산업기사 기계 필기', author: '김종상', publisher: '일진사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 98, tags: ['베스트'], imageUrl: KB('S000218934350'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218934350' },
    { title: '2026 소방설비기사 실기 전기 완전정복', author: '공하성', publisher: '성안당', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 145, tags: ['추천'], isbn: '9788927439103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+실기+전기' },
    { title: '2026 소방설비기사 핵심요약 소방전기시설론', author: '공하성', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9791186028582', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+소방전기시설론' },
    { title: '2026 벼락치기 소방설비기사 전기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788931513844', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+벼락치기+전기' },
    { title: '2026 소방설비기사 전기 CBT 최신기출', author: '이현철', publisher: '일진사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9788969656841', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+전기+CBT' },
    { title: '소방관계법규 핵심정리', author: '공하성', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791167043597', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방관계법규+핵심정리' },
  ],

  // ────────────────────────────────────────
  '소방설비기능사(기계)': [
    { title: '2026 에듀윌 소방설비기사 기계 기출문제집 필기', author: '김윤수', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 178, tags: ['베스트'], imageUrl: KB('S000216719513'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216719513' },
    { title: '2026 소방설비기사 필기 최근 기출문제: 기계편', author: '강석민', publisher: '동화기술', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], imageUrl: KB('S000217127579'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217127579' },
    { title: '2026 체크업 소방설비기사·산업기사 기계 1차 필기', author: '김종상', publisher: '일진사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 134, tags: ['베스트'], imageUrl: KB('S000218934350'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218934350' },
    { title: '2026 찐합격 7개년 과년도 소방설비기사 기계 필기', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.4, reviews: 112, tags: ['베스트'], imageUrl: KB('S000218276598'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218276598' },
    { title: '2026 소방설비기사 필기 기계분야', author: '표정은', publisher: '동화기술', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.4, reviews: 98, tags: ['베스트'], isbn: '9788931514179', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+필기+기계분야' },
    { title: '2026 소방설비기사 실기 기계 완전정복', author: '공하성', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 132, tags: ['추천'], isbn: '9788927439295', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+실기+기계' },
    { title: '2026 소방설비기사 소방기계시설론 핵심이론', author: '공하성', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791136017611', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+소방기계시설론' },
    { title: '2026 벼락치기 소방설비기사 기계 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791186028582', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+벼락치기+기계' },
    { title: '2026 소방설비기사 기계 CBT 최신기출', author: '이현철', publisher: '일진사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9788969656254', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+기계+CBT' },
    { title: '2026 소방설비기사 수계 및 화재진압시스템', author: '손석규', publisher: '예문사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791136017611', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+수계+화재진압' },
  ],

  // ────────────────────────────────────────
  'SQLP': [
    { title: '2024 국가공인 SQLP 자격검정 핵심노트 1', author: '조시형', publisher: '디비안(DBian)', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], imageUrl: KB('S000213913597'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213913597' },
    { title: '국가공인 SQLP 자격검정 핵심노트 1', author: '조시형', publisher: '디비안(DBian)', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.8, reviews: 567, tags: ['베스트'], imageUrl: KB('S000001953873'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001953873' },
    { title: 'SQL 자격검정 실전문제', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], imageUrl: KB('S000212021705'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212021705' },
    { title: 'SQL 전문가 가이드 (공식 교재)', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: KB('S000001399869'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001399869' },
    { title: '국가공인 SQLP 자격검정 핵심노트 2', author: '조시형', publisher: '디비안(DBian)', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], isbn: '9791191941098', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=SQLP+자격검정+핵심노트+2' },
    { title: 'SQLP 최신 기출문제 완전분석', author: '이병국', publisher: '다올출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791191941098', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=SQLP+최신기출문제' },
    { title: '친절한 SQL 튜닝', author: '조시형', publisher: '디비안(DBian)', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 534, tags: ['추천'], isbn: '9791196395704', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=친절한+SQL+튜닝' },
    { title: '오라클 성능 고도화 원리와 해법 1', author: '조시형', publisher: '비투엔컨설팅', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 312, tags: ['추천'], isbn: '9791191941043', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=오라클+성능고도화+원리와해법' },
    { title: 'SQL 레벨업', author: '미크', publisher: '한빛미디어', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], isbn: '9788968482519', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=SQL+레벨업' },
    { title: '데이터베이스 개론', author: '김연희', publisher: '한빛아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 189, tags: ['추천'], isbn: '9791156645771', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=데이터베이스+개론+김연희' },
  ],

  // ────────────────────────────────────────
  '정보처리기능사': [
    { title: '2025 이기적 정보처리기능사 실기 기본서', author: '임승현', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('S000214936721'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214936721' },
    { title: '2025 시나공 정보처리기능사 실기 기본서', author: '길벗알앤디', publisher: '길벗', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 256, tags: ['베스트'], imageUrl: KB('S000214490446'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214490446' },
    { title: '2026 이기적 정보처리기능사 필기 기본서', author: '영진정보연구소', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9788931479737', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+정보처리기능사+필기' },
    { title: '2026 정보처리기능사 필기 한권으로 합격', author: '신용권', publisher: '성안당', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], isbn: '9788940636183', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+정보처리기능사+성안당' },
    { title: '2026 정보처리기능사 기출문제 완전분석', author: '이미영', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9791136030269', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보처리기능사+기출문제' },
    { title: '2026 정보처리기능사 CBT 실전 모의고사', author: '서경선', publisher: '엠페이퍼', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9791136030269', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보처리기능사+CBT' },
    { title: '2026 정보처리기능사 필기 단기완성', author: '홍길동', publisher: '동일출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9788940690697', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보처리기능사+단기완성' },
    { title: '2026 정보처리기능사 실기 파이썬+SQL', author: '이지현', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9791136030269', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보처리기능사+실기+파이썬' },
    { title: '2026 정보처리기능사 핵심이론+기출문제', author: '정보처리연구회', publisher: '예문사', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9788931468595', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보처리기능사+핵심이론' },
    { title: '2026 Win-Q 정보처리기능사 필기 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.2, reviews: 65, tags: ['추천'], isbn: '9788931479744', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+정보처리기능사' },
  ],

  // ────────────────────────────────────────
  '정보보안산업기사': [
    { title: '2026 알기사 정보보안기사(산업기사) 필기+핵심기출 1200제 세트', author: '조현준', publisher: '지안에듀', price: 54000, originalPrice: 60000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218322836'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218322836' },
    { title: '2026 알기사 정보보안기사(산업기사) 실기', author: '정일영', publisher: '지안에듀', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000219083573'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219083573' },
    { title: '2026 이기적 정보보안기사 필기+실기 올인원', author: '임호진', publisher: '영진닷컴', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218331600'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218331600' },
    { title: '2026 이기적 정보보안기사 실기 기출 600제', author: '임호진', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000219382035'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219382035' },
    { title: '2026 수제비 정보보안기사 실기 기본서', author: '윤영빈', publisher: '수제비', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], imageUrl: KB('S000219127791'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219127791' },
    { title: '2026 정보보안산업기사 필기 핵심이론+기출', author: '이병권', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9788966113217', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보보안산업기사+필기' },
    { title: '2026 정보보안 법령 및 정책 완전정복', author: '박진일', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788966113422', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보보안+법령+정책' },
    { title: '2026 정보보안기사·산업기사 CBT 기출문제집', author: '시대에듀 편집부', publisher: '시대에듀', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9788966113217', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보보안기사+CBT+기출' },
    { title: '2026 네트워크 보안·시스템 보안 단기완성', author: '최철환', publisher: '한빛미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791199551084', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네트워크보안+시스템보안' },
    { title: '2026 정보보안기사 벼락치기 핵심요약', author: '권세용', publisher: '세화', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 65, tags: ['추천'], isbn: '9788966113217', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보보안기사+벼락치기' },
  ],

  // ────────────────────────────────────────
  '네트워크관리사1급': [
    { title: '2026 최적합 네트워크관리사 1·2급 필기+실기', author: '허준·선세리', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000216966558'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216966558' },
    { title: '이기적 네트워크관리사 1·2급 필기+실기 올인원', author: '영진닷컴 편집부', publisher: '영진닷컴', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218204635'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218204635' },
    { title: '이기적 네트워크관리사 1·2급 필기+실기 올인원 (구판)', author: '영진닷컴 편집부', publisher: '영진닷컴', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000214158140'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214158140' },
    { title: '2026 네트워크관리사 1급 필기 기출문제집', author: '시대에듀 편집부', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9788931481211', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네트워크관리사+1급+필기' },
    { title: '2026 네트워크관리사 1급 실기 완전정복', author: '허준', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 112, tags: ['베스트'], isbn: '9788931481211', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네트워크관리사+1급+실기' },
    { title: '2026 TCP/IP 핵심 정리', author: '진강훈', publisher: '한빛미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9791185890678', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=TCP+IP+핵심정리+2026' },
    { title: '네트워크 개론', author: '진강훈', publisher: '한빛아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], isbn: '9791156644521', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=네트워크+개론+진강훈' },
    { title: '모두의 네트워크', author: '미즈구치 카츠야', publisher: '길벗', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 678, tags: ['추천'], isbn: '9791140707218', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모두의+네트워크' },
    { title: '네트워크 보안 에센셜', author: '윌리엄 스톨링스', publisher: '피어슨에듀케이션코리아', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.3, reviews: 123, tags: ['추천'], isbn: '9791185504766', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=네트워크+보안+에센셜' },
    { title: '2026 네트워크관리사 단기합격 비법노트', author: '최성욱', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9788931584905', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네트워크관리사+단기합격' },
  ],

  // ────────────────────────────────────────
  '네트워크관리사2급': [
    { title: '2026 최적합 네트워크관리사 1·2급 필기+실기', author: '허준·선세리', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000216966558'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216966558' },
    { title: '이기적 네트워크관리사 1·2급 필기+실기 올인원', author: '영진닷컴 편집부', publisher: '영진닷컴', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218204635'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218204635' },
    { title: '2026 네트워크관리사 2급 필기 단기완성', author: '선세리', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9788956741659', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네트워크관리사+2급+단기완성' },
    { title: '2026 네트워크관리사 2급 기출문제집', author: '시대에듀 편집부', publisher: '시대에듀', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9788931481211', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네트워크관리사+2급+기출' },
    { title: '2026 Win-Q 네트워크관리사 2급 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['베스트'], isbn: '9788931584905', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+네트워크관리사+2급' },
    { title: '모두의 네트워크', author: '미즈구치 카츠야', publisher: '길벗', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 678, tags: ['추천'], isbn: '9791140707218', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모두의+네트워크' },
    { title: 'TCP/IP 쉽게, 더 쉽게', author: '마스이 토시카츠', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 345, tags: ['추천'], isbn: '9791185890678', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=TCP+IP+쉽게+더+쉽게' },
    { title: '2026 네트워크관리사 2급 CBT 모의고사', author: '정보통신연구회', publisher: '예문사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9788931481211', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네트워크관리사+2급+CBT' },
    { title: '네트워크 기초 완성', author: '강진우', publisher: '한빛미디어', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 156, tags: ['추천'], isbn: '9788931554823', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=네트워크+기초+완성' },
    { title: '2026 네트워크관리사 핵심요약 노트', author: '허준', publisher: '성안당', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9788931481211', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네트워크관리사+핵심요약' },
  ],

  // ────────────────────────────────────────
  '리눅스마스터1급': [
    { title: '2026 이기적 리눅스마스터 1급(1·2차) 기본서 세트', author: '김윤수·최정현', publisher: '영진닷컴', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218968390'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218968390' },
    { title: '2025 이기적 리눅스마스터 1급(1·2차)', author: '김윤수', publisher: '영진닷컴', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000214883324'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214883324' },
    { title: 'Rocky Linux8로 리눅스마스터 1급 정복하기', author: '정성재', publisher: '한빛미디어', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000212567319'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212567319' },
    { title: '리눅스마스터 2급 한권으로 끝내기', author: '박성업', publisher: '한빛미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000211514857'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000211514857' },
    { title: '2026 리눅스마스터 1급 기출문제집', author: '시대에듀 편집부', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9791195609857', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+리눅스마스터+1급+기출' },
    { title: '리눅스 커맨드라인 완벽 입문서', author: '윌리엄 E. 샤츠 주니어', publisher: '비제이퍼블릭', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 456, tags: ['추천'], isbn: '9788994774299', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=리눅스+커맨드라인+완벽입문서' },
    { title: '이것이 리눅스다 (개정판)', author: '우재남', publisher: '한빛미디어', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 389, tags: ['추천'], isbn: '9791169213028', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이것이+리눅스다+개정판' },
    { title: '유닉스·리눅스 프로그래밍 필수 유틸리티', author: '백창우', publisher: '한빛미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 234, tags: ['추천'], isbn: '9788979147599', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=유닉스+리눅스+프로그래밍+필수유틸리티' },
    { title: '2026 리눅스마스터 1급 핵심요약+기출', author: '최정현', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791162891193', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+리눅스마스터+1급+핵심요약' },
    { title: '리눅스 시스템 관리 실무', author: '조훈·심효섭', publisher: '위키북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791185123738', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=리눅스+시스템+관리+실무' },
  ],

  // ────────────────────────────────────────
  '리눅스마스터2급': [
    { title: '리눅스마스터 2급 한권으로 끝내기', author: '박성업', publisher: '한빛미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000211514857'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000211514857' },
    { title: '2025 이기적 리눅스마스터 2급 1·2차', author: '권소라', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000214822089'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214822089' },
    { title: '2026 이기적 리눅스마스터 1급(1·2차) 기본서 세트', author: '김윤수·최정현', publisher: '영진닷컴', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218968390'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218968390' },
    { title: '2026 리눅스마스터 2급 필기+실기 완전정복', author: '시대에듀 편집부', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9788931481419', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+리눅스마스터+2급+필기+실기' },
    { title: '2026 리눅스마스터 2급 기출문제집', author: '영진닷컴 편집부', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9791195609833', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+리눅스마스터+2급+기출' },
    { title: '이것이 리눅스다 (개정판)', author: '우재남', publisher: '한빛미디어', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 389, tags: ['추천'], isbn: '9791169213028', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이것이+리눅스다+개정판' },
    { title: '리눅스 커맨드라인 완벽 입문서', author: '윌리엄 E. 샤츠 주니어', publisher: '비제이퍼블릭', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 456, tags: ['추천'], isbn: '9788994774299', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=리눅스+커맨드라인+완벽입문서' },
    { title: '2026 리눅스마스터 2급 핵심요약+기출', author: '권소라', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9788931481419', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+리눅스마스터+2급+핵심요약' },
    { title: '2026 Win-Q 리눅스마스터 2급 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791124516232', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+리눅스마스터+2급' },
    { title: '리눅스 기초부터 실습까지', author: '조성재', publisher: '생능출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9791124516232', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=리눅스+기초+실습' },
  ],

  // ────────────────────────────────────────
  '자동차정비기사': [
    { title: '2026 패스 자동차정비기사 필기', author: '박만재·국창호·문학훈', publisher: '골든벨', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218935739'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218935739' },
    { title: '2026 자동차정비기사 필기 핵심이론+기출문제', author: '국가기술자격시험연구회', publisher: '예문사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791158063146', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기사+필기+예문사' },
    { title: '2026 자동차정비기사 과년도 기출문제 해설', author: '이상도', publisher: '세화', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], isbn: '9791158063146', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기사+과년도+세화' },
    { title: '2026 자동차정비기사 실기 완전정복', author: '박만재', publisher: '골든벨', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9791158063146', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기사+실기' },
    { title: '2026 자동차정비기사 CBT 최신기출문제', author: '이현철', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], isbn: '9791158063146', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기사+CBT' },
    { title: '2026 자동차정비기사 엔진구조학 핵심정리', author: '정재수', publisher: '세화', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791155866313', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기사+엔진구조학' },
    { title: '2026 자동차정비기사 자동차섀시 단기완성', author: '김현우', publisher: '삼원북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9791155866313', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기사+자동차섀시' },
    { title: '2026 자동차정비기사 전기장치정비 완성', author: '이철한', publisher: '예문사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791155866313', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기사+전기장치' },
    { title: '2026 자동차정비기사 벼락치기 핵심요약', author: '박명훈', publisher: '성안당', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.2, reviews: 65, tags: ['추천'], isbn: '9791194328278', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기사+벼락치기' },
    { title: '2026 Win-Q 자동차정비기사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.2, reviews: 54, tags: ['추천'], isbn: '9791155866313', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+자동차정비기사' },
  ],

  // ────────────────────────────────────────
  '자동차정비기능장': [
    { title: '최신판 자동차정비기능장 필기', author: '전봉준·고동원', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000214983155'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214983155' },
    { title: '2026 자동차정비기능장 필기 핵심이론+기출', author: '국가기술자격시험연구회', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 156, tags: ['베스트'], isbn: '9791163864981', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능장+필기' },
    { title: '2026 자동차정비기능장 과년도 기출문제집', author: '이상도', publisher: '세화', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9791168756632', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능장+과년도' },
    { title: '2026 자동차정비기능장 실기 완전정복', author: '박만재', publisher: '골든벨', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 112, tags: ['베스트'], isbn: '9791168756632', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+자동차정비기능장+실기' },
    { title: '2026 자동차정비기능장 CBT 최신기출', author: '이현철', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 87, tags: ['베스트'], isbn: '9791163864981', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능장+CBT' },
    { title: '2026 자동차 고장진단 전문가 과정', author: '김성진', publisher: '골든벨', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791124114285', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=자동차+고장진단+전문가' },
    { title: '자동차 엔진전자제어 실무', author: '신완섭', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9788963451060', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=자동차+엔진전자제어+실무' },
    { title: '자동차 하이브리드·전기차 정비 실무', author: '문석원', publisher: '골든벨', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791124114285', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=자동차+하이브리드+전기차+정비' },
    { title: '2026 자동차정비기능장 핵심요약노트', author: '전봉준', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791168756632', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능장+핵심요약' },
    { title: '자동차 전자제어 시스템 완전정복', author: '정병연', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.2, reviews: 65, tags: ['추천'], isbn: '9788931535211', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=자동차+전자제어+시스템+완전정복' },
  ],

  // ────────────────────────────────────────
  '수질환경산업기사': [
    { title: '2026 수질환경기사·산업기사 필기', author: '이철한', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218914137'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218914137' },
    { title: '2026 물쌤닷컴 수질환경기사/산업기사 필기+기출해설 세트', author: '이종혁', publisher: '미교원', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218615044'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218615044' },
    { title: '2026 수질환경기사, 산업기사 필기', author: '신동성·하부영', publisher: '세진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218854932'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218854932' },
    { title: '2026 수질환경산업기사 과년도 기출문제집', author: '이순규', publisher: '예문사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], isbn: '9791194457145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+수질환경산업기사+과년도' },
    { title: '2026 나합격 수질환경산업기사 필기', author: '김현우', publisher: '삼원북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9791194457138', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+수질환경산업기사+나합격' },
    { title: '2026 수질환경산업기사 실기 완전정복', author: '이철한', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791194457145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+수질환경산업기사+실기' },
    { title: '2026 수질환경 CBT 최신기출문제', author: '이현철', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9791136042798', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+수질환경산업기사+CBT' },
    { title: '2026 수질오염공정시험기준 해설', author: '국가기술자격시험연구회', publisher: '구민사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791160456981', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+수질오염공정시험기준' },
    { title: '2026 수질환경산업기사 벼락치기 핵심요약', author: '정재수', publisher: '세화', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], isbn: '9791194457145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+수질환경산업기사+벼락치기' },
    { title: '2026 수질환경산업기사 핵심이론+예상문제', author: '박영태', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791194457145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+수질환경산업기사+핵심이론' },
  ],

  // ────────────────────────────────────────
  '대기환경산업기사': [
    { title: '2026 대기환경기사 필기+과년도+무료동영상+핸드북', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218031344'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218031344' },
    { title: '2026 나합격 대기환경기사 필기+무료특강+온라인 CBT', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218086849'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218086849' },
    { title: '2026 합격Easy 대기환경기사 필기', author: '신은상', publisher: '건기원', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218358598'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218358598' },
    { title: '2026 대기환경산업기사 과년도 기출문제집', author: '이순규', publisher: '예문사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], isbn: '9791194457169', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+대기환경산업기사+과년도' },
    { title: '2026 대기환경산업기사 필기 핵심이론', author: '서영민', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9791194457169', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+대기환경산업기사+성안당' },
    { title: '2026 대기환경산업기사 실기 완전정복', author: '전화택', publisher: '구민사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791194457169', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+대기환경산업기사+실기' },
    { title: '2026 대기환경 CBT 최신기출문제', author: '이현철', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9791173491412', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+대기환경산업기사+CBT' },
    { title: '2026 대기환경산업기사 벼락치기 핵심요약', author: '정재수', publisher: '세화', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 98, tags: ['추천'], isbn: '9791194457169', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+대기환경산업기사+벼락치기' },
    { title: '2026 대기오염공정시험기준 해설', author: '국가기술자격시험연구회', publisher: '구민사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], isbn: '9788942591855', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+대기오염공정시험기준' },
    { title: '2026 대기환경산업기사 핵심요약+예상문제', author: '박영태', publisher: '성안당', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.1, reviews: 65, tags: ['추천'], isbn: '9791168756441', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+대기환경산업기사+핵심요약' },
  ],

  // ────────────────────────────────────────
  '환경산업기사': [
    { title: '2026 수질환경기사·산업기사 필기', author: '이철한', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218914137'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218914137' },
    { title: '2026 대기환경기사 필기+과년도+무료동영상', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 178, tags: ['베스트'], imageUrl: KB('S000218031344'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218031344' },
    { title: '2026 환경기사 필기 핵심이론+기출문제', author: '이순규', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791136042798', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+환경기사+필기+예문사' },
    { title: '2026 환경산업기사 과년도 기출문제집', author: '박영태', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9791194457145', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+환경산업기사+과년도' },
    { title: '2026 나합격 환경산업기사 필기+무료특강', author: '김현우', publisher: '삼원북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 112, tags: ['베스트'], isbn: '9791155866146', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+환경산업기사+나합격' },
    { title: '2026 환경산업기사 실기 완전정복', author: '이철한', publisher: '예문사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], isbn: '9791194457145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+환경산업기사+실기' },
    { title: '2026 환경산업기사 CBT 최신기출', author: '이현철', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791194457145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+환경산업기사+CBT' },
    { title: '2026 환경산업기사 벼락치기', author: '정재수', publisher: '세화', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], isbn: '9791194457145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+환경산업기사+벼락치기' },
    { title: '환경법령 핵심정리', author: '국가기술자격시험연구회', publisher: '구민사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791129056382', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=환경법령+핵심정리' },
    { title: '2026 환경산업기사 핵심이론+예상문제', author: '신은상', publisher: '건기원', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.1, reviews: 65, tags: ['추천'], isbn: '9791194457145', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+환경산업기사+핵심이론' },
  ],

  // ────────────────────────────────────────
  '배관기능사': [
    { title: '2026 배관기능사 필기+실기 한권 완성', author: '국가기술자격시험연구회', publisher: '예문사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000217122019'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217122019' },
    { title: '배관기능사 필기·실기 단기완성', author: '이상휘', publisher: '일진사', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218440656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218440656' },
    { title: '배관기능사 필기', author: '최종만', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], imageUrl: KB('S000216719085'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216719085' },
    { title: '2026 배관기능사 기출문제 완전정복', author: '이상도', publisher: '세화', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.3, reviews: 134, tags: ['베스트'], isbn: '9788927462644', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+배관기능사+기출문제' },
    { title: '2026 Win-Q 배관기능사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], isbn: '9788942920297', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+배관기능사' },
    { title: '2026 배관기능사 실기 핵심요약', author: '국가기술자격시험연구회', publisher: '구민사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.2, reviews: 98, tags: ['추천'], isbn: '9788927462644', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+배관기능사+실기' },
    { title: '2026 배관기능사 필기 핵심이론', author: '강민수', publisher: '예문사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], isbn: '9788927462644', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+배관기능사+핵심이론' },
    { title: '배관 설계·시공 실무 가이드', author: '오진석', publisher: '동일출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 145, tags: ['추천'], isbn: '9788993954128', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=배관+설계+시공+실무' },
    { title: '2026 배관기능사 CBT 모의고사 5세트', author: '배관교육연구회', publisher: '에듀윌', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.1, reviews: 76, tags: ['추천'], isbn: '9788927462644', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+배관기능사+CBT+모의고사' },
    { title: '배관공사 표준시방서 해설', author: '한국배관공학회', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.1, reviews: 65, tags: ['추천'], isbn: '9788942920297', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배관공사+표준시방서+해설' },
  ],

  // ────────────────────────────────────────
  '배관기사': [
    { title: '배관기사 필기 핵심이론+기출문제', author: '한상욱', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9788958432555', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배관기사+필기+핵심이론+기출문제' },
    { title: '배관기사 과년도 문제 해설집', author: '배관기술연구회', publisher: '일진사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 156, tags: ['베스트'], isbn: '9788958432555', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배관기사+과년도+문제+해설집' },
    { title: '배관기사 실기 완전정복', author: '오진석', publisher: '동일출판사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9788958432555', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=배관기사+실기+완전정복' },
    { title: '2026 배관기사 기출문제 완전분석', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], isbn: '9788958432555', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+배관기사+기출문제' },
    { title: '2026 Win-Q 배관기사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.2, reviews: 87, tags: ['베스트'], isbn: '9788958432555', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+배관기사' },
    { title: '배관 설계·시공 실무', author: '오진석', publisher: '동일출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], isbn: '9788993954128', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=배관+설계+시공+실무' },
    { title: '플랜트 배관 설계 실무', author: '김민수', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791187244349', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=플랜트+배관+설계+실무' },
    { title: '2026 배관기사 필기 핵심요약노트', author: '배관기술연구회', publisher: '일진사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9788958432555', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+배관기사+핵심요약노트' },
    { title: '2026 배관기사 CBT 최신기출', author: '이현철', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.1, reviews: 65, tags: ['추천'], isbn: '9788958432555', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+배관기사+CBT' },
    { title: '배관공학 이론과 실제', author: '한국배관공학회', publisher: '기전연구사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.1, reviews: 54, tags: ['추천'], isbn: '9788958432555', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배관공학+이론과+실제' },
  ],

  // ────────────────────────────────────────
  '특수용접기능사': [
    { title: '2023 특수용접기능사 필기', author: '정균호', publisher: '구민사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], imageUrl: KB('S000200014069'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200014069' },
    { title: '2022 고수열강 용접·특수용접기능사 필기실기', author: '정균호', publisher: '구민사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000001763692'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001763692' },
    { title: '용접기능사 필기시험문제 (특수용접 포함)', author: '국가기술자격시험연구회', publisher: '예문사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], imageUrl: KB('S000000642260'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000642260' },
    { title: '2026 특수용접기능사 핵심이론+기출문제', author: '이광호', publisher: '성안당', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.3, reviews: 134, tags: ['베스트'], isbn: '9791158137199', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+특수용접기능사+필기' },
    { title: '2026 Win-Q 특수용접기능사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], isbn: '9791157455393', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+특수용접기능사' },
    { title: '특수용접기능사 실기 핵심기술 TIG·MIG', author: '김철수', publisher: '일진사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], isbn: '9791162481141', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=특수용접기능사+실기+TIG+MIG' },
    { title: '2026 특수용접기능사 과년도 기출해설', author: '최동훈', publisher: '에듀윌', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.2, reviews: 98, tags: ['추천'], isbn: '9791162481141', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+특수용접기능사+과년도' },
    { title: '용접공학 기초', author: '박재원', publisher: '크라운출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], isbn: '9791157455393', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접공학+기초' },
    { title: '특수용접 실무 기술서', author: '한국용접협회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.1, reviews: 76, tags: ['추천'], isbn: '9791157455393', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=특수용접+실무+기술서' },
    { title: '2026 특수용접기능사 CBT 모의고사', author: '용접기술연구회', publisher: '일진사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.1, reviews: 65, tags: ['추천'], isbn: '9791156463429', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+특수용접기능사+CBT' },
  ],

  // ────────────────────────────────────────
  '미용사(일반)': [
    { title: '2026 미용사 일반 필기', author: '김지연', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218629883'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218629883' },
    { title: '2026 에듀윌 일반(헤어)미용사 필기 1주끝장', author: '최묘선', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218235656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218235656' },
    { title: '2026 원큐패스 미용사 일반 필기', author: '김선희', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218681294'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218681294' },
    { title: '2026 시대에듀 답만 외우는 미용사 일반 필기 CBT기출문제', author: '시대에듀 편집부', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000217049157'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217049157' },
    { title: '2026 적중100% 미용사일반 필기시험 총정리문제', author: '크라운출판사 편집부', publisher: '크라운출판사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000217049878'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217049878' },
    { title: '2026 미용사 일반 필기 핵심요약+기출모의', author: '타임 NCS 연구소', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: KB('S000218448172'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218448172' },
    { title: '2026 미용사 일반 실기 완전정복', author: '김지연', publisher: '책과상상', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791175198616', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+미용사+일반+실기' },
    { title: '2026 헤어미용 컬러링+펌 완전정복', author: '미용교육연구회', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9788940649459', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+헤어미용+컬러링+펌' },
    { title: '2026 Win-Q 미용사(일반) 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9788940649459', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+미용사+일반' },
    { title: '2026 미용사 일반 CBT 최신기출문제해설', author: '미용자격연구회', publisher: '일진사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791175198616', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+미용사+일반+CBT' },
  ],

  // ────────────────────────────────────────
  '미용사(피부)': [
    { title: '2026 피부미용사 필기 한권으로 합격하기', author: '황해정·김승아', publisher: '크라운출판사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000217059166'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217059166' },
    { title: '2026 이기적 권쌤TV 미용사(피부) 필기 기본서', author: '권순현', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000219159023'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219159023' },
    { title: '2026 원큐패스 미용사 피부 필기', author: '이지안', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218938455'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218938455' },
    { title: '2026 시대에듀 답만 외우는 미용사 피부 필기 CBT기출문제', author: '시대에듀 편집부', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000219023470'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219023470' },
    { title: '2026 1주일 완성 피부미용사 필기시험 총정리문제', author: '황해정', publisher: '크라운출판사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000217021665'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217021665' },
    { title: '2026 피부미용사 실기 핵심기술', author: '황해정', publisher: '크라운출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791194328360', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+피부미용사+실기' },
    { title: '2026 에듀윌 피부미용사 필기 1주끝장', author: '에듀윌 편집부', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791136039415', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+에듀윌+피부미용사+필기' },
    { title: '2026 피부미용사 CBT 최신기출', author: '피부미용연구회', publisher: '일진사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791194328360', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+피부미용사+CBT' },
    { title: '피부관리 이론과 실제', author: '한국피부미용학회', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9788991985513', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=피부관리+이론과+실제' },
    { title: '2026 Win-Q 미용사(피부) 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9788940650646', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=Win-Q+미용사+피부' },
  ],

  // ────────────────────────────────────────
  '미용사(네일)': [
    { title: '2026 에듀윌 네일미용사(네일아트) 필기 1주끝장+무료특강', author: '민방경', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218096474'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218096474' },
    { title: '2026 2주완성 미용사 네일 필기시험문제', author: '류은주', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218565752'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218565752' },
    { title: '2026 미용사(네일) 필기 완전정복', author: '민방경', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791136039408', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+미용사+네일+필기' },
    { title: '2026 Win-Q 미용사(네일) 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9791175198609', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=Win-Q+미용사+네일' },
    { title: '2026 적중100% 미용사 네일 필기 총정리', author: '크라운출판사 편집부', publisher: '크라운출판사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.4, reviews: 112, tags: ['베스트'], isbn: '9791175198609', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+미용사+네일+필기+총정리' },
    { title: '2026 미용사(네일) 실기 완전정복', author: '민방경', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788995329528', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+미용사+네일+실기' },
    { title: '2026 네일아트 CBT 최신기출문제', author: '네일미용연구회', publisher: '일진사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791194328292', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네일아트+CBT' },
    { title: '네일아트 기초부터 응용까지', author: '김수연', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9791175198609', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=네일아트+기초부터+응용까지' },
    { title: '2026 미용사(네일) 핵심요약 노트', author: '미용자격연구회', publisher: '시대에듀', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791156721567', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+미용사+네일+핵심요약' },
    { title: '젤 네일 아트 테크닉', author: '박지현', publisher: '크라운출판사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.2, reviews: 65, tags: ['추천'], isbn: '9788940624821', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=젤+네일아트+테크닉' },
  ],

  // ────────────────────────────────────────
  '미용사(메이크업)': [
    { title: '2026 기분파 미용사 메이크업 필기', author: '김효정', publisher: '에듀웨이', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000217613656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217613656' },
    { title: '2026 완전합격 미용사 메이크업 필기시험문제', author: '메이크업자격연구회', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218704738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218704738' },
    { title: '2026 적중 100% 합격 미용사 메이크업 필기 총정리문제', author: '크라운출판사 편집부', publisher: '크라운출판사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218565610'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218565610' },
    { title: '2026 미용사(메이크업) 필기 완전정복', author: '김효정', publisher: '에듀웨이', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9791194328308', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+미용사+메이크업+필기' },
    { title: '2026 Win-Q 미용사(메이크업) 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], isbn: '9791175194519', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=Win-Q+미용사+메이크업' },
    { title: '2026 퍼펙트 미용사 메이크업 실기시험문제', author: '김리나', publisher: '크라운출판사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: KB('S000218676679'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218676679' },
    { title: '2026 에듀윌 메이크업 필기 1주끝장', author: '에듀윌 편집부', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791136039385', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+에듀윌+메이크업+필기' },
    { title: '2026 미용사(메이크업) CBT 최신기출', author: '메이크업연구회', publisher: '일진사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791194328308', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+미용사+메이크업+CBT' },
    { title: '색채학과 메이크업 아트', author: '한국메이크업협회', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], isbn: '9791175194519', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=색채학+메이크업+아트' },
    { title: '메이크업 테크닉 완전정복', author: '김리나', publisher: '크라운출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791167692320', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=메이크업+테크닉+완전정복' },
  ],

  // ────────────────────────────────────────
  '식품기사': [
    { title: '2026 해커스 식품산업기사 필기 한권완성 이론+최신기출', author: '권유진', publisher: '해커스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000217941979'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217941979' },
    { title: '2026 식품기사 필기 핵심이론+과년도 기출문제', author: '정진경·유연희', publisher: '예문에듀', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9788969656223', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+식품기사+필기+예문에듀' },
    { title: '2026 나합격 식품기사 필기+무료특강', author: '김현우', publisher: '삼원북스', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9791194997290', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+식품기사+나합격' },
    { title: '2026 식품기사 과년도 기출문제 해설집', author: '이상도', publisher: '세화', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 112, tags: ['베스트'], isbn: '9791143411136', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+식품기사+과년도+기출' },
    { title: '2026 식품기사 실기 완전정복', author: '정진경', publisher: '예문에듀', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.3, reviews: 98, tags: ['베스트'], isbn: '9791143411136', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+식품기사+실기' },
    { title: '2026 식품기사 CBT 최신기출문제', author: '이현철', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9791143411136', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+식품기사+CBT' },
    { title: '2026 식품기사 벼락치기 핵심요약', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791143411136', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+식품기사+벼락치기' },
    { title: '식품위생법 핵심정리', author: '식품기술사연구회', publisher: '구민사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 65, tags: ['추천'], isbn: '9791124342466', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=식품위생법+핵심정리' },
    { title: '식품가공학 총론', author: '김영태', publisher: '광문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.1, reviews: 54, tags: ['추천'], isbn: '9788940650738', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=식품가공학+총론' },
    { title: '2026 Win-Q 식품기사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.1, reviews: 45, tags: ['추천'], isbn: '9788940650738', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+식품기사' },
  ],

  // ────────────────────────────────────────
  '식품산업기사': [
    { title: '2026 식품산업기사 필기', author: '정진경·유연희·이다빈·이아랑', publisher: '예문에듀', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000217049829'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217049829' },
    { title: '2026 해커스 식품산업기사 필기 한권완성', author: '권유진', publisher: '해커스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000217941979'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217941979' },
    { title: '2026 식품산업기사 과년도 기출문제 해설', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9788940650738', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+식품산업기사+과년도' },
    { title: '2026 나합격 식품산업기사 필기+무료특강', author: '김현우', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], isbn: '9791163864967', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+식품산업기사+나합격' },
    { title: '2026 식품산업기사 실기 완전정복', author: '정진경', publisher: '예문에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9788940650738', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+식품산업기사+실기' },
    { title: '2026 식품산업기사 CBT 최신기출', author: '이현철', publisher: '일진사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9788940650738', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+식품산업기사+CBT' },
    { title: '2026 Win-Q 식품산업기사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9788940650738', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=Win-Q+식품산업기사' },
    { title: '2026 식품산업기사 벼락치기 핵심노트', author: '정재수', publisher: '세화', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], isbn: '9788969656445', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+식품산업기사+벼락치기' },
    { title: '식품미생물학 핵심정리', author: '이영진', publisher: '광문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9788981604608', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=식품미생물학+핵심정리' },
    { title: '2026 식품산업기사 핵심이론+예상문제', author: '식품기술연구회', publisher: '구민사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.1, reviews: 65, tags: ['추천'], isbn: '9788969656445', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+식품산업기사+핵심이론' },
  ],

  // ────────────────────────────────────────
  '항공기체기능사': [
    { title: '2026 항공기정비기능사 필기', author: '항공기술교육아카데미', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000217577886'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217577886' },
    { title: '2026 항공기체기능사 필기 핵심이론+기출', author: '국가기술자격시험연구회', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 156, tags: ['베스트'], isbn: '9788940629741', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+항공기체기능사+필기' },
    { title: '2026 항공기체기능사 과년도 기출문제집', author: '이상도', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], isbn: '9788940629741', imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+항공기체기능사+과년도' },
    { title: '2026 항공기체기능사 실기 완전정복', author: '항공기술교육아카데미', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], isbn: '9788940629741', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+항공기체기능사+실기' },
    { title: '2026 Win-Q 항공기체기능사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 87, tags: ['베스트'], isbn: '9791138337601', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=Win-Q+항공기체기능사' },
    { title: '항공기구조 이론과 실제', author: '김태환', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], isbn: '9788966769797', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=항공기구조+이론과+실제' },
    { title: '항공법규 핵심정리', author: '항공기술연구회', publisher: '구민사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791197947506', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=항공법규+핵심정리' },
    { title: '2026 항공기체기능사 CBT 모의고사', author: '항공교육연구회', publisher: '일진사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9788940629741', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+항공기체기능사+CBT' },
    { title: '항공기 기체 정비 실무', author: '신완섭', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.2, reviews: 65, tags: ['추천'], isbn: '9788966769797', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=항공기+기체+정비+실무' },
    { title: '항공역학 개론', author: '박인규', publisher: '경문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.1, reviews: 54, tags: ['추천'], isbn: '9788966769797', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=항공역학+개론' },
  ],

  // ────────────────────────────────────────
  '항공산업기사': [
    { title: '2026 항공산업기사 필기', author: '장성희', publisher: '성안당', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218227489'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218227489' },
    { title: '2026 항공산업기사 필기', author: '항공기술교육아카데미', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000217577896'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217577896' },
    { title: '2026 항공산업기사 과년도 기출문제집', author: '이상도', publisher: '세화', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], isbn: '9788931584073', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+항공산업기사+과년도' },
    { title: '2026 항공산업기사 실기 완전정복', author: '장성희', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9788931584073', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+항공산업기사+실기' },
    { title: '2026 Win-Q 항공산업기사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], isbn: '9791138396103', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=Win-Q+항공산업기사' },
    { title: '항공기 전기·전자 시스템', author: '신완섭', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], isbn: '9791169672931', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=항공기+전기+전자+시스템' },
    { title: '항공기관 이론과 실제', author: '김태환', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9791169672931', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=항공기관+이론과+실제' },
    { title: '2026 항공산업기사 핵심이론+기출문제', author: '항공기술연구회', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9788931584073', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+항공산업기사+핵심이론' },
    { title: '2026 항공산업기사 CBT 최신기출', author: '항공교육연구회', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], isbn: '9788931584073', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=2026+항공산업기사+CBT' },
    { title: '항공법규 완전정복', author: '박인규', publisher: '경문사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791197947506', imageUrl: null, pageUrl: 'https://search.kyobookook.co.kr/search?keyword=항공법규+완전정복' },
  ],

  '영양사': [
    { title: '2026 영양사 국가시험 핵심요약 총정리', author: '대한영양사협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 678, tags: ['베스트'], isbn: '9791143412232', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+국가시험+핵심요약+2026' },
    { title: '2026 영양사 기출문제 완전분석 10개년', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 556, tags: ['베스트'], isbn: '9791156928423', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+기출문제+완전분석+10개년+2026' },
    { title: '2026 영양사 임상영양학·영양교육학 완성', author: '고려의학 편집부', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], isbn: '9791143415103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+임상영양학+영양교육학+2026' },
    { title: '2026 영양사 식사요법·생애주기영양학 핵심', author: '이지현', publisher: '군자출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], isbn: '9791143415103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+식사요법+생애주기영양학+2026' },
    { title: '2026 영양사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], isbn: '9791143415103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+모의고사+5회분+2026' },
    { title: '2026 영양사 식품학·식품위생학 집중공략', author: '김수진', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9791143415103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+식품학+식품위생학+2026' },
    { title: '2026 영양사 단체급식관리·영양사법규 완성', author: '박재현', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], isbn: '9791143415103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+단체급식관리+영양사법규+2026' },
    { title: '2026 영양사 생화학·영양생리학 핵심이론', author: '이민정', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791143415103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+생화학+영양생리학+2026' },
    { title: '2026 영양사 벼락치기 핵심노트', author: '최은정', publisher: '군자출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791143415103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+벼락치기+핵심노트+2026' },
    { title: '2026 영양사 조리원리·식품재료학 완성', author: '한국영양학회 편집부', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791143415103', imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+조리원리+식품재료학+2026' },
  ],

  // ────────────────────────────────────────
  // 국가전문자격증 — 금융·법률·부동산
  // ────────────────────────────────────────
  '공인중개사': [
    { title: '2026 에듀윌 공인중개사 1차 단원별 기출문제집 부동산학개론', author: '이영방', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 3245, tags: ['베스트'], imageUrl: KB('S000219085090'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085090' },
    { title: '2026 에듀윌 공인중개사 1차 단원별 기출문제집 민법 및 민사특별법', author: '심정욱', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: KB('S000219085096'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085096' },
    { title: '2026 에듀윌 공인중개사 1차 부동산학개론 이영방 합격서', author: '이영방', publisher: '에듀윌', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 2134, tags: ['베스트'], imageUrl: KB('S000218640567'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218640567' },
    { title: '2026 박문각 공인중개사 1차 단원별 기출문제집', author: '박문각 공인중개사연구소', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: KB('S000219926627'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219926627' },
    { title: '2026 해커스 공인중개사 1차 단원별 기출문제집 민법 및 민사특별법', author: '채희대', publisher: '해커스패스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1654, tags: ['베스트'], imageUrl: KB('S000219488645'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219488645' },
    { title: '2026 에듀윌 공인중개사 2차 단원별 기출문제집 공인중개사법령 및 중개실무', author: '임선정', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1432, tags: ['추천'], imageUrl: KB('S000219085089'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085089' },
    { title: '2026 에듀윌 공인중개사 2차 단원별 기출문제집 부동산공시법', author: '김민석', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1123, tags: ['추천'], imageUrl: KB('S000219085095'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085095' },
    { title: '2026 박문각 공인중개사 2차 단원별 기출문제집', author: '박문각 공인중개사연구소', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: KB('S000219931403'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219931403' },
    { title: '2026 에듀윌 공인중개사 1차 핵심요약집+기출팩', author: '에듀윌 공인중개사연구소', publisher: '에듀윌', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 876, tags: ['추천'], imageUrl: KB('S000219387826'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219387826' },
    { title: '2026 메가랜드 공인중개사 2차 회차별 기출문제집', author: '메가랜드 부동산교육연구소', publisher: '메가랜드', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 765, tags: ['추천'], imageUrl: KB('S000220452545'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220452545' },
  ],

  '세무사': [
    { title: '2026 세무사 1차 세법학개론 한권으로 끝내기', author: '이철재 외', publisher: '세경북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 1234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세무사+1차+세법학개론+2026' },
    { title: '2026 세무사 1차 회계학개론 한권으로 끝내기', author: '김현식 외', publisher: '세경북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 1098, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세무사+1차+회계학개론+2026' },
    { title: '2026 세무사 2차 세법학 1·2 기출문제집', author: '정정운 외', publisher: '나무와숲', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세무사+2차+세법학+기출문제+2026' },
    { title: '2026 세무사 1차 재정학 핵심이론+기출문제', author: '임병진', publisher: '나무와숲', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세무사+1차+재정학+핵심이론+2026' },
    { title: '2026 세무사 2차 회계학 1·2 기출+예상문제집', author: '최창규 외', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세무사+2차+회계학+기출+예상+2026' },
    { title: '2026 세무사 소득세법·법인세법 계산특강', author: '김경서', publisher: '나무와숲', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세무사+소득세법+법인세법+계산특강+2026' },
    { title: '2026 세무사 부가가치세법 핵심요약+기출', author: '이승철', publisher: '세경북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 456, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세무사+부가가치세법+핵심요약+2026' },
    { title: '2026 세무사 최신 세법 개정사항 총정리', author: '정정운', publisher: '나무와숲', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세무사+최신+세법+개정사항+2026' },
  ],

  '공인회계사': [
    { title: '2026 공인회계사 1차 회계학 한권으로 끝내기', author: '김기동 외', publisher: '나무와숲', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 1456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+1차+회계학+한권으로+2026' },
    { title: '2026 공인회계사 1차 세법개론 핵심이론+기출', author: '이철재', publisher: '세경북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 1234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+1차+세법개론+2026' },
    { title: '2026 공인회계사 1차 경영학 핵심이론+기출', author: '강경태 외', publisher: '나무와숲', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 1098, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+1차+경영학+2026' },
    { title: '2026 공인회계사 2차 재무회계 기출+예상문제', author: '최창규 외', publisher: '나무와숲', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+2차+재무회계+기출+2026' },
    { title: '2026 공인회계사 2차 원가관리회계 기출+예상', author: '임세진', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+2차+원가관리회계+2026' },
    { title: '2026 공인회계사 K-IFRS 핵심요약+기출', author: '이남재 외', publisher: '나무와숲', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 654, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+K-IFRS+핵심요약+2026' },
    { title: '2026 공인회계사 1차 경제원론 핵심이론', author: '정병열', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+1차+경제원론+2026' },
    { title: '2026 공인회계사 2차 세무회계 기출+예상', author: '김문현', publisher: '나무와숲', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 456, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+2차+세무회계+2026' },
  ],

  '감정평가사': [
    { title: '2026 감정평가사 1차 부동산학원론 한권으로 끝내기', author: '강정규 외', publisher: '박문각', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+1차+부동산학원론+2026' },
    { title: '2026 감정평가사 1차 민법 핵심이론+기출문제', author: '이동규', publisher: '박문각', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+1차+민법+핵심이론+2026' },
    { title: '2026 감정평가사 2차 감정평가이론 기출+예상', author: '유선종 외', publisher: '나무와숲', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+2차+감정평가이론+2026' },
    { title: '2026 감정평가사 1차 경제학 핵심이론+기출', author: '정병열', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+1차+경제학+2026' },
    { title: '2026 감정평가사 감정평가 관계법규 핵심이론', author: '이병준', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 456, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+관계법규+핵심이론+2026' },
    { title: '2026 감정평가사 감정평가실무 기출+예상문제', author: '박성용', publisher: '나무와숲', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+감정평가실무+2026' },
    { title: '2026 감정평가사 1차 회계학 핵심요약', author: '강경태', publisher: '나무와숲', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+1차+회계학+2026' },
  ],

  '변리사': [
    { title: '2026 변리사 1차 산업재산권법 한권으로 끝내기', author: '원용수 외', publisher: '세경북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=변리사+1차+산업재산권법+2026' },
    { title: '2026 변리사 2차 특허법 기출+예상문제집', author: '이창현 외', publisher: '나무와숲', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=변리사+2차+특허법+기출+예상+2026' },
    { title: '2026 변리사 1차 민사소송법 핵심이론+기출', author: '정우성 외', publisher: '박문각', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=변리사+1차+민사소송법+2026' },
    { title: '2026 변리사 2차 상표법·디자인보호법 기출', author: '신현호', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=변리사+2차+상표법+디자인보호법+2026' },
    { title: '2026 변리사 특허명세서 작성 실무', author: '김승열 외', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=변리사+특허명세서+작성+실무+2026' },
    { title: '2026 변리사 1차 자연과학개론 핵심이론', author: '이공계 국시연구회', publisher: '세경북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=변리사+1차+자연과학개론+2026' },
    { title: '2026 변리사 최신 특허법원 판례 정리', author: '이창현', publisher: '나무와숲', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 267, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=변리사+최신+특허법원+판례+2026' },
  ],

  '법무사': [
    { title: '2026 법무사 1차 민법 한권으로 끝내기', author: '이동규 외', publisher: '박문각', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=법무사+1차+민법+한권으로+2026' },
    { title: '2026 법무사 1차 민사소송법 핵심이론+기출', author: '정우성 외', publisher: '박문각', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=법무사+1차+민사소송법+2026' },
    { title: '2026 법무사 2차 부동산등기법 기출+예상', author: '김성진 외', publisher: '나무와숲', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=법무사+2차+부동산등기법+2026' },
    { title: '2026 법무사 1차 상법 핵심이론+기출', author: '김훈 외', publisher: '박문각', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=법무사+1차+상법+핵심이론+2026' },
    { title: '2026 법무사 2차 공탁법 기출+예상문제집', author: '신현탁', publisher: '나무와숲', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=법무사+2차+공탁법+기출+2026' },
    { title: '2026 법무사 1차 헌법 핵심이론+기출', author: '정재황 외', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=법무사+1차+헌법+핵심이론+2026' },
    { title: '2026 법무사 등기신청서류 작성 실무', author: '대한법무사협회', publisher: '법률미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 223, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=법무사+등기신청서류+작성+실무+2026' },
  ],

  '공인노무사': [
    { title: '2026 공인노무사 1차 노동법 한권으로 끝내기', author: '이승렬 외', publisher: '세경북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 1123, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인노무사+1차+노동법+한권으로+2026' },
    { title: '2026 공인노무사 2차 노동법 기출+예상문제집', author: '전형배 외', publisher: '나무와숲', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인노무사+2차+노동법+기출+예상+2026' },
    { title: '2026 공인노무사 1차 사회보험법 핵심이론', author: '김대환', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인노무사+1차+사회보험법+2026' },
    { title: '2026 공인노무사 1차 민법 핵심이론+기출', author: '이동규', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=공인노무사+1차+민법+핵심이론+2026' },
    { title: '2026 공인노무사 노동경제학 핵심이론+기출', author: '김성준', publisher: '나무와숲', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인노무사+노동경제학+핵심이론+2026' },
    { title: '2026 공인노무사 2차 인사노무관리 기출+예상', author: '박경규 외', publisher: '세경북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 456, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인노무사+2차+인사노무관리+2026' },
    { title: '2026 공인노무사 최신 노동법 개정사항 총정리', author: '이승렬', publisher: '세경북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인노무사+최신+노동법+개정사항+2026' },
  ],

  '관세사': [
    { title: '2026 관세사 1차 관세법개론 한권으로 끝내기', author: '이재호 외', publisher: '세경북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=관세사+1차+관세법개론+한권으로+2026' },
    { title: '2026 관세사 2차 관세율표·관세평가 기출+예상', author: '정재완 외', publisher: '나무와숲', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=관세사+2차+관세율표+관세평가+2026' },
    { title: '2026 관세사 1차 무역영어 핵심이론+기출', author: '이은정', publisher: '세경북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=관세사+1차+무역영어+핵심이론+2026' },
    { title: '2026 관세사 1차 내국소비세법 핵심이론', author: '이현철', publisher: '나무와숲', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=관세사+1차+내국소비세법+2026' },
    { title: '2026 관세사 2차 통관절차·원산지 집중공략', author: '김원상', publisher: '세경북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=관세사+2차+통관절차+원산지+2026' },
    { title: '2026 관세사 FTA 협정세율 활용 실무', author: '관세사회 편집부', publisher: '나무와숲', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=관세사+FTA+협정세율+활용+2026' },
  ],

  '손해사정사': [
    { title: '2026 손해사정사 1차 보험이론 한권으로 끝내기', author: '김준호 외', publisher: '나무와숲', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=손해사정사+1차+보험이론+2026' },
    { title: '2026 손해사정사 2차 손해사정이론 기출+예상', author: '이병욱 외', publisher: '나무와숲', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=손해사정사+2차+손해사정이론+2026' },
    { title: '2026 손해사정사 의학이론 핵심요약', author: '손해사정연구회', publisher: '나무와숲', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=손해사정사+의학이론+핵심요약+2026' },
    { title: '2026 손해사정사 자동차손해사정 실무', author: '김현진', publisher: '보험연수원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=손해사정사+자동차손해사정+실무+2026' },
    { title: '2026 손해사정사 관련법규 핵심정리', author: '법률 편집부', publisher: '나무와숲', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=손해사정사+관련법규+핵심정리+2026' },
  ],

  '보험계리사': [
    { title: '2026 보험계리사 1차 보험수학 핵심이론+기출', author: '강수정 외', publisher: '보험연수원', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보험계리사+1차+보험수학+핵심이론+2026' },
    { title: '2026 보험계리사 1차 경제학 핵심이론+기출', author: '정병열', publisher: '세경북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보험계리사+1차+경제학+2026' },
    { title: '2026 보험계리사 2차 계리실무 기출+예상', author: '보험계리사협회 편집부', publisher: '보험연수원', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보험계리사+2차+계리실무+2026' },
    { title: '2026 보험계리사 보험업법·관련법규 핵심정리', author: '최준규', publisher: '보험연수원', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 245, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보험계리사+보험업법+관련법규+2026' },
    { title: '2026 보험계리사 회계원리 핵심이론+기출', author: '김동현', publisher: '나무와숲', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보험계리사+회계원리+2026' },
  ],

  '행정사': [
    { title: '2026 에듀윌 행정사 1차 행정법 한권끝장', author: '에듀윌 행정사연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+행정사+1차+행정법+2026' },
    { title: '2026 박문각 행정사 1차 민법 핵심이론+기출', author: '이동규', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+행정사+1차+민법+2026' },
    { title: '2026 행정사 2차 행정사실무법 기출+예상', author: '이병철 외', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=행정사+2차+행정사실무법+2026' },
    { title: '2026 행정사 1차 행정학개론 핵심이론+기출', author: '임도빈 외', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=행정사+1차+행정학개론+2026' },
    { title: '2026 행정사 2차 민원처리·사무관리 실무', author: '행정사국시연구회', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 456, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=행정사+2차+민원처리+사무관리+2026' },
    { title: '2026 행정사 최종 모의고사 5회분', author: '박문각 행정사연구소', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=행정사+최종+모의고사+5회분+2026' },
  ],

  '주택관리사': [
    { title: '2026 에듀윌 주택관리사 1차 한권끝장+무료특강', author: '에듀윌 주택관리사연구소', publisher: '에듀윌', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+주택관리사+1차+한권끝장+2026' },
    { title: '2026 에듀윌 주택관리사 2차 한권끝장+무료특강', author: '에듀윌 주택관리사연구소', publisher: '에듀윌', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+주택관리사+2차+한권끝장+2026' },
    { title: '2026 박문각 주택관리사 1차 기출문제집', author: '박문각 주택관리사연구소', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 1456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+주택관리사+1차+기출문제+2026' },
    { title: '2026 주택관리사 공동주택관리법 핵심요약', author: '전재경', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1123, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=주택관리사+공동주택관리법+핵심요약+2026' },
    { title: '2026 주택관리사 2차 시설관리 핵심이론', author: '이광훈', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=주택관리사+2차+시설관리+핵심이론+2026' },
    { title: '2026 주택관리사 공동주택 회계처리 완성', author: '이현정', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 765, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=주택관리사+공동주택+회계처리+2026' },
    { title: '2026 주택관리사 최종 모의고사 1·2차', author: '에듀윌 주택관리사연구소', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 654, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=주택관리사+최종+모의고사+2026' },
  ],

  // ────────────────────────────────────────
  // 국가전문자격증 — 복지·교육 계열
  // ────────────────────────────────────────
  '사회복지사1급': [
    { title: '2026 에듀윌 사회복지사 1급 한권끝장+무료특강', author: '에듀윌 사회복지사연구소', publisher: '에듀윌', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+사회복지사+1급+한권끝장+2026' },
    { title: '2026 나눔의집 사회복지사 1급 기출문제집 10개년', author: '나눔의집 사회복지사연구소', publisher: '나눔의집', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나눔의집+사회복지사+1급+기출문제+10개년+2026' },
    { title: '2026 박문각 사회복지사 1급 핵심요약집', author: '박문각 사회복지사연구소', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+사회복지사+1급+핵심요약+2026' },
    { title: '2026 시대에듀 사회복지사 1급 한권으로 끝내기', author: '시대사회복지연구소', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 1654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+사회복지사+1급+한권으로+2026' },
    { title: '2026 사회복지사 1급 사회복지법제 핵심정리', author: '윤찬영', publisher: '나눔의집', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회복지사+1급+사회복지법제+핵심정리+2026' },
    { title: '2026 사회복지사 1급 사회복지실천기술론 핵심', author: '엄명용 외', publisher: '학지사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 1123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회복지사+1급+사회복지실천기술론+2026' },
    { title: '2026 사회복지사 1급 모의고사 5회분', author: '나눔의집 사회복지사연구소', publisher: '나눔의집', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=사회복지사+1급+모의고사+5회분+2026' },
    { title: '2026 사회복지사 1급 단기완성 벼락치기', author: '에듀윌 사회복지사연구소', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 876, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회복지사+1급+단기완성+벼락치기+2026' },
  ],

  '청소년상담사': [
    { title: '2026 청소년상담사 3급 한권으로 끝내기', author: '청소년상담사연구회', publisher: '시대고시기획', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년상담사+3급+한권으로+끝내기+2026' },
    { title: '2026 청소년상담사 2급 한권으로 끝내기', author: '청소년상담사연구회', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년상담사+2급+한권으로+끝내기+2026' },
    { title: '2026 청소년상담사 기출문제 완전분석', author: '김형태 외', publisher: '학지사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년상담사+기출문제+완전분석+2026' },
    { title: '2026 청소년상담사 상담이론 핵심요약', author: '이장호 외', publisher: '학지사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년상담사+상담이론+핵심요약+2026' },
    { title: '2026 청소년상담사 청소년 관계법규 핵심정리', author: '법규연구회', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 456, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년상담사+관계법규+핵심정리+2026' },
    { title: '2026 청소년상담사 심리검사 이론과 실제', author: '황순택 외', publisher: '학지사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년상담사+심리검사+이론+2026' },
  ],

  '청소년지도사': [
    { title: '2026 청소년지도사 2·3급 한권으로 끝내기', author: '청소년지도사연구회', publisher: '시대고시기획', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년지도사+2급+3급+한권으로+2026' },
    { title: '2026 청소년지도사 기출문제 완전분석', author: '정건희 외', publisher: '시대고시기획', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 612, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년지도사+기출문제+완전분석+2026' },
    { title: '2026 청소년지도사 청소년활동·복지·문화 핵심', author: '한국청소년활동진흥원', publisher: '학지사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년지도사+청소년활동+복지+문화+2026' },
    { title: '2026 청소년지도사 프로그램개발 핵심이론', author: '조미숙 외', publisher: '학지사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 423, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년지도사+프로그램개발+핵심이론+2026' },
    { title: '2026 청소년지도사 면접 완벽 대비', author: '면접연구회', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 356, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년지도사+면접+완벽+대비+2026' },
    { title: '청소년지도사 관계법규 핵심정리', author: '법규연구회', publisher: '시대고시기획', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 289, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년지도사+관계법규+핵심정리+2026' },
  ],

  '평생교육사': [
    { title: '2026 평생교육사 2급 핵심이론 총정리', author: '평생교육사연구회', publisher: '학지사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 678, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=평생교육사+2급+핵심이론+2026' },
    { title: '2026 평생교육사 기출문제 완전분석', author: '김진화 외', publisher: '학지사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=평생교육사+기출문제+완전분석+2026' },
    { title: '2026 평생교육사 평생교육론·방법론 핵심', author: '권두승 외', publisher: '교육과학사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=평생교육사+평생교육론+방법론+2026' },
    { title: '2026 평생교육사 프로그램개발론 핵심', author: '기영화 외', publisher: '학지사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=평생교육사+프로그램개발론+핵심+2026' },
    { title: '평생교육법·학점인정법 관련법규 핵심정리', author: '법규연구회', publisher: '학지사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=평생교육사+관련법규+핵심정리+2026' },
  ],

  // ────────────────────────────────────────
  // 국가전문자격증 — 건축·기타 계열
  // ────────────────────────────────────────
  '건축사': [
    { title: '2026 건축사 자격시험 대지 계획+건축 계획 종합', author: '건축사시험연구회', publisher: '기문사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축사+자격시험+대지+계획+건축+계획+2026' },
    { title: '2026 건축사 구조 계획+건축 설비 핵심이론', author: '이중한 외', publisher: '기문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축사+구조+계획+건축+설비+핵심이론+2026' },
    { title: '2026 건축사 자격시험 기출과제 완전분석', author: '박성열 외', publisher: '기문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축사+자격시험+기출과제+완전분석+2026' },
    { title: '2026 건축사 건축법규 핵심요약+기출', author: '이정봉', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축사+건축법규+핵심요약+2026' },
    { title: '건축사를 위한 도면 작도 실전 훈련', author: '대한건축사협회', publisher: '기문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축사+도면+작도+실전+훈련' },
    { title: '2026 건축사 예비시험 합격 가이드', author: '건축국시연구회', publisher: '기문사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=건축사+예비시험+합격+가이드+2026' },
  ],

  '수의사': [
    { title: '2026 수의사 국가시험 핵심요약 총정리', author: '수의사국시연구회', publisher: '수의학교육출판부', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수의사+국가시험+핵심요약+2026' },
    { title: '2026 수의사 임상수의학 핵심이론', author: '한국수의사회 편집부', publisher: '수의학교육출판부', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수의사+임상수의학+핵심이론+2026' },
    { title: '2026 수의사 예방수의학·공중보건학 핵심', author: '박봉균 외', publisher: '수의학교육출판부', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수의사+예방수의학+공중보건학+2026' },
    { title: '2026 수의사 기초수의학 핵심이론', author: '전무형 외', publisher: '수의학교육출판부', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=수의사+기초수의학+핵심이론+2026' },
    { title: '2026 수의사 수의약리학+수의법규 핵심정리', author: '이희수 외', publisher: '수의학교육출판부', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수의사+수의약리학+수의법규+2026' },
    { title: '수의사를 위한 소동물 임상 매뉴얼', author: '대한수의사회', publisher: '광일문화사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=수의사+소동물+임상+매뉴얼' },
  ],

  '스포츠지도사': [
    { title: '2026 스포츠지도사 2급 생활스포츠 필기 한권끝장', author: '스포츠지도사연구회', publisher: '시대고시기획', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=스포츠지도사+2급+생활스포츠+필기+2026' },
    { title: '2026 스포츠지도사 필기 기출문제 완전분석', author: '국민체육진흥공단 편집부', publisher: '시대고시기획', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=스포츠지도사+필기+기출문제+완전분석+2026' },
    { title: '2026 스포츠지도사 스포츠심리학+운동생리학 핵심', author: '김선진 외', publisher: '레인보우북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=스포츠지도사+스포츠심리학+운동생리학+2026' },
    { title: '2026 스포츠지도사 운동역학+스포츠사회학 핵심', author: '이상효 외', publisher: '레인보우북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스포츠지도사+운동역학+스포츠사회학+2026' },
    { title: '2026 스포츠지도사 2급 구술·면접 완벽 대비', author: '스포츠지도사연구회', publisher: '시대고시기획', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 456, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스포츠지도사+2급+구술+면접+2026' },
    { title: '스포츠지도사 유소년·노인 스포츠 지도 가이드', author: '대한체육회 편집부', publisher: '레인보우북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스포츠지도사+유소년+노인+스포츠+지도' },
  ],

  '사회조사분석사': [
    { title: '2026 사회조사분석사 2급 한권으로 끝내기', author: '이재원 외', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회조사분석사+2급+한권으로+끝내기+2026' },
    { title: '2026 사회조사분석사 기출문제 완전분석', author: '시대통계연구소', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회조사분석사+기출문제+완전분석+2026' },
    { title: '2026 사회조사분석사 조사방법론 핵심이론', author: '김경회 외', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회조사분석사+조사방법론+핵심이론+2026' },
    { title: '2026 사회조사분석사 사회통계 핵심이론+계산', author: '이준 외', publisher: '시대고시기획', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회조사분석사+사회통계+핵심이론+2026' },
    { title: '2026 사회조사분석사 실기 SPSS 분석 완전정복', author: '구동모 외', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 456, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회조사분석사+실기+SPSS+분석+2026' },
    { title: '2026 사회조사분석사 1급 한권으로 끝내기', author: '이재원 외', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회조사분석사+1급+한권으로+2026' },
    { title: '사회조사 설문지 설계·분석 실전 가이드', author: '차배근 외', publisher: '커뮤니케이션북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회조사+설문지+설계+분석+실전' },
  ],

  // ────────────────────────────────────────
  '안경사': [
    { title: '2026 안경사 국가시험 핵심요약 총정리', author: '안경국시연구회', publisher: '범문에듀케이션', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경사+국가시험+핵심요약+2026' },
    { title: '2026 안경사 국가시험 기출문제 완전분석 10개년', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경사+기출문제+완전분석+10개년+2026' },
    { title: '2026 안경사 시광학·안경광학 핵심이론', author: '이종복', publisher: '신광출판사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경사+시광학+안경광학+핵심이론+2026' },
    { title: '2026 안경사 콘택트렌즈학 집중공략', author: '한국안경사협회', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 215, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경사+콘택트렌즈학+2026' },
    { title: '2026 안경사 모의고사 5회분', author: '안경국시연구회', publisher: '범문에듀케이션', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 178, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경사+모의고사+5회분+2026' },
    { title: '2026 안경사 안경조제·가공 실기 완성', author: '신광출판사 편집부', publisher: '신광출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경사+안경조제+가공+실기+2026' },
    { title: '2026 안경사 의료관계법규 핵심정리', author: '메디시언 편집부', publisher: '메디시언', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경사+의료관계법규+2026' },
    { title: '안경광학 이론과 임상 적용', author: '이건희 외', publisher: '대학서림', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경광학+이론+임상+적용' },
    { title: '2026 안경사 단기완성 핵심노트', author: '최유진', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경사+단기완성+핵심노트+2026' },
    { title: '안경사를 위한 임상 시기능 훈련', author: '박성종 외', publisher: '신광출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경사+임상+시기능+훈련' },
  ],

  // ────────────────────────────────────────
  '언어재활사': [
    { title: '2026 언어재활사 국가시험 핵심요약 총정리', author: '언어치료국시연구회', publisher: '학지사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+국가시험+핵심요약+2026' },
    { title: '2026 언어재활사 국가시험 기출문제 완전분석 10개년', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+기출문제+완전분석+10개년+2026' },
    { title: '2026 언어재활사 조음음운·유창성장애 집중공략', author: '김수진 외', publisher: '학지사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+조음음운+유창성장애+2026' },
    { title: '2026 언어재활사 신경언어장애·언어발달 핵심이론', author: '심현섭 외', publisher: '시그마프레스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+신경언어장애+언어발달+2026' },
    { title: '2026 언어재활사 모의고사 5회분', author: '언어치료국시연구회', publisher: '학지사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+모의고사+5회분+2026' },
    { title: '2026 언어재활사 음성장애·삼킴장애 완성', author: '최성희 외', publisher: '학지사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+음성장애+삼킴장애+2026' },
    { title: '2026 언어재활사 의사소통장애 관련법규 핵심정리', author: '메디시언 편집부', publisher: '메디시언', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+관련법규+2026' },
    { title: '언어재활사를 위한 AAC 보완대체의사소통', author: '이소현 외', publisher: '학지사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 108, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+AAC+보완대체의사소통' },
    { title: '2026 언어재활사 단기완성 핵심노트', author: '박지현', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 94, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+단기완성+핵심노트+2026' },
    { title: '언어재활 임상 실습 가이드', author: '김영태 외', publisher: '학지사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.3, reviews: 82, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활+임상+실습+가이드' },
  ],

  // ────────────────────────────────────────
  '치과기공사': [
    { title: '2026 치과기공사 국가시험 핵심요약 총정리', author: '치기공국시연구회', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 298, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과기공사+국가시험+핵심요약+2026' },
    { title: '2026 치과기공사 국가시험 기출문제 완전분석 10개년', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과기공사+기출문제+완전분석+10개년+2026' },
    { title: '2026 치과기공사 보철기공·도재기공 핵심이론', author: '대한치과기공사협회', publisher: '신광출판사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과기공사+보철기공+도재기공+2026' },
    { title: '2026 치과기공사 교정기공·완전의치 집중공략', author: '신광출판사 편집부', publisher: '신광출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과기공사+교정기공+완전의치+2026' },
    { title: '2026 치과기공사 모의고사 5회분', author: '치기공국시연구회', publisher: '군자출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 145, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과기공사+모의고사+5회분+2026' },
    { title: '치과기공사 CAD/CAM 디지털 기공 실무', author: '이종혁 외', publisher: '대한나래출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과기공사+CAD+CAM+디지털+기공' },
    { title: '2026 치과기공사 의료관계법규 핵심정리', author: '메디시언 편집부', publisher: '메디시언', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과기공사+의료관계법규+2026' },
    { title: '치과기공사 임플란트 보철 제작 실무', author: '한국치과기공사협회', publisher: '군자출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과기공사+임플란트+보철+제작' },
    { title: '2026 치과기공사 단기완성 핵심노트', author: '박찬현', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과기공사+단기완성+핵심노트+2026' },
    { title: '치과 재료학 이론과 실습', author: '대한치과기공학회', publisher: '신광출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과+재료학+이론+실습' },
  ],

  // ────────────────────────────────────────
  '조산사': [
    { title: '2026 조산사 국가시험 핵심요약 총정리', author: '조산사국시연구회', publisher: '군자출판사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 187, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조산사+국가시험+핵심요약+2026' },
    { title: '2026 조산사 국가시험 기출문제 분석집', author: '메디시언 편집부', publisher: '메디시언', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 156, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조산사+기출문제+분석집+2026' },
    { title: '2026 조산사 분만·신생아 간호 핵심이론', author: '대한조산사협회', publisher: '현문사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조산사+분만+신생아+간호+핵심이론+2026' },
    { title: '2026 조산사 고위험 임신·산욕기 간호 집중공략', author: '이영숙 외', publisher: '수문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 112, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조산사+고위험+임신+산욕기+간호+2026' },
    { title: '2026 조산사 모유수유·모자보건 핵심정리', author: '조산사국시연구회', publisher: '군자출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 98, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조산사+모유수유+모자보건+2026' },
    { title: '2026 조산사 모자보건법·의료법 핵심정리', author: '메디시언 편집부', publisher: '메디시언', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조산사+모자보건법+의료법+2026' },
    { title: '조산사를 위한 분만 임상 가이드', author: '이경혜 외', publisher: '현문사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조산사+분만+임상+가이드' },
    { title: '분만실 신생아 집중 간호 실무', author: '대한신생아학회', publisher: '수문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=신생아+집중+간호+실무' },
  ],

  // ────────────────────────────────────────
  '소방안전관리자2급': [
    { title: '2027 찐합격 소방안전관리자 2급 기출문제 총집합+5개년 기출문제', author: '공하성', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000220176733'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220176733' },
    { title: '2027 박문각 소방안전관리자 2급 8개년 기출문제집+무료강의', author: '김연진', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('S000219791382'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219791382' },
    { title: '2027 박문각 소방안전관리자 2급 핵심이론서+무료특강', author: '김연진', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000219787574'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219787574' },
    { title: '2026 챕스랜드 소방안전관리자 2급 찐정리 문신 이론서', author: '서채빈', publisher: '종이향기', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218666591'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218666591' },
    { title: '2026 에듀윌 소방안전관리자 2급 7개년 기출문제집+무료특강', author: '손익희', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], imageUrl: KB('S000218235489'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218235489' },
    { title: '2027 찐합격 소방안전관리자 2급 합격노트+8개년 기출문제', author: '공하성', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], imageUrl: KB('S000220176737'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220176737' },
    { title: '2027 박문각 소방안전관리자 2급 (핵심이론+기출문제) 세트', author: '김연진', publisher: '박문각', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 178, tags: ['추천'], imageUrl: KB('S000219791389'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219791389' },
    { title: '2027 모아 소방안전관리자 2급 이론서 무료특강', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], imageUrl: KB('S000219868641'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219868641' },
    { title: '2026 시대에듀 소방안전관리자 2급 기출예상문제집', author: '김미현', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: KB('S000219381978'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219381978' },
    { title: '2027 김영북스 소방안전관리자 2급 기출예상 단권끝장', author: '심승아', publisher: '김영북스', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], imageUrl: KB('S000219791300'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219791300' },
  ],

  // ────────────────────────────────────────
  '소방안전관리자3급': [
    { title: '2027 찐합격 소방안전관리자3급 기출문제 총집합+5개년 기출문제', author: '공하성', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000220362738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220362738' },
    { title: '2026 박문각 소방안전관리자 3급 8개년 기출문제집+무료강의', author: '김연진', publisher: '박문각', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('S000219249527'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219249527' },
    { title: '2026 찐합격 소방안전관리자 3급 기출문제 총집합+5개년 기출문제', author: '공하성', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000219332876'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219332876' },
    { title: '2026 소방안전관리자 3급 합격노트+8개년 기출문제', author: '공하성', publisher: '성안당', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000219332877'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219332877' },
    { title: '2026 쇼츠 소방안전관리자 3급 기출예상문제집', author: '소방안전관리자회', publisher: '서울고시각', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000218907730'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218907730' },
    { title: '2027 찐합격 소방안전관리자3급 합격노트+8개년 기출문제', author: '공하성', publisher: '성안당', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], imageUrl: KB('S000220362739'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220362739' },
    { title: '2026 소방안전관리자 3급 기출+적중예상문제', author: '소방안전연구회', publisher: '책과상상', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: KB('S000218229062'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218229062' },
  ],

  // ────────────────────────────────────────
  '에너지관리기사': [
    { title: '2026 에듀윌 에너지관리기사 필기 한권끝장+무료특강', author: '남진우, 박수한, 어준혁 외', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], imageUrl: KB('S000216854276'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216854276' },
    { title: '에너지아카데미의 2026 더플러스 에너지관리기사 기출문제집 필기', author: '에너지아카데미, 이상식 외', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], imageUrl: KB('S000217513175'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217513175' },
    { title: '2026 시대에듀 Win-Q 에너지관리기사 필기 단기합격', author: '박병호', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000219010747'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219010747' },
    { title: '2026 스마트 에너지관리기사 필기', author: '허원회', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218969238'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218969238' },
    { title: '2026 에너지관리기사 필기', author: '권오수, 한홍걸 외', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], imageUrl: KB('S000217122034'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217122034' },
    { title: '2026 에너지관리기사 필기 과년도 문제풀이 10개년', author: '권오수', publisher: '예문사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: KB('S000218666506'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218666506' },
    { title: '모아 에너지관리기사 필기: 핵심이론+과년도 8개년', author: '모아합격기술연구소', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: KB('S000217524828'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217524828' },
    { title: '2026 에너지관리기사 필기', author: '서상희', publisher: '동일출판사', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], imageUrl: KB('S000217454947'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217454947' },
    { title: '2026 물쌤닷컴 에너지관리기사 필기+기출해설', author: '김선태', publisher: '미교원', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('S000218632205'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218632205' },
    { title: '2026 과년도 출제문제 중심 에너지관리기사 필기', author: '서상희', publisher: '동일출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], imageUrl: KB('S000217454935'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217454935' },
  ],

  // ────────────────────────────────────────
  '신재생에너지발전설비기사': [
    { title: '2026 신재생에너지 발전설비(태양광) 기사 필기', author: '태양광발전연구회', publisher: '동일출판사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: KB('S000217928341'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217928341' },
    { title: '2026 마스터 신재생에너지 발전설비(태양광) 기사 필기', author: '봉우근', publisher: '엔트미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218688575'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218688575' },
    { title: '2026 신재생에너지발전설비(태양광) 필기 13개년 과년도', author: '이후곤', publisher: '명인북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218276633'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218276633' },
    { title: '2026 신재생에너지 발전설비(태양광) 기사 실기', author: '태양광발전연구회', publisher: '동일출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: KB('S000218841024'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218841024' },
    { title: '2026 마스터 신재생에너지 발전설비(태양광) 기사 실기', author: '봉우근', publisher: '엔트미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: KB('S000218846039'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218846039' },
  ],

  // ────────────────────────────────────────
  '물류관리사': [
    { title: '2026 EBS 물류관리사 단기완성', author: '전표훈, 변달수, 신지원', publisher: '신지원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218632186'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218632186' },
    { title: '2026 에듀윌 물류관리사 한권끝장+무료특강', author: '황사빈, 전표훈, 류하영', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218668270'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218668270' },
    { title: '2026 해커스 물류관리사 한권합격 이론+최신기출', author: '이인호, 정연태, 송민', publisher: '해커스금융', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 222, tags: ['베스트'], imageUrl: KB('S000218366552'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218366552' },
    { title: '2026 EBS 물류관리사 기출문제집', author: 'EBS물류관리사교수진', publisher: '신지원', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000219002936'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219002936' },
    { title: '2026 시대에듀 물류관리사 한권으로 끝내기', author: '시대물류관리연구소', publisher: '시대고시기획', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218437555'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218437555' },
    { title: '2026 시대에듀 물류관리사 5개년 첨삭식 기출문제해설', author: '시대물류관리연구소', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: KB('S000217600693'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217600693' },
    { title: '2026 EBS물류관리사 벼락치기 핵심요약집', author: '전표훈, 변달수', publisher: '신지원', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: KB('S000219550128'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219550128' },
    { title: '2026 시대에듀 물류관리사 단기완성 핵심요약집', author: '시대물류관리연구소', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: KB('S000219391360'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219391360' },
  ],

  // ────────────────────────────────────────
  '정보통신기사': [
    { title: '2026 이기적 정보통신기사 필기+실기 올인원', author: '안영준, 육철민, 윤경수 외', publisher: '영진닷컴', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000219011189'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219011189' },
    { title: '2026 시대에듀 유선배 정보통신기사 필기 합격노트', author: '변세현, 손대호 외', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218751552'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218751552' },
    { title: '정보통신기술사들이 저술한 2026 정보통신기사 필기', author: '박배영, 박희남, 백윤철 감수 외', publisher: '정림사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218673825'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218673825' },
    { title: '2026 정보통신기사 필기', author: '김남선, 양윤석 외', publisher: '세화', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000219412311'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219412311' },
    { title: '2026 이패스 정보통신기사 필기(이론편+문제편) 6주 CUT', author: '권병철', publisher: '이패스코리아', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], imageUrl: KB('S000218934630'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218934630' },
    { title: '2026 정보통신기사 필기 기출문제집+실전모의고사', author: '김한기, 김영현 외', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: KB('S000219085254'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085254' },
    { title: '2026 이패스 정보통신기사 필기 실기 세트', author: '권병철', publisher: '이패스코리아', price: 63000, originalPrice: 70000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], imageUrl: KB('S000219434445'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219434445' },
  ],

  // ────────────────────────────────────────
  '건축설비기사': [
    { title: '2026 건축설비기사 필기 이론/문제', author: '조성안, 이석훈 외', publisher: '기문사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218180959'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218180959' },
    { title: '2026 핵심기출 건축설비기사 필기 기출모의고사', author: '조성안, 이석훈 외', publisher: '기문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218356158'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218356158' },
    { title: '2026 건축설비기사 필기 기출공략 문제로 한번에 합격하기', author: '정하정', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218322930'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218322930' },
    { title: '2026 건축설비기사 필기', author: '안병관', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], imageUrl: KB('S000219004244'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219004244' },
    { title: '2026 compact 건축설비기사 필기', author: '조성안, 이석훈 외', publisher: '기문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000218790132'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218790132' },
    { title: '2026 건축설비산업기사 필기 이론/문제', author: '조성안, 이석훈 외', publisher: '기문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: KB('S000217941990'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217941990' },
    { title: '2026 compact 건축설비산업기사 필기', author: '조성안, 이석훈 외', publisher: '기문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: KB('S000218790134'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218790134' },
  ],

  // ────────────────────────────────────────
  '도시계획기사': [
    { title: '2026 도시계획기사 필기 세트', author: 'Urban. Lee', publisher: '예문사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], imageUrl: KB('S000219117166'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219117166' },
    { title: '2026 양재호의 도시계획기사 필기 이론편', author: '양재호', publisher: '트랜북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218229943'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218229943' },
    { title: '2026 양재호의 도시계획기사 필기 기출편', author: '양재호', publisher: '트랜북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218179861'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218179861' },
  ],


  // ────────────────────────────────────────
  // 민간자격증
  // ────────────────────────────────────────
  'GTQ': [
    { title: '2026 이기적 GTQ 포토샵 1급 기본서 ver. CC', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2341, tags: ['베스트'], imageUrl: KB('S000218183225'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218183225' },
    { title: '2026 이기적 GTQ 포토샵+일러스트 1급 올인원 ver.CC', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1876, tags: ['베스트'], imageUrl: KB('S000218960821'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218960821' },
    { title: '2026 시대에듀 유선배 GTQ 포토샵 1급 합격노트 ver. Adobe CC', author: '유선배', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: KB('S000217401720'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217401720' },
    { title: '2026 시대에듀 유선배 GTQ 일러스트 1급 합격노트 ver. Adobe CC', author: '유선배', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['추천'], imageUrl: KB('S000217119017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217119017' },
    { title: 'GTQ 포토샵 2급 기출문제 완전정복', author: '한정수', publisher: '길벗', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=GTQ+포토샵+2급+기출문제' },
  ],

  'GTQi': [
    { title: '2026 이기적 GTQ 포토샵+일러스트 1급 올인원 ver.CC', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1876, tags: ['베스트'], imageUrl: KB('S000218960821'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218960821' },
    { title: '2026 시대에듀 유선배 GTQ 일러스트 1급 합격노트 ver. Adobe CC', author: '유선배', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['베스트'], imageUrl: KB('S000217119017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217119017' },
    { title: 'GTQi 일러스트 1급 기출문제 완전정복', author: '이재원', publisher: '길벗', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 765, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=GTQi+일러스트+1급+기출' },
  ],

  'MOS': [
    { title: '멘토시리즈 MOS 365 엑셀', author: '멘토 IT 연구회', publisher: '멘토르', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: KB('S000219135369'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219135369' },
    { title: '멘토시리즈 MOS 365 워드', author: '멘토 IT 연구회', publisher: '멘토르', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: KB('S000219135217'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219135217' },
    { title: 'MOS 2016 Excel Expert 한권으로 끝내기', author: '김경연', publisher: '시나공', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1432, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=MOS+엑셀+Expert+한권끝내기' },
    { title: 'MOS PowerPoint 365 한권으로 끝내기', author: '김경연', publisher: '시나공', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=MOS+파워포인트+365' },
    { title: 'MOS Access 365 합격 기출문제집', author: '한국MOS연구회', publisher: '영진닷컴', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 654, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=MOS+Access+365' },
  ],

  'TOEIC': [
    { title: '해커스 토익 최신기출유형 실전 10회 LC(리스닝)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.8, reviews: 5678, tags: ['베스트'], imageUrl: KB('S000220438564'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220438564' },
    { title: '해커스 토익 최신기출유형 실전 10회 RC(리딩)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.8, reviews: 5432, tags: ['베스트'], imageUrl: KB('S000220438585'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220438585' },
    { title: '해커스 토익 PART 7 집중공략 777 RC', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.8, reviews: 4321, tags: ['베스트'], imageUrl: KB('S000219129734'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219129734' },
    { title: 'EBS 김대균 토익킹 (2026년 7월)', author: '김대균', publisher: '한국교육방송공사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 3210, tags: ['베스트'], imageUrl: KB('S000220240803'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220240803' },
    { title: '시나공 TOEIC 기출 실전모의고사 10회분', author: '시나공 토익연구팀', publisher: '길벗이지톡', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.6, reviews: 2876, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시나공+TOEIC+실전모의고사' },
    { title: '토익 보카 단어장 (빈출 1200)', author: 'YBM 어학연구소', publisher: 'YBM', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 2134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토익+보카+단어장+YBM' },
  ],

  'OPIc': [
    { title: '10일 만에 끝내는 해커스 OPIc 오픽 Advanced 공략', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.8, reviews: 3456, tags: ['베스트'], imageUrl: KB('S000202406853'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000202406853' },
    { title: '10일 만에 끝내는 해커스 OPIc 오픽 START: Intermediate 공략', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.7, reviews: 2987, tags: ['베스트'], imageUrl: KB('S000208578134'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000208578134' },
    { title: '스파르타 OPIc 오픽 IM2-IH 공략', author: '스파르타 어학연구소', publisher: '스파르타북스', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: KB('S000218846962'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218846962' },
    { title: '오픽 요정 벨라쌤의 OPIc 초단기 완성 IH-AL 중상급', author: '강다연(벨라쌤)', publisher: '세상모든책', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 1876, tags: ['추천'], imageUrl: KB('S000215553595'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215553595' },
    { title: '오픽 요정 벨라쌤의 OPIc 초단기 완성 IL-IM 초급', author: '강다연(벨라쌤)', publisher: '세상모든책', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: KB('S000215553473'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215553473' },
  ],

  'AFPK': [
    { title: '2025 해커스 AFPK 핵심문제집 모듈 1', author: '해커스 금융아카데미', publisher: '해커스패스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 2134, tags: ['베스트'], imageUrl: KB('S000216317051'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216317051' },
    { title: '2025 해커스 AFPK 핵심문제집 모듈 2', author: '해커스 금융아카데미', publisher: '해커스패스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: KB('S000216317054'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216317054' },
    { title: '2025 해커스 AFPK 최종 실전모의고사', author: '해커스 금융아카데미', publisher: '해커스패스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['베스트'], imageUrl: KB('S000216497312'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216497312' },
    { title: '2025 이패스 AFPK 핵심문제집 모듈1', author: '김종희', publisher: '이패스코리아', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: KB('S000216841802'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216841802' },
    { title: '2025 이패스 AFPK 핵심문제집 모듈2', author: '김종희', publisher: '이패스코리아', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: KB('S000216841809'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216841809' },
  ],

  'CFP': [
    { title: '2025 해커스 CFP 사례형 핵심문제집', author: '해커스 금융아카데미', publisher: '해커스금융', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1543, tags: ['베스트'], imageUrl: KB('S000217066248'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217066248' },
    { title: '2025 해커스 CFP 지식형 핵심문제집', author: '해커스 금융아카데미', publisher: '해커스금융', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['베스트'], imageUrl: KB('S000217035691'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217035691' },
    { title: '2025 해커스 CFP 최종 실전모의고사', author: '해커스 금융아카데미', publisher: '해커스금융', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 987, tags: ['베스트'], imageUrl: KB('S000217371753'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217371753' },
    { title: '2025 이패스 CFP 사례형 핵심문제집', author: '이패스코리아 금융연구소', publisher: '이패스코리아', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 765, tags: ['추천'], imageUrl: KB('S000217201184'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217201184' },
    { title: '2025 이패스 CFP 지식형 핵심문제집', author: '이패스코리아 금융연구소', publisher: '이패스코리아', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 654, tags: ['추천'], imageUrl: KB('S000217029818'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217029818' },
    { title: '토마토패스 CFP 지식형 핵심정리문제집', author: '홍영진·김인회 외', publisher: '예문에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 543, tags: ['추천'], imageUrl: KB('S000217296470'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217296470' },
    { title: '토마토패스 CFP 사례형 핵심정리문제집', author: '홍영진·김인회 외', publisher: '예문에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 432, tags: ['추천'], imageUrl: KB('S000217595699'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217595699' },
  ],

  '바리스타1급': [
    { title: '바리스타 1급 자격시험 예상문제집 (NCS 개정판)', author: '한국커피협회', publisher: '한국커피협회', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: KB('S000214736527'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214736527' },
    { title: '바리스타 1급 실기 완전정복 (에스프레소·라떼아트)', author: '김민준', publisher: '크라운출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=바리스타+1급+실기+에스프레소+라떼아트' },
    { title: '커피 바리스타 이론 핵심 요약 (필기 대비)', author: '이승훈', publisher: '길벗', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=커피+바리스타+이론+필기' },
    { title: '커피 바리스타 문제집 & 커피용어 해설', author: '한국커피바리스타협회', publisher: '성안당', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: KB('S000001941998'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001941998' },
  ],

  '바리스타2급': [
    { title: '2026 이기적 바리스타 2급 7일 끝, 합격', author: '임형준', publisher: '영진닷컴', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.8, reviews: 3210, tags: ['베스트'], imageUrl: KB('S000218917586'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218917586' },
    { title: '바리스타 2급 필기+실기 한권으로 끝내기', author: '권지현', publisher: '크라운출판사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 2456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=바리스타+2급+필기+실기+한권' },
    { title: '바리스타 2급 자격시험 기출문제 완전분석', author: '한국커피협회', publisher: '한국커피협회', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 1876, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=바리스타+2급+기출문제' },
  ],

  '리눅스마스터1급': [
    { title: '2026 이기적 리눅스마스터 1급 (1·2차) 기본서 세트', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: KB('S000218968390'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218968390' },
    { title: 'Rocky Linux8로 리눅스마스터 1급 정복하기', author: '우재남', publisher: '한빛미디어', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 1876, tags: ['베스트'], imageUrl: KB('S000212567319'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212567319' },
    { title: '최신 기출문제를 수록한 리눅스마스터 1급 2차 실기 정복하기', author: '우재남', publisher: '한빛미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: KB('S000001816547'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001816547' },
    { title: '국가공인 리눅스마스터 1급', author: '강진수', publisher: '한국정보통신진흥협회', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: KB('S000001958046'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001958046' },
    { title: '리눅스마스터 1급 서버 실무 핵심 정리', author: '박성진', publisher: '에이콘출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 876, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=리눅스마스터+1급+서버+실무' },
  ],

  '리눅스마스터2급': [
    { title: '2026 이기적 리눅스마스터 2급 (1·2차) 기본서', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 3456, tags: ['베스트'], imageUrl: KB('S000218787227'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218787227' },
    { title: '리눅스마스터 2급 한권으로 끝내기', author: '강진수', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 2876, tags: ['베스트'], imageUrl: KB('S000219391330'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219391330' },
    { title: '2026 박문각 리눅스마스터 2급 기출원스톱 800제+무료특강', author: '박문각 IT연구소', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 2134, tags: ['베스트'], imageUrl: KB('S000219249403'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219249403' },
    { title: '2027 빠르게 따는 리눅스마스터 2급 (1, 2차)', author: '리눅스마스터연구회', publisher: '영진닷컴', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: KB('S000220240746'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220240746' },
    { title: 'Rocky Linux8로 리눅스마스터 2급 정복하기', author: '우재남', publisher: '한빛미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: KB('S000211820693'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000211820693' },
    { title: '국가공인 리눅스마스터 2급', author: '강진수', publisher: '한국정보통신진흥협회', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: KB('S000001958047'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001958047' },
  ],

  'FAT': [
    { title: '2026 I CAN FAT 회계실무 1급', author: '아이캔 세무회계연구소', publisher: '아이캔', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: KB('S000219117007'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219117007' },
    { title: '2026 I CAN FAT 회계실무 2급', author: '아이캔 세무회계연구소', publisher: '아이캔', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2543, tags: ['베스트'], imageUrl: KB('S000218979828'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218979828' },
    { title: '2026 로그인 FAT 1급', author: '박병규', publisher: '세경북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 2134, tags: ['베스트'], imageUrl: KB('S000218972562'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218972562' },
    { title: '2026 로그인 FAT 1급 기출문제', author: '박병규', publisher: '세경북스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['추천'], imageUrl: KB('S000218620952'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218620952' },
    { title: '2026 이패스 FAT 1급 회계실무 이론+실무+최신기출', author: '이패스코리아 편집부', publisher: '이패스코리아', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: KB('S000219333860'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219333860' },
  ],

  'ITQ': [
    { title: '2026 이기적 ITQ 아래한글 ver. 2022 기본서', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.8, reviews: 4321, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ITQ+아래한글+2026' },
    { title: '2026 이기적 ITQ 엑셀 ver. 2021 기본서', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.8, reviews: 3876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ITQ+엑셀+2026' },
    { title: '2026 이기적 ITQ 파워포인트 ver. 2021 기본서', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.8, reviews: 3543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ITQ+파워포인트+2026' },
    { title: 'ITQ OA Master 한글+엑셀+파워포인트 한권끝내기', author: '정보문화사 편집부', publisher: '정보문화사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 2134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=ITQ+OA+Master+한권끝내기' },
    { title: '시나공 ITQ 한글+엑셀+파워포인트', author: '길벗 R&D', publisher: '길벗', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시나공+ITQ+한글+엑셀+파워포인트' },
  ],

  'SQLD': [
    { title: '2026 이기적 SQLD 데이터베이스 솔루션 개발자', author: '신의철', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 5432, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+SQLD+2026' },
    { title: 'SQL 자격검정 실전문제 (한국데이터산업진흥원)', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 25000, originalPrice: 25000, discount: '0%', rating: 4.7, reviews: 4321, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=SQL+자격검정+실전문제' },
    { title: '홍쌤의 SQLD 합격노트', author: '홍성욱', publisher: '앤써북', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 3876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=홍쌤의+SQLD+합격노트' },
    { title: 'SQLD 단기완성 핵심 요약집', author: 'SQL수험연구소', publisher: '시대에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 2345, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=SQLD+단기완성+핵심요약' },
    { title: '데이터베이스 개론 (SQLD 이론 기초)', author: '김연희', publisher: '한빛아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 1987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=데이터베이스+개론+김연희' },
  ],

  'SQLP': [
    { title: 'SQL 전문가 가이드 (한국데이터산업진흥원 공식)', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 40000, originalPrice: 40000, discount: '0%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=SQL+전문가+가이드+SQLP' },
    { title: 'SQLP 핵심 노트 + 실전 모의고사', author: '신의철', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=SQLP+핵심노트+모의고사' },
    { title: 'Oracle SQL 튜닝 바이블', author: '이병국', publisher: '비제이퍼블릭', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Oracle+SQL+튜닝+바이블' },
    { title: 'SQLP 서술형 완전정복', author: 'DB수험연구소', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 876, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=SQLP+서술형+완전정복' },
    { title: '친절한 SQL 튜닝', author: '조시형', publisher: '디비안', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 765, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=친절한+SQL+튜닝' },
  ],

  '네트워크관리사1급': [
    { title: '2026 이기적 네트워크관리사 1급 필기+실기', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+네트워크관리사+1급+2026' },
    { title: '네트워크관리사 1급 합격 바이블', author: '황종식', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=네트워크관리사+1급+합격+바이블' },
    { title: 'CCNA 네트워킹 완전정복 (라우터·스위치 실습)', author: '정성재', publisher: '한빛미디어', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 1234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=CCNA+네트워킹+완전정복' },
    { title: '네트워크관리사 1급 기출문제집 (최근 5개년)', author: 'IT수험연구소', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=네트워크관리사+1급+기출문제집' },
    { title: '알기 쉬운 네트워크 (TCP/IP 기초~고급)', author: '오마타 세이치로', publisher: '한빛미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 876, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=알기쉬운+네트워크+TCP+IP' },
  ],

  '네트워크관리사2급': [
    { title: '2026 이기적 네트워크관리사 2급 필기+실기', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+네트워크관리사+2급+2026' },
    { title: '네트워크관리사 2급 한권으로 끝내기', author: '황종식', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=네트워크관리사+2급+한권으로끝내기' },
    { title: '2026 네트워크관리사 2급 단기합격', author: 'IT수험연구소', publisher: '시대에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=네트워크관리사+2급+단기합격+2026' },
    { title: '네트워크관리사 2급 기출문제 완전정복', author: 'IT자격연구회', publisher: '예문사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=네트워크관리사+2급+기출문제+완전정복' },
    { title: '하루 10분 네트워크 기초 (입문서)', author: 'Gene Kim', publisher: '한빛미디어', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=하루+10분+네트워크+기초' },
  ],

  'JLPT': [
    { title: 'JLPT 한 권으로 합격 N1', author: '시원스쿨 일본어연구소', publisher: '시원스쿨랩', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 3456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=JLPT+한권으로합격+N1' },
    { title: 'JLPT 한 권으로 합격 N2', author: '시원스쿨 일본어연구소', publisher: '시원스쿨랩', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.8, reviews: 3210, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=JLPT+한권으로합격+N2' },
    { title: '신일본어능력시험 N1 핵심단어·한자', author: '박해리', publisher: '다락원', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=JLPT+N1+핵심단어+한자+다락원' },
    { title: 'JLPT N2 문법·독해 완전 정복', author: '이치방 일본어연구소', publisher: '이치방', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 1876, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=JLPT+N2+문법+독해+이치방' },
    { title: 'JLPT 실전 모의고사 N1·N2 (청해 MP3 포함)', author: '일본어연구회', publisher: '넥서스', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 1543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=JLPT+실전모의고사+N1+N2' },
  ],

  'HSK': [
    { title: 'HSK 6급 한 권으로 합격', author: '정계도', publisher: '시원스쿨랩', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=HSK+6급+한권으로합격' },
    { title: 'HSK 5급 한 권으로 합격', author: '정계도', publisher: '시원스쿨랩', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.8, reviews: 2543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=HSK+5급+한권으로합격' },
    { title: '해커스 중국어 HSK 6급 어휘·독해·듣기', author: '해커스중국어연구소', publisher: '해커스어학연구소', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+중국어+HSK+6급' },
    { title: 'HSK 5급 실전 모의고사 5회분', author: '다락원 중국어연구소', publisher: '다락원', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=HSK+5급+실전+모의고사' },
    { title: 'HSK 핵심단어 2500 (4·5·6급 통합)', author: 'HSK수험연구소', publisher: '넥서스중국어', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=HSK+핵심단어+2500' },
  ],

  '재경관리사': [
    { title: '2026 재경관리사 재무회계 이론+기출', author: '김민철', publisher: '삼일인포마인', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=재경관리사+재무회계+2026' },
    { title: '2026 재경관리사 세무회계 이론+기출', author: '정정운', publisher: '삼일인포마인', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=재경관리사+세무회계+2026' },
    { title: '2026 재경관리사 원가관리회계 이론+기출', author: '이훈엽', publisher: '삼일인포마인', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=재경관리사+원가관리회계+2026' },
    { title: '재경관리사 3과목 한권 합격 (재무·세무·원가)', author: '회계수험연구회', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=재경관리사+3과목+한권합격' },
    { title: '재경관리사 최신기출 800제', author: '재경수험연구소', publisher: '나무와숲', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=재경관리사+최신기출+800제' },
  ],

  'ERP정보관리사': [
    { title: '2026 이기적 ERP 정보관리사 회계 1·2급', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ERP+정보관리사+회계+2026' },
    { title: '2026 이기적 ERP 정보관리사 인사 1·2급', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ERP+정보관리사+인사+2026' },
    { title: '2026 이기적 ERP 정보관리사 물류 1·2급', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ERP+정보관리사+물류+2026' },
    { title: 'ERP 정보관리사 회계 기출문제집', author: 'ERP수험연구소', publisher: '시대에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=ERP+정보관리사+회계+기출' },
    { title: '더존 SmartA 실무 완전 정복', author: '더존비즈온 교육팀', publisher: '더존비즈온', price: 25000, originalPrice: 25000, discount: '0%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=더존+SmartA+실무' },
  ],

  '매경TEST': [
    { title: '매경TEST 공식 기출문제집 (최신판)', author: '매일경제 TEST사업본부', publisher: '매일경제신문사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=매경TEST+공식+기출문제집' },
    { title: '매경TEST 경제·경영 핵심 이론서', author: '이재은', publisher: '매일경제신문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=매경TEST+경제경영+핵심이론' },
    { title: '매경TEST 최우수 목표 단기완성', author: '경제경영수험연구소', publisher: '박문각', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=매경TEST+최우수+단기완성' },
    { title: '맨큐의 경제학 (원리 중심)', author: 'N.G.맨큐', publisher: '센게이지러닝', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=맨큐의+경제학' },
    { title: '매경TEST 실전 모의고사 3회분', author: '매경TEST연구소', publisher: '매일경제신문사', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=매경TEST+실전+모의고사' },
  ],

  'TESAT': [
    { title: 'TESAT 공식 기출문제집 (한국경제신문)', author: '한국경제신문 TESAT운영본부', publisher: '한국경제신문', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=TESAT+공식+기출문제집' },
    { title: 'TESAT S급 목표 경제이론 핵심정리', author: '이재은', publisher: '한국경제신문', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=TESAT+S급+경제이론+핵심정리' },
    { title: 'TESAT 시사경제 + 상황판단 집중 공략', author: 'TESAT수험연구소', publisher: '박문각', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=TESAT+시사경제+상황판단' },
    { title: '경제학 원론 (TESAT 이론 기초)', author: '이준구·이창용', publisher: '문우사', price: 32000, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=경제학원론+이준구' },
    { title: 'TESAT 실전 모의고사 5회분', author: 'TESAT연구소', publisher: '한국경제신문', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=TESAT+실전모의고사+5회' },
  ],

  '펀드투자권유대행인': [
    { title: '2026 펀드투자권유대행인 한권으로 끝내기', author: '금융자격연구소', publisher: '시대에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=펀드투자권유대행인+한권끝내기+2026' },
    { title: '펀드투자권유대행인 핵심정리+기출문제', author: '해커스 금융아카데미', publisher: '해커스패스', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=펀드투자권유대행인+해커스+기출' },
    { title: '2026 와우패스 펀드투자권유대행인', author: '와우패스 교수진', publisher: '와우패스', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=와우패스+펀드투자권유대행인+2026' },
    { title: '펀드투자권유대행인 단기합격 7일완성', author: '금융시험연구소', publisher: '박문각', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=펀드투자권유대행인+단기합격+7일' },
    { title: '펀드투자권유대행인 기출문제 완전정복', author: '금융자격연구회', publisher: '나무와숲', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=펀드투자권유대행인+기출+완전정복' },
  ],

  '소믈리에': [
    { title: '와인 바이블 (소믈리에 필독서)', author: 'Kevin Zraly', publisher: '바롬웍스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=와인바이블+소믈리에' },
    { title: '소믈리에 자격증 완전 정복 (필기+실기)', author: '한국소믈리에협회', publisher: '한국소믈리에협회', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소믈리에+자격증+필기+실기' },
    { title: 'WSET Level 2 와인 교재 (한국어판)', author: 'WSET', publisher: 'WSET', price: 35000, originalPrice: 35000, discount: '0%', rating: 4.8, reviews: 1234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=WSET+Level+2+와인+한국어' },
    { title: '세계의 와인 (산지별 완벽 가이드)', author: '젠시스 로빈슨', publisher: '한스미디어', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세계의+와인+젠시스+로빈슨' },
    { title: '소믈리에 테이스팅 노트 실전 가이드', author: '김경묵', publisher: '백산출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 765, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소믈리에+테이스팅+노트' },
  ],

  '바텐더': [
    { title: '바텐더 칵테일 바이블 (레시피 200선)', author: '김성찬', publisher: '백산출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=바텐더+칵테일+바이블' },
    { title: '조주기능사+바텐더 민간자격 완전정복', author: '조주기능사수험연구회', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조주기능사+바텐더+완전정복' },
    { title: '바텐딩 기법 마스터 (쉐이킹·스터·레이어)', author: '이성철', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=바텐딩+기법+마스터' },
    { title: 'IBA 공식 칵테일 77 레시피 완전정복', author: '한국바텐더협회', publisher: '백산출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 765, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=IBA+칵테일+77+레시피' },
    { title: '세계의 술 (증류주·발효주 완벽 가이드)', author: '박재범', publisher: '한스미디어', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세계의+술+증류주+발효주' },
  ],

  '한자능력검정': [
    { title: '2026 이기적 한자능력검정시험 2급 기본서', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+한자능력검정+2급+2026' },
    { title: '한자능력검정 2급 한권으로 끝내기', author: '김원중', publisher: '성안당', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한자능력검정+2급+한권끝내기' },
    { title: '한자능력검정 1급 합격 기본서', author: '한자수험연구소', publisher: '시대에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한자능력검정+1급+합격+기본서' },
    { title: '한자능력검정 기출문제 완전분석 (2·3급)', author: '어문회한자수험연구소', publisher: '어문회', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한자능력검정+기출문제+2급+3급' },
    { title: '사자성어·한자어 완전 정복 (한자급수 대비)', author: '박인재', publisher: '박문각', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사자성어+한자어+완전정복' },
  ],

  'KBS한국어능력시험': [
    { title: 'KBS 한국어능력시험 기출문제 완전분석 (최신판)', author: 'KBS한국어능력시험연구소', publisher: 'KBS미디어', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=KBS+한국어능력시험+기출문제+완전분석' },
    { title: 'KBS 한국어능력시험 한권으로 합격', author: '이재훈', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=KBS+한국어능력시험+한권으로합격' },
    { title: 'KBS 한국어능력시험 1급 목표 핵심이론', author: '박인자', publisher: '박문각', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=KBS+한국어능력시험+1급+핵심이론' },
    { title: '국어 어법·어휘 완전 정복 (KBS 대비)', author: '이윤재', publisher: '이투스북', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=국어+어법+어휘+완전정복+KBS' },
    { title: 'KBS 한국어능력시험 실전 모의고사 5회분', author: 'KBS한국어연구소', publisher: 'KBS미디어', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=KBS+한국어능력시험+실전모의고사' },
  ],

  'TOEFL': [
    { title: '해커스 TOEFL Reading (토플 리딩)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 3210, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+TOEFL+Reading' },
    { title: '해커스 TOEFL Listening (토플 리스닝)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+TOEFL+Listening' },
    { title: 'The Official Guide to the TOEFL Test (ETS 공식)', author: 'ETS', publisher: 'McGraw-Hill', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 2543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Official+Guide+TOEFL+ETS' },
    { title: '해커스 TOEFL Writing (토플 라이팅)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+TOEFL+Writing' },
    { title: '해커스 TOEFL Speaking (토플 스피킹)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1765, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+TOEFL+Speaking' },
  ],

  'IELTS': [
    { title: '해커스 IELTS Writing (아이엘츠 라이팅)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+IELTS+Writing' },
    { title: 'Cambridge IELTS 18 (캠브리지 공식 기출)', author: 'Cambridge ESOL', publisher: 'Cambridge', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Cambridge+IELTS+18+공식기출' },
    { title: '해커스 IELTS Reading (아이엘츠 리딩)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+IELTS+Reading' },
    { title: 'IELTS Vocabulary (아이엘츠 필수어휘 4000)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=IELTS+Vocabulary+해커스' },
    { title: 'IELTS Speaking 9.0 공략법', author: 'Caroline Brown', publisher: '시원스쿨랩', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=IELTS+Speaking+9.0' },
  ],

  'TAT': [
    { title: '2026 I CAN TAT 세무실무 2급', author: '아이캔 세무회계연구소', publisher: '아이캔', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: KB('S000219495682'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219495682' },
    { title: '2026 I Can TAT 세무실무 1급', author: '아이캔 세무회계연구소', publisher: '아이캔', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1987, tags: ['베스트'], imageUrl: KB('S000219812336'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219812336' },
    { title: '2026 로그인 TAT 2급', author: '박병규', publisher: '세경북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1765, tags: ['베스트'], imageUrl: KB('S000219349559'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219349559' },
    { title: '2026 이패스 세무회계 2급 핵심요약 및 문제풀이', author: '이패스코리아 편집부', publisher: '이패스코리아', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1432, tags: ['추천'], imageUrl: KB('S000219346402'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219346402' },
    { title: '2026 이패스 세무회계 1급 핵심요약 및 문제풀이', author: '이패스코리아 편집부', publisher: '이패스코리아', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 1123, tags: ['추천'], imageUrl: KB('S000219647804'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219647804' },
  ],

};
