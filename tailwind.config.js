/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'system-ui', 'sans-serif'],
        display: ['Rubik', 'Heebo', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: { 50: '#FFFDF8', 100: '#FBF7EE', 200: '#F4ECDC' },
        moss: {
          50: '#F1F7F0', 100: '#DDEDDA', 200: '#BEDCB9', 300: '#94C38D',
          400: '#6AA862', 500: '#4C8C45', 600: '#3B7136', 700: '#30592D', 800: '#284727', 900: '#1F3820',
        },
        sky: {
          50: '#F0F7FC', 100: '#DCEDF8', 200: '#BCDDF1', 300: '#8FC5E6',
          400: '#5EA8D6', 500: '#3E8DC2', 600: '#2F71A3', 700: '#285B84',
        },
        peach: { 50: '#FFF5EF', 100: '#FFE7DA', 200: '#FFCDB3', 500: '#E9875A', 700: '#A9532C' },
        lavender: { 50: '#F6F3FC', 100: '#ECE5F8', 200: '#D7CAF0', 500: '#8C6CC8', 700: '#5F4396' },
        butter: { 50: '#FFFBEA', 100: '#FFF3C4', 200: '#FDE68A', 500: '#D9A514', 700: '#8A6508' },
        rose: { 50: '#FFF1F3', 100: '#FFE0E5', 200: '#FDC2CD', 500: '#E05A77', 700: '#A3304C' },
        ink: { DEFAULT: '#22312A', soft: '#4A5A52', mute: '#6F7D76' },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(34,49,42,.04), 0 6px 24px -8px rgba(34,49,42,.12)',
        lift: '0 2px 4px rgba(34,49,42,.05), 0 16px 40px -12px rgba(34,49,42,.22)',
      },
      borderRadius: { '4xl': '2rem' },
    },
  },
  plugins: [],
};
