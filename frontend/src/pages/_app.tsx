import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/organismes/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MyStory.com</title>
        <meta
          name="MyStory.com"
          content="A place to share your stories and read others"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
