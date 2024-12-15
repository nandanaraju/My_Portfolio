import React from 'react';

const Education = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-yellow-400">Education</h1>
          <p className="text-gray-400 mt-4">
            A glimpse into my educational journey and milestones.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PG Diploma */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-yellow-400 text-xl font-bold">2024 - Present</h3>
            <h2 className="text-2xl font-semibold mt-2">PG Diploma in Blockchain</h2>
            <p className="text-gray-400 mt-2">Kerala Blockchain Academy</p>
            <p className="text-gray-400 mt-2">Digital University Kerala</p>
          </div>

          {/* Bachelors Degree */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-yellow-400 text-xl font-bold">2020 - 2023</h3>
            <h2 className="text-2xl font-semibold mt-2">BSc Mathematics</h2>
            <p className="text-gray-400 mt-2">BJM Government College, Chavara Kollam</p>
            <p className="text-gray-400 mt-2">Kerala University</p>

          </div>

          {/* Higher Secondary */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-yellow-400 text-xl font-bold">2018 - 2020</h3>
            <h2 className="text-2xl font-semibold mt-2">Higher Secondary</h2>
            <p className="text-gray-400 mt-2">GHSS Chavara Kollam</p>
            <p className="text-gray-400 mt-2">Kerala Board of Higher Secondary Education</p>

          </div>

          {/* Secondary School */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-yellow-400 text-xl font-bold">2018</h3>
            <h2 className="text-2xl font-semibold mt-2">Secondary School</h2>
            <p className="text-gray-400 mt-2">GVHSS Kottankulangara Chavara Kollam</p>
            <p className="text-gray-400 mt-2">Kerala Board Of Public Examination</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
