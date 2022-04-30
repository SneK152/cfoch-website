import "styles/globals.css";
import type { AppProps } from "next/app";
import Container from "@components/layout/Container";
import Page from "@lib/types/Page";

function MyApp({ Component, pageProps }: AppProps & { Component: Page }) {
  return (
    <Container title={Component.title}>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
