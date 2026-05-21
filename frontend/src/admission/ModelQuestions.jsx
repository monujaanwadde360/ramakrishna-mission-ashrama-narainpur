import React from "react";
import Navbar from "../components/Navbar";
import AdmissionSidebar from "../components/AdmissionSidebar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

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
      className="w-full min-h-screen bg-[#f3ecd7] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/rkm.jpg')",
      }}
    >
      <Navbar />
      <ScrollToTop />

      <div className="flex mt-4 px-4 gap-6">

        {/* SIDEBAR */}
        <AdmissionSidebar />

        {/* CONTENT */}
        <div className="flex-1 max-w-[950px]">

          {/* NOTICE */}
          <div className="text-center font-semibold mb-3">
            All are requested to note that the question-pattern may vary
          </div>

          {/* TITLE WITH GLOW */}
          <div className="bg-[#8b7f6a] text-white px-4 py-2 rounded-md mb-3 flex items-center gap-2">
            <span className={glowDot}>●</span>
            PREVIOUS YEAR MODEL QUESTIONS (CLASS-WISE)
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto bg-white/80 backdrop-blur-sm p-3 rounded-md">

            <table className="w-full border text-center">

              {/* HEADER */}
              <thead className="bg-[#f6b23c]">
                <tr>
                  <th className="border p-2">Year</th>
                  {classes.map((cls, i) => (
                    <th key={i} className="border p-2">{cls}</th>
                  ))}
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                {years.map((year, i) => (
                  <tr
                    key={year}
                    className={i % 2 === 0 ? "bg-[#e9d7a4]" : "bg-[#edd07d]"}
                  >
                    {/* YEAR */}
                    <td className="border p-2 font-semibold">
                      {year}
                    </td>

                    {/* CLASS LINKS */}
                    {classes.map((cls, j) => (
                      <td
                        key={j}
                        className="border p-2 text-blue-700 hover:underline cursor-pointer"
                        onClick={() => {
                          // Replace with real PDF later
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
      <Footer />
    </div>
  );
};

export default ModelQuestions;