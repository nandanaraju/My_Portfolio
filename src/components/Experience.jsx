import React from 'react';

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Innovation Incubator Advisory",
    period: "Jun 2025 – Present",
    location: "Thiruvananthapuram, Kerala, India",
    type: "Full-time",
    points: [
      "Develop and maintain software solutions across healthcare and telecom domains, working with application workflows, APIs, databases, and data-processing requirements.",
      "Work with development and testing tools including Git, Postman, and database management tools as part of the software development workflow.",
    ],
    tags: ["Healthcare", "Telecom", "APIs", "Databases"],
    current: true,
  },
  {
    role: "Software Developer Intern",
    company: "Innovation Incubator Advisory",
    period: "Feb 2025 – May 2025",
    location: "Thiruvananthapuram, Kerala, India",
    type: "Internship",
    points: [
      "Assisted in application development, testing, debugging, and implementation of software requirements.",
      "Worked with APIs, databases, and development tools to support application functionality and technical tasks.",
    ],
    tags: ["Development", "Debugging", "APIs"],
    current: false,
  },
];

const extras = [
  {
    icon: "⛓️",
    title: "Road to Devcon 2024 – EthWalk",
    venue: "IIITMK Campus",
    desc: "Focused on Ethereum technologies and preparation for the global Devcon conference.",
  },
  {
    icon: "🏆",
    title: "Blockhack Hackathon",
    venue: "Kerala Blockchain Academy, IIITMK Technopark",
    desc: "Competed in a blockchain-focused hackathon building innovative decentralized solutions.",
  },
  {
    icon: "🌍",
    title: "The Future of Blockchain in Europe and Beyond",
    venue: "Kerala Blockchain Academy Webinar",
    desc: "Webinar led by Sherin Sebastian, mentor at Blockchain Ireland.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#050510] text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-purple-400 uppercase">Where I've Worked</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-3 text-white">Experience</h2>
          <p className="text-gray-500 mt-4">Professional roles and industry exposure.</p>
        </div>

        {/* Work Experience */}
        <div className="space-y-6 mb-20">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/5"
            >
              {exp.current && (
                <span className="absolute top-6 right-6 flex items-center gap-1.5 text-xs text-green-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Current
                </span>
              )}

              <div className="flex flex-wrap gap-3 items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-yellow-400 font-medium mt-0.5">{exp.company}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                    <span>📅 {exp.period}</span>
                    <span>📍 {exp.location}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/20 text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {exp.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Development */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.3em] text-yellow-400 uppercase">Beyond the Job</span>
            <h3 className="text-3xl font-bold text-white mt-3">Professional Development</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {extras.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-purple-400 mb-3">{item.venue}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
