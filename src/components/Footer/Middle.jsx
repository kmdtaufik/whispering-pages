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
    <section className="border-t border-t-gray-200 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
        <div className="flex items-center gap-4 md:gap-6">
          {socialLinks &&
            socialLinks.map((link, index) => (
              <Link
                key={index}
                to={"#"}
                className="text-sm transition-colors duration-300"
              >
                <Iconify
                  icon={link.icon}
                  className="border rounded-full h-10 w-10 text-black opacity-50 hover:opacity-100 transition-opacity"
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
