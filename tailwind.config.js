const path = require('path')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        robo: ['Roboto Condensed', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
      },
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  plugins: [],
}
