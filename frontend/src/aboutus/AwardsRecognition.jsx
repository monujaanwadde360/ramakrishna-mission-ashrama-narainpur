// src/aboutus/AwardsRecognition.jsx

import React from "react";
import Navbar from "../components/Navbar";
import { awardsData } from "../data/awardsData";
import ScrollToTop from "../components/ScrollToTop";

const AwardsRecognition = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/rkm.jpg')",
      }}
    >
      <Navbar />
      <ScrollToTop />

      {/* ================= TITLE ================= */}
      <div className="text-center pt-16 md:pt-24 mb-10 md:mb-14 font-serif font-bold tracking-wide px-4">
        <h1 className="text-3xl md:text-6xl text-black">
          Awards & Recognition
        </h1>

        {/* SUBTITLE */}
        <p className="mt-5 text-black/70 text-lg md:text-xl">
          Honours received for dedicated service to humanity
        </p>

        {/* UNDERLINE */}
        <div className="mt-6 flex flex-col items-center gap-[5px]">
          <div className="w-[220px] md:w-[380px] h-[2px] bg-[#9c5a05]" />
          <div className="w-[220px] md:w-[380px] h-[1px] bg-[#9c5a05]/40" />
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-5xl mx-auto mb-16 font-serif font-bold tracking-wide px-4 md:px-6">
        <div
          className="
            rounded-[32px]
            border border-white/30
            bg-[#efe2b3]/35 backdrop-blur-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.12)]
            p-6 md:p-10
          "
        >
          <p
            className="
              text-[16px] md:text-[20px]
              leading-9 md:leading-10
              text-black/80
              text-center"
          >
            In acknowledgment of the Ashrama&apos;s commendable services
            in education, healthcare, and socio-economic uplift, the
            Mission has been honoured with prestigious awards and
            recognitions from various esteemed institutions and
            organizations.
          </p>
        </div>
      </div>

      {/* ================= AWARDS ================= */}
      <div className="px-4 md:px-8 lg:px-0 pb-16">
        <div className="max-w-6xl mx-auto grid gap-8 font-serif font-bold tracking-wide">
          {awardsData.map((item, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden
                rounded-[32px]
                border border-white/30
                bg-[#efe2b3]/35 backdrop-blur-2xl
                shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                hover:shadow-[0_20px_70px_rgba(156,90,5,0.25)]
                hover:-translate-y-1
                transition-all duration-500
              "
            >
              <div className="p-6 md:p-10">
                {/* YEAR BADGE */}
                <div
                  className="
                    inline-flex items-center gap-2
                    bg-gradient-to-r from-[#9c5a05] to-[#c17d1d]
                    text-white
                    px-5 py-2
                    rounded-full
                    text-sm md:text-base
                    shadow-lg
                    group-hover:scale-105
                    transition duration-300
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  {item.year}
                </div>

                {/* TITLE */}
                <h2
                  className="
                    mt-6
                    text-2xl md:text-4xl
                    leading-snug
                    group-hover:text-[#9c5a05]
                    transition duration-300
                  "
                >
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-6
                    text-[16px] md:text-[19px]
                    leading-9
                  "
                >
                  {item.desc}
                </p>
              </div>

              {/* BACKGROUND GLOW */}
              <div
                className="
                  absolute -top-20 -right-20
                  w-52 h-52
                  bg-[#d9a15b]/20
                  rounded-full blur-3xl
                  opacity-0 group-hover:opacity-100
                  transition duration-700
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;