<template>
  <v-container v-if="handledUser">
    <v-row>
      <v-menu bottom min-width="200px" rounded offset-y left  :close-on-content-click='close' >
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar>
              <img
                :src="handledUser.avatar || '/assets/user-default.jpg'"
                alt="Tartaglia"
              />
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content>
            <div class="mx-auto text-center">
              <h3>{{ handledUser.name }} {{ handledUser.surname }}</h3>
              <p class="caption mt-1 mx-2">
                {{ handledUser.username }}
                <br/>
                {{ handledUser.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text to="/user"> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="clearUser"> Disconnect </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UserMenu",
  data : () => ({
    user: {},
    close: false,
  }),
  methods:{
    clearUser(){
      localStorage.removeItem("accessToken")
      localStorage.removeItem("user")
      this.$store.commit("clearStore")
      this.$router.push("/")
    },

  },
  computed:{
    handledUser(){
      return this.$store.getters.getUser;
    }
  },
  mounted(){
    this.user = this.$store.getters.getUser;
  }
};
</script>