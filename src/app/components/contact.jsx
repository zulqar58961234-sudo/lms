import React from 'react';
import Link from 'next/link';

const ContactUsAccurate = () => {
    return (
        <section className="relative overflow-x-hidden">
            <div className=" mx-auto">
               <div className='ml-60 max-w-4xl'>
                 {/* === Header === */}
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-2">
                    Any Queries
                </h2>
                <p className="text-xl text-center text-gray-700 mb-12">
                    Any questions or remarks? Just write us a message!
                </p>

                {/* === Form === */}
                <form className="mb-16">
                    <div className="flex flex-col sm:flex-row gap-8 mb-8">
                        {/* Email Field */}
                        <div className="flex-1">
                            <label htmlFor="email" className="block  text-gray-700 text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter a valid email address"
                                // Styling for light background and rounded pill shape
                                className="w-full shadow-lg shadow-gray-300 bg-gray-200 px-5 py-3 border-none rounded-full"
                             
                            />
                        </div>
                        
                        {/* Name Field */}
                        <div className="flex-1">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Your Name"
                                // Styling for light background and rounded pill shape
                                className="w-full shadow-lg bg-gray-200 shadow-gray-300 px-5 py-3 border-none rounded-full"
                                
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="text-white cursor-pointer shadow-lg shadow-gray-500 bg-black font-bold py-3 px-16 rounded-full transition duration-300 ease-in-out hover:bg-gray-700">
                            SUBMIT
                        </button>
                    </div>
                </form>
               </div>
</div>
<div className="min-h-screen  bg-gradient-to-b from-white to-[#0a0a0a] mt-20 flex justify-center pt-20 font-sans">
      <div className="relative bg-gray-300 h-[300px] w-[1300px] shadow-lg shadow-black-600 text-center p-10 pt-16 rounded-sm">
        
        {/* ICON CIRCLE */}
       <div className='flex  flex-row gap-30 ml-10'>
         
     <div className='h-[200px] w-[300px] mt-5'>
        <div className="w-25 h-25 bg-red-500 flex text-center justify-center items-center rounded-full
                        absolute -top-10 ml-25 text-white text-4xl shadow-md">
          <i className="fa-solid fa-person-running text-5xl"></i>
        </div>
        <h3 className="text-black font-bold text-lg mb-2">WHY CHOOSE US?</h3>
        <p className="text-black">• Fast Service<br />• Guaranteed Results</p>• Our team focuses on quality and customer satisfaction.
     </div>


     <div className='h-[200px] w-[300px] mt-5'>
        <div className="w-25 h-25 bg-red-500 flex text-center justify-center items-center rounded-full
                        absolute -top-10 ml-25 text-white text-4xl shadow-md">
          <i className="fa-solid fa-globe text-5xl"></i>
        </div>
        <h3 className="text-black font-semibold text-lg mb-2">COMMUNICATE WITH US</h3>
        <p className="text-black"><Link href="" className="fa-brands fa-square-instagram  font-bold text-black"></Link> Instagram
        <br />
        <Link href="" className="fa-brands fa-square-facebook font-bold text-black mt-2 "></Link> Facebook</p>
        <Link href="" className="fa-brands fa-youtube font-bold text-black mt-2"></Link> Youtube <br />
        <Link href="" className="fa-brands fa-tiktok font-bold text-black mt-2"></Link> TikTok
     </div>



     <div className='h-[200px] w-[300px] mt-5'>
        <div className="w-25 h-25 bg-red-500 flex text-center justify-center items-center rounded-full
                        absolute -top-10 ml-25 text-white text-4xl shadow-md">
          <i className="fa-solid fa-person-running text-5xl"></i>
        </div>
        <h3 className="text-black font-semibold text-lg mb-2">HEAD OFFICE</h3>
        <p className="text-black">• DHA Phase 2<br />• Mars</p>• Mon – Fri: 9:00 AM – 6:00 PM
     </div>


     

         
       </div>
      </div>
    </div>
               
        </section>
         
    );
};

export default ContactUsAccurate;