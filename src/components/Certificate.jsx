import React from 'react';
import certificate1 from '../assets/images/certificate1.png';
import certificate2 from '../assets/images/certificate2.png';
import certificate3 from '../assets/images/certificate3.png';
import certificate4 from '../assets/images/certificate4.png';

const certificates = [
  {
    id: 1,
    image: certificate1,
    title: "Developer Essential for Blockchain",
    issuer: "Kerala Blockchain Academy",
    description:
      "Foundation in React, Express, MongoDB, Docker, and Git for DApp development.",
  },
  {
    id: 2,
    image: certificate2,
    title: "Blockchain Foundation Program",
    issuer: "Kerala Blockchain Academy",
    description:
      "Comprehensive coverage of blockchain fundamentals and real-world applications.",
  },
  {
    id: 3,
    image: certificate3,
    title: "Certified Blockchain Associate",
    issuer: "Kerala Blockchain Academy",
    description:
      "In-depth blockchain principles with hands-on implementation experience.",
  },
  {
    id: 4,
    image: certificate4,
    title: "Ethereum Fundamentals",
    issuer: "Kerala Blockchain Academy",
    description:
      "Deep dive into Ethereum architecture, smart contracts, and dApp development.",
  },
];

const Certificate = () => {
  return (
    <section id="certificates" className="bg-[#050510] text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-purple-400 uppercase">My Credentials</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-3 text-white">Certificates</h2>
          <p className="text-gray-500 mt-4">Proof of learning and expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 flex flex-col"
            >
              {/* Certificate image */}
              <div className="bg-black p-4 flex items-center justify-center h-52 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6 space-y-2">
                <p className="text-xs font-semibold tracking-widest text-yellow-400 uppercase">{cert.issuer}</p>
                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
