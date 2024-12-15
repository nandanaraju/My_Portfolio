import React from 'react';

const Skills = () => {
    const skillsData = [
        { name: "HTML5", percentage: 95 },
        { name: "CSS", percentage: 80 },
        { name: "Tailwind", percentage: 85 },
        { name: "Javascript", percentage: 90 },
        { name: "Node js ", percentage: 80 },
        { name: "React js", percentage: 85 },
        { name: "MongoDB", percentage: 75 },
        { name: "Express js", percentage: 80 },
        { name: "Blockchain", percentage: 80 },
        { name: "Ethereum", percentage: 80 },
        { name: "Solidity", percentage: 80 },
        { name: "Hyperledger Fabric", percentage: 80 },
    ];

    return (
        <div id="skills" className="bg-black text-white py-16 px-10">
            <h2 className="text-6xl font-extrabold text-yellow-400 text-center">Skills</h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
            "A showcase of the skills and technologies that drive my passion and expertise."</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <span className="w-1/4 text-lg font-bold uppercase tracking-wide">{skill.name}</span>
                        <div className="w-3/4 relative">
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-500 transition-all duration-300 ease-in-out"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                            <span className="absolute right-0 top-0 text-sm font-semibold -translate-y-5 text-gray-300">
                                {skill.percentage}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
