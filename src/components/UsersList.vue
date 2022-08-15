<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";

import { appStore } from "../app/app-store";

import { User } from "../app/types";
import { httpGetAllUsers } from "../hooks/requests";

const users: Ref<User[]> = ref([]);
const store = appStore();

const handleClick = (id: number) => {
  const activeUser = store.activeUser;
  if (activeUser == id) {
    store.setActiveUser(-1);
  } else {
    store.setActiveUser(id);
  }
};

onMounted(async () => {
  users.value = await httpGetAllUsers();
});
</script>

<template>
  <ul class="grid grid-cols-1 grid-flow-row gap-2">
    <li
      @click="handleClick(-1)"
      class="rounded bg-orange-500/40 hover:bg-orange-500/60 transition-opacity cursor-pointer px-4 py-2 text-sm border-2 border-orange-400 font-bold"
    >
      <button>Clear filter</button>
    </li>
    <li
      v-for="user in users"
      @click="handleClick(user.id)"
      class="rounded bg-gray-100/10 hover:bg-gray-100/20 transition-opacity cursor-pointer px-4 py-2 text-sm border-2 border-gray-400"
      :class="{
        'bg-green-500/30': user.id === store.activeUser,
        'hover:bg-green-500/50': user.id === store.activeUser,
      }"
    >
      <button>
        <span>{{ user.id }}</span>
        -
        <span>{{ user.username }}</span>
      </button>
    </li>
  </ul>
</template>
