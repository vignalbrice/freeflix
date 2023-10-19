module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        ["fade-in"]: "fadeIn 0.5s ease-in-out",
        ["fade-in-right"]: "fadeInRight 0.5s ease",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInRight: {
          from: {
            opacity: "0",
            transform: "translateX(30px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      }),
    },
  },
  plugins: [],
};
