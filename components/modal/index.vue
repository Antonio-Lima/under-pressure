<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h1>Novo usuário</h1>
        <button @click="$emit('close-modal')">
          <font-awesome-icon icon="fa-solid fa-circle-xmark" />
        </button>
      </div>
      <div v-if="!creationOk">
        <form @submit.prevent="createUser">
          <label for="username">Nome de usuário</label>
          <input type="text" v-model="form.username" required />
          <label for="email">e-mail</label>
          <input type="email" v-model="form.email" required />
          <label for="password">Senha</label>
          <input type="password" v-model="form.password" required />
          <label for="password">Confirmar senha</label>
          <input type="password" v-model="form.passwordConfirm" required />
          <button @click="createUser">Confirmar</button>
        </form>
      </div>
      <div v-else class="conclude">
        <font-awesome-icon class="icon" icon="fa-solid fa-circle-check" />
        <h1>Cadastro criado com sucesso!</h1>
        <button @click="(creationOk = false), $emit('close-modal')">
          Concluído
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./index"></script>

<style lang="scss" src="./style.scss" scoped></style>
