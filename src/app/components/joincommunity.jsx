"use client";

import { motion } from "framer-motion";

export default function JoinCommunity() {
  return (
   <section className="py-24">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Text Section */}
    <div className="flex-1">
      <h2 className="text-4xl font-bold text-black">
        Join Our Amazing <span className="text-yellow-600">Community</span>
      </h2>

      <p className="mt-4 text-gray-700 text-lg">
        Learn together, share ideas, and grow with students from all around
        the world. Get access to courses, live sessions, and exclusive resources.
      </p>

      <button className="mt-6 bg-red-500 font-bold text-white px-8 py-3 rounded-xl hover:bg-yellow-600 duration-300 shadow-xl">
        Join Now
      </button>

      <div className="mt-6 flex gap-8">
        <div>
          <h3 className="text-3xl font-bold text-red-600">1K+</h3>
          <p className="text-gray-600">Members</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-red-600">50+</h3>
          <p className="text-gray-600">Courses</p>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <img
      src="/io.jpg"
      className="rounded-2xl shadow-lg w-full md:w-1/2"
      alt="community"
    />
  </div>
</section>


  );
}