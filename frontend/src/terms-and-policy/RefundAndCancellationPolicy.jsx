// src/terms-and-policy/RefundAndCancellationPolicy.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RefundAndCancellationPolicy = () => {
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
            Refund & Cancellation Policy
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
            Please read our refund and cancellation policy carefully
            before making any online donation.
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
            {/* MAIN POLICY */}
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
                Refund and Cancellation Policy
              </h2>

              <div className="space-y-8">
                {/* INTRO BOX */}
                <div
                  className="
                    bg-[#f8f5ef]
                    rounded-3xl
                    border border-[#eadfc2]
                    p-6 md:p-8
                  "
                >
                  <p className="text-[#111] text-[18px] md:text-[21px] leading-[2] font-semibold">
                    Ramakrishna Mission, Narainpur, reserves the right
                    to refuse/cancel a donation towards the activities
                    of the Math if:
                  </p>

                  <div className="mt-6 space-y-5 text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    <p>
                      1. You do not indicate the purpose of the
                      donation.
                    </p>

                    <p>
                      2. You do not give your full name, address and
                      other contact details.
                    </p>

                    <p>
                      3. You do not give your PAN when donating
                      ₹ 10,000/- or above.
                    </p>
                  </div>
                </div>

                {/* TECHNICAL ISSUE */}
                <div>
                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    When you try to donate but due to slow internet
                    connectivity, bank server failure or technical
                    problem of the website, you do not receive any
                    confirmation message, and find that the money has
                    been debited from your bank account, please contact
                    us:
                  </p>

                  <div
                    className="
                      mt-6
                      bg-[#f8f5ef]
                      border-l-[6px]
                      border-[#d63b45]
                      rounded-2xl
                      p-6
                    "
                  >
                    <p className="text-[#0c415a] font-bold text-xl md:text-2xl break-all">
                      rkm.narainpur@gmail.com
                    </p>

                    <p className="mt-4 text-[#333] text-[18px] md:text-[20px] leading-[2]">
                      We will check the transaction status and
                      update/inform you about the status of the
                      transaction.
                    </p>
                  </div>
                </div>

                {/* REFUND REQUEST */}
                <div>
                  <p className="text-[#333] text-[18px] md:text-[21px] leading-[2]">
                    If there is any mistake while donating, and if you
                    want to refund your money back, please contact us:
                  </p>

                  <div
                    className="
                      mt-6
                      bg-[#f8f5ef]
                      rounded-3xl
                      border border-[#eadfc2]
                      p-6 md:p-8
                    "
                  >
                    <div className="space-y-5">
                      <p className="text-[#111] text-[18px] md:text-[21px] leading-[2]">
                        <span className="font-bold text-[#0c415a]">
                          Email:
                        </span>{" "}
                        <span className="font-bold">
                          rkm.narainpur@gmail.com
                        </span>
                      </p>

                      <p className="text-[#111] text-[18px] md:text-[21px] leading-[2]">
                        <span className="font-bold text-[#0c415a]">
                          Phone:
                        </span>{" "}
                        <span className="font-bold">
                          (077) 81252251
                        </span>
                      </p>

                      <p className="text-[#333] text-[18px] md:text-[20px] leading-[2]">
                        Please contact us with your order number within
                        three days, stating the reason for the refund.
                        We will refund back the money.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* IMPORTANT NOTES */}
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
                Please Note
              </h2>

              <div
                className="
                  bg-[#f8f5ef]
                  rounded-3xl
                  border border-[#eadfc2]
                  p-6 md:p-8
                "
              >
                <div className="space-y-6 text-[#333] text-[18px] md:text-[21px] leading-[2]">
                  <p>
                    1. Refund of donations will not be allowed if the
                    Section 80G Donation Receipts are already
                    communicated/despatched to you.
                  </p>

                  <p>
                    2. All refund requests must be made by you or by
                    the actual credit card holder.
                  </p>

                  <p>
                    3. Refund requests must include your name and order
                    transaction number.
                  </p>

                  <p>
                    4. Refunds will be credited back to the original
                    credit card used for payment.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefundAndCancellationPolicy;