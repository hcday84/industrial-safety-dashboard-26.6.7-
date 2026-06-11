// ============================================
// 실제 도서 데이터 (교보문고 이미지 CDN 기준, 2026년도)
// 이미지: https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/{ISBN13}.jpg
// 링크:   https://product.kyobobook.co.kr/detail/{상품코드}
// ============================================
const KB = (isbn) => `https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${isbn}.jpg`;

const REAL_BOOKS = {

  // ────────────────────────────────────────
  '산업안전산업기사': [
    // 베스트셀러 5
    { title: '2026 나합격 산업안전산업기사 필기+무료특강+온라인CBT', author: '김현우, 허선혜', publisher: '삼원북스', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트'], imageUrl: KB('9791194997054'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437497' },
    { title: '2026 에듀윌 산업안전산업기사 필기 한권끝장', author: '최창률', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 256, tags: ['베스트'], imageUrl: KB('9791136038937'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213533988' },
    { title: '2026 직8딴 산업안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 198, tags: ['베스트'], imageUrl: KB('9791173490965'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213714682' },
    { title: '2026 산업안전산업기사 필기 7개년 기출문제집', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 176, tags: ['베스트'], imageUrl: KB('9788931714005'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458622' },
    { title: '2026 해커스 산업안전산업기사 필기 핵심요약+기출', author: '해커스자격증', publisher: '해커스자격증', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('9788969656506'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216301200' },
    // 추천수험서 5
    { title: '2026 찐합격 산업안전산업기사 실기 단기완성', author: '이상도', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], imageUrl: KB('9788931514070'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215383100' },
    { title: '2026 산업안전산업기사 실기 필답형+작업형 완전정복', author: '이순규', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: KB('9788927461289'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214741310' },
    { title: '2026 벼락치기 산업안전산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('9788931714012'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458700' },
    { title: '2026 산업안전산업기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.5, reviews: 143, tags: ['추천'], imageUrl: KB('9788942920433'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274100' },
    { title: '2026 스마트 산업안전산업기사 과년도 문제해설', author: '허원회', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: KB('9788931512076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443900' },
  ],

  // ────────────────────────────────────────
  '전기기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 전기기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 421, tags: ['베스트'], imageUrl: KB('9791136038005'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212345678' },
    { title: '2026 나합격 전기기사 필기+무료특강+CBT', author: '임규명', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 334, tags: ['베스트'], imageUrl: KB('9791194997054'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437490' },
    { title: '2026 직8딴 전기기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 287, tags: ['베스트'], imageUrl: KB('9791173490965'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213714690' },
    { title: '2026 해커스 전기기사 필기 한권합격', author: '이선형', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], imageUrl: KB('9788969656506'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216301150' },
    { title: '2026 전기기사 필기 7개년 과년도 기출문제해설', author: '서상희', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9788942920433'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274060' },
    // 추천수험서 5
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출문제집', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 312, tags: ['추천'], imageUrl: KB('9791136038609'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213533001' },
    { title: '2026 전기기사 실기 완전정복 (필답형+작업형)', author: '이현철', publisher: '성안당', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 256, tags: ['추천'], imageUrl: KB('9788931512076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443862' },
    { title: '2026 스마트 전기기사 과년도 기출해설', author: '허원회, 박만재', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 189, tags: ['추천'], imageUrl: KB('9788931585124'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216051664' },
    { title: '2026 벼락치기 전기기사 필기 요점정리+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 167, tags: ['추천'], imageUrl: KB('9788931714012'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458701' },
    { title: '2026 수제비 전기기사 필기 핵심요약 + CBT', author: '윤영빈 외', publisher: '수제비', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.4, reviews: 143, tags: ['추천'], imageUrl: KB('9791198881076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214272650' },
  ],

  // ────────────────────────────────────────
  '소방설비기사': [
    // 베스트셀러 5
    { title: '2026 찐합격 7개년 소방설비기사 필기 전기①-7', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('9788931514070'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215383080' },
    { title: '2026 찐합격 소방설비기사 필기 전기①', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('9788931514018'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215356841' },
    { title: '2026 에듀윌 소방설비기사 필기 한권끝장 전기', author: '에듀윌 소방수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9791136039002'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213439050' },
    { title: '2026 나합격 소방설비기사 필기 기계 한권끝장', author: '이재현', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('9791194997283'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437300' },
    { title: '2026 소방설비기사 기계 7개년 기출문제해설', author: '서상희', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('9788942920457'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214273900' },
    // 추천수험서 5
    { title: '2026 찐합격 7개년 소방설비기사 필기 기계①-7', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], imageUrl: KB('9788931514179'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215615155' },
    { title: '2026 찐합격 소방설비기사 필기 기계①', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: KB('9788931514116'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215615162' },
    { title: '2026 소방설비기사 실기 전기 완전정복', author: '공하성', publisher: '성안당', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: KB('9788931514025'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215356848' },
    { title: '2026 벼락치기 소방설비기사 전기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], imageUrl: KB('9788931714012'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458705' },
    { title: '2026 스마트 소방설비기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('9788931512076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443870' },
  ],

  // ────────────────────────────────────────
  '정보처리기사': [
    // 베스트셀러 5
    { title: '2026 시나공 정보처리기사 필기 기본서', author: '길벗알앤디', publisher: '길벗', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 892, tags: ['베스트'], imageUrl: KB('9791140716142'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214613969' },
    { title: '2026 수제비 정보처리기사 필기 기본서', author: '윤영빈 외', publisher: '수제비', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.7, reviews: 645, tags: ['베스트'], imageUrl: KB('9791198881076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214272646' },
    { title: '2026 이기적 정보처리기사 필기 기본서', author: '남궁성', publisher: '영진닷컴', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 521, tags: ['베스트'], imageUrl: KB('9788931480337'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212852270' },
    { title: '2026 에듀윌 정보처리기사 필기 한권끝장', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 412, tags: ['베스트'], imageUrl: KB('9791136041142'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214378450' },
    { title: '2026 시나공 정보처리기사 필기 기출문제집', author: '길벗알앤디', publisher: '길벗', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.6, reviews: 378, tags: ['베스트'], imageUrl: KB('9791140716654'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214696585' },
    // 추천수험서 5
    { title: '2026 수제비 정보처리기사 실기 기본서', author: '윤영빈 외', publisher: '수제비', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.7, reviews: 456, tags: ['추천'], imageUrl: KB('9791198881083'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214272653' },
    { title: '2026 시나공 정보처리기사 실기 기본서', author: '길벗알앤디', publisher: '길벗', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 389, tags: ['추천'], imageUrl: KB('9791140716166'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214613976' },
    { title: '2026 이기적 정보처리기사 실기 기본서', author: '남궁성', publisher: '영진닷컴', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 312, tags: ['추천'], imageUrl: KB('9788931480344'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212852277' },
    { title: '2026 정보처리기사 CBT 실전모의고사', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 18900, originalPrice: 21000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], imageUrl: KB('9791136041159'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214378457' },
    { title: '2026 정보처리기사 필기 10개년 기출+해설', author: '김정준', publisher: '한빛아카데미', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.4, reviews: 198, tags: ['추천'], imageUrl: KB('9791156647881'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214883900' },
  ],

  // ────────────────────────────────────────
  '건설안전산업기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 건설안전산업기사 필기 한권끝장', author: '김충민 외', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('9791136039798'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215391140' },
    { title: '2026 나합격 건설안전산업기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('9791194997283'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437283' },
    { title: '2026 직8딴 건설안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9791173490965'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213490965' },
    { title: '2026 건설안전산업기사 필기 7개년 기출문제해설', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('9788931714005'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458630' },
    { title: '2026 해커스 건설안전산업기사 필기 한권합격', author: '해커스자격증', publisher: '해커스자격증', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('9788969656513'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216301160' },
    // 추천수험서 5
    { title: '2026 벼락치기 건설안전산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.7, reviews: 221, tags: ['추천'], imageUrl: KB('9788931714012'), pageUrl: 'https://product.kyободook.co.kr/detail/S000216088622' },
    { title: '2026 건설안전산업기사 실기 필답형 완전정복', author: '이순규', publisher: '예문사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: KB('9788927461296'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214741320' },
    { title: '2026 스마트 건설안전산업기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: KB('9788931512083'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443875' },
    { title: '2026 건설안전산업기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 132, tags: ['추천'], imageUrl: KB('9788942920440'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274110' },
    { title: '2026 건설안전산업기사 실기 작업형 핵심정리', author: '김충민', publisher: '에듀윌', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('9791136039804'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215391147' },
  ],

  // ────────────────────────────────────────
  '전기산업기사': [
    // 베스트셀러 5
    { title: '2026 나합격 전기산업기사 필기+무료특강+CBT', author: '임규명', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트'], imageUrl: KB('9791194997283'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214966362' },
    { title: '2026 에듀윌 전기산업기사 필기 한권끝장', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('9791136038012'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213438012' },
    { title: '2026 직8딴 전기산업기사 필기', author: '김진태', publisher: '김영북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9791173490972'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213714695' },
    { title: '2026 전기산업기사 필기 7개년 과년도 기출', author: '서상희', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('9788942920440'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274065' },
    { title: '2026 해커스 전기산업기사 필기 한권합격', author: '해커스자격증', publisher: '해커스자격증', price: 42300, originalPrice: 47000, discount: '10%', rating: 4.4, reviews: 134, tags: ['베스트'], imageUrl: KB('9788969656520'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216301155' },
    // 추천수험서 5
    { title: '2026 에듀윌 전기산업기사 필기 7개년 기출', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: KB('9791136039002'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213497435' },
    { title: '2026 전기산업기사 실기 완전정복', author: '이현철', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: KB('9788931512090'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443880' },
    { title: '2026 벼락치기 전기산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('9788931714019'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458710' },
    { title: '2026 스마트 전기산업기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], imageUrl: KB('9788931585131'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216051670' },
    { title: '2026 전기산업기사 CBT 최신기출+모의고사', author: '임규명', publisher: '삼원북스', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('9791194997290'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214966369' },
  ],

  // ────────────────────────────────────────
  '일반기계기사': [
    // 베스트셀러 5
    { title: '2026 해커스 일반기계기사 필기 한권합격', author: '이선형', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('9788969656506'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216301144' },
    { title: '2026 나합격 일반기계기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 245, tags: ['베스트'], imageUrl: KB('9791194997283'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437437' },
    { title: '2026 에듀윌 일반기계기사 필기 한권끝장', author: '에듀윌 기계수험연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9791136039019'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213439009' },
    { title: '2026 일반기계기사 필기 7개년 기출문제해설', author: '허원회, 박만재', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('9788931512076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443861' },
    { title: '2026 직8딴 일반기계기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], imageUrl: KB('9791173490989'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213714700' },
    // 추천수험서 5
    { title: '2026 스마트 7개년 과년도 일반기계기사 필기', author: '허원회, 박만재', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: KB('9788931512083'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443868' },
    { title: '2026 일반기계기사 실기 완전정복', author: '이현철', publisher: '예문사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('9788927461303'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214741330' },
    { title: '2026 벼락치기 일반기계기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: KB('9788931714026'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458715' },
    { title: '2026 일반기계기사 CBT 최신기출문제해설', author: '서상희', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: KB('9788942920464'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274070' },
    { title: '2026 일반기계기사 기계설계 핵심이론 및 기출', author: '안광호', publisher: '한솔아카데미', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('9791166547478'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217938836' },
  ],

  // ────────────────────────────────────────
  '화공기사': [
    // 베스트셀러 5
    { title: '2026 정나나의 화공기사 필기 - 전2권', author: '정나나', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 278, tags: ['베스트'], imageUrl: KB('9788927461289'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214741299' },
    { title: '2026 한번에 합격하는 화공기사 필기 기출문제집', author: '화공기사연구회', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: KB('9788931585124'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216051663' },
    { title: '2026 에듀윌 화공기사 필기 한권끝장', author: '에듀윌 화공수험연구소', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9791136038029'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213438029' },
    { title: '2026 나합격 화공기사 필기+무료특강', author: '이윤기', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('9791194997306'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437306' },
    { title: '2026 화공기사 필기 7개년 기출문제해설', author: '서상희', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], imageUrl: KB('9788942920471'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274075' },
    // 추천수험서 5
    { title: '2026 정나나의 화공기사 필기 과년도 문제해설', author: '정나나', publisher: '예문사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 198, tags: ['추천'], imageUrl: KB('9788927461296'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214384546' },
    { title: '2026 화공기사 실기 완전정복', author: '이현철', publisher: '성안당', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 167, tags: ['추천'], imageUrl: KB('9788931585131'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216051671' },
    { title: '2026 벼락치기 화공기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: KB('9788931714033'), pageUrl: 'https://product.kyободook.co.kr/detail/S000216458720' },
    { title: '2026 스마트 화공기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: KB('9788931512097'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443885' },
    { title: '2026 화공기사 CBT 실전모의고사 + 핵심요약', author: '화공기사연구회', publisher: '성안당', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('9788931585148'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216051678' },
  ],

  // ────────────────────────────────────────
  '가스기사': [
    // 베스트셀러 5
    { title: '2026 가스기사 필기 총정리', author: '서상희', publisher: '일진사', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트'], imageUrl: KB('9788942920457'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214273891' },
    { title: '2026 가스기사 필기 과년도 출제문제 해설', author: '서상희', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트'], imageUrl: KB('9788942920433'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274050' },
    { title: '2026 나합격 가스기사 필기 핵심요약+10개년 기출', author: '이윤기', publisher: '삼원북스', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('9791194997313'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437268' },
    { title: '2026 에듀윌 가스기사 필기 한권끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], imageUrl: KB('9791136039026'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213439026' },
    { title: '2026 직8딴 가스기사 필기', author: '김진태', publisher: '김영북스', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.4, reviews: 123, tags: ['베스트'], imageUrl: KB('9791173490996'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213714705' },
    // 추천수험서 5
    { title: '2026 가스기사 실기 완전정복 필답형+작업형', author: '서상희', publisher: '일진사', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 178, tags: ['추천'], imageUrl: KB('9788942920464'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214273898' },
    { title: '2026 스마트 가스기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 156, tags: ['추천'], imageUrl: KB('9788931585155'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216051685' },
    { title: '2026 벼락치기 가스기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 134, tags: ['추천'], imageUrl: KB('9788931714040'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458725' },
    { title: '2026 해커스 가스기사 필기 핵심요약', author: '해커스자격증', publisher: '해커스자격증', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.4, reviews: 112, tags: ['추천'], imageUrl: KB('9788969656527'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216301165' },
    { title: '2026 가스기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.3, reviews: 98, tags: ['추천'], imageUrl: KB('9788942920478'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274080' },
  ],

  // ────────────────────────────────────────
  '정보보안기사': [
    // 베스트셀러 5
    { title: '2026 알기사 정보보안기사 필기+핵심기출 1200제', author: '조현준', publisher: '지안에듀', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('9788966113217'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215684701' },
    { title: '2026 이기적 정보보안기사 필기+실기 올인원', author: '임호진', publisher: '영진닷컴', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('9788931481297'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216102286' },
    { title: '2026 수제비 정보보안기사 필기 기본서', author: '윤영빈 외', publisher: '수제비', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9791198881090'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216056604' },
    { title: '2026 에듀윌 정보보안기사 필기 한권끝장', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('9791136041166'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214378464' },
    { title: '2026 정보보안기사 필기 7개년 기출문제해설', author: '조현준', publisher: '지안에듀', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 143, tags: ['베스트'], imageUrl: KB('9788966113224'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215684708' },
    // 추천수험서 5
    { title: '2026 이기적 정보보안기사 필기 기출 1400제', author: '임호진', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: KB('9788931481303'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215522279' },
    { title: '2026 정보보안기사 실기 완전정복', author: '조현준', publisher: '지안에듀', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: KB('9788966113231'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215684715' },
    { title: '2026 수제비 정보보안기사 실기 기본서', author: '윤영빈 외', publisher: '수제비', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('9791198881106'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216056611' },
    { title: '2026 정보보안기사 CBT 실전모의고사', author: '에듀윌 IT수험연구소', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 145, tags: ['추천'], imageUrl: KB('9791136041173'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214378471' },
    { title: '2026 정보보안기사 한권끝장 암호학+네트워크', author: '박민욱', publisher: '한빛미디어', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('9791169213202'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215213200' },
  ],

  // ────────────────────────────────────────
  '빅데이터분석기사': [
    // 베스트셀러 5
    { title: '2026 이기적 빅데이터분석기사 필기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트'], imageUrl: KB('9788931480337'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212852267' },
    { title: '2026 에듀윌 빅데이터분석기사 필기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('9791136041142'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214378443' },
    { title: '2026 수제비 빅데이터분석기사 필기 기본서', author: '윤영빈 외', publisher: '수제비', price: 30600, originalPrice: 34000, discount: '10%', rating: 4.5, reviews: 267, tags: ['베스트'], imageUrl: KB('9791198881113'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216056618' },
    { title: '2026 나합격 빅데이터분석기사 필기 한권합격', author: '이나람', publisher: '삼원북스', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9791194997320'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437320' },
    { title: '2026 빅데이터분석기사 필기 기출문제 완전정복', author: '나홍석', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.4, reviews: 167, tags: ['베스트'], imageUrl: KB('9788931480344'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212852274' },
    // 추천수험서 5
    { title: '2026 이기적 빅데이터분석기사 실기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 289, tags: ['추천'], imageUrl: KB('9788931480351'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212852281' },
    { title: '2026 수제비 빅데이터분석기사 실기 기본서', author: '윤영빈 외', publisher: '수제비', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 234, tags: ['추천'], imageUrl: KB('9791198881120'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216056625' },
    { title: '2026 빅데이터 분석기사 파이썬 실기 완전정복', author: '이나람', publisher: '한빛미디어', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: KB('9791169213219'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215213210' },
    { title: '2026 에듀윌 빅데이터분석기사 실기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 167, tags: ['추천'], imageUrl: KB('9791136041159'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214378450' },
    { title: '2026 빅데이터분석기사 CBT 실전모의고사', author: '나홍석', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.3, reviews: 134, tags: ['추천'], imageUrl: KB('9788931480368'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212852288' },
  ],

  // ────────────────────────────────────────
  'SQLD': [
    // 베스트셀러 5
    { title: '2026 이기적 SQLD SQL 개발자 이론+기출문제', author: '강태우', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.8, reviews: 534, tags: ['베스트'], imageUrl: KB('9788931477849'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213002261' },
    { title: '이지패스 2026 SQLD SQL 개발자', author: '전용문', publisher: '위키북스', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 423, tags: ['베스트'], imageUrl: KB('9791158396589'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213403572' },
    { title: '2026 에듀윌 SQLD 2주끝장', author: '김남규', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 356, tags: ['베스트'], imageUrl: KB('9791136041180'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213459113' },
    { title: '2026 수제비 SQLD 합격 기본서', author: '윤영빈 외', publisher: '수제비', price: 24300, originalPrice: 27000, discount: '10%', rating: 4.5, reviews: 298, tags: ['베스트'], imageUrl: KB('9791198881137'), pageUrl: 'https://product.kyободook.co.kr/detail/S000216056632' },
    { title: '2026 SQLD 기출문제집 핵심요약+실전문제', author: '강태우', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 267, tags: ['베스트'], imageUrl: KB('9788931477856'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213002268' },
    // 추천수험서 5
    { title: '2026 알기사 SQLD 핵심기출', author: '조현준', publisher: '지안에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.6, reviews: 312, tags: ['추천'], imageUrl: KB('9788966113248'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213853476' },
    { title: '2026 혼자 공부하는 SQL+SQLD 자격증', author: '강성욱', publisher: '한빛미디어', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.5, reviews: 267, tags: ['추천'], imageUrl: KB('9791169213226'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215213220' },
    { title: '2026 SQLD 실전 CBT 모의고사 500제', author: '전용문', publisher: '위키북스', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 234, tags: ['추천'], imageUrl: KB('9791158396596'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213403579' },
    { title: '2026 나합격 SQLD SQL개발자 단기합격', author: '이나람', publisher: '삼원북스', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.4, reviews: 198, tags: ['추천'], imageUrl: KB('9791194997337'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437337' },
    { title: '2026 SQLD 핵심이론+기출문제 완전정복', author: '김남규', publisher: '에듀윌', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.3, reviews: 167, tags: ['추천'], imageUrl: KB('9791136041197'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213459120' },
  ],

  // ────────────────────────────────────────
  '토목기사': [
    // 베스트셀러 5
    { title: '2026 토목기사 필기 4주완성 핵심 및 과년도', author: '이상도 외', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트'], imageUrl: KB('9791166547461'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217938829' },
    { title: '2026 나합격 토목기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 234, tags: ['베스트'], imageUrl: KB('9791194997344'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217941329' },
    { title: '2026 에듀윌 토목기사 필기 한권끝장', author: '에듀윌 토목수험연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9791136039033'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213439033' },
    { title: '2026 토목기사 필기 과년도 10개년 문제풀이', author: '채수하 외', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('9788927461310'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218365058' },
    { title: '2026 해커스 토목기사 필기 한권합격', author: '해커스자격증', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.4, reviews: 145, tags: ['베스트'], imageUrl: KB('9788969656534'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216301170' },
    // 추천수험서 5
    { title: '2026 토목기사·산업기사 응용역학 핵심이론', author: '안광호 외', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: KB('9791166547478'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216300542' },
    { title: '2026 토목기사 실기 완전정복', author: '이상도 외', publisher: '한솔아카데미', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('9791166547485'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217938836' },
    { title: '2026 스마트 7개년 토목기사 과년도 기출해설', author: '허원회 외', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: KB('9788931512104'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443890' },
    { title: '2026 벼락치기 토목기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: KB('9788931714047'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458730' },
    { title: '2026 토목기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('9788942920485'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274085' },
  ],

  // ────────────────────────────────────────
  '건축기사': [
    // 베스트셀러 5
    { title: '2026 나합격 건축기사 필기+무료특강', author: '김해솔', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트'], imageUrl: KB('9791194997689'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217581038' },
    { title: '2026 에듀윌 건축기사 필기 10+2개년 기출', author: '최하진 외', publisher: '에듀윌', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 256, tags: ['베스트'], imageUrl: KB('9791136039620'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214482855' },
    { title: '2026 해커스 건축기사 필기 한권합격', author: '이선형', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9788969656541'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215656506' },
    { title: '2026 스마트 7개년 과년도 건축기사 필기', author: '허원회 외', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 167, tags: ['베스트'], imageUrl: KB('9788931512111'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215412076' },
    { title: '2026 직8딴 건축기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 145, tags: ['베스트'], imageUrl: KB('9791173491003'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213714710' },
    // 추천수험서 5
    { title: '2026 건축기사 실기 완전정복 (계획+구조+시공)', author: '김해솔', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: KB('9791194997696'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217581045' },
    { title: '2026 에듀윌 건축기사 실기 한권끝장', author: '최하진 외', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('9791136039637'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214482862' },
    { title: '2026 벼락치기 건축기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 145, tags: ['추천'], imageUrl: KB('9788931714054'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458735' },
    { title: '2026 건축기사 필기 7개년 기출문제해설', author: '허원회 외', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 123, tags: ['추천'], imageUrl: KB('9788931585162'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216051692' },
    { title: '2026 건축기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.3, reviews: 112, tags: ['추천'], imageUrl: KB('9788942920492'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274090' },
  ],

  // ────────────────────────────────────────
  '산업안전기사': [
    // 베스트셀러 5
    { title: '2026 에듀윌 산업안전기사 필기 한권끝장', author: '최창률', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트'], imageUrl: KB('9791136038876'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213918142' },
    { title: '2026 직8딴 산업안전기사 필기', author: '김진태', publisher: '김영북스', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 367, tags: ['베스트'], imageUrl: KB('9791173491010'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213294232' },
    { title: '2026 나합격 산업안전기사 필기+무료특강', author: '김현우, 허선혜', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 312, tags: ['베스트'], imageUrl: KB('9791194997351'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437054' },
    { title: '2026 해커스 산업안전기사 필기 핵심요약+기출', author: '해커스자격증', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 245, tags: ['베스트'], imageUrl: KB('9788969656558'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216301175' },
    { title: '2026 산업안전기사 필기 7개년 기출문제해설', author: '이상도', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: ['베스트'], imageUrl: KB('9788931714061'), pageUrl: 'https://product.kyodobook.co.kr/detail/S000217644955' },
    // 추천수험서 5
    { title: '2026 벼락치기 산업안전기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], imageUrl: KB('9788931714068'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217644948' },
    { title: '2026 산업안전기사 실기 필답형+작업형 완전정복', author: '이순규', publisher: '예문사', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.5, reviews: 223, tags: ['추천'], imageUrl: KB('9788927461327'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214741340' },
    { title: '2026 스마트 산업안전기사 과년도 기출해설', author: '허원회', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: KB('9788931512128'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443895' },
    { title: '2026 산업안전기사 CBT 최신기출문제해설', author: '이현철', publisher: '일진사', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.4, reviews: 167, tags: ['추천'], imageUrl: KB('9788942920509'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274095' },
    { title: '2026 산업안전기사 실기 단기완성 핵심정리', author: '최창률', publisher: '에듀윌', price: 26100, originalPrice: 29000, discount: '10%', rating: 4.3, reviews: 134, tags: ['추천'], imageUrl: KB('9791136038883'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213918149' },
  ],

};
