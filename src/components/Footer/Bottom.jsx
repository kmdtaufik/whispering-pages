import React from "react";
import { Link } from "react-router";
import Iconify from "../Iconify/Iconify";

export default function Bottom() {
  return (
    <section className="border-t border-gray-200 font-secondary">
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Links Section */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          <Link
            to={"#"}
            className="text-black opacity-70 hover:opacity-100 text-sm transition"
          >
            Terms of Use
          </Link>
          <Link
            to={"#"}
            className="text-black opacity-70 hover:opacity-100 text-sm transition"
          >
            Copyright and Software
          </Link>
          <Link
            to={"#"}
            className="text-black opacity-70 hover:opacity-100 text-sm transition"
          >
            FAQ
          </Link>
          <Link
            to={"#"}
            className="text-black opacity-70 hover:opacity-100 text-sm transition"
          >
            Something
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="flex items-center gap-2 text-center">
          <Iconify
            icon={"solar:copyright-linear"}
            className="text-black opacity-70 text-lg"
          />
          <span className="text-black opacity-70 text-sm">
            All Rights Reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
