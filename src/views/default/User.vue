<template>
  <v-container fluid>
    <user-settings />
  </v-container>
</template>

<script>
import UserSettings from "@/components/User/UserSettings.vue";

export default {
  name: "User",
  components: {
    UserSettings,
  },
  data: () => ({}),
};
</script>