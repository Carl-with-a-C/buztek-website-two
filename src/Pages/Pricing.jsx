import Nav from "../Components/Nav";
import Banner from "../Components/Pricing/Banner";

const Pricing = ({ theme, setTheme }) => {
  return (
    <div>
      <Nav theme={theme} setTheme={setTheme} />
      <Banner />
    </div>
  );
};

export default Pricing;
