// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     'plugin:@typescript-eslint/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': 'warn',
//   },
// }

module.exports = {
    env: {
        browser: true,
        es2022: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:etc/recommended',
        'plugin:unicorn/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'unicorn',
        '@typescript-eslint',
        '@typescript-eslint/internal',
        'deprecation',
        'eslint-comments',
        'eslint-plugin',
        'import',
        'jest',
        'simple-import-sort',
        'unicorn',
        'prettier'
    ],
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.tsx', '.js', 'jsx'],
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'max-len': [
            'warn',
            {
                code: 180,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
            },
        ],
        'import/prefer-default-export': 'off',
        'comma-dangle': ['error', 'never'],
        'import/no-unresolved': [
            'error',
            {
                ignore: ['^react$'],
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['src/stories/**/*.stories.tsx'],
            },
        ],
        'no-multiple-empty-lines': 'error',
        'sort-keys': [
            'error',
            'asc',
            {
                caseSensitive: true,
                natural: false,
                minKeys: 3,
            },
        ],
        'etc/prefer-interface': 'error',
        'unicorn/prevent-abbreviations': [
            'error',
            {
                allowList: {
                    props: true,
                },
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
        react: {
            version: '18',
        },
    },
};
