/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}"],
  theme: {
    screen:{
      sm:'375px',
      lg:'1440px',
    },
    extend: {
      colors: {
        limeGreen: 'hsl(163, 72%, 41%)',
        brightRed: 'hsl(356, 69%, 56%)',
        faceBook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagramFrom:'hsl(37, 97%, 70%) to ',
        instagramto: 'hsl(329, 70%, 58%)',
        youTube: 'hsl(348, 97%, 39%)',
        toggleFrom: 'hsl(210, 78%, 56%)',
        toggleTo: 'hsl(146, 68%, 55%)',
        togglelight: 'hsl(230, 22%, 74%)',
        //DarkTheme
        veryDarkBlue:'hsl(230, 17%, 14%)',
        veryDarkBlue: 'hsl(232, 19%, 15%)',
        darkDesaturatedBlue: 'hsl(228, 28%, 20%)',
        desaturatedBlue: 'hsl(228, 34%, 66%)',
        white: 'hsl(0, 0%, 100%)',
        //lightTheme
        whiteBg: 'hsl(0, 0%, 100%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        lightGrayishBlue: 'hsl(227, 47%, 96%)',
        darkGrayishBlueText: 'hsl(228, 12%, 44%)',
        veryDarkBlueText: 'hsl(230, 17%, 14%)',
      },
      fontFamily:{
        fontFamily1: ['Inter', 'sans-serif'],
        fontfamily2: ['Poppins', 'sans-serif'],
        fontfamily3: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        thin: '400',
        bold: '700',
      },  
    },
  },
  plugins: [],
}

