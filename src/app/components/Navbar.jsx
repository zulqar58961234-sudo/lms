"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed h-[60px] w-screen z-60 flex items-center justify-between font-serif shadow">
      
      {/* Logo */}
      <p className="text-4xl font-bold text-red-600 ml-6 md:ml-10">
        S<span className="text-xl text-black">KILL</span> V
        <span className="text-xl text-black">ERGE</span>
        <span className="text-yellow-400">*</span>
      </p>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-md font-semibold mr-10 items-center">

        <Link href="/home" className="nav-link transition-transform duration-400 hover:scale-110">Home</Link>
        <Link href="/about" className="nav-link transition-transform duration-400 hover:scale-110">About</Link>
        <Link href="/courses" className="nav-link transition-transform duration-400 hover:scale-110">Courses</Link>
        <Link href="/team" className="nav-link transition-transform duration-400 hover:scale-110">Team</Link>
        <Link href="/contact" className="nav-link transition-transform duration-400 hover:scale-110">Contact</Link>

        <a href="/join" className="join-btn text-white bg-red-600 rounded-lg px-4 py-2 duration-300 hover:bg-gray-600">
          Enroll Now
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden mr-6"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md flex flex-col items-start py-4 px-6 space-y-4 md:hidden">

          <Link href="/home" onClick={() => setOpen(false)} className="text-lg font-semibold">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-lg font-semibold">About</Link>
          <Link href="/courses" onClick={() => setOpen(false)} className="text-lg font-semibold">Courses</Link>
          <Link href="/team" onClick={() => setOpen(false)} className="text-lg font-semibold">Team</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-lg font-semibold">Contact</Link>

          <a
            href="/join"
            onClick={() => setOpen(false)}
            className="text-white bg-red-600 rounded-lg px-4 py-2 duration-300 hover:bg-gray-600 w-full text-center"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}
