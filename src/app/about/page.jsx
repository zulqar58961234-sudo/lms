"use client";
import "font-awesome/css/font-awesome.min.css";
import { useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Link from "next/link";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";

export default function AboutPage() {
   useEffect(() => {
         
         // Highlight active nav link
         const currentLocation = window.location.href;
         const links = document.querySelectorAll(".nav-link");
         links.forEach((link) => {
         if (link.href === currentLocation) {
         link.classList.add("text-red-500");
         } else {
         link.classList.remove("text-red-500");
         }
         })
         })
          
return (
    <section className="h-screen w-full relative scroll-smooth">
    <title>About Us - Skill Verge</title>
    {/* NAVBAR */}
   <NavBar/> 
          
 <div className="relative w-full h-[450px] flex items-center justify-center text-center overflow-hidden">
      
      <div
        className="absolute  bg-[url('/io.jpg')] inset-0 bg-cover bg-center h-[450px] clip-angled"></div>

      <div className="absolute inset-0 bg-black/70"></div>

      {/* ✅ Add Particles */}
      <ParticlesBackground />

      <div className="relative z-10 text-white">
        <h1 className="text-5xl font-bold">About Page</h1>
        <p className="mt-2 text-sm">Home / About Page</p>
      </div>

    </div>
    

      {/* INFORMATION SECTION */}
      <div className="h-[850px] w-full mt-20 ">
        <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-gray-600 text-center font-semibold mt-4 text-lg max-w-4xl mx-auto leading-relaxed">
          At{" "}
          <span className="font-semibold font-serif text-md text-red-500">
            Skill Verge
          </span>
          , we’re redefining how people learn and teach online. Our mission is
          to make quality education accessible to everyone, anywhere, through
          interactive courses, expert instructors, and cutting-edge learning
          tools. We believe learning should be practical, inspiring, and
          future-driven.
        </p>

        <div className="flex flex-row justify-center h-[520px] w-full mt-30">
          <div className="h-[550px] w-[600px]">
            <img
              className="h-[450px] mt-10 ml-10 object-cover"
              src="qq.jpg"
              alt=""
            />
          </div>

          <div className="h-[550px] w-[600px]">
            <div className="bg-red-500 w-30 h-1 mt-25 ml-5 mb-3 rounded-full"></div>
            <h2 className="text-3xl font-bold mb-4">How It All Started</h2>
            <p className="text-gray-600 leading-relaxed">
              Skill Verge began with a simple idea — to bridge the gap between
              knowledge and opportunity. Founded by a group of educators and
              tech enthusiasts, our platform was created to help learners build
              real-world skills through flexible, hands-on courses.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              From our first few courses to a growing community of passionate
              learners and instructors, our journey has always been about one
              thing —{" "}
              <span className="font-semibold text-red-500">
                empowering growth through skill.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* CORE SECTION */}
      <div className="h-[400px] pb-0 mb-0 gap-6 text-center">
        <div className="bg-red-500 w-30 h-1 ml-155 ml-5 mb-5 rounded-full"></div>
        <h2 className="text-4xl font-bold mb-6 text-center">Our Core Values</h2>
        <div className="flex flex-row mt-20 justify-around">
          <div>
            <i className="fa-solid fa-lightbulb text-red-500 text-4xl mb-3"></i>
            <h3 className="font-semibold mb-2 text-3xl font-serif">
              Innovation
            </h3>
            <p className="text-gray-600 mx-auto text-center font-semibold">
              We continuously evolve to offer smarter learning experiences.
            </p>
          </div>
          <div>
            <i className="fa-solid fa-users text-red-500 text-4xl mb-3"></i>
            <h3 className="font-semibold mb-2 text-3xl font-serif">
              Community
            </h3>
            <p className="text-gray-600 mx-auto text-center font-semibold">
              Collaboration and peer learning are at our core.
            </p>
          </div>
          <div>
            <i className="fa-solid fa-award text-red-500 text-4xl mb-3"></i>
            <h3 className="font-semibold mb-2 text-3xl font-serif">
              Excellence
            </h3>
            <p className="text-gray-600 mx-auto text-center font-semibold">
              We set the bar high in both teaching and technology.
            </p>
          </div>
          <div>
            <i className="fa-solid fa-handshake text-red-500 text-4xl mb-3"></i>
            <h3 className="font-semibold text-3xl font-serif">Integrity</h3>
            <p className="text-gray-600 mx-auto text-center mt-2 font-semibold">
              Transparency and trust drive every decision we make.
            </p>
          </div>
        </div>
      </div>

      {/* MEMBER SECTION */}
      <div className="bg-white py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          What Our Members Say
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="p-6 shadow-md rounded-xl">
            <p className="font-semibold">Comments</p>
            <p className="italic text-gray-600">
              "An amazing platform that truly values learning!"
            </p>
            <h3 className="font-semibold mt-4">— Aisha Khan</h3>
          </div>
          <div className="p-6 shadow-md rounded-xl">
            <p className="font-semibold">Comments</p>
            <p className="italic text-gray-600">
              "The community support here is next level."
            </p>
            <h3 className="font-semibold mt-4">— Ahmed Raza</h3>
          </div>
        </div>
      </div>
<Footer/>

    </section>
  );
}