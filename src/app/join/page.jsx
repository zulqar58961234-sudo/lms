"use client";
import Link from "next/link";
import NavBar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import { useEffect } from "react";
import BenefitsSection from "../components/enroll";
import SignupForm from "../components/signup";
import Footer from "../components/footer";
import EnrollForm from "../components/signup";


export default function JoinUs(){
useEffect(() => {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll(".join-btn");

  links.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPath) {
      link.classList.add(
        "bg-gradient-to-l",
"from-red-400",
"to-red-600"
      );
    } else {
      link.classList.remove(
        "bg-gradient-to-l",
"from-red-400",
"to-black-00"
      );
    }
  });
}, []);



    return(
<section className="h-full w-full overflow-x-hidden scroll-smooth">
<title>Join Us - Skill Verge</title>   
                         {/* HEADER*/} 
<div>
    <NavBar/>
  <div className="relative w-full h-[450px] bg-black flex items-center justify-center text-center overflow-hidden">     
   <div className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled bg-[url('/xx.webp')]"></div>
    <div className="absolute inset-0 bg-black/70"></div>
     <ParticlesBackground />
      <div className="relative z-10 text-white">
       <h1 className="text-5xl font-bold">Enroll Now</h1>
        <p className="mt-2 text-sm"><Link href="/home">Home</Link> / Contact Page</p>
         </div>
          </div>
           </div>

<BenefitsSection/>
<EnrollForm/>
<Footer/>
        
</section>
    )
}