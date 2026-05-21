// src/pages/public/DonateSection.jsx

import React from "react";

const DonateSection = () => {
  return (
    <div className="pb-16">
      {/* TITLE */}
      <div className="text-center py-14 font-serif font-bold tracking-wide">
        <h1
          className="
            text-4xl md:text-6xl
            text-[#0c415a]
          "
        >
          Donation
        </h1>

        <div className="flex justify-center mt-5">
          <div className="w-40 h-[3px] bg-[#0c415a] rounded-full"></div>
        </div>
      </div>

      {/* DONATE BANNER */}
      <div
        className="
          relative
          min-h-[290px]
          max-w-7xl
          mx-auto
          bg-cover
          bg-center
          flex
          items-center
          justify-center
          overflow-hidden
          px-4
          rounded-2xl
        "
        style={{
          backgroundImage: "url('/images/collage-donation.jpg')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT BOX */}
        <div
          className="
            relative
            z-10
            text-center
            px-6 md:px-10
            py-10
            max-w-5xl
            mx-auto
            rounded-2xl
            shadow-2xl
            text-white
            text-[20px]
            font-serif font-bold tracking-wide
          "
        >
          {/* SMALL TEXT */}
          <p
            className="
              text-lg md:text-2xl
              leading-relaxed
            "
          >
            All these activities are conducted as service,
            service to God in man.
          </p>

          {/* MAIN TITLE */}
          <div className="overflow-hidden mt-10 mb-12">
            <h2
              className="
                text-2xl md:text-5xl
                text-yellow-300
                leading-[1.5]
                whitespace-nowrap
                animate-marquee
              "
            >
              Online Donation for Indian Citizens and Organizations only.
            </h2>
          </div>

          {/* BUTTON */}
          <button
            onClick={() =>
              window.open(
                "https://pages.razorpay.com/pl_NxCjneir2iCxfU/view",
                "_blank"
              )
            }
            className="
              group
              relative
              overflow-hidden
              bg-sky-500
              hover:bg-green-500
              text-white
              text-lg md:text-2xl
              font-bold
              tracking-wide
              px-8 md:px-10
              py-4
              rounded-full
              shadow-2xl
              transition-all
              duration-300
              hover:scale-105
              border-2 border-white/20
            "
          >
            <span className="relative z-10 flex items-center gap-3 cursor-pointer">
              Donate Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;