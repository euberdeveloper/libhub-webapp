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
/*
 "ean_reader",
        "ean_8_reader",
        "code_39_reader",
        "code_39_vin_reader",
        "codabar_reader",
        "upc_reader",
        "upc_e_reader",
        "i2of5_reader",
        " 2of5_reader",
        "code_93_reader",
*/
</script>
