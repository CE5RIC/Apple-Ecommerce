import { Box, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";

interface Props {
  device: Device;
}

function Device({ device }: Props) {
  const quantity = 0;

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: 600,
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

      <Box>
        {" "}
        {quantity === 0 ? (
          <Button>Add to cart</Button>
        ) : (
          <Box>
            <Button>-</Button>
            <Box>
              <span>{quantity} in cart</span>
            </Box>
            <Button>+</Button> <Button>Remove</Button>{" "}
          </Box>
        )}
      </Box>
    </>
  );
}

export default Device;
