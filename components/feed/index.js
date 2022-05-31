export default {
  name: "feed",

  data() {
    return {
      newPost: "",
      feed: [
      {
        id: 0,
        user: "Neymar Jr",
        photo: "/assets/img/profile/user1.jpeg",
        date: "2022-05-28 14:35",
        post: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p>",
        lastComent: {
          user: "Sylvester Stallone",
          photo: "@/assets/img/profile/user2.jpg",
          date: "2022-05-29 10:30",
          coment: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p>",
        },
        coments: 15,
        likes: 105,
      },
      {
        id: 1,
        user: "Sylvester Stallone",
        photo: "/assets/img/profile/user1.jpeg",
        date: "2022-05-27 13:44",
        post: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p>",
        coments: 0,
        likes: 105,
      },
      {
        id: 2,
        user: "Dwayne Johnson",
        photo: "/assets/img/profile/user1.jpeg",
        date: "2022-05-27 13:44",
        post: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt distinctio unde quidem doloribus consequatur eligendi accusantium sed, iusto architecto veniam repellendus illum adipisci tempora aperiam temporibus cum nihil aut.</p>",
        coments: 0,
        likes: 105,
      }
    ]
    }
  },

  methods: {
    sendPost() {
      this.feed = [{
        id: this.feed.length,
        user: localStorage.user,
        photo: "",
        date: Date.now(),
        post: this.newPost,
        coments: 0,
        likes: 0,
      }, ...this.feed]

      this.newPost = "";
    }
  },
}
