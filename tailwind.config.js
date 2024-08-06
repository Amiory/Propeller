/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        icons: "rgba(3, 81, 70, 1)",
        head: "rgba(31, 41, 55, 1)",
        span: "rgba(255, 201, 35, 1)",
        form: "rgba(55, 65, 81, 1)",
        slm: "#035146"
      },
      height: {
        532: "532px",
      },
      width: {
        588: "588px",
      },
      lineHeight: {
        46: "46px",
      },
      fontSize: {
        10: "10px",
        8: "8px"
      },
      fontFamily: {
        Kalameh: ["Kalameh"],
        IR_Kelma: ["IR_Kelma"],
        Khand: ["Khand"]

      },
      screens: { 
        'mlg': "850px",
        'mxl': "1400px",
        '3xl': "1750px",
        '4xl': "2000px",
        '5xl': "2400px"
      }
    },
  },
  plugins: [],
};
