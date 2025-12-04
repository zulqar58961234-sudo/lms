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
        <div className="flex flex-row">
          <img className="h-[60px] w-[60px] rounded-full object-cover mt-3 ml-2 duration-300 hover:brightness-70" src="r.jpg" alt="" />
          <p className="mt-8 text-sm ml-3 font-semibold">Ellie Clark</p>
        </div>
        <p className="text-xl font-semibold mt-3 ml-4">Learn HTML for begginers</p>
        <div className="mt-12 ml-5 flex font-semibold">
          <div className="flex flex-row gap-2 items-center">
            <i className="fa-solid fa-user"></i>
            <p>48</p>
          </div>
          <div className="flex flex-row gap-2 ml-5 items-center">
            <i className="fa-regular fa-star"></i>
            <p>3</p>
          </div>
          <p className="ml-35 text-red-600">Free</p>
        </div>
      </div>

      {/* 2nd */}
      <div className="bg-white h-[340px] w-[300px] cursor-pointer rounded-2xl shadow-md resize-none opacity-90 duration-300 hover:opacity-100">
        <img className="rounded-2xl h-[150px] rounded-b-md brightness-80 w-full object-cover" src="z.jpg" alt="" />
        <div className="flex flex-row">
          <img className="h-[60px] w-[60px] rounded-full object-cover mt-3 ml-2 duration-300 hover:brightness-70" src="bbb.jpg" alt="" />
          <p className="mt-8 text-sm ml-3 font-semibold">James Hunt</p>
        </div>
        <p className="text-xl font-semibold mt-3 ml-4">Learn JAVA SCRIPT for begginers</p>
        <div className="mt-5 ml-5 flex font-semibold">
          <div className="flex flex-row gap-2 items-center">
            <i className="fa-solid fa-user"></i>
            <p>48</p>
          </div>
          <div className="flex flex-row gap-2 ml-5 items-center">
            <i className="fa-regular fa-star"></i>
            <p>3</p>
          </div>
          <p className="ml-35 text-red-600">Free</p>
        </div>
      </div>
    </div>

    {/* LOWER SECTION */}
    <div className="flex flex-row gap-20">
      {/* 3rd */}
      <div className="bg-white h-[340px] w-[300px] cursor-pointer rounded-2xl shadow-md resize-none opacity-90 duration-300 hover:opacity-100">
        <img className="rounded-2xl h-[150px] rounded-b-md brightness-80 w-full object-cover" src="tt.jpg" alt="" />
        <div className="flex flex-row">
          <img className="h-[60px] w-[60px] rounded-full object-cover mt-3 ml-2 duration-300 hover:brightness-70" src="bb.jpg" alt="" />
          <p className="mt-8 text-sm ml-3 font-semibold">Micheal</p>
        </div>
        <p className="text-xl font-semibold mt-3 ml-4">Learn HTML for begginers</p>
        <div className="mt-12 ml-5 flex font-semibold">
          <div className="flex flex-row gap-2 items-center">
            <i className="fa-solid fa-user"></i>
            <p>48</p>
          </div>
          <div className="flex flex-row gap-2 ml-5 items-center">
            <i className="fa-regular fa-star"></i>
            <p>3</p>
          </div>
          <p className="ml-35 text-red-600">Free</p>
        </div>
      </div>

      {/* 4th */}
      <div className="bg-white h-[340px] w-[300px] cursor-pointer rounded-2xl shadow-md resize-none opacity-90 duration-300 hover:opacity-100">
        <img className="rounded-2xl h-[150px] rounded-b-md brightness-80 w-full object-cover" src="v.jpg" alt="" />
        <div className="flex flex-row">
          <img className="h-[60px] w-[60px] rounded-full object-cover mt-3 ml-2 duration-300 hover:brightness-70" src="mmm.jpg" alt="" />
          <p className="mt-8 text-sm ml-3 font-semibold">Caroline</p>
        </div>
        <p className="text-xl font-semibold mt-3 ml-4">Learn HTML for begginers</p>
        <div className="mt-12 ml-5 flex font-semibold">
          <div className="flex flex-row gap-2 items-center">
            <i className="fa-solid fa-user"></i>
            <p>48</p>
          </div>
          <div className="flex flex-row gap-2 ml-5 items-center">
            <i className="fa-regular fa-star"></i>
            <p>3</p>
          </div>
          <p className="ml-35 text-red-600">Free</p>
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