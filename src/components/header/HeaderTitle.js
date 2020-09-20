import React from "react";
import {Button, Typography} from "@material-ui/core";
import Link from "../../utils/Link";
import {useRouter} from "next/router";


export default function HeaderTitle() {

  const router = useRouter();

  const fontSizeTitle = {xs:"1.2rem", sm:"1.5rem", md:"1.5rem", lg:"1.5rem", xl:"1.5rem"};

  const homeTitleStyle = {
    fontSize:fontSizeTitle,
    fontWeight:router.pathname === "/" ? "700" : "400",
  };

  return (
    <Button component={Link} naked href="/">
      <Typography style={homeTitleStyle}>
        {process.env.NEXT_PUBLIC_APP_NAME}
      </Typography>
    </Button>
  );

}

