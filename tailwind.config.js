/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins      : ['Poppins'       , 'sans-serif'],
        roboto       : ['Roboto'        , 'sans-serif'],
        Inter        : ['Inter'         , 'sans-serif'],
        Manrope      : ['Manrope'       , 'sans-serif']
        // oxygenMono   : ['Oxygen Mono'   , 'monospace'],
        // hindSiliguri : ['Hind Siliguri' , 'sans-serif'],
        // DMsans       : ['DM Sans'       , 'sans-serif']
      },
    },
  },
  plugins: [],
}