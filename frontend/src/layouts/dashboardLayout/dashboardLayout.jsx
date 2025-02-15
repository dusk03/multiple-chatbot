import React from "react";
import Outlet from "react-router-dom";
const dashboardLayout = () => {
  return (
    <div className="dashboardLayouy">
      <div className="menu"></div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default dashboardLayout;
