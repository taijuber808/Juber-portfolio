import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
  FaInstagram,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* =========================
            TOP FOOTER
        ========================= */}

        <div className="footer-top">
          {/* Logo / Intro */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon">Tj</span>
              <span className="footer-logo-name">Tai Juber</span>
            </a>

            <p>
              MERN Stack Developer passionate about building modern, responsive
              and user-friendly web applications.
            </p>

            <div className="footer-status">
              <span></span>
              Available for opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Let's Connect</h3>

            <a href="mailto:taijuber808@gmail.com">
              <FaEnvelope />
              taijuber808@gmail.com
            </a>
            
            <a href="tel:+919313861974" className="mt-2">
              <FaPhoneAlt />
              +91 93138 61974
            </a>

            <div className="footer-social">
              <a
                href="https://github.com/taijuber808"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/tai-mohammad-juber"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a href="mailto:taijuber808@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/taijuber5735"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* =========================
            DIVIDER
        ========================= */}

        <div className="footer-divider"></div>

        {/* =========================
            BOTTOM FOOTER
        ========================= */}

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tai Juber. All Rights Reserved.</p>

          <p className="footer-made">
            Built with <span>React.js</span> & passion
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
