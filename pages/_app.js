import React from "react";
import Head from "next/head";
import "semantic-ui-css/semantic.min.css";

import "../styles/index.scss";

import axios from "axios";
import MainLayout from "../layouts/MainLayout";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Brindamos acompañamiento y asesoría profesional para que tomes la MEJOR DECISIÓN y vivas la emoción de adquirir la CASA de tus SUEÑOS."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        <title>GoHome&apos;s - Es tiempo de ir a casa</title>
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
