// src/pages/public/AbujhmarhSection.jsx

import React from "react";

const AbujhmarhSection = () => {
    return (
        <>
            {/* TITLE */}
            <div className="py-12 font-serif font-bold tracking-wide">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#2c4a5a]">
                        ABUJHMARH
                    </h1>

                    <div className="flex justify-center mt-4">
                        <div className="w-32 h-1 bg-[#c57b3a] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="py-10">
                <div className="max-w-[1300px] mx-auto px-4">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <img
                                src="/images/home/narainpur.png"
                                alt="Abujhmarh Map"
                                className="w-full max-w-[600px]"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="font-serif font-bold tracking-wide">

                            <div className="space-y-6 text-[18px] md:text-[20px] leading-[2rem] md:leading-[2.2rem] text-justify font-serif font-medium">

                                <p>
                                    Abujhmarh has a tribal population of about 34,000 inhabiting some 233 far-flung villages over a sprawling area of 4,000 sq. km. It is described as a "tangled knot of hills" with an inaccessible terrain that remains cut off from the rest of the world for about six months a year even today.
                                </p>

                                <p>
                                    The Abujhmarh region is about 95 km long from North to South and about 55 km broad from East to West. A large part of this area is rugged and dissected by numerous streams.
                                </p>

                                <p>
                                    The word "Abujhmarh" is a combination of two words — the Hindi word "Abujh" meaning "unknown" and the Gondi word "Marh" meaning "highland". True to its name, it still remains largely unknown and non-surveyed.
                                </p>

                                <p>
                                    The inhabitants of this region are called Abujhmaria. The Meta Koitar, or "Hill Marias", are an indigenous tribe with almost no recorded early history. Due to extreme geographical isolation, they have developed a very simple and traditional way of life.
                                </p>

                                <p>
                                    The Hill Marias depend mainly on slash-and-burn (shifting) cultivation on steep slopes and terraces for their livelihood. Life is physically demanding, and they must work hard for basic survival. Literacy levels are extremely low, almost negligible.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default AbujhmarhSection;
