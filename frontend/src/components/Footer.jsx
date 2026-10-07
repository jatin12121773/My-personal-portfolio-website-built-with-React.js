import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2>Jatin Mehra</h2>

        <p>MERN Stack Developer</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-links">
          <a href="https://github.com/jatin12121773" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/jatin-mehra-3a0b21309/?isSelfProfile=true" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=Jatinmehra7665@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
        </div>

        <p className="copyright">
          © 2026 Jatin Mehra. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;