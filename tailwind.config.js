/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Global tokens
        'text-primary': '#F1F4F8',
        'text-secondary': '#94A3B8',
        accent: '#A5B4FC',
        highlight: '#7DD3FC',
        bg: '#0E0F14',
        
        // Awakening Grove (Origin Forest)
        grove: {
          glow: '#6EE7B7',
          emerald: '#10B981',
          firefly: '#FDE68A',
          deep: '#052E16',
        },
        
        // Trial Peaks (Logic Mountains)
        peaks: {
          ice: '#7DD3FC',
          snow: '#F8FAFC',
          slate: '#1E293B',
          glow: '#38BDF8',
        },
        
        // Creation District (Neon City)
        district: {
          pink: '#EC4899',
          cyan: '#22D3EE',
          asphalt: '#0F172A',
          violet: '#A78BFA',
        },
        
        // Future Constellarium (Galaxy World)
        cosmos: {
          star: '#F8FAFC',
          purple: '#C084FC',
          nebula: '#60A5FA',
          space: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'Lexend', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
