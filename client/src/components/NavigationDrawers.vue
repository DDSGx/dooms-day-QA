<template>
  <v-container>

    <v-app-bar color="primary" dark app clippedLeft>
      <v-app-bar-nav-icon @click="drawer=!drawer" ></v-app-bar-nav-icon>
      <v-toolbar-title>Dooms Day QA</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer :mini-variant="drawer" clipped left app>
      <v-list dense nav class="py-0">
        <v-list-item-content />

        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "navigation-drawers",
  data() {
    return {
      drawer: false,
      items: [
        {title: 'QATable', link: '/', icon: 'dashboard'},
        {title: 'History', link: '/history', icon: 'account_tree'},
        {title: 'About', link: '/about', icon: 'help'},
        {title: 'Settings', link: '/settings', icon: 'settings'},
        {title: 'Developers', link: '/developers', icon: 'people'},
      ],
    }
  },
}
</script>

<style scoped>
</style>