<template>
  <div>
    <headerUP activePage="home" />
    <div class="container">
      <div class="others">
        <ul>
          <li>
            <a href="/about">O que é ansiedade ou depressão</a>
          </li>
          <li>
            <a @click="showModal = true">Psicólogos e Psiquiatras</a>
          </li>
        </ul>
        <div class="ad">
          <h3>Local para propraganda</h3>
        </div>
      </div>
      <feed />
      <div class="friends">
        <h2>Amigos online</h2>
        <friendList :friends="friends" />
        <div class="ad">
          <h3>Local para propraganda</h3>
        </div>
      </div>
    </div>

    <PsychoModal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script src="./index"></script>

<style lang="scss" src="./style.scss"></style>
