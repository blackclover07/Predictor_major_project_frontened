import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
