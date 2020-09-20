import React from "react";
import {Typography, Box, Link, Divider} from "@material-ui/core";

export default function Footer() {

  const textStyle = {
    fontWeight:300
  };

  const linkStyle = {
    fontWeight:500
  };

  return (
    <Box align="center" mt={5} bgcolor="white" id="footer">

      <Divider style={{backgroundColor:"black"}}/>

      <Box mb={0.5} mt={0.5}>

        <Typography variant="body2" style={textStyle}>

          <span>©&nbsp;</span>
          <Link href="#" style={linkStyle}>
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Link>
          <span>&nbsp;{"  " + new Date().getFullYear()}.</span>

        </Typography>
      </Box>
    </Box>
  );

}

