import BannerVid from "../../Multimedia/Videos/BuztekBubbles.mp4";

const Banner = () => {
  return (
    <section className="banner-section container">
      <div className="banner-container">
        <div className="pricing-banner">
          <h1 className="banner-title-top">Let's transform</h1>
          <div className="banner-video-container">
            <video
              className="banner-video"
              autoPlay
              loop
              muted
              src={BannerVid}
            ></video>
          </div>
          <h1 className="banner-title-bottom">your online presence</h1>
        </div>
      </div>
      <div className="banner-blurb-container">
        <div className="banner-blurb-title">
          <h4>Looking for a brand-focused web developer?</h4>
        </div>
        <div className="banner-blurb-para">
          <h4>
            We work with businesses to build online identities and applications
            that deepen audience relationships, strengthen brand affinity, and
            drive long-term growth.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Banner;
