import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        navy: "#0D1B2A",
        meridian: "#1E3A5F",
        ocean: "#6BAEDB",
        sky: "#A8D2F0",
        gold: "#F2C766",
        sand: "#F5E6C8",
        cloud: "#FAFAF2",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0D1B2A",
          foreground: "#FAFAF2",
        },
        secondary: {
          DEFAULT: "#F5E6C8",
          foreground: "#0D1B2A",
        },
        muted: {
          DEFAULT: "#F7F2E8",
          foreground: "#526173",
        },
        accent: {
          DEFAULT: "#F2C766",
          foreground: "#0D1B2A",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(13, 27, 42, 0.12)",
        gold: "0 18px 50px rgba(242, 199, 102, 0.2)",
      },
      backgroundImage: {
        "coastal-gradient": "radial-gradient(circle at top left, rgba(242,199,102,0.22), transparent 28%), linear-gradient(135deg, #FAFAF2 0%, #F5E6C8 45%, #A8D2F0 140%)",
        "navy-gradient": "radial-gradient(circle at top right, rgba(107,174,219,0.28), transparent 32%), linear-gradient(135deg, #0D1B2A 0%, #1E3A5F 100%)",
        "sun-glow": "radial-gradient(circle, rgba(242,199,102,0.35), transparent 55%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
