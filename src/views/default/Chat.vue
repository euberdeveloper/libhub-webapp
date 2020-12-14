<template>
  <v-container fluid>

    <chat-messages/>
    <!--
    <v-card align="right" max-width="500">
      <v-list v-for="chat in chats" :key="chat._id">
        <v-list-item @click="openChatForm(chat.users[1])">
          <v-list-item-avatar>
            <v-icon> mdi-account </v-icon>
          </v-list-item-avatar>
          <v-list-item-content class="text-left">
            <v-list-item-title v-text="chat.users[1]"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-avatar :color="chat.newMessages > 0 ? '#00E676' : 'white'" size="25">
              {{ chat.newMessages > 0 ? chat.newMessages : "" }}
            </v-avatar>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
    <v-dialog v-model="show_ChatForm" max-width="500px">
      <chat-form />
    </v-dialog>-->

  </v-container>
</template>

<script>
//import ChatForm from "../../components/ChatForm.vue";
import ChatMessages from "@/components/ChatMessages.vue"

export default {
  name: "Chat",
  components: {
    //ChatForm,
    ChatMessages,
  },
  data() {
    return {
      chats: [],
    };
  },
  methods: {
    openChatForm(target) {
      this.$store.commit("showChatForm", target);
    },
  },
  computed: {
    show_ChatForm: {
      get: function () {
        return this.$store.state.ChatForm;
      },
      set: function (value) {
        if (value) {
          this.$store.commit("showChatForm", null);
        } else {
          this.$store.commit("hideChatForm");
        }
      },
    },
  },
  mounted: function () {
    this.chats = [
      {
        _id: "1",
        users: ["Eugenio", "Federico"],
        createdOn: "2020-12-17",
        newMessages: 1,
      },
      {
        _id: "2",
        users: ["Eugenio", "Sebastiano"],
        createdOn: "2020-12-18",
        newMessages: 0,
      },
      {
        _id: "3",
        users: ["Eugenio", "Carlo"],
        createdOn: "2020-12-19",
        newMessages: 5,
      },
    ];
  },
};
</script>
