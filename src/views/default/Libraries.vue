<template>
  <display-libraries/>
</template>

<script>
import DisplayLibraries from '@/components/DisplayLibraries.vue'

export default {
  name: "Libraries",
  props: ["id"],
  components:{
    DisplayLibraries,
  },
  data: () => ({
    
  }),
};
</script>