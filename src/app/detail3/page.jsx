import React from "react";
import { FaUser, FaWifi, FaClock, FaUsers, FaBook ,FaStar } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import NavBar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/footer";
export default function CourseDetails() {
  return (
<section className="h-full w-full overflow-x-hidden scroll-smooth">
<title>Basic IT Course - Skill Verge</title>   
                         {/* HEADER*/} 
<div>
    <NavBar/>
  <div className="relative w-full h-[450px] bg-black flex items-center justify-center text-center overflow-hidden">     
   <div className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled bg-[url('/ml.jpg')] mt-15"></div>
    <div className="absolute inset-0 bg-black/70"></div>
     <ParticlesBackground/>
      <div className="relative z-10 text-white">
       <h1 className="text-5xl font-bold">* Basic IT *</h1>
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
          <FaStar className="text-gray-300" />
          <FaStar className="text-gray-300" />
          <FaStar className="text-gray-300" />
        </div>
        <span className="font-semibold">2.85</span>
        <span className="text-sm text-gray-500">(2)</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">
       Basic IT Full Course
      </h1>

      {/* Short Description */}
      <p className="text-gray-600 max-w-3xl mb-6">
       “This basic IT course introduces learners to essential computer skills and information technology concepts. It covers computer fundamentals, operating systems, internet usage, and common software applications, helping students build a strong foundation for using technology confidently in everyday and professional tasks."
      </p>

      {/* Instructor Section */}
      <div className="flex items-center gap-3 mb-8 mt-5">
        <img
          src="/bb.jpg"
          alt="Instructor"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-800 font-semibold">Instructor</p>
          <p className="text-gray-600">Micheal</p>
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
        This Basic IT course is designed to provide a strong foundation in essential information technology and computer skills for beginners. The course introduces learners to the fundamentals of computers, helping them understand how computer systems work and how technology is used in everyday life and professional environments.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
        Students will learn about computer hardware, operating systems, file management, and basic troubleshooting techniques. The course also covers internet usage, email communication, online safety, and commonly used software applications such as word processing, spreadsheets, and presentations. Emphasis is placed on practical, hands-on learning to ensure students can confidently use computers for personal, academic, and workplace tasks.
        In addition to technical skills, the course helps develop digital literacy, problem-solving abilities, and an understanding of responsible technology use. By the end of the course, learners will have the knowledge and confidence needed to operate computers efficiently, use online tools safely, and take the next step toward more advanced IT or technology-related courses.
        </p>

        <h2 className="text-2xl font-bold mb-3">What Will I Learn?</h2>

       <ul className="space-y-3 text-gray-700">
  <li className="flex items-start gap-2">
    ✔ Understand the fundamentals of computers and how they work
  </li>
  <li className="flex items-start gap-2">
    ✔ Learn about computer hardware, software, and operating systems
  </li>
  <li className="flex items-start gap-2">
    ✔ Navigate and manage files, folders, and storage effectively
  </li>
  <li className="flex items-start gap-2">
    ✔ Use word processing, spreadsheets, and presentation software
  </li>
  <li className="flex items-start gap-2">
    ✔ Learn basic internet skills, email, and online communication
  </li>
  <li className="flex items-start gap-2">
    ✔ Understand online safety, privacy, and responsible technology use
  </li>
  <li className="flex items-start gap-2">
    ✔ Perform basic troubleshooting and problem-solving on computers
  </li>
  <li className="flex items-start gap-2">
    ✔ Work on practical exercises to gain confidence in everyday IT tasks
  </li>
</ul>

      </div>

      {/* RIGHT SECTION – CARD */}
      <div className="w-full mt-23 lg:w-1/3">
        <div className="bg-white flex flex-col shadow-md shadow-gray-300 rounded-xl p-5">
          
          {/* Image */}
          <img
            src="it.webp"
            alt="Course"
            className="rounded-lg w-full mb-4"
          />

          {/* Price */}
          <h2 className="text-4xl font-bold text-red-500 mb-4">Free</h2>

          {/* Details */}
          <div className="space-y-3 text-gray-700">

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaUser /> Instructor</span>
              <span>Micheal</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaWifi /> Level</span>
              <span>All Levels</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaClock /> Duration</span>
              <span>06h 40m 30s</span>
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-2"><FaUsers /> Enrolled</span>
              <span>18</span>
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
