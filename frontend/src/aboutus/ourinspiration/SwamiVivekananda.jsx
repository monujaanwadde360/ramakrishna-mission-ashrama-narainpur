// src/aboutus/ourinspiration/SwamiVivekananda.jsx

import React from "react";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";

const SwamiVivekananda = () => {
    return (
        <div
            className="bg-[#f6edd8] min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage: "url('/images/rkm.jpg')",
            }}
        >

            <Navbar />
            <ScrollToTop />

            {/* MAIN CONTENT */}
            <section className="max-w-[1450px] mx-auto px-8 py-10 font-serif font-bold tracking-wide">

                {/* FLOAT IMAGE */}
                <div className="float-left mr-8 ml-5 mb-6">

                    <div className="p-[6px] bg-white/40 rounded-[36px] shadow-2xl border border-white/70">

                        <div className="overflow-hidden rounded-[30px]">

                            <img
                                src="/images/Swamiji.jpg"
                                alt="Swami Vivekananda"
                                className="w-full md:w-[420px] h-auto object-contain grayscale hover:grayscale-0 transition duration-700"
                            />

                        </div>

                    </div>

                </div>

                {/* TITLE */}
                <h1 className="text-5xl text-[#0a2230] font-serif mb-8">
                    Swami Vivekananda
                </h1>

                {/* CONTENT */}
                <div className="text-[22px] leading-[2.4rem] bg-[#efe2b3]/35 text-[#2d2d2d] text-justify space-y-6 p-8 rounded-2xl shadow-lg border border-white/80">

                    <p>
                        Swami Vivekananda, known in his pre-monastic life as Narendra Nath
                        Datta, was born in an affluent family in Kolkata on 12 January
                        1863.
                    </p>

                    <p className="mt-4">
                        His father, Vishwanath Datta, was a successful attorney with
                        interests in a wide range of subjects, and his mother,
                        Bhuvaneshwari Devi, was endowed with deep devotion, strong
                        character and other qualities.
                    </p>

                    <p className="mt-4">
                        A precocious boy, Narendra excelled in music, gymnastics and
                        studies. By the time he graduated from Calcutta University, he had
                        acquired a vast knowledge of different subjects, especially Western
                        philosophy and history.
                    </p>

                    <p className="mt-4">
                        Born with a yogic temperament, he used to practice meditation even
                        from his boyhood, and was associated with Brahmo Movement for some
                        time.
                    </p>

                    {/* SECTION */}
                    <div>
                        <h2 className="text-3xl text-[#0a2230] mb-3">
                            With Sri Ramakrishna
                        </h2>

                        <p>
                            At the threshold of youth, Narendra had to pass through a period
                            of spiritual crisis when doubts about the existence of God
                            assailed him.
                        </p>

                        <p className="mt-4">
                            It was at that time he first heard about Sri Ramakrishna from one
                            of his English professors at college.
                        </p>

                        <p className="mt-4">
                            One day in November 1881, Narendra went to meet Sri Ramakrishna
                            who was staying at the Kali Temple in Dakshineshwar.
                        </p>

                        <p className="mt-4 italic text-[#8b1e1e] font-semibold">
                            “Sir, have you seen God?”
                        </p>

                        <p className="mt-4">
                            Without a moment’s hesitation, Sri Ramakrishna replied:
                        </p>

                        <p className="mt-4 italic text-[#8b1e1e] font-semibold">
                            “Yes, I have. I see Him as clearly as I see you, only in a much
                            intenser sense.”
                        </p>

                        <p className="mt-4">
                            Thus began a guru-disciple relationship which is unique in the
                            history of spiritual masters.
                        </p>
                    </div>

                    {/* SECTION */}
                    <div>
                        <h2 className="text-3xl text-[#0a2230] mb-3">
                            Difficult Situations
                        </h2>

                        <p>
                            After a few years two events took place which caused Narendra
                            considerable distress.
                        </p>

                        <p className="mt-4">
                            One was the sudden death of his father in 1884. This left the
                            family penniless, and Narendra had to bear the burden of
                            supporting his mother, brothers and sisters.
                        </p>

                        <p className="mt-4">
                            The second event was the illness of Sri Ramakrishna which was
                            diagnosed to be cancer of the throat.
                        </p>

                        <p className="mt-4">
                            In spite of poverty at home and inability to find a job for
                            himself, Narendra joined the group as its leader.
                        </p>
                    </div>

                    {/* SECTION */}
                    <div>
                        <h2 className="text-3xl text-[#0a2230] mb-3">
                            Beginnings of a Monastic Brotherhood
                        </h2>

                        <p>
                            Sri Ramakrishna instilled in these young men the spirit of
                            renunciation and brotherly love for one another.
                        </p>

                        <p className="mt-4">
                            One day he distributed ochre robes among them and sent them out
                            to beg for food. In this way, he laid the foundation for a new
                            monastic order.
                        </p>

                        <p className="mt-4">
                            After the Master’s passing, the disciples began to live together
                            in a dilapidated building at Baranagar in North Kolkata.
                        </p>

                        <p className="mt-4">
                            Narendra now became Swami Vivekananda.
                        </p>
                    </div>

                    {/* SECTION */}
                    <div>
                        <h2 className="text-3xl text-[#0a2230] mb-3">
                            Discovery of Real India
                        </h2>

                        <p>
                            During his travels all over India, Swami Vivekananda was deeply
                            moved to see the appalling poverty and backwardness of the
                            masses.
                        </p>

                        <p className="mt-4">
                            He was the first religious leader in India to openly declare that
                            the real cause of India’s downfall was the neglect of the masses.
                        </p>

                        <p className="mt-4">
                            He believed that education and spiritual awakening were the true
                            solutions to uplift society.
                        </p>

                        <p className="mt-4">
                            Swamiji found this inspiring message in Vedanta — the doctrine of
                            the potential divinity of the soul.
                        </p>
                    </div>

                    {/* SECTION */}
                    <div>
                        <h2 className="text-3xl text-[#0a2230] mb-3">
                            Parliament of Religions
                        </h2>

                        <p>
                            Swami Vivekananda attended the World’s Parliament of Religions
                            held in Chicago in 1893.
                        </p>

                        <p className="mt-4">
                            His speeches made him world famous as an “Orator by Divine Right”
                            and as a messenger of Indian wisdom to the Western world.
                        </p>

                        <p className="mt-4">
                            After the Parliament, Swamiji spent nearly three and a half years
                            spreading Vedanta in America and Europe.
                        </p>
                    </div>

                    {/* SECTION */}
                    <div>
                        <h2 className="text-3xl text-[#0a2230] mb-3">
                            Awakening India
                        </h2>

                        <p>
                            Swami Vivekananda returned to India in January 1897.
                        </p>

                        <p className="mt-4">
                            Through his inspiring lectures, he awakened national pride,
                            spiritual strength and self-confidence among Indians.
                        </p>

                        <p className="mt-4">
                            He emphasized service to humanity as worship of God.
                        </p>
                    </div>

                    {/* SECTION */}
                    <div>
                        <h2 className="text-3xl text-[#0a2230] mb-3">
                            Founding of Ramakrishna Mission
                        </h2>

                        <p>
                            Swami Vivekananda founded the Ramakrishna Mission on 1 May 1897.
                        </p>

                        <p className="mt-4">
                            The Mission combined spiritual practice with social service,
                            running schools, hospitals, relief services and educational
                            institutions.
                        </p>

                        <p className="mt-4">
                            He also established Belur Math as the headquarters of the
                            Ramakrishna Order.
                        </p>
                    </div>

                    {/* SECTION */}
                    <div>
                        <h2 className="text-3xl text-[#0a2230] mb-3">
                            Last Days
                        </h2>

                        <p>
                            Incessant work and continuous travels affected Swamiji’s health.
                        </p>

                        <p className="mt-4">
                            He passed away on 4 July 1902 at Belur Math.
                        </p>

                        <p className="mt-4 italic text-[#8b1e1e] font-semibold">
                            “It may be that I shall find it good to get outside my body, to
                            cast it off like a worn out garment. But I shall not cease to
                            work.”
                        </p>
                    </div>

                    {/* SECTION */}
                    <div>
                        <h2 className="text-3xl text-[#0a2230] mb-3">
                            Message of Swami Vivekananda
                        </h2>

                        <p className="italic text-[#8b1e1e] font-semibold">
                            “My ideal, indeed, can be put into a few words, and that is: to
                            preach unto mankind their divinity, and how to make it manifest
                            in every movement of life.”
                        </p>

                        <p className="mt-4 italic text-[#8b1e1e] font-semibold">
                            “We want that education by which character is formed, strength of
                            mind is increased, the intellect is expanded, and by which one
                            can stand on one’s own feet.”
                        </p>

                        <p className="mt-4 italic text-[#8b1e1e] font-semibold">
                            “Religion is realization; not talk, not doctrine, nor theories,
                            however beautiful they may be.”
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default SwamiVivekananda;