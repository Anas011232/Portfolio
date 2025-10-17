import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const baseClasses =
    "text-white text-lg px-4 py-2 rounded-md block transition-all cursor-pointer";

  const gradientHover =
    "hover:bg-gradient-to-r hover:from-[#5DFFFF] hover:to-[#AE0CA7]";

  const links = (
    <>
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={800}
        offset={-70}
        activeClass="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7]" // ✅ active হলে gradient থাকবে
        className={`${baseClasses} ${gradientHover}`}
        onClick={() => setMobileOpen(false)}
      >
        Home
      </Link>

      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={800}
        offset={-70}
        activeClass="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7]"
        className={`${baseClasses} ${gradientHover}`}
        onClick={() => setMobileOpen(false)}
      >
        About
      </Link>

      <Link
        to="education"
        spy={true}
        smooth={true}
        duration={800}
        offset={-70}
        activeClass="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7]"
        className={`${baseClasses} ${gradientHover}`}
        onClick={() => setMobileOpen(false)}
      >
        Education
      </Link>

      <Link
        to="work"
        spy={true}
        smooth={true}
        duration={800}
        offset={-70}
        activeClass="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7]"
        className={`${baseClasses} ${gradientHover}`}
        onClick={() => setMobileOpen(false)}
      >
        Recent Work
      </Link>

      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={800}
        offset={-70}
        activeClass="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7]"
        className={`${baseClasses} ${gradientHover}`}
        onClick={() => setMobileOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-[#2C1250] via-[#3B1E6C] to-[#4E2A85] shadow-md px-6 h-20 flex items-center justify-between relative sticky top-0 z-50">
      {/* Logo */}
      <div className="text-white font-extrabold text-3xl">Portfolio</div>

      {/* Desktop Links */}
      <div className="hidden lg:flex">{links}</div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white focus:outline-none"
        >
          {mobileOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="absolute top-full right-0 mt-2 w-52 bg-gradient-to-r from-[#2C1250] via-[#3B1E6C] to-[#4E2A85] rounded-md shadow-lg z-50 p-4 flex flex-col gap-2">
            {links}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
