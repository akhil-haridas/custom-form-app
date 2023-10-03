import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
const HomePage = React.lazy(() => import("../pages/HomePage"));
const FormPage = React.lazy(() => import("../pages/FormPage"));


const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/forms" element={<FormPage />} />
    </Routes>
  );
};
export default ProjectRoutes;
