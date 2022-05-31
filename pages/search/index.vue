<template>
  <div>
    <headerUP activePage="search"/>
    <div class="content">
      <h1>
        Esta página ainda esta em desenvolvimento.
      </h1>
      <img src="@/assets/icons/Work_In_Progress.svg" alt="">
    </div>
  </div>
</template>

<script>
import headerUP from "../../components/header/index.vue";

export default {
  head() {
    return {
      title: "Pesquisa"
    }
  },
  name: "search",
  components: {
    headerUP,
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
