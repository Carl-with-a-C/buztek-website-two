import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

import { motion } from "framer-motion";

const Home = ({ theme, setTheme }) => {
  return (
    <div>
      <Nav theme={theme} setTheme={setTheme} />
      <Hero />
      <About theme={theme} />
      <Projects theme={theme} />
      <Services />
      <Testimonials theme={theme} />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

export default Home;
