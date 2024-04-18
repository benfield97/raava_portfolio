/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#10102D",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        'highlight-primary': '#1e1e3f',
        'highlight-secondary': '#c0bbd6',
        'highlight-tertiary': '#202040',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
