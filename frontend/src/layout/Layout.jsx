import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
// import Footer from "";
const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet />
        {/* <Footer/> */}
    </div>
  );
};
export default Layout;
