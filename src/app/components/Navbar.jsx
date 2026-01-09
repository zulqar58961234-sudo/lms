"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  User,
  LayoutDashboard,
  Settings,
  LogOut as LogoutIcon,
} from "lucide-react";
import LogOut from "../actions/logout";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path) =>
    `nav-link ${
      pathname === path ? "text-red-500" : "text-gray-800"
    } hover:text-red-500 transition`;

  return (
    <nav className="fixed z-50 flex h-[60px] w-screen items-center bg-white px-6 font-serif shadow">

      {/* Logo */}
      <p className="text-4xl font-bold text-red-600">
        S<span className="text-xl text-black">KILL</span> V
        <span className="text-xl text-black">ERGE</span>
        <span className="text-yellow-400">*</span>
      </p>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 items-center justify-between">

        {/* Center Links */}
        <div className="flex flex-1 justify-center space-x-6 text-md font-semibold">
          <Link href="/home" className={linkClass("/home")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/courses" className={linkClass("/courses")}>Courses</Link>
          <Link href="/team" className={linkClass("/team")}>Team</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">

          {/* Enroll Button */}
          <Link
            href="/join"
            className="
              group flex items-center gap-2 rounded-full
              border border-red-600
              bg-white px-4 py-2
              text-sm font-semibold text-red-600
              shadow-sm
              transition-all duration-300
              hover:bg-red-600 hover:text-white
              hover:shadow-md hover:-translate-y-[1px]
            "
          >
            Enroll Now
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="
                group flex items-center gap-2 rounded-full
              border border-red-600
              bg-white px-4 py-2
              text-sm font-semibold text-red-600
              shadow-sm
              transition-all duration-300
              hover:bg-red-600 hover:text-white
              hover:shadow-md hover:-translate-y-[1px]
              "
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40">
                <User size={16} />
              </span>
              <span className="text-sm">Profile</span>
              <svg
                className={`h-4 w-4 opacity-70 transition-transform duration-300 ${
                  profileOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Animated Dropdown */}
            <div
              className={`
                absolute right-0 mt-4 w-64 origin-top-right
                overflow-hidden rounded-2xl bg-white
                shadow-2xl ring-1 ring-black/10
                transform transition-all duration-300 ease-out
                ${
                  profileOpen
                    ? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
                    : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
                }
              `}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-600 to-gray-400 px-4 py-4 text-white">
                <p className="text-sm font-semibold">Welcome 👋</p>
                <p className="text-xs opacity-90">Manage your account</p>
              </div>

              {/* Menu */}
              <div className="py-2">
                <Link
                  href="/dashboard"
                  onClick={() => setProfileOpen(false)}
                  className="group flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <span className="rounded-lg bg-red-50 p-2 text-red-600 group-hover:bg-red-100">
                    <LayoutDashboard size={16} />
                  </span>
                  Dashboard
                </Link>

                <Link
                  href="/edit-profile"
                  onClick={() => setProfileOpen(false)}
                  className="group flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <span className="rounded-lg bg-red-50 p-2 text-red-600 group-hover:bg-red-100">
                    <Settings size={16} />
                  </span>
                  Edit Profile
                </Link>
              </div>

              {/* Logout */}
              <div className="border-t px-4 py-3">
                <button
                  onClick={async () => await LogOut()}
                  className="
                    flex w-full items-center justify-center gap-2
                    rounded-xl border border-red-200
                    bg-red-50 py-2.5 text-sm font-semibold text-red-600
                    transition-all duration-300
                    hover:bg-red-600 hover:text-white
                    active:scale-[0.96]
                  "
                >
                  <LogoutIcon size={16} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button className="ml-auto md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
    </nav>
  );
}
