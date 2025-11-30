import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Chen",
        role: "Basketball Enthusiast",
        image: "https://i.pravatar.cc/150?img=12",
        content: "Finding pickup games used to be a nightmare. TeamUp makes it effortless. I play 3x more often now!",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "Football Player",
        image: "https://i.pravatar.cc/150?img=45",
        content: "The split payment feature is a game-changer. No more awkward Venmo requests after every match.",
        rating: 5,
    },
    {
        name: "Marcus Johnson",
        role: "Tennis Coach",
        image: "https://i.pravatar.cc/150?img=33",
        content: "As a coach, I love the tournament features. It's helped me build a thriving local tennis community.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">
                        Loved by players everywhere
                    </h2>
                    <p className="text-text-muted">
                        Sample testimonials from our community (for demonstration purposes)
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-surface border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all group"
                        >
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-primary fill-current" />
                                ))}
                            </div>
                            <p className="text-text-main mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-text-muted">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
