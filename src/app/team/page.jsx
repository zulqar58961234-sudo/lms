"use client"
import NavBar from "../components/Navbar"
import ParticlesBackground from "../components/ParticlesBackground"
import { useState } from "react";
import TeamSection from "../components/team";
import FooterSec from "../components/footer";

export default function TeamPage() {
  
    return(
<section  className=" w-full relative scroll-smooth scroll-smooth">
   <title>Team - Skill Verge</title>
<div>
<NavBar/>
<div className="relative w-full h-[450px] flex items-center justify-center text-center overflow-hidden">     
<div className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled mt-5 bg-[url('/cc.webp')]"></div>
<div className="absolute inset-0 bg-black/70"></div>
<ParticlesBackground />
<div className="relative z-10 text-white">
  <h1 className="text-5xl font-bold">Our Team</h1>
  <p className="mt-2 text-sm">Home / Team Page</p>
</div>
</div>
</div>
<TeamSection/>
<div className="py-20 mt-10 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

    {/* Left Text Section */}
    <div>
      <h2 className="text-5xl font-bold text-gray-900">
        We’re Also <span className="text-red-600">Hiring!</span>
      </h2>

      <p className="mt-4 text-gray-600 text-xl">
        Join our mission to make quality education accessible for everyone.
        We're looking for passionate instructors, designers, and developers
        to help grow our learning community.
      </p>

      <button className="mt-6 px-8 py-3 bg-gray-600 text-white rounded-xl font-medium duration-300 hover:bg-red-500 transition-all">
        Apply Now
      </button>
    </div>

    {/* Right Image */}
    <div>
      <img
        src="io.jpg"
        alt="Hiring"
        className="w-full rounded-2xl shadow-lg"
      />
    </div>

  </div>
</div>
<div className="py-20  text-white text-center">
  <div className="max-w-3xl mx-auto p">
    
    <h2 className="text-4xl text-black  font-bold">
      Thanks for <span className="text-red-600">Trusting Us</span>
    </h2>

    <p className="mt-4 text-lg text-gray-900 font-mono mt-10" >
      We are grateful to have you as part of our learning community.
      Your trust motivates us to bring better courses, better features,
      and a better future for your education.
    </p>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
        <h3 className="text-3xl font-bold text-red-600">10k+</h3>
        <p className="text-gray-900 mt-1 font-semibold font-serif">Active Students</p>
      </div>

      <div className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
        <h3 className="text-3xl font-bold text-red-600">25+</h3>
        <p className="text-gray-900 mt-1 font-semibold font-serif">Teachers</p>
      </div>

      <div className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
        <h3 className="text-3xl font-bold text-red-600">98%</h3>
        <p className="text-gray-900 mt-1 font-semibold font-serif">Student Satisfaction</p>
      </div>
    </div>
  </div>
</div>
<FooterSec/>







 

</section>
    
)}