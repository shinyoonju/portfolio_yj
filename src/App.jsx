import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Info from "./components/Info";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import MiniProjects from "./components/personal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
    // App.jsx 최상단 useEffect 안에 넣기

    useEffect(() => {
       // createBubbles();
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);

        revealOnScroll();

        const scrollHandler = () => {
            updateProgressBar();
            updateNavbar();
            revealOnScroll();
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <>
            <div id="progressBar" className="progress-bar"></div>
         {/*   <div id="bgAnimation" className="bg-animation"></div>*/}

            <Navbar />

            <div className="layout">
                <Hero />
                <About />
                <Info />
                <Skills />
                <Experience />
                <MiniProjects />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

/* ---------------------- JavaScript Functions ---------------------- */

function createBubbles() {
    const bgAnimation = document.getElementById("bgAnimation");
    if (!bgAnimation) return;

    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        const size = Math.random() * 60 + 20;
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";
        bubble.style.left = Math.random() * 100 + "%";
        bubble.style.animationDuration = Math.random() * 10 + 10 + "s";
        bubble.style.animationDelay = Math.random() * 5 + "s";
        bgAnimation.appendChild(bubble);
    }
}

function updateProgressBar() {
    const winScroll = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

function updateNavbar() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
}

function revealOnScroll() {
    const cards = document.querySelectorAll(".card, .project-card, .info-item");
    cards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}
