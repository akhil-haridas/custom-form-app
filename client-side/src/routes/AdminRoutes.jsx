import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/User/NotFound";
const HomePage = React.lazy(() => import("../pages/Admin/HomePage"));
const CreatePage = React.lazy(() => import("../pages/Admin/CreatePage"));
const ListingPage = React.lazy(() => import("../pages/Admin/ListingPage"));

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/forms" element={<ListingPage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  );
};
export default ProjectRoutes;
