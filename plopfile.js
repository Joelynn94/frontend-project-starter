export default function (plop) {
  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: 'Include test file?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'withStyles',
        message: 'Include CSS module?',
        default: true,
      },
    ],
    actions: data => {
      const actions = [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/index.ts.hbs',
        },
      ];

      if (data.withStyles) {
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
          templateFile: 'plop-templates/Component.module.css.hbs',
        });
      }

      if (data.withTest) {
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'plop-templates/Component.test.tsx.hbs',
        });
      }

      return actions;
    },
  });
}
