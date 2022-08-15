<script setup lang="ts">
import { ref, Ref, onMounted, onUpdated } from "vue";

import Card from "./Card.vue";

import { Post } from "../app/types";
import { httpGetAllPosts } from "../hooks/requests";
import { appStore } from "../app/app-store";

const posts: Ref<Post[]> = ref([]);
const filteredPosts: Ref<Post[]> = ref([]);
const store = appStore();

store.$subscribe(() => {
  if (store.activeUser > 0) {
    filteredPosts.value = posts.value.filter(
      (post) => post.userId === store.activeUser
    );
  } else {
    filteredPosts.value = posts.value;
  }
});

onMounted(async () => {
  posts.value = await httpGetAllPosts();
  filteredPosts.value = posts.value;
});
</script>

<template>
  <div class="grid grid-cols-3 grid-flow-row gap-4">
    <div v-for="post in filteredPosts" class="flex items-center">
      <Card :post="post" />
    </div>
  </div>
</template>
