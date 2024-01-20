import ApproachVid from "../../Multimedia/Videos/ApproachLoop.mp4";

const Approach = () => {
  return (
    <section className="approach-section-container container">
      <div className="approach-header-container">
        <div className="approach-header-title-container">
          <h2>Working, Together</h2>
        </div>
        <div className="approach-header-para-container">
          <h4>Partnership tailored to you.</h4>
        </div>
        <div className="approach-header-subtitle-container">
          <h4>{`(Benefits)`}</h4>
        </div>
      </div>
      <div className="approach-video-list-container">
        <div className="approach-video-container">
          <video
            className="approach-video"
            autoPlay
            loop
            muted
            src={ApproachVid}
          ></video>
        </div>
        <div className="approach-list-container">
          <ol className="approach-list">
            <li className="approach-list-item">
              <div className="appraoch-list-no">
                <h4>01.</h4>
              </div>
              <div className="appraoch-list-blurb">
                <h4 className="approach-list-item-heading">Holistic Apprach</h4>
                <h4 className="approach-list-item-para">
                  We approach each partnership with a holistic mindset. Every
                  choice is intentional, interconnected, and integrates into
                  brand platforms.
                </h4>
              </div>
            </li>
            <li className="approach-list-item">
              <div className="appraoch-list-no">
                <h4>02.</h4>
              </div>
              <div className="appraoch-list-blurb">
                <h4 className="approach-list-item-heading">
                  Tailored Partnership
                </h4>
                <h4 className="approach-list-item-para">
                  We adapt to your needs with ease, enabling efficient
                  workflows, and providing high-touch, high-quality partnerships
                  for every client we work with.
                </h4>
              </div>
            </li>
            <li className="approach-list-item">
              <div className="appraoch-list-no">
                <h4>03.</h4>
              </div>
              <div className="appraoch-list-blurb">
                <h4 className="approach-list-item-heading">
                  Seamless Experience
                </h4>
                <h4 className="approach-list-item-para">
                  We make the most of every partnership, turning complex
                  challenges into deeply integrated, highly collaborative
                  experiences.
                </h4>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Approach;
