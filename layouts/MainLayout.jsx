import React from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { UserContextProvider } from "../lib/context/UserContext";

const MainLayout = ({ children }) => (
  <UserContextProvider>
    <Navbar />
    <div id="base" className="body-container">
      <div className="content">{children}</div>
      <Footer />
    </div>
  </UserContextProvider>
);

export default MainLayout;
