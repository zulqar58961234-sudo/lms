 "use client";
import React from "react";
import Link from "next/link";
import NavBar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import EndCourse from "../components/deletecourse";

export default function VideoEditingCourse() {
  const lessons = [
    {
      title: "CapCut Tutorial for Beginners (2026)",
      url: "https://www.youtube.com/embed/EMDrgqepVhM",
    },
    {
      title: "CapCut Video Editing Guide (Easy & Free)",
      url: "https://www.youtube.com/embed/j5_471mO14c",
    },
    {
      title: "Premiere Pro Tutorial for Beginners (Full Course)",
      url: "https://www.youtube.com/embed/xDq3ij-oHJA",
    },
    {
      title: "How to Start Video Editing from ZERO",
      url: "https://www.youtube.com/embed/g9G218IncLw",
    },
    {
      title: "Premiere Pro Basics (Step-by-Step)",
      url: "https://www.youtube.com/embed/IvwRsNroSww",
    },
    {
      title: "Free Premiere Pro Beginners Guide",
      url: "https://www.youtube.com/embed/T4T4i_IEuUk",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 text-gray-900">
      <title>Video Editing Course - Skill Verge</title>

      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/video.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <ParticlesBackground />
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-extrabold tracking-wide">
            Video Editing Course
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
            This Video Editing course uses real beginner-friendly tutorials
            from YouTube to teach you editing basics — from free tools like
            CapCut to professional tools like Adobe Premiere Pro. You'll
            learn editing workflow, trimming, transitions, audio editing,
            and how to build quality videos for YouTube, social media,
            and more.:contentReference[oaicite:1]{index=1}
          </p>
        </div>

        {/* Scope */}
        <div>
          <h2 className="text-3xl text-red-600 font-serif font-bold mb-4">
            Scope <span className="text-yellow-500">&</span> Career Opportunities
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
            <li>Video Editor for YouTube, Reels, TikTok & Social Media</li>
            <li>Freelance Video Editing (Fiverr, Upwork, etc.)</li>
            <li>Content Creator & Filmmaker</li>
            <li>Media/Marketing Agencies</li>
            <li>Editing Work for Brands & Businesses</li>
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
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 Skill Verge. All rights reserved.</p>
      </footer>
    </section>
  );
}
