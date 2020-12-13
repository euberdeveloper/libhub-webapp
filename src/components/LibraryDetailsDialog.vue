<template>
  <v-card>
    <v-card-title>
      <span class="headline">Library Details</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation style="height: 100%">
        <v-container fill-height>
          <v-row align="center" xs>
            <v-col>
              <v-text-field
                v-model="library.name"
                :hint="
                  !isEditing
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing"
                :label="`Name — ${isEditing ? 'Editable' : 'Readonly'}`"
                prepend-icon="mdi-bookshelf"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing}`"
                      :color="isEditing ? 'success' : 'info'"
                      @click="isEditing = !isEditing"
                      v-text="
                        isEditing
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" xs>
            <v-col cols="12">
              <v-text-field @keyup.enter="addUbication" v-model="ubicationName" label="Ubications"> </v-text-field>
            </v-col>
            <v-card
              class="ma-1"
              v-for="(ubi, i) in library.schema.ubications"
              :key="i"
            >
            <v-card-title>
              {{ ubi }}
            </v-card-title>
            </v-card>
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
import { getLibrariesLid } from "@/services/api/libraries/index.js";
import { postLibrariesLidSchemaUbications } from "@/services/api/libraries/schema/ubications/index.js";
export default {
  name: "LibraryDetails",
  data: () => ({
    isEditing: false,
    model: null,
    valid: true,
    ubicationName: "",
    loading: false,
    library: {
      name: "",
      schema: {
        ubications: [],
        resources: [],
      },
    },
  }),
  methods: {
    /*async*/ validate() {
      //this.$refs.form.validate();
      this.$store.commit("hide_LibraryDetails_Dialog");
    },
    reset() {
      this.$refs.form.reset();
    },
    async addUbication() {
        this.library.schema.ubications.push(this.ubicationName);
        await postLibrariesLidSchemaUbications(this.$store.state.LibraryId, this.ubicationName);
    }
  },
  async mounted() {
    this.library = await getLibrariesLid(this.$store.state.LibraryId);
  },
};
</script>
