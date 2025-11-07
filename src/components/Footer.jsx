import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/patience228" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/akou-siabi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
       
      <p>© 2025 Akou SIABI. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
