// energy-monitor-backend/eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        node: true,
      },
    },
    rules: {
      "no-console": "error",
      "prefer-const": "warn",
    },
  },
];