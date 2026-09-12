import React from "react";
import {
  FaUserTie,
  FaCode,
  FaDatabase,
  FaServer,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";

import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* ================= LEFT CONTENT ================= */}
        <div className="about-content">
          <p className="section-small-title">
            <span></span> About Me
          </p>

          <h2>
            Who
            <span> I Am</span>
          </h2>

          <p className="about-text">
            I'm Tai juber, a passionate Full Stack Developer with a strong
            interest <br /> in building web applications that are fast, scalable
            and user-friendly. I love solving problems,learning new technologies
            and turning creative ideas into real products.
          </p>

          <p className="about-text">
            I enjoy turning ideas into functional web experiences using
            React.js, Node.js, Express.js and MongoDB. I also have experience
            working with REST APIs, CRUD operations, database integration and
            responsive UI development.
          </p>

          {/* HIGHLIGHTS */}
          <div className="about-highlights">
            <div className="about-highlight">
              <FaCheckCircle />
              <span>Responsive Web Design</span>
            </div>

            <div className="about-highlight">
              <FaCheckCircle />
              <span>REST API Development</span>
            </div>

            <div className="about-highlight">
              <FaCheckCircle />
              <span>Frontend & Backend Integration</span>
            </div>

            <div className="about-highlight">
              <FaCheckCircle />
              <span>MongoDB Database Integration</span>
            </div>
          </div>
          {/* PERSONAL INFO */}
          <div className="personal-info">
            <div className="info-row">
              <div className="info-icon">
                <i className="bi bi-person"></i>
              </div>

              <strong>Name</strong>
              <span>Tai Juber</span>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <i className="bi bi-envelope"></i>
              </div>

              <strong>Email</strong>
              <span>taijuber808@gmail.com</span>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <i className="bi bi-geo-alt"></i>
              </div>

              <strong>Location</strong>
              <span>Ahmedabad</span>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <i className="bi bi-briefcase"></i>
              </div>

              <strong>Experience</strong>
              <span>Fresher</span>
            </div>
          </div>

          {/* DOWNLOAD RESUME */}
          <a href="/resume.pdf" className="about-resume-btn" download>
            Download Resume
            <FaDownload />
          </a>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="about-visual">
          <div className="about-glow"></div>

          {/* MAIN PROFILE CARD */}
          <div className="developer-card">
            <div className="developer-card-top">
              <div className="developer-icon">
                <FaUserTie />
              </div>

              <div>
                <h3>Tai Juber</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>

            {/* TECH STACK */}
            <div className="tech-stack">
              <div className="tech-item">
                <div className="tech-icon">
                  <FaCode />
                </div>

                <div>
                  <h4>Frontend</h4>
                  <p>React.js • HTML • CSS • Bootstrap</p>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-icon">
                  <FaServer />
                </div>

                <div>
                  <h4>Backend</h4>
                  <p>Node.js • Express.js • REST APIs</p>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-icon">
                  <FaDatabase />
                </div>

                <div>
                  <h4>Database</h4>
                  <p>MongoDB • Mongoose</p>
                </div>
              </div>
            </div>

            {/* EXPERIENCE TAG */}
            <div className="developer-status">
              <span className="status-dot"></span>
              Available for opportunities
            </div>
          </div>

          {/* FLOATING CARDS */}

          <div className="about-floating-card card-one">
            <strong>4+</strong>
            <span>Projects</span>
          </div>

          <div className="about-floating-card card-two">
            <strong>MERN</strong>
            <span>Stack</span>
          </div>

          <div className="about-floating-card card-three">
            <strong>100%</strong>
            <span>Responsive</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
