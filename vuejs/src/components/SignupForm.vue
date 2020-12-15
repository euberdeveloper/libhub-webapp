<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="signup.username"
        id="Username"
        :rules="usernameRules"
        :counter="23"
        label="Username"
        required
      ></v-text-field>

      <v-text-field
        v-model="signup.name"
        id="name"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="signup.surname"
        id="surname"
        label="Surname"
        required
      ></v-text-field>

      <v-text-field
        v-model="signup.email"
        id="UserEmail"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="signup.password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[
          passwordRules.required,
          passwordRules.min,
          passwordRules.max,
          passwordRules.valid,
        ]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        counter
        hint="At least 8 characters"
        @click:append="show1 = !show1"
        required
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[confirmPasswordRules.equal]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Confirm Password"
        counter
        hint="At least 8 characters"
        @click:append="show1 = !show1"
        required
      ></v-text-field>

      <br />

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Sign up
      </v-btn>

      <v-btn class="float-right" text @click="openLoginDialog" tile>
        <span class="mr-2">Login </span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <br />
      <v-alert dense outlined type="error" class="mt-2" v-if="error !== ''">
        <strong>{{error}}</strong>
      </v-alert>
    </v-form>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline"> Veification Process </v-card-title>
        <v-card-text>Check your email to verify your account</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { postSignUp } from "@/services/api/user/index.js";

export default {
  name: "SignupForm",
  data() {
    return {
      valid: true,
      show1: false,
      show2: true,
      dialog: false,
      error: "",
      signup: {
        password: "",
        username: "",
        email: "",
        name: "",
        surname: "",
      },
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
      confirmPasswordRules: {
        equal: (v) => v === this.signup.password || "Password must match",
      },
      username: "",
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length <= 23) || "Username must be less than 23 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        try {
          await postSignUp(this.signup);
          this.dialog = true;
          this.error = ""
        } catch (error) {
          this.error = error.response.data.message;
        }
      }
    },
    openLoginDialog() {
      this.$store.commit("showLoginDialog");
    },
  },
};
</script>
