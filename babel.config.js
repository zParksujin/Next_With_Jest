module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "next/babel",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    ["styled-components", { ssr: true }],
    "@babel/plugin-transform-runtime",
  ],
};
