<template>
  <v-app>
    <v-app-bar app color="#81D4FA">
      <div class="d-flex align-center">
        <v-img
          alt="Lib-hub Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="100"
        />

      </div>

      <v-spacer></v-spacer>
      
      <v-btn to="/" color="#81D4FA" elevation="0" tile>
      
        <span class="mr-2">Home </span>
        <v-icon>mdi-home-circle</v-icon>
      </v-btn>
      
    </v-app-bar>

    <v-main >
      <v-container align-content-lg fill-height fluid>
        <v-card elevation-5 class="login-form-style central-align-style" >
          
              <LogInForm/>
           
        </v-card>
      </v-container>
</v-main>
  </v-app>
</template>

<script>
import LogInForm from '@/components/LogInForm.vue';

export default {
  name: 'Login',
  components: {
    LogInForm
  },
  methods: {
    
  }
}
</script>
