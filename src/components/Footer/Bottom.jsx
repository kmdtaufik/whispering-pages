import React from "react";
import { Link } from "react-router";
import Iconify from "../Iconify/Iconify";

export default function Bottom() {
  return (
    <section className="border-t border-t-gray-200 ">
      <div className="justify-between flex items-center py-4">
        <div className="flex items-center gap-4">
          <Link to={"#"} className="text-black opacity-50 text-sm">
            Term of Use
          </Link>
          <Link to={"#"} className="text-black opacity-50 text-sm">
            Copyright and Software
          </Link>
          <Link to={"#"} className="text-black opacity-50 text-sm">
            Faq
          </Link>
          <Link to={"#"} className="text-black opacity-50 text-sm">
            something
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Iconify icon={"solar:copyright-linear"}></Iconify>
          <span className="text-black opacity-50 text-sm">
            All Rights are Reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
