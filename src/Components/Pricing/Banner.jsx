import BannerVid from "../../Multimedia/Videos/BuztekBubbles.mp4";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="banner-section container">
      <motion.div className="banner-container">
        <motion.div
          className="pricing-banner"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 1 }}
          transition={{ delay: 1.25, duration: 1.75, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>
      </motion.div>
      <motion.div
        className="banner-blurb-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ scaleY: 1 }}
        transition={{ delay: 2, duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      >
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
      </motion.div>
    </section>
  );
};

export default Banner;
