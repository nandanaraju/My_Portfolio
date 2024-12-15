import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-5 bg-black text-white font-serif shadow-md sticky top-0">
            {/* Logo Section */}
            <div className="text-xl font-bold text-yellow-400">
                NANDANA
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-8">
                <a href="#main" className="hover:text-yellow-400 transition-colors duration-300">
                    Home
                </a>
                <a href="#skills" className="hover:text-yellow-400 transition-colors duration-300">
                    Skills
                </a>
                <a href="#projects" className="hover:text-yellow-400 transition-colors duration-300">
                    Projects
                </a>
                <a href="#certificates" className="hover:text-yellow-400 transition-colors duration-300">
                    Certificates
                </a>
                <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">
                    Contact Me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
