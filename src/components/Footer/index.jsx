import React from "react";
import { AppBar, Box } from '@mui/material';
import "./styles.css";


export const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar
        position="static"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "1024px",
          height: "25px",
        }}
      >
        <a>© You!</a>
      </AppBar>
    </Box>
  );
};