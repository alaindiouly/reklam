module.exports = {
  env: {
    browser: true,
    es2021: true,
    // eslint plugin jest
    node: true,
    // 'jest/globals': true, // add jest to the environment variables to eliminate the linter errors/warnings
  },

  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    // ecmaFeatures: {
    // jsx: true, // Allows for the parsing of JSX
  },
  settings: {
    // react: {
    //   version: 'detect',
    // },
  },
  // plugins: ['react', 'testing-library', 'jest-dom', 'jest'],
  extends: [
    'eslint:recommended',
    // 'plugin:react/recommended',
    // 'plugin:testing-library/recommended',
    // 'plugin:jest-dom/recommended',
    'prettier',
  ],

  rules: {
    'no-unused-vars': 'warn',
    // 'react/prop-types': 'off',
    //*****eslint-plugin-react-testing-library
    // 'testing-library/await-async-query': 'error',
    // 'testing-library/no-await-sync-query': 'error',
    // 'testing-library/no-debug': 'warn',
    //*****eslint-plugin-jest-dom
    // 'jest-dom/prefer-checked': 'error',
    // 'jest-dom/prefer-enabled-disabled': 'error',
    // 'jest-dom/prefer-required': 'error',
    // 'jest-dom/prefer-to-have-attribute': 'error',
    //*****eslint plugin jest
    // 'jest/no-disabled-tests': 'warn',
    // 'jest/no-focused-tests': 'error',
    // 'jest/no-identical-title': 'error',
    // 'jest/prefer-to-have-length': 'warn',
    // 'jest/valid-expect': 'error',
  },
};
