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
    <section className="border-t border-t-gray-200 pt-5">
      <div className="grid grid-cols-4">
        <div>
          <h3 className="font-bold text-secondary pb-8">Need Help?</h3>
          <div className="flex flex-col gap-1 text-black opacity-50">
            {helpLinks &&
              helpLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm hover:text-primary transition-colors duration-300"
                >
                  <span>{link.name}</span>
                </Link>
              ))}
          </div>
        </div>{" "}
        <div>
          <h3 className="font-bold text-secondary pb-8"> About us</h3>
          <div className="flex flex-col gap-1 text-black opacity-50">
            {helpLinks &&
              helpLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm hover:text-primary transition-colors duration-300"
                >
                  <span>{link.name}</span>
                </Link>
              ))}
          </div>
        </div>{" "}
        <div>
          <h3 className="font-bold text-secondary pb-8">Contact us</h3>
          <div className="flex flex-col gap-1 text-black opacity-50">
            {helpLinks &&
              helpLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm hover:text-primary transition-colors duration-300"
                >
                  <span>{link.name}</span>
                </Link>
              ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-secondary pb-8 uppercase">
            our newsletter
          </h3>
          <div className="flex flex-col gap-1 text-black opacity-50">
            <span>Sign up for our latest news and offers:</span>
            <div className=" flex items-center gap-2  px-4">
              <Input
                //   label="Username"
                //   name="username"
                className="p-0 border-0 w-92"
                placeholder="Your email address"
              />
              <Button variant="secondary">
                {" "}
                <Iconify icon={"ic:baseline-email"}></Iconify>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
