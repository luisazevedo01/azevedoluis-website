import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../views/Home/Home";
import Blog from "../../views/Blog/Blog";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
