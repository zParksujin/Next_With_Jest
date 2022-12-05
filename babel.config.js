module.exports = {
  presets: [
    "next/babel",
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    ["styled-components", { ssr: true }],
    "@babel/plugin-transform-runtime",
  ],
};
