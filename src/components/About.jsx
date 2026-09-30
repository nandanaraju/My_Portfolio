import React from "react";
import nanda from "../assets/images/nanda.png";

function AboutPage() {
  const strengths = ["Problem-Solving", "Adaptability", "Blockchain Expertise", "Smart Contracts"];

  return (
    <section id="about" className="bg-[#07071a] text-white py-24 px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-purple-400 uppercase">Who I Am</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-3 bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-purple-500/30 rounded-2xl rotate-6" />
              <img
                src={nanda}
                alt="Nandana V"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Hi, I'm <span className="text-yellow-400">Nandana V</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A passionate Blockchain Architect and developer from Kollam, Kerala, with a strong academic foundation in BSc Mathematics and a Postgraduate Diploma in Blockchain from the Kerala Blockchain Academy.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in designing and implementing blockchain solutions for both public and private networks. With expertise in{" "}
              <span className="text-yellow-400 font-medium">Ethereum</span> and{" "}
              <span className="text-yellow-400 font-medium">Hyperledger Fabric</span>, I excel in building dApps, smart contracts, and blockchain infrastructure.
            </p>

            {/* Key strengths */}
            <div className="pt-2">
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Key Strengths</p>
              <div className="flex flex-wrap gap-3">
                {strengths.map(s => (
                  <span
                    key={s}
                    className="px-4 py-2 text-sm font-medium border border-yellow-400/30 text-yellow-400 rounded-full bg-yellow-400/5 hover:bg-yellow-400/10 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
