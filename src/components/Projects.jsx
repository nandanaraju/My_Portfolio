import React from "react";

const services = [
  {
    title: "Blockchain Development",
    icon: "🔗",
    description: "Design and develop blockchain-based solutions for real-world use cases.",
    color: "from-purple-400/20 to-purple-600/10",
    border: "hover:border-purple-500/50",
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    description: "Build visually stunning and interactive interfaces with modern frameworks.",
    color: "from-yellow-400/20 to-yellow-600/10",
    border: "hover:border-yellow-500/50",
  },
  {
    title: "Backend Development",
    icon: "🖥️",
    description: "Develop robust server-side logic, REST APIs, and scalable backends.",
    color: "from-sky-400/20 to-sky-600/10",
    border: "hover:border-sky-500/50",
  },
  {
    title: "Web Development",
    icon: "🌐",
    description: "Create full-stack, scalable, and responsive web applications.",
    color: "from-green-400/20 to-green-600/10",
    border: "hover:border-green-500/50",
  },
  {
    title: "Smart Contract Development",
    icon: "📜",
    description: "Code secure and efficient Solidity smart contracts on Ethereum.",
    color: "from-indigo-400/20 to-indigo-600/10",
    border: "hover:border-indigo-500/50",
  },
  {
    title: "Hyperledger Fabric",
    icon: "⚙️",
    description: "Specialize in enterprise-grade permissioned blockchain networks.",
    color: "from-fuchsia-400/20 to-fuchsia-600/10",
    border: "hover:border-fuchsia-500/50",
  },
];

const Services = () => {
  return (
    <section id="projects" className="bg-[#050510] text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-purple-400 uppercase">What I Offer</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-3 text-white">Services</h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            A range of services designed to empower and elevate your project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${service.color} border border-white/10 ${service.border} rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
