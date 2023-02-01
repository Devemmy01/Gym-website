/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    
    extend: {
      fontFamily: {
        display: ["Satisfy", "cursive"],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      extend: {
        colors: {
          cornflowerBlue: 'rgb(100, 149, 237)',
          brightBlue: 'rgb(0, 150, 255)',
          boneWhite: 'rgb(249, 246, 238)'
        }
      }
    },
  },
  plugins: [],
}
