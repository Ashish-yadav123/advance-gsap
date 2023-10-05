import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="h-screen bg-black text-start text-white flex items-center justify-center">
        <div className="container xl:max-w-[1170px] 2xl:max-w-[1320px]">
          <div className="flex items-center justify-between">
            <a href="/">LOGO</a>
            <a href="#">HOME </a>
            <a href="#">ABOUT </a>
            <a href="#">SERVICE </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
