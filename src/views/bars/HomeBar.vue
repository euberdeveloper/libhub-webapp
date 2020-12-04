<template>
  <v-container>
    <div class="d-flex align-center">
      <v-img
        alt="Lib-hub Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="100"
      />
    </div>


    <div class="float-right">
      <v-btn to="login" color="#81D4FA" elevation="0" tile>
        <span class="mr-2">Login </span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeBar",
};
</script>