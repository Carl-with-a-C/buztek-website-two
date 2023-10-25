import { motion } from "framer-motion";

import ArrowR from "../Multimedia/Vectors/arrowR Large.svg";

const About = () => {
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
    <section className="about-section-container container">
      <motion.div
        className="about-container"
        initial={isTouchDevice() ? "hidden" : false}
        animate={isTouchDevice() ? "show" : false}
        variants={aboutTouchHide}
      >
        <div className="arrow-container">
          <motion.img
            src={ArrowR}
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
              <h2>Lorem ipsum dolor sit am,</h2>
              <motion.div
                className="about-heading-cover"
                variants={aboutCoverReveal}
              ></motion.div>
            </motion.div>
            <motion.div className="about-heading-line" variants={aboutReveal}>
              <h2>consectetur adipiscing</h2>
              <motion.div
                className="about-heading-cover"
                variants={aboutCoverReveal}
              ></motion.div>
            </motion.div>
            <motion.div className="about-heading-line" variants={aboutReveal}>
              <h2>elit lendus</h2>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aenean vel elit, Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt dolore magna
                  aliqua. Aenean vel elit
                </h4>{" "}
              </div>
              <div className="about-blurb-para para-two">
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aenean vel elit
                </h4>
              </div>
              <div className="about-blurb-cta">
                <h4>Learn more about us</h4>
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
