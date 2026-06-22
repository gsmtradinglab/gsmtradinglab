import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gsm: { bg: "#050816", card: "#0b1224", green: "#00d084", red: "#ff4d4d", line: "#1e293b" }
      }
    }
  },
  plugins: []
};
export default config;
