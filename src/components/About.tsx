import React from 'react';
import '../styles/About.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Mishti, a passionate student developer currently focused on building my foundation in web development 
              and computer science. I'm on a journey to master the core technologies of modern web development.
            </p>
            <p>
              My goal is to become proficient in both frontend and backend technologies. I enjoy the process of 
              learning and applying new concepts to create functional and visually appealing web applications.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, solving algorithm problems, and continually 
              expanding my knowledge in the ever-evolving field of web development.
            </p>
          </div>
          
          <div className="skills">
            <h3>Skills I'm Learning</h3>
            <div className="skills-container">
              <div className="skill-card">
                <FaHtml5 className="skill-icon html" />
                <h4>HTML</h4>
                <p>Building the structure of web pages with semantic HTML5 elements.</p>
              </div>
              
              <div className="skill-card">
                <FaCss3Alt className="skill-icon css" />
                <h4>CSS</h4>
                <p>Styling web pages with CSS3, including Flexbox and Grid layouts.</p>
              </div>
              
              <div className="skill-card">
                <FaJs className="skill-icon js" />
                <h4>JavaScript</h4>
                <p>Adding interactivity to websites with modern JavaScript (ES6+).</p>
              </div>
              
              <div className="skill-card">
                <FaReact className="skill-icon react" />
                <h4>React</h4>
                <p>Building user interfaces with React's component-based architecture.</p>
              </div>
              
              <div className="skill-card">
                <FaCode className="skill-icon dsa" />
                <h4>DSA</h4>
                <p>Learning data structures and algorithms to write efficient code.</p>
              </div>
            </div>
          </div>
          
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Computer Science</h4>
              <p>Rishihood University, Delhi</p>
              <p>Currently pursuing my degree with a focus on web development and software engineering.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 