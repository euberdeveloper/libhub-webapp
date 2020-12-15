<template>
  <v-app-bar app color="#62000F">
    <div class="d-flex align-center">
      <v-img
        alt="Lib-hub Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo-rounded.png"
        transition="scale-transition"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn text tile @click="openLoginDialog">
      <span class="mr-2 button-white" >Login </span>
      <v-icon color="white">mdi-account-circle</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  name: "HomeBar",
  methods:{
    openLoginDialog(){
      this.$store.commit('showLoginDialog')
    }
  }
};
</script>