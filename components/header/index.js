export default {
  name: "headerUP",
  props: {
    activePage: {
      type: String,
      required: true,
      default: "home"
    }
  },

  data() {
    return {
      username: "",
    }
  },

  beforeMount() {
    this.username = localStorage.user;
  },
}
