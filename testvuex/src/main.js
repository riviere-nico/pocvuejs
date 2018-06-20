/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';
import Vuey from './mystore.js';

Vue.config.productionTip = false;

Vue.use(Vuey);

let db = new Vuey.Db({
  url: 'aa',
});

new Vue({
  router,
  db,
  render: h => h(App),
}).$mount('#app');
