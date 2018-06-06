/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';

Vue.config.productionTip = false;

const mystore = {
  install: function(Vue)
  {
    Vue.prototype.$mystore = {
      get: function()
      {
        return mystore.yep;
      }
    }
  },
  yep: 'yep',
};

Vue.use(mystore);

new Vue({
  router,
  mystore,
  render: h => h(App),
}).$mount('#app');
