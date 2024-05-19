/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cont:{
        center:true,
        width: 100,
        padding: {
          default : "1rem",
          sm: "2rem" ,
          lg:"3rem",
          xl: "5rem",
          "2xl" : "6rem",
        }
      },
      colors:{
        primary:"#854d3d",
        secondary:"#4a1e1d",
        brand_d:"#270c03",
      }
     
    },
  },
  plugins: [],
}

