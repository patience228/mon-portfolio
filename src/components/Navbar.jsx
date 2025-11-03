import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">MonPortfolio</div>

        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <a href="#hero" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="#about" onClick={() => setIsOpen(false)}>À propos</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projets</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Compétences</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
