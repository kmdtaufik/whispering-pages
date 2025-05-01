import React from "react";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import Iconify from "../Iconify/Iconify";
import Input from "../Input/Input";

const Middle = () => {
  return (
    <div className="border-b border-t border-b-indigo-50 border-t-indigo-50">
      <div className="flex items-center justify-between container mx-auto py-3">
        {/* Logo - Hidden on small screens */}
        <img
          src="/Logo.png"
          width="108"
          height="37"
          className="hidden sm:block"
        />

        {/* Search Bar */}
        <div className="flex items-center bg-tertiary w-full sm:w-auto rounded-md sm:rounded-none">
          <div className="flex items-center gap-2 px-4 w-full sm:h-auto h-12">
            {/* Hidden on small screens */}
            <Typography
              variant="small"
              className="hidden sm:block text-nowrap text-black opacity-50"
            >
              All Category
            </Typography>
            <div className="hidden sm:block">
              <div className="h-[20px] w-[2px] bg-black opacity-20"></div>
            </div>
            <Input
              className="p-0 border-0 w-full sm:w-96"
              placeholder="Search Products"
            />
          </div>
          <Button variant="primary" className="hidden sm:block">
            Search
          </Button>
          {/* Search Icon for small screens */}
          <Iconify
            className="block sm:hidden h-6 w-6 text-black opacity-50"
            icon={"solar:search-bold"}
          />
        </div>

        {/* Cart - Hidden on small screens */}
        <div className="hidden sm:block">
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
