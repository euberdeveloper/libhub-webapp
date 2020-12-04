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
                v-model="name"
                id="UserName"
                :rules="nameRules"
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

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LogInForm",
  data() {
    return {
      valid: true,
      show1: false,
      show2: true,
      password: "",
      passwordRules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      name: "",
      nameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length <= 23) || "Username must be less than 23 characters",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      /*
         #TODO Log in user
        */
      this.$router.push("/dash/" + this.name);
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>