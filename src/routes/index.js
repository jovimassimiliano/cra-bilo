import { Home, About, ErrorPage } from 'pages';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/about', exact: true, component: About },
  { path: '*', exact: true, component: ErrorPage }
]

export default routes;