import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import MapMock from './MapMock';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Dynamic Background with Sports Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'url(/images/sports-pattern.png)',
                    backgroundSize: '400px',
                    backgroundRepeat: 'repeat',
                }}></div>
            </div>

            {/* Diagonal Accent Stripes */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <div className="absolute top-0 right-0 w-2 h-full bg-primary transform rotate-12 translate-x-20"></div>
                <div className="absolute top-0 right-0 w-2 h-full bg-secondary transform rotate-12 translate-x-32"></div>
                <div className="absolute top-0 right-0 w-2 h-full bg-accent transform rotate-12 translate-x-44"></div>
            </div>

            {/* Animated Blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <Zap size={16} className="fill-current" />
                            <span>GAME ON 24/7</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight font-heading">
                            Find Your Game.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                                Own The Court.
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-text-muted mb-8 max-w-lg leading-relaxed">
                            Stop waiting. Start playing. The fastest way to find teammates, book venues, and dominate your sport.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-full text-lg font-bold transition-all shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:shadow-[0_0_50px_rgba(255,107,53,0.7)] hover:scale-105 transform">
                                Create Match <ArrowRight size={20} />
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-surface hover:bg-surface-highlight text-white border-2 border-secondary/50 hover:border-secondary px-8 py-4 rounded-full text-lg font-semibold transition-all">
                                <Play size={20} className="fill-current text-secondary" /> Watch Demo
                            </button>
                        </div>

                        {/* Stats Bar */}
                        <div className="mt-10 grid grid-cols-3 gap-6">
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-extrabold text-primary">10K+</div>
                                <div className="text-sm text-text-muted">Active Players</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-extrabold text-secondary">500+</div>
                                <div className="text-sm text-text-muted">Venues</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-extrabold text-accent">50K+</div>
                                <div className="text-sm text-text-muted">Games Played</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Sports Illustration Background */}
                        <div className="absolute -inset-8 opacity-30 blur-sm">
                            <img src="/images/hero-sports.png" alt="" className="w-full h-full object-contain" />
                        </div>

                        <div className="relative z-10">
                            <MapMock />
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute -inset-8 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl -z-10 rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
