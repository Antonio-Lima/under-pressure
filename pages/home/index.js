import headerUP from "../../components/header/index.vue";
import friendList from "../../components/FriendList/index.vue"

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
          name: "João",
          online: true
        },
        {
          id: 1,
          name: "Antônio",
          online: false
        },
        {
          id: 2,
          name:"Carol",
          online: true
        },
        {
          id: 3,
          name: "Aleatório22",
          online: false
        },
        {
          id: 4,
          name: "Aleatório22",
          online: false
        },
        {
          id: 5,
          name: "Aleatório22",
          online: false
        },
        {
          id: 6,
          name: "Aleatório22",
          online: false
        },
        {
          id: 7,
          name: "Aleatório22",
          online: false
        }
      ]
    }
  },

  mounted() {
    console.log(this.friends);
  },

  components: {
    headerUP,
    friendList,
  }
}
