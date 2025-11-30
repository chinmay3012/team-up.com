import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getIntersectionCenter, findNearbyTurfs } from '../utils/geoUtils';
import clsx from 'clsx';

const MapMock = () => {
    // Mock users with lat/lng relative to a center (0,0 for SVG simplicity)
    // We'll map lat/lng to SVG coordinates.
    // Let's say 0,0 is the center of the map (40.7128, -74.0060)
    // Scale: 1km = 50px

    const CENTER_LAT = 40.7128;
    const CENTER_LNG = -74.0060;
    const SCALE = 30; // px per km (adjusted to fit better)

    const [users, setUsers] = useState([
        { id: 1, lat: 40.7128, lng: -74.0060, radius: 3, color: 'rgba(0, 229, 153, 0.3)' }, // Center
        { id: 2, lat: 40.7300, lng: -74.0200, radius: 4, color: 'rgba(99, 102, 241, 0.3)' }, // NW
        { id: 3, lat: 40.7000, lng: -73.9900, radius: 3.5, color: 'rgba(236, 72, 153, 0.3)' }, // SE
    ]);

    const [turfs, setTurfs] = useState([]);
    const [intersectionCenter, setIntersectionCenter] = useState(null);

    useEffect(() => {
        const center = getIntersectionCenter(users);
        setIntersectionCenter(center);
        const nearby = findNearbyTurfs(center, 5); // 5km search
        setTurfs(nearby);
    }, [users]);

    // Convert lat/lng to SVG x/y
    const toSvg = (lat, lng) => {
        const y = -(lat - CENTER_LAT) * 111 * SCALE;
        const x = (lng - CENTER_LNG) * 111 * Math.cos(CENTER_LAT * (Math.PI / 180)) * SCALE;
        return { x: x + 200, y: y + 200 }; // Offset to center of 400x400 SVG
    };

    return (
        <div className="relative w-full max-w-md mx-auto aspect-square bg-surface rounded-2xl overflow-hidden border border-surface-highlight shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            {/* Map SVG */}
            <svg className="w-full h-full" viewBox="0 0 400 400">
                {/* Grid lines (optional) */}
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" />

                {/* User Radii */}
                {users.map(user => {
                    const { x, y } = toSvg(user.lat, user.lng);
                    const r = user.radius * SCALE;
                    return (
                        <motion.circle
                            key={user.id}
                            cx={x}
                            cy={y}
                            r={r}
                            fill={user.color}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: user.id * 0.2 }}
                        />
                    );
                })}

                {/* User Markers */}
                {users.map(user => {
                    const { x, y } = toSvg(user.lat, user.lng);
                    return (
                        <circle key={`marker-${user.id}`} cx={x} cy={y} r="4" fill="white" />
                    );
                })}

                {/* Intersection Center */}
                {intersectionCenter && (
                    (() => {
                        const { x, y } = toSvg(intersectionCenter.lat, intersectionCenter.lng);
                        return (
                            <motion.circle
                                cx={x}
                                cy={y}
                                r="6"
                                fill="#FACC15"
                                initial={{ scale: 0 }}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            />
                        );
                    })()
                )}

                {/* Turfs */}
                {turfs.map(turf => {
                    const { x, y } = toSvg(turf.lat, turf.lng);
                    return (
                        <g key={turf.id}>
                            <circle cx={x} cy={y} r="3" fill="#00E599" />
                            <text x={x + 5} y={y} fill="white" fontSize="8" opacity="0.7">{turf.name}</text>
                        </g>
                    );
                })}
            </svg>

            {/* Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-surface/80 backdrop-blur-md p-3 rounded-lg border border-surface-highlight">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-text-muted">Optimal Meeting Point Found</span>
                    <span className="text-primary font-bold">{turfs.length} Venues</span>
                </div>
            </div>
        </div>
    );
};

export default MapMock;
