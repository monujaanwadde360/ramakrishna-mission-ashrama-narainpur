// src/components/Footer.jsx

import React from "react";

import {
  Home,
  Mail,
  Phone,
  Newspaper,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-fixed
        font-serif
      "
      style={{
        backgroundImage: "url('/images/rkm.jpg')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[oklch(96.8%_0.007_247.896)]/30"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

          {/* =====================================================
              CONTACT INFO CARD
          ===================================================== */}

          <div
            className="
             bg-[#efe2b3]/35
              rounded-[32px]
              p-6
              shadow-2xl
              h-[580px]
              border border-white/30
              hover:-translate-y-1
              transition-all duration-500
              flex flex-col
            "
          >
            {/* TITLE */}
            <div className="mb-6">
              <h2
                className="
                  text-3xl md:text-4xl
                  font-bold
                  text-[#0c415a]
                  mb-3
                "
              >
                Contact Address
              </h2>

              <div className="w-24 h-1 bg-[#c57b3a] rounded-full"></div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto pr-1">

              {/* ADDRESS */}
              <div className="flex gap-4 mb-5">
                <div
                  className="
                    min-w-[58px]
                    h-[58px]
                    rounded-2xl
                    bg-[#f5e6d3]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Home size={28} className="text-[#7a5a4f]" />
                </div>

                <div>
                  <h3 className="text-[22px] font-bold text-[#0c415a]">
                    Ramakrishna Mission Ashrama
                  </h3>

                  <p className="text-gray-700 text-[18px] mt-2 leading-7">
                    Sonpur Road,
                    <br />
                    PO & Dist. Narainpur,
                    <br />
                    Chhattisgarh - 494661, India
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <a
                href="mailto:rkm.narainpur@gmail.com"
                className="
    flex gap-4 mb-4
    p-4
    rounded-2xl
    bg-[#faf7f2]
    hover:bg-[#f3ece3]
    hover:scale-[1.02]
    transition-all duration-300
    cursor-pointer
  "
              >
                <div
                  className="
      min-w-[58px]
      h-[58px]
      rounded-xl
      bg-[#f5e6d3]
      flex
      items-center
      justify-center
    "
                >
                  <Mail size={24} className="text-[#7a5a4f]" />
                </div>

                <div>
                  <h4 className="text-[22px] font-bold text-[#0c415a]">
                    Email
                  </h4>

                  <p className="text-[18px] break-all mt-1 text-gray-700">
                    rkm.narainpur@gmail.com
                  </p>
                </div>
              </a>

              {/* PHONE */}
              <a
                href="tel:+917781252251"
                className="
    flex gap-4 mb-5
    p-4
    rounded-2xl
    bg-[#faf7f2]
    hover:bg-[#f3ece3]
    hover:scale-[1.02]
    transition-all duration-300
    cursor-pointer
  "
              >
                <div
                  className="
      min-w-[58px]
      h-[58px]
      rounded-xl
      bg-[#f5e6d3]
      flex
      items-center
      justify-center
    "
                >
                  <Phone size={24} className="text-[#7a5a4f]" />
                </div>

                <div>
                  <h4 className="text-[22px] font-bold text-[#0c415a]">
                    Phone
                  </h4>

                  <p className="text-[18px] leading-7 mt-1 text-gray-700">
                    +91-77-81252251
                    <br />
                    +91-77-81252393
                  </p>
                </div>
              </a>
            </div>

          </div>


          {/* =====================================================
              GOOGLE MAP CARD
          ===================================================== */}

          <div
            className="
            bg-[#efe2b3]/35
              rounded-[32px]
              overflow-hidden
              shadow-2xl
              h-[580px]
              border-4 border-white/20
              hover:scale-[1.01]
              transition-all duration-500
            "
          >
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

          {/* =====================================================
    IMAGE CARD
===================================================== */}

          <a
            href="https://narainpur.rkmm.org/Brief%20Report/Brief%20Report%202023.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
    block
    bg-[#efe2b3]/35
    rounded-[32px]
    p-5
    shadow-2xl
    h-[580px]
    border border-white/30
    hover:-translate-y-1
    hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
    transition-all duration-500
  "
          >
            <div className="relative w-full h-full overflow-hidden rounded-[24px] group">

              {/* IMAGE */}
              <img
                src="/images/brief-report-2023.jpg"
                alt="Brief Report 2023"
                className="
        w-full
        h-full
        object-cover
        rounded-[24px]
        group-hover:scale-105
        transition-all duration-700
      "
              />

              {/* OVERLAY */}
              <div
                className="
        absolute inset-0
        bg-gradient-to-t
        from-black/75
        via-black/10
        to-transparent
      "
              ></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  Brief Report 2023
                </h3>

                <p className="text-[16px] leading-7 text-white/90">
                  Click to open the official annual report
                  in a new tab.
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* =====================================================
    TERMS & FOLLOW SECTION BELOW CARDS
===================================================== */}

        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {/* TERMS CARD */}
          <div
            className="
            bg-[#efe2b3]/35
      rounded-[32px]
      p-6
      shadow-2xl
      border border-white/30
      hover:-translate-y-1
      transition-all duration-500
    "
          >
            <div className="flex items-start gap-4">

              {/* ICON */}
              <div
                className="
          min-w-[60px]
          h-[60px]
          rounded-2xl
          bg-[#f5e6d3]
          flex
          items-center
          justify-center
        "
              >
                <Newspaper size={28} className="text-[#7a5a4f]" />
              </div>

              {/* CONTENT */}
              <div className="w-full">
                <h3 className="text-3xl font-bold text-[#0c415a] mb-4">
                  Terms & Policy
                </h3>

                <div className="space-y-3">
                  {[
                    "Terms and Conditions",
                    "Refund and Cancellation Policy",
                    "Privacy Policy",
                  ].map((item, index) => (
                    <p
                      key={index}
                      className="
                text-[17px]
                hover:text-[#0c415a]
                hover:translate-x-2
                cursor-pointer
                transition-all duration-300
              "
                    >
                      → {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FOLLOW US CARD */}
          <div
            className="
            bg-[#efe2b3]/35
      rounded-[32px]
      p-6
      shadow-2xl
      border border-white/30
      hover:-translate-y-1
      transition-all duration-500
    "
          >
            <h3 className="text-3xl font-bold text-[#0c415a] mb-6">
              Follow Us
            </h3>

            <p className="text-[17px] leading-7 mb-6">
              Stay connected with Ramakrishna Mission Ashrama
              through our official social media platforms.
            </p>

            <div className="flex items-center gap-5 flex-wrap">

              {/* FACEBOOK */}
              <a
                href="#"
                className="
          w-14 h-14
          rounded-full
          bg-[#1877f2]
          text-white
          flex items-center justify-center
          text-xl
          shadow-lg
          hover:-translate-y-2
          hover:scale-110
          transition-all duration-300
        "
              >
                <FaFacebookF />
              </a>

              {/* X */}
              <a
                href="#"
                className="
          w-14 h-14
          rounded-full
          bg-black
          text-white
          flex items-center justify-center
          text-xl
          shadow-lg
          hover:-translate-y-2
          hover:scale-110
          transition-all duration-300
        "
              >
                <FaXTwitter />
              </a>

              {/* INSTAGRAM */}
              <a
                href="#"
                className="
          w-14 h-14
          rounded-full
          bg-gradient-to-r
          from-pink-500
          via-red-500
          to-yellow-500
          text-white
          flex items-center justify-center
          text-xl
          shadow-lg
          hover:-translate-y-2
          hover:scale-110
          transition-all duration-300
        "
              >
                <FaInstagram />
              </a>

              {/* YOUTUBE */}
              <a
                href="#"
                className="
          w-14 h-14
          rounded-full
          bg-red-600
          text-white
          flex items-center justify-center
          text-xl
          shadow-lg
          hover:-translate-y-2
          hover:scale-110
          transition-all duration-300
        "
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FULL WIDTH BOTTOM BAR
      ===================================================== */}

      <div className="w-full bg-gradient-to-b from-[#f6c27a] to-[#c57b3a] py-5 px-6">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[18px] text-center md:text-left">
            © 2026 Ramakrishna Mission Ashrama, Narainpur. All Rights Reserved.
          </p>

          <p className="text-[18px] text-center md:text-right">
            Designed & Developed with dedication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
