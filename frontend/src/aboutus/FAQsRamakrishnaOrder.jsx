// src/aboutus/FAQsRamakrishnaOrder.jsx

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
} from "lucide-react";

import { faqData } from "../data/faqsData";
import ScrollToTop from "../components/ScrollToTop";

const FAQsRamakrishnaOrder = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* SEARCH FILTER */
  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/rkm.jpg')",
      }}
    >
      <Navbar />
      <ScrollToTop />

      {/* MAIN WRAPPER */}
      <div className="min-h-screen py-16 px-4 md:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-7xl mx-auto text-center mb-16">

          {/* ICON */}
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full
              backdrop-blur-xl bg-white/40 border border-white/30
              flex items-center justify-center shadow-xl"
            >
              <HelpCircle className="w-10 h-10 text-[#b86f24]" />
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-black text-4xl md:text-6xl font-bold font-serif leading-tight">
            FAQs on Joining the Ramakrishna Order
          </h1>

          {/* SUBTITLE */}
          <h2 className="mt-5 text-[#b86f24] text-xl md:text-3xl font-semibold">
            Frequently Asked Questions
          </h2>

          {/* UNDERLINE */}
          <div className="mt-6 flex flex-col items-center gap-[5px]">
            <div className="w-[260px] md:w-[430px] h-[2px] bg-black/70" />
            <div className="w-[260px] md:w-[430px] h-[1px] bg-black/40" />
          </div>

        </div>

        {/* ================= INTRO ================= */}
        <div className="max-w-[1450px] mx-auto mb-16">

          <div
            className="rounded-[35px]
            backdrop-blur-xl bg-white/45
            border border-white/40
            shadow-2xl
            p-6 md:p-10"
          >

            <p className="text-black/80 text-[16px] md:text-[20px] leading-9 md:leading-10 text-justify">
              Many youngsters, inspired by the life and teachings of
              Swami Vivekananda, feel a deep urge to embrace monastic
              life in the Ramakrishna Order. Others develop this aspiration
              through spiritual study, renunciation, devotion or the desire
              to dedicate themselves to selfless service.
            </p>

            <p className="mt-7 text-black/75 text-[15px] md:text-[19px] leading-9 md:leading-10 text-justify">
              Before embracing monastic life, one must carefully understand
              the ideals, responsibilities, discipline and spiritual
              foundation of the Ramakrishna Order. These Frequently Asked
              Questions are intended to guide sincere aspirants toward a
              clearer understanding of the Order and its monastic life.
            </p>

          </div>

        </div>

        {/* ================= SEARCH ================= */}
        <div className="max-w-[950px] mx-auto mb-14">

          <div className="relative">

            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2
              text-black/50 w-5 h-5"
            />

            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-5 py-5 rounded-2xl
              backdrop-blur-xl bg-white/45
              border border-white/40
              shadow-xl outline-none
              text-black text-lg
              placeholder:text-black/45
              focus:bg-white/60 transition"
            />

          </div>

        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="max-w-[1450px] mx-auto space-y-6">

          {filteredFaqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-[28px]
              overflow-hidden
              border border-white/40
              backdrop-blur-xl bg-white/40
              shadow-2xl
              transition duration-500"
            >

              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-5
                px-5 md:px-8 py-6
                text-left hover:bg-white/20 transition"
              >

                <div className="flex items-start gap-4">

                  {/* NUMBER */}
                  <div
                    className="min-w-[46px] h-[46px]
                    rounded-full bg-[#b86f24]
                    text-white flex items-center justify-center
                    font-bold shadow-lg"
                  >
                    {index + 1}
                  </div>

                  {/* QUESTION */}
                  <div>

                    <h3
                      className="text-[#7a4300]
                      text-[18px] md:text-[28px]
                      font-semibold leading-snug"
                    >
                      {faq.question}
                    </h3>

                  </div>

                </div>

                {/* ICON */}
                <div className="mt-1">
                  {openIndex === index ? (
                    <ChevronUp
                      className="text-black w-7 h-7"
                    />
                  ) : (
                    <ChevronDown
                      className="text-black w-7 h-7"
                    />
                  )}
                </div>

              </button>

              {/* ANSWER */}
              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-[4000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >

                <div className="px-6 md:px-10 pb-8 md:pb-10">

                  {/* DIVIDER */}
                  <div className="h-[1px] bg-black/10 mb-6" />

                  {/* ANSWER TEXT */}
                  <p
                    className="text-black/80
                    text-[15px] md:text-[20px]
                    leading-9 md:leading-10
                    font-light text-justify"
                  >
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>

          ))}

          {/* NO RESULTS */}
          {filteredFaqs.length === 0 && (

            <div
              className="text-center py-16 rounded-[30px]
              backdrop-blur-xl bg-white/45
              border border-white/40 shadow-xl"
            >

              <h2 className="text-2xl md:text-4xl font-bold text-black">
                No FAQs Found
              </h2>

              <p className="mt-4 text-black/70 text-lg">
                Try searching with different keywords.
              </p>

            </div>

          )}

        </div>

      </div>
    </div>
  );
};

export default FAQsRamakrishnaOrder;