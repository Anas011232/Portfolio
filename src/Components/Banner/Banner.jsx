import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
    const mernWords = ["MERN", "Stack", "Developer"];

    // Variants
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const wordVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.5, duration: 0.6, ease: "easeOut" },
        }),
    };

    const imageVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    return (
        <div id="home" className="relative h-auto min-h-[600px] lg:mx-5  flex flex-col-reverse md:flex-row -mt-16 rounded-lg items-center justify-between px-6 md:px-16 lg:px-32 py-12">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Left Text Section */}
            <motion.div
                className="relative z-10 text-white text-center md:text-left space-y-6 max-w-lg mt-6 md:mt-0"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
            >
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold"
                    variants={fadeUpVariant}
                >
                    Hi, I'm <span className="text-[#00FFFF]">Anas</span>
                </motion.h1>

                {/* MERN Stack Developer with sequential animation */}
                <h2 className=" text-2xl md:text-4xl  lg:text-5xl font-semibold flex justify-center md:justify-start space-x-2">
                    {mernWords.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={wordVariant}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                delay: i * 0.5,
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h2>

                {/* Paragraph */}
                <motion.p
                    className="text-base md:text-lg text-gray-200 mt-3"
                    variants={fadeUpVariant}
                >
                    I love building full-stack web applications using MongoDB, Express, React, and Node.js.
                </motion.p>

                <button
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "Anas_Bin_Rafiq_Resume_Clean.pdf"; // public ফোল্ডারে থাকা ফাইলের path
                        link.download = "Anas_Bin_Rafiq_Resume.pdf"; // download হলে যেই নামে save হবে
                        link.click();
                    }}
                    className="bg-gradient-to-r from-[#5DFFFF] to-[#F72585] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                    📄 Download Resume
                </button>

            </motion.div>

            {/* Right Image Section */}
            <motion.div
                className="relative mb-4 md:mb-0 flex justify-center md:justify-end z-10"
                variants={imageVariant}
                initial="hidden"
                animate="visible"
            >
                <div className="rounded-full overflow-hidden border-4 border-[#00FFFF] shadow-xl w-[180px] h-[230px] sm:w-[220px] sm:h-[280px] md:w-[320px] md:h-[420px] lg:w-[500px] lg:h-[572px]">
                    <img
                        src="anas1.png"
                        alt="My Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            {/* Background Image */}
            <div
                className="absolute rounded-2xl inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
                style={{ backgroundImage: "url('Rectangle 4.png')" }}
            ></div>
        </div>
    );
};

export default Banner;
