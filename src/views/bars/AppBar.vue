<template>
  <v-container>
    <v-app-bar app color="#260000">
      <div class="d-flex align-center">
        <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->

        <v-icon class="mr-2" @click="drawer = true" color="white">mdi-menu</v-icon>

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

      <v-avatar>
        <img
          src="https://i.pinimg.com/564x/66/28/0b/66280bc785eca690ff854e7e61edb66b.jpg"
          alt="Tartaglia"
        />
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app style="margin-top: 3.38%">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class=" text--accent-4">
          <v-list-item>
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
export default {
  name: "NavigationDrawer",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>