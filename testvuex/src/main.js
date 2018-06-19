/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';
const mystore = {
  install: function(Vue)
  {
    Vue.prototype.$mystore = {
      get: function()
      {
        return mystore.yep;
      },
      set: function()
      {
        mystore.yep = 'aa';
      },
    }
  },
  yep: 'yep',
};
Vue.config.productionTip = false;

Vue.use(mystore);

new Vue({
  router,
  mystore,
  render: h => h(App),
}).$mount('#app');
