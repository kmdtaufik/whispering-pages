import React from "react";
import { AlignJustify, Search } from "lucide-react";
export default function MobileHeader() {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md md:hidden">
      <button>
        <AlignJustify></AlignJustify>
      </button>
      <img src="Logo.png" alt="Logo" width={100} height={30} />
      <button>
        <Search></Search>
      </button>
    </div>
  );
}
