import Layout from "./Components/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Pricing from "./Pages/Pricing.jsx";

import useLocalStorage from "use-local-storage";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./sass/main.scss";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const location = useLocation();

  return (
    <div className="App" data-theme={theme} id="home">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home theme={theme} setTheme={setTheme} />} />
            <Route path="*" element={<Home theme={theme} />} />
            <Route
              path="pricing"
              element={<Pricing theme={theme} setTheme={setTheme} />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
