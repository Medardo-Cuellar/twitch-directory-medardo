/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-twitch": '#18181b',
        "text-twitch": '#fafafa',
        "purple-twitch": '#9147ff',
        "background-twitch-2": '#19171c',
      }
    },
  },
  plugins: [],
}

