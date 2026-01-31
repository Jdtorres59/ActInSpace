import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem"
      }
    },
    extend: {
      colors: {
        space: {
          900: "#0A0B14",
          800: "#111428",
          700: "#171C33",
          600: "#1F2540"
        },
        earth: {
          500: "#2F8F6A",
          400: "#58CF96",
          300: "#8FE3B8"
        },
        sky: {
          500: "#5B4BFF",
          400: "#8B7AFF"
        },
        leaf: {
          500: "#3F9C73",
          400: "#6ED4A6"
        },
        amber: {
          500: "#C9823E",
          400: "#DFA76C"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "space-glow": "radial-gradient(900px 500px at 15% 10%, rgba(88, 207, 150, 0.12), transparent 60%), radial-gradient(800px 480px at 85% 0%, rgba(139, 122, 255, 0.12), transparent 65%)",
        "subtle-grid": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      boxShadow: {
        glow: "0 0 20px rgba(139, 122, 255, 0.2)",
        card: "0 18px 40px rgba(4, 8, 14, 0.35)"
      },
      animation: {
        float: "float 18s ease-in-out infinite",
        shimmer: "shimmer 12s linear infinite",
        pulseSoft: "pulseSoft 12s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.75" }
        }
      }
    }
  },
  plugins: []
};

export default config;
