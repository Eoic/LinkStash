import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'no-unused-vars': 'off',
            curly: ['error', 'multi'],
            quotes: ['error', 'single'],
            indent: ['error', 4],
            'max-len': ['error', 120],
            'semi': ['error', 'always'],
            'eol-last': ['error', 'always'],
            'comma-dangle': ["error", {
                "arrays": "never",
                "objects": "always",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
    },
    {
        files: ['**/*.js'],
        ...tseslint.configs.disableTypeChecked,
    },
)


// export default tseslint.config(
//     eslint.configs.recommended,
//     ...tseslint.configs.recommendedTypeChecked,
//     {
//         files: ['**/*.{ts,tsx}'],
//         languageOptions: {
//             parserOptions: {
//                 project: './tsconfig.eslint.json',
//                 tsconfigRootDir: import.meta.dirname,
//             },
//         },
//         rules: {
//             'no-unused-vars': 'off',
//             curly: ['error', 'multi'],
//             quotes: ['error', 'single'],
//             indent: ['error', 4],
//             'max-len': ['error', 120],
//             'semi': ['error', 'always'],
//             'eol-last': ['error', 'always'],
//             'comma-dangle': ["error", {
//                 "arrays": "never",
//                 "objects": "always",
//                 "imports": "never",
//                 "exports": "never",
//                 "functions": "never"
//             }],
//             '@typescript-eslint/no-unused-vars': [
//                 'warn',
//                 {
//                     argsIgnorePattern: '^_',
//                     varsIgnorePattern: '^_',
//                     caughtErrorsIgnorePattern: '^_',
//                 },
//             ],
//         },
//     },
//     {
//         files: ['**/*.js'],
//         ...tseslint.configs.disableTypeChecked,
//     },
// );
