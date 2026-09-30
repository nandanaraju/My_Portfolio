import React from 'react';

const educationData = [
  {
    period: '2024 – Present',
    degree: 'PG Diploma in Blockchain',
    institution: 'Kerala Blockchain Academy',
    board: 'Digital University Kerala',
    icon: '🎓',
  },
  {
    period: '2020 – 2023',
    degree: 'BSc Mathematics',
    institution: 'BJM Government College, Chavara Kollam',
    board: 'Kerala University',
    icon: '📐',
  },
  {
    period: '2018 – 2020',
    degree: 'Higher Secondary',
    institution: 'GHSS Chavara Kollam',
    board: 'Kerala Board of Higher Secondary Education',
    icon: '📚',
  },
  {
    period: '2018',
    degree: 'Secondary School',
    institution: 'GVHSS Kottankulangara Chavara Kollam',
    board: 'Kerala Board Of Public Examination',
    icon: '🏫',
  },
];

const Education = () => {
  return (
    <section className="bg-[#050510] text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-yellow-400 uppercase">My Background</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-3 text-white">Education</h2>
          <p className="text-gray-500 mt-4">A glimpse into my academic journey.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/50 via-purple-500/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="flex gap-8 items-start group">
                {/* Dot */}
                <div className="relative hidden md:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/20 to-purple-500/20 border border-yellow-400/30 flex items-center justify-center text-2xl z-10 group-hover:border-yellow-400 transition-colors">
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-white/[0.07] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-400/5">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="text-xs font-semibold tracking-widest text-yellow-400 uppercase">{item.period}</span>
                    <span className="text-2xl md:hidden">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <p className="text-gray-300 mt-1">{item.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.board}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
