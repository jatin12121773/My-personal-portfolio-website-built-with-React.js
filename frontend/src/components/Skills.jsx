import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <p className="section-subtitle">My Skills</p>

        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;