module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'semi': 'error',
        'object-curly-spacing': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
