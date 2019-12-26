<template>
  <v-layout
    class="layout-wrapper"
    text-center
    wrap
  >
    <v-img src="../assets/golfpro-background-small.png" max-width="250" contain/>
    <div class="auth-wrapper">
      <router-link to='/home'>
        <v-btn
          large
          ripple
          outlined
          color="white"
        >
          Log In
        </v-btn>
      </router-link>
      <span class="signup">Not a member? Then sign up <a>here</a>.</span>
    </div>
  </v-layout>
</template>
<script>
export default {
  name: 'Landing',
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
