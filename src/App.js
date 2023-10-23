import Nav from "./Compnents/Nav";
import Hero from "./Compnents/Hero";
import About from "./Compnents/About";
import Projects from "./Compnents/Projects";
import Services from "./Compnents/Services";
import SmoothScroll from "./Helpers/SmoothScroll.jsx";

import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <SmoothScroll>
        <Hero />
        <About />
        <Projects />
        <Services />
      </SmoothScroll>
    </div>
  );
}

export default App;
