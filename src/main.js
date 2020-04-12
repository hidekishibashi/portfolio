import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './assets/css/reset.css';

Vue.config.productionTip = false;
Vue.use(Vuex, axios, VueAxios);
Vue.prototype.$axios = axios;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
