import React from "react";
import {Box, Typography} from "@material-ui/core";
import Link from "../../utils/components/Link";

export default function ContactContent() {

  const textStyle = {
    fontWeight:300,
    lineHeight:"1.8",
    marginTop:"1rem"
  };

  return (
    <Box textAlign="justify">

      <Typography variant="body2" style={textStyle}>
        You cant, for now :)
      </Typography>

      <Box mt={5}>
        <Link href="/">
          Go back to the main page
        </Link>
      </Box>

    </Box>
  );

}

