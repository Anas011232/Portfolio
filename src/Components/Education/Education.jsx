import React from "react";
import { motion } from "framer-motion";

const semesters = [
  { sem: "1st Semester", cgpa: 3.43 },
  { sem: "2nd Semester", cgpa: 3.58 },
  { sem: "3rd Semester", cgpa: 3.77 },
];

const Education = () => {
  return (
    <section id="education"  className="min-h-screen -mt-60 lg:-mt-50  lg:min-h-[60vh] flex flex-col items-center justify-center px-4 md:px-16 bg-gradient-to-r from-[#1B0044] via-[#3C0D65] to-[#5A189A] text-white">
      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#5DFFFF] via-[#AE0CA7] to-[#F72585]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>

      {/* Education Info */}
      <motion.div
        className="flex flex-col  md:flex-row gap-10 md:gap-16 justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* University Logo */}
        <motion.div
  className="w-48 h-52 md:w-60 md:h-64 overflow-hidden rounded-xl shadow-lg flex items-center justify-center"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  <img
    src="main-logo.png" // Your 584x637 image
    alt="University Logo"
    className="w-full h-full object-contain"
  />
</motion.div>


        {/* University Info + CGPA */}
        <motion.div
          className="flex flex-col gap-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold">
            Jatiya Kabi Kazi Nazrul Islam University
          </h3>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Bachelor of Science in Computer Science & Engineering (B.Sc in CSE) - 3rd Year
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start mt-4">
            {semesters.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#5D5D5D]/20 px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
              >
                <p className="font-semibold">{s.sem}</p>
                <p>CGPA: {s.cgpa}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
