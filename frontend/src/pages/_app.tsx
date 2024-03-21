import Head from "next/head";
import cookie from "cookie";
import { NextPageContext } from "next";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MyStory.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
