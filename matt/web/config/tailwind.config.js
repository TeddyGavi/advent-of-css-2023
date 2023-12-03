/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        supernova: '#fac900' /* yellow / warning */,
        spicyMustard: '#6e5a0d' /* dark yellow */,
        bombay: '#aeaeae' /* light gray */,
        orangeRed: '#ff4600' /* red / error */,
        cognac: '#9a360e' /* dark red */,
        fireEngineRed: '#c52425' /* dark red */,
        silverTree: '#70bd91' /* light green */,
        turquoiseGreen: '#a0ccb7' /* very light green */,
        spanishGreen: '#008a52' /* medium green */,
        cruseo: '#0a5d2c' /* dark green */,
        countyGreen: '#003d19' /* darkest green */,
        acadia: '#392f2d' /* brown */,
        scotchMist: '#efe9cb' /* light brown */,
        nileBlue: '#243853' /* blue */,
        blackPearl: '#071126' /* navy blue */,
        pastelMagenta: '#ff9dbf' /* pink */,
        padua: '#b1e3cc' /* lightest green - placeholder color */,
        vistaBlue: '#94d1b4' /* light green - placeholder color */,
      },
    },
    fontFamily: {
      condensed: ['Bebas Neue', 'sans-serif'],
      handwriting: ['Kalam', 'cursive'],
      sans: ['Inter', 'sans-serif'],
      script: ['Agbalumo', 'cursive'],
    },
  },
  plugins: [],
}
