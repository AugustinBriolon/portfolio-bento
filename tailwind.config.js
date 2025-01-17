/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'black-light': '#18191b',
        // GREEN
        'dark-green-light': '#6fd392',
        'dark-green-dark': '#1a2c24',
        'green-light': '#e9f6ec',
        'green-dark': '#307f52',
        // RED
        'dark-red-light': '#ff8fa8',
        'dark-red-dark': '#341726',
        'red-light': '#fceaf0',
        'red-dark': '#ba3263',
        // BLUE
        'blue-default': '#415AC1',
        'blue-dark': '#2F80EC'
      },
      borderRadius: {
        small: '8px',
        medium: '18px',
      },
      maxWidth: {
        default: '1280px',
      },
      height: {
        'screen-header': 'calc(100vh - 90px)',
      },
      minHeight: {
        'screen-header': 'calc(100vh - 90px)',
      },
      backgroundImage: {
        'me': "url('/images/me.png')",
        'meComputer': "url('/images/meComputer.png')",
        'svgBg': "url('/icons/background.svg')",
        'svgBgDark': "url('/icons/background-black.svg')",
      },
      gridTemplateColumns: {
        'projets': '85px 85px 1fr',
      },
      darkMode: 'class',
    },
  },
  plugins: [],
};
