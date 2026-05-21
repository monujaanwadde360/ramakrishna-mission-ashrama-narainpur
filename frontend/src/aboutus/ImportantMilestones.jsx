// src/aboutus/ImportantMilestones.jsx

import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { ChevronDown, ChevronUp } from "lucide-react";
import { milestonesData } from "../data/milestonesData";
import ScrollToTop from "../components/ScrollToTop";

const ImportantMilestones = () => {
  const [openYear, setOpenYear] = useState(
    milestonesData?.length
      ? milestonesData[milestonesData.length - 1].year
      : ""
  );

  const sectionRefs = useRef({});

  /* TOGGLE */
  const toggleYear = (year) => {
    setOpenYear(openYear === year ? "" : year);
  };

  /* SCROLL */
  const scrollToYear = (year) => {
    sectionRefs.current[year]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpenYear(year);
  };

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/rkm.jpg')",
      }}
    >
      <Navbar />
      <ScrollToTop />

      <div className="flex flex-col lg:flex-row">

        {/* ================= DESKTOP SIDEBAR ================= */}
        <div className="hidden lg:block w-[220px] sticky top-[120px] h-[calc(100vh-140px)] p-4">

          <div className="backdrop-blur-xl bg-white/60 border border-black/10 rounded-2xl p-4 shadow-lg">

            <h2 className="text-black text-2xl font-semibold mb-5 text-center">
              Years
            </h2>

            <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-1">

              {milestonesData.map((item) => (
                <button
                  key={item.year}
                  onClick={() => scrollToYear(item.year)}
                  className={`w-fit min-w-[60px] text-left px-4 py-2 rounded-xl transition-all duration-300
${openYear === item.year
                      ? "bg-[#9c5a05] text-white shadow-md"
                      : "text-black/70 hover:text-black hover:bg-black/5"
                    }`}
                >
                  {item.year}
                </button>
              ))}

            </div>

          </div>

        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="flex-1 py-10 md:py-16 px-4 md:px-8 overflow-hidden">

          {/* TITLE */}
          <div className="text-center mb-10 md:mb-14">

            <h1 className="text-3xl md:text-6xl font-bold text-black font-serif">
              Important Milestones
            </h1>

            <div className="mt-5 flex flex-col items-center gap-[5px]">
              <div className="w-[180px] md:w-[320px] h-[2px] bg-black" />
              <div className="w-[180px] md:w-[320px] h-[1px] bg-black" />
            </div>

          </div>

          {/* ================= MOBILE SWIPE YEARS ================= */}
          <div className="lg:hidden mb-8 overflow-x-auto scrollbar-hide">

            <div className="flex gap-3 min-w-max px-1">

              {milestonesData.map((item) => (
                <button
                  key={item.year}
                  onClick={() => scrollToYear(item.year)}
                  className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 border
                  ${openYear === item.year
                      ? "bg-[#9c5a05] text-white border-[#9c5a05] shadow-lg scale-105"
                      : "bg-white/70 backdrop-blur-xl text-black border-black/10"
                    }`}
                >
                  {item.year}
                </button>
              ))}

            </div>

          </div>

          {/* ================= TIMELINE ================= */}
          <div className="max-w-[1100px] mx-auto space-y-5 md:space-y-3">

            {milestonesData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[item.year] = el)}
                className="rounded-2xl overflow-hidden shadow-lg"
              >

                {/* YEAR HEADER */}
                <button
                  onClick={() => toggleYear(item.year)}
                  className="w-full flex justify-between items-center px-4 md:px-6 py-3 md:py-3
  backdrop-blur-xl border border-black/10
  text-black hover:bg-white/80 transition-all duration-300"
                >

                  <span className="text-[30px] md:text-6xl font-light tracking-wide">
                    {item.year}
                  </span>

                  {openYear === item.year ? (
                    <ChevronUp className="text-black w-6 h-6 md:w-7 md:h-7" />
                  ) : (
                    <ChevronDown className="text-black w-6 h-6 md:w-7 md:h-7" />
                  )}

                </button>

                {/* CONTENT */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden
                  ${openYear === item.year
                      ? "max-h-[5000px] opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >

                  <div className="backdrop-blur-xl bg-white/60 border border-black/10 p-3 md:p-5 overflow-x-auto">

                    {/* MOBILE CARD VIEW */}
                    <div className="md:hidden space-y-4">

                      {item.events.map((event, i) => (
                        <div
                          key={i}
                          className="bg-white/70 rounded-xl p-4 border border-black/10 shadow-sm"
                        >

                          <div className="text-[#9c5a05] font-semibold text-sm mb-2">
                            {event.date}
                          </div>

                          <div className="text-black/70 leading-7 text-[15px] break-words">
                            {event.text}
                          </div>

                        </div>
                      ))}

                    </div>

                    {/* DESKTOP TABLE */}
                    <table className="hidden md:table w-full border-collapse">

                      <tbody>

                        {item.events.map((event, i) => (
                          <tr
                            key={i}
                            className="border border-black/10 hover:bg-black/5 transition"
                          >

                            {/* DATE */}
                            <td className="w-[200px] p-5 text-black/80 font-semibold align-top border border-black/10 bg-white/40">
                              {event.date}
                            </td>

                            {/* TEXT */}
                            <td className="p-5 text-black/70 leading-9 border border-black/10">
                              {event.text}
                            </td>

                          </tr>
                        ))}

                      </tbody>

                    </table>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default ImportantMilestones;