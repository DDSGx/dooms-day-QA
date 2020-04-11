<template>
  <v-navigation-drawer v-model="drawer" right app>

    <div class="caption pa-2">
      <v-icon @click="drawer=!drawer" class="float-md-right">close</v-icon>
      <div class="d-flex justify-space-between mb-1">
        <div class="font-weight-bold">{{ chatModel.qPerson }}</div>
        <div class="mr-3 text--secondary">{{ chatModel.qDate }}</div>
      </div>
      <div class="text-left mt-2 mb-0">{{ chatModel.qText }}</div>
    </div>
    <v-divider class="mb-3"></v-divider>

    <!--  チャット表示  -->
    <div v-for="(item) in chatModels[no]" v-bind:key="item.id">
      <chat-line :chatModel="item"></chat-line>
    </div>

    <!--  入力エリア  -->
    <v-card class="ma-2 mt-5" outlined>
      <v-textarea v-on:keydown.meta.enter="sendMessage" v-model="text" hide-details class="body-2 pa-1" auto-grow rows="2"></v-textarea>
      <v-card-actions class="pa-0">
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon @click="sendMessage" v-on="on">
              <v-icon class="pa-1" medium color="green">send</v-icon>
            </v-btn>
          </template>
          <span class="caption"> ⌘ + Enter</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import ChatLine from "./ChatLine";
export default {
  name: "Chat",
  components: {
    ChatLine
  },
  props: {
    chatModel: Object,
  },
  computed: {
    nowDate() {
      const now = new Date();
      const year = now.getFullYear();
      const mon = now.getMonth()+1;
      const day = now.getDate();
      const hour = now.getHours();
      const min = ("0"+now.getMinutes()).slice(-2);
      return `${year}/${mon}/${day} ${hour}:${min}`
    },
  },
  methods: {
    log(l) {
        console.log(l);
    },
    sendMessage() {
      if (this.text) {
        if (!this.chatModels[this.no]){
            this.chatModels[this.no] = [];
        }
        this.chatModels[this.no].push({
          qPerson: '回答太郎',
          qDate: this.nowDate,
          qText: this.text,
        });
        this.text = ''
      }
    },
  },
  data() {
    return{
      no: this.chatModel.no,
      drawer: false,
      chatModels: {},
      text:'',
    }
  },
  watch: {
    chatModel: {
      handler: function() {
        this.drawer = true;
        if (this.chatModel.no !== 0) {
          this.no = this.chatModel.no;
        }
      },
      deep: true
    },
    chatNo() {
      this.drawer = true;
      if (this.chatNo !== 0) {
        this.no = this.chatNo;
      }
    },
  },
}
</script>

<style scoped>
>>>.v-textarea textarea {
  line-height: unset;
}
</style>