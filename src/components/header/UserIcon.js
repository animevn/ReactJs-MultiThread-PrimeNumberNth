import React/*, {useContext, useState}*/ from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Divider from "@material-ui/core/Divider";

const iconSize = {xs:"2rem", sm:"2.5rem", md:"2.5rem", lg:"3rem", xl:"3rem"};

export default function UserIcon() {

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const onAddClick = ()=>{
  //   setAnchorEl(null);
  //   history.push("/product_minify/addpost");
  // };
  //
  // function onLogoutClick() {
  //   setAnchorEl(null);
  //   if (currentUser){
  //     firebase.auth().signOut().catch(err=>alert(err));
  //   }
  // }
  //
  // function onDeleteUser() {
  //   setAnchorEl(null);
  //   if (currentUser){
  //     firebase.auth().currentUser.delete().catch(err=>alert(err));
  //   }
  // }
  //
  // function handleLogin() {
  //   setAnchorEl(null);
  //   history.push("/login");
  // }

  // if (currentUser && !anonimous){
  //   return (
  //     <Box display="flex" flexDirection="row" justifyContent="center">
  //       <Box>
  //         <IconButton >
  //           <Box fontSize={iconSize} display="flex" flexDirection="row" justifyContent="center">
  //             <AccountCircleIcon fontSize="inherit"/>
  //           </Box>
  //         </IconButton>
  //       </Box>
  //
  //       <Box>
  //         <Menu
  //           id="simple-menu"
  //           anchorEl={anchorEl}
  //           keepMounted
  //           open={Boolean(anchorEl)}
  //           onClose={handleClose}
  //         >
  //           <MenuItem>{currentUser.email}</MenuItem>
  //           <Divider/>
  //           <MenuItem >Profile</MenuItem>
  //           <MenuItem >Delete my account</MenuItem>
  //           <MenuItem >Logout</MenuItem>
  //         </Menu>
  //       </Box>
  //     </Box>
  //   )
  // }else {
  //   return (
  //     <Box display="flex" flexDirection="row" justifyContent="center">
  //       <Box >
  //         <IconButton>
  //           <Box fontSize={iconSize} display="flex" flexDirection="row" justifyContent="center">
  //             <AccountCircleOutlinedIcon fontSize="inherit"/>
  //           </Box>
  //         </IconButton>
  //       </Box>
  //     </Box>
  //   );
  // }

  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Box >
        <IconButton>
          <Box fontSize={iconSize} display="flex" flexDirection="row" justifyContent="center">
            <AccountCircleOutlinedIcon fontSize="inherit"/>
          </Box>
        </IconButton>
      </Box>
    </Box>
  );

}


