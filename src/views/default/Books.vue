<template>
  <display-books/>
</template>

<script>
import DisplayBooks from '@/components/DisplayBooks.vue'

export default {
  name: "Books",
  props: ["id"],
  components:{
    DisplayBooks,
  },
  data: () => ({
    
  }),
};
</script>