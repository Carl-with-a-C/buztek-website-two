import { motion } from "framer-motion";

import DesignImg from "../Multimedia/Images/design-colors.webp";
import BuildImg from "../Multimedia/Images/build-colors.jpg";
import SecureImg from "../Multimedia/Images/secure-colors.jpeg";

const Services = () => {
  const serviceLetter = {
    hidden: { opacity: 0.25 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.78, 0.01, 0.21, 1],
      },
    },
  };

  return (
    <section className="services-section-container container">
      <div className="services-header-container">
        <div className="services-heading">
          <h4>{`(Services)`}</h4>
        </div>
        <div className="services-blurb">
          <h4>
            LORUM Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit
          </h4>
        </div>
        <div className="services-cta">
          <h4>Learn more about us</h4>
          <div className="services-cta-line"></div>
        </div>
      </div>
      <div className="services-main-container">
        <div className="service-container service-one">
          <div className="service-img-container">
            <img src={DesignImg} alt="colourful pencils" />
          </div>
          <motion.h1
            variants={serviceLetter}
            initial="hidden"
            whileHover="show"
            whileFocus="show"
          >
            DESIGN
          </motion.h1>
          <div className="service-blurb-container">
            <h4>
              Our design process will help to
              <br /> identify your brand story and express it <br />
              in a compelling way
            </h4>
          </div>
        </div>
        <div className="service-container service-two">
          <div className="service-img-container">
            <img src={BuildImg} alt="computer code on a screen" />
          </div>
          <motion.h1
            variants={serviceLetter}
            initial="hidden"
            whileHover="show"
            whileFocus="show"
          >
            BUILD
          </motion.h1>
          <div className="service-blurb-container">
            <h4>
              LORUM Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
              elit, sit amet, consectetur <br />
              adipiscing elit
            </h4>
          </div>
        </div>
        <div className="service-container service-three">
          <div className="service-img-container">
            <img src={SecureImg} alt="a lock and chain on a door" />
          </div>
          <motion.h1
            variants={serviceLetter}
            initial="hidden"
            whileHover="show"
            whileFocus="show"
          >
            SECURE
          </motion.h1>
          <div className="service-blurb-container">
            <h4>
              LORUM Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
              elit, sit amet, consectetur <br />
              adipiscing elit
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
