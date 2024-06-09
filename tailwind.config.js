/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/Home/components/*.{js,ts,jsx,tsx}",
    "./src/pages/Portfolio/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helveticaNow: ["Helvetica Now Text", "sans-serif"]
      },
      colors: {
        'zumthor': {
          // '50': '#f3f6fb',
          '100': '#e0eaf5',
          // '200': '#cddff0',
          // '300': '#abc9e5',
          // '400': '#83add7',
          // '500': '#6691cb',
          // '600': '#5279be',
          // '700': '#4867ad',
          // '800': '#3f568e',
          // '900': '#374971',
          // '950': '#252f46',
        },
        'blue-charcoal': {
          // '50': '#f2f8fd',
          // '100': '#e4effa',
          // '200': '#c2e0f5',
          // '300': '#8cc7ed',
          // '400': '#4fa9e1',
          // '500': '#288fcf',
          // '600': '#1972b0',
          // '700': '#165b8e',
          // '800': '#164e76',
          // '900': '#184262',
          '950': '#061019',
        },
        'lochmara': {
          // '50': '#f3f7fc',
          // '100': '#e5f0f9',
          // '200': '#c5dff2',
          // '300': '#93c6e6',
          // '400': '#59a9d7',
          // '500': '#338fc4',
          '600': '#2577ad',
          // '700': '#1e5b86',
          // '800': '#1c4e70',
          // '900': '#1d425d',
          // '950': '#132b3e',
        },
        'tangerine': {
          // '50': '#fef8ee',
          // '100': '#fdefd7',
          // '200': '#fbdcad',
          // '300': '#f8c279',
          // '400': '#f49e43',
          '500': '#f28c31',
          '600': '#e26814',
          // '700': '#bb4e13',
          // '800': '#953e17',
          // '900': '#783516',
          // '950': '#411809',
        },
      },
      fontSize: {
        '10xl': ['10rem', '10rem'],
        '12xl': ['12rem', '12rem'],
        '14xl': ['16rem', '16rem'],
        '16xl': ['20rem', '20rem'],
        '20xl': ['24rem', '24rem'],
      },
      aspectRatio: {
        '4/5' : '4 / 5',
      }
    }
  },
  plugins: [],
  
}

