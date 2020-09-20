import React from "react";
import {Box} from "@material-ui/core";
import Head from "next/dist/next-server/lib/head";
import {makeStyles} from "@material-ui/core/styles";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const useStyle = makeStyles(theme=>({

  containerStyle:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    minHeight:"100vh"
  },

  mainStyle:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    marginTop:"5rem",
    [theme.breakpoints.down(600)]:{
      flexDirection:"column"
    }
  }

}));

export default function PageLayout(props) {

  const classes = useStyle();
  const {headTitle, children} = props;
  const margin = {xs:2, sm:3, md:5, lg:6, xl:9};

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>

      <div className={classes.containerStyle}>

        <Header />

        <Box component="main"
             className={classes.mainStyle}
             mx={margin}
        >

          {children}

        </Box>

        <Footer/>

      </div>

    </>
  )

}