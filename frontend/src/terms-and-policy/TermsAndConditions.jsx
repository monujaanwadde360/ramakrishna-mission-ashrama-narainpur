// src/terms-and-policy/TermsAndConditions.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="w-full min-h-screen bg-[#f6f4ee]">
      <Navbar />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          bg-gradient-to-r
          from-[#0c415a]
          via-[#124f6d]
          to-[#8b1e1e]
          py-24
          px-5
        "
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1
            className="
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
            "
          >
            Terms & Conditions
          </h1>

          <div className="flex justify-center mt-6">
            <div className="w-40 h-[3px] bg-white rounded-full"></div>
          </div>

          <p
            className="
              mt-8
              text-lg
              md:text-2xl
              leading-relaxed
              text-white/90
            "
          >
            Please read these terms and conditions carefully before using
            the services and website of Ramakrishna Mission Ashrama,
            Narainpur.
          </p>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16">
        <div
          className="
            bg-white
            rounded-[40px]
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            border border-[#ece5d3]
            overflow-hidden
          "
        >
          {/* TOP BAR */}
          <div className="h-3 bg-gradient-to-r from-[#8b1e1e] via-[#d63b45] to-[#0c415a]"></div>

          {/* CONTENT AREA */}
          <div className="p-6 md:p-14 space-y-16">
            {/* INTRO */}
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
                Terms and Conditions
              </h2>

              <div className="space-y-6 text-[#333] text-[18px] md:text-[21px] leading-[2]">
                <p>
                  By using the pages in this site, you agree to these
                  terms and conditions. If you do not agree, please do
                  not use this site.
                </p>

                <p>
                  These terms and conditions may be changed or updated
                  from time to time.
                </p>
              </div>
            </section>

            {/* COPYRIGHT */}
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
                Copyright & Ownership
              </h2>

              <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                This website is owned and maintained by Ramakrishna
                Mission, Narainpur. Unless otherwise indicated, all
                information contained in this website is copyrighted.
                You may not copy, frame, modify, transmit or distribute
                the material obtained from website, in whole or in part,
                without the written consent of the copyright owner.
              </p>
            </section>

            {/* LINK POLICY */}
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
                Linking Policy
              </h2>

              <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                You are welcome to link to this site, provided that in
                doing so you do not use the name of the Ramakrishna
                Mission, and their emblem without permission. Use of the
                names and emblem of Ramakrishna Mission by unauthorized
                persons, including their reproduction on other websites
                without appropriate authorization constitutes a criminal
                offence under the Emblems and Names (Prevention of
                Improper Use) Act, 1950, of the Government of India.
              </p>
            </section>

            {/* REPUTATION */}
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
                Reputation & Usage
              </h2>

              <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                You may not link to this site from a site or in a manner
                which disparages the reputation of Ramakrishna Mission
                and its affiliates.
              </p>
            </section>

            {/* CONTACT */}
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
                Contact & Permissions
              </h2>

              <div className="space-y-8">
                <div
                  className="
                    bg-[#f8f5ef]
                    border-l-[6px]
                    border-[#d63b45]
                    rounded-2xl
                    p-6
                  "
                >
                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    For permission to use text information or
                    photographs from this web site in a manner other
                    than that stated above, please contact us:
                  </p>

                  <p className="mt-4 text-[#0c415a] font-bold text-xl md:text-2xl break-all">
                    rkm.narainpur@gmail.com
                  </p>
                </div>

                <div
                  className="
                    bg-[#f8f5ef]
                    border-l-[6px]
                    border-[#0c415a]
                    rounded-2xl
                    p-6
                  "
                >
                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    If you have any questions about this website, or if
                    you find any errors, please notify us:
                  </p>

                  <p className="mt-4 text-[#0c415a] font-bold text-xl md:text-2xl break-all">
                    rkm.narainpur@gmail.com
                  </p>
                </div>
              </div>
            </section>

            {/* DISCLAIMER */}
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
                Disclaimer
              </h2>

              <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                The material in this site may include technical
                inaccuracies or typographical errors. Ramakrishna
                Mission, Narainpur, may make changes or improvements at
                any time.
              </p>
            </section>

            {/* DONATION TERMS */}
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
                General Terms for Donations
              </h2>

              <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                Donations to the Ramakrishna Mission are exempt from
                income-tax under Section 80G (1) (ii) read with Section
                80G (4) of the Indian Income Tax Act, 1961. All
                donations are thankfully acknowledged and the details of
                income-tax approval order to Ramakrishna Mission appear
                on your donation receipt. When a donor makes a donation
                online, certain information is collected, including
                donor’s name, address, phone number, email address and
                purpose of donation.
              </p>
            </section>

            {/* REFUNDS */}
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
                Disputes & Refunds
              </h2>

              <div
                className="
                  bg-[#f8f5ef]
                  rounded-3xl
                  border border-[#eadfc2]
                  p-6 md:p-8
                "
              >
                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                  All complaints, grievances and disputes will be
                  treated seriously, quickly and in a timely manner,
                  having due regard to procedural fairness and
                  confidentiality.
                </p>

                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                  All parties are required to participate in the dispute
                  resolution process in good faith.
                </p>

                <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] mt-6">
                  If you believe that there has been an error with your
                  donation, you should notify us directly on{" "}
                  <span className="font-bold text-[#0c415a]">
                    (077) 81252251
                  </span>{" "}
                  and confirm that a notice in writing or by email at{" "}
                  <span className="font-bold text-[#0c415a]">
                    rkm.narainpur@gmail.com
                  </span>{" "}
                  as soon as possible so that we can resolve your query
                  quickly.
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

export default TermsAndConditions;