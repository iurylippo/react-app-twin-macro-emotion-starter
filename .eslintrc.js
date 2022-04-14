module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
      createDefaultProgram: true,
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js', 'tailwind.config.js'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // 'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
          'unused-imports/no-unused-imports': 'error',
          // 'unused-imports/no-unused-vars': [
          // 	'warn',
          // 	{ 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' }
          // ]
    },
  };
  