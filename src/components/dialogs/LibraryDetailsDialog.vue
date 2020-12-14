<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col class="d-flex align-center">
          <v-btn icon @click="close" class="mr-2">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-container class="headline">Library Details</v-container>
          <v-container class="d-flex justify-end">
            <v-slide-x-reverse-transition mode="out-in">
              <v-icon
                :key="`icon-${editingAll}`"
                :color="editingAll ? 'success' : 'info'"
                @click="editAll"
                v-text="
                  editingAll ? 'mdi-check-outline' : 'mdi-circle-edit-outline'
                "
              ></v-icon>
            </v-slide-x-reverse-transition>
          </v-container>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation style="height: 100%">
        <v-container fill-height>
          <!-- Tag Edit -->
          <v-row align="center" xs>
            <v-col>
              <v-btn @click="openLibraryTags()" outlined class="mb-2">
                <v-icon>mdi-tag-multiple</v-icon>
                <span>Edit Tags</span>
              </v-btn>
            </v-col>
          </v-row>

          <!-- Library Name -->
          <v-row align="center" xs>
            <v-col>
              <v-text-field
                v-model="library.name"
                :hint="
                  !isEditing.name
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.name"
                :label="`Name — ${isEditing.name ? 'Editable' : 'Readonly'}`"
                prepend-icon="mdi-bookshelf"
                @keyup.enter="UpdateName"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.name}`"
                      :color="isEditing.name ? 'success' : 'info'"
                      @click="isEditing.name = !isEditing.name"
                      v-text="
                        isEditing.name
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!-- Co-own -->
          <v-row align="center" xs>
            <v-col>
              <v-combobox
                hide-details
                single-line
                :items="usernames"
                v-model="selectedUser"
                :hint="
                  !isEditing.coown
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.coown"
                :label="`Co-Own — ${
                  isEditing.coown ? 'Editable' : 'Readonly'
                }`"
                prepend-icon="mdi-share-variant"
                menu-props="closeOnClick"
                @keyup.enter="shareLibrary"
              ><template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.coown}`"
                      :color="isEditing.coown ? 'success' : 'info'"
                      @click="isEditing.coown = !isEditing.coown"
                      v-text="
                        isEditing.coown
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template></v-combobox>
            </v-col>
          </v-row>

          <!-- Ubications -->
          <v-row align="center" xs>
            <v-col cols="12">
              <v-text-field
                v-model="ubicationName"
                :hint="
                  !isEditing.ubications
                    ? 'Click the icon to edit'
                    : 'Click the icon to lock'
                "
                :readonly="!isEditing.ubications"
                :label="`Ubications — ${
                  isEditing.ubications ? 'Editable' : 'Readonly'
                }`"
                prepend-icon="mdi-bookshelf"
                @keyup.enter="addUbication"
              >
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in">
                    <v-icon
                      :key="`icon-${isEditing.ubications}`"
                      :color="isEditing.ubications ? 'success' : 'info'"
                      @click="isEditing.ubications = !isEditing.ubications"
                      v-text="
                        isEditing.ubications
                          ? 'mdi-check-outline'
                          : 'mdi-circle-edit-outline'
                      "
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-text-field>
            </v-col>
            <v-card
              class="ma-1"
              v-for="(ubi, i) in library.schema.ubications"
              :key="i"
            >
              <v-row class="d-flex align-center">
                <v-col cols="6">
                  <v-card-title>
                    {{ ubi }}
                  </v-card-title>
                </v-col>
                <v-col cols="3">
                  <v-container class="d-flex justify-end">
                    <v-btn
                      color="#F83456"
                      title="Remove ubication"
                      icon
                      small
                      @click="removeUbi(ubi)"
                    >
                      <v-icon>mdi-close-thick</v-icon>
                    </v-btn>
                  </v-container>
                </v-col>
              </v-row>
            </v-card>
          </v-row>

          <!-- Resources Carousel -->
          <v-row align="center" xs>
            <v-col cols="12">
              <v-file-input
                :rules="resource_rules"
                :show-size="true"
                id="ResourceImage"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Select Schema image"
                prepend-icon="mdi-camera"
                label="Resources"
              >
                <template v-slot:append-outer>
                  <v-btn color="succes" @click="addResources"> Add </v-btn>
                </template>
              </v-file-input>
            </v-col>
            <v-col class="d-flex justify-center">
              <v-carousel
                style="height: 300px; width: 300px"
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item
                  v-for="(res, i) in library.schema.resources"
                  :key="i"
                >
                  <v-img style="height: 300px; width: 300px" :src="res">
                    <v-container class="d-flex justify-end">
                      <v-btn
                        color="#F83456"
                        title="Remove resource"
                        icon
                        small
                        elevation="24"
                        @click="removeRes(res)"
                      >
                        <v-icon>mdi-close-thick</v-icon>
                      </v-btn>
                    </v-container>
                  </v-img>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline"> Library Shared with <br/>{{selectedUser}}</v-card-title>
        
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import {
  getLibrariesLid,
  patchLibrariesLid,
  coownLibrary,
} from "@/services/api/libraries/index.js";
import { postLibrariesLidSchemaUbications } from "@/services/api/libraries/schema/ubications/index.js";
import { postLibrariesLidSchemaResources } from "@/services/api/libraries/schema/resources/index.js";
import { getFriends } from "@/services/api/friends/index.js";

export default {
  name: "LibraryDetails",
  data: () => ({
    model: null,
    dialog: false,
    selectedUser: "",
    usernames: [],
    users: [],
    editingAll: false,
    isEditing: {
      name: false,
      ubications: false,
      coown: false,
    },
    ubicationName: "",
    loading: false,
    library: {
      name: "",
      schema: {
        ubications: [],
        resources: [],
      },
    },

    //Validation
    valid: true,
    resource_rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
  }),
  methods: {
    openLibraryTags() {
      this.$store.commit("hide_LibraryDetails_Dialog");
      this.$router
        .push("/libraries/" + this.$store.state.LibraryId + "/tags")
        .catch(() => {});
    },
    close() {
      this.$store.commit("hide_LibraryDetails_Dialog");
    },
    editAll() {
      this.editingAll = !this.editingAll;
      for (var property in this.isEditing) {
        this.isEditing[property] = this.editingAll;
      }
    },
    async UpdateName() {
      if (!this.loading && this.isEditing.name) {
        try {
          this.loading = true;
          const user = this.$store.getters.getUser;
          await patchLibrariesLid(
            user._id,
            this.$store.state.LibraryId,
            { name: this.library.name },
            localStorage.getItem("accessToken")
          );
          for (let library in this.$store.state.libraries) {
            if (
              this.$store.state.libraries[library]._id ===
              this.$store.state.LibraryId
            ) {
              this.$store.state.libraries[library].name = this.library.name;
            }
          }
        } catch (error) {
          this.$store.commit("hide_LibraryDetails_Dialog");
          this.$store.commit("setErrorMessage", error);
          this.$router.push("/error_page");
        } finally {
          this.loading = false;
          this.isEditing.name = false;
        }
      }
    },
    async shareLibrary() {
      if (!this.loading) {
        try {
          this.loading = true;
          const user = this.$store.getters.getUser;
          let fid;
          for(let u in this.users){
            if(this.users[u].username === this.selectedUser){
              fid = this.users[u]._id
            }
          }
          await coownLibrary(
            user._id,
            this.$store.getters.getLibraryId,
            fid,
            localStorage.getItem("accessToken")
          );
          this.dialog = true;
        } catch (error) {
          //this.$store.commit("hide_LibraryDetails_Dialog");
          console.log(error)
          //this.$store.commit("setErrorMessage", error);
          //this.$router.push("/error_page");
        } finally {
          this.loading = false;
        }
      }
    },
    async addUbication() {
      if (!this.loading && !this.library.schema.ubications.includes(this.ubicationName)) {
        try {
          this.loading = true;
          const user = this.$store.getters.getUser;
          await postLibrariesLidSchemaUbications(
            user._id,
            this.$store.state.LibraryId,
            this.createPostUbication(),
            localStorage.getItem("accessToken")
          );
          this.library.schema.ubications.push(this.ubicationName);
        } catch (error) {
          this.$store.commit("hide_LibraryDetails_Dialog");
          this.$store.commit("setErrorMessage", error);
          this.$router.push("/error_page");
        } finally {
          this.loading = false;
        }
      }
    },
    createPostUbication() {
      return { ubication: this.ubicationName };
    },
    async addResources() {
      if (!this.loading) {
        try {
          this.loading = true;

          const formData = new FormData();
          const user = this.$store.getters.getUser;
          console.log(this.$refs.form.$el["ResourceImage"].files[0]);
          formData.append(
            "resource",
            this.$refs.form.$el["ResourceImage"].files[0]
          );
          await postLibrariesLidSchemaResources(
            user._id,
            this.library._id,
            formData,
            localStorage.getItem("accessToken")
          );
          
          const img = window.URL.createObjectURL(
            this.$refs.form.$el["ResourceImage"].files[0]
          );
          this.library.schema.resources.push(img);
        } catch (error) {
          this.$store.commit("hide_LibraryDetails_Dialog");
        } finally {
          this.loading = false;
        }
      }
    },
    async removeRes(res) {
      if (!this.loading) {
        try {
          this.loading = true;
          const i = this.library.schema.resources.indexOf(res);
          if (i !== -1) this.library.schema.resources.splice(i, 1);
        } catch (error) {
          //this.$store.commit("hide_LibraryDetails_Dialog");
          this.$store.commit("setErrorMessage", error);
          //this.$router.push("/error_page");
        } finally {
          this.loading = false;
        }
      }
    },
    async removeUbi(ubi) {
      if (!this.loading) {
        try {
          this.loading = true;
          const i = this.library.schema.ubications.indexOf(ubi);
          if (i !== -1) this.library.schema.ubications.splice(i, 1);
        } catch (error) {
          //this.$store.commit("hide_LibraryDetails_Dialog");
          this.$store.commit("setErrorMessage", error);
          //this.$router.push("/error_page");
        } finally {
          this.loading = false;
        }
      }
    },
  },
  async mounted() {
    const user = this.$store.getters.getUser;

    this.library = await getLibrariesLid(
      user._id,
      this.$store.getters.getLibraryId,
      localStorage.getItem("accessToken")
    );
    this.users = await getFriends(user._id, localStorage.getItem("accessToken"));
    for (let u in this.users) {
      this.usernames.push(this.users[u].username);
    }
  },
};
</script>
