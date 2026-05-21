// src/aboutus/ourinspiration/OurInspiration.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { inspirations } from "../../data/ourInspirationData";

const OurInspiration = () => {
  return (
    <section
      className="w-full min-h-screen font-serif font-bold tracking-wide"
    >

      {/* TITLE */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[#0a2230]">
          Our Inspiration
        </h1>

        {/* DOUBLE LINE */}
        <div className="mt-5 flex flex-col items-center gap-[5px]">
          <div className="w-[260px] md:w-[320px] h-[2px] bg-[#12384a]" />
          <div className="w-[260px] md:w-[320px] h-[1px] bg-[#12384a]" />
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {inspirations.map((item, index) => {

          let initialAnimation = {};

          // LEFT
          if (index === 0) {
            initialAnimation = {
              x: -120,
              opacity: 0,
            };
          }

          // TOP
          else if (index === 1) {
            initialAnimation = {
              y: -120,
              opacity: 0,
            };
          }

          // RIGHT
          else {
            initialAnimation = {
              x: 120,
              opacity: 0,
            };
          }

          return (
            <motion.div
              key={index}
              initial={initialAnimation}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={item.path}
                className="block"
              >
                {/* CARD */}
                <div className="bg-[#dbe9ed] border-2 border-[#8b1e1e] rounded-[22px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                  {/* IMAGE AREA */}
                  <div className="p-[10px]">

                    <div className="overflow-hidden rounded-[18px]">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[470px] object-cover rounded-[18px] grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition duration-700"
                      />

                    </div>

                  </div>

                </div>
              </Link>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default OurInspiration;