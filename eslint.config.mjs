import js from "@eslint/js";
import globals from "globals";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["assets/js/**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["assets/js/**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: [
      "assets/css/**/*.css",
      "_sass/**/*.{css,scss}",
    ],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
    rules: {
      "css/use-baseline": ["warn", { "available": 2023 }],
    },
  },
  eslintConfigPrettier,
]);
