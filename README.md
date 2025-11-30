# TeamUp Landing Page

A modern, Gen-Z friendly marketing landing page for TeamUp.com, a sports meetup & turf-booking platform. Built with Vite, React, and Tailwind CSS.

## Features

- **Modern Aesthetic**: Glassmorphism, liquid gradients, and smooth animations.
- **Interactive Map Mock**: Visualizes the geo-spatial matchmaking algorithm.
- **Responsive Design**: Mobile-first approach.
- **Performance Optimized**: Lazy loading, optimized assets.

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

1. Clone the repo (or unzip).
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Build for production:
```bash
npm run build
```

### Testing

Run unit tests (Vitest):
```bash
npm test
```

## Deployment

### Vercel / Netlify

1. Connect your repository.
2. Set build command to `npm run build`.
3. Set output directory to `dist`.

## MapMock Algorithm

The `MapMock` component visualizes how TeamUp finds the optimal meeting point for players.
- **Input**: User locations and travel radii.
- **Process**: Calculates the centroid of all users.
- **Output**: Identifies turfs within the intersection of user radii (simplified as proximity to centroid for the mock).

To swap for a real API:
1. Replace `src/utils/geoUtils.js` logic with calls to Google Maps API or Mapbox.
2. Update `MapMock.jsx` to use a real map library (e.g., `react-map-gl`).

## License

MIT
