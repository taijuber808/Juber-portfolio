import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaServer,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiVite,
  SiNpm,
} from "react-icons/si";

import "./Skills.css";

const Skills = () => {
  const frontendSkills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      className: "html-icon",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      className: "css-icon",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      className: "js-icon",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      className: "react-icon",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      className: "bootstrap-icon",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      className: "tailwind-icon",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      className: "node-icon",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      className: "express-icon",
    },
  ];

  const databaseSkills = [
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      className: "mongodb-icon",
    },
    {
      name: "Mongoose",
      icon: <SiMongoose />,
      className: "mongoose-icon",
    },
  ];

  const toolsSkills = [
    {
      name: "Git",
      icon: <FaGitAlt />,
      className: "git-icon",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      className: "github-icon",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      className: "postman-icon",
    },
    {
      name: "VS Code",
      icon: <FaCode />,
      className: "vscode-icon",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      className: "vite-icon",
    },
    {
      name: "npm",
      icon: <SiNpm />,
      className: "npm-icon",
    },
  ];

  const SkillItem = ({ skill }) => (
    <div className="skill-item">
      <div className={`skill-real-icon ${skill.className}`}>{skill.icon}</div>

      <span>{skill.name}</span>
    </div>
  );

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        {/* ================= HEADER ================= */}

        <div className="skills-header">
          <p className="section-small-title">
            <span></span>
            My Skills
          </p>

          <h2>
            Technologies I <span>Work With</span>
          </h2>

          <p className="skills-intro">
            I have hands-on experience with modern web technologies and tools. Here are some of the technologies I work with :
          </p>
        </div>

        {/* ================= SKILL CATEGORIES ================= */}

        <div className="skills-categories">
          {/* ================= FRONTEND ================= */}

          <div className="skill-category-card">
            <div className="category-heading">
              <div className="category-icon frontend-category-icon">
                <FaCode />
              </div>

              <div>
                <h3>Frontend Development</h3>
                <p>Building modern user interfaces</p>
              </div>
            </div>

            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <SkillItem skill={skill} key={index} />
              ))}
            </div>
          </div>

          {/* ================= BACKEND ================= */}

          <div className="skill-category-card">
            <div className="category-heading">
              <div className="category-icon backend-category-icon">
                <FaServer />
              </div>

              <div>
                <h3>Backend Development</h3>
                <p>Building APIs and server-side applications</p>
              </div>
            </div>

            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <SkillItem skill={skill} key={index} />
              ))}

              {/* Extra Backend Skills */}

              <div className="skill-item text-skill">
                <div className="text-skill-icon">API</div>

                <span>REST API</span>
              </div>

              <div className="skill-item text-skill">
                <div className="text-skill-icon">CRUD</div>

                <span>CRUD</span>
              </div>
            </div>
          </div>

          {/* ================= DATABASE ================= */}

          <div className="skill-category-card">
            <div className="category-heading">
              <div className="category-icon database-category-icon">
                <SiMongodb />
              </div>

              <div>
                <h3>Database</h3>
                <p>Data storage and management</p>
              </div>
            </div>

            <div className="skills-list">
              {databaseSkills.map((skill, index) => (
                <SkillItem skill={skill} key={index} />
              ))}
            </div>
          </div>

          {/* ================= TOOLS ================= */}

          <div className="skill-category-card">
            <div className="category-heading">
              <div className="category-icon tools-category-icon">
                <FaCode />
              </div>

              <div>
                <h3>Tools & Workflow</h3>
                <p>Tools I use for development</p>
              </div>
            </div>

            <div className="skills-list">
              {toolsSkills.map((skill, index) => (
                <SkillItem skill={skill} key={index} />
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM TEXT ================= */}

        <div className="skills-bottom">
          <div className="stack-item">
            <FaCode />
            <span>Responsive Web Design</span>
          </div>

          <div className="stack-item">
            <FaServer />
            <span>API Integration</span>
          </div>

          <div className="stack-item">
            <SiMongodb />
            <span>Database Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
