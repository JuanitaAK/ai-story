import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/organismes/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AI Story - Create your own story</title>
        <meta
          name="description"
          content="AI Story is a place to create stories and share with others"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoAiStory.png" />
        <meta property="og:title" content="AI Story" />
        <meta property="og:description" content="A place to create stories and share with others" />
        <meta property="og:url" content="https://aistory.adahub.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aistory.adahub.fr/images/logoAiStory.png" />
        <link rel="canonical" href="https://aistory.adahub.fr" />
        <meta http-equiv="content-language" content="en-us" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
