export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn'
    }
  }
];

