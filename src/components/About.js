import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div>
            <img 
              src={personal.profileImage} 
              alt={`${personal.name} Profile`} 
              className="profile-img"
            />
          </div>
          <div className="about-text">
            <h3>Hello! I'm {personal.name.split(' ')[0]}</h3>
            {personal.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
