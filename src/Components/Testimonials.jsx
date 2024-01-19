import { Link } from "react-router-dom";

import RJNWLogo from "../Multimedia/Vectors/RJNWlogoBLK.svg";
import RJNWLogoW from "../Multimedia/Vectors/RJNWlogoWHT.svg";
import FlexboxLogo from "../Multimedia/Vectors/FLEXBOXlogoBLK.svg";
import FlexboxLogoW from "../Multimedia/Vectors/FLEXBOXlogoWHT.svg";
import HakkapoLogo from "../Multimedia/Vectors/HakkapoLogoBLK.svg";
import HakkapoLogoW from "../Multimedia/Vectors/HakkapoLogoWHT.svg";

const Testimonials = ({ theme }) => {
  return (
    <section className="testimonials-section-container container">
      <div className="testimonials-header-container">
        <div className="testimonials-heading">
          <h1>From Our Clients</h1>
        </div>
        <div className="testimonials-cta">
          <Link to="/pricing">
            <h4>Let's work together YO</h4>
          </Link>
          <div className="testimonials-cta-line"></div>
        </div>
      </div>

      <div className="testimonial-cards-container">
        <div className="testimonial-card">
          <div className="testimonial-card-logo">
            {" "}
            <img
              src={theme === "dark" ? FlexboxLogoW : FlexboxLogo}
              alt="Logo for garden kitchen company Flexbox"
            />
          </div>
          <div className="testimonial-card-para">
            <h3>
              {
                '"The guys at Buztek were amazing. They were always willing to help and offer their expert advice."'
              }
            </h3>
          </div>
          <div className="testimonial-card-name">
            <h4>Lee, Flexbox</h4>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-card-logo">
            <img
              src={theme === "dark" ? RJNWLogoW : RJNWLogo}
              alt="Logo for roofing company RJNW"
            />
          </div>
          <div className="testimonial-card-para">
            <h3>
              {
                '"The whole process was very smooth and easy. I can’t recommend Buztek enough!"'
              }
            </h3>
          </div>
          <div className="testimonial-card-name">
            <h4>Paul, RJNW</h4>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-card-logo">
            {" "}
            <img
              src={theme === "dark" ? HakkapoLogoW : HakkapoLogo}
              alt="Logo for restaurant company Hakkapo"
            />
          </div>
          <div className="testimonial-card-para">
            <h3>
              {
                '"Carl at Buztek was always available to help us and he is a brilliant communicator."'
              }
            </h3>
          </div>
          <div className="testimonial-card-name">
            <h4>Simon, Hakkapo</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
