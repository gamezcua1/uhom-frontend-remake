import React from "react";
import DesktopNavbar from "../components/layout/DesktopNavbar";
import Footer from "../components/layout/Footer";
import { UserContextProvider } from "../lib/context/UserContext";

const MainLayout = ({ children }) => (
  <UserContextProvider>
    <DesktopNavbar />
    <div className="body-container">
      <div className="content">{children}</div>
      <Footer />
    </div>
  </UserContextProvider>
);

export default MainLayout;
