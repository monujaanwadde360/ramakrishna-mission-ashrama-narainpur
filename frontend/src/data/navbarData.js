// src/data/navbarData.js

/* ================= COMMON SECTION GENERATOR ================= */
const createSections = (classNum, sections, suffix = "") =>
  sections.map((sec) => ({
    label: `Section ${sec}`,
    path: `/academics/class-${classNum}-${sec.toLowerCase()}${suffix}`
  }));

/* ================= CLASS → SECTIONS ================= */
const generateSimpleClasses = (config) => {
  return config.map(({ classNum, sections }) => ({
    label: `Class ${classNum}`,
    submenu: createSections(classNum, sections)
  }));
};

/* ================= CLASS → BOYS/GIRLS ================= */
const generateGenderClasses = (config) => {
  return config.map(({ classNum, sections }) => ({
    label: `Class ${classNum}`,
    submenu: [
      {
        label: "Boys",
        submenu: createSections(classNum, sections, "-boys")
      },
      {
        label: "Girls",
        submenu: createSections(classNum, sections, "-girls")
      }
    ]
  }));
};

/* ================= MAIN MENU ================= */
export const MENU = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    dropdown: [
      {
        label: "Our Inspiration",
        submenu: [
          { label: "Sri Ramakrishna", path: "/aboutus/ourinspiration/ramakrishna" },
          { label: "Sri Sarada Devi", path: "/aboutus/ourinspiration/sarada-devi" },
          { label: "Swami Vivekananda", path: "/aboutus/ourinspiration/vivekananda" },
        ],
      },
      { label: "History of Ashrama", path: "/aboutus/history" },
      { label: "Important Milestones", path: "/aboutus/milestones" },
      { label: "Awards & Recognition", path: "/aboutus/awards" },
      { label: "Ideology & Vision", path: "/aboutus/ideology" },
      { label: "Belur Math (HQ)", path: "https://belurmath.org", external: true },
      { label: "FAQs on joining the Ramakrishna Order", path: "/aboutus/faqs" },
    ],
  },
  {
    title: "Activities",
    dropdown: [
      { label: "Education", path: "/activities/education" },
      { label: "Healthcare Services", path: "/activities/healthcare" },
      { label: "Rural Development", path: "/activities/integrated-rural-development" },
      { label: "Industrial Training Institute (ITI)", path: "https://rkmitinpr.org", external: true },
      { label: "Spiritual Activities", path: "/activities/spiritual" },
    ],
  },
  {
    title: "Academics",
    dropdown: [
      {
        label: "Admission",
        submenu: [
          { label: "Admission Rules", path: "/academics/admission-rules" },
          // { label: "Model Questions", path: "/academics/model-questions" },
          { label: "Apply Online", path: "/academics/apply-online" },
        ]
      },
      {
        label: "Primary School (Class 1–5)",
        submenu: generateSimpleClasses([
          { classNum: 1, sections: ["A", "B", "C", "D"] },
          { classNum: 2, sections: ["A", "B", "C", "D"] },
          { classNum: 3, sections: ["A", "B", "C", "D"] },
          { classNum: 4, sections: ["A", "B", "C", "D"] },
          { classNum: 5, sections: ["A", "B", "C", "D"] },
        ])
      },
      {
        label: "Middle School (Class 6–8)",
        submenu: generateGenderClasses([
          { classNum: 6, sections: ["A", "B", "C"] },
          { classNum: 7, sections: ["A", "B", "C", "D"] },
          { classNum: 8, sections: ["A", "B", "C", "D"] },
        ])
      },
      {
        label: "Secondary School (Class 9–10)",
        submenu: generateGenderClasses([
          { classNum: 9, sections: ["A", "B", "C", "D"] },
          { classNum: 10, sections: ["A", "B", "C", "D"] },
        ])
      },
      {
        label: "Higher Secondary (Class 11–12)",
        submenu: [
          {
            label: "Class 11",
            submenu: [
              { label: "Science (Maths)", path: "/academics/class-11-maths" },
              { label: "Science (Biology)", path: "/academics/class-11-bio" },
              { label: "Commerce", path: "/academics/class-11-commerce" },
              { label: "Arts", path: "/academics/class-11-arts" },
              { label: "Home Science", path: "/academics/class-11-home-science" },
            ]
          },
          {
            label: "Class 12",
            submenu: [
              { label: "Science (Maths)", path: "/academics/class-12-maths" },
              { label: "Science (Biology)", path: "/academics/class-12-bio" },
              { label: "Commerce", path: "/academics/class-12-commerce" },
              { label: "Arts", path: "/academics/class-12-arts" },
              { label: "Home Science", path: "/academics/class-12-home-science" },
            ]
          }
        ]
      },
      {
        label: "Results",
        submenu: [
          {
            label: "Primary School (Class 1–5)",
            submenu: generateSimpleClasses([
              { classNum: 1, sections: ["A", "B", "C", "D"] },
              { classNum: 2, sections: ["A", "B", "C", "D"] },
              { classNum: 3, sections: ["A", "B", "C", "D"] },
              { classNum: 4, sections: ["A", "B", "C", "D"] },
              { classNum: 5, sections: ["A", "B", "C", "D"] },
            ])
          },
          {
            label: "Middle School (Class 6–8)",
            submenu: generateGenderClasses([
              { classNum: 6, sections: ["A", "B", "C"] },
              { classNum: 7, sections: ["A", "B", "C", "D"] },
              { classNum: 8, sections: ["A", "B", "C", "D"] },
            ])
          },
          {
            label: "Secondary School (Class 9–10)",
            submenu: generateGenderClasses([
              { classNum: 9, sections: ["A", "B", "C", "D"] },
              { classNum: 10, sections: ["A", "B", "C", "D"] },
            ])
          },
          {
            label: "Higher Secondary (Class 11–12)",
            submenu: [
              {
                label: "Class 11",
                submenu: [
                  { label: "Science (Maths)", path: "/results/class-11-maths" },
                  { label: "Science (Biology)", path: "/results/class-11-bio" },
                  { label: "Commerce", path: "/results/class-11-commerce" },
                  { label: "Arts", path: "/results/class-11-arts" },
                  { label: "Home Science", path: "/results/class-11-home-science" },
                ]
              },
              {
                label: "Class 12",
                submenu: [
                  { label: "Science (Maths)", path: "/results/class-12-maths" },
                  { label: "Science (Biology)", path: "/results/class-12-bio" },
                  { label: "Commerce", path: "/results/class-12-commerce" },
                  { label: "Arts", path: "/results/class-12-arts" },
                  { label: "Home Science", path: "/results/class-12-home-science" },
                ]
              }
            ]
          }
        ]
      },
      { label: "Academic Calendar", path: "/academics/calendar" },
      { label: "Syllabus", path: "/academics/syllabus" },
      { label: "Exam Schedule", path: "/academics/exam-schedule" },
    ],
  },
  {
    title: "Scholarship",
    dropdown: [
      { label: "Available Scholarships", path: "/scholarship/list" },
      { label: "Eligibility Criteria", path: "/scholarship/eligibility" },
      { label: "Apply Online", path: "/scholarship/apply" },
      { label: "Application Status", path: "/scholarship/status" },
      { label: "Scholarship Results", path: "/scholarship/results" },
      { label: "Guidelines", path: "/scholarship/guidelines" },
      { label: "FAQs", path: "/scholarship/faqs" },
    ],
  },
  {
    title: "Media",
    dropdown: [
      { label: "Photo Gallery", path: "/media/photos" },
      { label: "Video Gallery", path: "/media/videos" },
      { label: "Press Coverage", path: "/media/press" },
      { label: "Newsletter", path: "/media/newsletter" },
    ],
  },
  {
    title: "Donate",
    dropdown: [
      { label: "Online Donation", path: "/donate/online-donation" },
      { label: "Donation Appeal", path: "/donate/appeal" },
      { label: "Tax Benefits", path: "/donate/tax-benefits" },
      { label: "Donation History", path: "/donate/history" },
    ],
  },
  {
    title: "FC",
    dropdown: [
      { label: "FC Donation", path: "/fc/fc-donation" },
      { label: "FC Disclosure", path: "/fc/rules" },
      { label: "FC Guidelines", path: "/fc/guidelines" },
    ],
  },
  {
    title: "Online Reading",
    dropdown: [
      {
        label: "Other Languages",
        submenu: [
          { label: "Hindi", path: "https://publications.rkmm.org/hindi", external: true}, 
          { label: "Bengali", path: "https://publications.rkmm.org/bangla", external: true},
          { label: "Telugu", path: "https://publications.rkmm.org/telugu", external: true},
          { label: "Tamil", path: "https://publications.rkmm.org/tamil", external: true},
          { label: "Gujarati", path: "https://publications.rkmm.org/gujarati", external: true },
          { label: "Kannada", path: "https://publications.rkmm.org/kannada", external: true },
          { label: "Marathi", path: "https://publications.rkmm.org/marathi", external: true },
          { label: "Malayalam", path: "https://publications.rkmm.org/malayalam", external: true },
          { label: "Odia", path: "https://publications.rkmm.org/odia", external: true },
        ],
      },
      { label: "Essential Books", path: "https://publications.rkmm.org/essential-books", external: true },
      { label: "Reference Books", path: "https://publications.rkmm.org/reference-books", external: true },
      { label: "Scriptural Texts", path: "https://publications.rkmm.org/scriptural-texts", external: true },
      { label: "Magazine Archives", path: "https://publications.rkmm.org/magazine-archives", external: true },
      { label: "Chronologies", path: "https://publications.rkmm.org/chronologies", external: true },
      { label: "Inspirational Quotes", path: "https://publications.rkmm.org/quotes", external: true },
      { label: "Bhajans & Chants", path: "https://publications.rkmm.org/bhajans-and-chants", external: true },
      { label: "Ramakrishna Order", path: "https://publications.rkmm.org/ramakrishna-order", external: true  },
      { label: "Biographies", path: "https://publications.rkmm.org/biographies", external: true },
      { label: "Recommended e-Reads", path: "https://publications.rkmm.org/recommended-ereads", external: true },
    ],
  },
  {
    title: "Recruitment",
    dropdown: [
      { label: "Application Forms", path: "/recruitment/forms" },
      { label: "Recruitment Rules", path: "/recruitment/rules" },
      { label: "Current Openings", path: "/recruitment/openings" },
      { label: "Application Status", path: "/recruitment/status" },
    ],
  },
];
