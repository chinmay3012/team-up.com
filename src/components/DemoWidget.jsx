import React, { useState } from 'react';
import { Search, MapPin, Clock, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getIntersectionCenter, findNearbyTurfs } from '../utils/geoUtils';

const sports = ['Football', 'Basketball', 'Cricket', 'Tennis', 'Badminton'];
const times = ['Morning (6-9 AM)', 'Afternoon (12-3 PM)', 'Evening (5-8 PM)', 'Night (8-11 PM)'];

const DemoWidget = () => {
    const [sport, setSport] = useState('Football');
    const [time, setTime] = useState('Evening (5-8 PM)');
    const [radius, setRadius] = useState(5);
    const [searching, setSearching] = useState(false);
    const [results, setResults] = useState(null);

    const handleSearch = () => {
        setSearching(true);

        // Simulate API call
        setTimeout(() => {
            // Mock user data
            const mockUsers = [
                { lat: 40.7128, lng: -74.0060, radius: radius },
                { lat: 40.7200, lng: -74.0100, radius: radius },
                { lat: 40.7100, lng: -73.9950, radius: radius },
            ];

            const center = getIntersectionCenter(mockUsers);
            const turfs = findNearbyTurfs(center, radius);

            setResults({
                playersFound: Math.floor(Math.random() * 5) + 3,
                turfsAvailable: turfs.length,
                bestTurf: turfs[0] || null,
                estimatedCost: turfs[0] ? Math.floor(turfs[0].price / (Math.floor(Math.random() * 5) + 3)) : 0,
            });
            setSearching(false);
        }, 1500);
    };

    return (
        <section id="product" className="py-20 bg-surface relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">
                        Try the Match Finder
                    </h2>
                    <p className="text-text-muted">
                        See how quickly we can find your perfect game
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-background/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                        {/* Form */}
                        <div className="space-y-6 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-text-muted mb-2">
                                    <Users className="inline mr-2" size={16} />
                                    Sport
                                </label>
                                <select
                                    value={sport}
                                    onChange={(e) => setSport(e.target.value)}
                                    className="w-full bg-surface border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                >
                                    {sports.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-muted mb-2">
                                    <Clock className="inline mr-2" size={16} />
                                    Preferred Time
                                </label>
                                <select
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="w-full bg-surface border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                >
                                    {times.map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-muted mb-2">
                                    <MapPin className="inline mr-2" size={16} />
                                    Search Radius: {radius} km
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="15"
                                    value={radius}
                                    onChange={(e) => setRadius(parseInt(e.target.value))}
                                    className="w-full h-2 bg-surface-highlight rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-xs text-text-muted mt-1">
                                    <span>1 km</span>
                                    <span>15 km</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleSearch}
                            disabled={searching}
                            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_20px_rgba(0,229,153,0.3)] hover:shadow-[0_0_30px_rgba(0,229,153,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {searching ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                                    Searching...
                                </>
                            ) : (
                                <>
                                    <Search size={20} />
                                    Find Match
                                </>
                            )}
                        </button>

                        {/* Results */}
                        <AnimatePresence>
                            {results && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="mt-8 p-6 bg-surface-highlight rounded-2xl border border-primary/30"
                                >
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                        Match Found!
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="bg-background/50 p-4 rounded-xl">
                                            <p className="text-text-muted text-sm mb-1">Players Found</p>
                                            <p className="text-2xl font-bold text-white">{results.playersFound}</p>
                                        </div>
                                        <div className="bg-background/50 p-4 rounded-xl">
                                            <p className="text-text-muted text-sm mb-1">Venues Available</p>
                                            <p className="text-2xl font-bold text-white">{results.turfsAvailable}</p>
                                        </div>
                                    </div>

                                    {results.bestTurf && (
                                        <div className="bg-background/50 p-4 rounded-xl">
                                            <p className="text-text-muted text-sm mb-2">Recommended Venue</p>
                                            <p className="text-lg font-bold text-white mb-1">{results.bestTurf.name}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-text-muted">Your share:</span>
                                                <span className="text-xl font-bold text-primary">${results.estimatedCost}</span>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoWidget;
