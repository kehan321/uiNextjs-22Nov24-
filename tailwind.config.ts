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
      },
      container: {
        center: true,
        padding: '2rem', // Adds padding inside the container
        screens: {
          color: 'red',
          sm: '100%',    // Full width on small screens
          md: '750px',   // Max width of 750px on medium screens
          lg: '900px',
        }
      },
    },
  },
  plugins: [],
};

export default config;
