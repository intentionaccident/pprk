import js from "@eslint/js"
import tsParser from "@typescript-eslint/parser"
import { defineConfig, globalIgnores } from "eslint/config"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
	globalIgnores([
		"dist/",
		"*.cjs",
		"*.mjs",
		"__generated__/",
	]),
	{
		settings: {
			react: {
				version: "19.0",
			},
		},

		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			react.configs.flat.recommended
		],

		plugins: {
			"simple-import-sort": simpleImportSort,
			react,
			"react-hooks": reactHooks,
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2018,
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},

		rules: {
			indent: ["error", "tab", {
				SwitchCase: 1,
			}],
			quotes: ["error", "double"],
			"no-unused-vars": ["off"],
			"@typescript-eslint/no-unused-vars": ["warn", {
				argsIgnorePattern: "^_",
			}],
			"@typescript-eslint/no-explicit-any": "off",

			"simple-import-sort/imports": ["error"],
			"simple-import-sort/exports": ["error"],
			"comma-dangle": ["error", "always-multiline"],
			"semi": [
				"error",
				"never",
			],
			"@typescript-eslint/no-empty-object-type": [
				"off",
			],
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
		},
	},
])
