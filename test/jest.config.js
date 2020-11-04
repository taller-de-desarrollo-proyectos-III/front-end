module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["node_modules", "test", "src/index.ts"],
  globals: {
    "ts-jest": {
      isolatedModules: true
    }
  },
  verbose: false,
  rootDir: "../",
  setupFiles: ["core-js"],
  watchPathIgnorePatterns: ["./node_modules/"],
  testPathIgnorePatterns: [".d.ts", ".js"]
};
