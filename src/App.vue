<template>
  <main class="main">
    <div class="container">
      <h1 class="title">User list</h1>

      <div class="userList">
        <User v-for="user in userList" :key="user.id" :user="user" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import User from './components/User.vue';

const store = useStore();

const userList = computed(() => store.getters.getUserList);
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background: aliceblue
}

.container {
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  margin: 0 auto;
}

.title {
  margin: 20px 0;
}

.userList {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
