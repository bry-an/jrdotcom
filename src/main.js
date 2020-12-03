import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoBg from "vue-videobg"
import vueVimeoPlayer from "vue-vimeo-player"

Vue.component('video-bg', VideoBg)
Vue.use(vueVimeoPlayer)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {
    VideoBg,
  },
  render: h => h(App)
}).$mount('#app')
