import React from "react";
import { Link } from "react-router-dom";
import { TOP_LINKS } from "../data/navbarData";

import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

import { MdEmail, MdPhone } from "react-icons/md";

/* Button Style */
const btnStyle =
  "bg-gradient-to-b from-[#f6c27a] to-[#c57b3a] text-[#2d1a00] px-3 h-8 rounded-xl border border-[#a15b24] font-semibold shadow-sm flex items-center transition-all duration-300 hover:shadow-md hover:brightness-105";

/* Social Container */
const socialContainer =
  "bg-gradient-to-b from-[#f6c27a] to-[#c57b3a] h-8 px-1.5 rounded-xl border border-[#a15b24] flex items-center gap-1";

/* Social Button */
const socialBtn =
  "w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-black/10";

/* Icon Style */
const iconStyle = "text-[12px] transition-colors duration-200";

const TopNavbar = () => {
  return (
    <div className="bg-[#d8c39b] border-b border-[#b08c52] px-2 py-1 text-[13px] overflow-x-auto">

      {/* SINGLE LINE (NO WRAP EVER) */}
      <div className="flex items-center justify-between gap-2 min-w-max">

        {/* LEFT */}
        <div className="flex items-center gap-2">

          {/* EMAIL */}
          <a href="mailto:rkm.narainpur@gmail.com" className={btnStyle}>
            <MdEmail className="mr-1" />
            <span className="hidden lg:inline">
              rkm.narainpur@gmail.com
            </span>
          </a>

          {/* PHONE */}
          <a href="tel:07781252251" className={btnStyle}>
            <MdPhone className="mr-1" />
            <span>07781-252251</span>
          </a>

          {/* SOCIAL */}
          <div className={socialContainer}>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={socialBtn}>
              <FaFacebookF className={`${iconStyle} hover:text-blue-700`} />
            </a>

            <span className="h-4 border-r border-[#a15b24]" />

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={socialBtn}>
              <FaXTwitter className={`${iconStyle} hover:text-black`} />
            </a>

            <span className="h-4 border-r border-[#a15b24]" />

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={socialBtn}>
              <FaInstagram className={`${iconStyle} hover:text-pink-600`} />
            </a>

            <span className="h-4 border-r border-[#a15b24]" />

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={socialBtn}>
              <FaYoutube className={`${iconStyle} hover:text-red-600`} />
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center divide-x divide-[#a15b24] border border-[#a15b24] rounded-xl overflow-hidden">

          {TOP_LINKS.map((item, index) => (
            <Link
              key={item.label + index}
              to={item.path}
              className="px-3 h-8 flex items-center bg-gradient-to-b from-[#f6c27a] to-[#c57b3a] hover:brightness-105 transition"
            >
              {item.label}
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
