import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FooterSection from "../components/FooterSection";
import 'react-toastify/dist/ReactToastify.css';

function LayoutGlobal() {
  return (
    <>

      {/* Conteúdo principal */}
      <Outlet />

      {/* Toast Notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </>
  );
}

export default LayoutGlobal;