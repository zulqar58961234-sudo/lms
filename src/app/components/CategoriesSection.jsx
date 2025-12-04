"use client";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden scroll-smooth">
      {/* Floating Images */}
      <div className="absolute top-10 left-10">
        <Image
          src="/vb.webp"
          alt="category"
          width={200}
          height={200}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
      <div className="absolute top-20 right-10">
        <Image
          src="/zx.jpg"
          alt="category"
          width={200}
          height={200}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
      <div className="absolute bottom-10 left-32">
        <Image
          src="/r.jpg"
          alt="category"
          width={200}
          height={200}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
      <div className="absolute bottom-5 right-32">
        <Image
          src="/bb.jpg"
          alt="category"
          width={200}
          height={200}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <p className="uppercase text-gray-400 text-sm tracking-wider">// Categories</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Find Courses That <br /> Fit Your Passion
        </h2>

        <ul className="mt-8 space-y-3 text-gray-600 text-lg">
          <li className="hover:text-red-500 cursor-pointer transition">◦ Design & Creativity <span className="text-gray-400 text-sm">(830+)</span></li>
          <li className="font-semibold text-red-600 cursor-pointer">◦ Tech & Programming <span className="text-gray-400 text-sm">(1290+)</span></li>
          <li className="hover:text-red-500 cursor-pointer transition">◦ Business & Marketing <span className="text-gray-400 text-sm">(250+)</span></li>
          <li className="hover:text-red-500 cursor-pointer transition">◦ Photography & Visual Arts <span className="text-gray-400 text-sm">(975+)</span></li>
          <li className="hover:text-red-500 cursor-pointer transition">◦ Personal Development <span className="text-gray-400 text-sm">(120+)</span></li>
        </ul>

        <Link
          href="#courses"
          className="inline-block mt-10 bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-black transition"
        >
          All Categories
        </Link>
      </div>
    </section>
  );
}
