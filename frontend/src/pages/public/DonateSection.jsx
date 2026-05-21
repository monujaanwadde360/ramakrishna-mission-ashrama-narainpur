// src/pages/public/DonateSection.jsx

import React from "react";

const DonateSection = () => {
  return (
    <div className="pb-16 px-4 sm:px-6 lg:px-8">

      {/* TITLE */}
      <div className="text-center py-12 md:py-16 font-serif font-bold tracking-wide">

        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            text-[#0c415a]
          "
        >
          Donation
        </h1>

        <div className="flex justify-center mt-5">
          <div className="w-24 sm:w-32 md:w-40 h-[3px] bg-[#0c415a] rounded-full"></div>
        </div>

      </div>

      {/* DONATE BANNER */}
      <div
        className="
          relative
          min-h-[320px]
          md:min-h-[450px]
          max-w-7xl
          mx-auto
          bg-cover
          bg-center
          flex
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          md:rounded-[32px]
          shadow-2xl
        "
        style={{
          backgroundImage: "url('/images/donation/collage-donation.jpg')",
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            w-full
            text-center
            px-5
            sm:px-8
            md:px-14
            py-12
            md:py-16
            text-white
            font-serif
            font-bold
            tracking-wide
          "
        >

          {/* SMALL TEXT */}
          <p
            className="
              text-base
              sm:text-lg
              md:text-2xl
              leading-relaxed
              max-w-4xl
              mx-auto
            "
          >
            All these activities are conducted as service,
            service to God in man.
          </p>

          {/* MARQUEE TEXT */}
          <div className="overflow-hidden mt-8 md:mt-12 mb-10 md:mb-14">

            <h2
              className="
                inline-block
                min-w-full
                text-lg
                sm:text-2xl
                md:text-5xl
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
          <div className="flex justify-center mt-2 md:mt-4">

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
                text-sm
                sm:text-lg
                md:text-2xl

                font-bold
                tracking-wide

                px-7
                sm:px-10
                md:px-14

                py-3
                sm:py-4
                md:py-5

                rounded-full
                shadow-2xl

                transition-all
                duration-300
                hover:scale-105

                border-2
                border-white/20

                min-w-[190px]
                sm:min-w-[230px]
                md:min-w-[290px]

                flex
                items-center
                justify-center
              "
            >

              <span
                className="
                  relative
                  z-10
                  leading-none
                  whitespace-nowrap
                "
              >
                Donate Now
              </span>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DonateSection;
