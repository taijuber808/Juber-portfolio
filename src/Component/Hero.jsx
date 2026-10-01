import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <p className="hero-small-text">
            <span></span> Hello, I'm
          </p>

          <h1>Tai Juber</h1>

          <h2>
            <span> Full Stack Web Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications using the{" "}
            <br />
            MERN stack and other modern technologies Turning ideas into <br />
            real-world digital solutions.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <a href="#projects" className="hero-primary-btn">
              View My Projects
              <FaArrowRight />
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Let's Connect
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="hero-social">
            {/* GitHub */}
            <a
              href="https://github.com/taijuber808"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tai-mohammad-juber"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/taijuber5735"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            {/* Gmail */}
            <a href="mailto:taijuber808@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT DECORATIVE DEVELOPER CARD */}
        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="code-card">
            <div className="code-top">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>developer.js</p>
            </div>

            <div className="code-body">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>

              <p className="code-indent">
                <span className="code-key">name:</span>{" "}
                <span className="code-green">'Tai Juber'</span>,
              </p>

              <p className="code-indent">
                <span className="code-key">role:</span>{" "}
                <span className="code-green">'Full Stack Developer'</span>,
              </p>

              <p className="code-indent">
                <span className="code-key">skills:</span> [
              </p>

              <p className="code-indent-2">
                <span className="code-green">'React.js'</span>,
              </p>

              <p className="code-indent-2">
                <span className="code-green">'Node.js'</span>,
              </p>

              <p className="code-indent-2">
                <span className="code-green">'Express.js'</span>,
              </p>
              <p className="code-indent-2">
                <span className="code-green">'MongoDB'</span>
              </p>

              <p className="code-indent">]</p>

              <p>{"};"}</p>

              <p className="code-comment">
                // Let's build something amazing 🚀
              </p>
            </div>
          </div>

          <div className="floating-tech tech-react">React.js</div>

          <div className="floating-tech tech-node">Node.js</div>

          <div className="floating-tech tech-express">Express.js</div>

          <div className="floating-tech tech-mongo">MongoDB</div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero-scroll">
        <span></span>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
