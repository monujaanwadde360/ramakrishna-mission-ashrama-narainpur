import React from "react";
import Navbar from "../components/Navbar";
import AdmissionSidebar from "../components/AdmissionSidebar";
import ScrollToTop from "../components/ScrollToTop";

const glowDot =
  "text-yellow-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)] drop-shadow-[0_0_12px_rgba(255,255,0,0.6)]";

const ModelQuestions = () => {

  // Classes
  const classes = ["Class 5", "Class 9", "Class 10"];

  // Auto year
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 7 }, (_, i) => currentYear - i);

  return (
    <div
      className="
        w-full
        min-h-screen
        bg-center
        bg-cover
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/images/home/rkm.jpg')",
      }}
    >
      <Navbar />
      <ScrollToTop />

      {/* MAIN LAYOUT */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          gap-6
          px-3
          sm:px-4
          md:px-6
          pt-6
          pb-10
          max-w-[1500px]
          mx-auto
        "
      >

        {/* SIDEBAR */}
        <div className="w-full lg:w-auto">
          <AdmissionSidebar />
        </div>

        {/* CONTENT */}
        <div className="flex-1 w-full">

          {/* NOTICE */}
          <div
            className="
              text-center
              font-semibold
              text-[14px]
              sm:text-[15px]
              md:text-[16px]
              text-[#222]
              mb-4
              bg-[#fff8e8]/80
              backdrop-blur-sm
              rounded-lg
              py-3
              px-4
              shadow-md
            "
          >
            All are requested to note that the question-pattern may vary
          </div>

          {/* TITLE */}
          <div
            className="
              bg-[#8b7f6a]
              text-white
              px-4
              py-3
              rounded-md
              mb-4
              flex
              items-center
              gap-2
              shadow-lg
            "
          >

            <span className={`${glowDot} text-sm md:text-base`}>
              ●
            </span>

            <h2 className="text-sm sm:text-base md:text-lg font-bold leading-snug">
              PREVIOUS YEAR MODEL QUESTIONS (CLASS-WISE)
            </h2>

          </div>

          {/* ================= MOBILE VIEW ================= */}

          <div className="block lg:hidden space-y-5">

            {years.map((year, i) => (

              <div
                key={year}
                className="
                  bg-[#fff7e4]/90
                  backdrop-blur-sm
                  rounded-2xl
                  shadow-xl
                  overflow-hidden
                  border border-[#d8c090]
                "
              >

                {/* YEAR HEADER */}
                <div className="bg-[#f6b23c] text-center py-3">

                  <h3 className="text-xl font-bold text-[#222]">
                    {year}
                  </h3>

                </div>

                {/* CLASS ITEMS */}
                <div className="p-4 space-y-3">

                  {classes.map((cls, j) => (

                    <div
                      key={j}
                      className="
                        flex
                        justify-between
                        items-center
                        gap-4
                        bg-white/70
                        border
                        border-[#e1c88e]
                        rounded-xl
                        px-4
                        py-3
                      "
                    >

                      <span className="font-semibold text-[#16363b]">
                        {cls}
                      </span>

                      <button
                        className="
                          text-blue-700
                          font-bold
                          hover:underline
                          text-sm
                        "
                        onClick={() => {
                          alert(`Open ${cls} - ${year} paper`);
                        }}
                      >
                        {year > currentYear
                          ? "Coming Soon"
                          : "Download"}
                      </button>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

          {/* ================= DESKTOP TABLE VIEW ================= */}

          <div
            className="
              hidden
              lg:block
              overflow-x-auto
              bg-white/80
              backdrop-blur-sm
              p-4
              rounded-2xl
              shadow-xl
            "
          >

            <table className="w-full border-collapse text-center">

              {/* HEADER */}
              <thead className="bg-[#f6b23c]">

                <tr>

                  <th className="border p-4 text-lg">
                    Year
                  </th>

                  {classes.map((cls, i) => (

                    <th
                      key={i}
                      className="border p-4 text-lg"
                    >
                      {cls}
                    </th>

                  ))}

                </tr>

              </thead>

              {/* BODY */}
              <tbody>

                {years.map((year, i) => (

                  <tr
                    key={year}
                    className={
                      i % 2 === 0
                        ? "bg-[#e9d7a4]"
                        : "bg-[#edd07d]"
                    }
                  >

                    {/* YEAR */}
                    <td className="border p-4 font-semibold">
                      {year}
                    </td>

                    {/* CLASS LINKS */}
                    {classes.map((cls, j) => (

                      <td
                        key={j}
                        className="
                          border
                          p-4
                          text-blue-700
                          hover:underline
                          cursor-pointer
                          font-semibold
                        "
                        onClick={() => {
                          alert(`Open ${cls} - ${year} paper`);
                        }}
                      >
                        {year > currentYear
                          ? "Coming Soon"
                          : "Download"}
                      </td>

                    ))}

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ModelQuestions;
