// import style
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/swiper.min.css'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VideoBg from "vue-videobg"
import vueVimeoPlayer from "vue-vimeo-player"
import App from './App.vue'
import router from './router'
import store from './store'
 
 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

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
