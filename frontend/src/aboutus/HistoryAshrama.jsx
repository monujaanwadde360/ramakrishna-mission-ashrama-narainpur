// src/aboutus/HistoryAshrama.jsx

import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const galleryImages = [
    "/images/ashramhistory/history5.jpg",
    "/images/ashramhistory/history6.jpg",
    "/images/ashramhistory/history7.jpg",
    "/images/ashramhistory/history8.jpg",
    "/images/ashramhistory/history9.jpg",
    "/images/ashramhistory/history10.jpg",
    "/images/ashramhistory/history11.jpg",
    "/images/ashramhistory/history12.jpg",
    "/images/ashramhistory/history13.jpg",
    "/images/ashramhistory/history14.jpg",
    "/images/ashramhistory/history15.jpg",
    "/images/ashramhistory/history16.jpg",
    "/images/ashramhistory/history17.jpg",
    "/images/ashramhistory/history18.jpg",
    "/images/ashramhistory/history19.jpg",
];

const HistoryAshrama = () => {
    return (
        <div
            className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/images/home/rkm.jpg')",
            }}
        >

            <Navbar />
            <ScrollToTop />

            {/* HERO IMAGE */}
            <section className="py-4">
                <div className="w-full px-2 md:px-4 flex justify-center">
                    <img
                        src="/images/ashramhistory/mandir.jpg"
                        alt="mandir"
                        className="w-full max-w-[1300px] h-auto object-contain rounded-2xl "
                    />
                </div>
            </section>

            {/* CONTENT AREA */}
            <section className="w-full">

                <div className="max-w-[1350px] mx-auto px-4 md:px-6 py-10">

                    {/* TITLE */}
                    <div className="text-center mb-14">

                        <h1 className="text-4xl md:text-6xl font-bold text-[#082b2f] font-serif">
                            About Ashrama
                        </h1>

                        <div className="mt-4 flex flex-col items-center gap-1">
                            <div className="w-[220px] md:w-[420px] h-[1px] bg-[#082b2f]" />
                            <div className="w-[220px] md:w-[420px] h-[2px] bg-[#082b2f]" />
                        </div>

                    </div>

                    {/* SECTION 1 */}
                    <div className="border-b border-gray-300 pb-14 mb-14 overflow-hidden font-serif font-bold tracking-wide bg-[#efe2b3]/35">

                        <img
                            src="/images/ashramhistory/history1.jpg"
                            alt="History"
                            className="w-full md:w-[520px] md:float-left md:mr-8 mb-6 rounded-2xl shadow-lg"
                        />

                        <div className="text-[18px] md:text-[20px] leading-[2.5rem] md:leading-[3rem] text-gray-700 text-justify">

                            <p>
                                Started in 1985, the Ramakrishna Mission Ashrama,
                                Narainpur, along with its 6 Service Centers inside
                                Abujhmarh jungle villages of Chhattisgarh State,
                                has been serving the tribal brothers and sisters
                                of the area who had been the mute victims of
                                several centuries of oppression and utter neglect.
                            </p>

                            <p className="mt-8">
                                Abujhmarh has a tribal population of about
                                34,000 inhabiting some 233 far-flung villages
                                over a sprawling area of 4000 sq.km.
                            </p>

                            <p className="mt-8">
                                It is described as a "tangled knot of hills"
                                having an inaccessible terrain that remains
                                absolutely cut off from the rest of the civilized
                                world for about 6 months a year even to this day.
                            </p>

                        </div>

                    </div>

                    {/* SECTION 2 */}
                    <div className="border-b border-gray-300 pb-14 mb-14 overflow-hidden font-serif font-bold tracking-wide bg-[#efe2b3]/35">

                        <img
                            src="/images/ashramhistory/history2.jpg"
                            alt="Journey"
                            className="w-full md:w-[560px] md:float-right md:ml-8 mb-6 rounded-2xl shadow-lg"
                        />

                        <h2 className="text-4xl md:text-5xl font-serif text-[#082b2f] mb-8">
                            Ashrama&apos;s Journey
                        </h2>

                        <div className="text-[18px] md:text-[20px] leading-[2.5rem] md:leading-[3rem] text-gray-700 text-justify">

                            <p>
                                Narainpur is the gateway to Abujhmarh Hills in
                                Chhattisgarh. Surrounded on all sides by a chain
                                of hills and dense forests, this vast tract of land
                                stretching into some 4,000 Sq. Km. is home to
                                perhaps the most primitive tribes still surviving.
                            </p>

                            <p className="mt-8">
                                The 'hill Marias' live in an inaccessible
                                geographical terrain that remains cut-off
                                from the rest of the world during the rainy season.
                            </p>

                            <p className="mt-8">
                                Because of their extreme geographical isolation,
                                they have primitive economy, illiteracy and
                                poor health conditions.
                            </p>

                        </div>

                    </div>

                    {/* SECTION 3 */}
                    <div className="border-b border-gray-300 pb-14 mb-14 overflow-hidden font-serif font-bold tracking-wide bg-[#efe2b3]/35">

                        <img
                            src="/images/ashramhistory/history3.jpg"
                            alt="Village"
                            className="w-full md:w-[520px] md:float-left md:mr-8 mb-6 rounded-2xl shadow-lg"
                        />

                         <h2 className="text-4xl md:text-5xl font-serif text-[#082b2f] mb-8">
                            Tribal Village House
                        </h2>

                        <div className="text-[18px] md:text-[20px] leading-[2.5rem] md:leading-[3rem] text-gray-700 text-justify">

                            <p>
                                They make brooms of Fulbahari grass,
                                bamboo articles and ropes from grass.
                            </p>

                            <p className="mt-8">
                                Parts of their dietary needs are met from the
                                crops they grow but depend on the outside world
                                for necessities.
                            </p>

                            <p className="mt-8">
                                Literacy is very low and ill-health stalks the
                                land with malnutrition and diseases.
                            </p>

                            <p className="mt-8">
                                The tribal areas are beset with low productivity,
                                isolation and lack of infrastructure.
                            </p>

                        </div>

                    </div>

                    {/* SECTION 4 */}
                    <div className="border-b border-gray-300 pb-14 mb-14 overflow-hidden font-serif font-bold tracking-wide bg-[#efe2b3]/35">

                        <img
                            src="/images/ashramhistory/history4.jpg"
                            alt="Children"
                            className="w-full md:w-[620px] md:float-right md:ml-8 mb-6 rounded-2xl shadow-lg"
                        />

                        <h2 className="text-4xl md:text-5xl font-serif text-[#082b2f] mb-8">
                            Tribal People
                        </h2>

                        <div className="text-[18px] md:text-[20px] leading-[2.5rem] md:leading-[3rem] text-gray-700 text-justify">

                            <p>
                                No doubt it is an uphill task to uplift the
                                tribal people with proper care and education.
                            </p>

                            <p className="mt-8">
                                Swami Vivekananda called upon his countrymen
                                to work for the tribal communities.
                            </p>

                            <p className="mt-8">
                                The Ramakrishna Mission Ashrama continues
                                Tribal Welfare Services in a spirit of
                                Service to God in Man.
                            </p>

                            <p className="mt-8">
                                The Mission motivates the tribal people
                                towards confidence, education and self-reliance.
                            </p>

                        </div>

                    </div>

                    {/* ================= GALLERY ================= */}

                    <section className="mt-16 font-serif font-bold tracking-wide bg-[#efe2b3]/35">

                        <h2 className="text-4xl md:text-5xl text-center text-[#082b2f] mb-12">
                            Photo Gallery History
                        </h2>

                        <PhotoProvider>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">

                                {galleryImages.map((img, index) => (

                                    <PhotoView key={index} src={img}>

                                        <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg cursor-pointer group bg-white">

                                            {/* IMAGE */}
                                            <img
                                                src={img}
                                                alt={`History ${index + 1}`}
                                                className="w-full h-[170px] sm:h-[220px] md:h-[280px] object-cover transition duration-700 group-hover:scale-110"
                                            />

                                            {/* OVERLAY */}
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-2 md:gap-4">

                                                {/* VIEW */}
                                                <button className="bg-white text-black px-3 md:px-5 py-1.5 md:py-2 rounded-lg font-semibold shadow-md text-sm md:text-base hover:scale-105 transition">
                                                    View
                                                </button>

                                                {/* DOWNLOAD */}
                                                <a
                                                    href={img}
                                                    download
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="bg-[#8b1e1e] text-white px-3 md:px-5 py-1.5 md:py-2 rounded-lg font-semibold shadow-md text-sm md:text-base hover:bg-[#5e1111] hover:scale-105 transition"
                                                >
                                                    Download
                                                </a>

                                            </div>

                                        </div>

                                    </PhotoView>

                                ))}

                            </div>

                        </PhotoProvider>

                    </section>

                </div>

            </section>

            <Footer />

        </div>
    );
};

export default HistoryAshrama;
