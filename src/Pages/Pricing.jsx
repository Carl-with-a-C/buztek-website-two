import NavPricing from "../Components/NavPricing";
import Approach from "../Components/Pricing/Approach";
import Banner from "../Components/Pricing/Banner";
import PriceList from "../Components/Pricing/PriceList";

const Pricing = ({ theme, setTheme }) => {
  return (
    <div>
      <NavPricing theme={theme} setTheme={setTheme} />
      <Banner />
      <Approach />
      <PriceList />
    </div>
  );
};

export default Pricing;
