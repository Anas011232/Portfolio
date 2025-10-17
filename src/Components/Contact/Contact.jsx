import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope,FaFacebook } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen -mt-25 flex flex-col items-center justify-center bg-gradient-to-r from-[#1B0044] via-[#3C0D65] to-[#5A189A] text-white px-6 py-20">
            {/* Title */}
            <motion.h2
                className="text-5xl md:text-6xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#5DFFFF] via-[#AE0CA7] to-[#F72585]"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Get In Touch
            </motion.h2>

            <motion.p
                className="text-gray-300 text-lg text-center mb-12 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Let’s connect and create
                something amazing together!
            </motion.p>

            {/* Icons Section */}
            <motion.div
                className="flex flex-wrap justify-center gap-10 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {/* GitHub */}
                <motion.a
                    href="https://github.com/Anas011232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-5xl hover:text-[#5DFFFF] transition duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                >
                    <FaGithub />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                    href="https://www.linkedin.com/in/anas-bin-rafiq-284573371/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-5xl hover:text-[#AE0CA7] transition duration-300"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                >
                    <FaLinkedin />
                </motion.a>

                {/* Email */}
                <motion.a
                    href="mailto:nulltohero@gmail.com"
                    className="text-5xl hover:text-[#F72585] transition duration-300"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                >
                    <FaEnvelope />
                </motion.a>

                <motion.a
                    href="https://www.facebook.com/abr.anas.9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-5xl hover:text-[#00FFD1] transition duration-300"
                    whileHover={{ scale: 1.2, rotate: -8 }}
                >
                    <FaFacebook />
                </motion.a>
            </motion.div>

            {/* Footer Text */}
            <motion.p
                className="text-gray-400 text-sm mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >

            </motion.p>
        </section>
    );
};

export default Contact;
