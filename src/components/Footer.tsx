import React from 'react';
import "../styles/Footer.css";
import { FaLinkedin, FaGithub, FaTwitter, FaCodepen, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h3 className="footer-title">About Me</h3>
            <p className="footer-text">
              A passionate full-stack developer specializing in creating innovative digital experiences with modern technologies.
            </p>
            <div className="footer-info">
              <p><FaEnvelope className="footer-icon" /> mishti.sharma@gmail.com</p>
              <p><FaMapMarkerAlt className="footer-icon" /> San Francisco Bay Area, CA</p>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Technologies</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">React.js</a></li>
              <li><a href="#" className="footer-link">Node.js</a></li>
              <li><a href="#" className="footer-link">TypeScript</a></li>
              <li><a href="#" className="footer-link">MongoDB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaTwitter />
          </a>
          <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaCodepen />
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} | Designed & Built with 
            <svg
              className="heart-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: '0 5px' }}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="var(--primary-color)"
                stroke="none"
              />
            </svg>
            by Mishti Sharma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 