"use client"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";

import LogIn from "../actions/login";
import { useRouter } from "next/navigation";

export default function LogInPage(){

const [ email , Setemail] = useState("")
const [password , Setpassword] =useState("")
const [loading , Setloading] = useState("")
const [message , Setmessage] = useState("")
const router = useRouter();

async function HandleSubmit(e) {
  e.preventDefault();
  Setloading(true) 
  const res = await LogIn({email , password})
  Setmessage(res . error || res . success)
  Setloading(false)
  Setemail("")
  Setpassword("")

 router.push("/home");

}

    return(
     
    <main>
  <title>Login - Skill Verge</title>
       <section className="min-h-screen w-full overflow-x-hidden relative">

     {/* BACKGROUND */}
     <img
       src="/hj.jpg"
       alt="Background"
       className="absolute inset-0 w-full h-full object-cover z-[-1] brightness-90"
     />

     {/* NAV */}
     <nav className="h-[70px] w-full flex items-center px-4 sm:px-8">
       <p className="text-4xl sm:text-5xl font-serif font-bold text-red-600">
         S<span className="text-xl sm:text-2xl text-black">KILL</span>
         V<span className="text-xl sm:text-2xl text-black">ERGE</span>
         <span className="text-yellow-500">*</span>
       </p>
     </nav>

     {/* MAIN LAYOUT */}
     <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 px-4 sm:px-8 mt-10">

       {/* LEFT SIDE TEXT */}
       <div className="max-w-2xl lg:mt-20 text-center lg:text-left">
         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
           <span className="text-red-600"> Welcome Back </span> LogIn <br />
           And Continue Your <br /> Journey Now.
         </h1>

         <p className="text-gray-600 text-md sm:text-md font-semibold mt-6">
           Your personalized success path is waiting. Instantly log in <br />
           to resume your course unit, access all materials, and connect <br />
           with your mentor — seamless progress awaits you.
         </p>
       </div>

       {/* FORM BOX */}
       <div className="
         w-full 
         sm:w-[400px]
         md:w-[450px]
         lg:w-[450px]
         bg-white rounded-3xl 
         shadow-xl shadow-gray-600 
         p-8 sm:p-10
        lg:absolute
         lg:top-0
         lg:right-23
         lg:mt-10

       ">
         <h2 className="text-red-600 text-4xl font-bold mb-4">
           LogIn
         </h2>

         <form onSubmit={HandleSubmit} className="space-y-6 mt-10">
            <input  
              onChange={(e)=>Setemail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-md text-black shadow-lg border border-gray-200"
            />

            <input  
              onChange={(e)=>Setpassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              required
              className="w-full p-3 rounded-md text-black shadow-lg border border-gray-200"
            />

            <label className="flex items-center space-x-2 text-gray-600 text-sm">
              <input
                type="checkbox"
                required
                className="w-4 h-4 rounded border-gray-600"
              />
              <span>
                I agree to the{" "}
                <a href="/terms" className="text-gray-800 font-semibold hover:underline">
                  terms & conditions
                </a>
              </span>
            </label>

            <button
              type="submit"
              className={`w-full bg-red-600 hover:bg-gray-700 transition-colors duration-300 py-3 rounded-md text-white font-semibold disabled:opacity-60 ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Logging In..." : "LogIn"}
            </button>

            <p className="text-gray-500 text-center">
              Create An Account?{" "}
              <a href="/signup" className="text-red-600 font-semibold">SignUp</a>
            </p>
         </form>

         <div className="my-6 flex items-center justify-center space-x-3 text-gray-500">
           <hr className="w-full border-gray-300" />
           <span className="whitespace-nowrap">Or register with</span>
           <hr className="w-full border-gray-300" />
         </div>

         <div className="flex space-x-4 justify-center">
            <button
              aria-label="Sign up with Google"
              className="flex items-center space-x-2 border border-gray-400 rounded-md px-5 py-2 hover:bg-gray-200 transition"
            >
              <FcGoogle size={20} />
              <span>Google</span>
            </button>

            <button
              aria-label="Sign up with Apple"
              className="flex items-center space-x-2 border border-gray-400 rounded-md px-5 py-2 hover:bg-gray-200 transition"
            >
              <FaApple size={20} />
              <span>Apple</span>
            </button>
         </div>

       </div>
     </div>          
</section>
    </main>
    )
}
