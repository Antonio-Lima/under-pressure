import headerUP from "../../components/header/index.vue";
import friendList from "../../components/friendList/index.vue";
import feed from "../../components/feed/index.vue";

export default {
  head() {
    return {
      title: "Home"
      }
    },
  data() {
    return {
      friends: [
        {
          id: 0,
          name: "Neymar Jr",
          online: true
        },
        {
          id: 1,
          name: "Sylvester Stallone",
          online: true
        },
        {
          id: 2,
          name:"Dwayne Johnson",
          online: false
        },
        {
          id: 3,
          name: "Will Smith",
          online: false
        },
      ]
    }
  },

  mounted() {
    console.log(this.friends);
  },

  components: {
    headerUP,
    friendList,
    feed,
  }
}
