# All Manager Shared ESLint Configuration

This package provides a shared ESLint configuration for All Manager frontend projects, ensuring consistent code style and best practices across the codebase.

## Features

- TypeScript support
- React Hooks rules
- JSX A11y accessibility rules
- Import/export sorting
- Unused imports detection
- Stylistic rules for consistent code style

## Installation

1. First, install the required peer dependencies in your project:

```bash
npm install --save-dev eslint @all-manager/front-shared-config
```

2. Create or update your ESLint configuration file (`.eslintrc.js` or `eslint.config.js`):

```javascript
// eslint.config.js
import allManagerConfig from '@all-manager/front-shared-config';

export default [
  ...allManagerConfig,
  // Add your project-specific rules here
  {
    rules: {
      // Your custom rules
    }
  }
];
```

## Editor Integration

For the best development experience, we recommend using the following setup:

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VS Code
2. Add the following to your VS Code settings (`.vscode/settings.json`):

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

## Recommended VS Code Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Scripts

Add these scripts to your `package.json` for convenience:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
  }
}
```

## Versioning

This package follows [Semantic Versioning](https://semver.org/).

## License

ISC
