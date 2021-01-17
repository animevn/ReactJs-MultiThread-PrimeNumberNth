import React from "react";
import {Box, useScrollTrigger, AppBar, Slide} from "@material-ui/core";
import HeaderWide from "./HeaderWide";
import HeaderMobile from "./HeaderMobile";

interface HeaderProps {
  trigger?:boolean
}

export default function Header(props:HeaderProps) {

  const triggerScrollToTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  const appBarStyle = {
    backgroundColor:"orange",
  };

  return (
    <Slide appear={false} direction="down" in={!props.trigger}>
      <AppBar
        id="appbar"
        style={appBarStyle}
        component={Box}
        elevation={triggerScrollToTop ? 1 : 0}
      >
        <HeaderMobile/>
        <HeaderWide/>
      </AppBar>
    </Slide>
  )
}

