/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        scified: ['Sci Fied', 'sans-serif']
      },
      height: {
        '128' : '32rem',
        '192': '48rem',
        '256': '60rem',
      }
    },

    plugins: [
      require("flowbite/plugin")
    ],

    colors: {
      'primary': {
        50: '#DFFEF5',
        100: '#BAF3E4',
        200: '#93EAD2',
        300: '#6AE1C0',
        400: '#44D9AD',
        500: '#2BBF94',
        600: '#1E9573',
        700: '#116A52',
        800: '#034130',
        900: '#00170E',
      },
      'secondary': {
        50: '#FFE8DF',
        100: '#FFC2B0',
        200: '#FF9C7F',
        300: '#FF744D',
        400: '#FE4E1B',
        500: '#E53402',
        600: '#B32800',
        700: '#811B00',
        800: '#4F0F00',
        900: '#200300',
      },
      'neutrals': {
        0: '#FFFFFF',
        50: '#F5F5FA',
        100: '#E4E5F1',
        200: '#CFD0E2',
        300: '#B3B5CC',
        400: '#9496B8',
        500: '#6C6F93',
        600: '#47496B',
        700: '#32344B',
        800: '#1D1E30',
        900: '#0A0B12',
        1000: '#000000',
      },
      'success': '#2BBB6E',
      'alert': '#DF8620',
      'danger': '#D5474C',
    },
  },
  plugins: [],
}
