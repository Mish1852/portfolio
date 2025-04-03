import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-intro">Hello, I'm</p>
          <h1 className="hero-title">Mishti Sharma</h1>
          <p className="hero-subtitle">
            A <span className="highlight">student developer</span> passionate about learning web technologies and algorithms. Currently focusing on HTML, CSS, JavaScript, React, and DSA.
          </p>
          
          <div className="hero-btns">
            <a href="#projects" className="hero-btn hero-primary-btn">
              View My Work
            </a>
            <a href="#contact" className="hero-btn hero-secondary-btn">
              Contact Me
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        
        <div className="profile-image">
          <img src="/mishti-profile.jpg" alt="Mishti Sharma" />
        </div>
      </div>
      
      <a href="#about" className="scroll-down">
        <span>Scroll Down</span>
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Hero; 