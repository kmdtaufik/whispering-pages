import React from "react";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import Iconify from "../Iconify/Iconify";
import Input from "../Input/Input";

const Middle = () => {
  return (
    <div className="border-b border-t border-b-indigo-50 border-t-indigo-50 hidden md:block">
      <div className="flex items-center justify-between container mx-auto py-3">
        {/* Logo */}
        <img src="/Logo.png" width="108" height="37" />

        {/* Search Bar */}
        <div className="flex items-center bg-tertiary w-[60%] rounded-md">
          <div className="flex items-center gap-2 px-4 w-full h-12">
            <Typography
              variant="small"
              className="text-nowrap text-black opacity-50"
            >
              All Category
            </Typography>
            <div>
              <div className="h-[20px] w-[2px] bg-black opacity-20"></div>
            </div>
            <Input
              className="p-0 border-0 w-full"
              placeholder="Search Products"
            />
          </div>
          <Button variant="primary">Search</Button>
        </div>

        {/* Cart */}
        <div>
          <div className="relative">
            <div className="bg-primary absolute right-0 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center">
              1
            </div>
            <Iconify className="h-12 w-12" icon={"solar:cart-linear"}></Iconify>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
