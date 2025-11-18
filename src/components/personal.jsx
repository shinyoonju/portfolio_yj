import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiOracle, SiNodedotjs } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function MiniProjects() {
    // 기술 스택 아이콘 매핑
    const badgeMap = {
        Java: { icon: <FaJava size={16} />, color: "#f89820", text: "#000" },
        React: { icon: <FaReact size={16} />, color: "#61DAFB", text: "#000" },
        JavaScript: { icon: <SiJavascript size={16} />, color: "#F7DF1E", text: "#000" },
        NodeJS: { icon: <SiNodedotjs size={16} />, color: "#3C873A" },
        Oracle: { icon: <SiOracle size={16} />, color: "#F80000" },
        JSP: { icon: <IoDocumentTextOutline size={16} />, color: "#0085D1" },
        Etc: { icon: <IoDocumentTextOutline size={16} />, color: "#555" },
    };

    // 미니프로젝트 목록
    const projects = [
        {
            title: "가계부 웹사이트",
            description: "수입/지출 관리, 통계 차트, 사용자 UI 인터랙션 연습용 프로젝트",
            stack: ["React", "JavaScript"],
            github: "https://github.com/your-id/account-book",
        },
        {
            title: "간단한 게시판 CRUD 예제",
            description: "JSP 기반 CRUD 구현으로 백엔드 로직 학습",
            stack: ["JSP", "Java", "Oracle"],
            github: "https://github.com/your-id/jsp-board",
        },
        {
            title: "Node.js API 테스트 서버",
            description: "Node.js + Express 기반 API 통신 테스트용 서버 개발",
            stack: ["NodeJS", "JavaScript"],
            github: "",
        }
    ];

    return (
        <section id="personal" className="section">
            <h3 className="section-title">Mini Projects</h3>

            <div className="project-grid">
                {projects.map((p, i) => (
                    <div key={i} className="project-card">
                        <h4>📌 {p.title}</h4>
                        <p style={{ marginTop: "10px", lineHeight: "1.6" }}>{p.description}</p>

                        <div className="project-stack-badges">
                            {p.stack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="badge icon-badge"
                                    style={{
                                        backgroundColor: badgeMap[tech].color,
                                        color: badgeMap[tech].text || "#fff",
                                    }}
                                >
                  {badgeMap[tech].icon}
                                    <span className="badge-label">{tech}</span>
                </span>
                            ))}
                        </div>

                        {p.github && (
                            <a
                                href={p.github}
                                target="_blank"
                                className="github-link"
                            >
                                <FaGithub size={18} />
                                <span>GitHub Repo</span>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
