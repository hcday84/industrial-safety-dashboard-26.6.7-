/* ==========================================
   멀티 자격증 올인원 대시보드 v2.0
   ========================================== */

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
  for (let m = 1; m <= 12; m++) monthData[m] = { written: [], practical: [] };

  // "YYYY-MM-DD ~ YYYY-MM-DD" → 시작 월(숫자)과 표시용 "MM/DD ~ MM/DD" 변환
  const parseExamRange = str => {
    if (!str) return null;
    const match = str.match(/(\d{4})-(\d{2})-(\d{2})\s*~\s*\d{4}-(\d{2})-(\d{2})/);
    if (!match) return null;
    return { month: parseInt(match[2]), display: `${match[2]}/${match[3]} ~ ${match[4]}/${match[5]}` };
  };

  Object.entries(CERTIFICATIONS).forEach(([certName, cert]) => {
    if (!cert.schedules?.length) return;
    cert.schedules.forEach(s => {
      const written = parseExamRange(s.writtenExam);
      if (written) monthData[written.month].written.push({ certName, round: s.round, dateRange: written.display });

      const practical = parseExamRange(s.practicalExam);
      if (practical) monthData[practical.month].practical.push({ certName, round: s.round, dateRange: practical.display });
    });
  });

  // 가나다순 정렬
  for (let m = 1; m <= 12; m++) {
    monthData[m].written.sort((a, b) => a.certName.localeCompare(b.certName, 'ko'));
    monthData[m].practical.sort((a, b) => a.certName.localeCompare(b.certName, 'ko'));
  }

  _monthlyExamCache = monthData;
  return monthData;
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

  function renderMonthlyResult(month) {
    const data = fetchAllMonthlyExams();
    const { written, practical } = data[month];

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
  renderBooks();
  renderChart(cert);
  renderSubjects(cert);
  renderStudyGuide(cert);
  renderRoadmap(cert);
}

// ============================================
// 4. 자격증 전환
// ============================================
function switchCertification(certName) {
  if (!CERTIFICATIONS[certName] || certName === STATE.currentCert) return;

  STATE.currentCert = certName;
  try { localStorage.setItem('lastCert', certName); } catch(e) {}

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
    sessionStorage.setItem(cacheKey, imageUrl);
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
    .filter(img => !img.src || img.src === window.location.href);
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
  const pathEl = document.getElementById('roadmap-path');
  const relatedEl = document.getElementById('roadmap-related');
  if (!pathEl || !relatedEl) return;

  const path = buildRoadmapPath(cert);
  const usedNames = new Set([cert.name, ...((path || []).map(p => p.name))]);
  const related = buildRoadmapRelated(cert, usedNames);

  if (path) {
    pathEl.style.display = '';
    pathEl.innerHTML = path.map((p, i) => `
      <div class="roadmap-step ${p.current ? 'current' : ''} ${p.exists ? 'clickable' : 'disabled'}" ${p.exists && !p.current ? `onclick="switchCertification('${p.name}')"` : ''}>
        <span class="roadmap-step-label">${p.label}</span>
        <span class="roadmap-step-name">${p.name}</span>
      </div>
      ${i < path.length - 1 ? '<i class="fa-solid fa-chevron-right roadmap-arrow"></i>' : ''}
    `).join('');
  } else {
    pathEl.style.display = 'none';
    pathEl.innerHTML = '';
  }

  if (related.length > 0) {
    relatedEl.innerHTML = related.map(n => {
      const c = CERTIFICATIONS[n];
      return `<button class="roadmap-related-chip" onclick="switchCertification('${n}')"><i class="fa-solid ${c.icon || 'fa-certificate'}"></i> ${n}</button>`;
    }).join('');
  } else {
    relatedEl.innerHTML = `<span class="roadmap-empty">같은 분야의 다른 자격증 정보가 없습니다.</span>`;
  }
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
  { name: '김영북스',     url: 'https://www.kimnbook.co.kr',       keywords: ['김영북스', '김영'] },
  { name: '길벗',         url: 'https://www.gilbut.co.kr',         keywords: ['길벗'] },
  { name: '서원각',       url: 'https://goseowon.com',             keywords: ['서원각'] },
  { name: '고시넷',       url: 'https://www.gosinet.co.kr',        keywords: ['고시넷'] },
  { name: '삼원북스',     url: 'https://www.samwonbooks.com',      keywords: ['삼원북스', '삼원'] },
  { name: '건기원',       url: 'https://www.kkwbooks.com',         keywords: ['건기원'] },
  { name: '해커스',       url: 'https://www.hackers.com',          keywords: ['해커스'] },
  { name: '형설출판사',   url: 'https://www.hyungseul.co.kr',      keywords: ['형설'] },
  { name: '이나무출판사',   url: 'https://enamuh.co.kr',              keywords: ['이나무'] },
  { name: '한빛미디어',   url: 'https://www.hanbit.co.kr',          keywords: ['한빛'] },
  { name: '이지스퍼블리싱', url: 'https://www.easyspub.co.kr',      keywords: ['이지스', 'Do it', 'doit'] },
  { name: '생능출판사',   url: 'https://www.booksr.co.kr',           keywords: ['생능'] },
  { name: '세진사',       url: 'https://www.sejinbook.com',          keywords: ['세진'] },
  { name: '세화',         url: 'https://www.sehwapub.co.kr',         keywords: ['세화'] },
  { name: '박문각',       url: 'https://www.pmg.co.kr',              keywords: ['박문각'] },
  { name: '골든벨',       url: 'https://gbbook.co.kr',               keywords: ['골든벨'] },
  { name: '모아북스',     url: 'http://www.moabooks.com',            keywords: ['모아북스', '모아'] },
  { name: '제이펍',       url: 'https://jpub.kr',                    keywords: ['제이펍', 'jpub'] },
  { name: '인사이트',     url: 'https://www.insightbook.co.kr',      keywords: ['인사이트', 'insight'] },
  { name: '에이콘출판사', url: 'https://acornpub.co.kr',              keywords: ['에이콘', 'acorn'] },
  { name: '골든래빗',     url: 'https://goldenrabbit.co.kr',          keywords: ['골든래빗'] },
  { name: '위키북스',     url: 'https://wikibook.co.kr',              keywords: ['위키북스', 'wikibook'] },
  { name: '디지털북스',   url: 'https://www.digitalbooks.co.kr',     keywords: ['디지털북스'] },
  { name: '리코멘드',     url: 'https://www.rdbook.co.kr',           keywords: ['리코멘드'] },
  { name: '비엘북스',     url: 'https://vielbooks.com',              keywords: ['비엘북스', '비엘'] },
  { name: '엔트미디어',   url: 'https://entmedia.co.kr',             keywords: ['엔트미디어'] },
  { name: '박영사',       url: 'https://www.pybook.co.kr',           keywords: ['박영사'] },
  { name: '부민문화사',   url: 'https://www.bumin33.co.kr',          keywords: ['부민문화사', '부민'] },
  { name: '드림널스',     url: 'https://www.dreamnurse.co.kr',       keywords: ['드림널스'] },
  { name: '홍지문',       url: 'https://hongjimunbook.cafe24.com',   keywords: ['홍지문'] },
  { name: '포널스출판사', url: 'https://fornursebook.com',            keywords: ['포널스'] },
  { name: '교보문고',     url: 'https://www.kyobobook.co.kr',        keywords: ['교보'] },
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
  const SECTION_IDS = ['schedule-section', 'monthly-section', 'books-section', 'news-section', 'analytics-section', 'study-section', 'roadmap-section'];

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
