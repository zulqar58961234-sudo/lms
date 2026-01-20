"use client"

import { useState } from "react"


export default function SingleData({data}){
  const [name,Setname] = useState("")
  const [course,Setcourse] = useState("")
  const [age,Setage] = useState("")
  const [image,Setimage] = useState("")
  const [message , Setmessage] = useState("")
  
  async function HandleSubmit(e){
    e.preventDefault();

    if(!image){
      Setmessage("Please select an image file")
      return;
    }
    try {
    const formData = new FormData();
    formData.append("file",image)
    formData.append("upload_preset", "lms456");
    formData.append("cloud_name","da9ogj2r8");

    const response = await fetch("https://api.cloudinary.com/v1_1/da9ogj2r8/image/upload",
      {
        method: "POST",
        boby: formData,
      }
    )
    Setmessage(res.error||res.success)
    } catch (error) {
      console.error("Something Went Wrong" , error);
      Setmessage("Something went wrong . Please try again");
    }
  }
    return(
        <section>
            <div className="max-w-5xl bg-gray-800 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row w-full">
       

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
              className="text-gray-500 w-full p-3 rounded-md text-black shadow-lg shadow-gray-300 border-[1px] border-gray-200"
            >
                <option value="">Select your course</option>
                <option value="Graphic Designing">Graphics Desigining</option>
                <option value="Web Development">Web Development</option>
                <option value="Basic IT">E-Commerce </option>
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
        </section>
    )
}