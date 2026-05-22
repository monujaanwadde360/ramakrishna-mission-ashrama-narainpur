import React from "react";
import Navbar from "../components/Navbar";
import AdmissionSidebar from "../components/AdmissionSidebar";
import ScrollToTop from "../components/ScrollToTop";

const glowDot =
  "text-yellow-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)] drop-shadow-[0_0_12px_rgba(255,255,0,0.6)]";

const AdmissionRules = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
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

          {/* SECTION 1 */}
          <div className="bg-[#8b7f6a] text-white px-4 py-3 rounded-md mb-3 flex items-center gap-2 shadow-lg">

            <span className={`${glowDot} text-sm md:text-base`}>
              ●
            </span>

            <h2 className="text-sm sm:text-base md:text-lg font-bold leading-snug">
              ADMISSION RULES FOR SCHOOL (CLASS 1 – 12)
            </h2>

          </div>

          <div
            className="
              bg-[#f7f1e1]/90
              p-4
              sm:p-5
              md:p-6
              text-[14px]
              sm:text-[15px]
              md:text-[17px]
              leading-7
              text-[#333]
              rounded-md
              shadow-md
            "
          >
            <p>
              Admission is open for students from{" "}
              <strong>Class 1 to Class 12</strong>
              {" "}as per availability of seats.
            </p>

            <p className="mt-3">
              Students must have passed the previous class from a recognized school.
            </p>

            <p className="mt-3">
              Admission is granted based on{" "}
              <strong>entrance test / interaction</strong>.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="bg-[#8b7f6a] text-white px-4 py-3 rounded-md mt-6 mb-3 flex items-center gap-2 shadow-lg">

            <span className={`${glowDot} text-sm md:text-base`}>
              ●
            </span>

            <h2 className="text-sm sm:text-base md:text-lg font-bold leading-snug">
              CLASS TRANSFER & PROMOTION RULES
            </h2>

          </div>

          <div
            className="
              bg-[#f7f1e1]/90
              p-4
              sm:p-5
              md:p-6
              text-[14px]
              sm:text-[15px]
              md:text-[17px]
              leading-7
              text-[#333]
              rounded-md
              shadow-md
            "
          >
            <p>Students will be promoted based on performance:</p>

            <ul className="list-disc pl-5 sm:pl-6 mt-3 space-y-2">
              <li>Class 1 → Class 2 (No exam)</li>
              <li>Class 5 → Admission test required for Class 6</li>
              <li>Class 8 → Admission test required for Class 9</li>
              <li>Class 10 → Admission test required for Class 11</li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div className="bg-[#8b7f6a] text-white px-4 py-3 rounded-md mt-6 mb-3 flex items-center gap-2 shadow-lg">

            <span className={`${glowDot} text-sm md:text-base`}>
              ●
            </span>

            <h2 className="text-sm sm:text-base md:text-lg font-bold leading-snug">
              REQUIRED DOCUMENTS
            </h2>

          </div>

          <div
            className="
              bg-[#f7f1e1]/90
              p-4
              sm:p-5
              md:p-6
              text-[14px]
              sm:text-[15px]
              md:text-[17px]
              leading-7
              text-[#333]
              rounded-md
              shadow-md
            "
          >
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>Birth Certificate</li>
              <li>Previous School Marksheet</li>
              <li>Transfer Certificate (TC)</li>
              <li>Aadhar Card (if available)</li>
              <li>Passport size photographs</li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="bg-[#8b7f6a] text-white px-4 py-3 rounded-md mt-6 mb-3 flex items-center gap-2 shadow-lg">

            <span className={`${glowDot} text-sm md:text-base`}>
              ●
            </span>

            <h2 className="text-sm sm:text-base md:text-lg font-bold leading-snug">
              IMPORTANT NOTES
            </h2>

          </div>

          <div
            className="
              bg-[#f7f1e1]/90
              p-4
              sm:p-5
              md:p-6
              text-[14px]
              sm:text-[15px]
              md:text-[17px]
              leading-7
              text-[#333]
              rounded-md
              shadow-md
            "
          >
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>Admission is subject to seat availability.</li>
              <li>School reserves the right to accept or reject applications.</li>
              <li>All rules are subject to change as per school policy.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdmissionRules;
