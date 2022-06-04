import Modal from "@/components/modal/index.vue";

export default {
  head() {
    return {
      title: "Login"
    }
  },

  data() {
    return {
      isAuthenticated: false,
      showModal: false,
      login: {
        user: "",
        password: "",
      },
      users: [
        {
          id: 0,
          username: "Usuário 1",
          email: "user@user.com",
          password: "123456"
        },
        {
          id: 1,
          username: "Usuário 2",
          email: "user2@user.com",
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
  },

  components: {
    Modal,
  }
}
