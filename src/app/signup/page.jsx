"use client";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { redirect } from "next/navigation";
import SignUp from "../actions/signup";

export default function SignUpPage() {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [message, Setmessage] = useState("");
  const [loading, Setloading] = useState("");

  async function HandleSubmit(e) {
    e.preventDefault();
    Setloading(true);

    const res = await SignUp({ name, email, password });
    Setmessage(res.error || res.success);
    Setloading(false);
    Setname("");
    Setemail("");
    Setpassword("");

    redirect("/login");
  }

  return (
    <main>
      <title>SignUp - Skill Verge</title>
      <section className="min-h-screen w-full overflow-x-hidden relative">
      {/* BG IMAGE */}
      <img
        src="/hj.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1] brightness-90"
      />

      {/* NAVBAR */}
      <nav className="h-[70px] w-full flex items-center px-4 sm:px-8">
        <p className="text-4xl sm:text-5xl font-serif font-bold text-red-600">
          S<span className="text-xl sm:text-2xl text-black">KILL</span>
          V<span className="text-xl sm:text-2xl text-black">ERGE</span>
          <span className="text-yellow-500">*</span>
        </p>
      </nav>

      {/* MAIN FLEX */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 sm:px-8 mt-10">

        {/* LEFT TEXT SECTION */}
        <div className="max-w-3xl lg:mt-17 mb-10 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            <span className="text-red-600"> SignUp Now </span> Your Journey <br />
            To Professional Mastery <br /> Begins Now.
          </h1>

          <p className="text-gray-600 text-sm sm:text-md font-semibold mt-6">
            "
            <span className="text-black">Ignite Your Future:</span> Secure your
            place instantly by completing our quick, <br /> streamlined registration.
            You're just moments away from unlocking the full <br /> suite of expert-led
            courses designed to turn your aspirations into achievements."
          </p>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="
          w-full 
          sm:w-[400px]
          md:w-[450px]
          lg:w-[450px] 
          bg-white 
          rounded-3xl 
          shadow-xl shadow-gray-600  
          p-7 
  
           lg:right-23
           lg:h-[600px]
          lg:absolute 
          lg:mt-5
          lg:top-0
        ">
          <h2 className="text-red-600 text-3xl font-bold mb-5">Create An Account</h2>

          <form onSubmit={HandleSubmit} className="space-y-4 lg:mt-10">
            <input
              onChange={(e) => Setname(e.target.value)}
              value={name}
              type="text"
              placeholder="First Name"
              required
              className="w-full p-3 rounded-md text-black shadow-lg border border-gray-200"
            />

            <input
              type="email"
              onChange={(e) => Setemail(e.target.value)}
              value={email}
              placeholder="Email"
              required
              className="w-full p-3 rounded-md text-black shadow-lg border border-gray-200"
            />

            <input
              type="password"
              onChange={(e) => Setpassword(e.target.value)}
              value={password}
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
              className={`w-full bg-red-600 hover:bg-gray-700 transition py-3 rounded-md text-white font-semibold disabled:opacity-60
                ${loading ? "cursor-not-allowed" : "cursor-pointer"}
              `}
            >
              {loading ? "creating account..." : "Create Account"}
            </button>

            {message && <p className="text-center text-black">{message}</p>}

            <p className="text-gray-500 text-center">
              Already have an account?
              <a href="/login" className="text-red-600 font-semibold ml-1">
                LogIn
              </a>
            </p>
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
          </form>

          
          

        </div>

      </div>
    </section>
    </main>
  );
}
