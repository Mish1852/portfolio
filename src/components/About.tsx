import "../styles/About.css";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js",
    "HTML5", "CSS3", "SASS", "Tailwind CSS",
    "MongoDB", "Express.js", "Next.js", "Redux",
    "Git", "RESTful APIs", "Responsive Design", "UI/UX Design"
  ];

  return (
    <section id="about" className="about-container">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">
          Learn more about my skills, experience, and what drives me as a developer.
        </p>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Hi there! I'm a <span className="about-highlight">Full Stack Web Developer</span> with a passion for creating beautiful, responsive, and user-friendly web applications.
              With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, elegant solutions.
            </p>
            
            <p className="about-description">
              My journey in web development began during my university days, and since then I've been continuously learning and improving my skills. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I'm always open to new challenges and opportunities to grow as a developer.
            </p>

            <div className="skills-container">
              <h3 className="skills-title">My Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image-container">
            <img
              src="/about-image.jpg"
              alt="About Me"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 