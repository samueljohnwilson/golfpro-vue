<template>
  <v-navigation-drawer
    v-model="drawerState"
    absolute
    right
    temporary
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="../assets/avatar.jpeg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Jared</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Navigation',

  computed: {
    ...mapGetters('navigation', [
      'drawer',
    ]),
    drawerState: {
      get: function() { 
        return this.drawer
      },
      set: function(drawer) {
        // Set the Vuex state to match the local v-model
        if (!drawer) {
          this.closeDrawer();
        }
      }
    }
  },

  methods: {
    ...mapActions('navigation', [
      'closeDrawer',
    ]),
  },

  data: function() {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'My Stats', icon: 'insert_chart' },
        { title: 'My Courses', icon: 'golf_course' },
        { title: 'Account', icon: 'account_box' },
      ],
    }
  },
};
</script>
