import { Box, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";

interface Props {
  device: Device;
}

function Device({ device }: Props) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(device));
  };

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

      <Button onClick={addItemToBasket}>
        <ShoppingCartIcon />
      </Button>
    </>
  );
}

export default Device;
