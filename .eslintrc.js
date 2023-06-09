/** @type {import("eslint").Linter.Config} */

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },

  plugins: ['@typescript-eslint', 'import'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
    'plugin:prettier/recommended',
  ],

  rules: {
    'prefer-template': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',

    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',

    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },

  ignorePatterns: ['!.*', 'node_modules', 'dist', 'compiled', 'build', 'trpc-api-export/dist'],

  settings: {
    typescript: {},
    'import/resolver': {
      typescript: { project: 'tsconfig.json' },
    },
  },
};
