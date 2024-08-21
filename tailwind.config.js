/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-btn": "#80bdff",
        "my-black": "rgb(33, 37, 41)",
      },
    },
  },
  plugins: [],
};
