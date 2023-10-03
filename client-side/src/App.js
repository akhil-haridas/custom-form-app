import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes"
import Spinner from "./components/Fallback/Spinner";

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
          <Route path="/admin*" element={<AdminRoutes />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
