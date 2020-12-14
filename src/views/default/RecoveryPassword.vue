<template>
  <v-container fluid>
    <v-form ref="form" lazy-validation>
      <v-row>
        <v-col>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[
              passwordRules.required,
              passwordRules.min,
              passwordRules.max,
              passwordRules.valid,
            ]"
            label="new Password"
            :type="show1 ? 'text' : 'password'"
            counter
            hint="At least 8 characters"
            @click:append="show1 = !show1"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="confirmPassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            label="Confirm Password"
            counter
            hint="At least 8 characters"
            @click:append="show1 = !show1"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>

    <v-row class="d-flex justify-center">
      <v-btn color="success" @click="change"> Change Password </v-btn>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">
          Password Changed successfully
        </v-card-title>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="homePush"> Home </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { PostPasswordRecovery } from "@/services/api/user/password_recovery/index.js";

export default {
  name: "Verification",
  props: ["uid", "token"],
  data: () => ({
    loading: false,
    dialog: false,
    show1: false,
    password: "",
    passwordRules: {
      required: (v) => !!v || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      max: (v) => v.length <= 23 || "Max 23 characters",
      valid: (v) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,23}$/.test(
          v
        ) ||
        " password must contain at least an upper case, a lower case, a number and a special character",
    },
    confirmPassword: "",
    /*confirmPasswordRules: {
      equal: (v) => v === this.password || "Password must match",
    },*/
  }),
  methods: {
    async change() {
      this.$refs.form.validate();
      if (this.loading === false) {
        try {
          await PostPasswordRecovery(
            this.$route.params.uid,
            { password: this.password },
            this.$route.params.token
          );
          this.dialog = true;
        } catch(error) {
          console.log(error.response)
        } finally {
          this.loading = false;
        }
      }
    },
    homePush() {
      this.dialog = false;
      this.$router.push("/");
    },
  },
};
</script>