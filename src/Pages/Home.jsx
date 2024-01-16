import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
const Home = ({ theme, setTheme }) => {
  return (
    <div>
      <Nav theme={theme} setTheme={setTheme} />
      <Hero />
      <About theme={theme} />
      <Projects theme={theme} />
      <Services />
    </div>
  );
};

export default Home;
