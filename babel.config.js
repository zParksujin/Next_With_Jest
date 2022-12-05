module.exports = {
  presets: ["next", "@babel/preset-env"],
  plugins: [
    ["styled-components", { ssr: true }],
    // "@babel/plugin-transform-runtime",
  ],
};
