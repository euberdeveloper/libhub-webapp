<template>
  <v-container>
    <display-books />
    <v-row justify="center">
      <v-dialog v-model="show_InsertBookForm_Dialog" max-width="1000px">
        <book-insert-form />
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import DisplayBooks from "@/components/DisplayBooks.vue";
import BookInsertForm from "@/components/BookInsertForm.vue";

export default {
  name: "Books",
  components: {
    DisplayBooks,
    BookInsertForm,
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
  },
};
</script>
