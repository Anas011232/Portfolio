import React from 'react';
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";

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

  // particles options
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
    },
    particles: {
      color: { value: "#00FFFF" },
      links: { enable: true, color: "#00FFFF", distance: 150, opacity: 0.2, width: 1 },
      collisions: { enable: false },
      move: { enable: true, speed: 1, direction: "none", random: true, straight: false },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <section  id="home"  className="relative h-auto min-h-[700px] -mt-16 flex items-center justify-center px-6 md:px-16 lg:px-32 bg-gradient-to-r from-[#1B0044] via-[#3C0D65] to-[#5A189A] overflow-hidden">
      
      {/* Particles Background */}
      <Particles className="absolute inset-0 z-0" init={particlesInit} options={particlesOptions} />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 z-0 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-8">

        {/* Left Text */}
        <motion.div
          className="text-white text-center md:text-left space-y-6 max-w-lg"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold" variants={fadeUpVariant}>
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#AE0CA7] to-[#F72585]">Anas</span>
          </motion.h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#AE0CA7] to-[#F72585] font-semibold flex justify-center md:justify-start space-x-3">
            {mernWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p className="text-base md:text-lg text-gray-200 mt-3" variants={fadeUpVariant}>
            I love building full-stack web applications using MongoDB, Express, React, and Node.js.
          </motion.p>

          {/* MERN Icons animation */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-3xl text-[#00FFFF]">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}><FaReact /></motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}><FaNodeJs /></motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}><FaDatabase /></motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}><FaJsSquare /></motion.div>
          </div>

          {/* Resume Button */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "Anas_Bin_Rafiq_Resume_PDF.pdf";
              link.download = "Anas_Bin_Rafiq_Resume_PDF";
              link.click();
            }}
            className="relative bg-gradient-to-r from-[#1B0044] via-[#3C0D65] to-[#5A189A] text-white border border-[#00FFFF]/40 px-7 py-3 rounded-lg font-semibold 
              shadow-[0_0_15px_#00FFFF40] hover:shadow-[0_0_25px_#00FFFFAA] overflow-hidden transition-all duration-500 ease-in-out group mt-6"
          >
            <span className="relative z-10 flex items-center gap-2">📄 Download Resume</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
            <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[-25deg] group-hover:left-[125%] transition-all duration-700 ease-in-out"></span>
          </button>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          className="relative flex justify-center md:justify-end z-10"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="rounded-full overflow-hidden border-4 border-[#00FFFF] shadow-2xl w-[220px] h-[280px] sm:w-[280px] sm:h-[360px] md:w-[320px] md:h-[420px] lg:w-[400px] lg:h-[520px]">
            <img
              src="anas1.png"
              alt="My Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Banner;
