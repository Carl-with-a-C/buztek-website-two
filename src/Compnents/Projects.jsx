import { motion } from "framer-motion";

import ProjectOne from "../Multimedia/Images/Hakkapo-website-box.jpg";
import ProjectTwo from "../Multimedia/Images/Snowflakes-website-box.jpg";
import ArrowR from "../Multimedia/Vectors/arrowR Large.svg";

const Projects = () => {
  const worksContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delay: 1.55,
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
        duration: 1.5,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };
  return (
    <section className="projects-section-container container">
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
          <img
            src={ProjectOne}
            alt="mockup of website design for a restaurant business"
          />
          <h4>Project One Title</h4>
          <h4>{`(Hakkapo)`}</h4>
        </div>
        <div className="projects-img-container img-two">
          <img
            src={ProjectTwo}
            alt="mockup of website design for a clothing business"
          />
          <h4>Project Two Title</h4>
          <h4>{`(Snowflakes Clothing Co)`}</h4>
        </div>
      </div>
      <div className="projects-cta-section">
        <div className="projects-cta-content">
          <img src={ArrowR} alt="arrow pointing right" />
          <h2>See all projects</h2>
        </div>
        <div className="projects-cta-line"></div>
      </div>
    </section>
  );
};

export default Projects;
