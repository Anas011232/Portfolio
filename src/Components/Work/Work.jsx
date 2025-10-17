import React from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";

const projects = [
  {
    title: "Service-Sharing Web Application",
    description:
      "MERN-stack app for sharing, booking, and managing services with role-based access and booking status updates.",
    live: "https://aeleven-66e92.web.app/",
    image: "serviceLane.png", // 🖼️ project screenshot
  },
  {
    title: "Employee Management Web Application",
    description:
      "A full-stack system to track employee work, manage salaries, and HR/Admin operations with role-based dashboards. Admin: admin@example.com / Admin1234",
    live: "https://employee-management-45ba7.web.app",
    image: "Employee.png", // 🖼️ project screenshot
  },
  {
    title: "Bill Management Website",
    description:
      "React-based app to view and pay utility bills with profile & balance management. Fully responsive.",
    live: "https://assignment-nine-22660.web.app",
    image: "Bill.png", // 🖼️ project screenshot
  },
  {
    title: "Roommate Finder Website",
    description:
      "Full-stack platform to find and manage compatible roommates with authentication, likes, and CRUD operations.",
    live: "https://aten-494bd.web.app",
    image: "Roommate.png", // 🖼️ project screenshot
  },
];


const Work = () => {
  return (
    <section id="work" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#1B0044] via-[#3C0D65] to-[#5A189A] text-white px-6 md:px-20 py-16">
      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#5DFFFF] via-[#AE0CA7] to-[#F72585]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Recent Work
      </motion.h2>
      <motion.p
        className="text-center text-gray-300 mb-12 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A collection of projects I’ve worked on.
      </motion.p>

      {/* Projects */}
      <div className="flex flex-col gap-16 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#AE0CA7]/30 transition-all duration-500 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.3 }}
          >
            {/* Text Section */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-[#5DFFFF]">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#5DFFFF] to-[#F72585] px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
                >
                  <FaGlobe /> Live Site
                </a>
              </div>
            </div>

            {/* Image Section */}
            <motion.div
              className="md:w-1/2 mt-6 md:mt-0 flex justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[90%] rounded-xl shadow-lg border border-white/20 object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
