// src/aboutus/IdeologyVision.jsx

import React from "react";
import Navbar from "../components/Navbar";
import { ideologyPoints } from "../data/ideologyData";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const IdeologyVision = () => {
    return (
        <div
            className="min-h-screen bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/rkm.jpg')",
            }}
        >
            <Navbar />
            <ScrollToTop />

            {/* MAIN WRAPPER */}
            <div className="min-h-screen py-16 px-4 md:px-8 font-serif font-bold tracking-wide">

                {/* TITLE */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-black font-serif drop-shadow-md">
                        Ideology & Vision
                    </h1>

                    <div className="mt-5 flex flex-col items-center gap-[5px]">
                        <div className="w-[240px] md:w-[360px] h-[2px] bg-black/70" />
                        <div className="w-[240px] md:w-[360px] h-[1px] bg-black/50" />
                    </div>
                </div>

                {/* INTRO BOX */}
                <div className="max-w-[1350px] mx-auto mb-16">
                    <div className="backdrop-blur-xl bg-[#efe2b3]/35 border border-white/30 rounded-3xl p-6 md:p-10 shadow-xl">
                        <p className="text-black/80 text-[20px] md:text-[20px] leading-9 text-justify">
                            The ideology of Ramakrishna Math and Ramakrishna Mission consists
                            of the eternal principles of Vedanta as lived and experienced by
                            Sri Ramakrishna and expounded by Swami Vivekananda. This ideology
                            is modern, universal and practical, offering spiritual solutions
                            for day-to-day life and the welfare of humanity.
                        </p>
                    </div>
                </div>

                {/* CARDS */}
                <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {ideologyPoints.map((item, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-xl bg-[#efe2b3]/35 border border-white/30 rounded-3xl p-6 md:p-8 shadow-xl hover:scale-[1.02] transition duration-500"
                        >
                            {/* NUMBER */}
                            <div className="w-12 h-12 rounded-full bg-[#b86f24] text-white flex items-center justify-center text-xl font-bold shadow mb-4">
                                {index + 1}
                            </div>

                            {/* TITLE */}
                            <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug">
                                {item.title}
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="mt-4 text-black/80 leading-8 text-[20px] md:text-[17px] text-justify">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* MOTTO */}
                <div className="max-w-[1300px] mx-auto mt-20 font-serif font-bold tracking-wide">
                    <div className="backdrop-blur-xl bg-[#efe2b3]/35 border border-white/30 rounded-3xl p-8 md:p-12 text-center shadow-xl">

                        <h2 className="text-3xl md:text-5xl text-black">
                            Motto
                        </h2>

                        <p className="mt-8 text-black text-2xl md:text-4xl italic">
                            “Atmano Mokshartham Jagad Hitaya Cha”
                        </p>

                        <p className="mt-5 text-black/80 text-lg md:text-2xl">
                            For one’s own salvation and for the welfare of the world
                        </p>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default IdeologyVision;