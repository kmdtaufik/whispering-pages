import React from "react";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import Iconify from "../Iconify/Iconify";
import Input from "../Input/Input";

const Middle = () => {
  return (
    <div>
      <div className="flex items-center justify-between container mx-auto py-3">
        <img src="/Logo.png" width="108" height="37" />

        <div className="flex items-center bg-tertiary">
          <div className=" flex items-center gap-2  px-4">
            <Typography
              variant="small"
              className=" text-nowrap text-black opacity-50"
            >
              All Cateogry
            </Typography>
            <div className="">
              <div className="h-[20px] w-[2px] bg-black opacity-20"></div>
            </div>
            {/* <input className="w-92 outline-none" placeholder="" /> */}
            <Input
              //   label="Username"
              //   name="username"
              className="p-0 border-0 w-92"
              placeholder="Search Products"
            />
          </div>
          <Button variant="primary">Search</Button>
        </div>

        <div className="">
          <div className="relative">
            <div className="bg-primary absolute right-0 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center">
              1
            </div>
            <Iconify className="h-20 w-20" icon={"solar:cart-linear"}></Iconify>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
