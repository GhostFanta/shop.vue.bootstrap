import { extend } from "vee-validate";

extend("requirePassword", val => {
  if (!val || val === "") {
    return "Password is required";
  }
  return true;
});
