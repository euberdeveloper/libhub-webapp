<template>
  <v-container>
    <v-row justify="center">
      <v-card
        class="ma-2"
        max-width="460"
        v-for="library in libraries"
        :key="library._id"
        @click="openLibrary(library)"
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
                    <p>
                      {{ library.owners }}
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
import { getLibraries } from "@/services/api/libraries/index.js";

export default {
  name: "DisplayLibraries",
  props: ["id"],
  data: () => ({
    info: null,
    libraries: [
      /*{
        _id: "8854215487",
        name: "Sala",
        owners: ["Mario", "Pietro"],
        schema: {
          resources: [
            "https://cdn-idoli-a.facciabuco.com/2/ricardo-milos/idolo.jpg?v=1",
            "data:image/jpeg;base64,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",
            "https://pbs.twimg.com/profile_images/1116302183170039808/5AClkeKr_400x400.jpg",
          ],
          ubications: ["Scaffale 1", "Scaffale 2", "Scaffale 3", "Scaffale 4"],
        },
      },
      {
        _id: "56218746876",
        name: "Camera",
        owners: ["Paolo", "Luca"],
        schema: {
          resources: [
            "https://cdn-idoli-a.facciabuco.com/2/ricardo-milos/idolo.jpg?v=1",
            "data:image/jpeg;base64,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",
            "https://pbs.twimg.com/profile_images/1116302183170039808/5AClkeKr_400x400.jpg",
          ],
          ubications: ["Scaffale A", "Scaffale B", "Scaffale C", "Scaffale D"],
        },
      },*/
    ],
  }),
  methods: {
    openLibrary(library) {
      this.$store.commit("setLibraryId", library._id);
      this.$router.push("/libraries/" + library._id).catch(() => {});
    },
  },
  async mounted() {
    try {
      this.libraries = await getLibraries();
    } catch (error) {
      this.$store.commit("setErrorMessage", error);
      this.$router.push("/error_page");
    }
  },
};
</script>
