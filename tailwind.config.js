module.exports = {
  content: [    
    "./index.html",   
    "./src/**/*.{vue,js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        'app-primary': '#9253bd',
        'app-primary-hover': '#773D9E',
        'app-secondary': '#16c2bf'
      },
      dropShadow: {
        'default': '0 0 15px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}

// TODO: ButtonTertiary