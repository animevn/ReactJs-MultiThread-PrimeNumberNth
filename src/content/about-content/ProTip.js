import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

export default function ProTip() {

  const iconStyle = {
    verticalAlign: "middle",
    marginRight: "5px"
  };

  return (
    <Typography>
      <EmojiObjectsOutlinedIcon style={iconStyle}/>
      Pro tip: Contact us{' '}
      <Link href="/contact">NextJs Starter</Link> on here.
    </Typography>
  );
}
