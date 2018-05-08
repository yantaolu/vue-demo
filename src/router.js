export default [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['./views/index'], resolve)
  }, {
    path: '*',
    redirect: '/'
  }
]
