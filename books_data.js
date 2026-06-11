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

};
