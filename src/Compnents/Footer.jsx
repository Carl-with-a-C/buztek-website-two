import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container container">
      <div className="footer-links-container">
        <div className="footer-sitemap-links">
          <div className="footer-sitemap-heading">
            <h4>Sitemap</h4>
          </div>
          <ul>
            <li>
              <a href="#">
                <h4>Home</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>About</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Services</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Projects</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Contact</h4>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-socials-links">
          <div className="footer-socials-heading">
            <h4>Socials</h4>
          </div>
          <ul>
            <li>
              <a href="#">
                <h4>Behance</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Instagram</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>LinkedIn</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-logo">Buztek</div>
        <h4>back to top</h4>
        <h4>Copyright @ Buztek 2023</h4>
      </div>
    </footer>
  );
};

export default Footer;
