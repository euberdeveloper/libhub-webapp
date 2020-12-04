<template>
  <v-container >
    
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    
      <v-text-field
        v-model="name"
        id="UserName"
        :rules="nameRules"
        :counter="23"
        label="Username"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        id="UserEmail"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :passwordRules="[passwordRules.required, passwordRules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        counter
        hint="At least 8 characters"
        @click:append="show1 = !show1"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Sign in
      </v-btn>

      <v-btn
        class="float-right"
        elevation="0"
        to="login"
        tile
      >
        <span class="mr-2">Login </span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      
    </v-form>
  </v-container>
</template>

<script>
export default {
    name: 'SignupForm',
    data () {
      return {
        valid: true,
        show1: false,
        show2: true,
        password: '',
        passwordRules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
        name: '',
        nameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 23) || 'Username must be less than 23 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
        this.$store.state.user_email = this.$refs.form.$el["UserEmail"].value
        this.$store.state.user_name = this.$refs.form.$el["UserName"].value
        /*
         #TODO add user to the database
        */
      }
    },
}
</script>