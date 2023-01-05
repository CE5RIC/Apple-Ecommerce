import { Box, Link, Paper } from "@mui/material";
import React from "react";
import Button from "./Button";

function Landing() {
  return (
    <>
      <Box>
        <h1>Iphone 14</h1>
        <h2>Big and bigger.</h2>
      </Box>

      <Box>
        <Button title="Buy Now" />
        <Link>Learn More</Link>
      </Box>

      <Box>
        <Paper variant="outlined">
          <img src="" />
        </Paper>
      </Box>
    </>
  );
}

export default Landing;
