<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row align="center" xs>
        <v-file-input label="File input" id="files"> </v-file-input>
        <v-btn @click="get" class="mr-4">Process </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { getISBN_from_image } from "@/services/api/isbn/index.js";

export default {
  name: "BarcodeReader",
  data: () => ({
    isbn: "",
    valid: true,
  }),
  methods: {
    async get() {
      this.isbn = await getISBN_from_image(
        window.URL.createObjectURL(this.$refs.form.$el["files"].files[0])
      );
      console.log(this.isbn);
    },
  },
  /*<div>
    <v-file-input label="File input" id="files"> </v-file-input>
    <v-btn @click="get"> </v-btn>
  </div>*/
};
</script>
