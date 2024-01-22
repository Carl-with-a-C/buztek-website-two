import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import SplashVid from "../Multimedia/Videos/SplashVid.mp4";

const Hero = () => {
  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  const { scrollYProgress } = useScroll();

  const scaleYB = useTransform(scrollYProgress, [0.0, 0.5], ["0%", "-400%"]);
  const scaleYU = useTransform(scrollYProgress, [0.01, 0.5], ["0%", "-400%"]);
  const scaleYZ = useTransform(scrollYProgress, [0.02, 0.5], ["0%", "-400%"]);
  const scaleYT = useTransform(scrollYProgress, [0.03, 0.5], ["0%", "-380%"]);
  const scaleYE = useTransform(scrollYProgress, [0.05, 0.5], ["0%", "-360%"]);
  const scaleYK = useTransform(scrollYProgress, [0.08, 0.5], ["0%", "-340%"]);

  const scaleYblurb = useTransform(scrollYProgress, [0, 0.08], ["0%", "-20%"]);

  const scaleYopacity = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["100%", "0%"]
  );

  const scaleYvideoY = useTransform(
    scrollYProgress,
    [0, 0.08],
    ["30%", "100%"]
  );

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  const letter = {
    hidden: { rotateX: "-90deg", color: "var(--secondary)" },
    show: {
      rotateX: "0deg",
      color: "var(--text-primary)",
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
        delay: 1.75,
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
    exit: {
      opacity: 0,
      transition: {
        duration: 0,
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
            y: ["15vh", "0vh"],
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
            exit="exit"
            layout
          >
            <motion.span
              variants={letter}
              style={isTouchDevice() ? { y: 0 } : { y: scaleYB }}
            >
              B
            </motion.span>
            <motion.span
              variants={letter}
              style={isTouchDevice() ? { y: 0 } : { y: scaleYU }}
            >
              U
            </motion.span>
            <motion.span
              variants={letter}
              style={isTouchDevice() ? { y: 0 } : { y: scaleYZ }}
            >
              Z
            </motion.span>
            <motion.span
              variants={letter}
              style={isTouchDevice() ? { y: 0 } : { y: scaleYT }}
            >
              T
            </motion.span>
            <motion.span
              variants={letter}
              style={isTouchDevice() ? { y: 0 } : { y: scaleYE }}
            >
              E
            </motion.span>
            <motion.span
              variants={letter}
              style={isTouchDevice() ? { y: 0 } : { y: scaleYK }}
            >
              K
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="hero-blurb-video-container">
        <motion.div
          className="hero-blurb-container"
          style={
            isTouchDevice()
              ? { y: 0 }
              : { y: scaleYblurb, opacity: scaleYopacity }
          }
        >
          <motion.div
            className="hero-blurb-title-container"
            variants={blurbParent}
            initial="hidden"
            animate="show"
          >
            <motion.div className="blurb-line-container" variants={blurbReveal}>
              <h3>Manchester based </h3>{" "}
              <motion.div
                className="blurb-cover"
                variants={blurbCoverReveal}
              ></motion.div>
            </motion.div>

            <motion.div className="blurb-line-container" variants={blurbReveal}>
              <h3>architects of elevated </h3>{" "}
              <motion.div
                className="blurb-cover"
                variants={blurbCoverReveal}
              ></motion.div>
            </motion.div>
            <motion.div className="blurb-line-container" variants={blurbReveal}>
              <h3>web experiences</h3>{" "}
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
            <Link to="/pricing">
              <p className="hero-cta">Let's work together</p>
            </Link>
            <div className="hero-cta-line"></div>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-video-container"
          variants={videoReveal}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.video
            className="hero-video"
            src={SplashVid}
            title="Buztek Showreel 2023"
            loop
            autoPlay={true}
            muted
            layout
            style={
              isTouchDevice()
                ? {
                    width: "100% ",
                  }
                : { width: scaleYvideoY }
            }
          ></motion.video>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
