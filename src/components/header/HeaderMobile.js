import React from "react";
import {Box} from "@material-ui/core";
import HeaderTitle from "./HeaderTitle";
import NavBarMenu from "./NavBarMenu";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
  mobileHeaderStyle:{
    fontWeight:"500",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    [theme.breakpoints.up("1280")]:{
      display:"none"
    }
  }
}));

export default function HeaderMobile() {

  const classes = useStyles();

  return (
    <Box id="header" className={classes.mobileHeaderStyle}>
      <NavBarMenu/>
      <Box width={1} display="flex" justifyContent="center">
        <HeaderTitle/>
      </Box>
    </Box>
  )

}

