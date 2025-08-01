import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <span className="duration">{exp.duration}</span>
                <ul className="experience-description">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
