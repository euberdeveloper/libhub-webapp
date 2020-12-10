<template>
  <v-card>
    <v-card-title>
      <span class="headline">Retrieve Book Info</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation style="height: 100%">
        <v-container fill-height>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="ISBN"
                id="ISBN"
                :rules="ISBN_Rules"
                label="ISBN"
                required
              ></v-text-field>
            </v-col>
            <v-col align="left">
              <v-btn
                color="#ff1744"
                :loading="loading"
                class="mr-4"
                @click="retrieveInfo"
              >
                Retrieve info
              </v-btn>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field v-model="title" id="title" placeholder="title"></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="authors"
                id="authors"
                placeholder="authors"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="publisher"
                id="publisher"
                placeholder="publisher"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="publicationYear"
                id="publicationYear"
                placeholder="publicationYear"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="language"
                id="language"
                placeholder="language"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="edition"
                id="edition"
                placeholder="edition"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                Insert
              </v-btn>
              <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { retrieveBookInfo } from "@/services/api/libraries/books/index.js";
const ISBN_regex = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
export default {
  name: "BookInsertForm",
  data() {
    return {
      valid: true,
      loading: false,
      ISBN: "",
      title: "",
      edition: "",
      publisher: "",
      publicationYear: "",
      language: "",
      authors: [],
      ISBN_Rules: [
        (value) => !!value || "Required.",
        (value) => ISBN_regex.test(value) || "wrong input format",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      //TODO close component if validate is correct
    },
    reset() {
      this.$refs.form.reset();
    },
    async retrieveInfo() {
      this.$refs.form.validate();
      if (this.$refs.form.$el["ISBN"].value) {
        this.loading = true;
        const res = await retrieveBookInfo(this.$refs.form.$el["ISBN"].value);
        for (let i in res) {
          if (i && i !== "picture") {
            this.$refs.form.$el[i].value = res[i];
          }
        }
        this.loading = false;
      }
    },
  },
};
</script>
