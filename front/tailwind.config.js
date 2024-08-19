/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "29px": "29px",
      },
      boxShadow: {
        custom2: "1px 1px 20px #8a8a8a, -5px -5px 30px #ffffff",
      },
      backgroundImage: {
        "custom-gradient2": "linear-gradient(145deg, #ffffff, #eeeeee)",
        "custom-gradient3": "linear-gradient(145deg, #efffff, #ffffff)",
      },
    },
  },
  plugins: [],
};
