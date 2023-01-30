/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    // screen sizes
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lx: "1440px",
    },
    extend: {
      // colors
      colors: {
        // Primary
        cl_primary_blue: "hsl(223, 87%, 63%)",
        // Secondary
        cl_paleBlue: "hsl(223, 100%, 88%)",
        cl_lightRed: "hsl(354, 100%, 66%)",
        // Neutral
        cl_gray: "hsl(0, 0%, 59%)",
        cl_veryDarkBlue: "hsl(209, 33%, 12%)",
      },
    },
  },
  plugins: [],
}
