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
        "homepageBackground": "url('/homepage-background.svg')",
        "milestonesBackground": "url('/milestone.svg')",
        "contactpromoBackground": "url('/contactpromo.svg')",
        "industriesBackground": "url('/industries.svg')",
        "Background404": "url('/404.svg')",
        "servicesBackground" : "url('/servicesBackground.svg')"
      },
      fontFamily: {
        calistoga: ['var(--font-calistoga)']
      },
      animation: {
        'move-bg': 'move-bg 3s linear infinite',
      },
      keyframes: {
        'move-bg': {
          'from': { 'background-position': '0 0' },
          'to': { 'background-position': '200% 0%' },
        }
      }, 
    },
  },
  plugins: [],
};
