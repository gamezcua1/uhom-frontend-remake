import React from "react";
import "../styles/index.scss";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../components/layout/DesktopNavbar";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
