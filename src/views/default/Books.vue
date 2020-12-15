<template>
  <v-container fluid>
    <display-books />
    <v-row justify="center">
      <v-dialog v-model="show_InsertBookForm_Dialog" max-width="1000px">
        <book-insert-form />
      </v-dialog>
      <v-dialog v-model="show_BookDetails_Dialog" persistent max-width="1000px">
        <book-details-dialog />
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import DisplayBooks from "@/components/DisplayBooks.vue";
import BookInsertForm from "@/components/dialogs/BookInsertForm.vue";
import BookDetailsDialog from '@/components/dialogs/BookDetailsDialog.vue';

export default {
  name: "Books",
  components: {
    DisplayBooks,
    BookInsertForm,
    BookDetailsDialog,
  },
  data: () => ({}),
  methods: {
    open_insertBookForm() {
      this.router.push("/addbook"); // I don't know what this does
    },
    hide_insertBookForm() {
      this.$store.commit("hide_InsertBookForm_Dialog");
    },
  },
  computed: {
    show_InsertBookForm_Dialog: {
      get: function () {
        return this.$store.state.InsertBookForm_Dialog;
      },
      set: function (value) {
        if (value) {
          this.$store.commit("show_InsertBookForm_Dialog");
        } else {
          this.$store.commit("hide_InsertBookForm_Dialog");
        }
      },
    },
    show_BookDetails_Dialog: {
      get: function () {
        return this.$store.state.bookDialog;
      },
      set: function (value) {
        if (value) {
          this.$store.commit("show_BookDetails_Dialog", null);
        } else {
          this.$store.commit("hide_bookDetails_Dialog");
        }
      },
    },
  },
};
</script>
