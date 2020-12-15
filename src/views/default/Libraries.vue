<template>
  <v-container fluid>
    <display-libraries />

    <v-row justify="center">
      <v-dialog v-model="show_InsertLibraryForm_Dialog" max-width="1000px">
        <library-insert-form />
      </v-dialog>
      <v-dialog v-model="show_LibraryDetails_Dialog" max-width="1000px">
        <library-details-dialog />
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import DisplayLibraries from "@/components/DisplayLibraries.vue";
import LibraryInsertForm from "@/components/dialogs/LibraryInsertForm.vue";
import LibraryDetailsDialog from "@/components/dialogs/LibraryDetailsDialog.vue";

export default {
  name: "Libraries",
  components: {
    DisplayLibraries,
    LibraryInsertForm,
    LibraryDetailsDialog,
  },
  data: () => ({
    uid: "none",
  }),
  mounted() {
    this.uid = this.$store.state.UserId;
  },
  methods: {},
  computed: {
    show_InsertLibraryForm_Dialog: {
      get: function () {
        return this.$store.state.InsertLibraryForm_Dialog;
      },
      set: function (value) {
        if (value) {
          this.$store.commit("show_InsertLibraryForm_Dialog");
        } else {
          this.$store.commit("hide_InsertLibraryForm_Dialog");
        }
      },
    },
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
    },
  },
};
</script>