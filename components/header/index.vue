<template>
  <div class="header">
      <img src="@/assets/img/Logo-Icon.svg" alt="UP">
      <div class="nav">
        <a href="home" :class="['nav-btn', activePage === 'home' ? 'nav-btn-active': '']">HOME</a>
        <a href="profile" :class="['nav-btn', activePage === 'profile' ? 'nav-btn-active': '']">PERFIL</a>
        <a href="search" :class="['nav-btn', activePage === 'search' ? 'nav-btn-active': '']">PESQUISA</a>
        <a href="psycho" :class="['nav-btn', activePage === 'psycho' ? 'nav-btn-active': '']">PSICÓLOGOS</a>
        <a href="config" :class="['nav-btn', activePage === 'config' ? 'nav-btn-active': '']">CONFIG</a>
      </div>
    </div>
</template>

<script>
  export default {
    name: "headerUP",
    props: {
      activePage: {
        type: String,
        required: true,
        default: "home"
      }
    }
  }
</script>

<style lang="scss" src="./style.scss"></style>
