<template>
  <v-container align-content-lg>
    {{ $route.params.id }}
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  props: ["id"],
  data: () => ({
    info: null,
  }),
};
</script>