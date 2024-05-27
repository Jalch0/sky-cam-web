import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/tw-elements/js/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '340px',
      },
      translate: {
        '-full-out': '-150%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "xsp": ['13.5px', '21px'],
      },
      colors: {
        gray: {
          700: '#4a5568', // Puedes ajustar este color según tus necesidades
        },
      },
      keyframes: {
        draw: {
          '0%': { strokeDasharray: '0, 400' },
          '100%': { strokeDasharray: '400, 400' },
        },
        undraw: {
          '0%': { strokeDasharray: '400, 400' },
          '100%': { strokeDasharray: '0, 400' },
        },
      },
      animation: {
        draw: 'draw 2s ease forwards',
        undraw: 'undraw 2s ease forwards',
      },
    },
  variants: {
    extend: {
      stroke: ['hover', 'group-hover'],
      strokeWidth: ['hover', 'group-hover'],
      animation: ['hover', 'group-hover'],
      textColor: ['hover', 'group-hover'],
      backgroundColor: ['hover', 'group-hover'],
    },
  },
},
  plugins: [require("tw-elements/plugin.cjs")],
};
export default config;
