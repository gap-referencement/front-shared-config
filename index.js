import stylistic from '@stylistic/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import {defineConfig} from 'eslint/config';
import {importX} from 'eslint-plugin-import-x';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHookPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import reactRefresh from "eslint-plugin-react-refresh";
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import {configs as tsConfigs, plugin as tsPlugin} from 'typescript-eslint';

export default defineConfig({
  extends: [stylistic.configs.recommended, ...tsConfigs.recommended, importX.flatConfigs.recommended, importX.flatConfigs.typescript, reactRefresh.configs.recommended],
  languageOptions: {
    parserOptions: {
      warnOnUnsupportedTypeScriptVersion: false,
    }, parser: typescriptParser,
  },
  plugins: {
    '@stylistic': stylistic,
    '@typescript-eslint': tsPlugin,
    'import-x': importX,
    'jsx-a11y': jsxA11yPlugin,
    'react': reactPlugin,
    'react-hooks': reactHookPlugin,
    'simple-import-sort': simpleImportSort,
    'unused-imports': unusedImportsPlugin,
    'no-relative-import-paths': noRelativeImportPaths,
  },
  rules: {
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/comma-spacing': ['error', {after: true, before: false}],
    '@stylistic/jsx-one-expression-per-line': ['error', {allow: 'non-jsx'}],
    '@stylistic/jsx-wrap-multilines': ['error', {
      declaration: 'parens',
      assignment: 'parens',
      return: 'parens',
      arrow: 'parens',
      condition: 'parens',
      logical: 'parens',
      prop: 'ignore',
      propertyValue: 'ignore',
    },],
    '@stylistic/key-spacing': ['error', {afterColon: true, beforeColon: false, mode: 'strict'}],
    '@stylistic/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi', requireLast: true,
      }, singleline: {
        delimiter: 'semi', requireLast: false,
      }, multilineDetection: 'brackets',
    },],
    '@stylistic/multiline-ternary': ['error', 'always-multiline', {ignoreJSX: true},],
    '@stylistic/object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
    '@stylistic/semi': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // React
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },],
    'import-x/newline-after-import': 'error',
    'import-x/no-anonymous-default-export': [2, {
      allowArrowFunction: true,
    },],
    'import-x/no-duplicates': 'error',
    'import-x/no-named-as-default-member': 'off',
    'import-x/no-relative-packages': 'error',
    'import-x/no-relative-parent-imports': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'no-console': ['warn', {allow: ['error']}],
    'no-process-env': 'error',
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      {allowSameFolder: true, allowedDepth: 2, prefix: '~', rootDir: 'src'}
    ],
    'object-curly-spacing': ['error', 'always'],
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'typescript-eslint/no-use-before-define': 0,
  },
  settings: {
    'import-x/resolver': {
      typescript: true,
    },
  },
});
