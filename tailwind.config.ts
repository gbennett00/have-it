import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gray': '#494D5F',
        'dark-purple': '#845BB3',
        'light-purple': '#D0BDF4',
        'white-shaded': '#E5EAF5',
        'ice-blue': '#A0D2EB',
      },
    },
  },
  plugins: [],
};
export default config;
