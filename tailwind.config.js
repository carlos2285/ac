export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#263366',
        'secondary-gray': '#5A5A5F',
        'light-blue': '#B1C2E2',
        'lightest-blue': '#EFF8FB',
        'accent-green': '#D9E9CE',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
