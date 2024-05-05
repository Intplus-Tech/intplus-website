/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "homepageBackground" : "url('/homepage-background.svg')",
        "solutionsBackground" : "url('/solutions.svg')",
        "contactpromoBackground" : "url('/contactpromo.svg')",
        "industriesBackground" : "url('/industries.svg')",
      },
      fontFamily:{
        calistoga : ['var(--font-calistoga)']
      }
    },
  },
  plugins: [],
};
