"use client";

import Link from "next/link";
import { ArrowLeft, UserPlus, User } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Left: Back */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300 duration-300 cursor-pointer transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Right */}
        <div className="flex gap-3">
          <Link
            href="/join"
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-600 duration-300 transition"
          >
            <UserPlus size={16} />
            Enroll
          </Link>

          <Link
            href="/courses"
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-600 duration-300 transition"
          >
            <User size={16} />
            Explore Courses
          </Link>
        </div>

      </div>
    </nav>
  );
}
