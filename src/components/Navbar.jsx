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
                    <div className="w-8 h-8 bg-white flex items-center justify-center text-black font-mono font-bold text-sm">
                        TS
                    </div>
                    <span className="text-white font-bold text-lg tracking-tight font-mono">
                        TripleSlited
                    </span>
                </a>

                {/* Desktop Nav - White Text */}
                <div className="hidden md:flex gap-1 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm text-white/60 hover:text-white font-medium font-mono uppercase tracking-wide rounded-lg hover:bg-white/5 transition-all no-underline"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="ml-6 btn-tech !py-2 !px-6 text-xs">
                        Start Project
                    </a>
                </div>

                {/* Mobile Toggle - White */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white bg-transparent border-none cursor-pointer"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu - Dark */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-black text-white border-b border-white/10"
                    >
                        <div className="px-6 py-6 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 text-base text-white/70 hover:text-white font-mono uppercase border-b border-white/10 no-underline"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 btn-primary text-center no-underline py-3">
                                Start Project
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
