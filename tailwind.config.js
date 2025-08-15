/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'base': '20px', // Increased base font size to 20px
        'sm': '18px',
        'xs': '16px',
        'lg': '22px',
        'xl': '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
        '6xl': '56px',
        '7xl': '64px',
      },
      fontFamily: {
        'noteworthy': ['Noteworthy', 'Special Elite', 'Courier Prime', 'Orbitron', 'cursive'],
        'american-typewriter': ['American Typewriter', 'Courier Prime', 'Special Elite', 'monospace'],
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        'sans': ['Noteworthy', 'American Typewriter', 'Special Elite', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Cyberpunk/Valorant inspired palette
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        cyberpunk: {
          'neon-pink': '#ff0080',
          'neon-purple': '#8b5cf6',
          'neon-blue': '#00d4ff',
          'neon-green': '#00ff88',
          'neon-orange': '#ff6b35',
          'dark-bg': '#0a0a0f',
          'darker-bg': '#05050a',
          'card-bg': '#1a1a2e',
          'accent': '#16213e',
        },
        valorant: {
          'red': '#ff4654',
          'teal': '#00f5ff',
          'gold': '#ffcc00',
          'dark': '#0f1419',
          'darker': '#0a0e13',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080',
          },
          '100%': {
            boxShadow: '0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080',
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'cyberpunk-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'neon-gradient': 'linear-gradient(45deg, #ff0080, #8b5cf6, #00d4ff)',
        'dark-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
        'valorant-gradient': 'linear-gradient(135deg, #ff4654 0%, #00f5ff 100%)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}