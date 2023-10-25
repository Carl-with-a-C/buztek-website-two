import { motion } from "framer-motion";

const Nav = () => {
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();
  const showAmPm = date.getHours() >= 12 ? "pm" : "am";

  return (
    <header className="header">
      <motion.nav
        className="nav-container container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.75, duration: 1 }}
      >
        <div className="logo-container">
          <span>Buztek</span>
        </div>
        <div className="nav-central-container">
          <div className="date-time-container">
            <h4>
              Manchester, England {showTime}
              {` `} {showAmPm}
            </h4>
          </div>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li className="nav-link">
                <h4>Projects,</h4>
              </li>
              <li className="nav-link">
                <h4>Services,</h4>
              </li>
              <li className="nav-link">
                <h4>About,</h4>
              </li>
              <li className="nav-link">
                <h4>Contact</h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="lightmode-switch-container">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="menu-btn-container">
          <button>
            <h4>menu</h4>
          </button>
        </div>
      </motion.nav>
    </header>
  );
};

export default Nav;
