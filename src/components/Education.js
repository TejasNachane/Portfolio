import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education, certifications, settings } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education & Certifications</h2>
        
        {/* Education Section */}
        <div className="education-section">
          <h3>Education</h3>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <h4>{edu.school}</h4>
                <h4>{edu.degree}</h4>
                <span className="year">{edu.year}</span>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        {settings.showCertifications && certifications.length > 0 && (
          <div className="certifications-section">
            <h3>Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <h4>{cert.name}</h4>
                  <h5>{cert.issuer}</h5>
                  <span className="year">{cert.year}</span>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                      View Certificate →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
