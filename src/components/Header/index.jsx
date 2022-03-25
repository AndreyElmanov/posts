import React from "react";
import "./styles.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = ({user}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar position="static" sx={{ width: "1024px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Posts
          </Typography>
          <Button color="inherit">Login</Button>
          <div className="profile">
              {user.email && <span>{user.email}</span>}
              {user.name && <span>{user.name}: {user.about}</span>}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};