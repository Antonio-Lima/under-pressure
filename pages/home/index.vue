<template>
  <div>
    <headerUP activePage="home"/>
    <div class="container">
      <div class="others">
        <ul>
          <li>
            <a>Psicólogos</a>
          </li>
          <li>
            <a>Ajuda online</a>
          </li>
        </ul>
      </div>
      <div class="content">

      </div>
      <div class="friends">
        <h2>Amigos online</h2>
        <ul>
          <li>
            <div class="online"></div>
            João
          </li>
          <li>João</li>
          <li>João</li>
          <li>João</li>
          <li>João</li>
          <li>João</li>
          <li>João</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import headerUP from "../../components/header/index.vue";

export default {
  head() {
    return {
      title: "Home"
      }
    },
  data() {
    friends: [
      {
        name: "João",
        active: true
      },
      {
        name: "Antônio",
        active: true
      },
      {
        name:"Carol",
        active: false
      },
      {
        name: "Aleatório22",
        active: false
      }]
  },
  components: {
    headerUP,
  }
}

</script>

<style lang="scss" src="./style.scss"></style>
