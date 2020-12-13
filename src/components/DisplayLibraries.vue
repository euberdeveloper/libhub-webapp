<template>
  <v-container>
    <v-row justify="center">
      <v-card
        class="ma-2"
        max-width="370"
        v-for="library in $store.state.libraries"
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
                    <span>
                      {{ library.owners.join("~") }}
                    </span>
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
                @click="openLibrary(library)"
                ><v-icon title="Open Library">mdi-open-in-new</v-icon></v-btn
              >
              <v-btn
                class="mr-1"
                x-small
                fab
                dark
                color="#62000F"
                @click="open_LibraryDetails_Dialog(library._id)"
                ><v-icon title="Edit Library">mdi-pencil</v-icon></v-btn
              >
              <v-btn
                class="mr-1"
                x-small
                fab
                dark
                color="#62000F"
                @click="deleteLibrary(library._id)"
                ><v-icon title="Delete Library">mdi-delete</v-icon></v-btn
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

    <v-row justify="center">
      <v-dialog v-model="show_LibraryDetails_Dialog" max-width="1000px">
        <library-details-dialog />
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import {
  getLibraries,
  deleteLibrariesLid,
} from "@/services/api/libraries/index.js";
import LibraryDetailsDialog from "@/components/LibraryDetailsDialog.vue";

export default {
  name: "DisplayLibraries",
  props: ["id"],
  data: () => ({
    info: null,
    loading: false,
  }),
  components: {
    LibraryDetailsDialog,
  },
  methods: {
    openLibrary(library) {
      this.$store.commit("setLibraryId", library._id);
      this.$router.push("/libraries/" + library._id).catch(() => {});
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
          await deleteLibrariesLid(lid);
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
    show_LibraryDetails_Dialog: {
      get: function () {
        return this.$store.state.libraryDialog;
      },
      set: function (value) {
        if (value) {
          this.$store.commit("show_LibraryDetails_Dialog", null);
        } else {
          this.$store.commit("hide_LibraryDetails_Dialog");
        }
      },
    }
  },

  async mounted() {
    try {
      const value = await getLibraries();
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