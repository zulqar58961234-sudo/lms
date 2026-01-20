 "use client";
import { useState } from "react";
import { User, Mail, Lock, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";
import NavBar from "../components/Navbar";
import { DataUpdate } from "../actions/update";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/footer";
import { StuUpdate } from "../operations/update";


export default function EditProfilePage({data}) {

  return (
   <section className="h-full w-full overflow-x-hidden scroll-smooth ">
    <title>Update Account Info - Skill Verge</title>
  <div>
      <NavBar/>
    <div className="relative w-full h-[450px] bg-black flex items-center justify-center text-center overflow-hidden">     
     <div className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled bg-[url('/ml.jpg')] mt-15"></div>
      <div className="absolute inset-0 bg-black/70"></div>
       <ParticlesBackground/>
        <div className="relative z-10 text-white">
         <h1 className="text-5xl font-bold">* Update Account Info *</h1>
          <p className="mt-2 text-sm"><Link href="/home">Home</Link> / Profile</p>
           </div>
            </div>
             </div>
<div className="w-full ">
  <div className="mx-auto max-w-4xl px-6">
    <div className="rounded-3xl bg-white p-10">

      {/* Accent Line */}
      <div className="mb-6 h-1 w-20 ml-85 rounded-full bg-red-600"></div>

      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-gray-900">
        Manage Your Account Settings
      </h2>

      {/* Description */}
      <p className="mx-auto mt-10 max-w-3xl text-center text-4sm  leading-relaxed text-gray-600">
        This page allows you to update and manage your personal account
        information. Keeping your profile details accurate helps us deliver
        a secure, personalized, and seamless experience across the Skill Verge
        platform.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-center text-4sm leading-relaxed text-gray-600">
        You can change your name, update your email address, or set a new
        password whenever needed. Please review your information carefully
        before saving your changes. For better security, we recommend updating
        your password regularly.
      </p>

      {/* Info Box */}
      <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-gray-50 px-5 py-4 text-center text-3sm text-gray-500">
        💡 Your updated information will be applied instantly after saving.
      </div>

    </div>
  </div>
</div>


    <div className="mx-auto max-w-3xl px-8 pt-20">

      {/* FORM CARD */}
      <div className="rounded-3xl bg-white p-10 shadow-md">

        <h2 className="mb-8 text-2xl font-bold text-gray-800">
          Update Your Account Info
        </h2>
     <form
  onSubmit={HandleSubmit}
  className="flex flex-col gap-8 px-2"
>
  {/* NAME */}
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-gray-600">
      Full Name
    </label>
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:border-red-500">
      <User size={18} className="text-gray-400" />
      <input
        value={name}
        onChange={(e) => Setname(e.target.value)}
        placeholder="Enter your full name"
        className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-400"
      />
    </div>
  </div>

  {/* EMAIL */}
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-gray-600">
      Email Address
    </label>
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:border-red-500">
      <Mail size={18} className="text-gray-400" />
      <input
        value={email}
        onChange={(e) => Setemail(e.target.value)}
        placeholder="Enter new email"
        className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-400"
      />
    </div>
  </div>

  {/* PASSWORD */}
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-gray-600">
      New Password
    </label>
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:border-red-500">
      <Lock size={18} className="text-gray-400" />
      <input
        type="password"
        value={password}
        onChange={(e) => Setpassword(e.target.value)}
        placeholder="Enter new password"
        className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-400"
      />
    </div>
  </div>

  {/* MESSAGE */}
  {message && (
    <p className="rounded-xl bg-red-50 px-4 py-2 text-center text-sm font-medium text-red-600">
      {message}
    </p>
  )}

  {/* SAVE BUTTON */}
  <button
    type="submit"
    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-red-600 py-4 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95"
  >
    <Save size={16} />
    Save Changes
  </button>
</form>


        {/* ACTION BUTTONS */}
        <div className="mt-10 flex items-center justify-between">

          <Link
            href="/profile"
            className="flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          

        </div>
      </div>
     
    </div>
     <div className="pt-27">
        <Footer/>
      </div>
</section>

  );
}

/* ================= COMPONENT ================= */

function EditField({ icon, label, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-gray-500">
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
        <span className="text-gray-400">{icon}</span>

        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}
