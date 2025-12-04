"use client";

import { 
  BookOpen, 
  Clock, 
  Award, 
  Layers, 
  Globe2, 
  PlayCircle, 
  TrendingUp, 
  UserCheck 
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "( Learn Anytime, Anywhere )",
      description:
        "Access your courses 24/7 from any device. Learn at your pace and build skills without changing your schedule."
    },
    {
      icon: Globe2,
      title: "( Global-Standard Content )",
      description:
        "Get top-quality lessons designed by industry experts and global professionals at your fingertips."
    },
    {
      icon: Layers,
      title: "Structured Step-by-Step Learning",
      description:
        "Our courses are designed in clear levels so you never feel lost. Every module builds on the previous one."
    },
    {
      icon: PlayCircle,
      title: "( Interactive Learning )",
      description:
        "Engage with videos, quizzes, assignments, and real-world case studies crafted to boost understanding."
    },
    {
      icon: Award,
      title: "( Earn Recognized Certificates )",
      description:
        "Show your achievements with shareable certificates—perfect for LinkedIn, resumes, and job applications."
    },
    {
      icon: TrendingUp,
      title: "( Always Updated )",
      description:
        "Our content evolves with industry trends, ensuring you always learn the latest tools and strategies."
    },
    {
      icon: UserCheck,
      title: "( Learn From Experts )",
      description:
        "Guidance from professionals who have real experience—not generic or outdated knowledge."
    },
    {
      icon: BookOpen,
      title: "( Lifetime Access )",
      description:
        "Revisit lessons anytime—even after completion. Enjoy lifelong access to all updates and materials."
    },
  ];

  return (
    <section className="bg-white overflow-x-hidden text-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center p-2 lg:text-5xl md:text-3xl  font-bold mb-14 bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
          <span className="text-yellow-500 font-bold">• </span>Why Choose Our Digital Courses?<span className="text-yellow-500 font-bold"> •</span> 
        
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group  rounded-2xl p-[2px] shadow-xl hover:shadow-gray-600/20 transition-all duration-300"
              >
                <div className="bg-gray-100 rounded-2xl p-6 h-full group-hover:bg-gray-850 transition">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg group-hover:scale-110 transition duration-300">
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-800 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
