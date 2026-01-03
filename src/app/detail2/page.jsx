import React from "react";
import { FaUser, FaWifi, FaClock, FaUsers, FaBook ,FaStar } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import NavBar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/footer";
export default function CourseDetails() {
  return (
<section className="h-full w-full overflow-x-hidden scroll-smooth">
<title>JavaScript For Biggners - Skill Verge</title>   
                         {/* HEADER*/} 
<div>
    <NavBar/>
  <div className="relative w-full h-[450px] bg-black flex items-center justify-center text-center overflow-hidden">     
   <div className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled bg-[url('/ml.jpg')] mt-15"></div>
    <div className="absolute inset-0 bg-black/70"></div>
     <ParticlesBackground/>
      <div className="relative z-10 text-white">
       <h1 className="text-5xl font-bold">JavaScript Course For Beginner</h1>
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
        JavaScript For Biggeners
      </h1>

      {/* Short Description */}
      <p className="text-gray-600 max-w-3xl mb-6">
       “This course provides a clear and easy introduction to HTML,
        guiding beginners through the fundamental tags, structure, and
         principles of building web pages. It’s designed to help you quickly
          gain confidence in creating and understanding basic website layouts.”
      </p>

      {/* Instructor Section */}
      <div className="flex items-center gap-3 mb-8 mt-5">
        <img
          src="/r.jpg"
          alt="Instructor"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-800 font-semibold">Instructor</p>
          <p className="text-gray-600">Ellie Clark</p>
        </div>
      </div>

      {/* Line */}
      <hr className="border-gray-300 mb-4" />

      {/* Update Section */}
      <p className="text-gray-800 font-semibold">Update</p>
      <p className="text-gray-500">December 6, 2021</p>

      <hr className="border-gray-300 mt-4" />
    </div>

    <div className="w-full flex flex-col lg:flex-row gap-10 mt-10 px-4 lg:px-16">

      {/* LEFT SECTION */}
      <div className="flex-1 mt-20">
        <h2 className="text-2xl font-bold mb-3">Description</h2>

        <p className="text-gray-600 leading-relaxed mb-4">
         This course will help you learn HTML from the ground up in a simple and clear way. HTML is the foundation of every website, and understanding it properly is the first step toward becoming a web developer. In this course, you’ll learn how to structure webpages, write clean code, and build real layouts using modern HTML elements.

You’ll explore important concepts such as tags, attributes, forms, semantic elements, media integration, and best practices. By the end of the course, you’ll be able to create professional-looking webpages and understand how HTML works together with CSS and JavaScript.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          You'll be exposed to principles and strategies, and how to apply them by
          coding three different websites for three different audiences.
        </p>

        <h2 className="text-2xl font-bold mb-3">What Will I Learn?</h2>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
           ✔ Understand what HTML is and how it works in web development
          </li>
          <li className="flex items-start gap-2">
         ✔ Learn and use the most important HTML tags and attributes
          </li>
          <li className="flex items-start gap-2">
           ✔ Create headings, paragraphs, links, images, lists, tables, and forms
          </li>
          <li className="flex items-start gap-2">
           ✔ Use semantic HTML to structure webpages cleanly and professionally
          </li>
          <li className="flex items-start gap-2">
            ✔ Embed audio, video, and external media into your pages
          </li>
          <li className="flex items-start gap-2">
✔ Build complete webpage layouts using modern HTML elements
          </li>
           <li className="flex items-start gap-2">
✔ Learn the connection between HTML, CSS, and JavaScript
          </li>
           <li className="flex items-start gap-2">
✔ Work on mini-projects to practice real-world webpage building
          </li>
        </ul>
      </div>

      {/* RIGHT SECTION – CARD */}
      <div className="w-full mt-13 lg:w-1/3">
        <div className="bg-white flex flex-col shadow-md shadow-gray-300 rounded-xl p-5">
          
          {/* Image */}
          <img
            src="bn.jpg"
            alt="Course"
            className="rounded-lg w-full mb-4"
          />

          {/* Price */}
          <h2 className="text-4xl font-bold text-red-500 mb-4">Free</h2>

          {/* Details */}
          <div className="space-y-3 text-gray-700">

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaUser /> Instructor</span>
              <span>Ellie Clark</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaWifi /> Level</span>
              <span>All Levels</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaClock /> Duration</span>
              <span>03h 12m 30s</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaUsers /> Enrolled</span>
              <span>80</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaBook /> Lectures</span>
              <span>8 Lessons</span>
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
