<template>
  <v-container>
    <v-row justify="center">
      <v-card
        class="ma-2"
        max-width="450"
        max-height="350"
        v-for="(book, index) in handledBooks"
        :key="index"
      >
        <v-img height="100%" src="@/assets/book_background.png">
          <v-row >
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
            <v-col  cols="6">
              <v-rating
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                hover
                length="5"
                size="20"
                :value="3"
                background-color="orange lighten-3"
                color="orange"
              ></v-rating>
            </v-col>
          </v-row>
          <v-row >
            <v-col>
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title >
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
  </v-container>
</template>
<script>
import { getBooks } from "@/services/api/libraries/books/index.js";

export default {
  name: "DisplayBooks",
  props: ["lid"],
  data: () => ({
    selectedBook: 0,
    books: [],
  }),
  computed: {
    handledBooks() {
      return this.books.map((book) => ({
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
      this.books = await getBooks(this.$route.params.lid);
    } catch (error) {
      this.$store.commit("setErrorMessage", "Naimoli gay");
      this.$router.push("/error_page");
    }
  },
};
</script>