<template>
  <v-app-bar
    app
    color="black"
    dark
    height="70"
    width="100vw"
  >
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/golf-logo-title-white-no-sig.png"
        transition="scale-transition"
        width="150"
      />
    </div>

    <v-spacer></v-spacer>

    <v-icon @click="openDrawer">
      mdi-menu
    </v-icon>
  </v-app-bar>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'MenuBar',

  methods: {
    ...mapActions('navigation', [
      'openDrawer',
    ]),
  }
};
</script>