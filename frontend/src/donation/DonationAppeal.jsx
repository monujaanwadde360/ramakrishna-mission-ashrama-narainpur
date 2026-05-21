// src/donate/DonationAppeal.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const DonationAppeal = () => {
  return (
    <div
      className="
    w-full
    min-h-screen
    bg-fixed
    bg-cover
    bg-center
    bg-no-repeat
  "
      style={{
        backgroundImage: "url('/images/home/rkm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <ScrollToTop />

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 font-serif">

        {/* TITLE */}
        <h2
          className="
              text-3xl md:text-5xl
              text-[#0c2b35]
              font-bold
              text-center
              font-serif
            "
        >
          Appeal
        </h2>
        {/* LINE */}
        <div className="flex justify-center">
          <div className="w-32 h-[2px] bg-red-500 mt-5 mb-12" />
        </div>

        {/* CARD */}
        <div
          className="
            bg-[#efe2b3]/25
            shadow-2xl
            rounded-2xl
            p-6 md:p-14
            border border-[#d9c68d]
            backdrop-blur-sm
          "
        >


          {/* TEXT */}
          <div
            className="
              text-[18px] md:text-[24px]
              leading-[2.1]
              text-[#1e1e1e]
              font-medium
              space-y-10
            "
          >

            <p className="font-bold text-[#0c2b35]">
              Dear Friends,
            </p>

            <p className="text-justify">
              The <span className="font-bold">Ramakrishna Mission Ashrama, Narainpur</span>,
              a Branch Centre of the <span className="font-bold">
                Ramakrishna Math & Ramakrishna Mission, Belur Math,
                Howrah, West Bengal</span>, along with its five (5)
              Service Centres inside Abujhmarh jungles, has been
              rendering welfare services since its inception in
              <span className="font-bold"> 1985 </span>
              for the <span className="font-bold">Hill Marias</span>,
              one of the poorest and most primitive tribes in India.
              The Ashrama works tirelessly in the remote tribal region
              of Abujhmarh, Chhattisgarh, to eradicate illiteracy,
              ill health and poverty through various welfare and
              developmental activities.
            </p>

            <p className="text-justify">
              The Ashrama presently covers more than
              <span className="font-bold">
                {" "}two-thirds of the Abujhmarh region
              </span>
              — approximately <span className="font-bold">
                200 out of 265 villages
              </span> spread across nearly
              <span className="font-bold"> 4000 sq. km.</span>
              through educational, medical, tribal welfare and
              rural development programmes.
            </p>

            <p className="text-justify">
              All our activities are mainly dependent upon
              <span className="font-bold">
                {" "}Government Grants
              </span>.
              Though both Central and State Governments are generously
              supporting us, the enormity of our service activities in
              this remote corner of Central India demands further
              financial assistance from generous and compassionate
              individuals.
            </p>

            <p className="text-justify">
              We therefore earnestly appeal to you to kindly
              <span className="font-bold">
                {" "}donate generously
              </span>
              for sustaining and expanding these noble activities.
              Your valuable contribution will help transform the lives
              of thousands of tribal families and children for years
              to come.
            </p>

            <p className="text-justify">
              We also humbly appeal to those who have no legal heir,
              to consider gifting their properties or assets for the
              welfare of the neglected tribal children of Abujhmarh —
              truly a noble and sacred cause.
            </p>

            <p className="text-justify">
              <span className="font-bold">
                Cheques and Demand Drafts
              </span>{" "}
              may kindly be issued in favour of:
              <br />

              <span className="font-bold text-[#6d1111]">
                “Ramakrishna Mission Ashrama, Narainpur”
              </span>
            </p>

            <p className="text-justify">
              May the blessings of the Almighty be showered upon all
              of us so that we may continue bringing peace, dignity
              and solace to our tribal brethren through humble service.
            </p>

          </div>

          {/* SIGNATURE */}
          <div className="mt-20 text-right mr-20">

            <p
              className="
                text-[20px] md:text-[30px]
                text-[#0c2b35]
                font-semibold
                leading-[2]
              "
            >
              With Deep Regards,
              <br /><br />
              Swami Vyaptananda
              <br />
              <span className="tracking-widest text-[#6d1111]">
                SECRETARY
              </span>
            </p>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-16">

            <button
              className="
                bg-[#6d1111]
                hover:bg-[#560c0c]
                text-white
                text-xl md:text-2xl
                font-bold
                px-12 py-4
                rounded-full
                transition duration-300
                shadow-xl
                hover:scale-105
              "
            >
              Donate Now
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default DonationAppeal;
