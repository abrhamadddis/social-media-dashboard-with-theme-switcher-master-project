/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',

  content: ["./src/**/*.html"],
  theme: {
    screen: {
      sm: '375px',
      lg: '1440px'
    },
    extend: {
      colors: {
        primary: {
          limeGreen: 'hsl(163, 72%, 41%)',
          brightRed: 'hsl(356, 69%, 56%)',
          facebook: 'hsl(208, 92%, 53%)',
          twitter: 'hsl(203, 89%, 53%)',
          instagram: {
            from: 'hsl(37, 97%, 70%)',
            to: 'hsl(329, 70%, 58%)'
          },
          youtube: 'hsl(348, 97%, 39%)'
        },
        darkTheme: {
          toggle: {
            from: 'hsl(210, 78%, 56%)',
            to: 'hsl(146, 68%, 55%)'
          },
          veryDarkBlue: 'hsl(230, 17%, 14%)',
          veryDarkBlueTopBg: 'hsl(232, 19%, 15%)',
          darkDesaturatedBlue: 'hsl(228, 28%, 20%)',
          desaturatedBlue: 'hsl(228, 34%, 66%)',
          white: 'hsl(0, 0%, 100%)'
        },
        lightTheme: {
          toggle: 'hsl(230, 22%, 74%)',
          white: 'hsl(0, 0%, 100%)',
          veryPaleBlue: 'hsl(225, 100%, 98%)',
          lightGreyishBlue: 'hsl(227, 47%, 96%)',
          darkGreyishBlue: 'hsl(228, 12%, 44%)',
          veryDarkBlue: 'hsl(230, 17%, 14%)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontWeight: {
        normal: '400',
        bold: '700'
      }
    },
  },
  plugins: [],
}