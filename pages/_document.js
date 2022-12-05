/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  if (typeof window === "undefined") {
    return (
      <Html className="darkMode">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
  return (
    <Html className={colorMode} style={{ height: "100%" }}>
      <Head></Head>
      <body style={{ height: "100%" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
