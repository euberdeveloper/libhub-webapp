<template>
  <v-app-bar app color="#260000">
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

    <v-btn color="#260000" elevation="0" tile @click="openLoginDialog">
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