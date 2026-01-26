export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs'
    },
    env: {
      node: true,
      jest: true
    },
    rules: {
      'no-unused-vars': 'warn'
    }
  }
];

