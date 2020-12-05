<template>
  <v-container>
    <v-app-bar app color="#260000">
      <div class="d-flex justify-center">
        <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->

        <v-icon class="mr-2 my-3" @click="showDrawer" color="white">mdi-menu</v-icon>

        <v-img
          alt="Lib-hub Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo-rounded.png"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <div>
        <user-menu/>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" stateless app>
      
      <v-list nav dense>
        
        <v-list-item-group v-model="group" active-class=" text--accent-4">
          <v-list-item-content>
            <v-list-item-title class="title">
              Navigation Bar
            </v-list-item-title>
            <v-list-item-subtitle>
              
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          
          <v-list-item @click="toDashboard">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-bookshelf</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Libraries</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-book-open-page-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Books</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import UserMenu from "@/components/UserMenu.vue"

export default {
  name: "NavigationDrawer",
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    showDrawer(){
      if (this.drawer){
        this.drawer = false;
      }else{
        this.drawer = true;
      }
    },
    toDashboard (){
      this.$router.push("/dash/" + this.$route.params.id);
    }
  },
  components:{
    UserMenu
  }
};
</script>