import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../views/Home/Home";
import ProjectDetails from "../../views/ProjectDetails/ProjectDetails";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path=":projectID" element={<ProjectDetails />} />
    </Routes>
  );
};

export default AppRoutes;
