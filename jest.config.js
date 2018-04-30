module.exports = {
    setupTestFrameworkScriptFile: "./node_modules/jest-enzyme/lib/index.js",
    testPathIgnorePatterns: [".config.js", "__mocks__"],
    // testMatch: [],
    setupFiles: ["./__tests__/test.config.js"],
    // roots: ["<rootDir>", "<rootDir>/__tests__"],
    unmockedModulePathPatterns: ["react", "enzyme", "jest-enzyme"]
};
