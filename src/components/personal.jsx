import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import {
    SiJavascript,
    SiOracle,
    SiNodedotjs,
    SiPython,
} from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function MiniProjects() {
    // 기술 스택 아이콘 매핑 (아이콘 컬러만 적용)
    const badgeMap = {
        Java: {
            icon: <FaJava size={16} />,
            iconColor: "#D8A35D",
        },
        React: {
            icon: <FaReact size={16} />,
            iconColor: "#7FBEDB",
        },
        JavaScript: {
            icon: <SiJavascript size={16} />,
            iconColor: "#E5C453",
        },
        NodeJS: {
            icon: <SiNodedotjs size={16} />,
            iconColor: "#86B98E",
        },
        Oracle: {
            icon: <SiOracle size={16} />,
            iconColor: "#D46A6A",
        },
        JSP: {
            icon: <IoDocumentTextOutline size={16} />,
            iconColor: "#7AA7C7",
        },
        Python: {
            icon: <SiPython size={16} />,
            iconColor: "#8FAFD6",
        },
        Etc: {
            icon: <IoDocumentTextOutline size={16} />,
            iconColor: "#9CA3AF",
        },
    };

    const projects = [
        {
            title: "실시간 경제 현황",
            description:
                "한국·미국 주요 지수 및 가상자산 정보를 실시간 API 기반으로 시각화하고, 최신 경제 뉴스를 함께 확인할 수 있는 대시보드",
            stack: ["JSP", "JavaScript", "Python", "Java"],
            github: "https://github.com/shinyoonju/economic",
        },
        {
            title: "간단한 게시판 CRUD 예제",
            description: "JSP 기반 게시판 CRUD 구현을 통한 서버 로직 학습",
            stack: ["JSP", "Java", "Oracle"],
            github: "https://github.com/your-id/jsp-board",
        },
        {
            title: "Node.js API 테스트 서버",
            description: "Node.js + Express 기반 API 통신 테스트용 서버",
            stack: ["NodeJS", "JavaScript"],
            github: "",
        },
    ];

    return (
        <section id="personal" className="section">
            <h3 className="section-title">Mini Projects</h3>

            <div className="project-grid">
                {projects.map((p) => (
                    <div key={p.title} className="project-card">
                        <h4 className="project-title">📌 {p.title}</h4>

                        <p className="project-desc">{p.description}</p>

                        <div className="project-stack-badges">
                            {p.stack.map((tech) => (
                                <span key={tech} className="badge icon-badge">
                  {badgeMap[tech]?.icon && (
                      <span
                          className="badge-icon"
                          style={{ color: badgeMap[tech].iconColor }}
                      >
                      {badgeMap[tech].icon}
                    </span>
                  )}
                                    <span className="badge-label">{tech}</span>
                </span>
                            ))}
                        </div>

                        {p.github && (
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
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
