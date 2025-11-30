import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-3xl font-bold tracking-wider text-white mb-4 block" style={{ fontFamily: "'Kode Mono', monospace", letterSpacing: '0.15em' }}>
                            TEAM<span className="text-primary">UP</span>
                        </a>
                        <p className="text-text-muted max-w-sm mb-6">
                            The modern platform for urban sports enthusiasts. Find games, book venues, and build your community.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-text-muted hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-text-muted hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-text-muted hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-text-muted hover:text-white transition-colors"><Github size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Download App</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Venue Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
                    <p>&copy; {new Date().getFullYear()} TeamUp Inc. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
