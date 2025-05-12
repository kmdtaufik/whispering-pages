import React from "react";
import { Link } from "react-router";
import Typography from "../Typography/Typography";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Iconify from "../Iconify/Iconify";

export default function Top() {
  const helpLinks = [
    { name: "Help Center", href: "#" },
    { name: "Shipping FAQs", href: "#" },
    { name: "Pick up in Store", href: "#" },
    { name: "Order Status", href: "#" },
    { name: "Product Recalls", href: "#" },
    { name: "Correction & Updates", href: "#" },
    { name: "Gift Cards", href: "#" },
  ];

  return (
    <section className="container mx-auto border-t border-t-gray-200 pt-8 px-4 font-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Need Help Section */}
        <div>
          <h3 className="font-bold text-secondary pb-4 text-[14px] uppercase">
            Need Help?
          </h3>
          <div className="flex flex-col gap-2 text-neutral-400">
            {helpLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-sm hover:text-secondary transition-colors duration-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="font-bold text-secondary pb-4 text-lg text-[14px] uppercase">
            About Us
          </h3>
          <div className="flex flex-col gap-2 text-neutral-400 ">
            {helpLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-sm hover:text-secondary transition-colors duration-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-bold text-secondary pb-4 text-[14px] uppercase">
            Contact Us
          </h3>
          <div className="flex flex-col gap-2 text-neutral-400">
            {helpLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-sm hover:text-secondary transition-colors duration-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-secondary pb-4 text-[14px] uppercase">
            Our Newsletter
          </h3>
          <div className="flex flex-col">
            <span className=" text-neutral-400 pb-4">
              Sign up for our latest news and offers:
            </span>
            <div className="flex items-center">
              <Input
                className="py-3 pr-10 pl-2 border border-gray-300 w-full bg-zinc-100 text-sm"
                placeholder="Your email address..."
              />
              <Button variant="secondary">
                <Iconify icon={"ic:baseline-email"} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
