"use client";
import "font-awesome/css/font-awesome.min.css";
import { useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import StatsSection from "../components/StatsSection";
import CategoriesSection from "../components/CategoriesSection";
import Link from "next/link";
import NavBar from "../components/Navbar";
import JoinCommunity from "../components/joincommunity";
import Footer from "../components/footer";


export default function CoursesPage(){

    return(
         <section className=" w-full relative scroll-smooth scroll-smooth">
          <title>Courses - Skill Verge</title>
    {/* NAVBAR */}
  <NavBar/>
  
 <div className="relative w-full h-[450px] flex items-center justify-center text-center overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled  bg-[url('/c.jpg')]"></div>

      <div className="absolute inset-0 bg-black/70"></div>

      {/* ✅ Add Particles */}
      <ParticlesBackground />

      <div className="relative z-10 text-white">
        <h1 className="text-5xl font-bold">Courses</h1>
        <p className="mt-2 text-sm">Home / Courses Page</p>
      </div>
    </div>

    {/*  All Courses  */}
  <div className="text-center my-10 mt-20">
  <div className="w-50 h-2 bg-red-400 mx-auto mb-3 rounded-full"></div>
  <h2 id="courses" className="text-3xl font-bold text-black">Browse Our Top Courses</h2>
  <div className="flex gap-5 justify-center items-center mt-5">
  <button className="text-black border-1 border-black rounded-lg px-10 duration-300 hover:bg-gray-300  font-semibold cursor-pointer">All</button>
  <button className="text-black border-1 border-black rounded-lg px-7 duration-300 hover:bg-gray-300 font-semibold cursor-pointer">Web Development</button>
  <button className="text-black border-1 border-black rounded-lg px-7 duration-300 hover:bg-gray-300 font-semibold cursor-pointer">Graphic Designing</button>
  </div>
  </div>

{/* COURSES */}

<div className="h-auto w-full flex justify-center items-center py-10">
  <div className="w-[1200px] flex flex-col gap-10 justify-center items-center">
    
    {/* UPPER SECTION */}
    <div className="flex flex-row gap-10 flex-wrap justify-center">
      {/* 1st Card - Web Development */}
      <div className="bg-white h-[380px] w-[300px] cursor-pointer opacity-90 duration-300 hover:opacity-100 rounded-2xl shadow-md flex flex-col">
        <img className="rounded-t-2xl h-[150px] w-full object-cover brightness-90" src="t.jpg" alt="Web Development" />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <p className="text-xl font-bold mb-3">Web Development Basics</p>
          <div className="text-sm text-gray-800 flex-1">
            <p><i className="fa-solid fa-check text-black font-bold"></i> Learn HTML, CSS, JavaScript, and React fundamentals</p>
            <p><i className="fa-solid fa-check text-black font-bold"></i> Build responsive and interactive web pages</p>
            <p><i className="fa-solid fa-check text-black font-bold"></i> Create mini projects to practice real-world skills</p>
          </div>
          <Link className="text-black font-semibold flex justify-center items-center rounded-lg bg-gray-300 p-2 mt-2 hover:bg-gray-500 duration-300" href="detail">Learn More</Link>
        </div>
      </div>

      {/* 2nd Card - Graphic Designing */}
      <div className="bg-white h-[380px] w-[300px] cursor-pointer opacity-90 duration-300 hover:opacity-100 rounded-2xl shadow-md flex flex-col">
        <img className="rounded-t-2xl h-[150px] w-full object-cover brightness-90" src="tt.jpg" alt="Graphic Designing" />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <p className="text-xl font-semibold mb-3">Graphic Designing</p>
          <div className="text-sm text-gray-800 flex-1">
            <p><i className="fa-solid fa-check text-black font-bold"></i> Master design principles, color theory, and typography</p>
            <p><i className="fa-solid fa-check text-black font-bold"></i> Create logos, posters, and digital content</p>
            <p><i className="fa-solid fa-check text-black font-bold"></i> Build a portfolio of professional-quality projects</p>
          </div>
          <Link className="text-black font-semibold flex justify-center items-center rounded-lg bg-gray-300 p-2 mt-2 hover:bg-gray-500 duration-300" href="detail2">Learn More</Link>
        </div>
      </div>
    </div>

    {/* LOWER SECTION */}
    <div className="flex flex-row gap-10 flex-wrap justify-center">
      {/* 3rd Card - Video Editing */}
      <div className="bg-white h-[380px] w-[300px] cursor-pointer opacity-90 duration-300 hover:opacity-100 rounded-2xl shadow-md flex flex-col">
        <img className="rounded-t-2xl h-[150px] w-full object-cover brightness-90" src="vid.jpg" alt="Video Editing" />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <p className="text-xl font-semibold mb-3">Video Editing</p>
          <div className="text-sm text-gray-800 flex-1">
            <p><i className="fa-solid fa-check text-black font-bold"></i> Learn video cutting, trimming, and sequencing</p>
            <p><i className="fa-solid fa-check text-black font-bold"></i> Add transitions, effects, text, and motion graphics</p>
            <p><i className="fa-solid fa-check text-black font-bold"></i> Export and optimize videos for social media and web</p>
          </div>
          <Link className="text-black font-semibold flex justify-center items-center rounded-lg bg-gray-300 p-2 mt-2 hover:bg-gray-500 duration-300" href="detail3">Learn More</Link>
        </div>
      </div>

      {/* 4th Card - Basic IT */}
      <div className="bg-white h-[380px] w-[300px] cursor-pointer opacity-90 duration-300 hover:opacity-100 rounded-2xl shadow-md flex flex-col">
        <img className="rounded-t-2xl h-[150px] w-full object-cover brightness-90" src="its.png" alt="Basic IT" />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <p className="text-xl font-semibold mb-3">Basic IT</p>
          <div className="text-sm text-gray-800 flex-1">
            <p><i className="fa-solid fa-check text-black font-bold"></i> Understand computer fundamentals and operating systems</p>
            <p><i className="fa-solid fa-check text-black font-bold"></i> Learn essential software like Word, Excel, and PowerPoint</p>
            <p><i className="fa-solid fa-check text-black font-bold"></i> Gain confidence using internet, email, and basic troubleshooting</p>
          </div>
          <Link  className="text-black font-semibold flex justify-center items-center rounded-lg bg-gray-300 p-2 mt-3 hover:bg-gray-500 duration-300" href="detail4">Learn More</Link>
        </div>
      </div>
    </div>
  </div>
</div>


  <div className="h-[700px] font-serif mt-50 flex flex-row gap-20">
    <div className=" h-[500px] ml-20  w-[500px]">
<div className="max-w-2xl mx-auto mt-25 px-4">
  <h1 className="text-4xl font-bold text-gray-900 leading-snug">
    Your <span className="text-red-500">Curiosity  & <br /></span> 
    <span className="text-red-500"> Effort</span> Will Shape Your Future
  </h1>
  <p className=" mt-5  text-lg leading-relaxed">
    In our classrooms, curiosity drives creativity. When students ask
    questions and seek answers, learning becomes meaningful. Our instructors
    inspire curiosity to help you explore your true potential.
  </p>
</div>
    </div>

    <div className=" h-[550px] w-[500px] ml-20 border-r-8 border-b-8 transition-transform duration-800  hover:scale-90 rounded-3xl inset-0 bg-cover bg-center bg-[url('/mo.png')] ">
      
    </div>
  </div>
  <div className="w-50 h-2 bg-red-400 mx-auto mb-3 rounded-full"></div>
<CategoriesSection/>
<StatsSection/>
<JoinCommunity/>
<Footer/>



        </section>
    )
}