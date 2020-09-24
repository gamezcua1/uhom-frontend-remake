import React from "react";
import DesktopNavbar from "../components/layout/DesktopNavbar";
import { UserContextProvider } from "../lib/context/UserContext";

const MainLayout = ({ children }) => {
  return (
    <UserContextProvider>
      <DesktopNavbar />
      {children}
    </UserContextProvider>
  );
};

export default MainLayout;
