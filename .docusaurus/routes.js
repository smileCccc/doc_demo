import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/doc_demo/zh-Hans/docs',
    component: ComponentCreator('/doc_demo/zh-Hans/docs', '558'),
    routes: [
      {
        path: '/doc_demo/zh-Hans/docs',
        component: ComponentCreator('/doc_demo/zh-Hans/docs', '3ea'),
        routes: [
          {
            path: '/doc_demo/zh-Hans/docs',
            component: ComponentCreator('/doc_demo/zh-Hans/docs', 'd81'),
            routes: [
              {
                path: '/doc_demo/zh-Hans/docs/category/residential-proxies',
                component: ComponentCreator('/doc_demo/zh-Hans/docs/category/residential-proxies', '535'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc_demo/zh-Hans/docs/intro',
                component: ComponentCreator('/doc_demo/zh-Hans/docs/intro', 'f63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc_demo/zh-Hans/docs/residential-proxies/api-extraction',
                component: ComponentCreator('/doc_demo/zh-Hans/docs/residential-proxies/api-extraction', 'f2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc_demo/zh-Hans/docs/residential-proxies/introduction',
                component: ComponentCreator('/doc_demo/zh-Hans/docs/residential-proxies/introduction', 'abf'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/doc_demo/zh-Hans/',
    component: ComponentCreator('/doc_demo/zh-Hans/', '7d3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
