import { FaReact, FaJava, FaGithub } from "react-icons/fa";
import {
    SiJavascript,
    SiJquery,
    SiOracle,
    SiSpring,
    SiApachetomcat,
    SiNodedotjs,
} from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Skills() {
    const categories = {
        Frontend: [
            {
                name: "JavaScript",
                icon: <SiJavascript size={18} />,
                iconColor: "#E5C453",
            },
            {
                name: "jQuery",
                icon: <SiJquery size={18} />,
                iconColor: "#7AA7C7",
            },
            { name: "Nexacro" },
            {
                name: "React",
                icon: <FaReact size={18} />,
                iconColor: "#7FBEDB",
            },
        ],
        Backend: [
            {
                name: "Java",
                icon: <FaJava size={18} />,
                iconColor: "#D8A35D",
            },
            {
                name: "Spring",
                icon: <SiSpring size={18} />,
                iconColor: "#8FBF7A",
            },
            {
                name: "Node.js",
                icon: <SiNodedotjs size={18} />,
                iconColor: "#86B98E",
            },
        ],
        Database: [
            {
                name: "Oracle",
                icon: <SiOracle size={18} />,
                iconColor: "#D46A6A",
            },
            {
                name: "MyBatis",
                icon: <IoDocumentTextOutline size={18} />,
                iconColor: "#9CA3AF",
            },
        ],
        Tools: [
            {
                name: "GitHub",
                icon: <FaGithub size={18} />,
                iconColor: "#9CA3AF",
            },
            { name: "SVN" },
            {
                name: "Clip Report",
                icon: <IoDocumentTextOutline size={18} />,
                iconColor: "#A78BFA",
            },
            {
                name: "Tomcat",
                icon: <SiApachetomcat size={18} />,
                iconColor: "#D6C27A",
            },
        ],
    };

    return (
        <section id="skills" className="section">
            <h3 className="section-title">Skills</h3>

            <div className="card">
                {Object.entries(categories).map(([category, items]) => (
                    <div key={category} className="category-section">
                        <h4 className="category-title">{category}</h4>

                        <div className="badge-grid">
                            {items.map((skill) => (
                                <span key={skill.name} className="badge icon-badge">
                  {skill.icon && (
                      <span
                          className="badge-icon"
                          style={{ color: skill.iconColor || "inherit" }}
                      >
                      {skill.icon}
                    </span>
                  )}
                                    <span className="badge-label">{skill.name}</span>
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
