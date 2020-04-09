<template>
  <v-container class="navigation">
    <v-navigation-drawer clipped left app>
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-content>
            <v-list-item-title>dooms day QA</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content class="navigation__content">
            <v-list-item :to="item.link">{{ item.title }}</v-list-item>
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
          items: [
              {title: 'QATable', link: '/'},
              {title: 'Logs', link: '/logs'},
              {title: 'About', link: '/about'},
          ],
      }
  },
}
</script>

<style scoped>
</style>