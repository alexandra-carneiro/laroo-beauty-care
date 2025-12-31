import type { Config } from "tailwindcss";

import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F7F5F0", // Off-White
        foreground: "#2F3825", // Moss (Verde Musgo Escuro)
        primary: {
          DEFAULT: "#2F3825", // Moss Escuro
          foreground: "#F7F5F0", // Off-White
        },
        secondary: {
          DEFAULT: "#8C5E45", // Terracotta Escuro
          foreground: "#F7F5F0", // Off-White
        },
        muted: {
          DEFAULT: "#D9CFC4", // Sand/Beige
          foreground: "#2F3825", // Moss
        },
        accent: {
          DEFAULT: "#8C5E45", // Terracotta
          foreground: "#F7F5F0", // Off-White
        },
        popover: {
          DEFAULT: "#F7F5F0", // Off-White
          foreground: "#2F3825", // Moss
        },
        card: {
          DEFAULT: "#F7F5F0", // Off-White
          foreground: "#2F3825", // Moss
        },
        moss: {
          DEFAULT: "#2F3825",
          light: "#4A5240",
          dark: "#1F2618",
        },
        terracotta: {
          DEFAULT: "#AD8A72",
          dark: "#8D6A52",
        },
        sand: "#D9CFC4",
        offwhite: "#F7F5F0",
        cream: "#F7F5F0",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
