// jest.config.js
module.exports = {
  testMatch: [
    "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  moduleFileExtensions: ["js"],
  setupFilesAfterEnv: ["./jest.setup.js"],
};
