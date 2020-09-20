import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Container} from "@material-ui/core";
import Link from "../../utils/Link";
import Button from "@material-ui/core/Button";

export default function ContactContent() {

  const textStyle = {
    fontWeight:300,
    lineHeight:"1.8",
    textAlign:"justify",
    marginTop:"1rem"
  };

  return (
    <Box component={Container} align="center" mt={10}>

      <Typography variant="body2" style={textStyle}>
        Whyshop
      </Typography>

      <Box mt={5}>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go back to the main page
        </Button>
      </Box>

    </Box>
  );

}

