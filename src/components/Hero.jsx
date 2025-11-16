export default function Hero() {
    return (
        <section className="hero" id="top">
            <p className="hero-greeting">👋 Hello world!</p>
            <h2>
                안녕하세요, 웹 개발자
                <br />
                신윤주입니다
            </h2>
            <p className="hero-subtitle">문제를 해결하고 성장하는 개발자</p>
            <button
                className="cta-button"
                onClick={() =>
                    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                }
            >
                연락하기
            </button>
        </section>
    );
}
