export default {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: { jsx: true },
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'tailwindcss', 'jsx-a11y', 'react-hooks'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'plugin:tailwindcss/recommended',
		'prettier',
	],
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/no-explicit-any': 'warn',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
