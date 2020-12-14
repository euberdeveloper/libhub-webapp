<template>
  <v-container fluid class="d-flex">
    <friends-tabs />
    
    <v-row>
      <v-dialog
        v-model="showChatDialog"
        :key="getChatId"
        fullscreen
        hide-overlay
      >
        <chat-messages />
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import FriendsTabs from "@/components/FriendsTabs.vue";
import ChatMessages from "@/components/ChatMessages.vue";

export default {
  name: "Friends",
  components: { FriendsTabs, ChatMessages },
  data: () => ({}),
  computed: {
    showChatDialog: {
      get: function () {
        return this.$store.state.chatDialog;
      },
    },
    getChatId: {
      get: function () {
        return this.$store.getters.getChatId;
      },
    },
  },
};
</script>