import React from 'react';
import { Users, MapPin, CreditCard, Shield, Trophy, UserPlus } from 'lucide-react';

const features = [
    {
        title: "Smart Matchmaking",
        description: "Our algorithm finds players with similar skill levels and availability in your area.",
        icon: Users,
        color: "text-primary",
    },
    {
        title: "Geo-spatial Booking",
        description: "Find the perfect turf that's convenient for everyone in your squad.",
        icon: MapPin,
        color: "text-secondary",
    },
    {
        title: "Split Payments",
        description: "No more chasing friends for money. We handle the split automatically.",
        icon: CreditCard,
        color: "text-pink-500",
    },
];

const extraFeatures = [
    { title: "No-Show Protection", icon: Shield, desc: "Wallet penalties for flakes ensure reliable games." },
    { title: "Tournaments", icon: Trophy, desc: "Join local leagues and climb the leaderboard." },
    { title: "Friend Invites", icon: UserPlus, desc: "Easily invite friends or find new teammates." },
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">Everything you need to play</h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        From finding a team to booking the field, we've optimized every step of the process.
                    </p>
                </div>

                {/* Core Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-background/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-colors group">
                            <div className={`w-12 h-12 rounded-lg bg-surface-highlight flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-text-muted leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Extra Features Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {extraFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div className="text-primary mt-1">
                                <feature.icon size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                                <p className="text-sm text-text-muted">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
