import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";

import "../sass/main.scss";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
