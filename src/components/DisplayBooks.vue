<template>
  <v-container>
    <v-row justify="center">
      <v-card
        class="ma-2"
        max-width="460"
        v-for="(book, index) in books"
        :key="index"
        
      >
        <v-img
          height="100%"
          src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
        >
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="400" tile>
                <v-carousel cycle show-arrows-on-hover progress interval="5000">
                  <v-carousel-item
                    v-for="(picture, i) in book.pictures"
                    :key="i"
                    :src="picture"
                  ></v-carousel-item>
                </v-carousel>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="title">
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
    props: ["lname"],
    data: () => ({
        books: [],
    }),
    async mounted() {
      try {
        this.books = await getBooks(this.$store.state.LibraryId);
        console.log(this.books[0].title);
      } catch (error) {
        this.$router.push("/error_page");
      }
  },
};
</script>