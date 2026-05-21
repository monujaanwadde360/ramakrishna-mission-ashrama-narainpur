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

          {/* SECTION 1 */}
          <div className="bg-[#8b7f6a] text-white px-4 py-2 rounded-md mb-3 flex items-center gap-2">
            <span className={glowDot}>●</span>
            ADMISSION RULES FOR SCHOOL (CLASS 1 – 12)
          </div>

          <div className="p-4 text-[15px] leading-7 text-[#333] rounded-md">
            <p>
              Admission is open for students from <strong>Class 1 to Class 12</strong>
              as per availability of seats.
            </p>

            <p className="mt-2">
              Students must have passed the previous class from a recognized school.
            </p>

            <p className="mt-2">
              Admission is granted based on <strong>entrance test / interaction</strong>.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="bg-[#8b7f6a] text-white px-4 py-2 rounded-md mt-4 mb-3 flex items-center gap-2">
            <span className={glowDot}>●</span>
            CLASS TRANSFER & PROMOTION RULES
          </div>

          <div className="p-4 text-[15px] leading-7 text-[#333] rounded-md">
            <p>Students will be promoted based on performance:</p>

            <ul className="list-disc pl-6 mt-2">
              <li>Class 1 → Class 2 (No exam)</li>
              <li>Class 5 → Admission test required for Class 6</li>
              <li>Class 8 → Admission test required for Class 9</li>
              <li>Class 10 → Admission test required for Class 11</li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div className="bg-[#8b7f6a] text-white px-4 py-2 rounded-md mt-4 mb-3 flex items-center gap-2">
            <span className={glowDot}>●</span>
            REQUIRED DOCUMENTS
          </div>

          <div className="p-4 text-[15px] leading-7 text-[#333] rounded-md ">
            <ul className="list-disc pl-6">
              <li>Birth Certificate</li>
              <li>Previous School Marksheet</li>
              <li>Transfer Certificate (TC)</li>
              <li>Aadhar Card (if available)</li>
              <li>Passport size photographs</li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="bg-[#8b7f6a] text-white px-4 py-2 rounded-md mt-4 mb-3 flex items-center gap-2">
            <span className={glowDot}>●</span>
            IMPORTANT NOTES
          </div>

          <div className="p-4 text-[15px] leading-7 text-[#333] rounded-md">
            <ul className="list-disc pl-6">
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