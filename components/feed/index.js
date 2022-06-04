export default {
  name: "feed",

  data() {
    return {
      newPost: "",
      user: "",
      feed: [
      {
        id: 0,
        user: "Amigo 1",
        photo: "/assets/img/profile/user1.jpeg",
        date: "2022-05-28 14:35",
        post: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p>",
        liked: true,
        coments: 0,
        likes: 105,
      },
      {
        id: 1,
        user: "Amigo 2",
        photo: "/assets/img/profile/user1.jpeg",
        date: "2022-05-27 13:44",
        post: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p>",
        liked: true,
        coments: 0,
        likes: 105,
      },
      {
        id: 2,
        user: "Amigo 3",
        photo: "/assets/img/profile/user1.jpeg",
        date: "2022-05-27 13:44",
        post: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p>",
        liked: false,
        coments: 0,
        likes: 105,
      }
    ]
    }
  },

  beforeMount() {
    this.user = localStorage.user;
  },

  methods: {
    sendPost() {
      this.feed = [{
        id: this.feed.length,
        user: this.user,
        photo: "",
        date: Date.now(),
        post: this.newPost,
        liked: false,
        coments: 0,
        likes: 0,
      }, ...this.feed]

      this.newPost = "";
    },

    likeClick(post) {
      post.liked = !post.liked;

      if (post.liked) {
        post.likes++;
      } else {
        post.likes--;
      };
    },
  },
}
