export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '数据管理',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  // {
  //   name: '分类管理',
  //   icon: 'table',
  //   path: '/type',
  //   component: './TypeList',
  // },
  {
    path: '/',
    redirect: '/list',
  },
  {
    component: './404',
  },
];
