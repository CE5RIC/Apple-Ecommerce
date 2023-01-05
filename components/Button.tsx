import { Box } from "@mui/system";
import React from "react";

interface Props {
  title: string;
  onClick?: () => void;
}

function Button({ title, onClick }: Props) {
  return (
    <>
      <button onClick={onClick}>Buy Now</button>
    </>
  );
}

export default Button;
