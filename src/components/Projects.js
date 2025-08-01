import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter(project => project.featured);
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 6);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {displayProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo →
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub →
                    </a>
                  )}
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
