import "./Services.css";

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I create modern, responsive and user-friendly websites for businesses and individuals.",
    },
    {
      title: "React Development",
      description:
        "I build interactive and responsive web interfaces using React.js.",
    },
    {
      title: "Full Stack Development",
      description:
        "I develop complete web applications using React, Node.js, Express.js and MongoDB.",
    },
    {
      title: "Website Maintenance",
      description:
        "I can fix bugs, improve existing websites and add new features when required.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">

        <p className="section-subtitle">What I Do</p>

        <h2>My Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;