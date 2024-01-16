import { useState } from "react";
import { motion } from "framer-motion";

const Nav = ({ theme, setTheme }) => {
  const date = new Date();
  const twentyFourHours =
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const twentyFourMinutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  const showTime = twentyFourHours + ":" + twentyFourMinutes;
  const showAmPm = date.getHours() >= 12 ? "pm" : "am";

  const [isOn, setIsOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setIsOn(!isOn);
    setTheme(newTheme);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const linksContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  const links = {
    hidden: { rotateX: "-90deg", y: "16px" },
    show: {
      rotateX: "0deg",
      y: "0px",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.75,
        delay: 0.5,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  const linksCover = {
    hidden: { y: "0%" },
    show: {
      y: "100%",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.75,
        delay: 0.5,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  return (
    <motion.header className="header" data-menuOpen={menuOpen} layout>
      <motion.nav
        className="nav-container container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.75, duration: 1 }}
      >
        <div className="logo-container">
          <a href="#home">
            <span>Buztek</span>
          </a>
        </div>
        <div className="nav-central-container">
          <div className="date-time-container">
            <h4>
              Manchester, England {showTime}
              {` `} {showAmPm}
            </h4>
          </div>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li className="nav-link">
                <a href="#projects">
                  <h4>Projects,</h4>
                </a>
              </li>
              <li className="nav-link">
                <a href="#services">
                  <h4>Services,</h4>
                </a>
              </li>
              <li className="nav-link">
                <a href="#about">
                  <h4>About,</h4>
                </a>
              </li>
              <li className="nav-link">
                <a href="#contact">
                  <h4>Contact</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lightmode-switch-container">
          <div className="switch" data-isOn={isOn} onClick={switchTheme}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        <div className="menu-btn-container">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <div className="menu-btn-text-container" data-menuOpen={menuOpen}>
              <motion.div
                className="menu-btn-text"
                style={menuOpen ? { y: "-50%" } : { y: "0%" }}
                layout
              >
                <h4>menu</h4>
                <h4>close</h4>
              </motion.div>
            </div>
          </button>
        </div>
        <motion.div
          className="drop-down-menu-container container"
          style={
            menuOpen
              ? { y: "0%", transition: { duration: 1, delay: 0.25 } }
              : { y: "-100%" }
          }
        >
          <div className="dropdown-menu-links-container">
            <div className="sitemap-links-container">
              <motion.ul
                className="sitemap-links"
                variants={linksContainer}
                initial="hidden"
                animate={menuOpen ? "show" : "hidden"}
                layout
              >
                <motion.li variants={links}>
                  <a
                    href="#home"
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                  >
                    <motion.h1>Home</motion.h1>
                  </a>
                  <motion.div
                    className="links-cover"
                    variants={linksCover}
                    initial="hidden"
                    animate={menuOpen ? "show" : "hidden"}
                  ></motion.div>
                </motion.li>
                <motion.li variants={links}>
                  <a
                    href="#about"
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                  >
                    <motion.h1>About</motion.h1>
                  </a>
                  <motion.div
                    className="links-cover"
                    variants={linksCover}
                    initial="hidden"
                    animate={menuOpen ? "show" : "hidden"}
                  ></motion.div>
                </motion.li>
                <motion.li variants={links}>
                  <a
                    href="#projects"
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                  >
                    <motion.h1>Projects</motion.h1>
                  </a>
                  <motion.div
                    className="links-cover"
                    variants={linksCover}
                    initial="hidden"
                    animate={menuOpen ? "show" : "hidden"}
                  ></motion.div>
                </motion.li>
                <motion.li variants={links}>
                  <a
                    href="#services"
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                  >
                    <motion.h1>Services</motion.h1>
                  </a>
                  <motion.div
                    className="links-cover"
                    variants={linksCover}
                    initial="hidden"
                    animate={menuOpen ? "show" : "hidden"}
                  ></motion.div>
                </motion.li>

                <motion.li variants={links}>
                  <a
                    href="#contact"
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                  >
                    <motion.h1>Contact</motion.h1>
                  </a>
                  <motion.div
                    className="links-cover"
                    variants={linksCover}
                    initial="hidden"
                    animate={menuOpen ? "show" : "hidden"}
                  ></motion.div>
                </motion.li>
              </motion.ul>
            </div>
            <motion.div
              className="socials-links-container"
              initial={{ opacity: 0 }}
              animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ul className="socials-links">
                <li>
                  <h3>Behance</h3>
                </li>
                <li>
                  <h3>Instagram</h3>
                </li>
                <li>
                  <h3>Linkedin</h3>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Nav;
