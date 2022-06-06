export default {
  name: "feed",

  data() {
    return {
      newPost: "",
      user: "",
      feed: [
      {
        id: 0,
        user: "João",
        photo: "/assets/img/profile/user1.jpeg",
        date: "2022-05-28 14:35",
        post: "<p>Gente de verdade, acessei essa rede social sobre depressão. Caraca, quando eu li os sintomas... Eu preciso de ajuda.</p> <p>Tenho sentido um vazio dentro de mim, uma sensação que eu não sei explicar; Do nada fico triste e não tenho motivo.</p> <p>Foi muito bom ter vindo aqui, pois posso dizer quem sou, sem ser julgado!</p> <p>Muitas das vezes, as pessoas que estão perto não conseguem nos ajudar, elas não endentem o que a gente esta sentindo... Na verdade, nem eu sei o que estou sentindo.</p><p>De verdade, percebi que preciso de ajuda</p>",
        liked: true,
        lastComent: {
          user: "Dra. Maria",
          coment: "<p>João, estive lendo sua postagem. É verdade, muito do que sentimos, não conseguimos explicar, porém com a ajuda de um profissional da área, é possível identificar a causa e orientar o tratamento. Aconselho você a buscar a ajuda de um profissional psicólogo que irá te ajudar nesse momento. O conselho que te dou é: Não desista, insita. Pois você sairá dessa e ajudará a outros também a sair</p>",
        },
        coments: 1,
        likes: 105,
      },
      {
        id: 1,
        user: "Catarina",
        photo: "/assets/img/profile/user1.jpeg",
        date: "2022-05-27 13:44",
        post: "<p>Quero dividir um pouco da minha história com vocês.</p><p>Um dia acordei, normal, como sempre, me aprontei pro trabalho, não estava sentindo nada de diferente. Fui pro trabalho e 15 minutos depois de iniciar as atividades, comecei a sentir meu coração a bater forte, estranho; Sei que tenho um coração que bate no meu peito, porém, ele sempre foi transparente, como se não existisse, mas neste dia, eu percebi ele bater e ele batia forte. Comecei a pensar que algo estranho estava acontecendo comigo. Do nada outra coisa aconteceu, agora eram as minhas mãos, eu não as sentia, elas estavam dormentes e percebi que não estava conseguindo respirar direito também. Meus colégas de trabalho perceberam que algo não estava bem comigo e me levaram para o atendimento médico em um hospital. Fui atendida, medicada, fiz exames e nada foi diagnosticado. Fui para casa tranquila, como se nada tivesse acontecido. No dia seguinte, fui trabalhar, como sempre, trabalhei e terminei meu expediente e fui para casa. Passaram-se 3 dias do primeiro episódio, e tudo aconteceu novamente. Eu pensei: Estou morrendo... Alguma coisa está acontecendo com meu coração... De novo, sem diagnóstico, porém, dessa vez o médico do pronto atendimento me orientou a procurar um psiquiatra. Pensei logo: Esse médico está louco, meu problema é no coração, por que ele esta me mandando ir ao psiquiatra? Não sou louca... Na verdade é isso que todo mundo pensa, psiquiatra é médico para louco, mas estamos errados, somos pessoas que precisamos organizar nossas emoções, as pressões que sofremos e não sabemos fazem mal a nossa psiqué. Hoje sou uma pessoa curada, pois encontrei um profissional, psiquiatra que me ajudou, me orientou; Sugeriu um acompanhamento com psicólogo; Gente, de verdade, sou outra. Consigo controlar minha mente, sei quando estou ansiosa, sei que é coisa da minha mente, mas, eu posso controlar.</p>",
        liked: true,
        lastComent: {
          user: "Paulo (Psicólogo)",
          coment: "<p>Muito bom seu relato, fico feliz que você encontrou bons profissionais que lhe ajudaram a superar sua crise de ansiedade. Continue assim e seu testemunho, vai ajudar muitas outras pessoas. E gente, sem preconceito, psiquiatra é médico que cuida da nossa parte psíquica</p>",
        },
        coments: 1,
        likes: 105,
      },
      {
        id: 2,
        user: "Enzo",
        photo: "/assets/img/profile/user1.jpeg",
        date: "2022-05-27 13:44",
        post: "<p>Oi.</p><p>Tenho 20 anos e estou num conflito. Tenho me sentido muito sozinho, mesmo frequentando os mesmos ambientes que sempre frequentei. É estranho de falar, mas as vezes me sinto único no mundo... Acho que não sou compreendido nem por mim. Há pouco tempo atrás, terminei um relacionamento de 2 anos e nunca achei que fosse terminar, mas acabou... Depois disso, tudo ficou sem sentido, até ir à academia se tornou um peso. Não consigo conversar com ninguém, até em casa me tranco no quarto e fico lá, sem fazer nada, só quero ficar deitado. Já pensei: Viver assim não tem sentido, aí do nada, achei esse site e li os relatos das pessoas, por curiosidade fui ver os sintomas da ansiedade e depressão, e tomei uma decisão hoje, vou procurar um psicólogo, percebi que estou com depressão. De verdade, isso dói e não é pouco.</p> <p>Valeu, pois vocês me incentivaram a procurar ajuda!</p>",
        liked: true,
        lastComent: {
          user: "Elaine (Psicóloga)",
          coment: "<p>Isso aí Enzo! O primeiro passo é esse, procure um profissional em que você tenha identificação; Saiba que dará tudo certo, pois o primeiro passo você já deu, e foi na direção certa.</p>",
        },
        coments: 1,
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
