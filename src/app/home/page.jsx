"use client";
import "font-awesome/css/font-awesome.min.css";
import { useEffect } from "react";
import Link from "next/link";
import FooterSec from "../components/footer";
import NavBar from "../components/Navbar";

export default function Homepage() {

  return (
<section className="overflow-x-hidden scroll-smooth">
  <title>Home - Skill Verge</title>
  <div className="h-[500px] w-screen relative">
{/* NAVBAR */}
<NavBar/>

{/* HERO SECTION */}
  <div className="flex flex-row">
  <div className="text-white font-bold h-[100px] w-[400px] mt-60 text-4xl ml-10 flex flex-col gap-2">
  <p>Unlock your <span className="text-yellow-500">potential</span></p>
  <p>with impactful courses</p>
  <p>and accredited <span className="text-yellow-500">programs.</span></p>
  </div>

  <form className="bg-white h-[390px] w-[450px] rounded-md mt-40 ml-80 mr-30 text-sm shadow-xl">
  <p className="text-md flex justify-center text-gray-500 font-semibold mt-3">Send your queries</p>
  <p className="text-3xl flex justify-center text-black font-bold">Get in Touch!</p>
  <div className="mt-5 flex flex-col gap-2 ml-5">

  <input
  type="text"
  placeholder="Your Name *"
  className="border border-gray-300 rounded-md h-[30px] w-[397px] ml-1 px-3 py-5 text-sm text-gray-700 shadow-sm resize-none"
          
  />
          
  <input
  type="email"
  placeholder="Your Email *"
  className="border border-gray-300 rounded-md h-[30px] w-[397px] ml-1 px-3 py-5 text-sm text-gray-700 shadow-sm resize-none"
          
  />
          
  <input
  type="number"
  placeholder="Phone *"
  className="border border-gray-300 rounded-md h-[30px] w-[397px] ml-1 px-3 py-5 text-sm text-gray-700 shadow-sm resize-none"
          
  />
          
  <textarea
  name="message"
  rows="4"
  placeholder="Your Message *"
  className="h-[70px] w-[397px] ml-1 rounded-md border border-gray-300 px-3 py-3 text-sm text-gray-700 shadow-sm resize-none"
          
  ></textarea>
          
  <button
  type="submit"
  className="bg-red-500 h-[40px] ml-1 w-[397px] rounded-lg text-white font-bold"
          
  >
  Submit Message
          
  </button>
  </div>
  </form>
  </div>

  <img
  src="/9.jpg"
  alt="Background"
  className="absolute inset-0 w-full h-[800px] object-cover z-[-1] brightness-60"
  style={{ imageRendering: "crisp-edges" }}
  />
  </div>
  {/* Gradient Info Section */}
  <div className="h-[180px] w-screen bg-gradient-to-r from-pink-600 to-orange-500 mt-60">
  <div className="flex flex-row items-center mt-4 py-2 gap-40 ml-25">
  <div className="ml-5 text-white ">
  <i className="fa-solid fa-book text-4xl ml-10"></i>
  <p className="ml-10 text-2xl font-bold">20K + Courses</p>
  <p className="mt-2 ml-10 font-semibold">
  Learn from world-class instructors <br /> at your own pace.
  </p>
  </div>

  <div className="text-white h-[150px] w-[200px] mt-3">
  <i className="fa-solid fa-chalkboard-user text-4xl"></i>
  <p className="text-2xl font-bold">Expert Instructor</p>
  <p className="mt-2 font-semibold">
  Learn directly from skilled professionals with real-world experience.
  </p>
  </div>

  <div className="text-white h-[150px] w-[200px] mt-3">
  <i className="fa-solid fa-user-clock text-4xl"></i>
  <p className="text-2xl font-bold">Lifetime Access</p>
  <p className="mt-2 font-semibold">
  Get unlimited access to all your courses anytime you want.
  </p>
  </div>
  </div>
  </div>
{/* Cor */}

 <div className="text-center my-10 mt-20">
  <div className="w-50 h-2 bg-red-400 mx-auto mb-3 rounded-full"></div>
  <h2 className="text-2xl font-bold text-black">Explore 1350+ Courses Within Subject</h2>
  </div>
{/*  Courses  */}
       <div className="h-[450px] w-full py-5 ml-5">
  <div className="mt-5 h-[410px] w-full flex flex-row gap-6 ml-30 text-white">
  <div className="bg-red-400 h-[350px] w-[250px] shadow-lg resize-none cursor-pointer  rounded-4xl transition-transform duration-400 hover:scale-105">
  <i className="bg-white/20 p-3 rounded-lg fa-solid fa-flask-vial p-5 mt-10 text-5xl ml-20"></i>
  <p className="mt-15 text-3xl ml-19 font-bold">Science</p>
  <p className="mt-10 text-md ml-19 font-semibold bg-black/25 p-1 w-[100px] text-center rounded-4xl">16 Courses</p>
  </div>

  <div className="bg-green-400 h-[350px] w-[250px] shadow-lg cursor-pointer rounded-4xl  transition-transform duration-400 hover:scale-105">
  <i className="bg-white/20 p-3 rounded-lg fa-solid fa-business-time p-5  mt-10 text-5xl ml-20"></i>
  <p className="mt-15 text-3xl ml-19 font-bold">Business</p>
  <p className="mt-10 text-md ml-19 font-semibold bg-black/25 p-1 w-[100px] text-center rounded-4xl">25 Courses</p>
  </div>

  <div  className="bg-blue-400 h-[350px] w-[250px] shadow-lg cursor-pointer rounded-4xl  transition-transform duration-400 hover:scale-105">
  <i className="bg-white/20 p-3 rounded-lg fa-solid fa-pen-to-square p-5 text-center mt-10 text-5xl ml-20"></i>
  <p className="mt-15 text-3xl ml-10 font-bold">development</p>
  <p className="mt-10 text-md ml-19 font-semibold bg-black/25 p-1 w-[100px] text-center rounded-4xl">28 Courses</p>
  </div>

  <div className="bg-yellow-400 h-[350px] w-[250px] shadow-lg cursor-pointer rounded-4xl  transition-transform duration-400 hover:scale-105">
  <i className="bg-white/20 p-3 rounded-lg fa-solid fa-hand-holding-medical p-5 mt-10 text-5xl ml-20"></i>
  <p className= "mt-15 text-3xl ml-19 font-bold">Health</p>
  <p className="mt-10 text-md ml-19 font-semibold bg-black/25 p-1 w-[100px] text-center rounded-4xl">28 Courses</p>
  </div>


  </div>
  </div>
{/*  All Courses  */}
  <div className="text-center my-10 mt-20">
  <div className="w-50 h-2 bg-red-400 mx-auto mb-3 rounded-full"></div>
  <h2 className="text-3xl font-bold text-black">Browse Our Top Courses</h2>
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

  {/* 3 div sec */}
<div
  className="mt-20 relative h-[400px] text-center text-4xl font-bold text-white bg-fixed bg-cover"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.582), rgba(0, 0, 0, 0.829)), url('vb.webp')",
  }}
>
  <div className="p-30">
    <p>
      Get quality education with{" "}
      <span className="text-yellow-400">Skill Verge</span>
    </p>
    <p className="text-sm font-semibold mt-6">
      You can start or finish one of these popular courses in under a day
    </p>
    <div className="flex items-center justify-center cursor-pointer duration-300 hover:bg-yellow-500 bg-red-500 h-[55px] w-[55px] ml-130 mt-10 rounded-full">
      <a
        className="fa-solid fa-play text-sm flex justify-center relative"
        href=""
      ></a>
    </div>
  </div>
</div>

{/* Information */}
<div className="flex flex-row justify-center h-[620px] w-full mt-30">
  <div className="h-[550px] w-[600px]">
    <img
      className="h-[450px] mt-10 ml-10 object-cover"
      src="bj.jpeg"
      alt=""
    />
  </div>

  <div className="h-[550px] w-[600px]">
    <div className="bg-red-500 w-30 h-1 mt-25 ml-5 mb-3 rounded-full"></div>
    <p className="text-3xl font-bold ml-4">
      For Professional Development Report ,<br />
      Carrer Benifits
    </p>
    <p className="text-sm font-semibold text-gray-400 mt-10 ml-4">
      you can start or finish one of these popular courses in under a day - for
      fee
    </p>
    <p className="text-sm font-semibold text-gray-400 mt-1 ml-5">
      Check out the course below..Take the course for free
    </p>
    <p className="text-sm font-semibold text-gray-400 mt-7 ml-5">
      <i className="fa-solid fa-check text-black font-bold"></i> Get unlimited
      access to our 4,000+ of out top courses.
    </p>
    <p className="text-sm font-semibold text-gray-400 mt-3 ml-5">
      <i className="fa-solid fa-check text-black font-bold"></i> the top variety
      of fresh topics.
    </p>
    <p className="text-sm font-semibold text-gray-400 mt-3 ml-5">
      <i className="fa-solid fa-check text-black font-bold"></i> Find the right
      instrutor for you.
    </p>
  </div>
</div>
<FooterSec/>



    </section>
  );
}
