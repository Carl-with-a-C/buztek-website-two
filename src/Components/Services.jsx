import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import DesignImg from "../Multimedia/Images/design-colors.webp";
import BuildImg from "../Multimedia/Images/build-colors.jpg";
import SecureImg from "../Multimedia/Images/secure-colors.jpg";

const Services = () => {
  const [serviceOne, setServiceOne] = useState(true);
  const [serviceTwo, setServiceTwo] = useState(false);
  const [serviceThree, setServiceThree] = useState(false);

  return (
    <section className="services-section-container container" id="services">
      <div className="services-header-container">
        <div className="services-heading">
          <h4>{`(Services)`}</h4>
        </div>
        <div className="services-blurb">
          <h4>Transforming your online presence</h4>
        </div>
        <div className="services-cta">
          <Link to="/pricing">
            <h4>Let's work together</h4>
          </Link>
          <div className="services-cta-line"></div>
        </div>
      </div>
      <div className="services-main-container">
        <motion.div
          className="service-container service-one"
          data-serviceone={serviceOne}
          layout="true"
          onMouseEnter={() => {
            setServiceThree(false);
            setServiceTwo(false);
            setServiceOne(true);
          }}
        >
          <h1 className="service-title-mob">DESIGN</h1>

          <div className="service-img-container">
            <img src={DesignImg} alt="colourful pencils" />
          </div>
          <h1>DESIGN</h1>
          <div className="service-blurb-container">
            <h4>
              Our web design services go beyond aesthetics. Our design process
              will help to identify your brand story and express it in a
              compelling way
            </h4>
          </div>
        </motion.div>
        <div
          className="service-container service-two"
          data-servicetwo={serviceTwo}
          layout="true"
          onMouseEnter={() => {
            setServiceThree(false);
            setServiceTwo(true);
            setServiceOne(false);
          }}
        >
          <h1 className="service-title-mob">BUILD</h1>
          <div className="service-img-container">
            <img src={BuildImg} alt="computer code on a screen" />
          </div>
          <h1>BUILD</h1>
          <div className="service-blurb-container">
            <h4>
              We create websites that are not only visually stunning but also
              functional, intuitive, and tailored to meet the unique needs of
              your business.
            </h4>
          </div>
        </div>
        <div
          className="service-container service-three"
          data-servicethree={serviceThree}
          layout="true"
          onMouseEnter={() => {
            setServiceThree(true);
            setServiceTwo(false);
            setServiceOne(false);
          }}
        >
          <h1 className="service-title-mob">SECURE</h1>

          <div className="service-img-container">
            <img src={SecureImg} alt="a lock and chain on a door" />
          </div>
          <h1>SECURE</h1>
          <div className="service-blurb-container">
            <h4>
              Our security build services guarantee that your website is
              fortified against cyber threats, providing a secure environment
              for your business and your users.
            </h4>
          </div>
        </div>
        <div className="services-cta mobile-cta">
          <h4>Learn more about us</h4>
          <div className="services-cta-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
