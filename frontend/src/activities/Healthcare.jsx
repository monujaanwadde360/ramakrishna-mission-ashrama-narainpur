// src/activities/Healthcare.jsx

import React from "react";
import Navbar from "../components/Navbar";
import { healthcareData } from "../data/healthcareData";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const Healthcare = () => {
  return (
    <div
      className="
    w-full
    bg-[#f5f5f0]
    bg-fixed bg-cover bg-center bg-no-repeat
  "
      style={{
        backgroundImage: "url('/images/home/rkm.jpg')",
      }}
    >
      <Navbar />
      <ScrollToTop />

      {/* HERO */}
      <div className="pt-20 md:pt-24 font-serif font-bold tracking-wide">

        {/* TITLE */}
        <div className="text-center mb-8">

          <h1
            className="
              text-4xl md:text-6xl
              text-[#0a2230]
            "
          >
            Health Care
          </h1>

          <div className="flex justify-center mt-5">
            <div className="w-28 md:w-44 h-[2px] bg-[#8b1e1e]" />
          </div>

        </div>

        {/* IMAGE */}
        <div
          className="
            relative
            overflow-hidden
            shadow-xl
          "
        >

          <img
            src="/images/healthcare/healthcare.jpg"
            alt="Healthcare"
            className="
              w-full
              h-[240px] md:h-[520px]
              object-cover
            "
          />

        </div>

      </div>

      {/* INTRO */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-10 font-serif font-bold tracking-wide bg-[#efe2b3]/35">

        <p
          className="
            text-[18px] md:text-[25px]
            leading-[1.9]
            text-center
            font-serif font-bold tracking-wide
          "
        >
          The Ramakrishna Mission has been providing healthcare
          services to tribal and rural communities through
          hospitals, mobile medical units, blood banks,
          health posts and diagnostic facilities.
        </p>

      </div>

      {/* CONTENT */}
      <div className="max-w-[1450px] mx-auto px-4 md:px-6 mt-14">

        {healthcareData.map((item) => (

          <div key={item.id} className="mb-24">

            {/* TITLE */}
            <h2
              className="
                text-3xl md:text-[52px]
                text-center
                leading-tight
                font-serif font-bold tracking-wide
              "
            >
              {item.title}
            </h2>

            {/* LINE */}
            <div className="mt-4 mb-10 h-[1px] bg-red-400/70" />

            {/* SECTION */}
            <div
              className="
                bg-[#efe2b3]/35
                p-4 md:p-6
                after:content-['']
                after:block
                after:clear-both
              "
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className={`
                  w-full md:w-[620px]
                  h-[260px] md:h-[400px]
                  object-cover
                  rounded-sm
                  shadow-md
                  mb-5
                  ${item.id % 2 === 0
                    ? "md:float-right md:ml-8"
                    : "md:float-left md:mr-8"
                  }
                `}
              />

              {/* TEXT */}
              <div
                className="
                  text-[18px] md:text-[25px]
                  leading-[2]
                  font-serif font-bold tracking-wide
                "
              >

                {/* SECTION 1 */}
                {item.id === 1 && (
                  <>
                    <p className="text-justify">
                      This 30-bed well-equipped hospital having an
                      Outdoor and an Inpatient Section including Labor
                      Room, a Pathology Laboratory, Blood Bank,
                      X-Ray Department with three machines (one is
                      portable), two ECGs, Sonography Unit, one major
                      and one minor O.T. and a Dental Section.
                      A Physiotherapy Unit and a blood Bank have been
                      started recently in newly constructed blocks.
                      A Dharmashala is present in the Ashrama campus
                      for patients' relatives to stay during the
                      inpatient treatment period.
                    </p>

                    <p className="mt-8 text-justify">
                      Most of the beneficiaries are tribals who are
                      given all facilities including surgical operation,
                      if necessary, free of all costs. During the
                      2014-15 financial year, a total number of
                      44,457(33,377 tribals) & 1492(1455 tribals)
                      patients were treated in O.P.D. & Indoor Section
                      respectively. Drugs required for most of the
                      common ailments are provided free to all O.P.D.
                      patients through the dispensing section of the OPD.
                    </p>
                  </>
                )}

                {/* SECTION 2 */}
                {item.id === 2 && (
                  <>
                    <p className="text-justify">
                      Our Mobile Medical Unit has been rendering
                      its services at free of cost since 1986 to
                      nearly 100 interior villages of the area.
                      During the financial year 2014-15,
                      4283 patients were treated, 85% of which
                      were tribals.
                    </p>

                    <p className="mt-8 text-justify">
                      With the financial health from Bhilai Steel Plant,
                      Bhilai, a Mobile Medical Unit started for
                      22 remote villages on and from
                      2nd April, 2021.
                    </p>

                    <p className="mt-8 text-justify">
                      In the Month of September, 2021 the total
                      no. of patients treated are hereunder :
                    </p>

                    {/* TABLE */}
                    <div className="overflow-x-auto mt-8 bg-[#efe2b3]/35 p-4 rounded-lg shadow-md">

                      <table className="w-full border-collapse text-[18px] md:text-[23px]">

                        <thead>

                          <tr className="bg-[#ece8d8]">

                            <th className="border border-gray-300 px-5 py-4 text-left text-[#0d2c2f]">
                              Name of the District
                            </th>

                            <th className="border border-gray-300 px-5 py-4 text-center text-[#0d2c2f]">
                              Male
                            </th>

                            <th className="border border-gray-300 px-5 py-4 text-center text-[#0d2c2f]">
                              Female
                            </th>

                            <th className="border border-gray-300 px-5 py-4 text-center text-[#0d2c2f]">
                              Child
                            </th>

                            <th className="border border-gray-300 px-5 py-4 text-center text-[#0d2c2f]">
                              Total
                            </th>

                          </tr>

                        </thead>

                        <tbody>

                          <tr className="bg-[#f8f6ea]">

                            <td className="border border-gray-300 px-5 py-4">
                              Narayanpur
                            </td>

                            <td className="border border-gray-300 px-5 py-4 text-center">
                              668
                            </td>

                            <td className="border border-gray-300 px-5 py-4 text-center">
                              724
                            </td>

                            <td className="border border-gray-300 px-5 py-4 text-center">
                              329
                            </td>

                            <td className="border border-gray-300 px-5 py-4 text-center">
                              1721
                            </td>

                          </tr>

                          <tr className="bg-[#fdfcf6]">

                            <td className="border border-gray-300 px-5 py-4">
                              Kanker
                            </td>

                            <td className="border border-gray-300 px-5 py-4 text-center">
                              974
                            </td>

                            <td className="border border-gray-300 px-5 py-4 text-center">
                              676
                            </td>

                            <td className="border border-gray-300 px-5 py-4 text-center">
                              334
                            </td>

                            <td className="border border-gray-300 px-5 py-4 text-center">
                              1984
                            </td>

                          </tr>

                        </tbody>

                      </table>

                    </div>
                  </>
                )}

                {/* SECTION 3 */}
                {item.id === 3 && (
                  <p className="text-justify">
                    The Mission also manages five Health Posts inside
                    Abujhmarh (namely Kundla, Akabeda, Irakbhatti,
                    Kachhapal and Kutul) through its trained health
                    workers. During the year, 20383 patients were
                    treated free of charge, 89% of which were tribals.
                  </p>
                )}

                {/* SECTION 4 */}
                {item.id === 4 && (
                  <p className="text-justify">
                    Recently a Blood Bank has been added to the
                    Vivekananda Arogya Dham, which in the long run
                    should prove a boon to the suffering Tribal
                    populace who require emergency blood transfusions.
                    This Blood Bank has been inaugurated on 28.03.2010
                    by Most Revered Srimat Swami Smarananandaji Maharaj,
                    Vice President, Ramakrishna Math and Mission,
                    Belur Math, Howrah.
                  </p>
                )}

                {/* SECTION 5 */}
                {item.id === 5 && (
                  <>
                    <p className="text-justify">
                      Another recent addition to the Vivekananda
                      Arogya Dham is a Physio-therapy unit.
                      This was inaugurated by His Excellency
                      Hon'ble Governor of Chhattisgarh
                      Shri Shekhar Dutt on 11.02.2010.
                    </p>

                    <p className="mt-8 text-justify">
                      Recently three new pathologic equipments
                      have been procured for performing thyroid
                      function and other tests, electrophorisis
                      and electrolyte analysis. They were
                      inaugurated by revered Swami Gautamanandaji
                      Maharaj, senior trustee and Adhaksha,
                      Ramakrishna Math, Chennai on
                      24th April 2015.
                    </p>
                  </>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

      <Footer />

    </div>
  );
};

export default Healthcare;
