"use client";

import Link from "next/link";
import { useEffect } from "react";
import NavBar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import BenefitsSection from "../components/enroll";
import EnrollForm from "../components/signup";
import Footer from "../components/footer";

export default function JoinClient() {

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
          "to-red-600"
        );
      }
    });
  }, []);

  return (
    <section className="h-full w-full overflow-x-hidden scroll-smooth">
      <NavBar />

      {/* HERO */}
      <div className="relative w-full h-[450px] bg-black flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center clip-angled bg-[url('/xx.webp')]"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <ParticlesBackground />

        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold">Enroll Now</h1>
          <p className="mt-2 text-sm">
            <Link href="/home">Home</Link> / Join
          </p>
        </div>
      </div>

      <BenefitsSection />
      <EnrollForm />
      <Footer />
    </section>
  );
}
