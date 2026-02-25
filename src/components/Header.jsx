"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/70 border-b border-yellow-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
          Vyapar Sahayak
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-orange-600 transition">Home</Link>
          <Link href="#" className="hover:text-orange-600 transition">Services</Link>
          <Link href="#" className="hover:text-orange-600 transition">About</Link>
          <Link href="#" className="hover:text-orange-600 transition">Contact</Link>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition">
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        } bg-white/95 backdrop-blur-md`}
      >
        <div className="flex flex-col items-center gap-6 font-medium text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>Contact</Link>

          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}