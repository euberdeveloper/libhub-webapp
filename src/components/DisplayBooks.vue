<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card
        class="ma-2"
        max-width="370"
        max-height="330"
        v-for="(book, index) in handledBooks"
        :key="index"
      >
        <v-img height="100%" src="@/assets/book_background.png">
          <v-row>
            <v-col class="pa-0" cols="6">
              <v-carousel
                style="height: 250px; width: 200px"
                cycle
                show-arrows-on-hover
                v-model="selectedBook"
                progress
                interval="5000"
                hide-delimiters
              >
                <v-carousel-item v-for="(picture, i) in book.pictures" :key="i">
                  <v-img style="height: 250px; width: auto" :src="picture">
                  </v-img>
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="6">
              <v-rating
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                hover
                length="5"
                size="16"
                :value="3"
                background-color="orange lighten-3"
                color="orange"
              ></v-rating>
              <div class="d-flex justify-end">
                <v-btn class="mr-1" x-small fab dark color="#62000F"
                  ><v-icon title="Edit Book">mdi-pencil</v-icon></v-btn
                >
                <v-btn
                  class="mr-1"
                  x-small
                  fab
                  dark
                  color="#62000F"
                  @click="deleteBook(book._id)"
                  ><v-icon title="Delete Book">mdi-delete</v-icon></v-btn
                >
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ book.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <p>
                      {{ book.author }}
                    </p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card-text class="FAB-23">
          <v-fab-transition>
            <v-btn
              color="#F83456"
              title="Add book to this library"
              dark
              absolute
              bottom
              right
              fab
              @click="open_InsertBookForm_Dialog"
            >
              <v-icon>mdi-book-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  getBooks,
  deleteLibrariesLidBooksBid,
} from "@/services/api/libraries/books/index.js";

export default {
  name: "DisplayBooks",
  props: ["lid"],
  data: () => ({
    selectedBook: 0,
    loading: false,
  }),
  methods: {
    open_InsertBookForm_Dialog() {
      this.$store.commit("show_InsertBookForm_Dialog");
    },
    async deleteBook(bid) {
      if (!this.loading) {
        try {
          this.loading = true;
          await deleteLibrariesLidBooksBid(this.$route.params.lid, bid);
        } catch (error) {
          this.$store.commit("setErrorMessage", error);
          this.$router.push("/error_page");
        } finally {
          this.loading = false;
        }
        this.$store.state.books.splice(
          this.$store.state.books.findIndex((b) => b._id === bid),
          1
        );
      }
    },
  },
  computed: {
    handledBooks() {
      return this.$store.state.books.map((book) => ({
        ...book,
        pictures:
          book.pictures.length === 0
            ? [
                "/assets/blank.png",
                "/assets/jojo_doggo.png",
                "/assets/doggo.png",
              ]
            : book.pictures,
      }));
    },
  },
  async mounted() {
    try {
      const value = await getBooks(this.$route.params.lid);
      this.$store.commit("setBooks", value);
    } catch (error) {
      this.$store.commit("setErrorMessage", "Missing Book");
      this.$router.push("/error_page");
    }
  },
};
</script>

<style>
</style>