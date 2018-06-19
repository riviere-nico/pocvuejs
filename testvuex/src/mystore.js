const mystore = {
  install: function(Vue)
  {
    Vue.prototype.$mystore = {
      get: function()
      {
        return mystore.yep;
      },
    }
  },
  yep: 'yep',
};

export default {
  mystore,
}
