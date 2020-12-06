<template>
  <v-container>
    <v-row justify="center">
      <v-card
        class="ma-2"
        max-width="460"
        v-for="library in libraries"
        :key="library._id"
      >
        <v-img
          height="100%"
          src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
        >
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="200" tile>
                <v-carousel cycle show-arrows-on-hover progress interval="5000">
                  <v-carousel-item
                    v-for="(resource, i) in library.schema.resources"
                    :key="i"
                    :src="resource"
                  ></v-carousel-item>
                </v-carousel>
              </v-avatar>
            </v-col>
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
//import { getLibraries } from "@/services/api/libraries/index.js";

export default {
  name: "Dashboard",
  props: ["id"],
  data: () => ({
    info: null,
    libraries: [
      {
        _id: "8854215487",
        name: "Sala",
        owners: ["Mario", "Pietro"],
        schema: {
          resources: ["https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg", "https://cdn.vuetifyjs.com/images/carousel/sky.jpg","https://cdn.vuetifyjs.com/images/carousel/bird.jpg"],
          ubications: ["Scaffale 1", "Scaffale 2", "Scaffale 3", "Scaffale 4"],
        },
      },
      {
        _id: "56218746876",
        name: "Camera",
        owners: ["Paolo", "Luca"],
        schema: {
          resources: ["https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg", "https://cdn.vuetifyjs.com/images/carousel/sky.jpg","https://cdn.vuetifyjs.com/images/carousel/bird.jpg"],
          ubications: ["Scaffale A", "Scaffale B", "Scaffale C", "Scaffale D"],
        },
      },
    ],
  }),
  async mounted() {
    try {
      //this.libraries = await getLibraries();
      //console.log(this.libraries);
    } catch (error) {
      //window.alert(error);
    }
  },
};
</script>