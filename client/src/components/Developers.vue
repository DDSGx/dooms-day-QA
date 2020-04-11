<template>
  <div>
  <v-card
    class="mx-auto"
    color="#00897B"
    dark
    max-width="400"
  >
    <v-card-title>
      <span class="title font-weight-light">Developers</span>
    </v-card-title>

    <v-card-actions v-for="(item) in developers" v-bind:key="item.id">
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6" :src=item.icon></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>

  </div>
</template>

<script>
export default {
  name: "Developers",
  data() {
    return{
      developers: [
        {
          name: 'kai',
          icon: 'https://pbs.twimg.com/profile_images/1140943756390096896/8lOe9sWh_400x400.jpg',
        },
        {
          name: 's-tyd',
          icon: 'https://pbs.twimg.com/profile_images/1121271397727080448/bnYiL4S8_400x400.jpg',
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>