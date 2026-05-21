// src/components/ScrollToTop.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();

  /* INSTANT PAGE OPEN FROM TOP */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /* SHOW BUTTON AFTER SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* BUTTON CLICK */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6
        bg-[#8b1e1e]
        text-white px-3 py-3
        rounded-lg shadow-xl
        transition-all duration-300 z-50
        flex flex-col items-center justify-center

        ${visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-90 pointer-events-none"
        }

        hover:scale-110
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>

      <span className="text-[10px] font-bold tracking-wide">
        TOP
      </span>
    </button>
  );
};

export default ScrollToTop;