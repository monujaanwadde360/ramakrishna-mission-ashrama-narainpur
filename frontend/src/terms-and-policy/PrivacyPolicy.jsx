// src/terms-and-policy/PrivacyPolicy.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div
      className="
        w-full
        min-h-screen
        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed
      "
      style={{
        backgroundImage: "url('/images/home/rkm.jpg')",
      }}
    >
      <Navbar />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          py-12
          px-5
        "
      >

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto text-center font-serif font-bold tracking-wide">

          <h1
            className="
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
              drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]
            "
          >
            Privacy Policy
          </h1>

          <div className="flex justify-center mt-6">
            <div className="w-40 h-[3px] bg-black rounded-full"></div>
          </div>

        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 font-serif font-bold tracking-wide bg-[#efe2b3]/35">

        <div
          className="
            bg-white/85
            backdrop-blur-md
            rounded-[40px]
            shadow-[0_10px_40px_rgba(0,0,0,0.18)]
            border border-white/40
            overflow-hidden
          "
        >
          {/* TOP BAR */}
          <div className="h-3 bg-gradient-to-r from-[#8b1e1e] via-[#d63b45] to-[#0c415a]"></div>

          {/* CONTENT */}
          <div className="p-6 md:p-14 space-y-16 bg-[#efe2b3]/35 font-serif font-bold tracking-wide">

            {/* INTRODUCTION */}
            <section>
              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-[#0c415a]
                  mb-8
                "
              >
                Introduction
              </h2>

              <div
                className="
                  bg-[#f8f5ef]/90
                  rounded-3xl
                  border border-[#eadfc2]
                  p-6 md:p-8
                  shadow-md
                "
              >
                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                  The Sri Ramakrishna Mission, Narainpur Online
                  Donations website (https://narainpur.rkmm.org),
                  branch center of Ramakrishna Math/Mission – Belur is
                  committed to protecting the privacy of all visitors to
                  its websites.
                </p>

                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                  This privacy policy describes the collection, use, and
                  security of information received when users visit its
                  sites. From time to time, Ramakrishna Math and
                  Ramakrishna Mission may amend provisions of this
                  policy.
                </p>
              </div>
            </section>

            {/* INFORMATION COLLECTED */}
            <section>
              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-[#0c415a]
                  mb-8
                "
              >
                Information Collected
              </h2>

              <div className="space-y-8">

                <div
                  className="
                    bg-[#f8f5ef]/90
                    border-l-[6px]
                    border-[#d63b45]
                    rounded-2xl
                    p-6 md:p-8
                    shadow-md
                  "
                >
                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    Ramakrishna Mission, Narainpur respects your
                    privacy and recognizes the need to protect the
                    personally identifiable information (any information
                    by which you can be identified name, address, and
                    telephone number) you share with us.
                  </p>

                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                    We would like to assure you that we make best
                    efforts when it comes to protecting your privacy on
                    our official website:
                  </p>

                  <p className="mt-5 text-[#0c415a] font-bold text-xl md:text-2xl break-all">
                    https://narainpur.rkmm.org
                  </p>
                </div>

                <div>
                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    In general, you can visit our official website
                    without telling us who you are or revealing any
                    personal information about yourself.
                  </p>

                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                    We track the Internet address of the domains
                    including browser type, IP address from which
                    people visit us and analyze this data for trends and
                    statistics, but the individual user remains
                    anonymous.
                  </p>

                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                    Our collection of website use information may
                    involve the use of cookies.
                  </p>
                </div>

                <div
                  className="
                    bg-[#f8f5ef]/90
                    rounded-3xl
                    border border-[#eadfc2]
                    p-6 md:p-8
                    shadow-md
                  "
                >
                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    This information is saved in a secure environment
                    and is kept for our records and to make it easier
                    for you to use our services on return visits.
                  </p>

                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                    To serve you faster and with better quality. No
                    third party has access to the information we collect
                    this way.
                  </p>
                </div>

              </div>
            </section>

            {/* INFORMATION USAGE */}
            <section>
              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-[#0c415a]
                  mb-8
                "
              >
                Information Usage & Sharing
              </h2>

              <div className="space-y-8">

                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                  Needless to add, all Information collected shall only
                  be used internally within Ramakrishna Math and
                  Ramakrishna Mission or shared with only authorized and
                  identified external service provider(s), when it is
                  utmost necessary to do so with the sole objective to
                  provide the Devotees with the best possible
                  requisitioned services.
                </p>

                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                  The administration shall use the Information to
                  improve the visitor experience on the site.
                </p>

                <div
                  className="
                    bg-[#f8f5ef]/90
                    border-l-[6px]
                    border-[#0c415a]
                    rounded-2xl
                    p-6 md:p-8
                    shadow-md
                  "
                >
                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    We may disclose specific information upon
                    governmental request, in response to a court order,
                    when required by law, to enforce our corporate
                    policies, or to protect our or others’ rights,
                    property, or safety.
                  </p>

                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                    We do not provide information to these agencies or
                    companies for marketing or commercial purposes.
                  </p>
                </div>

              </div>
            </section>

            {/* COOKIES */}
            <section>
              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-[#0c415a]
                  mb-8
                "
              >
                Cookies & Browser Settings
              </h2>

              <div
                className="
                  bg-[#f8f5ef]/90
                  rounded-3xl
                  border border-[#eadfc2]
                  p-6 md:p-8
                  shadow-md
                "
              >
                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                  You can choose to have your computer warn you each
                  time a cookie is being sent or you can choose to turn
                  off all cookies.
                </p>

                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                  You do this through your browser settings.
                </p>

                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                  If you turn cookies off, some of our services will not
                  function properly.
                </p>
              </div>
            </section>

            {/* SECURITY */}
            <section>
              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-[#0c415a]
                  mb-8
                "
              >
                Information Security & Disclosure Policy
              </h2>

              <div className="space-y-8">

                <div
                  className="
                    bg-[#f8f5ef]/90
                    rounded-3xl
                    border border-[#eadfc2]
                    p-6 md:p-8
                    shadow-md
                  "
                >
                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    The statistical and personally identifying
                    information received by Ramakrishna Math will be
                    gathered solely for internal purposes.
                  </p>

                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                    Ramakrishna Math does not rent, exchange, or sell
                    to third parties any of the information that
                    visitors provide online.
                  </p>
                </div>

                <div
                  className="
                    bg-[#f8f5ef]/90
                    border-l-[6px]
                    border-[#d63b45]
                    rounded-2xl
                    p-6 md:p-8
                    shadow-md
                  "
                >
                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    To prevent unauthorized access, maintain data
                    accuracy, and ensure correct use of information, we
                    employ reasonable and current Internet security
                    methods and technologies.
                  </p>
                </div>

                <div
                  className="
                    mt-8
                    bg-[#0c415a]
                    text-white
                    rounded-3xl
                    p-6 md:p-8
                    shadow-lg
                  "
                >
                  <p className="text-[18px] md:text-[22px] font-semibold leading-[2]">
                    We never store your credit card/bank related
                    information on our site.
                  </p>
                </div>

              </div>
            </section>

            {/* POLICY UPDATE */}
            <section>
              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-[#0c415a]
                  mb-8
                "
              >
                Policy Updates
              </h2>

              <div
                className="
                  bg-[#f8f5ef]/90
                  rounded-3xl
                  border border-[#eadfc2]
                  p-6 md:p-8
                  shadow-md
                "
              >
                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                  Any changes to our Privacy Policy will be communicated
                  through our Site before implementation.
                </p>

                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                  Information collected before changes are made will be
                  secured according to the previous Privacy Policy.
                </p>
              </div>
            </section>    

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
