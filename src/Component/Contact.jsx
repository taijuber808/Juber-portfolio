import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="contact-heading">
          <p className="section-small-title">
            <span></span> Get In Touch
          </p>

          <h2>
            Let's <span>Work Together</span>
          </h2>

          <p className="contact-subtitle">
            I'm open to new opportunities, interesting projects and
            collaborations. Feel free to connect with me.
          </p>
        </div>

        {/* =========================
            MAIN CONTACT CARD
        ========================= */}

        <div className="contact-main-card">
          {/* Left Content */}
          <div className="contact-main-content">
            <div className="contact-code-icon">
              <FaCode />
            </div>

            <p className="contact-label">HAVE A PROJECT IN MIND?</p>

            <h3>
              Let's build something
              <span> amazing together.</span>
            </h3>

            <p className="contact-main-text">
              Whether you're looking for a developer for your next project, a
              job opportunity, or simply want to connect, I'm always happy to
              hear from you.
            </p>

            <div className="contact-main-buttons">
              <a
                href="taijuber808@gmail.com"
                className="contact-email-btn"
              >
                <FaEnvelope />
                Send Me an Email
                <FaArrowRight />
              </a>

              <a href="/resume.pdf" className="contact-resume-btn" download>
                <FaDownload />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side Status */}
          <div className="contact-status-card">
            <div className="status-top">
              <span className="status-dot"></span>

              <span>Available for opportunities</span>
            </div>

            <p>
              Currently open to entry-level MERN Stack and Full Stack
              development opportunities.
            </p>

            <div className="status-line"></div>

            <div className="status-tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express.js</span>
            </div>
          </div>
        </div>

        {/* =========================
            CONTACT DETAILS
        ========================= */}

        <div className="contact-details-grid">
          {/* Email */}
          <a
            href="mailto:taijuber808@gmail.com"
            className="contact-detail-card"
          >
            <div className="contact-detail-icon">
              <FaEnvelope />
            </div>

            <div>
              <span>Email</span>
              <p>taijuber808@gmail.com</p>
            </div>

            <FaArrowRight className="detail-arrow" />
          </a>

          {/* Phone */}
          <a href="tel:+919313861974" className="contact-detail-card">
            <div className="contact-detail-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <span>Phone</span>
              <p>+91 93138 61974</p>
            </div>

            <FaArrowRight className="detail-arrow" />
          </a>

          {/* Location */}
          <div className="contact-detail-card">
            <div className="contact-detail-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <span>Location</span>
              <p>Ahmedabad , Gujarat</p>
            </div>
          </div>
        </div>

        {/* =========================
            SOCIAL LINKS
        ========================= */}

        <div className="contact-social">
          <span>Connect with me</span>

          <div className="contact-social-links">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
