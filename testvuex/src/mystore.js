
class MyPluginStore {
  constructor(data = {}) {
    this.storeVM = new Vue({ data });
  }

  get state() {
    return this.storeVM.$data;
  }
}

const MyPlugin = {
  Store: MyPluginStore,
  install(Vue) {
    Vue.mixin({
      beforeCreate(Vue) {
        this.$myPlugin = new MyPlugin.Store({ count: 0 });
      },
    });
  },
};

export default MyPlugin;
