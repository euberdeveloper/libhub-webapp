<template>
  <display-libraries/>
</template>

<script>
import DisplayLibraries from '@/components/DisplayLibraries.vue'

export default {
  name: "Libraries",
  components:{
    DisplayLibraries,
  },
  data: () => ({
    uid: "none",
  }),
  mounted(){
    this.uid = this.$store.state.UserId;
  }
};
</script>