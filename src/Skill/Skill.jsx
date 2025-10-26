import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
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

// Skills array with short captions
const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", caption: "Expert" },
  { name: "CSS", icon: SiCss3, color: "#1572B6", caption: "Expert" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", caption: "Advanced" },
  { name: "React", icon: SiReact, color: "#61DAFB", caption: "Advanced" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC", caption: "Intermediate" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", caption: "Intermediate" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", caption: "Intermediate" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", caption: "Intermediate" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", caption: "Advanced" },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center -mt-60 lg:-mt-50 px-4 md:px-16 bg-gradient-to-r from-[#1B0044] via-[#3C0D65] to-[#5A189A] text-white"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#AE0CA7] to-[#F72585]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full max-w-6xl py-12"
      >
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <SwiperSlide key={idx}>
              <motion.div
                className="relative flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer
                  bg-white/5 backdrop-blur-md border border-[#00FFFF]/30
                  shadow-[0_0_10px_#00FFFF50] hover:shadow-[0_0_25px_#F72585AA]
                  overflow-hidden transition-all duration-500"
                whileHover={{ scale: 1.2, rotate: 5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Neon Icon Glow */}
                <Icon
                  size={50}
                  color={skill.color}
                  className="drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] hover:drop-shadow-[0_0_20px_rgba(247,37,133,0.7)] transition-all duration-500"
                />

                {/* Skill Name */}
                <span className="mt-3 text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#AE0CA7] to-[#F72585]">
                  {skill.name}
                </span>

                {/* Short Caption */}
                <span className="mt-1 text-sm text-gray-300">{skill.caption}</span>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Skill;
