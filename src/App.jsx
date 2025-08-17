import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutGlobal from "../src/layout/LayoutGlobal";
import LandingPage from "../src/pages/LandingPage";
import NotFound from "../src/pages/NotFound";
import ErrorBoundary from "../src/layout/ErrorBoundary";
import DemoGrid from "./pages/DemoGrid";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<LayoutGlobal />}>
          <Route index element={<LandingPage />} />
          <Route path="/demo" element={<DemoGrid />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
