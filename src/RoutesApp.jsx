import "./style/App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Export from "./pages/Export.jsx";
import Parts from "./pages/Parts.jsx";
import Rep from "./pages/Rep.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { partsData } from "./components/parts/partsData.jsx";
import { AnimatePresence } from "framer-motion";
import PartInfo from "./components/parts/PartInfo";
import PartsSection from "./components/parts/PartsSection";
import { useState } from "react";
import { scrollToTop } from "./utils/js/scrollTop";
import IndexParts from "./components/parts/IndexParts";
import Contact from "./pages/Contact";

function RoutesApp() {
  const location = useLocation();
  const path = location.pathname;

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className="App">
      <Header
        scrollToTop={scrollToTop}
        closeMenu={closeMenu}
        openMenu={openMenu}
        isOpenMenu={isOpenMenu}
        path={path}
      />
      <AnimatePresence>
        <Routes key={path}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/export" element={<Export />} />
          <Route path="/parts" element={<Parts />}>
            <Route index element={<IndexParts />} />
            {partsData.map((data, index) => {
              return (
                <>
                  <Route
                    key={index}
                    path={`${data.path}`}
                    element={<PartsSection data={partsData} path={data.path} />}
                  />
                  <Route
                    path={`${data.path}/producto/:id`}
                    element={<PartInfo />}
                  />
                </>
              );
            })}
          </Route>
          <Route path="/rep" element={<Rep />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer scrollToTop={scrollToTop} closeMenu={closeMenu} path={path} />
    </div>
  );
}

export default RoutesApp;
