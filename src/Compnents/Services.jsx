import DesignImg from "../Multimedia/Images/design-colors.webp";
import BuildImg from "../Multimedia/Images/build-colors.jpg";
import SecureImg from "../Multimedia/Images/secure-colors.jpeg";

const Services = () => {
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
          <img src={DesignImg} alt="colourful pencils" />
          <h1>DESIGN</h1>
          <h4>
            LORUM Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
            elit, sit amet, consectetur <br />
            adipiscing elit
          </h4>
        </div>
        <div className="service-container service-two">
          <img src={BuildImg} alt="computer code on a screen" />
          <h1>BUILD</h1>
          <h4>
            LORUM Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
            elit, sit amet, consectetur <br />
            adipiscing elit
          </h4>
        </div>
        <div className="service-container service-three">
          <img src={SecureImg} alt="a lock and chain on a door" />
          <h1>SECURE</h1>
          <h4>
            LORUM Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
            elit, sit amet, consectetur <br />
            adipiscing elit
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Services;
