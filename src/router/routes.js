const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Dashboard')
      },

      {
        path: '/computers',
        name: 'computers-dashboard',
        component: () => import('pages/computers/index')
      },
      {
        path: '/computers/results',
        name: 'computers-list',
        component: () => import('pages/computers/results/index')
      },
      {
        path: '/computers/results/:id',
        name: 'computer-detail',
        component: () => import('pages/computers/results/_id')
      },
      {
        path: '/computers/results/:id/events',
        name: 'computer-events',
        component: () => import('pages/computers/results/events')
      },
      {
        path: '/computers/results/:id/sync/simulation',
        name: 'computer-simulate',
        component: () => import('pages/computers/results/simulate')
      },

      {
        path: '/features',
        name: 'attributes-dashboard',
        component: () => import('pages/attributes/index')
      },
      {
        path: '/features/results',
        name: 'attributes-list',
        component: () => import('pages/attributes/results/index')
      },
      {
        path: '/features/results/:id',
        name: 'attribute-detail',
        component: () => import('pages/attributes/results/_id')
      },

      {
        path: '/tags',
        name: 'tags-dashboard',
        component: () => import('pages/tags/index')
      },
      {
        path: '/tags/results/:id',
        name: 'tag-detail',
        component: () => import('pages/tags/results/_id')
      },
    ],
    meta: { authRequired: true }
  },

  {
    path: '/login',
    component: () => import('layouts/Empty.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Login.vue') },
      {
        path: '/computers/results/:id/label',
        name: 'computer-label',
        component: () => import('pages/computers/results/label.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
