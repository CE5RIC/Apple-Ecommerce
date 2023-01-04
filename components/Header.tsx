import React from "react";
import Image from "next/legacy/image";

function Header() {
  return (
    <header>
      <div>
        <Image
          src={"https://rb.gy/vsvv2o"}
          layout="fill"
          objectFit="contain"
          alt={"Apple Logo"}
        />
      </div>
    </header>
  );
}

export default Header;
