<template>
  <v-app>
    <MenuBar/>
    <Navigation
      v-model="drawer"
    />
    <v-content>
      <Landing/>
    </v-content>
  </v-app>
</template>

<script>
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import MenuBar from './components/MenuBar';

export default {
  name: 'App',

  components: {
    Landing,
    Navigation,
    MenuBar,
  },
};
</script>
