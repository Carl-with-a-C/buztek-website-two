import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  const letter = {
    hidden: { rotateX: "-90deg" },
    show: {
      rotateX: "0deg",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1.5,
      },
    },
  };
  return (
    <section className="hero-section container">
      <div className="hero-splash-container">
        <motion.div
          className="heading-container"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={letter}>B</motion.span>
          <motion.span variants={letter}>U</motion.span>
          <motion.span variants={letter}>Z</motion.span>
          <motion.span variants={letter}>T</motion.span>
          <motion.span variants={letter}>E</motion.span>
          <motion.span variants={letter}>K</motion.span>
        </motion.div>
      </div>
      <div className="hero-blurb-video-container">
        <div className="hero-blurb-container">
          <div className="hero-blurb-title-container">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
              vel elit{" "}
            </h3>
          </div>
          <div className="hero-blurb-subtitle-container">
            <h4>Learn more about us</h4>
          </div>
        </div>
        <div className="hero-video-container">
          <iframe
            src="https://player.vimeo.com/video/736708975"
            frameborder="0"
            title="Buztek Showreel 2023"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
          <h4>Buztek Showreel 2023</h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
