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
    { title: '2026 에듀윌 산업안전산업기사 필기 한권끝장', author: '최창률', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+에듀윌' },
    { title: '2026 직8딴 산업안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+직8딴+산업안전산업기사' },
    { title: '2026 산업안전산업기사 필기 7개년 기출문제집', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 176, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+세화' },
    { title: '2026 해커스 산업안전산업기사 필기 핵심요약+기출', author: '해커스자격증', publisher: '해커스자격증', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+산업안전산업기사' },
    // 추천수험서 5
    { title: '2026 찐합격 산업안전산업기사 실기 단기완성', author: '이상도', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+실기' },
    { title: '2026 산업안전산업기사 실기 필답형+작업형 완전정복', author: '이순규', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+실기+예문사' },
    { title: '2026 벼락치기 산업안전산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+벼락치기' },
    { title: '2026 산업안전산업기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+CBT' },
    { title: '2026 스마트 산업안전산업기사 과년도 문제해설', author: '허원회', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+산업안전산업기사+과년도' },
  ],

  // ────────────────────────────────────────
  '전기기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 전기기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 421, tags: ['베스트'], imageUrl: KB('S000216853109'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216853109' },
    { title: '2026 해커스 전기기사·산업기사 필기 올인원', author: '오우진', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: KB('S000218582288'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218582288' },
    { title: '2026 직8딴 전기기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 287, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+직8딴+전기기사+필기' },
    { title: '2026 전기기사 필기 최근 10년간 기출문제', author: '이재원', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218820738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218820738' },
    { title: '2026 전기기사 필기', author: '김상훈', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000217579715'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217579715' },
    // 추천수험서 5
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출문제집+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 312, tags: ['추천'], imageUrl: KB('S000217555269'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217555269' },
    { title: '2026 전기기사 필기 필수기출 1200제', author: '엔지니어랩 연구소', publisher: '엔지니어랩', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 256, tags: ['추천'], imageUrl: KB('S000218188325'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218188325' },
    { title: '2026 전기응용 및 공사재료', author: '김상훈', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: KB('S000217420169'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217420169' },
    { title: '2026 전기공사기사 실기', author: '김상훈', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 167, tags: ['추천'], imageUrl: KB('S000219138309'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219138309' },
    { title: '2026 전기기사 실기 완전정복', author: '이현철', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.4, reviews: 143, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+전기기사+실기' },
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
    { title: '2026 소방설비기사 실기 전기 완전정복', author: '공하성', publisher: '성안당', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+실기+전기' },
    { title: '2026 소방설비기사 실기 기계 완전정복', author: '공하성', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+실기+기계' },
    { title: '2026 벼락치기 소방설비기사 전기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+소방설비기사+벼락치기' },
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
    { title: '2026 직8딴 건설안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+필기' },
    { title: '2026 건설안전산업기사 필기 7개년 기출문제해설', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+세화' },
    { title: '2026 해커스 건설안전산업기사 필기 한권합격', author: '해커스자격증', publisher: '해커스자격증', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+건설안전산업기사' },
    // 추천수험서 5
    { title: '2026 건설안전산업기사 실기 필답형 완전정복', author: '이순규', publisher: '예문사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+실기' },
    { title: '2026 스마트 건설안전산업기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+과년도' },
    { title: '2026 건설안전산업기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+CBT' },
    { title: '2026 건설안전산업기사 실기 작업형 핵심정리', author: '김충민', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+건설안전산업기사+작업형' },
    { title: '2026 벼락치기 건설안전산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+건설안전산업기사+벼락치기' },
  ],

  // ────────────────────────────────────────
  '전기산업기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 전기기사·산업기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: KB('S000216853109'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216853109' },
    { title: '2026 해커스 전기기사·산업기사 필기 올인원', author: '오우진', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218582288'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218582288' },
    { title: '2026 직8딴 전기산업기사 필기', author: '김진태', publisher: '김영북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+직8딴+전기산업기사' },
    { title: '2026 전기산업기사 필기', author: '김상훈', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000217601906'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217601906' },
    { title: '2026 전기기사 필기 필수기출 1200제', author: '엔지니어랩 연구소', publisher: '엔지니어랩', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('S000218188325'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218188325' },
    // 추천수험서 5
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: KB('S000217555269'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217555269' },
    { title: '2026 전기산업기사 실기 완전정복', author: '이현철', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+전기산업기사+실기' },
    { title: '2026 벼락치기 전기산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+전기산업기사+벼락치기' },
    { title: '2026 전기기사 필기 최근 10년간 기출문제', author: '이재원', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], imageUrl: KB('S000218820738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218820738' },
    { title: '2026 전기회로이론 필기+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('S000217252017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217252017' },
  ],

  // ────────────────────────────────────────
  '일반기계기사': [
    // 베스트셀러 5
    { title: '2026 해커스 일반기계기사 필기 한권합격 이론+최신기출', author: '이선형', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218366558'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218366558' },
    { title: '2026 해커스 일반기계기사 실기 작업형 출제 도면집', author: '해커스자격증', publisher: '해커스자격증', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218980950'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218980950' },
    { title: '2026 에듀윌 일반기계기사 필기 한권끝장', author: '에듀윌 기계수험연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+일반기계기사' },
    { title: '2026 나합격 일반기계기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+일반기계기사' },
    { title: '2026 직8딴 일반기계기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+직8딴+일반기계기사' },
    // 추천수험서 5
    { title: '2026 일반기계기사 실기 완전정복', author: '이현철', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+일반기계기사+실기' },
    { title: '2026 스마트 7개년 과년도 일반기계기사 필기', author: '허원회, 박만재', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+일반기계기사+과년도' },
    { title: '2026 벼락치기 일반기계기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+일반기계기사+벼락치기' },
    { title: '2026 일반기계기사 CBT 최신기출문제해설', author: '서상희', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+일반기계기사+CBT' },
    { title: '2026 일반기계기사 기계설계 핵심이론 및 기출', author: '안광호', publisher: '한솔아카데미', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+일반기계기사+한솔아카데미' },
  ],

  // ────────────────────────────────────────
  '화공기사': [
    // 베스트셀러 5
    { title: '2026 화공기사 필기 세트', author: '정나나', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 278, tags: ['베스트'], imageUrl: KB('S000219080786'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219080786' },
    { title: '2026 화공기사 기출문제집(필기)', author: '김재호', publisher: '예문사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: KB('S000217304501'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217304501' },
    { title: '2026 에듀윌 화공기사 필기 한권끝장', author: '에듀윌 화공수험연구소', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+화공기사' },
    { title: '2026 나합격 화공기사 필기+무료특강', author: '이윤기', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+화공기사' },
    { title: '2026 화공기사 필기 7개년 기출문제해설', author: '서상희', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화공기사+일진사' },
    // 추천수험서 5
    { title: '2026 화공기사 실기 완전정복', author: '이현철', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화공기사+실기' },
    { title: '2025 정나나의 화공기사 필기 과년도 문제해설', author: '정나나', publisher: '예문사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], imageUrl: KB('S000213942242'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213942242' },
    { title: '2026 벼락치기 화공기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화공기사+벼락치기' },
    { title: '2026 스마트 화공기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+화공기사+과년도' },
    { title: '2026 화공기사 CBT 실전모의고사+핵심요약', author: '화공기사연구회', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화공기사+CBT' },
  ],

  // ────────────────────────────────────────
  '가스기사': [
    // 베스트셀러 5
    { title: '2026 평생 무료 동영상과 함께하는 가스기사 필기', author: '서상희', publisher: '일진사', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], imageUrl: KB('S000218666990'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218666990' },
    { title: '가스기사·가스산업기사 필기 총정리', author: '서상희', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: KB('S000214202695'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214202695' },
    { title: '2026 가스산업기사 필기 기출문제집', author: '김재호', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('S000218667744'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218667744' },
    { title: '2026 나합격 가스기사 필기 핵심요약+기출', author: '이윤기', publisher: '삼원북스', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스기사' },
    { title: '2026 에듀윌 가스기사 필기 한권끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 123, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+에듀윌+가스기사' },
    // 추천수험서 5
    { title: '2026 가스기사 실기 완전정복 필답형+작업형', author: '서상희', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 178, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기사+실기' },
    { title: '2026 가스기능사 필기 총정리', author: '서상희', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: KB('S000217622875'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217622875' },
    { title: '2026 벼락치기 가스기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기사+벼락치기' },
    { title: '2026 해커스 가스기사 필기 핵심요약', author: '해커스자격증', publisher: '해커스자격증', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+해커스+가스기사' },
    { title: '2026 가스기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기사+CBT' },
  ],

  // ────────────────────────────────────────
  '가스산업기사': [
    // 베스트셀러 5
    { title: '2026 나합격 가스산업기사 필기+실기+무료특강', author: '이윤기', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 287, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스산업기사+필기' },
    { title: '2026 가스산업기사 필기 총정리', author: '서상희', publisher: '일진사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+필기+총정리' },
    { title: '2026 모아 가스산업기사 필기 핵심이론+과년도', author: '오민정', publisher: '모아교육그룹', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+모아+가스산업기사+필기' },
    { title: '2026 나합격 가스산업기사 필기 핵심이론+8개년 기출', author: '이윤기', publisher: '삼원북스', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스산업기사+핵심이론' },
    { title: '2026 가스산업기사 필기 과년도 출제문제 해설', author: '서상희', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+과년도' },
    // 추천수험서 5
    { title: '2026 모아 가스산업기사 필기 빵꾸노트', author: '오민정', publisher: '모아교육그룹', price: 9900, originalPrice: 11000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+모아+가스산업기사+빵꾸노트' },
    { title: '2026 가스산업기사 필기 기출문제집', author: '김재호', publisher: '예문사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+기출문제집' },
    { title: '2026 에듀윌 가스산업기사 필기 한권끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+가스산업기사' },
    { title: '2026 가스산업기사 실기 완전정복', author: '서상희', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+실기' },
    { title: '2026 가스산업기사 CBT 최신기출문제해설', author: '이윤기', publisher: '삼원북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스산업기사+CBT' },
  ],

  // ────────────────────────────────────────
  '가스기능사': [
    // 베스트셀러 5
    { title: '2026 나합격 가스기능사 필기+실기+무료특강', author: '이윤기', publisher: '삼원북스', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+가스기능사+필기' },
    { title: '2026 가스기능사 필기 총정리', author: '서상희', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+필기+총정리' },
    { title: '2026 에듀윌 가스기능사 필기 2주끝장', author: '양성진', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 213, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+가스기능사+필기' },
    { title: '2026 모아 가스기능사 필기 핵심이론+과년도 12개년', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+모아+가스기능사+필기' },
    { title: '2026 가스기능사 필기 과년도 출제문제 해설', author: '서상희', publisher: '일진사', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 154, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+과년도' },
    // 추천수험서 5
    { title: '홍까스와 함께하는 가스기능사 필기 핵심강의노트', author: '홍경표', publisher: '에듀피디', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 132, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=홍까스+가스기능사+필기' },
    { title: '2026 가스기능사 필기 CBT 기출문제집', author: '김재호', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+CBT' },
    { title: '2026 가스기능사 필기 한권끝장', author: '이윤기', publisher: '삼원북스', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+필기+한권끝장' },
    { title: '2026 가스기능사 실기 완전정복', author: '서상희', publisher: '일진사', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+가스기능사+실기' },
    { title: '2026 Win-Q 가스기능사 필기 단기합격', author: '함성훈', publisher: '시대에듀', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 73, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+가스기능사' },
  ],

  // ────────────────────────────────────────
  '가스기능장': [
    // 베스트셀러 5
    { title: '2026 완벽대비 가스기능장 필기', author: '서상희', publisher: '동일출판사', price: 38000, originalPrice: 40000, discount: '5%', rating: 4.6, reviews: 145, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+필기+완벽대비' },
    { title: '2026 초단기완성! 가스기능장 필기', author: '노진식', publisher: '책과상상', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 112, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+초단기완성+가스기능장' },
    { title: '단기완성 가스기능장 필기 최근 기출문제', author: '최갑규', publisher: '세진북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 98, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+필기+기출문제' },
    { title: '가스기능장 필기 과년도 기출문제', author: '권오수 외', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 87, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+과년도+기출문제' },
    { title: '한권으로 필기와 실기를 끝내는 가스기능장', author: '최갑규', publisher: '세진북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 76, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+필기+실기+한권' },
    // 추천수험서 5
    { title: '가스기능장 핵심요약 이론서', author: '서상희', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+핵심요약+이론서' },
    { title: '가스기능장 필기 CBT 실전모의고사', author: '이윤기', publisher: '삼원북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+CBT+모의고사' },
    { title: '가스기능장 NCS 출제유형 핵심정리', author: '박재현', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.3, reviews: 48, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+NCS+핵심정리' },
    { title: '가스기능장 실기 완전정복', author: '최갑규', publisher: '세진북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.3, reviews: 43, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+실기' },
    { title: '가스기능장 10개년 기출문제 해설', author: '노진식', publisher: '책과상상', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.2, reviews: 37, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기능장+10개년+기출' },
  ],

  // ────────────────────────────────────────
  '정보보안기사': [
    // 베스트셀러 5
    { title: '2026 알기사 정보보안기사(산업기사) 필기+핵심기출 1200제 세트', author: '조현준', publisher: '지안에듀', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218322836'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218322836' },
    { title: '2026 이기적 정보보안기사 필기+실기 올인원', author: '임호진', publisher: '영진닷컴', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218331600'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218331600' },
    { title: '2026 수제비 정보보안기사 필기 기본서', author: '윤영빈 외', publisher: '수제비', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000218353373'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218353373' },
    { title: '2026 에듀윌 정보보안기사 필기 한권끝장', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+정보보안기사' },
    { title: '2026 정보보안기사 필기 7개년 기출문제해설', author: '조현준', publisher: '지안에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보보안기사+기출' },
    // 추천수험서 5
    { title: '2026 알기사 정보보안기사(산업기사) 실기', author: '정일영', publisher: '지안에듀', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: KB('S000219083573'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219083573' },
    { title: '2026 이기적 정보보안기사 필기 기출 1400제', author: '임호진', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+정보보안기사+기출' },
    { title: '2026 수제비 정보보안기사 필기 기출문제집', author: '윤영빈 외', publisher: '수제비', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('S000218609731'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218609731' },
    { title: '2026 정보보안기사 CBT 실전모의고사', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정보보안기사+CBT' },
    { title: '2026 정보보안기사 한권끝장 암호학+네트워크', author: '박민욱', publisher: '한빛미디어', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+정보보안기사+한빛미디어' },
  ],

  // ────────────────────────────────────────
  '빅데이터분석기사': [
    // 베스트셀러 5
    { title: '2026 이기적 빅데이터분석기사 필기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: KB('S000217176100'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217176100' },
    { title: '2025 이기적 빅데이터분석기사 필기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('S000213942959'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213942959' },
    { title: '2026 에듀윌 빅데이터분석기사 필기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 267, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+빅데이터분석기사+필기' },
    { title: '2025 수제비 빅데이터분석기사 필기', author: '윤영빈 외', publisher: '수제비', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('S000215667184'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215667184' },
    { title: '2026 빅데이터분석기사 필기 기출문제 완전정복', author: '나홍석', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+빅데이터분석기사+기출' },
    // 추천수험서 5
    { title: '2026 이기적 빅데이터분석기사 실기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 289, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+이기적+빅데이터분석기사+실기' },
    { title: '2026 빅데이터 분석기사 파이썬 실기 완전정복', author: '이나람', publisher: '한빛미디어', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+빅데이터분석기사+파이썬+실기' },
    { title: '2026 에듀윌 빅데이터분석기사 실기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=2026+에듀윌+빅데이터분석기사+실기' },
    { title: '2026 수제비 빅데이터분석기사 실기', author: '윤영빈 외', publisher: '수제비', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=2026+수제비+빅데이터분석기사+실기' },
    { title: '2026 빅데이터분석기사 CBT 실전모의고사', author: '나홍석', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+빅데이터분석기사+모의고사' },
  ],

  // ────────────────────────────────────────
  '컴퓨터활용능력1급': [
    // 베스트셀러 5
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 기본서', author: '길벗 R&D', publisher: '길벗', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.8, reviews: 578, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴퓨터활용능력+1급+필기+기본서' },
    { title: '2026 이기적 컴퓨터활용능력 1급 필기 기본서', author: '홍태성', publisher: '영진닷컴', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 467, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴퓨터활용능력+1급+필기' },
    { title: '2026 한 권으로 끝내는 시나공 컴활 1급 필기+실기', author: '길벗 R&D', publisher: '길벗', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 398, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+1급+필기+실기' },
    { title: '2026 이기적 컴퓨터활용능력 1급 필기+실기 올인원', author: '홍태성', publisher: '영진닷컴', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴활+1급+올인원' },
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 총정리', author: '길벗 R&D', publisher: '길벗', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+1급+총정리' },
    // 추천수험서 5
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 기출문제집', author: '길벗 R&D', publisher: '길벗', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 245, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+1급+기출문제집' },
    { title: '2026 에듀윌 컴퓨터활용능력 1급 필기 한권끝장', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+컴퓨터활용능력+1급' },
    { title: '2026 컴활 1급 필기 7개년 기출문제해설', author: '강태우', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴활+1급+7개년+기출' },
    { title: '2026 컴퓨터활용능력 1급 CBT 기출예상문제집', author: '홍태성', publisher: '영진닷컴', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 143, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴활+1급+CBT' },
    { title: '2026 합격이 보이는 컴퓨터활용능력 1급 필기', author: '박윤정', publisher: '성안당', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴퓨터활용능력+1급+합격' },
  ],

  // ────────────────────────────────────────
  '컴퓨터활용능력2급': [
    // 베스트셀러 5
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 기본서', author: '길벗 R&D', publisher: '길벗', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.8, reviews: 634, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴퓨터활용능력+2급+필기+기본서' },
    { title: '2026 이기적 컴퓨터활용능력 2급 필기 기본서', author: '홍태성', publisher: '영진닷컴', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.7, reviews: 512, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴퓨터활용능력+2급+필기' },
    { title: '2026 한 권으로 끝내는 시나공 컴활 2급 필기+실기', author: '길벗 R&D', publisher: '길벗', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+2급+필기+실기' },
    { title: '2026 이기적 컴퓨터활용능력 2급 필기+실기 올인원', author: '홍태성', publisher: '영진닷컴', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+컴활+2급+올인원' },
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 총정리', author: '길벗 R&D', publisher: '길벗', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+2급+총정리' },
    // 추천수험서 5
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 기출문제집', author: '길벗 R&D', publisher: '길벗', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+시나공+컴활+2급+기출문제집' },
    { title: '2026 에듀윌 컴퓨터활용능력 2급 필기 한권끝장', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+컴퓨터활용능력+2급' },
    { title: '2026 컴활 2급 필기 CBT 기출예상문제집', author: '홍태성', publisher: '영진닷컴', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴활+2급+CBT' },
    { title: '2026 기분파 컴퓨터활용능력 2급 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+컴퓨터활용능력+2급' },
    { title: '2026 합격이 보이는 컴퓨터활용능력 2급 필기', author: '박윤정', publisher: '성안당', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+컴퓨터활용능력+2급+합격' },
  ],

  // ────────────────────────────────────────
  'ADsP': [
    // 베스트셀러 5
    { title: '2026 최신개정 ADsP 데이터분석 준전문가', author: '윤종식', publisher: '데이터에듀', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+데이터분석+준전문가+윤종식' },
    { title: '이지패스 2026 ADsP 데이터분석 준전문가', author: '전용문', publisher: '위키북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이지패스+2026+ADsP' },
    { title: '2026 이기적 ADsP 데이터분석 준전문가 이론서+기출문제', author: '임경덕', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+이기적+ADsP' },
    { title: '2026 에듀윌 데이터분석 준전문가 ADsP 2주끝장', author: '윤소영', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 213, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+ADsP' },
    { title: '2026 선넘는 ADsP 데이터분석 준전문가 라임북', author: '공석민', publisher: '쏠티북스', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+선넘는+ADsP+라임북' },
    // 추천수험서 5
    { title: '2026 박문각 ADsP 기출원스톱 400제+무료특강', author: '육근수', publisher: '박문각', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+박문각+ADsP+기출원스톱' },
    { title: '2026 ADsP 데이터분석 준전문가 한권으로 끝내기', author: '김계철', publisher: '황소걸음아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+한권으로+끝내기' },
    { title: '2026 ADsP 핵심요약+실전문제', author: '윤종식', publisher: '데이터에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 108, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+핵심요약+실전문제' },
    { title: '2026 데이터 분석 준전문가 ADsP 단기완성', author: '이재원', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+단기완성' },
    { title: '2026 ADsP 기출문제 완전정복', author: '전용문', publisher: '위키북스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+ADsP+기출문제+완전정복' },
  ],

  // ────────────────────────────────────────
  'SQLD': [
    // 베스트셀러 5
    { title: '2026 이기적 SQLD SQL 개발자 기본서 이론+기출문제', author: '강태우', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.8, reviews: 534, tags: ['베스트'], imageUrl: KB('S000217937565'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217937565' },
    { title: '2026 에듀윌 SQLD SQL 개발자 2주끝장+무료특강', author: '김남규', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.7, reviews: 423, tags: ['베스트'], imageUrl: KB('S000218965390'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218965390' },
    { title: '2026 이기적 정보처리기사 필기 절대족보', author: '신면철', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 356, tags: ['베스트'], imageUrl: KB('S000217191918'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217191918' },
    { title: '2025 이기적 SQL 개발자 이론서+기출문제', author: '임호진', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 298, tags: ['베스트'], imageUrl: KB('S000214962008'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214962008' },
    { title: '2026 SQLD 기출문제집 핵심요약+실전문제', author: '강태우', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 267, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+SQLD+기출' },
    // 추천수험서 5
    { title: '이기적 SQL 개발자 기출문제 500제', author: '임호진', publisher: '영진닷컴', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.6, reviews: 312, tags: ['추천'], imageUrl: KB('S000200826826'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200826826' },
    { title: '2026 혼자 공부하는 SQL+SQLD 자격증', author: '강성욱', publisher: '한빛미디어', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+SQLD+한빛미디어' },
    { title: '2026 알기사 SQLD 핵심기출', author: '조현준', publisher: '지안에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+알기사+SQLD' },
    { title: '2026 나합격 SQLD SQL개발자 단기합격', author: '이나람', publisher: '삼원북스', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+나합격+SQLD' },
    { title: '2026 수제비 정보처리기사 필기 기출문제집', author: '윤영빈 외', publisher: '수제비', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 167, tags: ['추천'], imageUrl: KB('S000218609731'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218609731' },
  ],

  // ────────────────────────────────────────
  '토목기사': [
    // 베스트셀러 5
    { title: '2026 토목기사 필기 4주완성 핵심 및 과년도', author: '이상도 외', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+토목기사+한솔아카데미' },
    { title: '2026 에듀윌 토목기사 필기 한권끝장', author: '에듀윌 토목수험연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+에듀윌+토목기사' },
    { title: '2026 나합격 토목기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+나합격+토목기사' },
    { title: '2026 토목기사 필기 과년도 10개년 문제풀이', author: '채수하 외', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+과년도' },
    { title: '2026 해커스 토목기사 필기 한권합격', author: '해커스자격증', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 145, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+토목기사' },
    // 추천수험서 5
    { title: '2026 토목기사·산업기사 응용역학 핵심이론', author: '안광호 외', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+응용역학' },
    { title: '2026 토목기사 실기 완전정복', author: '이상도 외', publisher: '한솔아카데미', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+실기' },
    { title: '2026 스마트 7개년 토목기사 과년도 기출해설', author: '허원회 외', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+성안당' },
    { title: '2026 벼락치기 토목기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+벼락치기' },
    { title: '2026 토목기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+토목기사+CBT' },
  ],

  // ────────────────────────────────────────
  '건축기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 건축기사 필기 한권끝장', author: '김강섭', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('S000218473002'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218473002' },
    { title: '2026 에듀윌 건축기사 필기 10+2개년 기출문제집', author: '최하진', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('S000218189843'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218189843' },
    { title: '2026 해커스 건축기사 필기 한권합격', author: '해커스자격증', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+건축기사+필기' },
    { title: '2026 나합격 건축기사 필기+무료특강', author: '김해솔', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+나합격+건축기사' },
    { title: '2026 직8딴 건축기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 145, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+직8딴+건축기사' },
    // 추천수험서 5
    { title: '2026 건축기사 실기 완전정복 (계획+구조+시공)', author: '김해솔', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+건축기사+실기' },
    { title: '2025 에듀윌 건축기사 실기 한권끝장', author: '김강섭', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('S000215791790'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215791790' },
    { title: '2026 벼락치기 건축기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+건축기사+벼락치기' },
    { title: '2026 건축기사 필기 7개년 기출문제해설', author: '허원회 외', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+건축기사+성안당' },
    { title: '2026 건축기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+건축기사+CBT' },
  ],

  // ────────────────────────────────────────
  '산업안전기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 산업안전기사 필기 한권끝장 이론편+기출문제편', author: '최창률', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: KB('S000217541246'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217541246' },
    { title: '2026 직8딴 직접 8일 만에 딴 산업안전기사 필기', author: '김진태', publisher: '김영북스', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], imageUrl: KB('S000218942319'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218942319' },
    { title: '2026 나합격 산업안전기사 필기+무료특강+온라인CBT', author: '김현우, 허선혜', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('S000217478393'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217478393' },
    { title: '2026 해커스 산업안전기사 필기 핵심요약+기출', author: '해커스자격증', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+해커스+산업안전기사+필기' },
    { title: '2026 산업안전기사 필기 7개년 기출문제해설', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+산업안전기사+세화' },
    // 추천수험서 5
    { title: '2026 벼락치기 산업안전기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+산업안전기사+벼락치기' },
    { title: '2026 산업안전기사 실기 필답형+작업형 완전정복', author: '이순규', publisher: '예문사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+산업안전기사+실기' },
    { title: '2026 스마트 산업안전기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+산업안전기사+과년도' },
    { title: '2026 산업안전기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+산업안전기사+CBT' },
    { title: '2025 에듀윌 산업안전기사 실기 한권끝장 세트', author: '최창률', publisher: '에듀윌', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.3, reviews: 134, tags: ['추천'], imageUrl: KB('S000214965114'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214965114' },
  ],

  '산업안전기술사': [
    // 베스트셀러 5
    { title: '산업안전기술사 핵심이론 총정리', author: '이상도', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 187, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+핵심이론' },
    { title: '산업안전기술사 기출문제 완전분석', author: '김재원', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+기출문제' },
    { title: '산업안전기술사 서술형 답안 작성법', author: '박성현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 112, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+답안작성' },
    { title: '산업안전기술사 면접 완전정복', author: '최용국', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 98, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+면접' },
    { title: '산업안전기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 76, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+최신기출' },
    // 추천수험서 5
    { title: '산업안전기술사 위험성평가 심화', author: '강동호', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+위험성평가' },
    { title: '산업안전기술사 법규 핵심정리', author: '정재수', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 72, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+법규' },
    { title: '산업안전기술사 FTA FMEA 완전정복', author: '박용기', publisher: '세화', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+FTA' },
    { title: '산업안전기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 58, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+모의고사' },
    { title: '산업안전기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 51, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업안전기술사+단기완성' },
  ],

  '건설안전기술사': [
    // 베스트셀러 5
    { title: '건설안전기술사 핵심이론 총정리', author: '강동호', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 172, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+핵심이론' },
    { title: '건설안전기술사 기출문제 완전분석', author: '정재수', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+기출문제' },
    { title: '건설안전기술사 서술형 답안 작성법', author: '이경민', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 108, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+답안작성' },
    { title: '건설안전기술사 면접 완전정복', author: '박용기', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 91, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+면접' },
    { title: '건설안전기술사 최신 기출 해설집', author: '김재원', publisher: '일진사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 74, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+최신기출' },
    // 추천수험서 5
    { title: '건설안전기술사 가설공사 심화', author: '이상도', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 82, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+가설공사' },
    { title: '건설안전기술사 법규 핵심정리', author: '박성현', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 68, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+법규' },
    { title: '건설안전기술사 굴착흙막이 완전정복', author: '최용국', publisher: '세화', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 61, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+굴착' },
    { title: '건설안전기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 55, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+모의고사' },
    { title: '건설안전기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 48, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기술사+단기완성' },
  ],

  '소방기술사': [
    // 베스트셀러 5
    { title: '소방기술사 핵심이론 총정리', author: '이순규', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 165, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+핵심이론' },
    { title: '소방기술사 기출문제 완전분석', author: '김현수', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 129, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+기출문제' },
    { title: '소방기술사 서술형 답안 작성법', author: '박재현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 104, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+답안작성' },
    { title: '소방기술사 면접 완전정복', author: '정성훈', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 88, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+면접' },
    { title: '소방기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 71, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+최신기출' },
    // 추천수험서 5
    { title: '소방기술사 소화설비 심화', author: '강동호', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 79, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+소화설비' },
    { title: '소방기술사 법규 핵심정리', author: '최용국', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+법규' },
    { title: '소방기술사 스프링클러 완전정복', author: '박용기', publisher: '세화', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 58, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+스프링클러' },
    { title: '소방기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 52, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+모의고사' },
    { title: '소방기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 45, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방기술사+단기완성' },
  ],

  '발송배전기술사': [
    // 베스트셀러 5
    { title: '발송배전기술사 핵심이론 총정리', author: '김재원', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 158, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+핵심이론' },
    { title: '발송배전기술사 기출문제 완전분석', author: '이상도', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 122, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+기출문제' },
    { title: '발송배전기술사 서술형 답안 작성법', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 97, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+답안작성' },
    { title: '발송배전기술사 면접 완전정복', author: '최용국', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 83, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+면접' },
    { title: '발송배전기술사 최신 기출 해설집', author: '정성훈', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 67, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+최신기출' },
    // 추천수험서 5
    { title: '발송배전기술사 전력계통 심화', author: '이경민', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+전력계통' },
    { title: '발송배전기술사 보호계전 완전정복', author: '강동호', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 62, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+보호계전' },
    { title: '발송배전기술사 신재생에너지 심화', author: '박성현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 55, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+신재생에너지' },
    { title: '발송배전기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 49, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+모의고사' },
    { title: '발송배전기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 43, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=발송배전기술사+단기완성' },
  ],

  '전기응용기술사': [
    // 베스트셀러 5
    { title: '전기응용기술사 핵심이론 총정리', author: '정성훈', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 143, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+핵심이론' },
    { title: '전기응용기술사 기출문제 완전분석', author: '강동호', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 112, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+기출문제' },
    { title: '전기응용기술사 서술형 답안 작성법', author: '이경민', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 89, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+답안작성' },
    { title: '전기응용기술사 면접 완전정복', author: '박성현', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 76, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+면접' },
    { title: '전기응용기술사 최신 기출 해설집', author: '김재원', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 61, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+최신기출' },
    // 추천수험서 5
    { title: '전기응용기술사 전동기·조명 심화', author: '이상도', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 69, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+전동기조명' },
    { title: '전기응용기술사 전기철도 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 57, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+전기철도' },
    { title: '전기응용기술사 신에너지 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 51, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+신에너지' },
    { title: '전기응용기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 46, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+모의고사' },
    { title: '전기응용기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 40, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기응용기술사+단기완성' },
  ],

  '기계기술사': [
    // 베스트셀러 5
    { title: '기계기술사 핵심이론 총정리', author: '이상도', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 196, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+핵심이론' },
    { title: '기계기술사 기출문제 완전분석', author: '김현수', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 158, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+기출문제' },
    { title: '기계기술사 서술형 답안 작성법', author: '박재현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 127, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+답안작성' },
    { title: '기계기술사 면접 완전정복', author: '최용국', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 109, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+면접' },
    { title: '기계기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 88, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+최신기출' },
    // 추천수험서 5
    { title: '기계기술사 재료역학·열역학 심화', author: '강동호', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 95, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+재료역학' },
    { title: '기계기술사 유체역학 완전정복', author: '정재수', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 78, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+유체역학' },
    { title: '기계기술사 설계 및 자동화 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+설계자동화' },
    { title: '기계기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 59, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+모의고사' },
    { title: '기계기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 52, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계기술사+단기완성' },
  ],

  '화공기술사': [
    // 베스트셀러 5
    { title: '화공기술사 핵심이론 총정리', author: '강동호', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 152, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+핵심이론' },
    { title: '화공기술사 기출문제 완전분석', author: '이경민', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 119, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+기출문제' },
    { title: '화공기술사 서술형 답안 작성법', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 96, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+답안작성' },
    { title: '화공기술사 면접 완전정복', author: '정재수', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 82, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+면접' },
    { title: '화공기술사 최신 기출 해설집', author: '김재원', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 65, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+최신기출' },
    // 추천수험서 5
    { title: '화공기술사 반응공학 심화', author: '이상도', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 73, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+반응공학' },
    { title: '화공기술사 분리공정 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 61, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+분리공정' },
    { title: '화공기술사 HAZOP 공정안전 심화', author: '박성현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 55, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+HAZOP' },
    { title: '화공기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 48, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+모의고사' },
    { title: '화공기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 42, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=화공기술사+단기완성' },
  ],

  '가스기술사': [
    // 베스트셀러 5
    { title: '가스기술사 핵심이론 총정리', author: '이순규', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 138, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+핵심이론' },
    { title: '가스기술사 기출문제 완전분석', author: '박재현', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 107, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+기출문제' },
    { title: '가스기술사 서술형 답안 작성법', author: '김재원', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 86, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+답안작성' },
    { title: '가스기술사 면접 완전정복', author: '정성훈', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 73, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+면접' },
    { title: '가스기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 58, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+최신기출' },
    // 추천수험서 5
    { title: '가스기술사 LNG LPG 설비 심화', author: '강동호', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 66, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+LNG+LPG' },
    { title: '가스기술사 법규 핵심정리', author: '최용국', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+법규' },
    { title: '가스기술사 폭발·연소 완전정복', author: '박용기', publisher: '세화', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 48, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+폭발연소' },
    { title: '가스기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 43, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+모의고사' },
    { title: '가스기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 37, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스기술사+단기완성' },
  ],

  '정보관리기술사': [
    // 베스트셀러 5
    { title: '정보관리기술사 핵심이론 총정리', author: '박성현', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 214, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+핵심이론' },
    { title: '정보관리기술사 기출문제 완전분석', author: '이경민', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 173, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+기출문제' },
    { title: '정보관리기술사 서술형 답안 작성법', author: '강동호', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 141, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+답안작성' },
    { title: '정보관리기술사 면접 완전정복', author: '김재원', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 118, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+면접' },
    { title: '정보관리기술사 최신 기출 해설집', author: '정재수', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 94, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+최신기출' },
    // 추천수험서 5
    { title: '정보관리기술사 AI·클라우드 심화', author: '이상도', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 107, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+AI클라우드' },
    { title: '정보관리기술사 데이터베이스 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 88, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+데이터베이스' },
    { title: '정보관리기술사 소프트웨어공학 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+소프트웨어공학' },
    { title: '정보관리기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+모의고사' },
    { title: '정보관리기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 57, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보관리기술사+단기완성' },
  ],

  '정보보안기술사': [
    // 베스트셀러 5
    { title: '정보보안기술사 핵심이론 총정리', author: '이상도', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+핵심이론' },
    { title: '정보보안기술사 기출문제 완전분석', author: '박성현', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 162, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+기출문제' },
    { title: '정보보안기술사 서술형 답안 작성법', author: '정재수', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 131, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+답안작성' },
    { title: '정보보안기술사 면접 완전정복', author: '강동호', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 109, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+면접' },
    { title: '정보보안기술사 최신 기출 해설집', author: '이경민', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 87, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+최신기출' },
    // 추천수험서 5
    { title: '정보보안기술사 ISMS-P 심화', author: '김재원', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+ISMS' },
    { title: '정보보안기술사 암호학 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 81, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+암호학' },
    { title: '정보보안기술사 침해사고대응 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 69, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+침해사고' },
    { title: '정보보안기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 60, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+모의고사' },
    { title: '정보보안기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 53, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정보보안기술사+단기완성' },
  ],

  '컴퓨터시스템응용기술사': [
    // 베스트셀러 5
    { title: '컴퓨터시스템응용기술사 핵심이론 총정리', author: '박재현', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+핵심이론' },
    { title: '컴퓨터시스템응용기술사 기출문제 완전분석', author: '이경민', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 133, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+기출문제' },
    { title: '컴퓨터시스템응용기술사 서술형 답안 작성법', author: '최용국', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 107, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+답안작성' },
    { title: '컴퓨터시스템응용기술사 면접 완전정복', author: '김현수', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 91, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+면접' },
    { title: '컴퓨터시스템응용기술사 최신 기출 해설집', author: '강동호', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 74, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+최신기출' },
    // 추천수험서 5
    { title: '컴퓨터시스템응용기술사 OS·알고리즘 심화', author: '이상도', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 83, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+OS알고리즘' },
    { title: '컴퓨터시스템응용기술사 클라우드·임베디드 심화', author: '정재수', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 68, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+클라우드임베디드' },
    { title: '컴퓨터시스템응용기술사 아키텍처 완전정복', author: '박성현', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 59, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+아키텍처' },
    { title: '컴퓨터시스템응용기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 53, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+모의고사' },
    { title: '컴퓨터시스템응용기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 46, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=컴퓨터시스템응용기술사+단기완성' },
  ],

  '토목기술사': [
    // 베스트셀러 5
    { title: '토목기술사 핵심이론 총정리', author: '이재원', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 221, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+핵심이론' },
    { title: '토목기술사 기출문제 완전분석', author: '박성현', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+기출문제' },
    { title: '토목기술사 서술형 답안 작성법', author: '김재원', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+답안작성' },
    { title: '토목기술사 면접 완전정복', author: '정재수', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 122, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+면접' },
    { title: '토목기술사 최신 기출 해설집', author: '이경민', publisher: '일진사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 98, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+최신기출' },
    // 추천수험서 5
    { title: '토목기술사 토질·기초 심화', author: '강동호', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+토질기초' },
    { title: '토목기술사 수리·수문학 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 93, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+수리수문학' },
    { title: '토목기술사 도로·교량 심화', author: '박용기', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 79, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+도로교량' },
    { title: '토목기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 68, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+모의고사' },
    { title: '토목기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 59, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기술사+단기완성' },
  ],

  '건축기술사': [
    // 베스트셀러 5
    { title: '건축기술사 핵심이론 총정리', author: '박용기', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 208, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+핵심이론' },
    { title: '건축기술사 기출문제 완전분석', author: '이순규', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 169, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+기출문제' },
    { title: '건축기술사 서술형 답안 작성법', author: '강동호', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 136, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+답안작성' },
    { title: '건축기술사 면접 완전정복', author: '박재현', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 114, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+면접' },
    { title: '건축기술사 최신 기출 해설집', author: '이경민', publisher: '일진사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.4, reviews: 92, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+최신기출' },
    // 추천수험서 5
    { title: '건축기술사 구조·내진 심화', author: '김재원', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 105, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+구조내진' },
    { title: '건축기술사 시공·재료 완전정복', author: '최용국', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+시공재료' },
    { title: '건축기술사 환경·설비 심화', author: '정재수', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 74, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+환경설비' },
    { title: '건축기술사 실전 모의고사', author: '허원회', publisher: '일진사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.3, reviews: 63, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+모의고사' },
    { title: '건축기술사 단기완성', author: '이재원', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 55, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축기술사+단기완성' },
  ],

  // ────────────────────────────────────────
  '간호사': [
    // 베스트셀러 5
    { title: '2027 군자출판사 간호사 국가시험 문제집 (상)', author: '군자출판사 편집부', publisher: '군자출판사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.9, reviews: 2134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국가시험+군자출판사+2027' },
    { title: '2027 군자출판사 간호사 국가시험 문제집 (하)', author: '군자출판사 편집부', publisher: '군자출판사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.9, reviews: 1987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국가시험+군자출판사+하+2027' },
    { title: '2027 메디시언 간호사 국시 핵심요약 총정리', author: '메디시언 연구소', publisher: '메디시언', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 1523, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국시+핵심요약+메디시언+2027' },
    { title: '2027 에듀팩토리 간호사 국시 5개년 기출문제집', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 1245, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국시+기출문제+2027' },
    { title: '2027 박문각 간호사 국가시험 최신 기출해설', author: '박문각 간호연구소', publisher: '박문각', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 986, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호사+국가시험+박문각+2027' },
    // 추천수험서 5
    { title: '2027 성인간호학 한권완성 국시 핵심요약', author: '이은희 외', publisher: '군자출판사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 876, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=성인간호학+국시+핵심요약+2027' },
    { title: '2027 간호관리학 국시 완전정복', author: '김진희', publisher: '메디시언', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 743, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호관리학+국시+2027' },
    { title: '2027 정신간호학 국시 핵심이론+기출', author: '박영숙', publisher: '에듀팩토리', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 634, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=정신간호학+국시+2027' },
    { title: '2027 지역사회간호학 국시 단기완성', author: '이정희', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 521, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=지역사회간호학+국시+2027' },
    { title: '2027 의료법규 간호사 국시 핵심정리', author: '박문각 편집부', publisher: '박문각', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 412, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의료법규+간호사+국시+2027' },
  ],

  // ────────────────────────────────────────
  '임상병리사': [
    // 베스트셀러 5
    { title: '2027 임상병리사 국가시험 핵심요약 총정리', author: '대한임상병리사협회 편집부', publisher: '고려의학', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 756, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상병리사+국가시험+핵심요약+2027' },
    { title: '2027 임상병리사 기출문제 완전분석 10개년', author: '군자출판사 편집부', publisher: '군자출판사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 612, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상병리사+기출문제+10개년+2027' },
    { title: '2027 임상화학 핵심이론+문제', author: '이상철', publisher: '고려의학', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 498, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=임상화학+핵심이론+2027' },
    { title: '2027 혈액학·수혈의학 완전정복', author: '김윤경', publisher: '메디시언', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=혈액학+수혈의학+임상병리사+2027' },
    { title: '2027 임상미생물학 핵심요약', author: '박재원', publisher: '고려의학', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상미생물학+핵심요약+2027' },
    // 추천수험서 5
    { title: '2027 조직병리학·세포병리학 완전정복', author: '이현주', publisher: '군자출판사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 278, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조직병리학+세포병리학+2027' },
    { title: '2027 임상생리학 핵심이론+기출', author: '한상훈', publisher: '메디시언', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상생리학+핵심이론+2027' },
    { title: '2027 요·체액검사 단기완성', author: '김미래', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요검사+체액검사+임상병리사+2027' },
    { title: '2027 임상병리사 모의고사 5회분', author: '박재현', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상병리사+모의고사+2027' },
    { title: '2027 임상병리사 국시 최신경향 분석집', author: '대한임상병리사협회', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 143, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상병리사+국시+최신경향+2027' },
  ],

  // ────────────────────────────────────────
  '방사선사': [
    // 베스트셀러 5
    { title: '2027 방사선사 국가시험 핵심요약 총정리', author: '대한방사선사협회 편집부', publisher: '고려의학', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 634, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선사+국가시험+핵심요약+2027' },
    { title: '2027 방사선사 기출문제 완전분석 10개년', author: '군자출판사 편집부', publisher: '군자출판사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 512, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선사+기출문제+2027' },
    { title: '2027 방사선물리학·방사선방어학 완전정복', author: '이재원', publisher: '고려의학', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 423, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선물리학+방어학+2027' },
    { title: '2027 의료영상학 핵심이론+기출', author: '박상훈', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의료영상학+방사선사+2027' },
    { title: '2027 핵의학기술학+방사선치료물리학 완성', author: '김동현', publisher: '고려의학', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=핵의학기술학+방사선사+2027' },
    // 추천수험서 5
    { title: '2027 방사선생물학 핵심이론 단기완성', author: '최재원', publisher: '군자출판사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선생물학+2027' },
    { title: '2027 방사선사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선사+모의고사+2027' },
    { title: '2027 CT·MRI 영상 판독 기초부터 국시까지', author: '이상민', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 178, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=CT+MRI+방사선사+국시+2027' },
    { title: '2027 방사선사 국시 최신경향 분석집', author: '대한방사선사협회', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선사+국시+최신경향+2027' },
    { title: '2027 방사선사 벼락치기 핵심요점', author: '박재현', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 132, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선사+벼락치기+2027' },
  ],

  // ────────────────────────────────────────
  '물리치료사': [
    // 베스트셀러 5
    { title: '2027 물리치료사 국가시험 핵심요약 총정리', author: '대한물리치료사협회 편집부', publisher: '고려의학', price: 52200, originalPrice: 58000, discount: '10%', rating: 4.8, reviews: 789, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리치료사+국가시험+핵심요약+2027' },
    { title: '2027 물리치료사 기출문제 완전분석 10개년', author: '군자출판사 편집부', publisher: '군자출판사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 634, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리치료사+기출문제+2027' },
    { title: '2027 근골격계 물리치료학 완전정복', author: '이재훈', publisher: '고려의학', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 523, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=근골격계+물리치료학+2027' },
    { title: '2027 신경계 물리치료학 핵심이론+기출', author: '박진수', publisher: '메디시언', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=신경계+물리치료학+2027' },
    { title: '2027 물리인자치료학 완전정복', author: '김상호', publisher: '군자출판사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 367, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리인자치료학+2027' },
    // 추천수험서 5
    { title: '2027 기능해부학·운동학 국시 핵심정리', author: '최인호', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기능해부학+운동학+물리치료사+2027' },
    { title: '2027 물리치료사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=물리치료사+모의고사+2027' },
    { title: '2027 심폐·스포츠재활 물리치료 핵심이론', author: '이동현', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=심폐+스포츠재활+물리치료사+2027' },
    { title: '2027 물리치료사 국시 최신경향 분석집', author: '대한물리치료사협회', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리치료사+국시+최신경향+2027' },
    { title: '2027 물리치료사 벼락치기 핵심요점', author: '박민수', publisher: '메디시언', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물리치료사+벼락치기+2027' },
  ],

  // ────────────────────────────────────────
  '응급구조사1급': [
    // 베스트셀러 5
    { title: '2027 응급구조사 1급 국가시험 핵심요약 총정리', author: '대한응급구조사협회 편집부', publisher: '군자출판사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 534, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+1급+국가시험+핵심요약+2027' },
    { title: '2027 응급구조사 1급 기출문제 완전분석', author: '군자출판사 편집부', publisher: '군자출판사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 423, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+1급+기출문제+2027' },
    { title: '2027 전문응급처치학 총론·각론 완전정복', author: '이재원', publisher: '고려의학', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전문응급처치학+2027' },
    { title: '2027 응급처치론 핵심이론+기출', author: '박상호', publisher: '메디시언', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급처치론+핵심이론+2027' },
    { title: '2027 응급환자관리·응급의학 완성', author: '김동수', publisher: '군자출판사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급환자관리+응급의학+2027' },
    // 추천수험서 5
    { title: '2027 응급구조사 1급 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+1급+모의고사+2027' },
    { title: '2027 심전도 판독 응급구조사 국시 완성', author: '이상민', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=심전도+응급구조사+2027' },
    { title: '2027 외상응급처치 핵심정리', author: '박재현', publisher: '군자출판사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=외상응급처치+응급구조사+2027' },
    { title: '2027 응급구조사 1급 국시 최신경향 분석집', author: '대한응급구조사협회', publisher: '군자출판사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+국시+최신경향+2027' },
    { title: '2027 응급구조사 1급 벼락치기 핵심요점', author: '김민준', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+벼락치기+2027' },
  ],

  // ────────────────────────────────────────
  '치과위생사': [
    // 베스트셀러 5
    { title: '2027 치과위생사 국가시험 핵심요약 총정리', author: '대한치과위생사협회 편집부', publisher: '군자출판사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 678, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과위생사+국가시험+핵심요약+2027' },
    { title: '2027 치과위생사 기출문제 완전분석 10개년', author: '군자출판사 편집부', publisher: '군자출판사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 534, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과위생사+기출문제+2027' },
    { title: '2027 치위생학 개론·구강해부학 완전정복', author: '이재원', publisher: '고려의학', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=치위생학+구강해부학+2027' },
    { title: '2027 치과재료학·구강미생물학 핵심이론', author: '박지현', publisher: '메디시언', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 367, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과재료학+구강미생물학+2027' },
    { title: '2027 구강보건행정·교육 완성', author: '김수진', publisher: '고려의학', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=구강보건행정+치과위생사+2027' },
    // 추천수험서 5
    { title: '2027 치과위생사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과위생사+모의고사+2027' },
    { title: '2027 구강생리학·구강생화학 핵심정리', author: '이상호', publisher: '군자출판사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=구강생리학+구강생화학+2027' },
    { title: '2027 치과위생사 국시 최신경향 분석집', author: '대한치과위생사협회', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과위생사+국시+최신경향+2027' },
    { title: '2027 임상치위생학 핵심이론+기출', author: '박민희', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=임상치위생학+2027' },
    { title: '2027 치과위생사 벼락치기 핵심요점', author: '김재원', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치과위생사+벼락치기+2027' },
  ],

  '간호조무사': [
    { title: '2026 간호조무사 국가시험 핵심요약 총정리', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 1240, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+국가시험+핵심요약+2026' },
    { title: '2026 간호조무사 기출문제 10개년 완전분석', author: '박문각 편집부', publisher: '박문각', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+기출문제+10개년+2026' },
    { title: '2026 간호조무사 핵심이론+실전문제집', author: '수문사 편집부', publisher: '수문사', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 856, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+핵심이론+실전문제+2026' },
    { title: '2026 간호조무사 국가시험 최신기출 5개년', author: '이지패스 편집부', publisher: '이지패스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 634, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+최신기출+5개년+2026' },
    { title: '2026 간호조무사 벼락치기 핵심노트', author: '김민지', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+벼락치기+2026' },
    { title: '2026 간호조무사 보건간호학개요 집중공략', author: '이정희', publisher: '수문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 378, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+보건간호학개요+2026' },
    { title: '2026 간호조무사 의료관계법규 완성', author: '박재현', publisher: '박문각', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.5, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+의료관계법규+2026' },
    { title: '2026 간호조무사 실기 핵심정리', author: '한국간호조무사협회 편집부', publisher: '수문사', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+실기+핵심정리+2026' },
    { title: '2026 간호조무사 모의고사 10회분', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+모의고사+10회분+2026' },
    { title: '2026 간호조무사 공중보건학+기초간호학 통합', author: '김수연', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=간호조무사+공중보건학+기초간호학+2026' },
  ],

  '작업치료사': [
    { title: '2026 작업치료사 국가시험 핵심요약 총정리', author: '대한작업치료사협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 523, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+국가시험+핵심요약+2026' },
    { title: '2026 작업치료사 기출문제 완전분석', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 412, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+기출문제+완전분석+2026' },
    { title: '2026 작업치료사 신체기능작업치료학 핵심', author: '고려의학 편집부', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+신체기능작업치료학+2026' },
    { title: '2026 작업치료사 정신사회작업치료학 완성', author: '이지영', publisher: '군자출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+정신사회작업치료학+2026' },
    { title: '2026 작업치료사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+모의고사+5회분+2026' },
    { title: '2026 작업치료사 인간작업모델(MOHO) 집중정리', author: '박지현', publisher: '고려의학', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 178, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+인간작업모델+2026' },
    { title: '2026 작업치료사 재활의학 핵심이론', author: '김태현', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+재활의학+2026' },
    { title: '2026 작업치료사 일상생활활동 이론+실기', author: '최수진', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+일상생활활동+2026' },
    { title: '2026 작업치료사 벼락치기 핵심노트', author: '이수정', publisher: '군자출판사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+벼락치기+2026' },
    { title: '2026 작업치료사 아동작업치료학 완성', author: '강민정', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=작업치료사+아동작업치료학+2026' },
  ],

  '치위생사': [
    { title: '2026 치위생사 국가시험 핵심요약 총정리', author: '대한치과위생사협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 612, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+국가시험+핵심요약+2026' },
    { title: '2026 치위생사 기출문제 10개년 완전분석', author: '군자출판사 편집부', publisher: '군자출판사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 498, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+기출문제+10개년+2026' },
    { title: '2026 치위생사 구강해부학+조직학 핵심정리', author: '고려의학 편집부', publisher: '고려의학', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+구강해부학+조직학+2026' },
    { title: '2026 치위생사 임상치위생학 완성', author: '박민희', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+임상치위생학+2026' },
    { title: '2026 치위생사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+모의고사+5회분+2026' },
    { title: '2026 치위생사 구강보건행정학 집중공략', author: '김수진', publisher: '고려의학', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+구강보건행정학+2026' },
    { title: '2026 치위생사 치과재료학 핵심이론', author: '이상호', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+치과재료학+2026' },
    { title: '2026 치위생사 치주학·예방치학 완성', author: '박지현', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+치주학+예방치학+2026' },
    { title: '2026 치위생사 벼락치기 핵심노트', author: '최은정', publisher: '군자출판사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+벼락치기+2026' },
    { title: '2026 치위생사 방사선학 이론+실습', author: '한국치위생학교수협의회', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=치위생사+방사선학+2026' },
  ],

  '응급구조사2급': [
    { title: '2026 응급구조사 2급 국가시험 핵심요약', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+국가시험+핵심요약+2026' },
    { title: '2026 응급구조사 2급 기출문제 완전분석', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+기출문제+2026' },
    { title: '2026 응급구조사 2급 응급처치학 핵심이론', author: '대한응급구조사협회 편집부', publisher: '군자출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+응급처치학+2026' },
    { title: '2026 응급구조사 2급 해부생리학 완성', author: '이민수', publisher: '에듀팩토리', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+해부생리학+2026' },
    { title: '2026 응급구조사 2급 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+모의고사+5회분+2026' },
    { title: '2026 응급구조사 2급 심폐소생술(CPR) 실기', author: '박준혁', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+심폐소생술+2026' },
    { title: '2026 응급구조사 2급 의료법규 핵심정리', author: '김재현', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+의료법규+2026' },
    { title: '2026 응급구조사 2급 내과응급 집중공략', author: '이수진', publisher: '메디시언', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+내과응급+2026' },
    { title: '2026 응급구조사 2급 벼락치기 핵심노트', author: '최민영', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 78, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+벼락치기+2026' },
    { title: '2026 응급구조사 2급 외상응급·특수응급 완성', author: '한국응급구조학과교수협의회', publisher: '군자출판사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=응급구조사+2급+외상응급+2026' },
  ],

  '요양보호사': [
    { title: '2026 요양보호사 최종모의고사 5회분', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2340, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+최종모의고사+2026' },
    { title: '2026 요양보호사 핵심요약+기출문제집', author: '박문각 편집부', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+핵심요약+기출문제+2026' },
    { title: '2026 요양보호사 필기+실기 한권완성', author: '이지패스 편집부', publisher: '이지패스', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 1654, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+필기+실기+한권완성+2026' },
    { title: '2026 요양보호사 기출문제 10개년 완전분석', author: '성안당 편집부', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+기출문제+10개년+2026' },
    { title: '2026 요양보호사 벼락치기 핵심노트', author: '김민지', publisher: '에듀팩토리', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 987, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+벼락치기+핵심노트+2026' },
    { title: '2026 요양보호사 노인요양 실기 완성', author: '이정희', publisher: '박문각', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 756, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+노인요양+실기+2026' },
    { title: '2026 요양보호사 치매·임종케어 핵심정리', author: '한국노인복지학회 편집부', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 534, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+치매+임종케어+2026' },
    { title: '2026 요양보호사 요양보호론 이론 완성', author: '박재현', publisher: '이지패스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 412, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+요양보호론+이론+2026' },
    { title: '2026 요양보호사 OX퀴즈 1000제', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 312, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+OX퀴즈+1000제+2026' },
    { title: '2026 요양보호사 신체활동지원 실기 집중', author: '최수정', publisher: '박문각', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.4, reviews: 234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=요양보호사+신체활동지원+실기+2026' },
  ],

  '의무기록사': [
    { title: '2026 의무기록사 국가시험 핵심요약 총정리', author: '대한의무기록협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+국가시험+핵심요약+2026' },
    { title: '2026 의무기록사 기출문제 완전분석', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 267, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+기출문제+완전분석+2026' },
    { title: '2026 의무기록사 의학용어·질병분류 핵심', author: '고려의학 편집부', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 212, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+의학용어+질병분류+2026' },
    { title: '2026 의무기록사 ICD-11 질병분류 집중정리', author: '이지현', publisher: '군자출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 178, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+ICD-11+질병분류+2026' },
    { title: '2026 의무기록사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+모의고사+5회분+2026' },
    { title: '2026 의무기록사 보건의료정보관리 이론', author: '박수진', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+보건의료정보관리+2026' },
    { title: '2026 의무기록사 행정실무 핵심정리', author: '김태영', publisher: '군자출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+행정실무+2026' },
    { title: '2026 의무기록사 의료법규 완성', author: '이민정', publisher: '메디시언', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 78, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+의료법규+2026' },
    { title: '2026 의무기록사 벼락치기 핵심노트', author: '한국보건정보관리학회', publisher: '군자출판사', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+벼락치기+2026' },
    { title: '2026 의무기록사 전산학·통계학 핵심이론', author: '최지현', publisher: '고려의학', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 56, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=의무기록사+전산학+통계학+2026' },
  ],

  '보건교육사': [
    { title: '2026 보건교육사 3급 핵심요약 총정리', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+3급+핵심요약+2026' },
    { title: '2026 보건교육사 기출문제 완전분석', author: '박문각 편집부', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+기출문제+완전분석+2026' },
    { title: '2026 보건교육사 보건교육학 핵심이론', author: '고려의학 편집부', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+보건교육학+핵심이론+2026' },
    { title: '2026 보건교육사 보건학·보건프로그램개발 완성', author: '이지혜', publisher: '에듀팩토리', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+보건학+보건프로그램개발+2026' },
    { title: '2026 보건교육사 모의고사 5회분', author: '박문각 편집부', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 123, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+모의고사+5회분+2026' },
    { title: '2026 보건교육사 역학·보건통계학 집중공략', author: '김수영', publisher: '고려의학', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 104, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+역학+보건통계학+2026' },
    { title: '2026 보건교육사 사회과학 조사방법론', author: '이재훈', publisher: '에듀팩토리', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+사회과학+조사방법론+2026' },
    { title: '2026 보건교육사 의료관계법규 완성', author: '박재현', publisher: '박문각', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+의료관계법규+2026' },
    { title: '2026 보건교육사 보건의사소통 핵심정리', author: '최민정', publisher: '고려의학', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+보건의사소통+2026' },
    { title: '2026 보건교육사 벼락치기 핵심노트', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=보건교육사+벼락치기+2026' },
  ],

  '위생사': [
    { title: '2026 위생사 국가시험 핵심요약 총정리', author: '에듀팩토리 편집부', publisher: '에듀팩토리', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+국가시험+핵심요약+2026' },
    { title: '2026 위생사 기출문제 완전분석', author: '박문각 편집부', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+기출문제+완전분석+2026' },
    { title: '2026 위생사 공중보건학 핵심이론', author: '고려의학 편집부', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+공중보건학+핵심이론+2026' },
    { title: '2026 위생사 환경위생학·식품위생학 완성', author: '이지현', publisher: '에듀팩토리', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+환경위생학+식품위생학+2026' },
    { title: '2026 위생사 모의고사 5회분', author: '박문각 편집부', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 123, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+모의고사+5회분+2026' },
    { title: '2026 위생사 위생곤충학·역학 집중공략', author: '김태현', publisher: '고려의학', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 104, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+위생곤충학+역학+2026' },
    { title: '2026 위생사 의료관계법규 핵심정리', author: '이민수', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+의료관계법규+2026' },
    { title: '2026 위생사 미생물학·기생충학 완성', author: '박수영', publisher: '박문각', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+미생물학+기생충학+2026' },
    { title: '2026 위생사 벼락치기 핵심노트', author: '최은영', publisher: '에듀팩토리', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+벼락치기+2026' },
    { title: '2026 위생사 소독학·구강보건 핵심이론', author: '한국위생사협회 편집부', publisher: '고려의학', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위생사+소독학+구강보건+2026' },
  ],

  '건설기계기사': [
    { title: '2026 건설기계설비 기사 필기대비', author: '위을복', publisher: '학진북스', price: 50400, originalPrice: 56000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비+기사+필기+2026' },
    { title: '2026 건설기계설비기사 필기', author: '김영기', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비기사+필기+구민사+2026' },
    { title: '2026 합격비법 건설기계설비기사 필기 핵심이론 및 예상문제', author: '이태랑', publisher: '오스틴북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비기사+필기+핵심이론+2026' },
    { title: '2026 합격비법 건설기계설비기사 필기 기출문제', author: '이태랑', publisher: '오스틴북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비기사+필기+기출문제+2026' },
    { title: '건설기계설비 기사 필답형 실기', author: '위을복', publisher: '학진북스', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비+기사+필답형+실기' },
    { title: '일반기계기사 기계설계산업기사 건설기계설비기사 작업형 실기', author: '메카피아', publisher: '메카피아', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비기사+작업형+실기' },
    { title: '패스 건설기계정비산업기사 필기', author: '김인호, 김기홍, 류상렬, 최만용', publisher: '골든벨', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계정비산업기사+필기' },
    { title: '2023 건설기계설비 일반기계 기사 필기 과년도 문제집', author: '위을복', publisher: '학진북스', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비+일반기계+기사+과년도' },
    { title: '2026 건설기계설비 기사 필기대비', author: '위을복', publisher: '학진북스', price: 50400, originalPrice: 56000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설기계설비+기사+2026+학진북스' },
    { title: '2026 합격비법 건설기계설비기사 필기', author: '이태랑', publisher: '오스틴북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=합격비법+건설기계설비기사+2026' },
  ],

  '토목산업기사': [
    { title: '2026 토목산업기사 필기 4주완성 8개년 과년도 문제해설', author: '이상도, 정경동, 고길용, 안광호 외', publisher: '한솔아카데미', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목산업기사+필기+4주완성+2026' },
    { title: '2026 토목설계 물량산출 도면작도 토목산업기사 실기시험 대비', author: '한성천', publisher: '금호출판사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목산업기사+실기+물량산출+도면작도+2026' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 4: 철근콘크리트 및 강구조', author: '고영주', publisher: '성안당', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+철근콘크리트' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 5: 토질 및 기초', author: '박영태', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+토질' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 2: 측량학', author: '송낙원, 송용희', publisher: '성안당', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+측량학' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 6: 상하수도공학', author: '박재성', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+상하수도공학' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 3: 수리수문학', author: '박영태', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+수리수문학' },
    { title: '철도토목기사.산업기사 필기.실기 합격 바이블', author: '정대호, 정찬묵, 배석복', publisher: 'CIR', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=철도토목기사+산업기사+합격+바이블' },
    { title: '2026 토목산업기사 필기 4주완성', author: '이상도 외', publisher: '한솔아카데미', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목산업기사+필기+한솔아카데미+2026' },
    { title: '2025 토목기사/토목산업기사 핵심시리즈: 토목일반', author: '이상도', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=토목기사+토목산업기사+핵심시리즈+성안당' },
  ],

  '건축산업기사': [
    { title: '2026 건축산업기사 필기 4주완성', author: '남재호, 송우용', publisher: '한솔아카데미', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+필기+4주완성+2026' },
    { title: '2026 건축산업기사 필기 7개년 필기 경향문제', author: '한솔아카데미 수험연구회', publisher: '한솔아카데미', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+필기+7개년+2026' },
    { title: '2026 건축산업기사 실기 The Bible', author: '안광호, 백종엽, 이병억', publisher: '한솔아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+실기+The+Bible+2026' },
    { title: '2027 하이패스 건축산업기사 필기 기출문제집', author: '안남식', publisher: '서울고시각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=하이패스+건축산업기사+필기+기출문제집' },
    { title: '2025 미듬 건축산업기사 실기 1·2', author: '임근재', publisher: '멘토스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=미듬+건축산업기사+실기' },
    { title: '2026 스마트 실내건축산업기사 작업형 실기', author: '황두환', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축산업기사+작업형+실기+2026' },
    { title: '2026 건축산업기사 필기 핵심이론', author: '남재호', publisher: '한솔아카데미', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+필기+핵심이론+한솔아카데미' },
    { title: '최신판 이패스 실내건축기사(산업기사) 실기 작업형', author: '강덕진', publisher: '이패스코리아', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=이패스+실내건축기사+산업기사+실기+작업형' },
    { title: '2026 건축산업기사 실기 단기완성', author: '안광호', publisher: '한솔아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축산업기사+실기+단기완성+2026' },
    { title: '2026 실전 단기 완성 건축설비산업기사 실기', author: '조성안', publisher: '기문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건축설비산업기사+실기+2026' },
  ],

  '실내건축기사': [
    { title: '2026 실내건축기사 4주완성 세트 - 전2권', author: '남재호', publisher: '한솔아카데미', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+4주완성+세트+2026' },
    { title: '2027 나합격 실내건축기사 필기[핵심이론+17개년 기출]', author: '김수진', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+실내건축기사+필기+핵심이론' },
    { title: '2026 실내건축기사 필기 - 전2권', author: '유희정, 이석훈', publisher: '예문사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+필기+예문사+2026' },
    { title: '2027 스마트 실내건축기사 시공실무 필답형 실기', author: '김태민, 전명숙', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스마트+실내건축기사+시공실무+필답형+실기' },
    { title: '최신판 이패스 실내건축기사(산업기사) 실기 작업형', author: '강덕진', publisher: '이패스코리아', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+실내건축기사+산업기사+실기+작업형' },
    { title: '2026 실내건축기사 실기 시공실무', author: '한석우', publisher: '이패스코리아', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+실기+시공실무+이패스코리아+2026' },
    { title: '2025 실내건축기사 필기 문제해설', author: '이상화', publisher: '엔플북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+필기+문제해설+엔플북스' },
    { title: '2026 스마트 실내건축산업기사 작업형 실기', author: '황두환', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축산업기사+작업형+실기+성안당+2026' },
    { title: '2026 실내건축기사 필기 단기완성', author: '남재호', publisher: '한솔아카데미', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+필기+단기완성+한솔아카데미' },
    { title: '2026 실내건축기사 실기', author: '유희정', publisher: '예문사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=실내건축기사+실기+예문사+2026' },
  ],

  '조경기사': [
    { title: '2026 조경기사.산업기사 필기 단기완성', author: '이윤진', publisher: '한솔아카데미', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+산업기사+필기+단기완성+2026' },
    { title: '2026 시대에듀 조경기사·산업기사 필기 한권으로 합격하기', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+필기+한권으로+합격+2026' },
    { title: '2026 조경기사·조경산업기사 실기 필답형·작업형', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+조경산업기사+실기+필답형+작업형+2026' },
    { title: 'Conquest 조경기사·조경산업기사 실기정복 - 개정15판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+실기정복' },
    { title: '2026 시대에듀 조경기사 필기 기출문제집', author: '최평희', publisher: '시대에듀', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+필기+기출문제집+2026' },
    { title: '2026 시대에듀 조경기사·산업기사 실기 한권으로 끝내기', author: '이우설', publisher: '시대에듀', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.6, reviews: 223, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+실기+한권으로+끝내기+2026' },
    { title: '최신개정판 Conquest 조경기사.조경산업기사 필기정복 - 개정13판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+필기정복' },
    { title: '202X 조경기사 필기 - 서양조경사 계보 수록', author: '구민아', publisher: '구민사', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+필기+구민사' },
    { title: '2026 조경기사 필기 핵심이론 기출문제', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+필기+핵심이론+기출문제+2026' },
    { title: '2026 조경기사 단기완성 실기', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+단기완성+실기+한솔아카데미+2026' },
  ],

  '조경산업기사': [
    { title: '2026 조경기사.산업기사 필기 단기완성', author: '이윤진', publisher: '한솔아카데미', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+산업기사+필기+단기완성+2026' },
    { title: '2026 시대에듀 조경기사·산업기사 필기 한권으로 합격하기', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+필기+한권으로+합격+2026' },
    { title: '2026 조경기사·조경산업기사 실기 필답형·작업형', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기사+조경산업기사+실기+필답형+작업형+2026' },
    { title: '202X 조경산업기사 필기 - 서양조경사 계보 수록', author: '구민아', publisher: '구민사', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+필기+구민사' },
    { title: 'Conquest 조경기사·조경산업기사 실기정복 - 개정15판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+실기정복' },
    { title: '2026 시대에듀 조경기사·산업기사 실기 한권으로 끝내기', author: '이우설', publisher: '시대에듀', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기사+산업기사+실기+한권으로+끝내기+2026' },
    { title: '최신개정판 Conquest 조경기사.조경산업기사 필기정복 - 개정13판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Conquest+조경기사+조경산업기사+필기정복' },
    { title: '조경산업기사 필기시험문제', author: '임권희', publisher: '크라운출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+필기시험문제+크라운' },
    { title: '2026 조경산업기사 필기 단기완성', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+필기+단기완성+2026' },
    { title: '2026 조경산업기사 실기', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경산업기사+실기+한솔아카데미+2026' },
  ],

  '조경기능사': [
    { title: '2026 나합격 조경기능사 필기+무료특강', author: '조은정', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+조경기능사+필기+2026' },
    { title: '2026 에듀윌 조경기능사 필기 2주끝장', author: '구태익', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+조경기능사+필기+2주끝장+2026' },
    { title: '2026 조경기능사 필기 초단기 합격', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '지식오름', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+초단기+합격+2026' },
    { title: '2026 시대에듀 조경기능사 필기 한권으로 끝내기', author: '최광희', publisher: '시대에듀', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기능사+필기+한권으로+끝내기+2026' },
    { title: '2026 조경기능사 필기', author: '정용민, 오도정', publisher: '예문사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+예문사+2026' },
    { title: '2026 조경기능사 필기', author: '한상엽', publisher: '한솔아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+한솔아카데미+2026' },
    { title: '2026 시대에듀 조경기능사 필기 기출문제집', author: '최광희', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+조경기능사+필기+기출문제집+2026' },
    { title: '2026 조경기능사 실기 초단기 합격', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '지식오름', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+실기+초단기+합격+2026' },
    { title: '2026 조경기능사 실기', author: '정용민', publisher: '예문사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+실기+예문사+2026' },
    { title: '2026 조경기능사 필기 단기완성', author: '조은정', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=조경기능사+필기+단기완성+2026' },
  ],

  '측량및지형공간정보기사': [
    { title: '2026 PASS 측량 및 지형공간정보기사 필기 - 전2권', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보기사+필기+2026' },
    { title: '2026 측량 및 지형공간정보기사 필기+핸드북', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+필기+핸드북+2026' },
    { title: '2026 PASS 측량 및 지형공간정보기사 실기', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보기사+실기+2026' },
    { title: '2026 측량 및 지형공간정보기사 실기', author: '이영욱, 이영수, 최병윤, 김도균', publisher: '구민사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+실기+구민사+2026' },
    { title: '2026 PASS 측량 및 지형공간정보기사 필기 과년도+CBT 모의고사', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보기사+과년도+CBT+2026' },
    { title: '2025 측량 및 지형공간정보기사 과년도', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+과년도+구민사' },
    { title: '2026 PASS 측량 및 지형공간정보산업기사 필기 과년도+CBT 모의고사', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량+지형공간정보산업기사+필기+2026' },
    { title: '2026 측량 및 지형공간정보산업기사 필기', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보산업기사+필기+구민사+2026' },
    { title: '2026 측량 및 지형공간정보기사 핵심이론+기출문제', author: '이혜진', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+핵심이론+기출문제+2026' },
    { title: '2026 측량 및 지형공간정보기사 필기 단기완성', author: '이영수', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량+지형공간정보기사+필기+단기완성+구민사' },
  ],

  '콘크리트기능사': [
    { title: '2026 CBT 대비 콘크리트기능사 필기+실기 3주 완성', author: '고길용, 염창열, 전지현', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+실기+3주+완성+2026' },
    { title: '2026 시대에듀 Win-Q 콘크리트기능사 필기+실기 단기합격', author: '최광희', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+콘크리트기능사+필기+실기+단기합격+2026' },
    { title: '2026 콘크리트기능사 필기+실기 한권 완성', author: '이관석', publisher: '예문사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+실기+한권+완성+2026' },
    { title: '2026 콘크리트 기능사 필기 실기 - 개정증보 제21판', author: '김영국, 박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트+기능사+필기+실기+금호출판사+2026' },
    { title: '2025 콘크리트기능사 필기 실기 - 개정증보 제20판', author: '박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+실기+금호출판사+2025' },
    { title: '2024 콘크리트 기능사 필기', author: '박종삼', publisher: '금호출판사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트+기능사+필기+금호출판사+2024' },
    { title: '2026 콘크리트기능사 필기 3주 완성', author: '고길용', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+필기+3주+완성+한솔아카데미' },
    { title: '2026 콘크리트기능사 실기', author: '최광희', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+실기+시대에듀+2026' },
    { title: '2026 콘크리트기능사 기출문제 풀이', author: '이관석', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=콘크리트기능사+기출문제+2026' },
    { title: '2026 콘크리트기능사 단기완성', author: '고길용', publisher: '한솔아카데미', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=콘크리트기능사+단기완성+2026' },
  ],

  '측량기능사': [
    { title: '2026 CBT대비 측량기능사 필기 + 실기 3주완성', author: '염창열, 정병노, 고길용', publisher: '한솔아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+실기+3주완성+2026' },
    { title: '2026 측량기능사 필기 + 실기 한권 완성', author: '이영수, 김문기, 오건호', publisher: '예문사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+실기+한권+완성+2026' },
    { title: '2026 PASS 측량기능사 필기+실기', author: '박종해, 김민승, 민미란, 박동규', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PASS+측량기능사+필기+실기+2026' },
    { title: '2026 시대에듀 Win-Q 측량기능사 필기 단기합격', author: '최광희', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+측량기능사+필기+단기합격+2026' },
    { title: '2026 측량기능사 필기 및 실기', author: '김영국, 박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+실기+금호출판사+2026' },
    { title: '단기완성 측량기능사 필기 및 실기', author: '송용희', publisher: '지적EDU', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=단기완성+측량기능사+필기+실기+지적EDU' },
    { title: '2024 측량기능사 필기 이론 및 문제해설', author: '박종삼', publisher: '금호출판사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+필기+이론+문제해설+금호출판사' },
    { title: '2026 측량기능사 단기완성 핵심이론', author: '염창열', publisher: '한솔아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+단기완성+한솔아카데미+2026' },
    { title: '2026 측량기능사 실기 완성', author: '이영수', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+실기+완성+예문사+2026' },
    { title: '2026 측량기능사 기출문제 해설', author: '박종해', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=측량기능사+기출문제+해설+2026' },
  ],

  '건설재료시험기능사': [
    { title: '2026 건설재료시험기능사 필기 및 실기', author: '박종삼', publisher: '금호출판사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+필기+실기+금호출판사+2026' },
    { title: '2026 시대에듀 Win-Q 건설재료시험기능사 필기 단기합격', author: '최광희', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+건설재료시험기능사+필기+단기합격+2026' },
    { title: '2026 건설재료시험기능사 실기', author: '박종삼', publisher: '금호출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 223, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+실기+금호출판사+2026' },
    { title: '건설재료 시험기능사 필기 - 이론 및 문제해설', author: '가종길', publisher: '금호출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료+시험기능사+필기+이론+문제해설' },
    { title: '2026 건설재료시험기능사 핵심이론 기출문제', author: '최광희', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+핵심이론+기출문제+2026' },
    { title: '기능사 건설재료시험 - 필기', author: '강설모', publisher: '연문사', price: 9000, originalPrice: 10000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험+필기+연문사' },
    { title: '2026 건설재료시험기능사 필기 단기완성', author: '박종삼', publisher: '금호출판사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+필기+단기완성+2026' },
    { title: '2026 건설재료시험기능사 실기 완성', author: '최광희', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+실기+시대에듀+2026' },
    { title: '2026 건설재료시험기능사 한권 완성', author: '이관석', publisher: '예문사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+한권+완성+예문사+2026' },
    { title: '2026 건설재료시험기능사 필기 기출문제 풀이', author: '박종삼', publisher: '금호출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설재료시험기능사+필기+기출문제+금호출판사' },
  ],

  '건설안전기사': [
    { title: '2027 나합격 건설안전기사 필기 + 무료특강', author: '김현우, 허선혜', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+건설안전기사+필기+무료특강' },
    { title: '2026 에듀윌 건설안전기사 필기 기출문제집', author: '김충민, 최석훈', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+건설안전기사+필기+기출문제집+2026' },
    { title: '2026 에듀윌 건설안전기사 실기 기출문제집', author: '최석훈, 김충민', publisher: '에듀윌', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+건설안전기사+실기+기출문제집+2026' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 건설안전기사 실기', author: '김진태', publisher: '김영북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+건설안전기사+실기+2026' },
    { title: '2026 건설안전기사 실기[필답형+작업형]', author: '최윤정', publisher: '구민사', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기사+실기+필답형+작업형+2026' },
    { title: '모아 건설안전기사 필기', author: '윤경화', publisher: '모아교육그룹', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 223, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+건설안전기사+필기' },
    { title: '모아 건설안전기사 실기', author: '윤경화', publisher: '모아교육그룹', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+건설안전기사+실기' },
    { title: '2026 벼락치기 건설안전기사 필기 요점', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=벼락치기+건설안전기사+필기+요점+2026' },
    { title: '2026 건설안전기사 필기 핵심이론+기출문제', author: '김충민', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기사+필기+핵심이론+기출문제+2026' },
    { title: '2026 건설안전기사 단기완성 필기', author: '허선혜', publisher: '삼원북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=건설안전기사+단기완성+필기+2026' },
  ],

  '소방설비산업기사': [
    { title: '2026 찐합격 소방설비산업기사 필기 (기계 ③)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.8, reviews: 489, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+필기+기계+2026' },
    { title: '2026 찐합격 소방설비산업기사 필기 (전기 ③)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+필기+전기+2026' },
    { title: '2026 찐합격 소방설비산업기사 실기 (기계⑥)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+실기+기계+2026' },
    { title: '2026 찐합격 소방설비산업기사 실기 (전기⑥)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+소방설비산업기사+실기+전기+2026' },
    { title: '2026 찐합격 7개년 과년도 소방설비산업기사 필기 (기계 ③-7)', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+7개년+소방설비산업기사+필기+기계+2026' },
    { title: '2026 찐합격 7개년 과년도 소방설비산업기사 필기 (전기 ③-7)', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+7개년+소방설비산업기사+필기+전기+2026' },
    { title: '2026 초격차 소방설비산업기사 과년도 7개년 실기 전기', author: '황모아, 오민정', publisher: '모아교육그룹', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초격차+소방설비산업기사+실기+전기+2026' },
    { title: '2026 평생 무료 동영상과 함께하는 소방설비산업기사 필기 최근 기출문제(전기편)', author: '강석민, 정진홍', publisher: '세진북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방설비산업기사+필기+기출문제+전기편+2026' },
    { title: '2026 소방설비산업기사 필기 기출문제 (기계편)', author: '강석민', publisher: '세진북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방설비산업기사+필기+기출문제+기계편+2026' },
    { title: '2026 소방설비산업기사 실기 단기완성', author: '공하성', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방설비산업기사+실기+단기완성+2026' },
  ],

  '소방시설관리사': [
    { title: '2027 버닝 업 소방시설관리사 필기 1차 세트', author: '황모아, 윤연호, 모성은 외', publisher: '모아교육그룹', price: 108000, originalPrice: 120000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=버닝+업+소방시설관리사+필기+1차+세트' },
    { title: '2026 찐합격 31년 과년도 소방시설관리사 1차', author: '공하성', publisher: '성안당', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+31년+과년도+소방시설관리사+1차' },
    { title: '2026 찐합격 600제 소방시설관리사 2차', author: '공하성', publisher: '성안당', price: 72000, originalPrice: 80000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=찐합격+600제+소방시설관리사+2차' },
    { title: '2027 버닝 업 소방시설관리사 필기 1차 전과목 과년도', author: '황모아, 윤연호, 모성은 외', publisher: '모아교육그룹', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=버닝+업+소방시설관리사+1차+전과목+과년도' },
    { title: '2026 엔드 업 소방시설관리사 만제: 점검실무행정', author: '함형덕', publisher: '모아교육그룹', price: 51300, originalPrice: 57000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=엔드+업+소방시설관리사+만제+점검실무행정' },
    { title: '2026 엔드 업 소방시설관리사 만제: 설계 및 시공', author: '함형덕', publisher: '모아교육그룹', price: 51300, originalPrice: 57000, discount: '10%', rating: 4.6, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=엔드+업+소방시설관리사+만제+설계+시공' },
    { title: '뇌박힘 소방시설관리사 점검실무행정', author: '김정희', publisher: '모아교육그룹', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=뇌박힘+소방시설관리사+점검실무행정' },
    { title: '2026 체크업 소방시설관리사 2차 실기', author: '김종상', publisher: '북스케치', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=체크업+소방시설관리사+2차+실기' },
    { title: '2026 소방시설관리사 1차 핵심이론', author: '공하성', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=소방시설관리사+1차+핵심이론+2026' },
    { title: '2026 소방시설관리사 과년도 기출문제집', author: '황모아', publisher: '모아교육그룹', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.4, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=소방시설관리사+과년도+기출문제집+2026' },
  ],

  '산업위생관리기사': [
    { title: '2026 산업위생관리기사 필기 + 무료동영상 + 핸드북', author: '최윤정', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+필기+무료동영상+핸드북+2026' },
    { title: '2026 산업위생관리기사 실기 + 무료동영상 + 핸드북', author: '최윤정', publisher: '구민사', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+실기+무료동영상+핸드북+2026' },
    { title: '2026 에듀윌 산업위생관리기사 필기 한달끝장', author: '최창률', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+산업위생관리기사+필기+한달끝장+2026' },
    { title: '2026 더 플러스 산업위생관리기사 필기', author: '서영민', publisher: '성안당', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=더+플러스+산업위생관리기사+필기+2026' },
    { title: '2026 산업위생관리기사 필기 기출문제집', author: '서영민, 조만희', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+필기+기출문제집+성안당+2026' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 산업위생관리기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+산업위생관리기사+실기+2026' },
    { title: '2026 에듀윌 산업위생관리기사 실기 2주끝장', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+산업위생관리기사+실기+2주끝장+2026' },
    { title: '2026 2주완성 산업위생관리기사 실기', author: '서영민', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2주완성+산업위생관리기사+실기+2026' },
    { title: '2026 산업위생관리기사 필기 단기완성', author: '최윤정', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=산업위생관리기사+필기+단기완성+구민사+2026' },
    { title: '2026 산업위생관리기사 실기 단기완성', author: '서영민', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=산업위생관리기사+실기+단기완성+성안당+2026' },
  ],

  '위험물기능사': [
    { title: '2026 나합격 위험물기능사 필기 + 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 567, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물기능사+필기+실기+무료특강+2026' },
    { title: '2026 에듀윌 위험물기능사 필기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 489, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물기능사+필기+2주끝장+2026' },
    { title: '2026 에듀윌 위험물기능사 실기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 412, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물기능사+실기+2주끝장+2026' },
    { title: '2026 박문각 위험물기능사 (필기+실기) + 무료특강 세트', author: '김연진', publisher: '박문각', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+위험물기능사+필기+실기+세트+2026' },
    { title: '2026 한번에 합격하는 위험물기능사 필기+실기', author: '박수경', publisher: '성안당', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+위험물기능사+필기+실기+2026' },
    { title: '2026 해커스 위험물기능사 실기 한권합격', author: '이승원', publisher: '해커스자격증', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 245, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+위험물기능사+실기+한권합격+2026' },
    { title: '2026 위험물기능사 실기 - 요약이론 & 13개년 기출문제집', author: '파이팅혼공TV', publisher: '지식오름', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+실기+요약이론+13개년+기출문제집+2026' },
    { title: '2026 위험물기능사 필기 기출문제집', author: '김재호', publisher: '세화', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+필기+기출문제집+세화+2026' },
    { title: '2026 위험물기능사 필기 핵심이론', author: '박수경', publisher: '성안당', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+필기+핵심이론+성안당+2026' },
    { title: '2026 위험물기능사 단기완성', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 109, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물기능사+단기완성+에듀윌+2026' },
  ],

  '위험물산업기사': [
    { title: '2026 나합격 위험물산업기사 필기 + 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 489, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물산업기사+필기+실기+무료특강+2026' },
    { title: '2026 에듀윌 위험물산업기사 필기 2주끝장 + 무료특강', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물산업기사+필기+2주끝장+2026' },
    { title: '2026 에듀윌 위험물산업기사 실기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+위험물산업기사+실기+2주끝장+2026' },
    { title: '2026 나합격 위험물산업기사 필기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물산업기사+필기+무료특강+2026' },
    { title: '모아 위험물산업기사 필기', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+위험물산업기사+필기' },
    { title: '2026 직8딴 위험물산업기사 실기', author: '김진태', publisher: '김영북스', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+위험물산업기사+실기+2026' },
    { title: '2026 나합격 위험물산업기사 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+위험물산업기사+실기+무료특강+2026' },
    { title: '2026 위험물산업기사 필기 기출문제집', author: '김재호', publisher: '세화', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물산업기사+필기+기출문제집+세화+2026' },
    { title: '2026 위험물산업기사 필기 단기완성', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물산업기사+필기+단기완성+에듀윌+2026' },
    { title: '2026 위험물산업기사 실기 단기완성', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=위험물산업기사+실기+단기완성+2026' },
  ],

  '기계설계기사': [
    { title: '2026 시대에듀 Win-Q 기계설계산업기사 필기 단기합격', author: '정의', publisher: '시대에듀', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 345, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+기계설계산업기사+필기+단기합격+2026' },
    { title: '2023 기계설계기사 필기', author: '김영기', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계설계기사+필기+구민사+2023' },
    { title: '기계설계기사 필기 - 최신 개정판', author: '정연택 외', publisher: '건기원', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계설계기사+필기+최신+개정판+건기원' },
    { title: '2026 나합격 기계설계산업기사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+기계설계산업기사+필기+무료특강+2026' },
    { title: '일반기계기사·기계설계산업기사·건설기계설비기사 작업형 실기', author: '메카피아', publisher: '메카피아', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=일반기계기사+기계설계산업기사+작업형+실기' },
    { title: '생산자동화 기능사·산업기사 기계요소설계·기계설계 작업', author: '김진원', publisher: '공학기술', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화+기능사+기계요소설계+기계설계+작업' },
    { title: '2026 기계설계기사 필기 기출문제 풀이', author: '김영기', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계설계기사+필기+기출문제+풀이+구민사' },
    { title: '2026 기계설계산업기사 실기', author: '정의', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계설계산업기사+실기+시대에듀+2026' },
    { title: '나합격 전산응용기계제도기능사 실기 유형별 빈출 도면집', author: '최현석', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+실기+유형별+빈출+도면집' },
    { title: '2026 기계설계기사 핵심이론+기출문제', author: '정연택', publisher: '건기원', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계설계기사+핵심이론+기출문제+건기원+2026' },
  ],

  '공조냉동기계기사': [
    { title: '2026 공조냉동기계기사 필기 5주완성', author: '조성안, 이승원, 강희중', publisher: '한솔아카데미', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+필기+5주완성+한솔아카데미+2026' },
    { title: '2026 이패스 임재기의 공조냉동기계기사 필기 - 이론편+기출문제편', author: '임재기', publisher: '이패스코리아', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+임재기+공조냉동기계기사+필기+2026' },
    { title: '2026 에듀윌 공조냉동기계기사 필기 한권끝장', author: '손익희', publisher: '에듀윌', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+공조냉동기계기사+필기+한권끝장+2026' },
    { title: '2026 공조냉동기계기사 실기 5주완성', author: '강희중, 조성안', publisher: '한솔아카데미', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+실기+5주완성+한솔아카데미+2026' },
    { title: '2026 이패스 임재기의 공조냉동기계기사 실기 - 이론+기출문제', author: '임재기', publisher: '이패스코리아', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+임재기+공조냉동기계기사+실기+2026' },
    { title: '모아 공조냉동기계기사 실기', author: '이지원', publisher: '모아교육그룹', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+공조냉동기계기사+실기' },
    { title: '2026 스마트 7개년 과년도 공조냉동기계기사 필기', author: '최승일', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=스마트+7개년+공조냉동기계기사+필기+2026' },
    { title: '2026 공조냉동기계기사 필기 과년도 7주완성', author: '이래운, 유기창', publisher: '엔플북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+필기+과년도+7주완성+2026' },
    { title: '2026 공조냉동기계기사 실기 단기완성', author: '손익희', publisher: '에듀윌', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=공조냉동기계기사+실기+단기완성+에듀윌+2026' },
    { title: '2026 공조냉동기계기사 필기 기출문제 풀이', author: '조성안', publisher: '한솔아카데미', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기사+필기+기출문제+풀이+2026' },
  ],

  '공조냉동기계기능사': [
    { title: '2026 공조냉동기계기능사 필기+무료동영상 - 최신 CBT 복원문제 수록', author: '강진규, 오태정', publisher: '구민사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+무료동영상+구민사+2026' },
    { title: '모아 공조냉동기계기능사 필기 (핵심이론+과년도 14개년)', author: '이지원', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=모아+공조냉동기계기능사+필기+핵심이론+과년도' },
    { title: '2026 공조냉동기계기능사 필기 + 무료동영상', author: '이정근', publisher: '건기원', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+무료동영상+건기원+2026' },
    { title: '2026 시대에듀 Win-Q 공조냉동기계기능사 필기 단기합격', author: '허판효', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+공조냉동기계기능사+필기+단기합격+2026' },
    { title: '2026 공조냉동기계기능사 필기', author: '권오수, 안효열, 이원범', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+예문사+2026' },
    { title: '2026 공조냉동기계기능사 산업기사 실기+무료동영상', author: '강진규, 오태정', publisher: '구민사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+산업기사+실기+무료동영상+2026' },
    { title: '이패스 최부길의 공조냉동기계기능사 실기 (필답형+작업형)', author: '최부길', publisher: '이패스코리아', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이패스+공조냉동기계기능사+실기+필답형+작업형' },
    { title: '2026 공조냉동기계기능사 필기 기출문제 - 기출 + 적중모의고사', author: '나중식', publisher: '책과상상', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+필기+기출문제+적중모의고사+2026' },
    { title: '2026 공조냉동기계기능사 단기완성', author: '이지원', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+단기완성+2026' },
    { title: '2026 공조냉동기계기능사 핵심이론', author: '이정근', publisher: '건기원', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=공조냉동기계기능사+핵심이론+건기원+2026' },
  ],

  '용접기사': [
    { title: '2026 고수열강 용접기사 필기+실기', author: '정균호, 나중쇠, 박승리, 박재원', publisher: '구민사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=고수열강+용접기사+필기+실기+구민사+2026' },
    { title: '2026 시대에듀 Win-Q 용접산업기사 필기 단기합격', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+용접산업기사+필기+단기합격+2026' },
    { title: '2026 용접산업기사 필기', author: '나중식', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접산업기사+필기+책과상상+2026' },
    { title: '202X 고수열강 용접산업기사 필기 + 실기', author: '정균호, 나중쇠, 박재원', publisher: '구민사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=고수열강+용접산업기사+필기+실기+구민사' },
    { title: '용접산업기사 필기', author: '용접기술시험연구회', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접산업기사+필기+일진사' },
    { title: '2026 용접산업기사 필기 10년간 기출문제', author: '나중식', publisher: '책과상상', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접산업기사+필기+10년간+기출문제+2026' },
    { title: '2020 완전정복 용접산업기사 실기', author: 'NDT 시험연구회', publisher: '세진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=완전정복+용접산업기사+실기+세진사' },
    { title: '과년도 용접산업기사', author: '김명선, 김용구, 임정운', publisher: 'HJ골든벨타임', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=과년도+용접산업기사+골든벨' },
    { title: '2026 용접기사 실기 핵심이론', author: '정균호', publisher: '구민사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기사+실기+핵심이론+구민사+2026' },
    { title: '2026 용접기사 필기 단기완성', author: '홍순규', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기사+필기+단기완성+시대에듀+2026' },
  ],

  '용접기능사': [
    { title: '2026 피복, 가스텅스텐, 이산화탄소가스 용접기능사 필기시험문제', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기시험문제+크라운출판사+2026' },
    { title: '2025 용접기능사 필기 총정리', author: '용접기술시험연구회', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기+총정리+일진사' },
    { title: '2026 에듀윌 피복아크용접기능사 필기 한권끝장+무료특강', author: '김정혁', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+피복아크용접기능사+필기+한권끝장+2026' },
    { title: '용접기능사 특수용접기능사 필기 + 무료 동영상 강의', author: '정명호', publisher: '메카피아', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+특수용접기능사+필기+무료동영상+메카피아' },
    { title: '용접기능사 필기 핵심요약', author: '최부길', publisher: '이패스코리아', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기+핵심요약+이패스코리아' },
    { title: '2026 평생 무료 동영상과 함께하는 가스텅스텐아크용접기능사 필기', author: '최갑규', publisher: '세진북스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=가스텅스텐아크용접기능사+필기+세진북스+2026' },
    { title: '용접기능사 실기', author: '김승대 외', publisher: '세진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+실기+세진사' },
    { title: '이산화탄소가스아크 용접기능사 실기', author: '김명선', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이산화탄소가스아크+용접기능사+실기+크라운출판사' },
    { title: '2026 용접기능사 필기 기출문제 풀이', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+필기+기출문제+풀이+2026' },
    { title: '2026 용접기능사 단기합격', author: '정명호', publisher: '메카피아', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=용접기능사+단기합격+메카피아+2026' },
  ],

  '생산자동화기능사': [
    { title: '생산자동화 기능사 생산자동화 산업기사 기계요소설계·기계설계 작업 - 인벤터를 활용한 공개문제 풀이', author: '김진원', publisher: '공학기술', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화+기능사+인벤터+공개문제+풀이' },
    { title: '생산자동화 기능사 생산자동화 산업기사 기계요소설계·기계설계 작업 - 솔리드웍스를 활용한 공개문제 풀이', author: '김진원', publisher: '공학기술', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 267, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화+기능사+솔리드웍스+공개문제+풀이' },
    { title: '2026 나합격 자동화설비기능사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+자동화설비기능사+필기+무료특강+2026' },
    { title: '실무를 위한 SolidWorks - 생산자동화기능사 / 산업기사', author: '고성우, 성재경', publisher: '예문사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=SolidWorks+생산자동화기능사+산업기사+예문사' },
    { title: '생산자동화기능사 필기', author: '한홍걸', publisher: '예문사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.5, reviews: 156, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화기능사+필기+예문사' },
    { title: '생산자동화기능사 - 문제.해설', author: '생산자동화연구회', publisher: '일진사', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화기능사+문제+해설+일진사' },
    { title: '2020 생산자동화기능사 필기 - 개정 5판', author: '정연택 외', publisher: '건기원', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=생산자동화기능사+필기+건기원' },
    { title: 'Melsec-Q PLC를 활용한 생산자동화(MPS) 제어실습', author: '오선일', publisher: '복두출판사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=PLC+생산자동화+제어실습+복두출판사' },
    { title: '2026 생산자동화기능사 필기 기출문제 풀이', author: '한홍걸', publisher: '예문사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=생산자동화기능사+필기+기출문제+예문사+2026' },
    { title: '2026 생산자동화기능사 단기완성', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=생산자동화기능사+단기완성+2026' },
  ],

  '전산응용기계제도기능사': [
    { title: '2026 나합격 전산응용기계제도기능사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 467, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+전산응용기계제도기능사+필기+무료특강+2026' },
    { title: '나합격 전산응용기계제도기능사 실기 유형별 빈출 도면집', author: '최현석', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+실기+유형별+빈출+도면집' },
    { title: '2026 시대에듀 Win-Q 전산응용기계제도기능사 필기', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+전산응용기계제도기능사+필기+시대에듀+2026' },
    { title: '나합격 전산응용기계제도기능사 실기', author: '자격증의모든것DC', publisher: '삼원북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+실기+삼원북스' },
    { title: '2026 해커스 전산응용기계제도기능사 필기 한권완성', author: '이재형', publisher: '해커스자격증', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=해커스+전산응용기계제도기능사+필기+한권완성+2026' },
    { title: '2026 유튜버 기계도사 전산응용기계제도기능사', author: '정인훈', publisher: '지식오름', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기계도사+전산응용기계제도기능사+2026' },
    { title: '2026 전산응용기계제도기능사 필기 기출문제', author: '김원중', publisher: '책과상상', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+필기+기출문제+책과상상+2026' },
    { title: '2025 시대에듀 Win-Q 전산응용기계제도기능사 실기', author: '정인훈', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+전산응용기계제도기능사+실기+시대에듀' },
    { title: '2026 전산응용기계제도기능사 단기완성', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=전산응용기계제도기능사+단기완성+2026' },
    { title: '2026 전산응용기계제도기능사 핵심이론', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전산응용기계제도기능사+핵심이론+삼원북스+2026' },
  ],

  '승강기기사': [
    { title: '승강기 기사.산업기사 - NCS 기반 출제기준에 맞춘 최고의 수험서', author: '최기호, 이명상', publisher: '대광서림', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.8, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+산업기사+NCS+대광서림' },
    { title: '2026 승강기 기사.산업기사 필기', author: '이도흠', publisher: '엔트미디어', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+산업기사+필기+엔트미디어+2026' },
    { title: '2026 승강기 기사.산업기사 실기', author: '이도흠', publisher: '엔트미디어', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+산업기사+실기+엔트미디어+2026' },
    { title: '2024 기발한 승강기기사.산업기사 필기', author: '김인호', publisher: '크라운출판사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=기발한+승강기기사+산업기사+필기+크라운출판사' },
    { title: '2024 한 권으로 끝내는 승강기기사.산업기사 필기', author: '한영규', publisher: '건기원', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한권으로+끝내는+승강기기사+산업기사+필기+건기원' },
    { title: '승강기기사.산업기사', author: '정재수', publisher: '남양문화', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기기사+산업기사+남양문화' },
    { title: '승강기기사 실기', author: '정재수', publisher: '남양문화', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기기사+실기+남양문화' },
    { title: '승강기 기사', author: '이도흠', publisher: '동일출판사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기+기사+동일출판사+이도흠' },
    { title: '2026 승강기기사 필기 단기완성', author: '이도흠', publisher: '엔트미디어', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyBobby.co.kr/search?keyword=승강기기사+필기+단기완성+엔트미디어+2026' },
    { title: '2026 승강기기사 실기 단기완성', author: '한영규', publisher: '건기원', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=승강기기사+실기+단기완성+건기원+2026' },
  ],

  '품질경영기사': [
    { title: '2026 유튜브와 함께하는 양쌤의 품질경영기사 필기', author: '양희정', publisher: '이나무', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=양쌤+품질경영기사+필기+이나무+2026' },
    { title: '2026 배극윤의 품질경영기사 필기 - 전2권', author: '배극윤', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배극윤+품질경영기사+필기+예문사+2026' },
    { title: '2026 한번에 합격하는 품질경영기사 필기', author: '염경철', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+품질경영기사+필기+성안당+2026' },
    { title: '2026 유튜브와 함께하는 양쌤의 품질경영기사 실기', author: '양희정', publisher: '이나무', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=양쌤+품질경영기사+실기+이나무+2026' },
    { title: '2026 배극윤의 품질경영기사 필기 문제풀이 - 전2권', author: '배극윤', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배극윤+품질경영기사+필기+문제풀이+예문사+2026' },
    { title: '2026 한번에 합격하는 품질경영기사 실기', author: '염경철', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+품질경영기사+실기+성안당+2026' },
    { title: '2025 시대에듀 Win-Q 품질경영기사 필기 단기합격', author: '박병호', publisher: '시대에듀', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=Win-Q+품질경영기사+필기+단기합격+시대에듀' },
    { title: '2025 품질경영기사 필기 과년도 출제문제', author: '정현석', publisher: '일진사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=품질경영기사+필기+과년도+출제문제+일진사' },
    { title: '2026 품질경영기사 필기 단기완성', author: '배극윤', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=품질경영기사+필기+단기완성+예문사+2026' },
    { title: '2026 품질경영기사 실기 단기완성', author: '양희정', publisher: '이나무', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=품질경영기사+실기+단기완성+이나무+2026' },
  ],

  '대기환경기사': [
    { title: '2027 에듀윌 대기환경기사 필기 4주끝장 + 무료특강', author: '이찬범', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+대기환경기사+필기+4주끝장' },
    { title: '2026 나합격 대기환경기사 필기 + 무료특강', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+대기환경기사+필기+무료특강+2026' },
    { title: '2026 물쌤닷컴 대기환경기사/산업기사 필기 + 모의고사', author: '최혁재', publisher: '미교원', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+대기환경기사+산업기사+필기+모의고사+2026' },
    { title: '2026 나합격 대기환경기사 실기 + 무료특강', author: '김현우', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+대기환경기사+실기+무료특강+2026' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 대기환경기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+대기환경기사+실기+2026' },
    { title: '2026 에듀윌 대기환경기사 실기 2주끝장 + 무료특강', author: '이찬범', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+대기환경기사+실기+2주끝장+2026' },
    { title: '2026 물쌤닷컴 대기환경기사 산업기사 실기 + 기출해설', author: '최혁재', publisher: '미교원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+대기환경기사+산업기사+실기+기출해설+2026' },
    { title: '2026 합격Easy 대기환경기사 실기', author: '신은상', publisher: '건기원', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=합격Easy+대기환경기사+실기+건기원+2026' },
    { title: '2026 한번에 합격하는 대기환경기사 필기 기출문제집', author: '서성석', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=한번에+합격하는+대기환경기사+필기+기출문제집+2026' },
    { title: '2026 대기환경기사 필기 단기완성', author: '이찬범', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=대기환경기사+필기+단기완성+에듀윌+2026' },
  ],

  '수질환경기사': [
    { title: '2027 에듀윌 수질환경기사 필기 4주끝장+무료특강', author: '정윤성', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+수질환경기사+필기+4주끝장' },
    { title: '2026 나합격 수질환경기사 필기+무료특강+온라인CBT', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+수질환경기사+필기+무료특강+온라인CBT+2026' },
    { title: '2026 물쌤닷컴 수질환경기사/산업기사 필기 + 기출해설', author: '이종혁', publisher: '미교원', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+수질환경기사+산업기사+필기+기출해설+2026' },
    { title: '2026 수질환경기사 필기 + 과년도 + 무료동영상', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수질환경기사+필기+과년도+무료동영상+구민사+2026' },
    { title: '2026 나합격 수질환경기사 실기+무료특강', author: '김현우', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=나합격+수질환경기사+실기+무료특강+2026' },
    { title: '2026 직8딴 수질환경기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=직8딴+수질환경기사+실기+2026' },
    { title: '2026 에듀윌 수질환경기사 실기 2주끝장+무료특강', author: '이찬범', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+수질환경기사+실기+2주끝장+2026' },
    { title: '2026 물쌤닷컴 수질환경기사 산업기사 실기 + 기출해설', author: '이종혁', publisher: '미교원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=물쌤닷컴+수질환경기사+산업기사+실기+기출해설+2026' },
    { title: '2026 수질환경기사 필기 단기완성', author: '정윤성', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수질환경기사+필기+단기완성+에듀윌+2026' },
    { title: '2026 수질환경기사 실기 단기완성', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=수질환경기사+실기+단기완성+구민사+2026' },
  ],

  '비파괴검사기사': [
    { title: '방사선비파괴검사 문제 & 해설 (기사.산업기사 / 기능사 공통)', author: '여화연', publisher: '일진사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=방사선비파괴검사+문제+해설+일진사' },
    { title: '비파괴검사기사 문제해설', author: '여화연', publisher: '일진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기사+문제해설+일진사' },
    { title: '침투비파괴검사 산업기사·기사 실기 필답형', author: '조정현', publisher: '피앤피북', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=침투비파괴검사+산업기사+기사+실기+필답형' },
    { title: '금속재료 - 비파괴검사 기사.산업기사 수험서', author: '권호영 외', publisher: '선학출판사', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사+기사+산업기사+수험서+선학출판사' },
    { title: '2026 비파괴검사기사 필기 기출문제 풀이', author: '여화연', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기사+필기+기출문제+풀이+2026' },
    { title: '2026 비파괴검사기사 실기 핵심이론', author: '조정현', publisher: '피앤피북', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기사+실기+핵심이론+2026' },
    { title: '2026 비파괴검사산업기사 필기 기출문제', author: '여화연', publisher: '일진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyoBOok.co.kr/search?keyword=비파괴검사산업기사+필기+기출문제+2026' },
    { title: '2026 초음파비파괴검사 기사·산업기사 필기', author: '여화연', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초음파비파괴검사+기사+산업기사+필기+2026' },
    { title: '2026 비파괴검사기능사 필기 단기합격', author: '조정현', publisher: '피앤피북', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기능사+필기+단기합격+2026' },
    { title: '2026 비파괴검사기사 단기완성', author: '권호영', publisher: '선학출판사', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.2, reviews: 43, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=비파괴검사기사+단기완성+선학출판사+2026' },
  ],

  '전기공사기사': [
    { title: '2026 전기공사기사 실기', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+실기+2026' },
    { title: '2026 에듀윌 전기 전기공사기사 필기 7개년 기출문제집', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기공사기사+필기+7개년+2026' },
    { title: '2026 에듀윌 전기 전기공사기사 실기 한권끝장', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기공사기사+실기+한권끝장+2026' },
    { title: '2026 E90-3 전기공사기사 필기', author: '검정연구회', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=E90-3+전기공사기사+필기+2026' },
    { title: '2026 전기공사기사 필기 - 최신 8개년 기출문제', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+필기+8개년+기출문제+2026' },
    { title: '2026 전기공사기사 실기 파이널 + 단답형', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+실기+파이널+단답형+2026' },
    { title: '2026 최신판 답이 보인다 30일 단기완성 전기공사기사·산업기사 실기', author: '검정연구회', publisher: '동일출판사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+산업기사+실기+30일+2026' },
    { title: '2026 D30-3 전기공사기사실기', author: '검정연구회', publisher: '엔트미디어', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=D30-3+전기공사기사+실기+2026' },
    { title: '2026 전기공사기사 필기 파이널 특강', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+필기+파이널+특강+2026' },
    { title: '2026 에듀윌 전기 제어공학 필기', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기+제어공학+필기+2026' },
  ],

  '전기공사산업기사': [
    { title: '2026 전기공사산업기사 실기', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+실기+2026' },
    { title: '2026 전기공사산업기사 필기 - 최신 8개년 기출문제', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+필기+8개년+2026' },
    { title: '2026 E90-4 전기공사산업기사 필기', author: '검정연구회', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=E90-4+전기공사산업기사+필기+2026' },
    { title: '2026 완벽대비 전기공사산업기사 필기', author: '검정연구회', publisher: '동일출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=완벽대비+전기공사산업기사+필기+2026' },
    { title: '2026 D30-4 전기공사산업기사 실기', author: '검정연구회', publisher: '엔트미디어', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=D30-4+전기공사산업기사+실기+2026' },
    { title: '2026 전기공사산업기사 실기 파이널 + 단답형', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+실기+파이널+단답형+2026' },
    { title: '2026 전기공사산업기사 필기 파이널 특강', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 119, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사산업기사+필기+파이널+특강+2026' },
    { title: '배울학 전기공사산업기사 1033 필기 10개년 기출문제집', author: '윤석만, 강장규, 황민욱', publisher: '배울학', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=배울학+전기공사산업기사+필기+10개년' },
    { title: '2026 최신판 답이 보인다 30일 단기완성 전기공사기사·산업기사 실기', author: '검정연구회', publisher: '동일출판사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기사+산업기사+실기+30일+2026' },
    { title: '2026 에듀윌 전기 제어공학 필기+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기+제어공학+필기+2026' },
  ],

  '전기기능장': [
    { title: '2026 초스피드 전기기능장 필기', author: '김영복', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능장+필기+2026' },
    { title: '2026 완벽대비 전기기능장 필기', author: '최동원, 황락훈', publisher: '동일출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=완벽대비+전기기능장+필기+2026' },
    { title: '2026 초스피드 전기기능장 필답형 실기', author: '김영복', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능장+실기+필답형+2026' },
    { title: '2026 마스터 전기기능장 필기', author: '현명걸, 김동진', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=마스터+전기기능장+필기+2026' },
    { title: '2026 초단기완성! 전기기능장 필기', author: '이창우', publisher: '책과상상', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.6, reviews: 178, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초단기완성+전기기능장+필기+2026' },
    { title: '초스피드 전기기능장 실기 PLC', author: '김재규', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능장+실기+PLC' },
    { title: '전기기능장 PLC제어 & 시공 실무 마스터', author: '이해춘', publisher: '사이버북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+PLC제어+시공+실무' },
    { title: '전기기능장 실기 PLC 완전정복', author: '검정연구회', publisher: '이나무', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+실기+PLC+완전정복' },
    { title: '전기기능장 실기 PLC 과년도 기출문제', author: '최병남', publisher: '세진사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+실기+PLC+과년도+기출문제' },
    { title: '전기기능장 실기 - 작업형/필답형 실기총정리', author: '유영규', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능장+실기+작업형+필답형' },
  ],

  '전기기능사': [
    { title: '2026 이기적 전기기능사 필기 + 실기 올인원', author: '안경재', publisher: '영진.com', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 567, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+전기기능사+필기+실기+올인원+2026' },
    { title: '2026 에듀윌 전기 전기기능사 필기 한권끝장', author: '유치형, 홍석묵, 최대규', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+필기+한권끝장+2026' },
    { title: '2026 시대에듀 전기기능사 필기 + 실기 한권합격', author: '김민우, 민지현', publisher: '시대에듀', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=시대에듀+전기기능사+한권합격+2026' },
    { title: '2026 전기기능사 필기 초단기 CBT 기출문제집', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '종이향기', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능사+필기+초단기+CBT+기출문제집+2026' },
    { title: '2026 이기적 전기기능사 필기 이론서 + 기출문제집', author: '이재일', publisher: '영진.com', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+전기기능사+필기+이론서+기출문제집+2026' },
    { title: '2026 에듀윌 전기 전기기능사 실기 한권끝장', author: '최대규, 홍석묵, 유치형', publisher: '에듀윌', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+실기+한권끝장+2026' },
    { title: '2026 무료 동영상과 함께 공부하는 초스피드 전기기능사 실기', author: '유인종', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=초스피드+전기기능사+실기+2026' },
    { title: '2026 에듀윌 전기 전기기능사 실기 해설집+도면집+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+실기+해설집+도면집+2026' },
    { title: '전기기능사 실기 바이블 3', author: '신석환, 최경호', publisher: '동일출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기기능사+실기+바이블' },
    { title: '2026 박문각 전기기능사 실기 + 무료특강', author: '정용걸', publisher: '박문각', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=박문각+전기기능사+실기+2026' },
  ],

  '전기공사기능사': [
    { title: '전기공사기능사', author: '강홍석', publisher: '영원', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+필기' },
    { title: '전기공사기능사', author: '전기공사검정시험연구회', publisher: '교학사', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.4, reviews: 156, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+교학사' },
    { title: '전기공사기능사', author: '전기기능연구회', publisher: '기문사', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+기문사' },
    { title: '최신판 전기공사기능사 - 이론요약.문제해설', author: '장영태', publisher: '크라운출판사', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+이론요약+문제해설' },
    { title: '전기공사기능사 1.2급 - 손자병법 학과문제집', author: '강홍석', publisher: '영원', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.3, reviews: 98, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+학과문제집' },
    { title: '전기공사기능사 - 문제총정리', author: '국가기술자격검정시험연구회', publisher: '학문당', price: 8100, originalPrice: 9000, discount: '10%', rating: 4.2, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+문제총정리' },
    { title: '전기공사 기능사 - 이론요약 문제해설', author: '장영태', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.2, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+이론요약+문제해설+크라운' },
    { title: '전기공사기능사 적중 예상문제집', author: '오철균', publisher: '한국전기학원', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.1, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=전기공사기능사+적중+예상문제집' },
    { title: '2026 이기적 전기기능사 필기 + 실기 올인원', author: '안경재', publisher: '영진.com', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=이기적+전기기능사+올인원+2026' },
    { title: '2026 에듀윌 전기 전기기능사 필기 한권끝장', author: '유치형, 홍석묵, 최대규', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 43, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=에듀윌+전기기능사+필기+한권끝장+2026' },
  ],

  // ────────────────────────────────────────
  '화학분석기사': [
    // 베스트셀러 5
    { title: '2026 정나나의 화학분석기사 필기', author: '정나나', publisher: '예문사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+정나나+화학분석기사+필기' },
    { title: '2026 나합격 화학분석기사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+나합격+화학분석기사' },
    { title: '2026 한번에 합격하는 화학분석기사 필기', author: '박수경', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+필기+성안당' },
    { title: '2026 Win-Q 화학분석기사 필기 단기합격', author: '박지은', publisher: '시대에듀', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+화학분석기사' },
    { title: '2026 화학분석기사 필기 기출문제집', author: '김재호', publisher: '예문사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 121, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+기출문제집' },
    // 추천수험서 5
    { title: '2026 에듀윌 화학분석기사 필기 한권끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+화학분석기사' },
    { title: '2026 화학분석기사 핵심이론+기출문제', author: '정나나', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+핵심이론' },
    { title: '2026 화학분석기사 실기 완전정복', author: '박수경', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+실기' },
    { title: '2026 화학분석기사 CBT 기출예상문제집', author: '이경호', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+CBT' },
    { title: '2026 화학분석기사 7개년 과년도 해설집', author: '박지은', publisher: '시대에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+화학분석기사+7개년' },
  ],

  // ────────────────────────────────────────
  '자동차정비기능사': [
    // 베스트셀러 5
    { title: '2026 기분파 자동차정비기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+자동차정비기능사+필기' },
    { title: '2026 에듀윌 자동차정비기능사 필기 한권끝장', author: '김정혁', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+자동차정비기능사' },
    { title: '2026 뻥! 뚫린 패스 자동차정비기능사 필기', author: '김연수 외', publisher: '골든벨', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+골든벨' },
    { title: '2026 자동차정비기능사 필기(+전과목 무료동영상)', author: '이병근', publisher: '예문에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 223, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+무료동영상' },
    { title: '2026 Win-Q 자동차정비기능사 필기 단기합격', author: '함성훈 외', publisher: '시대에듀', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+자동차정비기능사' },
    // 추천수험서 5
    { title: '2026 자동차정비기능사 필기 최근기출문제', author: '김형진', publisher: '책과상상', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+최근기출' },
    { title: '2026 자동차정비기능사 필기 핵심이론', author: '김광석', publisher: '골든벨', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+핵심이론' },
    { title: '2026 합격이 보이는 자동차정비기능사 필기', author: '국가기술자격연구회', publisher: '구민사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+구민사' },
    { title: '2026 자동차정비기능사 실기 완전정복', author: '이병근', publisher: '예문에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+실기' },
    { title: '2026 자동차정비기능사 CBT 적중모의고사', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비기능사+CBT' },
  ],

  // ────────────────────────────────────────
  '자동차정비산업기사': [
    // 베스트셀러 5
    { title: '2026 기분파 자동차정비산업기사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 267, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+자동차정비산업기사' },
    { title: '2026 뻥! 뚫린 PASS 자동차정비산업기사 필기', author: '김명준 외', publisher: '골든벨', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+골든벨' },
    { title: '2026 자동차정비산업기사 필기 한권완성', author: '이병근', publisher: '예문에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+한권완성' },
    { title: '2026 합격포인트 자동차정비산업기사 필기', author: '김광석 외', publisher: '골든벨', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 156, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+합격포인트+자동차정비산업기사' },
    { title: '2026 자동차정비산업기사 필기', author: '소철호', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 132, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+필기' },
    // 추천수험서 5
    { title: '자동차정비산업기사 필기', author: '정장만', publisher: '에듀피디', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=자동차정비산업기사+필기+에듀피디' },
    { title: '2026 에듀윌 자동차정비산업기사 필기 한권끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+자동차정비산업기사' },
    { title: '2026 자동차정비산업기사 실기 완전정복', author: '이병근', publisher: '예문에듀', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+실기' },
    { title: '2026 자동차정비산업기사 CBT 실전모의고사', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+CBT' },
    { title: '2026 자동차정비산업기사 과년도 기출해설', author: '소철호', publisher: '책과상상', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 65, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+자동차정비산업기사+과년도' },
  ],

  // ────────────────────────────────────────
  '지게차운전기능사': [
    // 베스트셀러 5
    { title: '2027 박문각 지게차운전기능사 필기 핵심이론서+8개년 기출문제집 세트', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 21510, originalPrice: 23900, discount: '10%', rating: 4.8, reviews: 456, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2027+박문각+지게차운전기능사+세트' },
    { title: '2026 기분파 지게차운전기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+지게차운전기능사' },
    { title: '2027 박문각 지게차운전기능사 필기 8개년 기출문제집', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyободook.co.kr/search?keyword=2027+박문각+지게차운전기능사+기출' },
    { title: '2026 기발한 지게차운전기능사 필기 총정리문제', author: '김준한', publisher: '크라운출판사', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+크라운' },
    { title: '2026 쩐 기능장의 3일 끝! 지게차운전기능사 필기', author: '전범준', publisher: '직업상점', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+3일끝' },
    // 추천수험서 5
    { title: '2027 박문각 지게차운전기능사 필기 핵심이론서', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 12510, originalPrice: 13900, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2027+박문각+지게차운전기능사+핵심이론' },
    { title: '2026 에듀윌 지게차운전기능사 필기 독학끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+지게차운전기능사' },
    { title: '2026 Win-Q 지게차운전기능사 필기 단기합격', author: '함성훈', publisher: '시대에듀', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+지게차운전기능사' },
    { title: '2026 지게차운전기능사 필기 기출문제집', author: '건설기계교육아카데미', publisher: '책과상상', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+기출문제집' },
    { title: '2026 지게차운전기능사 실기 완전정복', author: '김준한', publisher: '크라운출판사', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 108, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+지게차운전기능사+실기' },
  ],

  // ────────────────────────────────────────
  '굴착기운전기능사': [
    // 베스트셀러 5
    { title: '2026 기분파 굴착기운전기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 412, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+기분파+굴착기운전기능사+필기' },
    { title: '2026 에듀윌 굴착기운전기능사 독학으로 필기끝장', author: '김은남', publisher: '에듀윌', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+에듀윌+굴착기운전기능사' },
    { title: '2026 확! 바뀐 굴착기운전기능사 필기', author: '전국중장비교사협의회', publisher: '골든벨', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+굴착기운전기능사+골든벨' },
    { title: '2026 박문각 취밥러 굴착기운전기능사 필기', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 12510, originalPrice: 13900, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+박문각+굴착기운전기능사' },
    { title: '2026 굴착기운전기능사 필기 기출문제', author: '건설기계교육아카데미', publisher: '책과상상', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+굴착기운전기능사+기출문제' },
    // 추천수험서 5
    { title: '굴착기운전기능사 필기', author: '국가기술자격시험연구회', publisher: '구민사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=굴착기운전기능사+필기+구민사' },
    { title: '2026 굴착기운전기능사 필기+실기 완전정복', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+굴착기운전기능사+완전정복' },
    { title: '2026 Win-Q 굴착기운전기능사 필기 단기합격', author: '함성훈', publisher: '시대에듀', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+Win-Q+굴착기운전기능사' },
    { title: '2026 굴착기운전기능사 실기 코스별 요령', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=2026+굴착기운전기능사+실기' },
    { title: '2026 굴착기운전기능사 필기 핵심요약 노트', author: '전국중장비교사협의회', publisher: '골든벨', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyodobook.co.kr/search?keyword=2026+굴착기운전기능사+핵심요약' },
  ],

  '영양사': [
    { title: '2026 영양사 국가시험 핵심요약 총정리', author: '대한영양사협회 편집부', publisher: '군자출판사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 678, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+국가시험+핵심요약+2026' },
    { title: '2026 영양사 기출문제 완전분석 10개년', author: '메디시언 편집부', publisher: '메디시언', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 556, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+기출문제+완전분석+10개년+2026' },
    { title: '2026 영양사 임상영양학·영양교육학 완성', author: '고려의학 편집부', publisher: '고려의학', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+임상영양학+영양교육학+2026' },
    { title: '2026 영양사 식사요법·생애주기영양학 핵심', author: '이지현', publisher: '군자출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+식사요법+생애주기영양학+2026' },
    { title: '2026 영양사 모의고사 5회분', author: '메디시언 편집부', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+모의고사+5회분+2026' },
    { title: '2026 영양사 식품학·식품위생학 집중공략', author: '김수진', publisher: '고려의학', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+식품학+식품위생학+2026' },
    { title: '2026 영양사 단체급식관리·영양사법규 완성', author: '박재현', publisher: '군자출판사', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+단체급식관리+영양사법규+2026' },
    { title: '2026 영양사 생화학·영양생리학 핵심이론', author: '이민정', publisher: '메디시언', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+생화학+영양생리학+2026' },
    { title: '2026 영양사 벼락치기 핵심노트', author: '최은정', publisher: '군자출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+벼락치기+핵심노트+2026' },
    { title: '2026 영양사 조리원리·식품재료학 완성', author: '한국영양학회 편집부', publisher: '고려의학', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], imageUrl: null, pageUrl: 'https://search.kyobobook.co.kr/search?keyword=영양사+조리원리+식품재료학+2026' },
  ],

};
