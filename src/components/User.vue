<template>
  <div class="user">
    <span class="user__wrap">
      <img class="user__icon" src="@/assets/icons/user.png" alt="user" />
    </span>
    
    <span class="user__wrap">{{ user.id }}</span>

    <span class="user__name">{{ user.name }}</span>

    <button class="user__btn" @click="deleteUser(user.id)">
      <img src="@/assets/icons/delete.png" alt="delete" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import { ActionTypes, type User } from '@/types';

defineProps<{
  user: User;
}>();

const store = useStore();
const deleteUser = (id: number) => store.dispatch(ActionTypes.DEL_USER, id);
</script>

<style>
.user {
  display: grid;
  grid-template-columns: 30px 30px auto 30px;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  background: #fff;
}

.user__icon {
  width: 20px;
}

.user__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
}

.user__btn img {
  width: 20px;
}

.user__wrap {
  display: flex;
  align-items: center;
  justify-content: start;
}
</style>
