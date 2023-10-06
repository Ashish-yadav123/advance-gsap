import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="min-h-screen bg-black text-start text-white flex items-center justify-center">
        <div className="container px-5 xl:max-w-[1170px] 2xl:max-w-[1320px] py-12 sm:py-0">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
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
