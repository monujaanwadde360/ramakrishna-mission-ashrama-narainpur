import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdmissionSidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="
        w-full
        lg:w-[280px]
        flex
        flex-col
        gap-3
      "
    >

      {/* RULES */}
      <Link
        to="/academics/admission-rules"
        className={`
          text-center
          px-4
          py-3
          rounded-md
          font-semibold
          border
          transition
          shadow-md

          ${
            isActive("/academics/admission-rules")
              ? "bg-white text-blue-600 border-gray-400"
              : "bg-[#f6c27a] border-[#a15b24] hover:bg-[#e6b56a]"
          }
        `}
      >
        Rules for Admission
      </Link>

      {/* MODEL QUESTIONS */}
      <Link
        to="/academics/model-questions"
        className={`
          text-center
          px-4
          py-3
          rounded-md
          font-semibold
          border
          transition
          shadow-md

          ${
            isActive("/academics/model-questions")
              ? "bg-white text-blue-600 border-gray-400"
              : "bg-[#f6c27a] border-[#a15b24] hover:bg-[#e6b56a]"
          }
        `}
      >
        Model Questions (Admission Test)
      </Link>

    </div>
  );
};

export default AdmissionSidebar;
