import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4uskn5k", // replace with your EmailJS service ID
        "template_eqodanq", // replace with your template ID
        form.current,
        "9nlFJFETn7qBB_2mF" // replace with your public key
      )
      .then(
        (result) => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <footer className="bg-gradient-to-r -mt-30 from-[#1B0044] via-[#3C0D65] to-[#5A189A] text-white py-16 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#5DFFFF] via-[#AE0CA7] to-[#F72585]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Drop Me a Message
      </motion.h2>

      {/* Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg flex flex-col gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AE0CA7]"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AE0CA7]"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message..."
          required
          className="p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AE0CA7]"
        />
        <motion.button
          type="submit"
          className="bg-gradient-to-r from-[#5DFFFF] to-[#F72585] py-3 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Socials */}
      <div className="flex justify-center gap-8 mt-12">
        <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-[#5DFFFF]" whileHover={{ scale: 1.2, rotate: 10 }}>
          <FaLinkedin />
        </motion.a>
        <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-[#AE0CA7]" whileHover={{ scale: 1.2, rotate: 10 }}>
          <FaGithub />
        </motion.a>
        <motion.a href="mailto:nulltohero@gmail.com" className="text-4xl hover:text-[#F72585]" whileHover={{ scale: 1.2, rotate: 10 }}>
          <FaEnvelope />
        </motion.a>
      </div>

      <motion.p className="text-center text-gray-400 mt-10 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        © {new Date().getFullYear()} <span className="text-[#5DFFFF] font-semibold">Anas</span>. All Rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
