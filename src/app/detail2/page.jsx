import React from "react";
import { FaUser, FaWifi, FaClock, FaUsers, FaBook ,FaStar } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import NavBar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/footer";
export default function CourseDetails() {
  return (
<section className="h-full w-full overflow-x-hidden scroll-smooth">
<title>Graphic Desigining - Skill Verge</title>   
                         {/* HEADER*/} 
<div>
    <NavBar/>
  <div className="relative w-full h-[450px] bg-black flex items-center justify-center text-center overflow-hidden">     
   <div className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled bg-[url('/ml.jpg')] mt-15"></div>
    <div className="absolute inset-0 bg-black/70"></div>
     <ParticlesBackground/>
      <div className="relative z-10 text-white">
       <h1 className="text-5xl font-bold">* Graphic Desigining *</h1>
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
          <FaStar className="text-gray-300" />
        </div>
        <span className="font-semibold">3.59</span>
        <span className="text-sm text-gray-500">(3)</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">
        Graphics Desigining Full Course
      </h1>

      {/* Short Description */}
      <p className="text-gray-600 max-w-3xl mb-6">
       “This graphic designing course focuses on building strong
        visual communication skills through creative design concepts
         and modern tools. Learners will explore design principles such
          as color theory, typography, layout, and branding while working
           on real-world projects like logos, posters, social media content,
            and marketing materials. The course helps students develop creativity,
             technical skills, and confidence to create professional-quality designs
              for digital and print platforms..”
      </p>

      {/* Instructor Section */}
      <div className="flex items-center gap-3 mb-8 mt-5">
        <img
          src="/bbb.jpg"
          alt="Instructor"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-800 font-semibold">Instructor</p>
          <p className="text-gray-600">James Hunt</p>
        </div>
      </div>

      {/* Line */}
      <hr className="border-gray-300 mb-4" />

      {/* Update Section */}
      <p className="text-gray-800 font-semibold">Update</p>
      <p className="text-gray-500">January 6, 2026</p>

      <hr className="border-gray-300 mt-4" />
    </div>

    <div className="w-full flex flex-col lg:flex-row gap-10 mt-10 px-4 lg:px-16">

      {/* LEFT SECTION */}
      <div className="flex-1 mt-20">
        <h2 className="text-2xl font-bold mb-3">Description</h2>

        <p className="text-gray-600 leading-relaxed mb-4">
        This comprehensive graphic designing course is designed to develop creative thinking and practical design skills for beginners as well as aspiring professionals. The course introduces the fundamentals of visual communication and gradually advances to professional design techniques used in the creative industry. Students will learn how to transform ideas into visually engaging designs that effectively communicate messages across digital and print media.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
         The program covers essential design principles such as color theory, typography, layout composition, branding, and visual hierarchy. Learners will gain hands-on experience with industry-standard design tools and software to create logos, brochures, posters, social media graphics, advertisements, and marketing materials. The course also emphasizes creativity, consistency, and attention to detail while following modern design trends.
         In addition to technical skills, students will work on real-world projects that help build a strong portfolio. They will learn how to understand client requirements, apply design concepts strategically, and deliver professional-quality work. By the end of the course, learners will have the confidence and skills needed to pursue careers in graphic design, freelancing, digital marketing, or creative industries.
        </p>

        <h2 className="text-2xl font-bold mb-3">What Will I Learn?</h2>

       <ul className="space-y-3 text-gray-700">
  <li className="flex items-start gap-2">
    ✔ Understand the basics of graphic design and visual communication
  </li>
  <li className="flex items-start gap-2">
    ✔ Learn design principles such as color theory, typography, and layout
  </li>
  <li className="flex items-start gap-2">
    ✔ Create logos, posters, banners, and marketing designs
  </li>
  <li className="flex items-start gap-2">
    ✔ Design social media posts and digital advertisements
  </li>
  <li className="flex items-start gap-2">
    ✔ Work with industry-standard graphic design tools and software
  </li>
  <li className="flex items-start gap-2">
    ✔ Edit and enhance images using professional techniques
  </li>
  <li className="flex items-start gap-2">
    ✔ Learn branding concepts and maintain visual consistency
  </li>
  <li className="flex items-start gap-2">
    ✔ Build real-world projects and create a professional design portfolio
  </li>
</ul>

      </div>

      {/* RIGHT SECTION – CARD */}
      <div className="w-full mt-20 lg:w-1/3">
        <div className="bg-white flex flex-col shadow-md shadow-gray-300 rounded-xl p-5">
          
          {/* Image */}
          <img
            src="graphic.jpg"
            alt="Course"
            className="rounded-lg w-full mb-4"
          />

          {/* Price */}
          <h2 className="text-4xl font-bold text-red-500 mb-4">Free</h2>

          {/* Details */}
          <div className="space-y-3 text-gray-700">

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaUser /> Instructor</span>
              <span>James Hunt</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaWifi /> Level</span>
              <span>All Levels</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaClock /> Duration</span>
              <span>04h 3m 29s</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaUsers /> Enrolled</span>
              <span>13</span>
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
