<template>
    <v-container fluid class="float-right">
    <v-row >
      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
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
              <v-avatar >
                <img
                src="https://i.pinimg.com/564x/66/28/0b/66280bc785eca690ff854e7e61edb66b.jpg"
                alt="Tartaglia"
                />
              </v-avatar>
              <h3>{{ $route.params.id }}</h3>
              <p class="caption mt-1">
                {{ $route.params.id }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UserMenu"
}
</script>