// src/pages/public/Activities.jsx

import React from "react";
import { Link } from "react-router-dom";
import { activitiesData } from "../../data/activitiesData";

const Activities = () => {
  return (
    <div
      className="min-h-screen font-bold font-serif leading-tight"
    >
      {/* OVERLAY */}
      <div className="min-h-screen py-12">

        {/* TITLE */}
        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-6xl font-bold text-[#0c415a]">
            Activities
          </h1>

          <div className="flex justify-center mt-4">
            <div className="w-40 h-[3px] bg-[#0c415a] rounded-full"></div>
          </div>

        </div>

        {/* CARDS */}
        <div className="max-w-[1900px] mx-auto px-5">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">

            {activitiesData.map((item, index) => {

              const CardContent = (
                <div
                  className="
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    border border-gray-200
                  "
                >
                  {/* CARD TITLE */}
                  <div
                    className={`${item.color} text-white text-center py-3 px-4`}
                  >
                    <h2 className="text-[18px] md:text-[20px] font-medium">
                      {item.title}
                    </h2>
                  </div>

                  {/* IMAGE */}
                  <div className="overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-[200px]
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-110
                      "
                    />
                  </div>
                </div>
              );

              /* EXTERNAL LINK */
              if (item.external) {
                return (
                  <a
                    key={index}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {CardContent}
                  </a>
                );
              }

              /* INTERNAL LINK */
              if (item.path) {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className="block"
                  >
                    {CardContent}
                  </Link>
                );
              }

              /* NORMAL CARD */
              return (
                <div key={index}>
                  {CardContent}
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Activities;