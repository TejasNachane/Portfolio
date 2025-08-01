import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.category}</h3>
              <div className="skill-technologies">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
