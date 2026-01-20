"use client";
import React from "react";
import Link from "next/link";
import NavBar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import EndCourse from "../components/deletecourse";
import Footer from "../components/footer";

export default function WebDevelopmentCourse() {
  const lessons = [
    { title: "Introduction to Web Development", url: "https://www.youtube.com/embed/dD2EISBDjWM" },
    { title: "HTML Basics", url: "https://www.youtube.com/embed/pQN-pnXPaVg" },
    { title: "CSS Fundamentals", url: "https://www.youtube.com/embed/yfoY53QXEnI" },
    { title: "JavaScript Basics", url: "https://www.youtube.com/embed/hdI2bqOjy3c" },
    { title: "Responsive Design & Flexbox", url: "https://www.youtube.com/embed/m4xHkrGLYKY" },
    { title: "Project: Build a Portfolio Website", url: "https://www.youtube.com/embed/xV7S8BhIeBo" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 text-gray-900">
      <title>Web Development Course - Skill Verge</title>

      {/* Header */}
      <NavBar />
      <div className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/web2.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <ParticlesBackground />
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-extrabold tracking-wide">
            Web Development Course
          </h1>
          <p className="mt-3 text-sm opacity-90">
            <Link href="/home">Home</Link> / Course
          </p>
        </div>
      </div>
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
          <h2 className="text-3xl text-red-600 font-serif font-bold mb-4">Course Overview</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            This Web Development course is designed for beginners who want to
            become professional developers. You will learn HTML, CSS, and
            JavaScript from scratch and build real-world projects. By the end of
            this course, you will have a strong foundation and a portfolio-ready
            website.
          </p>
        </div>

        {/* Scope */}
        <div>
          <h2 className="text-3xl text-red-600 font-serif font-bold mb-4">Scope <span className="text-yellow-500">&</span> Career Opportunities</h2>
          <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
            <li>Front-end Developer (React, Next.js)</li>
            <li>Freelancing & Remote Jobs</li>
            <li>Full-Stack Development Path</li>
            <li>High-demand skill in tech industry</li>
            <li>Ability to build professional websites & apps</li>
          </ul>
        </div>

        {/* Lessons */}
        <div>
          <h2 className="text-3xl font-serif text-red-600 font-bold mb-6">Video Lessons</h2>
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
      <footer className=" pt-10 ">
      <Footer/>
      </footer>
    </section>
  );
}
