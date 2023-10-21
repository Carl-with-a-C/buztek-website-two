import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const scaleYB = useTransform(scrollYProgress, [0.2, 0.9], ["0%", "-100%"]);
  const scaleYU = useTransform(scrollYProgress, [0.3, 0.9], ["0%", "-95%"]);
  const scaleYZ = useTransform(scrollYProgress, [0.4, 0.9], ["0%", "-90%"]);
  const scaleYT = useTransform(scrollYProgress, [0.5, 0.9], ["0%", "-85%"]);
  const scaleYE = useTransform(scrollYProgress, [0.6, 0.9], ["0%", "-80%"]);
  const scaleYK = useTransform(scrollYProgress, [0.7, 0.9], ["0%", "-75%"]);

  const scaleYblurb = useTransform(scrollYProgress, [0.1, 1], ["0%", "-40%"]);

  const scaleYopacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const scaleYvideoY = useTransform(scrollYProgress, [0, 0.5], ["0%", "40%"]);

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
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  const blurbParent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1.55,
        staggerChildren: 0.1,
        ease: [0.78, 0.01, 0.21, 1],
        when: "beforeChildren",
      },
    },
  };

  const blurbReveal = {
    hidden: { y: "16px" },
    show: {
      y: "0px",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1.75,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  const blurbCoverReveal = {
    hidden: { top: "0%" },
    show: {
      top: "100%",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1.75,
        ease: [0.78, 0.01, 0.21, 1],
        stagger: 0.15,
      },
    },
  };

  const videoReveal = {
    hidden: { opacity: 0, height: "0px" },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        delay: 2.1,
        type: "spring",
        bounce: 0,
        duration: 2.75,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };
  return (
    <section className="hero-section container">
      <div className="upper-hero-section">
        <motion.div
          className="hero-splash-container"
          animate={{
            y: ["96px", "0px"],
          }}
          transition={{
            delay: 1.5,
            duration: 0.75,
            ease: [0.78, 0.01, 0.21, 1],
          }}
        >
          <motion.div
            className="heading-container"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={letter} style={{ y: scaleYB }}>
              B
            </motion.span>
            <motion.span variants={letter} style={{ y: scaleYU }}>
              U
            </motion.span>
            <motion.span variants={letter} style={{ y: scaleYZ }}>
              Z
            </motion.span>
            <motion.span variants={letter} style={{ y: scaleYT }}>
              T
            </motion.span>
            <motion.span variants={letter} style={{ y: scaleYE }}>
              E
            </motion.span>
            <motion.span variants={letter} style={{ y: scaleYK }}>
              K
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="hero-blurb-video-container">
        <motion.div
          className="hero-blurb-container"
          style={{ y: scaleYblurb, opacity: scaleYopacity }}
        >
          <motion.div
            className="hero-blurb-title-container"
            variants={blurbParent}
            initial="hidden"
            animate="show"
          >
            <motion.div className="blurb-line-container" variants={blurbReveal}>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing </h3>{" "}
              <motion.div
                className="blurb-cover"
                variants={blurbCoverReveal}
              ></motion.div>
            </motion.div>

            <motion.div className="blurb-line-container" variants={blurbReveal}>
              <h3>elit, sed do eiusmod tempor incididunt ut labore et </h3>{" "}
              <motion.div
                className="blurb-cover"
                variants={blurbCoverReveal}
              ></motion.div>
            </motion.div>
            <motion.div className="blurb-line-container" variants={blurbReveal}>
              <h3>dolore magna aliqua. Aenean vel elit </h3>{" "}
              <motion.div
                className="blurb-cover"
                variants={blurbCoverReveal}
              ></motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-blurb-cta-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <h4>Learn more about us</h4>
            <div className="hero-cta-line"></div>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-video-container"
          variants={videoReveal}
          initial="hidden"
          animate="show"
          style={{
            y: scaleYvideoY,
          }}
        >
          <motion.iframe
            className="hero-video"
            src="https://player.vimeo.com/video/370467553"
            title="Buztek Showreel 2023"
            autoPlay
            loop
            muted
          ></motion.iframe>
          <h4>Buztek Showreel 2023</h4>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
