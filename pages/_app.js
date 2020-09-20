import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme/theme";
import {ShareContextProvider} from "../src/utils/ShareContext";

export default function MyApp(props) {
  const {Component, pageProps} = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const mainStyle = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    minHeight:"100vh"
  };

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

            <div style={mainStyle}>

              <ShareContextProvider>
                <Component {...pageProps} />
              </ShareContextProvider>

            </div>

          </ThemeProvider>

        </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
