module.exports = {
  content: [    
    "./index.html",   
    "./src/**/*.{vue,js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        'app-primary': '#9253bd',
        'app-secondary': '#16c2bf'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
