/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0080ff",
          "primary-content": "#000616",
          "secondary": "#ff0000",
          "secondary-content": "#160000",
          "accent": "#007eff",
          "accent-content": "#000616",
          "neutral": "#1f160f",
          "neutral-content": "#cdcac9",
          "base-100": "#1a2227",
          "base-200": "#27241b",
          "base-300": "#1b271b",
          "base-content": "#cdd1d1",
          "info": "#00d7ff",
          "info-content": "#001116",
          "success": "#009a00",
          "success-content": "#000900",
          "warning": "#b56600",
          "warning-content": "#0c0400",
          "error": "#ff0045",
          "error-content": "#160002",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
}

