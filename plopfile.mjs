export default function plopGenerator(plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'this is a skeleton for the creation of a react component base structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
      {
        type: 'input',
        name: 'path',
        message: 'path to component',
      },
      {
        type: 'confirm',
        name: 'hasTypes',
        message: 'component have props',
      },
    ],
    actions: function (data) {
      var actions = []

      if (data.hasTypes) {
        actions.push(
          ...[
            {
              type: 'add',
              path: '{{path}}/{{kebabCase name}}/types.ts',
              templateFile: './plop-templates/component/component_types.hbs',
            },
            {
              type: 'add',
              path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
              templateFile: './plop-templates/component/component_with_types.hbs',
            },
          ]
        )
      } else {
        actions.push({
          type: 'add',
          path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
          templateFile: './plop-templates/component/component.hbs',
        })
      }

      actions.push(
        ...[
          {
            type: 'add',
            path: '{{path}}/{{kebabCase name}}/index.ts',
            templateFile: './plop-templates/component/component_index.hbs',
          },
        ]
      )

      return actions
    },
  })
}
