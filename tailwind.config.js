/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "deepblue-100": "var(--deepblue-100)",
        "deepblue-140": "var(--deepblue-140)",
        "gray-70": "var(--gray-70)",
        white: "var(--white)",
        "whitetransparent-10": "var(--whitetransparent-10)",
      },
      fontFamily: {
        "body-bold": "var(--body-bold-font-family)",
        "body-medium": "var(--body-medium-font-family)",
        "body-medium-link": "var(--body-medium-link-font-family)",
        "caption-m-medium": "var(--caption-m-medium-font-family)",
        "header-1": "var(--header-1-font-family)",
        "header-3": "var(--header-3-font-family)",
      },
    },
  },
  plugins: [],
};
