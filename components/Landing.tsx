import { Box, Button, Grid, Link, Paper } from "@mui/material";
import React from "react";

function Landing() {
  return (
    <>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <h1>Iphone 14</h1>
          <h2>Big and bigger.</h2>
        </Box>

        <Box
          component="img"
          sx={{
            //objectFit: "cover",
            height: 800,
            widht: 800,
          }}
          alt="Iphone 14 image"
          src="iphonenew.png"
        />
      </Box>
    </>
  );
}

export default Landing;
