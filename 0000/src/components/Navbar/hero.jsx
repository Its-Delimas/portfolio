import "./hero.css";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-text">
        <div className="intoduction">
          <h1>
            Hello, I'm a <br />
            <span>Full stack Developer</span>
          </h1>
        </div>
        <div>
          <p className="hero-paragraph">
            I build software with a focus on clarity, perfomance, and long-term
            maintainability ***cleaner and sharper every iteration***. I'm
            always aiming for craftsmanship, and another project is another step
            towards becoming the kind of developer who ships things that
            actually matter.
          </p>
        </div>
        <div>
          <button className="cta">PROJECTS</button>
        </div>
      </div>
    </header>
  );
}
export default Hero;
