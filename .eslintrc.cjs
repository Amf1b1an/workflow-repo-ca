module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vitest/globals": true,
  },
  extends: ["eslint:recommended", "plugin:vitest/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  plugins: ["vitest"],
};
