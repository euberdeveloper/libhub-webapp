<style>
  @import './styles/Home.css';
</style>

<template>
  <v-app>
    <v-app-bar app color="#81D4FA">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="100"
        />

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <br>
      
      <v-container >
        
            <v-row no-gutters class="signup-style">
              <v-col>
                <AboutUs/>
              </v-col>
              
              <v-col>
                <v-card elevation-5>
                  <SignupForm/>
                </v-card>
              </v-col>
            </v-row>
             
      </v-container>
       
    </v-main>
  </v-app>
</template>

<script>
import AboutUs from './components/AboutUs.vue';
import SignupForm from './components/signupForm.vue';


export default {
  name: 'App',

  components: {
    SignupForm,
    AboutUs
  },

  data: () => ({
    // 
  }),
};
</script>


