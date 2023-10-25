import Nav from "./Compnents/Nav";
import Hero from "./Compnents/Hero";
import About from "./Compnents/About";
import Projects from "./Compnents/Projects";
import Services from "./Compnents/Services";
import Contact from "./Compnents/Contact";
import Footer from "./Compnents/Footer";
import SmoothScroll from "./Helpers/SmoothScroll.jsx";

import useLocalStorage from "use-local-storage";

import "./sass/main.scss";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  return (
    <div className="App" data-theme={theme}>
      <Nav theme={theme} setTheme={setTheme} />
      <SmoothScroll>
        <Hero />
        <About theme={theme} />
        <Projects theme={theme} />
        <Services />
        <Contact />
        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default App;
