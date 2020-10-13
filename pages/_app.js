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
        <link rel="manifest" href="manifest.json" />
        <meta charSet="utf8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="GoHome's" />
        <meta name="apple-mobile-web-app-title" content="GoHome's" />
        <meta name="theme-color" content="#0b3c5d" />
        <meta name="msapplication-navbutton-color" content="#0b3c5d" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Brindamos acompañamiento y asesoría profesional para que tomes la MEJOR DECISIÓN y vivas la emoción de adquirir la CASA de tus SUEÑOS."
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="64x64 32x32 24x24 16x16"
          href="favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="64x64 32x32 24x24 16x16"
          href="favicon.ico"
        />
        <link rel="icon" type="image/png" sizes="512x512" href="logo512.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="512x512"
          href="logo512.png"
        />
        <link rel="icon" type="image/png" sizes="192x192" href="logo192.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192x192"
          href="logo192.png"
        />

        {/* 
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
        <meta name="msapplication-starturl" content="/"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" /> */}

        <title>GoHome&apos;s - Es tiempo de ir a casa</title>
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
