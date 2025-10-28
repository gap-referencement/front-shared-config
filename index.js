import stylistic from '@stylistic/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import {defineConfig} from 'eslint/config';
import prettier from 'eslint-config-prettier';
import prettierFlat from 'eslint-config-prettier/flat';
import {importX} from 'eslint-plugin-import-x';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHookPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import {configs as tsConfigs, plugin as tsPlugin} from 'typescript-eslint';

export default defineConfig({
    extends: [
      stylistic.configs.recommended,
      ...tsConfigs.recommended,
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      reactRefresh.configs.recommended,
      prettierFlat,
    ],
    plugins: {
      '@stylistic': stylistic,
      '@typescript-eslint': tsPlugin,
      'import-x': importX,
      'jsx-a11y': jsxA11yPlugin,
      'prettier': prettier,
      'react': reactPlugin,
      'react-hooks': reactHookPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImportsPlugin,
    },
    settings: {
      'import-x/resolver': {
        typescript: true,
      },
    },
    rules: {
      'import-x/no-relative-parent-imports': 'off',
      'import-x/no-relative-packages': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-duplicates': 'error',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      'typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/interface-name-prefix': 0,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // React
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react/display-name': 0,
      'react/no-unescaped-entities': 0,
      'jsx-a11y/accessible-emoji': 'off',
      'import-x/no-anonymous-default-export': [
        2,
        {
          allowArrowFunction: true,
        },
      ],
      'no-process-env': 'error',
      'no-console': ['warn', {allow: ['error']}],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/jsx-one-expression-per-line': ['error', {allow: 'non-jsx'}],
      '@stylistic/multiline-ternary': [
        'error',
        'always-multiline',
        {ignoreJSX: true},
      ],
      '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens',
          assignment: 'parens',
          return: 'parens',
          arrow: 'parens',
          condition: 'parens',
          logical: 'parens',
          prop: 'ignore',
          propertyValue: 'ignore',
        },
      ],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
          multilineDetection: 'brackets',
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
      parser: typescriptParser,
    },
  }
);
