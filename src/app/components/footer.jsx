import { FaBook, FaLaptopCode, FaChalkboardTeacher, FaHeadset, FaShieldAlt, FaInfoCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 pt-16 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND AREA */}
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight font-serif">
              <span className="text-red-500">S<span className="text-xl text-white">KILL</span>V</span><span className="text-xl">ERGE</span><span className="text-yellow-400">*</span>
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Smart learning for modern students. Explore courses, follow roadmaps,
              earn certificates, and grow your career.
            </p>
            <div className="flex gap-4 mt-6">
              <span className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">🌐</span>
              <span className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">📘</span>
              <span className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">💼</span>
            </div>
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-3 text-gray-400 text-sm">

              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaLaptopCode className="text-blue-400" />
                Programming
              </li>

              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaBook className="text-green-400" />
                Academics
              </li>

              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaChalkboardTeacher className="text-purple-400" />
                Skill Development
              </li>

              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaShieldAlt className="text-red-400" />
                Cyber Security
              </li>

            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">All Courses</li>
              <li className="hover:text-white cursor-pointer">Certificates</li>
              <li className="hover:text-white cursor-pointer">Learning Paths</li>
              <li className="hover:text-white cursor-pointer">Workshops</li>
              <li className="hover:text-white cursor-pointer">Exams & Quizzes</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400 text-sm">

              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaHeadset className="text-yellow-300" />
                Help Center
              </li>

              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaInfoCircle className="text-orange-400" />
                Contact Support
              </li>

              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Technical Support</li>
              <li className="hover:text-white cursor-pointer">Student Community</li>

            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-14 pt-6"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} LMS Platform. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-white cursor-pointer">Privacy Policy</a>
            <a className="hover:text-white cursor-pointer">Terms of Service</a>
            <a className="hover:text-white cursor-pointer">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
