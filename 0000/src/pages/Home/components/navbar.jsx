import { v4 as uuidv4 } from "uuid";
import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li key={uuidv4()}>
          <a>Home</a>
        </li>
        <li key={uuidv4()}>
          <a>About</a>
        </li>
        <li key={uuidv4()}>
          <a>Skills</a>
        </li>
        <li key={uuidv4()}>
          <a>Projects</a>
        </li>
        <li key={uuidv4()}>
          <a>Tesimonials</a>
        </li>
        <li key={uuidv4()}>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
