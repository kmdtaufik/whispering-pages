import React from "react";
import Iconify from "../Iconify/Iconify";
import Typography from "../Typography/Typography";
import { Link } from "react-router";

export default function Facility() {
  const facilities = [
    {
      icon: "bx:book",
      title: "Bookio Press",
      description: "Publish your book with B&N.",
    },
    {
      icon: "bx:library",
      title: "Library",
      description: "Explore our vast collection of books.",
    },
    {
      icon: "bx:gift",
      title: "Gift Cards",
      description: "Give the gift of reading.",
    },
    {
      icon: "bx:shopping-bag",
      title: "Shop",
      description: "Browse our online store.",
    },
  ];
  return (
    <section className="py-5 border-t border-t-gray-100">
      <div className="container mx-auto flex justify-between">
        {facilities &&
          facilities.map((facility, index) => (
            <div
              className={`flex items-center gap-3 ${
                index === facilities.length - 1
                  ? ""
                  : "border-r border-r-gray-100"
              }`}
              key={index}
            >
              <Iconify
                icon={facility.icon}
                className="w-32 h-auto text-primary"
              ></Iconify>
              <div>
                <Typography variant="h5" className="text-secondary font-bold">
                  {facility.title}
                </Typography>
                <Typography variant="small" className="text-black opacity-50">
                  {facility.description}
                </Typography>
                <br />
                <Link to={"#"}>
                  <Typography
                    variant="small"
                    className="flex text-primary items-center"
                  >
                    Learn more{" "}
                    <Iconify icon={"mingcute:arrow-right-up-line"}></Iconify>
                  </Typography>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
