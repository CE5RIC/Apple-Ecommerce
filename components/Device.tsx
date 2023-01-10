import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";

interface Props {
  device: Device;
}

function Device({ device }: Props) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: 64,
          width: "full",
          display: "flex",

          select: "none",
          flex: "column",
        }}
      >
        <img src={urlFor(device.image[0]).url()} />
      </Box>

      <Box>
        <p>{device.title}</p>
        <p>{device.price}</p>
      </Box>

      <Box></Box>
    </>
  );
}

export default Device;
