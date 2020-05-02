<template>
  <div class="text-center">
    <v-dialog v-model="dialogState" width="500">
      <ValidationObserver ref="obs" v-slot="{ invalid, validated, passes, validate }">
        <v-card>
          <v-toolbar dark>
            <v-toolbar-title>Log In</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <ValidationProvider name="email" rules="required" v-slot="{ errors, valid }">
                <v-text-field
                  autocomplete="off"
                  v-model="email"
                  :error-messages="errors"
                  :success="valid"
                  label="Email"
                  required
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider name="password" rules="required"  v-slot="{ errors, valid }">
                <v-text-field
                  v-model="password"
                  :type="show ? 'text' : 'password'"
                  :append-icon="show ? 'visibility' : 'visibility_off'"
                  @click:append="show = !show"
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
            <v-btn color="green darken-1" @click="passes(submit)" :disabled="invalid || !validated">
              Log In
            </v-btn>
          </v-card-actions>
        </v-card>
      </ValidationObserver>
    </v-dialog>
  </div>
</template>
<script>
import {
  ValidationObserver,
  ValidationProvider
} from "vee-validate";
import { rules } from '../validations';

export default {
  name: 'LoginModal',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      email: "",
      password: "",
      show: false,
      rules
    }
  },
  props: {
    dialog: Boolean,
  },
  computed: {
    dialogState: {
      get() {
        return this.dialog
      },
      set(val) {
        if (!val) {
          this.$emit('close-modal');
        }
      }
    }
  },
  methods: {
    async clear() {
      this.name = this.email = this.password = "";
      requestAnimationFrame(() => {
        this.$refs.obs.reset();
      });
    },
    login() {
      let email = this.email 
      let password = this.password
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/'));
    }
  }
};
</script>