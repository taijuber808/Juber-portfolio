import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiMongoose, SiJavascript } from "react-icons/si";

import "./Projects.css";

const projects = [
  {
    title: "ShopSphere",
    category: "MERN Stack E-Commerce",

    description:
      "A full-stack e-commerce application built with React, Node.js, Express.js and MongoDB, featuring product management, REST APIs and database integration.",

    image: "/Screenshot 2026-09-12 234336.png",

    tech: [
      {
        name: "React.js",
        icon: <FaReact />,
        className: "react",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        className: "node",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        className: "express",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        className: "mongodb",
      },
      {
        name: "Mongoose",
        icon: <SiMongoose />,
        className: "mongoose",
      },
    ],

    github: "https://github.com/taijuber808/E-Commerce-MERN",
    live: "https://e-commerce-mern-lac.vercel.app/",
  },

  // =====================================================
  // 2. DREAMESTATE - MERN REAL ESTATE
  // =====================================================
  {
    title: "DreamEstate",
    category: "MERN Stack Real Estate",

    description:
      "A full-stack real estate web application built with React, Node.js, Express.js and MongoDB for property browsing, authentication, wishlist and property management.",

    image: "/Screenshot 2026-09-13 001313.png",

    tech: [
      {
        name: "React.js",
        icon: <FaReact />,
        className: "react",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        className: "node",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        className: "express",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        className: "mongodb",
      },
      {
        name: "Mongoose",
        icon: <SiMongoose />,
        className: "mongoose",
      },
    ],

    github: "https://github.com/taijuber808/Real-Estate-With-React",
    live: "https://real-estate-with-react-isx5.vercel.app/",
  },

  // =====================================================
  // 3. REACT E-COMMERCE
  // =====================================================
  {
    title: "React E-Commerce",
    category: "React.js E-Commerce",

    description:
      "A responsive e-commerce frontend built with React.js featuring product browsing, category filtering, product details and a clean user-friendly interface.",

    image: "/Screenshot 2026-09-13 001501.png",

    tech: [
      {
        name: "React.js",
        icon: <FaReact />,
        className: "react",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        className: "javascript",
      },
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        className: "html",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        className: "css",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        className: "bootstrap",
      },
    ],

    github: "https://github.com/taijuber808/E-Commerce-React",
    live: "https://e-commerce-react-delta-three.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* ================= SECTION HEADING ================= */}

        <div className="projects-heading">
          <p className="section-small-title">
            <span></span> My Projects
          </p>

          <h2>
            Things I've <span>Built</span>
          </h2>

          <p className="projects-subtitle">
            A collection of projects where I applied my frontend and backend
            development skills to build practical web applications.
          </p>
        </div>

        {/* ================= PROJECT CARDS ================= */}

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* PROJECT IMAGE */}

              <div className="project-top">
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-image-placeholder">
                      <FaReact />
                    </div>
                  )}
                </div>

                <span className="project-number">0{index + 1}</span>
              </div>

              {/* PROJECT CONTENT */}

              <div className="project-content">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* TECHNOLOGIES */}

                <div className="project-tech">
                  {project.tech.map((item, techIndex) => (
                    <div
                      className="tech-badge"
                      key={techIndex}
                      title={item.name}
                    >
                      <span className={`tech-badge-icon ${item.className}`}>
                        {item.icon}
                      </span>

                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn github-btn"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="projects-bottom">
          <p>More projects coming soon...</p>

          <a
            href="https://github.com/taijuber808"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
