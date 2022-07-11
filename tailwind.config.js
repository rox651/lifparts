module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {
        128: "30rem",
      },
      keyframes: {
        scaleAnimation: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(2)" },
        },
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        scaleAnimation: "scaleAnimation 70s",
        opacity: "opacity .8s",
      },
      colors: {
        "reno-sand": {
          DEFAULT: "#AB6D16",
          50: "#F0C589",
          100: "#EDBC77",
          200: "#E9AA53",
          300: "#E4992E",
          400: "#CF841B",
          500: "#AB6D16",
          600: "#794D10",
          700: "#482E09",
          750: "#292b33",
          800: "#160E03",
          850: "#181917",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
