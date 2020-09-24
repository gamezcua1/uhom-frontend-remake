import React from "react";
import DesktopNavbar from "../components/layout/DesktopNavbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <DesktopNavbar />
      {children}
    </>
  );
};

export default MainLayout;
