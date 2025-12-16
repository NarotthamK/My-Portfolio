"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "Experience", href: "#experience" },
  { title: "Expertise", href: "#expertise" },
  { title: "Certifications", href: "#certifications" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-gray-700 z-[9999]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="#home" className="text-xl font-bold text-white">
          Narottham K
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>

        <button
  className="md:hidden text-gray-300 text-3xl focus:outline-none"
  onClick={() => setIsOpen(!isOpen)}
>
  ☰
</button>
      </div>

      {isOpen && (
       <div className="md:hidden flex flex-col items-center bg-black/95 space-y-6 py-6 border-t border-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
