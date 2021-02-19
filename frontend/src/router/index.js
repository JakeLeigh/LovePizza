import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from '@/components/Dashboard'
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'
import {LoginCallback} from '@okta/okta-vue'

Vue.use(VueRouter);

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-49142339.okta.com/oauth2/default',
  clientId: '0oa6uun73eGcIxHyZ5d6',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
})
Vue.use(OktaVue, { oktaAuth })


const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: '/implicit/callback',
    component: LoginCallback
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
