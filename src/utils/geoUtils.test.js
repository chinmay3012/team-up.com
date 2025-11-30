import { describe, it, expect } from 'vitest';
import { getIntersectionCenter, findNearbyTurfs, isPointInIntersection } from './geoUtils';

describe('geoUtils', () => {
    describe('getIntersectionCenter', () => {
        it('should return null for empty users', () => {
            expect(getIntersectionCenter([])).toBeNull();
        });

        it('should calculate correct centroid', () => {
            const users = [
                { lat: 0, lng: 0 },
                { lat: 10, lng: 10 }
            ];
            const center = getIntersectionCenter(users);
            expect(center).toEqual({ lat: 5, lng: 5 });
        });
    });

    describe('findNearbyTurfs', () => {
        it('should return turfs within radius', () => {
            // Mock turf data is hardcoded in utils, so we test against known values
            // Downtown Sports Plex is at 40.7128, -74.0060
            const center = { lat: 40.7128, lng: -74.0060 };
            const turfs = findNearbyTurfs(center, 1);
            expect(turfs.length).toBeGreaterThan(0);
            expect(turfs[0].name).toBe("Downtown Sports Plex");
        });

        it('should return empty array if no turfs nearby', () => {
            const center = { lat: 0, lng: 0 };
            const turfs = findNearbyTurfs(center, 1);
            expect(turfs).toHaveLength(0);
        });
    });

    describe('isPointInIntersection', () => {
        it('should return true if point is within all radii', () => {
            // 1 deg lat = 111km.
            // 0.0001 deg is ~11m.
            const usersSmall = [
                { lat: 40, lng: -74, radius: 1 }, // 1km radius
                { lat: 40, lng: -74.001, radius: 1 } // very close
            ];
            const pointSmall = { lat: 40, lng: -74.0005 };
            expect(isPointInIntersection(pointSmall, usersSmall)).toBe(true);
        });
    });
});
