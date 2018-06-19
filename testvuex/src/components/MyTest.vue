<template>
  <div class="test">
    <h1 v-on:click="couCou">{{msge}} !</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MyTest',
  props: {
    msg: String,
  },
  computed: {
    msge: function () {
      return this.$mystore.get();
    },
  },
  methods: {
    couCou() {
      this.$mystore.set();
      console.log(this.$mystore.get());
    },
  },
};
</script>
