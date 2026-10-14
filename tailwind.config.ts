import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0b1017',
          900: '#121922',
          800: '#1E222A',
          700: '#2B3340'
        },
        cyan: {
          400: '#00F0FF',
          500: '#0BE2FF'
        },
        blue: {
          500: '#0F4C81',
          600: '#0E406F'
        }
      },
      boxShadow: {
        glow: '0 0 25px rgba(0, 240, 255, 0.25)',
        panel: '0 20px 60px rgba(3, 7, 18, 0.45)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        hero: 'radial-gradient(circle at 20% 20%, rgba(15,76,129,0.34), transparent 28%), radial-gradient(circle at 80% 10%, rgba(0,240,255,0.1), transparent 36%)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        '8xl': '90rem'
      }
    }
  },
  plugins: []
};

export default config;
