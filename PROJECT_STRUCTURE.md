# TeamUp Landing Page - Project Structure

## Directory Tree

```
TeamUp.com/
├── .env.example              # Environment variable template
├── .prettierrc               # Code formatting config
├── DEPLOYMENT.md             # Deployment instructions
├── README.md                 # Project overview
├── design_notes.md           # Design system documentation
├── index.html                # Entry HTML file
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite build configuration
└── src/
    ├── index.css             # Global styles and Tailwind imports
    ├── main.jsx              # React entry point
    ├── App.jsx               # Main app component
    ├── components/           # React components
    │   ├── Header.jsx        # Navigation header
    │   ├── Hero.jsx          # Hero section with CTA
    │   ├── Features.jsx      # Feature cards
    │   ├── HowItWorks.jsx    # Process stepper
    │   ├── DemoWidget.jsx    # Interactive match finder
    │   ├── MapMock.jsx       # SVG map visualization
    │   ├── Testimonials.jsx  # User testimonials
    │   ├── Pricing.jsx       # Pricing tiers
    │   └── Footer.jsx        # Footer with links
    └── utils/
        ├── geoUtils.js       # Geo-spatial calculation utilities
        └── geoUtils.test.js  # Unit tests for geo utilities
```

## Key Files Explained

### Configuration Files

- **tailwind.config.js**: Custom color palette, animations, and Tailwind plugins
- **vite.config.js**: Vite build settings and test configuration
- **postcss.config.js**: PostCSS plugins for Tailwind processing

### Source Files

- **src/index.css**: Global styles, font imports, Tailwind directives
- **src/main.jsx**: React DOM rendering entry point
- **src/App.jsx**: Main component that assembles all sections

### Components

All components are self-contained and follow a consistent pattern:
- Responsive design with mobile-first approach
- Framer Motion animations for smooth transitions
- Lucide React icons for consistent iconography
- Tailwind CSS for styling with custom design tokens

### Utilities

- **geoUtils.js**: Contains the core algorithm for:
  - Calculating intersection centers from multiple user locations
  - Finding nearby turfs within a radius
  - Checking if a point is within all user radii
- **geoUtils.test.js**: Vitest unit tests ensuring algorithm correctness

## Component Architecture

### Layout Flow
```
App
├── Header (fixed navigation)
├── Main
│   ├── Hero (with MapMock)
│   ├── Features (3 core + 3 extra)
│   ├── HowItWorks (4-step process)
│   ├── DemoWidget (interactive simulator)
│   ├── Testimonials (3 sample reviews)
│   ├── Pricing (3 tiers)
│   └── CTA Section
└── Footer
```

## State Management

Currently using React's built-in state (useState) for:
- Mobile menu toggle
- Demo widget form inputs and results
- Map visualization data

For a production app, consider:
- React Context for global state
- Zustand for lightweight state management
- Redux Toolkit for complex state needs

## Styling Approach

- **Utility-first**: Tailwind CSS classes for rapid development
- **Custom tokens**: Defined in tailwind.config.js for consistency
- **Responsive**: Mobile-first breakpoints (sm, md, lg)
- **Dark mode**: Built-in dark theme (can be extended to toggle)

## Testing

- **Unit tests**: Vitest for utility functions
- **Component tests**: Can add with @testing-library/react
- **E2E tests**: Can add with Playwright or Cypress

## Performance Optimizations

- Lazy loading images with srcset
- Framer Motion animations use GPU acceleration
- Minimal bundle size with tree-shaking
- SVG for scalable graphics (MapMock)

## Future Enhancements

1. **Real Map Integration**: Replace MapMock with Google Maps/Mapbox
2. **Backend API**: Connect to real matchmaking and booking endpoints
3. **Authentication**: Add user login/signup flows
4. **Payment Integration**: Implement real Stripe checkout
5. **Mobile App**: React Native version using shared components
6. **Analytics**: Add Google Analytics or Mixpanel tracking
