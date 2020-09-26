import React from "react";
import DesktopNavbar from "../components/layout/DesktopNavbar";
import { UserContextProvider } from "../lib/context/UserContext";

const MainLayout = ({ children }) => (
  <UserContextProvider>
    <DesktopNavbar />
    {children}
  </UserContextProvider>
);

export default MainLayout;
