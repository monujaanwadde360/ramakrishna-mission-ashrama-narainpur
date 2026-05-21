// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaThumbsUp,
} from "react-icons/fa6";

import {
  HiHome,
  HiEnvelope,
  HiPhone,
  HiNewspaper,
} from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#f3f3f3]">
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="max-w-[1800px] mx-auto px-4 md:px-10 py-10">
        {/* SAME HEIGHT GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* =====================================================
              CONTACT SECTION
          ===================================================== */}
          <div className="lg:col-span-4 h-full">
            <div className="h-full flex flex-col">
              <h2 className="text-[42px] font-bold text-black mb-10">
                Contact Address
              </h2>

              {/* ADDRESS */}
              <div className="flex gap-5 mb-8">
                <HiHome className="text-[#d63245] text-[42px] shrink-0 mt-1" />

                <div>
                  <h3 className="text-[22px] font-medium text-black leading-relaxed">
                    Ramakrishna Mission Ashrama
                  </h3>

                  <p className="text-black text-[20px] leading-[1.8] mt-1">
                    Sonpur Road,
                    <br />
                    PO & Dist. Narainpur,
                    <br />
                    Chhattisgarh - 494661, India
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-5 mb-8">
                <HiEnvelope className="text-[#d63245] text-[42px] shrink-0" />

                <a
                  href="mailto:rkm.narainpur@gmail.com"
                  className="text-black text-[20px] hover:text-[#0c415a] transition-all"
                >
                  rkm.narainpur@gmail.com
                </a>
              </div>

              {/* PHONE */}
              <div className="flex gap-5 mb-8">
                <HiPhone className="text-[#d63245] text-[42px] shrink-0" />

                <p className="text-black text-[20px] leading-relaxed">
                  +91-77-81252251, +91-77-81252393
                </p>
              </div>

              {/* TERMS */}
              <div className="flex gap-5 mb-10">
                <HiNewspaper className="text-[#d63245] text-[42px] shrink-0" />

                <div>
                  <h3 className="text-[22px] font-medium text-black mb-4">
                    Terms and Policy
                  </h3>

                  <div className="space-y-3 text-[18px]">
                    <Link
                      to="/term-and-policy/terms-and-conditions"
                      className="block text-black hover:text-[#0c415a] transition-all"
                    >
                      Terms and Conditions
                    </Link>

                    <Link
                      to="/term-and-policy/refund-cancellation-policy"
                      className="block text-black hover:text-[#0c415a] transition-all"
                    >
                      Refund and Cancellation Policy
                    </Link>

                    <Link
                      to="/term-and-policy/privacy-policy"
                      className="block text-black hover:text-[#0c415a] transition-all"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>

              {/* FOLLOW */}
              <div className="flex gap-5 mt-auto">
                <FaThumbsUp className="text-[#d63245] text-[42px] shrink-0 mt-1" />

                <div>
                  <h3 className="text-[22px] font-medium text-black mb-6">
                    Follow Us
                  </h3>

                  <div className="flex items-center gap-6 flex-wrap">
                    <a href="#">
                      <FaFacebook className="text-[#1877f2] text-[48px]" />
                    </a>

                    <a href="#">
                      <FaXTwitter className="text-black text-[48px]" />
                    </a>

                    <a href="#">
                      <FaInstagram className="text-[#d62976] text-[48px]" />
                    </a>

                    <a href="#">
                      <FaYoutube className="text-red-600 text-[52px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              MAP
          ===================================================== */}
          <div className="lg:col-span-4 h-full">
            <div className="h-full min-h-[600px] overflow-hidden shadow-lg">
              <iframe
                title="Narayanpur Chhattisgarh Map"
                src="https://maps.google.com/maps?q=Narayanpur%20Chhattisgarh%20494661%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* =====================================================
              REPORT IMAGE
          ===================================================== */}
          <div className="lg:col-span-4 h-full">
            <a
              href="https://narainpur.rkmm.org/Brief%20Report/Brief%20Report%202023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <img
                src="/images/brief-report-2023.jpg"
                alt="Brief Report"
                className="w-full h-full min-h-[600px] object-cover shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          FULL WIDTH BOTTOM BAR
      ===================================================== */}

      <div className="w-full bg-gradient-to-r from-[#8b1e1e] via-[#d63b45] to-[#0c415a] py-5 px-6">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white text-[18px] text-center md:text-left">
            © 2026 Ramakrishna Mission Ashrama, Narainpur. All Rights Reserved.
          </p>

          <p className="text-white text-[18px] text-center md:text-right">
            Designed & Developed with dedication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;