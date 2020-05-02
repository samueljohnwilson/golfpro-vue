import { required, email, max } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("max", {
  ...max,
  message: "This field must be {length} characters or less"
});

extend("email", {
  ...email,
  message: "This field must be a valid email"
});

const upper = /[A-Z]/;
const lower = /[a-z]/;
const number = /[0-9]/;

extend("password", {
  computesRequired: true,
  validate: value => value.match(upper) && value.match(lower) && value.match(number) && value.length > 7,
  message: "Minimum 8 characters with at least 1 uppercase letter, 1 lowercase letter, and 1 number."
});

export const rules = {
  password: {
    required: true,
    password: true
  },
};
