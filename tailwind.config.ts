import type { Config } from "tailwindcss";
import { colors } from "./src/components/color/default";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        contact: "#5f6369",
        aside: "rgba(2, 12, 27, 0.7)",
        "contact-button": "#d3dbe8",
        "secondary-hover": "#808080",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "dark-project-card": "#42415a",
        "nav-mobile-menu-icon": "#404040",
        "dark-nav-mobile-menu-icon": "#adadad",
        "loader-gray": "#5f6369",
        "loader-bright": "#fcfcfc",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "aside-width": "-10px 0px 30px -15px rgba(2, 12, 27, 0.7)",
      },
      screens: {
        xs: "450px",
        "project-section-openrice-sm": "402px",
        "project-section-more-features-openrice-sm": "466px",
        "project-section-openrice-md": "806px",
        "project-section-more-features-openrice-md": "947px",
        "home-section-sm": "413px",
      },
      width: {
        aside: "min(75vw,300px)",
      },
      zIndex: {
        "99": "99",
      },
      backgroundColor: {
        'light-bg': colors.lightBackground,
        'dark-bg': colors.darkBackground,
        'light-loading-bg': colors.lightLoadingBackground,
        'dark-loading-bg': colors.darkLoadingBackground,
      }
    },
  },
  plugins: [],
};
export default config;
