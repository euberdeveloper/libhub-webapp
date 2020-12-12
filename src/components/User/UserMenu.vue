<template>
  <v-container>
    <v-row>
      <v-menu bottom min-width="200px" rounded offset-y left >
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar>
              <img
                src="https://i.pinimg.com/564x/66/28/0b/66280bc785eca690ff854e7e61edb66b.jpg"
                alt="Tartaglia"
              />
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content>
            <div class="mx-auto text-center">
              <v-avatar>
                <img
                  src="https://i.pinimg.com/564x/66/28/0b/66280bc785eca690ff854e7e61edb66b.jpg"
                  alt="Tartaglia"
                />
              </v-avatar>
              <h3>{{ this.uid }}</h3>
              <p class="caption mt-1">
                {{ this.uid }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text to="/user"> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="clearUID"> Disconnect </v-btn>
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
    uid : "",
  }),
  methods:{
    clearUID(){
      this.$store.state.UserId = "";
      this.$router.push("/");
    }
  },
  mounted(){
    this.uid = this.$store.state.UserId;
  }
};
</script>