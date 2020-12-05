<template>
  <v-container align-content-lg>
    <user-menu/>
  </v-container>
</template>

<script>
import UserMenu from "@/components/UserMenu.vue"

export default {
  name: "Dashboard",
  props: ["id"],
  data: () => ({
    info: null,
  }),
  components: {
    UserMenu
  }
};
</script>