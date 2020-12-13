<template>
  <v-container fluid>
    <v-row>
      <v-toolbar color="#62000F" flat dark>
        <v-toolbar-title>Friends</v-toolbar-title>
      </v-toolbar>
      <v-tabs color="#F83456" vertical>
        <v-tab>
          <v-icon left> mdi-account-group </v-icon>
          Friend List
        </v-tab>
        <v-tab>
          <v-icon left> mdi-account-search </v-icon>
          Add Friend
        </v-tab>
        <v-tab>
          <v-icon left> mdi-account-check </v-icon>
          Friend Requests
        </v-tab>

        <v-tab-item>
          <v-card class="pa-4" flat>
            <v-card
              class="mb-2"
              style="width: 100%"
              v-for="user in friends"
              :key="user.username"
            >
              <v-row class="align-center">
                <v-col>
                  <v-card-title>
                    {{ user.name }} {{ user.surname }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ user.username }}
                  </v-card-subtitle>
                </v-col>
                <v-col class="mx-2 d-flex justify-end">
                  <v-btn
                    class="mr-1"
                    small
                    dark
                    color="primary"
                    title="Open Friend"
                  >
                    <v-icon>mdi-open-in-new</v-icon>
                  </v-btn>
                  <v-btn
                    class="mr-1"
                    small
                    dark
                    color="error"
                    title="Remove Friend"
                  >
                    <v-icon>mdi-close-thick</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="pa-4" flat>
            <v-toolbar dense floating class="mb-4">
              <v-text-field
                hide-details
                append-icon="mdi-magnify"
                single-line
              ></v-text-field>
            </v-toolbar>
            <v-divider class="mb-2"></v-divider>

            <v-card>
              <v-row class="align-center">
                <v-col>
                  <v-card-title> User </v-card-title>
                </v-col>
                <v-col class="mx-2 d-flex justify-end">
                  <v-btn
                    class="mr-1"
                    small
                    dark
                    color="error"
                    title="Remove Request"
                  >
                    <v-icon>mdi-close-thick</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="pa-4" flat>
            <v-card>
              <v-row class="align-center">
                <v-col>
                  <v-card-title> User </v-card-title>
                </v-col>
                <v-col class="mx-2 d-flex justify-end">
                  <v-btn
                    class="mr-1"
                    small
                    dark
                    color="success"
                    title="Accept Request"
                  >
                    <v-icon>mdi-check-bold</v-icon>
                  </v-btn>
                  <v-btn
                    class="mr-1"
                    small
                    dark
                    color="error"
                    title="Decline Request"
                  >
                    <v-icon>mdi-close-thick</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FriendsTabs",
  data: () => ({
    friends: [
      {
        name: "Federico",
        surname: "Stefini",
        username: "Xenopeltis",
      },
      {
        name: "Sebastiano",
        surname: "Dissegna",
        username: "SebGOD",
      },
      {
        name: "Eugenio",
        surname: "Berretta",
        username: "Euberdeveloper",
      },
      {
        name: "Carlo",
        surname: "Zanotto",
        username: "Zarlo",
      },
    ],
  }),
};
</script>

<style>
.v-card {
  display: flex !important;
  flex-direction: column;
}
</style>