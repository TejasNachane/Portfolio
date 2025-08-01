import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal, settings } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} {personal.name}. All rights reserved. Built with React.</p>
        {settings.siteUrl && (
          <p className="footer-url">{settings.siteUrl}</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
