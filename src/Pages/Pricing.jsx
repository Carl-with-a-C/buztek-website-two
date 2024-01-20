import NavPricing from "../Components/NavPricing";
import Approach from "../Components/Pricing/Approach";
import Banner from "../Components/Pricing/Banner";
import PriceList from "../Components/Pricing/PriceList";

import { motion } from "framer-motion";

const Pricing = ({ theme, setTheme }) => {
  return (
    <div>
      <NavPricing theme={theme} setTheme={setTheme} />
      <Banner />
      <Approach />
      <PriceList />
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

export default Pricing;
