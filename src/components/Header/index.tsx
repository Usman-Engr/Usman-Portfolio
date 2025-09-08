"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaWebAwesome } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  // ✅ Each link has a name + id
  const NavLinks = [
    { name: "Work", id: "work" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="w-full h-full">
      {/* Desktop Nav */}
      <nav className="w-[756px] h-[72px] mx-auto hidden lg:flex items-center justify-around p-5 bg-white text-black rounded-[8px]">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-black cursor-pointer">
            <FaWebAwesome size={30} />
          </span>
          <h1 className="text-black font-semibold text-lg">Usman Basharat</h1>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-[32px]">
          {NavLinks.map((link, idx) => (
            <Link
              key={idx}
              href={`#${link.id}`}
              scroll={true}
              className="cursor-pointer font-semibold text-sm hover:text-[#000000b3] transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <button
          onClick={() => window.open("/resume.pdf", "_blank")}
          className="bg-[#ffec80] text-black cursor-pointer py-[6px] px-[20px] rounded-[40px] font-semibold text-sm text-center transition-all duration-500 hover:bg-black hover:text-white"
        >
          Resume
        </button>
      </nav>

      {/* Mobile Nav */}
      <div className="w-full min-h-[64px] h-auto flex flex-col gap-6 lg:hidden justify-between bg-white px-3 py-[16px] sm:px-5">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-black cursor-pointer">
              <FaWebAwesome size={30} />
            </span>
            <h1 className="text-black font-semibold text-[16px] sm:text-lg">
              Usman Basharat
            </h1>
          </div>

          {/* Connect + Hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => (window.location.href = "tel:+923181512749")}
              className="bg-[#ffec80] text-sm sm:text-[16px] text-black hover:bg-black hover:text-white transition-all duration-200 py-[2px] px-[10px] sm:py-[6px] sm:px-[20px] rounded-[40px]"
            >
              Connect
            </button>
            <div className="transition-all duration-300">
              {!isActive ? (
                <span
                  onClick={() => setIsActive(true)}
                  className="text-[#0006]"
                >
                  <HiOutlineMenuAlt4 size={30} />
                </span>
              ) : (
                <span
                  onClick={() => setIsActive(false)}
                  className="text-[#0006]"
                >
                  <RxCross2 size={30} />
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Animate menu links */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="w-full flex flex-col gap-5 overflow-hidden"
            >
              {NavLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={`#${link.id}`}
                  scroll={true}
                  onClick={() => setIsActive(false)} // ✅ close menu after click
                  className="text-xl font-semibold"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
