<template>
  <v-container fluid>
    <v-btn
      @click="doNothing"
      height="205px"
      shaped
      width="205px"
      color="#ffffff"
      elevation="0"
      ><v-img
        style="height: 200px; width: 200px"
        src="@/assets/WidgetButton.png"
      >
      </v-img
    ></v-btn>

    <!--
    <tag-tree/>
    <v-dialog v-model="$store.state.bookDialog" max-width="1000px">
      <test-librarydetails />
    </v-dialog> -->
  </v-container>
</template>

<script>
//import TestLibrarydetails from "@/components/removed/test-librarydetails.vue";
//import TagTree from '@/components/TagTree.vue'

//import { getLibraries } from "@/services/api/libraries/index.js";

export default {
  components: {
    /*TestLibrarydetails,TagTree*/
  },
  name: "Dashboard",
  data: () => ({
    dialog: false,
  }),
  methods: {
    doNothing() {
      alert("Sprint 3");
    },
  },
  computed: {
    show_Try_Dialog: {
      get: function () {
        return this.dialog;
      },
      set: function (value) {
        if (value) {
          this.dialog = true;
        } else {
          this.dialog = false;
        }
      },
    },
  },
  mounted(){
    this.$store.commit("setUser", JSON.parse(localStorage.getItem("user")))
  }
};
</script>
