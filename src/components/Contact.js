import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { contact, social } = portfolioData;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-content">
          <h2>Let's Work Together</h2>
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hello, feel free to reach out!
          </p>
          <div className="contact-info">
            {contact.email && (
              <div className="contact-item">
                <h4>Email</h4>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            )}
            {contact.phone && (
              <div className="contact-item">
                <h4>Phone</h4>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </div>
            )}
            {contact.location && (
              <div className="contact-item">
                <h4>Location</h4>
                <span>{contact.location}</span>
              </div>
            )}
          </div>
          <div className="social-links">
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            )}
            {social.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
            )}
            {contact.website && (
              <a href={contact.website} target="_blank" rel="noopener noreferrer" className="social-link">
                Website
              </a>
            )}
            {contact.leetcode && (
              <a href={contact.leetcode} target="_blank" rel="noopener noreferrer" className="social-link">
                LeetCode
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
