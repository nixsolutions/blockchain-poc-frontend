import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import  store  from  './store'
import axios from './api/axios'
import vueAxios from 'vue-axios'

import './assets/scss/style.scss'
import './assets/font/icomoon/style.css'

Vue.config.productionTip = false;

Vue.use(vueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
