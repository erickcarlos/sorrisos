import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'header': "url('../assets/images/bg-image.jpg')",
    },
    extend: {
      colors: {
        "primary-color": "#EC7000",
        "primary-color-dark": "#D95E00",
        "gray-dark": "#333333",
        "gray-light": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
