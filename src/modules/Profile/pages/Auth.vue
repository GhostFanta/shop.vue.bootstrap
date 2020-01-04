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
      <div class="login-form" v-if="this.$route.path === '/login'">
        <b-form-group>
          <label>Email:</label>
          <ValidationProvider
            name="Email"
            placeholder="Email"
            :rules="{ required: true, email: true }"
            v-slot="{ errors }"
          >
            <b-form-input
              v-model="loginEmail"
              type="text"
              placeholder="Email"
            />
            <span class="form-alert">{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>

        <b-form-group>
          <label>Password:</label>
          <ValidationProvider
            name="Password"
            placeholder="Password"
            rules="required"
            v-slot="{ errors }"
          >
            <b-form-input
              v-model="loginPassword"
              type="password"
              placeholder="Password"
            />
            <span class="form-alert">{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>

        <b-form-checkbox>Remember me</b-form-checkbox>
        <button type="submit" class="btn btn-outline-success btn-block">
          Login
        </button>
      </div>
      <div class="signup-form" v-if="this.$route.path === '/signup'">
        <b-form-group>
          <label>Email:</label>
          <ValidationProvider
            name="Email"
            placeholder="Email"
            :rules="{ required: true, email: true }"
            v-slot="{ errors }"
          >
            <b-form-input
              v-model="signupEmail"
              type="text"
              placeholder="Email"
            />
            <span class="form-alert">{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>

        <b-form-group>
          <label>Password:</label>
          <ValidationProvider
            name="Password"
            placeholder="Password"
            rules="required"
            v-slot="{ errors }"
          >
            <b-form-input
              v-model="loginPassword"
              type="password"
              placeholder="Password"
            />
            <span class="form-alert">{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>

        <b-form-group>
          <label>Repeat Password:</label>
          <ValidationProvider
            name="Repeated Password"
            placeholder="Repeat Password"
            rules="required"
            v-slot="{ errors }"
          >
            <b-form-input
              v-model="loginPassword"
              type="password"
              placeholder="Password"
            />
            <span class="form-alert">{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>
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
      loginEmail: "",
      loginPassword: "",
      signupEmail: "",
      signupPassword: "",
      repeatPassword: "",
      errors: []
    };
  },
  created() {},
  computed: {
    ...mapGetters("profile", ["pending"]),
    disableLogin() {
      return false;
    },
    disableSignup() {
      return false;
    }
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
    .form-alert {
      color: red;
    }
  }
  .signup-form {
    * {
      margin: 10px 0 10px 0;
    }
    .form-alert {
      color: red;
    }
  }
}
</style>
