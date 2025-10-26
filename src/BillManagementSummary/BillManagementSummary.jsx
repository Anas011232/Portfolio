import React from "react";
import { motion } from "framer-motion";
import { FaInfoCircle, FaGlobe } from "react-icons/fa";

const summaryPoints = [
  {
    title: "Role-Based Authentication",
    desc: "Users can login/register using Email/Password & Google. Protected routes implemented.",
  },
  {
    title: "Forget Password Feature",
    desc: "Allows users to reset their password using a simple form without email verification.",
  },
  {
    title: "Bill Listing",
    desc: "Displays electricity, gas, water, internet, credit card bills, tuition, etc.",
  },
  {
    title: "Bill Details & Payment",
    desc: "View detailed bill info and pay bills using balance amount securely.",
  },
  {
    title: "Payment Validation",
    desc: "Prevent duplicate payments for the same bill. Paid bills are marked with ✅.",
  },
  {
    title: "My Profile",
    desc: "Users can view and update name & profile photo easily.",
  },
  {
    title: "Responsive Design",
    desc: "Optimized for mobile, tablet, and desktop screens.",
  },
  {
    title: "Dynamic UI Components",
    desc: "Slider, card grids, drop-down filters for bill types, and hover animations.",
  },
  {
    title: "Full-Stack MERN",
    desc: "Firebase auth, MongoDB backend, React frontend for complete functionality.",
  },
  {
    title: "Extra Features",
    desc: "Toasts, sweet alerts, and meaningful UI inspired by local banking websites.",
  },
];

const BillManagementSummary = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#1B0044] via-[#3C0D65] to-[#5A189A] text-white px-6 md:px-20 py-16">
      
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#5DFFFF] via-[#AE0CA7] to-[#F72585]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bill Management Project
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mb-12 text-base md:text-lg max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A complete platform to pay utility bills, manage user profile, and securely track payments.
      </motion.p>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {summaryPoints.map((item, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 cursor-pointer transition-all duration-500 flex flex-col gap-3 shadow-lg hover:shadow-[#AE0CA750]"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <FaInfoCircle className="text-[#00FFFF] w-6 h-6 flex-shrink-0" />
              <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-200 text-sm md:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mt-12">
       

        <a
          href="https://bill-management-marigold.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#1B0044] via-[#3C0D65] to-[#5A189A] group overflow-hidden shadow-[0_0_10px_#5A189A50] hover:shadow-[0_0_20px_#F72585AA] transition-all duration-500 ease-in-out"
        >
          <span className="relative z-10 flex items-center gap-2">
            <FaGlobe /> Live Site
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#F72585] opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"></span>
        </a>
      </div>
    </section>
  );
};

export default BillManagementSummary;
