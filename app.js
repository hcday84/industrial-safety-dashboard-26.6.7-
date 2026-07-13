/* ==========================================
   멀티 자격증 올인원 대시보드 v2.0
   ========================================== */

// 국가전문자격 이름 목록 (나머지는 국가기술자격)
const PROFESSIONAL_CERT_NAMES = new Set([
  '의사','치과의사','한의사','약사','한약사',
  '간호사','간호조무사','조산사',
  '물리치료사','작업치료사','방사선사','임상병리사','치과위생사','치과기공사',
  '안경사','언어재활사','응급구조사1급','응급구조사2급','의무기록사',
  '위생사','영양사','요양보호사','보건교육사','맞춤형화장품조제관리사',
  '정신건강임상심리사','나무의사',
  '공인중개사','세무사','공인회계사','감정평가사','변리사','법무사',
  '공인노무사','관세사','손해사정사','보험계리사','행정사','주택관리사','변호사',
  '사회복지사1급','청소년상담사','청소년지도사','평생교육사','한국어교원',
  '건축사','수의사','스포츠지도사','사회조사분석사',
  '농산물품질관리사','수산물품질관리사','가축인공수정사','소방시설관리사',
]);

const PRIVATE_CERT_NAMES = new Set([
  'GTQ','GTQi','MOS','TOEIC','OPIc',
  'AFPK','CFP',
  '바리스타1급','바리스타2급',
  '리눅스마스터1급','리눅스마스터2급',
  'FAT','TAT',
  'ITQ','SQLD','SQLP','네트워크관리사1급','네트워크관리사2급',
  'JLPT','HSK','TOEFL','IELTS','TOEIC Speaking','한국어능력시험(TOPIK)',
  '재경관리사','ERP정보관리사','매경TEST','TESAT','펀드투자권유대행인',
  '소믈리에','바텐더','한자능력검정','KBS한국어능력시험',
  '한국사능력검정시험','사회통합프로그램','국내관광안내사','국외관광안내사','관광통역안내사',
  '임용고시','한국실용글쓰기','임상심리사','심리상담사',
]);

// ============================================
// 0. 공공데이터 API 설정 (서버리스 프록시 경유)
// ============================================
async function fetchCertInfo(certName) {
  try {
    const res = await fetch(`/api/cert-info?certName=${encodeURIComponent(certName)}`);
    if (!res.ok) return null;
    return await res.json();
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
};

function getCert() { return CERTIFICATIONS[STATE.currentCert]; }

// ============================================
// 3. 초기화
// ============================================
// ============================================
// 월별 시험 수험서 추출 (정적 일정 데이터 사용 — API 호출 없음)
// ============================================

let _monthlyExamCache = null;

function fetchAllMonthlyExams() {
  if (_monthlyExamCache) return _monthlyExamCache;

  const monthData = {};
  for (let m = 1; m <= 12; m++) monthData[m] = { written: [], practical: [], single: [] };

  const parseExamRange = str => {
    if (!str) return null;
    const range = str.match(/(\d{4})-(\d{2})-(\d{2})\s*~\s*\d{4}-(\d{2})-(\d{2})/);
    if (range) return { month: parseInt(range[2]), display: `${range[2]}/${range[3]} ~ ${range[4]}/${range[5]}` };
    const single = str.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (single) return { month: parseInt(single[2]), display: `${single[2]}/${single[3]}` };
    return null;
  };

  const hasValidDate = str => !!(str && str !== '-' && str !== '—' && /\d{4}-\d{2}-\d{2}/.test(str));

  Object.entries(CERTIFICATIONS).forEach(([certName, cert]) => {
    if (!cert.schedules?.length) return;
    cert.schedules.forEach(s => {
      const written = parseExamRange(s.writtenExam);
      const hasPractical = hasValidDate(s.practicalExam);

      if (written) {
        if (hasPractical) {
          monthData[written.month].written.push({ certName, round: s.round, dateRange: written.display });
        } else {
          monthData[written.month].single.push({ certName, round: s.round, dateRange: written.display });
        }
      }

      const practical = parseExamRange(s.practicalExam);
      if (practical) monthData[practical.month].practical.push({ certName, round: s.round, dateRange: practical.display });
    });
  });

  for (let m = 1; m <= 12; m++) {
    monthData[m].written.sort((a, b) => a.certName.localeCompare(b.certName, 'ko'));
    monthData[m].practical.sort((a, b) => a.certName.localeCompare(b.certName, 'ko'));
    monthData[m].single.sort((a, b) => a.certName.localeCompare(b.certName, 'ko'));
  }

  _monthlyExamCache = monthData;
  return monthData;
}

let _selectedMonth = new Date().getMonth() + 1;

function initMonthlySection() {
  const tabsEl = document.getElementById('month-tabs');
  const loadingEl = document.getElementById('monthly-loading');
  const resultEl = document.getElementById('monthly-result');
  if (!tabsEl) return;

  const months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
  const currentMonth = new Date().getMonth() + 1;
  let selectedMonth = _selectedMonth;

  tabsEl.innerHTML = months.map((m, i) => `
    <button class="month-tab-btn${i + 1 === currentMonth ? ' active' : ''}" data-month="${i + 1}">${m}</button>
  `).join('');

  tabsEl.addEventListener('click', e => {
    const btn = e.target.closest('.month-tab-btn');
    if (!btn) return;
    tabsEl.querySelectorAll('.month-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedMonth = parseInt(btn.dataset.month);
    _selectedMonth = selectedMonth;
    renderMonthlyResult(selectedMonth);
  });

  function renderMonthlyResult(month) {
    const data = fetchAllMonthlyExams();
    const { written, practical, single } = data[month];

    if (!written.length && !practical.length && !single.length) {
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
              <div class="monthly-cert-card monthly-cert-card--${type}" onclick="switchCertification('${item.certName}')" style="cursor:pointer">
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
        ${renderGroup(written,   '필기 시험', 'fa-solid fa-pencil',    'written')}
        ${renderGroup(practical, '실기 시험', 'fa-solid fa-hammer',    'practical')}
        ${renderGroup(single,    '단일 시험', 'fa-solid fa-file-lines', 'single')}
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
  if (typeof CERTIFICATIONS !== 'undefined') {
    const allNames   = Object.keys(CERTIFICATIONS);
    const privCount  = allNames.filter(n => PRIVATE_CERT_NAMES.has(n)).length;
    const proCount   = allNames.filter(n => PROFESSIONAL_CERT_NAMES.has(n)).length;
    const techCount  = allNames.length - proCount - privCount;
    const techEl  = document.getElementById('tech-cert-count');
    const proEl   = document.getElementById('pro-cert-count');
    const privEl  = document.getElementById('priv-cert-count');
    if (techEl) techEl.textContent = techCount;
    if (proEl)  proEl.textContent  = proCount;
    if (privEl) privEl.textContent = privCount;
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
  renderQuickRow();
  renderHotTopic();
  initLocationSection();
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
  updateFavBtn(cert.name);
  renderScheduleCards(cert);
  renderStatCards(cert);
  renderDdays(cert);
  renderExamCalendar(cert);
  renderNews();
  renderBooks();
  renderChart(cert);
  renderSubjects(cert);
  renderStudyGuide(cert);
  renderRoadmap(cert);
  renderPredictor(cert);
  initLocationSection();
}

// ============================================
// 4. 자격증 전환
// ============================================
function switchCertification(certName) {
  if (!CERTIFICATIONS[certName] || certName === STATE.currentCert) return;

  STATE.currentCert = certName;
  try { localStorage.setItem('lastCert', certName); } catch(e) {}
  addRecentCert(certName);

  // 필터 버튼 초기화
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-value') === 'all');
  });

  const searchInput = document.getElementById('global-search');
  searchInput.value = certName;

  renderAll();


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
  document.title = `수험서 All in One 대시보드 - ${cert.name} 시험 일정 & 합격 분석`;
}

// ============================================
// 6. 히어로 섹션 업데이트
// ============================================
function renderHero(cert) {
  document.getElementById('hero-title').textContent = cert.heroTitle;
  document.getElementById('hero-desc').textContent = cert.heroDesc;
  const iconEl = document.querySelector('.shield-graphic i');
  if (iconEl) { iconEl.className = `fa-solid ${cert.icon}`; }

  // 선호도 별점 표시
  const popEl = document.getElementById('hero-popularity');
  if (popEl) {
    const pop = CERT_POPULARITY[cert.name];
    if (pop) {
      popEl.innerHTML = renderStars(pop.stars)
        + `<span class="hero-pop-tag">${pop.tag}</span>`
        + `<span class="hero-pop-reason">${pop.reason}</span>`;
      popEl.style.display = '';
    } else {
      popEl.style.display = 'none';
    }
  }
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

  // 다음 접수(필기/실기 중 더 임박한 쪽) D-Day
  let nextApply = null;
  for (const s of schedules) {
    const wDiff = calcDiff(s.writtenApply);
    if (wDiff !== null && wDiff >= 0) {
      if (!nextApply || wDiff < nextApply.diff) nextApply = { s, diff: wDiff, type: '필기', dateStr: s.writtenApply };
    }
    const pDiff = calcDiff(s.practicalApply);
    if (pDiff !== null && pDiff >= 0) {
      if (!nextApply || pDiff < nextApply.diff) nextApply = { s, diff: pDiff, type: '실기', dateStr: s.practicalApply };
    }
  }

  const applyValEl = document.getElementById('apply-dday');
  const applyLblEl = document.getElementById('apply-label');
  if (applyValEl && applyLblEl) {
    if (writtenAlways && practicalAlways) {
      applyValEl.textContent = '상시CBT';
      applyValEl.className   = 'stat-value text-green';
      applyLblEl.textContent = '원하는 날짜에 상시 CBT로 응시 가능합니다.';
    } else if (nextApply) {
      applyValEl.textContent = ddayText(nextApply.diff);
      applyValEl.className   = ddayClass(nextApply.diff);
      applyLblEl.textContent = `${nextApply.s.round} ${nextApply.type} 원서접수 (${nextApply.dateStr})`;
    } else {
      applyValEl.textContent = '종료';
      applyValEl.className   = 'stat-value text-muted';
      applyLblEl.textContent = '2026년 접수 일정이 모두 종료되었습니다.';
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

  // ── 히어로 D-Day 칩 업데이트 ──────────────────
  const heroDdayRow = document.getElementById('hero-dday-row');
  if (heroDdayRow) {
    const chips = [];

    const addChip = (label, diff, icon) => {
      if (diff === null) return;
      const isAlwaysVal = diff === -999;
      const text = isAlwaysVal ? '상시CBT' : (diff === 0 ? 'D-Day' : diff > 0 ? `D-${diff}` : null);
      if (!text) return;
      const cls = diff <= 7 ? 'urgent' : diff <= 30 ? 'soon' : 'normal';
      chips.push(`<span class="hero-dday-chip hero-dday-${cls}"><i class="${icon}"></i>${label} <strong>${text}</strong></span>`);
    };

    if (writtenAlways) {
      addChip('필기', -999, 'fa-solid fa-pencil');
    } else if (nextWritten) {
      addChip('필기', nextWritten.diff, 'fa-solid fa-pencil');
    }
    if (practicalAlways) {
      addChip('실기', -999, 'fa-solid fa-screwdriver-wrench');
    } else if (nextPractical) {
      addChip('실기', nextPractical.diff, 'fa-solid fa-screwdriver-wrench');
    }
    if (nextApply && !writtenAlways && !practicalAlways) {
      addChip(`${nextApply.type} 접수`, nextApply.diff, 'fa-solid fa-file-pen');
    }

    if (chips.length) {
      heroDdayRow.innerHTML = chips.join('');
      heroDdayRow.style.display = 'flex';
    } else {
      heroDdayRow.style.display = 'none';
    }
  }
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

    // 이미지 폴백 체인: 1) KB 상품코드 or 교보CDN(ISBN) → 2) Aladin API → 3) CSS 목업
    const mockBg = book.coverBg || 'linear-gradient(135deg,#0d1f5e,#4db843)';
    const mockTitle = book.title.replace(/\([^)]*\)/g, '').trim();
    const nlAttr = `data-nl-title="${encodeURIComponent(book.title)}"`;
    const imgSrc = book.imageUrl
      || (book.isbn ? `https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/${book.isbn}.jpg` : '');
    const coverHTML = imgSrc
      ? `<img src="${imgSrc}" alt="${book.title}" class="book-cover-img" crossorigin="anonymous" ${nlAttr}
           onerror="this.removeAttribute('src');this.style.display='none';this.nextElementSibling.style.display='flex';window._nlFallback&&window._nlFallback(this)"
           onload="(function(img){try{var c=document.createElement('canvas');c.width=40;c.height=40;var x=c.getContext('2d');x.drawImage(img,0,0,40,40,0,0,40,40);var d=x.getImageData(0,0,40,40).data,s=0,s2=0,n=d.length/4;for(var i=0;i<d.length;i+=4){var v=(d[i]+d[i+1]+d[i+2])/3;s+=v;s2+=v*v;}var variance=s2/n-(s/n)*(s/n);if(variance<30){img.removeAttribute('src');img.style.display='none';img.nextElementSibling.style.display='flex';window._nlFallback&&window._nlFallback(img);}}catch(e){}})(this)">
         <div class="book-cover-mock" style="background:${mockBg}; display:none;">
           <span class="book-cover-title">${mockTitle}</span>
           <span class="book-cover-publisher">${book.publisher}</span>
         </div>`
      : `<img class="book-cover-img" ${nlAttr} src="" alt="${book.title}" style="display:none"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
         <div class="book-cover-mock" style="background:${mockBg}">
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

  initNLBookImages();
}

async function fetchAladinImage(title) {
  const cacheKey = 'nl_img_' + title;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached !== null) return cached;
  try {
    const res = await fetch(`/api/nl-book?title=${encodeURIComponent(title)}`);
    const data = await res.json();
    const imageUrl = data.imageUrl || '';
    if (imageUrl) sessionStorage.setItem(cacheKey, imageUrl); // 빈 결과는 캐시 안 함 → 재시도 가능
    return imageUrl;
  } catch (e) {
    return '';
  }
}

function applyBookImage(img, imageUrl) {
  if (!imageUrl) return;
  const mock = img.nextElementSibling;
  img.src = imageUrl;
  img.onload = () => {
    img.style.display = 'block';
    if (mock) mock.style.display = 'none';
  };
  img.onerror = () => {
    img.style.display = 'none';
    if (mock) mock.style.display = 'flex';
  };
}

// KB 이미지 onerror 시 Aladin으로 자동 대체
window._nlFallback = async function(img) {
  const title = decodeURIComponent(img.dataset.nlTitle || '');
  if (!title) return;
  const imageUrl = await fetchAladinImage(title);
  applyBookImage(img, imageUrl);
};

async function initNLBookImages() {
  // imageUrl 없는 카드(data-nl-title은 있고 src 비어있는 img)만 처리
  const imgs = Array.from(document.querySelectorAll('#books-section img[data-nl-title]'))
    .filter(img => img.getAttribute('src') === '' || img.getAttribute('src') === null || !img.src || img.src === window.location.href || img.src === window.location.origin + '/');
  if (!imgs.length) return;

  await Promise.all(imgs.map(async (img) => {
    const title = decodeURIComponent(img.dataset.nlTitle);
    const imageUrl = await fetchAladinImage(title);
    applyBookImage(img, imageUrl);
  }));
}

// ============================================
// 14. 합격률 차트 (SVG 동적 생성)
// ============================================
function renderChart(cert) {
  const wrapper = document.querySelector('.chart-wrapper');
  if (!wrapper) return;

  const rates = cert.passRates;
  if (!rates || !rates.length) { wrapper.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:2rem;">데이터 없음</p>'; return; }

  const n = rates.length;
  const allVals = rates.flatMap(r => [r.written, r.practical].filter(v => v != null));
  const rawMin = Math.min(...allVals);
  const rawMax = Math.max(...allVals);
  const pad = Math.max(5, Math.round((rawMax - rawMin) * 0.2));
  const minV = Math.max(0, Math.floor((rawMin - pad) / 5) * 5);
  const maxV = Math.min(100, Math.ceil((rawMax + pad) / 5) * 5);
  const chartH = 150;
  const LEFT = 55, RIGHT = 470, TOP = 30, BOTTOM = 190;
  const chartW = RIGHT - LEFT;

  function toX(i) { return n <= 1 ? (LEFT + chartW / 2) : LEFT + (i / (n - 1)) * chartW; }
  function toY(v) { return BOTTOM - ((v - minV) / (maxV - minV)) * chartH; }

  // 그리드 라인
  const step = (maxV - minV) <= 20 ? 5 : 10;
  const gridVals = [];
  for (let v = minV; v <= maxV; v += step) gridVals.push(v);
  const gridLines = gridVals.map(v => `
    <line x1="${LEFT}" y1="${toY(v).toFixed(1)}" x2="${RIGHT}" y2="${toY(v).toFixed(1)}" stroke="var(--border-color)" stroke-dasharray="4" opacity="0.5"/>
    <text x="${LEFT - 8}" y="${(toY(v) + 4).toFixed(1)}" class="chart-text" text-anchor="end" font-size="10">${v}%</text>
  `).join('');

  const xLabels = rates.map((r, i) =>
    `<text x="${toX(i).toFixed(1)}" y="${BOTTOM + 22}" class="chart-text" text-anchor="middle" font-size="10">${r.year}</text>`
  ).join('');

  // 부드러운 베지어 커브
  function smoothPath(pts) {
    if (pts.length === 1) return `M ${pts[0][0]} ${pts[0][1]}`;
    let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      const cpx = (pts[i-1][0] + pts[i][0]) / 2;
      d += ` C ${cpx.toFixed(1)} ${pts[i-1][1].toFixed(1)}, ${cpx.toFixed(1)} ${pts[i][1].toFixed(1)}, ${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)}`;
    }
    return d;
  }

  const wPts = rates.map((r, i) => [toX(i), toY(r.written)]);
  const pPts = rates.map((r, i) => [toX(i), toY(r.practical)]);

  const wPath = smoothPath(wPts);
  const pPath = smoothPath(pPts);

  // 그라디언트 영역 (하단까지)
  const wArea = wPath + ` L ${toX(n-1).toFixed(1)} ${BOTTOM} L ${toX(0).toFixed(1)} ${BOTTOM} Z`;
  const pArea = pPath + ` L ${toX(n-1).toFixed(1)} ${BOTTOM} L ${toX(0).toFixed(1)} ${BOTTOM} Z`;

  const wPoints = rates.map((r, i) => `
    <circle cx="${toX(i).toFixed(1)}" cy="${toY(r.written).toFixed(1)}" r="4.5" fill="#f59e0b" stroke="var(--card-bg)" stroke-width="2"/>
    <text x="${toX(i).toFixed(1)}" y="${(toY(r.written) - 10).toFixed(1)}" class="chart-value-label" fill="#f59e0b" text-anchor="middle" font-size="10" font-weight="600">${r.written}%</text>
  `).join('');

  const pPoints = rates.map((r, i) => `
    <circle cx="${toX(i).toFixed(1)}" cy="${toY(r.practical).toFixed(1)}" r="4.5" fill="#0ea5e9" stroke="var(--card-bg)" stroke-width="2"/>
    <text x="${toX(i).toFixed(1)}" y="${(toY(r.practical) - 10).toFixed(1)}" class="chart-value-label" fill="#0ea5e9" text-anchor="middle" font-size="10" font-weight="600">${r.practical}%</text>
  `).join('');

  // 트렌드 계산
  function trend(arr) {
    if (arr.length < 2) return '';
    const diff = arr[arr.length - 1] - arr[0];
    if (diff > 2) return '↑ 상승';
    if (diff < -2) return '↓ 하락';
    return '→ 안정';
  }
  const wTrend = trend(rates.map(r => r.written));
  const pTrend = trend(rates.map(r => r.practical));

  wrapper.innerHTML = `
    <svg viewBox="0 0 500 230" class="pass-rate-svg" style="overflow:visible">
      <defs>
        <linearGradient id="wGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.02"/>
        </linearGradient>
        <linearGradient id="pGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.02"/>
        </linearGradient>
      </defs>
      ${gridLines}
      ${xLabels}
      <path d="${wArea}" fill="url(#wGrad)"/>
      <path d="${pArea}" fill="url(#pGrad)"/>
      <path d="${wPath}" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="${pPath}" fill="none" stroke="#0ea5e9" stroke-width="2.5" stroke-linejoin="round"/>
      ${wPoints}
      ${pPoints}
    </svg>
    <div class="chart-trend-summary">
      <span class="chart-trend-item chart-trend-written"><i class="fa-solid fa-pencil"></i> 필기 ${wTrend}</span>
      <span class="chart-trend-item chart-trend-practical"><i class="fa-solid fa-screwdriver-wrench"></i> 실기 ${pTrend}</span>
    </div>
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
// 15-1. 합격 전략 가이드 (공략 순서 + 흔한 실수)
// ============================================
const STUDY_MISTAKE_GROUPS = [
  { keys: ['안전', '소방'], mistakes: [
      '법 조문·수치(허용기준, 교육시간 등) 암기를 막판으로 미루다가 단순 실수로 점수를 잃는 경우가 많습니다.',
      '실기 작업형은 시간 배분 연습 없이 이론만 외우면 현장에서 시간 부족으로 당황하기 쉽습니다.',
      '최신 개정 법령을 반영하지 않은 구버전 교재로 학습해 오답을 정답으로 착각하는 경우가 흔합니다.',
    ] },
  { keys: ['전기'], mistakes: [
      '계산 문제(전력, 저항, 역률 등) 공식만 외우고 단위 변환 실수로 틀리는 경우가 많습니다.',
      '실기 작업형(배선, 결선)을 눈으로만 익히고 직접 손으로 연습하지 않아 시험장에서 시간이 부족합니다.',
      '기출에서 반복 출제되는 비슷한 유형을 새 문제로 착각해 다시 처음부터 푸는 비효율이 발생합니다.',
    ] },
  { keys: ['기계', '설비'], mistakes: [
      '도면 해석과 공차 관련 문제를 암기 위주로 학습해 응용문제에서 막히는 경우가 많습니다.',
      '실기 작업형 공정 순서를 충분히 반복하지 않아 시험 당일 순서를 헷갈리는 실수가 잦습니다.',
      '최신 KS 규격 변경 사항을 놓쳐 과년도 정답과 다른 결과를 내는 경우가 있습니다.',
    ] },
  { keys: ['건설', '건축', '토목'], mistakes: [
      '시공 기준 수치(비계 간격, 토공 구배 등)를 암기만 하고 현장 사진과 연결 학습하지 않아 응용에 약합니다.',
      '실기 작업형/면접형 준비를 필기 합격 이후로 미루다가 준비 기간이 촉박해지는 경우가 많습니다.',
      '관련 법규 개정(건설기술진흥법 등)을 놓쳐 과년도 기출과 다른 정답을 고르는 실수가 흔합니다.',
    ] },
  { keys: ['화학', '환경'], mistakes: [
      '화학식과 반응 메커니즘을 단순 암기로 접근해 응용·계산 문제에서 점수를 잃는 경우가 많습니다.',
      '실험·분석 과정의 순서를 정확히 외우지 않아 실기 작업형에서 감점되는 경우가 잦습니다.',
      '환경 기준치(배출 허용기준 등)의 최신 개정값을 놓쳐 혼동하는 경우가 있습니다.',
    ] },
  { keys: ['IT', '정보', '보안'], mistakes: [
      '이론 암기에 치중해 실기형 코딩·설계 문제에서 시간 관리에 실패하는 경우가 많습니다.',
      '최신 기출 유형 변화(신규 기술 출제)를 따라가지 못해 과년도 패턴만 믿다가 당황하는 경우가 있습니다.',
      '실무 경험 없이 이론서만 보면 사례형 문제에서 응용력이 떨어집니다.',
    ] },
  { keys: ['의료', '보건'], mistakes: [
      '암기량이 방대해 막판 벼락치기로는 따라가기 어려운데, 초반 분산 학습 계획 없이 시작하는 경우가 많습니다.',
      '실기/실습 평가 기준을 놓치고 이론 위주로만 준비하다가 실전에서 당황하는 경우가 잦습니다.',
      '관련 법규·고시 개정을 반영하지 않은 구버전 자료로 학습하는 경우가 있습니다.',
    ] },
];
const STUDY_MISTAKE_DEFAULT = [
  '기출문제 분석 없이 이론서만 반복하다가 실제 출제 경향과 어긋난 학습을 하게 되는 경우가 많습니다.',
  '실기 시험 준비를 필기 합격 발표 이후로 미루다가 준비 기간이 촉박해지는 경우가 흔합니다.',
  '최신 개정 사항(법규·기준 등)을 반영하지 않은 자료로 학습해 오답을 정답으로 착각하는 경우가 있습니다.',
];

function getStudyMistakes(cert) {
  if (cert.studyTip && cert.studyTip.mistakes) return cert.studyTip.mistakes;
  const cat = cert.category || '';
  const group = STUDY_MISTAKE_GROUPS.find(g => g.keys.some(k => cat.includes(k)));
  return group ? group.mistakes : STUDY_MISTAKE_DEFAULT;
}

function getStudyPeriod(cert) {
  if (cert.studyTip && cert.studyTip.period) return cert.studyTip.period;
  const rate = parseFloat(cert.avgPassRate) || 50;
  if (rate < 25) return '평균 준비기간 6개월 이상 (난이도 높음)';
  if (rate < 40) return '평균 준비기간 4~5개월';
  if (rate < 60) return '평균 준비기간 2~3개월';
  return '평균 준비기간 1~2개월';
}

function renderStudyGuide(cert) {
  const periodEl = document.getElementById('study-period-badge');
  const orderEl = document.getElementById('study-order-list');
  const mistakeEl = document.getElementById('study-mistakes-list');
  if (!periodEl || !orderEl || !mistakeEl) return;

  periodEl.textContent = getStudyPeriod(cert);

  orderEl.innerHTML = (cert.subjects || []).map((s, i) => {
    const title = s.title || s.name || '';
    return `
      <div class="study-order-item">
        <span class="study-order-num">${i + 1}</span>
        <span class="study-order-title">${title}</span>
      </div>
    `;
  }).join('');

  mistakeEl.innerHTML = getStudyMistakes(cert).map(m => `
    <li class="study-mistake-item"><i class="fa-solid fa-triangle-exclamation"></i><span>${m}</span></li>
  `).join('');
}

// ============================================
// 15-2. 자격증 연계 로드맵
// ============================================
const ROADMAP_LEVEL_DEFS = [
  { suffix: '산업기사', label: '산업기사', rank: 2 },
  { suffix: '기능장', label: '기능장', rank: 2.5 },
  { suffix: '기술사', label: '기술사', rank: 4 },
  { suffix: '기능사', label: '기능사', rank: 1 },
  { suffix: '기사', label: '기사', rank: 3 },
];

function getRoadmapBase(name) {
  for (const def of ROADMAP_LEVEL_DEFS) {
    if (name.endsWith(def.suffix)) {
      return { base: name.slice(0, -def.suffix.length), level: def };
    }
  }
  return null;
}

function buildRoadmapPath(cert) {
  const info = getRoadmapBase(cert.name);
  if (!info || !info.base) return null;
  const { base } = info;
  const path = ROADMAP_LEVEL_DEFS.slice()
    .sort((a, b) => a.rank - b.rank)
    .map(def => {
      const candidate = base + def.suffix;
      return {
        name: candidate,
        label: def.label,
        exists: !!CERTIFICATIONS[candidate],
        current: candidate === cert.name,
      };
    })
    .filter(p => p.exists || p.current);
  return path.length > 1 ? path : null;
}

function buildRoadmapRelated(cert, excludeNames) {
  const cat = cert.category;
  if (!cat) return [];
  return Object.keys(CERTIFICATIONS)
    .filter(n => n !== cert.name && !excludeNames.has(n) && CERTIFICATIONS[n].category === cat)
    .slice(0, 6);
}

function renderRoadmap(cert) {
  const pathEl    = document.getElementById('roadmap-path');
  const relatedEl = document.getElementById('roadmap-related');
  if (!pathEl || !relatedEl) return;

  const path = buildRoadmapPath(cert);
  const usedNames = new Set([cert.name, ...((path || []).map(p => p.name))]);
  const related   = buildRoadmapRelated(cert, usedNames);

  // ── 계단식 타일 트리 ──────────────────────────────────────────────
  if (path) {
    pathEl.style.display = '';
    const LEVEL_META = {
      '기능사':   { color: '#6b7280', bg: 'rgba(107,114,128,0.1)', icon: 'fa-seedling' },
      '산업기사': { color: '#2563eb', bg: 'rgba(37,99,235,0.1)',   icon: 'fa-layer-group' },
      '기능장':   { color: '#7c3aed', bg: 'rgba(124,58,237,0.1)',  icon: 'fa-medal' },
      '기사':     { color: '#0891b2', bg: 'rgba(8,145,178,0.1)',   icon: 'fa-graduation-cap' },
      '기술사':   { color: '#d97706', bg: 'rgba(217,119,6,0.1)',   icon: 'fa-crown' },
    };
    pathEl.innerHTML = `
      <div class="roadmap-tree">
        ${path.map((p, i) => {
          const meta = LEVEL_META[p.label] || { color: '#6b7280', bg: 'rgba(107,114,128,0.1)', icon: 'fa-certificate' };
          const pop  = CERT_POPULARITY[p.name];
          const stars = pop ? renderStars(pop.stars) : '';
          return `
            <div class="roadmap-tree-col" style="--rm-color:${meta.color};--rm-bg:${meta.bg};">
              <div class="roadmap-tree-level">${p.label}</div>
              <div class="roadmap-tree-card ${p.current ? 'rm-current' : ''} ${p.exists && !p.current ? 'rm-clickable' : ''}"
                   ${p.exists && !p.current ? `onclick="switchCertification('${p.name.replace(/'/g,"\\'")}')"` : ''}>
                <i class="fa-solid ${meta.icon} rm-icon"></i>
                <span class="rm-name">${p.name}</span>
                ${stars ? `<div class="rm-stars">${stars}</div>` : ''}
                ${p.current ? '<span class="rm-badge">현재</span>' : ''}
                ${!p.exists ? '<span class="rm-badge rm-badge-gray">미등록</span>' : ''}
              </div>
              ${i < path.length - 1 ? '<div class="roadmap-tree-arrow"><i class="fa-solid fa-arrow-right"></i></div>' : ''}
            </div>
          `;
        }).join('')}
      </div>`;
  } else {
    pathEl.style.display = 'none';
    pathEl.innerHTML = '';
  }

  if (related.length > 0) {
    relatedEl.innerHTML = related.map(n => {
      const c   = CERTIFICATIONS[n];
      const pop = CERT_POPULARITY[n];
      return `<button class="roadmap-related-chip" onclick="switchCertification('${n.replace(/'/g,"\\'")}')">
        <i class="fa-solid ${c.icon || 'fa-certificate'}"></i>
        <span>${n}</span>
        ${pop ? `<span class="roadmap-chip-stars">${renderStars(pop.stars)}</span>` : ''}
      </button>`;
    }).join('');
  } else {
    relatedEl.innerHTML = `<span class="roadmap-empty">같은 분야의 다른 자격증 정보가 없습니다.</span>`;
  }
}

// ============================================
// 합격 가능성 예측기
// ============================================
function renderPredictor(cert) {
  const el = document.getElementById('predictor-body');
  if (!el) return;

  const subjects = cert.subjects || [];
  if (!subjects.length) {
    el.innerHTML = `<p class="predictor-empty"><i class="fa-solid fa-circle-info"></i> 이 자격증은 과목 데이터가 없어 예측기를 사용할 수 없습니다.</p>`;
    return;
  }

  // 과목별 점수 입력 렌더
  el.innerHTML = `
    <div class="predictor-grid">
      ${subjects.map((s, i) => `
        <div class="predictor-subject">
          <label class="pred-label">${typeof s === 'string' ? s : (s.name || s.title || '')}</label>
          <div class="pred-input-wrap">
            <input type="number" class="pred-score-input" id="pred-score-${i}"
              min="0" max="100" placeholder="0~100"
              oninput="calcPassPredictor(${subjects.length})" />
            <span class="pred-unit">점</span>
          </div>
          <div class="pred-bar-wrap">
            <div class="pred-bar" id="pred-bar-${i}" style="width:0%"></div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="predictor-result" id="predictor-result">
      <div class="pred-result-empty">점수를 입력하면 합격 가능성이 표시됩니다</div>
    </div>
  `;
}

window.calcPassPredictor = function(subjectCount) {
  const scores = [];
  for (let i = 0; i < subjectCount; i++) {
    const val = parseFloat(document.getElementById(`pred-score-${i}`)?.value);
    scores.push(isNaN(val) ? null : Math.min(100, Math.max(0, val)));

    // 개별 바 업데이트
    const bar = document.getElementById(`pred-bar-${i}`);
    if (bar) {
      const v = scores[i] ?? 0;
      bar.style.width = v + '%';
      bar.style.background = v < 40 ? '#ef4444' : v < 60 ? '#f59e0b' : '#10b981';
    }
  }

  const filled = scores.filter(s => s !== null);
  if (!filled.length) return;

  const avg = filled.reduce((a, b) => a + b, 0) / filled.length;
  const minScore = Math.min(...filled);
  const hasNull = scores.some(s => s === null);

  const resultEl = document.getElementById('predictor-result');
  if (!resultEl) return;

  // 판정 로직
  let verdict, cls, icon, detail;
  if (hasNull) {
    // 일부 미입력 — 입력된 것만 기준 예측
    if (filled.some(s => s < 40)) {
      verdict = '과락 위험'; cls = 'pred-danger'; icon = 'fa-triangle-exclamation';
      detail = `입력된 과목 중 40점 미만이 있습니다.`;
    } else if (avg >= 70) {
      verdict = '합격 가능성 높음'; cls = 'pred-good'; icon = 'fa-circle-check';
      detail = `현재까지 입력 평균 ${avg.toFixed(1)}점 — 나머지 과목도 40점 이상 유지하세요.`;
    } else {
      verdict = '점수 부족'; cls = 'pred-warn'; icon = 'fa-circle-exclamation';
      detail = `현재 평균 ${avg.toFixed(1)}점 — 나머지 과목을 높여야 합니다.`;
    }
  } else if (minScore < 40) {
    verdict = '불합격 (과락)'; cls = 'pred-fail'; icon = 'fa-xmark-circle';
    detail = `40점 미만 과목이 있어 과락입니다. 해당 과목 집중 보완이 필요합니다.`;
  } else if (avg < 60) {
    verdict = '불합격 (평균 미달)'; cls = 'pred-fail'; icon = 'fa-xmark-circle';
    detail = `평균 ${avg.toFixed(1)}점 — 합격선(60점) 미달입니다. ${(60 - avg).toFixed(1)}점 더 필요합니다.`;
  } else if (avg < 65) {
    verdict = '합격선 근접'; cls = 'pred-warn'; icon = 'fa-circle-exclamation';
    detail = `평균 ${avg.toFixed(1)}점 — 합격 기준을 넘었지만 여유가 없습니다.`;
  } else if (avg < 75) {
    verdict = '합격 가능성 높음'; cls = 'pred-good'; icon = 'fa-circle-check';
    detail = `평균 ${avg.toFixed(1)}점 — 안정적인 합격권입니다.`;
  } else {
    verdict = '합격 확실시'; cls = 'pred-excellent'; icon = 'fa-star';
    detail = `평균 ${avg.toFixed(1)}점 — 우수한 성적입니다!`;
  }

  // 예상 점수 바
  const pct = Math.min(100, (avg / 100) * 100);
  resultEl.innerHTML = `
    <div class="pred-result-card ${cls}">
      <div class="pred-result-header">
        <i class="fa-solid ${icon}"></i>
        <span class="pred-verdict">${verdict}</span>
        <span class="pred-avg-score">평균 ${avg.toFixed(1)}점</span>
      </div>
      <div class="pred-score-bar-wrap">
        <div class="pred-score-bar-track">
          <div class="pred-score-bar-fill" style="width:${pct}%"></div>
          <div class="pred-pass-line" style="left:60%"><span>합격선 60</span></div>
        </div>
      </div>
      <p class="pred-detail">${detail}</p>
      ${minScore < 40 && !hasNull ? `<p class="pred-sub-warn"><i class="fa-solid fa-triangle-exclamation"></i> 최저 점수: ${minScore}점 — 과락 기준(40점) 미달</p>` : ''}
    </div>
  `;
};

// ============================================
// 시험장 지역 검색
// ============================================
const EXAM_REGIONS = [
  { name: '서울', code: 'S', centers: ['서울지역본부 (강남)', '서울동부센터', '서울서부센터', '서울남부센터', '서울북부센터'] },
  { name: '부산', code: 'B', centers: ['부산지역본부', '부산남부센터'] },
  { name: '대구', code: 'D', centers: ['대구지역본부', '대구서부센터'] },
  { name: '인천', code: 'I', centers: ['인천지역본부', '인천서부센터'] },
  { name: '광주', code: 'G', centers: ['광주지역본부'] },
  { name: '대전', code: 'J', centers: ['대전지역본부', '대전세종센터'] },
  { name: '울산', code: 'U', centers: ['울산지역본부'] },
  { name: '세종', code: 'SJ', centers: ['대전세종센터(세종)'] },
  { name: '경기', code: 'GG', centers: ['경기지역본부 (수원)', '경기북부센터 (의정부)', '경기동부센터 (성남)', '경기서부센터 (부천)'] },
  { name: '강원', code: 'GW', centers: ['강원지역본부 (춘천)', '강원동부센터 (강릉)'] },
  { name: '충북', code: 'CB', centers: ['충북지역본부 (청주)'] },
  { name: '충남', code: 'CN', centers: ['충남지역본부 (천안)'] },
  { name: '전북', code: 'JB', centers: ['전북지역본부 (전주)'] },
  { name: '전남', code: 'JN', centers: ['전남지역본부 (광주)'] },
  { name: '경북', code: 'GB', centers: ['경북지역본부 (구미)', '경북동부센터 (포항)'] },
  { name: '경남', code: 'GN', centers: ['경남지역본부 (창원)', '경남서부센터 (진주)'] },
  { name: '제주', code: 'JJ', centers: ['제주지역본부'] },
];

function initLocationSection() {
  const gridEl = document.getElementById('location-region-grid');
  if (!gridEl || gridEl._bound) return;
  gridEl._bound = true;

  gridEl.innerHTML = EXAM_REGIONS.map(r => `
    <button class="loc-region-btn" onclick="showLocationCenters('${r.code}')">
      ${r.name}
    </button>
  `).join('');
}

window.showLocationCenters = function(code) {
  const region = EXAM_REGIONS.find(r => r.code === code);
  if (!region) return;

  // 버튼 active 토글
  document.querySelectorAll('.loc-region-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.loc-region-btn').forEach(b => {
    if (b.textContent.trim() === region.name) b.classList.add('active');
  });

  const el = document.getElementById('location-centers');
  if (!el) return;

  // Q-Net 시험장 찾기 URL (지역별 검색 링크)
  const qnetUrl = `https://www.q-net.or.kr/tst002.do?id=tst00201&gSite=Q&gId=`;
  const scheduleUrl = `https://www.q-net.or.kr/cst001.do?id=cst00101&gSite=Q&gId=`;

  el.innerHTML = `
    <div class="location-result">
      <div class="loc-result-header">
        <i class="fa-solid fa-map-marker-alt"></i>
        <strong>${region.name}</strong> 지역 시험센터
      </div>
      <div class="loc-centers-list">
        ${region.centers.map(c => `
          <div class="loc-center-item">
            <i class="fa-regular fa-building"></i>
            <span>${c}</span>
          </div>
        `).join('')}
      </div>
      <div class="loc-links">
        <a href="${qnetUrl}" target="_blank" rel="noopener noreferrer" class="loc-link-btn loc-link-primary">
          <i class="fa-solid fa-map-location-dot"></i> Q-Net 시험장 찾기
        </a>
        <a href="${scheduleUrl}" target="_blank" rel="noopener noreferrer" class="loc-link-btn loc-link-secondary">
          <i class="fa-solid fa-calendar-check"></i> Q-Net 시험 일정 조회
        </a>
      </div>
      <p class="loc-notice"><i class="fa-solid fa-circle-info"></i> 시험장 배정은 원서 접수 후 Q-Net에서 확인됩니다. 위 센터는 참고용이며 실제 시험장과 다를 수 있습니다.</p>
    </div>
  `;
};

// ============================================
// 16. 자격증 검색 드롭다운
// ============================================

// ── 받침 감지 (으로/로 조사 선택) ────────────────────────────────────────────
function hasBatchim(char) {
  const code = char.charCodeAt(0) - 0xAC00;
  return code >= 0 && code <= 11171 && (code % 28) !== 0;
}
function roSuffix(name) {
  return hasBatchim(name[name.length - 1]) ? '으로' : '로';
}

// ── 영문 변환 토스트 알림 ─────────────────────────────────────────────────────
function showEngConvertToast(engInput, korQuery, certName) {
  let toast = document.getElementById('cert-correction-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cert-correction-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-keyboard"></i> 영문 입력을 <b>${korQuery}</b>로 변환해 <b>${certName}</b>을(를) 검색했어요.`;
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('visible'), 4000);
}

// ── 오타 교정 토스트 알림 ─────────────────────────────────────────────────────
function showCorrectionToast(originalQuery, correctedName) {
  const ro = roSuffix(correctedName);
  let toast = document.getElementById('cert-correction-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cert-correction-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-spell-check"></i> <b>${originalQuery}</b> 결과가 없어 <b>${correctedName}</b>(${ro}) 검색되었어요.`;
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('visible'), 4000);
}

// ── 레벤슈타인 편집거리 (오타 교정) ─────────────────────────────────────────
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}
// 쿼리 길이에 따라 허용 오타 수: ~3자=1개, 4자↑=2개
function fuzzyThreshold(q) { return q.length <= 3 ? 1 : 2; }

// ── 초성 추출 ────────────────────────────────────────────────────────────────
const CHOSUNG = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
function extractChosung(str) {
  return [...str].map(ch => {
    const code = ch.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return ch;
    return CHOSUNG[Math.floor(code / 28 / 21)];
  }).join('');
}

// ── 별칭 맵 ──────────────────────────────────────────────────────────────────
const CERT_ALIASES = {
  // ── 어학 ──────────────────────────────────────────────────────────────────
  '토익': 'TOEIC', '토익스피킹': 'TOEIC Speaking', '토스': 'TOEIC Speaking',
  '토플': 'TOEFL', '아이엘츠': 'IELTS', '오픽': 'OPIc',
  '탑': '한국어능력시험(TOPIK)', '토픽': '한국어능력시험(TOPIK)', '한국어능력': '한국어능력시험(TOPIK)',
  '제이엘피티': 'JLPT', '일본어능력': 'JLPT', '일어능력': 'JLPT',
  '에이치에스케이': 'HSK', '중국어능력': 'HSK', '중국어': 'HSK',

  // ── IT·정보 ───────────────────────────────────────────────────────────────
  '정처기': '정보처리기사', '정보처리': '정보처리기사',
  '정처산': '정보처리산업기사', '정처기산': '정보처리산업기사',
  '정처기능': '정보처리기능사', '정처기능사': '정보처리기능사',
  '정처기능장': '정보처리기능장',
  '정처기술사': '정보처리기술사',
  '빅데': '빅데이터분석기사', '빅분기': '빅데이터분석기사', '빅데이터': '빅데이터분석기사',
  '보안기사': '정보보안기사', '정보보안': '정보보안기사', '정보보안기': '정보보안기사',
  '보안산': '정보보안산업기사', '정보보안산': '정보보안산업기사',
  '보안기술사': '정보보안기술사',
  'sql개발자': 'SQLD', '에스큐엘': 'SQLD', '에스큐엘디': 'SQLD',
  'sql전문가': 'SQLP', '에스큐엘피': 'SQLP',
  '네관사': '네트워크관리사2급', '네트워크': '네트워크관리사2급', '네관사2급': '네트워크관리사2급',
  '네관사1급': '네트워크관리사1급',
  '리눅스': '리눅스마스터2급', '리마': '리눅스마스터2급', '리눅스마스터': '리눅스마스터2급',
  '리눅스1급': '리눅스마스터1급', '리마1급': '리눅스마스터1급',
  '아이티큐': 'ITQ', '모스': 'MOS', '엠오에스': 'MOS',
  '지티큐': 'GTQ', '그래픽기술자격': 'GTQ',
  '지티큐아이': 'GTQi', '일러스트자격': 'GTQi',
  '이스엠에스': 'ISMS', '정보보호관리체계': 'ISMS',
  '이알피': 'ERP정보관리사', 'erp': 'ERP정보관리사',
  '컴활': '컴퓨터활용능력1급', '컴활1급': '컴퓨터활용능력1급', '컴퓨터활용능력': '컴퓨터활용능력1급',
  '컴활2급': '컴퓨터활용능력2급', '컴퓨터활용2급': '컴퓨터활용능력2급',
  '워드': '워드프로세서', '워드프로': '워드프로세서', 'wp': '워드프로세서', '워드기능사': '워드프로세서',
  'adsp': 'ADsP', '데이터분석준전문가': 'ADsP', '데이터준전문가': 'ADsP',
  'adp': 'ADP', '데이터분석전문가': 'ADP', '데이터전문가': 'ADP',
  '전자상거래관리': '전자상거래관리사', '이커머스관리': '전자상거래관리사', '전상관': '전자상거래관리사',
  '전자상거래운용': '전자상거래운용사', '이커머스운용': '전자상거래운용사', '전상운': '전자상거래운용사',
  '사무자동화': '사무자동화산업기사', '사자기': '사무자동화산업기사',
  '반도체설계': '반도체설계기사', '반도체기': '반도체설계기사',
  '반도체설계산': '반도체설계산업기사',
  '컴그기': '컴퓨터그래픽스운용기능사', '컴그': '컴퓨터그래픽스운용기능사', '그래픽기능사': '컴퓨터그래픽스운용기능사',
  '웹디기': '웹디자인기능사', '웹디': '웹디자인기능사',
  '정보통신기': '정보통신기사', '정통기': '정보통신기사',
  '정보통신산': '정보통신산업기사', '정통산': '정보통신산업기사',
  '무선설비': '무선설비기사', '무선기': '무선설비기사',
  '무선설비산': '무선설비산업기사',
  '전자계산기': '전자계산기기사', '전계기': '전자계산기기사',
  '로봇기구': '로봇기구개발기사', '로봇기': '로봇기구개발기사',
  '3d프린터': '3D프린터운용기능사', '3디프린터': '3D프린터운용기능사', '3dprinter': '3D프린터운용기능사',

  // ── 금융·회계·세무 ──────────────────────────────────────────────────────────
  '공인회계': '공인회계사', '회계사': '공인회계사', 'cpa': '공인회계사',
  '세무': '세무사', '세무사시험': '세무사',
  '공인노무': '공인노무사', '노무사': '공인노무사',
  '관세': '관세사', '관세사시험': '관세사',
  '감정평가': '감정평가사', '감평사': '감정평가사',
  '손해사정': '손해사정사', '손사정': '손해사정사',
  '보험계리': '보험계리사', '계리사': '보험계리사',
  '변리': '변리사', '변리사시험': '변리사',
  '법무': '법무사', '법무사시험': '법무사',
  '재경': '재경관리사', '에프에이티': 'FAT', '티에이티': 'TAT',
  '에이에프피케이': 'AFPK', '씨에프피': 'CFP',
  '펀드': '펀드투자권유대행인', '매경': '매경TEST', '테샛': 'TESAT',
  '주택관리': '주택관리사', '주관사': '주택관리사',
  '행정': '행정사', '행정사시험': '행정사',

  // ── 전기·전자 ──────────────────────────────────────────────────────────────
  '전기기': '전기기사', '전기산': '전기산업기사', '전기공': '전기공사기사',
  '전기공산': '전기공사산업기사', '전기공사산': '전기공사산업기사',
  '전기기능': '전기기능사', '전기기능장': '전기기능장',
  '전기응용': '전기응용기술사',
  '발배기': '발송배전기술사', '발송배전': '발송배전기술사',
  '전자기사': '전자기사', '전자기': '전자기사',
  '전자산': '전자산업기사',
  '전자기기기능': '전자기기기능사', '전자기기': '전자기기기능사',
  '승강기기사': '승강기기사', '승강기': '승강기기사', '엘리베이터': '승강기기사',
  '태양광': '태양광발전설비기능사', '신재생': '신재생에너지발전설비기사',

  // ── 건설·토목·건축 ──────────────────────────────────────────────────────────
  '건축기': '건축기사', '건축산': '건축산업기사',
  '건축설비기': '건축설비기사', '건축설비산': '건축설비산업기사',
  '건축기술사': '건축기술사',
  '토목기': '토목기사', '토목산': '토목산업기사', '토목기술사': '토목기술사',
  '건안기': '건설안전기사', '건설안전기': '건설안전기사',
  '건안산': '건설안전산업기사', '건설안전산': '건설안전산업기사',
  '실내건축기': '실내건축기사', '실내건기': '실내건축기사',
  '실내건축기능': '실내건축기능사',
  '도계기': '도시계획기사', '도시계획기': '도시계획기사',
  '교통기': '교통기사',
  '측량기': '측량및지형공간정보기사', '측지기': '측량및지형공간정보기사', '측량': '측량및지형공간정보기사',
  '측량기능': '측량기능사',
  '지적기': '지적기사', '지적': '지적기사',
  '전산건축': '전산응용건축제도기능사', '캐드건축': '전산응용건축제도기능사',
  '전산기계': '전산응용기계제도기능사', '캐드기계': '전산응용기계제도기능사',

  // ── 기계·설비 ──────────────────────────────────────────────────────────────
  '기계기': '일반기계기사', '일반기계기': '일반기계기사',
  '기계설계기': '기계설계기사', '기설기': '기계설계기사',
  '기계설계산': '기계설계산업기사', '기설산': '기계설계산업기사',
  '기계기술사': '기계기술사',
  '기계정비산': '기계정비산업기사',
  '메카트로닉스': '메카트로닉스기사', '메카기': '메카트로닉스기사',
  '공냉기': '공조냉동기계기사', '냉동기사': '공조냉동기계기사', '공조냉동기': '공조냉동기계기사',
  '공냉산': '공조냉동기계산업기사', '냉동산': '공조냉동기계산업기사',
  '냉동기능사': '공조냉동기계기능사', '공냉기능': '공조냉동기계기능사',
  '에너지관리기': '에너지관리기사', '에관기': '에너지관리기사', '에너지기': '에너지관리기사',
  '에너지관리산': '에너지관리산업기사',
  '인간공학기': '인간공학기사', '인공기': '인간공학기사',
  '공유압기': '공유압기능사', '유압기능': '공유압기능사',

  // ── 소방 ──────────────────────────────────────────────────────────────────
  '소방설비': '소방설비기사(전기)', '소방전기': '소방설비기사(전기)',
  '소방기계': '소방설비기사(기계)',
  '소방': '소방설비기사(전기)',
  '소방산': '소방설비산업기사',
  '소방기능전기': '소방설비기능사(전기)', '소방기능기계': '소방설비기능사(기계)',
  '소방시설': '소방시설관리사', '소방시설관리': '소방시설관리사',
  '소방기술사': '소방기술사',
  '소방안전1급': '소방안전관리자1급', '소방안전2급': '소방안전관리자2급',
  '소방안전3급': '소방안전관리자3급', '소방안전특급': '소방안전관리자특급',

  // ── 안전·환경 ─────────────────────────────────────────────────────────────
  '산업안전': '산업안전기사', '산안기': '산업안전기사', '산안기사': '산업안전기사',
  '산안산': '산업안전산업기사', '산업안전산': '산업안전산업기사',
  '산업안전기술사': '산업안전기술사',
  '산업위생기': '산업위생관리기사', '산위기': '산업위생관리기사',
  '산업위생산': '산업위생관리산업기사',
  '위험물': '위험물산업기사', '위험물산': '위험물산업기사',
  '위험물기능': '위험물기능사', '위험물기능장': '위험물기능장',
  '가스기': '가스기사', '가스산': '가스산업기사', '가스기능': '가스기능사',
  '가스기술사': '가스기술사',
  '화재감식': '화재감식평가기사', '화감기': '화재감식평가기사',
  '환경기': '환경기사', '환기': '환경기사',
  '환경산': '환경산업기사',
  '대기기': '대기환경기사', '대기환경기': '대기환경기사',
  '대기산': '대기환경산업기사',
  '수질기': '수질환경기사', '수질환경기': '수질환경기사',
  '수질산': '수질환경산업기사',
  '폐기물기': '폐기물처리기사', '폐기물처리기': '폐기물처리기사',
  '소음진동기': '소음진동기사', '소음기': '소음진동기사',
  '온실가스': '온실가스관리기사', '온실가스기': '온실가스관리기사',
  '토양환경기': '토양환경기사', '토양기': '토양환경기사',

  // ── 화학 ─────────────────────────────────────────────────────────────────
  '화공기': '화공기사', '화공': '화공기사',
  '화공기술사': '화공기술사',
  '화학분석기': '화학분석기사', '화분기': '화학분석기사',
  '화학분석기능': '화학분석기능사',
  '위생사': '위생사',

  // ── 품질·생산 ─────────────────────────────────────────────────────────────
  '품질기': '품질경영기사', '품경기': '품질경영기사', '품질경영기': '품질경영기사',
  '품질산': '품질경영산업기사', '품경산': '품질경영산업기사',
  '생산관리기술사': '생산관리기술사',
  '생산자동화기': '생산자동화기능사',
  '공장관리기능장': '공장관리기능장',

  // ── 자동차·건설기계 ──────────────────────────────────────────────────────
  '자동차기': '자동차기사', '자기사': '자동차기사',
  '자동차산': '자동차산업기사',
  '자정기': '자동차정비기사', '자동차정비기': '자동차정비기사',
  '자동차정비산': '자동차정비산업기사', '자정산': '자동차정비산업기사',
  '자동차정비기능': '자동차정비기능사', '자정기능': '자동차정비기능사',
  '자동차기능장': '자동차기능장',
  '자동차검사기': '자동차검사기사',
  '건설기계기': '건설기계기사', '건설기계기사': '건설기계기사',
  '건설기계산': '건설기계산업기사',
  '지게차': '지게차운전기능사',
  '굴착기': '굴착기운전기능사', '포클레인': '굴착기운전기능사',
  '타워크레인': '타워크레인운전기능사', '크레인': '타워크레인운전기능사',
  '로더': '로더운전기능사', '롤러': '롤러운전기능사',
  '불도저': '불도저운전기능사', '불도저운전': '불도저운전기능사',
  '드론': '드론조종자격증', '드론자격': '드론조종자격증',

  // ── 용접·금속 ─────────────────────────────────────────────────────────────
  '용접기': '용접기사', '용접기능': '용접기능사', '용접기능장': '용접기능장',
  '특수용접': '특수용접기능사',
  '비파괴기': '비파괴검사기사', '비파기': '비파괴검사기사', '비파괴': '비파괴검사기사',
  '비파괴산': '비파괴검사산업기사',
  '비파괴기능': '비파괴검사기능사',
  '금속재료기': '금속재료기사', '금재기': '금속재료기사',

  // ── 의료·보건 ─────────────────────────────────────────────────────────────
  '간호사': '간호사 국가시험', '간호': '간호사 국가시험', '국시간호': '간호사 국가시험',
  '간호조무사': '간호조무사',
  '물치': '물리치료사', '물리치료': '물리치료사',
  '작치': '작업치료사', '작업치료': '작업치료사',
  '방사선': '방사선사', '방사선기사': '방사선사',
  '방사선관리기': '방사선관리기사',
  '임상병리': '임상병리사',
  '치위생': '치과위생사', '치위생사': '치과위생사',
  '치기공': '치과기공사', '치과기공': '치과기공사',
  '안경사': '안경사',
  '요양보호': '요양보호사',
  '응급구조': '응급구조사1급', '응구사': '응급구조사1급', '응급구조1급': '응급구조사1급',
  '응급구조2급': '응급구조사2급',
  '언어재활': '언어재활사', '언어치료': '언어재활사', '언재': '언어재활사',
  '의무기록': '의무기록사',
  '보건교육사': '보건교육사',
  '임상심리': '임상심리사', '상담심리': '심리상담사',
  '정신건강심리': '정신건강임상심리사', '정신건강': '정신건강임상심리사',
  '맞춤형화장품': '맞춤형화장품조제관리사', '화장품조제': '맞춤형화장품조제관리사',

  // ── 복지·교육·법률 ──────────────────────────────────────────────────────
  '사복': '사회복지사1급', '사회복지': '사회복지사1급', '사회복지사': '사회복지사1급',
  '사사분': '사회조사분석사', '사조분': '사회조사분석사', '사회조사': '사회조사분석사',
  '청상': '청소년상담사', '청소년상담': '청소년상담사',
  '청지': '청소년지도사', '청소년지도': '청소년지도사',
  '평생교육사': '평생교육사', '평교사': '평생교육사',
  '임용': '임용고시', '교원임용': '임용고시', '임용시험': '임용고시',
  '변리': '변리사', '변리사시험': '변리사', '특허': '변리사',
  '법무': '법무사', '법무사시험': '법무사',
  '나무의사': '나무의사', '수목의사': '나무의사',

  // ── 관광·문화 ─────────────────────────────────────────────────────────────
  '국내여행': '국내관광안내사', '국내관광': '국내관광안내사', '국내안내사': '국내관광안내사',
  '국외여행': '국외관광안내사', '국외관광': '국외관광안내사', 'tc': '국외관광안내사',
  '관광통역': '관광통역안내사', '통역안내': '관광통역안내사',
  '스포츠지도': '스포츠지도사', '생활체육': '스포츠지도사',

  // ── 한국어·글쓰기 ─────────────────────────────────────────────────────────
  '한국사': '한국사능력검정시험', '한능검': '한국사능력검정시험', '한국사능력': '한국사능력검정시험',
  '실용글쓰기': '한국실용글쓰기', '한실글': '한국실용글쓰기',
  'kbs한국어': 'KBS한국어능력시험', '방송국어': 'KBS한국어능력시험', 'kbs': 'KBS한국어능력시험',
  '한국어교원': '한국어교원', '한어교': '한국어교원',
  '한자': '한자능력검정', '한자검정': '한자능력검정',
  'kiip': '사회통합프로그램', '사회통합': '사회통합프로그램',

  // ── 식품·요리 ─────────────────────────────────────────────────────────────
  '조리기': '한식조리기능사', '한식': '한식조리기능사', '조리기능사': '한식조리기능사',
  '제과': '제과기능사', '제빵': '제빵기능사',
  '식품기': '식품기사', '식품기사': '식품기사',
  '식품산': '식품산업기사',
  '식품안전기': '식품안전기사',
  '바리스타': '바리스타2급', '커피': '바리스타2급', '바리스타2급': '바리스타2급',
  '바리스타1급': '바리스타1급',
  '소믈': '소믈리에', '와인': '소믈리에',
  '바텐': '바텐더', '바텐더': '바텐더',
  '영양사': '영양사',

  // ── 농업·산림·조경 ──────────────────────────────────────────────────────
  '조경기': '조경기사', '조경기사': '조경기사',
  '조경기능': '조경기능사',
  '조경산': '조경산업기사',
  '농산물관리': '농산물품질관리사', '농관사': '농산물품질관리사',
  '수산물관리': '수산물품질관리사',
  '유기농기': '유기농업기사', '유기농': '유기농업기사',
  '산림기': '산림기사', '산림산': '산림산업기사',
  '식물보호기': '식물보호기사',
  '종자기': '종자기사',

  // ── 운전·교통 ─────────────────────────────────────────────────────────────
  '운전': '운전면허(1종 보통)', '면허': '운전면허(1종 보통)', '1종보통': '운전면허(1종 보통)',
  '1종대형': '1종운전면허(대형)', '대형면허': '1종운전면허(대형)',
  '2종보통': '2종운전면허(보통)',
  '버스운전': '버스운전자격', '버스자격': '버스운전자격',
  '택시운전': '택시운전자격', '택시자격': '택시운전자격',
  '화물운송': '화물운송종사', '화물운전': '화물운송종사',
  '이륜차면허': '이륜자동차운전면허', '오토바이면허': '이륜자동차운전면허',
  '소형선박': '소형선박조종사',

  // ── 철도 ─────────────────────────────────────────────────────────────────
  '철도차량기': '철도차량기사', '철차기': '철도차량기사',
  '철도차량산': '철도차량산업기사',
  '철도신호기': '철도신호기사',
  '철도신호산': '철도신호산업기사',

  // ── 미용 ─────────────────────────────────────────────────────────────────
  '미용사': '미용사(일반)', '헤어미용': '미용사(일반)',
  '피부미용': '미용사(피부)', '에스테틱': '미용사(피부)',
  '네일미용': '미용사(네일)', '네일아트': '미용사(네일)',
  '메이크업': '미용사(메이크업)',
  '피부관리사': '피부미용사',

  // ── 물류·유통 ─────────────────────────────────────────────────────────────
  '물류기': '물류관리사', '물관사': '물류관리사', '물류': '물류관리사',

  // ── 공인중개사·감정 ──────────────────────────────────────────────────────
  '공인중개': '공인중개사', '중개사': '공인중개사', '공중사': '공인중개사',
  '공인회계': '공인회계사', '회계사': '공인회계사', 'cpa': '공인회계사',
};

// ── 자격증 선호도 (★1~5) ──────────────────────────────────────────────────────
// 출처 및 기준:
//   ① Q-Net 통계연보(한국산업인력공단) — 연간 응시자 수 규모
//   ② 사람인·잡코리아 채용공고 — 자격 우대/필수 언급 빈도
//   ③ 관계 법령 — 법정 선임 의무 여부 (산안법·소방법·전기공사업법 등)
//   ④ 산업 활용 범위 — 적용 직종·업종 폭
// 5개 항목 각 1점 → 합산 5점 만점 / 0.5점 단위
const CERT_POPULARITY = {
  // ★★★★★ — 연 응시 10만+ 또는 범산업 법정 필수, 취업 직결
  '정보처리기사':       { stars: 5.0, tag: '응시자 최다', reason: '연 응시 40만명 이상, IT 취업 필수' },
  '컴퓨터활용능력1급':  { stars: 5.0, tag: '국민 자격증', reason: '연 응시 50만명, 공기업·사무직 필수' },
  '한국사능력검정시험': { stars: 5.0, tag: '취업 가산점', reason: '공무원·공기업 가산점, 연 응시 50만명' },
  '전기기사':           { stars: 5.0, tag: '법정 필수', reason: '전기분야 법정 선임자격, 연 응시 20만명' },
  '산업안전기사':       { stars: 5.0, tag: '법정 필수', reason: '사업장 안전관리자 법정 선임자격' },
  '지게차운전기능사':   { stars: 5.0, tag: '응시자 최다', reason: '연 응시 20만명, 물류·제조 전 업종 활용' },

  // ★★★★½
  'TOEIC':               { stars: 4.5, tag: '취업 기본스펙', reason: '대기업·공기업 공채 어학 기준, 전 산업' },
  '운전면허(1종 보통)':  { stars: 4.5, tag: '생활 필수', reason: '취업·생활 범용, 응시자 연 100만명 이상' },
  '산업안전산업기사':    { stars: 4.5, tag: '법정 필수', reason: '안전관리자 법정 선임, 건설·제조 필수' },
  '전기산업기사':        { stars: 4.5, tag: '법정 필수', reason: '전기분야 법정 선임자격, 전기기사 전 단계' },
  '건설안전기사':        { stars: 4.5, tag: '법정 필수', reason: '건설현장 안전관리자 법정 자격' },

  // ★★★★
  '정보처리산업기사':   { stars: 4.0, tag: '취업 우대', reason: 'IT직종 취업 우대, 정처기 취득 발판' },
  'SQLD':               { stars: 4.0, tag: '데이터직군 필수', reason: '개발자·DA 취업 우대, 비전공자 취득 가능' },
  '소방설비기사(전기)': { stars: 4.0, tag: '법정 필수', reason: '소방시설 점검 법정 자격, 소방업체 필수' },
  '소방설비기사(기계)': { stars: 4.0, tag: '법정 필수', reason: '소방시설 점검 법정 자격, 소방업체 필수' },
  '공인중개사':         { stars: 4.0, tag: '창업·취업', reason: '부동산 법정 업무자격, 연 응시 30만명' },
  '전기공사기사':       { stars: 4.0, tag: '법정 필수', reason: '전기공사업 법정 기술인력, 현장 필수' },
  '사회복지사1급':      { stars: 4.0, tag: '법정 필수', reason: '사회복지시설 법정 배치 자격' },
  '요양보호사':         { stars: 4.0, tag: '고령화 수요', reason: '노인 장기요양기관 법정 인력, 수요 급증' },
  '건설안전산업기사':   { stars: 4.0, tag: '법정 필수', reason: '건설현장 안전관리 법정 자격' },
  '위험물산업기사':     { stars: 4.0, tag: '화학·제조 필수', reason: '위험물 관련 사업장 법정 안전관리자' },
  '컴퓨터활용능력2급':  { stars: 4.0, tag: '사무직 기본', reason: '공기업·공무원 가산점, 사무직 채용 우대' },
  '정보보안기사':       { stars: 4.0, tag: 'IT보안 필수', reason: '금융·공공기관 보안담당자 우대' },
  '빅데이터분석기사':   { stars: 4.0, tag: '데이터직군', reason: 'AI·데이터 직군 채용 우대, 수요 급증' },
  '간호사 국가시험':    { stars: 4.0, tag: '의료 필수', reason: '의료기관 법정 인력, 취업률 최상위' },
  '소방설비산업기사':   { stars: 4.0, tag: '법정 필수', reason: '소방시설 점검 자격, 소방업체 취업 기본' },
  'ITQ':                { stars: 4.0, tag: '학생·직장인', reason: '학교·공기업 우대, 연 응시 20만명' },

  // ★★★½
  '위험물기능사':       { stars: 3.5, tag: '화학·물류 활용', reason: '주유소·화학공장 법정 인력, 취득 쉬움' },
  '에너지관리기사':     { stars: 3.5, tag: '법정 필수', reason: '에너지사용시설 법정 에너지관리자 자격' },
  '화공기사':           { stars: 3.5, tag: '화학산업 필수', reason: '화학공장·석유화학 분야 필수 자격' },
  '전기기능사':         { stars: 3.5, tag: '전기 현장 기초', reason: '전기기능장·기사 취득 경력 발판' },
  '물류관리사':         { stars: 3.5, tag: '유통·물류 필수', reason: '물류회사 채용 우대, 연 응시 3만명' },
  'ADsP':               { stars: 3.5, tag: '데이터 입문', reason: '비전공자 데이터직군 입문, 단기 취득 가능' },
  '워드프로세서':       { stars: 3.5, tag: '사무직 기본', reason: '사무·행정직 채용 우대, 연 응시 5만명' },
  '임용고시':           { stars: 3.5, tag: '교직 필수', reason: '공립학교 교사 법정 자격, 경쟁률 높음' },
  'OPIc':               { stars: 3.5, tag: '어학 스펙', reason: '대기업 채용 우대 어학 성적, 말하기 평가' },
  '공인회계사':         { stars: 3.5, tag: '고난이도 전문', reason: '회계법인·대기업 필수, 합격률 3~5%' },
  '세무사':             { stars: 3.5, tag: '고난이도 전문', reason: '세무법인·개인사무소 창업, 합격률 8~10%' },
  '공인노무사':         { stars: 3.5, tag: '노무 전문', reason: '노무법인·기업 HR부서 우대 자격' },
  '굴착기운전기능사':   { stars: 3.5, tag: '건설 현장 필수', reason: '건설현장 굴착기 운전 법정 자격' },
  '소방설비기능사(전기)': { stars: 3.5, tag: '소방 입문', reason: '소방설비기사 취득을 위한 경력 발판' },
  '소방설비기능사(기계)': { stars: 3.5, tag: '소방 입문', reason: '소방설비기사 취득을 위한 경력 발판' },
  '조경기사':           { stars: 3.5, tag: '공공기관 필수', reason: '공원·도시계획 설계 법정 자격' },
  '건축기사':           { stars: 3.5, tag: '건축설계 필수', reason: '건설사·설계사무소 취업 필수 자격' },
  '토목기사':           { stars: 3.5, tag: '토목 필수', reason: '도로·교량·토목공사 법정 기술인력' },
  'TOEIC Speaking':     { stars: 3.5, tag: '어학 우대', reason: '대기업·외국계 기업 채용 우대' },
  '미용사(일반)':       { stars: 3.5, tag: '창업·취업', reason: '미용실 취업·창업 법정 면허' },
  '간호조무사':         { stars: 3.5, tag: '의료 보조', reason: '의원·병원 법정 인력, 단기 취득 가능' },

  // ★★★
  '측량및지형공간정보기사': { stars: 3.0, tag: '측량업 필수', reason: '측량업체 법정 기술인력' },
  '전기공사산업기사':   { stars: 3.0, tag: '전기공사 필수', reason: '전기공사업 법정 기술인력, 전기공사기사 전단계' },
  '전기공사기능사':     { stars: 3.0, tag: '전기공사 입문', reason: '전기공사 현장 기능인력, 산업기사 발판' },
  '도시계획기사':       { stars: 3.0, tag: '공공기관 활용', reason: '지자체·도시계획 설계 관련 우대' },
  '소방시설관리사':     { stars: 3.0, tag: '소방 전문', reason: '소방시설 자체점검·작동기능점검 전담 자격' },
  '임상병리사':         { stars: 3.0, tag: '의료 필수', reason: '병원 임상병리실 법정 인력' },
  '물리치료사':         { stars: 3.0, tag: '의료 필수', reason: '의료기관·재활센터 법정 인력' },
  '작업치료사':         { stars: 3.0, tag: '의료 필수', reason: '의료기관·복지시설 법정 인력' },
  '방사선사':           { stars: 3.0, tag: '의료 필수', reason: '병원 영상의학과 법정 인력' },
  '치과위생사':         { stars: 3.0, tag: '치과 필수', reason: '치과 의료기관 법정 인력' },
  '영양사':             { stars: 3.0, tag: '급식 법정', reason: '학교·기업체 급식소 법정 영양관리 인력' },
  '한국사능력검정시험': { stars: 5.0, tag: '취업 가산점', reason: '공무원·공기업 가산점, 연 응시 50만명' },
  'GTQ':                { stars: 3.0, tag: '디자인 취업', reason: '포토샵 활용 능력, 디자인직 채용 우대' },
  '사회조사분석사':     { stars: 3.0, tag: '통계·리서치', reason: '마케팅·정책연구 분야 우대 자격' },
  '농산물품질관리사':   { stars: 3.0, tag: '농업 법정', reason: '농협·농업법인 법정 품질관리 인력' },
  '산업위생관리기사':   { stars: 3.0, tag: '보건 법정', reason: '산업체 작업환경 법정 관리 자격' },
  '가스기사':           { stars: 3.0, tag: '법정 필수', reason: '가스사업자 법정 안전관리 자격' },
  'MOS':                { stars: 3.0, tag: '사무 활용', reason: 'MS오피스 숙련도 국제 공인 자격' },
  '자동차정비기사':     { stars: 3.0, tag: '정비업 필수', reason: '자동차 정비업체 법정 기술인력' },
  '용접기사':           { stars: 3.0, tag: '제조 필수', reason: '조선·중공업 제조업 현장 필수' },
  '식품기사':           { stars: 3.0, tag: '식품업 필수', reason: '식품제조업 품질관리 우대 자격' },
  'ERP정보관리사':      { stars: 3.0, tag: 'IT·회계 활용', reason: '기업 ERP 운영 능력, 취업 우대' },
  '주택관리사':         { stars: 3.0, tag: '아파트 관리', reason: '공동주택 법정 의무 관리 자격' },
  '감정평가사':         { stars: 3.0, tag: '고난이도 전문', reason: '감정평가법인 필수 자격' },
  '소음진동기사':       { stars: 3.0, tag: '환경 법정', reason: '소음·진동 측정 법정 자격' },

  // ★★½
  '비파괴검사기사':     { stars: 2.5, tag: '특수 제조', reason: '원전·조선 비파괴 검사 전문 자격' },
  '품질경영기사':       { stars: 2.5, tag: '품질 관리', reason: '제조업 품질관리 담당자 우대 자격' },
  '수질환경기사':       { stars: 2.5, tag: '환경 법정', reason: '폐수처리시설 법정 관리 자격' },
  '대기환경기사':       { stars: 2.5, tag: '환경 법정', reason: '대기오염방지시설 법정 관리 자격' },
  '화재감식평가기사':   { stars: 2.5, tag: '화재조사 전문', reason: '소방서·보험사 화재조사 전문 자격' },
  '전자기사':           { stars: 2.5, tag: '전자산업', reason: '전자제품·반도체 설계 관련 우대' },
  '일반기계기사':       { stars: 2.5, tag: '기계 전문', reason: '기계설비·제조업 설계 기술인력' },
  '공조냉동기계기사':   { stars: 2.5, tag: '설비 법정', reason: '냉동·공조 설비업 법정 기술인력' },
  '관광통역안내사':     { stars: 2.5, tag: '관광업 법정', reason: '외국인 관광 가이드 법정 자격' },
  'ADP':                { stars: 2.5, tag: '데이터 전문', reason: '데이터분석 최상위 민간자격, 고난이도' },
  '변리사':             { stars: 2.5, tag: '고난이도 전문', reason: '특허법인 필수 자격, 합격률 3%' },
  '법무사':             { stars: 2.5, tag: '법률 전문', reason: '법무사무소 법정 자격' },
  '미용사(피부)':       { stars: 2.5, tag: '피부관리', reason: '피부 관리실 취업·창업 법정 면허' },
  '치과기공사':         { stars: 2.5, tag: '치과기공 법정', reason: '치과기공소 법정 인력' },
  '언어재활사':         { stars: 2.5, tag: '복지 법정', reason: '의료기관·복지시설 법정 언어재활 인력' },
  '전기기능장':         { stars: 2.5, tag: '전기 최상급', reason: '전기분야 최고 기능등급 자격' },
  '폐기물처리기사':     { stars: 2.5, tag: '환경 법정', reason: '폐기물처리시설 법정 기술 자격' },
  '한국실용글쓰기':     { stars: 2.5, tag: '공기업 우대', reason: '공기업 채용 우대 어문 자격' },
  'KBS한국어능력시험':  { stars: 2.5, tag: '언론·방송', reason: '언론사·방송국 채용 우대 어문 자격' },

  // ★★
  '에너지관리산업기사': { stars: 2.0, tag: '에너지 전문', reason: '에너지관리기사 취득 전 단계' },
  '건축설비기사':       { stars: 2.0, tag: '설비 전문', reason: '건축물 설비 설계·감리 자격' },
  '토양환경기사':       { stars: 2.0, tag: '환경 법정', reason: '토양오염 조사·정화 전문 자격' },
  '온실가스관리기사':   { stars: 2.0, tag: '환경 신규', reason: '탄소중립 정책 관련 수요 증가' },
  '기계설계기사':       { stars: 2.0, tag: '기계 설계', reason: '기계설비 설계 전문 자격' },
  '조선기사':           { stars: 2.0, tag: '조선 전문', reason: '조선업 선체 설계·생산 관리 자격' },
  '항공기사':           { stars: 2.0, tag: '항공 전문', reason: '항공기 정비·검사 분야 자격' },
  '철도차량기사':       { stars: 2.0, tag: '철도 전문', reason: '철도운영기관 기술인력 자격' },
  '반도체설계기사':     { stars: 2.0, tag: 'IT 신규', reason: '반도체 산업 성장에 따른 수요 증가' },
  '메카트로닉스기사':   { stars: 2.0, tag: '스마트제조', reason: '자동화 설비·스마트공장 관련 자격' },
  '식품산업기사':       { stars: 2.0, tag: '식품업 활용', reason: '식품제조업 품질관리 입문 자격' },
  '나무의사':           { stars: 2.0, tag: '산림 전문', reason: '수목 진료 법정 전문 자격, 신규 직종' },
  '미용사(네일)':       { stars: 2.0, tag: '미용 전문', reason: '네일아트샵 취업·창업 법정 면허' },
  '미용사(메이크업)':   { stars: 2.0, tag: '미용 전문', reason: '메이크업 아티스트 취업 자격' },
  '화학분석기사':       { stars: 2.0, tag: '화학 전문', reason: '화학·제약 분야 분석 기술 자격' },
  '임상심리사':         { stars: 2.0, tag: '심리 전문', reason: '병원·상담센터 임상심리 전문 자격' },
  '평생교육사':         { stars: 2.0, tag: '교육기관 필수', reason: '평생교육기관 법정 배치 자격' },

  // ★½~★ (특수·전문 분야)
  'TOEFL':              { stars: 1.5, tag: '해외 유학', reason: '해외 대학원 입학 요건, 고난이도' },
  'IELTS':              { stars: 1.5, tag: '해외 취업', reason: '영국·호주 취업·이민 어학 기준' },
  'JLPT':               { stars: 1.5, tag: '일본어 전문', reason: '일본계 기업 취업·일본 유학 우대' },
  'HSK':                { stars: 1.5, tag: '중국어 전문', reason: '중국계 기업 취업·중국 유학 우대' },
  '광산보안기사':       { stars: 1.0, tag: '특수 광업', reason: '광산사업장 법정 보안담당자, 극소수 활용' },
  '수의사':             { stars: 2.0, tag: '동물병원 필수', reason: '동물의료기관 법정 자격, 고난이도' },
};

// ── 공백 제거 정규화 ──────────────────────────────────────────────────────────
function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, '');
}

// ── 영문(두벌식) → 한글 자동 변환 ───────────────────────────────────────────
const ENG_TO_JAMO = {
  'q':'ㅂ','w':'ㅈ','e':'ㄷ','r':'ㄱ','t':'ㅅ','y':'ㅛ','u':'ㅕ','i':'ㅑ','o':'ㅐ','p':'ㅔ',
  'a':'ㅁ','s':'ㄴ','d':'ㅇ','f':'ㄹ','g':'ㅎ','h':'ㅗ','j':'ㅓ','k':'ㅏ','l':'ㅣ',
  'z':'ㅋ','x':'ㅌ','c':'ㅊ','v':'ㅍ','b':'ㅠ','n':'ㅜ','m':'ㅡ',
  'Q':'ㅃ','W':'ㅉ','E':'ㄸ','R':'ㄲ','T':'ㅆ','O':'ㅒ','P':'ㅖ',
};

function assembleKorean(jamos) {
  const CHO  = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
  const JUNG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
  const JONG = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
  const CV = {'ㅗㅏ':'ㅘ','ㅗㅐ':'ㅙ','ㅗㅣ':'ㅚ','ㅜㅓ':'ㅝ','ㅜㅔ':'ㅞ','ㅜㅣ':'ㅟ','ㅡㅣ':'ㅢ'};
  const CJ = {'ㄱㅅ':'ㄳ','ㄴㅈ':'ㄵ','ㄴㅎ':'ㄶ','ㄹㄱ':'ㄺ','ㄹㅁ':'ㄻ','ㄹㅂ':'ㄼ','ㄹㅅ':'ㄽ','ㄹㅌ':'ㄾ','ㄹㅍ':'ㄿ','ㄹㅎ':'ㅀ','ㅂㅅ':'ㅄ'};
  const SJ = {'ㄳ':['ㄱ','ㅅ'],'ㄵ':['ㄴ','ㅈ'],'ㄶ':['ㄴ','ㅎ'],'ㄺ':['ㄹ','ㄱ'],'ㄻ':['ㄹ','ㅁ'],'ㄼ':['ㄹ','ㅂ'],'ㄽ':['ㄹ','ㅅ'],'ㄾ':['ㄹ','ㅌ'],'ㄿ':['ㄹ','ㅍ'],'ㅀ':['ㄹ','ㅎ'],'ㅄ':['ㅂ','ㅅ']};
  const isV = j => JUNG.includes(j);
  const mkChar = (c, v, j) => {
    if (!v) return c || '';
    const ci = CHO.indexOf(c), vi = JUNG.indexOf(v), ji = j ? JONG.indexOf(j) : 0;
    if (ci < 0 || vi < 0) return (c || '') + v;
    return String.fromCharCode(0xAC00 + (ci * 21 + vi) * 28 + Math.max(0, ji));
  };
  let res = '', c = '', v = '', j = '';
  for (const jamo of jamos) {
    if (isV(jamo)) {
      if (!c && !v)        { c = 'ㅇ'; v = jamo; }
      else if (c && !v)    { v = jamo; }
      else if (c && v && !j) {
        const comp = CV[v + jamo];
        if (comp) { v = comp; }
        else { res += mkChar(c, v, ''); c = 'ㅇ'; v = jamo; j = ''; }
      } else {
        const sp = SJ[j];
        if (sp) { res += mkChar(c, v, sp[0]); c = sp[1]; v = jamo; j = ''; }
        else    { res += mkChar(c, v, '');    c = j;     v = jamo; j = ''; }
      }
    } else {
      if (!c)              { c = jamo; }
      else if (!v)         { res += c; c = jamo; j = ''; }
      else if (!j) {
        if (JONG.includes(jamo)) { j = jamo; }
        else { res += mkChar(c, v, ''); c = jamo; v = ''; j = ''; }
      } else {
        const comp = CJ[j + jamo];
        if (comp) { j = comp; }
        else { res += mkChar(c, v, j); c = jamo; v = ''; j = ''; }
      }
    }
  }
  if (c || v) res += mkChar(c, v, j);
  return res;
}

function engToKorean(str) {
  if (!/^[a-zA-Z]+$/.test(str)) return null;
  if (![...str].every(ch => ch in ENG_TO_JAMO)) return null;
  return assembleKorean([...str].map(ch => ENG_TO_JAMO[ch]));
}

// ── 통합 자격증 검색 (별칭 확장 + 스코어링 + 오타 판별) ──────────────────────
function _runSearch(query) {
  const aliasKey = normalize(query);
  const aliasTarget = Object.keys(CERT_ALIASES)
    .sort((a, b) => b.length - a.length)
    .find(k => normalize(k) === aliasKey || aliasKey.includes(normalize(k)));
  const extraName = aliasTarget ? CERT_ALIASES[aliasTarget] : null;
  return Object.keys(CERTIFICATIONS)
    .map(name => {
      let score = certSearchScore(name, query);
      if (extraName && normalize(name) === normalize(extraName))
        score = Math.max(score, 95);
      return { name, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, 'ko'));
}

function searchCerts(query) {
  let scored = _runSearch(query);
  let topScore = scored[0]?.score ?? 0;
  let topName  = scored[0]?.name  ?? '';
  let convertedQuery = null;
  let isEngConverted = false;

  // 영문 두벌식 → 한글 자동 변환 시도
  const conv = engToKorean(query);
  if (conv && conv !== query) {
    const convScored = _runSearch(conv);
    const convTop = convScored[0]?.score ?? 0;
    if (convTop > topScore) {
      scored = convScored;
      topScore = convTop;
      topName = convScored[0]?.name ?? '';
      convertedQuery = conv;
      isEngConverted = true;
    }
  }

  const isFuzzyOnly = !isEngConverted && topScore <= 40 && normalize(topName) !== normalize(query);
  return { scored, topName, topScore, isFuzzyOnly, isEngConverted, convertedQuery };
}

// ── 부분 토큰 매칭 (입력 단어 모두 포함 여부) ────────────────────────────────
function tokenMatch(name, q) {
  const tokens = q.trim().split(/\s+/).filter(Boolean);
  const n = normalize(name);
  return tokens.every(t => n.includes(normalize(t)));
}

// ── 통합 검색 스코어 ─────────────────────────────────────────────────────────
function certSearchScore(name, q) {
  const nq   = normalize(q);
  const nn   = normalize(name);
  const csq  = extractChosung(q);
  const csn  = extractChosung(name);

  if (nn === nq)                 return 100; // 완전 일치
  if (nn.startsWith(nq))        return 90;  // 앞부분 일치
  if (nn.includes(nq))          return 80;  // 포함
  if (csn === csq)               return 75;  // 초성 완전 일치
  if (csn.startsWith(csq))      return 65;  // 초성 앞부분
  if (csn.includes(csq))        return 55;  // 초성 포함
  if (tokenMatch(name, q))      return 50;  // 토큰 매칭

  // 오타 교정: 편집거리가 임계값 이하이면 부분 문자열 슬라이딩 체크
  const thr = fuzzyThreshold(nq);
  if (nq.length >= 2) {
    // 자격증명의 각 부분 문자열 슬라이딩 윈도우와 비교
    const winLen = nq.length;
    for (let i = 0; i <= nn.length - winLen; i++) {
      if (levenshtein(nn.slice(i, i + winLen), nq) <= thr) return 40;
    }
    // 전체 이름과 비교 (짧은 자격증명 대응)
    if (levenshtein(nn, nq) <= thr) return 35;
  }
  return 0;
}

function renderCertDropdown(query) {
  const dropdown = document.getElementById('cert-dropdown');
  if (!query.trim()) { dropdown.classList.remove('visible'); return; }

  const { scored, topName, isFuzzyOnly, isEngConverted, convertedQuery } = searchCerts(query);
  const matches = scored.map(({ name }) => name);

  if (matches.length === 0) { dropdown.classList.remove('visible'); return; }

  const correctionBanner = isFuzzyOnly
    ? `<div class="cert-dd-correction">
         <i class="fa-solid fa-spell-check"></i>
         <span><b>${query}</b> 결과가 없어 <b>${topName}</b>(${roSuffix(topName)}) 검색되었어요.</span>
       </div>`
    : isEngConverted
      ? `<div class="cert-dd-correction cert-dd-eng">
           <i class="fa-solid fa-keyboard"></i>
           <span>영문 입력을 <b>${convertedQuery}</b>로 변환해 검색했습니다.</span>
         </div>`
      : '';

  dropdown.innerHTML = correctionBanner + matches.map(name => {
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
  // 발주&재고관리 패널이 열려 있으면 닫고 웰컴으로
  const inventoryPanel = document.getElementById('inventory-panel');
  if (inventoryPanel) inventoryPanel.style.display = 'none';
  const tabDashboard = document.getElementById('tab-dashboard');
  const tabInventory = document.getElementById('tab-inventory');
  const searchBar = document.getElementById('header-search-bar');
  const siteTitle = document.getElementById('site-title');
  if (tabDashboard) tabDashboard.classList.add('active');
  if (tabInventory) tabInventory.classList.remove('active');
  if (searchBar) searchBar.style.display = '';
  if (siteTitle) siteTitle.textContent = '수험서 All in One 대시보드';
  document.body.style.overflow = '';
  showWelcomeScreen();
};


// ============================================
// 17-B. 출판사 검색 위젯
// ============================================
const PUBLISHERS = [
  // 기술자격
  { name: '성안당',         url: 'https://www.cyber.co.kr',          category: '기술자격', keywords: ['성안당'] },
  { name: '예문사',         url: 'https://www.yeamoonsa.com',        category: '기술자격', keywords: ['예문사'] },
  { name: '일진사',         url: 'https://www.iljinsa.com',          category: '기술자격', keywords: ['일진사'] },
  { name: '구민사',         url: 'https://kuhminsa.co.kr',           category: '기술자격', keywords: ['구민사'] },
  { name: '크라운출판사',   url: 'https://www.crownbook.co.kr',      category: '기술자격', keywords: ['크라운'] },
  { name: '한솔아카데미',   url: 'https://www.inup.co.kr',           category: '기술자격', keywords: ['한솔'] },
  { name: '기문당',         url: 'https://www.kimoondang.com',       category: '기술자격', keywords: ['기문당'] },
  { name: '세화',           url: 'https://www.sehwapub.co.kr',       category: '기술자격', keywords: ['세화'] },
  { name: '세진사',         url: 'https://www.sejinbook.com',        category: '기술자격', keywords: ['세진'] },
  { name: '골든벨',         url: 'https://gbbook.co.kr',             category: '기술자격', keywords: ['골든벨'] },
  { name: '동일출판사',     url: 'https://dongilbook.co.kr',         category: '기술자격', keywords: ['동일'] },
  { name: '건기원',         url: 'https://www.kkwbooks.com',         category: '기술자격', keywords: ['건기원'] },
  { name: 'MJ미디어',       url: 'https://www.mjmedia.co.kr',        category: '기술자격', keywords: ['mj', 'mj미디어'] },
  { name: '탑스팟',         url: 'https://www.topspot.co.kr',        category: '기술자격', keywords: ['탑스팟'] },
  { name: '메카피아',       url: 'https://www.mechapia.com',         category: '기술자격', keywords: ['메카피아'] },
  { name: '형설출판사',     url: 'https://www.hyungseul.co.kr',      category: '기술자격', keywords: ['형설'] },
  { name: '모아북스',       url: 'http://www.moabooks.com',          category: '기술자격', keywords: ['모아북스', '모아'] },
  // 공무원/고시
  { name: '에듀윌',         url: 'https://www.eduwill.net',          category: '공무원고시', keywords: ['에듀윌'] },
  { name: '시대에듀',       url: 'https://www.sdedu.co.kr',          category: '공무원고시', keywords: ['시대에듀', '시대고시'] },
  { name: '이패스코리아',   url: 'https://www.epasskorea.com',       category: '공무원고시', keywords: ['이패스'] },
  { name: '서원각',         url: 'https://goseowon.com',             category: '공무원고시', keywords: ['서원각'] },
  { name: '고시넷',         url: 'https://www.gosinet.co.kr',        category: '공무원고시', keywords: ['고시넷'] },
  { name: '박문각',         url: 'https://www.pmg.co.kr',            category: '공무원고시', keywords: ['박문각'] },
  { name: '삼원북스',       url: 'https://www.samwonbooks.com',      category: '공무원고시', keywords: ['삼원북스', '삼원'] },
  { name: '다산에듀',       url: 'https://dasanedu.co.kr',           category: '공무원고시', keywords: ['다산'] },
  { name: '에듀피디',       url: 'https://www.edupd.com',            category: '공무원고시', keywords: ['에듀피디'] },
  { name: '김영북스',       url: 'https://www.kimnbook.co.kr',       category: '공무원고시', keywords: ['김영북스', '김영'] },
  // IT/개발
  { name: '영진닷컴',       url: 'https://www.youngjin.com',         category: 'IT개발', keywords: ['영진'] },
  { name: '길벗',           url: 'https://www.gilbut.co.kr',         category: 'IT개발', keywords: ['길벗'] },
  { name: '한빛미디어',     url: 'https://www.hanbit.co.kr',         category: 'IT개발', keywords: ['한빛'] },
  { name: '이지스퍼블리싱', url: 'https://www.easyspub.co.kr',       category: 'IT개발', keywords: ['이지스', 'do it', 'doit'] },
  { name: '생능출판사',     url: 'https://www.booksr.co.kr',         category: 'IT개발', keywords: ['생능'] },
  { name: '제이펍',         url: 'https://jpub.kr',                  category: 'IT개발', keywords: ['제이펍', 'jpub'] },
  { name: '인사이트',       url: 'https://www.insightbook.co.kr',    category: 'IT개발', keywords: ['인사이트', 'insight'] },
  { name: '에이콘출판사',   url: 'https://acornpub.co.kr',           category: 'IT개발', keywords: ['에이콘', 'acorn'] },
  { name: '골든래빗',       url: 'https://goldenrabbit.co.kr',       category: 'IT개발', keywords: ['골든래빗'] },
  { name: '위키북스',       url: 'https://wikibook.co.kr',           category: 'IT개발', keywords: ['위키북스', 'wikibook'] },
  { name: '디지털북스',     url: 'https://www.digitalbooks.co.kr',   category: 'IT개발', keywords: ['디지털북스'] },
  // 어학/기타
  { name: '해커스',         url: 'https://www.hackers.com',          category: '어학기타', keywords: ['해커스'] },
  { name: '이나무출판사',   url: 'https://enamuh.co.kr',             category: '어학기타', keywords: ['이나무'] },
  { name: '박영사',         url: 'https://www.pybook.co.kr',         category: '어학기타', keywords: ['박영사'] },
  { name: '부민문화사',     url: 'https://www.bumin33.co.kr',        category: '어학기타', keywords: ['부민문화사', '부민'] },
  { name: '드림널스',       url: 'https://www.dreamnurse.co.kr',     category: '어학기타', keywords: ['드림널스'] },
  { name: '홍지문',         url: 'https://hongjimunbook.cafe24.com', category: '어학기타', keywords: ['홍지문'] },
  { name: '포널스출판사',   url: 'https://fornursebook.com',         category: '어학기타', keywords: ['포널스'] },
  { name: '리코멘드',       url: 'https://www.rdbook.co.kr',         category: '어학기타', keywords: ['리코멘드'] },
  { name: '비엘북스',       url: 'https://vielbooks.com',            category: '어학기타', keywords: ['비엘북스', '비엘'] },
  { name: '엔트미디어',     url: 'https://entmedia.co.kr',           category: '어학기타', keywords: ['엔트미디어'] },
];

function initPublisherSearch() {
  const input   = document.getElementById('publisher-search');
  const results = document.getElementById('publisher-results');
  const grid    = document.getElementById('publisher-link-grid');
  if (!input || !results || !grid) return;

  // 전체 출판사를 링크 칩으로 렌더링 (카테고리별 색상 구분)
  grid.innerHTML = PUBLISHERS.map(pub =>
    `<a href="${pub.url}" target="_blank" rel="noopener noreferrer"
       class="publisher-link-chip"
       data-category="${pub.category}"
       data-name="${pub.name.toLowerCase()}"
       data-kw="${pub.keywords.join(' ').toLowerCase()}">
      <i class="fa-solid fa-arrow-up-right-from-square"></i>${pub.name}
    </a>`
  ).join('');

  input.addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    let visible = 0;
    grid.querySelectorAll('.publisher-link-chip').forEach(chip => {
      const show = !q || chip.dataset.name.includes(q) || chip.dataset.kw.includes(q);
      chip.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    results.innerHTML = visible === 0 && q
      ? `<span class="publisher-no-result"><i class="fa-solid fa-circle-info"></i> 검색 결과가 없습니다.</span>`
      : '';
  });
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

  // 자격증 검색 드롭다운
  const searchInput = document.getElementById('global-search');
  searchInput.value = STATE.currentCert || '';
  searchInput.placeholder = STATE.currentCert ? STATE.currentCert : '자격증 이름을 입력하세요 (예: 전기기사)';

  searchInput.addEventListener('input', e => {
    _ddSelectedIdx = -1;
    renderCertDropdown(e.target.value);
  });
  searchInput.addEventListener('focus', e => {
    if (e.target.value) renderCertDropdown(e.target.value);
  });
  let _ddSelectedIdx = -1;

  function updateDropdownSelection(idx) {
    const dropdown = document.getElementById('cert-dropdown');
    const items = dropdown.querySelectorAll('.cert-dropdown-item');
    items.forEach((el, i) => el.classList.toggle('dd-focused', i === idx));
    _ddSelectedIdx = idx;
    if (items[idx]) items[idx].scrollIntoView({ block: 'nearest' });
  }

  searchInput.addEventListener('keydown', e => {
    const dropdown = document.getElementById('cert-dropdown');
    const isVisible = dropdown.classList.contains('visible');
    const items = dropdown.querySelectorAll('.cert-dropdown-item');

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (isVisible && items.length) updateDropdownSelection(Math.min(_ddSelectedIdx + 1, items.length - 1));
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isVisible && items.length) updateDropdownSelection(Math.max(_ddSelectedIdx - 1, 0));
      return;
    }
    if (e.key === 'Escape') {
      dropdown.classList.remove('visible');
      _ddSelectedIdx = -1;
      return;
    }

    if (e.key !== 'Enter') return;
    const query = e.target.value.trim();
    if (!query) return;

    // 드롭다운에서 키보드로 선택된 항목이 있으면 그 항목 선택
    if (isVisible && _ddSelectedIdx >= 0 && items[_ddSelectedIdx]) {
      const certName = items[_ddSelectedIdx].querySelector('.cert-dd-name')?.textContent;
      if (certName) {
        dropdown.classList.remove('visible');
        _ddSelectedIdx = -1;
        switchCertification(certName);
        return;
      }
    }

    const { scored, topName, isFuzzyOnly, isEngConverted, convertedQuery } = searchCerts(query);
    if (scored.length === 0) return;

    dropdown.classList.remove('visible');
    _ddSelectedIdx = -1;
    switchCertification(topName);
    if (isFuzzyOnly) showCorrectionToast(query, topName);
    else if (isEngConverted) showEngConvertToast(query, convertedQuery, topName);
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.header-search-bar')) {
      document.getElementById('cert-dropdown').classList.remove('visible');
    }
  });

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
  const SECTION_IDS = ['schedule-section', 'monthly-section', 'books-section', 'news-section', 'analytics-section', 'study-section', 'roadmap-section', 'predictor-section', 'location-section'];

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
// ────────────────────────────────────────
// 관리자 인증 모달
// ────────────────────────────────────────
const ADMIN_PW = 'dnftks0325!!';
let _adminAuthed = false;

function showAdminAuth(onSuccess) {
  const overlay = document.getElementById('admin-auth-overlay');
  const input   = document.getElementById('admin-auth-input');
  const errorEl = document.getElementById('admin-auth-error');
  const toggle  = document.getElementById('admin-auth-toggle');
  const eye     = document.getElementById('admin-auth-eye');
  const cancel  = document.getElementById('admin-auth-cancel');
  const confirm = document.getElementById('admin-auth-confirm');

  overlay.style.display = 'flex';
  input.value = '';
  errorEl.style.display = 'none';
  input.type = 'password';
  eye.className = 'fa-solid fa-eye';
  setTimeout(() => input.focus(), 80);

  const cleanup = () => {
    overlay.style.display = 'none';
    input.removeEventListener('keydown', onKey);
    confirm.onclick = null;
    cancel.onclick  = null;
    toggle.onclick  = null;
  };

  const attempt = () => {
    if (input.value === ADMIN_PW) {
      _adminAuthed = true;
      cleanup();
      onSuccess();
    } else {
      errorEl.style.display = 'flex';
      input.classList.remove('shake');
      void input.offsetWidth;
      input.classList.add('shake');
      input.value = '';
      input.focus();
    }
  };

  const onKey = (e) => { if (e.key === 'Enter') attempt(); if (e.key === 'Escape') cleanup(); };
  input.addEventListener('keydown', onKey);
  confirm.onclick = attempt;
  cancel.onclick  = cleanup;
  toggle.onclick  = () => {
    input.type = input.type === 'password' ? 'text' : 'password';
    eye.className = input.type === 'password' ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
    input.focus();
  };
}

window.switchTab = function(tab) {
  const inventoryPanel = document.getElementById('inventory-panel');
  const searchBar = document.getElementById('header-search-bar');
  const resetBtn = document.getElementById('reset-btn');
  const tabDashboard = document.getElementById('tab-dashboard');
  const tabInventory = document.getElementById('tab-inventory');
  const welcomeScreen = document.getElementById('welcome-screen');
  const dashboardContent = document.getElementById('dashboard-content');

  if (tab === 'inventory') {
    if (!_adminAuthed) { showAdminAuth(() => window.switchTab('inventory')); return; }
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

// 발주재고관리에서 자격증 대시보드로 이동
window.goToCertDashboard = function(certName) {
  if (!CERTIFICATIONS[certName]) return;
  window.switchTab('dashboard');
  window.selectCert(certName);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function initInventoryModal() {
  // 탭 방식으로 대체됨 — 기존 모달 참조 없음
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInventoryModal);
} else {
  initInventoryModal();
}

// ============================================
// 20. 최근 검색 & 즐겨찾기
// ============================================
function getRecentCerts() {
  try { return JSON.parse(localStorage.getItem('recentCerts') || '[]'); } catch { return []; }
}
function addRecentCert(name) {
  const list = getRecentCerts().filter(n => n !== name);
  list.unshift(name);
  try { localStorage.setItem('recentCerts', JSON.stringify(list.slice(0, 5))); } catch {}
}
function getFavoriteCerts() {
  try { return JSON.parse(localStorage.getItem('favoriteCerts') || '[]'); } catch { return []; }
}
function isFavoriteCert(name) { return getFavoriteCerts().includes(name); }
function toggleFavoriteCert() {
  const name = STATE.currentCert;
  if (!name) return;
  const favs = getFavoriteCerts();
  const idx = favs.indexOf(name);
  if (idx >= 0) favs.splice(idx, 1); else favs.unshift(name);
  try { localStorage.setItem('favoriteCerts', JSON.stringify(favs)); } catch {}
  updateFavBtn(name);
}
window.toggleFavoriteCert = toggleFavoriteCert;

function updateFavBtn(name) {
  const icon = document.getElementById('hero-fav-icon');
  const btn  = document.getElementById('hero-fav-btn');
  if (!icon || !btn) return;
  const fav = isFavoriteCert(name);
  icon.className = fav ? 'fa-solid fa-star' : 'fa-regular fa-star';
  btn.classList.toggle('fav-active', fav);
  btn.title = fav ? '즐겨찾기 제거' : '즐겨찾기 추가';
}

function getNextDdayForCert(certName) {
  const cert = CERTIFICATIONS[certName];
  if (!cert || !cert.schedules) return null;
  const today = new Date(); today.setHours(0,0,0,0);
  for (const s of cert.schedules) {
    for (const key of ['writtenExam','practicalExam','writtenApply','practicalApply']) {
      const val = s[key];
      if (!val || val === '-' || val === '—' || /상시/.test(val)) continue;
      const d = new Date(val.split('~')[0].trim().split(' ')[0].trim());
      if (!isNaN(d)) {
        const diff = Math.ceil((d - today) / 86400000);
        if (diff >= 0) return { diff, label: key === 'writtenExam' ? '필기' : key === 'practicalExam' ? '실기' : key === 'writtenApply' ? '필기접수' : '실기접수' };
      }
    }
  }
  return null;
}

function renderQuickRow() {
  const rowEl    = document.getElementById('welcome-quick-row');
  const recWrap  = document.getElementById('recent-certs-wrap');
  const favWrap  = document.getElementById('fav-certs-wrap');
  const recChips = document.getElementById('recent-certs-chips');
  const favChips = document.getElementById('fav-certs-chips');
  if (!rowEl) return;

  const recents = getRecentCerts().filter(n => CERTIFICATIONS[n]);
  const favs    = getFavoriteCerts().filter(n => CERTIFICATIONS[n]);

  const makeChip = name =>
    `<span class="quick-chip" onclick="window.selectCert('${name}')">${name}</span>`;

  if (recents.length) {
    recChips.innerHTML = recents.map(makeChip).join('');
    recWrap.style.display = '';
  } else { recWrap.style.display = 'none'; }

  if (favs.length) {
    favChips.innerHTML = favs.map(n => {
      const dd = getNextDdayForCert(n);
      const ddBadge = dd
        ? `<span class="fav-chip-dday ${dd.diff <= 7 ? 'urgent' : dd.diff <= 30 ? 'soon' : ''}">${dd.label} D-${dd.diff}</span>`
        : '';
      return `<span class="quick-chip fav-chip" onclick="window.selectCert('${n}')"><i class="fa-solid fa-star"></i>${n}${ddBadge}</span>`;
    }).join('');
    favWrap.style.display = '';
  } else {
    favChips.innerHTML = `<span class="fav-empty-hint"><i class="fa-regular fa-star"></i> 자격증 화면의 ★ 버튼으로 즐겨찾기를 추가하세요</span>`;
    favWrap.style.display = '';
  }

  rowEl.style.display = '';
}

// ── Hot Topic: 자격증 선호도 ──────────────────────────────────────────────────
function renderStars(stars, interactive = false, certName = '') {
  const full  = Math.floor(stars);
  const half  = stars % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  const pct   = (stars / 5 * 100).toFixed(0);
  return `<span class="cert-stars" title="선호도 ${stars}점/5점 (${pct}%)">`
    + '<i class="fa-solid fa-star"></i>'.repeat(full)
    + (half ? '<i class="fa-solid fa-star-half-stroke"></i>' : '')
    + '<i class="fa-regular fa-star"></i>'.repeat(empty)
    + `<span class="cert-stars-val">${stars.toFixed(1)}</span>`
    + `</span>`;
}

// 국가전문자격증 명단 (의료·법률·경제·사회복지 계열)
const PRO_CERT_SET = new Set([
  '의사','치과의사','한의사','약사','한약사','간호사','수의사','조산사',
  '물리치료사','작업치료사','방사선사','임상병리사','치과위생사','치과기공사',
  '안경사','간호조무사','요양보호사','의무기록사','응급구조사1급','응급구조사2급',
  '영양사','위생사','보건교육사',
  '변호사','법무사','변리사','공인회계사','세무사','공인노무사',
  '감정평가사','손해사정사','보험계리사','관세사','주택관리사','행정사',
  '사회복지사1급','임상심리사','언어재활사','정신건강임상심리사',
  '청소년상담사','청소년지도사','평생교육사',
  '스포츠지도사','관광통역안내사','국내관광안내사','국외관광안내사',
  '농산물품질관리사','수산물품질관리사','나무의사','맞춤형화장품조제관리사',
  '임용고시',
]);

// 민간자격증 명단
const PRIVATE_CERT_SET = new Set([
  'TOEIC','TOEFL','IELTS','OPIc','TOEIC Speaking',
  'JLPT','HSK','한국어능력시험(TOPIK)',
  'ITQ','MOS','GTQ','GTQi',
  'SQLD','SQLP','ADsP','ADP',
  'ERP정보관리사','ISMS',
  'AFPK','CFP','FAT','TAT',
  '매경TEST','TESAT','재경관리사',
  '네트워크관리사1급','네트워크관리사2급',
  '리눅스마스터1급','리눅스마스터2급',
  '바리스타1급','바리스타2급','소믈리에','바텐더',
  '한국사능력검정시험','KBS한국어능력시험','한국실용글쓰기','한자능력검정',
  '한국어교원','사회통합프로그램',
  '펀드투자권유대행인','심리상담사','드론조종자격증',
]);

function getCertType(name) {
  if (PRIVATE_CERT_SET.has(name)) return 'private';
  if (PRO_CERT_SET.has(name)) return 'pro';
  return 'tech';
}

let _hotActiveTab = 'tech';

function renderHotTopic(tab) {
  const el = document.getElementById('hot-topic-grid');
  if (!el) return;
  if (tab) _hotActiveTab = tab;

  const items = Object.entries(CERT_POPULARITY)
    .filter(([name]) => CERTIFICATIONS[name] && getCertType(name) === _hotActiveTab)
    .sort((a, b) => b[1].stars - a[1].stars)
    .slice(0, 9);

  if (items.length === 0) {
    el.innerHTML = '<p class="hot-empty">해당 분류의 선호도 데이터가 없습니다.</p>';
    return;
  }

  el.innerHTML = items.map(([name, info]) => {
    const cert = CERTIFICATIONS[name];
    const icon = cert?.icon || 'fa-certificate';
    const cat  = cert?.category || '';
    return `
      <div class="hot-card" onclick="window.selectCert('${name.replace(/'/g,"\\'")}')">
        <div class="hot-card-icon"><i class="fa-solid ${icon}"></i></div>
        <div class="hot-card-body">
          <div class="hot-card-name">${name}</div>
          <div class="hot-card-cat">${cat}</div>
          ${renderStars(info.stars)}
          <div class="hot-card-tag">${info.tag}</div>
        </div>
      </div>`;
  }).join('');
}

window.switchHotTab = function(tab) {
  _hotActiveTab = tab;
  document.querySelectorAll('.hot-tab-btn').forEach(btn => btn.classList.remove('active'));
  const idx = {tech:0, pro:1, private:2}[tab] ?? 0;
  const btns = document.querySelectorAll('.hot-tab-btn');
  if (btns[idx]) btns[idx].classList.add('active');
  renderHotTopic(tab);
};

// ============================================
// 21. ICS 캘린더 내보내기
// ============================================
function padICS(n) { return String(n).padStart(2, '0'); }

function toICSDate(dateStr) {
  const d = new Date(dateStr.trim());
  if (isNaN(d)) return null;
  return `${d.getFullYear()}${padICS(d.getMonth()+1)}${padICS(d.getDate())}`;
}

function generateICS(cert) {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//수험서 대시보드//KR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];

  const addEvent = (summary, dateStr, description) => {
    const dt = toICSDate(dateStr);
    if (!dt) return;
    const uid = `${dt}-${Math.random().toString(36).slice(2)}@cert-dashboard`;
    lines.push(
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTART;VALUE=DATE:${dt}`,
      `DTEND;VALUE=DATE:${dt}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      'END:VEVENT'
    );
  };

  cert.schedules.forEach(s => {
    const base = `[${cert.name}] ${s.round}`;
    if (s.writtenApply && s.writtenApply !== '-' && s.writtenApply !== '—') {
      addEvent(`${base} 필기 원서접수`, s.writtenApply.split('~')[0], `${s.round} 필기 원서접수 시작`);
    }
    if (s.writtenExam && s.writtenExam !== '-' && s.writtenExam !== '—') {
      addEvent(`${base} 필기 시험`, s.writtenExam.split('~')[0], `${s.round} 필기 시험 시작`);
    }
    if (s.writtenResult && s.writtenResult !== '-' && s.writtenResult !== '—') {
      addEvent(`${base} 필기 합격발표`, s.writtenResult.split(/[~\/]/)[0], `${s.round} 필기 합격 발표`);
    }
    if (s.practicalApply && s.practicalApply !== '-' && s.practicalApply !== '—') {
      addEvent(`${base} 실기 원서접수`, s.practicalApply.split('~')[0], `${s.round} 실기 원서접수 시작`);
    }
    if (s.practicalExam && s.practicalExam !== '-' && s.practicalExam !== '—') {
      addEvent(`${base} 실기 시험`, s.practicalExam.split('~')[0], `${s.round} 실기 시험 시작`);
    }
    const finalDate = s.finalResult || s.practicalResult;
    if (finalDate && finalDate !== '-' && finalDate !== '—') {
      addEvent(`${base} 최종 합격발표`, finalDate.split(/[~\/]/)[0], `${s.round} 최종 합격 발표`);
    }
  });

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

window.downloadICS = function() {
  const cert = getCert();
  if (!cert) return;
  const ics  = generateICS(cert);
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `${cert.name}_시험일정.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// ── 월별 전체 ICS 내보내기 ──────────────────────
window.exportMonthlyICS = function() {
  const month = _selectedMonth;
  const data  = fetchAllMonthlyExams();
  const { written = [], practical = [], single = [] } = data[month] || {};
  const all = [...written, ...practical, ...single];

  if (!all.length) {
    alert(`${month}월에 예정된 시험이 없습니다.`);
    return;
  }

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//수험서 대시보드//KR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];

  all.forEach(item => {
    const dt = toICSDate(item.dateRange.split('~')[0].trim());
    if (!dt) return;
    const uid = `${dt}-monthly-${Math.random().toString(36).slice(2)}@cert-dashboard`;
    const typeLabel = written.includes(item) ? '[필기]' : practical.includes(item) ? '[실기]' : '[시험]';
    lines.push(
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTART;VALUE=DATE:${dt}`,
      `DTEND;VALUE=DATE:${dt}`,
      `SUMMARY:${typeLabel} ${item.certName} ${item.round}`,
      `DESCRIPTION:${item.certName} ${item.round} · ${item.dateRange}`,
      'END:VEVENT'
    );
  });

  lines.push('END:VCALENDAR');
  const ics  = lines.join('\r\n');
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `2026년_${month}월_시험일정_전체.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// ============================================
// 22. 자격증 비교 모달
// ============================================
window.openCompareModal = function() {
  const cert = getCert();
  if (!cert) return;
  const overlay = document.getElementById('compare-modal-overlay');
  const labelA  = document.getElementById('compare-cert-a-label');
  const input   = document.getElementById('compare-search-input');
  const panel   = document.getElementById('compare-panel');
  if (!overlay) return;
  labelA.textContent = cert.name;
  input.value = '';
  panel.innerHTML = '<p class="compare-hint"><i class="fa-solid fa-arrow-up"></i> 비교할 자격증을 검색하세요.</p>';
  overlay.style.display = 'flex';
  setTimeout(() => input.focus(), 80);
};

window.closeCompareModal = function() {
  const overlay = document.getElementById('compare-modal-overlay');
  if (overlay) overlay.style.display = 'none';
};

function renderComparePanel(nameB) {
  const certA = getCert();
  const certB = CERTIFICATIONS[nameB];
  if (!certA || !certB) return;

  const panel = document.getElementById('compare-panel');

  const passA = parseFloat(certA.avgPassRate) || null;
  const passB = parseFloat(certB.avgPassRate) || null;
  const winA = passA && passB ? passA > passB : false;
  const winB = passA && passB ? passB > passA : false;

  const subA = (certA.subjects || []).length;
  const subB = (certB.subjects || []).length;
  const schA = (certA.schedules || []).length;
  const schB = (certB.schedules || []).length;
  const periodA = getStudyPeriod(certA);
  const periodB = getStudyPeriod(certB);

  const typeLabel = n => {
    if (PRIVATE_CERT_NAMES.has(n)) return '민간자격';
    if (PROFESSIONAL_CERT_NAMES.has(n)) return '국가전문';
    return '국가기술';
  };

  const row = (label, valA, valB, highlightA, highlightB) => `
    <tr>
      <td class="cmp-val ${highlightA ? 'cmp-win' : ''}">${valA}</td>
      <td class="cmp-label">${label}</td>
      <td class="cmp-val ${highlightB ? 'cmp-win' : ''}">${valB}</td>
    </tr>`;

  // 합격률 미니 바 차트
  const passBarMax = Math.max(passA || 0, passB || 0, 60);
  const makeBar = (val, color) => val
    ? `<div class="cmp-pass-bar-wrap"><div class="cmp-pass-bar" style="width:${Math.round((val/passBarMax)*100)}%;background:${color}"></div><span>${val}%</span></div>`
    : '<span class="cmp-no-data">–</span>';

  // 다음 시험일 계산
  const today = new Date(); today.setHours(0,0,0,0);
  function nextExamDate(cert) {
    for (const s of (cert.schedules || [])) {
      for (const k of ['writtenExam','practicalExam']) {
        const v = s[k];
        if (!v || v === '-' || v === '—' || /상시/.test(v)) continue;
        const d = new Date(v.split('~')[0].trim().split(' ')[0]);
        if (!isNaN(d) && d >= today) {
          const diff = Math.ceil((d - today) / 86400000);
          return `${s.round} ${k === 'writtenExam' ? '필기' : '실기'} (D-${diff})`;
        }
      }
    }
    return '일정 종료';
  }

  // 시험 과목 최대 5개
  const subListA = (certA.subjects || []).slice(0, 5).map(s => s.title || s.name || '').filter(Boolean);
  const subListB = (certB.subjects || []).slice(0, 5).map(s => s.title || s.name || '').filter(Boolean);
  const maxSub = Math.max(subListA.length, subListB.length);
  const subRows = Array.from({ length: maxSub }, (_, i) => `
    <tr>
      <td class="cmp-sub-val">${subListA[i] ? `<i class="fa-solid fa-circle-dot cmp-sub-dot"></i>${subListA[i]}` : ''}</td>
      <td class="cmp-sub-center">${i + 1}</td>
      <td class="cmp-sub-val">${subListB[i] ? `<i class="fa-solid fa-circle-dot cmp-sub-dot"></i>${subListB[i]}` : ''}</td>
    </tr>`).join('');

  // 합격률 5개년 미니 스파크라인
  function sparkline(rates, color) {
    if (!rates || rates.length < 2) return '';
    const wVals = rates.map(r => r.written).filter(v => v != null);
    if (!wVals.length) return '';
    const mn = Math.min(...wVals), mx = Math.max(...wVals);
    const h = 24, w = 70;
    const pts = wVals.map((v, i) => {
      const x = (i / (wVals.length - 1)) * w;
      const y = h - ((mx === mn ? 0.5 : (v - mn) / (mx - mn)) * h);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="display:block"><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round"/></svg>`;
  }

  panel.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th class="cmp-cert-name">${certA.name}</th>
          <th class="cmp-center"></th>
          <th class="cmp-cert-name">${certB.name}</th>
        </tr>
      </thead>
      <tbody>
        ${row('자격 종류', typeLabel(certA.name), typeLabel(certB.name), false, false)}
        ${row('분야', certA.category, certB.category, false, false)}
        ${row('시험 횟수', `연 ${schA}회`, `연 ${schB}회`, schA > schB, schB > schA)}
        ${row('준비기간 목표', periodA.replace('평균 준비기간 ',''), periodB.replace('평균 준비기간 ',''), false, false)}
        ${row('다음 시험', nextExamDate(certA), nextExamDate(certB), false, false)}
      </tbody>
    </table>

    <div class="cmp-section-title"><i class="fa-solid fa-chart-line"></i> 평균 합격률 비교</div>
    <div class="cmp-pass-section">
      <div class="cmp-pass-col">
        <div class="cmp-pass-label ${winA ? 'cmp-win-label' : ''}">${certA.name}</div>
        ${makeBar(passA, '#f59e0b')}
        ${sparkline(certA.passRates, '#f59e0b')}
      </div>
      <div class="cmp-pass-col">
        <div class="cmp-pass-label ${winB ? 'cmp-win-label' : ''}">${certB.name}</div>
        ${makeBar(passB, '#0ea5e9')}
        ${sparkline(certB.passRates, '#0ea5e9')}
      </div>
    </div>

    ${maxSub ? `
    <div class="cmp-section-title"><i class="fa-solid fa-list-check"></i> 시험 과목 비교 (필기 기준)</div>
    <table class="compare-table cmp-sub-table">
      <tbody>${subRows}</tbody>
    </table>` : ''}

    <div class="compare-actions">
      <button class="btn btn-secondary btn-sm" onclick="window.selectCert('${certA.name}');window.closeCompareModal()">
        <i class="fa-solid fa-arrow-left"></i> ${certA.name}
      </button>
      <button class="btn btn-secondary btn-sm" onclick="window.selectCert('${certB.name}');window.closeCompareModal()">
        <i class="fa-solid fa-arrow-right"></i> ${certB.name}
      </button>
    </div>`;
}

(function initCompareModal() {
  document.addEventListener('DOMContentLoaded', () => {
    const input    = document.getElementById('compare-search-input');
    const dropdown = document.getElementById('compare-dropdown');
    if (!input || !dropdown) return;

    input.addEventListener('input', () => {
      const q = input.value.trim();
      if (!q) { dropdown.style.display = 'none'; return; }
      const { scored } = searchCerts(q);
      const matches = scored.slice(0, 8).map(s => s.name);
      if (!matches.length) { dropdown.style.display = 'none'; return; }
      dropdown.innerHTML = matches.map(name =>
        `<div class="compare-dd-item" onclick="(function(){
          document.getElementById('compare-search-input').value='${name}';
          document.getElementById('compare-dropdown').style.display='none';
          renderComparePanel('${name}');
        })()">${name}</div>`
      ).join('');
      dropdown.style.display = '';
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('#compare-modal')) dropdown.style.display = 'none';
    });
  });
})();

// ============================================================
// 22. 정적 데이터 — 합격 팁, FAQ, 개정판 이력
// ============================================================
const CERT_TIPS = {
  '전기기사': [
    { type:'필기', tag:'고득점', tip:'전기자기학은 공식 암기보다 원리 이해 우선 — 맥스웰 방정식 적용 예제 위주로 학습하세요.' },
    { type:'필기', tag:'주의', tip:'회로이론 계산에서 위상각 부호 실수가 잦습니다. 기호 규약을 처음부터 통일해 두세요.' },
    { type:'실기', tag:'핵심', tip:'배선도 시공 작업은 색상 코드(갈·흑·회·녹황) 암기가 필수. 접속 불량이 가장 많은 감점 항목입니다.' },
  ],
  '산업안전기사': [
    { type:'필기', tag:'고득점', tip:'산업안전보건법 조문 번호까지 외울 필요 없음. "요건·효과·예외" 3단 구조로 정리하세요.' },
    { type:'필기', tag:'주의', tip:'인간공학 파트의 FMEA·FTA 기호는 도식화로 암기하면 혼동을 줄일 수 있습니다.' },
    { type:'실기', tag:'핵심', tip:'필답형은 핵심어 포함 여부로 채점 — "위험성 평가", "개선조치" 등 법적 용어를 정확히 사용하세요.' },
  ],
  '정보처리기사': [
    { type:'필기', tag:'고득점', tip:'UML 다이어그램 유형은 최근 기출 5개년 선지 암기로 대부분 커버됩니다.' },
    { type:'필기', tag:'주의', tip:'SQL 문제는 실행 결과값을 직접 손으로 트레이싱하는 연습이 필수입니다.' },
    { type:'실기', tag:'핵심', tip:'알고리즘 코드 출력값 추적 문제가 30% 이상 — 빠른 손 계산이 합격을 결정합니다.' },
  ],
  '소방설비기사': [
    { type:'필기', tag:'고득점', tip:'소방시설 설치기준 수치(수원량·방수압력·방수량)를 표로 정리해 반복 암기하세요.' },
    { type:'실기', tag:'핵심', tip:'설계도면 해석 문제 — 화재감지기·스프링클러 심볼을 모르면 풀 수 없습니다. 이미지로 암기하세요.' },
  ],
  '건설안전기사': [
    { type:'필기', tag:'고득점', tip:'KOSHA 가이드 기준 빈출 — 비계·거푸집 관련 수치를 집중 암기하세요.' },
    { type:'실기', tag:'핵심', tip:'재해 유형별 원인·대책 3가지 쓰기 문제가 매회 출제됩니다. 틀에 맞춰 암기하세요.' },
  ],
  '위험물산업기사': [
    { type:'필기', tag:'고득점', tip:'위험물 류별 특성(인화점·발화점·비중)은 표 비교 암기가 가장 효율적입니다.' },
    { type:'실기', tag:'주의', tip:'지정수량 배수 계산식에서 단위 실수가 많습니다. 풀이 과정에 단위를 항상 명시하세요.' },
  ],
  '컴퓨터활용능력1급': [
    { type:'필기', tag:'고득점', tip:'스프레드시트 VLOOKUP·INDEX·MATCH·IF 중첩 공식 문제가 핵심 — 손으로 써가며 연습하세요.' },
    { type:'실기', tag:'핵심', tip:'실기는 속도가 합격을 결정 — 단축키(Ctrl+Shift+Enter 등) 근육기억이 필수입니다.' },
  ],
  '산업안전산업기사': [
    { type:'필기', tag:'고득점', tip:'기사 대비 법령 암기 비중이 낮고 개념 이해 문제가 많습니다. 기본서 1회독 후 기출 집중.' },
    { type:'실기', tag:'주의', tip:'안전보건표지 색상·형태 문제는 실제 이미지로 확인하며 공부하면 혼동이 줄어듭니다.' },
  ],
  '전기산업기사': [
    { type:'필기', tag:'고득점', tip:'전기기사와 범위가 유사 — 기사 기출도 병행하면 학습 효율이 올라갑니다.' },
    { type:'실기', tag:'핵심', tip:'측정 계기 사용법과 절연저항 측정 절차 서술 문제가 자주 출제됩니다.' },
  ],
  '산업위생관리기사': [
    { type:'필기', tag:'고득점', tip:'허용기준 수치(TLV-TWA, STEL)는 주요 물질 10개 이상을 외워 두세요.' },
    { type:'실기', tag:'핵심', tip:'측정·평가 계산 문제에서 단위 변환 실수가 가장 많습니다. 단위를 항상 명시하세요.' },
  ],
};

const CERT_FAQ_GENERAL = [
  { q:'기능사 시험은 응시자격 제한이 있나요?', a:'기능사는 응시자격 제한 없이 누구나 응시 가능합니다. 단, 산업기사·기사는 학력 또는 관련 실무 경력이 요구됩니다.' },
  { q:'필기 합격 후 실기는 언제까지 응시해야 하나요?', a:'필기 합격일로부터 2년 이내에 동일 종목 실기에 합격해야 합니다. 2년이 지나면 필기부터 재응시해야 합니다.' },
  { q:'원서 접수는 어디서 하나요?', a:'Q-Net(www.q-net.or.kr)에서 회원가입 후 온라인 접수합니다. 접수 기간 이후에는 추가 접수가 불가하므로 일정을 미리 확인하세요.' },
  { q:'합격 기준이 어떻게 되나요?', a:'100점 만점 기준 평균 60점 이상이면 합격입니다. 단, 과목별 40점 미만(과락)이 있으면 불합격 처리됩니다.' },
  { q:'자격증 취득 시 어떤 혜택이 있나요?', a:'공기업·공무원 채용 가산점, 취업 우대, 법정 선임 요건 충족(안전관리자 등), 자격수당 지급 등의 혜택이 있습니다.' },
  { q:'수험서는 어떤 기준으로 선택해야 하나요?', a:'최근 개정 출제기준 반영 여부, 기출문제 수록 분량, 해설의 충실도를 기준으로 선택하세요. 최신판 위주로 구입하세요.' },
  { q:'시험장에 반입 가능한 물품은 무엇인가요?', a:'신분증(주민등록증·운전면허증 등)과 수험표가 필수입니다. 전자기기·스마트기기는 원칙적으로 금지됩니다.' },
  { q:'합격자 발표는 어디서 확인하나요?', a:'Q-Net 홈페이지 및 Q-Net 앱에서 발표일 당일 오전 9시부터 조회 가능합니다. SMS 수신 신청도 가능합니다.' },
];

const EXAM_REVISIONS = [
  { cert:'산업안전기사', type:'출제기준 개정', date:'2026-01-01', desc:'화학물질관리법·중대재해처벌법 개정사항 반영. 위험성 평가 관련 문항 비중 증가.', urgency:'high', updateNeeded:true },
  { cert:'전기기사', type:'출제기준 변경', date:'2026-01-01', desc:'전기설비기술기준(KEC) 최신 개정 반영. 구 기준 대체 문항 정리 필요.', urgency:'high', updateNeeded:true },
  { cert:'소방설비기사', type:'법령 개정', date:'2026-01-15', desc:'화재예방법 시행령 개정 — 특정소방대상물 분류 기준 변경사항 반영 필요.', urgency:'medium', updateNeeded:true },
  { cert:'건설안전기사', type:'출제기준 개정', date:'2026-02-01', desc:'타워크레인·고소작업대 관련 내용 추가. KOSHA 가이드 최신판 반영.', urgency:'medium', updateNeeded:true },
  { cert:'정보처리기사', type:'출제기준 개정', date:'2025-01-01', desc:'Python 실기 비중 확대, 구형 언어(COBOL) 완전 삭제. 이미 반영 완료.', urgency:'low', updateNeeded:false },
  { cert:'환경기사', type:'출제기준 개정', date:'2026-01-01', desc:'탄소중립 관련 법규 반영. 환경영향평가법 개정사항 포함.', urgency:'medium', updateNeeded:true },
  { cert:'위험물산업기사', type:'법령 개정', date:'2025-12-31', desc:'위험물 안전관리법 시행규칙 개정. 탱크 기준 일부 수치 변경.', urgency:'low', updateNeeded:false },
  { cert:'산업위생관리기사', type:'고시 개정', date:'2025-07-01', desc:'작업환경측정 및 정도관리 고시 개정. 측정 방법·분석 기준 일부 변경.', urgency:'low', updateNeeded:false },
];

// ============================================================
// 23. D-Day 위젯 (웰컴 페이지)
// ============================================================
function renderDDayWidget() {
  const el = document.getElementById('dday-widget-grid');
  if (!el) return;
  const today = new Date(); today.setHours(0,0,0,0);

  const entries = [];
  Object.values(CERTIFICATIONS).forEach(cert => {
    (cert.schedules || []).forEach(sch => {
      [['writtenExam','필기'], ['practicalExam','실기'], ['singleExam','단일']].forEach(([key, label]) => {
        const v = sch[key];
        if (!v || v==='-' || v==='—' || /상시/.test(v)) return;
        const dateStr = v.split('~')[0].trim().replace(/\(.*?\)/g,'').trim();
        const d = new Date(dateStr);
        if (isNaN(d) || d < today) return;
        const diff = Math.ceil((d - today) / 86400000);
        if (diff > 180) return;
        entries.push({ name: cert.name, label, diff, date: dateStr, round: sch.round || '', icon: cert.icon || 'fa-certificate' });
      });
    });
  });

  entries.sort((a,b) => a.diff - b.diff);
  const shown = [];
  const seen = new Set();
  for (const e of entries) {
    const key = e.name + e.label;
    if (!seen.has(key)) { seen.add(key); shown.push(e); }
    if (shown.length >= 10) break;
  }

  if (!shown.length) {
    el.innerHTML = '<p class="hot-empty">향후 6개월 이내 예정된 시험이 없습니다.</p>';
    return;
  }

  el.innerHTML = shown.map(e => {
    const cls = e.diff <= 7 ? 'dday-urgent' : e.diff <= 30 ? 'dday-soon' : 'dday-normal';
    const dLabel = e.diff === 0 ? 'D-Day' : `D-${e.diff}`;
    return `
      <div class="dday-card ${cls}" onclick="window.selectCert('${e.name.replace(/'/g,"\\'")}')">
        <div class="dday-card-icon"><i class="fa-solid ${e.icon}"></i></div>
        <div class="dday-card-body">
          <div class="dday-card-name">${e.name}</div>
          <div class="dday-card-meta">${e.round} ${e.label}</div>
          <div class="dday-card-date">${e.date}</div>
        </div>
        <div class="dday-badge ${cls}">${dLabel}</div>
      </div>`;
  }).join('');
}

// ============================================================
// 24. 자격증 비교기 (인라인 섹션)
// ============================================================
function renderCompareSection(cert) {
  const labelEl = document.getElementById('compare-inline-a-label');
  const panel   = document.getElementById('compare-inline-panel');
  if (!labelEl || !panel) return;

  if (!cert) {
    labelEl.textContent = '— 자격증을 먼저 선택하세요 —';
    panel.innerHTML = '';
    return;
  }
  labelEl.textContent = cert.name;
  panel.innerHTML = '<p class="compare-hint"><i class="fa-solid fa-arrow-up"></i> 비교할 자격증을 위 검색창에서 선택하세요.</p>';

  const input = document.getElementById('compare-inline-input');
  const dropdown = document.getElementById('compare-inline-dropdown');
  if (!input || input._inlineBound) return;
  input._inlineBound = true;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { dropdown.style.display='none'; return; }
    const matches = Object.keys(CERTIFICATIONS).filter(n => n !== cert.name && normalize(n).includes(normalize(q))).slice(0,8);
    if (!matches.length) { dropdown.style.display='none'; return; }
    dropdown.innerHTML = matches.map(n =>
      `<div class="compare-dropdown-item" onclick="(()=>{
        document.getElementById('compare-inline-input').value='${n.replace(/'/g,"\\'")}';
        document.getElementById('compare-inline-dropdown').style.display='none';
        renderInlineCompare('${n.replace(/'/g,"\\'")}');
      })()">${n}</div>`
    ).join('');
    dropdown.style.display='';
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#compare-section')) dropdown.style.display='none';
  });
}

function renderInlineCompare(nameB) {
  const certA = getCert();
  const certB = CERTIFICATIONS[nameB];
  if (!certA || !certB) return;

  const panel = document.getElementById('compare-inline-panel');
  const today = new Date(); today.setHours(0,0,0,0);
  function nextExam(c) {
    for (const s of (c.schedules||[])) {
      for (const k of ['writtenExam','practicalExam']) {
        const v = s[k];
        if (!v||v==='-'||/상시/.test(v)) continue;
        const d = new Date(v.split('~')[0].trim());
        if (!isNaN(d) && d>=today) return `${s.round} ${k==='writtenExam'?'필기':'실기'} (D-${Math.ceil((d-today)/86400000)})`;
      }
    }
    return '일정 없음';
  }
  const pA = parseFloat(certA.avgPassRate)||0, pB = parseFloat(certB.avgPassRate)||0;
  const subA = (certA.subjects||[]).map(s=>s.title||s.name||'').filter(Boolean);
  const subB = (certB.subjects||[]).map(s=>s.title||s.name||'').filter(Boolean);
  const maxSub = Math.max(subA.length, subB.length);

  const typeOf = n => PRIVATE_CERT_SET.has(n)?'민간자격':PRO_CERT_SET.has(n)?'국가전문':'국가기술';
  const starOf = n => (CERT_POPULARITY[n]||{}).stars||'—';
  const bar = (v,max,color) => v?`<div class="cmp-bar-wrap"><div class="cmp-bar" style="width:${Math.round(v/Math.max(max,60)*100)}%;background:${color}"></div><span>${v}%</span></div>`:'<span class="cmp-no-data">–</span>';

  panel.innerHTML = `
    <div class="cmp-table-wrap">
      <table class="cmp-table">
        <thead>
          <tr><th class="cmp-th-a">${certA.name}</th><th class="cmp-th-mid">항목</th><th class="cmp-th-b">${certB.name}</th></tr>
        </thead>
        <tbody>
          <tr><td class="cmp-val">${typeOf(certA.name)}</td><td class="cmp-label">자격 유형</td><td class="cmp-val">${typeOf(certB.name)}</td></tr>
          <tr><td class="cmp-val">${certA.category||'—'}</td><td class="cmp-label">분류</td><td class="cmp-val">${certB.category||'—'}</td></tr>
          <tr><td class="cmp-val ${pA>pB?'cmp-win':''}">${bar(pA,Math.max(pA,pB),'#10b981')}</td><td class="cmp-label">평균 합격률</td><td class="cmp-val ${pB>pA?'cmp-win':''}">${bar(pB,Math.max(pA,pB),'#3b82f6')}</td></tr>
          <tr><td class="cmp-val">${renderStars(starOf(certA.name))}</td><td class="cmp-label">선호도</td><td class="cmp-val">${renderStars(starOf(certB.name))}</td></tr>
          <tr><td class="cmp-val">${nextExam(certA)}</td><td class="cmp-label">다음 시험</td><td class="cmp-val">${nextExam(certB)}</td></tr>
          <tr><td class="cmp-val">${subA.length}과목</td><td class="cmp-label">시험 과목 수</td><td class="cmp-val">${subB.length}과목</td></tr>
        </tbody>
      </table>
    </div>
    ${maxSub ? `
    <div class="cmp-subjects">
      <div class="cmp-subjects-title">시험 과목 비교</div>
      <table class="cmp-sub-table">
        <thead><tr><th>${certA.name}</th><th>#</th><th>${certB.name}</th></tr></thead>
        <tbody>${Array.from({length:maxSub},(_,i)=>`
          <tr>
            <td class="cmp-sub-val">${subA[i]?`<i class="fa-solid fa-circle-dot cmp-sub-dot"></i>${subA[i]}`:''}</td>
            <td class="cmp-sub-center">${i+1}</td>
            <td class="cmp-sub-val">${subB[i]?`<i class="fa-solid fa-circle-dot cmp-sub-dot"></i>${subB[i]}`:''}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>` : ''}
    <div style="text-align:right;margin-top:10px;">
      <button class="btn btn-secondary btn-sm" onclick="window.selectCert('${certA.name.replace(/'/g,"\\'")}')">← ${certA.name} 대시보드로</button>
      <button class="btn btn-secondary btn-sm" onclick="window.selectCert('${certB.name.replace(/'/g,"\\'")}')">→ ${certB.name} 대시보드로</button>
    </div>`;
}
window.renderInlineCompare = renderInlineCompare;

// ============================================================
// 25. 합격 팁 & 후기
// ============================================================
function renderTipsSection(cert) {
  const el = document.getElementById('tips-body');
  if (!el || !cert) return;
  const tips = CERT_TIPS[cert.name];
  if (!tips) {
    el.innerHTML = `<div class="tips-no-data"><i class="fa-solid fa-circle-info"></i> <strong>${cert.name}</strong>의 합격 팁 데이터가 준비 중입니다.<br>자격증별 팁은 순차적으로 추가됩니다.</div>`;
    return;
  }
  const typeColor = { '필기':'var(--primary-color)', '실기':'var(--accent-color)', '학습법':'#f59e0b' };
  const tagBg = { '고득점':'#d1fae5', '주의':'#fef3c7', '핵심':'#dbeafe' };
  const tagColor = { '고득점':'#065f46', '주의':'#92400e', '핵심':'#1e40af' };
  el.innerHTML = tips.map(t => `
    <div class="tip-card">
      <div class="tip-card-header">
        <span class="tip-type-badge" style="background:${typeColor[t.type]}20;color:${typeColor[t.type]}">${t.type}</span>
        <span class="tip-tag-badge" style="background:${tagBg[t.tag]||'#f3f4f6'};color:${tagColor[t.tag]||'#374151'}">${t.tag}</span>
      </div>
      <p class="tip-card-text">${t.tip}</p>
    </div>`).join('');
}

// ============================================================
// 26. 자격증 FAQ
// ============================================================
function renderFAQSection() {
  const el = document.getElementById('faq-list');
  if (!el) return;
  _renderFAQList(CERT_FAQ_GENERAL);
}

function _renderFAQList(items) {
  const el = document.getElementById('faq-list');
  if (!el) return;
  el.innerHTML = items.map((item, i) => `
    <div class="faq-item" id="faq-item-${i}">
      <button class="faq-q" onclick="window.toggleFAQ(${i})">
        <span>${item.q}</span>
        <i class="fa-solid fa-chevron-down faq-chevron" id="faq-chev-${i}"></i>
      </button>
      <div class="faq-a" id="faq-a-${i}" style="display:none;">${item.a}</div>
    </div>`).join('');
}

window.toggleFAQ = function(i) {
  const a = document.getElementById(`faq-a-${i}`);
  const chev = document.getElementById(`faq-chev-${i}`);
  if (!a) return;
  const open = a.style.display !== 'none';
  a.style.display = open ? 'none' : 'block';
  if (chev) chev.style.transform = open ? '' : 'rotate(180deg)';
};

window.filterFAQ = function(q) {
  const term = q.toLowerCase();
  if (!term) { _renderFAQList(CERT_FAQ_GENERAL); return; }
  _renderFAQList(CERT_FAQ_GENERAL.filter(f => f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term)));
};

// ============================================================
// 27. 출판 일정 캘린더
// ============================================================
function renderPubCalendar() {
  const el = document.getElementById('pub-calendar-list');
  if (!el) return;
  const today = new Date(); today.setHours(0,0,0,0);
  const in6m = new Date(today); in6m.setMonth(in6m.getMonth() + 6);

  const entries = [];
  Object.values(CERTIFICATIONS).forEach(cert => {
    (cert.schedules||[]).forEach(sch => {
      [['writtenExam','필기'],['practicalExam','실기']].forEach(([key,label]) => {
        const v = sch[key];
        if (!v||v==='-'||/상시/.test(v)) return;
        const d = new Date(v.split('~')[0].trim().replace(/\(.*?\)/g,'').trim());
        if (isNaN(d)||d<today||d>in6m) return;
        const diff = Math.ceil((d-today)/86400000);
        const pubDate = new Date(d); pubDate.setDate(pubDate.getDate()-60);
        const pubDiff = Math.ceil((pubDate-today)/86400000);
        entries.push({ name:cert.name, label, examDate:d, examDateStr:v.split('~')[0].trim(), diff, pubDate, pubDiff, round:sch.round||'' });
      });
    });
  });

  entries.sort((a,b)=>a.diff-b.diff);
  el._allEntries = entries;
  _renderPubCalList(entries);
}

function _renderPubCalList(entries) {
  const el = document.getElementById('pub-calendar-list');
  if (!el) return;
  if (!entries.length) { el.innerHTML='<p class="hot-empty">향후 6개월 이내 예정된 시험이 없습니다.</p>'; return; }
  el.innerHTML = entries.slice(0,20).map(e => {
    const examCls = e.diff<=7?'exam-urgent':e.diff<=30?'exam-soon':'exam-normal';
    const pubCls = e.pubDiff<=0?'pub-overdue':e.pubDiff<=14?'pub-urgent':'pub-normal';
    const pubLabel = e.pubDiff<=0?'출판 시기 초과':`출판 권장 D-${e.pubDiff}`;
    return `
      <div class="pub-cal-card">
        <div class="pub-cal-cert" onclick="window.selectCert('${e.name.replace(/'/g,"\\'")}')">
          <strong>${e.name}</strong> <span class="pub-cal-round">${e.round} ${e.label}</span>
        </div>
        <div class="pub-cal-dates">
          <span class="pub-cal-exam-date ${examCls}"><i class="fa-solid fa-pen-to-square"></i> 시험일 ${e.examDateStr} (D-${e.diff})</span>
          <span class="pub-cal-pub-date ${pubCls}"><i class="fa-solid fa-book"></i> ${pubLabel}</span>
        </div>
      </div>`;
  }).join('');
}

window.filterPubCal = function(type, btn) {
  document.querySelectorAll('.pub-cal-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const el = document.getElementById('pub-calendar-list');
  if (!el || !el._allEntries) return;
  let list = el._allEntries;
  if (type==='soon') list = list.filter(e=>e.diff<=30);
  else if (type==='prep') list = list.filter(e=>e.pubDiff>=0 && e.pubDiff<=14);
  _renderPubCalList(list);
};

// ============================================================
// 28. 개정판 추적기
// ============================================================
function renderRevisionTracker() {
  const el = document.getElementById('revision-list');
  if (!el) return;
  el._data = EXAM_REVISIONS;
  _renderRevList(EXAM_REVISIONS);
}

function _renderRevList(items) {
  const el = document.getElementById('revision-list');
  if (!el) return;
  const urgClass = { high:'rev-high', medium:'rev-medium', low:'rev-low' };
  const urgLabel = { high:'긴급', medium:'보통', low:'낮음' };
  el.innerHTML = items.map(r => `
    <div class="rev-card ${r.updateNeeded?'rev-update-needed':''}">
      <div class="rev-card-header">
        <span class="rev-cert-name" onclick="window.selectCert('${r.cert.replace(/'/g,"\\'")}') ">${r.cert}</span>
        <span class="rev-type-badge">${r.type}</span>
        <span class="rev-urgency ${urgClass[r.urgency]}">${urgLabel[r.urgency]}</span>
        ${r.updateNeeded?'<span class="rev-update-badge"><i class="fa-solid fa-triangle-exclamation"></i> 업데이트 필요</span>':'<span class="rev-ok-badge"><i class="fa-solid fa-circle-check"></i> 반영 완료</span>'}
      </div>
      <div class="rev-date"><i class="fa-solid fa-calendar"></i> 시행일: ${r.date}</div>
      <div class="rev-desc">${r.desc}</div>
    </div>`).join('');
}

window.filterRevisions = function(type, btn) {
  document.querySelectorAll('.rev-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const el = document.getElementById('revision-list');
  if (!el || !el._data) return;
  let list = el._data;
  if (type==='high') list = list.filter(r=>r.urgency==='high');
  else if (type==='update') list = list.filter(r=>r.updateNeeded);
  _renderRevList(list);
};

// ============================================================
// 29. 공지 게시판 (localStorage)
// ============================================================
function _loadNotices() {
  try { return JSON.parse(localStorage.getItem('notices')||'[]'); } catch(e) { return []; }
}
function _saveNotices(arr) {
  try { localStorage.setItem('notices', JSON.stringify(arr)); } catch(e) {}
}

function renderNoticeBoard() {
  const el = document.getElementById('notice-list');
  if (!el) return;
  const notices = _loadNotices();
  if (!notices.length) {
    el.innerHTML = '<p class="hot-empty">등록된 공지가 없습니다.</p>';
  } else {
    el.innerHTML = notices.map((n,i) => `
      <div class="notice-card ${n.important?'notice-important':''}">
        <div class="notice-card-header">
          <div class="notice-title-row">
            ${n.important?'<span class="notice-imp-badge"><i class="fa-solid fa-star"></i> 중요</span>':''}
            <strong class="notice-title">${n.title}</strong>
          </div>
          <div class="notice-meta">${n.date}</div>
        </div>
        <p class="notice-body">${n.body.replace(/\n/g,'<br>')}</p>
        <button class="notice-delete-btn" onclick="window.deleteNotice(${i})"><i class="fa-solid fa-trash"></i> 삭제</button>
      </div>`).join('');
  }
  renderNoticeBanner();
}

function renderNoticeBanner() {
  const banner = document.getElementById('welcome-notice-banner');
  if (!banner) return;
  const notices = _loadNotices().filter(n=>n.important);
  if (!notices.length) { banner.style.display='none'; return; }
  banner.style.display='block';
  banner.innerHTML = notices.map(n=>`
    <div class="notice-banner-item">
      <i class="fa-solid fa-bullhorn"></i>
      <strong>${n.title}</strong>
      <span>${n.body.split('\n')[0]}</span>
    </div>`).join('');
}

window.openNoticeForm = function() {
  document.getElementById('notice-form').style.display='block';
  document.getElementById('notice-title-input').focus();
};
window.closeNoticeForm = function() {
  document.getElementById('notice-form').style.display='none';
  document.getElementById('notice-title-input').value='';
  document.getElementById('notice-body-input').value='';
  document.getElementById('notice-important-chk').checked=false;
};
window.saveNotice = function() {
  const title = document.getElementById('notice-title-input').value.trim();
  const body  = document.getElementById('notice-body-input').value.trim();
  if (!title || !body) return;
  const notices = _loadNotices();
  notices.unshift({ title, body, important: document.getElementById('notice-important-chk').checked, date: new Date().toLocaleDateString('ko-KR') });
  _saveNotices(notices);
  window.closeNoticeForm();
  renderNoticeBoard();
};
window.deleteNotice = function(i) {
  const notices = _loadNotices();
  notices.splice(i,1);
  _saveNotices(notices);
  renderNoticeBoard();
};
