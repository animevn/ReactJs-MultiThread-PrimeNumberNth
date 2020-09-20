import React from "react";
import {Box, AppBar, Slide} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger/useScrollTrigger";
import HeaderWide from "./HeaderWide";
import HeaderMobile from "./HeaderMobile";

export default function Header(props) {

  const triggerScrollToTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  const appBarStyle = {
    backgroundColor:"white",
  };

  const margin = {xs:0, sm:1, md:2, lg:4, xl:4};

  return (
    <Slide appear={false} direction="down" in={!props.trigger}>
      <AppBar
        id="appbar"
        style={appBarStyle}
        component={Box}
        px={margin}
        elevation={triggerScrollToTop ? 1 : 0}
      >
        <HeaderWide/>
        <HeaderMobile/>
      </AppBar>
    </Slide>
  )
}

