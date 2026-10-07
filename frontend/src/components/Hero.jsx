import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>

        <h1>Jatin Mehra</h1>

        <h2>MERN Stack Developer</h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web applications
          using React, Node.js, Express.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;