import React from "react";
import {useRouter} from "next/router";
import {
  Box, Accordion, AccordionSummary, AccordionDetails, ListItem, ListItemText
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface NavBarListProps {
  onMenuClick:()=>void,
  onAboutClick?:()=>void
}

export default function NavBarList(props:NavBarListProps){

  const router = useRouter();

  const expandPanelStyle = {
    paddingBottom:0,
    fontSize:"0.9rem",
    fontWeight:400
  };

  const expandItemStyle = {
    padding: "8px 0 8px 16px"
  };

  const listItemTextStyle = {
    padding: "0 0 0 16px"
  };

  const tagStyle = {
    fontWeight: 300
  };

  const orderTextStyle = {
    fontWeight: 400,
  };

  const onAboutClick = ()=>{
    props.onMenuClick();
    router.push("/about").then();
  };

  const onContactClick = ()=>{
    props.onMenuClick();
    router.push("/contact").then();
  };


  return (
    <>
      <Accordion>
        <Box bgcolor="background.default">
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={expandPanelStyle}>
            About
          </AccordionSummary>
        </Box>

        <Box bgcolor="background.default">
          <AccordionDetails style={expandItemStyle}>
            <ListItem button onClick={onAboutClick} style={listItemTextStyle}>
              <ListItemText
                primary="About"
                disableTypography style={tagStyle}
              />
            </ListItem>
          </AccordionDetails>
        </Box>

        <Box bgcolor="background.default">
          <AccordionDetails style={expandItemStyle}>
            <ListItem button onClick={props.onAboutClick} style={listItemTextStyle}>
              <ListItemText
                primary="Contact"
                disableTypography style={tagStyle}
              />
            </ListItem>
          </AccordionDetails>
        </Box>

      </Accordion >

      <Accordion defaultExpanded>

        <Box bgcolor="background.default">
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={expandPanelStyle}>
            Contact
          </AccordionSummary>
        </Box>

        <AccordionDetails style={expandItemStyle}>
          <ListItem button onClick={onAboutClick} style={listItemTextStyle}>
            <ListItemText
              primary="About"
              disableTypography style={tagStyle}
            />
          </ListItem>
        </AccordionDetails>

        <AccordionDetails style={expandItemStyle}>
          <ListItem button onClick={onContactClick} style={listItemTextStyle}>
            <ListItemText
              primary="Contact"
              disableTypography style={tagStyle}
            />
          </ListItem>
        </AccordionDetails>

      </Accordion>

      <Box bgcolor="background.default" mt={2}>
        <ListItem button onClick={onContactClick} style={listItemTextStyle}>
          <ListItemText
            primary="Contact"
            disableTypography style={orderTextStyle}
          />
        </ListItem>
      </Box>

    </>
  )
};

