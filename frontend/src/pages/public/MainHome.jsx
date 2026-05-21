// src/pages/public/MainHome.jsx

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import OurInspiration from "../../aboutus/ourinspiration/OurInspiration";
import AbujhmarhSection from "./AbujhmarhSection";
import Activities from "./Activities";
import DonateSection from "./DonateSection";
import ReachAndTimings from "./ReachAndTimings";
import Footer from "../../components/Footer";

const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
];

const MainHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // AUTO SLIDESHOW
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // NEXT SLIDE
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS SLIDE
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // PLAY / STOP
  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="bg-[#f6edd8] min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/rkm.jpg')",
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SLIDESHOW */}
      <section className="relative w-full overflow-hidden">

        <div className="relative w-full h-[420px]">

          {/* IMAGE */}
          <img
            src={images[currentSlide]}
            alt="Banner"
            className="w-full h-[420px] object-cover transition-all duration-700"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center"
          >
            ❮
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center"
          >
            ❯
          </button>

          {/* DOTS + PLAY/STOP */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4">
            {/* PLAY / STOP BUTTON */}
            <button
              onClick={toggleSlideshow}
              className="bg-white/30 hover:bg-white/50 text-white w-8 h-8 rounded-full flex items-center justify-center"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
            {/* DOT INDICATORS */}
            <div className="flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                      ? "bg-white scale-125"
                      : "bg-white/50"
                    }`}
                ></button>
              ))}
            </div>



          </div>

        </div>

      </section>

      {/* OUR INSPIRATION */}
      <OurInspiration />

      {/* ABUJHMARH SECTION */}
      <AbujhmarhSection />

      {/* ACTIVITIES */}
      <Activities />

      {/* DONATE SECTION */}
      <DonateSection />

      {/* REACH AND TIMINGS */}
      <ReachAndTimings />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default MainHome;