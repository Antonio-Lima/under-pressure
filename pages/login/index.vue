<template>
  <div class="main">
    <div class="image">
      <img src="@/assets/img/Social-Interaction 1.svg" alt="Social-Interaction-1">
    </div>
    <div class="login">
      <img src="@/assets/img/Logo.svg" alt="UnderPressure">
      <form :action="isAuthenticated ? '/home' : '/login'">
        <input v-model="login.user" type="text" placeholder="Usuário:" :class="login.user ? 'input-ok' : ''">
        <input v-model="login.password" type="text"  placeholder="Senha:" :class="login.password ? 'input-ok' : ''">
        <button type="submit" class="btn-login" @click="tryLogin()">Entrar</button>
      </form>
      <div class="divisor"></div>
      <div class="connections">
        <button>
          <img src="../../assets/icons/google.png" alt="Google">
        </button>
        <button>
          <img src="../../assets/icons/facebook.png" alt="Google">
        </button>
        <button>
          <img src="../../assets/icons/apple.png" alt="Google">
        </button>
      </div>
      <div class="others">
        <a href="">Esqueceu sua senha?</a>
        <a href="">Novo usuário</a>
      </div>
    </div>
  </div>
</template>

<script lang="js">

  export default {
    head() {
      return {
        title: "Login"
      }
    },

    data() {
      return {
        isAuthenticated: false,
        login: {
          user: "",
          password: "",
        }
      }
    },

    methods: {
      tryLogin() {
        console.log("Usuário: " + this.login.user);
        console.log("Usuário: " + this.login.password);
        this.isAuthenticated = (this.login.user && this.login.password);
      },
    }
  }
</script>

<style lang="scss" src="./style.scss"></style>
