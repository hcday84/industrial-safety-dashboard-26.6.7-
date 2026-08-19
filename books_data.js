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
    { title: '2026 나합격 산업안전산업기사 필기+무료특강+온라인CBT', author: '김현우, 허선혜', publisher: '삼원북스', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9791194997054', imageUrl: KB('S000217485504'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217485504' },
    { title: '2026 에듀윌 산업안전산업기사 필기 한권끝장', author: '최창률', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223829', isbn: '9791136038937', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038937.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217542858' },
    { title: '2026 직8딴 산업안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012522858', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173490989.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218978439' },
    { title: '2026 시대에듀 기출이 답이다 산업안전산업기사 필기 10개년 기출문제집', author: '최광희', publisher: '시대고시기획', price: 30600, originalPrice: 34000, discount: '10%', rating: 5.0, reviews: 8, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012218832', imageUrl: KB('S000218473929'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218473929' },
    { title: '2026 더플러스 산업안전산업기사 필기 기출문제집 핵심이론+10개년 기출', author: '김재호', publisher: '성안당', price: 23850, originalPrice: 26500, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9788931585544', imageUrl: KB('S000219132816'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219132816' },
    // 추천수험서 5
    { title: '2026 벼락치기 산업안전산업기사 필기', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9788931713503', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713503.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218149433' },
    { title: '2026 산업안전산업기사 실기(필답형+작업형)+무료동영상+스마트북', author: '최윤정', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.9, reviews: 14, tags: ['추천'], hasEbook: false, isbn: '9791168756663', imageUrl: KB('S000218935586'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218935586' },
  ],

  // ────────────────────────────────────────
  '전기기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 전기기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 421, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223865', imageUrl: KB('S000216853109'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216853109' },
    { title: '2026 해커스 전기기사·산업기사 필기 올인원', author: '오우진', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], hasEbook: false, isbn: '9788969656346', imageUrl: KB('S000218582288'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218582288' },
    { title: '2027 나합격 전기기사 필기+무료특강+온라인CBT문제풀이', author: '임규명', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9791176400121', imageUrl: KB('S000220307364'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220307364' },
    { title: '2026 전기기사 필기 최근 10년간 기출문제', author: '이재원', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], hasEbook: false, isbn: '9791169673495', imageUrl: KB('S000218820738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218820738' },
    { title: '2026 전기기사 필기', author: '김상훈', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9791194702122', imageUrl: KB('S000217579715'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217579715' },
    // 추천수험서 5
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출문제집+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 312, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223840', imageUrl: KB('S000217555269'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217555269' },
    { title: '2026 전기기사 필기 필수기출 1200제', author: '엔지니어랩 연구소', publisher: '엔지니어랩', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 256, tags: ['추천'], hasEbook: false, isbn: '9791173490996', imageUrl: KB('S000218188325'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218188325' },
    { title: '2026 전기응용 및 공사재료', author: '김상훈', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012163222', imageUrl: KB('S000217420169'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217420169' },
    { title: '2026 전기공사기사 실기', author: '김상훈', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 167, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219138309'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219138309' },
  ],

  // ────────────────────────────────────────
  '소방안전관리자1급': [
    // 베스트셀러 5
    { title: '2027 찐합격 소방안전관리자 1급 기출문제 총집합+5개년 기출문제', author: '공하성', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9788931515213', imageUrl: KB('S000220292536'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220292536' },
    { title: '2027 박문각 소방안전관리자 1급 8개년 기출문제집+무료강의', author: '김연진', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013056466', imageUrl: KB('S000220097066'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220097066' },
    { title: '2027 박문각 소방안전관리자 1급 핵심이론서+무료특강', author: '김연진', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013046530', imageUrl: KB('S000220054046'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220054046' },
    { title: '2026 챕스랜드 소방안전관리자 1급 찐정리 원샷 이론서', author: '서채빈', publisher: '종이향기', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, isbn: '9791174910639', imageUrl: KB('S000218936176'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218936176' },
    { title: '2026 시대에듀 소방안전관리자 1급 기출예상문제집', author: '김미현', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012962765', imageUrl: KB('S000219881474'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219881474' },
    // 추천수험서 5
    { title: '2027 찐합격 소방안전관리자 1급 합격노트+8개년 기출문제', author: '공하성', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], hasEbook: false, isbn: '9788931515220', imageUrl: KB('S000220292538'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220292538' },
    { title: '2027 모아 소방안전관리자 1급 이론서 무료특강', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013372436', imageUrl: KB('S000219868621'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219868621' },
    { title: '2027 모아 소방안전관리자 1급 실전모의고사 무료특강', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013372448', imageUrl: KB('S000219868605'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219868605' },
    { title: '2026 쇼츠 소방안전관리자 1급 기출예상문제집', author: '소방안전관리자회', publisher: '서울고시각(SG P&E)', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012021419', imageUrl: KB('S000217487323'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217487323' },
    { title: '2026 챕스랜드 소방안전관리자1급 고난도 예상 기출유형 찜쪄먹기', author: '서채빈', publisher: '종이향기', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9791174910868', imageUrl: KB('S000219115299'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219115299' },
  ],

  // ────────────────────────────────────────
  '소방설비기사(기계분야)': [
    // 베스트셀러 5
    { title: '2026 찐합격 7개년 과년도 소방설비기사 필기 전기1-7', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9788931514070', imageUrl: KB('S000218276598'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218276598' },
    { title: '2026 에듀윌 소방설비기사 기계 기출문제집 필기', author: '김윤수', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9791136037473', imageUrl: KB('S000216719513'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216719513' },
    { title: '2026 체크업 소방설비기사·산업기사 기계 분야 필기', author: '김종상', publisher: '일진사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], hasEbook: false, isbn: '9791194041757', imageUrl: KB('S000218934350'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218934350' },
    { title: '2026 이것이 진짜 해설이다 소방설비기사 실기(기계) 최근 13년(26년1회까지) 기출문제 재분류집', author: '오철호', publisher: '공부한수', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.6, reviews: 3, tags: ['추천'], hasEbook: false, isbn: '9791186028582', imageUrl: KB('S000219940364'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219940364' },
    { title: '2026 찐합격 소방안전관리자 3급 기출문제 총집합', author: '공하성', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], hasEbook: false, isbn: '9788931513899', imageUrl: KB('S000219332876'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219332876' },
  ],

  '소방설비기사(전기분야)': [
    // 베스트셀러 5
    { title: '2026 대해부 7개년 기출문제 소방설비기사 전기 필기', author: '공하성', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: false, isbn: '9788931514025', imageUrl: KB('S000218839670'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218839670' },
    { title: '2026 소방설비기사 필기(전기분야)', author: '표정은', publisher: '동화기술', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, isbn: '9788927459446', imageUrl: KB('S000217529077'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217529077' },
    { title: '2026 에듀윌 소방설비기사 실기 전기+무료특강', author: '손익희', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223859', imageUrl: KB('S000219195829'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219195829' },
    { title: '2026 해커스 소방설비기사 실기 전기 한권합격 이론+최신기출+핵심노트', author: '김진성', publisher: '해커스자격증', price: 33300, originalPrice: 37000, discount: '10%', rating: 5.0, reviews: 9, tags: ['추천'], hasEbook: false, isbn: '9788969656322', imageUrl: KB('S000219084839'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219084839' },
    { title: '2026 대해부 12개년 기출문제 소방설비기사 실기 전기세트', author: '공하성', publisher: '성안당', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.4, reviews: 2, tags: ['추천'], hasEbook: false, isbn: '9788931513844', imageUrl: KB('S000219604442'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219604442' },
  ],

  // ────────────────────────────────────────
  '정보처리기사': [
    // 베스트셀러 5
    { title: '2026 시나공 정보처리기사 필기 기본서', author: '길벗알앤디', publisher: '길벗', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 892, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012126558', imageUrl: KB('S000218197628'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218197628' },
    { title: '2026 수제비 정보처리기사 필기 기본서 세트', author: '윤영빈 외', publisher: '수제비', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 645, tags: ['베스트'], hasEbook: false, isbn: '9791198881076', imageUrl: KB('S000218191062'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218191062' },
    { title: '2026 이기적 정보처리기사 필기 기본서', author: '강희영', publisher: '영진닷컴', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 521, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012329504', imageUrl: KB('S000218641525'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218641525' },
    { title: '2026 이기적 정보처리기사 필기+실기 올인원', author: '고소현', publisher: '영진닷컴', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 412, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011845197', imageUrl: KB('S000217287449'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217287449' },
    { title: '2026 수제비 정보처리기사 필기 기출문제집', author: '윤영빈 외', publisher: '수제비', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], hasEbook: false, isbn: '9791199551008', imageUrl: KB('S000218609731'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218609731' },
    // 추천수험서 5
    { title: '2026 수제비 정보처리기사 실기 기본서', author: '윤영빈 외', publisher: '수제비', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.7, reviews: 456, tags: ['추천'], hasEbook: false, isbn: '9791199551039', imageUrl: KB('S000218853684'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218853684' },
    { title: '2026 시나공 정보처리기사 실기 기본서', author: '길벗알앤디', publisher: '길벗', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 389, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012580375', imageUrl: KB('S000219186294'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219186294' },
    { title: '2026 시나공 정보처리기사 실기 기출문제집', author: '길벗알앤디', publisher: '길벗', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 312, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012523021', imageUrl: KB('S000219055682'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219055682' },
    { title: '2026 이기적 정보처리기사 필기 기출 1500제', author: '신면철', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011766403', imageUrl: KB('S000217193784'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217193784' },
    { title: '2026 이기적 정보처리기사 필기 절대족보', author: '신면철', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 198, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011766143', imageUrl: KB('S000217191918'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217191918' },
  ],

  // ────────────────────────────────────────
  '건설안전산업기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 건설안전기사 필기 기출문제집', author: '김충민', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013244076', imageUrl: KB('S000218278437'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218278437' },
    { title: '2026 직8딴 건설안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012697335', isbn: '9791173491467', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491467.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219407296' },
    { title: '2026 건설안전산업기사 필기 기출문제', author: '김응주', publisher: '책과상상', price: 22500, originalPrice: 25000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9791169673235', imageUrl: KB('S000218055110'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218055110' },
    // 추천수험서 5
    { title: '2026 건설안전산업기사 실기 필답형+작업형+무료동영상+스마트북', author: '최윤정', publisher: '구민사', price: 43200, originalPrice: 48000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791168756793', imageUrl: KB('S000219137733'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219137733' },
    { title: '2026 따다 건설안전산업기사 실기 초간단 핵심완성 필답형+작업형 세트', author: '김병진, 김희권', publisher: '예문사', price: 34200, originalPrice: 38000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788927462125', imageUrl: KB('S000219602363'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219602363' },
    { title: '2026 벼락치기 건설안전산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9788931714005', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931714005.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219648814' },
  ],

  // ────────────────────────────────────────
  '전기산업기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 전기기사·산업기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223865', imageUrl: KB('S000216853109'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216853109' },
    { title: '2026 해커스 전기기사·산업기사 필기 올인원', author: '오우진', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: false, isbn: '9788969656346', imageUrl: KB('S000218582288'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218582288' },
    { title: '2026 전기산업기사 필기', author: '김상훈', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, isbn: '9791194702139', imageUrl: KB('S000217601906'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217601906' },
    { title: '2026 전기기사 필기 필수기출 1200제', author: '엔지니어랩 연구소', publisher: '엔지니어랩', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], hasEbook: false, isbn: '9791173490996', imageUrl: KB('S000218188325'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218188325' },
    // 추천수험서 5
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223840', imageUrl: KB('S000217555269'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217555269' },
    { title: '2026 에듀윌 전기 전기산업기사 필기 7개년 기출문제집+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 5.0, reviews: 15, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223866', isbn: '9791136039002', imageUrl: KB('S000217478354'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217478354' },
    { title: '2026 전기기사 필기 최근 10년간 기출문제', author: '이재원', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], hasEbook: false, isbn: '9791169673495', imageUrl: KB('S000218820738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218820738' },
    { title: '2026 전기회로이론 필기+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013244087', imageUrl: KB('S000217252017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217252017' },
  ],

  // ────────────────────────────────────────
  '일반기계기사': [
    // 베스트셀러 5
    { title: '2026 해커스 일반기계기사 필기 한권합격 이론+최신기출', author: '이선형', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9788969656506', imageUrl: KB('S000218366558'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218366558' },
    { title: '2026 해커스 일반기계기사 실기 작업형 출제 도면집', author: '해커스자격증', publisher: '해커스자격증', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: false, isbn: '9788969656520', imageUrl: KB('S000218980950'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218980950' },
    { title: '일반기계기사 필기대비', author: '위을복', publisher: '학진북스', price: 63000, originalPrice: 70000, discount: '10%', rating: 4.6, reviews: 50, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000009734917', isbn: '9791136017611', imageUrl: KB('S000209577622'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000209577622' },
    { title: '2027 나합격 일반기계기사 필기 세트(핵심이론+13개년 기출)', author: '나합격 콘텐츠 연구소', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 1.3, reviews: 2, tags: ['베스트'], hasEbook: false, isbn: '9791176400145', imageUrl: KB('S000220308919'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220308919' },
    // 추천수험서 5
    { title: '2026 스마트 7개년 과년도 일반기계기사 필기', author: '허원회, 박만재', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012416827', isbn: '9788931512076', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931512076.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218300253' },
  ],

  // ────────────────────────────────────────
  '화공기사': [
    // 베스트셀러 5
    { title: '2026 화공기사 필기 세트', author: '정나나', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 278, tags: ['베스트'], hasEbook: false, isbn: '9788927461289', imageUrl: KB('S000219080786'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219080786' },
    { title: '2026 화공기사 기출문제집(필기)', author: '김재호', publisher: '예문사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], hasEbook: false, isbn: '9791192584126', imageUrl: KB('S000217304501'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217304501' },
    { title: '2026 시대에듀 무단뽀 화공기사 실기(필답형+작업형)', author: '최영화', publisher: '시대고시기획', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.8, reviews: 14, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012462422', isbn: '9791188883981', imageUrl: KB('S000218973159'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218973159' },
    // 추천수험서 5
    { title: '2025 정나나의 화공기사 필기 과년도 문제해설', author: '정나나', publisher: '예문사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9788927455004', imageUrl: KB('S000213942242'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213942242' },
    { title: '2026 한번에 합격하는 화공기사 기출문제집 필기', author: '화공기사연구회', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9788931585124', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585124.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218329721' },
  ],

  // ────────────────────────────────────────
  '가스기사': [
    // 베스트셀러 5
    { title: '2026 평생 무료 동영상과 함께하는 가스기사 필기', author: '서상희', publisher: '일진사', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012246310', imageUrl: KB('S000218666990'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218666990' },
    { title: '가스기사·가스산업기사 필기 총정리', author: '서상희', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], hasEbook: false, isbn: '9788942919482', imageUrl: KB('S000214202695'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214202695' },
    { title: '2026 가스산업기사 필기 기출문제집', author: '김재호', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, isbn: '9788931713688', imageUrl: KB('S000218667744'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218667744' },
    { title: '2026 나합격 가스기사 필기 핵심요약+기출', author: '이윤기', publisher: '삼원북스', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], hasEbook: false, isbn: '9791194997351', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997351.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218787649' },
    // 추천수험서 5
    { title: '2026 가스기사 실기', author: '서상희', publisher: '일진사', price: 43200, originalPrice: 48000, discount: '10%', rating: 4.7, reviews: 178, tags: ['추천'], hasEbook: false, isbn: '9788942920815', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920815.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219138942' },
    { title: '2026 가스기능사 필기 총정리', author: '서상희', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: false, isbn: '9788942920402', imageUrl: KB('S000217622875'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217622875' },
  ],

  // ────────────────────────────────────────
  '가스산업기사': [
    // 베스트셀러 5
    { title: '2026 나합격 가스산업기사 필기+실기+무료특강', author: '이윤기', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 287, tags: ['베스트'], hasEbook: false, isbn: '9791194997375', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997375.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218612948' },
    { title: '2026 가스산업기사 필기 총정리', author: '서상희', publisher: '일진사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], hasEbook: false, isbn: '9788942920549', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920549.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218197691' },
    { title: '2026 모아 가스산업기사 필기 핵심이론+과년도', author: '오민정', publisher: '모아교육그룹', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012565764', isbn: '9791168044913', imageUrl: 'https://image.aladin.co.kr/product/37897/35/coversum/k962033625_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218674588' },
    { title: '2026 나합격 가스산업기사 필기 핵심이론+8개년 기출', author: '이윤기', publisher: '삼원북스', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, isbn: '9791193858837', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193858837.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217050399' },
    { title: '2026 가스산업기사 필기 과년도 출제문제 해설', author: '서상희', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], hasEbook: false, isbn: '9788942920518', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920518.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218197693' },
    // 추천수험서 5
    { title: '2026 모아 가스산업기사 필기 빵꾸노트', author: '오민정', publisher: '모아교육그룹', price: 9900, originalPrice: 11000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9791168041950', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168041950.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000208872242' },
    { title: '2026 가스산업기사 필기 기출문제집', author: '김재호', publisher: '예문사', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], hasEbook: false, isbn: '9788931713688', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713688.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218667744' },
    { title: '2026 가스산업기사 실기', author: '서상희', publisher: '일진사', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.3, reviews: 76, tags: ['추천'], hasEbook: false, isbn: '9788942920822', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920822.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219135745' },
  ],

  // ────────────────────────────────────────
  '가스기능사': [
    // 베스트셀러 5
    { title: '2026 나합격 가스기능사 필기+실기+무료특강', author: '이윤기', publisher: '삼원북스', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9791194997436', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997436.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218732449' },
    { title: '2026 가스기능사 필기 총정리', author: '서상희', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], hasEbook: false, isbn: '9788942920402', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920402.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217622875' },
    { title: '2026 에듀윌 가스기능사 필기 2주끝장', author: '양성진', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 213, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223875', isbn: '9791136038852', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038852.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217335832' },
    { title: '2026 모아 가스기능사 필기 핵심이론+과년도 12개년', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012565414', isbn: '9791168044906', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168044906.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218629626' },
    { title: '2026 가스기능사 필기 과년도 출제문제 해설', author: '서상희', publisher: '일진사', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 154, tags: ['베스트'], hasEbook: false, isbn: '9788942921010', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942921010.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220211367' },
    // 추천수험서 5
    { title: '홍까스와 함께하는 가스기능사 필기 핵심강의노트', author: '홍경표', publisher: '에듀피디', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 132, tags: ['추천'], hasEbook: false, isbn: '9791155865668', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791155865668.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214578925' },
    { title: '2025 더플러스 가스기능사 필기 필수이론+기출문제집', author: '양용석', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788931584684', imageUrl: KB('S000215014189'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215014189' },
    { title: '2026 가스기능사실기', author: '서상희', publisher: '일진사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.3, reviews: 87, tags: ['추천'], hasEbook: false, isbn: '9788942920679', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920679.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218965392' },
    { title: '2026 Win-Q 가스기능사 필기 단기합격', author: '함성훈', publisher: '시대에듀', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 73, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011894638', isbn: '9791138398435', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138398435.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217393904' },
  ],

  // ────────────────────────────────────────
  '가스기능장': [
    // 베스트셀러 5
    { title: '2026 완벽대비 가스기능장 필기', author: '서상희', publisher: '동일출판사', price: 38000, originalPrice: 40000, discount: '5%', rating: 4.6, reviews: 145, tags: ['베스트'], hasEbook: false, isbn: '9788938117113', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117113.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217369740' },
    { title: '2026 초단기완성! 가스기능장 필기', author: '노진식', publisher: '책과상상', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 112, tags: ['베스트'], hasEbook: false, isbn: '9791169673358', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673358.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218197917' },
    { title: '단기완성 가스기능장 필기 최근 기출문제', author: '최갑규', publisher: '세진북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 98, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012591890', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157458103.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218961401' },
    { title: '가스기능장 필기 과년도 기출문제', author: '권오수 외', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 87, tags: ['베스트'], hasEbook: false, isbn: '9788927456551', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927456551.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214937258' },
    { title: '한권으로 필기와 실기를 끝내는 가스기능장', author: '최갑규', publisher: '세진북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.4, reviews: 76, tags: ['베스트'], hasEbook: false, isbn: '9791157457007', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157457007.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000215756151' },
    // 추천수험서 5
  ],

  // ────────────────────────────────────────
  '정보보안기사': [
    // 베스트셀러 5
    { title: '2026 알기사 정보보안기사(산업기사) 필기+핵심기출 1200제 세트', author: '조현준', publisher: '지안에듀', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9788966113217', imageUrl: KB('S000218322836'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218322836' },
    { title: '2026 이기적 정보보안기사 필기+실기 올인원', author: '임호진', publisher: '영진닷컴', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012160705', imageUrl: KB('S000218331600'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218331600' },
    { title: '2026 수제비 정보보안기사 필기 기본서', author: '윤영빈 외', publisher: '수제비', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012511187', imageUrl: KB('S000218353373'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218353373' },
    // 추천수험서 5
    { title: '2026 알기사 정보보안기사(산업기사) 실기', author: '정일영', publisher: '지안에듀', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012550477', imageUrl: KB('S000219083573'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219083573' },
    { title: '2026 이기적 정보보안기사 필기 기출 1400제', author: '임호진', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012566847', isbn: '9788931481310', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481310.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219186340' },
  ],

  // ────────────────────────────────────────
  '빅데이터분석기사': [
    // 베스트셀러 5
    { title: '2026 이기적 빅데이터분석기사 필기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011766262', imageUrl: KB('S000217176100'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217176100' },
    { title: '2025 이기적 빅데이터분석기사 필기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000008561548', imageUrl: KB('S000213942959'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213942959' },
    { title: '2026 에듀윌 빅데이터분석기사 필기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 267, tags: ['베스트'], hasEbook: false, isbn: '9791136041142', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136041142.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219026770' },
    { title: '2025 수제비 빅데이터분석기사 필기', author: '윤영빈 외', publisher: '수제비', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9791157678808', imageUrl: KB('S000215667184'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215667184' },
    // 추천수험서 5
    { title: '2026 이기적 빅데이터분석기사 실기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 289, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012028299', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931480344.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217937669' },
    { title: '2026 단·축·키 빅데이터 분석기사 실기 파이썬', author: '김계철', publisher: '에이아이에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 5.0, reviews: 7, tags: ['추천'], hasEbook: false, isbn: '9791199721623', imageUrl: KB('S000219882324'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219882324' },
    { title: '2024 수제비 빅데이터분석기사 실기 R+파이썬', author: '윤영빈 외', publisher: '건기원', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 8, tags: ['추천'], hasEbook: false, isbn: '9791157677917', imageUrl: KB('S000210626612'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000210626612' },
    { title: '2025 빅데이터분석기사 필기 한권완성', author: '최예신 외', publisher: '예문에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 3.2, reviews: 2, tags: ['추천'], hasEbook: false, isbn: '9791163864271', imageUrl: KB('S000215723054'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215723054' },
  ],

  // ────────────────────────────────────────
  '컴퓨터활용능력1급': [
    // 베스트셀러 5
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 기본서', author: '길벗 R&D', publisher: '길벗', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.8, reviews: 578, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011558513', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140713714.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216758898' },
    { title: '2026 이기적 컴퓨터활용능력 1급 필기 기본서', author: '홍태성', publisher: '영진닷컴', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 467, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011538509', isbn: '9788931479294', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479294.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216796744' },
    { title: '2026 한 권으로 끝내는 시나공 컴활 1급 필기+실기', author: '길벗 R&D', publisher: '길벗', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 398, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012070740', isbn: '9791140715879', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140715879.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218090665' },
    { title: '2026 이기적 컴퓨터활용능력 1급 필기+실기 올인원', author: '홍태성', publisher: '영진닷컴', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 345, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011844985', isbn: '9788931479355', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479355.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217281540' },
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 총정리', author: '길벗 R&D', publisher: '길벗', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 289, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011786943', isbn: '9791140715091', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140715091.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217153329' },
    // 추천수험서 5
    { title: '2026 시나공 컴퓨터활용능력 1급 필기 기출문제집', author: '길벗 R&D', publisher: '길벗', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 245, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012216459', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140716630.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218498075' },
    { title: '2026 에듀윌 컴퓨터활용능력 1급 필기 초단기끝장', author: '문혜영, 이상미', publisher: '에듀윌', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], hasEbook: false, isbn: '9791136037923', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136037923.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216966522' },
    { title: '2026 이기적 컴퓨터활용능력 1급 필기+실기 올인원', author: '홍태성, 박윤정', publisher: '영진닷컴', price: 36000, originalPrice: 40000, discount: '10%', rating: 5.0, reviews: 41, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011844985', isbn: '9788931479355', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479355.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217281540' },
  ],

  // ────────────────────────────────────────
  '컴퓨터활용능력2급': [
    // 베스트셀러 5
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 기본서', author: '길벗 R&D', publisher: '길벗', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.8, reviews: 634, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011558508', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140713721.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216758905' },
    { title: '2026 이기적 컴퓨터활용능력 2급 필기 기본서', author: '홍태성', publisher: '영진닷컴', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.7, reviews: 512, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011568434', isbn: '9788931479300', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479300.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216845429' },
    { title: '2026 한 권으로 끝내는 시나공 컴활 2급 필기+실기', author: '길벗 R&D', publisher: '길벗', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012070741', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140715886.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218090666' },
    { title: '2026 이기적 컴퓨터활용능력 2급 필기+실기 올인원', author: '홍태성', publisher: '영진닷컴', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011766095', isbn: '9788931479362', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479362.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217187013' },
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 총정리', author: '길벗 R&D', publisher: '길벗', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011786944', isbn: '9791140715107', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140715107.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217153337' },
    // 추천수험서 5
    { title: '2026 시나공 컴퓨터활용능력 2급 필기 기출문제집', author: '길벗 R&D', publisher: '길벗', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012216460', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140716647.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218499838' },
    { title: '2026 에듀윌 컴퓨터활용능력 2급 필기 초단기끝장', author: '이상미', publisher: '에듀윌', price: 15300, originalPrice: 17000, discount: '10%', rating: 5.0, reviews: 6, tags: ['추천'], hasEbook: false, isbn: '9791136037947', imageUrl: KB('S000216966557'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216966557' },
    { title: '2026 이기적 컴퓨터활용능력 2급 필기+실기 올인원', author: '홍태성, 박윤정', publisher: '영진닷컴', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.9, reviews: 89, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011766095', isbn: '9788931479362', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479362.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217187013' },
  ],

  // ────────────────────────────────────────
  'ADsP': [
    // 베스트셀러 5
    { title: '2026 최신개정 ADsP 데이터분석 준전문가', author: '윤종식', publisher: '데이터에듀', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012418254', isbn: '9791193672389', imageUrl: 'https://image.aladin.co.kr/product/38153/18/coversum/k852034408_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218846417' },
    { title: '이지패스 2026 ADsP 데이터분석 준전문가', author: '전용문', publisher: '위키북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012314588', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158396510.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218736039' },
    { title: '2026 이기적 ADsP 데이터분석 준전문가 이론서+기출문제', author: '임경덕', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011643326', isbn: '9788931477207', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931477207.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216858037' },
    { title: '2026 에듀윌 데이터분석 준전문가 ADsP 2주끝장', author: '윤소영', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 213, tags: ['베스트'], hasEbook: false, isbn: '9791136040121', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040121.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218881748' },
    { title: '2026 선넘는 ADsP 데이터분석 준전문가 라임북', author: '공석민', publisher: '쏠티북스', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 178, tags: ['베스트'], hasEbook: false, isbn: '9791192967363', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192967363.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219075213' },
    // 추천수험서 5
    { title: '2026 박문각 ADsP 기출원스톱 400제+무료특강', author: '육근수', publisher: '박문각', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012507926', isbn: '9791175194472', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175194472.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219001219' },
    { title: '데이터분석준전문가(ADsP) 단기완성', author: '박영식', publisher: '예문에듀', price: 25200, originalPrice: 28000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791163864998', imageUrl: KB('S000217223939'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217223939' },
  ],

  // ────────────────────────────────────────
  'SQLD': [
    // 베스트셀러 5
    { title: '2026 빠르게 따는 SQLD SQL 개발자', author: '이유성, 조영훈, 임한울', publisher: '골든래빗(주)', price: 21600, originalPrice: 24000, discount: '10%', rating: 5.0, reviews: 27, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012501751', isbn: '9791194383710', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194383710.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219025005' },
    { title: '2026 에듀윌 SQLD SQL 개발자 2주끝장+무료특강', author: '김남규', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.9, reviews: 23, tags: ['베스트'], hasEbook: false, isbn: '9791136040596', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040596.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218965390' },
    { title: '2026 이기적 SQLD SQL 개발자 기본서 이론+기출문제', author: '강태우', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.7, reviews: 87, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012028167', isbn: '9788931477849', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931477849.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217937565' },
    { title: '2027 한 권으로 끝내는 시나공 SQLD', author: '서동재', publisher: '길벗', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 21, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013301627', isbn: '9791140719457', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140719457.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220308524' },
    { title: '이지패스 2026 SQLD SQL 개발자', author: '전용문, 송영민', publisher: '위키북스', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 172, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012423706', isbn: '9791158396589', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158396589.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218962409' },
    // 추천수험서 5
    { title: '2024 국가공인 SQLD 자격검정 핵심노트', author: '조시형, 신동민, 정희락, 김경수', publisher: '디비안(주)(DBian)', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.0, reviews: 4, tags: ['추천'], hasEbook: false, isbn: '9791191941067', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191941067.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000212773783' },
    { title: 'SQL 자격검정 실전문제', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 18000, rating: 4.9, reviews: 207, tags: ['추천'], hasEbook: false, isbn: '9788988474914', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788988474914.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000212021705' },
    { title: '2026 아이리포 SQL 개발자 SQLD 모든 것', author: '조용학', publisher: '아이리포', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 65, tags: ['추천'], hasEbook: false, isbn: '9791193747094', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193747094.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218822223' },
    { title: '2026 시대에듀 유선배 SQL개발자(SQLD) 합격노트', author: '정미나', publisher: '시대고시기획', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.2, reviews: 23, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012275439', isbn: '9791143402929', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143402929.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218641284' },
  ],

  // ────────────────────────────────────────
  'SQLP': [
    // 베스트셀러 5
    { title: '2024 국가공인 SQLP 자격검정 핵심노트 1', author: '조시형', publisher: '디비안(주)(DBian)', price: 32000, tags: ['베스트'], hasEbook: false, isbn: '9791191941081', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191941081.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000213913597' },
    { title: '2024 국가공인 SQLP 자격검정 핵심노트 2', author: '조시형', publisher: '디비안(주)(DBian)', price: 32000, rating: 5.0, reviews: 4, tags: ['베스트'], hasEbook: false, isbn: '9791191941098', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191941098.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000213914864' },
    { title: 'SQL 전문가 가이드', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 50000, rating: 4.9, reviews: 32, tags: ['베스트'], hasEbook: false, isbn: '9788988474860', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788988474860.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001399869' },
    { title: 'SQL 자격검정 실전문제', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 18000, rating: 4.9, reviews: 207, tags: ['베스트'], hasEbook: false, isbn: '9788988474914', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788988474914.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000212021705' },
    { title: '친절한 SQL 튜닝', author: '조시형', publisher: '디비안(주)(DBian)', price: 34200, originalPrice: 38000, discount: '10%', rating: 5.0, reviews: 61, tags: ['베스트'], hasEbook: false, isbn: '9791196395704', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791196395704.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001975837' },
    // 추천수험서 5
    { title: '오라클 성능 고도화 원리와 해법 1', author: '조시형', publisher: '디비안(주)(DBian)', price: 39000, rating: 5.0, reviews: 17, tags: ['추천'], hasEbook: false, isbn: '9791191941043', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191941043.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000061696047' },
    { title: '데이터아키텍처 전문가 가이드', author: '한국데이터산업진흥원', publisher: '한국데이터산업진흥원', price: 50000, rating: 4.9, reviews: 32, tags: ['추천'], hasEbook: false, isbn: '9788988474877', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788988474877.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001399870' },
  ],

  // ────────────────────────────────────────
  '토목기사': [
    // 베스트셀러 5
    { title: '2026 토목기사 필기 4주완성 핵심 및 과년도', author: '이상도 외', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012305224', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547461.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218561636' },
    { title: '2026 나합격 토목기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9791194997696', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997696.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219435649' },
    { title: '2026 토목기사 필기 과년도 10개년 문제풀이', author: '채수하 외', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, isbn: '9788927462088', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927462088.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219570675' },
    // 추천수험서 5
    { title: '2026 토목기사·토목산업기사 시리즈 1: 응용역학', author: '안광호, 김창원, 염창열, 정용욱', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 5.0, reviews: 12, tags: ['추천'], hasEbook: false, isbn: '9791166547485', imageUrl: KB('S000218366537'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218366537' },
    { title: '2026 토목기사실기', author: '김태선 외', publisher: '한솔아카데미', price: 46800, originalPrice: 52000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012610039', isbn: '9791166548239', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166548239.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219061617' },
    { title: '2025 스마트 7개년 과년도 토목기사 필기', author: '박영태, 고영주, 송낙원, 송용희, 김효성 외', publisher: '성안당', price: 37800, originalPrice: 42000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788931511604', imageUrl: KB('S000214662565'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214662565' },
  ],

  // ────────────────────────────────────────
  '건축기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 건축기사 필기 한권끝장', author: '김강섭', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223873', imageUrl: KB('S000218473002'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218473002' },
    { title: '2026 에듀윌 건축기사 필기 10+2개년 기출문제집', author: '최하진', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223871', imageUrl: KB('S000218189843'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218189843' },
    { title: '2026 나합격 건축기사 필기+무료특강', author: '김해솔', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, isbn: '9791194997689', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997689.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219386027' },
    // 추천수험서 5
    { title: '2025 에듀윌 건축기사 실기 한권끝장', author: '김강섭', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9791136036575', imageUrl: KB('S000215791790'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215791790' },
    { title: '2026 건축기사 필기 The Bible 세트', author: '안광호, 백종엽, 이병억', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 45, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012207637', isbn: '9788931707526', imageUrl: KB('S000218271509'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218271509' },
    { title: '2026 시대에듀 건축기사 필기 7개년 기출문제집', author: '이문호', publisher: '시대고시기획', price: 33300, originalPrice: 37000, discount: '10%', rating: 5.0, reviews: 11, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012169675', imageUrl: KB('S000218330694'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218330694' },
  ],

  // ────────────────────────────────────────
  '산업안전기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 산업안전기사 필기 한권끝장 이론편+기출문제편', author: '최창률', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223827', imageUrl: KB('S000217541246'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217541246' },
    { title: '2026 직8딴 직접 8일 만에 딴 산업안전기사 필기', author: '김진태', publisher: '김영북스', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012495569', imageUrl: KB('S000218942319'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218942319' },
    { title: '2026 나합격 산업안전기사 필기+무료특강+온라인CBT', author: '김현우, 허선혜', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9791194997047', imageUrl: KB('S000217478393'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217478393' },
    { title: '2026 해커스 산업안전기사 필기 한권완성 이론+최신기출+핵심노트', author: '이성찬', publisher: '해커스자격증', price: 38700, originalPrice: 43000, discount: '10%', rating: 5.0, reviews: 11, tags: ['베스트'], hasEbook: false, isbn: '9788969656308', imageUrl: KB('S000217403614'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217403614' },
    // 추천수험서 5
    { title: '2026 벼락치기 산업안전기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], hasEbook: false, isbn: '9788931713930', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713930.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219388812' },
    { title: '2026 산업안전기사 실기(필답형+작업형)+무료동영상+스마트북', author: '최윤정', publisher: '구민사', price: 44100, originalPrice: 49000, discount: '10%', rating: 5.0, reviews: 24, tags: ['추천'], hasEbook: false, isbn: '9791168756649', imageUrl: KB('S000218914144'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218914144' },
    { title: '2025 산업안전기사 필기 과년도 출제문제', author: '이광수', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.9, reviews: 9, tags: ['추천'], hasEbook: false, isbn: '9788942919949', imageUrl: KB('S000215654198'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215654198' },
    { title: '2025 에듀윌 산업안전기사 실기 한권끝장 세트', author: '최창률', publisher: '에듀윌', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.3, reviews: 134, tags: ['추천'], hasEbook: false, isbn: '9791136035516', imageUrl: KB('S000214965114'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214965114' },
  ],

  '건설안전기술사': [
    // 베스트셀러 5
    { title: '건설안전기술사 실전면접', author: '한경보, Willy.H', publisher: '예문사', price: 18000, originalPrice: 20000, discount: '10%', rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: false, isbn: '9788927441137', imageUrl: KB('S000000523650'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000523650' },
    { title: '건설안전기술사 최신 기출문제 풀이', author: '이호행', publisher: '교문사', price: 69000, rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: false, isbn: '9788936327125', imageUrl: KB('S000218565187'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218565187' },
    // 추천수험서 5
  ],

  '소방기술사': [
    // 베스트셀러 5
    { title: '금화도감 소방기술사 기출문제풀이 2', author: '유쾌한', publisher: '모아교육그룹', price: 63000, originalPrice: 70000, discount: '10%', rating: 5.0, reviews: 2, tags: ['베스트'], hasEbook: false, isbn: '9791168043121', imageUrl: KB('S000214128774'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214128774' },
    // 추천수험서 5
    { title: '소방/기술사·관리사·실무자를 위한 소방·건축관계법규 화재안전성능기술기준', author: '권순택', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, isbn: '9788927462453', imageUrl: KB('S000219931270'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219931270' },
  ],

  '발송배전기술사': [
    // 베스트셀러 5
    { title: '인강으로 합격하는 발송배전기술사(상) 기출+예상문제집', author: '양재학, 김재구, 구본우, 정일재, 공영초 외', publisher: '성안당', price: 76500, originalPrice: 85000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9788931513691', imageUrl: KB('S000217018748'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217018748' },
    // 추천수험서 5
    { title: '발송배전기술사 기술계산문제해설', author: '이국찬', publisher: '엔트미디어', price: 72000, originalPrice: 80000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791192810904', imageUrl: KB('S000219545212'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219545212' },
  ],

  '전기응용기술사': [
    // 베스트셀러 5
    { title: '2026 오승용기술사의 전기응용기술사 7개년 과년도 기출문제 해설', author: '오승용', publisher: '전기박사드림', price: 81000, originalPrice: 90000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9791124543016', imageUrl: KB('S000219865017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219865017' },
    // 추천수험서 5
    { title: '2022 KEC 한국전기설비규정 관련 건축전기설비기술사 기출·예상문제집', author: '양재학, 김용운, 윤종철, 김석태', publisher: '성안당', price: 45000, originalPrice: 50000, discount: '10%', rating: 5.0, reviews: 4, tags: ['추천'], hasEbook: false, isbn: '9788931527629', imageUrl: KB('S000000557656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000557656' },
  ],

  '기계기술사': [
    // 베스트셀러 5
    { title: '건축기계설비 공조냉동기계기술사', author: '이석훈', publisher: '예문사', price: 58500, originalPrice: 65000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9788927459309', imageUrl: KB('S000217349506'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217349506' },
    { title: 'Perfect 기계기술사', author: '김순채', publisher: '엔지니어데이터넷', price: 90000, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012272074', isbn: '9791124092057', imageUrl: KB('S000218233120'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218233120' },
    // 추천수험서 5
  ],

  '화공기술사': [
    // 베스트셀러 5
    // 추천수험서 5
  ],

  '가스기술사': [
    // 베스트셀러 5
    { title: '합격Easy 가스기술사 1 - 이론 및 기출문제 완벽분석', author: '(사)한국가스기술사회', publisher: '건기원', price: 45000, originalPrice: 50000, discount: '10%', tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000008556169', imageUrl: KB('S000213862078'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213862078' },
    // 추천수험서 5
  ],

  '정보관리기술사': [
    // 베스트셀러 5
    // 추천수험서 5
    { title: '정보관리기술사 & 컴퓨터시스템응용기술사 8: 데이터베이스', author: '권영식', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 5.0, reviews: 6, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000003079925', isbn: '9788931555028', imageUrl: KB('S000000559796'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000559796' },
    { title: '정보관리기술사&컴퓨터시스템응용기술사 5: 소프트웨어 공학', author: '권영식', publisher: '성안당', price: 49500, originalPrice: 55000, discount: '10%', rating: 5.0, reviews: 2, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005902310', imageUrl: KB('S000211901156'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000211901156' },
  ],

  '컴퓨터시스템응용기술사': [
    // 베스트셀러 5
    // 추천수험서 5
  ],

  '토목기술사': [
    // 베스트셀러 5
    { title: '토목시공기술사 실전면접문제해설', author: '류재복', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9788982547034', imageUrl: KB('S000001273774'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001273774' },
    { title: '고득점자와 함께하는 21세기 토목시공기술사 고득점 기출문제 1, 2', author: '신경수, 김재권, 조준호', publisher: '예문사', price: 58500, originalPrice: 65000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9788927462804', imageUrl: KB('S000220716870'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220716870' },
    // 추천수험서 5
  ],

  // ────────────────────────────────────────
  '간호사': [
    // 베스트셀러 5
    { title: '2027 시대에듀 간호사 국가고시 기출동형 문제집', author: '강경순', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013123494', isbn: '9791143415530', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143415530.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220119482' },
    // 추천수험서 5
    { title: '2027 퍼시픽 간호사 국시대비 문제집 1: 성인간호학(1)', author: '퍼시픽 학술편찬국', publisher: '퍼시픽북스', price: 20700, originalPrice: 23000, discount: '10%', rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, isbn: '9791194995234', imageUrl: KB('S000219490586'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219490586' },
    { title: '2027 퍼시픽 간호사 국시대비 문제집 7: 간호관리학', author: '퍼시픽 학술편찬국', publisher: '퍼시픽북스', price: 18900, originalPrice: 21000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791194995296', imageUrl: KB('S000219490593'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219490593' },
    { title: '2027 퍼시픽 간호사 국시대비 문제집 6: 정신간호학', author: '퍼시픽 학술편찬국', publisher: '퍼시픽북스', price: 20700, originalPrice: 23000, discount: '10%', rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, isbn: '9791194995289', imageUrl: KB('S000219490589'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219490589' },
    { title: '2027 퍼시픽 간호사 국시대비 문제집 5: 지역사회간호학', author: '퍼시픽 학술편찬국', publisher: '퍼시픽북스', price: 20700, originalPrice: 23000, discount: '10%', rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, isbn: '9791194995272', imageUrl: KB('S000219490583'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219490583' },
    { title: '2027 간호사 국시를 위한 보건의약관계법규 알Zip 핵심노트', author: '김희영', publisher: '마지원', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.5, reviews: 412, tags: ['추천'], hasEbook: false, isbn: '9791124295137', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124295137.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220271667' },
  ],

  // ────────────────────────────────────────
  '임상병리사': [
    // 베스트셀러 5
    { title: '임상화학 핵심정리 및 문제해설', author: '박화진', publisher: '범문에듀케이션', price: 45000, rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: false, isbn: '9791159433412', imageUrl: KB('S000200051910'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200051910' },
    { title: '임상미생물학실습', author: '한국임상병리학과 미생물학 연구회', publisher: '고려의학', price: 41000, tags: ['베스트'], hasEbook: false, isbn: '9791192422763', imageUrl: KB('S000217005821'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217005821' },
    // 추천수험서 5
    { title: '임상생리학 최신경향 문제', author: '한국임상생리학연구회', publisher: '고려의학', price: 38000, rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, isbn: '9791124381038', imageUrl: KB('S000219570701'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219570701' },
    { title: '요화학 및 체액검사', author: 'Lillian Mundt, Kristy Shanahan', publisher: '범문에듀케이션', price: 35000, tags: ['추천'], hasEbook: false, isbn: '9791159431043', imageUrl: KB('S000001778450'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001778450' },
  ],

  // ────────────────────────────────────────
  '방사선사': [
    // 베스트셀러 5
    { title: '디지털 의료 영상학', author: '김선칠 외', publisher: '메디컬사이언스', price: 35000, tags: ['베스트'], hasEbook: false, isbn: '9791189487980', imageUrl: KB('S000001927327'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001927327' },
    { title: '임상 핵의학검사기술학', author: '서일택 외', publisher: '고려의학', price: 35000, tags: ['베스트'], hasEbook: false, isbn: '9791189210229', imageUrl: KB('S000001924284'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001924284' },
    // 추천수험서 5
    { title: '핵심방사선생물학', author: '구연화 외', publisher: 'JMK', price: 25000, tags: ['추천'], hasEbook: false, isbn: '9791185210377', imageUrl: KB('S000001864086'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001864086' },
  ],

  // ────────────────────────────────────────
  '물리치료사': [
    // 베스트셀러 5
    { title: '물리치료사 국가시험 예상문제집(실기편)(2014)', author: '대학서림 편집부', publisher: '대학서림', price: 20000, tags: ['베스트'], hasEbook: false, isbn: '9788969400550', imageUrl: KB('S000001062761'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001062761' },
    { title: '물리치료사되기', author: '안소윤', publisher: '학지사메디컬', price: 14000, rating: 5.0, reviews: 11, tags: ['베스트'], hasEbook: false, isbn: '9788960697539', imageUrl: KB('S000000933285'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000933285' },
    { title: '최신 근골격계 물리치료 중재학', author: '하성민 외', publisher: '학지사메디컬', price: 50000, tags: ['베스트'], hasEbook: false, isbn: '9791175310339', imageUrl: KB('S000219604982'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219604982' },
    { title: '신경계 물리치료학', author: '김종만', publisher: '범문에듀케이션', price: 48000, tags: ['베스트'], hasEbook: false, isbn: '9791159435171', imageUrl: KB('S000219212157'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219212157' },
    { title: '퍼시픽 물리치료학 개념서 2: 물리적 인자치료(2021)', author: '퍼시픽북스 학술편찬국', publisher: '퍼시픽북스', price: 18000, tags: ['베스트'], hasEbook: false, isbn: '9791163752431', imageUrl: KB('S000001823101'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001823101' },
    // 추천수험서 5
  ],

  // ────────────────────────────────────────
  '응급구조사1급': [
    // 베스트셀러 5
    { title: '응급구조사 1급 국가시험예상문제집(2014)', author: 'JMK 편집부', publisher: 'JMK', price: 29000, tags: ['베스트'], hasEbook: false, isbn: '9788985210058', imageUrl: KB('S000001333093'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001333093' },
    { title: '2027 해커스소방 심규식 응급처치학개론 기본서 1: 총론', author: '심규식', publisher: '해커스소방', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.7, reviews: 12, tags: ['베스트'], hasEbook: false, isbn: '9791176440936', imageUrl: KB('S000219975317'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219975317' },
    // 추천수험서 5
    { title: '전투외상 응급처치', author: '데루이 모토키', publisher: '호비스트', price: 15000, rating: 5.0, reviews: 15, tags: ['추천'], hasEbook: false, isbn: '9788985578707', imageUrl: KB('S000001343044'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001343044' },
  ],

  // ────────────────────────────────────────
  '치과위생사': [
    // 베스트셀러 5
    // 추천수험서 5
    { title: '임상치위생학실습', author: '임상치위생학실습 편집위원회', publisher: '청구문화사', price: 40000, rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, isbn: '9788956168661', imageUrl: KB('S000000817220'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000817220' },
  ],

  '간호조무사': [
    { title: '간호조무사 국가시험 과목별 문제은행', author: '간호조무사 학술연구회', publisher: '라이프사이언스', price: 29000, tags: ['베스트'], hasEbook: false, isbn: '9788961544764', imageUrl: KB('S000217114056'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217114056' },
    { title: '2026 간호조무사 단기완성 핵심이론+예상문제', author: '타임 간호조무사 연구소', publisher: '시스컴', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012154060', isbn: '9791169417679', imageUrl: KB('S000218135453'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218135453' },
    { title: '간호조무사 국가시험문제집', author: '은하출판사 편집부', publisher: '은하출판사', price: 28800, originalPrice: 32000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9788931686289', imageUrl: KB('S000219521403'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219521403' },
    { title: '2026 박문각 간호조무사 만점왕 합격모의고사+무료특강', author: '박지혜', publisher: '박문각', price: 17100, originalPrice: 19000, discount: '10%', tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012507982', isbn: '9791197473906', imageUrl: KB('S000219015666'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219015666' },
    { title: '2026 간호조무사 최종모의고사 10회', author: '간호조무사출제연구회', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788940650813', imageUrl: KB('S000219470280'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219470280' },
    { title: '2023 Win-Q 간호조무사 단기합격', author: '박문귀', publisher: '시대고시기획', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.3, reviews: 11, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005044683', isbn: '9791138337489', imageUrl: KB('S000200236698'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200236698' },
    { title: '2026 에듀윌 간호조무사 실제 동형 모의고사 10회분', author: '윤영지', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 5.0, reviews: 37, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223828', isbn: '9791136043214', imageUrl: KB('S000218732558'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218732558' },
    { title: '공중보건학 개론', author: '간호조무사 학술연구회', publisher: '라이프사이언스', price: 14000, tags: ['추천'], hasEbook: false, isbn: '9788961544740', imageUrl: KB('S000217114022'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217114022' },
  ],

  '작업치료사': [
    { title: '2026 시대에듀 작업치료사 최종모의고사', author: '최봉근, 박한글', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013252247', isbn: '9788995300022', imageUrl: KB('S000220363388'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220363388' },
    { title: '2026 시대에듀 작업치료사 최종모의고사', author: '최봉근, 박한글', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013252247', imageUrl: KB('S000220363388'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220363388' },
    { title: '2024 작업치료 문제집 9: 그림 실기형 문제', author: '작업치료 국시연구회', publisher: '퍼시픽북스', price: 19950, originalPrice: 21000, discount: '5%', tags: ['추천'], hasEbook: false, isbn: '9791163754657', imageUrl: KB('S000213096777'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213096777' },
  ],

  '응급구조사2급': [
  ],

  '요양보호사': [
    { title: '2026 한권으로 합격하는 요양보호사 최종모의고사 10회', author: '심은주', publisher: '크라운출판사', price: 14400, originalPrice: 16000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9788940649718', imageUrl: KB('S000218476855'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218476855' },
    { title: '2025 요양보호사 표준교재 핵심요약', author: '요양보호사 학술연구회', publisher: '사람과경영', price: 12000, tags: ['베스트'], hasEbook: false, isbn: '9788998581640', imageUrl: KB('S000215097955'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215097955' },
    { title: '2026 20회로 끝내는 요양보호사 합격마침표 모의고사 필기+실기', author: '자격시험연구소', publisher: '서원각', price: 16200, originalPrice: 18000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9791125748021', imageUrl: KB('S000219787325'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219787325' },
    { title: '2026 원큐패스 클립 준희쌤의 요양보호사 적중모의고사 7회', author: '조준희', publisher: '다락원', price: 13500, originalPrice: 15000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9788927775881', imageUrl: KB('S000220100431'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220100431' },
    { title: '2026 원큐패스 클립 준희쌤의 요양보호사 핵심 합격노트', author: '조준희', publisher: '다락원', price: 13500, originalPrice: 15000, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9788927775874', imageUrl: KB('S000220100230'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220100230' },
    { title: '2026 원큐패스 요양보호사 필기 실기 핵심 총정리', author: '박지원', publisher: '다락원', price: 20700, originalPrice: 23000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788927775522', imageUrl: KB('S000219079784'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219079784' },
  ],

  '보건의료정보관리사': [
    { title: '의무기록정보학 실전문제', author: '아카데미아 편집국', publisher: '아카데미아', price: 25000, tags: ['베스트'], hasEbook: false, isbn: '9788959384211', imageUrl: KB('S000000896710'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000896710' },
    { title: '의무기록사 시험 합격을 위한 의학용어 암기법: 순환계와 근골계', author: '의학수험연구회', publisher: '수학연구사', price: 17550, originalPrice: 19500, discount: '10%', tags: ['베스트'], hasEbook: false, isbn: '9791191036626', imageUrl: KB('S000001947337'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001947337' },
  ],

  '보건교육사': [
    { title: '에센스 보건교육학', author: '남철현 외', publisher: '메디시언', price: 18000, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000007592207', isbn: '9791190839457', imageUrl: KB('S000001944678'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001944678' },
    { title: '보건의사소통 핵심문제집', author: '보건의사소통핵심문제연구회, 노성신', publisher: '한미의학', price: 18000, tags: ['추천'], hasEbook: false, isbn: '9791186089095', imageUrl: KB('S000001878901'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001878901' },
  ],

  '위생사': [
    { title: '문운당 위생사 필기', author: '한국식품영양학회', publisher: '문운당', price: 47000, tags: ['베스트'], hasEbook: false, isbn: '9791156928393', imageUrl: KB('S000219745110'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219745110' },
    { title: '2026 시대에듀 위생사 한권으로 끝내기', author: '국민건강교육학회', publisher: '시대고시기획', price: 37800, originalPrice: 42000, discount: '10%', rating: 5.0, reviews: 11, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012704553', isbn: '9791143410191', imageUrl: KB('S000219411769'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219411769' },
    { title: '공중보건학문제집', author: '강병우', publisher: '청구문화사', price: 28000, tags: ['베스트'], hasEbook: false, isbn: '9788956166704', imageUrl: KB('S000000817035'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000817035' },
    { title: '2026 시대에듀 위생사 최종모의고사', author: '국민건강교육학회', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 5.0, reviews: 7, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012873677', imageUrl: KB('S000219681339'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219681339' },
    { title: '최신 식품위생관계법규', author: '한국식품영양학회', publisher: '문운당', price: 33000, tags: ['추천'], hasEbook: false, isbn: '9791156928553', imageUrl: KB('S000220783242'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220783242' },
  ],


  '토목산업기사': [
    { title: '2026 토목산업기사 4주완성 8개년 과년도 문제해설', author: '이상도, 정경동, 고길용, 안광호 외', publisher: '한솔아카데미', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012411400', isbn: '9791166547478', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547478.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218686163' },
    { title: '2026 토목설계 물량산출 도면작도 토목산업기사 실기시험 대비', author: '한성천', publisher: '금호출판사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], hasEbook: false, isbn: '9788998269081', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788998269081.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001629659' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 4: 철근콘크리트 및 강구조', author: '고영주', publisher: '성안당', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], hasEbook: false, isbn: '9788931511642', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511642.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214176495' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 5: 토질 및 기초', author: '박영태', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], hasEbook: false, isbn: '9788931511659', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511659.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214145834' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 2: 측량학', author: '송낙원, 송용희', publisher: '성안당', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9788931511628', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511628.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214176428' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 6: 상하수도공학', author: '박재성', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9788931511666', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511666.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214145837' },
    { title: '2025 토목기사/토목산업기사 대비 핵심시리즈 3: 수리수문학', author: '박영태', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: false, isbn: '9788931511635', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931511635.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214145833' },
    { title: '철도토목기사.산업기사 필기.실기 합격 바이블', author: '정대호, 정찬묵, 배석복', publisher: 'CIR', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000002918684', isbn: '9791156109501', imageUrl: 'https://image.aladin.co.kr/product/26895/63/coversum/k602730508_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001734958' },
  ],

  '건축산업기사': [
    { title: '2026 건축산업기사 필기 4주완성', author: '남재호, 송우용', publisher: '한솔아카데미', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012408612', isbn: '9791166547416', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547416.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218686161' },
    { title: '2026 건축산업기사 필기 7개년 필기 경향문제', author: '한솔아카데미 수험연구회', publisher: '한솔아카데미', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012583744', isbn: '9791166548307', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166548307.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219020066' },
    { title: '2026 건축산업기사 실기 The Bible', author: '안광호, 백종엽, 이병억', publisher: '한솔아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012682558', isbn: '9791166548420', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166548420.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219061141' },
    { title: '2027 하이패스 건축산업기사 필기 기출문제집', author: '안남식', publisher: '서울고시각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], hasEbook: false, isbn: '9788952653369', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788952653369.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220111540' },
    { title: '2025 미듬 건축산업기사 실기 1·2', author: '임근재', publisher: '멘토스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], hasEbook: false, isbn: '9791193772041', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193772041.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000215746177' },
    { title: '2026 스마트 실내건축산업기사 작업형 실기', author: '황두환', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 5.0, reviews: 2, tags: ['추천'], hasEbook: false, isbn: '9788931512427', imageUrl: KB('S000219559493'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219559493' },
    { title: 'No. 1건축산업기사 핵심이론 및 문제해설(2016)', author: '김선호, 정지현, 김중철', publisher: '예문사', price: 24300, originalPrice: 27000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788927425311', imageUrl: KB('S000000522356'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000522356' },
    { title: '이패스 실내건축기사(산업기사) 실기 작업형', author: '강덕진', publisher: '이패스코리아', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.0, reviews: 6, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013125531', imageUrl: KB('S000220161851'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220161851' },
    { title: '2026 건축산업기사 실기', author: '안광호, 백종엽, 이병억', publisher: '한솔아카데미', price: 27000, originalPrice: 30000, discount: '10%', rating: 5.0, reviews: 6, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012682558', imageUrl: KB('S000219061141'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219061141' },
    { title: '2026 실전단기완성 건축설비산업기사 실기', author: '조성안', publisher: '기문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 3.8, reviews: 1, tags: ['추천'], hasEbook: false, isbn: '9791194568483', imageUrl: KB('S000219976107'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219976107' },
  ],

  '실내건축기사': [
    { title: '2026 실내건축기사 4주완성 세트 - 전2권', author: '남재호', publisher: '한솔아카데미', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012483247', isbn: '9791166548017', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166548017.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218840726' },
    { title: '2027 나합격 실내건축기사 필기[핵심이론+17개년 기출]', author: '김수진', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9791194997726', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997726.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219469212' },
    { title: '2026 실내건축기사 필기 - 전2권', author: '유희정, 이석훈', publisher: '예문사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], hasEbook: false, isbn: '9788927459477', imageUrl: 'https://image.aladin.co.kr/product/37276/66/coversum/8927459474_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217627988' },
    { title: '2027 스마트 실내건축기사 시공실무 필답형 실기', author: '김태민, 전명숙', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9788931512502', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931512502.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220273012' },
    { title: '최신판 이패스 실내건축기사(산업기사) 실기 작업형', author: '강덕진', publisher: '이패스코리아', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013125531', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172095109.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220161851' },
    { title: '2026 실내건축기사 실기 시공실무', author: '한석우', publisher: '이패스코리아', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012432623', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172093181.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218854263' },
    { title: '2025 실내건축기사 필기 문제해설', author: '이상화', publisher: '엔플북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], hasEbook: false, isbn: '9788968134173', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788968134173.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214560511' },
    { title: '2026 스마트 실내건축산업기사 작업형 실기', author: '황두환', publisher: '성안당', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931512427.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219559493' },
    { title: '2026 실내건축기사 필기', author: '강혜진, 한석우', publisher: '이패스코리아', price: 38700, originalPrice: 43000, discount: '10%', rating: 2.5, reviews: 2, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012874625', isbn: '9791125489214', imageUrl: KB('S000218238127'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218238127' },
  ],

  '조경기사': [
    { title: '2026 조경기사.산업기사 필기 단기완성', author: '이윤진', publisher: '한솔아카데미', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012456890', imageUrl: 'https://image.aladin.co.kr/product/37955/12/coversum/k522033657_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218741986' },
    { title: '2026 시대에듀 조경기사·산업기사 필기 한권으로 합격하기', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012329246', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143404251.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218736592' },
    { title: '2026 조경기사·조경산업기사 실기 필답형·작업형', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: false, isbn: '9791166548901', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166548901.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219882209' },
    { title: 'Conquest 조경기사·조경산업기사 실기정복 - 개정15판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160280333.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219457023' },
    { title: '2026 시대에듀 조경기사 필기 기출문제집', author: '최평희', publisher: '시대에듀', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012548874', isbn: '9791143409058', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143409058.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219083930' },
    { title: '2026 시대에듀 조경기사·산업기사 실기 한권으로 끝내기', author: '이우설', publisher: '시대에듀', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.6, reviews: 223, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012625604', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143406606.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219248793' },
    { title: '최신개정판 Conquest 조경기사.조경산업기사 필기정복 - 개정13판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], hasEbook: false, isbn: '9791160280326', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160280326.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219513850' },
    { title: '202X 조경기사 필기 - 서양조경사 계보 수록', author: '구민아', publisher: '구민사', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: false, isbn: '9791168756687', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756687.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219060965' },
  ],

  '조경산업기사': [
    { title: '2026 조경기사.산업기사 필기 단기완성', author: '이윤진', publisher: '한솔아카데미', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012456890', imageUrl: 'https://image.aladin.co.kr/product/37955/12/coversum/k522033657_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218741986' },
    { title: '2026 시대에듀 조경기사·산업기사 필기 한권으로 합격하기', author: '홍석윤', publisher: '시대에듀', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012329246', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143404251.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218736592' },
    { title: '2026 조경기사·조경산업기사 실기 필답형·작업형', author: '이윤진', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], hasEbook: false, isbn: '9791166548901', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166548901.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219882209' },
    { title: '202X 조경산업기사 필기 - 서양조경사 계보 수록', author: '구민아', publisher: '구민사', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], hasEbook: false, isbn: '9791168756694', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756694.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218934567' },
    { title: 'Conquest 조경기사·조경산업기사 실기정복 - 개정15판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], hasEbook: false, isbn: '9791160280333', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160280333.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219457023' },
    { title: '2026 시대에듀 조경기사·산업기사 실기 한권으로 끝내기', author: '이우설', publisher: '시대에듀', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012625604', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143406606.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219248793' },
    { title: '최신개정판 Conquest 조경기사.조경산업기사 필기정복 - 개정13판', author: '성운환경조경, 김진호', publisher: '도서출판조경', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: false, isbn: '9791160280326', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160280326.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219513850' },
    { title: '조경산업기사 필기시험문제', author: '임권희', publisher: '크라운출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], hasEbook: false, isbn: '9788940623619', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940623619.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000000642472' },
    { title: '조경기사산업기사 실기', author: '김진성', publisher: '엔플북스', price: 34200, originalPrice: 38000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788968134234', imageUrl: KB('S000216701446'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216701446' },
  ],

  '조경기능사': [
    { title: '2026 나합격 조경기능사 필기+무료특강', author: '조은정', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: false, isbn: '9791199411531', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791199411531.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217298551' },
    { title: '2026 에듀윌 조경기능사 필기 2주끝장', author: '구태익', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], hasEbook: false, isbn: '9791136039361', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039361.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217586585' },
    { title: '2026 조경기능사 필기 초단기 합격', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '지식오름', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9791174910233', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174910233.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218235764' },
    { title: '2026 시대에듀 조경기능사 필기 한권으로 끝내기', author: '최광희', publisher: '시대에듀', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], hasEbook: false, isbn: '9791143400369', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143400369.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218134412' },
    { title: '2026 조경기능사 필기', author: '정용민, 오도정', publisher: '예문사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9788927458753', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927458753.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216810814' },
    { title: '2026 시대에듀 조경기능사 필기 기출문제집', author: '최광희', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011893927', isbn: '9791138397803', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138397803.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217393877' },
    { title: '2026 조경기능사 실기 초단기 합격', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '지식오름', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], hasEbook: false, isbn: '9791174910035', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174910035.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217221992' },
    { title: '2026 조경기능사 실기', author: '박경옥 외', publisher: '부민문화사', price: 25000, rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012426424', imageUrl: KB('S000218960820'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218960820' },
    { title: 'NCS기반 단기완성 조경기능사 필기(2021)', author: 'NCS조경시험연구회', publisher: '피앤피북', price: 24300, originalPrice: 27000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791191188073', imageUrl: KB('S000001948769'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001948769' },
  ],

  '측량및지형공간정보기사': [
    { title: '2026 PASS 측량 및 지형공간정보기사 필기 - 전2권', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], hasEbook: false, isbn: '9788927460909', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460909.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218846929' },
    { title: '2026 측량 및 지형공간정보기사 필기+핸드북', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9791168756144', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756144.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218031350' },
    { title: '2026 PASS 측량 및 지형공간정보기사 실기', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], hasEbook: false, isbn: '9788927460862', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460862.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218846927' },
    { title: '2026 측량 및 지형공간정보기사 실기', author: '이영욱, 이영수, 최병윤, 김도균', publisher: '구민사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9791168756618', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756618.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218918193' },
    { title: '2026 PASS 측량 및 지형공간정보기사 필기 과년도+CBT 모의고사', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460749.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218821405' },
    { title: '2025 측량 및 지형공간정보기사 과년도', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: false, isbn: '9791168754980', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168754980.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000215579619' },
    { title: '2026 PASS 측량 및 지형공간정보산업기사 필기 과년도+CBT 모의고사', author: '이혜진, 김민승, 송용희, 박동규', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], hasEbook: false, isbn: '9788927458944', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927458944.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217012765' },
    { title: '2026 측량 및 지형공간정보산업기사 필기', author: '이영수, 김도균, 안재현, 김용현, 오건호', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], hasEbook: false, isbn: '9791168756397', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756397.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218685666' },
    { title: 'Win-Q 측량 및 지형공간정보기사 필기 단기완성(2021)', author: '김명배', publisher: '시대고시기획', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 6, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000002888218', imageUrl: KB('S000001657067'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001657067' },
  ],

  '콘크리트기능사': [
    { title: '2026 CBT 대비 콘크리트기능사 필기+실기 3주 완성', author: '고길용, 염창열, 전지현', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012550958', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547737.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218233643' },
    { title: '2026 시대에듀 Win-Q 콘크리트기능사 필기+실기 단기합격', author: '최광희', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012218835', isbn: '9791143401779', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143401779.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218473933' },
    { title: '2026 콘크리트기능사 필기+실기 한권 완성', author: '이관석', publisher: '예문사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9788927459033', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927459033.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217067619' },
    { title: '2026 콘크리트 기능사 필기 및 실기', author: '김영국, 박종삼', publisher: '금호', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], hasEbook: false, isbn: '9791192089324', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089324.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218203396' },
    { title: '2025 콘크리트기능사 필기 실기 - 개정증보 제20판', author: '박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9791192089232', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089232.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214506873' },
    { title: '2024 콘크리트 기능사 필기', author: '박종삼', publisher: '금호출판사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9791192089225', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089225.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000212390214' },
  ],

  '측량기능사': [
    { title: '2026 CBT대비 측량기능사 필기 + 실기 3주완성', author: '염창열, 정병노, 고길용', publisher: '한솔아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012457275', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547591.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217478001' },
    { title: '2026 측량기능사 필기＋실기 한권 완성', author: '이영수, 김문기, 오건호', publisher: '예문사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 345, tags: ['베스트'], hasEbook: false, isbn: '9788927460466', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460466.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218641242' },
    { title: '2026 PASS 측량기능사 필기+실기', author: '박종해, 김민승, 민미란, 박동규', publisher: '예문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], hasEbook: false, isbn: '9788927461562', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927461562.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219212328' },
    { title: '2026 시대에듀 Win-Q 측량기능사 필기 단기합격', author: '최광희', publisher: '시대에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011690051', isbn: '9791138396066', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138396066.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216986171' },
    { title: '2026 측량기능사 필기 및 실기', author: '김영국, 박종삼', publisher: '금호출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], hasEbook: false, isbn: '9791192089348', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089348.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218437185' },
    { title: '단기완성 측량기능사 필기 및 실기', author: '송용희', publisher: '지적EDU', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: false, isbn: '9791187997665', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791187997665.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214895621' },
    { title: '2024 측량기능사 필기 이론 및 문제해설', author: '박종삼', publisher: '금호출판사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], hasEbook: false, isbn: '9791192089201', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089201.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000211621667' },
  ],

  '건설재료시험기능사': [
    { title: '2026 건설재료시험기능사 필기 및 실기', author: '박종삼', publisher: '금호출판사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013363640', isbn: '9791192089300', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089300.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217411472' },
    { title: '2026 시대에듀 Win-Q 건설재료시험기능사 필기 단기합격', author: '최광희', publisher: '시대고시기획', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011854954', isbn: '9791138397841', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138397841.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217304240' },
    { title: '2026 건설재료시험기능사 실기', author: '박종삼', publisher: '금호출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 223, tags: ['베스트'], hasEbook: false, isbn: '9791192089331', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192089331.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218203407' },
  ],

  '건설안전기사': [
    { title: '2027 나합격 건설안전기사 필기 + 무료특강', author: '김현우, 허선혜', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], hasEbook: false, isbn: '9791194997948', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997948.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219514820' },
    { title: '2026 에듀윌 건설안전기사 필기 기출문제집', author: '김충민, 최석훈', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 445, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013244076', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039873.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218278437' },
    { title: '2026 에듀윌 건설안전기사 실기 기출문제집', author: '최석훈, 김충민', publisher: '에듀윌', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013244077', isbn: '9791136041180', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136041180.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219026755' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 건설안전기사 실기', author: '김진태', publisher: '김영북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012679492', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491399.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219349389' },
    { title: '2026 건설안전기사 실기', author: '정재수', publisher: '세화', price: 40500, originalPrice: 45000, discount: '10%', rating: 5.0, reviews: 3, tags: ['베스트'], hasEbook: false, isbn: '9788931713732', imageUrl: KB('S000218787435'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218787435' },
    { title: '모아 건설안전기사 필기', author: '윤경화', publisher: '모아교육그룹', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 223, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013372304', isbn: '9791168045873', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045873.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219601573' },
    { title: '모아 건설안전기사 실기', author: '윤경화', publisher: '모아교육그룹', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013372538', isbn: '9791168045996', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045996.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219926360' },
    { title: '2026 벼락치기 건설안전기사 필기 요점', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: false, isbn: '9788931713954', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713954.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219564277' },
    { title: '2026 한번에 합격하는 건설안전기사 기출문제집 필기', author: '강윤진', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 5.0, reviews: 9, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012691543', imageUrl: KB('S000218749521'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218749521' },
    { title: '건설안전기사.산업기사(과년도단기완성)', author: '최창률 편', publisher: '세문사', price: 17000, tags: ['추천'], hasEbook: false, isbn: '9788987342429', imageUrl: KB('S000001379061'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001379061' },
  ],

  '소방설비산업기사(기계분야)': [
    { title: '2026 찐합격 소방설비산업기사 필기 (기계 ③)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.8, reviews: 489, tags: ['베스트'], hasEbook: false, isbn: '9788931514131', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514131.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218740026' },
    { title: '2026 찐합격 소방설비산업기사 실기 (기계⑥)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: false, isbn: '9788931514162', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514162.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219186166' },
    { title: '2026 찐합격 7개년 과년도 소방설비산업기사 필기 (기계 ③-7)', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], hasEbook: false, isbn: '9788931514193', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514193.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218740032' },
    { title: '2026 소방설비산업기사 필기 기출문제 (기계편)', author: '강석민', publisher: '세진북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 156, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012141066', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157457366.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218191533' },
    { title: '2022 단기완성 소방설비산업기사 실기 + 무료 동영상 강의: 기계편', author: '정진홍, 김명희', publisher: '세진북스', price: 36000, originalPrice: 40000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791157455232', imageUrl: KB('S000001754721'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001754721' },
  ],

  '소방설비산업기사(전기분야)': [
    { title: '2026 소방설비산업기사 필기 전기 3', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: false, isbn: '9788931514032', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514032.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218735475' },
    { title: '2026 찐합격 소방설비산업기사 실기 (전기⑥)', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], hasEbook: false, isbn: '9788931514063', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514063.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219132850' },
    { title: '2026 찐합격 7개년 과년도 소방설비산업기사 필기 (전기 ③-7)', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], hasEbook: false, isbn: '9788931514094', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514094.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218728792' },
    { title: '2026 초격차 소방설비산업기사 과년도 7개년 실기 전기', author: '황모아, 오민정', publisher: '모아교육그룹', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012524667', isbn: '9791168045187', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045187.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218791112' },
    { title: '2026 평생 무료 동영상과 함께하는 소방설비산업기사 필기 최근 기출문제(전기편)', author: '강석민, 정진홍', publisher: '세진북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012141068', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157457373.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218191535' },
  ],

  '소방시설관리사': [
    { title: '2027 버닝 업 소방시설관리사 필기 1차 세트', author: '황모아, 윤연호, 모성은 외', publisher: '모아교육그룹', price: 108000, originalPrice: 120000, discount: '10%', rating: 4.8, reviews: 334, tags: ['베스트'], hasEbook: false, isbn: '9791168046214', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168046214.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220119529' },
    { title: '2026 찐합격 31년 과년도 소방시설관리사 1차', author: '공하성', publisher: '성안당', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.8, reviews: 289, tags: ['베스트'], hasEbook: false, isbn: '9788931513943', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931513943.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218400484' },
    { title: '2026 찐합격 600제 소방시설관리사 2차', author: '공하성', publisher: '성안당', price: 72000, originalPrice: 80000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], hasEbook: false, isbn: '9788931513240', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931513240.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219799930' },
    { title: '2027 버닝 업 소방시설관리사 필기 1차 전과목 과년도', author: '황모아, 윤연호, 모성은 외', publisher: '모아교육그룹', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.7, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013374989', isbn: '9791168046269', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168046269.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220119536' },
    { title: '2026 엔드 업 소방시설관리사 만제: 점검실무행정', author: '함형덕', publisher: '모아교육그룹', price: 51300, originalPrice: 57000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012730760', isbn: '9791168045095', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045095.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218918418' },
    { title: '2026 엔드 업 소방시설관리사 만제: 설계 및 시공', author: '함형덕', publisher: '모아교육그룹', price: 51300, originalPrice: 57000, discount: '10%', rating: 4.6, reviews: 145, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012730742', isbn: '9791168045101', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045101.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218918413' },
    { title: '뇌박힘 소방시설관리사 점검실무행정', author: '김정희', publisher: '모아교육그룹', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 123, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000010903232', isbn: '9791168045545', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045545.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219194908' },
    { title: '2026 체크업 소방시설관리사 2차 실기', author: '김종상', publisher: '북스케치', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 98, tags: ['추천'], hasEbook: false, isbn: '9791124496039', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124496039.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219595342' },
    { title: '2026 찐합격 소방시설관리사 1차 본문 및 과년도 핵심문제', author: '공하성', publisher: '성안당', price: 44100, originalPrice: 49000, discount: '10%', rating: 5.0, reviews: 2, tags: ['추천'], hasEbook: false, isbn: '9788931513936', imageUrl: KB('S000218400495'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218400495' },
    { title: '2026 체크업 소방시설관리사 1차 필기 단원별 기출문제집', author: '김종상', publisher: '북스케치', price: 39600, originalPrice: 44000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791194041849', imageUrl: KB('S000218980533'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218980533' },
  ],

  '산업위생관리기사': [
    { title: '2026 산업위생관리기사 필기 + 무료동영상 + 핸드북', author: '최윤정', publisher: '구민사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: false, isbn: '9791168755987', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168755987.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217411498' },
    { title: '2026 산업위생관리기사 실기 + 무료동영상 + 핸드북', author: '최윤정', publisher: '구민사', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], hasEbook: false, isbn: '9791168756717', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756717.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219026399' },
    { title: '2026 에듀윌 산업위생관리기사 필기+무료특강', author: '최창률', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 5.0, reviews: 73, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223832', imageUrl: KB('S000216904841'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216904841' },
    { title: '2026 더 플러스 산업위생관리기사 필기', author: '서영민', publisher: '성안당', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], hasEbook: false, isbn: '9788931585001', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585001.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218185643' },
    { title: '2026 산업위생관리기사 필기 기출문제집', author: '서영민, 조만희', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], hasEbook: false, isbn: '9788931585018', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585018.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218090207' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 산업위생관리기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012700699', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491429.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219407234' },
    { title: '2026 에듀윌 산업위생관리기사 실기 2주끝장', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223857', isbn: '9791136039057', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039057.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217596740' },
    { title: '2026 2주완성 산업위생관리기사 실기', author: '서영민', publisher: '성안당', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: false, isbn: '9788931585056', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585056.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218917432' },
  ],

  '위험물기능사': [
    { title: '2026 나합격 위험물기능사 필기 + 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 567, tags: ['베스트'], hasEbook: false, isbn: '9791194997443', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997443.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218741778' },
    { title: '2026 에듀윌 위험물기능사 필기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 489, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223879', isbn: '9791136039781', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039781.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218302281' },
    { title: '2026 에듀윌 위험물기능사 실기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 412, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223887', isbn: '9791136040541', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040541.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218821444' },
    { title: '2026 박문각 위험물기능사 (필기+실기) + 무료특강 세트', author: '김연진', publisher: '박문각', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], hasEbook: false, isbn: '9791175192942', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175192942.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218577221' },
    { title: '2026 한번에 합격하는 위험물기능사 필기+실기', author: '박수경', publisher: '성안당', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012724758', isbn: '9788931585223', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585223.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219390700' },
    { title: '2026 해커스 위험물기능사 실기 한권합격', author: '이승원', publisher: '해커스자격증', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 245, tags: ['추천'], hasEbook: false, isbn: '9788969657275', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788969657275.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219569898' },
    { title: '2026 위험물기능사 실기 - 요약이론 & 13개년 기출문제집', author: '파이팅혼공TV', publisher: '지식오름', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], hasEbook: false, isbn: '9791174910196', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174910196.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218080875' },
    { title: '2026 위험물기능사 필기 기출문제집', author: '김재호', publisher: '세화', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9788931713992', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713992.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219662504' },
    { title: '2026 위험물기능사 필기 핵심이론+7년간 시험 문제', author: '이보상', publisher: '크라운출판사', price: 15300, originalPrice: 17000, discount: '10%', rating: 5.0, reviews: 2, tags: ['추천'], hasEbook: false, isbn: '9788940650561', imageUrl: KB('S000218881462'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218881462' },
    { title: '위험물기능사 필기 단기완성', author: '충남산업기술교육원 부설 CNI 융합기술연구소', publisher: '아진', price: 23000, tags: ['추천'], hasEbook: false, isbn: '9788957617144', imageUrl: KB('S000000855087'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000855087' },
  ],

  '위험물산업기사': [
    { title: '2026 나합격 위험물산업기사 필기 + 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 489, tags: ['베스트'], hasEbook: false, isbn: '9791194997337', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997337.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218358287' },
    { title: '2026 에듀윌 위험물산업기사 필기 2주끝장 + 무료특강', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223888', isbn: '9791136039347', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039347.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217596744' },
    { title: '2026 에듀윌 위험물산업기사 실기 2주끝장+무료특강', author: '최창률', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223886', isbn: '9791136040350', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040350.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218667139' },
    { title: '2026 나합격 위험물산업기사 필기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], hasEbook: false, isbn: '9791194997023', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997023.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217536707' },
    { title: '모아 위험물산업기사 필기', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000010911268', isbn: '9791168045811', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045811.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219450771' },
    { title: '2026 직8딴 위험물산업기사 실기', author: '김진태', publisher: '김영북스', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012665607', isbn: '9791173491405', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491405.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219307009' },
    { title: '2026 나합격 위험물산업기사 실기 + 무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9791194997474', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997474.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219075769' },
    { title: '2026 위험물산업기사 필기 기출문제집', author: '김재호', publisher: '세화', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: false, isbn: '9788931713558', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931713558.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218264005' },
    { title: '2022 단기완성 위험물산업기사 필기 최근 기출문제 + 무료 동영상 강의', author: '정진홍', publisher: '세진북스', price: 22500, originalPrice: 25000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791157454846', imageUrl: KB('S000001754685'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001754685' },
    { title: '2026 시대에듀 유튜브 무료 특강이 있는 Win-Q 위험물산업기사 실기 단기합격', author: '이덕수', publisher: '시대고시기획', price: 26100, originalPrice: 29000, discount: '10%', rating: 5.0, reviews: 11, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012329263', imageUrl: KB('S000218736612'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218736612' },
  ],

  '공조냉동기계기사': [
    { title: '2026 공조냉동기계기사 필기 5주완성', author: '조성안, 이승원, 강희중', publisher: '한솔아카데미', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012335079', isbn: '9791166547638', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166547638.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218686162' },
    { title: '2026 이패스 임재기의 공조냉동기계기사 필기 - 이론편+기출문제편', author: '임재기', publisher: '이패스코리아', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012662705', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172092948.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218269814' },
    { title: '2026 에듀윌 공조냉동기계기사 필기 한권끝장', author: '손익희', publisher: '에듀윌', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223863', isbn: '9791136038234', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038234.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217012779' },
    { title: '2026 PASS 공조냉동기계기사실기', author: '강희중, 조성안', publisher: '한솔아카데미', price: 33300, originalPrice: 37000, discount: '10%', rating: 5.0, reviews: 19, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012625578', imageUrl: KB('S000219249602'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219249602' },
    { title: '2026 이패스 임재기의 공조냉동기계기사 실기 - 이론+기출문제', author: '임재기', publisher: '이패스코리아', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012662912', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172093358.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218934625' },
    { title: '모아 공조냉동기계기사 실기', author: '이지원', publisher: '모아교육그룹', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013069860', isbn: '9791168045125', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045125.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219300027' },
    { title: '2026 스마트 7개년 과년도 공조냉동기계기사 필기', author: '최승일', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: false, isbn: '9788931512311', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931512311.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218360415' },
    { title: '2026 공조냉동기계기사 필기 과년도 7주완성', author: '이래운, 유기창', publisher: '엔플북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], hasEbook: false, isbn: '9788968134265', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788968134265.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218569888' },
  ],

  '공조냉동기계기능사': [
    { title: '2026 공조냉동기계기능사 필기+무료동영상 - 최신 CBT 복원문제 수록', author: '강진규, 오태정', publisher: '구민사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], hasEbook: false, isbn: '9791168755819', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168755819.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217163784' },
    { title: '모아 공조냉동기계기능사 필기 (핵심이론+과년도 14개년)', author: '이지원', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013372407', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168045972.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219801814' },
    { title: '2026 공조냉동기계기능사 필기 + 무료동영상', author: '이정근', publisher: '건기원', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], hasEbook: false, isbn: '9791157679362', imageUrl: 'https://image.aladin.co.kr/product/39077/71/coversum/k442137857_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219724755' },
    { title: '2026 시대에듀 Win-Q 공조냉동기계기능사 필기 단기합격', author: '허판효', publisher: '시대에듀', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: false, isbn: '9791143405364', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143405364.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218609200' },
    { title: '2026 공조냉동기계기능사 필기', author: '권오수, 안효열, 이원범', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9788927458791', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927458791.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216810803' },
    { title: '2026 공조냉동기계기능사 산업기사 실기+무료동영상', author: '강진규, 오태정', publisher: '구민사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9791168756106', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756106.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218278053' },
    { title: '이패스 최부길의 공조냉동기계기능사 실기 (필답형+작업형)', author: '최부길', publisher: '이패스코리아', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012866343', isbn: '9791172094447', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791172094447.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219713664' },
    { title: '2026 공조냉동기계기능사 필기 기출문제 - 기출 + 적중모의고사', author: '나중식', publisher: '책과상상', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], hasEbook: false, isbn: '9791169672818', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169672818.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217577876' },
    { title: '단기완성 공조냉동기계기능사 필기 과년도 출제문제 해설', author: '김증식', publisher: '일진사', price: 14400, originalPrice: 16000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788942914159', imageUrl: KB('S000000671208'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000671208' },
  ],

  '용접기사': [
    { title: '2026 고수열강 용접기사 필기+실기', author: '정균호, 나중쇠, 박승리, 박재원', publisher: '구민사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], hasEbook: false, isbn: '9791168755918', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168755918.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217297578' },
    { title: '2026 시대에듀 Win-Q 용접산업기사 필기 단기합격', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012195114', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143403100.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218358632' },
    { title: '2026 용접산업기사 필기', author: '나중식', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], hasEbook: false, isbn: '9791169672894', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169672894.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217579038' },
    { title: '202X 고수열강 용접산업기사 필기 + 실기', author: '정균호, 나중쇠, 박재원', publisher: '구민사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9791168755857', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168755857.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217177573' },
    { title: '용접산업기사(필기)', author: '용접기술시험연구회', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, isbn: '9788942912438', imageUrl: KB('S000000671044'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000671044' },
    { title: '2026 용접산업기사 필기 10년간 기출문제', author: '나중식', publisher: '책과상상', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: false, isbn: '9791169672900', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169672900.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218276629' },
    { title: '2020 완전정복 용접산업기사 실기', author: 'NDT 시험연구회', publisher: '세진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], hasEbook: false, isbn: '9791160453683', imageUrl: 'https://image.aladin.co.kr/product/22900/13/coversum/k692636944_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001791851' },
    { title: '과년도 용접산업기사', author: '김명선, 김용구, 임정운', publisher: 'HJ골든벨타임', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], hasEbook: false, isbn: '9788986412659', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788986412659.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001361096' },
    { title: '평생 무료 동영상과 함께하는 용접산업기사 필기', author: '최갑규', publisher: '세진북스', price: 31500, originalPrice: 35000, discount: '10%', tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012222707', imageUrl: KB('S000218472931'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218472931' },
  ],

  '피복아크용접기능사': [
    { title: '2026 피복, 가스텅스텐, 이산화탄소가스 용접기능사 필기시험문제', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: false, isbn: '9788940649749', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649749.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218570168' },
    { title: '2025 용접기능사 필기 총정리', author: '용접기술시험연구회', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], hasEbook: false, isbn: '9788942920082', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942920082.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216485694' },
    { title: '2026 에듀윌 피복아크용접기능사 필기 한권끝장+무료특강', author: '김정혁', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 278, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013244093', isbn: '9791136037831', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136037831.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216739527' },
    { title: '용접기능사 특수용접기능사 필기 + 무료 동영상 강의', author: '정명호', publisher: '메카피아', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], hasEbook: false, isbn: '9791162481141', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791162481141.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001813379' },
    { title: '용접기능사 필기 핵심요약', author: '최부길', publisher: '이패스코리아', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 189, tags: ['베스트'], hasEbook: false, isbn: '9791192515083', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192515083.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000061442785' },
    { title: '용접기능사 실기', author: '김승대 외', publisher: '세진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], hasEbook: false, isbn: '9788971219201', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788971219201.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001097753' },
    { title: '2026 피복아크용접기능사 필기 8개년 기출문제집+무료특강', author: '신하영, 어준혁, 원현우', publisher: '박문각', price: 20700, originalPrice: 23000, discount: '10%', tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012559104', imageUrl: KB('S000219153593'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219153593' },
    { title: '2026 시대에듀 Win-Q 피복아크용접기능사 필기 단기합격(가스텅스텐아크용접/이산화탄소가스아크용접기능사 포함)', author: '홍순규', publisher: '시대고시기획', price: 20700, originalPrice: 23000, discount: '10%', rating: 5.0, reviews: 11, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012280342', imageUrl: KB('S000218641303'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218641303' },
  ],

  '가스텅스텐아크용접기능사': [
    { title: '2026 피복, 가스텅스텐, 이산화탄소가스 용접기능사 필기시험문제', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: false, isbn: '9788940649749', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649749.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218570168' },
    { title: '2026 평생 무료 동영상과 함께하는 가스텅스텐아크용접기능사 필기', author: '최갑규', publisher: '세진북스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012222847', isbn: '9791157458677', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157458677.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220241342' },
    { title: '용접기능사 실기', author: '김승대 외', publisher: '세진사', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], hasEbook: false, isbn: '9788971219201', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788971219201.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001097753' },
  ],

  '이산화탄소가스아크용접기능사': [
    { title: '2026 피복, 가스텅스텐, 이산화탄소가스 용접기능사 필기시험문제', author: '이동명', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: false, isbn: '9788940649749', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649749.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218570168' },
    { title: '이산화탄소가스아크 용접기능사 실기', author: '김명선', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], hasEbook: false, isbn: '9788940649107', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940649107.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214378451' },
  ],

  '전산응용기계제도기능사': [
    { title: '2026 나합격 전산응용기계제도기능사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 467, tags: ['베스트'], hasEbook: false, isbn: '9791199411579', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791199411579.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217402561' },
    { title: '나합격 전산응용기계제도기능사 실기 유형별 빈출 도면집', author: '최현석', publisher: '삼원북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], hasEbook: false, isbn: '9791194997931', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997931.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219435589' },
    { title: '2026 시대에듀 Win-Q 전산응용기계제도기능사 필기', author: '홍순규', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], hasEbook: false, isbn: '9791143400277', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143400277.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218233080' },
    { title: '나합격 전산응용기계제도기능사 실기', author: '자격증의모든것DC', publisher: '삼원북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], hasEbook: false, isbn: '9791193858172', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193858172.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214291676' },
    { title: '2026 전산응용기계제도기능사 필기 실기 기출예상문제집', author: '정인훈', publisher: '지식오름', price: 25200, originalPrice: 28000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791174910257', imageUrl: KB('S000218189371'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218189371' },
    { title: '2026 전산응용기계제도기능사 필기 기출문제', author: '김원중', publisher: '책과상상', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9791169673433', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673433.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218276625' },
    { title: '2025 시대에듀 Win-Q 전산응용기계제도기능사 실기', author: '정인훈', publisher: '시대에듀', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011217827', isbn: '9791138390163', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138390163.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216090452' },
    { title: '2022 단기완성 전산응용기계제도 기능사 필기', author: '정영식', publisher: '세진북스', price: 22500, originalPrice: 25000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791157454822', imageUrl: KB('S000001754683'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001754683' },
  ],

  '승강기기사': [
    { title: '2026 승강기 기사.산업기사 필기', author: '이도흠', publisher: '엔트미디어', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], hasEbook: false, isbn: '9791192810614', imageUrl: 'https://image.aladin.co.kr/product/37123/58/coversum/k722031774_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217456496' },
    { title: '2026 승강기 기사.산업기사 실기', author: '이도흠', publisher: '엔트미디어', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], hasEbook: false, isbn: '9791192810805', imageUrl: 'https://image.aladin.co.kr/product/37985/78/coversum/k802034671_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218778963' },
    { title: '2024 기발한 승강기기사.산업기사 필기', author: '김인호', publisher: '크라운출판사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], hasEbook: false, isbn: '9788940647691', imageUrl: 'https://image.aladin.co.kr/product/32862/66/coversum/8940647696_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000211236389' },
    { title: '2024 한 권으로 끝내는 승강기기사.산업기사 필기', author: '한영규', publisher: '건기원', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 156, tags: ['베스트'], hasEbook: false, isbn: '9791157677825', imageUrl: 'https://image.aladin.co.kr/product/32409/38/coversum/k742935389_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000208952492' },
    { title: '2025 승강기 기사 산업기사', author: '정재수', publisher: '남양문화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 4, tags: ['추천'], hasEbook: false, isbn: '9788955540734', imageUrl: KB('S000000803189'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000803189' },
    { title: '승강기기사 실기', author: '정재수', publisher: '남양문화', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9788955540826', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788955540826.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000000803198' },
    { title: '승강기 기사·산업기사', author: '최기호, 이명상', publisher: '대광서림', price: 33300, originalPrice: 37000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788938452108', imageUrl: KB('S000219665341'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219665341' },
  ],

  '품질경영기사': [
    { title: '2026 유튜브와 함께하는 양쌤의 품질경영기사 필기', author: '양희정', publisher: '이나무', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 512, tags: ['베스트'], hasEbook: false, isbn: '9791191569452', imageUrl: 'https://image.aladin.co.kr/product/37480/47/coversum/k072032917_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218201849' },
    { title: '2026 배극윤의 품질경영기사 필기 - 전2권', author: '배극윤', publisher: '예문사', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: false, isbn: '9788927460527', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460527.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218641240' },
    { title: '2026 한번에 합격하는 품질경영기사 필기', author: '염경철', publisher: '성안당', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012357103', isbn: '9788931585339', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585339.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218362911' },
    { title: '2026 유튜브와 함께하는 양쌤의 품질경영기사 실기', author: '양희정', publisher: '이나무', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], hasEbook: false, isbn: '9791191569476', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191569476.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218741990' },
    { title: '2026 배극윤의 품질경영기사 필기 문제풀이 - 전2권', author: '배극윤', publisher: '예문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], hasEbook: false, isbn: '9788927460640', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927460640.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218787208' },
    { title: '2026 한번에 합격하는 품질경영기사 실기', author: '염경철', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012559222', isbn: '9788931585346', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585346.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218917428' },
    { title: '2025 시대에듀 Win-Q 품질경영기사 필기 단기합격', author: '박병호', publisher: '시대에듀', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011068335', isbn: '9791138387828', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138387828.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000215769074' },
    { title: '2025 품질경영기사 필기 과년도 출제문제', author: '정현석', publisher: '일진사', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: false, isbn: '9788942919819', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942919819.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214911595' },
    { title: '품질경영기사 산업기사 필기(2017)', author: '오경환', publisher: '한솔아카데미', price: 33300, originalPrice: 37000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791156564089', imageUrl: KB('S000001741831'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001741831' },
    { title: '2014년 품질경영기사(산업)실기 단기완성 (3차 개정)', author: '오경환', publisher: '한솔', price: 29700, originalPrice: 33000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791156560234', imageUrl: KB('S000001741526'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001741526' },
  ],

  '대기환경기사': [
    { title: '2027 에듀윌 대기환경기사 필기 4주끝장 + 무료특강', author: '이찬범', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223892', isbn: '9791136042972', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136042972.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220111843' },
    { title: '2026 나합격 대기환경기사 필기 + 무료특강', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: false, isbn: '9791194997115', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997115.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218086849' },
    { title: '2026 물쌤닷컴 대기환경기사/산업기사 필기 + 모의고사', author: '최혁재', publisher: '미교원', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], hasEbook: false, isbn: '9791194457152', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194457152.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218615046' },
    { title: '2026 나합격 대기환경기사 실기 + 무료특강', author: '김현우', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], hasEbook: false, isbn: '9791194997757', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997757.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219002835' },
    { title: '2026 [직8딴] 직접 8일 만에 딴 대기환경기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012694878', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491412.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219387920' },
    { title: '2026 에듀윌 대기환경기사 실기 2주끝장 + 무료특강', author: '이찬범', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223868', isbn: '9791136040534', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040534.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218730005' },
    { title: '2026 물쌤닷컴 대기환경기사 산업기사 실기 + 기출해설', author: '최혁재', publisher: '미교원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9791194457169', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194457169.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218971293' },
    { title: '2026 합격Easy 대기환경기사 실기', author: '신은상', publisher: '건기원', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013080368', isbn: '9791157679294', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791157679294.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219461452' },
    { title: '2026 한번에 합격하는 대기환경기사 필기 기출문제집', author: '서성석', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012724760', isbn: '9788931585353', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585353.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218437042' },
    { title: '2024 SD에듀 Win-Q 대기환경기사·산업기사 필기 단기합격', author: '문진영', publisher: '시대고시기획', price: 29700, originalPrice: 33000, discount: '10%', rating: 5.0, reviews: 9, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005827974', isbn: '9791138347013', imageUrl: KB('S000211792627'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000211792627' },
  ],

  '수질환경기사': [
    { title: '2027 에듀윌 수질환경기사 필기 4주끝장+무료특강', author: '정윤성', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223895', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136042798.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220111847' },
    { title: '2026 나합격 수질환경기사 필기+무료특강+온라인CBT', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.8, reviews: 389, tags: ['베스트'], hasEbook: false, isbn: '9791194997108', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997108.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217824148' },
    { title: '2026 물쌤닷컴 수질환경기사/산업기사 필기+기출해설 세트', author: '이종혁', publisher: '미교원(미래교육개발원)', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], hasEbook: false, isbn: '9791194457138', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194457138.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218615044' },
    { title: '2026 수질환경기사 필기 + 과년도 + 무료동영상', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 278, tags: ['베스트'], hasEbook: false, isbn: '9791168756045', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168756045.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217577427' },
    { title: '2026 나합격 수질환경기사 실기+무료특강', author: '김현우', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], hasEbook: false, isbn: '9791194997740', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997740.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219078322' },
    { title: '2026 직8딴 수질환경기사 실기', author: '김진태', publisher: '김영북스', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012700710', isbn: '9791173491436', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791173491436.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219407283' },
    { title: '2026 에듀윌 수질환경기사 실기 2주끝장+무료특강', author: '이찬범', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223872', isbn: '9791136050434', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136050434.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218881745' },
    { title: '2026 물쌤닷컴 수질환경기사 산업기사 실기 + 기출해설', author: '이종혁', publisher: '미교원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: false, isbn: '9791194457145', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194457145.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218971292' },
    { title: '2022 Win-Q 수질환경기사ㆍ산업기사 필기 단기완성', author: '문진영', publisher: '시대고시기획', price: 26100, originalPrice: 29000, discount: '10%', rating: 5.0, reviews: 7, tags: ['추천'], hasEbook: false, isbn: '9791138316712', imageUrl: KB('S000001717008'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001717008' },
    { title: '수질환경기사 실기 단기완성(2018)', author: '신동성, 하부영, 조희경', publisher: '세진사', price: 15000, rating: 3.8, reviews: 2, tags: ['추천'], hasEbook: false, isbn: '9791160452457', imageUrl: KB('S000001791742'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001791742' },
  ],

  '초음파비파괴검사기사': [
    { title: '비파괴검사 기사 산업기사 실기 필답형 기출문제집', author: 'NDT시험연구회', publisher: '세진사', price: 30000, rating: 5.0, reviews: 3, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000061352238'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000061352238' },
  ],

  '방사선비파괴검사기사': [
    { title: '방사선비파괴검사 문제 & 해설 (기사.산업기사 / 기능사 공통)', author: '여화연', publisher: '일진사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9788942911592', imageUrl: 'https://image.aladin.co.kr/product/687/56/coversum/8942911595_3.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000000670965' },
  ],

  '침투비파괴검사기사': [
    { title: '침투비파괴검사 산업기사·기사 실기 필답형', author: '조정현', publisher: '피앤피북', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011689030', imageUrl: 'https://image.aladin.co.kr/product/36664/67/coversum/k492030187_1.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216904888' },
    { title: '2026 시대에듀 Win-Q 침투비파괴검사기능사 필기 단기합격', author: '신원장', publisher: '시대고시기획', price: 24300, originalPrice: 27000, discount: '10%', rating: 5.0, reviews: 13, tags: ['추천'], hasEbook: false, isbn: '9791143406514', imageUrl: KB('S000218778105'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218778105' },
  ],

  '자기비파괴검사기사': [
    { title: '비파괴검사 기사 산업기사 실기 필답형 기출문제집', author: 'NDT시험연구회', publisher: '세진사', price: 30000, rating: 5.0, reviews: 3, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000061352238'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000061352238' },
  ],

  '전기공사기사': [
    { title: '2026 전기공사기사 실기', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 412, tags: ['베스트'], hasEbook: false, isbn: '9791194702306', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702306.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219138309' },
    { title: '2026 에듀윌 전기 전기공사기사 필기 7개년 기출문제집', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223836', isbn: '9791136040336', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040336.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218732586' },
    { title: '2026 에듀윌 전기 전기공사기사 실기 한권끝장', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223833', isbn: '9791136041487', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136041487.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219306279' },
    { title: '2026 E90-3 전기공사기사 필기', author: '검정연구회', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], hasEbook: false, isbn: '9791192810645', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192810645.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218309631' },
    { title: '2026 전기공사기사 실기 파이널 + 단답형', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012579652', isbn: '9791194702351', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702351.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219019920' },
    { title: '2026 최신판 답이 보인다 30일 단기완성 전기공사기사·산업기사 실기', author: '검정연구회', publisher: '동일출판사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117595.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219245615' },
    { title: '2026 D30-3 전기공사기사실기', author: '검정연구회', publisher: '엔트미디어', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9791192810850', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192810850.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219245690' },
    { title: '2026 전기공사기사 필기 파이널 특강', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012566041', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702191.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218313336' },
    { title: '2026 에듀윌 전기 제어공학 필기+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 3, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013244086', isbn: '9791136038128', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038128.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217252282' },
  ],

  '전기공사산업기사': [
    { title: '2026 전기공사산업기사 실기', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 378, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702313.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219190912' },
    { title: '배울학 전기공사산업기사 필기 1033 10개년 기출문제집', author: '윤석만, 강장규, 황민욱', publisher: '배울학', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 2, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000001931034'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001931034' },
    { title: '2026 E90-4 전기공사산업기사 필기', author: '검정연구회', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], hasEbook: false, isbn: '9791192810652', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192810652.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218309680' },
    { title: '2026 완벽대비 전기공사산업기사 필기', author: '검정연구회', publisher: '동일출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9788938117281', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117281.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218309595' },
    { title: '2026 D30-4 전기공사산업기사 실기', author: '검정연구회', publisher: '엔트미디어', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192810867.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219245672' },
    { title: '2026 전기공사산업기사 실기 파이널 + 단답형', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012579654', isbn: '9791194702368', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702368.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219194574' },
    { title: '2026 전기공사산업기사 필기 파이널 특강', author: '김상훈, 한빛전기수험연구회', publisher: '윤조', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 119, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012566210', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194702214.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218501708' },
    { title: '배울학 전기공사산업기사 1033 필기 10개년 기출문제집', author: '윤석만, 강장규, 황민욱', publisher: '배울학', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 98, tags: ['추천'], hasEbook: false, isbn: '9791189762391', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791189762391.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001931034' },
    { title: '2026 최신판 답이 보인다 30일 단기완성 전기공사기사·산업기사 실기', author: '검정연구회', publisher: '동일출판사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.4, reviews: 87, tags: ['추천'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117595.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219245615' },
    { title: '2026 에듀윌 전기 제어공학 필기+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 3, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013244086', isbn: '9791136038128', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038128.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217252282' },
  ],

  '전기기능장': [
    { title: '2026 초스피드 전기기능장 필기', author: '김영복', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514438.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218185645' },
    { title: '2026 완벽대비 전기기능장 필기', author: '최동원, 황락훈', publisher: '동일출판사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], hasEbook: false, isbn: '9788938117106', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117106.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217370337' },
    { title: '2026 초스피드 전기기능장 필답형 실기', author: '김영복', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], hasEbook: false, isbn: '9788931514445', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514445.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218839137' },
    { title: '2026 마스터 전기기능장 필기', author: '현명걸, 김동진', publisher: '엔트미디어', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], hasEbook: false, isbn: '9791192810683', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192810683.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218270035' },
    { title: '2026 초단기완성! 전기기능장 필기', author: '이창우', publisher: '책과상상', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.6, reviews: 178, tags: ['베스트'], hasEbook: false, isbn: '9791169673372', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673372.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218197921' },
    { title: '초스피드 전기기능장 실기 PLC', author: '김재규', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005317799', isbn: '9788931528503', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931528503.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000202907858' },
    { title: 'New 전기기능장 실기 PLC', author: '김현진, 김경식, 강석구', publisher: '반석기술', price: 25200, originalPrice: 28000, discount: '10%', tags: ['추천'], hasEbook: false, imageUrl: KB('S000214614619'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214614619' },
    { title: '전기기능장 실기 PLC 완전정복', author: '검정연구회', publisher: '이나무', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9791191569292', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791191569292.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000211825816' },
    { title: '전기기능장 실기 PLC 과년도 기출문제', author: '최병남', publisher: '세진사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 89, tags: ['추천'], hasEbook: false, isbn: '9791160456844', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160456844.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216257640' },
    { title: '전기기능장 실기 - 작업형/필답형 실기총정리', author: '유영규', publisher: '일진사', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.3, reviews: 67, tags: ['추천'], hasEbook: false, isbn: '9788942916733', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788942916733.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000000671439' },
  ],

  '전기기능사': [
    { title: '2026 이기적 전기기능사 필기 + 실기 올인원', author: '안경재', publisher: '영진.com', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.8, reviews: 567, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012899740', isbn: '9788931480290', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931480290.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219801065' },
    { title: '2026 에듀윌 전기 전기기능사 필기 한권끝장', author: '유치형, 홍석묵, 최대규', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 456, tags: ['베스트'], hasEbook: false, isbn: '9791136039194', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039194.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218229311' },
    { title: '2026 시대에듀 전기기능사 필기 + 실기 한권합격', author: '김민우, 민지현', publisher: '시대에듀', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011909604', isbn: '9791138397872', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138397872.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217401797' },
    { title: '2026 전기기능사 필기 초단기 CBT 기출문제집', author: '파이팅혼공TV 컨텐츠 개발팀', publisher: '종이향기', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], hasEbook: false, isbn: '9791174910059', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791174910059.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217326501' },
    { title: '2026 이기적 전기기능사 필기 이론서 + 기출문제집', author: '이재일', publisher: '영진.com', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011877146', isbn: '9788931480757', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931480757.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217402582' },
    { title: '2026 에듀윌 전기 전기기능사 실기 한권끝장', author: '최대규, 홍석묵, 유치형', publisher: '에듀윌', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], hasEbook: false, isbn: '9791136038791', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038791.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217279246' },
    { title: '2026 무료 동영상과 함께 공부하는 초스피드 전기기능사 실기', author: '유인종', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], hasEbook: false, isbn: '9788931514476', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931514476.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218615091' },
    { title: '2026 에듀윌 전기 전기기능사 실기 해설집+도면집+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9791136037916', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136037916.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216907984' },
    { title: '전기기능사 실기 바이블 3', author: '신석환, 최경호', publisher: '동일출판사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], hasEbook: false, isbn: '9788938117687', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788938117687.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220004569' },
    { title: '2026 박문각 전기기능사 실기 + 무료특강', author: '정용걸', publisher: '박문각', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9791175193116', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175193116.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218606447' },
  ],


  // ────────────────────────────────────────
  '화학분석기사': [
    // 베스트셀러 5
    { title: '2026 정나나의 화학분석기사 필기', author: '정나나', publisher: '예문사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788927461609.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219182328' },
    { title: '2026 나합격 화학분석기사 필기+무료특강', author: '나합격콘텐츠연구소', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9791194997306', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194997306.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218787643' },
    { title: '2026 한번에 합격하는 화학분석기사 필기', author: '박수경', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], hasEbook: false, isbn: '9788931585308', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585308.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218960469' },
    { title: '2026 Win-Q 화학분석기사 필기 단기합격', author: '박지은', publisher: '시대에듀', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012280569', isbn: '9791143404145', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143404145.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218641308' },
    // 추천수험서 5
    { title: '2026 한번에 합격하는 화학분석기사 실기(필답형+작업형)', author: '박수경', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 76, tags: ['추천'], hasEbook: false, isbn: '9788931585315', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931585315.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219304491' },
    { title: '2026 시대에듀 Win-Q 화학분석기사 실기 단기합격', author: '김영호, 김혜경', publisher: '시대고시기획', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 54, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012401406', isbn: '9791143406675', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143406675.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218913894' },
  ],

  // ────────────────────────────────────────
  '자동차정비기능사': [
    // 베스트셀러 5
    { title: '2026 기분파 자동차정비기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194328353.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217402474' },
    { title: '2026 에듀윌 자동차정비기능사 필기 한권끝장', author: '김정혁', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013284144', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136038890.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217395815' },
    { title: '2026 뻥! 뚫린 패스 자동차정비기능사 필기', author: '김연수 외', publisher: '골든벨', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], hasEbook: false, isbn: '9791158067861', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158067861.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217127855' },
    { title: '2026 자동차정비기능사 필기(+전과목 무료동영상)', author: '이병근', publisher: '예문에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 223, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791163864981.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217296462' },
    { title: '2026 Win-Q 자동차정비기능사 필기 단기합격', author: '함성훈 외', publisher: '시대에듀', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 189, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012195150', isbn: '9791143401724', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143401724.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218358633' },
    // 추천수험서 5
    { title: '2026 자동차정비기능사 필기 최근기출문제', author: '김형진', publisher: '책과상상', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: false, isbn: '9791169673211', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673211.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218086675' },
    { title: '2026 자동차정비기능사 필기', author: '김형진, 김승수', publisher: '구민사', price: 26100, originalPrice: 29000, discount: '10%', tags: ['추천'], hasEbook: false, imageUrl: KB('S000218918186'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218918186' },
  ],

  // ────────────────────────────────────────
  '자동차정비산업기사': [
    // 베스트셀러 5
    { title: '2026 기분파 자동차정비산업기사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 267, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791186179451.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001881074' },
    { title: '2026 뻥! 뚫린 PASS 자동차정비산업기사 필기', author: '김명준 외', publisher: '골든벨', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], hasEbook: false, isbn: '9791158067908', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158067908.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217287927' },
    { title: '2026 자동차정비산업기사 필기 한권완성', author: '이병근', publisher: '예문에듀', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], hasEbook: false, isbn: '9791163865346', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791163865346.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218732722' },
    { title: '2026 합격포인트 자동차정비산업기사 필기', author: '김광석 외', publisher: '골든벨', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 156, tags: ['베스트'], hasEbook: false, isbn: '9791124114049', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124114049.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218685900' },
    { title: '2026 자동차정비산업기사 필기', author: '소철호', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 132, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673198.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218276628' },
    // 추천수험서 5
    { title: '자동차전문가 정장만과 함께하는 자동차정비산업기사 필기', author: '정장만', publisher: '에듀피디', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9791155866160', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791155866160.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219081001' },
  ],

  // ────────────────────────────────────────
  '지게차운전기능사': [
    // 베스트셀러 5
    { title: '2027 박문각 지게차운전기능사 필기 이론+기출 세트', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 21510, originalPrice: 23900, discount: '10%', rating: 4.8, reviews: 456, tags: ['베스트'], hasEbook: false, isbn: '9791176490740', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791176490740.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219930123' },
    { title: '2026 기분파 지게차운전기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 378, tags: ['베스트'], hasEbook: false, isbn: '9791194328285', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194328285.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217304958' },
    { title: '2027 박문각 지게차운전기능사 필기 8개년 기출문제집+무료특강', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 10800, originalPrice: 12000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012964722', isbn: '9791176490641', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791176490641.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219930097' },
    { title: '2026 기발한 지게차운전기능사 필기 총정리문제', author: '김준한', publisher: '크라운출판사', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 267, tags: ['베스트'], hasEbook: false, isbn: '9788940650578', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788940650578.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218783242' },
    { title: '2027 쩐 기능장의 3일끝! 지게차운전기능사 필기 이론+기출 100% 무료강의', author: '전범준', publisher: '직업상점', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], hasEbook: false, isbn: '9791194695523', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194695523.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220696009' },
    // 추천수험서 4
    { title: '2027 박문각 지게차운전기능사 필기 핵심이론서', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 12510, originalPrice: 13900, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012964731', isbn: '9791176490634', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791176490634.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219930171' },
    { title: '2027 에듀윌 지게차운전기능사 독학으로 필기끝장+9개년 기출문제', author: '김은남, 명하영', publisher: '에듀윌', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], hasEbook: false, isbn: '9791136043245', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136043245.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220617546' },
    { title: '2027 시대에듀 유튜브 무료 특강이 있는 Win-Q 지게차운전기능사 필기 단기합격', author: '홍순규', publisher: '시대고시기획', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013237609', isbn: '9791143416391', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143416391.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220363373' },
    { title: '2026 지게차운전기능사 필기 기출문제', author: '건설기계교육아카데미', publisher: '책과상상', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], hasEbook: false, isbn: '9791169673006', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673006.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218576702' },
  ],

  // ────────────────────────────────────────
  '굴착기운전기능사': [
    // 베스트셀러 5
    { title: '2026 기분파 굴착기운전기능사 필기', author: '에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 412, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791194328322.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217483180' },
    { title: '2026 에듀윌 굴착기운전기능사 독학으로 필기끝장', author: '김은남', publisher: '에듀윌', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.7, reviews: 356, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223824', isbn: '9791136040299', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136040299.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218667742' },
    { title: '2026 확! 바뀐 굴착기운전기능사 필기', author: '전국중장비교사협의회', publisher: '골든벨', price: 12600, originalPrice: 14000, discount: '10%', rating: 4.6, reviews: 298, tags: ['베스트'], hasEbook: false, isbn: '9791158064549', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158064549.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217203907' },
    { title: '2026 박문각 취밥러 굴착기운전기능사 필기', author: '박문각 자격시험 개발팀', publisher: '박문각', price: 12510, originalPrice: 13900, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011839690', isbn: '9791175191037', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175191037.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217306587' },
    { title: '2026 굴착기운전기능사 필기 기출문제', author: '건설기계교육아카데미', publisher: '책과상상', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.6, reviews: 223, tags: ['베스트'], hasEbook: false, isbn: '9791169673037', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169673037.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218228873' },
    // 추천수험서 5
    { title: '2026 ALL PASS 굴착기운전기능사 필기시험 총정리문제', author: '한국건설기계기술연구회', publisher: '크라운출판사', price: 11700, originalPrice: 13000, discount: '10%', rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219027050'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219027050' },
    { title: '2027 완전합격 1주 완성 굴착기운전기능사 필기시험문제', author: '황은정', publisher: '크라운출판사', price: 12600, originalPrice: 14000, discount: '10%', rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, imageUrl: KB('S000220293010'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220293010' },
    { title: '2027 굴착기 운전기능사 필기 핵심요약 및 기출문제집', author: '박상언', publisher: '브레인21', price: 13500, originalPrice: 15000, discount: '10%', tags: ['추천'], hasEbook: false, imageUrl: KB('S000217820310'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217820310' },
  ],

  // ────────────────────────────────────────
  // 네트워크관리사 1급·2급은 필기+실기 통합 교재로 시험이 시행되어 동일 도서가 두 등급에 공통으로 쓰입니다.
  '네트워크관리사1급': [
    { title: '이기적 네트워크관리사 1, 2급 필기+실기 올인원', author: '임호진, 황성하', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 5.0, reviews: 13, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012129182', isbn: '9788931481211', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481211.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218204635' },
    { title: '2025 최적합 네트워크 관리사 1·2급 필기+실기', author: '허준, 선세리', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.9, reviews: 10, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000008314373', isbn: '9788931586718', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931586718.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000213673627' },
  ],

  // ────────────────────────────────────────
  '네트워크관리사2급': [
    { title: '이기적 네트워크관리사 1, 2급 필기+실기 올인원', author: '임호진, 황성하', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 5.0, reviews: 13, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012129182', isbn: '9788931481211', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481211.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218204635' },
    { title: '2025 최적합 네트워크 관리사 1·2급 필기+실기', author: '허준, 선세리', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.9, reviews: 10, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000008314373', isbn: '9788931586718', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931586718.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000213673627' },
  ],

  // ────────────────────────────────────────
  '리눅스마스터1급': [
    { title: '2026 이기적 리눅스마스터 1급(1·2차) 기본서 세트', author: '김윤수, 최정현', publisher: '영진닷컴', price: 34200, originalPrice: 38000, discount: '10%', rating: 5.0, reviews: 4, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012448056', isbn: '9788931481402', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481402.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218968390' },
  ],

  // ────────────────────────────────────────
  '리눅스마스터2급': [
    { title: '2024 이기적 리눅스마스터 2급 기본서', author: '권소라', publisher: '영진닷컴', price: 25200, originalPrice: 28000, discount: '10%', rating: 5.0, reviews: 9, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000006516280', isbn: '9788931468366', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931468366.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000212326688' },
  ],

  // ────────────────────────────────────────
  '정보보안산업기사': [
    { title: '2026 알기사 정보보안기사(산업기사) 필기+핵심기출 1200제 세트', author: '조현준', publisher: '지안에듀', price: 54000, originalPrice: 60000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218322836'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218322836' },
    { title: '2026 알기사 정보보안기사(산업기사) 실기', author: '정일영', publisher: '지안에듀', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012550477', imageUrl: KB('S000219083573'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219083573' },
    { title: '2026 이기적 정보보안기사 필기+실기 올인원', author: '임호진', publisher: '영진닷컴', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012160705', imageUrl: KB('S000218331600'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218331600' },
    { title: '2026 이기적 정보보안기사 실기 기출 600제', author: '임호진', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012694406', imageUrl: KB('S000219382035'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219382035' },
    { title: '2026 수제비 정보보안기사 실기 기본서', author: '윤영빈', publisher: '수제비', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012547157', imageUrl: KB('S000219127791'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219127791' },
    { title: '정보보안 기사ㆍ산업기사 필기 한권으로 끝내기', author: '박성업', publisher: '시대고시기획', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 14, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000002887365', imageUrl: KB('S000001656127'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001656127' },
    { title: '정보보안 기사 산업기사 필기 2주완성 출제적중문제집(2016)', author: '공병철 외', publisher: '인포더북스', price: 16200, originalPrice: 18000, discount: '10%', tags: ['추천'], hasEbook: false, imageUrl: KB('S000001551469'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001551469' },
  ],

  // ────────────────────────────────────────
  '자동차정비기사': [
    { title: '2026 패스 자동차정비기사 필기', author: '박만재·국창호·문학훈', publisher: '골든벨', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218935739'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218935739' },
  ],

  // ────────────────────────────────────────
  '자동차정비기능장': [
    { title: '최신판 자동차정비기능장 필기', author: '전봉준·고동원', publisher: '예문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000214983155'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214983155' },
    { title: '자동차 전자제어 엔진 이론실무', author: '이상문, 박재림, 김성현, 조일영', publisher: '미전사이언스', price: 19800, originalPrice: 22000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788963451060', imageUrl: KB('S000000986563'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000986563' },
    { title: '자동차 미케닉을 위한 자동차 전자제어 시스템(자동차 시스템 제어 2)', author: '정태균', publisher: '성안당', price: 25200, originalPrice: 28000, discount: '10%', rating: 5.0, reviews: 2, tags: ['추천'], hasEbook: false, isbn: '9788931535211', imageUrl: KB('S000000558012'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000558012' },
  ],

  // ────────────────────────────────────────
  '수질환경산업기사': [
    { title: '2026 수질환경기사·산업기사 필기', author: '이철한', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218914137'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218914137' },
    { title: '2026 물쌤닷컴 수질환경기사/산업기사 필기+기출해설 세트', author: '이종혁', publisher: '미교원', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218615044'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218615044' },
    { title: '2026 수질환경기사, 산업기사 필기', author: '신동성·하부영', publisher: '세진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218854932'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218854932' },
    { title: '수질오염공정시험기준 해설집', author: '박승우', publisher: '세진사', price: 55000, tags: ['추천'], hasEbook: false, imageUrl: KB('S000218268159'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218268159' },
  ],

  // ────────────────────────────────────────
  '대기환경산업기사': [
    { title: '2026 대기환경기사 필기+과년도+무료동영상+핸드북', author: '전화택', publisher: '구민사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218031344'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218031344' },
    { title: '2026 나합격 대기환경기사 필기+무료특강+온라인 CBT', author: '김현우', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218086849'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218086849' },
    { title: '2026 합격Easy 대기환경기사 필기', author: '신은상', publisher: '건기원', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013049817', imageUrl: KB('S000218358598'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218358598' },
    { title: '공정시험기준에 따른 대기오염물질분석', author: '조용준', publisher: '동화기술', price: 15000, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000008002107', imageUrl: KB('S000000660069'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000660069' },
    { title: '2026 대기환경산업기사 실기+무료동영상', author: '전화택', publisher: '구민사', price: 28800, originalPrice: 32000, discount: '10%', tags: ['추천'], hasEbook: false, imageUrl: KB('S000218853956'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218853956' },
  ],

  // ────────────────────────────────────────
  // ────────────────────────────────────────
  '배관기능사': [
    { title: '2026 배관기능사 필기+실기 한권 완성', author: '국가기술자격시험연구회', publisher: '예문사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217122019'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217122019' },
    { title: '배관기능사 필기·실기 단기완성', author: '이상휘', publisher: '일진사', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218440656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218440656' },
    { title: '배관기능사 필기', author: '최종만', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000216719085'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216719085' },
    { title: '플랜트배관 설계 시공 실무 가이드북 Q&A', author: '박영희', publisher: '신기술', price: 28800, originalPrice: 32000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788993954128', imageUrl: KB('S000001538363'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001538363' },
  ],

  // ────────────────────────────────────────

  // ────────────────────────────────────────
  // ────────────────────────────────────────
  '미용사(일반)': [
    { title: '2026 미용사 일반 필기', author: '김지연', publisher: '책과상상', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218629883'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218629883' },
    { title: '2026 에듀윌 일반(헤어)미용사 필기 1주끝장', author: '최묘선', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218235656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218235656' },
    { title: '2026 원큐패스 미용사 일반 필기', author: '김선희', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218681294'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218681294' },
    { title: '2026 시대에듀 답만 외우는 미용사 일반 필기 CBT기출문제', author: '시대에듀 편집부', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217049157'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217049157' },
    { title: '2026 적중100% 미용사일반 필기시험 총정리문제', author: '크라운출판사 편집부', publisher: '크라운출판사', price: 14400, originalPrice: 16000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217049878'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217049878' },
    { title: '2026 미용사 일반 필기 핵심요약+기출모의', author: '타임 NCS 연구소', publisher: '시대에듀', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012272281', imageUrl: KB('S000218448172'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218448172' },
    { title: '2026 시대에듀 유선배 미용사(일반) 필기+실기 합격노트', author: '한지희', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 5.0, reviews: 9, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012802292', imageUrl: KB('S000219564048'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219564048' },
  ],

  // ────────────────────────────────────────
  '미용사(피부)': [
    { title: '2026 피부미용사 필기 한권으로 합격하기', author: '황해정·김승아', publisher: '크라운출판사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217059166'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217059166' },
    { title: '2026 이기적 권쌤TV 미용사(피부) 필기 기본서', author: '권순현', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012567052', imageUrl: KB('S000219159023'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219159023' },
    { title: '2026 원큐패스 미용사 피부 필기', author: '이지안', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218938455'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218938455' },
    { title: '2026 시대에듀 답만 외우는 미용사 피부 필기 CBT기출문제', author: '시대에듀 편집부', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012497240', imageUrl: KB('S000219023470'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219023470' },
    { title: '2026 1주일 완성 피부미용사 필기시험 총정리문제', author: '황해정', publisher: '크라운출판사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217021665'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217021665' },
    { title: '2026 에듀윌 피부미용사 필기 1주끝장', author: '에듀윌 편집부', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9791136039415', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039415.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218235698' },
    { title: '피부미용관리의 이론과 실제', author: '이정화, 홍재기', publisher: '서우', price: 24000, tags: ['추천'], hasEbook: false, isbn: '9788991985513', imageUrl: KB('S000001489826'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001489826' },
    { title: '딱!! 2주만 집중 피부미용사 필기 총정리 문제', author: '하경미, 윤태효, 임선민', publisher: '크라운출판사', price: 14400, originalPrice: 16000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788940650646', imageUrl: KB('S000219019184'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219019184' },
  ],

  // ────────────────────────────────────────
  '미용사(네일)': [
    { title: '2026 에듀윌 네일미용사(네일아트) 필기 1주끝장+무료특강', author: '민방경', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218096474'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218096474' },
    { title: '2026 2주완성 미용사 네일 필기시험문제', author: '류은주', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218565752'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218565752' },
    { title: '2026 미용사(네일) 필기 완전정복', author: '민방경', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, isbn: '9791136039408', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039408.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218096474' },
    { title: '2026 단기속성 미용사 네일 필기시험 총정리문제', author: '류은주, 윤미선', publisher: '크라운출판사', price: 18000, originalPrice: 20000, discount: '10%', tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218565422'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218565422' },
    { title: '2026 기분파 네일미용사 실기', author: '권지우, 최수미, 에듀웨이 R&D 연구소', publisher: '에듀웨이', price: 22500, originalPrice: 25000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788995329528', imageUrl: KB('S000217585731'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217585731' },
    { title: '네일 미용 미용사네일 실기', author: '샤인위드 도서편찬위원회', publisher: '샤인위드', price: 22500, originalPrice: 25000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791194328292', imageUrl: KB('S000209166828'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000209166828' },
    { title: '미용사(네일) 실기+무료동영상', author: '이윤희', publisher: '구민사', price: 18000, originalPrice: 20000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9791156721567', imageUrl: KB('S000001853991'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001853991' },
    { title: '미용사 네일 실기시험에 미치다(2021)', author: '한국미용교과교육과정연구회, 이수연, 최명옥', publisher: '성안당', price: 19800, originalPrice: 22000, discount: '10%', tags: ['추천'], hasEbook: false, isbn: '9788940624821', imageUrl: KB('S000000561870'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000000561870' },
  ],

  // ────────────────────────────────────────
  '미용사(메이크업)': [
    { title: '2026 기분파 미용사 메이크업 필기', author: '김효정', publisher: '에듀웨이', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217613656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217613656' },
    { title: '2026 완전합격 미용사 메이크업 필기시험문제', author: '메이크업자격연구회', publisher: '크라운출판사', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218704738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218704738' },
    { title: '2026 적중 100% 합격 미용사 메이크업 필기 총정리문제', author: '크라운출판사 편집부', publisher: '크라운출판사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218565610'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218565610' },
    { title: '2026 원큐패스 미용사 메이크업 필기 빈출문제 10회', author: '김미나', publisher: '다락원', price: 13500, originalPrice: 15000, discount: '10%', tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218783513'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218783513' },
    { title: '2026 퍼펙트 미용사 메이크업 실기시험문제', author: '김리나', publisher: '크라운출판사', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: false, imageUrl: KB('S000218676679'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218676679' },
    { title: '2026 에듀윌 메이크업 필기 1주끝장', author: '에듀윌 편집부', publisher: '에듀윌', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: false, isbn: '9791136039385', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039385.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218096461' },
    { title: '2026 시대에듀 답만 외우는 미용사 메이크업 필기 CBT기출문제+모의고사 14회', author: '이정연', publisher: '시대고시기획', price: 20700, originalPrice: 23000, discount: '10%', rating: 5.0, reviews: 11, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012280566', imageUrl: KB('S000218641305'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218641305' },
    { title: 'NCS 아틀라스 메이크업 미용사 실기', author: '유승혜 외 12명', publisher: '씨마스', price: 22500, originalPrice: 25000, discount: '10%', rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, imageUrl: KB('S000001744071'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001744071' },
  ],

  // ────────────────────────────────────────

  // ────────────────────────────────────────
  '식품산업기사': [
    { title: '2026 식품산업기사 필기', author: '정진경·유연희·이다빈·이아랑', publisher: '예문에듀', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217049829'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217049829' },
    { title: '2026 해커스 식품산업기사 필기 한권완성', author: '권유진', publisher: '해커스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217941979'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217941979' },
    { title: '2024 원큐패스 식품산업기사 필기 기출문제', author: '차광종', publisher: '다락원', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: false, isbn: '9791163864967', imageUrl: KB('S000211622192'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000211622192' },
    { title: '식품기사 산업기사 기출문제해설: 필기(2017)', author: '국민건강교육학회', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 7, tags: ['추천'], hasEbook: false, imageUrl: KB('S000001651984'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001651984' },
    { title: '식품미생물학', author: '이종경, 윤기선, 오세욱, 이선영', publisher: '파워북', price: 21000, rating: 4.6, reviews: 4, tags: ['추천'], hasEbook: false, isbn: '9788981604608', imageUrl: KB('S000001259878'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001259878' },
  ],

  // ────────────────────────────────────────
  // ────────────────────────────────────────
  '항공산업기사': [
    { title: '2026 항공산업기사 필기', author: '장성희', publisher: '성안당', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012724761', imageUrl: KB('S000218227489'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218227489' },
    { title: '2026 항공산업기사 필기', author: '항공기술교육아카데미', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217577896'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217577896' },
    { title: '2026 Win-Q 항공산업기사 단기합격', author: '시대에듀 편집부', publisher: '시대에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 112, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011755565', isbn: '9791138396103', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138396103.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217119501' },
    { title: '항공기시스템', author: '남명관', publisher: '성안당', price: 25200, originalPrice: 28000, discount: '10%', tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012619501', imageUrl: KB('S000217251096'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217251096' },
    { title: '항공법규 필기', author: '항공출판사 편집부', publisher: '항공출판사', price: 20000, rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, isbn: '9791197947506', imageUrl: KB('S000061672004'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000061672004' },
  ],

  '영양사': [
    { title: '2026 시대에듀 영양사 한권으로 끝내기', author: '만점해법저자진', publisher: '시대고시기획', price: 40500, originalPrice: 45000, discount: '10%', rating: 5.0, reviews: 10, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012840425', isbn: '9791143412232', imageUrl: KB('S000219601314'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219601314' },
    { title: '2026 문운당 영양사 시험문제집', author: '한국식품영양관련학과 교수협의회', publisher: '문운당', price: 47000, tags: ['베스트'], hasEbook: false, isbn: '9791156928423', imageUrl: KB('S000220166891'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220166891' },
    { title: '2026 최종 마무리 영양사 모의고사문제', author: '식품영양생리학회', publisher: '크라운출판사', price: 19800, originalPrice: 22000, discount: '10%', tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219189432'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219189432' },
  ],

  // ────────────────────────────────────────
  // 국가전문자격증 — 금융·법률·부동산
  // ────────────────────────────────────────
  '공인중개사': [
    { title: '2026 에듀윌 공인중개사 1차 단원별 기출문제집 부동산학개론', author: '이영방', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 3245, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012574392', imageUrl: KB('S000219085090'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085090' },
    { title: '2026 에듀윌 공인중개사 1차 단원별 기출문제집 민법 및 민사특별법', author: '심정욱', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012574412', imageUrl: KB('S000219085096'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085096' },
    { title: '2026 에듀윌 공인중개사 1차 부동산학개론 이영방 합격서', author: '이영방', publisher: '에듀윌', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.7, reviews: 2134, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012411685', imageUrl: KB('S000218640567'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218640567' },
    { title: '2026 박문각 공인중개사 1차 단원별 기출문제집', author: '박문각 공인중개사연구소', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219926627'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219926627' },
    { title: '2026 해커스 공인중개사 1차 단원별 기출문제집 민법 및 민사특별법', author: '채희대', publisher: '해커스패스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1654, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012915839', imageUrl: KB('S000219488645'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219488645' },
    { title: '2026 에듀윌 공인중개사 2차 단원별 기출문제집 공인중개사법령 및 중개실무', author: '임선정', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1432, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012574415', imageUrl: KB('S000219085089'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085089' },
    { title: '2026 에듀윌 공인중개사 2차 단원별 기출문제집 부동산공시법', author: '김민석', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1123, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012574437', imageUrl: KB('S000219085095'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085095' },
    { title: '2026 박문각 공인중개사 2차 단원별 기출문제집', author: '박문각 공인중개사연구소', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219931403'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219931403' },
    { title: '2026 에듀윌 공인중개사 1차 핵심요약집+기출팩', author: '에듀윌 공인중개사연구소', publisher: '에듀윌', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 876, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012731725', imageUrl: KB('S000219387826'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219387826' },
    { title: '2026 메가랜드 공인중개사 2차 회차별 기출문제집', author: '메가랜드 부동산교육연구소', publisher: '메가랜드', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 765, tags: ['추천'], hasEbook: false, imageUrl: KB('S000220452545'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220452545' },
  ],

  '세무사': [
    { title: '세법개론 1(2026)', author: '이철재, 정우승, 유은종', publisher: '리즈북스', price: 36000, originalPrice: 36000, discount: '0%', rating: 4.8, reviews: 1234, tags: ['베스트'], hasEbook: false, isbn: '9791124345016', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124345016.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219470255' },
    { title: '2026 시대에듀 기출이답이다 CTA 세무사 1차 재정학 10개년 기출문제해설', author: '송지은', publisher: '시대고시기획', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 17, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012181368', imageUrl: KB('S000218330722'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218330722' },
  ],

  '공인회계사': [
    { title: '세법개론 1(2026)', author: '이철재, 정우승, 유은종', publisher: '리즈북스', price: 36000, originalPrice: 36000, discount: '0%', rating: 4.8, reviews: 1234, tags: ['베스트'], hasEbook: false, isbn: '9791124345016', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124345016.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219470255' },
    { title: '2026 공인회계사 2차 대비 원가관리회계 기출문제집', author: '김상욱', publisher: '테이크잇이지', price: 18700, rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012520651', imageUrl: KB('S000219085406'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085406' },
    { title: '경제학연습 미시편', author: '정병열', publisher: '세경북스', price: 47700, originalPrice: 53000, discount: '10%', rating: 4.5, reviews: 543, tags: ['추천'], hasEbook: false, isbn: '9791159734526', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791159734526.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216352206' },
  ],

  '감정평가사': [
    { title: '2026 시대에듀 감정평가사 1차 부동산학원론 한권으로 끝내기', author: '윤지현, 시대감정평가연구소', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 5.0, reviews: 8, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011981764', imageUrl: KB('S000217577227'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217577227' },
    { title: '2026 박문각 감정평가사 2차 지오 감정평가이론 기출문제집', author: '지오', publisher: '박문각', price: 37800, originalPrice: 42000, discount: '10%', rating: 5.0, reviews: 5, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218564943'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218564943' },
    { title: '경제학연습 미시편', author: '정병열', publisher: '세경북스', price: 47700, originalPrice: 53000, discount: '10%', rating: 4.6, reviews: 543, tags: ['베스트'], hasEbook: false, isbn: '9791159734526', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791159734526.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216352206' },
    { title: '2026 해커스 감정평가사 양기백 감정평가관계법규 1차 핵심요약집', author: '양기백', publisher: '해커스 감정평가사', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 6, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011711325', imageUrl: KB('S000217006539'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217006539' },
    { title: '2026 해커스 감정평가사 회계학 1차 기출+예상문제집', author: '정윤돈, 엄윤', publisher: '해커스 감정평가사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.8, reviews: 11, tags: ['추천'], hasEbook: false, imageUrl: KB('S000217379346'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217379346' },
    { title: '2026 해커스 감정평가사(감평사) 김춘환 민법 1차 핵심요약집', author: '김춘환', publisher: '해커스 감정평가사', price: 10800, originalPrice: 12000, discount: '10%', rating: 5.0, reviews: 2, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012333098', imageUrl: KB('S000218741564'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218741564' },
  ],

  '변리사': [
    { title: '2027 시대에듀 변리사 1차 산업재산권법 한권으로 끝내기', author: '정은석, 이유정, 오윤정', publisher: '시대고시기획', price: 50400, originalPrice: 56000, discount: '10%', rating: 5.0, reviews: 8, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012949664', imageUrl: KB('S000219811941'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219811941' },
  ],

  '법무사': [
    { title: '2026 시대에듀 법무사 1차 전과목 주요 최신판례 한권으로 끝내기', author: '박종화, 시대법학연구소', publisher: '시대고시기획', price: 34200, originalPrice: 38000, discount: '10%', rating: 5.0, reviews: 15, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012695779', imageUrl: KB('S000219391338'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219391338' },
    { title: '2026 박문각 법무사 2차 김기찬 등기신청서류의 작성 기본서', author: '김기찬', publisher: '박문각', price: 27000, originalPrice: 30000, discount: '10%', rating: 3.8, reviews: 2, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219570542'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219570542' },
  ],

  '공인노무사': [
    { title: '2026 시대에듀 EBS 공인노무사 1차 노동법 기출문제 한권으로 끝내기', author: 'EBS 교수진', publisher: '시대고시기획', price: 34200, originalPrice: 38000, discount: '10%', rating: 5.0, reviews: 14, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217119498'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217119498' },
    { title: '2026 박문각 공인노무사 1차 정율 사회보험법 기본이론', author: '류호진', publisher: '박문각', price: 20700, originalPrice: 23000, discount: '10%', rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217327377'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217327377' },
  ],

  '관세사': [
  ],

  '손해사정사': [
    { title: '2026 시대에듀 손해사정사 1차 보험계약법 한권으로 끝내기', author: '김명규, 강문우, 김창영', publisher: '시대고시기획', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 14, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012067631', imageUrl: KB('S000218053992'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218053992' },
    { title: '2026 박손사의 신체손해사정사 2차 의학이론 + 기출예상문제', author: '박관양', publisher: '직업상점', price: 29700, originalPrice: 33000, discount: '10%', rating: 5.0, reviews: 11, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218642144'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218642144' },
    { title: '2026 신체손해사정사 2차 의학이론 핵심노트+기출정복', author: '김윤아', publisher: '고시아카데미', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.9, reviews: 24, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218907715'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218907715' },
    { title: '2026 인스TV 손해사정사 2차 핵심 자동차보험 이론과 실무', author: '박세원', publisher: '고시아카데미', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.9, reviews: 12, tags: ['추천'], hasEbook: false, imageUrl: KB('S000217756182'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217756182' },
  ],

  '보험계리사': [
    { title: '경제학연습 미시편', author: '정병열', publisher: '세경북스', price: 47700, originalPrice: 53000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], hasEbook: false, isbn: '9791159734526', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791159734526.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216352206' },
  ],

  '일반행정사': [
    { title: '2026 The준 행정법 최종 점검 실전 모의고사', author: '이재준', publisher: '도담북스', price: 13500, originalPrice: 15000, discount: '10%', rating: 2.5, reviews: 1, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219411742'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219411742' },
  ],

  '주택관리사보': [
    { title: '2026 박문각 주택관리사 1차 핵심기출문제', author: '김종화, 김용규, 설신재 외', publisher: '박문각', price: 28800, originalPrice: 32000, discount: '10%', rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218840718'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218840718' },
    { title: '2026 해커스 주택관리사 2차 핵심요약집 공동주택관리실무', author: '김성환, 해커스 주택관리사시험 연구소', publisher: '해커스주택관리사', price: 17100, originalPrice: 19000, discount: '10%', rating: 5.0, reviews: 4, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219980768'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219980768' },
    { title: '2026 에듀윌 주택관리사 2차 핵심요약집 공동주택관리실무 이론편+문제편', author: '김영곤', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219717643'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219717643' },
    { title: '2026 경록 주택관리사 적중실전모의고사 1, 2차 세트', author: '경록 신한부동산연구소', publisher: '경록', price: 61200, originalPrice: 68000, discount: '10%', tags: ['추천'], hasEbook: false, imageUrl: KB('S000219668570'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219668570' },
  ],

  // ────────────────────────────────────────
  // 국가전문자격증 — 복지·교육 계열
  // ────────────────────────────────────────
  '사회복지사1급': [
    { title: '2027 나눔의집 사회복지사1급 7개년도 회차별 기출문제집', author: '사회복지교육연구센터', publisher: '나눔의집', price: 34200, originalPrice: 38000, discount: '10%', tags: ['베스트'], hasEbook: false, imageUrl: KB('S000220662352'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220662352' },
    { title: '2026 시대에듀 사회복지사 1급 한권으로 끝내기', author: '시대사회복지연구소', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 1654, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138385541.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216145381' },
    { title: '2027 에듀윌 사회복지사 1급 핵심요약집+무료특강', author: '손용근, 최승희, 윤나랑, 신경안, 임화영', publisher: '에듀윌', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.7, reviews: 6, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223898', imageUrl: KB('S000219972916'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219972916' },
    { title: '2027 해커스 사회복지사 1급 한권합격+무료특강 (8영역 이론+최신기출+기출 OX)', author: '박정훈', publisher: '해커스 사회복지사', price: 36000, originalPrice: 40000, discount: '10%', rating: 5.0, reviews: 19, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219249165'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219249165' },
    { title: '2027 사회복지사 1급 빈출 1000제', author: '김광현', publisher: '시스컴', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 2, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219019111'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219019111' },
  ],

  '청소년상담사2급': [
    { title: '2026 청소년상담사 3급 한권으로 끝내기', author: '청소년상담사연구회', publisher: '시대고시기획', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 876, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012527017', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143406095.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219059292' },
    { title: '2026 청소년상담사 2급 한권으로 끝내기', author: '청소년상담사연구회', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012704563', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143406071.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219411773' },
  ],

  '청소년지도사2급': [
    { title: '2026 청소년지도사 2·3급 한권으로 끝내기', author: '청소년지도사연구회', publisher: '시대고시기획', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012305539', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143402967.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218704137' },
    { title: '2026 청소년지도사 면접 완벽 대비', author: '면접연구회', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 356, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012816300', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143412003.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219570080' },
  ],

  '평생교육사': [
    { title: '평생교육경영론', author: '권두승, 최운실', publisher: '교육과학사', price: 20000, originalPrice: 20000, discount: '0%', rating: 4.5, reviews: 456, tags: ['베스트'], hasEbook: false, isbn: '9788925408040', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788925408040.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000000474068' },
    { title: '평생교육 프로그램개발', author: '기영화', publisher: '학지사', price: 10000, originalPrice: 10000, discount: '0%', rating: 4.5, reviews: 378, tags: ['추천'], hasEbook: false, isbn: '9788975485855', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788975485855.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001175547' },
  ],

  // ────────────────────────────────────────
  // 국가전문자격증 — 건축·기타 계열
  // ────────────────────────────────────────
  '건축사': [
  ],

  '수의사': [
    { title: '수의사 국가시험 대비 KVLE 모의고사 2024', author: '수의미래연구소', publisher: '젊수', price: 35000, rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, imageUrl: KB('S000212461033'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212461033' },
  ],

  '2급생활스포츠지도사': [
    { title: '2026 메인에듀 2급 생활스포츠지도사 필기 한 권으로 끝내기', author: '메인에듀 스포츠지도사 연구소', publisher: '메인에듀', price: 27900, originalPrice: 31000, discount: '10%', tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218881268'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218881268' },
  ],

  '사회조사분석사2급': [
    { title: '2026 사회조사분석사 기출문제 완전분석', author: '시대통계연구소', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 765, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011937569', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138397490.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217462891' },
    { title: '2026 해커스 사회조사분석사 2급 필기 한권합격 이론+최신기출+핵심노트', author: '김홍규', publisher: '해커스자격증', price: 30510, originalPrice: 33900, discount: '10%', tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218560804'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218560804' },
  ],

  '사회조사분석사1급': [
  ],

  // ────────────────────────────────────────
  '안경사': [
    { title: '2026 시대에듀 안경사 최종모의고사+무료강의', author: '김정복, 이종하', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 5.0, reviews: 5, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013000285', imageUrl: KB('S000219930183'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219930183' },
  ],

  // ────────────────────────────────────────
  '언어재활사': [
    { title: '2026 시대에듀 언어재활사 최종모의고사', author: '곽경미, 곽은정, 엄지연, 이보람', publisher: '시대고시기획', price: 25200, originalPrice: 28000, discount: '10%', tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013268945', imageUrl: KB('S000220455785'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220455785' },
    { title: '언어재활사를 위한 임상 가이드', author: 'Froma P. Roth, Colleen K. Worthington', publisher: '박학사', price: 27000, rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, imageUrl: KB('S000001633635'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001633635' },
  ],

  // ────────────────────────────────────────
  '치과기공사': [
    { title: '치과재료학', author: '한국치과재료학교수협의회', publisher: '군자출판사', price: 80000, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219647914'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219647914' },
  ],

  // ────────────────────────────────────────
  '조산사': [
  ],

  // ────────────────────────────────────────
  '소방안전관리자2급': [
    { title: '2027 찐합격 소방안전관리자 2급 기출문제 총집합+5개년 기출문제', author: '공하성', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000220176733'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220176733' },
    { title: '2027 박문각 소방안전관리자 2급 8개년 기출문제집+무료강의', author: '김연진', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012889218', imageUrl: KB('S000219791382'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219791382' },
    { title: '2027 박문각 소방안전관리자 2급 핵심이론서+무료특강', author: '김연진', publisher: '박문각', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012881442', imageUrl: KB('S000219787574'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219787574' },
    { title: '2026 챕스랜드 소방안전관리자 2급 찐정리 문신 이론서', author: '서채빈', publisher: '종이향기', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218666591'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218666591' },
    { title: '2026 에듀윌 소방안전관리자 2급 7개년 기출문제집+무료특강', author: '손익희', publisher: '에듀윌', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223818', imageUrl: KB('S000218235489'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218235489' },
    { title: '2027 찐합격 소방안전관리자 2급 합격노트+8개년 기출문제', author: '공하성', publisher: '성안당', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], hasEbook: false, imageUrl: KB('S000220176737'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220176737' },
    { title: '2027 박문각 소방안전관리자 2급 (핵심이론+기출문제) 세트', author: '김연진', publisher: '박문각', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 178, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219791389'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219791389' },
    { title: '2027 모아 소방안전관리자 2급 이론서 무료특강', author: '모아합격전략연구소', publisher: '모아교육그룹', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013372455', imageUrl: KB('S000219868641'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219868641' },
    { title: '2026 시대에듀 소방안전관리자 2급 기출예상문제집', author: '김미현', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012686560', imageUrl: KB('S000219381978'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219381978' },
    { title: '2027 김영북스 소방안전관리자 2급 기출예상 단권끝장', author: '심승아', publisher: '김영북스', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012923839', imageUrl: KB('S000219791300'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219791300' },
  ],

  // ────────────────────────────────────────
  '소방안전관리자3급': [
    { title: '2027 찐합격 소방안전관리자3급 기출문제 총집합+5개년 기출문제', author: '공하성', publisher: '성안당', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000220362738'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220362738' },
    { title: '2026 박문각 소방안전관리자 3급 8개년 기출문제집+무료강의', author: '김연진', publisher: '박문각', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012586117', imageUrl: KB('S000219249527'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219249527' },
    { title: '2026 찐합격 소방안전관리자 3급 기출문제 총집합+5개년 기출문제', author: '공하성', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219332876'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219332876' },
    { title: '2026 소방안전관리자 3급 합격노트+8개년 기출문제', author: '공하성', publisher: '성안당', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219332877'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219332877' },
    { title: '2026 쇼츠 소방안전관리자 3급 기출예상문제집', author: '소방안전관리자회', publisher: '서울고시각', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012495359', imageUrl: KB('S000218907730'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218907730' },
    { title: '2027 찐합격 소방안전관리자3급 합격노트+8개년 기출문제', author: '공하성', publisher: '성안당', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], hasEbook: false, imageUrl: KB('S000220362739'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220362739' },
    { title: '2026 소방안전관리자 3급 기출+적중예상문제', author: '소방안전연구회', publisher: '책과상상', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: false, imageUrl: KB('S000218229062'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218229062' },
  ],

  // ────────────────────────────────────────
  '에너지관리기사': [
    { title: '2026 에듀윌 에너지관리기사 필기 한권끝장+무료특강', author: '남진우, 박수한, 어준혁 외', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223878', imageUrl: KB('S000216854276'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216854276' },
    { title: '에너지아카데미의 2026 더플러스 에너지관리기사 기출문제집 필기', author: '에너지아카데미, 이상식 외', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012093212', imageUrl: KB('S000217513175'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217513175' },
    { title: '2026 시대에듀 Win-Q 에너지관리기사 필기 단기합격', author: '박병호', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012497025', imageUrl: KB('S000219010747'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219010747' },
    { title: '2026 스마트 에너지관리기사 필기', author: '허원회', publisher: '성안당', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218969238'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218969238' },
    { title: '2026 에너지관리기사 필기', author: '권오수, 한홍걸 외', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 143, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217122034'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217122034' },
    { title: '2026 에너지관리기사 필기 과년도 문제풀이 10개년', author: '권오수', publisher: '예문사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], hasEbook: false, imageUrl: KB('S000218666506'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218666506' },
    { title: '모아 에너지관리기사 필기: 핵심이론+과년도 8개년', author: '모아합격기술연구소', publisher: '모아교육그룹', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012128113', imageUrl: KB('S000217524828'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217524828' },
    { title: '2026 에너지관리기사 필기', author: '서상희', publisher: '동일출판사', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], hasEbook: false, imageUrl: KB('S000217454947'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217454947' },
    { title: '2026 물쌤닷컴 에너지관리기사 필기+기출해설', author: '김선태', publisher: '미교원', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], hasEbook: false, imageUrl: KB('S000218632205'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218632205' },
    { title: '2026 과년도 출제문제 중심 에너지관리기사 필기', author: '서상희', publisher: '동일출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], hasEbook: false, imageUrl: KB('S000217454935'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217454935' },
  ],

  // ────────────────────────────────────────
  '신재생에너지발전설비기사': [
    { title: '2026 신재생에너지 발전설비(태양광) 기사 필기', author: '태양광발전연구회', publisher: '동일출판사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217928341'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217928341' },
    { title: '2026 마스터 신재생에너지 발전설비(태양광) 기사 필기', author: '봉우근', publisher: '엔트미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218688575'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218688575' },
    { title: '2026 신재생에너지발전설비(태양광) 필기 13개년 과년도', author: '이후곤', publisher: '명인북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218276633'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218276633' },
    { title: '2026 신재생에너지 발전설비(태양광) 기사 실기', author: '태양광발전연구회', publisher: '동일출판사', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], hasEbook: false, imageUrl: KB('S000218841024'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218841024' },
    { title: '2026 마스터 신재생에너지 발전설비(태양광) 기사 실기', author: '봉우근', publisher: '엔트미디어', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: false, imageUrl: KB('S000218846039'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218846039' },
  ],

  // ────────────────────────────────────────
  '물류관리사': [
    { title: '2026 EBS 물류관리사 단기완성', author: '전표훈, 변달수, 신지원', publisher: '신지원', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012350179', imageUrl: KB('S000218632186'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218632186' },
    { title: '2026 에듀윌 물류관리사 한권끝장+무료특강', author: '황사빈, 전표훈, 류하영', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223825', imageUrl: KB('S000218668270'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218668270' },
    { title: '2026 해커스 물류관리사 한권합격 이론+최신기출', author: '이인호, 정연태, 송민', publisher: '해커스금융', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 222, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218366552'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218366552' },
    { title: '2026 EBS 물류관리사 기출문제집', author: 'EBS물류관리사교수진', publisher: '신지원', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013020487', imageUrl: KB('S000219002936'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219002936' },
    { title: '2026 시대에듀 물류관리사 한권으로 끝내기', author: '시대물류관리연구소', publisher: '시대고시기획', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 167, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012202685', imageUrl: KB('S000218437555'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218437555' },
    { title: '2026 시대에듀 물류관리사 5개년 첨삭식 기출문제해설', author: '시대물류관리연구소', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012017412', imageUrl: KB('S000217600693'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217600693' },
    { title: '2026 EBS물류관리사 벼락치기 핵심요약집', author: '전표훈, 변달수', publisher: '신지원', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013020486', imageUrl: KB('S000219550128'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219550128' },
    { title: '2026 시대에듀 물류관리사 단기완성 핵심요약집', author: '시대물류관리연구소', publisher: '시대고시기획', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012704532', imageUrl: KB('S000219391360'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219391360' },
  ],

  // ────────────────────────────────────────
  '정보통신기사': [
    { title: '2026 이기적 정보통신기사 필기+실기 올인원', author: '안영준, 육철민, 윤경수 외', publisher: '영진닷컴', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012461259', imageUrl: KB('S000219011189'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219011189' },
    { title: '2026 시대에듀 유선배 정보통신기사 필기 합격노트', author: '변세현, 손대호 외', publisher: '시대고시기획', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012329281', imageUrl: KB('S000218751552'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218751552' },
    { title: '정보통신기술사들이 저술한 2026 정보통신기사 필기', author: '박배영, 박희남, 백윤철 감수 외', publisher: '정림사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218673825'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218673825' },
    { title: '2026 정보통신기사 필기', author: '김남선, 양윤석 외', publisher: '세화', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219412311'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219412311' },
    { title: '2026 이패스 정보통신기사 필기(이론편+문제편) 6주 CUT', author: '권병철', publisher: '이패스코리아', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012538657', imageUrl: KB('S000218934630'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218934630' },
    { title: '2026 정보통신기사 필기 기출문제집+실전모의고사', author: '김한기, 김영현 외', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219085254'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219085254' },
    { title: '2026 이패스 정보통신기사 필기 실기 세트', author: '권병철', publisher: '이패스코리아', price: 63000, originalPrice: 70000, discount: '10%', rating: 4.4, reviews: 134, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219434445'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219434445' },
  ],

  // ────────────────────────────────────────
  '건축설비기사': [
    { title: '2026 건축설비기사 필기 이론/문제', author: '조성안, 이석훈 외', publisher: '기문사', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218180959'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218180959' },
    { title: '2026 핵심기출 건축설비기사 필기 기출모의고사', author: '조성안, 이석훈 외', publisher: '기문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218356158'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218356158' },
    { title: '2026 건축설비기사 필기 기출공략 문제로 한번에 합격하기', author: '정하정', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012484732', imageUrl: KB('S000218322930'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218322930' },
    { title: '2026 건축설비기사 필기', author: '안병관', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 145, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219004244'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219004244' },
    { title: '2026 compact 건축설비기사 필기', author: '조성안, 이석훈 외', publisher: '기문사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218790132'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218790132' },
    { title: '2026 건축설비산업기사 필기 이론/문제', author: '조성안, 이석훈 외', publisher: '기문사', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], hasEbook: false, imageUrl: KB('S000217941990'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217941990' },
    { title: '2026 compact 건축설비산업기사 필기', author: '조성안, 이석훈 외', publisher: '기문사', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], hasEbook: false, imageUrl: KB('S000218790134'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218790134' },
  ],

  // ────────────────────────────────────────
  '도시계획기사': [
    { title: '2026 도시계획기사 필기 세트', author: 'Urban. Lee', publisher: '예문사', price: 49500, originalPrice: 55000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219117166'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219117166' },
    { title: '2026 양재호의 도시계획기사 필기 이론편', author: '양재호', publisher: '트랜북스', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218229943'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218229943' },
    { title: '2026 양재호의 도시계획기사 필기 기출편', author: '양재호', publisher: '트랜북스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012084971', imageUrl: KB('S000218179861'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218179861' },
  ],


  // ────────────────────────────────────────
  // 민간자격증
  // ────────────────────────────────────────
  'GTQ': [
    { title: '2026 이기적 GTQ 포토샵 1급 기본서 ver. CC', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2341, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012089077', imageUrl: KB('S000218183225'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218183225' },
    { title: '2026 이기적 GTQ 포토샵+일러스트 1급 올인원 ver.CC', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1876, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012449050', imageUrl: KB('S000218960821'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218960821' },
    { title: '2026 시대에듀 유선배 GTQ 포토샵 1급 합격노트 ver. Adobe CC', author: '유선배', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011904654', imageUrl: KB('S000217401720'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217401720' },
    { title: '2026 시대에듀 유선배 GTQ 일러스트 1급 합격노트 ver. Adobe CC', author: '유선배', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011743534', imageUrl: KB('S000217119017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217119017' },
  ],

  'GTQi': [
    { title: '2026 이기적 GTQ 포토샵+일러스트 1급 올인원 ver.CC', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1876, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012449050', imageUrl: KB('S000218960821'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218960821' },
    { title: '2026 시대에듀 유선배 GTQ 일러스트 1급 합격노트 ver. Adobe CC', author: '유선배', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011743534', imageUrl: KB('S000217119017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217119017' },
  ],

  'MOS': [
    { title: '멘토시리즈 MOS 365 엑셀', author: '멘토 IT 연구회', publisher: '멘토르', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219135369'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219135369' },
    { title: '멘토시리즈 MOS 365 워드', author: '멘토 IT 연구회', publisher: '멘토르', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219135217'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219135217' },
  ],

  'TOEIC': [
    { title: '해커스 토익 최신기출유형 실전 10회 LC(리스닝)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.8, reviews: 5678, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013237742', imageUrl: KB('S000220438564'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220438564' },
    { title: '해커스 토익 최신기출유형 실전 10회 RC(리딩)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.8, reviews: 5432, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013237828', imageUrl: KB('S000220438585'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220438585' },
    { title: '해커스 토익 PART 7 집중공략 777 RC', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.8, reviews: 4321, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012553679', imageUrl: KB('S000219129734'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219129734' },
    { title: 'EBS 김대균 토익킹 (2026년 7월)', author: '김대균', publisher: '한국교육방송공사', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 3210, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013182524', imageUrl: KB('S000220240803'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220240803' },
    { title: 'ETS 토익 기출보카(VOCA)', author: 'ETS', publisher: 'YBM', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.9, reviews: 23, tags: ['추천'], hasEbook: false, isbn: '9788917244168', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788917244168.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220226890' },
  ],

  'TOEIC Speaking': [
    { title: '10일 만에 끝내는 해커스 토익스피킹(토스) 스타트', author: '해커스 어학연구소', publisher: '해커스어학연구소', price: 17010, originalPrice: 18900, discount: '10%', rating: 4.9, reviews: 112, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000003158150', imageUrl: KB('S000060622715'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000060622715' },
  ],

  'OPIc': [
    { title: '10일 만에 끝내는 해커스 OPIc 오픽 Advanced 공략', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.8, reviews: 3456, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000007815005', imageUrl: KB('S000202406853'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000202406853' },
    { title: '10일 만에 끝내는 해커스 OPIc 오픽 START: Intermediate 공략', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.7, reviews: 2987, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000007815002', imageUrl: KB('S000208578134'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000208578134' },
    { title: '스파르타 OPIc 오픽 IM2-IH 공략', author: '스파르타 어학연구소', publisher: '스파르타북스', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012499051', imageUrl: KB('S000218846962'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218846962' },
    { title: '오픽 요정 벨라쌤의 OPIc 초단기 완성 IH-AL 중상급', author: '강다연(벨라쌤)', publisher: '세상모든책', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 1876, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011102719', imageUrl: KB('S000215553595'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215553595' },
    { title: '오픽 요정 벨라쌤의 OPIc 초단기 완성 IL-IM 초급', author: '강다연(벨라쌤)', publisher: '세상모든책', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011102715', imageUrl: KB('S000215553473'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215553473' },
  ],

  'AFPK': [
    { title: '2025 해커스 AFPK 핵심문제집 모듈 1', author: '해커스 금융아카데미', publisher: '해커스패스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 2134, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000216317051'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216317051' },
    { title: '2025 해커스 AFPK 핵심문제집 모듈 2', author: '해커스 금융아카데미', publisher: '해커스패스', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000216317054'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216317054' },
    { title: '2025 해커스 AFPK 최종 실전모의고사', author: '해커스 금융아카데미', publisher: '해커스패스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000216497312'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216497312' },
    { title: '2025 이패스 AFPK 핵심문제집 모듈1', author: '김종희', publisher: '이패스코리아', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], hasEbook: false, imageUrl: KB('S000216841802'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216841802' },
    { title: '2025 이패스 AFPK 핵심문제집 모듈2', author: '김종희', publisher: '이패스코리아', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], hasEbook: false, imageUrl: KB('S000216841809'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216841809' },
  ],

  'CFP': [
    { title: '2025 해커스 CFP 사례형 핵심문제집', author: '해커스 금융아카데미', publisher: '해커스금융', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1543, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217066248'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217066248' },
    { title: '2025 해커스 CFP 지식형 핵심문제집', author: '해커스 금융아카데미', publisher: '해커스금융', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 1234, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217035691'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217035691' },
    { title: '2025 해커스 CFP 최종 실전모의고사', author: '해커스 금융아카데미', publisher: '해커스금융', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 987, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217371753'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217371753' },
    { title: '2025 이패스 CFP 사례형 핵심문제집', author: '이패스코리아 금융연구소', publisher: '이패스코리아', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 765, tags: ['추천'], hasEbook: false, imageUrl: KB('S000217201184'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217201184' },
    { title: '2025 이패스 CFP 지식형 핵심문제집', author: '이패스코리아 금융연구소', publisher: '이패스코리아', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 654, tags: ['추천'], hasEbook: false, imageUrl: KB('S000217029818'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217029818' },
    { title: '토마토패스 CFP 지식형 핵심정리문제집', author: '홍영진·김인회 외', publisher: '예문에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 543, tags: ['추천'], hasEbook: false, imageUrl: KB('S000217296470'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217296470' },
    { title: '토마토패스 CFP 사례형 핵심정리문제집', author: '홍영진·김인회 외', publisher: '예문에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 432, tags: ['추천'], hasEbook: false, imageUrl: KB('S000217595699'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217595699' },
  ],

  '바리스타1급': [
    { title: '바리스타 1급 자격시험 예상문제집 (NCS 개정판)', author: '한국커피협회', publisher: '한국커피협회', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000214736527'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214736527' },
    { title: '커피 바리스타 문제집 & 커피용어 해설', author: '한국커피바리스타협회', publisher: '성안당', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.5, reviews: 987, tags: ['추천'], hasEbook: false, imageUrl: KB('S000001941998'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001941998' },
  ],

  '바리스타2급': [
    { title: '2026 이기적 바리스타 2급 7일 끝, 합격', author: '임형준', publisher: '영진닷컴', price: 11700, originalPrice: 13000, discount: '10%', rating: 4.8, reviews: 3210, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012448164', imageUrl: KB('S000218917586'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218917586' },
  ],

  'FAT': [
    { title: '2026 I CAN FAT 회계실무 1급', author: '아이캔 세무회계연구소', publisher: '아이캔', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012590054', imageUrl: KB('S000219117007'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219117007' },
    { title: '2026 I CAN FAT 회계실무 2급', author: '아이캔 세무회계연구소', publisher: '아이캔', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2543, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012590052', imageUrl: KB('S000218979828'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218979828' },
    { title: '2026 로그인 FAT 1급', author: '박병규', publisher: '세경북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 2134, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218972562'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218972562' },
    { title: '2026 로그인 FAT 1급 기출문제', author: '박병규', publisher: '세경북스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['추천'], hasEbook: false, imageUrl: KB('S000218620952'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218620952' },
    { title: '2026 이패스 FAT 1급 회계실무 이론+실무+최신기출', author: '이패스코리아 편집부', publisher: '이패스코리아', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012685185', imageUrl: KB('S000219333860'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219333860' },
  ],

  'ITQ': [
    { title: '2027 이기적 ITQ 한글 ver.2022', author: '영진정보연구소', publisher: '영진닷컴', price: 16200, originalPrice: 18000, discount: '10%', rating: 4.8, reviews: 4321, tags: ['베스트'], hasEbook: false, isbn: '9788931482386', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931482386.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000220121037' },
    { title: '2026 이기적 ITQ 엑셀 ver. 2021 기본서', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.8, reviews: 3876, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011568450', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479447.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216842008' },
    { title: '2026 이기적 ITQ 파워포인트 ver. 2021 기본서', author: '영진닷컴 수험연구소', publisher: '영진닷컴', price: 13500, originalPrice: 15000, discount: '10%', rating: 4.8, reviews: 3543, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011643432', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479461.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216886162' },
    { title: '2027 이기적 ITQ OA Master 엑셀 파워포인트 ver.2021 한글 ver. 2022 올인원', author: '영진정보연구소', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013299423', imageUrl: KB('S000220516783'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220516783' },
    { title: '시나공 ITQ 한글+엑셀+파워포인트', author: '길벗 R&D', publisher: '길벗', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['추천'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140708536.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000212390757' },
  ],

  'JLPT': [
    { title: '해커스 JLPT N1(일본어능력시험) 한 권으로 합격', author: '해커스 JLPT 연구소', publisher: '해커스어학연구소', price: 24210, originalPrice: 26900, discount: '10%', rating: 4.8, reviews: 81, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000203100592'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000203100592' },
    { title: '해커스 JLPT N2(일본어능력시험) 한권합격', author: '해커스 JLPT 연구소', publisher: '해커스어학연구소', price: 24300, originalPrice: 27000, discount: '10%', rating: 5.0, reviews: 26, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217243407'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217243407' },
  ],

  'HSK': [
    { title: '신 HSK 한권으로 합격하기 6급', author: '리홍, 고강민, 김영주', publisher: '시사중국어사', price: 22500, originalPrice: 25000, discount: '10%', rating: 5.0, reviews: 4, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000001752009'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001752009' },
    { title: '해커스 중국어 HSK 5급 한 권으로 정복 기본서 + 실전모의고사 + 핵심어휘집', author: '해커스 HSK연구소', publisher: '해커스', price: 24210, originalPrice: 26900, discount: '10%', rating: 5.0, reviews: 105, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000001715842'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001715842' },
    { title: '해커스 중국어 HSK 6급 한 권으로 고득점 달성 기본서 + 실전모의고사 + 핵심어휘집', author: '리우윈, 해커스 HSK연구소', publisher: '해커스', price: 24210, originalPrice: 26900, discount: '10%', rating: 4.7, reviews: 1987, tags: ['베스트'], hasEbook: false, isbn: '9791137904385', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791137904385.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000061351817' },
    { title: '드림중국어 HSK 5급 실전 모의고사(1-5회분 해석집 포함)', author: '드림중국어', publisher: '드림중국어', price: 26820, originalPrice: 29800, discount: '10%', tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000002987114', imageUrl: KB('S000001935017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001935017' },
  ],

  '재경관리사': [
    { title: '2026 해커스 기초회계원리 초단기 7일 완성 이론+기출+분개연습', author: '이남호', publisher: '해커스금융', price: 16200, originalPrice: 18000, discount: '10%', rating: 5.0, reviews: 12, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218668709'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218668709' },
  ],

  'ERP정보관리사': [
    { title: '2026 이기적 ERP 정보관리사 인사 1급 기본서', author: '한선생', publisher: '영진닷컴', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012758671', isbn: '9788931479096', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479096.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219521399' },
    { title: '2026 에듀윌 ERP 정보관리사 물류 1·2급 한권끝장+무료특강', author: '최주영', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.7, reviews: 1543, tags: ['베스트'], hasEbook: false, isbn: '9791136042019', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136042019.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219786616' },
    { title: '2026 에듀윌 ERP 정보관리사 회계 2급 한권끝장+무료특강', author: '유슬기', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.6, reviews: 1234, tags: ['추천'], hasEbook: false, isbn: '9791136041753', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136041753.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219542368' },
  ],

  '매경TEST': [
    { title: '2026 에듀윌 매경Test 2주끝장', author: '신경수, 황선일', publisher: '에듀윌', price: 28350, originalPrice: 31500, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223834', isbn: '9791136039866', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039866.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218741787' },
    { title: '맨큐의 경제학', author: 'N. Gregory Mankiw (이병락 역)', publisher: '경문사', price: 46500, originalPrice: 49000, discount: '5%', rating: 4.9, reviews: 39, tags: ['추천'], hasEbook: false, imageUrl: KB('S000215768656'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215768656' },
    { title: '매경Test 실전모의고사 10회분', author: '자격시험연구소', publisher: '서원각', price: 22500, originalPrice: 25000, discount: '10%', rating: 5.0, reviews: 1, tags: ['추천'], hasEbook: false, imageUrl: KB('S000218961378'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218961378' },
  ],

  'TESAT': [
    { title: '2026 에듀윌 TESAT 회차별 기출문제집+무료특강', author: '조시현, 손기준, 김상헌, 임재현', publisher: '에듀윌', price: 25200, originalPrice: 28000, discount: '10%', rating: 5.0, reviews: 6, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223823', imageUrl: KB('S000219869628'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219869628' },
    { title: '경제학원론', author: '이준구, 이창용', publisher: '문우사', price: 41610, originalPrice: 43000, discount: '3%', rating: 4.6, reviews: 1234, tags: ['추천'], hasEbook: false, isbn: '9791198642790', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791198642790.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000215621723' },
  ],

  '펀드투자권유대행인': [
    { title: '펀드투자권유대행인 한권으로 끝내기(2021)', author: '박정호', publisher: '시대고시기획', price: 16200, originalPrice: 18000, discount: '10%', rating: 5.0, reviews: 9, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000002888378', imageUrl: KB('S000001657250'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001657250' },
    { title: '토마토패스 펀드투자권유대행인 핵심정리문제집', author: '송범용, 조성', publisher: '예문에듀', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 1, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219546353'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219546353' },
    { title: '2026~2027 펀드투자권유자문인력 기출유형문제집', author: '와우패스 교수진', publisher: '와우패스', price: 21600, originalPrice: 24000, discount: '10%', tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219549898'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219549898' },
  ],

  '소믈리에': [
  ],

  '바텐더': [
  ],

  '한자능력검정': [
    { title: '2026 어문회 한자능력검정시험 2급 한 권으로 끝내기', author: '박정서, 박원길', publisher: '시대고시기획', price: 25200, originalPrice: 28000, discount: '10%', rating: 5.0, reviews: 23, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012162497', imageUrl: KB('S000218277194'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218277194' },
  ],

  'KBS한국어능력시험': [
    { title: 'KBS 한국어능력시험 기출문제 23', author: 'KBS한국어진흥원', publisher: '형설출판사', price: 29000, originalPrice: 29000, discount: '0%', rating: 4.8, reviews: 2876, tags: ['베스트'], hasEbook: false, isbn: '9788947287319', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788947287319.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000215764087' },
    { title: '해커스 KBS한국어능력시험 한 권으로 끝', author: '해커스 한국어연구소', publisher: '해커스자격증', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.9, reviews: 49, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000212713829'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212713829' },
    { title: '해커스 KBS한국어능력시험 봉투모의고사', author: '해커스 한국어연구소', publisher: '해커스자격증', price: 19710, originalPrice: 21900, discount: '10%', rating: 4.9, reviews: 24, tags: ['추천'], hasEbook: false, imageUrl: KB('S000061351286'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000061351286' },
  ],

  'TOEFL': [
    { title: '해커스 TOEFL Reading (토플 리딩)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 3210, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965426530.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218326408' },
    { title: '해커스 TOEFL Listening (토플 리스닝)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965426554.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218326411' },
    { title: 'The Official Guide to the TOEFL Test (ETS 공식)', author: 'ETS', publisher: 'McGraw-Hill', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.8, reviews: 2543, tags: ['베스트'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788917238525.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000000450489' },
    { title: '해커스 TOEFL Writing (토플 라이팅)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1987, tags: ['추천'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965426820.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218326405' },
    { title: '해커스 TOEFL Speaking (토플 스피킹)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1765, tags: ['추천'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965426561.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218326413' },
  ],

  'IELTS': [
    { title: '해커스 IELTS Writing (아이엘츠 라이팅)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005399607', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965422327.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001020186' },
    { title: "IELTS 18 Academic Student's Book with Answers", author: 'Cambridge University Press', publisher: 'Cambridge University Press', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], hasEbook: false, isbn: '9781009275187', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9781009275187.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000208475314' },
    { title: '해커스 IELTS Reading (아이엘츠 리딩)', author: '해커스어학연구소', publisher: '해커스어학연구소', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005399608', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965422297.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001020183' },
  ],

  '한국사능력검정시험': [
    { title: '2026 큰별쌤 최태성의 별별한국사 한국사능력검정시험 심화(1,2,3급)(상)', author: '최태성', publisher: '이투스북', price: 17100, originalPrice: 19000, discount: '10%', rating: 4.9, reviews: 458, tags: ['베스트'], hasEbook: false, isbn: '9791138934428', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138934428.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218674965' },
    { title: '2026 해커스 한국사능력검정시험 심화(1·2·3급) 회차별 기출문제집', author: '해커스 한국사연구소', publisher: '해커스한국사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.8, reviews: 30, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012499210', isbn: '9788969656315', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788969656315.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218841197' },
    { title: '2026 에듀윌 한국사능력검정시험 심화 만점자 필기노트로 2주끝장', author: '패스바이위드윌', publisher: '에듀윌', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 13, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013223816', isbn: '9791136039545', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791136039545.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218268592' },
    { title: '2026 큰별쌤 최태성의 별별한국사 기출 500제 한국사능력검정시험 심화(1,2,3급)', author: '최태성', publisher: '이투스북', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 292, tags: ['추천'], hasEbook: false, isbn: '9791138934459', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791138934459.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000218781780' },
  ],

  '사회통합프로그램': [
    { title: '사회통합프로그램 종합평가 한권으로 합격하기 영주용 귀화용', author: '사회통합프로그램연구소', publisher: '신지원', price: 15300, originalPrice: 17000, discount: '10%', rating: 4.7, reviews: 2345, tags: ['베스트'], hasEbook: false, isbn: '9791166335433', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791166335433.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216717808' },
    { title: '한국어와 한국문화 중급 1', author: '국립국어원 기획, 이미혜 외', publisher: '도서출판 하우', price: 10000, originalPrice: 10000, discount: '0%', rating: 4.7, reviews: 1876, tags: ['베스트'], hasEbook: false, isbn: '9791190154840', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791190154840.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001936459' },
    { title: '사회통합프로그램(KIIP) 한국사회 이해: 기본', author: '법무부 출입국·외국인정책본부', publisher: '박영스토리', price: 10000, originalPrice: 10000, discount: '0%', rating: 4.6, reviews: 1543, tags: ['베스트'], hasEbook: false, isbn: '9791186140291', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791186140291.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001880312' },
  ],

  '국내여행안내사': [
    { title: '2026 시대에듀 관광국사 한권으로 끝내기', author: '곽희정', publisher: '시대고시기획', price: 22500, originalPrice: 25000, discount: '10%', rating: 5.0, reviews: 17, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012162709', imageUrl: KB('S000218277203'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218277203' },
  ],

  '국외관광안내사': [
    { title: '국외여행인솔자 실무', author: '장서진, 정연국', publisher: '백산출판사', price: 31000, originalPrice: 31000, discount: '0%', rating: 4.7, reviews: 1543, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005060683', isbn: '9791165675523', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791165675523.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000061757729' },
  ],

  '관광통역안내사': [
    { title: '2026 관광통역안내사 영어면접 핵심 기출문제 200', author: '호기헌', publisher: '창조와지식', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.8, reviews: 2134, tags: ['베스트'], hasEbook: false, isbn: '9791176270106', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791176270106.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219407374' },
    { title: '시대에듀 50일 만에 끝내는 중국어 관광통역안내사 2차 면접', author: '김미숙', publisher: '시대고시기획', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.7, reviews: 1876, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012704543', isbn: '9791143410245', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143410245.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000219391364' },
  ],

  '한국어능력시험(TOPIK)': [
    { title: '합격특강 한국어능력시험 TOPIK 토픽 2 한권으로 끝내기', author: '전나영, 손성희', publisher: '다락원', price: 19800, originalPrice: 22000, discount: '10%', tags: ['베스트'], hasEbook: false, imageUrl: KB('S000213024398'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213024398' },
  ],

  '임용고시': [
    { title: '쌍끌이 교육학 완전학습', author: '신태식', publisher: '미래가치', price: 18000, originalPrice: 20000, discount: '10%', rating: 5.0, reviews: 2, tags: ['추천'], hasEbook: false, imageUrl: KB('S000001718999'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001718999' },
  ],

  '한국실용글쓰기': [
    { title: '한국 실용글쓰기 3배속 끝내기', author: '김남미', publisher: '박문각', price: 14400, originalPrice: 16000, discount: '10%', rating: 2.5, reviews: 1, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005064926', imageUrl: KB('S000001849113'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001849113' },
  ],

  '임상심리사2급': [
    { title: '2026 임상심리사 2급 필기 한권으로 끝내기', author: '박지원', publisher: '시대에듀', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 2876, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012067695', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143400666.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000217613999' },
    { title: '2026 임상심리사 2급 필기 기출문제집', author: 'JH상담심리연구소', publisher: '미디어정훈', price: 25200, originalPrice: 28000, discount: '10%', tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013250866', imageUrl: KB('S000218840832'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218840832' },
    { title: '현대 이상심리학', author: '권석만', publisher: '학지사', price: 32000, originalPrice: 32000, discount: '0%', rating: 4.8, reviews: 1987, tags: ['베스트'], hasEbook: false, isbn: '9788999729126', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788999729126.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000210527594' },
    { title: '심리검사의 이해', author: '최정윤', publisher: '시그마프레스', price: 23000, originalPrice: 23000, discount: '0%', rating: 4.7, reviews: 1543, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000003172738', isbn: '9788968666957', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788968666957.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001059352' },
    { title: '상담심리학의 이론과 실제', author: '천성문, 이영순, 박명숙, 이동훈, 함경애', publisher: '학지사', price: 23000, originalPrice: 23000, discount: '0%', rating: 4.6, reviews: 1234, tags: ['추천'], hasEbook: false, isbn: '9788999723711', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788999723711.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001644049' },
  ],

  '심리상담사': [
    { title: '심리상담과 치료의 이론과 실제', author: 'Gerald Corey', publisher: '학지사', price: 39000, originalPrice: 39000, discount: '0%', rating: 4.8, reviews: 3210, tags: ['베스트'], hasEbook: false, isbn: '9788962185706', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788962185706.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000216797281' },
    { title: '상담심리학의 이론과 실제', author: '노안영', publisher: '학지사', price: 22000, originalPrice: 22000, discount: '0%', rating: 4.7, reviews: 1876, tags: ['베스트'], hasEbook: false, isbn: '9788999714948', imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788999714948.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000001643218' },
    { title: '집단상담의 이론과 실제', author: '천성문 외', publisher: '학지사', price: 20000, originalPrice: 22000, discount: '10%', rating: 4.6, reviews: 1543, tags: ['추천'], hasEbook: false, imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788999732041.jpg', pageUrl: 'https://product.kyobobook.co.kr/detail/S000214304053' },
  ],

  'TAT': [
    { title: '2026 I CAN TAT 세무실무 2급', author: '아이캔 세무회계연구소', publisher: '아이캔', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.8, reviews: 2345, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012824567', imageUrl: KB('S000219495682'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219495682' },
    { title: '2026 I Can TAT 세무실무 1급', author: '아이캔 세무회계연구소', publisher: '아이캔', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.8, reviews: 1987, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013166010', imageUrl: KB('S000219812336'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219812336' },
    { title: '2026 로그인 TAT 2급', author: '박병규', publisher: '세경북스', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.7, reviews: 1765, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219349559'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219349559' },
    { title: '2026 이패스 세무회계 2급 핵심요약 및 문제풀이', author: '이패스코리아 편집부', publisher: '이패스코리아', price: 22500, originalPrice: 25000, discount: '10%', rating: 4.6, reviews: 1432, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012660907', imageUrl: KB('S000219346402'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219346402' },
    { title: '2026 이패스 세무회계 1급 핵심요약 및 문제풀이', author: '이패스코리아 편집부', publisher: '이패스코리아', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 1123, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012831420', imageUrl: KB('S000219647804'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219647804' },
  ],

  // ────────────────────────────────────────
  '컬러리스트기사': [
    // 베스트셀러 5
    { title: '2027 컬러리스트기사 · 산업기사 필기 세트', author: '조영우, 김남일 외', publisher: '예문사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 58, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000220502349'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220502349' },
    { title: '2026 이기적 컬러리스트기사·산업기사 필기 기본서', author: '선앤미', publisher: '영진닷컴', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 71, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012694396', imageUrl: KB('S000219382451'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219382451' },
    { title: '2026 동영상 강의로 배우는 컬러리스트 기사·산업기사 실기 세트', author: '조영우, 김남일, 김수예 외', publisher: '예문사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.9, reviews: 94, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218229360'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218229360' },
    { title: '2025 컬러리스트 실기시험 산업기사·기사 문제집+해설집 세트', author: '신현지', publisher: '미진사', price: 39000, originalPrice: 39000, discount: '0%', rating: 4.9, reviews: 63, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000215822561'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215822561' },
    { title: '2025 컬러리스트 기사 · 산업기사 필기 세트', author: '조영우', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.9, reviews: 112, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000214970870'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214970870' },
    // 추천수험서 5
    { title: '2024 이기적 컬러리스트기사 산업기사 필기 기본서 세트', author: '김선미, 한명숙 외', publisher: '영진닷컴', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.9, reviews: 87, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005453060', imageUrl: KB('S000201992937'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000201992937' },
    { title: '2023 컬러리스트기사 산업기사 필기 한권으로 끝내기', author: '강수경, 선혜경, 은광희, 이수경, 최영미 외', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.9, reviews: 76, tags: ['추천'], hasEbook: false, imageUrl: KB('S000201054216'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000201054216' },
    { title: '2023 컬러리스트 기사/산업기사 필기', author: '배용진, 황상윤 외', publisher: '지구문화', price: 33000, originalPrice: 33000, discount: '0%', rating: 4.5, reviews: 42, tags: ['추천'], hasEbook: false, imageUrl: KB('S000200846908'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200846908' },
    { title: '2023 NEW출제경향대비 컬러리스트 필기시험 산업기사·기사 세트', author: '빈혜진', publisher: '미진사', price: 37000, originalPrice: 37000, discount: '0%', rating: 4.4, reviews: 39, tags: ['추천'], hasEbook: false, imageUrl: KB('S000200833726'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200833726' },
    { title: 'New 컬러리스트(Colorist) 기사 산업기사', author: '배용진, 이정은, 박희경 외', publisher: '지구문화사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 51, tags: ['추천'], hasEbook: false, imageUrl: KB('S000001065999'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001065999' },
  ],

  // ────────────────────────────────────────
  '컬러리스트산업기사': [
    // 베스트셀러 5
    { title: '2027 컬러리스트기사 · 산업기사 필기 세트', author: '조영우, 김남일 외', publisher: '예문사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.6, reviews: 58, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000220502349'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220502349' },
    { title: '2026 이기적 컬러리스트기사·산업기사 필기 기본서', author: '선앤미', publisher: '영진닷컴', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.6, reviews: 71, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012694396', imageUrl: KB('S000219382451'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219382451' },
    { title: '2026 동영상 강의로 배우는 컬러리스트 기사·산업기사 실기 세트', author: '조영우, 김남일, 김수예 외', publisher: '예문사', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.9, reviews: 94, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000218229360'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218229360' },
    { title: '2025 컬러리스트 실기시험 산업기사·기사 문제집+해설집 세트', author: '신현지', publisher: '미진사', price: 39000, originalPrice: 39000, discount: '0%', rating: 4.9, reviews: 63, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000215822561'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215822561' },
    { title: '2025 컬러리스트 기사 · 산업기사 필기 세트', author: '조영우', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.9, reviews: 112, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000214970870'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214970870' },
    // 추천수험서 5
    { title: '2024 이기적 컬러리스트기사 산업기사 필기 기본서 세트', author: '김선미, 한명숙 외', publisher: '영진닷컴', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.9, reviews: 87, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005453060', imageUrl: KB('S000201992937'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000201992937' },
    { title: '2023 컬러리스트기사 산업기사 필기 한권으로 끝내기', author: '강수경, 선혜경, 은광희, 이수경, 최영미 외', publisher: '시대고시기획', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.9, reviews: 76, tags: ['추천'], hasEbook: false, imageUrl: KB('S000201054216'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000201054216' },
    { title: '2023 컬러리스트 기사/산업기사 필기', author: '배용진, 황상윤 외', publisher: '지구문화', price: 33000, originalPrice: 33000, discount: '0%', rating: 4.5, reviews: 42, tags: ['추천'], hasEbook: false, imageUrl: KB('S000200846908'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200846908' },
    { title: '2023 NEW출제경향대비 컬러리스트 필기시험 산업기사·기사 세트', author: '빈혜진', publisher: '미진사', price: 37000, originalPrice: 37000, discount: '0%', rating: 4.4, reviews: 39, tags: ['추천'], hasEbook: false, imageUrl: KB('S000200833726'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000200833726' },
    { title: 'New 컬러리스트(Colorist) 기사 산업기사', author: '배용진, 이정은, 박희경 외', publisher: '지구문화사', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 51, tags: ['추천'], hasEbook: false, imageUrl: KB('S000001065999'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000001065999' },
  ],

  // ────────────────────────────────────────
  // 경찰공무원(순경) — 교보문고 경찰직 카테고리(경찰학개론/경찰헌법/경찰형법) 베스트셀러 기준, 2026-07-29 확인
  '경찰공무원(순경)': [
    { title: '2027 해커스경찰 조현 경찰학 기본서', author: '조현', publisher: '해커스경찰', price: 43200, originalPrice: 48000, discount: '10%', rating: 5.0, reviews: 20, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219595180'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219595180' },
    { title: '2026 해커스경찰 신동욱 경찰헌법 기본서', author: '신동욱', publisher: '해커스경찰', price: 54000, originalPrice: 60000, discount: '10%', rating: 5.0, reviews: 21, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217751397'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217751397' },
    { title: '2026 해커스경찰 갓대환 형사법 핵심요약집 형법', author: '김대환', publisher: '해커스경찰', price: 40500, originalPrice: 45000, discount: '10%', rating: 5.0, reviews: 31, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219562645'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219562645' },
    { title: '2026 해커스경찰 김민철 경찰학 기출 1000제', author: '김민철', publisher: '해커스경찰', price: 39600, originalPrice: 44000, discount: '10%', rating: 5.0, reviews: 57, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219544931'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219544931' },
    { title: '2027 해커스경찰 박철한 경찰헌법 최신 5개년 판례집', author: '박철한', publisher: '해커스경찰', price: 17100, originalPrice: 19000, discount: '10%', rating: 5.0, reviews: 3, tags: ['추천'], hasEbook: false, imageUrl: KB('S000220428017'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220428017' },
    { title: '2026 해커스경찰 킹재규 경찰학 총알 총정리 모의고사 2차 시험 대비', author: '김재규', publisher: '해커스경찰', price: 21600, originalPrice: 24000, discount: '10%', rating: 5.0, reviews: 8, tags: ['추천'], hasEbook: false, imageUrl: KB('S000220350323'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220350323' },
  ],

  // ────────────────────────────────────────
  // 일반행정직 공무원(9급) — 교보문고 공무원 과목별(국어/영어/한국사/행정법/행정학) 베스트셀러 기준, 2026-07-29 확인
  '일반행정직 공무원(9급)': [
    { title: '2027 해커스공무원 신민숙 쉬운국어 한 권으로 끝', author: '신민숙', publisher: '해커스공무원', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 18, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219853841'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219853841' },
    { title: '2027 공단기 심슨 보카', author: '심우철', publisher: '에스티유니타스', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 29, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000220053944'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220053944' },
    { title: '2026 해커스공무원 이중석 맵핑 한국사 올인원 블랭크노트', author: '이중석', publisher: '해커스공무원', price: 17100, originalPrice: 19000, discount: '10%', rating: 5.0, reviews: 135, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000216937190'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216937190' },
    { title: '2027 해커스공무원 3분의 1로 줄여 쓴 김대현 행정법총론 기본서', author: '김대현', publisher: '해커스공무원', price: 28800, originalPrice: 32000, discount: '10%', rating: 5.0, reviews: 16, tags: ['추천'], hasEbook: false, imageUrl: KB('S000220221375'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220221375' },
    { title: '2027 김중규 원픽 선행정학', author: '김중규', publisher: '카스파', price: 24300, originalPrice: 27000, discount: '10%', rating: 5.0, reviews: 14, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219882824'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219882824' },
  ],

  // ────────────────────────────────────────
  // 소방공무원(소방직) — 교보문고 소방직 카테고리(소방학개론/법규) + 공무원 행정법 베스트셀러 기준, 2026-07-29 확인
  '소방공무원(소방직)': [
    { title: '2027 소방직 시험대비 So Nice 백소나 소방학개론 기본서', author: '백소나', publisher: '더나은', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.95, reviews: 14, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219789746'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219789746' },
    { title: '2027 소방직 시험대비 So Nice 백소나 소방관계법규 1', author: '백소나', publisher: '더나은', price: 35100, originalPrice: 39000, discount: '10%', rating: 5.0, reviews: 8, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219789752'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219789752' },
    { title: '2027 해커스공무원 3분의 1로 줄여 쓴 김대현 행정법총론 기본서', author: '김대현', publisher: '해커스공무원', price: 28800, originalPrice: 32000, discount: '10%', rating: 5.0, reviews: 16, tags: ['추천'], hasEbook: false, imageUrl: KB('S000220221375'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220221375' },
    { title: '2027 심승아 Simple, Detail 심테일 소방관계법규 1', author: '심승아', publisher: '모두공북스', price: 29700, originalPrice: 33000, discount: '10%', rating: 5.0, reviews: 2, tags: ['추천'], hasEbook: false, imageUrl: KB('S000220490616'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220490616' },
  ],

  // ────────────────────────────────────────
  // 운전직 공무원(9급) — 교보문고 운전직 카테고리 + 공무원 과목별(국어/한국사) 베스트셀러 기준, 2026-07-29 확인
  // 참고: 운전직 카테고리 자체는 거래량이 적어(주간 베스트 1건) 신뢰 가능한 후보가 한정적임
  '운전직 공무원(9급)': [
    { title: '2027 해커스공무원 신민숙 쉬운국어 한 권으로 끝', author: '신민숙', publisher: '해커스공무원', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 18, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219853841'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219853841' },
    { title: '2026 해커스공무원 이중석 맵핑 한국사 올인원 블랭크노트', author: '이중석', publisher: '해커스공무원', price: 17100, originalPrice: 19000, discount: '10%', rating: 5.0, reviews: 135, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000216937190'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216937190' },
    { title: '2026 9급 운전직 Final 동형모의고사 7회분 자동차구조원리+도로교통법', author: '김진아, 이윤승', publisher: '서울고시각(SG P&E)', price: 13500, originalPrice: 15000, discount: '10%', reviews: 0, tags: ['추천'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013195472', imageUrl: KB('S000220108922'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220108922' },
  ],

  // ────────────────────────────────────────
  // 법원직 공무원(9급) — 교보문고 법원직/검찰사무직 카테고리 + 공무원 과목별(국어/영어/한국사) 베스트셀러 기준, 2026-07-29 확인
  '법원직 공무원(9급)': [
    { title: '2026 해커스공무원 박철한 헌법 기본서', author: '박철한', publisher: '해커스공무원', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.95, reviews: 20, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000217349571'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217349571' },
    { title: '2027 단기완성 민법 1: 민법총칙 물권법', author: '황보수정', publisher: '새흐름', price: 35100, originalPrice: 39000, discount: '10%', reviews: 0, tags: ['베스트'], hasEbook: true, ebookUrl: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013316408', imageUrl: KB('S000220588930'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220588930' },
    { title: '2026 신호진 핵심기출 1000제 형사법 2: 형법각론', author: '신호진', publisher: '렉스스터디', price: 34200, originalPrice: 38000, discount: '10%', rating: 5.0, reviews: 7, tags: ['베스트'], hasEbook: false, imageUrl: KB('S000219182554'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219182554' },
    { title: '2027 해커스공무원 신민숙 쉬운국어 한 권으로 끝', author: '신민숙', publisher: '해커스공무원', price: 19800, originalPrice: 22000, discount: '10%', rating: 5.0, reviews: 18, tags: ['추천'], hasEbook: false, imageUrl: KB('S000219853841'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000219853841' },
    { title: '2027 공단기 심슨 보카', author: '심우철', publisher: '에스티유니타스', price: 23400, originalPrice: 26000, discount: '10%', rating: 5.0, reviews: 29, tags: ['추천'], hasEbook: false, imageUrl: KB('S000220053944'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000220053944' },
    { title: '2026 해커스공무원 이중석 맵핑 한국사 올인원 블랭크노트', author: '이중석', publisher: '해커스공무원', price: 17100, originalPrice: 19000, discount: '10%', rating: 5.0, reviews: 135, tags: ['추천'], hasEbook: false, imageUrl: KB('S000216937190'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216937190' },
  ],

};
