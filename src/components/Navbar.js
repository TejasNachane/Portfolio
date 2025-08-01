import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const { settings } = portfolioData;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="logo">{settings.siteName.split(' - ')[0]}</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            {settings.showExperience && <li><a href="#experience">Experience</a></li>}
            {settings.showEducation && <li><a href="#education">Education</a></li>}
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><DarkModeToggle /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
