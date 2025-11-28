import "./navbar.css";

function Navbar() {
  return (
    <div className="Nav-menu">
      <div className="logo">
        <h3>
          SPE<span>N</span>CER
        </h3>
      </div>
      <div>
        <ul className="Navbar">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#Contact Me">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="toggle-theme">
        <button className="button">☀️</button>
      </div>
    </div>
  );
}

export default Navbar;
