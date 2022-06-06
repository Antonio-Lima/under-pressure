export default {
  name: "Modal",

  data() {
    return {
      creationOk: false,
      form: {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }
    }
  },

  methods: {
    createUser() {
      if (this.form.username === "") {
        alert("Por favor, informe o nome de usuário");
        return;
      }
      if (this.form.email === "" || !this.form.email.includes("@") || !this.form.email.includes(".com")) {
        alert("Por favor, informe um endereço de e-mail válido");
        return;
      }
      if (this.form.password === "" || !this.form.password.length >= 6) {
        alert("Por favor, informe uma senha válida de 6 ou mais dígitos");
        return;
      }
      if (this.form.passwordConfirm !== this.form.password) {
        alert("Por favor, confirme a senha do usuário");
        return;
      }

      const email = this.$parent.users.find(item => item.email === this.form.email);

      if (email) {
        alert("E-mail já cadastrado.");
        return;
      }

      this.$parent.users.push({
        id: this.$parent.users.length - 1,
        username: this.form.username,
        email: this.form.email,
        password: this.form.password
      })

      this.creationOk = true;

      this.form.username = "";
      this.form.email = "";
      this.form.password = "";
      this.form.passwordConfirm = "";
    },
  },
}
