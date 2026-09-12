import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaTrophy,
  FaCheckCircle,
} from "react-icons/fa";

import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        {/* Section Heading */}
        <div className="experience-heading">
          <p className="section-small-title">
            <span></span> My Journey
          </p>

          <h2>
            Experience & <span>Education</span>
          </h2>

          <p className="experience-subtitle">
            My learning journey, technical training and experiences that helped
            me grow as a Full Stack Developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {/* Full Stack Training */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <span className="timeline-type">Professional Training</span>

                  <h3>Full Stack Web Development</h3>
                </div>

                <span className="timeline-date">2026</span>
              </div>

              <p className="timeline-place">Red & White Multimedia Education</p>

              <p className="timeline-description">
                Currently pursuing Full Stack Web Development training with
                hands-on practice in modern frontend and backend technologies.
              </p>

              <div className="timeline-skills">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>REST APIs</span>
              </div>
            </div>
          </div>

          {/* MERN */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaCheckCircle />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <span className="timeline-type">Completed Training</span>

                  <h3>MERN Stack Development</h3>
                </div>

                <span className="timeline-date">2026</span>
              </div>

              <p className="timeline-place">Red & White Multimedia Education</p>

              <p className="timeline-description">
                Completed MERN Stack development training with practical
                experience in building responsive web applications, REST APIs,
                CRUD operations and database integration.
              </p>

              <div className="timeline-skills">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <span className="timeline-type">Education</span>

                  <h3>B.Com</h3>
                </div>

                <span className="timeline-date">Completed</span>
              </div>

              <p className="timeline-place">DCM Arts and Commerce College</p>

              <p className="timeline-description">
                Completed Bachelor of Commerce with a foundation in commerce and
                business-related studies.
              </p>
            </div>
          </div>

          {/* TECHWAR */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaTrophy />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <span className="timeline-type">Achievement</span>

                  <h3>WebHacks Competition - TECHWAR 2026</h3>
                </div>

                <span className="timeline-date">2026</span>
              </div>

              <p className="timeline-place">Red & White Skill Education</p>

              <p className="timeline-description">
                Participated in the WebHacks competition TECHWAR 2026, gaining
                practical experience through a competitive web development
                environment.
              </p>
            </div>
          </div>
        </div>

        {/* Certification Highlight */}
        <div className="certification-highlight">
          <div className="certification-icon">
            <FaCertificate />
          </div>

          <div className="certification-content">
            <span>Certification</span>

            <h3>Full Stack Web Development Training</h3>

            <p>Red & White Multimedia Education</p>
          </div>

          <div className="certification-badge">
            <FaCheckCircle />
            Training
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
