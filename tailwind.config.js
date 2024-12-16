/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          foreground: '#ffffff',
        },
        background: '#ffffff',
      },
    },
  },
  plugins: [],
}