import React, { useState } from 'react';

const categories = [
  {
    label: "Languages",
    color: "from-yellow-400 to-yellow-600",
    accent: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5",
    skills: ["JavaScript", "Solidity", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    color: "from-sky-400 to-sky-600",
    accent: "text-sky-400",
    border: "border-sky-400/20",
    bg: "bg-sky-400/5",
    skills: ["React.js", "Next.js", "Flutter", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "from-green-400 to-green-600",
    accent: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    label: "Databases",
    color: "from-emerald-400 to-emerald-600",
    accent: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    skills: ["PostgreSQL", "MongoDB", "CouchDB"],
  },
  {
    label: "Blockchain",
    color: "from-purple-400 to-purple-600",
    accent: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
    skills: ["Ethereum", "Hardhat", "Ethers.js", "Solidity", "Hyperledger Fabric", "dApps"],
  },
  {
    label: "Tools & Others",
    color: "from-fuchsia-400 to-fuchsia-600",
    accent: "text-fuchsia-400",
    border: "border-fuchsia-400/20",
    bg: "bg-fuchsia-400/5",
    skills: ["Git", "Docker", "Postman", "Figma", "Molecular.js", "API Integration"],
  },
];

const Skills = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="bg-[#07071a] text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-yellow-400 uppercase">What I Know</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-3 bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">Technologies and tools I work with across the stack.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`rounded-2xl border ${cat.border} ${cat.bg} p-6 hover:border-opacity-60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-1 h-5 rounded-full bg-gradient-to-b ${cat.color}`} />
                <span className={`text-sm font-bold uppercase tracking-widest ${cat.accent}`}>{cat.label}</span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-white/5 border border-white/10 text-gray-300 rounded-full hover:text-white hover:border-white/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Domains */}
        <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-4">Domain Experience</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Healthcare", "Telecom", "Blockchain", "Full-Stack Development"].map(d => (
              <span key={d} className="px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-400 bg-yellow-400/5 text-sm font-medium">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
