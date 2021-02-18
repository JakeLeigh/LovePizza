import Vue from "vue";
import VueRouter from "vue-router";

import Auth from '@okta/okta-vue';
import Dashboard from '@/components/Dashboard';

Vue.use(Auth, {
  issuer: 'https://dev-49142339.okta.com/oauth2/default',
  client_id: '0oa6uun73eGcIxHyZ5d6',
  redirect_url: 'https://localhost:5001/implicit/callback',
  scope: 'openid profile email'
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    props: true
  },
  {
    path: "/implicit/callback",
    component: Auth.handleCallback()
  },
];

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router;
