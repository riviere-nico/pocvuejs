<template>
  <div class="test">
    <h1 @click="seturl">{{$db.state.url}} !</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MyTest',
  props: {
    msg: String,
  },
  methods: {
    seturl: function() {
      this.$db.state.url = 'r';
    }
  },
};
</script>
