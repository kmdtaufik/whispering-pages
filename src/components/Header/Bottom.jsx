import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router";

const Bottom = () => {
  const navText = ["Home", "Store", "Blog", "Contact", "faq"];
  return (
    <div className=" md:flex container mx-auto py-2 hidden">
      <Button
        variant="secondary"
        leftIcon="fe:bar"
        rightIcon="fe:arrow-down"
        className="flex items-center gap-2 uppercase font-secondary font-bold text-sm"
      >
        {"  "}All Departments
      </Button>
      <div className="hidden md:flex items-center ">
        {navText &&
          navText.map((item, index) => (
            <Link to={`/${item.toLowerCase()}`} key={index}>
              {" "}
              <Button
                rightIcon={item === "faq" ? "" : "fe:arrow-down"}
                variant="navItem"
                className="flex items-center gap-2 uppercase font-secondary font-bold text-sm"
                key={index}
              >
                {item}
              </Button>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Bottom;
