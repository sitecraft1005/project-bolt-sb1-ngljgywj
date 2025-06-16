/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        coral: {
          100: '#ffe4e0',
          200: '#ffc9c1',
          300: '#ffada2',
          400: '#fc9183',
          500: '#f97066',
          600: '#e85a4f',
          700: '#d04a40',
          800: '#af3931',
          900: '#8f2a24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
        'slideInRight': 'slideInRight 0.8s ease-out forwards',
        'scaleUp': 'scaleUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-custom': 'pulse 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slideUp': 'slideUp 0.8s ease-out forwards',
        'bounceIn': 'bounceIn 0.8s ease-out forwards',
        'gradient': 'gradientShift 3s ease infinite',
        'morphing': 'morphing 8s ease-in-out infinite',
        'neon': 'neonGlow 2s ease-in-out infinite',
      },
      boxShadow: {
        'custom': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(234, 179, 8, 0.6)',
        'glow-purple': '0 0 20px rgba(147, 51, 234, 0.6)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.6)',
      },
      screens: {
        'xs': '475px',
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};