<template>
  <v-container>
    <br><br><br><br>
    <v-card elevation-5 class="signup-form-style">
      <LogInForm/>
    </v-card>
  </v-container>
</template>

<script>
import LogInForm from '@/components/LogInForm.vue';

export default {
  name: 'Login',
  components: {
    LogInForm
  }
  
}
</script>
