<template>
  <v-app>
    <navigation-drawers/>
    <v-content>
      <router-view></router-view>
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
