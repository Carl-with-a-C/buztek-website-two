import ProjectOne from "../Multimedia/Images/Hakkapo-website-box.jpg";
import ProjectTwo from "../Multimedia/Images/Snowflakes-website-box.jpg";
import ArrowR from "../Multimedia/Vectors/arrowR Large.svg";

const Projects = () => {
  return (
    <section className="projects-section-container container">
      <div className="projects-header-section">
        <div className="projects-title-container">
          <h1>WORK</h1>
        </div>
        <div className="projects-blurb-container">
          <h4>
            From re-branding to <br />
            fully bespoke website builds
          </h4>
        </div>
        <div className="projects-subtitle-container">
          <h4>{`(Projects)`}</h4>
        </div>
      </div>
      <div className="projects-img-section">
        <div className="projects-img-container img-one">
          <img
            src={ProjectOne}
            alt="mockup of website design for a restaurant business"
          />
          <h4>Project One Title</h4>
        </div>
        <div className="projects-img-container img-two">
          <img
            src={ProjectTwo}
            alt="mockup of website design for a clothing business"
          />
          <h4>Project Two Title</h4>
        </div>
      </div>
      <div className="projects-cta-section">
        <div className="projects-cta-content">
          <img src={ArrowR} alt="arrow pointing right" />
          <h2>See all projects</h2>
        </div>
        <div className="projects-cta-line"></div>
      </div>
    </section>
  );
};

export default Projects;
