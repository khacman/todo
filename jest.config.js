module.exports = {
    setupTestFrameworkScriptFile: "./node_modules/jest-enzyme/lib/index.js",
    testPathIgnorePatterns: [".config.js"],
    // testMatch: [],
    setupFiles: ["./__tests__/test.config.js"],
    unmockedModulePathPatterns: ["react", "enzyme", "jest-enzyme"]
};
