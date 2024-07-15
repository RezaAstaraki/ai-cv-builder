import Image from "next/image";
import React from "react";

const BoxSpinner = ({ width = 24, height = 24 }) => {
  return (
    <Image width={width} height={height} alt="loading" src={"loading.svg"} />
  );
};

export default BoxSpinner;
