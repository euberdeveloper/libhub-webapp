<template>
  <v-container fluid>
    <freinds-tabs/>
  </v-container>
</template>

<script>
import FreindsTabs from '@/components/FreindsTabs.vue';
export default {
  components: { FreindsTabs },
  name: "Friends",
  data: () => ({
  }),
};
</script>