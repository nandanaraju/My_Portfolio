module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust this to your project structure
  theme: {
      extend: {
          keyframes: {
              slideIn: {
                  '0%': { transform: 'translateY(-100%)', opacity: 0 },
                  '100%': { transform: 'translateY(0)', opacity: 1 },
              },
          },
          animation: {
              'slide-in': 'slideIn 1s ease-out',
          },
      },
  },
  plugins: [],
};
