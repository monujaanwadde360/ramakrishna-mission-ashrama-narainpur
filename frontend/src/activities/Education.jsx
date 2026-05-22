// src/activities/Education.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import {
  boardResults,
  interiorCenters,
  interiorStudents,
  sportsData,
} from "../data/educationData";

import {
  FaFlask,
  FaChild,
  FaLaptopCode,
} from "react-icons/fa";

import ScrollToTop from "../components/ScrollToTop";

const Education = () => {

  /* ================= GROUP BOARD RESULTS ================= */

  const groupedData = Object.entries(
    boardResults.reduce((acc, row) => {
      if (!acc[row.year]) acc[row.year] = [];
      acc[row.year].push(row);
      return acc;
    }, {})
  ).sort((a, b) => parseInt(b[0]) - parseInt(a[0]));

  return (
    <div
      className="
        w-full
        min-h-screen
        bg-cover
        bg-center
        bg-fixed
      "
      style={{
        backgroundImage: "url('/images/home/rkm.jpg')",
      }}
    >
      <Navbar />
      <ScrollToTop />

      {/* ================= HERO ================= */}

      <div className="pt-24">

        {/* TITLE */}

        <div className="text-center mb-8 ">

          <h1
            className="
              text-4xl md:text-6xl
              font-bold
              text-[#2c4a5a]
              font-serif
            "
          >
            EDUCATION
          </h1>

          <div className="flex justify-center mt-5">
            <div className="w-32 md:w-48 h-[3px] bg-[#8b1e1e]" />
          </div>

        </div>

        {/* HERO IMAGE */}

        <div className="max-w-[1400px] mx-auto px-4">

          <div className="relative overflow-hidden rounded-2xl shadow-2xl">

            <img
              src="/images/banner/banner1.jpg"
              alt="Campus"
              className="
                w-full
                h-[260px] md:h-[520px]
                object-cover
              "
            />

            <div className="absolute inset-0 bg-black/20" />

          </div>

        </div>

      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="max-w-[1300px] mx-auto px-4 md:px-6 py-14 font-serif font-bold tracking-wide">

        {/* ================= MODEL SCHOOL ================= */}

        <div
          className="
            bg-[#efe2b3]/35
            rounded-2xl
            shadow-xl
            p-6 md:p-10
            border border-[#d7c28a]
          "
        >

          <h2
            className="
              text-3xl md:text-5xl
              text-[#2c4a5a]
              mb-6
            "
          >
            A Model Residential School
          </h2>

          <div className="w-28 h-[3px] rounded-full mb-8" />

          <div className="space-y-8">

            <p className="text-[18px] md:text-[24px] leading-[2] text-justify text-[#1f1f1f]">

              Swamiji opined:

              <span className="font-bold text-[#8b1e1e]">
                {" "}
                "If the poor cannot come to education,
                education must go to them."
              </span>

              {" "}To achieve this ideology,
              <span className="font-bold">
                {" "}Ramakrishna Mission Vivekananda Vidyapeeth
              </span>

              {" "}from 1st to 12th class is being run
              on Public School pattern in Narainpur
              exclusively for tribal students.

            </p>

            <p className="text-[18px] md:text-[24px] leading-[2] text-justify text-[#1f1f1f]">

              The institution provides maximum facilities
              free of cost including accommodation,
              food, stationery, uniforms and medical facilities
              with value-based education to ensure the
              all-round development of students.

            </p>

            <p className="text-[18px] md:text-[24px] leading-[2] text-justify text-[#1f1f1f]">

              The current strength of the school is

              <span className="font-bold text-[#8b1e1e]">
                {" "}2498 students
              </span>

              {" "}(1529 boys and 969 girls),
              of which more than

              <span className="font-bold">
                {" "}75%
              </span>

              {" "}belong to the Maria community,
              a Primitive Vulnerable Tribal Group (PVTG).

            </p>

          </div>

        </div>

        {/* ================= STREAMS ================= */}

        <div className="mt-12 font-serif font-bold tracking-wide">

          <div
            className="
              bg-[#efe2b3]/35
              rounded-2xl
              shadow-xl
              p-6 md:p-10
              border border-[#d7c28a]
            "
          >

            <h2
              className="
                text-3xl md:text-5xl
                text-[#2c4a5a]
                mb-6
              "
            >
              Academic Streams & Laboratories
            </h2>

            <div className="w-28 h-[3px] rounded-full mb-8" />

            <div className="space-y-8">

              <p className="text-[18px] md:text-[24px] leading-[2] text-justify text-[#1f1f1f]">

                The school offers five optional streams:

                <span className="font-bold">
                  {" "}Science, Commerce, Art,
                  Agriculture and Home-Science.
                </span>

              </p>

              <p className="text-[18px] md:text-[24px] leading-[2] text-justify text-[#1f1f1f]">

                In order to help students with practical
                knowledge, the school has

                <span className="font-bold">
                  {" "}four modern laboratories
                </span>

                {" "}which promote scientific learning
                and conceptual clarity.

              </p>

              <p className="text-[18px] md:text-[24px] leading-[2] text-justify text-[#1f1f1f]">

                The school also has a separate section
                for students studying in Classes 1 to 5.
                The primary school encourages enthusiasm
                for learning and develops a competitive spirit.

              </p>

            </div>

          </div>

        </div>

        {/* ================= BOARD RESULTS ================= */}

        <div className="mt-14 font-serif font-bold tracking-wide">

          <div
            className="
      bg-[#efe2b3]/35
      rounded-2xl
      shadow-xl
      p-4 md:p-10
      border border-[#d7c28a]
    "
          >

            <h2
              className="
        text-3xl md:text-5xl
        text-[#2c4a5a]
        text-center
      "
            >
              Student Results
            </h2>

            <div className="flex justify-center mt-5 mb-10">
              <div className="w-32 h-[3px] bg-[#8b1e1e]" />
            </div>

            {/* ================= MOBILE VIEW ================= */}

            <div className="block lg:hidden space-y-6">

              {groupedData.map(([year, rows], i) => (

                <div key={year}>

                  {/* YEAR TITLE */}
                  <div className="bg-[#8b1e1e] text-white text-center py-3 rounded-t-2xl">

                    <h3 className="text-2xl font-bold">
                      {year}
                    </h3>

                  </div>

                  <div className="space-y-5 bg-[#f7ecd0] p-4 rounded-b-2xl">

                    {rows.map((row, index) => (

                      <div
                        key={index}
                        className="
                  bg-white/90
                  rounded-2xl
                  shadow-lg
                  border border-[#d7c28a]
                  overflow-hidden
                "
                      >

                        {/* CLASS HEADER */}
                        <div className="bg-[#16363b] text-white text-center py-3">

                          <h4 className="text-xl font-bold">
                            {row.class}
                          </h4>

                        </div>

                        {/* DATA */}
                        <div className="p-4 space-y-3 text-[16px]">

                          {[
                            ["Appeared", row.appeared],
                            ["Passed", row.passed],
                            ["1st Division", row.first],
                            ["2nd Division", row.second],
                            ["3rd Division", row.third],
                            ["Supplementary", row.suppl],
                            ["Fail", row.fail],
                            ["Passing %", row.percent],
                          ].map(([label, value], idx) => (

                            <div
                              key={idx}
                              className="
                        flex
                        justify-between
                        items-center
                        border-b
                        border-[#d7c28a]
                        pb-2
                      "
                            >

                              <span className="text-[#16363b] font-semibold">
                                {label}
                              </span>

                              <span className="text-[#8b1e1e] font-bold">
                                {value}
                              </span>

                            </div>

                          ))}

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              ))}

            </div>

            {/* ================= DESKTOP TABLE VIEW ================= */}

            <div className="hidden lg:block overflow-x-auto rounded-xl shadow-lg">

              <table className="w-full border-collapse text-center">

                <thead>

                  <tr className="bg-[#8b1e1e] text-white">

                    <th className="border p-4">Year</th>
                    <th className="border p-4">Class</th>
                    <th className="border p-4">Appeared</th>
                    <th className="border p-4">Passed</th>
                    <th className="border p-4">1st Div.</th>
                    <th className="border p-4">2nd Div.</th>
                    <th className="border p-4">3rd Div.</th>
                    <th className="border p-4">Suppl.</th>
                    <th className="border p-4">Fail</th>
                    <th className="border p-4">Passing %</th>

                  </tr>

                </thead>

                <tbody>

                  {groupedData.map(([year, rows], i) =>
                    rows.map((row, index) => (

                      <tr
                        key={year + index}
                        className={
                          i % 2 === 0
                            ? "bg-[#f7ecd0]"
                            : "bg-[#f1dfb0]"
                        }
                      >

                        {index === 0 && (
                          <td
                            rowSpan={rows.length}
                            className="
                      border
                      p-4
                      bg-[#e6c36a]
                    "
                          >
                            {year}
                          </td>
                        )}

                        <td className="border p-4">{row.class}</td>
                        <td className="border p-4">{row.appeared}</td>
                        <td className="border p-4">{row.passed}</td>
                        <td className="border p-4">{row.first}</td>
                        <td className="border p-4">{row.second}</td>
                        <td className="border p-4">{row.third}</td>
                        <td className="border p-4">{row.suppl}</td>
                        <td className="border p-4">{row.fail}</td>

                        <td className="border p-4 text-[#8b1e1e]">
                          {row.percent}
                        </td>

                      </tr>

                    ))
                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>


        {/* ================= EXTRA FACILITIES ================= */}


        <div className="mt-14 font-serif font-bold tracking-wide">

          <div className="text-center mb-12">

            <h2
              className="
        text-3xl md:text-5xl
        text-[#2c4a5a]
      "
            >
              Additional Educational Facilities
            </h2>

            <div className="flex justify-center mt-5">
              <div className="w-40 h-[3px] bg-[#8b1e1e]" />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                icon: <FaFlask />,
                title: "Science Playground",
                text:
                  "The Ashrama provides a science playground that creates an enthusiastic learning experience and encourages creativity.",
              },

              {
                icon: <FaChild />,
                title: "Play School",
                text:
                  "The Play School helps in building the physical, cognitive and emotional strength of children.",
              },

              {
                icon: <FaLaptopCode />,
                title: "Computer Training Center",
                text:
                  "The Vivekananda Computer Training Center provides modern computer education and project-based learning.",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="
          relative
          overflow-hidden
          rounded-3xl
          bg-gradient-to-br
          from-[#fff8e8]
          via-[#f7e6bd]
          to-[#efd38d]
          shadow-xl
          border border-[#d7c28a]
          p-8 md:p-10
          transition-all duration-500
          hover:-translate-y-3
          hover:shadow-2xl
          group
        "
              >

                {/* TOP GLOW */}
                <div
                  className="
            absolute
            -top-16
            -right-16
            w-40
            h-40
            bg-[#ffffff40]
            rounded-full
            blur-3xl
          "
                />

                {/* ICON */}
                <div className="flex justify-center mb-7">

                  <div
                    className="
              w-24 h-24
              rounded-full
              bg-[#8b1e1e]
              text-white
              flex
              items-center
              justify-center
              text-4xl
              shadow-lg
              group-hover:scale-110
              transition duration-500
            "
                  >
                    {item.icon}
                  </div>

                </div>

                {/* TITLE */}
                <h3
                  className="
            text-2xl md:text-3xl
            text-center
            text-[#16363b]
            mb-5
            leading-snug
          "
                >
                  {item.title}
                </h3>

                {/* TEXT */}
                <p
                  className="
            text-[18px]
            leading-[1.9]
            text-[#2b2b2b]
            text-justify
            font-medium
          "
                >
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* ================= INTERIOR CENTERS ================= */}

        <div className="mt-24">

          <div className="text-center mb-14">

            <h2
              className="
                text-3xl md:text-5xl
                font-semibold
                text-[#18353a]
              "
            >
              In Interior Centers
            </h2>

            <div className="flex justify-center mt-5">
              <div className="w-40 h-[3px] bg-[#8b1e1e]" />
            </div>

          </div>


          {/* IMAGE GALLERY */}
          <PhotoProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#efe2b3]/35 p-6">

              {interiorCenters.map((item, index) => (
                <PhotoView key={index} src={item.img}>
                  <div
                    className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-black/10`}
                  >
                    {/* IMAGE */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="
              w-full
              h-[260px] md:h-[340px]
              object-cover
              transition duration-500
              group-hover:scale-110
            "
                    />

                    {/* DARK GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                    {/* TITLE */}
                    <div className="absolute inset-0 flex items-end p-5">
                      <h3
                        className="
                text-white
                text-lg md:text-2xl
                font-semibold
                drop-shadow-lg
              "
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* HOVER BORDER EFFECT */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c59f4b] transition duration-300 rounded-2xl" />
                  </div>
                </PhotoView>
              ))}

            </div>
          </PhotoProvider>

          {/* CONTENT */}

          <div className="mt-14 font-serif font-bold tracking-wide ">

            <p
              className="
                text-[18px] md:text-[24px]
                leading-[2]
                text-justify
              "
            >
              In the most interior of Abujhmarh,
              the Mission runs 6 free residential schools
              at Akabeda, Kutul, Kachchapal, Irrakbhatti,
              Kundla and Orchha villages.

              All students are later admitted to
              Ramakrishna Mission Vivekananda Vidyapeeth
              at Narainpur after completing their studies.

            </p>

          </div>

          {/* STUDENT CARDS */}

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {interiorStudents.map((row, index) => (
              <div
                key={index}
                className="
        bg-[#efe2b3]/35
        rounded-2xl
        shadow-xl
        p-6
        border border-[#d7c28a]
        hover:shadow-2xl
        hover:-translate-y-1
        transition duration-300
      "
              >

                {/* CENTER NAME */}
                <h3 className="text-2xl font-bold text-[#16363b] mb-4 text-center">
                  {row[0]}
                </h3>

                {/* DATA GRID */}
                <div className="space-y-3 text-[18px]">

                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Boys</span>
                    <span className="text-[#8b1e1e] font-bold">{row[1]}</span>
                  </div>

                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Girls</span>
                    <span className="text-[#8b1e1e] font-bold">{row[2]}</span>
                  </div>

                  <div className="flex justify-between pt-2">
                    <span className="font-semibold">Total</span>
                    <span className="text-[#16363b] font-bold">{row[3]}</span>
                  </div>

                </div>

              </div>
            ))}

          </div>



          {/* content */}
          <div className="mt-16 text-[18px] md:text-[24px] leading-[2] text-justify">
            <p className="mb-6">
              The huge campus of the ashrama has three separate hostel buildings for the boys . The hostel for the girls lies in another section of the campus . The campus houses 668 boys and 400 girls ranging from class one to 12 . The hostel creates an all inclusive environment where students help each other in the day to day tasks . It also provides a large hall where the students can participate in active learning to constant interaction and consultations with each other . The students of the Ashram are groomed and disciplined and a spiritual way of life. The homely landscape created by the ashram for these children not only yields better interaction but also helps in shaping a disciplined environment .

            </p>
            <p>
              In addition to educational activities, our students are also provided special training in sports like Kho-Kho, Volley-ball, Gymnastics, Athletics, Football, Mallakhamb, etc. During October every year, a 5-days sports meet is conducted in which not only the students of our Ashrama schools participate but also about 2000 tribal students from other schools of nearby Narainpur, Orchha, and Koileebeda Blocks also take part. All these students are provided with free boarding and lodging facilities. Every year our students participate in Regional, State, and National level competitions in Kho-Kho, Gymnastics, Athletics, Football, etc. successfully. In the year 2019-20, 243 students participated in state-level competitions and 100 students participated in National Level competitions. The synopsis is as follows:
            </p>

          </div>

          {/* SPORTS TABLES */}

          <div className="mt-16 space-y-10 bg-[#efe2b3]/35 p-6 rounded-2xl shadow-xl">

            {sportsData.map((table, index) => (

              <div
                key={index}
                className="
        bg-[#efe2b3]/35
        rounded-2xl
        shadow-xl
        border border-[#d7c28a]
        overflow-hidden
      "
              >

                {/* HEADER */}
                <div className="bg-[#16363b] px-4 md:px-8 py-5">

                  <h3
                    className="
            text-center
            text-2xl md:text-4xl
            text-white
            font-bold
            tracking-wide
          "
                  >
                    {table.year}
                  </h3>

                </div>

                {/* MOBILE CARD VIEW */}
                <div className="block lg:hidden p-4 space-y-5">

                  {table.rows.map((row, idx) => (

                    <div
                      key={idx}
                      className="
              bg-white/80
              rounded-2xl
              shadow-md
              overflow-hidden
              border border-[#d7c28a]
            "
                    >

                      {/* LEVEL */}
                      <div className="bg-[#8b1e1e] text-white text-center py-3">

                        <h4 className="text-xl font-bold">
                          {row.level}
                        </h4>

                      </div>

                      {/* DATA */}
                      <div className="p-4 space-y-3">

                        {table.headers.map((header, i) => (

                          <div
                            key={i}
                            className="
                    flex
                    justify-between
                    items-center
                    gap-4
                    border-b
                    border-[#d7c28a]
                    pb-2
                  "
                          >

                            <span
                              className="
                      text-[15px]
                      font-semibold
                      text-[#16363b]
                    "
                            >
                              {header}
                            </span>

                            <span
                              className="
                      text-[16px]
                      font-bold
                      text-[#8b1e1e]
                      text-right
                    "
                            >
                              {row.values[i]}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>

                  ))}

                </div>

                {/* DESKTOP TABLE VIEW */}
                <div className="hidden lg:block">

                  <table className="w-full table-auto border-collapse text-center">

                    <thead>

                      <tr className="bg-[#faf3dc]">

                        <th className="border border-[#d7c28a] p-4 text-[18px] font-black text-[#16363b]">
                          Level
                        </th>

                        {table.headers.map((item, i) => (
                          <th
                            key={i}
                            className="
              border
              border-[#d7c28a]
              p-4
              text-[16px]
              font-black
              text-[#16363b]
              break-words
            "
                          >
                            {item}
                          </th>
                        ))}

                      </tr>

                    </thead>

                    <tbody>

                      {table.rows.map((row, idx) => (

                        <tr key={idx} className="hover:bg-[#fff7df] transition">

                          <td className="border border-[#d7c28a] p-4 bg-[#fafafa] font-bold">
                            {row.level}
                          </td>

                          {row.values.map((item, i) => (
                            <td
                              key={i}
                              className="
                border
                border-[#d7c28a]
                p-4
                bg-[#ecebbf]
                break-words
              "
                            >
                              {item}
                            </td>
                          ))}

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Education;
