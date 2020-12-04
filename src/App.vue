
<template>
    <router-view><Home/></router-view>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    // 
  }),
  
};
</script>

<style>
  @import './styles/Home.css';
</style>
