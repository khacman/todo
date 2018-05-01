module.exports = {
    setupTestFrameworkScriptFile: "./node_modules/jest-enzyme/lib/index.js",
    testPathIgnorePatterns: [".config.js", "__mocks__"],
    // testMatch: [],
    setupFiles: ["./__tests__/test.config.js"],
    // roots: ["<rootDir>", "<rootDir>/__tests__"],
    unmockedModulePathPatterns: ["react", "enzyme", "jest-enzyme"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    }
};
