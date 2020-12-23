module.exports = {
  preset: 'ts-jest',
  // preset: 'ts-jest/presets/js-with-ts' Только если используется js/jsx
  testEnvironment: 'node',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {	  "\\.(css)": "identity-obj-proxy" },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};