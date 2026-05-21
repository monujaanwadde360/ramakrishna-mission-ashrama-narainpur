// src/donate/OnlineDonation.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { FaRupeeSign } from "react-icons/fa";

const instructionsEnglish = [
  "Enter the amount in Indian Rupees (₹) only.",
  "This donation form is only for Indian Citizens either residing in India (or) in a Foreign country.",
  "Foreign citizens (USA/EU/UK/Canadian/Australian/South American/Middle East/Singapore/Malaysian citizens) should not use this form for donation.",
  "Indian organizations can also donate using this form, they need to enter the organization name in the first name and last name.",
  "A minimum amount of ₹500 is required for online donation.",
  "A maximum amount of ₹5 Lakhs can be donated in a single transaction/order.",
  "PAN Number is mandatory for above ₹10000 and Aadhaar Number (or) PAN Number is mandatory below ₹10000.",
  "Non-resident Indians (Indian Citizens residing in Foreign countries) can use a credit card with foreign billing address but need to mention the amount in Indian Rupees (₹) in donation form.",
  "Non-resident Indians need to enter the Passport Number and either PAN Number or Aadhaar Number in the below form.",
  "All contributions are eligible for deduction u/s 80G of the Income Tax.",
  "To know about our service activities, please visit our services pages.",
];

const instructionsHindi = [
  "राशि केवल भारतीय रुपये (₹) में दर्ज करें।",
  "यह दान प्रपत्र केवल भारतीय नागरिकों के लिए है जो या तो भारत में रहते हैं या किसी विदेशी देश में।",
  "विदेशी नागरिकों को दान के लिए this फॉर्म का उपयोग नहीं करना चाहिए।",
  "भारतीय संगठन भी इस फॉर्म का उपयोग करके दान कर सकते हैं।",
  "ऑनलाइन दान के लिए न्यूनतम ₹500 की राशि आवश्यक है।",
  "एक लेनदेन में अधिकतम ₹5 लाख का दान किया जा सकता है।",
  "₹10000 से ऊपर के लिए PAN नंबर अनिवार्य है।",
  "अनिवासी भारतीय विदेशी बिलिंग पते वाले क्रेडिट CARD का उपयोग कर सकते हैं।",
  "अनिवासी भारतीयों को पासपोर्ट नंबर तथा PAN/Aadhaar दर्ज करना होगा।",
  "सभी योगदान आयकर की धारा 80G के तहत कटौती के लिए पात्र हैं।",
  " हमारी सेवा गतिविधियों के बारे में जानने के लिए, कृपया हमारे सेवा पृष्ठ पर जाएँ।",
];

const OnlineDonation = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* MAIN WRAPPER */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
          bg-fixed
          py-2
          md:py-10
        "
        style={{
          backgroundImage: "url('/images/home/rkm.jpg')",
        }}
      >

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 font-bold tracking-wide">
          {/* HERO SECTION */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              w-full
              min-h-[450px]
              md:min-h-[450px]
              flex
              items-center
              justify-center
              text-center
              border
              border-white/20
            "
            style={{
              backgroundImage: "url('/images/donation/collage-donation.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[2px]"></div>

            {/* HERO CONTENT */}
            <div className="relative z-10 px-5 py-12 md:py-20 ">
              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-6xl
                  font-extrabold
                  text-white
                  drop-shadow-2xl
                  leading-tight
                "
              >
                Online Donation
              </h1>

              {/* LINE */}
              <div
                className="
                  w-32
                  md:w-40
                  h-1.5
                  bg-[#f5d08a]
                  mx-auto
                  mt-5
                  rounded-full
                "
              ></div>

              {/* DESCRIPTION */}
              <p
                className="
                  text-white
                  text-base
                  sm:text-lg
                  md:text-2xl
                  leading-relaxed
                  max-w-4xl
                  mx-auto
                  mt-8
                "
              >
                Support education, healthcare, relief services and rural
                development initiatives through your valuable contribution.
              </p>

              {/* BUTTON */}
              <div className="mt-10">
                <a
                  href="https://pages.razorpay.com/pl_NxCjneir2iCxfU/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    bg-gradient-to-r
                    from-[#6d1111]
                    to-[#8b1e1e]
                    hover:from-[#560c0c]
                    hover:to-[#6d1111]
                    text-white
                    text-lg
                    md:text-2xl
                    font-bold
                    px-8
                    md:px-10
                    py-4
                    rounded-full
                    shadow-[0_10px_30px_rgba(109,17,17,0.5)]
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  <FaRupeeSign />
                  Donate Now
                </a>
              </div>
            </div>
          </div>

          {/* DONATION NOTICE */}
          <div className="mt-16 bg-[#efe2b3]/35 ">
            {/* MARQUEE */}
            <div className="overflow-hidden whitespace-nowrap py-3">
              <div
                className="
                  inline-block
                  animate-[marquee_18s_linear_infinite]
                  text-xl
                  sm:text-2xl
                  md:text-4xl
                  lg:text-5xl
                  font-bold
                  text-[#6d1111]
                "
              >
                Online Donation for Indian Citizens and Organizations only.
              </div>
            </div>

            {/* ICON */}
            <div className="flex justify-center mt-10">
              <div
                className="
                  w-24
                  h-24
                  rounded-full
                  bg-gradient-to-br
                  from-[#6d1111]
                  to-[#8b1e1e]
                  flex
                  items-center
                  justify-center
                  shadow-2xl
                  relative
                  z-20
                "
              >
                <FaRupeeSign className="text-white text-5xl" />
              </div>
            </div>

            {/* WAVES */}
            <div className="relative -mt-10 overflow-hidden">
              <svg
                className="w-full h-[120px]"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="#d7e6f2"
                  fillOpacity="1"
                  d="M0,224L40,213.3C80,203,160,181,240,186.7C320,192,400,224,480,218.7C560,213,640,171,720,165.3C800,160,880,192,960,202.7C1040,213,1120,203,1200,181.3C1280,160,1360,128,1400,112L1440,96L1440,320L0,320Z"
                ></path>

                <path
                  fill="#bfd7ea"
                  fillOpacity="0.8"
                  d="M0,256L40,245.3C80,235,160,213,240,202.7C320,192,400,192,480,202.7C560,213,640,235,720,229.3C800,224,880,192,960,181.3C1040,171,1120,181,1200,197.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L0,320Z"
                ></path>

                <path
                  fill="#9fc4df"
                  fillOpacity="0.9"
                  d="M0,288L40,282.7C80,277,160,267,240,245.3C320,224,400,192,480,192C560,192,640,224,720,240C800,256,880,256,960,240C1040,224,1120,192,1200,186.7C1280,181,1360,203,1400,213.3L1440,224L1440,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>

          {/* INSTRUCTIONS */}
          <div className="mt-16 bg-[#efe2b3]/35">
            {/* TITLE */}
            <div className="text-center mb-12">
              <h2
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-[#6d1111]
                "
              >
                Instructions for Online Donations
              </h2>

              <div
                className="
                  w-36
                  h-1.5
                  bg-[#6d1111]
                  mx-auto
                  mt-5
                  rounded-full
                "
              ></div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* ENGLISH */}
              <div
                className="
                  bg-white/70
                  backdrop-blur-md
                  rounded-3xl
                  shadow-xl
                  border
                  border-white/40
                  p-8
                  md:p-10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#6d1111]
                    mb-8
                  "
                >
                  English Instructions
                </h3>

                <ol className="space-y-5">
                  {instructionsEnglish.map((item, index) => (
                    <li
                      key={index}
                      className="
                        flex
                        gap-4
                        text-gray-700
                        text-base
                        md:text-lg
                        leading-relaxed
                      "
                    >
                      <span
                        className="
                          min-w-[30px]
                          font-bold
                          text-[#6d1111]
                        "
                      >
                        {index + 1}.
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* HINDI */}
              <div
                className="
                  bg-white/70
                  backdrop-blur-md
                  rounded-3xl
                  shadow-xl
                  border
                  border-white/40
                  p-8
                  md:p-10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#6d1111]
                    mb-8
                  "
                >
                  हिंदी निर्देश
                </h3>

                <ol className="space-y-5">
                  {instructionsHindi.map((item, index) => (
                    <li
                      key={index}
                      className="
                        flex
                        gap-4
                        text-gray-700
                        text-base
                        md:text-lg
                        leading-relaxed
                      "
                    >
                      <span
                        className="
                          min-w-[30px]
                          font-bold
                          text-[#6d1111]
                        "
                      >
                        {index + 1}.
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* FINAL BUTTON */}
            <div className="text-center mt-16">
              <a
                href="https://pages.razorpay.com/pl_NxCjneir2iCxfU/view"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-gradient-to-r
                  from-[#6d1111]
                  to-[#8b1e1e]
                  hover:from-[#560c0c]
                  hover:to-[#6d1111]
                  text-white
                  text-lg
                  md:text-2xl
                  font-bold
                  px-10
                  md:px-12
                  py-5
                  rounded-full
                  shadow-[0_10px_30px_rgba(109,17,17,0.5)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <FaRupeeSign />
                Donate Securely Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OnlineDonation;
