import React from "react";
import {Button, Typography} from "@material-ui/core";
import Link from "../../utils/components/Link";
import {useRouter} from "next/router";

export default function HeaderTitle() {

  const router = useRouter();

  const homeTitleStyle = {
    fontSize:"1.2rem",
    fontWeight:router.pathname === "/" ? 700 : 400,
  };

  return (
    <Button component={Link} naked href="/">
      <Typography style={homeTitleStyle}>
        {process.env.NEXT_PUBLIC_APP_NAME}
      </Typography>
    </Button>
  );

}

