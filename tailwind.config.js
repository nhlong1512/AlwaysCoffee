module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba-05': 'rgba(0, 0, 0, 0.5)',
        'black-rgba-07': 'rgba(0, 0, 0, 0.7)',
        'primary-color': '#fda337',
        'main-color':'#191F3A',
        'main-rgba-05':'rgba(25, 31, 58, 0.5)',
        'main-rgba-07':'rgba(25, 31, 58, 0.7)',
        'white-rgba-07':'rgba(255, 255, 255, 0.7)',
        'white-rgba-05':'rgba(255, 255, 255, 0.5)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-200px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-right-to-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(200px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-out-left-to-right': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(200px)'
          },
        },
        'headerAnimation': {
          '0%': {
            opacity: '0.4',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0.4',
          },
        },
        'inOut': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease',
        'fade-in-right-to-left':'fade-in-right-to-left 0.5s ease',
        'fade-out-left-to-right':'fade-out-left-to-right 0.5s ease',
        'headerAnimation': 'headerAnimation 3s ease infinite',
        'inOut': 'inOut 3s ease infinite',
      }
    },
  },
  plugins: [],
}
