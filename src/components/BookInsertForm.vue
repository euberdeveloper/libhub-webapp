<template>
  <v-card>
    <v-card-title>
      <span class="headline">Retrieve Book Info</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation style="height: 100%">
        <v-container fill-height>
          <v-row align="center" xs>
            <v-col>
              <v-file-input
                counter
                :show-size="true"
                label="Image of the Book's barcode"
                id="BarcodeImage"
                required
              >
              </v-file-input>
            </v-col>
            <v-col>
              <v-btn @click="get" class="mr-4" color="#ff1744"
                >Process Image</v-btn
              >
            </v-col>
          </v-row>
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
              <v-text-field
                v-model="title"
                id="title"
                placeholder="title"
                label="title"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="authors"
                id="authors"
                placeholder="authors"
                label="authors"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="publisher"
                id="publisher"
                placeholder="publisher"
                label="publisher"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="publicationYear"
                id="publicationYear"
                placeholder="publicationYear"
                label="publicationYear"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="language"
                id="language"
                placeholder="language"
                label="language"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="edition"
                id="edition"
                placeholder="edition"
                label="edition"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-select v-model="ubication" id="ubication" :items="ubications" label="Ubication"></v-select>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Insert
              </v-btn>
              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  retrieveBookInfo,
  postLibrariesLidBooks,
} from "@/services/api/libraries/books/index.js";
import { getUbications } from "@/services/api/libraries/schema/ubications/index.js";
import { getISBN_from_image } from "@/services/api/isbn/index.js";

const ISBN_regex = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;

export default {
  name: "BookInsertForm",
  props: ["lid"],
  data() {
    return {
      valid: true,
      loading: false,
      another_loading: false,
      ubications: [],
      ISBN: "",
      title: "",
      edition: "",
      publisher: "",
      publicationYear: "",
      language: "",
      condition: "",
      ubication: "",
      labels: [""],
      authors: [""],
      notes: "",
      ISBN_Rules: [
        (value) => !!value || "Required.",
        (value) => ISBN_regex.test(value) || "wrong input format",
      ],
    };
  },
  methods: {
    async validate() {
      this.$refs.form.validate();
      this.$store.commit("hide_InsertBookForm_Dialog");
      console.log(this.createPostBook);
      if (!this.another_loading) {
        try {
          this.another_loading = true;
          const id = await postLibrariesLidBooks(this.$route.params.lid, this.createPostBook);
          this.$store.commit("addBook", this.createBook(id));
        } catch (error) {
          this.$store.commit("setErrorMessage", error);
          //this.$router.push("/error_page");
        } finally {
          this.another_loading = false;
        }
      }
    },
    createBook(id) {
      return {
        _id: id,
        LibraryId: this.$route.params.lid,
        isbn: this.ISBN,
        title: this.title,
        authors: this.authors,
        publisher: this.publisher,
        publicationYear: this.publicationYear,
        edition: this.edition,
        condition: this.condition,
        ubication: this.ubication,
        labels: this.labels,
        notes: this.notes,
      };
    },
    reset() {
      this.$refs.form.reset();
    },
    async retrieveInfo() {
      this.$refs.form.validate();
      if (this.$refs.form.$el["ISBN"].value) {
        this.loading = true;

        const res = await retrieveBookInfo(this.$refs.form.$el["ISBN"].value);

        this.title = res["title"];
        this.authors = res["authors"];
        this.language = res["language"];
        this.edition = res["edition"];
        this.publisher = res["publisher"];
        this.publicationYear = res["publicationYear"];

        this.loading = false;
      }
    },
    async get() {
      if (
        this.$refs.form.$el["BarcodeImage"].files[0] &&
        this.$refs.form.$el["BarcodeImage"].files[0].type.startsWith("image")
      ) {
        try {
          this.ISBN = await getISBN_from_image(
            window.URL.createObjectURL(this.$refs.form.$el["BarcodeImage"].files[0])
          );
        } catch (error) {
          alert("ISBN not detected");
        }
      } else {
        alert("file must be an image");
      }
    },
  },
  computed: {
    createPostBook() {
      return { isbn: this.ISBN,
        title: this.title,
        authors: ["this.authors"],
        publisher: this.publisher,
        publicationYear: this.publicationYear,
        edition: "",
        condition: this.condition,
        ubication: this.ubication,
        labels: ["this.labels"],
        notes: this.notes, };
    },
    
  },
  async mounted(){
    this.ubications = await getUbications(this.$route.params.lid);
  }
};
</script>
