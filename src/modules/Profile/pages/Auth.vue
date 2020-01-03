<template>
  <div class="auth">
    <ul class="nav nav-tabs d-flex flex-row justify-content-center">
      <li
        class="nav-item p-2"
        :class="{ active: this.$route.path === '/login' }"
      >
        <router-link to="/login" class="text-secondary">Login</router-link>
      </li>
      <li
        class="nav-item p-2"
        :class="{ active: this.$route.path === '/signup' }"
      >
        <router-link to="/signup" class="text-secondary">Signup</router-link>
      </li>
    </ul>
    <div class="container card">
      <div class="login-form row" v-if="this.$route.path === '/login'">
        <b-form-group class="col align-self-center">
          <div class="form-inline">
            <label class="mr-3">Email: </label>
            <b-form-input
              class=""
              label="Email: "
              placeholder="Email"
            ></b-form-input>
          </div>

          <div class="form-inline">
            <label class="mr-3">Password: </label>
            <b-form-input
              label="Password: "
              placeholder="Password"
              type="password"
              id="input-email"
              :model="email"
            ></b-form-input>
          </div>

          <b-form-invalid-feedback id="input-email" :state="emailValidation"
            >Looks Good :)</b-form-invalid-feedback
          >
          <b-form-invalid-feedback id="input-email" :state="emailValidation">
            Not a valid email.
          </b-form-invalid-feedback>
          <b-form-checkbox>Remember me</b-form-checkbox>
          <button
            type="submit"
            class="btn btn-outline-success btn-block"
          >
            Login
          </button>
        </b-form-group>
      </div>
      <div class="signup-form" v-if="this.$route.path === '/signup'">
        <b-form-input label="Email: " placeholder="Email" v-validate="'required|Email'"></b-form-input>
        <b-form-input label="Password: " placeholder="Password"></b-form-input>
        <b-form-input
          label="Repeat Password: "
          placeholder="Repeat Password"
        ></b-form-input>
        <button type="submit" class="btn btn-outline-success btn-block">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Auth",
  data() {
    return {
      email: ""
    };
  },
  computed: {
    ...mapGetters("profile", ["pending"]),
    emailValidation: {
      // return this.emai
    },
    passwordValidation: {}
  },
  methods: {
    ...mapActions("profile", ["login"])
  }
};
</script>
<style lang="scss" scoped>
.auth {
  margin: 0 0 20px 0;
  width: 40%;

  .card {
    border-radius: 0;
  }

  .active {
    background-color: #d9d9d9;
    border-radius: 10px 10px 0 0;
  }
  .nav-item {
    margin: 0 20px 0 0;
    justify-content: center;
    align-items: center;
    a {
      text-align: center;
      text-decoration: none;
    }
  }
  .login-form {
    * {
      margin: 10px 0 10px 0;
    }
  }
  .signup-form {
    * {
      margin: 10px 0 10px 0;
    }
  }
}
</style>
