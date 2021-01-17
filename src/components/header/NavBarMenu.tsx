import React, {useState} from "react";
import {Box, IconButton, Divider, SwipeableDrawer} from "@material-ui/core";
import {ArrowForwardRounded, Menu} from '@material-ui/icons';
import UserIcon from "./UserIcon";
import NavBarList from "./NavBarList";

export default function NavBarMenu() {

  const [state, setState] = useState(false);

  const toggleDrawer = (value:boolean) => (event:React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === 'keydown' && (
      (event as React.KeyboardEvent).key === 'Tab' ||
      (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setState(value);
  };

  const listWidth =  {xs:"60vw", sm:"350px", md:"350px", lg:"350px", xl:"350px"};

  const onMenuClick = ()=>{
    setState(false);
  };

  const listOfNavItems = ()=>(

    <Box width={listWidth} role="presentation">

      <Box bgcolor="transparent">

        <Box display="flex" flexDirection="row" justifyContent="space-between" my="auto">
          <Box ml={1}>
            <UserIcon/>
          </Box>

          <IconButton onClick={()=>{setState(false)}}>
            <ArrowForwardRounded/>
          </IconButton>
        </Box>

        <Divider/>

        <NavBarList onMenuClick={onMenuClick}/>

      </Box>
    </Box>
  );
  

  const fontSize = {xs:"1.5rem", sm:"1.8rem", md:"2rem", lg:"2rem", xl:"2rem"};

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <Box fontSize={fontSize} display="flex" flexDirection="row" justifyContent="center">
          <Menu fontSize="inherit"/>
        </Box>
      </IconButton>
      <SwipeableDrawer anchor="left" open={state}
                       onOpen={toggleDrawer(true)}
                       onClose={toggleDrawer(false)}
                       disableSwipeToOpen={true}
      >
        {listOfNavItems()}
      </SwipeableDrawer>
    </>
  );

}

