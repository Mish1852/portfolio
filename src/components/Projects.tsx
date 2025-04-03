import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HTML/CSS Portfolio",
      description: "My first web project built with HTML and CSS. A responsive static website showcasing my journey into web development.",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop",
      technologies: ["HTML", "CSS", "Responsive Design"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 2,
      title: "JavaScript Calculator",
      description: "A functional calculator built with vanilla JavaScript that performs basic arithmetic operations and features a clean UI.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 3,
      title: "Todo List App",
      description: "A React-based task manager that allows users to add, delete, and mark tasks as complete with local storage functionality.",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop",
      technologies: ["React", "CSS", "JavaScript", "LocalStorage API"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 4,
      title: "Weather App",
      description: "A React application that fetches and displays weather data from an external API based on user location or search input.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2081&auto=format&fit=crop",
      technologies: ["React", "API Integration", "JavaScript", "CSS"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 5,
      title: "Algorithm Visualizer",
      description: "An interactive visualization tool for common sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
      technologies: ["JavaScript", "HTML Canvas", "Algorithms", "CSS"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 6,
      title: "E-commerce Landing Page",
      description: "A responsive landing page for an e-commerce platform with modern UI components and CSS animations.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
      technologies: ["React", "CSS", "Responsive Design"],
      liveLink: "#",
      repoLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 