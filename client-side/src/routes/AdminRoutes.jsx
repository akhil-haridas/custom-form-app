import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/User/NotFound";
const HomePage = React.lazy(() => import("../pages/Admin/HomePage"));

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/login" element={<HomePage />} />
    </Routes>
  );
};
export default ProjectRoutes;
