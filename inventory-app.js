// IT Technical Exam Prep Books Dataset (Mock / Reference-based)
const examBooksData = [
    {
        id: "BK-001",
        title: "[절판] 2023 시나공 정보처리기사 필기 (기본서)",
        author: "강윤철, 김용갑, 김우경, 김정준",
        publisher: "길벗",
        pubDate: "2022-10-18",
        price: 38000,
        isbn: "9791140701605",
        certification: "정보처리기사",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791140701605",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791140701605",
        revised: {
            title: "2025 시나공 정보처리기사 필기 (기본서)",
            author: "강윤철, 김용갑, 김정준, 이지현",
            publisher: "길벗",
            pubDate: "2024-10-25",
            price: 42000,
            isbn: "9791140711901",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791140711901",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791140711901"
        }
    },
    {
        id: "BK-002",
        title: "[절판] 2022 이기적 정보보안기사 필기 이론서+기출문제",
        author: "임호진, 웹스미디어 편집부",
        publisher: "영진닷컴",
        pubDate: "2022-01-05",
        price: 36000,
        isbn: "9788931466027",
        certification: "정보보안기사",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9788931466027",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9788931466027",
        revised: {
            title: "2025 이기적 정보보안기사 필기 이론서+기출문제",
            author: "임호진, 영진전문연구소",
            publisher: "영진닷컴",
            pubDate: "2024-11-20",
            price: 39000,
            isbn: "9788931471014",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9788931471014",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9788931471014"
        }
    },
    {
        id: "BK-003",
        title: "[절판] SQL 전문가 가이드 (2020 개정판)",
        author: "한국데이터산업진흥원 편집부",
        publisher: "한국데이터산업진흥원",
        pubDate: "2020-03-30",
        price: 50000,
        isbn: "9791188070275",
        certification: "SQLP",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791188070275",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791188070275",
        revised: {
            title: "SQL 전문가 가이드 (2024 개정판)",
            author: "한국데이터산업진흥원 편집부",
            publisher: "한국데이터산업진흥원",
            pubDate: "2024-02-15",
            price: 50000,
            isbn: "9791188070442",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791188070442",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791188070442"
        }
    },
    {
        id: "BK-004",
        title: "[절판] 2023 유선배 SQL 개발자(SQLD) 과외노트",
        author: "민광근",
        publisher: "씽크존",
        pubDate: "2023-01-15",
        price: 24000,
        isbn: "9791186712399",
        certification: "SQLD",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791186712399",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791186712399",
        revised: {
            title: "2025 유선배 SQL 개발자(SQLD) 과외노트 (2024 개정 출제기준 반영)",
            author: "민광근",
            publisher: "씽크존",
            pubDate: "2024-12-10",
            price: 26000,
            isbn: "9791186712856",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791186712856",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791186712856"
        }
    },
    {
        id: "BK-005",
        title: "[절판] 2022 데이터분석 준전문가(ADsP) 한 권으로 끝내기",
        author: "김계철",
        publisher: "데이터에듀",
        pubDate: "2022-03-05",
        price: 28000,
        isbn: "9791197475146",
        certification: "ADsP",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791197475146",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791197475146",
        revised: {
            title: "2025 데이터분석 준전문가(ADsP) (2025 ADsP 시험 대비 개정판)",
            author: "윤종식",
            publisher: "데이터에듀",
            pubDate: "2024-11-30",
            price: 32000,
            isbn: "9791193241565",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791193241565",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791193241565"
        }
    },
    {
        id: "BK-006",
        title: "[절판] 2021 리눅스마스터 1급 기본서 (최신 기출문제 포함)",
        author: "정성재, 안재현",
        publisher: "성안당",
        pubDate: "2021-03-10",
        price: 35000,
        isbn: "9788931556940",
        certification: "리눅스마스터1급",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9788931556940",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9788931556940",
        revised: {
            title: "2024 리눅스마스터 1급 기본서 + 실기 기출 포함",
            author: "정성재",
            publisher: "성안당",
            pubDate: "2024-02-15",
            price: 38000,
            isbn: "9788931558234",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9788931558234",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9788931558234"
        }
    },
    {
        id: "BK-007",
        title: "[절판] AWS 공인 솔루션스 아키텍트 올인원 가이드 (어소시에이트)",
        author: "한승민",
        publisher: "한빛미디어",
        pubDate: "2021-06-28",
        price: 32000,
        isbn: "9791162244340",
        certification: "AWS Solutions Architect",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791162244340",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791162244340",
        revised: {
            title: "AWS 공인 솔루션스 아키텍트 올인원 가이드 [개정2판]",
            author: "한승민",
            publisher: "한빛미디어",
            pubDate: "2024-05-10",
            price: 35000,
            isbn: "9791169212212",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791169212212",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791169212212"
        }
    },
    {
        id: "BK-008",
        title: "[절판] 2022 수제비 정보처리기사 실기 (1, 2권 합본)",
        author: "NCS 정보처리연구회 (윤영빈, 서현아, 이호성 등)",
        publisher: "건기원",
        pubDate: "2022-02-10",
        price: 39000,
        isbn: "9791157676645",
        certification: "정보처리기사",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791157676645",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791157676645",
        revised: {
            title: "2025 수제비 정보처리기사 실기 (1, 2권 합본)",
            author: "NCS 정보처리연구회 (윤영빈, 이지은, 김학배)",
            publisher: "건기원",
            pubDate: "2024-12-05",
            price: 43000,
            isbn: "9791157678564",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791157678564",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791157678564"
        }
    },
    {
        id: "BK-009",
        title: "[절판] 2020 정보통신기사 필기 과년도 문제풀이",
        author: "정보통신교육원 편저",
        publisher: "세화",
        pubDate: "2020-01-15",
        price: 30000,
        isbn: "9788931709926",
        certification: "정보통신기사",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9788931709926",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9788931709926",
        revised: null // Discontinued due to major exam syllabus change in 2022
    },
    {
        id: "BK-010",
        title: "[절판] 2019 사무자동화산업기사 필기 30일 합격 완성",
        author: "사무자동화 시험연구소",
        publisher: "영진닷컴",
        pubDate: "2019-02-10",
        price: 21000,
        isbn: "9788931458824",
        certification: "사무자동화산업기사",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9788931458824",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9788931458824",
        revised: null // Discontinued due to declining demand of the certification
    },
    {
        id: "BK-011",
        title: "[절판] 2023 에듀윌 정보처리기사 필기 3주 완성",
        author: "신혜성, 에듀윌 IT전문 수험연구소",
        publisher: "에듀윌",
        pubDate: "2023-02-25",
        price: 29000,
        isbn: "9791136024103",
        certification: "정보처리기사",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791136024103",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791136024103",
        revised: {
            title: "2025 에듀윌 정보처리기사 필기 3주 완성 단기합격",
            author: "신혜성, 에듀윌 IT 전문연구원",
            publisher: "에듀윌",
            pubDate: "2024-11-15",
            price: 33000,
            isbn: "9791136035017",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791136035017",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791136035017"
        }
    },
    {
        id: "BK-012",
        title: "[절판] 2022 이기적 네트워크관리사 2급 필기 (이론+기출)",
        author: "안정근, 영진전문연구소",
        publisher: "영진닷컴",
        pubDate: "2022-03-20",
        price: 25000,
        isbn: "9788931466850",
        certification: "네트워크관리사2급",
        status: "out_of_print",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9788931466850",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9788931466850",
        revised: {
            title: "2025 이기적 네트워크관리사 1·2급 필기 종합본",
            author: "안정근, 영진전문연구소",
            publisher: "영진닷컴",
            pubDate: "2024-10-15",
            price: 28000,
            isbn: "9788931470727",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9788931470727",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9788931470727"
        }
    }
    ,
    {
        id: "BK-013",
        title: "2024 시나공 정보처리기사 필기 (기본서)",
        author: "강윤철, 김용갑, 김정준, 이지현",
        publisher: "길벗",
        pubDate: "2024-01-10",
        price: 40000,
        isbn: "9791140706419",
        certification: "정보처리기사",
        status: "out_of_stock",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791140706419",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791140706419",
        revised: {
            title: "2025 시나공 정보처리기사 필기 (기본서)",
            author: "강윤철, 김용갑, 김정준, 이지현",
            publisher: "길벗",
            pubDate: "2024-10-25",
            price: 42000,
            isbn: "9791140711901",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791140711901",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791140711901"
        }
    },
    {
        id: "BK-014",
        title: "2024 이기적 SQLD 데이터베이스 개발자 자격증",
        author: "영진전문연구소",
        publisher: "영진닷컴",
        pubDate: "2024-02-05",
        price: 26000,
        isbn: "9788931469042",
        certification: "SQLD",
        status: "out_of_stock",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9788931469042",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9788931469042",
        revised: null
    },
    {
        id: "BK-015",
        title: "2023 수제비 정보처리기사 필기 합격 비밀노트",
        author: "NCS 정보처리연구회",
        publisher: "건기원",
        pubDate: "2023-03-15",
        price: 22000,
        isbn: "9791157677023",
        certification: "정보처리기사",
        status: "out_of_stock",
        kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791157677023",
        yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791157677023",
        revised: {
            title: "2025 수제비 정보처리기사 필기 합격 비밀노트",
            author: "NCS 정보처리연구회",
            publisher: "건기원",
            pubDate: "2024-11-10",
            price: 24000,
            isbn: "9791157678571",
            kyoboUrl: "https://search.kyobobook.co.kr/search?keyword=9791157678571",
            yes24Url: "https://www.yes24.com/Product/Search?domain=ALL&query=9791157678571"
        }
    }
];

let _invInit = false;

window.initInventoryApp = function() {
    if (_invInit) return;
    _invInit = true;

    // Active State
    let currentBooks = [...examBooksData];

    // Dom Elements
    const booksContainer = document.getElementById("booksContainer");
    const compareModal = document.getElementById("compareModal");
    const btnMinClose = document.getElementById("btnMinClose");
    const modalOrigTitle = document.getElementById("modalOrigTitle");
    const modalOrigAuthor = document.getElementById("modalOrigAuthor");
    const modalOrigPublisher = document.getElementById("modalOrigPublisher");
    const modalOrigDate = document.getElementById("modalOrigDate");
    const modalOrigPrice = document.getElementById("modalOrigPrice");
    const modalOrigIsbn = document.getElementById("modalOrigIsbn");
    const modalOrigKyobo = document.getElementById("modalOrigKyobo");
    const modalOrigYes24 = document.getElementById("modalOrigYes24");
    const modalRevisedCard = document.getElementById("modalRevisedCard");
    const modalNoRevisedCard = document.getElementById("modalNoRevisedCard");
    const modalRevTitle = document.getElementById("modalRevTitle");
    const modalRevAuthor = document.getElementById("modalRevAuthor");
    const modalRevPublisher = document.getElementById("modalRevPublisher");
    const modalRevDate = document.getElementById("modalRevDate");
    const modalRevPrice = document.getElementById("modalRevPrice");
    const modalRevIsbn = document.getElementById("modalRevIsbn");
    const modalRevKyobo = document.getElementById("modalRevKyobo");
    const modalRevYes24 = document.getElementById("modalRevYes24");
    const exportToast = document.getElementById("exportToast");
    const invPanel = document.getElementById("inventory-panel");

    // Upload Analyzer DOM
    const uploadZone     = document.getElementById("uploadZone");
    const excelUpload    = document.getElementById("excelUpload");
    const uploadResults  = document.getElementById("uploadResults");
    const uploadSummary  = document.getElementById("uploadSummary");
    const uploadTableBody = document.getElementById("uploadTableBody");
    const btnExportFiltered = document.getElementById("btnExportFiltered");
    const analyzerToggle = document.getElementById("analyzerToggle");
    const analyzerBody   = document.getElementById("analyzerBody");
    const analyzerChevron = document.getElementById("analyzerChevron");

    let analyzedRows = [];
    let filterTag = "all";

    function formatAsOfDate() {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, "0");
        const d = String(now.getDate()).padStart(2, "0");
        return `(${y}년${m}월${d}일 기준)`;
    }

    // 통계 카드 숫자 카운팅 애니메이션 (현재 표시값 -> 목표값)
    function animateStatValue(el, endValue, format) {
        if (!el) return;
        format = format || (n => n.toLocaleString());
        const startValue = parseInt(String(el.textContent).replace(/[^0-9]/g, ""), 10) || 0;
        if (startValue === endValue) { el.textContent = format(endValue); return; }
        const duration = 500;
        const startTime = performance.now();
        function step(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(startValue + (endValue - startValue) * eased);
            el.textContent = format(current);
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // 수험서 종·권수 보유 현황 (국가기술/국가전문/민간 자격 분류별, REAL_BOOKS 기준 실시간 집계)
    function updateTitleVolumeStats() {
        if (typeof REAL_BOOKS === "undefined") return;
        function certType(name) {
            if (typeof PRIVATE_CERT_NAMES !== "undefined" && PRIVATE_CERT_NAMES.has(name)) return "private";
            if (typeof PROFESSIONAL_CERT_NAMES !== "undefined" && PROFESSIONAL_CERT_NAMES.has(name)) return "pro";
            return "tech";
        }
        const counts = {
            tech:    { titles: new Set(), volumes: 0 },
            pro:     { titles: new Set(), volumes: 0 },
            private: { titles: new Set(), volumes: 0 },
        };
        for (const cert of Object.keys(REAL_BOOKS)) {
            const type = certType(cert);
            for (const book of REAL_BOOKS[cert]) {
                counts[type].titles.add(book.title);
                counts[type].volumes += 1;
            }
        }
        const allTitles = new Set([...counts.tech.titles, ...counts.pro.titles, ...counts.private.titles]);
        const allVolumes = counts.tech.volumes + counts.pro.volumes + counts.private.volumes;

        const setStat = (prefix, titleSet, volumes) => {
            const titleEl = document.getElementById(`stat${prefix}TitleCount`);
            const descEl  = document.getElementById(`stat${prefix}Desc`);
            animateStatValue(titleEl, titleSet.size);
            animateStatValue(descEl, volumes, n => `총 ${n.toLocaleString()}권 보유`);
        };
        setStat("Tech", counts.tech.titles, counts.tech.volumes);
        setStat("Pro", counts.pro.titles, counts.pro.volumes);
        setStat("Priv", counts.private.titles, counts.private.volumes);
        setStat("All", allTitles, allVolumes);

        const updatedEl = document.getElementById("inv-title-count-updated");
        if (updatedEl) updatedEl.textContent = formatAsOfDate();
    }

    // 수험서 종·권수 보유 현황 엑셀 내보내기 (분류별 요약 + 자격증별 상세)
    function exportTitleVolumeStats() {
        if (typeof REAL_BOOKS === "undefined") return;
        function certType(name) {
            if (typeof PRIVATE_CERT_NAMES !== "undefined" && PRIVATE_CERT_NAMES.has(name)) return "민간자격";
            if (typeof PROFESSIONAL_CERT_NAMES !== "undefined" && PROFESSIONAL_CERT_NAMES.has(name)) return "국가전문자격";
            return "국가기술자격";
        }
        const detailRows = [["분류", "자격증명", "종수", "권수"]];
        const summary = { "국가기술자격": { titles: 0, volumes: 0 }, "국가전문자격": { titles: 0, volumes: 0 }, "민간자격": { titles: 0, volumes: 0 } };
        for (const cert of Object.keys(REAL_BOOKS)) {
            const type = certType(cert);
            const titleSet = new Set(REAL_BOOKS[cert].map(b => b.title));
            const volumes = REAL_BOOKS[cert].length;
            detailRows.push([type, cert, titleSet.size, volumes]);
            summary[type].titles += titleSet.size;
            summary[type].volumes += volumes;
        }
        const totalTitles = summary["국가기술자격"].titles + summary["국가전문자격"].titles + summary["민간자격"].titles;
        const totalVolumes = summary["국가기술자격"].volumes + summary["국가전문자격"].volumes + summary["민간자격"].volumes;
        const summaryRows = [
            ["분류", "종수", "권수"],
            ["국가기술자격", summary["국가기술자격"].titles, summary["국가기술자격"].volumes],
            ["국가전문자격", summary["국가전문자격"].titles, summary["국가전문자격"].volumes],
            ["민간자격", summary["민간자격"].titles, summary["민간자격"].volumes],
            ["전체 합계", totalTitles, totalVolumes],
        ];

        const wb = XLSX.utils.book_new();
        const wsSummary = XLSX.utils.aoa_to_sheet(summaryRows);
        wsSummary["!cols"] = [{ wch: 16 }, { wch: 10 }, { wch: 10 }];
        XLSX.utils.book_append_sheet(wb, wsSummary, "분류별_요약");

        const wsDetail = XLSX.utils.aoa_to_sheet(detailRows);
        wsDetail["!cols"] = [{ wch: 14 }, { wch: 28 }, { wch: 10 }, { wch: 10 }];
        XLSX.utils.book_append_sheet(wb, wsDetail, "자격증별_상세");

        const dateStamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        XLSX.writeFile(wb, `수험서_종권수_보유현황_${dateStamp}.xlsx`);
        showExportToast();
    }

    // 수험서 품.절판 현황 (절판/품절 종·권수, examBooksData 기준 실시간 집계)
    function updateOutOfPrintStats() {
        const groups = { out_of_print: new Set(), out_of_stock: new Set() };
        let oopVolumes = 0, oosVolumes = 0;
        examBooksData.forEach(b => {
            if (b.status === "out_of_print") { groups.out_of_print.add(b.title); oopVolumes++; }
            else if (b.status === "out_of_stock") { groups.out_of_stock.add(b.title); oosVolumes++; }
        });
        const allTitles = new Set([...groups.out_of_print, ...groups.out_of_stock]);
        const allVolumes = oopVolumes + oosVolumes;

        const setStat = (prefix, titleSet, volumes) => {
            const titleEl = document.getElementById(`stat${prefix}TitleCount`);
            const descEl  = document.getElementById(`stat${prefix}Desc`);
            animateStatValue(titleEl, titleSet.size);
            animateStatValue(descEl, volumes, n => `총 ${n.toLocaleString()}권`);
        };
        setStat("OOP", groups.out_of_print, oopVolumes);
        setStat("OOS", groups.out_of_stock, oosVolumes);
        setStat("OOPAll", allTitles, allVolumes);

        const updatedEl = document.getElementById("inv-outofprint-updated");
        if (updatedEl) updatedEl.textContent = formatAsOfDate();
    }

    // 수험서 품.절판 현황 엑셀 내보내기 (요약 + 도서별 상세)
    function exportOutOfPrintStats() {
        const oop = examBooksData.filter(b => b.status === "out_of_print");
        const oos = examBooksData.filter(b => b.status === "out_of_stock");
        const summaryRows = [
            ["구분", "종수", "권수"],
            ["절판", new Set(oop.map(b => b.title)).size, oop.length],
            ["품절", new Set(oos.map(b => b.title)).size, oos.length],
            ["합계", new Set(examBooksData.map(b => b.title)).size, examBooksData.length],
        ];
        const detailRows = [["구분", "도서명", "자격증", "출판사", "출판일", "정가", "ISBN", "개정판 유무"]];
        examBooksData.forEach(b => {
            detailRows.push([
                b.status === "out_of_print" ? "절판" : "품절",
                b.title, b.certification || "-", b.publisher, b.pubDate, b.price, b.isbn,
                b.revised ? "있음" : "없음"
            ]);
        });

        const wb = XLSX.utils.book_new();
        const wsSummary = XLSX.utils.aoa_to_sheet(summaryRows);
        wsSummary["!cols"] = [{ wch: 10 }, { wch: 10 }, { wch: 10 }];
        XLSX.utils.book_append_sheet(wb, wsSummary, "품절판_요약");

        const wsDetail = XLSX.utils.aoa_to_sheet(detailRows);
        wsDetail["!cols"] = [{ wch: 8 }, { wch: 40 }, { wch: 16 }, { wch: 14 }, { wch: 12 }, { wch: 10 }, { wch: 16 }, { wch: 10 }];
        XLSX.utils.book_append_sheet(wb, wsDetail, "도서별_상세");

        const dateStamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        XLSX.writeFile(wb, `수험서_품절판_현황_${dateStamp}.xlsx`);
        showExportToast();
    }

    function renderBooksList() {
        booksContainer.innerHTML = "";
        if (currentBooks.length === 0) {
            booksContainer.innerHTML = `<div class="empty-state"><i data-lucide="search-x"></i><p>등록된 도서가 없습니다.</p></div>`;
            lucide.createIcons();
            return;
        }
        currentBooks.forEach(book => {
            const row = document.createElement("div");
            row.className = "book-row-card";
            row.style.cursor = "pointer";
            const origPriceFormatted = book.price.toLocaleString() + "원";
            const origImgUrl = `https://books.google.com/books/content?vid=ISBN${book.isbn}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
            let revisedSectionHtml = "";
            if (book.revised) {
                const revPriceFormatted = book.revised.price.toLocaleString() + "원";
                const revImgUrl = `https://books.google.com/books/content?vid=ISBN${book.revised.isbn}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
                revisedSectionHtml = `
                    <div class="revised-info-box">
                        <div class="book-cover-wrapper">
                            <img class="book-cover-img" src="${revImgUrl}" alt="${book.revised.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                            <div class="book-cover-fallback" style="display:none"><i data-lucide="refresh-cw"></i></div>
                        </div>
                        <div class="book-title-meta">
                            <span class="badge badge-cyan">신버전</span>
                            <h4>${book.revised.title}</h4>
                            <div class="book-meta-inline"><span class="pub-name">${book.revised.publisher}</span> | ${book.revised.author}</div>
                            <div class="book-meta-details">출판: ${book.revised.pubDate} | 정가: ${revPriceFormatted} | ISBN: ${book.revised.isbn}</div>
                        </div>
                    </div>
                `;
            } else {
                revisedSectionHtml = `
                    <div class="revised-missing-alert">
                        <i data-lucide="info"></i>
                        <span>후속 개정 도서 정보가 없습니다. (완전 절판)</span>
                    </div>
                `;
            }
            row.innerHTML = `
                <div class="book-main-info" onclick="openComparison_inv('${book.id}')">
                    <div class="book-cover-wrapper">
                        <img class="book-cover-img" src="${origImgUrl}" alt="${book.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                        <div class="book-cover-fallback" style="display:none"><i data-lucide="book-lock"></i></div>
                    </div>
                    <div class="book-title-meta">
                        <span class="badge ${book.status === "out_of_stock" ? "badge-orange" : "badge-red"}">${book.status === "out_of_stock" ? "품절" : "절판"}</span>
                        <h4>${book.title}</h4>
                        <div class="book-meta-inline"><span class="pub-name">${book.publisher}</span> | ${book.author}</div>
                        <div class="book-meta-details">출판: ${book.pubDate} | 정가: ${origPriceFormatted} | ISBN: ${book.isbn}</div>
                    </div>
                </div>
                <div class="revised-status-badge" onclick="openComparison_inv('${book.id}')">
                    ${book.revised ? '<span class="badge badge-cyan">개정 완료</span>' : '<span class="badge badge-gray">폐간</span>'}
                </div>
                <div class="revised-cell-container" onclick="openComparison_inv('${book.id}')">
                    ${revisedSectionHtml}
                </div>
                <div class="store-comparison-links">
                    <a href="${book.kyoboUrl}" target="_blank" class="btn-comparison" title="교보문고에서 구버전 검색">
                        <span>교보문고</span><i data-lucide="shopping-bag"></i>
                    </a>
                    <a href="${book.yes24Url}" target="_blank" class="btn-comparison" title="YES24에서 구버전 검색">
                        <span>YES24</span><i data-lucide="shopping-bag"></i>
                    </a>
                    ${book.certification && (typeof CERTIFICATIONS === 'undefined' || CERTIFICATIONS[book.certification]) ? `<button class="btn-comparison btn-cert-link" onclick="goToCertDashboard('${book.certification.replace(/'/g,"\\'")}'); event.stopPropagation();" title="${book.certification} 대시보드로 이동">
                        <span>자격증 대시보드</span><i data-lucide="layout-dashboard"></i>
                    </button>` : ''}
                </div>
            `;
            booksContainer.appendChild(row);
        });
        lucide.createIcons();
    }

    window.openComparison_inv = function(bookId) {
        const book = examBooksData.find(b => b.id === bookId);
        if (!book) return;
        modalOrigTitle.textContent = book.title;
        modalOrigAuthor.textContent = book.author;
        modalOrigPublisher.textContent = book.publisher;
        modalOrigDate.textContent = book.pubDate;
        modalOrigPrice.textContent = book.price.toLocaleString() + "원";
        modalOrigIsbn.textContent = book.isbn;
        modalOrigKyobo.href = book.kyoboUrl;
        modalOrigYes24.href = book.yes24Url;
        if (book.revised) {
            modalRevisedCard.style.display = "flex";
            modalNoRevisedCard.style.display = "none";
            modalRevTitle.textContent = book.revised.title;
            modalRevAuthor.textContent = book.revised.author;
            modalRevPublisher.textContent = book.revised.publisher;
            modalRevDate.textContent = book.revised.pubDate;
            modalRevPrice.textContent = book.revised.price.toLocaleString() + "원";
            modalRevIsbn.textContent = book.revised.isbn;
            modalRevKyobo.href = book.revised.kyoboUrl;
            modalRevYes24.href = book.revised.yes24Url;
        } else {
            modalRevisedCard.style.display = "none";
            modalNoRevisedCard.style.display = "flex";
        }
        compareModal.classList.add("show");
    };

    function closeModal() { compareModal.classList.remove("show"); }

    function showExportToast() {
        exportToast.classList.add("show");
        setTimeout(() => exportToast.classList.remove("show"), 4000);
    }

    function processExcelFile(file) {
        const reader = new FileReader();
        reader.onload = e => {
            const wb = XLSX.read(e.target.result, { type: "array" });
            const ws = wb.Sheets[wb.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(ws, { defval: "" });
            analyzedRows = analyzeRows(rows);
            renderAnalyzerTable();
            uploadResults.style.display = "block";
            lucide.createIcons();
        };
        reader.readAsArrayBuffer(file);
    }

    const COL_ISBN   = ["isbn", "ISBN", "아이에스비엔", "국제표준도서번호"];
    const COL_TITLE  = ["title", "도서명", "책이름", "제목", "서명"];
    const COL_PUB    = ["publisher", "출판사", "발행처"];
    const COL_STATUS = ["status", "상태", "재고상태", "도서상태"];

    function findCol(row, candidates) {
        const keys = Object.keys(row);
        for (const c of candidates) { const found = keys.find(k => k.trim().toLowerCase() === c.toLowerCase()); if (found) return found; }
        return null;
    }

    function detectStatus(val) {
        const v = String(val).trim();
        if (/절판|out.?of.?print/i.test(v)) return "out_of_print";
        if (/품절|out.?of.?stock/i.test(v)) return "out_of_stock";
        return null;
    }

    function analyzeRows(rows) {
        if (rows.length === 0) return [];
        const sample = rows[0];
        const isbnCol = findCol(sample, COL_ISBN);
        const titleCol = findCol(sample, COL_TITLE);
        const pubCol = findCol(sample, COL_PUB);
        const statusCol = findCol(sample, COL_STATUS);
        return rows.map((row, i) => {
            const isbn  = isbnCol  ? String(row[isbnCol]).replace(/-/g, "").trim()  : "";
            const title = titleCol ? String(row[titleCol]).trim() : Object.values(row)[0] || "";
            const pub   = pubCol   ? String(row[pubCol]).trim()   : "";
            let status = null, basis = "";
            if (statusCol) { status = detectStatus(row[statusCol]); if (status) basis = "상태 컬럼"; }
            if (!status && isbn) { const dbBook = examBooksData.find(b => b.isbn === isbn || (b.revised && b.revised.isbn === isbn)); if (dbBook) { status = dbBook.status; basis = "ISBN DB 대조"; } }
            return { rowNum: i + 1, title, isbn, pub, status, basis };
        });
    }

    function renderAnalyzerTable() {
        const filtered = filterTag === "all"
            ? analyzedRows.filter(r => r.status === "out_of_print" || r.status === "out_of_stock")
            : analyzedRows.filter(r => r.status === filterTag);
        const total = analyzedRows.length;
        const oop = analyzedRows.filter(r => r.status === "out_of_print").length;
        const oos = analyzedRows.filter(r => r.status === "out_of_stock").length;
        uploadSummary.innerHTML = `전체 <strong>${total}</strong>건 분석 &nbsp;|&nbsp; <span class="badge badge-red">절판</span> <strong>${oop}</strong>건 &nbsp; <span class="badge badge-orange">품절</span> <strong>${oos}</strong>건`;
        if (filtered.length === 0) { uploadTableBody.innerHTML = `<div class="upload-empty">해당하는 도서가 없습니다.</div>`; return; }
        uploadTableBody.innerHTML = filtered.map(r => {
            const imgUrl = r.isbn ? `https://books.google.com/books/content?vid=ISBN${r.isbn}&printsec=frontcover&img=1&zoom=1&source=gbs_api` : "";
            const imgHtml = imgUrl ? `<div class="upload-card-cover"><img src="${imgUrl}" alt="${r.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="upload-cover-fallback" style="display:none"><i data-lucide="${r.status === "out_of_print" ? "book-x" : "book-minus"}"></i></div></div>` : `<div class="upload-card-cover"><div class="upload-cover-fallback" style="display:flex"><i data-lucide="book-x"></i></div></div>`;
            const badgeClass = r.status === "out_of_print" ? "badge-red" : "badge-orange";
            const badgeText  = r.status === "out_of_print" ? "절판" : "품절";
            const dbBook = r.isbn ? examBooksData.find(b => b.isbn === r.isbn || (b.revised && b.revised.isbn === r.isbn)) : null;
            const revisedHtml = dbBook && dbBook.revised ? `<div class="upload-card-revised"><i data-lucide="arrow-right"></i><span>개정판: ${dbBook.revised.title} (${dbBook.revised.pubDate.slice(0,4)})</span></div>` : "";
            return `<div class="upload-card">${imgHtml}<div class="upload-card-info"><div class="upload-card-top"><span class="badge ${badgeClass}">${badgeText}</span>${r.basis ? `<span class="upload-basis-tag">${r.basis}</span>` : ""}</div><h4 class="upload-card-title">${r.title || "제목 없음"}</h4><div class="upload-card-meta">${r.pub ? `<span>${r.pub}</span>` : ""}${r.isbn ? `<span class="upload-isbn">ISBN: ${r.isbn}</span>` : ""}</div>${revisedHtml}</div><div class="upload-card-num">#${r.rowNum}</div></div>`;
        }).join("");
        lucide.createIcons();
    }

    function exportFilteredResult() {
        const filtered = filterTag === "all" ? analyzedRows.filter(r => r.status === "out_of_print" || r.status === "out_of_stock") : analyzedRows.filter(r => r.status === filterTag);
        const wsData = [["#","도서명","ISBN","출판사","상태","판단 근거"], ...filtered.map(r => [r.rowNum,r.title,r.isbn,r.pub,r.status === "out_of_print" ? "절판" : "품절",r.basis])];
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        ws["!cols"] = [4,40,16,16,8,14].map(w => ({ wch: w }));
        XLSX.utils.book_append_sheet(wb, ws, "절판_품절_추출결과");
        const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        XLSX.writeFile(wb, `절판품절_추출결과_${stamp}.xlsx`);
        showExportToast();
    }

    // ── Initialization ─────────────────────────────
    updateTitleVolumeStats();
    updateOutOfPrintStats();
    renderBooksList();
    lucide.createIcons();

    const btnRefreshOutOfPrintStats = document.getElementById("btnRefreshOutOfPrintStats");
    if (btnRefreshOutOfPrintStats) {
        btnRefreshOutOfPrintStats.addEventListener("click", () => {
            updateOutOfPrintStats();
            lucide.createIcons();
        });
    }

    const btnRefreshTitleStats = document.getElementById("btnRefreshTitleStats");
    if (btnRefreshTitleStats) {
        btnRefreshTitleStats.addEventListener("click", () => {
            updateTitleVolumeStats();
            lucide.createIcons();
        });
    }

    const btnExportTitleStats = document.getElementById("btnExportTitleStats");
    if (btnExportTitleStats) btnExportTitleStats.addEventListener("click", exportTitleVolumeStats);

    const btnExportOutOfPrintStats = document.getElementById("btnExportOutOfPrintStats");
    if (btnExportOutOfPrintStats) btnExportOutOfPrintStats.addEventListener("click", exportOutOfPrintStats);

    btnMinClose.addEventListener("click", closeModal);
    compareModal.addEventListener("click", e => { if (e.target === compareModal) closeModal(); });

    analyzerToggle.addEventListener("click", () => {
        analyzerBody.classList.toggle("open");
        analyzerChevron.style.transform = analyzerBody.classList.contains("open") ? "rotate(180deg)" : "";
    });
    uploadZone.addEventListener("click", () => excelUpload.click());
    uploadZone.addEventListener("dragover", e => { e.preventDefault(); uploadZone.classList.add("drag-over"); });
    uploadZone.addEventListener("dragleave", () => uploadZone.classList.remove("drag-over"));
    uploadZone.addEventListener("drop", e => {
        e.preventDefault();
        uploadZone.classList.remove("drag-over");
        const file = e.dataTransfer.files[0];
        if (file) processExcelFile(file);
    });
    excelUpload.addEventListener("change", () => { if (excelUpload.files[0]) processExcelFile(excelUpload.files[0]); });

    invPanel.querySelectorAll(".btn-filter-tag").forEach(btn => {
        btn.addEventListener("click", () => {
            invPanel.querySelectorAll(".btn-filter-tag").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterTag = btn.dataset.filter;
            renderAnalyzerTable();
        });
    });
    btnExportFiltered.addEventListener("click", exportFilteredResult);
};