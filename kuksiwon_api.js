// 한국보건의료인국가시험원 시험일정 API 연동
// 공공데이터포털 데이터셋 15061941

const KUKSIWON_API = {
  serviceKey: '688d62bca5f00144bd4be91139ca3297c2641d3c918f57e0a5e80ad59faece52',
  baseUrl: 'https://api.odcloud.kr/api/15061941/v1/uddi:e98378a4-9c24-417e-9805-c81133dc3678',

  // API 직종명 → 대시보드 자격증 키 매핑
  JIKJONG_MAP: {
    '간호사':         '간호사',
    '간호조무사':     '간호조무사',
    '임상병리사':     '임상병리사',
    '방사선사':       '방사선사',
    '물리치료사':     '물리치료사',
    '작업치료사':     '작업치료사',
    '치과위생사':     '치과위생사',
    '치위생사':       '치위생사',
    '1급 응급구조사': '응급구조사1급',
    '2급 응급구조사': '응급구조사2급',
    '의무기록사':     '의무기록사',
    '위생사':         '위생사',
    '영양사':         '영양사',
    '의사':           '의사',
    '치과의사':       '치과의사',
    '한의사':         '한의사',
    '약사(6년제)':    '약사',
    '안경사':         '안경사',
    '치과기공사':     '치과기공사',
  },

  async fetchSchedules(year) {
    const url = `${this.baseUrl}?serviceKey=${this.serviceKey}&page=1&perPage=200&cond[연도::EQ]=${year}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      return json.data || [];
    } catch (e) {
      console.warn('[국시원 API] 데이터 로드 실패:', e.message);
      return [];
    }
  },

  // 최근 2개 연도 데이터 가져와서 자격증별 최신 일정 반환
  async getLatestSchedules() {
    const currentYear = new Date().getFullYear();
    const [thisYear, lastYear] = await Promise.all([
      this.fetchSchedules(currentYear),
      this.fetchSchedules(currentYear - 1),
    ]);

    const allData = [...thisYear, ...lastYear];
    const result = {};

    for (const row of allData) {
      const certKey = this.JIKJONG_MAP[row.직종];
      if (!certKey) continue;

      // 최신 연도 우선
      if (!result[certKey] || row.연도 > result[certKey].연도) {
        result[certKey] = {
          연도: row.연도,
          직종: row.직종,
          시험명: row.시험명,
          온라인접수기간: row.온라인접수기간,
          방문접수기간: row.방문접수기간,
          응시표출력일: row.응시표출력일,
          시험일: row.시험일,
          합격자발표예정일: row.합격자발표예정일,
          회차: row.회차,
        };
      }
    }
    return result;
  },

  // 날짜 포맷: "2026-01-24" → "2026.01.24"
  formatDate(dateStr) {
    if (!dateStr) return '-';
    return dateStr.replace(/-/g, '.');
  },

  // 기간 포맷: "2025-10-14 ~ 2025-10-21" → "10.14 ~ 10.21"
  formatPeriod(periodStr) {
    if (!periodStr) return '-';
    return periodStr.replace(/\d{4}-(\d{2})-(\d{2})/g, '$1.$2');
  },

  // 대시보드 schedules 배열 형식으로 변환
  toScheduleRow(apiRow) {
    const isDone = apiRow.합격자발표예정일
      ? new Date(apiRow.합격자발표예정일) < new Date()
      : false;
    const isCurrent = !isDone;

    return {
      round: `${apiRow.연도}년도`,
      isCurrent,
      isDone,
      writtenApply: this.formatPeriod(apiRow.온라인접수기간 || apiRow.방문접수기간),
      writtenExam: this.formatDate(apiRow.시험일),
      writtenResult: this.formatDate(apiRow.합격자발표예정일),
      practicalApply: '-',
      practicalExam: '-',
      finalResult: this.formatDate(apiRow.합격자발표예정일),
      _source: 'api',
    };
  },

  // milestones 배열 형식으로 변환
  toMilestones(apiRow) {
    const ms = [];
    if (apiRow.온라인접수기간) {
      const start = apiRow.온라인접수기간.split(' ~ ')[0];
      ms.push({ label: `${apiRow.연도}년도 원서접수 시작`, date: start });
    }
    if (apiRow.시험일) {
      ms.push({ label: `${apiRow.연도}년도 필기시험`, date: apiRow.시험일 });
    }
    if (apiRow.합격자발표예정일) {
      ms.push({ label: `${apiRow.연도}년도 합격자 발표`, date: apiRow.합격자발표예정일 });
    }
    return ms;
  },

  // CERTIFICATIONS 데이터를 API 실데이터로 업데이트
  async applyToCertifications() {
    if (typeof CERTIFICATIONS === 'undefined') return;

    const schedules = await this.getLatestSchedules();
    let updatedCount = 0;

    for (const [certKey, apiRow] of Object.entries(schedules)) {
      const cert = CERTIFICATIONS[certKey];
      if (!cert) continue;

      const newScheduleRow = this.toScheduleRow(apiRow);
      const newMilestones = this.toMilestones(apiRow);

      // 기존 schedules에서 같은 연도 항목 교체 또는 추가
      const existing = cert.schedules || [];
      const idx = existing.findIndex(s => s.round === newScheduleRow.round);
      if (idx >= 0) {
        existing[idx] = newScheduleRow;
      } else {
        // 최신 연도이면 앞에 추가
        existing.unshift(newScheduleRow);
      }

      // 이전 항목 모두 isDone=true, isCurrent=false 처리
      existing.forEach((s, i) => {
        if (s.round !== newScheduleRow.round) {
          s.isDone = true;
          s.isCurrent = false;
        }
      });

      cert.schedules = existing;
      cert.milestones = newMilestones;

      // passRateSummary에 시험일 표기 (필기만 있는 경우)
      if (!cert.passRateSummary.includes('실기')) {
        cert._latestExamDate = apiRow.시험일;
      }

      updatedCount++;
    }

    console.log(`[국시원 API] ${updatedCount}개 자격증 시험일정 업데이트 완료`);
    return updatedCount;
  }
};

// 페이지 로드 시 자동 실행
document.addEventListener('DOMContentLoaded', () => {
  KUKSIWON_API.applyToCertifications().then(count => {
    if (count > 0 && typeof renderAll === 'function') {
      // 현재 선택된 자격증이 의료·보건 카테고리면 재렌더링
      const current = typeof STATE !== 'undefined' ? STATE.currentCert : null;
      if (current && CERTIFICATIONS[current]?.category === '의료·보건') {
        renderAll();
      }
    }
  });
});
