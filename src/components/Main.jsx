import React, { useState, useEffect } from 'react';
// import img1 from "../assets/images/nanda.png";

const Main = () => {
    const roles = ['Front End Developer', 'Backend Developer', 'Blockchain Developer'];
    const [currentRole, setCurrentRole] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingIndex, setTypingIndex] = useState(0);

    useEffect(() => {
        const currentRoleString = roles[currentIndex];
        if (typingIndex < currentRoleString.length) {
            const typingTimeout = setTimeout(() => {
                setCurrentRole((prev) => prev + currentRoleString[typingIndex]);
                setTypingIndex(typingIndex + 1);
            }, 100); // Adjust typing speed here
            return () => clearTimeout(typingTimeout);
        } else {
            const roleChangeTimeout = setTimeout(() => {
                setCurrentIndex((currentIndex + 1) % roles.length);
                setCurrentRole('');
                setTypingIndex(0);
            }, 2000); // Time before changing to the next role
            return () => clearTimeout(roleChangeTimeout);
        }
    }, [typingIndex, currentIndex]);

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-between px-10">
            {/* Left Section */}
            <div className="w-1/2">
                <h3 className="text-xl text-yellow-400 mb-2">HELLO!</h3>
                <h1 className="text-6xl font-bold mb-4">I'm Nandana V</h1>
                <h2 className="text-2xl font-light text-gray-300 mb-6">
                    A <span className="font-semibold text-white">{currentRole}</span>
                </h2>
                <div className="flex space-x-4">
                    <a href="#hire-me">
                        <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg">
                            Hire Me
                        </button>
                    </a>
                    <a href="#my-works">
                        <button className="px-6 py-2 bg-transparent border border-yellow-400 text-yellow-400 font-semibold rounded-lg">
                            My Works
                        </button>
                    </a>
                </div>
            </div>

            {/* Right Section */}
            {/* Right Section */}
<div className="w-1/2 flex justify-center">
    {/* <img
        src={img1}
        alt="Nandana V"
        className="rounded-lg shadow-lg animate-slide-in w-72 h-auto sm:w-60 md:w-80 lg:w-96"
    /> */}
</div>

        </div>
    );
};

export default Main;
