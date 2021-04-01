// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import vueVimeoPlayer from 'vue-vimeo-player'
import carousel from 'v-owl-carousel'
import VueProgressBar from 'vue-progressbar'

// css and scss files include
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/font-awesome.min.css'
import './assets/index.scss'


// remove below file for change color
// import './assets/css/color/color-2.css'

Vue.use(BootstrapVue)
Vue.use(vueVimeoPlayer)
Vue.component('carousel', carousel)
Vue.config.productionTip = false
const options = {
  color: '#7DEADF',
  failedColor: '#7DEADF',
  thickness: '4px',
  transition: {
    speed: '0.5s',
    opacity: '0.10s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, options)

export const vues = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
