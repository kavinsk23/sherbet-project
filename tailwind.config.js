/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Renault Brand Colors
        renault: {
          // Primary Yellow/Lime Brand Color
          yellow: "#C5FF00", // Main brand yellow/lime
          "yellow-light": "#D4FF33",
          "yellow-dark": "#A8E600",

          // Secondary Blues
          blue: "#2563EB", // Primary blue for buttons and accents
          "blue-light": "#3B82F6",
          "blue-dark": "#1D4ED8",
          "blue-navy": "#1E293B", // Dark navy for text

          // Grays and Neutrals
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },

          // Background Colors
          "bg-dark": "#0F0F0F", // Main dark background
          "bg-light": "#FFFFFF",
          "bg-section": "#F9F9F9",
          "bg-section-2": "#F1F1F3",

          // Green for Success States
          green: "#10B981",
          "green-light": "#35F29A",
          "green-dark": "#059669",
          "teal-green": "#CFE3DA",

          // Orange for Warnings/Highlights
          orange: "#F59E0B",
          "orange-light": "#FBBF24",
          "orange-dark": "#FE8E38",

          // Red for Errors
          red: "#EF4444",
          "red-light": "#F87171",
          "red-dark": "#DC2626",

          // Purple/Violet Accents
          purple: "#8B5CF6",
          "purple-light": "#A78BFA",
          "purple-dark": "#7C3AED",

          // Quiz/Interactive Colors
          correct: "#10B981", // Green for correct answers
          incorrect: "#EF4444", // Red for incorrect answers
          selected: "#3B82F6", // Blue for selected items

          // Card and Surface Colors
          "card-bg": "#FFFFFF",
          "card-border": "#E5E7EB",
          surface: "#F8F9FA",

          // Text Colors
          "text-primary": "#111827",
          "text-secondary": "#6B7280",
          "text-muted": "#9CA3AF",
          "text-inverse": "#FFFFFF",
        },
      },
      fontFamily: {
        // Primary Font - NouvelR (Renault's custom font)
        nouvel: ['"NouvelR"', "Arial", "sans-serif"],
        "nouvel-regular": ['"NouvelR-Regular"', "Arial", "sans-serif"],
        "nouvel-bold": ['"NouvelR-Bold"', "Arial Black", "sans-serif"],
        "nouvel-light": ['"NouvelR-Light"', "Arial", "sans-serif"],

        // Secondary Font - DM Sans (Modern, clean secondary font)
        "dm-sans": ['"DM Sans"', "system-ui", "sans-serif"],

        // System Fallbacks
        sans: [
          '"NouvelR"',
          '"DM Sans"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        system: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        // Custom font sizes matching the design
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1.1" }],
        "9xl": ["8rem", { lineHeight: "1.1" }],
      },
      spacing: {
        // Custom spacing values
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        // Custom border radius values
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        // Custom shadows for cards and components
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        button: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "button-hover": "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        "quiz-card": "0 4px 12px rgba(0, 0, 0, 0.1)",
        celebration: "0 10px 25px rgba(197, 255, 0, 0.3)",
      },
      animation: {
        // Custom animations
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        confetti: "confetti 3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        confetti: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(360deg)", opacity: "0" },
        },
      },
      backgroundImage: {
        // Custom gradients
        "hero-gradient": "linear-gradient(135deg, #0F0F0F 0%, #1F2937 100%)",
        "card-gradient": "linear-gradient(145deg, #FFFFFF 0%, #F8F9FA 100%)",
        "button-gradient": "linear-gradient(135deg, #C5FF00 0%, #A8E600 100%)",
        "celebration-gradient":
          "linear-gradient(135deg, #C5FF00 0%, #10B981 50%, #3B82F6 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        // Custom breakpoints if needed
        xs: "475px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
