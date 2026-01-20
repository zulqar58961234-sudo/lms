import React from "react";
import { FaUser, FaWifi, FaClock, FaUsers, FaBook ,FaStar } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import NavBar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/footer";
export default function CourseDetails() {
  return (
<section className="h-full w-full overflow-x-hidden scroll-smooth">
<title>Vedio Editing Course - Skill Verge</title>   
                         {/* HEADER*/} 
<div>
    <NavBar/>
  <div className="relative w-full h-[450px] bg-black flex items-center justify-center text-center overflow-hidden">     
   <div className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled bg-[url('/ml.jpg')] mt-15"></div>
    <div className="absolute inset-0 bg-black/70"></div>
     <ParticlesBackground/>
      <div className="relative z-10 text-white">
       <h1 className="text-5xl font-bold">* Video Editing *</h1>
        <p className="mt-2 text-sm"><Link href="/home">Home</Link> / Courses</p>
         </div>
          </div>
           </div>
    <div className="w-full px-4 lg:px-16 mt-9 py-6">

      {/* Rating */}
      <div className="flex items-center gap-2 text-gray-700 mb-2">
        <div className="flex text-yellow-400 text-lg">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <span className="font-semibold">5.00</span>
        <span className="text-sm text-gray-500">(5)</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">
       Video Editing Advance Course
      </h1>

      {/* Short Description */}
      <p className="text-gray-600 max-w-3xl mb-6">
       "Learn how to transform raw footage into engaging videos using modern editing tools and techniques. This course teaches cutting, trimming, transitions, effects, and basic motion graphics to create professional-quality content for social media, YouTube, or personal projects."
      </p>

      {/* Instructor Section */}
      <div className="flex items-center gap-3 mb-8 mt-5">
        <img
          src="/mmm.jpg"
          alt="Instructor"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-800 font-semibold">Instructor</p>
          <p className="text-gray-600">Caroline</p>
        </div>
      </div>

      {/* Line */}
      <hr className="border-gray-300 mb-4" />

      {/* Update Section */}
      <p className="text-gray-800 font-semibold">Update</p>
      <p className="text-gray-500">November 6, 2025</p>

      <hr className="border-gray-300 mt-4" />
    </div>

    <div className="w-full flex flex-col lg:flex-row gap-10 mt-10 px-4 lg:px-16">

      {/* LEFT SECTION */}
      <div className="flex-1 mt-20">
        <h2 className="text-2xl font-bold mb-3">Description</h2>

        <p className="text-gray-600 leading-relaxed mb-4">
       "This comprehensive Video Editing course is designed to equip learners with the skills needed to produce professional and visually appealing videos. Students will gain hands-on experience with popular video editing software, learning techniques for cutting, trimming, adding transitions, color correction, audio editing, and motion graphics."
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
      The course also covers storytelling principles, pacing, and visual effects to ensure that videos not only look polished but also effectively communicate the intended message. Learners will work on real-world projects, including promotional videos, social media content, and personal creative projects, building a strong portfolio along the way.

By the end of the course, students will have the technical knowledge and creative confidence to edit videos for personal, professional, or commercial purposes, making them ready for careers in media, marketing, content creation, or freelance video editing.
        </p>

        <h2 className="text-2xl font-bold mb-3">What Will I Learn?</h2>

      <ul className="space-y-3 text-gray-700">
  <li className="flex items-start gap-2">
    ✔ Understand the basics of video editing and its role in storytelling
  </li>
  <li className="flex items-start gap-2">
    ✔ Learn to use popular video editing software and tools
  </li>
  <li className="flex items-start gap-2">
    ✔ Cut, trim, and arrange clips to create smooth video sequences
  </li>
  <li className="flex items-start gap-2">
    ✔ Add transitions, effects, and text overlays for professional results
  </li>
  <li className="flex items-start gap-2">
    ✔ Perform color correction and audio editing to enhance video quality
  </li>
  <li className="flex items-start gap-2">
    ✔ Create motion graphics and visual effects to make videos engaging
  </li>
  <li className="flex items-start gap-2">
    ✔ Learn video exporting, formatting, and optimization for different platforms
  </li>
  <li className="flex items-start gap-2">
    ✔ Work on real-world projects to build a professional video portfolio
  </li>
</ul>


      </div>

      {/* RIGHT SECTION – CARD */}
      <div className="w-full mt-23 lg:w-1/3">
        <div className="bg-white flex flex-col shadow-md shadow-gray-300 rounded-xl p-5">
          
          {/* Image */}
          <img
            src="video.webp"
            alt="Course"
            className="rounded-lg w-full mb-4"
          />

          {/* Price */}
          <h2 className="text-4xl font-bold text-red-500 mb-4">Free</h2>

          {/* Details */}
          <div className="space-y-3 text-gray-700">

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaUser /> Instructor</span>
              <span>Caroline</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaWifi /> Level</span>
              <span>All Levels</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaClock /> Duration</span>
              <span>09h 20m 30s</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaUsers /> Enrolled</span>
              <span>30</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaBook /> Lectures</span>
              <span>6 Video Lessons</span>
            </p>

          </div>

          {/* Button */}
          <Link href="join" className="w-full bg-red-600 mt-7 hover:bg-red-700 text-white py-3 px-30 rounded-lg text-lg font-semibold transition">
            Enroll Now
          </Link>

        </div>
      </div>
    </div>
    <div className="w-full bg-white h-[150px]">

    </div>
    <Footer />
    </section>
  );
}
