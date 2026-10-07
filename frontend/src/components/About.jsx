import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-content">
          <p className="section-subtitle">About Me</p>

          <h2>I'm a MERN Stack Developer</h2>

          <p>
            I am a passionate web developer focused on building modern,
            responsive and user-friendly web applications.
          </p>

          <p>
            I work with React, Node.js, Express.js and MongoDB to create
            full-stack applications. I enjoy solving problems, learning
            new technologies and turning ideas into functional websites.
          </p>

          <a href="#contact" className="about-btn">
            Let's Connect
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;