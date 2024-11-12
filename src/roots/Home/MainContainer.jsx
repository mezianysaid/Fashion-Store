import React from "react";
import Navbar from "../../components/NavBar/navBar";
import { Outlet } from "react-router-dom";
function MainContainer() {
  return (
    <div className="mainContainer">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainContainer;
