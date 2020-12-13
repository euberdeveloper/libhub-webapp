<template>
  <v-container fluid>
    <v-row>
      <v-tabs-items v-model="model">
        <v-tab-item>
          <v-card class="pa-4 a" flat>
            <v-card class="mb-2" v-for="user in friends" :key="user.username">
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
                    title="Chat"
                    @click="openChatDialog(user)"
                  >
                    <v-icon>mdi-android-messages</v-icon>
                  </v-btn>
                  <v-btn
                    class="mr-1"
                    small
                    dark
                    color="error"
                    title="Remove Friend"
                    @click="removeFriend(user._id)"
                  >
                    <v-icon>mdi-close-thick</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card class="pa-4 a" flat>
            <v-card dense floating tile class="mb-4 d-flex">
              <v-combobox
                class="py-2 px-10"
                hide-details
                append-icon="mdi-magnify"
                single-line
                :items="users"
                v-model="selectedUser"
                @keyup.enter="sendRequest"
              ></v-combobox>
            </v-card>
            <v-divider class="mb-1"></v-divider>
            <v-card flat class="mb-2">
              <v-card-title> Pending Friend Requests </v-card-title>
            </v-card>

            <v-card v-for="(user, index) in request_sent" :key="index">
              <v-row class="align-center">
                <v-col>
                  <v-card-title> {{ user.username }} </v-card-title>
                  <v-card-subtitle> {{ user.message }} </v-card-subtitle>
                </v-col>
                <v-col class="mx-2 d-flex justify-end">
                  <v-btn
                    class="mr-1"
                    small
                    dark
                    color="error"
                    title="Remove Request"
                    @click="removeRequestSent(user._id)"
                    menu-props="closeOnClick"
                  >
                    <v-icon>mdi-close-thick</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card class="a" flat>
            <v-card
              class="ma-2"
              v-for="(user, index) in request_got"
              :key="index"
            >
              <v-row class="align-center">
                <v-col>
                  <v-card-title> {{ user.username }} </v-card-title>
                  <v-card-subtitle> {{ user.message }} </v-card-subtitle>
                </v-col>
                <v-col class="mx-2 d-flex justify-end">
                  <v-btn
                    class="mr-1"
                    small
                    dark
                    color="success"
                    title="Accept Request"
                    @click="acceptReceivedRequest(user._id, true)"
                  >
                    <v-icon>mdi-check-bold</v-icon>
                  </v-btn>
                  <v-btn
                    class="mr-1"
                    small
                    dark
                    color="error"
                    title="Decline Request"
                    @click="acceptReceivedRequest(user._id, false)"
                  >
                    <v-icon>mdi-close-thick</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline"> Request Sent </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import {
  getFriends,
  zaWarudo,
  addFriend,
  getReceivedRequest,
  getSentRequest,
  deleteRequest,
  acceptRefuseRequest,
  deleteFriend,
} from "@/services/api/friends/index.js";

import { getChats, postChatCreate } from "@/services/api/chat/index.js";

export default {
  name: "FriendsTabs",
  data: () => ({
    res: null,
    loading: false,
    dialog: false,
    users: [],
    chats: [],
    friends: [],
    request_sent: [],
    request_got: [],
    selectedUser: "",
  }),
  methods: {
    async sendRequest() {
      if (!this.loading && this.users.includes(this.selectedUser)) {
        try {
          const user = this.$store.getters.getUser;
          await addFriend(
            user._id,
            this.selectedUser,
            localStorage.getItem("accessToken")
          );
          this.dialog = true;
          this.selectedUser = "";
          this.request_sent = await getSentRequest(
            user._id,
            localStorage.getItem("accessToken")
          );
          this.request_sent = this.request_sent.map((r) => ({
            ...r,
            username: this.res.find((v) => v._id === r.requestTo).username,
          }));
        } catch (error) {
          //
        } finally {
          this.loading = false;
        }
      } else {
        //
      }
    },
    async removeRequestSent(rid) {
      if (!this.loading) {
        try {
          const user = this.$store.getters.getUser;
          await deleteRequest(
            user._id,
            rid,
            localStorage.getItem("accessToken")
          );
          let index = 0;
          for (let r in this.request_sent) {
            if (this.request_sent[r]._id === rid)
              this.request_sent.splice(index, 1);
            index++;
          }
        } catch (error) {
          //
        } finally {
          this.loading = false;
        }
      }
    },
    async acceptReceivedRequest(rid, response) {
      if (!this.loading) {
        try {
          const user = this.$store.getters.getUser;
          await acceptRefuseRequest(
            user._id,
            rid,
            { accepted: response, message: "zaWarudooooo" },
            localStorage.getItem("accessToken")
          );
          let index = 0;
          for (let r in this.request_got) {
            if (this.request_got[r]._id === rid)
              this.request_got.splice(index, 1);
            index++;
          }
          this.friends = await getFriends(
            user._id,
            localStorage.getItem("accessToken")
          );
        } catch (error) {
          //
        } finally {
          this.loading = false;
        }
      }
    },
    async removeFriend(uid) {
      if (!this.loading) {
        try {
          const user = this.$store.getters.getUser;
          await deleteFriend(
            user._id,
            uid,
            localStorage.getItem("accessToken")
          );
          let index = 0;
          for (let f in this.friends) {
            if (this.friends[f]._id === uid) this.friends.splice(index, 1);
            index++;
          }
        } catch (error) {
          //
        } finally {
          this.loading = false;
        }
      }
    },
    async openChatDialog(f) {
      let cid = null;
      const user = this.$store.getters.getUser;
      this.chats = await getChats(
        user._id,
        localStorage.getItem("accessToken")
      );
      for (let chat in this.chats) {
        if (this.chats[chat].users.includes(f._id)) {
            cid = this.chats[chat]._id;
        }
      }
      if (cid === null) {
        try{
          cid = await postChatCreate(
          user._id,
          { recipient: f._id },
          localStorage.getItem("accessToken")
        );
        }catch(error){
          //
        }
      }
      this.$store.commit("showChatDialog", { chatId: cid, friend: f });
    },
  },
  computed: {
    model: {
      get() {
        return this.$store.state.model;
      },
    },
  },
  async mounted() {
    try {
      const user = this.$store.getters.getUser;
      this.friends = await getFriends(
        user._id,
        localStorage.getItem("accessToken")
      );
      this.chats = await getChats(
        user._id,
        localStorage.getItem("accessToken")
      );

      this.res = await zaWarudo(localStorage.getItem("accessToken"));
      for (let u in this.res) {
        if (this.friends.length > 0) {
          for (let f in this.friends) {
            if (this.res[u].username != this.friends[f].username) {
              this.users.push(this.res[u].username);
            }
          }
        } else {
          this.users.push(this.res[u].username);
        }
      }

      this.request_got = await getReceivedRequest(
        user._id,
        localStorage.getItem("accessToken")
      );
      this.request_got = this.request_got.map((r) => ({
        ...r,
        username: this.res.find((v) => v._id === r.requestBy).username,
      }));

      this.request_sent = await getSentRequest(
        user._id,
        localStorage.getItem("accessToken")
      );
      this.request_sent = this.request_sent.map((r) => ({
        ...r,
        username: this.res.find((v) => v._id === r.requestTo).username,
      }));
    } catch (error) {
      //
    }
  },
};
</script>

<style scoped>
.a {
  width: 8192px;
}
</style>