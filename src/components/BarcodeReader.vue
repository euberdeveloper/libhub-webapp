<template>
  <v-container> <v-btn @click="get"> </v-btn> </v-container>
</template>

<script>
import { getISBN_from_image } from "@/services/api/isbn/index.js";

export default {
  name: "BarcodeReader",
  data: () => ({
    isbn: "",
  }),
  methods: {
    async get() {
      this.isbn = await getISBN_from_image("./assets/BarCode.jpg");
      console.log(this.isbn)
    },
  },
};
</script>
