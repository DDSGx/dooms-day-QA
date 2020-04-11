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

    <chat-line v-for="(item) in chatModels[no]" v-bind:key="item.id" :chatModel="item"></chat-line>

    <!--  入力エリア  -->
    <v-card class="ma-2 mt-5" outlined>
      <v-textarea
        class="body-2 pa-1"
        v-on:keydown.meta.enter="sendMessage"
        v-on:keydown.ctrl.enter="sendMessage"
        v-model="text"
        hide-details
        auto-grow
        rows="2"
      ></v-textarea>
      <v-card-actions class="pa-0">
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn :disabled="!text" icon @click="sendMessage" v-on="on">
              <v-icon class="pa-1" medium color="green">send</v-icon>
            </v-btn>
          </template>
          <span class="caption">{{commandNavigation}}</span>
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
    commandNavigation() {
      const ua = window.navigator.userAgent.toLowerCase();
      if(ua.indexOf("windows nt") !== -1) {
        return 'CTRL + Enter'
      }else if(ua.indexOf("mac os x") !== -1) {
        return '⌘ + Enter'
      }
      return ''
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