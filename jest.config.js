const nextJest = require("next/jest");
/**
 * SWCtransform 를 사용하여 설정
 * 자동 mock 스타일시트( .css, .module.css및 해당 scss 변형), 이미지 가져오기 및@next/font
 * 로드 .env(및 모든 변형)process.env
 * node_modules 테스트 해결 및 변환 무시
 * .next 테스트 해결에서 무시
 * next.config.jsSWC 변환을 활성화하는 플래그 로드
 */
const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testMatch: [
    "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: ["**/*.[jt]s?(x)", "!**/*.config.[jt]s?(x)"],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  testEnvironment: "jest-environment-jsdom",
  // extensionsToTreatAsEsm: [".jsx"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
  },
  coverageThreshold: {
    "./pages/": {
      statements: 40,
      branches: 30,
      functions: 30,
      lines: 40,
    },
    // "./components/": {
    //   statements: 85,
    //   branches: 90,
    //   functions: 95,
    //   lines: 90,
    // },
  },
};

module.exports = createJestConfig(customJestConfig);
