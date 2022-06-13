<template>
  <div class="main">
    <form @submit.prevent="sendPost" class="newPost">
      <label for="Post">Escreva aqui a sua nova postagem:</label>
      <textarea name="Post" id="new-post" rows="5" v-model="newPost"></textarea>
      <button type="submit">Postar</button>
    </form>
    <div v-for="post in feed" :key="post.id" class="feed">
      <div class="feed-header">
        <div class="user">
          <img src="@/assets/icons/User.svg" alt="" />
          <h2>
            {{ post.user }}
          </h2>
        </div>
      </div>

      <div
        v-if="post.post.includes('>')"
        class="feed-post"
        v-html="post.post"
      ></div>
      <div v-else class="feed-post">
        {{ post.post }}
      </div>
      <p v-if="post.user === user">Curtidas: {{ post.likes }}</p>

      <div v-if="post.lastComent" class="feed-coments">
        <h3>Comentários</h3>
        <div class="coment">
          <div class="coment-header">
            <img src="@/assets/icons/User.svg" alt="" />
            <h4>{{ post.lastComent.user }}</h4>
          </div>
          <div
            v-if="post.lastComent.coment.includes('>')"
            class="coment-content"
            v-html="post.lastComent.coment"
          ></div>
          <div v-else class="coment-content">
            {{ post.lastComent.coment }}
          </div>
        </div>
        <h6>{{ post.coments }} comentário</h6>
      </div>

      <div class="feed-buttons">
        <button :class="post.liked ? 'liked' : ''" @click="likeClick(post)">
          <img src="@/assets/icons/Like.svg" alt="" />
          Curtir
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./index"></script>

<style lang="scss" src="./style.scss" scoped></style>
