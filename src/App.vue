<template>
  <v-app>
    <v-app-bar app color="#81D4FA">
      <router-view name="bar"/>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
@import "./styles/Home.css";
</style>
