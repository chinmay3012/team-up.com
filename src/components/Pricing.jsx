import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Free",
        price: "$0",
        features: ["Join public matches", "Basic profile", "Pay per match"],
        cta: "Start Playing",
        highlight: false,
    },
    {
        name: "Pro",
        price: "$9.99",
        period: "/mo",
        features: ["Priority matching", "No booking fees", "Advanced stats", "Create private leagues"],
        cta: "Go Pro",
        highlight: true,
    },
    {
        name: "Venue Partner",
        price: "Custom",
        features: ["List your turf", "Booking management", "Dynamic pricing", "Analytics dashboard"],
        cta: "Contact Sales",
        highlight: false,
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">Simple Pricing</h2>
                    <p className="text-text-muted">Choose the plan that fits your game.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl border ${plan.highlight ? 'bg-background border-primary shadow-[0_0_30px_rgba(0,229,153,0.1)]' : 'bg-background/50 border-white/5'} flex flex-col`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                                {plan.period && <span className="text-text-muted">{plan.period}</span>}
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-text-muted">
                                        <Check size={18} className="text-primary mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg' : 'bg-surface-highlight text-white hover:bg-white/10'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
