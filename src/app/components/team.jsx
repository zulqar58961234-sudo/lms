"use client";
import { useState } from "react";

const tabs = [
    "All",
  "Client Services",,
  "Development",
  "Marketing & Sales",
  "Designers",
  
];

const teamMembers = [
  {
    name: "Babar Azam",
    role: "Professional Web Developer",
    img: "/team1.jpeg",
    category: "Development",
  },
  {
    name: "Amir Khan",
    role: "Coder",
    img: "/team2.jpg",
    category: "Development",
  },
  {
    name: "Ali",
    role: "UI Expert",
    img: "/team3.jpeg",
    category: "Designers",
  },
  {
    name: "Hania Amir",
    role: "Graphic Designer",
    img: "/team4.jpg",
    category: "Designers",
  },
  {
    name: "Humaira Asghar (Marhoom)",
    role: "Digital Marketer",
    img: "/team5.png",
    category: "Marketing & Sales",
  },
  {
    name: "Abdullah",
    role: "E-Commerse",
    img: "/team6.avif",
    category: "Client Services",
  },
];

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredMembers =
    activeTab === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.category === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto mt-20 py-16 px-4">
      <h1 className="text-center text-5xl font-semibold mb-10">
        Meet Our <span className="text-black text-red-600 font-semibold">Staff.</span>
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition 
              ${
                activeTab === t
                  ? "bg-red-500 text-white border-black-500"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredMembers.map((member, idx) => (
          <div key={idx} className="text-center">
            <div className="w-32 h-32 mx-auto mb-4">
              <img
                src={member.img}
                alt=""
                className="w-full h-full object-cover rounded-full border-4 border-gray-200 shadow"
              />
            </div>
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
