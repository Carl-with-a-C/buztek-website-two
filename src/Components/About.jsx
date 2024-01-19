import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ArrowR from "../Multimedia/Vectors/arrowR Large.svg";
import ArrowRW from "../Multimedia/Vectors/arrowR Large W.svg";

const About = ({ theme }) => {
  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  const aboutTouchHide = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 5,
        duration: 0.5,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  const aboutHeadingParent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
        ease: [0.78, 0.01, 0.21, 1],
        when: "beforeChildren",
      },
    },
  };

  const aboutReveal = {
    hidden: { y: "16px" },
    show: {
      y: "0px",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.75,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  const aboutCoverReveal = {
    hidden: { top: "0%" },
    show: {
      top: "100%",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  const aboutBlurbReveal = {
    hidden: { opacity: 0, y: "16px" },
    show: {
      opacity: 1,
      y: "0px",
      transition: {
        delay: 0.5,
        duration: 1,
        ease: [0.78, 0.01, 0.21, 1],
        when: "beforeChildren",
      },
    },
  };

  const arrow = {
    hidden: { rotateX: "-90deg", color: "rgba(0, 200, 200, 1)" },
    show: {
      rotateX: "0deg",
      color: "rgba(0, 0, 0, 1)",
      transition: {
        type: "spring",
        bounce: 0,
        delay: 0.5,
        duration: 2,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  return (
    <section className="about-section-container container" id="about">
      <motion.div
        className="about-container"
        initial={isTouchDevice() ? "hidden" : false}
        animate={isTouchDevice() ? "show" : false}
        variants={aboutTouchHide}
      >
        <div className="arrow-container">
          <motion.img
            src={theme === "dark" ? ArrowRW : ArrowR}
            alt="An arrow pointing to the right"
            variants={arrow}
            initial="hidden"
            whileInView="show"
          />
        </div>
        <div className="about-content-container">
          <motion.div
            className="about-heading-container"
            variants={aboutHeadingParent}
            initial="hidden"
            whileInView="show"
          >
            <motion.div className="about-heading-line" variants={aboutReveal}>
              <h2>We are not just </h2>
              <motion.div
                className="about-heading-cover"
                variants={aboutCoverReveal}
              ></motion.div>
            </motion.div>
            <motion.div className="about-heading-line" variants={aboutReveal}>
              <h2>a web design</h2>
              <motion.div
                className="about-heading-cover"
                variants={aboutCoverReveal}
              ></motion.div>
            </motion.div>
            <motion.div className="about-heading-line" variants={aboutReveal}>
              <h2>company</h2>
              <motion.div
                className="about-heading-cover"
                variants={aboutCoverReveal}
              ></motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="about-blurb-container"
            variants={aboutBlurbReveal}
            initial="hidden"
            whileInView={"show"}
          >
            <div className="about-blurb-subtitle-container">
              <h4>{`(About)`}</h4>
            </div>
            <div className="about-blurb-content-container">
              <div className="about-blurb-heading">
                <h4>What We Do and How We Do It</h4>
              </div>
              <div className="about-blurb-para para-one">
                <h4>
                  At Buztek, we are not just a web design company; we are
                  architects of digital innovation, passionate about creating
                  online experiences that transcend expectations. Based in the
                  heart of Manchester, our team brings together a dynamic blend
                  of creativity, technical expertise, and a deep understanding
                  of the ever-evolving digital landscape.
                </h4>{" "}
              </div>
              <div className="about-blurb-para para-two">
                <h4>
                  Our mission is to empower businesses with cutting-edge web
                  solutions that not only captivate audiences but also drive
                  tangible results.
                </h4>
              </div>
              <div className="about-blurb-cta">
                <Link to="/pricing">
                  <h4>Let's work together</h4>
                </Link>
                <div className="about-cta-line"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
