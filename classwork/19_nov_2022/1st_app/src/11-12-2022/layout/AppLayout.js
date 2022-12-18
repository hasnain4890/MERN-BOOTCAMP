import React from "react";
import { Outlet } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";

function AppLayout() {
  return (
    <div>
      <Navbar1 />
      <Outlet />
    </div>
  );
}

export default AppLayout;
