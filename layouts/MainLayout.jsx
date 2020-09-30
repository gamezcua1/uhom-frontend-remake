import React from "react";
import DesktopNavbar from "../components/layout/DesktopNavbar";
import Footer from "../components/layout/Footer";
import { UserContextProvider } from "../lib/context/UserContext";

const MainLayout = ({ children }) => (
  <UserContextProvider>
    <DesktopNavbar />
    {children}
    <Footer />
  </UserContextProvider>
);

export default MainLayout;
