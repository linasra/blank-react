module.exports = {
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(png|svg|pdf|jpg|jpeg)$": "<rootDir>/src/mocks/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/mocks/setupTests.js"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/*.d.ts",
    "!**/index.tsx",
    "!**/Router.tsx",
  ],
};
