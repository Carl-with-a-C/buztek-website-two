import ArrowR from "../Multimedia/Vectors/arrowR Large.svg";

const About = () => {
  return (
    <section className="about-section-container container">
      <div className="about-container">
        <div className="arrow-container">
          <img src={ArrowR} alt="An arrow pointing to the right" />
        </div>
        <div className="about-content-container">
          <div className="about-heading-container">
            <div className="about-heading-line">
              <h2>
                Lorem ipsum dolor sit am, consectetur adipiscing elit lendus
              </h2>
            </div>
          </div>
          <div className="about-blurb-container">
            <div className="about-blurb-subtitle-container">
              <h4>{`(About)`}</h4>
            </div>
            <div className="about-blurb-content-container">
              <div className="about-blurb-heading">
                <h4>What We Do and How We Do It</h4>
              </div>
              <div className="about-blurb-para para-one">
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aenean vel elit, Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt dolore magna
                  aliqua. Aenean vel elit
                </h4>{" "}
              </div>
              <div className="about-blurb-para para-two">
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aenean vel elit
                </h4>
              </div>
              <div className="about-blurb-cta">
                <h4>Learn more about us</h4>
                <div className="about-cta-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
