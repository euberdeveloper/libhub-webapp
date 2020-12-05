<template>
  <v-container align-content-lg>
  </v-container>
</template>

<script>
import { getLibraries } from "@/services/api/libraries/index.js"

export default {
  name: "Dashboard",
  props: ["id"],
  data: () => ({
    info: null,
  }),
   async mounted() {
    try {
      this.libraries = await getLibraries();
      console.log(this.libraries);
    } catch (error) {
      window.alert(error);
    }
  }
};
</script>