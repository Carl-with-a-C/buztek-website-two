import Nav from "./Compnents/Nav";
import Hero from "./Compnents/Hero";
import SmoothScroll from "./Helpers/SmoothScroll.jsx";

import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <SmoothScroll>
        <Hero />
      </SmoothScroll>
    </div>
  );
}

export default App;
