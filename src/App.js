import Nav from "./Compnents/Nav";
import Hero from "./Compnents/Hero";
import About from "./Compnents/About";
import SmoothScroll from "./Helpers/SmoothScroll.jsx";

import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <SmoothScroll>
        <Hero />
        <About />
      </SmoothScroll>
    </div>
  );
}

export default App;
