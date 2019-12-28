<template>
  <div class="text-center">
    <v-dialog
      v-model="dialogState"
      width="500"
    >
      <Login/>
    </v-dialog>
  </div>
</template>
<script>
import Login from './Login';

export default {
  name: 'Modal',

  components: {
    Login,
  },

  data: function() {
    return {
      email : "",
      password : ""
    }
  },

  props: {
    dialog: Boolean,
  },

  computed: {
    dialogState: {
      get: function() {
        return this.dialog
      },
      set: function(val) {
        if (!val) {
          this.$emit('close-modal');
        }
      }
    }
  },

  methods: {
    login: function() {
      let email = this.email 
      let password = this.password
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/'));
    }
  }
};
</script>