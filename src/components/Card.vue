<script setup lang="ts">
import { Post } from "../app/types";

interface Props {
  post: Post;
}
defineProps<Props>();
</script>

<template>
  <div
    class="w-full h-full bg-gray-100/10 hover:bg-gray-100/20 rounded p-4 flex flex-col justify-center items-center gap-3 border-2 border-blue-400"
  >
    <p>{{ post.id }}</p>
    <h3 class="text-2xl font-semibold text-center text-blue-400">
      {{ post.title }}
    </h3>
    <p class="text-center">{{ post.body }}</p>
  </div>
</template>
