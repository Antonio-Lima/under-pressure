<template>
  <div class="main">
    <div class="image">
      <img
        src="@/assets/img/Social-Interaction 1.svg"
        alt="Social-Interaction-1"
      />
    </div>
    <div class="login">
      <img src="@/assets/img/Logo.svg" alt="UnderPressure" />
      <form @submit.prevent="tryLogin()">
        <input
          v-model="login.user"
          type="email"
          placeholder="Email:"
          :class="login.user ? 'input-ok' : ''"
          required
        />
        <input
          v-model="login.password"
          type="password"
          placeholder="Senha:"
          :class="login.password ? 'input-ok' : ''"
          required
        />
        <button type="submit" class="btn-login">Entrar</button>
      </form>
      <div class="divisor"></div>
      <!-- <div class="connections">
        <button>
          <img src="../../assets/icons/google.png" alt="Google">
        </button>
        <button>
          <img src="../../assets/icons/facebook.png" alt="Google">
        </button>
        <button>
          <img src="../../assets/icons/apple.png" alt="Google">
        </button>
      </div> -->
      <div class="others">
        <button @click="showModal = true">Novo usuário</button>
      </div>
    </div>
    <Modal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script src="./index"></script>

<style lang="scss" src="./style.scss"></style>
