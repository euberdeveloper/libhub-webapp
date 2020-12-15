<template>
  <v-container>
    <v-row justify="center">
      <v-card
        class="ma-2"
        max-width="370"
        v-for="library in handledLibraries"
        :key="library._id"
      >
        <v-img height="100%" src="@/assets/library_background.jpeg">
          <v-row align="end" class="fill-height">
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    {{ library.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <!-- <span>
                      {{ library.owners.join("~") }}
                    </span> -->
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn
                class="mr-1"
                x-small
                fab
                dark
                color="#62000F"
                @click="openLibrary(library._id)"
                title="Open Library"
                ><v-icon>mdi-open-in-new</v-icon></v-btn
              >

              <v-btn
                class="mr-1"
                x-small
                fab
                dark
                color="#62000F"
                @click="open_LibraryDetails_Dialog(library._id)"
                title="Edit Library"
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
              <v-btn
                class="mr-1"
                x-small
                fab
                dark
                color="#62000F"
                @click="deleteLibrary(library._id)"
                title="Delete Library"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
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
              @click="open_InsertLibraryForm_Dialog"
            >
              <v-icon>mdi-bookshelf</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-card-text>
      </v-col>
    </v-row>

    <v-row justify="center"> </v-row>
  </v-container>
</template>

<script>
import {
  getLibraries,
  deleteLibrariesLid,
} from "@/services/api/libraries/index.js";

export default {
  name: "DisplayLibraries",
  props: ["id"],
  data: () => ({
    info: null,
    user: {},
    loading: false,
  }),
  components: {},
  methods: {
    openLibrary(lid) {
      this.$router.push("/libraries/" + lid + "/books").catch(() => {});
    },

    open_InsertLibraryForm_Dialog() {
      this.$store.commit("show_InsertLibraryForm_Dialog");
    },

    open_LibraryDetails_Dialog(lid) {
      this.$store.commit("show_LibraryDetails_Dialog", lid);
    },

    async deleteLibrary(lid) {
      if (!this.loading) {
        try {
          this.loading = true;
          const user = this.$store.getters.getUser;
          await deleteLibrariesLid(
            user._id,
            lid,
            localStorage.getItem("accessToken")
          );
        } catch (error) {
          this.$store.commit("setErrorMessage", error);
          this.$router.push("/error_page");
        } finally {
          this.loading = false;
        }
        this.$store.state.libraries.splice(
          this.$store.state.libraries.findIndex((l) => l._id === lid),
          1
        );
      }
    },
  },
  computed: {
    handledLibraries() {
      return this.$store.getters.getLibraries;
    },
  },
  async mounted() {
    try {
      const user = this.$store.getters.getUser;
      let value = await getLibraries(
        user._id,
        localStorage.getItem("accessToken")
      );/*
      value = value.map((v) => ({
        ...v,
        schema: {
          ...v.schema,
          resources: v.schema.resources.map(
            (r) => `https://defacto-23.herokuapp.com${r}`
          ),
        },
      }));*/
      this.$store.commit("setLibraries", value);
    } catch (error) {
      this.$store.commit("setErrorMessage", error);
      this.$router.push("/error_page");
    }
  },
};
</script>

<style>
</style>