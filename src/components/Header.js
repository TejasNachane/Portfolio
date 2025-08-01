import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
  const { personal } = portfolioData;

  return (
    <header className="header">
      <div className="scanlines"></div>
      <div className="container">
        <h1 data-text={personal.name}>{personal.name}</h1>
        <p>{personal.title}</p>
        {personal.subtitle && <p className="subtitle">{personal.subtitle}</p>}
        <a href="#contact" className="btn">Get In Touch</a>
        {personal.resume && (
          <a href={personal.resume} className="btn btn-secondary" download>
            Download Resume
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
