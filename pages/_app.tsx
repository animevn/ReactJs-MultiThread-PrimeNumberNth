import React, {useEffect} from "react";
import {AppProps} from "next/app";
import Head from "next/head";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ShareContextProvider} from "../src/context/ShareContext";

export default function MyApp(props:AppProps) {
  const {Component, pageProps} = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  // noinspection HtmlUnknownTarget
  return (
    <>
      <Head>
        <title>My page</title>
        <link rel="icon" href="/next.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <ShareContextProvider>
          <Component {...pageProps} />
        </ShareContextProvider>

      </ThemeProvider>

    </>
  );
}


