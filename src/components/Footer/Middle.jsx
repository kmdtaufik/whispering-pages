import React from "react";
import Iconify from "../Iconify/Iconify";
import { Link } from "react-router";

export default function Middle() {
  const socialLinks = [
    { name: "Facebook", icon: "mdi:facebook" },
    { name: "Twitter", icon: "mdi:twitter" },
    { name: "Instagram", icon: "mdi:instagram" },
    { name: "YouTube", icon: "mdi:youtube" },
  ];
  return (
    <section className="border-t border-t-gray-200  mx-auto px-4 font-secondary">
      <div className="flex flex-col md:flex-row justify-between items-center py-2 gap-2 container mx-auto">
        <div className="flex items-center gap-2 md:gap-3 bg-white">
          {socialLinks &&
            socialLinks.map((link, index) => (
              <Link
                key={index}
                to={"#"}
                className="border border-gray-300 transition-colors duration-300 rounded-full hover:bg-secondary"
              >
                <Iconify
                  icon={link.icon}
                  className=" rounded-full h-auto w-auto p-2.5 hover:text-white  text-secondary"
                />
              </Link>
            ))}
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Iconify icon={"logos:mastercard"} className="w-10 h-auto"></Iconify>
          <Iconify icon={"logos:visa"} className="w-10 h-auto"></Iconify>
          <Iconify
            icon={"simple-icons:applepay"}
            className="w-10 h-auto"
          ></Iconify>
          <Iconify icon={"logos:paypal"} className="w-10 h-auto"></Iconify>
          <Iconify
            icon={"simple-icons:americanexpress"}
            className="w-10 h-auto"
          ></Iconify>
        </div>
      </div>
    </section>
  );
}
