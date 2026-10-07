import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <h2>Jatin Mehra</h2>

      <div className={menu ? "nav-links active" : "nav-links"}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        {/* Mobile Resume */}
        {menu && (
          <a href="/JM%20CV.pdf" download className="mobile-resume">
            Download Resume
          </a>
        )}
      </div>

      {/* Desktop Resume */}
      <a href="/JM%20CV.pdf" download className="desktop-resume">
          Download Resume
      </a>

      {/* Mobile Toggle */}
      <button className="toggle" onClick={() => setMenu(!menu)}>
        {menu ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;