<template>
  <div class="test">
    <h1>{{testcomputed}} </h1>
  </div>
</template>

<script>
export default {
  name: 'MyTest',
  props: {
    msg: String,
  },
  computed: {
    testcomputed() {
      return this.$mystore.get();
    },
  },
};
</script>
