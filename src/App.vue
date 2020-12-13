<template>
  <v-app>
    
    <router-view name="bar"/>

    <v-main class="fluid">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  beforeCreate () {
    //document.title = "LibHub"
  },
  data: () => ({
    //
  }),
};
</script>

<style>
@import "./styles/Home.css";
</style>
