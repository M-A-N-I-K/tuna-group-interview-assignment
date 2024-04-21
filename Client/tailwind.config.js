module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        black: { 900: "#000000" },
        blue_gray: { 400: "#87909d", 500: "#687383", 600: "#556070", 900: "#333333", "900_01": "#373737" },
        gray: {
          50: "#f9f9f9",
          200: "#ededed",
          300: "#e1e1e1",
          400: "#c7c7c7",
          600: "#858585",
          "400_01": "#c8c8c8",
          "200_01": "#e5e7ea",
        },
        red: { A700: "#e50000", A700_2d: "#e500002d" },
        indigo: { 900: "#02327b" },
      },
      boxShadow: { xs: "0px 4px 10px 5px #e7e7e73f", sm: "0px 0px 40px 5px #0000000f" },
      fontFamily: { worksans: "Work Sans", yesteryear: "Yesteryear" },
      textShadow: { ts: "0px 4px 4px #0000003f" },
    },
  },
  plugins: [],
};
