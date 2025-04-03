import '../styles/Hero.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 hero-content">
            <h1 className="hero-title" data-text="Hi, I'm Mishti Sharma">
              Hi, I'm <span className="highlight">Mishti Sharma</span>
            </h1>
            <p className="hero-subtitle">
              A passionate Full Stack Developer crafting immersive digital experiences and cutting-edge web applications with creativity and technical precision.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="mailto:mr.mishti.95@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="col-lg-6 hero-image-container">
            <div className="profile-image">
              <img src="/profile.jpg" alt="Mishti Sharma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 