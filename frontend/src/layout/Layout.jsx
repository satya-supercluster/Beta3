import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "";
// import Footer from "";
const Layout = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Outlet />
        {/* <Footer/> */}
    </div>
  );
};
export default Layout;
