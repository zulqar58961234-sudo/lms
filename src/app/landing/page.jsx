import Link from "next/link";

export default function LandPage() {
  return (
    <main>
      <title>Skill Verge</title>
      <section className="min-h-screen w-full overflow-x-hidden relative">
      {/* Background Image */}
      <img
        src="/hj.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1] brightness-90"
      />

      {/* Navbar */}
      <nav className="h-[70px] w-full flex items-center px-4 sm:px-8">
        <p className="text-4xl sm:text-5xl font-serif font-bold text-red-600">
          S<span className="text-xl sm:text-2xl text-black">KILL</span>
          V<span className="text-xl sm:text-2xl text-black">ERGE</span>
          <span className="text-yellow-500">*</span>
        </p>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8">
        
        {/* Text Section */}
        <div className="lg:ml-5 max-w-2xl">
          <h1 className=" sm:text-4xl lg:text-5xl font-bold leading-snug">
            Empowering <span className="text-yellow-500">Legal</span> <br /> Minds
            Through Interactive <br /> Online Education.
          </h1>

          <p className="text-xs sm:text-sm font-semibold lg:ml-5 text-gray-600 font-mono mt-4">
            We offer specialized courses designed by top legal experts, focusing
            on practical skills and real-world application. Our mission is to
            cultivate the next generation of legal innovators by providing access
            to world-class, flexible educational resources from anywhere.
          </p>

          <Link
            href="/login"
            className="bg-red-500 lg:ml-20 rounded-3xl px-6 py-3 text-white font-bold inline-block mt-8 hover:bg-yellow-500 duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end w-full">
          <img
            className="h-[300px] sm:h-[400px] lg:h-[550px] w-auto"
            src="/pp.png"
            alt=""
          />
        </div>

      </div>
    </section>
    </main>
  );
}
