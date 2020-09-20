import React from "react";
import {useRouter} from "next/router";
import {Box, Button, Typography} from "@material-ui/core";
import HeaderTitle from "./HeaderTitle";
import Link from "../../utils/Link";
import NavBarMenu from "./NavBarMenu";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
  containerStyle:{
    [theme.breakpoints.down("1280")]:{
      display:"none"
    }
  }
}));

export default function HeaderWide() {

  const router = useRouter();
  const classes = useStyles();

  const aboutTextStyle = {
    fontSize:"0.9rem",
    fontWeight:router.pathname === "/about" ? "700" : "400",
    textDecoration:router.pathname === "/about" ? "underline" : ""
  };

  const contactTextStyle = {
    fontSize:"0.9rem",
    fontWeight:router.pathname === "/contact" ? "700" : "400",
    textDecoration:router.pathname === "/contact" ? "underline" : ""
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between"
         className={classes.containerStyle}
    >

      <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center">
        <NavBarMenu/>
        <HeaderTitle/>
      </Box>

      <Box display="flex" width={0.6}
           flexDirection="row" justifyContent="space-between" alignItems="center">

        <>
          <Button  variant="text" component={Link} naked href="/about">
            <Typography style={aboutTextStyle}>
              About us
            </Typography>
          </Button>
        </>

        <>
          <Button  variant="text" component={Link} naked href="/contact" >
            <Typography style={contactTextStyle}>
              Contact us
            </Typography>
          </Button>
        </>

      </Box>
    </Box>
  )

}

