<template>
  <v-layout
    class="layout-wrapper"
    text-center
    wrap
  >
    <v-img src="../assets/golfpro-background-small.png" max-width="250" contain/>
    <div class="auth-wrapper">
      <v-btn large ripple outlined color="white">Log In</v-btn>
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

    a {
      text-decoration: underline;
    }
  }

  v-button {
    border: 1px solid white;
    border-radius: 4px;
    padding: 8px;
    min-width: 100px;
  }

  .signup {
    margin-top: 8px;
  }
</style>
