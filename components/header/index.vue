<template>
  <div class="header">
    <a href="/home">
      <img src="@/assets/img/Logo-Icon.svg" alt="UP">
    </a>
    <!-- <div class="nav">
      <a href="home" :class="['nav-btn', activePage === 'home' ? 'nav-btn-active': '']">HOME</a>
      <a href="profile" :class="['nav-btn', activePage === 'profile' ? 'nav-btn-active': '']">PERFIL</a>
      <a href="search" :class="['nav-btn', activePage === 'search' ? 'nav-btn-active': '']">PESQUISA</a>
      <a href="psycho" :class="['nav-btn', activePage === 'psycho' ? 'nav-btn-active': '']">PSICÓLOGOS</a>
      <a href="config" :class="['nav-btn', activePage === 'config' ? 'nav-btn-active': '']">CONFIG</a>
    </div> -->
    <a href="/profile" class="btn-user">
      <img src="@/assets/icons/User.svg" alt="">
      <h4>{{ username }}</h4>
    </a>
  </div>
</template>

<script src="./index"></script>

<style lang="scss" src="./style.scss"></style>
