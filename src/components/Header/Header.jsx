import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <header className="">
      <MobileHeader></MobileHeader>
      <Top></Top>
      <Middle></Middle>
      <Bottom></Bottom>
    </header>
  );
};

export default Header;
