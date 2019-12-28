<template>
  <ValidationObserver ref="obs" v-slot="{ invalid, validated, passes, validate }">
    <v-card class="elevation-12">
      <v-toolbar dark color="dark-grey">
        <v-toolbar-title>Sign Up</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <ValidationProvider name="username" rules="required|max:20" v-slot="{ errors, valid }">
            <v-text-field
              v-model="name"
              :counter="20"
              :error-messages="errors"
              :success="valid"
              label="Username"
              required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors, valid }">
            <v-text-field
              v-model="email"
              :error-messages="errors"
              :success="valid"
              label="Email"
              required
              hint="We won't send you emails; it will only be used if you need to reset your password."
              persistent-hint
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider name="password" :rules="rules.password"  v-slot="{ errors, valid }">
            <v-text-field
              v-model="password"
              :error-messages="errors"
              :success="valid"
              label="Password"
              required
              hint="Minimum 8 characters with at least 1 uppercase letter, 1 lowercase letter, and 1 number."
              persistent-hint
            ></v-text-field>
          </ValidationProvider>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="clear">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="passes(submit)"
          :disabled="invalid || !validated"
        >
          Sign Up
        </v-btn>
      </v-card-actions>
    </v-card>
  </ValidationObserver>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider
} from "vee-validate";
import { rules } from '../validations';

export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    rules
  }),
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    async clear() {
      this.name = this.email = this.password = "";
      requestAnimationFrame(() => {
        this.$refs.obs.reset();
      });
    },
  }
};
</script>
