import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
