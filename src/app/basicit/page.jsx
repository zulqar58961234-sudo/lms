"use client";
import React from "react";
import Link from "next/link";
import NavBar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import EndCourse from "../components/deletecourse";
import Footer from "../components/footer";

export default function BasicITCourse() {
  const lessons = [
  {
    title: "Introduction to Information Technology",
    url: "https://www.youtube.com/embed/ER2It2mIagI",
  },
  {
    title: "Computer Hardware & Software Basics",
    url: "https://www.youtube.com/embed/9Jp0dG6p0m0",
  },
  {
    title: "Operating System Basics (Windows)",
    url: "https://www.youtube.com/embed/HvU5jFj9l2E",
  },
  {
    title: "MS Word Basics",
    url: "https://www.youtube.com/embed/yp8z9u3Yy0E",
  },
  {
    title: "MS Excel Basics",
    url: "https://www.youtube.com/embed/Vl0H-qTclOg",
  },
  {
    title: "Internet, Email & Cyber Safety",
    url: "https://www.youtube.com/embed/yrln8nyVBLU",
  },
];


  return (
    <section className="min-h-screen bg-gray-50 text-gray-900">
      <title>Basic IT Course - Skill Verge</title>

      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/it2.webp')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <ParticlesBackground />
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-extrabold tracking-wide">
            Basic IT Course
          </h1>
          <p className="mt-3 text-sm opacity-90">
            <Link href="/home">Home</Link> / Course
          </p>
        </div>
      </div>

      {/* Video Lessons Card */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Video Lessons
          </h2>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">

        {/* Overview */}
        <div>
          <h2 className="text-3xl text-red-600 font-serif font-bold mb-4">
            Course Overview
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            This Basic IT course is designed for beginners who want to learn
            essential computer and technology skills. You will understand
            how computers work, learn common software like MS Word and Excel,
            explore internet usage, and practice safe online habits.
            This course builds a strong foundation for further IT and tech studies.
          </p>
        </div>

        {/* Scope */}
        <div>
          <h2 className="text-3xl text-red-600 font-serif font-bold mb-4">
            Scope <span className="text-yellow-500">&</span> Career Opportunities
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
            <li>Computer Operator</li>
            <li>Office Assistant</li>
            <li>Data Entry Operator</li>
            <li>Foundation for Web, Graphic & IT Courses</li>
            <li>Essential skill for every profession</li>
          </ul>
        </div>

        {/* Lessons */}
        <div>
          <h2 className="text-3xl font-serif text-red-600 font-bold mb-6">
            Video Lessons
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition"
              >
                <h3 className="font-semibold text-xl mb-3">
                  {index + 1}. {lesson.title}
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={lesson.url}
                    title={lesson.title}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-10">
          <EndCourse />
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-10">
       <Footer/>
      </footer>
    </section>
  );
}
