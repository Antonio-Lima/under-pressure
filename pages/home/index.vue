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
        <friendList :friends="friends"/>
      </div>
    </div>
  </div>
</template>

<script src="./index"></script>

<style lang="scss" src="./style.scss"></style>
