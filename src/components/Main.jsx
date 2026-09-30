import React, { useState, useEffect } from 'react';
import nanda from '../assets/images/nanda.png';

const Main = () => {
    const roles = ['Frontend Developer', 'Backend Developer', 'Blockchain Developer'];
    const [currentRole, setCurrentRole] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingIndex, setTypingIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[currentIndex];
        let timeout;
        if (!deleting && typingIndex < current.length) {
            timeout = setTimeout(() => {
                setCurrentRole(prev => prev + current[typingIndex]);
                setTypingIndex(i => i + 1);
            }, 90);
        } else if (!deleting && typingIndex === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && typingIndex > 0) {
            timeout = setTimeout(() => {
                setCurrentRole(prev => prev.slice(0, -1));
                setTypingIndex(i => i - 1);
            }, 50);
        } else if (deleting && typingIndex === 0) {
            setDeleting(false);
            setCurrentIndex(i => (i + 1) % roles.length);
        }
        return () => clearTimeout(timeout);
    }, [typingIndex, deleting, currentIndex]);

    return (
        <section id="main" className="min-h-screen bg-[#050510] text-white flex items-center relative overflow-hidden">
            {/* Background glow blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-16">
                {/* Left */}
                <div className="flex-1 space-y-6">
                    <span className="inline-block text-sm font-semibold tracking-[0.3em] text-yellow-400 uppercase">
                        👋 Hello, I'm
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Nandana V
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-400 font-light min-h-[2rem]">
                        A{' '}
                        <span className="font-semibold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                            {currentRole}
                        </span>
                        <span className="animate-pulse text-yellow-400">|</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg leading-relaxed">
                        Passionate about building decentralized solutions, crafting seamless web experiences, and exploring the frontiers of blockchain technology.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <a href="#contact">
                            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-105">
                                Hire Me
                            </button>
                        </a>
                        <a href="#projects">
                            <button className="px-8 py-3 border border-purple-500/50 text-purple-300 font-semibold rounded-full hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300">
                                View Projects
                            </button>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 pt-4">
                        <div>
                            <p className="text-2xl font-bold text-yellow-400">6+</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Projects</p>
                        </div>
                        <div className="w-px bg-gray-800" />
                        <div>
                            <p className="text-2xl font-bold text-yellow-400">4+</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Certificates</p>
                        </div>
                        <div className="w-px bg-gray-800" />
                        <div>
                            <p className="text-2xl font-bold text-yellow-400">12+</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Skills</p>
                        </div>
                    </div>
                </div>

                {/* Right — Avatar */}
                <div className="flex-shrink-0 relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full relative">
                        {/* Rotating gradient ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-purple-500 to-yellow-400 p-1 animate-spin" style={{ animationDuration: '6s' }}>
                            <div className="w-full h-full rounded-full bg-[#050510]" />
                        </div>
                        {/* Image */}
                        <img
                            src={nanda}
                            alt="Nandana V"
                            className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full"
                        />
                    </div>
                    {/* Glow under avatar */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-purple-500/30 blur-xl rounded-full" />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
            </div>
        </section>
    );
};

export default Main;
