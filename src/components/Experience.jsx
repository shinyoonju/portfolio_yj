export default function Experience() {
    const projects = [
        {
            title: "디지털의료기기 통합정보시스템 개선",
            client: "식품의약품안전처",
            date: "2024.12 ~ 2025.11",
            desc: "응용 SW 개발 · 기능 개선 · 화면 로직 보완 ·프로시저 및 디비 잡 개선 및 생성 · 디지털의료기기 민원신청 화면 개발 ",
            url : "https://emedi.mfds.go.kr/msismext/emd/min/mainView.do",
            urlNm : "의료기기 전자 민원 창구",
        },
        {
            title: "식품안전 디지털 유통망",
            client: "식품의약품안전처",
            date: "2024.02 ~ 2024.12",
            desc: " 수어영상 · 마이페이지 및 현황 조회 · 식품정보 등록 화면(내부/외부) 개발",
            url: "https://portal.foodqr.kr/",
            urlNm : "푸드QR 실시간식품정보 확인 서비스",

        },
        {
            title: "차세대 의료기기 전주기 통합서비스 고도화",
            client: "식품의약품안전처",
            date: "2023.09 ~ 2024.02",
            desc: "기능 고도화 · 기존 로직 개선 ",
            url :"https://emedi.mfds.go.kr/msismext/emd/min/mainView.do",
            urlNm : "의료기기 전자 민원 창구",
        },
        {
            title: "의료기기 전주기 통합서비스 구축",
            client: "식품의약품안전처",
            date: "2022.02 ~ 2023.05",
            desc: "신규 화면 개발 · CRUD 구현 · report 허가증 · 데이터 처리 로직 구성",
            url : "https://emedi.mfds.go.kr/msismext/emd/min/mainView.do",
            urlNm : "의료기기 전자 민원 창구",
        },
        {
            title: "전문경력인사초빙활용관리시스템 고도화",
            client: "한국연구재단",
            date: "2020.06 ~ 2020.08",
            desc: "기능 고도화 · 화면 수정",
            url:"-",
            urlNm : "-",
        },
        {
            title: "대학 재정지원사업 종합정보시스템 고도화",
            client: "한국연구재단",
            date: "2019.12 ~ 2020.06",
            desc: "화면 개발 · 시스템 안정화",
            url :"-",
            urlNm : "-",
        },
    ];

    return (
        <section id="experience" className="section">
            <h3 className="section-title">Project Experience</h3>

            <div className="project-grid">
                {projects.map((p, idx) => (
                    <div className="project-card" key={idx}>
                        <h4>👩‍💻 {p.title}</h4>
                        <p >{p.client}</p>
                        <p className="project-date">{p.date}</p>
                        <p>{p.desc}</p>
                        <br/>
                        {p.url && p.url !== "-" && (
                            <span>홈페이지 : <a href={p.url}>{p.urlNm}</a></span>
                        )}

                    </div>
                ))}
            </div>
        </section>
    );
}
