
let Vue; // bind on install

export class Db {
  constructor(data = {}) {
    this.storeVM = new Vue({ data });
  }

  get state() {
    return this.storeVM.$data;
  }

  set state(v) {
    this.storeVM.$data.url = v;
  }
}

/**
 * Vuex init hook, injected into each instances init hooks list.
 */

function vueyInit() {
  const options = this.$options;
  // store injection
  if (options.db) {
    this.$db = typeof options.db === 'function'
      ? options.db()
      : options.db;
  } else if (options.parent && options.parent.$db) {
    this.$db = options.parent.$db;
  }
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[vuey] already installed. Vue.use(vuey) should be called only once.');
    }
    return;
  }
  Vue = _Vue;
  // applyMixin(Vue)
  const version = Number(Vue.version.split('.')[0]);
  if (version < 2) {
    return;
  }

  Vue.mixin({
    beforeCreate: vueyInit,
  });
}

export default {
  Db,
  install,
};
