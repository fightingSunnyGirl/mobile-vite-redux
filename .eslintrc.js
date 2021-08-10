module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  // 解析路径引入报错问题
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-var': 'error',
    'prefer-template': 'error',
    'no-multi-assign': 'error',
    'no-case-declarations': 'error',
    'no-else-return': 'error',
    'newline-per-chained-call': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': ['error', 'multiline'],
    'object-shorthand': [
      'error',
      'methods',
      { avoidExplicitReturnArrows: true },
    ],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'id-length': [
      'off',
      {
        properties: 'never',
        exceptions: ['a', 'b', 'c', 'e', 'i', 'j', 'k', 'l', 'o', 't', 'v', '_', '$'],
      },
    ],
    'no-mixed-operators': 'warn',
    'no-param-reassign': 'warn',
    'lines-around-comment': ['error', { beforeBlockComment: true, beforeLineComment: false }],
    'padded-blocks': 'off',
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: 'function', next: 'function' },
      { blankLine: 'always', prev: ['block-like', 'block'], next: ['block-like', 'block'] },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'max-len': 'off',
    'import/no-cycle': 'off',
    'no-console': [
      2,
      {
        allow: [
          'warn',
          'error',
          'debug',
          'info',
        ],
      },
    ],
    // 忽略检测
    'import/no-unresolved': [2, { ignore: ['@/*', '@components/*'] }],
    // react rules
    camelcase: ['error', { allow: ['^UNSAFE_'] }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/prop-types': 'warn',
    'react/jsx-handler-names': ['off', { eventHandlerPrefix: '(handle|on|set)', checkLocalVariables: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-closing-tag-location': 0,
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    // ts rules
    '@typescript-eslint/no-explicit-any': 1,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  overrides: [
    {
      files: ['*.json'],
      extends: ['plugin:json/recommended-with-comments'],
    },
  ],
}
