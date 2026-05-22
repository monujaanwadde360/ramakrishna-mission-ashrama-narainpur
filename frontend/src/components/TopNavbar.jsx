import React from "react";

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
    <div className="bg-[#d8c39b] border-b border-[#b08c52] px-2 py-2 text-[13px]">

      {/* RESPONSIVE CONTAINER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

        {/* LEFT */}
        <div className="flex flex-wrap items-center gap-2">

          {/* EMAIL */}
          <a
            href="mailto:rkm.narainpur@gmail.com"
            className={btnStyle}
          >
            <MdEmail className="mr-1 text-[15px]" />

            <span className="hidden md:inline">
              rkm.narainpur@gmail.com
            </span>
          </a>

          {/* PHONE */}
          <a
            href="tel:07781252251"
            className={btnStyle}
          >
            <MdPhone className="mr-1 text-[15px]" />

            <span>07781-252251</span>
          </a>

          {/* SOCIAL */}
          <div className={socialContainer}>

            {/* FACEBOOK */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialBtn}
            >
              <FaFacebookF
                className={`${iconStyle} hover:text-blue-700`}
              />
            </a>

            <span className="h-4 border-r border-[#a15b24]" />

            {/* TWITTER */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialBtn}
            >
              <FaXTwitter
                className={`${iconStyle} hover:text-black`}
              />
            </a>

            <span className="h-4 border-r border-[#a15b24]" />

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialBtn}
            >
              <FaInstagram
                className={`${iconStyle} hover:text-pink-600`}
              />
            </a>

            <span className="h-4 border-r border-[#a15b24]" />

            {/* YOUTUBE */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialBtn}
            >
              <FaYoutube
                className={`${iconStyle} hover:text-red-600`}
              />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
