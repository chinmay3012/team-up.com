/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FF6B35', // Vibrant Orange (Energy, Action)
                    hover: '#FF5722',
                    foreground: '#FFFFFF',
                },
                secondary: {
                    DEFAULT: '#00D9FF', // Electric Blue (Speed, Tech)
                    foreground: '#09090B',
                },
                accent: {
                    DEFAULT: '#FFD60A', // Bright Yellow (Victory, Energy)
                    foreground: '#09090B',
                },
                background: '#0A0E27', // Deep Navy (Athletic, Professional)
                surface: '#151B3D', // Dark Blue
                'surface-highlight': '#1E2749', // Lighter Blue
                text: {
                    main: '#FFFFFF',
                    muted: '#94A3B8', // Slate 400
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Kode Mono', 'monospace'],
            },
            animation: {
                'blob': 'blob 7s infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.8)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
