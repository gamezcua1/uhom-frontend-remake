import React from "react";
import "../styles/index.scss";
import "semantic-ui-css/semantic.min.css";
import "../components/layout/DesktopNavbar";
import DesktopNavbar from "../components/layout/DesktopNavbar";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DesktopNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
