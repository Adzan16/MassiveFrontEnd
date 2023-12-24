/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/HeroImage.svg')",
        "heroEdu-pattern": "url('./src/assets/HeroEdu.svg')",
        "heroLog-pattern": "url('./src/assets/GunungBromo.jpg')",
      },
    },
  },
  plugins: [],
};
