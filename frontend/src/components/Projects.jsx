import "./Projects.css";
import dentalImage from "../assets/dental.png";
import gymImage from "../assets/gym.png";
import medicareImage from "../assets/medicare.png";

function Projects() {
  const projects = [
    {
      title: "Dental Clinic Website",
      description:
        "A modern and responsive dental clinic website with a clean interface for showcasing dental services, doctors and appointment information.",
      tech: "React.js, JavaScript, Node.js, Express.js, MongoDB",
      image: dentalImage,
      live: "https://medcare-phi-smoky.vercel.app/ ",
    },
    {
      title: "Gym Landing Page",
      description:
        "A modern and responsive gym landing page designed to showcase fitness programs, trainers, membership plans and contact information.",
      tech: "HTML, CSS, JavaScript, Bootstrap, React.js",
      image: gymImage,
      live: "https://gym-om41t3vj9-jatin12121773s-projects.vercel.app/",
    },
    {
      title: "Medicare Full Stack Website",
      description:
        "A full-stack healthcare website with authentication, doctor management, appointment booking and interactive user dashboards.",
      tech: "React.js, Node.js, Express.js, MongoDB",
      image: medicareImage,
      live: "https://clinic-management-system-fk1l.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <p className="section-subtitle">My Work</p>

        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span>{project.tech}</span>

                <div className="project-buttons">

                  <a
                    href={project.live}
                    className="project-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/jatin12121773"
                    className="project-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;