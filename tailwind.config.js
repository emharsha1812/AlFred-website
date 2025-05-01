import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rich: {
          black: "#0B0E14",
          blue: {
            DEFAULT: "#1976D2",
            dark: "#0D47A1",
            light: "#42A5F5",
          },
          green: {
            DEFAULT: "#50C878",
            dark: "#2E8B57",
            light: "#7FFFD4",
          },
          gray: {
            100: "#F5F5F7",
            200: "#E4E4E7",
            300: "#D1D1D6",
            400: "#A1A1AA",
            500: "#71717A",
            600: "#52525B",
            700: "#3F3F46",
            800: "#27272A",
            900: "#18181B",
          },
        },
        glass: {
          blue: "rgba(25, 118, 210, 0.05)",
          white: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(11, 14, 20, 0.92)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: [
          "var(--font-jetbrains-mono)",
          "SF Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": [
          "6rem",
          { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      borderRadius: {
        xl: "12px",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        "glass-lg": "0 10px 30px rgba(0, 0, 0, 0.2)",
        "inner-glow": "inset 0 0 20px 0 rgba(255, 255, 255, 0.05)",
        "blue-glow": "0 0 15px rgba(25, 118, 210, 0.5)",
        "green-glow": "0 0 15px rgba(80, 200, 120, 0.5)",
      },
      spacing: {
        96: "24rem",
        128: "32rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "cursor-blink": "cursor-blink 1.2s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(25, 118, 210, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(25, 118, 210, 0.8)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        alfred: {
          primary: "#1976D2",
          secondary: "#50C878",
          accent: "#9333EA",
          neutral: "#27272A",
          "base-100": "#0B0E14",
          "base-200": "#0D1117",
          "base-300": "#18181B",
        },
      },
    ],
  },
};
