<template>
  <v-container fluid >
    <v-row class="d-flex justify-center">
      <v-btn color="success" @click="verify"> Verify </v-btn>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline"> Veification Done </v-card-title>
        <v-card-text>Your account has been verified</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dashPush"> Login </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { postVerify } from "@/services/api/user/index.js";

export default {
  name: "Verification",
  props: ["uid", "token"],
  data: () => ({
    loading: false,
    dialog: false,
  }),
  methods: {
    async verify() {
      if (this.loading === false) {
        try {
          let user = await postVerify(
            this.$route.params.uid,
            this.$route.params.token
          );

          localStorage.setItem("accessToken", user.token);
          localStorage.setItem("user", JSON.stringify(user.user));

          this.dialog = true;
        } catch {
          //
        } finally {
          this.loading = false;
        }
      }
    },
    dashPush() {
      this.dialog = false;
      this.$router.push("/dash");
    },
  },
};
</script>