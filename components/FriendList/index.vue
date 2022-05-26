<template>
  <ul v-if="friends.length > 0">
    <li v-for="friend in friends" :key="friend.id">
      <div v-if="friend.name" :class="['icon', friend.online ? 'icon-online' : 'icon-offline']"></div>
      {{ friend.name }}
    </li>
  </ul>
</template>

<script src="./index"></script>

<style lang="scss" src="./style.scss"></style>
