<template>
  <v-app>
    <navigation-drawers/>
    <v-content>
      <v-container fluid fill-height>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawers from "./components/NavigationDrawers";
export default {
    name: 'App',
    components: {
        NavigationDrawers
    },
}
</script>

<style scoped>
</style>
