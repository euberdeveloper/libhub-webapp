<template>
  <v-card>
    <v-card-title>
      <span class="headline">Add Library</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid"  lazy-validation style="height: 100%">
        <v-container fill-height>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="name"
                id="name"
                placeholder="name"
                label="name"
              ></v-text-field>
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
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { postLibraries } from "@/services/api/libraries/index.js";

export default {
  name: "LibraryInsertForm",
  data() {
    return {
      valid: true,
      loading: false,
      name: "",
    };
  },
  methods: {
    async validate() {
      this.$refs.form.validate();
      if (!this.loading) {
        try {
          this.loading = true;
          const user = this.$store.getters.getUser;
          const token = localStorage.getItem("accessToken");
          const lid = await postLibraries(user._id, this.createName, token);
          this.$store.commit("addLibrary", this.createLibrary(lid))
        } catch (error) {
          this.$store.commit("setErrorMessage", error);
          this.$router.push("/error_page");
        } finally {
          this.loading = false;
          this.$store.commit("hide_InsertLibraryForm_Dialog");
        }
      }
      
    },
    createLibrary(lid) {
      const user = this.$store.getters.getUser;
      return {name: this.name, owners:[user._id],  schema:{ubications:[], resources:[]}, _id: lid};
    },
    createUbication(value){
      return { ubication: value }
    }
  },
  computed: {
    createName() {
      return { name: this.name };
    },
  },
};
</script>
