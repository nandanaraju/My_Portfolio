import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { label: 'Home', href: '#main' },
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Certificates', href: '#certificates' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#main" className="text-xl font-bold tracking-widest bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
                    NANDANA
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium tracking-wide"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-gray-300 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        }
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-6 flex flex-col space-y-4">
                    {links.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
