import { useState, useEffect } from 'react';
import '../styles/Header.css';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check for saved dark mode preference or set based on user's system preference
  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode');
    
    if (darkModePreference === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else if (darkModePreference === null) {
      // Check system preference if no saved preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.body.classList.add('dark-mode');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          <span>M</span>ishti
        </a>
        
        <div className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`}>
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-link active" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
          
          <div className="theme-toggle" onClick={toggleDarkMode}>
            <div className="theme-toggle-circle">
              {isDarkMode ? <FaSun className="light-icon" /> : <FaMoon className="dark-icon" />}
            </div>
          </div>
        </div>
        
        <div className="mobile-nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header; 