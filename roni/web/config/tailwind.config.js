/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        auth: 'url("/images/bg__auth.svg")',
        checked: 'url("/images/checkbox-checked.svg")',
        unchecked: 'url("/images/checkbox-unchecked.svg")',
      },
      borderWidth: {
        avatar: '6px',
      },
      colors: {
        supernova: '#fac900' /* yellow / warning */,
        orangeRed: '#ff4600' /* red / error */,
        silverTree: '#70bd91' /* light green */,
        spanishGreen: '#008a52' /* medium green */,
        cruseo: '#0a5d2c' /* dark green */,
        countyGreen: '#003d19' /* darkest green */,
        acadia: '#392f2d' /* brown */,
        scotchMist: '#efe9cb' /* light brown */,
        nileBlue: '#243853' /* blue */,
        blackPearl: '#071126' /* navy blue */,
        pastelMagenta: '#ff9dbf' /* pink */,
        vistaBlue: '#94D1B4' /* light green */,
        fireEngineRed: '#C52425' /* red */,
        bombay: '#aeaeae' /* gray */,
      },
      height: {
        18: "72px",
      },
      width: {
        18: "72px",
      }
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
