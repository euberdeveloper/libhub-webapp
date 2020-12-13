<template>
  <v-container fluid>
    <v-btn
      @click="doNothing"
      height="205px"
      shaped
      width="205px"
      color="#ffffff"
      elevation="0"
    >
      <v-img
        style="height: 200px; width: 200px"
        src="@/assets/WidgetButton.png"
      >
      </v-img>
    </v-btn>
  </v-container>
</template>

<script>
//import { getLibraries } from "@/services/api/libraries/index.js";

export default {
  name: "Dashboard",
  data: () => ({}),
  methods: {
    doNothing() {
      alert("Non fa ancora nulla");
    },
  },
};
</script>
