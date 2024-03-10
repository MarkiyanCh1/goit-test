/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "lg+": "1157px",
      xl: "1280px",
    },
    extend: {
      classList: {
        "no-scrollbar":
          "overflow-y-scroll::-webkit-scrollbar, scrollbar-width, scrollbar-color: transparent transparent;",
      },
      colors: {
        "regal-blue": "#243c5a",
        smokygreen: "#d5ffdf",
        searchbutton: "#3470FF",
        deletebutton: "#af1c1c",
        cardbg: "#f1f1f1",
        primary: "#101828",
        "primary-blue": "#2b59ff",
        accent: "#ed1d24",
      },
      gridTemplateColumns: {
        carlist: "repeat(auto-fill, minmax(274px, 1fr))",
      },
    },
  },
  plugins: [],
};
