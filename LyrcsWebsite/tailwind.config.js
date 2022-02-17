module.exports = {
  content: [    
    "./index.html",   
    "./src/**/*.{vue,js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        'lyrcs-purple': '#9253bd',
        'lyrcs-blue': '#16c2bf'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
