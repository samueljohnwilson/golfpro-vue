<template>
  <v-layout
    class="layout-wrapper"
    text-center
    wrap
  >
    <RegisterModal
      @close-modal="registerModal = false"
      :dialog="registerModal"
    />
    <LoginModal
      @close-modal="loginModal = false"
      :dialog="loginModal"
    />
    <v-img src="../assets/golfpro-background-small.png" max-width="250" contain/>
    <div class="auth-wrapper">
      <v-btn
        large
        ripple
        outlined
        color="white"
        @click.stop="loginModal = true"
      >
        Log In
      </v-btn>
      <span class="signup">Not a member? Then sign up <a @click.stop="registerModal = true">here</a>.</span>
    </div>
  </v-layout>
</template>
<script>
import LoginModal from './LoginModal.vue';
import RegisterModal from './RegisterModal.vue';

export default {
  name: 'Landing',
  data() {
    return {
      loginModal: false,
      registerModal: false,
    }
  },
  components: {
    LoginModal,
    RegisterModal,
  }
};
</script>
<style lang="less" scoped>
  .layout-wrapper,
  .auth-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .layout-wrapper {
    height: 75vh;

    span,
    a {
      color: white;
    }
  }

  .auth-wrapper {
    a {
      text-decoration: none;
    }
  }

  .signup {
    margin-top: 8px;
  
    a {
      text-decoration: underline;
    }
  }
</style>
