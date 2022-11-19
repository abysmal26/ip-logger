module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'no-shadow': 'error',
		'@typescript-eslint/no-shadow': ['error'],
		'no-use-before-define': 'error',
		'@typescript-eslint/no-use-before-define': ['error'],
		'complexity': ['error', 10],
		'no-await-in-loop': 'warn',
		'no-eval': 'error',
		'no-implied-eval': 'error',
		'prefer-promise-reject-errors': 'warn',
		// ///
		'arrow-spacing': ['warn', { 'before': true, 'after': true }],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-style': 'error',
		'curly': ['error', 'multi-line', 'consistent'],
		'dot-location': ['error', 'property'],
		'handle-callback-err': 'off',
		'indent': ['error', 4],
		'keyword-spacing': 'error',
		'max-nested-callbacks': ['error', { 'max': 4 }],
		'max-statements-per-line': ['error', { 'max': 2 }],
		'no-console': 'off',
		'no-empty-function': 'error',
		'no-floating-decimal': 'error',
		'no-inline-comments': 'error',
		'no-lonely-if': 'error',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1, 'maxBOF': 0 }],
		'no-trailing-spaces': ['error'],
		'no-var': 'error',
		'object-curly-spacing': ['error', 'always'],
		'prefer-const': 'error',
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always'
		}],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'yoda': 'error'
	}
};
