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
    { title: '2026 에듀윌 산업안전산업기사 필기 한권끝장', author: '최창률', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], isbn: '9791136038937', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038937.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+에듀윌' },
    { title: '2026 직8딴 산업안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173490989.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+직8딴+산업안전산업기사' },
    { title: '2026 산업안전산업기사 필기 7개년 기출문제집', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 176, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175191716.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+세화' },
    { title: '2026 해커스 산업안전산업기사 필기 핵심요약+기출', author: '해커스자격증', publisher: '해커스자격증', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788969656230.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+산업안전산업기사' },
    // 추천수험서 5
    { title: '2026 벼락치기 산업안전산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+벼락치기' },
    { title: '2026 스마트 산업안전산업기사 과년도 문제해설', author: '허원회', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791168756663', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756663.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+과년도' },
  ],

  // ────────────────────────────────────────
  '전기기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 전기기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 421, tags: ['베스트'], imageUrl: KB('S000216853109'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216853109' },
    { title: '2026 해커스 전기기사·산업기사 필기 올인원', author: '오우진', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: KB('S000218582288'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218582288' },
    { title: '2026 직8딴 전기기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 287, tags: ['베스트'], isbn: '9791176400121', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791176400121.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+직8딴+전기기사+필기' },
    { title: '2026 전기기사 필기 최근 10년간 기출문제', author: '이재원', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218820738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218820738' },
    { title: '2026 전기기사 필기', author: '김상훈', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000217579715'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217579715' },
    // 추천수험서 5
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출문제집+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 312, tags: ['추천'], imageUrl: KB('S000217555269'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217555269' },
    { title: '2026 전기기사 필기 필수기출 1200제', author: '엔지니어랩 연구소', publisher: '엔지니어랩', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 256, tags: ['추천'], imageUrl: KB('S000218188325'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218188325' },
    { title: '2026 전기응용 및 공사재료', author: '김상훈', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: KB('S000217420169'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217420169' },
    { title: '2026 전기공사기사 실기', author: '김상훈', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 167, tags: ['추천'], imageUrl: KB('S000219138309'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219138309' },
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
  '소방설비기사(기계분야)': [
    // 베스트셀러 5
    { title: '2026 찐합격 7개년 과년도 소방설비기사 필기 전기1-7', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218276598'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218276598' },
    { title: '2026 에듀윌 소방설비기사 기계 기출문제집 필기', author: '김윤수', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000216719513'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216719513' },
    { title: '2026 체크업 소방설비기사·산업기사 기계 분야 필기', author: '김종상', publisher: '일진사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000218934350'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218934350' },
    { title: '2026 소방설비기사 실기 기계 완전정복', author: '공하성', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], isbn: '9788927439295', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927439295.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+실기+기계' },
    { title: '2026 찐합격 소방안전관리자 3급 기출문제 총집합', author: '공하성', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: KB('S000219332876'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219332876' },
  ],

  '소방설비기사(전기분야)': [
    // 베스트셀러 5
    { title: '2026 대해부 7개년 기출문제 소방설비기사 전기 필기', author: '공하성', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218839670'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218839670' },
    { title: '2026 소방설비기사 필기(전기분야)', author: '표정은', publisher: '동화기술', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000217529077'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217529077' },
    { title: '2026 에듀윌 소방설비기사 실기 전기+무료특강', author: '손익희', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], imageUrl: KB('S000219195829'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219195829' },
    { title: '2026 소방설비기사 실기 전기 완전정복', author: '공하성', publisher: '성안당', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927439103.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+실기+전기' },
    { title: '2026 벼락치기 소방설비기사 전기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9788931513844', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931513844.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+벼락치기' },
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
    { title: '2026 직8딴 건설안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791173491467', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491467.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+필기' },
    { title: '2026 건설안전산업기사 필기 7개년 기출문제해설', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673235.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+세화' },
    // 추천수험서 5
    { title: '2026 스마트 건설안전산업기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], isbn: '9791168756793', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756793.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+과년도' },
    { title: '2026 건설안전산업기사 실기 작업형 핵심정리', author: '김충민', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927462125.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+작업형' },
    { title: '2026 벼락치기 건설안전산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931714005.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+벼락치기' },
  ],

  // ────────────────────────────────────────
  '전기산업기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 전기기사·산업기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: KB('S000216853109'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216853109' },
    { title: '2026 해커스 전기기사·산업기사 필기 올인원', author: '오우진', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218582288'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218582288' },
    { title: '2026 전기산업기사 필기', author: '김상훈', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000217601906'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217601906' },
    { title: '2026 전기기사 필기 필수기출 1200제', author: '엔지니어랩 연구소', publisher: '엔지니어랩', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000218188325'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218188325' },
    // 추천수험서 5
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: KB('S000217555269'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217555269' },
    { title: '2026 전기산업기사 실기 완전정복', author: '이현철', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791136039002', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039002.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+전기산업기사+실기' },
    { title: '2026 전기기사 필기 최근 10년간 기출문제', author: '이재원', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], imageUrl: KB('S000218820738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218820738' },
    { title: '2026 전기회로이론 필기+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('S000217252017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217252017' },
  ],

  // ────────────────────────────────────────
  '일반기계기사': [
    // 베스트셀러 5
    { title: '2026 해커스 일반기계기사 필기 한권합격 이론+최신기출', author: '이선형', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218366558'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218366558' },
    { title: '2026 해커스 일반기계기사 실기 작업형 출제 도면집', author: '해커스자격증', publisher: '해커스자격증', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218980950'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218980950' },
    { title: '2026 에듀윌 일반기계기사 필기 한권끝장', author: '에듀윌 기계수험연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791136017611', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136017611.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+일반기계기사' },
    { title: '2026 나합격 일반기계기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791176400145', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791176400145.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+일반기계기사' },
    // 추천수험서 5
    { title: '2026 스마트 7개년 과년도 일반기계기사 필기', author: '허원회, 박만재', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9788931512076', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931512076.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+일반기계기사+과년도' },
  ],

  // ────────────────────────────────────────
  '화공기사': [
    // 베스트셀러 5
    { title: '2026 화공기사 필기 세트', author: '정나나', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 278, tags: ['베스트'], imageUrl: KB('S000219080786'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219080786' },
    { title: '2026 화공기사 기출문제집(필기)', author: '김재호', publisher: '예문사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: KB('S000217304501'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217304501' },
    { title: '2026 나합격 화공기사 필기+무료특강', author: '이윤기', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791188883981', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791188883981.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+화공기사' },
    // 추천수험서 5
    { title: '2025 정나나의 화공기사 필기 과년도 문제해설', author: '정나나', publisher: '예문사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], imageUrl: KB('S000213942242'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213942242' },
    { title: '2026 스마트 화공기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화공기사+과년도' },
    { title: '2026 화공기사 CBT 실전모의고사+핵심요약', author: '화공기사연구회', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화공기사+CBT' },
  ],

  // ────────────────────────────────────────
  '가스기사': [
    // 베스트셀러 5
    { title: '2026 평생 무료 동영상과 함께하는 가스기사 필기', author: '서상희', publisher: '일진사', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218666990'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218666990' },
    { title: '가스기사·가스산업기사 필기 총정리', author: '서상희', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: KB('S000214202695'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214202695' },
    { title: '2026 가스산업기사 필기 기출문제집', author: '김재호', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218667744'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218667744' },
    { title: '2026 나합격 가스기사 필기 핵심요약+기출', author: '이윤기', publisher: '삼원북스', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], isbn: '9791194997351', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997351.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스기사' },
    // 추천수험서 5
    { title: '2026 가스기사 실기 완전정복 필답형+작업형', author: '서상희', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 178, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기사+실기' },
    { title: '2026 가스기능사 필기 총정리', author: '서상희', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: KB('S000217622875'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217622875' },
  ],

  // ────────────────────────────────────────
  '가스산업기사': [
    // 베스트셀러 5
    { title: '2026 나합격 가스산업기사 필기+실기+무료특강', author: '이윤기', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 287, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997375.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스산업기사+필기' },
    { title: '2026 가스산업기사 필기 총정리', author: '서상희', publisher: '일진사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9788942920549', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920549.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+필기+총정리' },
    { title: '2026 모아 가스산업기사 필기 핵심이론+과년도', author: '오민정', publisher: '모아교육그룹', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791168044913', imageUrl: 'https://image.aladin.co.kr/product/37897/35/coversum/k962033625_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+모아+가스산업기사+필기' },
    { title: '2026 나합격 가스산업기사 필기 핵심이론+8개년 기출', author: '이윤기', publisher: '삼원북스', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9791193858837', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193858837.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스산업기사+핵심이론' },
    { title: '2026 가스산업기사 필기 과년도 출제문제 해설', author: '서상희', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], isbn: '9788942920518', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920518.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+과년도' },
    // 추천수험서 5
    { title: '2026 모아 가스산업기사 필기 빵꾸노트', author: '오민정', publisher: '모아교육그룹', price: 9900, originalPrice: 11000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791168041950', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168041950.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+모아+가스산업기사+빵꾸노트' },
    { title: '2026 가스산업기사 필기 기출문제집', author: '김재호', publisher: '예문사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788931713688', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713688.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+기출문제집' },
    { title: '2026 가스산업기사 실기 완전정복', author: '서상희', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+실기' },
    { title: '2026 가스산업기사 CBT 최신기출문제해설', author: '이윤기', publisher: '삼원북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+CBT' },
  ],

  // ────────────────────────────────────────
  '가스기능사': [
    // 베스트셀러 5
    { title: '2026 나합격 가스기능사 필기+실기+무료특강', author: '이윤기', publisher: '삼원북스', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791194997436', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997436.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스기능사+필기' },
    { title: '2026 가스기능사 필기 총정리', author: '서상희', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], isbn: '9788942920402', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920402.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+필기+총정리' },
    { title: '2026 에듀윌 가스기능사 필기 2주끝장', author: '양성진', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 213, tags: ['베스트'], isbn: '9791136038852', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038852.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+가스기능사+필기' },
    { title: '2026 모아 가스기능사 필기 핵심이론+과년도 12개년', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], isbn: '9791168044906', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168044906.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+모아+가스기능사+필기' },
    { title: '2026 가스기능사 필기 과년도 출제문제 해설', author: '서상희', publisher: '일진사', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 154, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942921010.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+과년도' },
    // 추천수험서 5
    { title: '홍까스와 함께하는 가스기능사 필기 핵심강의노트', author: '홍경표', publisher: '에듀피디', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 132, tags: ['추천'], isbn: '9791155865668', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791155865668.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=홍까스+가스기능사+필기' },
    { title: '2026 가스기능사 필기 CBT 기출문제집', author: '김재호', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9788931584684', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931584684.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+CBT' },
    { title: '2026 가스기능사 필기 한권끝장', author: '이윤기', publisher: '삼원북스', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+필기+한권끝장' },
    { title: '2026 가스기능사 실기 완전정복', author: '서상희', publisher: '일진사', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+실기' },
    { title: '2026 Win-Q 가스기능사 필기 단기합격', author: '함성훈', publisher: '시대에듀', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 73, tags: ['추천'], isbn: '9791138398435', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138398435.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+가스기능사' },
  ],

  // ────────────────────────────────────────
  '가스기능장': [
    // 베스트셀러 5
    { title: '2026 완벽대비 가스기능장 필기', author: '서상희', publisher: '동일출판사', price: 38000, originalPrice: 40000, discount: '5%', rating: 4.6, reviews: 145, tags: ['베스트'], isbn: '9788938117113', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117113.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+필기+완벽대비' },
    { title: '2026 초단기완성! 가스기능장 필기', author: '노진식', publisher: '책과상상', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 112, tags: ['베스트'], isbn: '9791169673358', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673358.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+초단기완성+가스기능장' },
    { title: '단기완성 가스기능장 필기 최근 기출문제', author: '최갑규', publisher: '세진북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 98, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157458103.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+필기+기출문제' },
    { title: '가스기능장 필기 과년도 기출문제', author: '권오수 외', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 87, tags: ['베스트'], isbn: '9788927456551', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927456551.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+과년도+기출문제' },
    { title: '한권으로 필기와 실기를 끝내는 가스기능장', author: '최갑규', publisher: '세진북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 76, tags: ['베스트'], isbn: '9791157457007', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157457007.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+필기+실기+한권' },
    // 추천수험서 5
    { title: '가스기능장 실기 완전정복', author: '최갑규', publisher: '세진북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.3, reviews: 43, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+실기' },
  ],

  // ────────────────────────────────────────
  '정보보안기사': [
    // 베스트셀러 5
    { title: '2026 알기사 정보보안기사(산업기사) 필기+핵심기출 1200제 세트', author: '조현준', publisher: '지안에듀', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218322836'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218322836' },
    { title: '2026 이기적 정보보안기사 필기+실기 올인원', author: '임호진', publisher: '영진닷컴', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218331600'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218331600' },
    { title: '2026 수제비 정보보안기사 필기 기본서', author: '윤영빈 외', publisher: '수제비', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218353373'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218353373' },
    // 추천수험서 5
    { title: '2026 알기사 정보보안기사(산업기사) 실기', author: '정일영', publisher: '지안에듀', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: KB('S000219083573'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219083573' },
    { title: '2026 이기적 정보보안기사 필기 기출 1400제', author: '임호진', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9788931481310', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481310.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+정보보안기사+기출' },
  ],

  // ────────────────────────────────────────
  '빅데이터분석기사': [
    // 베스트셀러 5
    { title: '2026 이기적 빅데이터분석기사 필기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: KB('S000217176100'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217176100' },
    { title: '2025 이기적 빅데이터분석기사 필기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('S000213942959'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213942959' },
    { title: '2026 에듀윌 빅데이터분석기사 필기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 267, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136041142.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+빅데이터분석기사+필기' },
    { title: '2025 수제비 빅데이터분석기사 필기', author: '윤영빈 외', publisher: '수제비', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000215667184'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215667184' },
    // 추천수험서 5
    { title: '2026 이기적 빅데이터분석기사 실기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 289, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931480344.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+빅데이터분석기사+실기' },
    { title: '2026 빅데이터 분석기사 파이썬 실기 완전정복', author: '이나람', publisher: '한빛미디어', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791199721623', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791199721623.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+빅데이터분석기사+파이썬+실기' },
    { title: '2026 에듀윌 빅데이터분석기사 실기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+빅데이터분석기사+실기' },
    { title: '2026 수제비 빅데이터분석기사 실기', author: '윤영빈 외', publisher: '수제비', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], isbn: '9791157677917', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157677917.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+수제비+빅데이터분석기사+실기' },
    { title: '2026 빅데이터분석기사 CBT 실전모의고사', author: '나홍석', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], isbn: '9791163864271', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791163864271.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+빅데이터분석기사+모의고사' },
  ],

  // ────────────────────────────────────────
  '컴퓨터활용능력1급': [
    // 베스트셀러 5
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 기본서', author: '길벗 R&D', publisher: '길벗', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.8, reviews: 578, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140713714.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴퓨터활용능력+1급+필기+기본서' },
    { title: '2026 이기적 컴퓨터활용능력 1급 필기 기본서', author: '홍태성', publisher: '영진닷컴', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 467, tags: ['베스트'], isbn: '9788931479294', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479294.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴퓨터활용능력+1급+필기' },
    { title: '2026 한 권으로 끝내는 시나공 컴활 1급 필기+실기', author: '길벗 R&D', publisher: '길벗', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 398, tags: ['베스트'], isbn: '9791140715879', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140715879.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+1급+필기+실기' },
    { title: '2026 이기적 컴퓨터활용능력 1급 필기+실기 올인원', author: '홍태성', publisher: '영진닷컴', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 345, tags: ['베스트'], isbn: '9788931479355', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479355.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴활+1급+올인원' },
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 총정리', author: '길벗 R&D', publisher: '길벗', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], isbn: '9791140715091', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140715091.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+1급+총정리' },
    // 추천수험서 5
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 기출문제집', author: '길벗 R&D', publisher: '길벗', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 245, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140716630.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+1급+기출문제집' },
    { title: '2026 에듀윌 컴퓨터활용능력 1급 필기 한권끝장', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791136037923', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136037923.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+컴퓨터활용능력+1급' },
    { title: '2026 컴퓨터활용능력 1급 CBT 기출예상문제집', author: '홍태성', publisher: '영진닷컴', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 143, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴활+1급+CBT' },
    { title: '2026 합격이 보이는 컴퓨터활용능력 1급 필기', author: '박윤정', publisher: '성안당', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9788931479645', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479645.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴퓨터활용능력+1급+합격' },
  ],

  // ────────────────────────────────────────
  '컴퓨터활용능력2급': [
    // 베스트셀러 5
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 기본서', author: '길벗 R&D', publisher: '길벗', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.8, reviews: 634, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140713721.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴퓨터활용능력+2급+필기+기본서' },
    { title: '2026 이기적 컴퓨터활용능력 2급 필기 기본서', author: '홍태성', publisher: '영진닷컴', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.7, reviews: 512, tags: ['베스트'], isbn: '9788931479300', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479300.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴퓨터활용능력+2급+필기' },
    { title: '2026 한 권으로 끝내는 시나공 컴활 2급 필기+실기', author: '길벗 R&D', publisher: '길벗', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140715886.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+2급+필기+실기' },
    { title: '2026 이기적 컴퓨터활용능력 2급 필기+실기 올인원', author: '홍태성', publisher: '영진닷컴', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], isbn: '9788931479362', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479362.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴활+2급+올인원' },
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 총정리', author: '길벗 R&D', publisher: '길벗', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], isbn: '9791140715107', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140715107.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+2급+총정리' },
    // 추천수험서 5
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 기출문제집', author: '길벗 R&D', publisher: '길벗', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140716647.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+2급+기출문제집' },
    { title: '2026 에듀윌 컴퓨터활용능력 2급 필기 한권끝장', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], isbn: '9791136037947', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136037947.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+컴퓨터활용능력+2급' },
    { title: '2026 컴활 2급 필기 CBT 기출예상문제집', author: '홍태성', publisher: '영진닷컴', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴활+2급+CBT' },
  ],

  // ────────────────────────────────────────
  'ADsP': [
    // 베스트셀러 5
    { title: '2026 최신개정 ADsP 데이터분석 준전문가', author: '윤종식', publisher: '데이터에듀', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], isbn: '9791193672389', imageUrl: 'https://image.aladin.co.kr/product/38153/18/coversum/k852034408_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+데이터분석+준전문가+윤종식' },
    { title: '이지패스 2026 ADsP 데이터분석 준전문가', author: '전용문', publisher: '위키북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158396510.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이지패스+2026+ADsP' },
    { title: '2026 이기적 ADsP 데이터분석 준전문가 이론서+기출문제', author: '임경덕', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], isbn: '9788931477207', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931477207.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+ADsP' },
    { title: '2026 에듀윌 데이터분석 준전문가 ADsP 2주끝장', author: '윤소영', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 213, tags: ['베스트'], isbn: '9791136040121', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040121.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+ADsP' },
    { title: '2026 선넘는 ADsP 데이터분석 준전문가 라임북', author: '공석민', publisher: '쏠티북스', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], isbn: '9791192967363', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192967363.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+선넘는+ADsP+라임북' },
    // 추천수험서 5
    { title: '2026 박문각 ADsP 기출원스톱 400제+무료특강', author: '육근수', publisher: '박문각', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791175194472', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175194472.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+박문각+ADsP+기출원스톱' },
    { title: '2026 ADsP 핵심요약+실전문제', author: '윤종식', publisher: '데이터에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 108, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+핵심요약+실전문제' },
    { title: '2026 데이터 분석 준전문가 ADsP 단기완성', author: '이재원', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 89, tags: ['추천'], isbn: '9791163864998', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791163864998.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+단기완성' },
    { title: '2026 ADsP 기출문제 완전정복', author: '전용문', publisher: '위키북스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+기출문제+완전정복' },
  ],

  // ────────────────────────────────────────
  'SQLD': [
    // 베스트셀러 5
    { title: '2026 빠르게 따는 SQLD SQL 개발자', author: '이유성, 조영훈, 임한울', publisher: '골든래빗(주)', price: 21600, originalPrice: 24000, discount: '10%', rating: 5.0, reviews: 27, tags: ['베스트'], isbn: '9791194383710', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194383710.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219025005' },
    { title: '2026 에듀윌 SQLD SQL 개발자 2주끝장+무료특강', author: '김남규', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.9, reviews: 23, tags: ['베스트'], isbn: '9791136040596', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040596.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218965390' },
    { title: '2026 이기적 SQLD SQL 개발자 기본서 이론+기출문제', author: '강태우', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.7, reviews: 87, tags: ['베스트'], isbn: '9788931477849', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931477849.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217937565' },
    { title: '2027 한 권으로 끝내는 시나공 SQLD', author: '서동재', publisher: '길벗', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 21, tags: ['베스트'], isbn: '9791140719457', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140719457.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220308524' },
    { title: '이지패스 2026 SQLD SQL 개발자', author: '전용문, 송영민', publisher: '위키북스', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 172, tags: ['베스트'], isbn: '9791158396589', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158396589.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218962409' },
    // 추천수험서 5
    { title: '2024 국가공인 SQLD 자격검정 핵심노트', author: '조시형, 신동민, 정희락, 김경수', publisher: '디비안(주)(DBian)', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.0, reviews: 4, tags: ['추천'], isbn: '9791191941067', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191941067.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000212773783' },
    { title: 'SQL 자격검정 실전문제', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 18000, rating: 4.9, reviews: 207, tags: ['추천'], isbn: '9788988474914', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788988474914.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000212021705' },
    { title: '2026 아이리포 SQL 개발자 SQLD 모든 것', author: '조용학', publisher: '아이리포', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 65, tags: ['추천'], isbn: '9791193747094', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193747094.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218822223' },
    { title: '2026 시대에듀 유선배 SQL개발자(SQLD) 합격노트', author: '정미나', publisher: '시대고시기획', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.2, reviews: 23, tags: ['추천'], isbn: '9791143402929', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143402929.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218641284' },
  ],

  // ────────────────────────────────────────
  'SQLP': [
    // 베스트셀러 5
    { title: '2024 국가공인 SQLP 자격검정 핵심노트 1', author: '조시형', publisher: '디비안(주)(DBian)', price: 32000, tags: ['베스트'], isbn: '9791191941081', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191941081.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000213913597' },
    { title: '2024 국가공인 SQLP 자격검정 핵심노트 2', author: '조시형', publisher: '디비안(주)(DBian)', price: 32000, rating: 5.0, reviews: 4, tags: ['베스트'], isbn: '9791191941098', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191941098.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000213914864' },
    { title: 'SQL 전문가 가이드', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 50000, rating: 4.9, reviews: 32, tags: ['베스트'], isbn: '9788988474860', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788988474860.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001399869' },
    { title: 'SQL 자격검정 실전문제', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 18000, rating: 4.9, reviews: 207, tags: ['베스트'], isbn: '9788988474914', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788988474914.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000212021705' },
    { title: '친절한 SQL 튜닝', author: '조시형', publisher: '디비안(주)(DBian)', price: 34200, originalPrice: 38000, discount: '10%', rating: 5.0, reviews: 61, tags: ['베스트'], isbn: '9791196395704', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791196395704.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001975837' },
    // 추천수험서 5
    { title: '오라클 성능 고도화 원리와 해법 1', author: '조시형', publisher: '디비안(주)(DBian)', price: 39000, rating: 5.0, reviews: 17, tags: ['추천'], isbn: '9791191941043', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191941043.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000061696047' },
    { title: '데이터아키텍처 전문가 가이드', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 50000, rating: 4.9, reviews: 32, tags: ['추천'], isbn: '9788988474877', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788988474877.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001399870' },
  ],

  // ────────────────────────────────────────
  '토목기사': [
    // 베스트셀러 5
    { title: '2026 토목기사 필기 4주완성 핵심 및 과년도', author: '이상도 외', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547461.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+토목기사+한솔아카데미' },
    { title: '2026 에듀윌 토목기사 필기 한권끝장', author: '에듀윌 토목수험연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+토목기사' },
    { title: '2026 나합격 토목기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791194997696', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997696.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+토목기사' },
    { title: '2026 토목기사 필기 과년도 10개년 문제풀이', author: '채수하 외', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], isbn: '9788927462088', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927462088.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+토목기사+과년도' },
    // 추천수험서 5
    { title: '2026 토목기사·산업기사 응용역학 핵심이론', author: '안광호 외', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791166547485', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547485.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+토목기사+응용역학' },
    { title: '2026 토목기사 실기 완전정복', author: '이상도 외', publisher: '한솔아카데미', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+토목기사+실기' },
    { title: '2026 스마트 7개년 토목기사 과년도 기출해설', author: '허원회 외', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931511604', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511604.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+토목기사+성안당' },
  ],

  // ────────────────────────────────────────
  '건축기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 건축기사 필기 한권끝장', author: '김강섭', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218473002'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218473002' },
    { title: '2026 에듀윌 건축기사 필기 10+2개년 기출문제집', author: '최하진', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218189843'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218189843' },
    { title: '2026 나합격 건축기사 필기+무료특강', author: '김해솔', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997689.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+건축기사' },
    // 추천수험서 5
    { title: '2025 에듀윌 건축기사 실기 한권끝장', author: '김강섭', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('S000215791790'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215791790' },
    { title: '2026 벼락치기 건축기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931707526', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931707526.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건축기사+벼락치기' },
    { title: '2026 건축기사 필기 7개년 기출문제해설', author: '허원회 외', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143400307.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건축기사+성안당' },
  ],

  // ────────────────────────────────────────
  '산업안전기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 산업안전기사 필기 한권끝장 이론편+기출문제편', author: '최창률', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: KB('S000217541246'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217541246' },
    { title: '2026 직8딴 직접 8일 만에 딴 산업안전기사 필기', author: '김진태', publisher: '김영북스', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], imageUrl: KB('S000218942319'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218942319' },
    { title: '2026 나합격 산업안전기사 필기+무료특강+온라인CBT', author: '김현우, 허선혜', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('S000217478393'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217478393' },
    { title: '2026 해커스 산업안전기사 필기 핵심요약+기출', author: '해커스자격증', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788969656308.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+산업안전기사+필기' },
    // 추천수험서 5
    { title: '2026 벼락치기 산업안전기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713930.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전기사+벼락치기' },
    { title: '2026 스마트 산업안전기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791168756649', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756649.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전기사+과년도' },
    { title: '2026 산업안전기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 167, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038876.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전기사+CBT' },
    { title: '2025 에듀윌 산업안전기사 실기 한권끝장 세트', author: '최창률', publisher: '에듀윌', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.3, reviews: 134, tags: ['추천'], imageUrl: KB('S000214965114'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214965114' },
  ],

  '건설안전기술사': [
    // 베스트셀러 5
    { title: '건설안전기술사 면접 완전정복', author: '박용기', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 91, tags: ['베스트'], isbn: '9788927441137', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927441137.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+면접' },
    { title: '건설안전기술사 최신 기출 해설집', author: '김재원', publisher: '일진사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 74, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788936327125.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+최신기출' },
    // 추천수험서 5
  ],

  '소방기술사': [
    // 베스트셀러 5
    { title: '소방기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 71, tags: ['베스트'], isbn: '9791168043121', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168043121.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+최신기출' },
    // 추천수험서 5
    { title: '소방기술사 법규 핵심정리', author: '최용국', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 65, tags: ['추천'], isbn: '9791157451654', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157451654.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+법규' },
  ],

  '발송배전기술사': [
    // 베스트셀러 5
    { title: '발송배전기술사 최신 기출 해설집', author: '정성훈', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 67, tags: ['베스트'], isbn: '9788973742561', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788973742561.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+최신기출' },
    // 추천수험서 5
    { title: '발송배전기술사 전력계통 심화', author: '이경민', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 76, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931525311.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+전력계통' },
  ],

  '전기응용기술사': [
    // 베스트셀러 5
    { title: '전기응용기술사 최신 기출 해설집', author: '김재원', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 61, tags: ['베스트'], isbn: '9791187180029', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791187180029.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+최신기출' },
    // 추천수험서 5
    { title: '전기응용기술사 전기철도 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 57, tags: ['추천'], isbn: '9788931527629', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931527629.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+전기철도' },
  ],

  '기계기술사': [
    // 베스트셀러 5
    { title: '기계기술사 면접 완전정복', author: '최용국', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 109, tags: ['베스트'], isbn: '9791158136659', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158136659.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+면접' },
    { title: '기계기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 88, tags: ['베스트'], isbn: '9791124092057', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124092057.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+최신기출' },
    // 추천수험서 5
  ],

  '화공기술사': [
    // 베스트셀러 5
    // 추천수험서 5
  ],

  '가스기술사': [
    // 베스트셀러 5
    { title: '가스기술사 기출문제 완전분석', author: '박재현', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 107, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157676903.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+기출문제' },
    // 추천수험서 5
  ],

  '정보관리기술사': [
    // 베스트셀러 5
    // 추천수험서 5
    { title: '정보관리기술사 데이터베이스 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 88, tags: ['추천'], isbn: '9788931555028', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931555028.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+데이터베이스' },
    { title: '정보관리기술사 소프트웨어공학 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931559972.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+소프트웨어공학' },
  ],

  '컴퓨터시스템응용기술사': [
    // 베스트셀러 5
    // 추천수험서 5
  ],

  '토목기술사': [
    // 베스트셀러 5
    { title: '토목기술사 면접 완전정복', author: '정재수', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 122, tags: ['베스트'], isbn: '9788982547034', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788982547034.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+면접' },
    { title: '토목기술사 최신 기출 해설집', author: '이경민', publisher: '일진사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 98, tags: ['베스트'], isbn: '9788931569230', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931569230.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+최신기출' },
    // 추천수험서 5
  ],

  // ────────────────────────────────────────
  '간호사': [
    // 베스트셀러 5
    { title: '2027 에듀팩토리 간호사 국시 5개년 기출문제집', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 1245, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국시+기출문제+2027' },
    // 추천수험서 5
    { title: '2027 성인간호학 한권완성 국시 핵심요약', author: '이은희 외', publisher: '군자출판사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 876, tags: ['추천'], isbn: '9791173841477', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173841477.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=성인간호학+국시+핵심요약+2027' },
    { title: '2027 간호관리학 국시 완전정복', author: '김진희', publisher: '메디시언', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 743, tags: ['추천'], isbn: '9791194995296', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194995296.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호관리학+국시+2027' },
    { title: '2027 정신간호학 국시 핵심이론+기출', author: '박영숙', publisher: '에듀팩토리', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 634, tags: ['추천'], isbn: '9791194995289', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194995289.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정신간호학+국시+2027' },
    { title: '2027 지역사회간호학 국시 단기완성', author: '이정희', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 521, tags: ['추천'], isbn: '9791194995272', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194995272.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=지역사회간호학+국시+2027' },
    { title: '2027 간호사 국시를 위한 보건의약관계법규 알Zip 핵심노트', author: '김희영', publisher: '마지원', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 412, tags: ['추천'], isbn: '9791124295137', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124295137.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220271667' },
  ],

  // ────────────────────────────────────────
  '임상병리사': [
    // 베스트셀러 5
    { title: '2027 임상병리사 기출문제 완전분석 10개년', author: '군자출판사 편집부', publisher: '군자출판사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 612, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상병리사+기출문제+10개년+2027' },
    { title: '2027 임상화학 핵심이론+문제', author: '이상철', publisher: '고려의학', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 498, tags: ['베스트'], isbn: '9791192422015', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192422015.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상화학+핵심이론+2027' },
    { title: '2027 임상미생물학 핵심요약', author: '박재원', publisher: '고려의학', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], isbn: '9791192422763', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192422763.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상미생물학+핵심요약+2027' },
    // 추천수험서 5
    { title: '2027 임상생리학 핵심이론+기출', author: '한상훈', publisher: '메디시언', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9791124381038', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124381038.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상생리학+핵심이론+2027' },
    { title: '2027 요·체액검사 단기완성', author: '김미래', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9791159431043', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791159431043.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요검사+체액검사+임상병리사+2027' },
    { title: '2027 임상병리사 모의고사 5회분', author: '박재현', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상병리사+모의고사+2027' },
  ],

  // ────────────────────────────────────────
  '방사선사': [
    // 베스트셀러 5
    { title: '2027 의료영상학 핵심이론+기출', author: '박상훈', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 356, tags: ['베스트'], isbn: '9791189487980', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791189487980.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의료영상학+방사선사+2027' },
    { title: '2027 핵의학기술학+방사선치료물리학 완성', author: '김동현', publisher: '고려의학', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 289, tags: ['베스트'], isbn: '9788980163717', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788980163717.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=핵의학기술학+방사선사+2027' },
    // 추천수험서 5
    { title: '2027 방사선생물학 핵심이론 단기완성', author: '최재원', publisher: '군자출판사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9788973868285', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788973868285.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선생물학+2027' },
  ],

  // ────────────────────────────────────────
  '물리치료사': [
    // 베스트셀러 5
    { title: '2027 물리치료사 국가시험 핵심요약 총정리', author: '대한물리치료사협회 편집부', publisher: '고려의학', price: 52200, originalPrice: 58000, discount: '10%', rating: 4.8, reviews: 789, tags: ['베스트'], isbn: '9788969400550', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788969400550.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리치료사+국가시험+핵심요약+2027' },
    { title: '2027 물리치료사 기출문제 완전분석 10개년', author: '군자출판사 편집부', publisher: '군자출판사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 634, tags: ['베스트'], isbn: '9788960697539', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788960697539.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리치료사+기출문제+2027' },
    { title: '2027 근골격계 물리치료학 완전정복', author: '이재훈', publisher: '고려의학', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 523, tags: ['베스트'], isbn: '9788957415375', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788957415375.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=근골격계+물리치료학+2027' },
    { title: '2027 신경계 물리치료학 핵심이론+기출', author: '박진수', publisher: '메디시언', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 445, tags: ['베스트'], isbn: '9791159435171', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791159435171.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=신경계+물리치료학+2027' },
    { title: '2027 물리인자치료학 완전정복', author: '김상호', publisher: '군자출판사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 367, tags: ['베스트'], isbn: '9791163752431', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791163752431.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리인자치료학+2027' },
    // 추천수험서 5
  ],

  // ────────────────────────────────────────
  '응급구조사1급': [
    // 베스트셀러 5
    { title: '2027 응급구조사 1급 국가시험 핵심요약 총정리', author: '대한응급구조사협회 편집부', publisher: '군자출판사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 534, tags: ['베스트'], isbn: '9788985210058', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788985210058.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+1급+국가시험+핵심요약+2027' },
    { title: '2027 응급처치론 핵심이론+기출', author: '박상호', publisher: '메디시언', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], isbn: '9791176440936', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791176440936.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급처치론+핵심이론+2027' },
    // 추천수험서 5
    { title: '2027 외상응급처치 핵심정리', author: '박재현', publisher: '군자출판사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788985578707', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788985578707.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=외상응급처치+응급구조사+2027' },
  ],

  // ────────────────────────────────────────
  '치과위생사': [
    // 베스트셀러 5
    // 추천수험서 5
    { title: '2027 임상치위생학 핵심이론+기출', author: '박민희', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788957418796', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788957418796.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상치위생학+2027' },
  ],

  '간호조무사': [
    { title: '2026 간호조무사 국가시험 핵심요약 총정리', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 1240, tags: ['베스트'], isbn: '9788961544764', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788961544764.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+국가시험+핵심요약+2026' },
    { title: '2026 간호조무사 기출문제 10개년 완전분석', author: '박문각 편집부', publisher: '박문각', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+기출문제+10개년+2026' },
    { title: '2026 간호조무사 핵심이론+실전문제집', author: '수문사 편집부', publisher: '수문사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 856, tags: ['베스트'], isbn: '9791169417679', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169417679.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+핵심이론+실전문제+2026' },
    { title: '2026 간호조무사 국가시험 최신기출 5개년', author: '이지패스 편집부', publisher: '이지패스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 634, tags: ['베스트'], isbn: '9788931686289', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931686289.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+최신기출+5개년+2026' },
    { title: '2026 간호조무사 벼락치기 핵심노트', author: '김민지', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 445, tags: ['베스트'], isbn: '9791197473906', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791197473906.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+벼락치기+2026' },
    { title: '2026 간호조무사 보건간호학개요 집중공략', author: '이정희', publisher: '수문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 378, tags: ['추천'], isbn: '9788940650813', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940650813.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+보건간호학개요+2026' },
    { title: '2026 간호조무사 의료관계법규 완성', author: '박재현', publisher: '박문각', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.5, reviews: 312, tags: ['추천'], isbn: '9791138337489', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138337489.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+의료관계법규+2026' },
    { title: '2026 간호조무사 모의고사 10회분', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 198, tags: ['추천'], isbn: '9791136043214', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136043214.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+모의고사+10회분+2026' },
    { title: '2026 간호조무사 공중보건학+기초간호학 통합', author: '김수연', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], isbn: '9788961544740', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788961544740.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+공중보건학+기초간호학+2026' },
  ],

  '작업치료사': [
    { title: '2026 작업치료사 국가시험 핵심요약 총정리', author: '대한작업치료사협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 523, tags: ['베스트'], isbn: '9788995300022', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788995300022.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+국가시험+핵심요약+2026' },
    { title: '2026 작업치료사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143416865.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+모의고사+5회분+2026' },
    { title: '2026 작업치료사 일상생활활동 이론+실기', author: '최수진', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791163754657', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791163754657.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+일상생활활동+2026' },
  ],

  '응급구조사2급': [
  ],

  '요양보호사': [
    { title: '2026 요양보호사 최종모의고사 5회분', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2340, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649718.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+최종모의고사+2026' },
    { title: '2026 요양보호사 핵심요약+기출문제집', author: '박문각 편집부', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1987, tags: ['베스트'], isbn: '9788998581640', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788998581640.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+핵심요약+기출문제+2026' },
    { title: '2026 요양보호사 필기+실기 한권완성', author: '이지패스 편집부', publisher: '이지패스', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 1654, tags: ['베스트'], isbn: '9791125748021', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791125748021.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+필기+실기+한권완성+2026' },
    { title: '2026 요양보호사 기출문제 10개년 완전분석', author: '성안당 편집부', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['베스트'], isbn: '9788927775881', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927775881.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+기출문제+10개년+2026' },
    { title: '2026 요양보호사 벼락치기 핵심노트', author: '김민지', publisher: '에듀팩토리', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 987, tags: ['베스트'], isbn: '9788927775874', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927775874.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+벼락치기+핵심노트+2026' },
    { title: '2026 요양보호사 노인요양 실기 완성', author: '이정희', publisher: '박문각', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 756, tags: ['추천'], isbn: '9791172346249', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172346249.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+노인요양+실기+2026' },
  ],

  '보건의료정보관리사': [
    { title: '2026 의무기록사 국가시험 핵심요약 총정리', author: '대한의무기록협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], isbn: '9788961303569', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788961303569.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+국가시험+핵심요약+2026' },
    { title: '2026 의무기록사 기출문제 완전분석', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 267, tags: ['베스트'], isbn: '9791191036626', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191036626.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+기출문제+완전분석+2026' },
  ],

  '보건교육사': [
    { title: '2026 보건교육사 보건교육학 핵심이론', author: '고려의학 편집부', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791190839457', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791190839457.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+보건교육학+핵심이론+2026' },
    { title: '2026 보건교육사 보건의사소통 핵심정리', author: '최민정', publisher: '고려의학', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], isbn: '9788962201239', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788962201239.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+보건의사소통+2026' },
  ],

  '위생사': [
    { title: '2026 위생사 국가시험 핵심요약 총정리', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], isbn: '9791170684206', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791170684206.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+국가시험+핵심요약+2026' },
    { title: '2026 위생사 기출문제 완전분석', author: '박문각 편집부', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], isbn: '9791143410191', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143410191.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+기출문제+완전분석+2026' },
    { title: '2026 위생사 공중보건학 핵심이론', author: '고려의학 편집부', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791188944675', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791188944675.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+공중보건학+핵심이론+2026' },
    { title: '2026 위생사 모의고사 5회분', author: '박문각 편집부', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 123, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143413260.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+모의고사+5회분+2026' },
    { title: '2026 위생사 의료관계법규 핵심정리', author: '이민수', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], isbn: '9791188516711', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791188516711.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+의료관계법규+2026' },
  ],


  '토목산업기사': [
    { title: '2026 토목산업기사 필기 4주완성 8개년 과년도 문제해설', author: '이상도, 정경동, 고길용, 안광호 외', publisher: '한솔아카데미', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목산업기사+필기+4주완성+2026' },
    { title: '2026 토목설계 물량산출 도면작도 토목산업기사 실기시험 대비', author: '한성천', publisher: '금호출판사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9788998269081', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788998269081.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목산업기사+실기+물량산출+도면작도+2026' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 4: 철근콘크리트 및 강구조', author: '고영주', publisher: '성안당', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931569841.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+철근콘크리트' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 5: 토질 및 기초', author: '박영태', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9788931511659', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511659.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+토질' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 2: 측량학', author: '송낙원, 송용희', publisher: '성안당', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9788931511628', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511628.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+측량학' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 6: 상하수도공학', author: '박재성', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9788931511666', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511666.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+상하수도공학' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 3: 수리수문학', author: '박영태', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931511635', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511635.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+수리수문학' },
    { title: '철도토목기사.산업기사 필기.실기 합격 바이블', author: '정대호, 정찬묵, 배석복', publisher: 'CIR', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791156109501', imageUrl: 'https://image.aladin.co.kr/product/26895/63/coversum/k602730508_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=철도토목기사+산업기사+합격+바이블' },
    { title: '2026 토목산업기사 필기 4주완성', author: '이상도 외', publisher: '한솔아카데미', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목산업기사+필기+한솔아카데미+2026' },
    { title: '2025 토목기사/토목산업기사 핵심시리즈: 토목일반', author: '이상도', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+성안당' },
  ],

  '건축산업기사': [
    { title: '2026 건축산업기사 필기 4주완성', author: '남재호, 송우용', publisher: '한솔아카데미', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], isbn: '9791166547416', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547416.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+필기+4주완성+2026' },
    { title: '2026 건축산업기사 필기 7개년 필기 경향문제', author: '한솔아카데미 수험연구회', publisher: '한솔아카데미', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791166548307', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166548307.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+필기+7개년+2026' },
    { title: '2026 건축산업기사 실기 The Bible', author: '안광호, 백종엽, 이병억', publisher: '한솔아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], isbn: '9791166548420', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166548420.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+실기+The+Bible+2026' },
    { title: '2027 하이패스 건축산업기사 필기 기출문제집', author: '안남식', publisher: '서울고시각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9788952653369', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788952653369.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=하이패스+건축산업기사+필기+기출문제집' },
    { title: '2025 미듬 건축산업기사 실기 1·2', author: '임근재', publisher: '멘토스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791193772041', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193772041.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=미듬+건축산업기사+실기' },
    { title: '2026 스마트 실내건축산업기사 작업형 실기', author: '황두환', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931512427.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축산업기사+작업형+실기+2026' },
    { title: '2026 건축산업기사 필기 핵심이론', author: '남재호', publisher: '한솔아카데미', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9791168042117', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168042117.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+필기+핵심이론+한솔아카데미' },
    { title: '최신판 이패스 실내건축기사(산업기사) 실기 작업형', author: '강덕진', publisher: '이패스코리아', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172095109.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+실내건축기사+산업기사+실기+작업형' },
    { title: '2026 건축산업기사 실기 단기완성', author: '안광호', publisher: '한솔아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166540158.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+실기+단기완성+2026' },
    { title: '2026 실전 단기 완성 건축설비산업기사 실기', author: '조성안', publisher: '기문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194568483.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축설비산업기사+실기+2026' },
  ],

  '실내건축기사': [
    { title: '2026 실내건축기사 4주완성 세트 - 전2권', author: '남재호', publisher: '한솔아카데미', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], isbn: '9791166548017', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166548017.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+4주완성+세트+2026' },
    { title: '2027 나합격 실내건축기사 필기[핵심이론+17개년 기출]', author: '김수진', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997726.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+실내건축기사+필기+핵심이론' },
    { title: '2026 실내건축기사 필기 - 전2권', author: '유희정, 이석훈', publisher: '예문사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], isbn: '9788927459477', imageUrl: 'https://image.aladin.co.kr/product/37276/66/coversum/8927459474_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+필기+예문사+2026' },
    { title: '2027 스마트 실내건축기사 시공실무 필답형 실기', author: '김태민, 전명숙', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931512502.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스마트+실내건축기사+시공실무+필답형+실기' },
    { title: '최신판 이패스 실내건축기사(산업기사) 실기 작업형', author: '강덕진', publisher: '이패스코리아', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172095109.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+실내건축기사+산업기사+실기+작업형' },
    { title: '2026 실내건축기사 실기 시공실무', author: '한석우', publisher: '이패스코리아', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172093181.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+실기+시공실무+이패스코리아+2026' },
    { title: '2025 실내건축기사 필기 문제해설', author: '이상화', publisher: '엔플북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9788968134173', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788968134173.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+필기+문제해설+엔플북스' },
    { title: '2026 스마트 실내건축산업기사 작업형 실기', author: '황두환', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931512427.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축산업기사+작업형+실기+성안당+2026' },
    { title: '2026 실내건축기사 필기 단기완성', author: '남재호', publisher: '한솔아카데미', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], isbn: '9791125489214', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791125489214.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+필기+단기완성+한솔아카데미' },
    { title: '2026 실내건축기사 실기', author: '유희정', publisher: '예문사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+실기+예문사+2026' },
  ],

  '조경기사': [
    { title: '2026 조경기사.산업기사 필기 단기완성', author: '이윤진', publisher: '한솔아카데미', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], imageUrl: 'https://image.aladin.co.kr/product/37955/12/coversum/k522033657_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+산업기사+필기+단기완성+2026' },
    { title: '2026 시대에듀 조경기사·산업기사 필기 한권으로 합격하기', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143404251.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+필기+한권으로+합격+2026' },
    { title: '2026 조경기사·조경산업기사 실기 필답형·작업형', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166545269.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+조경산업기사+실기+필답형+작업형+2026' },
    { title: 'Conquest 조경기사·조경산업기사 실기정복 - 개정15판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160280333.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+실기정복' },
    { title: '2026 시대에듀 조경기사 필기 기출문제집', author: '최평희', publisher: '시대에듀', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9791143409058', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143409058.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+필기+기출문제집+2026' },
    { title: '2026 시대에듀 조경기사·산업기사 실기 한권으로 끝내기', author: '이우설', publisher: '시대에듀', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.6, reviews: 223, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143406606.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+실기+한권으로+끝내기+2026' },
    { title: '최신개정판 Conquest 조경기사.조경산업기사 필기정복 - 개정13판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160280326.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+필기정복' },
    { title: '202X 조경기사 필기 - 서양조경사 계보 수록', author: '구민아', publisher: '구민사', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791168756687', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756687.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+필기+구민사' },
    { title: '2026 조경기사 필기 핵심이론 기출문제', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+필기+핵심이론+기출문제+2026' },
    { title: '2026 조경기사 단기완성 실기', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+단기완성+실기+한솔아카데미+2026' },
  ],

  '조경산업기사': [
    { title: '2026 조경기사.산업기사 필기 단기완성', author: '이윤진', publisher: '한솔아카데미', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: 'https://image.aladin.co.kr/product/37955/12/coversum/k522033657_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+산업기사+필기+단기완성+2026' },
    { title: '2026 시대에듀 조경기사·산업기사 필기 한권으로 합격하기', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143404251.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+필기+한권으로+합격+2026' },
    { title: '2026 조경기사·조경산업기사 실기 필답형·작업형', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166545269.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+조경산업기사+실기+필답형+작업형+2026' },
    { title: '202X 조경산업기사 필기 - 서양조경사 계보 수록', author: '구민아', publisher: '구민사', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], isbn: '9791168756694', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756694.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+필기+구민사' },
    { title: 'Conquest 조경기사·조경산업기사 실기정복 - 개정15판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160280333.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+실기정복' },
    { title: '2026 시대에듀 조경기사·산업기사 실기 한권으로 끝내기', author: '이우설', publisher: '시대에듀', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143406606.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+실기+한권으로+끝내기+2026' },
    { title: '최신개정판 Conquest 조경기사.조경산업기사 필기정복 - 개정13판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160280326.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+필기정복' },
    { title: '조경산업기사 필기시험문제', author: '임권희', publisher: '크라운출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9788940623619', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940623619.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+필기시험문제+크라운' },
    { title: '2026 조경산업기사 실기', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: 'https://image.aladin.co.kr/product/39224/4/coversum/k252138089_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+실기+한솔아카데미+2026' },
  ],

  '조경기능사': [
    { title: '2026 나합격 조경기능사 필기+무료특강', author: '조은정', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791199411531.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+조경기능사+필기+2026' },
    { title: '2026 에듀윌 조경기능사 필기 2주끝장', author: '구태익', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], isbn: '9791136039361', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039361.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+조경기능사+필기+2주끝장+2026' },
    { title: '2026 조경기능사 필기 초단기 합격', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '지식오름', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9791174910233', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174910233.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+초단기+합격+2026' },
    { title: '2026 시대에듀 조경기능사 필기 한권으로 끝내기', author: '최광희', publisher: '시대에듀', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], isbn: '9791143400369', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143400369.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기능사+필기+한권으로+끝내기+2026' },
    { title: '2026 조경기능사 필기', author: '정용민, 오도정', publisher: '예문사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927458753.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+예문사+2026' },
    { title: '2026 조경기능사 필기', author: '한상엽', publisher: '한솔아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+한솔아카데미+2026' },
    { title: '2026 시대에듀 조경기능사 필기 기출문제집', author: '최광희', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791138397803', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138397803.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기능사+필기+기출문제집+2026' },
    { title: '2026 조경기능사 실기 초단기 합격', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '지식오름', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174910035.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+실기+초단기+합격+2026' },
    { title: '2026 조경기능사 실기', author: '정용민', publisher: '예문사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938504968.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+실기+예문사+2026' },
    { title: '2026 조경기능사 필기 단기완성', author: '조은정', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791191188073', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191188073.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+단기완성+2026' },
  ],

  '측량및지형공간정보기사': [
    { title: '2026 PASS 측량 및 지형공간정보기사 필기 - 전2권', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460909.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보기사+필기+2026' },
    { title: '2026 측량 및 지형공간정보기사 필기+핸드북', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756144.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+필기+핸드북+2026' },
    { title: '2026 PASS 측량 및 지형공간정보기사 실기', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460862.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보기사+실기+2026' },
    { title: '2026 측량 및 지형공간정보기사 실기', author: '이영욱, 이영수, 최병윤, 김도균', publisher: '구민사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756618.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+실기+구민사+2026' },
    { title: '2026 PASS 측량 및 지형공간정보기사 필기 과년도+CBT 모의고사', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460749.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보기사+과년도+CBT+2026' },
    { title: '2025 측량 및 지형공간정보기사 과년도', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168754980.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+과년도+구민사' },
    { title: '2026 PASS 측량 및 지형공간정보산업기사 필기 과년도+CBT 모의고사', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927456605.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보산업기사+필기+2026' },
    { title: '2026 측량 및 지형공간정보산업기사 필기', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756397.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보산업기사+필기+구민사+2026' },
    { title: '2026 측량 및 지형공간정보기사 핵심이론+기출문제', author: '이혜진', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+핵심이론+기출문제+2026' },
    { title: '2026 측량 및 지형공간정보기사 필기 단기완성', author: '이영수', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791138320696', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138320696.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+필기+단기완성+구민사' },
  ],

  '콘크리트기능사': [
    { title: '2026 CBT 대비 콘크리트기능사 필기+실기 3주 완성', author: '고길용, 염창열, 전지현', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547737.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+실기+3주+완성+2026' },
    { title: '2026 시대에듀 Win-Q 콘크리트기능사 필기+실기 단기합격', author: '최광희', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], isbn: '9791143401779', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143401779.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+콘크리트기능사+필기+실기+단기합격+2026' },
    { title: '2026 콘크리트기능사 필기+실기 한권 완성', author: '이관석', publisher: '예문사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927459033.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+실기+한권+완성+2026' },
    { title: '2026 콘크리트 기능사 필기 실기 - 개정증보 제21판', author: '김영국, 박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트+기능사+필기+실기+금호출판사+2026' },
    { title: '2025 콘크리트기능사 필기 실기 - 개정증보 제20판', author: '박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089232.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+실기+금호출판사+2025' },
    { title: '2024 콘크리트 기능사 필기', author: '박종삼', publisher: '금호출판사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089225.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트+기능사+필기+금호출판사+2024' },
    { title: '2026 콘크리트기능사 필기 3주 완성', author: '고길용', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+3주+완성+한솔아카데미' },
    { title: '2026 콘크리트기능사 기출문제 풀이', author: '이관석', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+기출문제+2026' },
    { title: '2026 콘크리트기능사 단기완성', author: '고길용', publisher: '한솔아카데미', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+단기완성+2026' },
  ],

  '측량기능사': [
    { title: '2026 CBT대비 측량기능사 필기 + 실기 3주완성', author: '염창열, 정병노, 고길용', publisher: '한솔아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547591.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+실기+3주완성+2026' },
    { title: '2026 측량기능사 필기 + 실기 한권 완성', author: '이영수, 김문기, 오건호', publisher: '예문사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+실기+한권+완성+2026' },
    { title: '2026 PASS 측량기능사 필기+실기', author: '박종해, 김민승, 민미란, 박동규', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9788927461562', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927461562.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량기능사+필기+실기+2026' },
    { title: '2026 시대에듀 Win-Q 측량기능사 필기 단기합격', author: '최광희', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791138396066', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138396066.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+측량기능사+필기+단기합격+2026' },
    { title: '2026 측량기능사 필기 및 실기', author: '김영국, 박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791192089348', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089348.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+실기+금호출판사+2026' },
    { title: '단기완성 측량기능사 필기 및 실기', author: '송용희', publisher: '지적EDU', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791187997665', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791187997665.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=단기완성+측량기능사+필기+실기+지적EDU' },
    { title: '2024 측량기능사 필기 이론 및 문제해설', author: '박종삼', publisher: '금호출판사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9791192089201', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089201.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+이론+문제해설+금호출판사' },
    { title: '2026 측량기능사 단기완성 핵심이론', author: '염창열', publisher: '한솔아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+단기완성+한솔아카데미+2026' },
    { title: '2026 측량기능사 실기 완성', author: '이영수', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9788927460466', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460466.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+실기+완성+예문사+2026' },
    { title: '2026 측량기능사 기출문제 해설', author: '박종해', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+기출문제+해설+2026' },
  ],

  '건설재료시험기능사': [
    { title: '2026 건설재료시험기능사 필기 및 실기', author: '박종삼', publisher: '금호출판사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], isbn: '9791192089300', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089300.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+필기+실기+금호출판사+2026' },
    { title: '2026 시대에듀 Win-Q 건설재료시험기능사 필기 단기합격', author: '최광희', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+건설재료시험기능사+필기+단기합격+2026' },
    { title: '2026 건설재료시험기능사 실기', author: '박종삼', publisher: '금호출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 223, tags: ['베스트'], isbn: '9791192089331', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089331.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+실기+금호출판사+2026' },
    { title: '2026 건설재료시험기능사 핵심이론 기출문제', author: '최광희', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+핵심이론+기출문제+2026' },
    { title: '2026 건설재료시험기능사 필기 단기완성', author: '박종삼', publisher: '금호출판사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+필기+단기완성+2026' },
    { title: '2026 건설재료시험기능사 필기 기출문제 풀이', author: '박종삼', publisher: '금호출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+필기+기출문제+금호출판사' },
  ],

  '건설안전기사': [
    { title: '2027 나합격 건설안전기사 필기 + 무료특강', author: '김현우, 허선혜', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], isbn: '9791194997948', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997948.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+건설안전기사+필기+무료특강' },
    { title: '2026 에듀윌 건설안전기사 필기 기출문제집', author: '김충민, 최석훈', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039873.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+건설안전기사+필기+기출문제집+2026' },
    { title: '2026 에듀윌 건설안전기사 실기 기출문제집', author: '최석훈, 김충민', publisher: '에듀윌', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9791136041180', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136041180.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+건설안전기사+실기+기출문제집+2026' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 건설안전기사 실기', author: '김진태', publisher: '김영북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491399.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+건설안전기사+실기+2026' },
    { title: '2026 건설안전기사 실기[필답형+작업형]', author: '최윤정', publisher: '구민사', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713732.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기사+실기+필답형+작업형+2026' },
    { title: '모아 건설안전기사 필기', author: '윤경화', publisher: '모아교육그룹', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 223, tags: ['추천'], isbn: '9791168045873', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045873.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+건설안전기사+필기' },
    { title: '모아 건설안전기사 실기', author: '윤경화', publisher: '모아교육그룹', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], isbn: '9791168045996', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045996.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+건설안전기사+실기' },
    { title: '2026 벼락치기 건설안전기사 필기 요점', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788931713954', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713954.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=벼락치기+건설안전기사+필기+요점+2026' },
    { title: '2026 건설안전기사 필기 핵심이론+기출문제', author: '김충민', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585575.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기사+필기+핵심이론+기출문제+2026' },
    { title: '2026 건설안전기사 단기완성 필기', author: '허선혜', publisher: '삼원북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791189757182', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791189757182.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기사+단기완성+필기+2026' },
  ],

  '소방설비산업기사(기계분야)': [
    { title: '2026 찐합격 소방설비산업기사 필기 (기계 ③)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.8, reviews: 489, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514131.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+필기+기계+2026' },
    { title: '2026 찐합격 소방설비산업기사 실기 (기계⑥)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514162.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+실기+기계+2026' },
    { title: '2026 찐합격 7개년 과년도 소방설비산업기사 필기 (기계 ③-7)', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514193.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+7개년+소방설비산업기사+필기+기계+2026' },
    { title: '2026 소방설비산업기사 필기 기출문제 (기계편)', author: '강석민', publisher: '세진북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157457366.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방설비산업기사+필기+기출문제+기계편+2026' },
    { title: '2026 소방설비산업기사 실기 단기완성', author: '공하성', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157455232.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방설비산업기사+실기+단기완성+2026' },
  ],

  '소방설비산업기사(전기분야)': [
    { title: '2026 찐합격 소방설비산업기사 필기 (전기 ③)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+필기+전기+2026' },
    { title: '2026 찐합격 소방설비산업기사 실기 (전기⑥)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514063.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+실기+전기+2026' },
    { title: '2026 찐합격 7개년 과년도 소방설비산업기사 필기 (전기 ③-7)', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514094.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+7개년+소방설비산업기사+필기+전기+2026' },
    { title: '2026 초격차 소방설비산업기사 과년도 7개년 실기 전기', author: '황모아, 오민정', publisher: '모아교육그룹', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], isbn: '9791168045187', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045187.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초격차+소방설비산업기사+실기+전기+2026' },
    { title: '2026 평생 무료 동영상과 함께하는 소방설비산업기사 필기 최근 기출문제(전기편)', author: '강석민, 정진홍', publisher: '세진북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157457373.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방설비산업기사+필기+기출문제+전기편+2026' },
  ],

  '소방시설관리사': [
    { title: '2027 버닝 업 소방시설관리사 필기 1차 세트', author: '황모아, 윤연호, 모성은 외', publisher: '모아교육그룹', price: 108000, originalPrice: 120000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168046214.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=버닝+업+소방시설관리사+필기+1차+세트' },
    { title: '2026 찐합격 31년 과년도 소방시설관리사 1차', author: '공하성', publisher: '성안당', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 289, tags: ['베스트'], isbn: '9788931513943', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931513943.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+31년+과년도+소방시설관리사+1차' },
    { title: '2026 찐합격 600제 소방시설관리사 2차', author: '공하성', publisher: '성안당', price: 72000, originalPrice: 80000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], isbn: '9788931513240', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931513240.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+600제+소방시설관리사+2차' },
    { title: '2027 버닝 업 소방시설관리사 필기 1차 전과목 과년도', author: '황모아, 윤연호, 모성은 외', publisher: '모아교육그룹', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 198, tags: ['베스트'], isbn: '9791168046269', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168046269.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=버닝+업+소방시설관리사+1차+전과목+과년도' },
    { title: '2026 엔드 업 소방시설관리사 만제: 점검실무행정', author: '함형덕', publisher: '모아교육그룹', price: 51300, originalPrice: 57000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], isbn: '9791168045095', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045095.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=엔드+업+소방시설관리사+만제+점검실무행정' },
    { title: '2026 엔드 업 소방시설관리사 만제: 설계 및 시공', author: '함형덕', publisher: '모아교육그룹', price: 51300, originalPrice: 57000, discount: '10%', rating: 4.6, reviews: 145, tags: ['추천'], isbn: '9791168045101', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045101.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=엔드+업+소방시설관리사+만제+설계+시공' },
    { title: '뇌박힘 소방시설관리사 점검실무행정', author: '김정희', publisher: '모아교육그룹', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9791168045545', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045545.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=뇌박힘+소방시설관리사+점검실무행정' },
    { title: '2026 체크업 소방시설관리사 2차 실기', author: '김종상', publisher: '북스케치', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 98, tags: ['추천'], isbn: '9791124496039', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124496039.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=체크업+소방시설관리사+2차+실기' },
    { title: '2026 소방시설관리사 1차 핵심이론', author: '공하성', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931513936.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방시설관리사+1차+핵심이론+2026' },
    { title: '2026 소방시설관리사 과년도 기출문제집', author: '황모아', publisher: '모아교육그룹', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.4, reviews: 54, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194041849.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방시설관리사+과년도+기출문제집+2026' },
  ],

  '산업위생관리기사': [
    { title: '2026 산업위생관리기사 필기 + 무료동영상 + 핸드북', author: '최윤정', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791168755987', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168755987.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+필기+무료동영상+핸드북+2026' },
    { title: '2026 산업위생관리기사 실기 + 무료동영상 + 핸드북', author: '최윤정', publisher: '구민사', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756717.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+실기+무료동영상+핸드북+2026' },
    { title: '2026 에듀윌 산업위생관리기사 필기 한달끝장', author: '최창률', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791136037954', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136037954.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+산업위생관리기사+필기+한달끝장+2026' },
    { title: '2026 더 플러스 산업위생관리기사 필기', author: '서영민', publisher: '성안당', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9788931585001', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585001.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=더+플러스+산업위생관리기사+필기+2026' },
    { title: '2026 산업위생관리기사 필기 기출문제집', author: '서영민, 조만희', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], isbn: '9788931585018', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585018.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+필기+기출문제집+성안당+2026' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 산업위생관리기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491429.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+산업위생관리기사+실기+2026' },
    { title: '2026 에듀윌 산업위생관리기사 실기 2주끝장', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], isbn: '9791136039057', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039057.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+산업위생관리기사+실기+2주끝장+2026' },
    { title: '2026 2주완성 산업위생관리기사 실기', author: '서영민', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931585056', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585056.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2주완성+산업위생관리기사+실기+2026' },
    { title: '2026 산업위생관리기사 필기 단기완성', author: '최윤정', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+필기+단기완성+구민사+2026' },
    { title: '2026 산업위생관리기사 실기 단기완성', author: '서영민', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+실기+단기완성+성안당+2026' },
  ],

  '위험물기능사': [
    { title: '2026 나합격 위험물기능사 필기 + 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 567, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997443.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물기능사+필기+실기+무료특강+2026' },
    { title: '2026 에듀윌 위험물기능사 필기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 489, tags: ['베스트'], isbn: '9791136039781', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039781.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물기능사+필기+2주끝장+2026' },
    { title: '2026 에듀윌 위험물기능사 실기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 412, tags: ['베스트'], isbn: '9791136040541', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040541.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물기능사+실기+2주끝장+2026' },
    { title: '2026 박문각 위험물기능사 (필기+실기) + 무료특강 세트', author: '김연진', publisher: '박문각', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791175192942', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175192942.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+위험물기능사+필기+실기+세트+2026' },
    { title: '2026 한번에 합격하는 위험물기능사 필기+실기', author: '박수경', publisher: '성안당', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], isbn: '9788931585223', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585223.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+위험물기능사+필기+실기+2026' },
    { title: '2026 해커스 위험물기능사 실기 한권합격', author: '이승원', publisher: '해커스자격증', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 245, tags: ['추천'], isbn: '9788969657275', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788969657275.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+위험물기능사+실기+한권합격+2026' },
    { title: '2026 위험물기능사 실기 - 요약이론 & 13개년 기출문제집', author: '파이팅혼공TV', publisher: '지식오름', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174910196.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+실기+요약이론+13개년+기출문제집+2026' },
    { title: '2026 위험물기능사 필기 기출문제집', author: '김재호', publisher: '세화', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713992.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+필기+기출문제집+세화+2026' },
    { title: '2026 위험물기능사 필기 핵심이론', author: '박수경', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940650561.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+필기+핵심이론+성안당+2026' },
    { title: '2026 위험물기능사 단기완성', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 109, tags: ['추천'], isbn: '9788957617144', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788957617144.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+단기완성+에듀윌+2026' },
  ],

  '위험물산업기사': [
    { title: '2026 나합격 위험물산업기사 필기 + 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 489, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997337.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물산업기사+필기+실기+무료특강+2026' },
    { title: '2026 에듀윌 위험물산업기사 필기 2주끝장 + 무료특강', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], isbn: '9791136039347', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039347.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물산업기사+필기+2주끝장+2026' },
    { title: '2026 에듀윌 위험물산업기사 실기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791136040350', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040350.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물산업기사+실기+2주끝장+2026' },
    { title: '2026 나합격 위험물산업기사 필기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997023.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물산업기사+필기+무료특강+2026' },
    { title: '모아 위험물산업기사 필기', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], isbn: '9791168045811', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045811.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+위험물산업기사+필기' },
    { title: '2026 직8딴 위험물산업기사 실기', author: '김진태', publisher: '김영북스', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791173491405', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491405.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+위험물산업기사+실기+2026' },
    { title: '2026 나합격 위험물산업기사 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997474.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물산업기사+실기+무료특강+2026' },
    { title: '2026 위험물산업기사 필기 기출문제집', author: '김재호', publisher: '세화', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788931713558', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713558.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물산업기사+필기+기출문제집+세화+2026' },
    { title: '2026 위험물산업기사 필기 단기완성', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791157454846', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157454846.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물산업기사+필기+단기완성+에듀윌+2026' },
    { title: '2026 위험물산업기사 실기 단기완성', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9788931529364', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931529364.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물산업기사+실기+단기완성+2026' },
  ],

  '공조냉동기계기사': [
    { title: '2026 공조냉동기계기사 필기 5주완성', author: '조성안, 이승원, 강희중', publisher: '한솔아카데미', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791166547638', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547638.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+필기+5주완성+한솔아카데미+2026' },
    { title: '2026 이패스 임재기의 공조냉동기계기사 필기 - 이론편+기출문제편', author: '임재기', publisher: '이패스코리아', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172092948.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+임재기+공조냉동기계기사+필기+2026' },
    { title: '2026 에듀윌 공조냉동기계기사 필기 한권끝장', author: '손익희', publisher: '에듀윌', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791136038234', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038234.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+공조냉동기계기사+필기+한권끝장+2026' },
    { title: '2026 공조냉동기계기사 실기 5주완성', author: '강희중, 조성안', publisher: '한솔아카데미', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9791166548581', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166548581.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+실기+5주완성+한솔아카데미+2026' },
    { title: '2026 이패스 임재기의 공조냉동기계기사 실기 - 이론+기출문제', author: '임재기', publisher: '이패스코리아', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172093358.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+임재기+공조냉동기계기사+실기+2026' },
    { title: '모아 공조냉동기계기사 실기', author: '이지원', publisher: '모아교육그룹', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], isbn: '9791168045125', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045125.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+공조냉동기계기사+실기' },
    { title: '2026 스마트 7개년 과년도 공조냉동기계기사 필기', author: '최승일', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788931512311', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931512311.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스마트+7개년+공조냉동기계기사+필기+2026' },
    { title: '2026 공조냉동기계기사 필기 과년도 7주완성', author: '이래운, 유기창', publisher: '엔플북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9788968134265', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788968134265.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+필기+과년도+7주완성+2026' },
    { title: '2026 공조냉동기계기사 필기 기출문제 풀이', author: '조성안', publisher: '한솔아카데미', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+필기+기출문제+풀이+2026' },
  ],

  '공조냉동기계기능사': [
    { title: '2026 공조냉동기계기능사 필기+무료동영상 - 최신 CBT 복원문제 수록', author: '강진규, 오태정', publisher: '구민사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168755819.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+무료동영상+구민사+2026' },
    { title: '모아 공조냉동기계기능사 필기 (핵심이론+과년도 14개년)', author: '이지원', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045972.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+공조냉동기계기능사+필기+핵심이론+과년도' },
    { title: '2026 공조냉동기계기능사 필기 + 무료동영상', author: '이정근', publisher: '건기원', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: 'https://image.aladin.co.kr/product/39077/71/coversum/k442137857_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+무료동영상+건기원+2026' },
    { title: '2026 시대에듀 Win-Q 공조냉동기계기능사 필기 단기합격', author: '허판효', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], isbn: '9791143405364', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143405364.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+공조냉동기계기능사+필기+단기합격+2026' },
    { title: '2026 공조냉동기계기능사 필기', author: '권오수, 안효열, 이원범', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927458791.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+예문사+2026' },
    { title: '2026 공조냉동기계기능사 산업기사 실기+무료동영상', author: '강진규, 오태정', publisher: '구민사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791168756106', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756106.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+산업기사+실기+무료동영상+2026' },
    { title: '이패스 최부길의 공조냉동기계기능사 실기 (필답형+작업형)', author: '최부길', publisher: '이패스코리아', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791172094447', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172094447.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+공조냉동기계기능사+실기+필답형+작업형' },
    { title: '2026 공조냉동기계기능사 필기 기출문제 - 기출 + 적중모의고사', author: '나중식', publisher: '책과상상', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169672818.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+기출문제+적중모의고사+2026' },
    { title: '2026 공조냉동기계기능사 단기완성', author: '이지원', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788942914159', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942914159.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+단기완성+2026' },
    { title: '2026 공조냉동기계기능사 핵심이론', author: '이정근', publisher: '건기원', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+핵심이론+건기원+2026' },
  ],

  '용접기사': [
    { title: '2026 고수열강 용접기사 필기+실기', author: '정균호, 나중쇠, 박승리, 박재원', publisher: '구민사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168755918.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=고수열강+용접기사+필기+실기+구민사+2026' },
    { title: '2026 시대에듀 Win-Q 용접산업기사 필기 단기합격', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143403100.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+용접산업기사+필기+단기합격+2026' },
    { title: '2026 용접산업기사 필기', author: '나중식', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169672894.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접산업기사+필기+책과상상+2026' },
    { title: '202X 고수열강 용접산업기사 필기 + 실기', author: '정균호, 나중쇠, 박재원', publisher: '구민사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791168755857', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168755857.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=고수열강+용접산업기사+필기+실기+구민사' },
    { title: '용접산업기사 필기', author: '용접기술시험연구회', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: 'https://image.aladin.co.kr/product/4119/64/coversum/6000732525_2.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접산업기사+필기+일진사' },
    { title: '2026 용접산업기사 필기 10년간 기출문제', author: '나중식', publisher: '책과상상', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791169672900', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169672900.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접산업기사+필기+10년간+기출문제+2026' },
    { title: '2020 완전정복 용접산업기사 실기', author: 'NDT 시험연구회', publisher: '세진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9791160453683', imageUrl: 'https://image.aladin.co.kr/product/22900/13/coversum/k692636944_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=완전정복+용접산업기사+실기+세진사' },
    { title: '과년도 용접산업기사', author: '김명선, 김용구, 임정운', publisher: 'HJ골든벨타임', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788986412659', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788986412659.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=과년도+용접산업기사+골든벨' },
    { title: '2026 용접기사 실기 핵심이론', author: '정균호', publisher: '구민사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기사+실기+핵심이론+구민사+2026' },
    { title: '2026 용접기사 필기 단기완성', author: '홍순규', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791158131708', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158131708.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기사+필기+단기완성+시대에듀+2026' },
  ],

  '피복아크용접기능사': [
    { title: '2026 피복, 가스텅스텐, 이산화탄소가스 용접기능사 필기시험문제', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649749.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기시험문제+크라운출판사+2026' },
    { title: '2025 용접기능사 필기 총정리', author: '용접기술시험연구회', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9788942920082', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920082.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기+총정리+일진사' },
    { title: '2026 에듀윌 피복아크용접기능사 필기 한권끝장+무료특강', author: '김정혁', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], isbn: '9791136037831', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136037831.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+피복아크용접기능사+필기+한권끝장+2026' },
    { title: '용접기능사 특수용접기능사 필기 + 무료 동영상 강의', author: '정명호', publisher: '메카피아', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791162481141', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791162481141.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+특수용접기능사+필기+무료동영상+메카피아' },
    { title: '용접기능사 필기 핵심요약', author: '최부길', publisher: '이패스코리아', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 189, tags: ['베스트'], isbn: '9791192515083', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192515083.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기+핵심요약+이패스코리아' },
    { title: '용접기능사 실기', author: '김승대 외', publisher: '세진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788971219201.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+실기+세진사' },
    { title: '2026 용접기능사 필기 기출문제 풀이', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 89, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175197466.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기+기출문제+풀이+2026' },
    { title: '2026 용접기능사 단기합격', author: '정명호', publisher: '메카피아', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], isbn: '9791143404268', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143404268.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+단기합격+메카피아+2026' },
  ],

  '가스텅스텐아크용접기능사': [
    { title: '2026 피복, 가스텅스텐, 이산화탄소가스 용접기능사 필기시험문제', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649749.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기시험문제+크라운출판사+2026' },
    { title: '2026 평생 무료 동영상과 함께하는 가스텅스텐아크용접기능사 필기', author: '최갑규', publisher: '세진북스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791157458677', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157458677.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스텅스텐아크용접기능사+필기+세진북스+2026' },
    { title: '용접기능사 실기', author: '김승대 외', publisher: '세진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788971219201.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+실기+세진사' },
  ],

  '이산화탄소가스아크용접기능사': [
    { title: '2026 피복, 가스텅스텐, 이산화탄소가스 용접기능사 필기시험문제', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649749.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기시험문제+크라운출판사+2026' },
    { title: '이산화탄소가스아크 용접기능사 실기', author: '김명선', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], isbn: '9788940649107', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649107.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이산화탄소가스아크+용접기능사+실기+크라운출판사' },
  ],

  '전산응용기계제도기능사': [
    { title: '2026 나합격 전산응용기계제도기능사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 467, tags: ['베스트'], isbn: '9791199411579', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791199411579.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+전산응용기계제도기능사+필기+무료특강+2026' },
    { title: '나합격 전산응용기계제도기능사 실기 유형별 빈출 도면집', author: '최현석', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997931.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+실기+유형별+빈출+도면집' },
    { title: '2026 시대에듀 Win-Q 전산응용기계제도기능사 필기', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791143400277', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143400277.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+전산응용기계제도기능사+필기+시대에듀+2026' },
    { title: '나합격 전산응용기계제도기능사 실기', author: '자격증의모든것DC', publisher: '삼원북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193858172.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+실기+삼원북스' },
    { title: '2026 해커스 전산응용기계제도기능사 필기 한권완성', author: '이재형', publisher: '해커스자격증', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+전산응용기계제도기능사+필기+한권완성+2026' },
    { title: '2026 유튜버 기계도사 전산응용기계제도기능사', author: '정인훈', publisher: '지식오름', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791174910257', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174910257.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계도사+전산응용기계제도기능사+2026' },
    { title: '2026 전산응용기계제도기능사 필기 기출문제', author: '김원중', publisher: '책과상상', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791169673433', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673433.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+필기+기출문제+책과상상+2026' },
    { title: '2025 시대에듀 Win-Q 전산응용기계제도기능사 실기', author: '정인훈', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791138390163', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138390163.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+전산응용기계제도기능사+실기+시대에듀' },
    { title: '2026 전산응용기계제도기능사 단기완성', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791157454822', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157454822.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+단기완성+2026' },
    { title: '2026 전산응용기계제도기능사 핵심이론', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+핵심이론+삼원북스+2026' },
  ],

  '승강기기사': [
    { title: '승강기 기사.산업기사 - NCS 기반 출제기준에 맞춘 최고의 수험서', author: '최기호, 이명상', publisher: '대광서림', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.8, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+산업기사+NCS+대광서림' },
    { title: '2026 승강기 기사.산업기사 필기', author: '이도흠', publisher: '엔트미디어', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], isbn: '9791192810614', imageUrl: 'https://image.aladin.co.kr/product/37123/58/coversum/k722031774_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+산업기사+필기+엔트미디어+2026' },
    { title: '2026 승강기 기사.산업기사 실기', author: '이도흠', publisher: '엔트미디어', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], isbn: '9791192810805', imageUrl: 'https://image.aladin.co.kr/product/37985/78/coversum/k802034671_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+산업기사+실기+엔트미디어+2026' },
    { title: '2024 기발한 승강기기사.산업기사 필기', author: '김인호', publisher: '크라운출판사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9788940647691', imageUrl: 'https://image.aladin.co.kr/product/32862/66/coversum/8940647696_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기발한+승강기기사+산업기사+필기+크라운출판사' },
    { title: '2024 한 권으로 끝내는 승강기기사.산업기사 필기', author: '한영규', publisher: '건기원', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], isbn: '9791157677825', imageUrl: 'https://image.aladin.co.kr/product/32409/38/coversum/k742935389_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한권으로+끝내는+승강기기사+산업기사+필기+건기원' },
    { title: '승강기기사.산업기사', author: '정재수', publisher: '남양문화', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: 'https://image.aladin.co.kr/product/5241/15/coversum/8955540736_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기기사+산업기사+남양문화' },
    { title: '승강기기사 실기', author: '정재수', publisher: '남양문화', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9788955540826', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788955540826.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기기사+실기+남양문화' },
    { title: '승강기 기사', author: '이도흠', publisher: '동일출판사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938452108.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+동일출판사+이도흠' },
    { title: '2026 승강기기사 필기 단기완성', author: '이도흠', publisher: '엔트미디어', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기기사+필기+단기완성+엔트미디어+2026' },
    { title: '2026 승강기기사 실기 단기완성', author: '한영규', publisher: '건기원', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기기사+실기+단기완성+건기원+2026' },
  ],

  '품질경영기사': [
    { title: '2026 유튜브와 함께하는 양쌤의 품질경영기사 필기', author: '양희정', publisher: '이나무', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], isbn: '9791191569452', imageUrl: 'https://image.aladin.co.kr/product/37480/47/coversum/k072032917_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=양쌤+품질경영기사+필기+이나무+2026' },
    { title: '2026 배극윤의 품질경영기사 필기 - 전2권', author: '배극윤', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9788927460527', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460527.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배극윤+품질경영기사+필기+예문사+2026' },
    { title: '2026 한번에 합격하는 품질경영기사 필기', author: '염경철', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9788931585339', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585339.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+품질경영기사+필기+성안당+2026' },
    { title: '2026 유튜브와 함께하는 양쌤의 품질경영기사 실기', author: '양희정', publisher: '이나무', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791191569476', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191569476.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=양쌤+품질경영기사+실기+이나무+2026' },
    { title: '2026 배극윤의 품질경영기사 필기 문제풀이 - 전2권', author: '배극윤', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9788927460640', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460640.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배극윤+품질경영기사+필기+문제풀이+예문사+2026' },
    { title: '2026 한번에 합격하는 품질경영기사 실기', author: '염경철', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9788931585346', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585346.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+품질경영기사+실기+성안당+2026' },
    { title: '2025 시대에듀 Win-Q 품질경영기사 필기 단기합격', author: '박병호', publisher: '시대에듀', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], isbn: '9791138387828', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138387828.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+품질경영기사+필기+단기합격+시대에듀' },
    { title: '2025 품질경영기사 필기 과년도 출제문제', author: '정현석', publisher: '일진사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788942919819', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942919819.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=품질경영기사+필기+과년도+출제문제+일진사' },
    { title: '2026 품질경영기사 필기 단기완성', author: '배극윤', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], isbn: '9791156564089', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791156564089.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=품질경영기사+필기+단기완성+예문사+2026' },
    { title: '2026 품질경영기사 실기 단기완성', author: '양희정', publisher: '이나무', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791156560234', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791156560234.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=품질경영기사+실기+단기완성+이나무+2026' },
  ],

  '대기환경기사': [
    { title: '2027 에듀윌 대기환경기사 필기 4주끝장 + 무료특강', author: '이찬범', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], isbn: '9791136042972', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136042972.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+대기환경기사+필기+4주끝장' },
    { title: '2026 나합격 대기환경기사 필기 + 무료특강', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9791194997115', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997115.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+대기환경기사+필기+무료특강+2026' },
    { title: '2026 물쌤닷컴 대기환경기사/산업기사 필기 + 모의고사', author: '최혁재', publisher: '미교원', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], isbn: '9791194457152', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194457152.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+대기환경기사+산업기사+필기+모의고사+2026' },
    { title: '2026 나합격 대기환경기사 실기 + 무료특강', author: '김현우', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], isbn: '9791194997757', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997757.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+대기환경기사+실기+무료특강+2026' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 대기환경기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491412.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+대기환경기사+실기+2026' },
    { title: '2026 에듀윌 대기환경기사 실기 2주끝장 + 무료특강', author: '이찬범', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791136040534', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040534.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+대기환경기사+실기+2주끝장+2026' },
    { title: '2026 물쌤닷컴 대기환경기사 산업기사 실기 + 기출해설', author: '최혁재', publisher: '미교원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194457169.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+대기환경기사+산업기사+실기+기출해설+2026' },
    { title: '2026 합격Easy 대기환경기사 실기', author: '신은상', publisher: '건기원', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9791157679294', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157679294.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=합격Easy+대기환경기사+실기+건기원+2026' },
    { title: '2026 한번에 합격하는 대기환경기사 필기 기출문제집', author: '서성석', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9788931585353', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585353.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+대기환경기사+필기+기출문제집+2026' },
    { title: '2026 대기환경기사 필기 단기완성', author: '이찬범', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791138347013', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138347013.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=대기환경기사+필기+단기완성+에듀윌+2026' },
  ],

  '수질환경기사': [
    { title: '2027 에듀윌 수질환경기사 필기 4주끝장+무료특강', author: '정윤성', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136042798.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+수질환경기사+필기+4주끝장' },
    { title: '2026 나합격 수질환경기사 필기+무료특강+온라인CBT', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], isbn: '9791194997108', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997108.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+수질환경기사+필기+무료특강+온라인CBT+2026' },
    { title: '2026 물쌤닷컴 수질환경기사/산업기사 필기 + 기출해설', author: '이종혁', publisher: '미교원', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+수질환경기사+산업기사+필기+기출해설+2026' },
    { title: '2026 수질환경기사 필기 + 과년도 + 무료동영상', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756045.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수질환경기사+필기+과년도+무료동영상+구민사+2026' },
    { title: '2026 나합격 수질환경기사 실기+무료특강', author: '김현우', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], isbn: '9791194997740', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997740.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+수질환경기사+실기+무료특강+2026' },
    { title: '2026 직8딴 수질환경기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], isbn: '9791173491436', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491436.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+수질환경기사+실기+2026' },
    { title: '2026 에듀윌 수질환경기사 실기 2주끝장+무료특강', author: '이찬범', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], isbn: '9791136050434', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136050434.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+수질환경기사+실기+2주끝장+2026' },
    { title: '2026 물쌤닷컴 수질환경기사 산업기사 실기 + 기출해설', author: '이종혁', publisher: '미교원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194457145.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+수질환경기사+산업기사+실기+기출해설+2026' },
    { title: '2026 수질환경기사 필기 단기완성', author: '정윤성', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931534818.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수질환경기사+필기+단기완성+에듀윌+2026' },
    { title: '2026 수질환경기사 실기 단기완성', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791160452457', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160452457.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수질환경기사+실기+단기완성+구민사+2026' },
  ],

  '초음파비파괴검사기사': [
    { title: '비파괴검사기사 문제해설', author: '여화연', publisher: '일진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160455281.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기사+문제해설+일진사' },
  ],

  '방사선비파괴검사기사': [
    { title: '방사선비파괴검사 문제 & 해설 (기사.산업기사 / 기능사 공통)', author: '여화연', publisher: '일진사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], isbn: '9788942911592', imageUrl: 'https://image.aladin.co.kr/product/687/56/coversum/8942911595_3.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선비파괴검사+문제+해설+일진사' },
  ],

  '침투비파괴검사기사': [
    { title: '침투비파괴검사 산업기사·기사 실기 필답형', author: '조정현', publisher: '피앤피북', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: 'https://image.aladin.co.kr/product/36664/67/coversum/k492030187_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=침투비파괴검사+산업기사+기사+실기+필답형' },
    { title: '2026 비파괴검사기능사 필기 단기합격', author: '조정현', publisher: '피앤피북', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9791143406514', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143406514.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기능사+필기+단기합격+2026' },
  ],

  '자기비파괴검사기사': [
    { title: '비파괴검사기사 문제해설', author: '여화연', publisher: '일진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160455281.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기사+문제해설+일진사' },
  ],

  '전기공사기사': [
    { title: '2026 전기공사기사 실기', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702306.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+실기+2026' },
    { title: '2026 에듀윌 전기 전기공사기사 필기 7개년 기출문제집', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791136040336', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040336.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기공사기사+필기+7개년+2026' },
    { title: '2026 에듀윌 전기 전기공사기사 실기 한권끝장', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], isbn: '9791136041487', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136041487.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기공사기사+실기+한권끝장+2026' },
    { title: '2026 E90-3 전기공사기사 필기', author: '검정연구회', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9791192810645', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192810645.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=E90-3+전기공사기사+필기+2026' },
    { title: '2026 전기공사기사 필기 - 최신 8개년 기출문제', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+필기+8개년+기출문제+2026' },
    { title: '2026 전기공사기사 실기 파이널 + 단답형', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791194702351', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702351.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+실기+파이널+단답형+2026' },
    { title: '2026 최신판 답이 보인다 30일 단기완성 전기공사기사·산업기사 실기', author: '검정연구회', publisher: '동일출판사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117595.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+산업기사+실기+30일+2026' },
    { title: '2026 D30-3 전기공사기사실기', author: '검정연구회', publisher: '엔트미디어', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], isbn: '9791192810850', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192810850.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=D30-3+전기공사기사+실기+2026' },
    { title: '2026 전기공사기사 필기 파이널 특강', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702191.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+필기+파이널+특강+2026' },
    { title: '2026 에듀윌 전기 제어공학 필기', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기+제어공학+필기+2026' },
  ],

  '전기공사산업기사': [
    { title: '2026 전기공사산업기사 실기', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702313.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+실기+2026' },
    { title: '2026 전기공사산업기사 필기 - 최신 8개년 기출문제', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168040441.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+필기+8개년+2026' },
    { title: '2026 E90-4 전기공사산업기사 필기', author: '검정연구회', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], isbn: '9791192810652', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192810652.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=E90-4+전기공사산업기사+필기+2026' },
    { title: '2026 완벽대비 전기공사산업기사 필기', author: '검정연구회', publisher: '동일출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9788938117281', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117281.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=완벽대비+전기공사산업기사+필기+2026' },
    { title: '2026 D30-4 전기공사산업기사 실기', author: '검정연구회', publisher: '엔트미디어', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192810867.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=D30-4+전기공사산업기사+실기+2026' },
    { title: '2026 전기공사산업기사 실기 파이널 + 단답형', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], isbn: '9791194702368', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702368.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+실기+파이널+단답형+2026' },
    { title: '2026 전기공사산업기사 필기 파이널 특강', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 119, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702214.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+필기+파이널+특강+2026' },
    { title: '배울학 전기공사산업기사 1033 필기 10개년 기출문제집', author: '윤석만, 강장규, 황민욱', publisher: '배울학', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9791189762391', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791189762391.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배울학+전기공사산업기사+필기+10개년' },
    { title: '2026 최신판 답이 보인다 30일 단기완성 전기공사기사·산업기사 실기', author: '검정연구회', publisher: '동일출판사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117595.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+산업기사+실기+30일+2026' },
    { title: '2026 에듀윌 전기 제어공학 필기+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기+제어공학+필기+2026' },
  ],

  '전기기능장': [
    { title: '2026 초스피드 전기기능장 필기', author: '김영복', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514438.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능장+필기+2026' },
    { title: '2026 완벽대비 전기기능장 필기', author: '최동원, 황락훈', publisher: '동일출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9788938117106', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117106.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=완벽대비+전기기능장+필기+2026' },
    { title: '2026 초스피드 전기기능장 필답형 실기', author: '김영복', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], isbn: '9788931514445', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514445.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능장+실기+필답형+2026' },
    { title: '2026 마스터 전기기능장 필기', author: '현명걸, 김동진', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9791192810683', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192810683.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=마스터+전기기능장+필기+2026' },
    { title: '2026 초단기완성! 전기기능장 필기', author: '이창우', publisher: '책과상상', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.6, reviews: 178, tags: ['베스트'], isbn: '9791169673372', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673372.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초단기완성+전기기능장+필기+2026' },
    { title: '초스피드 전기기능장 실기 PLC', author: '김재규', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9788931528503', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931528503.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능장+실기+PLC' },
    { title: '전기기능장 PLC제어 & 시공 실무 마스터', author: '이해춘', publisher: '사이버북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], isbn: '9791193683187', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193683187.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+PLC제어+시공+실무' },
    { title: '전기기능장 실기 PLC 완전정복', author: '검정연구회', publisher: '이나무', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791191569292', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191569292.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+실기+PLC+완전정복' },
    { title: '전기기능장 실기 PLC 과년도 기출문제', author: '최병남', publisher: '세진사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], isbn: '9791160456844', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160456844.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+실기+PLC+과년도+기출문제' },
    { title: '전기기능장 실기 - 작업형/필답형 실기총정리', author: '유영규', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+실기+작업형+필답형' },
  ],

  '전기기능사': [
    { title: '2026 이기적 전기기능사 필기 + 실기 올인원', author: '안경재', publisher: '영진.com', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 567, tags: ['베스트'], isbn: '9788931480290', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931480290.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+전기기능사+필기+실기+올인원+2026' },
    { title: '2026 에듀윌 전기 전기기능사 필기 한권끝장', author: '유치형, 홍석묵, 최대규', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 456, tags: ['베스트'], isbn: '9791136039194', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039194.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+필기+한권끝장+2026' },
    { title: '2026 시대에듀 전기기능사 필기 + 실기 한권합격', author: '김민우, 민지현', publisher: '시대에듀', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], isbn: '9791138397872', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138397872.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+전기기능사+한권합격+2026' },
    { title: '2026 전기기능사 필기 초단기 CBT 기출문제집', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '종이향기', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], isbn: '9791174910059', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174910059.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능사+필기+초단기+CBT+기출문제집+2026' },
    { title: '2026 이기적 전기기능사 필기 이론서 + 기출문제집', author: '이재일', publisher: '영진.com', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], isbn: '9788931480757', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931480757.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+전기기능사+필기+이론서+기출문제집+2026' },
    { title: '2026 에듀윌 전기 전기기능사 실기 한권끝장', author: '최대규, 홍석묵, 유치형', publisher: '에듀윌', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], isbn: '9791136038791', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038791.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+실기+한권끝장+2026' },
    { title: '2026 무료 동영상과 함께 공부하는 초스피드 전기기능사 실기', author: '유인종', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], isbn: '9788931514476', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514476.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능사+실기+2026' },
    { title: '2026 에듀윌 전기 전기기능사 실기 해설집+도면집+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791136037916', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136037916.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+실기+해설집+도면집+2026' },
    { title: '전기기능사 실기 바이블 3', author: '신석환, 최경호', publisher: '동일출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], isbn: '9788938117687', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117687.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능사+실기+바이블' },
    { title: '2026 박문각 전기기능사 실기 + 무료특강', author: '정용걸', publisher: '박문각', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791175193116', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175193116.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+전기기능사+실기+2026' },
  ],


  // ────────────────────────────────────────
  '화학분석기사': [
    // 베스트셀러 5
    { title: '2026 정나나의 화학분석기사 필기', author: '정나나', publisher: '예문사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927461609.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정나나+화학분석기사+필기' },
    { title: '2026 나합격 화학분석기사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], isbn: '9791194997306', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997306.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+화학분석기사' },
    { title: '2026 한번에 합격하는 화학분석기사 필기', author: '박수경', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], isbn: '9788931585308', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585308.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+필기+성안당' },
    { title: '2026 Win-Q 화학분석기사 필기 단기합격', author: '박지은', publisher: '시대에듀', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], isbn: '9791143404145', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143404145.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+화학분석기사' },
    // 추천수험서 5
    { title: '2026 화학분석기사 핵심이론+기출문제', author: '정나나', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+핵심이론' },
    { title: '2026 화학분석기사 실기 완전정복', author: '박수경', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+실기' },
    { title: '2026 화학분석기사 7개년 과년도 해설집', author: '박지은', publisher: '시대에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], isbn: '9788931585315', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585315.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+7개년' },
  ],

  // ────────────────────────────────────────
  '자동차정비기능사': [
    // 베스트셀러 5
    { title: '2026 기분파 자동차정비기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194328353.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+자동차정비기능사+필기' },
    { title: '2026 에듀윌 자동차정비기능사 필기 한권끝장', author: '김정혁', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038890.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+자동차정비기능사' },
    { title: '2026 뻥! 뚫린 패스 자동차정비기능사 필기', author: '김연수 외', publisher: '골든벨', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], isbn: '9791158067861', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158067861.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+골든벨' },
    { title: '2026 자동차정비기능사 필기(+전과목 무료동영상)', author: '이병근', publisher: '예문에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 223, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791163864981.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+무료동영상' },
    { title: '2026 Win-Q 자동차정비기능사 필기 단기합격', author: '함성훈 외', publisher: '시대에듀', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 189, tags: ['베스트'], isbn: '9791143401724', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143401724.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+자동차정비기능사' },
    // 추천수험서 5
    { title: '2026 자동차정비기능사 필기 최근기출문제', author: '김형진', publisher: '책과상상', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], isbn: '9791169673211', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673211.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+최근기출' },
    { title: '2026 합격이 보이는 자동차정비기능사 필기', author: '국가기술자격연구회', publisher: '구민사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791143414168', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143414168.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+구민사' },
    { title: '2026 자동차정비기능사 CBT 적중모의고사', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+CBT' },
  ],

  // ────────────────────────────────────────
  '자동차정비산업기사': [
    // 베스트셀러 5
    { title: '2026 기분파 자동차정비산업기사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 267, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791186179451.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+자동차정비산업기사' },
    { title: '2026 뻥! 뚫린 PASS 자동차정비산업기사 필기', author: '김명준 외', publisher: '골든벨', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791158067908', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158067908.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+골든벨' },
    { title: '2026 자동차정비산업기사 필기 한권완성', author: '이병근', publisher: '예문에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], isbn: '9791163865346', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791163865346.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+한권완성' },
    { title: '2026 합격포인트 자동차정비산업기사 필기', author: '김광석 외', publisher: '골든벨', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 156, tags: ['베스트'], isbn: '9791124114049', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124114049.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+합격포인트+자동차정비산업기사' },
    { title: '2026 자동차정비산업기사 필기', author: '소철호', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 132, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673198.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+필기' },
    // 추천수험서 5
    { title: '자동차정비산업기사 필기', author: '정장만', publisher: '에듀피디', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=자동차정비산업기사+필기+에듀피디' },
    { title: '2026 자동차정비산업기사 과년도 기출해설', author: '소철호', publisher: '책과상상', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+과년도' },
  ],

  // ────────────────────────────────────────
  '지게차운전기능사': [
    // 베스트셀러 5
    { title: '2027 박문각 지게차운전기능사 필기 핵심이론서+8개년 기출문제집 세트', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 21510, originalPrice: 23900, discount: '10%', rating: 4.8, reviews: 456, tags: ['베스트'], imageUrl: 'https://image.aladin.co.kr/product/39262/21/coversum/k812138403_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2027+박문각+지게차운전기능사+세트' },
    { title: '2026 기분파 지게차운전기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], isbn: '9791194328285', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194328285.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+지게차운전기능사' },
    { title: '2027 박문각 지게차운전기능사 필기 8개년 기출문제집', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791176490641.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2027+박문각+지게차운전기능사+기출' },
    { title: '2026 기발한 지게차운전기능사 필기 총정리문제', author: '김준한', publisher: '크라운출판사', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], isbn: '9788940650578', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940650578.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+크라운' },
    { title: '2026 쩐 기능장의 3일 끝! 지게차운전기능사 필기', author: '전범준', publisher: '직업상점', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], isbn: '9791194695240', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194695240.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+3일끝' },
    // 추천수험서 5
    { title: '2027 박문각 지게차운전기능사 필기 핵심이론서', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 12510, originalPrice: 13900, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791176490634.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2027+박문각+지게차운전기능사+핵심이론' },
    { title: '2026 에듀윌 지게차운전기능사 필기 독학끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], isbn: '9791136039897', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039897.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+지게차운전기능사' },
    { title: '2026 Win-Q 지게차운전기능사 필기 단기합격', author: '함성훈', publisher: '시대에듀', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], isbn: '9791143416391', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143416391.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+지게차운전기능사' },
    { title: '2026 지게차운전기능사 필기 기출문제집', author: '건설기계교육아카데미', publisher: '책과상상', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192315201.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+기출문제집' },
  ],

  // ────────────────────────────────────────
  '굴착기운전기능사': [
    // 베스트셀러 5
    { title: '2026 기분파 굴착기운전기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 412, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194328322.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+굴착기운전기능사+필기' },
    { title: '2026 에듀윌 굴착기운전기능사 독학으로 필기끝장', author: '김은남', publisher: '에듀윌', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], isbn: '9791136040299', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040299.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+굴착기운전기능사' },
    { title: '2026 확! 바뀐 굴착기운전기능사 필기', author: '전국중장비교사협의회', publisher: '골든벨', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], isbn: '9791158064549', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158064549.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+굴착기운전기능사+골든벨' },
    { title: '2026 박문각 취밥러 굴착기운전기능사 필기', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 12510, originalPrice: 13900, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], isbn: '9791175191037', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175191037.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+박문각+굴착기운전기능사' },
    { title: '2026 굴착기운전기능사 필기 기출문제', author: '건설기계교육아카데미', publisher: '책과상상', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], isbn: '9791169673037', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673037.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+굴착기운전기능사+기출문제' },
    // 추천수험서 5
    { title: '굴착기운전기능사 필기', author: '국가기술자격시험연구회', publisher: '구민사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673020.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=굴착기운전기능사+필기+구민사' },
    { title: '2026 Win-Q 굴착기운전기능사 필기 단기합격', author: '함성훈', publisher: '시대에듀', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], isbn: '9788940651377', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940651377.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+굴착기운전기능사' },
    { title: '2026 굴착기운전기능사 필기 핵심요약 노트', author: '전국중장비교사협의회', publisher: '골든벨', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192315218.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+굴착기운전기능사+핵심요약' },
  ],

  // ────────────────────────────────────────
  // 네트워크관리사 1급·2급은 필기+실기 통합 교재로 시험이 시행되어 동일 도서가 두 등급에 공통으로 쓰입니다.
  '네트워크관리사1급': [
    { title: '이기적 네트워크관리사 1, 2급 필기+실기 올인원', author: '임호진, 황성하', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 5.0, reviews: 13, tags: ['베스트'], isbn: '9788931481211', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481211.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218204635' },
    { title: '2027 최적합 네트워크 관리사 1·2급 필기+실기', author: '허준, 선세리', publisher: '성안당', price: 27000, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2027+최적합+네트워크관리사+필기+실기' },
    { title: '2025 최적합 네트워크 관리사 1·2급 필기+실기', author: '허준, 선세리', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.9, reviews: 10, tags: ['추천'], isbn: '9788931586718', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931586718.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000213673627' },
  ],

  // ────────────────────────────────────────
  '네트워크관리사2급': [
    { title: '이기적 네트워크관리사 1, 2급 필기+실기 올인원', author: '임호진, 황성하', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 5.0, reviews: 13, tags: ['베스트'], isbn: '9788931481211', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481211.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218204635' },
    { title: '2027 최적합 네트워크 관리사 1·2급 필기+실기', author: '허준, 선세리', publisher: '성안당', price: 27000, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2027+최적합+네트워크관리사+필기+실기' },
    { title: '2025 최적합 네트워크 관리사 1·2급 필기+실기', author: '허준, 선세리', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.9, reviews: 10, tags: ['추천'], isbn: '9788931586718', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931586718.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000213673627' },
  ],

  // ────────────────────────────────────────
  '리눅스마스터1급': [
    { title: '2026 이기적 리눅스마스터 1급(1·2차) 기본서 세트', author: '김윤수, 최정현', publisher: '영진닷컴', price: 34200, originalPrice: 38000, discount: '10%', rating: 5.0, reviews: 4, tags: ['베스트'], isbn: '9788931481402', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481402.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218968390' },
  ],

  // ────────────────────────────────────────
  '리눅스마스터2급': [
    { title: '2024 이기적 리눅스마스터 2급 기본서', author: '권소라', publisher: '영진닷컴', price: 25200, originalPrice: 28000, discount: '10%', rating: 5.0, reviews: 9, tags: ['베스트'], isbn: '9788931468366', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931468366.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000212326688' },
    { title: '2027 빠르게 따는 리눅스마스터 2급(1·2차)', author: '권대우', publisher: '골든래빗(주)', price: 25200, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2027+빠르게+따는+리눅스마스터+2급' },
  ],

  // ────────────────────────────────────────
  '정보보안산업기사': [
    { title: '2026 알기사 정보보안기사(산업기사) 필기+핵심기출 1200제 세트', author: '조현준', publisher: '지안에듀', price: 54000, originalPrice: 60000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218322836'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218322836' },
    { title: '2026 알기사 정보보안기사(산업기사) 실기', author: '정일영', publisher: '지안에듀', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000219083573'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219083573' },
    { title: '2026 이기적 정보보안기사 필기+실기 올인원', author: '임호진', publisher: '영진닷컴', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218331600'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218331600' },
    { title: '2026 이기적 정보보안기사 실기 기출 600제', author: '임호진', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000219382035'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219382035' },
    { title: '2026 수제비 정보보안기사 실기 기본서', author: '윤영빈', publisher: '수제비', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], imageUrl: KB('S000219127791'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219127791' },
    { title: '2026 정보보안 법령 및 정책 완전정복', author: '박진일', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], isbn: '9788966113422', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788966113422.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보보안+법령+정책' },
    { title: '2026 네트워크 보안·시스템 보안 단기완성', author: '최철환', publisher: '한빛미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], isbn: '9791199551084', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791199551084.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네트워크보안+시스템보안' },
  ],

  // ────────────────────────────────────────
  '자동차정비기사': [
    { title: '2026 패스 자동차정비기사 필기', author: '박만재·국창호·문학훈', publisher: '골든벨', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218935739'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218935739' },
    { title: '2026 Win-Q 자동차정비기사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.2, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+자동차정비기사' },
  ],

  // ────────────────────────────────────────
  '자동차정비기능장': [
    { title: '최신판 자동차정비기능장 필기', author: '전봉준·고동원', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('S000214983155'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214983155' },
    { title: '자동차 엔진전자제어 실무', author: '신완섭', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9788963451060', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788963451060.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=자동차+엔진전자제어+실무' },
    { title: '2026 자동차정비기능장 핵심요약노트', author: '전봉준', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능장+핵심요약' },
    { title: '자동차 전자제어 시스템 완전정복', author: '정병연', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.2, reviews: 65, tags: ['추천'], isbn: '9788931535211', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931535211.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=자동차+전자제어+시스템+완전정복' },
  ],

  // ────────────────────────────────────────
  '수질환경산업기사': [
    { title: '2026 수질환경기사·산업기사 필기', author: '이철한', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218914137'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218914137' },
    { title: '2026 물쌤닷컴 수질환경기사/산업기사 필기+기출해설 세트', author: '이종혁', publisher: '미교원', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218615044'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218615044' },
    { title: '2026 수질환경기사, 산업기사 필기', author: '신동성·하부영', publisher: '세진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218854932'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218854932' },
    { title: '2026 수질환경산업기사 실기 완전정복', author: '이철한', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+수질환경산업기사+실기' },
    { title: '2026 수질오염공정시험기준 해설', author: '국가기술자격시험연구회', publisher: '구민사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791160456981', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160456981.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+수질오염공정시험기준' },
  ],

  // ────────────────────────────────────────
  '대기환경산업기사': [
    { title: '2026 대기환경기사 필기+과년도+무료동영상+핸드북', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218031344'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218031344' },
    { title: '2026 나합격 대기환경기사 필기+무료특강+온라인 CBT', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218086849'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218086849' },
    { title: '2026 합격Easy 대기환경기사 필기', author: '신은상', publisher: '건기원', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218358598'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218358598' },
    { title: '2026 대기환경산업기사 필기 핵심이론', author: '서영민', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+대기환경산업기사+성안당' },
    { title: '2026 대기오염공정시험기준 해설', author: '국가기술자격시험연구회', publisher: '구민사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], isbn: '9788942591855', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942591855.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+대기오염공정시험기준' },
    { title: '2026 대기환경산업기사 핵심요약+예상문제', author: '박영태', publisher: '성안당', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.1, reviews: 65, tags: ['추천'], isbn: '9791168756441', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756441.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+대기환경산업기사+핵심요약' },
  ],

  // ────────────────────────────────────────
  // ────────────────────────────────────────
  '배관기능사': [
    { title: '2026 배관기능사 필기+실기 한권 완성', author: '국가기술자격시험연구회', publisher: '예문사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000217122019'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217122019' },
    { title: '배관기능사 필기·실기 단기완성', author: '이상휘', publisher: '일진사', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218440656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218440656' },
    { title: '배관기능사 필기', author: '최종만', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], imageUrl: KB('S000216719085'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216719085' },
    { title: '배관 설계·시공 실무 가이드', author: '오진석', publisher: '동일출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 145, tags: ['추천'], isbn: '9788993954128', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788993954128.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배관+설계+시공+실무' },
  ],

  // ────────────────────────────────────────

  // ────────────────────────────────────────
  // ────────────────────────────────────────
  '미용사(일반)': [
    { title: '2026 미용사 일반 필기', author: '김지연', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218629883'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218629883' },
    { title: '2026 에듀윌 일반(헤어)미용사 필기 1주끝장', author: '최묘선', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218235656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218235656' },
    { title: '2026 원큐패스 미용사 일반 필기', author: '김선희', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218681294'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218681294' },
    { title: '2026 시대에듀 답만 외우는 미용사 일반 필기 CBT기출문제', author: '시대에듀 편집부', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000217049157'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217049157' },
    { title: '2026 적중100% 미용사일반 필기시험 총정리문제', author: '크라운출판사 편집부', publisher: '크라운출판사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000217049878'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217049878' },
    { title: '2026 미용사 일반 필기 핵심요약+기출모의', author: '타임 NCS 연구소', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: KB('S000218448172'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218448172' },
    { title: '2026 미용사 일반 실기 완전정복', author: '김지연', publisher: '책과상상', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+미용사+일반+실기' },
    { title: '2026 Win-Q 미용사(일반) 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138395991.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+미용사+일반' },
  ],

  // ────────────────────────────────────────
  '미용사(피부)': [
    { title: '2026 피부미용사 필기 한권으로 합격하기', author: '황해정·김승아', publisher: '크라운출판사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000217059166'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217059166' },
    { title: '2026 이기적 권쌤TV 미용사(피부) 필기 기본서', author: '권순현', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000219159023'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219159023' },
    { title: '2026 원큐패스 미용사 피부 필기', author: '이지안', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218938455'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218938455' },
    { title: '2026 시대에듀 답만 외우는 미용사 피부 필기 CBT기출문제', author: '시대에듀 편집부', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000219023470'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219023470' },
    { title: '2026 1주일 완성 피부미용사 필기시험 총정리문제', author: '황해정', publisher: '크라운출판사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000217021665'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217021665' },
    { title: '2026 피부미용사 실기 핵심기술', author: '황해정', publisher: '크라운출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+피부미용사+실기' },
    { title: '2026 에듀윌 피부미용사 필기 1주끝장', author: '에듀윌 편집부', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791136039415', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039415.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+피부미용사+필기' },
    { title: '피부관리 이론과 실제', author: '한국피부미용학회', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], isbn: '9788991985513', imageUrl: 'https://image.aladin.co.kr/product/40/85/coversum/8990521017_1.gif', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=피부관리+이론과+실제' },
    { title: '2026 Win-Q 미용사(피부) 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9788940650646', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940650646.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+미용사+피부' },
  ],

  // ────────────────────────────────────────
  '미용사(네일)': [
    { title: '2026 에듀윌 네일미용사(네일아트) 필기 1주끝장+무료특강', author: '민방경', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218096474'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218096474' },
    { title: '2026 2주완성 미용사 네일 필기시험문제', author: '류은주', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218565752'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218565752' },
    { title: '2026 미용사(네일) 필기 완전정복', author: '민방경', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], isbn: '9791136039408', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039408.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+미용사+네일+필기' },
    { title: '2026 적중100% 미용사 네일 필기 총정리', author: '크라운출판사 편집부', publisher: '크라운출판사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.4, reviews: 112, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649459.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+미용사+네일+필기+총정리' },
    { title: '2026 미용사(네일) 실기 완전정복', author: '민방경', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], isbn: '9788995329528', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788995329528.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+미용사+네일+실기' },
    { title: '2026 네일아트 CBT 최신기출문제', author: '네일미용연구회', publisher: '일진사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], isbn: '9791194328292', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194328292.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+네일아트+CBT' },
    { title: '2026 미용사(네일) 핵심요약 노트', author: '미용자격연구회', publisher: '시대에듀', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791156721567', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791156721567.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+미용사+네일+핵심요약' },
    { title: '젤 네일 아트 테크닉', author: '박지현', publisher: '크라운출판사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.2, reviews: 65, tags: ['추천'], isbn: '9788940624821', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940624821.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=젤+네일아트+테크닉' },
  ],

  // ────────────────────────────────────────
  '미용사(메이크업)': [
    { title: '2026 기분파 미용사 메이크업 필기', author: '김효정', publisher: '에듀웨이', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000217613656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217613656' },
    { title: '2026 완전합격 미용사 메이크업 필기시험문제', author: '메이크업자격연구회', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218704738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218704738' },
    { title: '2026 적중 100% 합격 미용사 메이크업 필기 총정리문제', author: '크라운출판사 편집부', publisher: '크라운출판사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218565610'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218565610' },
    { title: '2026 미용사(메이크업) 필기 완전정복', author: '김효정', publisher: '에듀웨이', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649572.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+미용사+메이크업+필기' },
    { title: '2026 퍼펙트 미용사 메이크업 실기시험문제', author: '김리나', publisher: '크라운출판사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: KB('S000218676679'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218676679' },
    { title: '2026 에듀윌 메이크업 필기 1주끝장', author: '에듀윌 편집부', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], isbn: '9791136039385', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039385.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+메이크업+필기' },
    { title: '2026 미용사(메이크업) CBT 최신기출', author: '메이크업연구회', publisher: '일진사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143404312.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+미용사+메이크업+CBT' },
    { title: '메이크업 테크닉 완전정복', author: '김리나', publisher: '크라운출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791167692320', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791167692320.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=메이크업+테크닉+완전정복' },
  ],

  // ────────────────────────────────────────

  // ────────────────────────────────────────
  '식품산업기사': [
    { title: '2026 식품산업기사 필기', author: '정진경·유연희·이다빈·이아랑', publisher: '예문에듀', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000217049829'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217049829' },
    { title: '2026 해커스 식품산업기사 필기 한권완성', author: '권유진', publisher: '해커스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000217941979'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217941979' },
    { title: '2026 나합격 식품산업기사 필기+무료특강', author: '김현우', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], isbn: '9791163864967', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791163864967.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+식품산업기사+나합격' },
    { title: '2026 식품산업기사 실기 완전정복', author: '정진경', publisher: '예문에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+식품산업기사+실기' },
    { title: '2026 식품산업기사 CBT 최신기출', author: '이현철', publisher: '일진사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788969656445.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+식품산업기사+CBT' },
    { title: '2026 Win-Q 식품산업기사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+식품산업기사' },
    { title: '식품미생물학 핵심정리', author: '이영진', publisher: '광문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9788981604608', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788981604608.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=식품미생물학+핵심정리' },
  ],

  // ────────────────────────────────────────
  // ────────────────────────────────────────
  '항공산업기사': [
    { title: '2026 항공산업기사 필기', author: '장성희', publisher: '성안당', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218227489'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218227489' },
    { title: '2026 항공산업기사 필기', author: '항공기술교육아카데미', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000217577896'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217577896' },
    { title: '2026 항공산업기사 실기 완전정복', author: '장성희', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+항공산업기사+실기' },
    { title: '2026 Win-Q 항공산업기사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], isbn: '9791138396103', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138396103.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+항공산업기사' },
    { title: '항공기 전기·전자 시스템', author: '신완섭', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511963.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=항공기+전기+전자+시스템' },
    { title: '2026 항공산업기사 CBT 최신기출', author: '항공교육연구회', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+항공산업기사+CBT' },
    { title: '항공법규 완전정복', author: '박인규', publisher: '경문사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], isbn: '9791197947506', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791197947506.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=항공법규+완전정복' },
  ],

  '영양사': [
    { title: '2026 영양사 국가시험 핵심요약 총정리', author: '대한영양사협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 678, tags: ['베스트'], isbn: '9791143412232', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143412232.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+국가시험+핵심요약+2026' },
    { title: '2026 영양사 기출문제 완전분석 10개년', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 556, tags: ['베스트'], isbn: '9791156928423', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791156928423.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+기출문제+완전분석+10개년+2026' },
    { title: '2026 영양사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940650776.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+모의고사+5회분+2026' },
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
    { title: '2026 세무사 1차 재정학 핵심이론+기출문제', author: '임병진', publisher: '나무와숲', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143402943.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세무사+1차+재정학+핵심이론+2026' },
    { title: '2026 세무사 부가가치세법 핵심요약+기출', author: '이승철', publisher: '세경북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 456, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=세무사+부가가치세법+핵심요약+2026' },
  ],

  '공인회계사': [
    { title: '2026 공인회계사 1차 세법개론 핵심이론+기출', author: '이철재', publisher: '세경북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 1234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+1차+세법개론+2026' },
    { title: '2026 공인회계사 2차 원가관리회계 기출+예상', author: '임세진', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 765, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791198777645.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+2차+원가관리회계+2026' },
    { title: '2026 공인회계사 1차 경제원론 핵심이론', author: '정병열', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인회계사+1차+경제원론+2026' },
  ],

  '감정평가사': [
    { title: '2026 감정평가사 1차 부동산학원론 한권으로 끝내기', author: '강정규 외', publisher: '박문각', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138389082.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+1차+부동산학원론+2026' },
    { title: '2026 감정평가사 2차 감정평가이론 기출+예상', author: '유선종 외', publisher: '나무와숲', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 654, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175191068.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+2차+감정평가이론+2026' },
    { title: '2026 감정평가사 1차 경제학 핵심이론+기출', author: '정병열', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+1차+경제학+2026' },
    { title: '2026 감정평가사 감정평가 관계법규 핵심이론', author: '이병준', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 456, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174042873.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+관계법규+핵심이론+2026' },
    { title: '2026 감정평가사 감정평가실무 기출+예상문제', author: '박성용', publisher: '나무와숲', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 378, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174044105.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+감정평가실무+2026' },
    { title: '2026 감정평가사 1차 회계학 핵심요약', author: '강경태', publisher: '나무와숲', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 312, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174047137.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=감정평가사+1차+회계학+2026' },
  ],

  '변리사': [
    { title: '2026 변리사 1차 산업재산권법 한권으로 끝내기', author: '원용수 외', publisher: '세경북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 765, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138393348.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=변리사+1차+산업재산권법+2026' },
  ],

  '법무사': [
    { title: '2026 법무사 1차 민법 한권으로 끝내기', author: '이동규 외', publisher: '박문각', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 654, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143410580.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=법무사+1차+민법+한권으로+2026' },
    { title: '2026 법무사 등기신청서류 작성 실무', author: '대한법무사협회', publisher: '법률미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 223, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175199750.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=법무사+등기신청서류+작성+실무+2026' },
  ],

  '공인노무사': [
    { title: '2026 공인노무사 1차 노동법 한권으로 끝내기', author: '이승렬 외', publisher: '세경북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 1123, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138395885.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인노무사+1차+노동법+한권으로+2026' },
    { title: '2026 공인노무사 1차 사회보험법 핵심이론', author: '김대환', publisher: '세경북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175191464.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공인노무사+1차+사회보험법+2026' },
  ],

  '관세사': [
  ],

  '손해사정사': [
    { title: '2026 손해사정사 1차 보험이론 한권으로 끝내기', author: '김준호 외', publisher: '나무와숲', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 543, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143400468.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=손해사정사+1차+보험이론+2026' },
    { title: '2026 손해사정사 2차 손해사정이론 기출+예상', author: '이병욱 외', publisher: '나무와숲', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 456, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194695288.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=손해사정사+2차+손해사정이론+2026' },
    { title: '2026 손해사정사 의학이론 핵심요약', author: '손해사정연구회', publisher: '나무와숲', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788966314126.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=손해사정사+의학이론+핵심요약+2026' },
    { title: '2026 손해사정사 자동차손해사정 실무', author: '김현진', publisher: '보험연수원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 312, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788966313914.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=손해사정사+자동차손해사정+실무+2026' },
  ],

  '보험계리사': [
    { title: '2026 보험계리사 1차 경제학 핵심이론+기출', author: '정병열', publisher: '세경북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보험계리사+1차+경제학+2026' },
  ],

  '일반행정사': [
    { title: '2026 에듀윌 행정사 1차 행정법 한권끝장', author: '에듀윌 행정사연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+행정사+1차+행정법+2026' },
    { title: '2026 행정사 최종 모의고사 5회분', author: '박문각 행정사연구소', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 378, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791199790506.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=행정사+최종+모의고사+5회분+2026' },
  ],

  '주택관리사보': [
    { title: '2026 박문각 주택관리사 1차 기출문제집', author: '박문각 주택관리사연구소', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 1456, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175195639.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+주택관리사+1차+기출문제+2026' },
    { title: '2026 주택관리사 공동주택관리법 핵심요약', author: '전재경', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1123, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791176441445.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=주택관리사+공동주택관리법+핵심요약+2026' },
    { title: '2026 주택관리사 2차 시설관리 핵심이론', author: '이광훈', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136041791.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=주택관리사+2차+시설관리+핵심이론+2026' },
    { title: '2026 주택관리사 최종 모의고사 1·2차', author: '에듀윌 주택관리사연구소', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 654, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194560784.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=주택관리사+최종+모의고사+2026' },
  ],

  // ────────────────────────────────────────
  // 국가전문자격증 — 복지·교육 계열
  // ────────────────────────────────────────
  '사회복지사1급': [
    { title: '2026 나눔의집 사회복지사 1급 기출문제집 10개년', author: '나눔의집 사회복지사연구소', publisher: '나눔의집', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788958105213.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나눔의집+사회복지사+1급+기출문제+10개년+2026' },
    { title: '2026 박문각 사회복지사 1급 핵심요약집', author: '박문각 사회복지사연구소', publisher: '박문각', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+사회복지사+1급+핵심요약+2026' },
    { title: '2026 시대에듀 사회복지사 1급 한권으로 끝내기', author: '시대사회복지연구소', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 1654, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138385541.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+사회복지사+1급+한권으로+2026' },
    { title: '2026 사회복지사 1급 사회복지법제 핵심정리', author: '윤찬영', publisher: '나눔의집', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1345, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791189357856.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회복지사+1급+사회복지법제+핵심정리+2026' },
    { title: '2026 사회복지사 1급 사회복지실천기술론 핵심', author: '엄명용 외', publisher: '학지사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 1123, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791189357832.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회복지사+1급+사회복지실천기술론+2026' },
    { title: '2026 사회복지사 1급 모의고사 5회분', author: '나눔의집 사회복지사연구소', publisher: '나눔의집', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 987, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169416276.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회복지사+1급+모의고사+5회분+2026' },
  ],

  '청소년상담사2급': [
    { title: '2026 청소년상담사 3급 한권으로 끝내기', author: '청소년상담사연구회', publisher: '시대고시기획', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143406095.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년상담사+3급+한권으로+끝내기+2026' },
    { title: '2026 청소년상담사 2급 한권으로 끝내기', author: '청소년상담사연구회', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143406071.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년상담사+2급+한권으로+끝내기+2026' },
    { title: '2026 청소년상담사 기출문제 완전분석', author: '김형태 외', publisher: '학지사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년상담사+기출문제+완전분석+2026' },
  ],

  '청소년지도사2급': [
    { title: '2026 청소년지도사 2·3급 한권으로 끝내기', author: '청소년지도사연구회', publisher: '시대고시기획', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143402967.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년지도사+2급+3급+한권으로+2026' },
    { title: '2026 청소년지도사 면접 완벽 대비', author: '면접연구회', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 356, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143412003.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=청소년지도사+면접+완벽+대비+2026' },
  ],

  '평생교육사': [
    { title: '2026 평생교육사 평생교육론·방법론 핵심', author: '권두승 외', publisher: '교육과학사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=평생교육사+평생교육론+방법론+2026' },
    { title: '2026 평생교육사 프로그램개발론 핵심', author: '기영화 외', publisher: '학지사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=평생교육사+프로그램개발론+핵심+2026' },
  ],

  // ────────────────────────────────────────
  // 국가전문자격증 — 건축·기타 계열
  // ────────────────────────────────────────
  '건축사': [
    { title: '2026 건축사 자격시험 대지 계획+건축 계획 종합', author: '건축사시험연구회', publisher: '기문사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축사+자격시험+대지+계획+건축+계획+2026' },
  ],

  '수의사': [
    { title: '수의사를 위한 소동물 임상 매뉴얼', author: '대한수의사회', publisher: '광일문화사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193218044.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수의사+소동물+임상+매뉴얼' },
  ],

  '2급생활스포츠지도사': [
    { title: '2026 스포츠지도사 2급 생활스포츠 필기 한권끝장', author: '스포츠지도사연구회', publisher: '시대고시기획', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791189357931.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스포츠지도사+2급+생활스포츠+필기+2026' },
    { title: '2026 스포츠지도사 필기 기출문제 완전분석', author: '국민체육진흥공단 편집부', publisher: '시대고시기획', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스포츠지도사+필기+기출문제+완전분석+2026' },
    { title: '2026 스포츠지도사 2급 구술·면접 완벽 대비', author: '스포츠지도사연구회', publisher: '시대고시기획', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 456, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스포츠지도사+2급+구술+면접+2026' },
  ],

  '사회조사분석사2급': [
    { title: '2026 사회조사분석사 기출문제 완전분석', author: '시대통계연구소', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138397490.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회조사분석사+기출문제+완전분석+2026' },
    { title: '2026 사회조사분석사 조사방법론 핵심이론', author: '김경회 외', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 654, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788969656483.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회조사분석사+조사방법론+핵심이론+2026' },
  ],

  '사회조사분석사1급': [
  ],

  // ────────────────────────────────────────
  '안경사': [
    { title: '2026 안경사 모의고사 5회분', author: '안경국시연구회', publisher: '범문에듀케이션', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 178, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143414052.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=안경사+모의고사+5회분+2026' },
  ],

  // ────────────────────────────────────────
  '언어재활사': [
    { title: '2026 언어재활사 모의고사 5회분', author: '언어치료국시연구회', publisher: '학지사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143416964.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+모의고사+5회분+2026' },
    { title: '언어재활사를 위한 AAC 보완대체의사소통', author: '이소현 외', publisher: '학지사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 108, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활사+AAC+보완대체의사소통' },
    { title: '언어재활 임상 실습 가이드', author: '김영태 외', publisher: '학지사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.3, reviews: 82, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788998521714.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=언어재활+임상+실습+가이드' },
  ],

  // ────────────────────────────────────────
  '치과기공사': [
    { title: '치과 재료학 이론과 실습', author: '대한치과기공학회', publisher: '신광출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788957413838.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과+재료학+이론+실습' },
  ],

  // ────────────────────────────────────────
  '조산사': [
    { title: '조산사를 위한 분만 임상 가이드', author: '이경혜 외', publisher: '현문사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조산사+분만+임상+가이드' },
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
  ],

  'GTQi': [
    { title: '2026 이기적 GTQ 포토샵+일러스트 1급 올인원 ver.CC', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1876, tags: ['베스트'], imageUrl: KB('S000218960821'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218960821' },
    { title: '2026 시대에듀 유선배 GTQ 일러스트 1급 합격노트 ver. Adobe CC', author: '유선배', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['베스트'], imageUrl: KB('S000217119017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217119017' },
  ],

  'MOS': [
    { title: '멘토시리즈 MOS 365 엑셀', author: '멘토 IT 연구회', publisher: '멘토르', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: KB('S000219135369'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219135369' },
    { title: '멘토시리즈 MOS 365 워드', author: '멘토 IT 연구회', publisher: '멘토르', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: KB('S000219135217'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219135217' },
  ],

  'TOEIC': [
    { title: '해커스 토익 최신기출유형 실전 10회 LC(리스닝)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.8, reviews: 5678, tags: ['베스트'], imageUrl: KB('S000220438564'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220438564' },
    { title: '해커스 토익 최신기출유형 실전 10회 RC(리딩)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.8, reviews: 5432, tags: ['베스트'], imageUrl: KB('S000220438585'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220438585' },
    { title: '해커스 토익 PART 7 집중공략 777 RC', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.8, reviews: 4321, tags: ['베스트'], imageUrl: KB('S000219129734'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219129734' },
    { title: 'EBS 김대균 토익킹 (2026년 7월)', author: '김대균', publisher: '한국교육방송공사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 3210, tags: ['베스트'], imageUrl: KB('S000220240803'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220240803' },
    { title: '토익 보카 단어장 (빈출 1200)', author: 'YBM 어학연구소', publisher: 'YBM', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 2134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토익+보카+단어장+YBM' },
  ],

  'TOEIC Speaking': [
    { title: '해커스 토익스피킹 START', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.8, reviews: 2341, tags: ['베스트'], imageUrl: KB('S000061350449'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000061350449' },
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
    { title: '커피 바리스타 문제집 & 커피용어 해설', author: '한국커피바리스타협회', publisher: '성안당', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: KB('S000001941998'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001941998' },
  ],

  '바리스타2급': [
    { title: '2026 이기적 바리스타 2급 7일 끝, 합격', author: '임형준', publisher: '영진닷컴', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.8, reviews: 3210, tags: ['베스트'], imageUrl: KB('S000218917586'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218917586' },
    { title: '바리스타 2급 자격시험 기출문제 완전분석', author: '한국커피협회', publisher: '한국커피협회', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 1876, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=바리스타+2급+기출문제' },
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
    { title: '2026 이기적 ITQ 엑셀 ver. 2021 기본서', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.8, reviews: 3876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479447.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ITQ+엑셀+2026' },
    { title: '2026 이기적 ITQ 파워포인트 ver. 2021 기본서', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.8, reviews: 3543, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479461.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ITQ+파워포인트+2026' },
    { title: 'ITQ OA Master 한글+엑셀+파워포인트 한권끝내기', author: '정보문화사 편집부', publisher: '정보문화사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 2134, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791125421832.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=ITQ+OA+Master+한권끝내기' },
    { title: '시나공 ITQ 한글+엑셀+파워포인트', author: '길벗 R&D', publisher: '길벗', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140708536.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시나공+ITQ+한글+엑셀+파워포인트' },
  ],

  'JLPT': [
    { title: 'JLPT 한 권으로 합격 N1', author: '시원스쿨 일본어연구소', publisher: '시원스쿨랩', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 3456, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965426073.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=JLPT+한권으로합격+N1' },
    { title: 'JLPT 한 권으로 합격 N2', author: '시원스쿨 일본어연구소', publisher: '시원스쿨랩', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.8, reviews: 3210, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965423393.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=JLPT+한권으로합격+N2' },
  ],

  'HSK': [
    { title: 'HSK 6급 한 권으로 합격', author: '정계도', publisher: '시원스쿨랩', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157200078.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=HSK+6급+한권으로합격' },
    { title: 'HSK 5급 한 권으로 합격', author: '정계도', publisher: '시원스쿨랩', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.8, reviews: 2543, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791164302918.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=HSK+5급+한권으로합격' },
    { title: '해커스 중국어 HSK 6급 어휘·독해·듣기', author: '해커스중국어연구소', publisher: '해커스어학연구소', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+중국어+HSK+6급' },
    { title: 'HSK 5급 실전 모의고사 5회분', author: '다락원 중국어연구소', publisher: '다락원', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791190074322.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=HSK+5급+실전+모의고사' },
  ],

  '재경관리사': [
    { title: '2026 재경관리사 세무회계 이론+기출', author: '정정운', publisher: '삼일인포마인', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174040893.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=재경관리사+세무회계+2026' },
  ],

  'ERP정보관리사': [
    { title: '2026 이기적 ERP 정보관리사 회계 1·2급', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ERP+정보관리사+회계+2026' },
    { title: '2026 이기적 ERP 정보관리사 인사 1·2급', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479096.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ERP+정보관리사+인사+2026' },
    { title: '2026 이기적 ERP 정보관리사 물류 1·2급', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+ERP+정보관리사+물류+2026' },
    { title: 'ERP 정보관리사 회계 기출문제집', author: 'ERP수험연구소', publisher: '시대에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138395014.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=ERP+정보관리사+회계+기출' },
  ],

  '매경TEST': [
    { title: '매경TEST 공식 기출문제집 (최신판)', author: '매일경제 TEST사업본부', publisher: '매일경제신문사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=매경TEST+공식+기출문제집' },
    { title: '맨큐의 경제학 (원리 중심)', author: 'N.G.맨큐', publisher: '센게이지러닝', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791189168018.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=맨큐의+경제학' },
    { title: '매경TEST 실전 모의고사 3회분', author: '매경TEST연구소', publisher: '매일경제신문사', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791125747178.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=매경TEST+실전+모의고사' },
  ],

  'TESAT': [
    { title: 'TESAT 공식 기출문제집 (한국경제신문)', author: '한국경제신문 TESAT운영본부', publisher: '한국경제신문', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136042224.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=TESAT+공식+기출문제집' },
    { title: '경제학 원론 (TESAT 이론 기초)', author: '이준구·이창용', publisher: '문우사', price: 32000, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=경제학원론+이준구' },
  ],

  '펀드투자권유대행인': [
    { title: '2026 펀드투자권유대행인 한권으로 끝내기', author: '금융자격연구소', publisher: '시대에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791125495383.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=펀드투자권유대행인+한권끝내기+2026' },
    { title: '펀드투자권유대행인 핵심정리+기출문제', author: '해커스 금융아카데미', publisher: '해커스패스', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791163865698.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=펀드투자권유대행인+해커스+기출' },
    { title: '2026 와우패스 펀드투자권유대행인', author: '와우패스 교수진', publisher: '와우패스', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788966139071.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=와우패스+펀드투자권유대행인+2026' },
  ],

  '소믈리에': [
  ],

  '바텐더': [
  ],

  '한자능력검정': [
    { title: '한자능력검정 2급 한권으로 끝내기', author: '김원중', publisher: '성안당', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143402332.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한자능력검정+2급+한권끝내기' },
  ],

  'KBS한국어능력시험': [
    { title: 'KBS 한국어능력시험 기출문제 완전분석 (최신판)', author: 'KBS한국어능력시험연구소', publisher: 'KBS미디어', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=KBS+한국어능력시험+기출문제+완전분석' },
    { title: 'KBS 한국어능력시험 한권으로 합격', author: '이재훈', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788969654762.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=KBS+한국어능력시험+한권으로합격' },
    { title: 'KBS 한국어능력시험 실전 모의고사 5회분', author: 'KBS한국어연구소', publisher: 'KBS미디어', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 1234, tags: ['추천'], imageUrl: 'https://image.aladin.co.kr/product/17173/87/coversum/k192534686_1.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=KBS+한국어능력시험+실전모의고사' },
  ],

  'TOEFL': [
    { title: '해커스 TOEFL Reading (토플 리딩)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 3210, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965426530.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+TOEFL+Reading' },
    { title: '해커스 TOEFL Listening (토플 리스닝)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965426554.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+TOEFL+Listening' },
    { title: 'The Official Guide to the TOEFL Test (ETS 공식)', author: 'ETS', publisher: 'McGraw-Hill', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 2543, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788917238525.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Official+Guide+TOEFL+ETS' },
    { title: '해커스 TOEFL Writing (토플 라이팅)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965426820.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+TOEFL+Writing' },
    { title: '해커스 TOEFL Speaking (토플 스피킹)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1765, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965426561.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+TOEFL+Speaking' },
  ],

  'IELTS': [
    { title: '해커스 IELTS Writing (아이엘츠 라이팅)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965422327.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+IELTS+Writing' },
    { title: 'Cambridge IELTS 18 (캠브리지 공식 기출)', author: 'Cambridge ESOL', publisher: 'Cambridge', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Cambridge+IELTS+18+공식기출' },
    { title: '해커스 IELTS Reading (아이엘츠 리딩)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965422297.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+IELTS+Reading' },
  ],

  '한국사능력검정시험': [
    { title: '2026 큰별쌤 최태성의 별별한국사 심화 상·하', author: '최태성', publisher: '이투스북', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.9, reviews: 12543, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138934428.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=최태성+별별한국사+심화+2026' },
    { title: '2026 해커스 한국사능력검정시험 심화 (1·2·3급) 한권완성', author: '해커스 역사연구소', publisher: '해커스패스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 9876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788969656827.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+한국사능력검정+심화+2026' },
    { title: '2026 에듀윌 한국사능력검정시험 2주끝장 심화', author: '에듀윌 한국사연구소', publisher: '에듀윌', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.7, reviews: 6543, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039545.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+한국사능력검정+2주끝장+2026' },
    { title: '2026 이투스 한국사능력검정시험 기출 500제 심화', author: '이투스 한국사팀', publisher: '이투스북', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.7, reviews: 5432, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138934459.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이투스+한국사능력검정+기출500제+2026' },
  ],

  '사회통합프로그램': [
    { title: '사회통합프로그램 종합평가 한국어·한국사회이해 교재 (법무부 공식)', author: '법무부 출입국·외국인청', publisher: '법무부', price: 20000, originalPrice: 20000, discount: '0%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=사회통합프로그램+종합평가+교재' },
    { title: 'KIIP 한국어와 한국문화 중급 1 (3단계)', author: '국립국어원', publisher: '하우', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=KIIP+한국어+한국문화+중급' },
    { title: 'KIIP 한국사회이해 (5단계 기본)', author: '국립국어원', publisher: '하우', price: 12000, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=KIIP+한국사회이해+5단계' },
  ],

  '국내여행안내사': [
    { title: '2026 국내여행안내사 한권으로 끝내기', author: '관광자격연구소', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143401502.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=국내여행안내사+한권끝내기+2026' },
  ],

  '국외관광안내사': [
    { title: '국외여행인솔자(TC) 소양교육 교재 (한국여행업협회 공식)', author: '한국여행업협회', publisher: '한국여행업협회', price: 20000, originalPrice: 20000, discount: '0%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=국외여행인솔자+소양교육+교재' },
  ],

  '관광통역안내사': [
    { title: '2026 관광통역안내사 영어 한권으로 합격', author: '관광자격연구소', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=관광통역안내사+영어+2026' },
    { title: '2026 관광통역안내사 중국어 한권으로 합격', author: '관광자격연구소', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788998444617.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=관광통역안내사+중국어+2026' },
    { title: '2026 관광통역안내사 일본어 한권으로 합격', author: '관광자격연구소', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=관광통역안내사+일본어+2026' },
  ],

  '한국어능력시험(TOPIK)': [
    { title: '한국어능력시험 TOPIK II 한권으로 끝내기', author: '이지원', publisher: '시원스쿨랩', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 5432, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927774372.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=TOPIK+II+한권으로끝내기' },
    { title: '해커스 TOPIK II 한국어능력시험 실전 기출', author: '해커스 한국어연구소', publisher: '해커스어학연구소', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.8, reviews: 4321, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+TOPIK+II+실전기출' },
  ],

  '임용고시': [
    { title: '교육과정 핵심 완성 (2022 개정 교육과정 반영)', author: '양현권', publisher: '에듀피디', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193153680.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임용+교육과정+핵심완성+2022개정' },
  ],

  '한국실용글쓰기': [
    { title: '한국실용글쓰기 단기완성 요약집', author: '글쓰기연구소', publisher: '에듀윌', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791125406259.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한국실용글쓰기+단기완성+요약집' },
  ],

  '임상심리사2급': [
    { title: '2026 임상심리사 2급 필기 한권으로 끝내기', author: '박지원', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143400666.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상심리사+2급+필기+한권끝내기+2026' },
    { title: '2026 임상심리사 2급 기출문제집', author: '임상심리수험연구소', publisher: '학지사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166431463.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상심리사+2급+기출문제집+2026' },
    { title: '이상심리학 (DSM-5 완전 반영)', author: '권석만', publisher: '학지사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이상심리학+권석만+DSM-5' },
    { title: '심리검사의 이해 (K-WAIS·MMPI·로르샤하)', author: '황순택 외', publisher: '시그마프레스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=심리검사의이해+K-WAIS+MMPI+로르샤하' },
    { title: '심리치료의 이론과 실제 (CBT·정신역동·인본주의)', author: '천성문 외', publisher: '학지사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=심리치료+이론과+실제+CBT' },
  ],

  '심리상담사': [
    { title: '상담이론과 실제 (코리의 상담이론)', author: 'Gerald Corey', publisher: '시그마프레스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 3210, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=상담이론과실제+코리+시그마프레스' },
    { title: '상담심리학 핵심이론 총정리', author: '노안영', publisher: '학지사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=상담심리학+핵심이론+총정리+노안영' },
    { title: '집단상담의 이론과 실제', author: '천성문 외', publisher: '학지사', price: 20000, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788999732041.jpg', pageUrl: 'https://search.kyobobook.co.kr/search?keyword=집단상담+이론과실제+천성문' },
  ],

  'TAT': [
    { title: '2026 I CAN TAT 세무실무 2급', author: '아이캔 세무회계연구소', publisher: '아이캔', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], imageUrl: KB('S000219495682'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219495682' },
    { title: '2026 I Can TAT 세무실무 1급', author: '아이캔 세무회계연구소', publisher: '아이캔', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1987, tags: ['베스트'], imageUrl: KB('S000219812336'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219812336' },
    { title: '2026 로그인 TAT 2급', author: '박병규', publisher: '세경북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1765, tags: ['베스트'], imageUrl: KB('S000219349559'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219349559' },
    { title: '2026 이패스 세무회계 2급 핵심요약 및 문제풀이', author: '이패스코리아 편집부', publisher: '이패스코리아', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1432, tags: ['추천'], imageUrl: KB('S000219346402'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219346402' },
    { title: '2026 이패스 세무회계 1급 핵심요약 및 문제풀이', author: '이패스코리아 편집부', publisher: '이패스코리아', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 1123, tags: ['추천'], imageUrl: KB('S000219647804'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219647804' },
  ],

  // ────────────────────────────────────────
  '컬러리스트기사': [
    // 베스트셀러 5
    { title: '2027 컬러리스트기사 · 산업기사 필기 세트', author: '조영우, 김남일 외', publisher: '예문사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 58, tags: ['베스트'], imageUrl: KB('S000220502349'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220502349' },
    { title: '2026 이기적 컬러리스트기사·산업기사 필기 기본서', author: '선앤미', publisher: '영진닷컴', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 71, tags: ['베스트'], imageUrl: KB('S000219382451'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219382451' },
    { title: '2026 동영상 강의로 배우는 컬러리스트 기사·산업기사 실기 세트', author: '조영우, 김남일, 김수예 외', publisher: '예문사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.9, reviews: 94, tags: ['베스트'], imageUrl: KB('S000218229360'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218229360' },
    { title: '2025 컬러리스트 실기시험 산업기사·기사 문제집+해설집 세트', author: '신현지', publisher: '미진사', price: 39000, originalPrice: 39000, discount: '0%', rating: 4.9, reviews: 63, tags: ['베스트'], imageUrl: KB('S000215822561'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215822561' },
    { title: '2025 컬러리스트 기사 · 산업기사 필기 세트', author: '조영우', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.9, reviews: 112, tags: ['베스트'], imageUrl: KB('S000214970870'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214970870' },
    // 추천수험서 5
    { title: '2024 이기적 컬러리스트기사 산업기사 필기 기본서 세트', author: '김선미, 한명숙 외', publisher: '영진닷컴', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.9, reviews: 87, tags: ['추천'], imageUrl: KB('S000201992937'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000201992937' },
    { title: '2023 컬러리스트기사 산업기사 필기 한권으로 끝내기', author: '강수경, 선혜경, 은광희, 이수경, 최영미 외', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.9, reviews: 76, tags: ['추천'], imageUrl: KB('S000201054216'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000201054216' },
    { title: '2023 컬러리스트 기사/산업기사 필기', author: '배용진, 황상윤 외', publisher: '지구문화', price: 33000, originalPrice: 33000, discount: '0%', rating: 4.5, reviews: 42, tags: ['추천'], imageUrl: KB('S000200846908'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200846908' },
    { title: '2023 NEW출제경향대비 컬러리스트 필기시험 산업기사·기사 세트', author: '빈혜진', publisher: '미진사', price: 37000, originalPrice: 37000, discount: '0%', rating: 4.4, reviews: 39, tags: ['추천'], imageUrl: KB('S000200833726'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200833726' },
    { title: 'New 컬러리스트(Colorist) 기사 산업기사', author: '배용진, 이정은, 박희경 외', publisher: '지구문화사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 51, tags: ['추천'], imageUrl: KB('S000001065999'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001065999' },
  ],

  // ────────────────────────────────────────
  '컬러리스트산업기사': [
    // 베스트셀러 5
    { title: '2027 컬러리스트기사 · 산업기사 필기 세트', author: '조영우, 김남일 외', publisher: '예문사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 58, tags: ['베스트'], imageUrl: KB('S000220502349'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220502349' },
    { title: '2026 이기적 컬러리스트기사·산업기사 필기 기본서', author: '선앤미', publisher: '영진닷컴', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 71, tags: ['베스트'], imageUrl: KB('S000219382451'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219382451' },
    { title: '2026 동영상 강의로 배우는 컬러리스트 기사·산업기사 실기 세트', author: '조영우, 김남일, 김수예 외', publisher: '예문사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.9, reviews: 94, tags: ['베스트'], imageUrl: KB('S000218229360'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218229360' },
    { title: '2025 컬러리스트 실기시험 산업기사·기사 문제집+해설집 세트', author: '신현지', publisher: '미진사', price: 39000, originalPrice: 39000, discount: '0%', rating: 4.9, reviews: 63, tags: ['베스트'], imageUrl: KB('S000215822561'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215822561' },
    { title: '2025 컬러리스트 기사 · 산업기사 필기 세트', author: '조영우', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.9, reviews: 112, tags: ['베스트'], imageUrl: KB('S000214970870'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214970870' },
    // 추천수험서 5
    { title: '2024 이기적 컬러리스트기사 산업기사 필기 기본서 세트', author: '김선미, 한명숙 외', publisher: '영진닷컴', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.9, reviews: 87, tags: ['추천'], imageUrl: KB('S000201992937'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000201992937' },
    { title: '2023 컬러리스트기사 산업기사 필기 한권으로 끝내기', author: '강수경, 선혜경, 은광희, 이수경, 최영미 외', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.9, reviews: 76, tags: ['추천'], imageUrl: KB('S000201054216'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000201054216' },
    { title: '2023 컬러리스트 기사/산업기사 필기', author: '배용진, 황상윤 외', publisher: '지구문화', price: 33000, originalPrice: 33000, discount: '0%', rating: 4.5, reviews: 42, tags: ['추천'], imageUrl: KB('S000200846908'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200846908' },
    { title: '2023 NEW출제경향대비 컬러리스트 필기시험 산업기사·기사 세트', author: '빈혜진', publisher: '미진사', price: 37000, originalPrice: 37000, discount: '0%', rating: 4.4, reviews: 39, tags: ['추천'], imageUrl: KB('S000200833726'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200833726' },
    { title: 'New 컬러리스트(Colorist) 기사 산업기사', author: '배용진, 이정은, 박희경 외', publisher: '지구문화사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 51, tags: ['추천'], imageUrl: KB('S000001065999'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001065999' },
  ],

  // ────────────────────────────────────────
  // 경찰공무원(순경) — 교보문고 경찰직 카테고리(경찰학개론/경찰헌법/경찰형법) 베스트셀러 기준, 2026-07-29 확인
  '경찰공무원(순경)': [
    { title: '2027 해커스경찰 조현 경찰학 기본서', author: '조현', publisher: '해커스경찰', price: 43200, originalPrice: 48000, discount: '10%', rating: 5.0, reviews: 20, tags: ['베스트'], imageUrl: KB('S000219595180'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219595180' },
    { title: '2026 해커스경찰 신동욱 경찰헌법 기본서', author: '신동욱', publisher: '해커스경찰', price: 54000, originalPrice: 60000, discount: '10%', rating: 5.0, reviews: 21, tags: ['베스트'], imageUrl: KB('S000217751397'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217751397' },
    { title: '2026 해커스경찰 갓대환 형사법 핵심요약집 형법', author: '김대환', publisher: '해커스경찰', price: 40500, originalPrice: 45000, discount: '10%', rating: 5.0, reviews: 31, tags: ['베스트'], imageUrl: KB('S000219562645'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219562645' },
    { title: '2026 해커스경찰 김민철 경찰학 기출 1000제', author: '김민철', publisher: '해커스경찰', price: 39600, originalPrice: 44000, discount: '10%', rating: 5.0, reviews: 57, tags: ['추천'], imageUrl: KB('S000219544931'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219544931' },
    { title: '2027 해커스경찰 박철한 경찰헌법 최신 5개년 판례집', author: '박철한', publisher: '해커스경찰', price: 17100, originalPrice: 19000, discount: '10%', rating: 5.0, reviews: 3, tags: ['추천'], imageUrl: KB('S000220428017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220428017' },
    { title: '2026 해커스경찰 킹재규 경찰학 총알 총정리 모의고사 2차 시험 대비', author: '김재규', publisher: '해커스경찰', price: 21600, originalPrice: 24000, discount: '10%', rating: 5.0, reviews: 8, tags: ['추천'], imageUrl: KB('S000220350323'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220350323' },
  ],

  // ────────────────────────────────────────
  // 일반행정직 공무원(9급) — 교보문고 공무원 과목별(국어/영어/한국사/행정법/행정학) 베스트셀러 기준, 2026-07-29 확인
  '일반행정직 공무원(9급)': [
    { title: '2027 해커스공무원 신민숙 쉬운국어 한 권으로 끝', author: '신민숙', publisher: '해커스공무원', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 18, tags: ['베스트'], imageUrl: KB('S000219853841'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219853841' },
    { title: '2027 공단기 심슨 보카', author: '심우철', publisher: '에스티유니타스', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 29, tags: ['베스트'], imageUrl: KB('S000220053944'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220053944' },
    { title: '2026 해커스공무원 이중석 맵핑 한국사 올인원 블랭크노트', author: '이중석', publisher: '해커스공무원', price: 17100, originalPrice: 19000, discount: '10%', rating: 5.0, reviews: 135, tags: ['베스트'], imageUrl: KB('S000216937190'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216937190' },
    { title: '2027 해커스공무원 3분의 1로 줄여 쓴 김대현 행정법총론 기본서', author: '김대현', publisher: '해커스공무원', price: 28800, originalPrice: 32000, discount: '10%', rating: 5.0, reviews: 16, tags: ['추천'], imageUrl: KB('S000220221375'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220221375' },
    { title: '2027 김중규 원픽 선행정학', author: '김중규', publisher: '카스파', price: 24300, originalPrice: 27000, discount: '10%', rating: 5.0, reviews: 14, tags: ['추천'], imageUrl: KB('S000219882824'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219882824' },
  ],

  // ────────────────────────────────────────
  // 소방공무원(소방직) — 교보문고 소방직 카테고리(소방학개론/법규) + 공무원 행정법 베스트셀러 기준, 2026-07-29 확인
  '소방공무원(소방직)': [
    { title: '2027 소방직 시험대비 So Nice 백소나 소방학개론 기본서', author: '백소나', publisher: '더나은', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.95, reviews: 14, tags: ['베스트'], imageUrl: KB('S000219789746'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219789746' },
    { title: '2027 소방직 시험대비 So Nice 백소나 소방관계법규 1', author: '백소나', publisher: '더나은', price: 35100, originalPrice: 39000, discount: '10%', rating: 5.0, reviews: 8, tags: ['베스트'], imageUrl: KB('S000219789752'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219789752' },
    { title: '2027 해커스공무원 3분의 1로 줄여 쓴 김대현 행정법총론 기본서', author: '김대현', publisher: '해커스공무원', price: 28800, originalPrice: 32000, discount: '10%', rating: 5.0, reviews: 16, tags: ['추천'], imageUrl: KB('S000220221375'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220221375' },
    { title: '2027 심승아 Simple, Detail 심테일 소방관계법규 1', author: '심승아', publisher: '모두공북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 5.0, reviews: 2, tags: ['추천'], imageUrl: KB('S000220490616'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220490616' },
  ],

  // ────────────────────────────────────────
  // 운전직 공무원(9급) — 교보문고 운전직 카테고리 + 공무원 과목별(국어/한국사) 베스트셀러 기준, 2026-07-29 확인
  // 참고: 운전직 카테고리 자체는 거래량이 적어(주간 베스트 1건) 신뢰 가능한 후보가 한정적임
  '운전직 공무원(9급)': [
    { title: '2027 해커스공무원 신민숙 쉬운국어 한 권으로 끝', author: '신민숙', publisher: '해커스공무원', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 18, tags: ['베스트'], imageUrl: KB('S000219853841'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219853841' },
    { title: '2026 해커스공무원 이중석 맵핑 한국사 올인원 블랭크노트', author: '이중석', publisher: '해커스공무원', price: 17100, originalPrice: 19000, discount: '10%', rating: 5.0, reviews: 135, tags: ['베스트'], imageUrl: KB('S000216937190'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216937190' },
    { title: '2026 9급 운전직 Final 동형모의고사 7회분 자동차구조원리+도로교통법', author: '김진아, 이윤승', publisher: '서울고시각(SG P&E)', price: 13500, originalPrice: 15000, discount: '10%', reviews: 0, tags: ['추천'], imageUrl: KB('S000220108922'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220108922' },
  ],

  // ────────────────────────────────────────
  // 법원직 공무원(9급) — 교보문고 법원직/검찰사무직 카테고리 + 공무원 과목별(국어/영어/한국사) 베스트셀러 기준, 2026-07-29 확인
  '법원직 공무원(9급)': [
    { title: '2026 해커스공무원 박철한 헌법 기본서', author: '박철한', publisher: '해커스공무원', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.95, reviews: 20, tags: ['베스트'], imageUrl: KB('S000217349571'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217349571' },
    { title: '2027 단기완성 민법 1: 민법총칙 물권법', author: '황보수정', publisher: '새흐름', price: 35100, originalPrice: 39000, discount: '10%', reviews: 0, tags: ['베스트'], imageUrl: KB('S000220588930'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220588930' },
    { title: '2026 신호진 핵심기출 1000제 형사법 2: 형법각론', author: '신호진', publisher: '렉스스터디', price: 34200, originalPrice: 38000, discount: '10%', rating: 5.0, reviews: 7, tags: ['베스트'], imageUrl: KB('S000219182554'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219182554' },
    { title: '2027 해커스공무원 신민숙 쉬운국어 한 권으로 끝', author: '신민숙', publisher: '해커스공무원', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 18, tags: ['추천'], imageUrl: KB('S000219853841'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219853841' },
    { title: '2027 공단기 심슨 보카', author: '심우철', publisher: '에스티유니타스', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 29, tags: ['추천'], imageUrl: KB('S000220053944'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220053944' },
    { title: '2026 해커스공무원 이중석 맵핑 한국사 올인원 블랭크노트', author: '이중석', publisher: '해커스공무원', price: 17100, originalPrice: 19000, discount: '10%', rating: 5.0, reviews: 135, tags: ['추천'], imageUrl: KB('S000216937190'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216937190' },
  ],

};
