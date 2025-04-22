import React from "react";
import Typography from "../Typography/Typography";
import Iconify from "../Iconify/Iconify";

const Top = () => {
  return (
    <div className="py-4 bg-tertiary ">
      <div className="container mx-auto flex gap-4 justify-end">
        <div className="flex items-center gap-2">
          <Iconify icon={"material-symbols:person-outline"}></Iconify>
          <Typography variant="small">Account</Typography>
        </div>
        <div className="">
          <div className="h-full w-[2px] bg-secondary"></div>
        </div>
        <div className="flex items-center gap-2">
          <Iconify icon={"mdi:heart-outline"}></Iconify>
          <Typography variant="small">Wishlist</Typography>
        </div>
      </div>
    </div>
  );
};

export default Top;
