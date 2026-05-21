// src/activities/IntegratedRuralDevelopment.jsx

import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

import {
  PhotoProvider,
  PhotoView,
} from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

import { ruralDevelopmentData } from "../data/ruralDevelopmentData";

const galleryImages = [
  "/images/rural/agri_6.jpg",
  "/images/rural/agri_7.jpg",
  "/images/rural/agri_8.jpg",
  "/images/rural/agri_9.jpg",
];

const IntegratedRuralDevelopment = () => {
  return (
    <PhotoProvider
      speed={() => 800}
      maskOpacity={0.9}
    >
      <div
        className="
          min-h-screen
          bg-[#f5f5f0]
          bg-fixed
          bg-cover
          bg-center
          bg-no-repeat
          pb-16
        "
        style={{
          backgroundImage: "url('/images/home/rkm.jpg')",
        }}
      >
        <Navbar />
        <ScrollToTop />

        {/* HERO */}
        <div className="pt-20 md:pt-24">

          {/* TITLE */}
          <div className="text-center mb-8">

            <h1
              className="
                text-4xl
                md:text-6xl
                font-serif font-bold tracking-wide
              "
            >
              Integrated Rural Development
            </h1>

            <div className="flex justify-center mt-5">
              <div className="w-32 md:w-52 h-[2px] bg-[#8b1e1e]" />
            </div>

          </div>

          {/* HERO IMAGE */}
          <div className="relative overflow-hidden shadow-xl">

            <img
              src="/images/rural/rural-development.jpg"
              alt="Integrated Rural Development"
              className="
                w-full
                h-[240px]
                md:h-[520px]
                object-cover
              "
            />

            <div className="absolute inset-0 bg-black/20" />

          </div>

        </div>

        {/* INTRO */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mt-12 bg-[#efe2b3]/35">

          <p
            className="
              text-[18px]
              md:text-[25px]
              leading-[1.9]
              text-center
              font-serif font-bold tracking-wide
            "
          >
            Ramakrishna Mission Ashrama Narainpur has been
            working for integrated rural development through
            scientific agriculture training, demonstrations,
            farmers' awareness programmes and sustainable
            livelihood projects among tribal communities of
            Abujhmad and nearby regions.
          </p>

        </div>

        {/* CONTENT */}
        <div className="max-w-[1450px] mx-auto px-4 md:px-6 mt-14 font-serif font-bold tracking-wide">

          {ruralDevelopmentData.map((item) => (

            <div key={item.id} className="mb-24 ">

              {/* TITLE */}
              <h2
                className="
                  text-3xl
                  md:text-[52px]               
                  text-center
                  leading-tight
                "
              >
                {item.title}
              </h2>

              {/* LINE */}
              <div className="mt-4 mb-10 h-[1px] bg-red-400/70" />

              {/* SECTION */}
              <div className="overflow-hidden bg-[#efe2b3]/35">

                {/* IMAGE */}
                <PhotoView src={item.image}>

                  <img
                    src={item.image}
                    alt={item.title}
                    className={`
                      w-full
                      md:w-[620px]
                      h-[260px]
                      md:h-[400px]
                      object-cover
                      rounded-xl
                      shadow-xl
                      mb-5
                      cursor-pointer
                      transition-all
                      duration-500
                      hover:scale-[1.02]
                      ${
                        item.id % 2 === 0
                          ? "md:float-right md:ml-8"
                          : "md:float-left md:mr-8"
                      }
                    `}
                  />

                </PhotoView>

                {/* TEXT */}
                <div
                  className="
                    text-[18px]
                    md:text-[25px]
                    leading-[2]                
                  "
                >

                  {/* SECTION 1 */}
                  {item.id === 1 && (
                    <>
                      <p className="text-justify">
                        Agriculture Training & Demonstration Centre,
                        which is established by Ramakrishna Mission
                        Ashrama Narainpur in 1990 on the 52 acre
                        land at Village Brehabeda- 4 K.M. away from
                        Narainpur, running its agriculture extension
                        activities in the most backward area of
                        Abujhmad and surrounding areas of Narainpur
                        district for Madia Tribe-one of the most
                        backward tribes of country.
                      </p>

                      <p className="mt-8 text-justify">
                        From the very beginning, this centre is
                        executing their activities of training and
                        demonstration on scientific agriculture
                        techniques for farmers of Abujhmad.
                      </p>

                      <p className="mt-8 text-justify">
                        Apart from agriculture, this centre is
                        conducting allied activities of agriculture
                        like poultry, fisheries, animal husbandry,
                        infrastructure development etc. and other
                        subsidiary activities like Kisan Mela,
                        Farmers Day, Monthly Farmers Conference
                        etc. for the development of agriculture.
                      </p>
                    </>
                  )}

                  {/* SECTION 2 */}
                  {item.id === 2 && (
                    <>
                      <p className="text-justify">
                        The training programme conducted at ATDC
                        is need based and skill oriented. The main
                        objective through the programme is to
                        effect transfer of the appropriate
                        technology in a manner easily
                        comprehensible by the trainee farmers.
                      </p>

                      <p className="mt-8 text-justify">
                        This required adoption of skills evolved
                        on scientific lines which depend on the
                        application of non-monetary and low cost
                        inputs.
                      </p>

                      <p className="mt-8 text-justify">
                        The programme is administered through
                        field demonstration/ practice and
                        classroom lectures. The programme is
                        residential and free of cost and it
                        includes boarding as well as lodging
                        facilities.
                      </p>

                      <p className="mt-8 text-justify">
                        The programme is based on the principle
                        of learning-by-doing.
                      </p>
                    </>
                  )}

                  {/* SECTION 3 */}
                  {item.id === 3 && (
                    <>
                      <p className="text-justify">
                        A number of demonstrations have been
                        organized on both the Institutions and
                        farmers fields to show the effects of
                        the various scientific practices adopted
                        in the demonstration programmes.
                      </p>

                      <div className="mt-8 space-y-4">

                        <p>(i) Mixed fish cultivation</p>

                        <p>
                          (ii) Rearing of cross-bred poultry
                          birds suitable for rearing in villages.
                        </p>

                        <p>
                          (iii) Composite Duckery-cum-fishery-cum-fruit
                          cultivation in a small pond.
                        </p>

                        <p>
                          (iv) Techniques of Deep furrow
                          Irrigation, pitcher Irrigation,
                          Mulching in fruit plants.
                        </p>

                        <p>
                          (v) Effects on the use of low cost
                          inputs like cattle unne, woodash,
                          kerosene oil, neem leaves, tora oil,
                          etc. on different crops.
                        </p>

                        <p>
                          (vi) Different methods of preparation
                          of compost using all types of farm
                          residue.
                        </p>

                        <p>(vii) A model kitchen Garden.</p>

                        <p>(viii) Line Sowing of Vegetable.</p>

                        <p>
                          (ix) Cultivation of banana and papaya
                          on the bunds and borders of the fields.
                        </p>

                        <p>
                          (x) Transplantation of paddy in low
                          and medium land.
                        </p>

                        <p>(xi) Line Sowing of maize.</p>

                        <p>
                          (xii) Production of paddy by SRI Method.
                        </p>

                        <p>
                          (xiii) Production of mushroom and
                          mother culture.
                        </p>

                        <p>(xiv) Cultivation of tuber crops.</p>

                        <p>
                          (xv) Demonstration of Mushroom
                          cultivation.
                        </p>

                      </div>
                    </>
                  )}

                  {/* SECTION 4 */}
                  {item.id === 4 && (
                    <>
                      <p className="text-justify">
                        A Kisan Mela organized every year by
                        Agriculture Training & Demonstration
                        Centre with the objectives to extend the
                        individual as well as community vision
                        of utilizing the extension activities
                        among the farmers.
                      </p>

                      <p className="mt-8 text-justify">
                        The programme helps to create an
                        attitude of utilization of extension
                        work and encourages the farmers for
                        adopting modern and scientific
                        techniques of agriculture.
                      </p>

                      <p className="mt-8 text-justify">
                        About 15000 farmers belonging to
                        Abujhmad and 100 other villages of
                        Narainpur district reach the Mela ground
                        and take benefit by informing themselves
                        about different techniques of
                        cultivation, improved seeds and
                        agricultural implements.
                      </p>
                    </>
                  )}

                  {/* SECTION 5 */}
                  {item.id === 5 && (
                    <>
                      <p className="text-justify text-[#0d2c2f]">
                        Divyayan Project
                      </p>

                      <p className="mt-5 text-justify">
                        This project is financed by the Ministry
                        of Tribal Welfare, Govt. of India and
                        under this project mainly four
                        activities are executed :
                      </p>

                      <div className="mt-5 space-y-3">

                        <p>
                          (i) Motivational Agriculture Training
                          Programme
                        </p>

                        <p>
                          (ii) Special Training Programme
                        </p>

                        <p>
                          (iii) Excursion Programme
                        </p>

                        <p>
                          (iv) Ex-trainees Sammelan
                        </p>

                      </div>

                      <p className="mt-10 text-justify text-[#0d2c2f]">
                        National Agriculture Innovation Project
                        (Component - 2)
                      </p>

                      <p className="mt-5 text-justify">
                        Project sponsored by Indian Council of
                        Agriculture Research, New Delhi.
                        The subject of this project is
                        "Value Chain on food products from small
                        Millets of Bastar Region of Chhattisgarh".
                      </p>

                      <p className="mt-10 text-justify text-[#0d2c2f]">
                        National Agriculture Innovation Project
                        (Component - 3)
                      </p>

                      <p className="mt-5 text-justify">
                        Project sponsored by Indian Council of
                        Agriculture Research, New Delhi.
                        Title of the project is "Improving Rural
                        Livelihood Security through Sustainable
                        Integrated farming system mode and
                        Allied Enterprise in Bastar Region of
                        Chhattisgarh".
                      </p>

                      <p className="mt-10 text-justify text-[#0d2c2f]">
                        Rural Development Project
                      </p>

                      <p className="mt-5 text-justify">
                        Sponsored by ASPEE Charitable Trust,
                        Mumbai and activities of agriculture
                        training, demonstration, exposure visit,
                        land development etc. are implemented
                        under this project during the period
                        of 1990-2012.
                      </p>

                      {/* IMAGE GALLERY */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 ">

                        {galleryImages.map((img, index) => (

                          <PhotoView
                            key={index}
                            src={img}
                          >

                            <div
                              className="
                                overflow-hidden
                                rounded-2xl
                                shadow-xl
                                cursor-pointer
                                group
                                bg-white
                              "
                            >

                              <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="
                                  w-full
                                  h-[280px]
                                  md:h-[350px]
                                  object-cover
                                  transition-all
                                  duration-500
                                  group-hover:scale-110
                                "
                              />

                            </div>

                          </PhotoView>

                        ))}

                      </div>
                    </>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

        

      </div>
      <Footer />
    </PhotoProvider>
  );
};

export default IntegratedRuralDevelopment;
