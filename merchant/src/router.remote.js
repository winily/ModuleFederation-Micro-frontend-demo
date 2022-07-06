export default [
  {
    name: 'merchant',
    path: '/merchant',
    component: () => import('./Home.vue'),
    children: [
      { path: '', component: () => import('./Info.vue') },
      { path: 'info', component: () => import('./Info.vue') },
      { path: 'goods', component: () => import('./Goods.vue') },
    ]
  },
]