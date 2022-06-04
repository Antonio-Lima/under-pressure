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
          name: "Amigo 1",
          online: true
        },
        {
          id: 1,
          name: "Amigo 2",
          online: true
        },
        {
          id: 2,
          name:"Amigo 3",
          online: false
        },
        {
          id: 3,
          name: "Amigo 4",
          online: false
        },
      ]
    }
  },

  components: {
    headerUP,
    friendList,
    feed,
  }
}
