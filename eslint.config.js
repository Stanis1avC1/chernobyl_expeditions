/** @type {import("eslint").Linter.FlatConfig} */
module.exports = [
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false, // Додайте це, якщо у вас немає Babel конфігурації
      },
    },
    rules: {
      // Ваші правила тут
    },
  },
];
