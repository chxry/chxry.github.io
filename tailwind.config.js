export default {
  content: ["./src/**/*.astro"],
  theme: {
    fontFamily: {
      mono: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [require("@catppuccin/tailwindcss")],
};
