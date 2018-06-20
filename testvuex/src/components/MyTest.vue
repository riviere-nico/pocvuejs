<template>
  <div class="test">
    <h1>{{this.$myPlugin.state.count}} !</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MyTest',
  props: {
    msg: String,
  },
};
</script>
