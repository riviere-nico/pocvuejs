/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';
import MyPlugin from './mystore.js';

Vue.config.productionTip = false;

Vue.use(MyPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
