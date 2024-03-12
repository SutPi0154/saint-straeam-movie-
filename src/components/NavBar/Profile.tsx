import { Avatar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "../PersonIcon";
import { useSession } from "next-auth/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Profile = () => {
  const { data: session } = useSession() as any;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {session.user.image ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={`${session.user.image}`} />
          <IconButton>
            <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      ) : (
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar>
            <PersonIcon borderRadius="50%" />
          </Avatar>
        </IconButton>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => {}}>Profile</MenuItem>
        <MenuItem onClick={() => {}}>My account</MenuItem>
        <MenuItem onClick={() => {}}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
