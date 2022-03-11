module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        'flex-col-100': '0 0 100%',
        'flex-col-50': '0 0 50%',
        'flex-col-33-30': '0 0 calc(33.333% - 30px)',
        'flex-col-50-16': '0 0 calc(50% - 16px)',
      },
      colors: {
        'black-rgba-03': 'rgba(0, 0, 0, 0.3)',
        'black-rgba-05': 'rgba(0, 0, 0, 0.5)',
        'black-rgba-07': 'rgba(0, 0, 0, 0.7)',
        'primary-color': '#e57905',
        'main-color': '#fff7e6',
        'main-rgba-05':'rgba(255, 247, 230, 0.5)',
        'main-rgba-07':'rgba(255, 247, 230, 0.7)',
        'main-rgba-08':'rgba(255, 247, 230, 0.8)',
        'main-rgba-09':'rgba(255, 247, 230, 0.9)',
        'main-2-color':'#191F3A',
        'main-3-color':'#0C1023',
        'main-2-rgba-05':'rgba(25, 31, 58, 0.5)',
        'main-2-rgba-07':'rgba(25, 31, 58, 0.7)',
        'main-3-rgba-07':'rgba(12, 16, 35, 0.7)',
        'main-3-rgba-09':'rgba(12, 16, 35, 0.9)',
        'white-rgba-01':'rgba(255, 255, 255, 0.1)',
        'white-rgba-07':'rgba(255, 255, 255, 0.7)',
        'white-rgba-08':'rgba(255, 255, 255, 0.8)',
        'white-rgba-09':'rgba(255, 255, 255, 0.9)',
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
        'fade-in-left-to-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-200px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
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
        'fade-in-left-to-right':'fade-in-left-to-right 0.5s ease',
        'headerAnimation': 'headerAnimation 3s ease infinite',
        'inOut': 'inOut 3s ease infinite',
      }
    },
  },
  plugins: [],
}
