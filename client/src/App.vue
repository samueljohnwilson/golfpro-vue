<template>
  <v-app style="background-color: black">
    <MenuBar />
    <Navigation />
    <v-content>
      <Landing v-if="!user" />
      <Stats v-else />
    </v-content>
  </v-app>
</template>

<script>
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import MenuBar from './components/MenuBar';
import Stats from './components/Stats';

export default {
  name: 'App',

  components: {
    Landing,
    Navigation,
    MenuBar,
    Stats,
  },
};
</script>
