import React from "react";
import Iconify from "../Iconify/Iconify";
import { Link } from "react-router";

const Top = () => {
  return (
    <div className="py-4 hidden md:block font-secondary text-gray-600 uppercase text-xs">
      <div className="container mx-auto flex gap-4 justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <div>
            <a
              href="#"
              className=" hover:text-secondary font-bold border-r pr-2 border-r-gray-400"
            >
              {" "}
              Membership
            </a>
          </div>

          <div>
            <a
              href="#"
              className=" hover:text-secondary font-bold border-r pr-2 border-r-gray-400"
            >
              {" "}
              Coupon & deals
            </a>
          </div>

          <div>
            <a href="#" className=" hover:text-secondary font-bold ">
              {" "}
              bestsellers
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          {" "}
          <Link
            to={"#"}
            className="flex items-center gap-1 font-bold font-secondary"
          >
            <Iconify icon={"material-symbols:person-outline"}></Iconify>
            <span>Account</span>
          </Link>
          <Link
            to={"#"}
            className="flex items-center gap-1 font-bold font-secondary"
          >
            <Iconify icon={"mdi:heart-outline"}></Iconify>
            <span>Wishlist</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top;
