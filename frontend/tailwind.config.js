/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6C5CE7',
          secondary: '#00D2FF',
          accent: '#22C55E',
        },
        surface: {
          bg: '#0F172A',
          card: '#1E293B',
          border: '#334155',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6C5CE7, #00D2FF)',
        'gradient-brand-soft': 'linear-gradient(135deg, #6C5CE7 0%, #00D2FF 50%, #22C55E 100%)',
      },
    },
  },
  plugins: [],
}

