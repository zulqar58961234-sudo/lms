"use client"
import NavBar from "../components/Navbar"
import ParticlesBackground from "../components/ParticlesBackground"
import ContactUsAccurate from "../components/contact"
import Footer from "../components/footer"
export default function ContactPage() {
    return(
<section  className=" w-full relative scroll-smooth scroll-smooth">
    <title>Contact Us - Skill Verge </title>
                                      {/* Upper Section */}
<div>
  <NavBar/>
    <div className="relative w-full h-[450px] bg-black flex items-center justify-center text-center overflow-hidden">     
      <div className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled bg-[url('/xx.webp')]"></div>
        <div className="absolute inset-0 bg-black/70"></div>
          <ParticlesBackground />
            <div className="relative z-10 text-white">
              <h1 className="text-5xl font-bold">Contact Us</h1>
                <p className="mt-2 text-sm">Home / Contact Page</p>
                  </div>
                    </div>
                      </div>
                  
                                      {/* Middle Section 1 */}

<h2 className="text-5xl font-serif mt-30 font-bold text-gray-900 mb-4 text-center">
  <span  className="text-yellow-500">(</span>  Approach <span className="text-yellow-500">)</span>
    </h2>
      <p className="text-gray-600 text-center font-semibold mt-9 text-lg max-w-4xl mx-auto leading-relaxed">
        At{" "}
          <span className="font-semibold font-serif text-md text-red-500">
            Skill Verge
              </span>
                , we’re committed to helping you connect with us
                  quickly and easily. Our goal is to provide clear communication,
                  responsive support, and reliable assistance whenever you need it.
                  Whether you have questions, feedback, or require guidance, our team is here to 
                  ensure your experience is smooth, meaningful, and stress-free.
                   </p>

                                       {/* Middle Section 1 */}

<div className="py-20 mt-10 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
                                       {/* Left Text Section */}
      <div className="px-6 py-12 max-w-3xl mx-auto">
                                        {/* Header */}
          <h4 className="text-yellow-500 font-bold text-lg">Contact Us</h4>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Get In Touch With Us
              </h2>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam quis nostrud exercitation ullamco.
                   </p>

                                         {/* Middle Section 3 */}

                                         {/* Contact Items */}
  <div className="mt-10 space-y-6">
                                          {/* Location */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center">
                                          {/* Location Icon */}
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 3.05a7 7 0 119.9 9.9L10 18.9l-4.95-5.95a7 7 0 010-9.9zM10 11a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                  </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Our Location</h3>
                        <p className="text-gray-600 text-sm leading-tight">
                          99 S.t Jomblo Park Pekanbaru,
                            <br />
                               28292, Mars
                                </p>
                                 </div>
                                  </div>


                                   {/* Middle Section 4 */}
    
    
                                   {/* Phone */}
<div className="flex items-start gap-4">
  <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center">
                                   {/* Phone Icon */}
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3.5A1.5 1.5 0 013.5 2h2A1.5 1.5 0 017 3.5v1A1.5 1.5 0 015.5 6h-2A1.5 1.5 0 012 4.5v-1zM2 10.5A1.5 1.5 0 013.5 9h2A1.5 1.5 0 017 10.5v1A1.5 1.5 0 015.5 13h-2A1.5 1.5 0 012 11.5v-1zM3.5 16A1.5 1.5 0 002 17.5v1A1.5 1.5 0 003.5 20h2A1.5 1.5 0 007 18.5v-1A1.5 1.5 0 005.5 16h-2zM11 2h5a1 1 0 110 2h-5a1 1 0 110-2zM11 9h7a1 1 0 110 2h-7a1 1 0 110-2zM11 16h5a1 1 0 110 2h-5a1 1 0 110-2z" />
        </svg>
          </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Phone Number</h3>
                <p className="text-gray-600 text-sm leading-tight">
                  +62-821-4142-5850
                    </p>
                      </div>
                        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center">
            {/* Email Icon */}
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.94 6.34A2 2 0 014.7 5h10.6a2 2 0 011.76 1.34L10 10.88 2.94 6.34z" />
              <path d="M18 8.12l-8 4.8-8-4.8V14a2 2 0 002 2h12a2 2 0 002-2V8.12z" />
            </svg>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Email Address</h3>
            <p className="text-gray-600 text-sm leading-tight">
              info@skillverge9.com
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Right Image */}
    <div>
      <img
        src="bm.png"
        alt="nbbbb"
        className="w-full rounded-2xl shadow-lg shadow-gray-500"
      />
    </div>

  </div>
</div>
<ContactUsAccurate/>
   <Footer/>















</section>
    
)}