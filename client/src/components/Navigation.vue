<template>
  <v-navigation-drawer
    v-model="drawerState"
    absolute
    right
    temporary
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="../assets/avatar.jpeg"/>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Jared</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item
        v-for="item in items"
        v-on:click="item.action"
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
  data() {
    return {
      items: [
        { title: 'Home', icon: 'dashboard', action: () => this.$router.push('/') },
        { title: 'My Stats', icon: 'insert_chart', action: () => this.$router.push('/stats') },
        { title: 'My Courses', icon: 'golf_course', action: () => this.$router.push('/courses') },
        { title: 'Account', icon: 'account_box', action: () => this.$router.push('/account') },
        { title: 'Log Out', icon: 'highlight_off', action: this.logOut },
      ],
    }
  },
  computed: {
    ...mapGetters('navigation', [
      'drawer',
    ]),
    drawerState: {
      get() { 
        return this.drawer
      },
      set(drawer) {
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
    ...mapActions('user', [
      'setUser',
    ]),
    logOut() {
      this.setUser(null);
      this.$router.push('/')
    },
  },
};
</script>
