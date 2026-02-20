import { useState, useEffect } from "react";
import "./ThemeToggle.css";

export default function Navbar() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
//localStorage ::  브라우저 안에 있는 작은 저장소(영구 저장되는 메모장) 페이지가 새로고침 되어도 데이터가 유지
    // 테마 변경
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <nav id="navbar" className="navbar">
            <div className="nav-container">
                <h1 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    YOONJU PORTFOLIO
                </h1>

                <div className="nav">
                    <a href="#about">About</a>
                    <a href="#info">Info</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    {/*  <a href="#personal">Side Projects</a>*/}
                    <a href="#contact">Contact</a>

                    {/* 🔥 다크모드 스위치 */}
                    <div className="toggle-wrapper">
                        <input
                            type="checkbox"
                            id="themeToggle"
                            className="toggle-switch"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                        />
                        <label htmlFor="themeToggle" className="switch-label"></label>
                    </div>
                </div>
            </div>
        </nav>

    );
}
