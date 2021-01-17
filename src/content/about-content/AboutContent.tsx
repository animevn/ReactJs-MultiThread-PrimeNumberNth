import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../../utils/components/Link";
import ProTip from "./ProTip";

export default function AboutContent() {

  const textStyle = {
    fontWeight:300,
    lineHeight:"1.8",
    marginTop:"1rem"
  };

  return (
    <Box textAlign="center" mt={10}>

      <Typography variant="body2" style={textStyle}>
        Whyshop?
      </Typography>

      <Box mt={5}>
        <Link href="/">
          Go back to the main page
        </Link>
      </Box>

      <Box mt={5}>
        <ProTip/>
      </Box>

    </Box>
  );

}

