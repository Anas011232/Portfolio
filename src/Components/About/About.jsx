import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
];


const About = () => {
  return (
    <section id="about" className="min-h-screen mt-13 lg:min-h-[60vh]    flex flex-col items-center justify-center px-4 md:px-16 bg-gradient-to-r from-[#1B0044] via-[#3C0D65] to-[#5A189A] text-white">
      {/* About Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#5DFFFF] via-[#AE0CA7] to-[#F72585]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-center max-w-3xl text-lg md:text-xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        I am a MERN stack developer with a passion for building modern, responsive, and scalable web applications. I love turning ideas into interactive experiences using technologies like React, Next.js, Node.js, MongoDB, and Firebase. Always eager to learn and explore new tools in the web development ecosystem.
      </motion.p>

      {/* Skills Logos */}
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center"
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Icon size={50} color={skill.color} />
              <span className="mt-2 text-sm md:text-base">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default About;
