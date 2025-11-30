// src/utils/geoUtils.js

// Mock turf data
const TURFS = [
    { id: 1, name: "Downtown Sports Plex", lat: 40.7128, lng: -74.0060, price: 120, rating: 4.8, image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Riverside Field", lat: 40.7200, lng: -74.0100, price: 100, rating: 4.5, image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Uptown Arena", lat: 40.7300, lng: -73.9950, price: 150, rating: 4.9, image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Eastside Courts", lat: 40.7150, lng: -73.9900, price: 90, rating: 4.2, image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "West End Pitch", lat: 40.7100, lng: -74.0200, price: 110, rating: 4.6, image: "https://images.unsplash.com/photo-1504454172868-9583784a7088?auto=format&fit=crop&w=800&q=80" },
];

/**
 * Calculates the centroid of multiple user locations.
 * @param {Array<{lat: number, lng: number, radius: number}>} users 
 * @returns {{lat: number, lng: number} | null}
 */
export const getIntersectionCenter = (users) => {
    if (!users || users.length === 0) return null;

    let sumLat = 0;
    let sumLng = 0;

    users.forEach(user => {
        sumLat += user.lat;
        sumLng += user.lng;
    });

    return {
        lat: sumLat / users.length,
        lng: sumLng / users.length
    };
};

/**
 * Finds turfs within a certain distance of the center.
 * @param {{lat: number, lng: number}} center 
 * @param {number} radiusKm 
 * @returns {Array}
 */
export const findNearbyTurfs = (center, radiusKm = 5) => {
    if (!center) return [];
    // Simple distance approximation (Euclidean is fine for small areas)
    // 1 deg lat ~ 111km
    return TURFS.filter(turf => {
        const dLat = (turf.lat - center.lat) * 111;
        const dLng = (turf.lng - center.lng) * 111 * Math.cos(center.lat * (Math.PI / 180));
        const dist = Math.sqrt(dLat * dLat + dLng * dLng);
        return dist <= radiusKm;
    });
};

/**
 * Checks if a point is within all user radii (true intersection).
 * @param {{lat: number, lng: number}} point 
 * @param {Array<{lat: number, lng: number, radius: number}>} users 
 * @returns {boolean}
 */
export const isPointInIntersection = (point, users) => {
    return users.every(user => {
        const dLat = (point.lat - user.lat) * 111;
        const dLng = (point.lng - user.lng) * 111 * Math.cos(user.lat * (Math.PI / 180));
        const dist = Math.sqrt(dLat * dLat + dLng * dLng);
        // user.radius is in km
        return dist <= user.radius;
    });
};
