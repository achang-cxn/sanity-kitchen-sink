export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6668c96ac8154e153ec678',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zmrf5zet',
                  apiId: 'd711f611-b2ca-401d-8282-624fef27f1c4'
                },
                {
                  buildHookId: '5f6668c96ac8154e153ec679',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mgcrc86p',
                  apiId: 'b8e1dfe2-e66d-43fd-bd86-8e0366d767fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/achang-cxn/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mgcrc86p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
