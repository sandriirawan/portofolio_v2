// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ghibliCream: "#fef6e4",
        ghibliBrown: "#7a5c41",
        ghibliGreen: "#a8d5ba",
        ghibliSky: "#cce3dc",
        ghibliAccent: "#e07a35	",
        ghibliNight: "#2a2a2a",
        ghibliLeaf: "#6cbdb5",
        ghibliForest: "#355c4d",
      },
      fontFamily: {
        ghibli: ['"Inter"', "sans-serif"],
      },
      animation: {
        floatUp: "floatUp 4s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "glitch-after":
          "glitch var(--after-duration) infinite linear alternate-reverse",
        "glitch-before":
          "glitch var(--before-duration) infinite linear alternate-reverse",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shine: "shine 5s linear infinite",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        animation: "floatUp 3s ease-in-out infinite",
      },
      keyframes: {
        floatUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};
