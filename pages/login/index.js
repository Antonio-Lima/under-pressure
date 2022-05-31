
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
      },
      users: [
        {
          username: "Usuário 1",
          email: "user@example.com",
          password: "123456"
        },
        {
          username: "Usuário 2",
          email: "user2@example.com",
          password: "123456"
        },
      ],
    }
  },

  methods: {
    tryLogin() {
      var user = "";
      this.users.map((obj) => {
        if (obj.email === this.login.user && obj.password === this.login.password) {
          user = obj.username
        }
      });

      if (user) {
        localStorage.user = user;
        window.location.href = "/home";
      } else {
        alert("Usuário ou senha inválidos");
      }
    },
  }
}
