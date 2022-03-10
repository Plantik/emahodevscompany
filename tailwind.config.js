module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeindown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },

        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-1deg)'
          },
          '50%': {
            transform: 'rotate(2deg)'
          },
        }

      },
    },

    animation: {
      
      fadeindown: 'fade-in-down 0.5s ease-out',
      wiggle: 'wiggle 1s ease-in-out infinite',
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
      3000: '2000ms',
      3000: '3000ms',
    },
  },
  plugins: [],
}
