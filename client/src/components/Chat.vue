<template>
  <v-navigation-drawer v-model="drawer" clipped right app>
    <v-btn @click="drawer=!drawer">閉じる</v-btn>
    <h1>{{ no }}</h1>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Chat",
  props: {
    chatNo: Number,
  },
  data() {
    return{
      no: this.chatNo,
      drawer: false,
    }
  },
  watch: {
    chatNo() {
      this.drawer = true;
      if (this.chatNo !== 0) {
        this.no = this.chatNo;
      }
    },
  },
}
</script>