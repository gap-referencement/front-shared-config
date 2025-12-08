export default {
  meta: {
    fixable: 'code',
  },
  create(context) {
    return {
      ImportDefaultSpecifier: function (node) {
        if (node.local.name === 'React') {
          context.report({
            node,
            message: 'React namespace should not be imported',
            fix(fixer) {
              return fixer.replaceText(node.parent, context.sourceCode.getText(node.parent).replace(/\bReact( *,)? */g, ''));
            },
          });
        }
      },
      Identifier: function (node) {
        if (node.name === 'React' && node.parent.type === 'MemberExpression') {
          context.report({
            node,
            message: 'React namespace should not be used',
            fix(fixer) {
              const result = [];
              const fixUsage = fixer.replaceText(node.parent, context.sourceCode.getText(node.parent).replace(/\bReact\.(\w+)/g, (_, imported) => {
                result.push(fixer.insertTextBeforeRange([0, 0], `import { ${imported} } from 'react';\n`));
                return imported;
              }));

              result.push(fixUsage);
              return result;
            },
          });
        }
      },
    };
  },
}