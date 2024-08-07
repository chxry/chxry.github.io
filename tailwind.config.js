module.exports = {
  content: ["./app.html", "./src/**/*.svelte"],
  theme: {
    fontFamily: {
      mono: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [require("@catppuccin/tailwindcss")],
};
