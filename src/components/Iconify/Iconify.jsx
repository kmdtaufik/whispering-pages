import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Iconify = ({ icon, className = "" }) => {
  return <Icon icon={icon} className={className}></Icon>;
};

export default Iconify;
