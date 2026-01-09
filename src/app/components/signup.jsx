"use client";
import { useRouter } from "next/navigation";
import { EnrollJs } from "../actions/Enroll";
import { useState } from "react";



export default function EnrollForm() {
  
const[name,Setname] = useState("")
const[age,Setage] = useState("")
const[course,Setcourse] = useState("")
const[image,Setimage] = useState("")
const[message,Setmessage] = useState("")
const router = useRouter()

async function HandleSubmit(e){
    e.preventDefault();
    if(!image){
      Setmessage("select image file")
    return;
    }
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "lms456");
      formData.append("cloud_name","da9ogi2r8");

      const response = await fetch("https://api.cloudinary.com/v1_1/da9ogi2r8/image/upload",{
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!result.secure_url){
        Setmessage("Error in image handling")
      }
    
  const res = await EnrollJs({
    course,
    age,
    image: result.secure_url
  });

  Setmessage(res.error || res.success);
   
  if(course === "Graphic Designing"){
    router.push("/dashboard")}
   }  catch (error)  {
    console.error(error)
  }}
  return (
      
    
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <title>Join Us - Skill Verge</title>
      <div className="max-w-5xl bg-gray-800 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row w-full">
        {/* Left Image Panel */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center  bg-[url('/vc.jpg')]"
          
        ></div>

        {/* Right Form Panel */}
        <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-red-500 text-3xl font-bold mb-2">
            Enter Your Details
          </h2>
          <form onSubmit={HandleSubmit} className="space-y-6">
            <div className="flex flex-col items-center mb-5">          
        </div>
        <div className="flex space-x-4">
            <input onChange={(e)=>Setimage(e.target.files[0])}
              type="file"
              accept="image/*"
              placeholder="Choose File"
              required
              className="w-full p-3 rounded-md text-black shadow-lg shadow-gray-300 border-[1px] border-gray-200"
            />
        </div>
            <div className="flex space-x-4">
              <input onChange={(e) => Setname(e.target.value)}
        value={name}
                type="text"
                name="firstName"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-md text-black shadow-lg shadow-gray-300 border-[1px] border-gray-200"
              />
            </div>

            <select onChange={(e) => Setcourse(e.target.value)}
        value={course}
              required
              className="text-gray-500 w-full p-3 rounded-md  text-black shadow-lg shadow-gray-300 border-[1px] border-gray-200"
            >
                <option value="">Select your course</option>
                <option value="Graphics Desigining">Graphics Desigining</option>
                <option value="Web Development">Web Development</option>
                <option value="E-Commerce">E-Commerce </option>
                <option value="Video Editing">Video Editing</option>

            </select>

            <input onChange={(e) => Setage(e.target.value)}
        value={age}
              type="number"
              name="age"
              placeholder="Age"
              required
              className="w-full p-3 rounded-md  text-black shadow-lg shadow-gray-300 border-[1px] border-gray-200"
            />

            <label className="flex items-center space-x-2 text-gray-500 text-sm">
              <input
                type="checkbox"
                name="agree"
                className="w-4 h-4 rounded border-gray-600 bg-gray-800 checked:bg-purple-600 checked:border-purple-600 focus:ring-0"
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
              className="w-full bg-red-600 hover:bg-gray-700 font-bold transition-colors duration-300 py-3 rounded-xl text-white disabled:opacity-90"
            >
              Enroll
            </button>
            {message}
          </form>
        </div>
      </div>
    </div>
  );
}
