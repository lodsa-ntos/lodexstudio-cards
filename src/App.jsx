import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutGlobal from "./layout/LayoutGlobal";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./layout/ErrorBoundary";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<LayoutGlobal />}>
          <Route index element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
