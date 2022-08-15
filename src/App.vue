<script setup lang="ts">
import UsersList from "./components/UsersList.vue";
import PostsList from "./components/PostsList.vue";
</script>

<template>
  <div class="mx-auto max-w-7xl px-8 py-8">
    <h1
      class="text-6xl font-bold text-center mb-10 text-green-400 pb-4 underline underline-offset-4"
    >
      FaceVue!
    </h1>
    <div class="flex gap-4">
      <div class="">
        <UsersList />
      </div>
      <div class="flex-1">
        <PostsList />
      </div>
    </div>
  </div>
</template>
