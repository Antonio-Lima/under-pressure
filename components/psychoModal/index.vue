<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="profissional">
        <h2>Dra. Maria Alcantara</h2>
        <p>Especialidade: Psiquiatra</p>
        <p>Contato: (21) 98888-7777</p>
      </div>
      <div class="profissional">
        <h2>Elaine do Vale</h2>
        <p>Especialidade: Psicóloga</p>
        <p>Contato: (51) 90000-0000</p>
      </div>
      <div class="profissional">
        <h2>Dr. Paulo Costa</h2>
        <p>Especialidade: Psiquiatra</p>
        <p>Contato: (21) 99999-8888</p>
      </div>
      <div class="profissional">
        <h2>Clínica Pense Bem</h2>
        <p>Especialidade: Em doenças psicosomáticas</p>
        <p>Contato: (21) 92121-3232</p>
        <p>Endereço: Rua da esquina, número 70, Centro, Teresópolis, RJ</p>
      </div>
      <button @click="$emit('close-modal')">Fechar</button>
    </div>
  </div>
</template>

<script src="./index"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
