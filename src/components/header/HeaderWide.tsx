import React from "react";
import {useRouter} from "next/router";
import {Box, Typography} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import HeaderTitle from "./HeaderTitle";
import Link from "../../utils/components/Link";
import NavBarMenu from "./NavBarMenu";

const useStyles = makeStyles(theme=>createStyles({
  wideHeaderStyle:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    [theme.breakpoints.down(960)]:{
      display:"none"
    }
  }
}));

export default function HeaderWide() {

  const classes = useStyles();
  const router = useRouter();

  const aboutTextStyle = {
    color:"black",
    fontSize:"0.9rem",
    fontWeight:router.pathname === "/about" ? 700 : 400,
    textDecoration:router.pathname === "/about" ? "underline" : ""
  };

  const contactTextStyle = {
    color:"black",
    fontSize:"0.9rem",
    fontWeight:router.pathname === "/contact" ? 700 : 400,
    textDecoration:router.pathname === "/contact" ? "underline" : ""
  };

  return (
    <Box className={classes.wideHeaderStyle} >

      <Box display="flex"
           flexDirection="row"
           justifyContent="flex-start"
           alignItems="center"
           width={0.35}
      >

        <NavBarMenu/>
        <HeaderTitle/>

      </Box>

      <Box display="flex"
           width={0.6}
           justifyContent="space-around"
           alignItems="center"
      >

        <Link  href="/about">
          <Typography style={aboutTextStyle}>
            About us
          </Typography>
        </Link>

        <Link  href="/contact" >
          <Typography style={contactTextStyle}>
            Contact us
          </Typography>
        </Link>

      </Box>
    </Box>
  )

}

