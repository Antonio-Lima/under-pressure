
export default {
  head() {
    return {
      title: "Login"
    }
  },

  data() {
    return {
      isAuthenticated: false,
      login: {
        user: "",
        password: "",
      }
    }
  },

  methods: {
    tryLogin() {
      console.log("Usuário: " + this.login.user);
      console.log("Usuário: " + this.login.password);
      this.isAuthenticated = (this.login.user && this.login.password);
    },
  }
}
