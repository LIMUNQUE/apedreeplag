/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
            "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "8vh": "8vh",
		"92vh": "92vh"
      },
      padding: {
        "8%": "6%",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('tailwindcss-animated','nextui')
  ],
  
};
