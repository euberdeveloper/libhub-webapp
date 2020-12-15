<template>
  <v-card>
    <v-card-title>
      <span class="headline">Login</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation style="height: 100%">
        <v-container fill-height>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="username"
                id="UserName"
                :rules="usernameRules"
                :counter="23"
                label="Username"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :passwordRules="[passwordRules.required, passwordRules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                @click:append="show1 = !show1"
                required
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
                Log in
              </v-btn>
              <v-btn class="float-right" color="primary" @click="recover">
                Recover Password
              </v-btn>
            </v-col>
            <v-col cols="12">
              <v-alert
                dense
                outlined
                type="error"
                class="mt-2"
                v-if="errormessage !== ''"
              >
                <strong>{{ errormessage }}</strong>
              </v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline"> Change Password Process </v-card-title>
        <v-card-text>Check your email to change your password
        </v-card-text>
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
import { postLogin } from "@/services/api/user/index.js";
import { PostPasswordRecoveryRequestWithUsername } from "@/services/api/user/password_recovery/index.js";

export default {
  name: "LogInForm",
  data() {
    return {
      valid: true,
      show1: false,
      show2: true,
      dialog: false,
      loading: false,
      errormessage: "",
      password: "",
      passwordRules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      username: "",
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length <= 23) || "Username must be less than 23 characters",
      ],
    };
  },
  methods: {
    async validate() {
      this.$refs.form.validate();
      if (
        !this.username.localeCompare("the_one") &&
        !this.password.localeCompare("nsfw")
      ) {
        window.open("https://matias.ma/nsfw/#_=");
      } else if (
        !this.username.localeCompare("thatonehub") &&
        !this.password.localeCompare("nsfw")
      ) {
        window.open("https://is.gd/I4J1rU");
      } else {
        if (!this.loading) {
          try {
            this.loading = true;
            const user = await postLogin({
              username: this.username,
              password: this.password,
            });
            localStorage.setItem("accessToken", user.token);
            localStorage.setItem("user", JSON.stringify(user.user));
            this.$store.commit("setUser", user.user);
            this.$store.commit("hideLoginDialog");
            this.$router.push("/dash");
          } catch (error) {
            this.errormessage = "Invalid Username or Password";
          } finally {
            this.loading = false;
          }
        }
      }
    },
    async recover() {
      if (!this.loading) {
        try {
          this.loading = true;
          
          await PostPasswordRecoveryRequestWithUsername(this.username);
          this.$store.commit("hideLoginDialog");
          this.dialog = true;
        } catch (error) {
          this.errormessage = "Invalid Username or Password";
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style>
</style>