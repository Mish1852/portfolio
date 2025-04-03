import { useState } from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Neon Pulse Dashboard',
      description: 'A futuristic admin dashboard with real-time analytics, interactive data visualization, and dark mode UI.',
      image: '/project1.jpg',
      tags: ['React', 'Chart.js', 'Firebase'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Cyber Marketplace',
      description: 'A full-stack e-commerce platform with modern UI/UX design, secure payment processing, and user authentication.',
      image: '/project2.jpg',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Digital Identity Portal',
      description: 'A secure authentication system with biometric verification, two-factor authentication, and user profile management.',
      image: '/project3.jpg',
      tags: ['Node.js', 'Express', 'JWT'],
      category: 'backend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Neural Network Visualizer',
      description: 'An interactive tool for visualizing neural networks, with customizable parameters and real-time training visualization.',
      image: '/project4.jpg',
      tags: ['React', 'TensorFlow.js', 'D3.js'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Cryptographic Messenger',
      description: 'An end-to-end encrypted messaging platform with real-time chat capabilities and self-destructing messages.',
      image: '/project5.jpg',
      tags: ['React', 'Firebase', 'WebRTC'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'API Gateway Service',
      description: 'A microservice API gateway with rate limiting, request validation, and analytics dashboard for monitoring.',
      image: '/project6.jpg',
      tags: ['Node.js', 'Express', 'Redis'],
      category: 'backend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="projects-container">
      <div className="container">
        <h2 className="projects-title" data-text="Featured Projects">Featured Projects</h2>
        <p className="projects-subtitle">
          Explore a selection of my recent work showcasing my expertise in frontend, backend, and full-stack development.
        </p>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>
        
        <div className="project-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt style={{ marginRight: '8px' }} />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub style={{ marginRight: '8px' }} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 