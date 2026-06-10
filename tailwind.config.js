/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Cairo', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF6A00',
          'orange-light': '#FF8C33',
          'orange-dark': '#CC5500',
          'orange-muted': '#FF6A00',
          black: '#0B0B0B',
          charcoal: '#161616',
          dark: '#111111',
          gray: '#1E1E1E',
          'gray-soft': '#D9D9D9',
          'gray-light': '#8A8A8A',
          'gray-muted': '#5A5A5A',
        },
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'soft-scale': 'softScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        shimmer: 'shimmer 8s ease-in-out infinite',
        'shimmer-slow': 'shimmer 12s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.25', transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: '0.6', transform: 'translate(-50%, -50%) scale(1.15)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        softScale: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
