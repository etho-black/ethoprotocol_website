import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/main_page/main';
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Feature from '@/components/feature';
import Price from '@/components/price';
import Screenshots from '@/components/screenshots';
import Team from '@/components/team';
import Map from '@/components/map';
import Footer from '@/components/footer';
import PageNotFound from '@/components/pagenotfound';
import js from '@/components/js';
import Partners from '../components/partners';
import Explorer from '../components/explorer';
import Bpsaa from '../components/bpsaa';

Vue.use(Router);
Vue.component('Navbar', Navbar);
Vue.component('About', About);
Vue.component('Feature', Feature);
Vue.component('Price', Price);
Vue.component('Screenshots', Screenshots);
Vue.component('Team', Team);
Vue.component('Map', Map);
Vue.component('Footer', Footer);
Vue.component('js', js);
Vue.component('Partners', Partners);
Vue.component('Explorer', Explorer);
Vue.component('Bpsaa', Bpsaa);

export default new Router({
  mode: 'history',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Main_page',
      components: {
        default: Main,
        navbar: Navbar,
      },
    },
    {
      path: '/tovo/404',
      name: 'pagenotfound',
      component: PageNotFound,
    },
    {
      path: '*',
      redirect: '/tovo/404',
    }],
});
