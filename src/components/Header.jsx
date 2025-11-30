import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Product', href: '#product' },
        { name: 'How it works', href: '#how-it-works' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-3xl font-bold tracking-wider text-white" style={{ fontFamily: "'Kode Mono', monospace", letterSpacing: '0.15em' }}>
                            TEAM<span className="text-primary">UP</span>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#contact" className="text-sm font-medium text-text-main hover:text-white transition-colors">
                            Contact
                        </a>
                        <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(0,229,153,0.3)] hover:shadow-[0_0_30px_rgba(0,229,153,0.5)]">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text-muted hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 text-base font-medium text-text-muted hover:text-white hover:bg-white/5 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="mt-4 px-3">
                                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
