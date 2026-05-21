// src/components/Header.jsx

import React from "react";

const Header = () => {
  return (
    <div
      className="px-3 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-6 border-b border-[#bca57a]"
      style={{
        background:
          "repeating-linear-gradient(0deg,#e5d3b1,#e5d3b1 2px,#e0cda8 2px,#e0cda8 4px)",
      }}
    >

      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
        <img
          src="/images/home/logo.png"
          alt="Logo"
          className="w-full h-full object-contain 
    drop-shadow-[0_0_2px_rgba(255,255,255,124)]
    drop-shadow-[0_0_4px_rgba(255,255,255,255)]
    drop-shadow-[0_3px_5px_rgba(0,0,0,0.6)]
    drop-shadow-[0_0_4px_rgba(255,255,255,245)]"
        />
      </div>

      {/* TEXT (centered properly) */}
      <div className="flex-1 text-center">

        <h1 className="text-[14px] sm:text-[24px] md:text-[30px] lg:text-[40px] leading-tight font-serif font-bold tracking-wide text-[#3c5460] drop-shadow-md uppercase">
          RAMAKRISHNA MISSION ASHRAMA, NARAINPUR
        </h1>

        <p className="text-[10px] sm:text-[13px] md:text-[15px] lg:text-[18px] font-serif font-semibold text-[#3b2d17] mt-1">
          • Narainpur • Chhattisgarh • Pin - 494 661 •
        </p>

      </div>
    </div>
  );
};

export default Header;
