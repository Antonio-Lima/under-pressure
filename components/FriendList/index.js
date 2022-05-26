export default {
  name: "friendList",
  friendList: [],
  props: {
    friends: {
      type: Array,
      required: true,
      default: () => [{id: 0, name: "", online: false}]
    }
  },
}
