import React from 'react';

const steps = [
    {
        id: 1,
        title: "Select Sport",
        description: "Choose your game—football, basketball, cricket, or tennis.",
    },
    {
        id: 2,
        title: "Set Preferences",
        description: "Pick your time, radius, and skill level.",
    },
    {
        id: 3,
        title: "Get Matched",
        description: "We find players and the best turf for everyone.",
    },
    {
        id: 4,
        title: "Play",
        description: "Book instantly and split the cost automatically.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">How it works</h2>
                    <p className="text-text-muted">Go from couch to court in minutes.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-surface-highlight -translate-y-1/2 z-0"></div>

                    <div className="grid md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className="bg-surface border border-surface-highlight p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-[0_0_15px_rgba(0,229,153,0.4)]">
                                    {step.id}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-text-muted">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
