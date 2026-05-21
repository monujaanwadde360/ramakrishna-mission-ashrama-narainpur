// src/pages/public/ReachAndTimings.jsx

import React from "react";

import {
  reachData,
  aratiTimings,
} from "../../data/reachandtimingsData";

/* =====================================================
    REUSABLE SECTION CARD
===================================================== */

const SectionCard = ({ title, children }) => {
  return (
    <div
      className="
        bg-white
        rounded-[35px]
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        border border-[#e7d8a8]
        overflow-hidden
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* HEADER */}
      <div
        className="
          bg-[#0c415a]
          px-8 py-6
          text-center
        "
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
          {title}
        </h2>
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};

const ReachAndTimings = () => {
  return (
    <div className="min-h-screen px-4 md:px-8 py-10 md:py-14 font-serif font-bold tracking-wide">
      {/* =====================================================
          PAGE TITLE
      ===================================================== */}

      <div className="text-center mb-16 md:mb-24">
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-bold
            text-[#0c415a]
            font-serif
          "
        >
          Our Reach & Timings
        </h1>

        <div className="flex justify-center mt-5">
          <div className="w-40 h-[3px] bg-[#0c415a] rounded-full"></div>
        </div>
      </div>

      {/* =====================================================
          REACH SECTION
      ===================================================== */}

      <section className="max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0c415a] font-serif">
            What's Our Reach
          </h2>

          <p className="text-gray-700 mt-4 text-lg">
            What's our reach yearly?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-1">
          {reachData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-[#efe2b3]/35
                  rounded-3xl
                  shadow-xl
                  p-10
                  text-center
                  border border-[#e7d8a8]
                  hover:-translate-y-3
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-24 h-24
                    mx-auto mb-8
                   rounded-full
                    bg-[#8b1e1e]
                    text-white
                    flex
                   items-center
                   justify-center
                  text-4xl
                  shadow-lg
                  group-hover:scale-110
                  transition duration-500
                  "
                >
                  <Icon
                    size={42}
                    className="text-white"
                    strokeWidth={2.2}
                  />
                </div>

                {/* NUMBER */}
                <h3 className="text-5xl font-bold text-[#0c415a] mb-6">
                  {item.number}
                </h3>

                {/* TEXT */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          TIMINGS & OPENING HOURS
      ===================================================== */}

      <section className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* =====================================================
              ARATI TIMINGS
          ===================================================== */}

          <SectionCard title="Arati Timings">
            <div className="space-y-5">
              {aratiTimings.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    flex-col md:flex-row
                    justify-between
                    items-start md:items-center
                    gap-2
                    bg-[#faf6ea]
                    rounded-2xl
                    px-5 py-4
                    border border-[#efe3b5]
                  "
                >
                  <p className="text-[#0c415a] font-semibold text-left">
                    {item.date}
                  </p>

                  <p className="text-[#8b5e00] font-bold text-lg">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* =====================================================
              OPENING HOURS
          ===================================================== */}

          <SectionCard title="Opening Hours">
            <div className="space-y-8">
              {/* OFFICE */}
              <div
                className="
                  bg-[#faf6ea]
                  rounded-3xl
                  p-6
                  border border-[#efe3b5]
                "
              >
                <h3 className="text-2xl font-bold text-[#0c415a] mb-5">
                  Office
                </h3>

                <div className="space-y-3 text-gray-700 text-lg">
                  <p>8:30 AM to 12:00 PM</p>
                  <p>2:30 PM to 5:30 PM</p>
                </div>
              </div>

              {/* HOSPITAL */}
              <div
                className="
                  bg-[#faf6ea]
                  rounded-3xl
                  p-6
                  border border-[#efe3b5]
                "
              >
                <h3 className="text-2xl font-bold text-[#0c415a] mb-5">
                  Hospital
                </h3>

                <div className="space-y-3 text-gray-700 text-lg">
                  <p>8:30 AM to 1:00 PM</p>

                  <p>
                    4:00 PM to 6:00 PM (March - September)
                  </p>

                  <p>
                    3:30 PM to 5:30 PM (October - February)
                  </p>
                </div>
              </div>

              {/* TEMPLE */}
              <div
                className="
                  bg-[#faf6ea]
                  rounded-3xl
                  p-6
                  border border-[#efe3b5]
                "
              >
                <h3 className="text-2xl font-bold text-[#0c415a] mb-5">
                  Temple
                </h3>

                <div className="space-y-3 text-gray-700 text-lg">
                  <p>4:45 AM to 12:00 PM</p>
                  <p>4:00 PM to 8:00 PM</p>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </section>
    </div>
  );
};

export default ReachAndTimings;
