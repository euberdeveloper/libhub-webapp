<template>
  <v-container>
    <div>
      <v-row class="central-align-style">
        <v-col style="align-contents: center">
          <h1 style="color: #ff1744" v-text="error_message">
            {{ error_message }}
          </h1>
          <v-img
            src="../../assets/jojo_doggo.png"
            max-height="500"
            max-width="500"
          ></v-img>
        </v-col>
        <v-col>
          <v-btn color="error" x-large tile @click="send_to_home" elevation="0"
            >Return Home</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Error_page",
  data: () => ({
    error_message: "",
  }),
  methods: {
    send_to_home() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.error_message = this.$store.state.error_message;
  },
};
</script>
