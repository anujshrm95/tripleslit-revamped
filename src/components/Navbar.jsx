import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'py-3 bg-black/60 backdrop-blur-xl border-b border-white/5'
                    : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 no-underline">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-cyan to-primary-purple flex items-center justify-center text-black font-black text-sm">
                        TS
                    </div>
                    <span className="text-white font-semibold text-lg tracking-tight">
                        TripleSlited
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-1 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm text-white/60 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-all no-underline"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary ml-4 text-sm !px-5 !py-2.5 no-underline">
                        Get in Touch
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white bg-transparent border-none cursor-pointer"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/5"
                    >
                        <div className="px-6 py-6 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 text-base text-white/70 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-all no-underline"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary mt-3 text-center no-underline">
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
