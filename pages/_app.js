import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AuthState from "../hooks/AuthContext/AuthState";
import DataState from "../hooks/DataContext/DataState";
import Layout from "../components/common/Layout";
import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>BARCLAYS | PRIME</title>
        <meta name="description" content="Sense Pro by Bits and Bytes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthState>
        <DataState>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer />
        </DataState>
      </AuthState>
    </React.Fragment>
  );
}

export default MyApp;
