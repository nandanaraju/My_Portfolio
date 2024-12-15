import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center px-6 py-12">
      <div className="max-w-4xl mx-auto w-full space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400 leading-relaxed">
            I am <span className="text-yellow-400 font-bold">Nandana V</span>, a passionate Blockchain Architect and developer from Kollam, Kerala, with a strong academic foundation in BSc Mathematics and a Postgraduate Diploma in Blockchain from the Kerala Blockchain Academy.
          </p>
        </div>

        {/* About Content */}
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-300">
          <p>
            I specialize in designing and implementing blockchain solutions for both public and private networks, focusing on innovation and solving real-world challenges.
          </p>
          <p>
            With expertise in <span className="text-yellow-400 font-semibold">Ethereum</span> and{" "}
            <span className="text-yellow-400 font-semibold">Hyperledger Fabric</span>, I excel in building decentralized applications (dApps), smart contracts, and blockchain infrastructure. My strengths in problem-solving, adaptability, and attention to detail allow me to navigate complex systems and deliver impactful results.
          </p>
          <p>
            Outside of work, I enjoy reading and continuously exploring new ideas to enhance my knowledge and skills.
          </p>
        </div>

        {/* Skills Highlight Section */}
        <div className="text-center">
          <h3 className="text-4xl font-semibold text-yellow-400 mb-6">Key Strengths</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg">
              Problem-Solving
            </span>
            <span className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg">
              Adaptability
            </span>
            <span className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg">
              Blockchain Expertise
            </span>
            <span className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg">
              Smart Contracts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
