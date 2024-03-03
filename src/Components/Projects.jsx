import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ProjectOne from "../Multimedia/Images/RJNW-website.jpg";
import ProjectTwo from "../Multimedia/Images/Snowflakes-website-box.jpg";
import RJNWHover from "../Multimedia/Images/RJNW-website-variant.png";
import SnowflakesHover from "../Multimedia/Images/Snowflakes-website-variant.jpg";
import ArrowR from "../Multimedia/Vectors/arrowR Large.svg";
import ArrowRW from "../Multimedia/Vectors/arrowR Large W.svg";

const Projects = ({ theme }) => {
  const worksContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delay: 2,
        staggerChildren: 0.1,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  const letter = {
    hidden: { y: "100%" },
    show: {
      y: "0%",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1.25,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };
  return (
    <section className="projects-section-container container" id="projects">
      <div className="projects-header-section">
        <motion.div
          className="projects-title-container"
          variants={worksContainer}
          initial="hidden"
          whileInView="show"
        >
          <motion.span variants={letter}>
            <h1>W</h1>
          </motion.span>
          <motion.span variants={letter}>
            <h1>O</h1>
          </motion.span>
          <motion.span variants={letter}>
            <h1>R</h1>
          </motion.span>
          <motion.span variants={letter}>
            <h1>K</h1>
          </motion.span>
        </motion.div>
        <div className="projects-blurb-container">
          <h4>
            From re-branding to <br />
            fully bespoke website builds
          </h4>
        </div>
        <div className="projects-subtitle-container">
          <h4>{`(Projects)`}</h4>
        </div>
      </div>
      <div className="projects-img-section">
        <div className="projects-img-container img-one">
          <div className="projects-img-stack">
            <img
              src={ProjectOne}
              alt="mockup of website design for a restaurant business"
            />
            <a
              href="https://www.roofingandjoinery.com"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                src={RJNWHover}
                alt="mockup of website design for a roofing business"
              />
            </a>
          </div>

          <h4>Roofing Contractors</h4>
          <h4>{`(Roofing & Joinery NW)`}</h4>
        </div>
        <div className="projects-img-container img-two">
          <div className="projects-img-stack">
            <img
              src={ProjectTwo}
              alt="mockup of website design for a restaurant business"
            />
            <a
              href="https://www.snowflakesclothing.com"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                src={SnowflakesHover}
                alt="mockup of website design for a restaurant business"
              />
            </a>
          </div>
          <h4>Sustainable Clothing Company</h4>
          <h4>{`(Snowflakes Clothing Co)`}</h4>
        </div>
      </div>
      <div className="projects-cta-section">
        <div className="projects-cta-content">
          <img
            src={theme === "dark" ? ArrowRW : ArrowR}
            alt="arrow pointing right"
          />
          <Link to="/pricing">
            <h2>We bring your ideas to life</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
