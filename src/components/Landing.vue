<template>
  <v-layout
    class="layout-wrapper"
    text-center
    wrap
  >
    <v-img src="../assets/golfpro-background-small.png" max-width="250" contain/>
    <div class="auth-wrapper">
      <v-img class="login" src="../assets/login-white.png" max-width="125" max-height="80" contain/>
      <span class="signup">Not a member? Then sign up <a>here</a>.</span>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'Landing',

  data: () => ({
    //
  }),
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

    a {
      text-decoration: underline;
    }
  }

  .signup {
    margin-top: 8px;
  }
</style>
