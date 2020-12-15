<template>
  <v-card tile>
    <v-toolbar flat dark color="#62000F">
      <v-btn icon dark @click="$store.commit('hideChatDialog')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>{{ friend.username }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-container fluid>
        <Chat
          class="py-2 px-1"
          :displayUsername="false"
          :displayTime="false"
          :avatar="displayAvatar"
          :participants="handledPartecipants"
          :myself="handledUser"
          :messages="handledMessages"
          :on-type="onType"
          :on-message-submit="onMessageSubmit"
          :placeholder="placeholder"
          :colors="colors"
          :close-button-icon-size="closeButtonIconSize"
          :on-close="onClose"
          :submit-icon-size="submitIconSize"
          :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
          :async-mode="asyncMode"
          :scroll-bottom="scrollBottom"
          :display-header="displayHeader"
        >
        </Chat>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { Chat } from "vue-quick-chat-m";
import "vue-quick-chat-m/dist/vue-quick-chat.css";
import { getChatMessages, postChatMessage } from "@/services/api/chat/index.js";

export default {
  name: "ChatMessages",
  components: {
    Chat,
  },
  data() {
    return {
      loading: false,
      visible: true,
      messages_get: [],
      friend: {},
      placeholder: "send your message",
      colors: {
        message: {
          myself: {
            bg: "#62000F",
            text: "#fff",
          },
          others: {
            bg: "#fb4141",
            text: "#fff",
          },
          messagesDisplay: {
            bg: "#f0eeee",
          },
        },
        submitIcon: "#b91010",
      },
      submitIconSize: "30px",
      closeButtonIconSize: "20px",
      asyncMode: false,
      toLoad: [],
      scrollBottom: {
        messageSent: true,
        messageReceived: false,
      },
      displayHeader: false,
      displayAvatar: { size: "small", hape: "circle" },
    };
  },
  methods: {
    onType: function () {
      //here you can set any behavior
    },

    loadMoreMessages(resolve) {
      setTimeout(() => {
        resolve(this.toLoad); //We end the loading state and add the messages
        //Make sure the loaded messages are also added to our local messages copy or they will be lost
        this.messages.unshift(...this.toLoad);
        this.toLoad = [];
      }, 1000);
    },
    onMessageSubmit: async function (message) {
      /*
       * example simulating an upload callback.
       * It's important to notice that even when your message wasn't send
       * yet to the server you have to add the message into the array
       */
      if (this.loading === false) {
        try {
          this.loading = true;
          const user = this.$store.getters.getUser;
          const chatId = this.$store.getters.getChatId;
          await postChatMessage(
            user._id,
            chatId,
            { text: message.content },
            localStorage.getItem("accessToken")
          );
          this.messages.push(message);
        } catch (error) {
          //
        } finally {
          this.loading = false;
        }
      }
    },
    onClose() {
      this.visible = false;
    },
    async loadMessages() {
      const user = this.$store.getters.getUser;
      const chatId = this.$store.getters.getChatId;
      if (chatId !== null) {
        try {
          this.messages_get = await getChatMessages(
            user._id,
            chatId,
            localStorage.getItem("accessToken")
          );
        } catch (error) {
          //
        }
      }
    },
  },
  computed: {
    handledUser() {
      const user = this.$store.getters.getUser;
      return {
        name: user.username,
        id: 1,
        avatar: user.avatar || "/assets/user-default.jpg",
      };
    },
    handledPartecipants() {
      const friend = this.$store.getters.getFriend;
      return [
        {
          name: friend.username || null,
          id: 2,
          avatar: friend.avatar || "/assets/user-default.jpg",
        },
      ];
    },
    handledMessages() {
      const user = this.$store.getters.getUser;
      let messages = []
      for (let message in this.messages_get.messages) {
        let m = {};
        let date = new Date(this.messages_get.messages[message].date);
        m.participantId =
          this.messages_get.messages[message].author === user._id ? 1 : 2;
        m.myself = m.participantId === 1 ? true : false;
        m.content = this.messages_get.messages[message].text;
        m.timestamp = {
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDay(),
          hour: date.getHours(),
          minute: date.getMinutes(),
          second: date.getSeconds(),
          millisecond: date.getMilliseconds(),
        };
        messages.push(m);
      }
      return messages;
    },
  },
  async mounted() {
    await this.loadMessages();

    //const user = this.$store.getters.getUser;
    //const chat = this.$store.getters.getUser;
    //this.messages_get = await getChatMessages(chat._id)
    //this.messages = this.handleMessages(this.messages_get);
    this.friend = this.$store.getters.getFriend;
  },
};

/*
Come scritto nella relazione finale nel primo sprint io, non possedendo nessuna conoscenza pregressa 
nell'ambito dello sviluppo di una webapp, inizialmente non ho potuto contribuire alla scrittura di codice
in modo proficuo, quindi ho contribuito principalmente alla progettazione delle api, alla scrittura del project board
e del product backlog. Uno dei miei ruoli per tutti e due gli sprint è stato quello di occuparmi della stesura dei 
vari file da consegnare alla fine di ogni sprint (backlog, sprint review, ecc.. ) facendo in modo che fossero corretti, 
completi e pronti entro le scadenze. Nel secondo sprint abbiamo deciso di dividerci in due sottogruppi (Eugenio, Carlo) e 
(Federico, io). Il ruolo di me e Feredico è stato quello di costruire il FrontEnd da zero in quanto nel primo sprint non 
abbiamo avuto il tempo necessario per realizzarlo. Abbiamo scelto di utilizzare il framework Vuetify in quanto ci sembrava 
molto versatile per la realizzazione di una UI chiara e intuitiva. Qui io e Federico ci siamo divisi il carico di lavoro in 
maniera sostanzialmente equa. Ogni giorno ci trovavamo la sera per discutere quali nuove componenti fossero state implementate 
e poi si decideva le prossime, alcune delle quali sono state scritte insieme in chiamata su Discord dove uno programmava e 
l'altro guardava la stesura del codice in diretta dando suggerimenti e evidenziando eventuali errori se presenti, in questo 
modo abbiamo velocizzato l'apprendimento del framework Vuetify e deciso la struttura del progetto in modo uniforme e 
consensuale. Mi sono occupato anche della ricerca di progetti terzi da includere nel nostro come ad esempio Quagga per 
citarne uno, il quale ci è servito per inserire la possibilità di estrarre da un'immagine l'ISBN di un libro dalla foto 
del barcode per poi utilizzarlo nello Web scraping per autocompilare i vari campi del form di inserimento di un libro, 
oppure 'vue-tree-list', per la rappresentazione dei labels come struttura ad albero con le varie funzionalità. Mi sono 
poi occupato insieme ad Eugenio della stesura della relazione finale 


Durante il primo sprint mi sono occupato di fare qualche api e non sapendo fare altro i test su postman.
Durante il secondo sprint mi sono principalmente dedicato a cerare il tutta la logica del sito è il suo design, inoltre
mi sono occupato dello sviluppo dei test su postman.

*/
</script>


