import headerUP from "../../components/header/index.vue";
import friendList from "../../components/FriendList/index.vue";
import feed from "../../components/feed/index.vue";
import PsychoModal from "../../components/psychoModal/index.vue";

export default {
  head() {
    return {
      title: "Home"
      }
    },
  data() {
    return {
      showModal: false,
      friends: [
        {
          id: 0,
          name: "João",
          online: true
        },
        {
          id: 1,
          name: "Catarina",
          online: true
        },
        {
          id: 2,
          name:"Enzo",
          online: false
        },
        {
          id: 3,
          name: "Paulo",
          online: false
        },
      ]
    }
  },

  components: {
    headerUP,
    friendList,
    feed,
    PsychoModal,
  }
}
