import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-icon">Tj</span>
          <span className="logo-name">Tai Juber</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}>
          <nav className="nav-links">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a
            href="/resume.pdf"
            className="resume-btn"
            download
            onClick={closeMenu}
          >
            Download Resume
            <FaDownload />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
