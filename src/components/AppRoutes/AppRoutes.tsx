import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../views/Home/Home";
import Blog from "../../views/Blog/Blog";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
