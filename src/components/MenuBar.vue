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

    <v-icon
      v-if="user"
      @click="openDrawer"
      large
    >
      menu
    </v-icon>
  </v-app-bar>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MenuBar',

  computed: {
    ...mapGetters('user', [
      'user',
    ])
  },

  methods: {
    ...mapActions('navigation', [
      'openDrawer',
    ]),
  }
};
</script>