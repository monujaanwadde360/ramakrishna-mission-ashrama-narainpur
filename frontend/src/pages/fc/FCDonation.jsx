// src/pages/fc/FCDonation.jsx

import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";

const FCDonation = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <ScrollToTop />

      <div
        className="
          relative
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
          py-24
          px-5
        "
        style={{
          backgroundImage: "url('/images/rkm.jpg')",
        }}
      >
        {/* CONTAINER */}
        <div className="max-w-5xl mx-auto font-serif font-bold tracking-wide">
          {/* TITLE */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl">
              A Note to Foreign Donors
            </h2>

            <div className="flex justify-center mt-5">
              <div className="w-32 h-[3px] bg-black rounded-full"></div>
            </div>
          </div>

          {/* MESSAGE BOX */}
          <div
            className="
              bg-[#efe2b3]/35
              rounded-3xl
              border border-[#eadfc2]
              p-6 md:p-10
              space-y-8
              shadow-2xl
            "
          >
            <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] text-justify tracking-[0.2px]">
              As per the circular of the Reserve Bank of India,
              originating banks must incorporate some changes while
              accepting donations from foreign citizens.
            </p>

            <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] text-justify tracking-[0.2px]">
              Our Remitter Bank/Payment Gateway is currently
              working on implementing these changes. Until the
              necessary updates are completed, we will not be able
              to accept online donations from foreign citizens.
            </p>

            <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] text-justify tracking-[0.2px]">
              Foreign citizens may send their contributions through
              cheque or net-banking facility.
            </p>

            {/* CONTACT BOX */}
            <div
              className="
                bg-white
                rounded-2xl
                border-l-[6px]
                border-[#d63b45]
                p-6 md:p-8
              "
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#0c415a] mb-5">
                Contact for Donation Details
              </h3>

              <p className="text-[#333] text-[18px] md:text-[21px] leading-[2] text-justify tracking-[0.2px]">
                For further details regarding foreign contribution
                donations, please contact us at:
              </p>

              <a
                href="mailto:rkm.narainpur@gmail.com"
                className="
                  inline-block
                  mt-6
                  text-xl
                  md:text-2xl
                  font-bold
                  text-[#0c415a]
                  hover:text-[#8b1e1e]
                  transition-all
                  break-all
                "
              >
                rkm.narainpur@gmail.com
              </a>
            </div>
          </div>

          {/* NOTE */}
          <div
            className="
              mt-12
              bg-[#efe2b3]/35
              rounded-3xl
              p-6 md:p-8
            "
          >
            <p className="text-[18px] md:text-[21px] leading-[2] text-justify tracking-[0.2px]">
              We sincerely thank all devotees and well-wishers for
              their support and understanding. Your contributions
              help us continue our spiritual, educational and social
              service activities.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FCDonation;