import React from "react";
import {Typography, Box, Link} from "@material-ui/core";

export default function Footer() {

  const textStyle = {
    fontWeight:300
  };

  const linkStyle = {
    fontWeight:500
  };

  return (
    <Box id="footer"
         mt={5}
         py={1.5}
         bgcolor="orange"
         display="flex"
         justifyContent="center"
    >

      <Typography variant="body2" style={textStyle}>

        {`© `}

        <Link href="#" style={linkStyle}>
          {process.env.NEXT_PUBLIC_APP_NAME}
        </Link>

        {` ${new Date().getFullYear()}`}

      </Typography>

    </Box>
  );

}

