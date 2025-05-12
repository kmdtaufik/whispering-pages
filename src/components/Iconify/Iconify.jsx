import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Iconify = ({ icon, className = "", style, width, height }) => {
  return (
    <Icon
      icon={icon}
      className={className}
      style={style}
      width={width}
      height={height}
    ></Icon>
  );
};

export default Iconify;
