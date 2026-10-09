/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#faf5ee",
        surface: "#ffffff",
        woodlight: "#f5ede3",
        oak: "#c9a27a",
        wood: "#a9714b",
        wooddeep: "#7a4e2e",
        ink: "#33261c",
        inkbright: "#241a12",
        muted: "#7d6857",
        sage: "#6b8e5a",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        wood: "0 10px 30px rgba(90, 62, 40, 0.10)",
        woodlg: "0 18px 50px rgba(90, 62, 40, 0.16)",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
