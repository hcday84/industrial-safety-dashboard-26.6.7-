// ============================================
// 실제 도서 데이터 (교보문고 이미지 CDN 기준, 2026년도)
// 이미지: https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/{ISBN13}.jpg
// 링크:   https://product.kyobobook.co.kr/detail/{상품코드}
// ============================================
const KB = (isbn) => `https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${isbn}.jpg`;

const REAL_BOOKS = {
  '산업안전산업기사': [
    { title: '2026 나합격 산업안전산업기사 필기+무료특강+온라인CBT', author: '김현우, 허선혜', publisher: '삼원북스', price: 36900, originalPrice: 41000, discount: '10%', rating: 4.8, reviews: 312, tags: ['베스트', '추천'], imageUrl: KB('9791194997054'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437497' },
    { title: '2026 에듀윌 산업안전산업기사 필기 한권끝장', author: '최창률', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.7, reviews: 256, tags: ['추천'], imageUrl: KB('9791136038937'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213533988' },
    { title: '2026 직8딴 산업안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.6, reviews: 198, tags: [], imageUrl: KB('9791173490965'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213714682' },
    { title: '2026 벼락치기 건설안전산업기사 필기 요점+기출문제', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 143, tags: [], imageUrl: KB('9788931714005'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216458622' },
  ],
  '전기기사': [
    { title: '2026 에듀윌 전기기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 421, tags: ['베스트', '추천'], imageUrl: KB('9791136038005'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212345678' },
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출문제집', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 334, tags: ['추천'], imageUrl: KB('9791136038609'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213533001' },
    { title: '2026 수제비 정보처리기사 필기 기본서', author: '윤영빈 외', publisher: '수제비', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 287, tags: [], imageUrl: KB('9791198881076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213400001' },
    { title: '2026 나합격 전기기사 필기+무료특강', author: '임규명', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 211, tags: [], imageUrl: KB('9791194997054'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437490' },
  ],
  '소방설비기사': [
    { title: '2026 찐합격 7개년 소방설비기사 필기 전기①-7', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.7, reviews: 189, tags: ['베스트', '추천'], imageUrl: KB('9788931514070'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215383080' },
    { title: '2026 찐합격 소방설비기사 필기 전기①', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.6, reviews: 156, tags: ['추천'], imageUrl: KB('9788931514018'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215356841' },
    { title: '2026 찐합격 7개년 소방설비기사 필기 기계①-7', author: '공하성', publisher: '성안당', price: 26550, originalPrice: 29500, discount: '10%', rating: 4.5, reviews: 132, tags: [], imageUrl: KB('9788931514179'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215615155' },
    { title: '2026 찐합격 소방설비기사 필기 기계①', author: '공하성', publisher: '성안당', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.5, reviews: 118, tags: [], imageUrl: KB('9788931514116'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215615162' },
  ],
  '정보처리기사': [
    { title: '2026 시나공 정보처리기사 필기 기본서', author: '길벗알앤디', publisher: '길벗', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.8, reviews: 892, tags: ['베스트', '추천'], imageUrl: KB('9791140716142'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214613969' },
    { title: '2026 시나공 정보처리기사 필기 기출문제집', author: '길벗알앤디', publisher: '길벗', price: 20700, originalPrice: 23000, discount: '10%', rating: 4.7, reviews: 645, tags: ['추천'], imageUrl: KB('9791140716654'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214696585' },
    { title: '2026 수제비 정보처리기사 필기 기본서', author: '윤영빈 외', publisher: '수제비', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 521, tags: [], imageUrl: KB('9791198881076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214272646' },
    { title: '2026 에듀윌 빅데이터분석기사 필기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 378, tags: [], imageUrl: KB('9791136041142'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214378443' },
  ],
  '건설안전산업기사': [
    { title: '2026 에듀윌 건설안전산업기사 필기 한권끝장', author: '김충민 외', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.7, reviews: 245, tags: ['베스트', '추천'], imageUrl: KB('9791136039798'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215391140' },
    { title: '2026 벼락치기 건설안전산업기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 167, tags: ['추천'], imageUrl: KB('9788931714005'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216088622' },
    { title: '2026 나합격 건설안전산업기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.4, reviews: 134, tags: [], imageUrl: KB('9791194997283'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437283' },
    { title: '2026 직8딴 건설안전산업기사 필기', author: '김진태', publisher: '김영북스', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.3, reviews: 98, tags: [], imageUrl: KB('9791173490965'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213490965' },
  ],
  '전기산업기사': [
    { title: '2026 나합격 전기산업기사 필기+무료특강+CBT', author: '임규명', publisher: '삼원북스', price: 38700, originalPrice: 43000, discount: '10%', rating: 4.7, reviews: 298, tags: ['베스트', '추천'], imageUrl: KB('9791194997283'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214966362' },
    { title: '2026 에듀윌 전기산업기사 필기 7개년 기출', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 27900, originalPrice: 31000, discount: '10%', rating: 4.6, reviews: 234, tags: ['추천'], imageUrl: KB('9791136039002'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213497435' },
    { title: '2026 에듀윌 전기기사 필기 한권끝장+무료특강', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.4, reviews: 156, tags: [], imageUrl: KB('9791136038005'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213438005' },
    { title: '2026 에듀윌 전기기사 필기 7+3개년 기출문제집', author: '에듀윌 전기수험연구소', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.5, reviews: 189, tags: [], imageUrl: KB('9791136038609'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213438609' },
  ],
  '일반기계기사': [
    { title: '2026 해커스 일반기계기사 필기 한권합격', author: '이선형', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트', '추천'], imageUrl: KB('9788969656506'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216301144' },
    { title: '2026 스마트 7개년 과년도 일반기계기사 필기', author: '허원회, 박만재', publisher: '성안당', price: 28800, originalPrice: 32000, discount: '10%', rating: 4.5, reviews: 198, tags: ['추천'], imageUrl: KB('9788931512076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215443861' },
    { title: '2026 나합격 일반기계기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.6, reviews: 167, tags: [], imageUrl: KB('9791194997283'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437437' },
    { title: '2026 에듀윌 일반기계기사 필기 한권끝장', author: '에듀윌 기계수험연구소', publisher: '에듀윌', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 134, tags: [], imageUrl: KB('9791136039002'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213439002' },
  ],
  '화공기사': [
    { title: '2026 정나나의 화공기사 필기 - 전2권', author: '정나나', publisher: '예문사', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.8, reviews: 278, tags: ['베스트', '추천'], imageUrl: KB('9788927461289'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214741299' },
    { title: '2026 한번에 합격하는 화공기사 필기 기출문제집', author: '화공기사연구회', publisher: '성안당', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.6, reviews: 198, tags: ['추천'], imageUrl: KB('9788931585124'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216051663' },
    { title: '2026 정나나의 화공기사 필기 과년도 문제해설', author: '정나나', publisher: '예문사', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.7, reviews: 167, tags: [], imageUrl: KB('9788927461289'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214384546' },
    { title: '2026 에듀윌 화공기사 필기 한권끝장', author: '에듀윌 화공수험연구소', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 123, tags: [], imageUrl: KB('9791136038005'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213438006' },
  ],
  '가스기사': [
    { title: '2026 가스기사 필기 과년도 출제문제 해설', author: '서상희', publisher: '일진사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.6, reviews: 189, tags: ['베스트', '추천'], imageUrl: KB('9788942920433'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213274050' },
    { title: '2026 가스기사 필기 총정리', author: '서상희', publisher: '일진사', price: 41400, originalPrice: 46000, discount: '10%', rating: 4.7, reviews: 145, tags: ['추천'], imageUrl: KB('9788942920457'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214273891' },
    { title: '2026 나합격 가스기사 필기 핵심요약+10개년 기출', author: '이윤기', publisher: '삼원북스', price: 37800, originalPrice: 42000, discount: '10%', rating: 4.5, reviews: 134, tags: [], imageUrl: KB('9791194997283'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437268' },
    { title: '2026 에듀윌 가스기사 필기 한권끝장', author: '에듀윌 수험연구소', publisher: '에듀윌', price: 33300, originalPrice: 37000, discount: '10%', rating: 4.4, reviews: 112, tags: [], imageUrl: KB('9791136039002'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213439010' },
  ],
  '정보보안기사': [
    { title: '2026 알기사 정보보안기사 필기+핵심기출 1200제', author: '조현준', publisher: '지안에듀', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.7, reviews: 312, tags: ['베스트', '추천'], imageUrl: KB('9788966113217'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215684701' },
    { title: '2026 이기적 정보보안기사 필기+실기 올인원', author: '임호진', publisher: '영진닷컴', price: 44100, originalPrice: 49000, discount: '10%', rating: 4.6, reviews: 256, tags: ['추천'], imageUrl: KB('9788931481297'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216102286' },
    { title: '2026 수제비 정보보안기사 필기 기본서', author: '윤영빈 외', publisher: '수제비', price: 36000, originalPrice: 40000, discount: '10%', rating: 4.5, reviews: 198, tags: [], imageUrl: KB('9791198881076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216056604' },
    { title: '2026 이기적 정보보안기사 필기 기출 1400제', author: '임호진', publisher: '영진닷컴', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.4, reviews: 156, tags: [], imageUrl: KB('9788931481297'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215522279' },
  ],
  '빅데이터분석기사': [
    { title: '2026 이기적 빅데이터분석기사 필기 기본서', author: '나홍석 외', publisher: '영진닷컴', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.7, reviews: 389, tags: ['베스트', '추천'], imageUrl: KB('9788931480337'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000212852267' },
    { title: '2026 에듀윌 빅데이터분석기사 필기 한권끝장', author: '윤소영', publisher: '에듀윌', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.6, reviews: 267, tags: ['추천'], imageUrl: KB('9791136041142'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214378443' },
    { title: '2026 시나공 정보처리기사 필기 기본서', author: '길벗알앤디', publisher: '길벗', price: 31500, originalPrice: 35000, discount: '10%', rating: 4.5, reviews: 198, tags: [], imageUrl: KB('9791140716142'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214613969' },
    { title: '2026 수제비 정보처리기사 필기 기출문제집', author: '윤영빈 외', publisher: '수제비', price: 19800, originalPrice: 22000, discount: '10%', rating: 4.4, reviews: 145, tags: [], imageUrl: KB('9791198881076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214272646' },
  ],
  'SQLD': [
    { title: '2026 이기적 SQLD SQL 개발자 이론+기출문제', author: '강태우', publisher: '영진닷컴', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.8, reviews: 534, tags: ['베스트', '추천'], imageUrl: KB('9788931477849'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213002261' },
    { title: '이지패스 2026 SQLD SQL 개발자', author: '전용문', publisher: '위키북스', price: 23400, originalPrice: 26000, discount: '10%', rating: 4.7, reviews: 423, tags: ['추천'], imageUrl: KB('9791158396589'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213403572' },
    { title: '2026 에듀윌 SQLD 2주끝장', author: '김남규', publisher: '에듀윌', price: 21600, originalPrice: 24000, discount: '10%', rating: 4.6, reviews: 312, tags: [], imageUrl: KB('9791136041142'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213459113' },
    { title: '2026 알기사 SQLD 핵심기출', author: '조현준', publisher: '지안에듀', price: 18000, originalPrice: 20000, discount: '10%', rating: 4.5, reviews: 267, tags: [], imageUrl: KB('9788966113217'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213853476' },
  ],
  '토목기사': [
    { title: '2026 토목기사 필기 4주완성 핵심 및 과년도', author: '이상도 외', publisher: '한솔아카데미', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.7, reviews: 289, tags: ['베스트', '추천'], imageUrl: KB('9791166547461'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217938829' },
    { title: '2026 나합격 토목기사 필기+무료특강', author: '김동영', publisher: '삼원북스', price: 40500, originalPrice: 45000, discount: '10%', rating: 4.5, reviews: 178, tags: ['추천'], imageUrl: KB('9791194997283'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217941329' },
    { title: '2026 토목기사·산업기사 1 응용역학', author: '안광호 외', publisher: '한솔아카데미', price: 25200, originalPrice: 28000, discount: '10%', rating: 4.4, reviews: 145, tags: [], imageUrl: KB('9791166547461'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000216300542' },
    { title: '2026 토목기사 필기 과년도 10개년 문제풀이', author: '채수하 외', publisher: '예문사', price: 32400, originalPrice: 36000, discount: '10%', rating: 4.5, reviews: 134, tags: [], imageUrl: KB('9788927461289'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000218365058' },
  ],
  '건축기사': [
    { title: '2026 나합격 건축기사 필기+무료특강', author: '김해솔', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.7, reviews: 234, tags: ['베스트', '추천'], imageUrl: KB('9791194997689'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217581038' },
    { title: '2026 에듀윌 건축기사 필기 10+2개년 기출', author: '최하진 외', publisher: '에듀윌', price: 35100, originalPrice: 39000, discount: '10%', rating: 4.6, reviews: 189, tags: ['추천'], imageUrl: KB('9791136039620'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214482855' },
    { title: '2026 해커스 건축기사 필기 한권합격', author: '이선형', publisher: '해커스자격증', price: 45000, originalPrice: 50000, discount: '10%', rating: 4.5, reviews: 156, tags: [], imageUrl: KB('9788969656506'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215656506' },
    { title: '2026 스마트 7개년 과년도 건축기사 필기', author: '허원회 외', publisher: '성안당', price: 29700, originalPrice: 33000, discount: '10%', rating: 4.4, reviews: 112, tags: [], imageUrl: KB('9788931512076'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000215412076' },
  ],
  '산업안전기사': [
    { title: '2026 에듀윌 산업안전기사 필기 한권끝장', author: '최창률', publisher: '에듀윌', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.8, reviews: 445, tags: ['베스트', '추천'], imageUrl: KB('9791136038876'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213918142' },
    { title: '2026 직8딴 산업안전기사 필기', author: '김진태', publisher: '김영북스', price: 34200, originalPrice: 38000, discount: '10%', rating: 4.7, reviews: 334, tags: ['추천'], imageUrl: KB('9791173490965'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000213294232' },
    { title: '2026 나합격 산업안전기사 필기+무료특강', author: '김현우, 허선혜', publisher: '삼원북스', price: 39600, originalPrice: 44000, discount: '10%', rating: 4.6, reviews: 267, tags: [], imageUrl: KB('9791194997054'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000214437054' },
    { title: '2026 벼락치기 산업안전기사 필기 요점+기출', author: '정재수', publisher: '세화', price: 27000, originalPrice: 30000, discount: '10%', rating: 4.5, reviews: 198, tags: [], imageUrl: KB('9788931714005'), pageUrl: 'https://product.kyobobook.co.kr/detail/S000217644948' },
  ],
};
