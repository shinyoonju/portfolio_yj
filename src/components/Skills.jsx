import {
    FaReact,
    FaJava,
    FaGithub,
} from "react-icons/fa";
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
            { name: "React", icon: <FaReact size={20} />, color: "#61DAFB" },
            { name: "JavaScript", icon: <SiJavascript size={20} />, color: "#F7DF1E", text: "#000" },
            { name: "jQuery", icon: <SiJquery size={20} />, color: "#0769AD" },
            { name: "Nexacro", color: "#3A4CA8" },
            { name: "JSP", icon: <IoDocumentTextOutline size={20} />, color: "#0085D1" },
        ],
        Backend: [
            { name: "Java", icon: <FaJava size={20} />, color: "#f89820", text: "#000" },
            { name: "Spring", icon: <SiSpring size={20} />, color: "#6DB33F" },
            { name: "Node.js", icon: <SiNodedotjs size={20} />, color: "#3C873A" },
        ],
        Database: [
            { name: "Oracle", icon: <SiOracle size={20} />, color: "#F80000" },
            { name: "MyBatis", icon: <IoDocumentTextOutline size={20} />, color: "#006600" },
        ],
        Tools: [
            { name: "GitHub", icon: <FaGithub size={20} />, color: "#F1502F" },
            { name: "SVN", color: "#333" },
            { name: "Clip Report", icon: <IoDocumentTextOutline size={20} />, color: "#6633FF" },
            { name: "Tomcat", icon: <SiApachetomcat size={20} />, color: "#F8DC75", text: "#000" },
        ],
    };

    return (
        <section id="skills" className="section">
            <h3 className="section-title">Tech Stack</h3>

            <div className="card">
                {Object.entries(categories).map(([category, items]) => (

                        <div className="badge-grid">
                            {items.map((skill, index) => (
                                <span
                                    key={index}
                                    className="badge icon-badge"
                                    style={{
                                        backgroundColor: skill.color,
                                        color: skill.text || "#fff",
                                    }}
                                >
                  {skill.icon}
                                    <span className="badge-label">{skill.name}</span>
                </span>
                            ))}
                        </div>
                ))}
            </div>
        </section>
    );
}
