// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primaryColors: '#3C8DBC'
      },
      container: {
        center: true,
        padding: '1rem'
      },
      customClasses: {
        'font-primary': 'font-mulish text-white text-2xl font-bold'
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        mulish: ['Mulish']
      }
    },
    daisyui: {
      themes: ['light'], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
      prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true // Shows info about daisyUI version and used config in the console when building your CSS
    }
  },
  variants: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')]
}
