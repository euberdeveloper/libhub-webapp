<template>
  <v-container>
    
    <Home/>
    
  </v-container>
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
  methods: {
    
  }  
};
</script>

<style>
  @import './styles/Home.css';
</style>
