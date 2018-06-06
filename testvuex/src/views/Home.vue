<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App :) !!"/>
    <MyTest />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import MyTest from '@/components/MyTest.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    MyTest,
  },
};
</script>
