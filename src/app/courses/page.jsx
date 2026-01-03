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

<div className="h-[700px] w-full flex justify-center items-center">
  <div className="h-[700px] w-[1200px] flex flex-col gap-5 justify-center items-center">
    {/* UPPER SECTION */}
    <div className="flex flex-row gap-20">
      {/* 1st */}
      <div className="bg-white h-[340px] w-[300px] cursor-pointer opacity-90 duration-300 hover:opacity-100 rounded-2xl shadow-md resize-none">
        <img className="rounded-2xl h-[150px] rounded-b-md brightness-80 w-full object-cover" src="t.jpg" alt="" />
        <p className="text-xl font-bold mt-4 ml-4">Learn Basic HTML for begginers</p>
       <div className="text-sm text-gray-800 ml-4 mt-3">
 <p><i className="fa-solid fa-check text-black font-bold"></i> Learn the basics of HTML from scratch</p>
         <p><i className="fa-solid fa-check text-black font-bold"></i> Understand the structure of a web page</p>
          <p><i className="fa-solid fa-check text-black font-bold"></i> Learn how to use HTML tags and elements</p>
       </div>
 <Link className="text-black font-semibold flex rounded-lg bg-gray-300 p-2 h-[40px] w-[100px] ml-47" href="" >Learn More</Link>
      </div>

      {/* 2nd */}
      <div className="bg-white h-[340px] w-[300px] cursor-pointer rounded-2xl shadow-md resize-none opacity-90 duration-300 hover:opacity-100">
        <img className="rounded-2xl h-[150px] rounded-b-md brightness-80 w-full object-cover" src="z.jpg" alt="" />
        <p className="text-xl font-semibold mt-3 ml-4">Learn JAVA SCRIPT for begginers</p>
     
       <div className="text-sm text-gray-800 ml-4 mt-3">
 <p><i className="fa-solid fa-check text-black font-bold"></i> Learn JavaScript basics from scratch</p>
         <p><i className="fa-solid fa-check text-black font-bold"></i> Learn variables, functions, and conditions</p>
          <p><i className="fa-solid fa-check text-black font-bold"></i> Build simple and interactive projects</p>
       </div>
       <Link className="text-black font-semibold flex rounded-lg bg-gray-300 p-2 h-[40px] w-[100px] ml-47" href="" >Learn More</Link>
       </div>
    </div>

    {/* LOWER SECTION */}
    <div className="flex flex-row gap-20">
      {/* 3rd */}
      <div className="bg-white h-[340px] w-[300px] cursor-pointer rounded-2xl shadow-md resize-none opacity-90 duration-300 hover:opacity-100">
        <img className="rounded-2xl h-[150px] rounded-b-md brightness-80 w-full object-cover" src="tt.jpg" alt="" />
        <p className="text-xl font-semibold mt-3 ml-4">Learn Basics of Digital Marketing</p>
        <div className="text-sm text-gray-800 ml-4 mt-3">
 <p><i className="fa-solid fa-check text-black font-bold"></i> Understand how online marketing works</p>
         <p><i className="fa-solid fa-check text-black font-bold"></i> Learn SEO, and content marketing</p>
          <p><i className="fa-solid fa-check text-black font-bold"></i> Promote products and services online</p>
       </div>
       <Link className="text-black font-semibold flex rounded-lg bg-gray-300 p-2 h-[40px] w-[100px] ml-47 duration-300 hover:bg-gray-600" href="" >Learn More</Link>
      </div>

      {/* 4th */}
      <div className="bg-white h-[340px] w-[300px] cursor-pointer rounded-2xl shadow-md resize-none opacity-90 duration-300 hover:opacity-100">
        <img className="rounded-2xl h-[150px] rounded-b-md brightness-80 w-full object-cover" src="v.jpg" alt="" />
  
        <p className="text-xl font-semibold mt-3 ml-4">Learn Freelancing for Beginners</p>
         <div className="text-sm text-gray-800 ml-4 mt-3">
 <p><i className="fa-solid fa-check text-black font-bold"></i> Start earning online with your skills</p>
         <p><i className="fa-solid fa-check text-black font-bold"></i> Find clients and projects online</p>
          <p><i className="fa-solid fa-check text-black font-bold"></i> No prior experience required</p>
       </div>
       <Link className="text-black font-semibold flex rounded-lg bg-gray-300 p-2 h-[40px] w-[100px] ml-47" href="" >Learn More</Link>
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